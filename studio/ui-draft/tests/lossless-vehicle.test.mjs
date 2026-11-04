import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {prepareLosslessVehicle} from '../prepare-lossless-vehicle.mjs';
import sharp from 'sharp';
import {gunzipSync} from 'node:zlib';

function unpack(bytes){const data=gunzipSync(bytes),length=data.readUInt32LE(12);assert.equal(data.readUInt32LE(8),data.length);return {json:JSON.parse(data.subarray(20,20+length)),binary:data.subarray(28+length)}}
test('Lossless image delivery preserves every model and meshopt geometry byte',async()=>{
 const source=await readFile(new URL('../../engine/ego-vehicle-ready.glb.gz',import.meta.url)),result=await prepareLosslessVehicle(source);
 assert.deepEqual(result,await readFile(new URL('../vehicles/x6/model.glb.gz',import.meta.url)),'build artifact must use the same lossless preparation');
 assert.ok(result.length<source.length*.8);
 const a=unpack(source),b=unpack(result),images=new Set(a.json.images.map(image=>image.bufferView));
 for(const key of ['meshes','nodes','scenes','materials','accessors','samplers','animations'])assert.deepEqual(b.json[key],a.json[key]);
 for(let i=0;i<a.json.bufferViews.length;i++){
  if(images.has(i))continue;
  const av=a.json.bufferViews[i],bv=b.json.bufferViews[i];
  for(const [old,next] of [[av,bv],[av.extensions?.EXT_meshopt_compression,bv.extensions?.EXT_meshopt_compression]]){
   if(!old||old.buffer!==0)continue;
   assert.equal(old.byteLength,next.byteLength);assert.deepEqual(a.binary.subarray(old.byteOffset||0,(old.byteOffset||0)+old.byteLength),b.binary.subarray(next.byteOffset||0,(next.byteOffset||0)+next.byteLength));
  }
 }
 assert.ok(b.json.extensionsRequired.includes('EXT_texture_webp'));
 b.json.textures.forEach((texture,i)=>assert.equal(texture.extensions.EXT_texture_webp.source,a.json.textures[i].source));
 for(let i=0;i<a.json.images.length;i++){
  const av=a.json.bufferViews[a.json.images[i].bufferView],bv=b.json.bufferViews[b.json.images[i].bufferView];
  const decode=(binary,view)=>sharp(binary.subarray(view.byteOffset||0,(view.byteOffset||0)+view.byteLength)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const original=await decode(a.binary,av),display=await decode(b.binary,bv);
  assert.deepEqual(display.info,original.info,`image ${i} dimensions and channels`);
  assert.deepEqual(display.data,original.data,`image ${i} decoded RGBA pixels`);
 }
});
