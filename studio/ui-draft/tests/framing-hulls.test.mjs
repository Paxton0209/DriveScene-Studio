import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {prepareVehicleMaterials} from '../../engine/vehicle-library/three/vehicle-materials.js';
import {vehicleFrame} from '../../engine/framing.js';

const hulls=JSON.parse(await readFile(new URL('../vehicles/framing-hulls.json',import.meta.url),'utf8'));

for(const [id,length] of [['ix',4.95],['xc90',4.95],['model-3',4.72]])test(`${id} prepared hulls preserve full-mesh projection through parking viewpoints and turns`,async()=>{
 const bytes=gunzipSync(await readFile(new URL(`../vehicles/${id}/model.glb.gz`,import.meta.url)));
 const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
 loader.register(parser=>({name:'geometry-test',beforeRoot(){
  const get=parser.getDependency;parser.getDependency=function(type,index){return type==='texture'?Promise.resolve(null):get.call(this,type,index);};
 }}));
 const {scene:model}=await loader.parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
 model.updateMatrixWorld(true);const size=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
 model.rotation.y+=id==='model-3'?Math.PI/2:(size.x>size.z?Math.PI/2:Math.PI);
 if(['ix','xc90'].includes(id))model.rotation.y+=Math.PI;
 model.scale.multiplyScalar(length/Math.max(size.x,size.z));model.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3());
 model.position.sub(new THREE.Vector3(center.x,box.min.y,center.z));model.updateMatrixWorld(true);
 prepareVehicleMaterials(model,id,length);
 const car=new THREE.Group();car.add(model);const meshes=[];model.traverse(mesh=>{if(mesh.isMesh)meshes.push(mesh);});
 assert.equal(meshes.length,hulls[id].length);
 let fullCount=0,hullCount=0;
 meshes.forEach((mesh,index)=>{
  const expected=hulls[id][index],position=mesh.geometry.attributes.position;
  assert.equal(mesh.name,expected.name);assert.equal(position.count,expected.count);
  assert.ok(expected.indices.every(index=>Number.isInteger(index)&&index>=0&&index<position.count));
  if(expected.indices.length)mesh.geometry.userData.frameIndices=expected.indices;
  fullCount+=position.count;hullCount+=expected.indices.length||position.count;
 });
 assert.ok(hullCount<fullCount*.15,`${hullCount}/${fullCount} position checks`);
 const camera=new THREE.PerspectiveCamera(40,16/9,.1,1000);
 for(const yaw of [-Math.PI/2,0,Math.PI/2])for(const [height,z] of [[8.48,23],[24.55,18.41],[30,.03]]){
  car.rotation.y=yaw;car.position.set(5.9,.02,-3.6);car.updateMatrixWorld(true);
  camera.position.set(5.9+Math.sin(yaw)*z,height,-3.6+Math.cos(yaw)*z);camera.lookAt(5.9,.85,-3.6);camera.setViewOffset(1920,1080,13,-37,1920,1080);camera.updateMatrixWorld(true);
  const full=vehicleFrame(car,camera,true),reduced=vehicleFrame(car,camera);
  for(const key of Object.keys(full))assert.ok(Math.abs(full[key]-reduced[key])<1e-9,`${id} ${yaw}/${height} ${key}: ${full[key]} vs ${reduced[key]}`);
 }
});
