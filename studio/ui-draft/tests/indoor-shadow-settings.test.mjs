import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {indoorShadowValues,syncIndoorShadowLight,syncIndoorReflectionResolution,syncParkingShadowPrecision} from '../indoor-shadow-settings.js';
import {syncIndoorVehicleContacts,updateIndoorContactOpacity,syncParkingCastShadows} from '../parking-materials.js';

test('Fixed Indoor endpoints preserve the selected theme values independently of retired tuning storage',()=>{
 const dark=indoorShadowValues('dark'),light=indoorShadowValues('light');
 assert.deepEqual(dark,{egoShadow:3.21,trafficShadow:1.27,egoOpacity:1,trafficOpacity:1,egoWidth:1,egoLength:1,trafficWidth:1,trafficLength:1,castOpacity:.50,castSoftness:2.9,reflectionGain:2.7,reflectionRange:1.5,reflectionBlur:2.25});
 assert.deepEqual(light,{egoShadow:3.5,trafficShadow:1.54,egoOpacity:.86,trafficOpacity:.71,egoWidth:.99,egoLength:1.39,trafficWidth:1,trafficLength:1.23,castOpacity:.50,castSoftness:2.9,reflectionGain:3,reflectionRange:1.5,reflectionBlur:4});
 assert.deepEqual(indoorShadowValues('light',{egoShadow:0}),light);
 dark.egoShadow=0;assert.equal(indoorShadowValues('dark').egoShadow,3.21);
});

test('Footprint changes only ambient spread, final coverage remains separate from nonlinear strength and occlusion',()=>{
 const ego=new THREE.Group(),traffic=new THREE.Group(),group=new THREE.Group();
 const finish={egoWidth:{value:1.6},egoLength:{value:.7},egoOpacity:{value:.4},trafficWidth:{value:.6},trafficLength:{value:1.4},trafficOpacity:{value:.8}};
 for(let i=0;i<20;i++)syncIndoorVehicleContacts(group,ego,[traffic],true,finish);
 assert.deepEqual(ego.userData.draftIndoorContact.children[0].scale.toArray(),[1.1*1.6,1.075*.7,1]);
 assert.deepEqual(traffic.userData.draftIndoorContact.children[0].scale.toArray(),[1.1*.6,1.075*1.4,1]);
 traffic.userData.draftOcclusionAlpha=.7;const es={value:3},ts={value:1.3};updateIndoorContactOpacity([ego,traffic],ts,es,ego);
 for(const [car,coverage,strength] of [[ego,.4,es],[traffic,.8,ts]])for(const patch of car.userData.draftIndoorContact.children){
  assert.equal(patch.material.uniforms.coverage.value,coverage);assert.equal(patch.material.uniforms.shadowStrength,strength);
  if(patch!==car.userData.draftIndoorContact.children[0])assert.deepEqual(patch.scale.toArray(),[1,1,1]);
 }
 syncIndoorVehicleContacts(group,ego,[traffic],false,finish);
 for(const car of [ego,traffic])for(const patch of car.userData.draftIndoorContact.children)assert.equal(patch.material.uniforms.coverage.value,1);
});

test('Light-source softness invalidates the real map only when needed and restores the preceding road light',()=>{
 const world={sun:{shadow:{radius:3.5}},renderer:{shadowMap:{needsUpdate:false}},draftParkingFinish:{castSoftness:{value:5}}};
 syncIndoorShadowLight(world,true);assert.equal(world.sun.shadow.radius,5);assert.equal(world.renderer.shadowMap.needsUpdate,true);
 world.renderer.shadowMap.needsUpdate=false;syncIndoorShadowLight(world,true);assert.equal(world.renderer.shadowMap.needsUpdate,false);
 syncIndoorShadowLight(world,false);assert.equal(world.sun.shadow.radius,3.5);
 syncIndoorShadowLight(world,true);world.sun.shadow.radius=7;syncIndoorShadowLight(world,false);assert.equal(world.sun.shadow.radius,7);
});

