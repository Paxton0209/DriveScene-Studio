import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createIndoorVehicleContact,createIndoorDetails,syncIndoorVehicleContacts,updateIndoorContactOpacity,syncParkingCastShadows} from '../parking-materials.js';

test('Indoor contact includes ambient, chassis and four wheel patches above the ground reflection',()=>{
 const car=new THREE.Group();car.userData.vehicleSpec={length:4.85,width:1.9};
 const contact=createIndoorVehicleContact(car);
 assert.equal(contact.children.length,6);
 const [ambient,chassis,...wheels]=contact.children;
 assert.ok(ambient.geometry.parameters.width>chassis.geometry.parameters.width);
 assert.ok(ambient.material.uniforms.opacity.value<chassis.material.uniforms.opacity.value);
 for(const patch of [chassis,...wheels]){
  assert.ok(patch.material.uniforms.opacity.value>=.70&&patch.material.uniforms.opacity.value<=.85);
  assert.ok(patch.renderOrder>0);assert.equal(patch.material.depthWrite,false);
  assert.ok(patch.position.y>0);
 }
 assert.equal(new Set(wheels.map(w=>`${w.position.x}/${w.position.z}`)).size,4);
});

test('Columns use aligned mirrored footing while wheel-stop AO stays local',()=>{
 const root=new THREE.Group(),column=new THREE.Mesh(new THREE.BoxGeometry(.68,3.2,.68));column.position.set(7.45,1.6,-1.8);column.castShadow=true;
 createIndoorDetails({root,parkingColumns:[column],parkingBays:[{x:-5.9,z:0}]});
 assert.equal(column.castShadow,false);assert.equal(root.children.length,3);
 assert.equal(root.children[0].name,'Column soft mirrored footing');assert.match(root.children[0].material.fragmentShader,/reflectionInverse/);assert.equal(root.children[0].material.uniforms.opacity,undefined);
 assert.equal(root.children[0].position.x,7.45);assert.equal(root.children[0].position.z,-1.8);
});

test('Contact lifecycle reuses live patches and releases replaced vehicle resources only once',()=>{
 const group=new THREE.Group(),ego=new THREE.Group(),traffic=new THREE.Group(),unrelated=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshBasicMaterial());
 group.add(unrelated);ego.position.set(2,.02,-3);ego.rotation.y=.7;
 const first=syncIndoorVehicleContacts(group,ego,[traffic],true),contact=ego.userData.draftIndoorContact,other=traffic.userData.draftIndoorContact;
 assert.deepEqual(first,[ego,traffic]);assert.deepEqual(contact.position.toArray(),[2,0,-3]);assert.equal(contact.rotation.y,.7);
 syncIndoorVehicleContacts(group,ego,[traffic],true);
 assert.equal(group.children.length,3);assert.equal(ego.userData.draftIndoorContact,contact);assert.equal(traffic.userData.draftIndoorContact,other);
 let geometryDisposals=0,materialDisposals=0;
 contact.traverse(o=>{o.geometry?.addEventListener('dispose',()=>geometryDisposals++);o.material?.addEventListener('dispose',()=>materialDisposals++);});
 const replacement=new THREE.Group();replacement.userData.vehicleSpec={length:5,width:2};
 syncIndoorVehicleContacts(group,replacement,[traffic],true);syncIndoorVehicleContacts(group,replacement,[traffic],true);
 assert.equal(contact.parent,null);assert.equal(geometryDisposals,7);assert.equal(materialDisposals,7);
 assert.equal(other.parent,group);assert.equal(unrelated.parent,group);assert.equal(group.children.length,3);
 assert.equal(replacement.userData.draftIndoorContact.children[1].geometry.parameters.height,5*.97);
});

