import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {gunzipSync,gzipSync} from 'node:zlib';
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {MeshoptDecoder} from 'meshoptimizer';
import {decodeTrafficPayload} from '../traffic-payload.js';

await MeshoptDecoder.ready;
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder});
function bounds(doc){
 const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
 for(const mesh of doc.getRoot().listMeshes())for(const primitive of mesh.listPrimitives()){
  const position=primitive.getAttribute('POSITION'),point=[];
  assert.ok(position.getCount()>0);
  for(let index=0;index<position.getCount();index++){
   position.getElement(index,point);
   point.forEach((value,axis)=>{assert.ok(Number.isFinite(value));min[axis]=Math.min(min[axis],value);max[axis]=Math.max(max[axis],value)});
  }
 }
 return {min,max};
}
test('Display models retain named body parts, finite geometry and source dimensions within 0.3%',async()=>{
 const manifest=JSON.parse(await readFile(new URL('../vehicles/display-manifest.json',import.meta.url)));
 for(const id of ['model-3','ix','xc90','x6']){
  const source=await readFile(new URL(id==='x6'?'../../engine/ego-vehicle-ready.glb.gz':`../../engine/vehicle-library/prepared/${id}/model.glb.gz`,import.meta.url));
  const result=await readFile(new URL(`../vehicles/${id}/model.glb.gz`,import.meta.url));
  const original=await io.readBinary(gunzipSync(source)),display=await io.readBinary(gunzipSync(result));
  const a=bounds(original),b=bounds(display),extent=Math.max(...a.max.map((value,index)=>value-a.min[index]));
  for(let axis=0;axis<3;axis++)for(const key of ['min','max'])assert.ok(Math.abs(a[key][axis]-b[key][axis])<extent*.003,`${id} ${key}/${axis}`);
  const names=new Set(display.getRoot().listNodes().map(node=>node.getName()));
  for(const node of original.getRoot().listNodes())if(node.getMesh())assert.ok(names.has(node.getName()),`${id}: ${node.getName()}`);
  assert.equal(result.length,manifest[id].bytes);assert.deepEqual(result,source);
 }
});

test('Traffic binary preserves every approved vertex, triangle and material normal',async()=>{
 const prepared=JSON.parse(gunzipSync(await readFile(new URL('../traffic-model-y.prepared.json.gz',import.meta.url))));
 const packed=gunzipSync(await readFile(new URL('../traffic-model-y.prepared.bin.gz',import.meta.url)));
 const display=decodeTrafficPayload(Uint8Array.from(packed).buffer);
 assert.deepEqual(display.spec,prepared.spec);
 for(const part of display.parts){
  const source=prepared.parts.find(candidate=>candidate.role===part.role);
  assert.deepEqual(Array.from(part.indices),source.indices);
  for(const [name,values] of Object.entries(source.attributes))assert.deepEqual(Array.from(part.attributes[name],value=>value===0?0:value),Array.from(new Float32Array(values),value=>value===0?0:value));
 }
});