test('Indoor VSM receiver cannot shadow itself and does not replace the outdoor receiver depth',()=>{
 const receiverDepth=new THREE.MeshDepthMaterial(),outdoorDepth=new THREE.MeshDepthMaterial();
 const world={state:{mode:'light'},receiverDepth,parkingShadow:new THREE.Mesh(new THREE.PlaneGeometry(1000,1000),new THREE.ShadowMaterial()),renderer:{shadowMap:{needsUpdate:false}},draftParkingFinish:{castOpacity:{value:.76}}};
 const car=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshBasicMaterial());
 const ego=new THREE.Group(),body=car.clone(),plate=car.clone();body.castShadow=true;plate.castShadow=false;ego.add(body,plate);world.car=ego;
 syncParkingCastShadows(world,[ego,car],true);
 assert.equal(world.parkingShadow.customDepthMaterial,receiverDepth);
 assert.equal(world.parkingShadow.material.opacity,.76);
 assert.equal(car.castShadow,true);
 assert.equal(body.castShadow,true);assert.equal(plate.castShadow,false);
 assert.equal(world.renderer.shadowMap.needsUpdate,true);
 world.parkingShadow=new THREE.Mesh();world.parkingShadow.customDepthMaterial=outdoorDepth;
 syncParkingCastShadows(world,[ego,car],false);
 assert.equal(world.parkingShadow.customDepthMaterial,outdoorDepth);
 assert.equal(plate.castShadow,false);
});

test('Indoor light capture follows the live raster, restores half resolution on exit and avoids reallocating steady frames',()=>{
 const target=new THREE.WebGLRenderTarget(840,473),world={width:1680,height:945,carMirror:{getRenderTarget:()=>target},carReflectionKey:'cached',groundReflectionKey:'cached'};
 syncIndoorReflectionResolution(world,true);assert.deepEqual([target.width,target.height],[1680,945]);assert.equal(world.carReflectionKey,null);
 world.carReflectionKey='unchanged';syncIndoorReflectionResolution(world,true);assert.equal(world.carReflectionKey,'unchanged');
 world.width=1920;world.height=1080;syncIndoorReflectionResolution(world,true);assert.deepEqual([target.width,target.height],[1920,1080]);
 syncIndoorReflectionResolution(world,false);assert.deepEqual([target.width,target.height],[960,540]);target.dispose();
});

test('Chassis footprint stays coherent in both themes and both parking environments without changing tyres',()=>{
 const ego=new THREE.Group(),traffic=new THREE.Group(),group=new THREE.Group();
 for(const tone of [0,.35,1,0]){
  syncIndoorVehicleContacts(group,ego,[traffic],true,{},tone);
  for(const car of [ego,traffic]){const patches=car.userData.draftIndoorContact.children;assert.equal(patches[1].material.uniforms.footprint.value,1);assert.equal(patches[2].material.uniforms.footprint.value,0);}
 }
 syncIndoorVehicleContacts(group,ego,[traffic],false,{},0);
 for(const car of [ego,traffic])assert.equal(car.userData.draftIndoorContact.children[1].material.uniforms.footprint.value,1);
});

test('Parking shadow precision restores the road frustum and allocation without steady reallocations',()=>{
 const camera=new THREE.OrthographicCamera(-72,72,90,-72,1,260),shadow={camera,mapSize:new THREE.Vector2(2048,2048)},world={sun:{shadow},renderer:{shadowMap:{needsUpdate:false}}};
 syncParkingShadowPrecision(world,true);assert.equal(camera.left,-36);assert.equal(shadow.mapSize.x,4096);
 world.renderer.shadowMap.needsUpdate=false;syncParkingShadowPrecision(world,true);assert.equal(world.renderer.shadowMap.needsUpdate,false);
 syncParkingShadowPrecision(world,false);assert.deepEqual([camera.left,camera.right,camera.top,camera.bottom],[-72,72,90,-72]);assert.equal(shadow.mapSize.x,2048);
});