test('Indoor and outdoor contacts preserve visibility and restore contact alpha after occlusion',()=>{
 const group=new THREE.Group(),ego=new THREE.Group(),traffic=new THREE.Group();
 for(const car of [ego,traffic]){const shadow=new THREE.Object3D();shadow.userData.trafficShadow=true;car.add(shadow);}
 const vehicles=syncIndoorVehicleContacts(group,ego,[traffic],true),contact=traffic.userData.draftIndoorContact;
 assert.equal(ego.children[0].visible,true);assert.equal(traffic.children[0].visible,false);
 traffic.userData.draftOcclusionAlpha=.25;updateIndoorContactOpacity(vehicles);
 for(const patch of contact.children)assert.equal(patch.material.uniforms.opacity.value,patch.userData.baseOpacity*.25);
 delete traffic.userData.draftOcclusionAlpha;updateIndoorContactOpacity(vehicles);
 for(const patch of contact.children)assert.equal(patch.material.uniforms.opacity.value,patch.userData.baseOpacity);
 traffic.visible=false;syncIndoorVehicleContacts(group,ego,[traffic],true);assert.equal(contact.visible,false);
 traffic.visible=true;syncIndoorVehicleContacts(group,ego,[traffic],true);assert.equal(contact.visible,true);
 syncIndoorVehicleContacts(group,ego,[traffic],false);assert.equal(contact.visible,true);assert.equal(ego.userData.draftIndoorContact.visible,true);assert.equal(traffic.children[0].visible,false);
 syncIndoorVehicleContacts(group,ego,[traffic],true);assert.equal(contact.visible,true);assert.equal(traffic.userData.draftIndoorContact,contact);assert.equal(traffic.children[0].visible,false);
});


test('Indoor column clones keep the live theme uniform through both transition directions',()=>{
 const tone={value:0},original=new THREE.ShaderMaterial({uniforms:{tone},fragmentShader:'void main(){}'});
 const column=new THREE.Mesh(new THREE.BoxGeometry(.68,3.2,.68),original);
 createIndoorDetails({root:new THREE.Group(),parkingTone:tone,parkingColumns:[column],parkingBays:[]});
 assert.notEqual(column.material,original);
 for(const value of [0,.35,1,.6,0]){tone.value=value;assert.equal(column.material.uniforms.tone.value,value);}
});


test('Indoor shadow strength shares a live axis across vehicle contacts without tinting column mirrors',()=>{
 const strength={value:1},root=new THREE.Group(),column=new THREE.Mesh(new THREE.BoxGeometry()),world={root,parkingColumns:[column],parkingBays:[],draftParkingFinish:{shadow:strength}};
 createIndoorDetails(world);const ego=new THREE.Group(),traffic=new THREE.Group(),group=new THREE.Group();
 const cars=syncIndoorVehicleContacts(group,ego,[traffic],true);updateIndoorContactOpacity(cars,strength);
 const patches=cars.flatMap(car=>car.userData.draftIndoorContact.children);assert.equal(root.children[0].material.uniforms.shadowStrength,undefined);
 for(const patch of patches)assert.equal(patch.material.uniforms.shadowStrength,strength);
 for(const value of [0,.5,1.6,2]){strength.value=value;for(const patch of patches)assert.equal(patch.material.uniforms.shadowStrength.value,value);}
 updateIndoorContactOpacity(cars);for(const car of cars)for(const patch of car.userData.draftIndoorContact.children)assert.equal(patch.material.uniforms.shadowStrength.value,1);
});

test('Independent Indoor vehicle controls preserve environment AO and occlusion alpha',()=>{
 const environment={value:1.07},egoStrength={value:4},trafficStrength={value:0};
 const root=new THREE.Group(),column=new THREE.Mesh(new THREE.BoxGeometry());
 createIndoorDetails({root,parkingColumns:[column],parkingBays:[],draftParkingFinish:{shadow:environment}});
 const ego=new THREE.Group(),traffic=new THREE.Group();traffic.userData.draftOcclusionAlpha=.7;
 const cars=syncIndoorVehicleContacts(new THREE.Group(),ego,[traffic],true);
 for(const values of [[4,0],[0,2],[1.07,1.07]]){
  [egoStrength.value,trafficStrength.value]=values;
  updateIndoorContactOpacity(cars,trafficStrength,egoStrength,ego);
  for(const car of cars)for(const patch of car.userData.draftIndoorContact.children){
   assert.equal(patch.material.uniforms.shadowStrength,car===ego?egoStrength:trafficStrength);
   assert.equal(patch.material.uniforms.opacity.value,patch.userData.baseOpacity*(car===ego?1:.7));
  }
  for(const patch of root.children){assert.equal(patch.material.uniforms.shadowStrength,undefined);assert.equal(environment.value,1.07);}
 }
 updateIndoorContactOpacity(cars);
 for(const car of cars)for(const patch of car.userData.draftIndoorContact.children)assert.equal(patch.material.uniforms.shadowStrength.value,1);
});


