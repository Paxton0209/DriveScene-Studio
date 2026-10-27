import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {patchVehicleMaterials,patchLoadPrepared} from '../runtime-patches.mjs';

const moduleURL=new URL('../../engine/vehicle-library/three/vehicle-materials.js',import.meta.url);
const original=await readFile(moduleURL,'utf8');
const absoluteImports=source=>source.replace(/from '([^']+)'/g,(_,path)=>`from '${path.startsWith('.')?new URL(path,moduleURL).href:import.meta.resolve(path)}'`);
const originalPrepare=(await import(moduleURL.href)).prepareVehicleMaterials;
const cooperativePrepare=(await import('data:text/javascript;base64,'+Buffer.from(absoluteImports(patchVehicleMaterials(original))).toString('base64'))).prepareVehicleMaterials;

function fixture(id){
 const group=new THREE.Group(),materials=new Map();
 const roles={xc90:[['body_Material_#2125664766_','body'],['glass_Material_#2125664769_','window'],['tire_Material_#2125664770_','rubber'],['lamp_Material_#2125664758_','tail']],ix:[['Object_36','Kapot11Mtl'],['Object_45','Kapot11Mtl'],['glass','Wind1Mtl'],['tire','Wheel1Mtl'],['lamp','Trunkwind0011Mtl']], 'model-3':[['body','Geohoodsub00021Mtl'],['glass','extwindow'],['lamp','Ln12Mtl']],taycan:[['body','corpus1'],['lamp','red_headlight']],x6:[['Object_5','body'],['glass','window']]};
 for(let repeat=0;repeat<6;repeat++)for(const [name,role]of roles[id]){
  if(!materials.has(role)){const material=new THREE.MeshStandardMaterial({color:'#8899aa',metalness:.2,roughness:.4});material.name=role;materials.set(role,material);}
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(1,.8,1,3,3,3),materials.get(role));mesh.name=name;
  mesh.position.set(repeat%2?-.7:.7,role.includes('Wheel')||role==='rubber'?.35:.65,name==='Object_5'?-2.5:2.4);
  const parent=new THREE.Group();parent.rotation.y=repeat*.005;parent.add(mesh);group.add(parent);
 }
 return group;
}
function stable(value){
 if(typeof value==='string')return value.replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi,'UUID');
 if(Array.isArray(value))return value.map(stable);
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).filter(([key])=>!['metadata','vehicleOwners'].includes(key)).map(([key,v])=>[key,stable(v)]));
 return value;
}
const digest=array=>createHash('sha256').update(Buffer.from(array.buffer,array.byteOffset,array.byteLength)).digest('hex');
function snapshot(model){
 const meshes=[],materialIds=new Map();
 model.traverse(mesh=>{if(!mesh.isMesh)return;const geometry=mesh.geometry;meshes.push({name:mesh.name,matrix:mesh.matrixWorld.elements,cast:mesh.castShadow,receive:mesh.receiveShadow,groups:geometry.groups,index:geometry.index&&digest(geometry.index.array),attributes:Object.fromEntries(Object.entries(geometry.attributes).map(([key,a])=>[key,{itemSize:a.itemSize,normalized:a.normalized,array:digest(a.array)}])),materials:(Array.isArray(mesh.material)?mesh.material:[mesh.material]).map(material=>{if(!materialIds.has(material))materialIds.set(material,materialIds.size);return {identity:materialIds.get(material),value:stable(material.toJSON())};})});});
 return meshes;
}

test('Cooperative preparation preserves geometry, material sharing, surface properties and wheel/lamp metadata for every library model',async()=>{
 for(const id of ['xc90','ix','model-3','taycan','x6']){
  const base=fixture(id),chunked=fixture(id);
  const expected=originalPrepare(base,id,4.95),actual=await cooperativePrepare(chunked,id,4.95);
  assert.deepEqual(actual,expected,id+' wheel and lamp metadata');
  assert.deepEqual(snapshot(chunked),snapshot(base),id+' prepared scene');
 }
});

test('Actual Volvo asset retains every prepared mesh and surface after cooperative preparation',async()=>{
 const compressed=await readFile(new URL('../../engine/vehicle-library/prepared/xc90/model.glb.gz',import.meta.url));
 const bytes=gunzipSync(compressed),data=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);
 const load=async()=>{const {scene}=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(data,'');return scene;};
 const base=await load(),chunked=await load();
 const expected=originalPrepare(base,'xc90',4.95),actual=await cooperativePrepare(chunked,'xc90',4.95);
 assert.deepEqual(actual,expected);
 assert.deepEqual(snapshot(chunked),snapshot(base));
});

test('Preparation yields to queued input between meshes and loader waits for completion',async()=>{
 const descriptor=Object.getOwnPropertyDescriptor(globalThis,'performance');let tick=0;
 Object.defineProperty(globalThis,'performance',{configurable:true,value:{now:()=>tick+=2}});
 try{
  let inputHandled=false;setTimeout(()=>{inputHandled=true;},0);
  const preparing=cooperativePrepare(fixture('xc90'),'xc90',4.95);
  assert.equal(inputHandled,false);await preparing;assert.equal(inputHandled,true);
 }finally{Object.defineProperty(globalThis,'performance',descriptor);}
 const loader=await readFile(new URL('../../engine/vehicle-library/three/load-prepared.js',import.meta.url),'utf8');
 assert.ok(patchLoadPrepared(loader).includes('const surfaces=await prepareVehicleMaterials(model,id,spec.length);'));
 assert.throws(()=>patchVehicleMaterials('changed upstream source'),/baseline mismatch/);
 assert.throws(()=>patchLoadPrepared('changed upstream source'),/baseline mismatch/);
});
