import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {prepareVehicleMaterials} from '../vehicle-library/three/vehicle-materials.js';
import {disposeVehicle} from '../dispose-vehicle.js';
import {addModel3Plate,neutralizePlate} from '../vehicle-library/three/neutral-plate.js';

test('blank plates are opaque neutral gray with no texture, emission or vertex tint',()=>{
 const material=new THREE.MeshPhysicalMaterial({map:new THREE.Texture(),normalMap:new THREE.Texture(),emissive:'#ffffff',transparent:true,opacity:.5,vertexColors:true});neutralizePlate(material);
 assert.equal(material.color.getHexString(),'30343a');assert.equal(material.map,null);assert.equal(material.normalMap,null);assert.equal(material.emissive.getHex(),0);assert.equal(material.vertexColors,false);assert.equal(material.transparent,false);assert.equal(material.opacity,1);assert.equal(material.userData.surfaceRole,'plate');
});

test('Model 3 plate follows the rear surface without changing its source geometry',()=>{
 const model=new THREE.Group(),body=new THREE.Mesh(new THREE.PlaneGeometry(1,.5,8,4),new THREE.MeshStandardMaterial());body.name='Object_11';body.position.set(0,.735,2.258);body.rotation.x=-.273;model.add(body);
 const geometry=body.geometry,normals=geometry.attributes.normal;addModel3Plate(model);addModel3Plate(model);
 const plate=model.getObjectByName('Neutral rear plate');assert.ok(plate.geometry.attributes.position.count>0);assert.equal(model.children.length,2);assert.equal(body.geometry,geometry);assert.equal(body.geometry.attributes.normal,normals);assert.equal(plate.material.color.getHexString(),'30343a');assert.equal(plate.material.polygonOffset,true);
 const bounds=new THREE.Box3().setFromObject(plate),size=bounds.getSize(new THREE.Vector3());assert.ok(Math.abs(size.x-.46)<.001);assert.ok(Math.abs(bounds.getCenter(new THREE.Vector3()).y-.735)<.001);disposeVehicle(model);
});

test('neutral plate faces remove texture noise without changing the original shape',()=>{
 for(const [id,name,materialName]of [['xc90','desirefxme_136_Material_#2125664774_0','Material_2125664754'],['ix','Object_49','Vnehka0101Mtl']]){
  const root=new THREE.Group(),material=new THREE.MeshStandardMaterial({map:new THREE.Texture()});material.name=materialName;
  const geometry=new THREE.BoxGeometry(.51,.11,.01),mesh=new THREE.Mesh(geometry,material);mesh.name=name;root.add(mesh);
  prepareVehicleMaterials(root,id,4.95);assert.equal(mesh.material.userData.surfaceRole,'plate');assert.equal(mesh.material.map,null);assert.equal(mesh.material.color.getHexString(),'30343a');assert.equal(mesh.geometry,geometry);assert.equal(mesh.material.normalMap,null);disposeVehicle(root);
 }
});

test('Model 3 keeps lower trim separate from paint and preserves authored normals',()=>{
 const root=new THREE.Group(),parts={};
 for(const name of ['Geohoodsub00021Mtl','Georimblurlfsub01Mtl','Georimblurlfsub021Mtl']){
  const material=new THREE.MeshStandardMaterial();material.name=name;
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(),material);parts[name]={mesh,normals:mesh.geometry.attributes.normal};root.add(mesh);
 }
 prepareVehicleMaterials(root,'model-3',4.72);
 const paint=parts.Geohoodsub00021Mtl.mesh.material,trim=parts.Georimblurlfsub01Mtl.mesh.material,rim=parts.Georimblurlfsub021Mtl.mesh.material;
 assert.equal(paint.userData.surfaceRole,'paint');assert.ok(paint.isMeshPhysicalMaterial);assert.ok(paint.envMap?.isTexture);
 assert.equal(trim.userData.surfaceRole,'trim');assert.equal(trim.color.getHexString(),'24282d');assert.equal(trim.envMap,null);
 assert.equal(rim.userData.surfaceRole,'rim');
 for(const {mesh,normals}of Object.values(parts))assert.equal(mesh.geometry.attributes.normal,normals);
 let disposed=false;paint.envMap.addEventListener('dispose',()=>disposed=true);disposeVehicle(root);assert.equal(disposed,true);
});

test('identical paint reflections stay alive until every vehicle releases them',()=>{
 const make=(id,name)=>{const root=new THREE.Group(),material=new THREE.MeshStandardMaterial();material.name=name;root.add(new THREE.Mesh(new THREE.BoxGeometry(),material));prepareVehicleMaterials(root,id,4.72);return root;};
 const model3=make('model-3','Geohoodsub00021Mtl'),ix=make('ix','Kapot11Mtl'),reflection=model3.children[0].material.envMap;let disposed=0;reflection.addEventListener('dispose',()=>disposed++);
 assert.equal(ix.children[0].material.envMap,reflection);disposeVehicle(model3);assert.equal(disposed,0);disposeVehicle(ix);assert.equal(disposed,1);
});

test('iX textured wheel rims stay opaque with depth writes and retain their texture',()=>{
 const root=new THREE.Group(),map=new THREE.Texture(),material=new THREE.MeshStandardMaterial({map,transparent:true});material.name='Wheel0011Mtl';
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(),material);root.add(mesh);prepareVehicleMaterials(root,'ix',4.95);
 assert.equal(mesh.material.transparent,false);assert.equal(mesh.material.opacity,1);assert.equal(mesh.material.depthWrite,true);assert.equal(mesh.material.map,map);assert.equal(mesh.material.emissiveMap,null);disposeVehicle(root);
});

test('iX lower rear highlights are isolated from the remaining trim',()=>{
 for(const [name,materialName]of [['Object_36','Rpbsw0031Mtl'],['Object_45','Vnehka0041Mtl']]){
  const root=new THREE.Group(),geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute([-.5,.38,2.4,.5,.38,2.4,0,.42,2.4,-.5,1,-2.4,.5,1,-2.4,0,1.1,-2.4],3));geometry.setIndex([0,1,2,3,4,5]);geometry.computeVertexNormals();
  const positions=geometry.attributes.position.array.slice(),material=new THREE.MeshStandardMaterial({emissive:'#ffffff',map:new THREE.Texture()});material.name=materialName;const mesh=new THREE.Mesh(geometry,material);mesh.name=name;root.add(mesh);prepareVehicleMaterials(root,'ix',4.95);
  assert.equal(mesh.material.length,2);assert.equal(mesh.material[1].userData.surfaceRole,'trim');assert.equal(mesh.material[1].color.getHexString(),'292d33');assert.equal(mesh.material[1].emissive.getHex(),0);assert.equal(mesh.material[1].map,null);assert.deepEqual(mesh.geometry.attributes.position.array,positions);assert.equal(mesh.geometry.groups[1].count,3);disposeVehicle(root);
 }
});