test('Indoor ambient expands for both vehicles and resets outdoors without changing chassis or tyres',()=>{
 const group=new THREE.Group(),ego=new THREE.Group(),traffic=new THREE.Group();
 for(const car of [ego,traffic])car.userData.vehicleSpec={length:car===ego?5:4.62,width:car===ego?2:1.9};
 for(const indoor of [true,false,true]){
  for(let i=0;i<10;i++)syncIndoorVehicleContacts(group,ego,[traffic],indoor);
  for(const car of [ego,traffic]){
   const [ambient,...contacts]=car.userData.draftIndoorContact.children;
   assert.deepEqual(ambient.scale.toArray(),[1.1,1.075,1]);
   assert.equal(ambient.geometry.parameters.width,car.userData.vehicleSpec.width*1.42);
   assert.equal(ambient.geometry.parameters.height,car.userData.vehicleSpec.length*1.12);
   for(const contact of contacts)assert.deepEqual(contact.scale.toArray(),[1,1,1]);
   assert.equal(contacts[1].geometry.parameters.width,.46);assert.equal(contacts[1].geometry.parameters.height,.62);
  }
 }
});


test('Light Indoor restores a real shadow receiver while keeping columns and contacts independent',()=>{
 const ego=new THREE.Group(),traffic=new THREE.Group(),body=new THREE.Mesh(new THREE.BoxGeometry()),column=new THREE.Mesh(new THREE.BoxGeometry());traffic.add(body);
 const world={parkingShadow:new THREE.Mesh(new THREE.PlaneGeometry(),new THREE.ShadowMaterial()),renderer:{shadowMap:{needsUpdate:false}},draftThemeTone:{value:0},state:{mode:'light'}};
 syncParkingCastShadows(world,[ego,traffic],true);
 assert.equal(world.parkingShadow.material.opacity,.58);assert.equal(body.castShadow,true);assert.equal(column.castShadow,false);
 assert.equal(world.parkingShadow.material.depthWrite,false);assert.ok(world.parkingShadow.renderOrder<createIndoorVehicleContact(ego).children[0].renderOrder);
 assert.equal(world.renderer.shadowMap.needsUpdate,true);world.renderer.shadowMap.needsUpdate=false;
 syncParkingCastShadows(world,[ego,traffic],true);assert.equal(world.renderer.shadowMap.needsUpdate,false);
 traffic.visible=false;syncParkingCastShadows(world,[ego,traffic],true);assert.equal(world.renderer.shadowMap.needsUpdate,true);
 world.draftThemeTone.value=1;syncParkingCastShadows(world,[ego,traffic],true);assert.equal(world.parkingShadow.material.opacity,.28);
 world.draftParkingFinish={castOpacity:{value:.84}};syncParkingCastShadows(world,[ego,traffic],true);assert.equal(world.parkingShadow.material.opacity,.84);
});


test('Light parking traffic shares calibrated contact coverage while outdoor ego and dark remain fixed',()=>{
 const group=new THREE.Group(),ego=new THREE.Group(),traffic=new THREE.Group(),finish=Object.fromEntries(Object.entries({trafficWidth:1,trafficLength:1.23,trafficOpacity:.71,egoWidth:.99,egoLength:1.39,egoOpacity:.86}).map(([key,value])=>[key,{value}]));
 syncIndoorVehicleContacts(group,ego,[traffic],true,finish,0);
 const indoorScale=traffic.userData.draftIndoorContact.children[0].scale.toArray();
 syncIndoorVehicleContacts(group,ego,[traffic],false,finish,0);
 assert.deepEqual(traffic.userData.draftIndoorContact.children[0].scale.toArray(),indoorScale);
 for(const patch of traffic.userData.draftIndoorContact.children)assert.equal(patch.material.uniforms.coverage.value,.71);
 assert.deepEqual(ego.userData.draftIndoorContact.children[0].scale.toArray(),[1.1,1.075,1]);
 for(const patch of ego.userData.draftIndoorContact.children)assert.equal(patch.material.uniforms.coverage.value,1);
 syncIndoorVehicleContacts(group,ego,[traffic],false,finish,1);
 assert.deepEqual(traffic.userData.draftIndoorContact.children[0].scale.toArray(),[1.1,1.075,1]);
 for(const patch of traffic.userData.draftIndoorContact.children)assert.equal(patch.material.uniforms.coverage.value,1);
});
