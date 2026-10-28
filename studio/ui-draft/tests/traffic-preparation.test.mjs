import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
import {consolidateTrafficRear,refineTrafficBody,compactTrafficAttributes} from '../traffic-surface.js';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';

const originalBytes=await readFile(new URL('../../engine/assets/traffic-model-y.json.gz',import.meta.url));
const preparedBytes=await readFile(new URL('../traffic-model-y.prepared.json.gz',import.meta.url));
// JSON preserves every finite value except the sign of zero; geometry treats both zeros identically.
const jsonValues=value=>JSON.parse(JSON.stringify(value));

test('Build-prepared traffic retains all metadata, indices and exact rendered attribute bytes',()=>{
 const expected=jsonValues(refineTrafficBody(consolidateTrafficRear(JSON.parse(gunzipSync(originalBytes))))),actual=JSON.parse(gunzipSync(preparedBytes));
 const attributeBytes=data=>data.parts.map(part=>Object.fromEntries(Object.entries(part.attributes).map(([name,array])=>[name,Buffer.from(new Float32Array(array).buffer)])));
 assert.deepEqual(attributeBytes(actual),attributeBytes(expected));
 const structure=data=>({...data,parts:data.parts.map(({attributes,...part})=>({...part,attributes:Object.fromEntries(Object.entries(attributes).map(([name,array])=>[name,array.length]))}))});
 assert.deepEqual(structure(actual),structure(expected));
 assert.ok(preparedBytes.length<2_800_000,'redundant Float64 decimal text must not inflate the prepared asset');
});

test('Attribute compaction preserves Float32 boundary values without touching metadata or topology',()=>{
 const values=[0,-0,1e-45,-1e-45,3.4028234663852886e38,1.0000000596046448,-1.0000000596046448,.12345678901234567,16777217,1e-30];
 const data={spec:{length:.12345678901234567},parts:[{attributes:{position:[...values]},indices:[0,1,2]}]},before=structuredClone(data);
 compactTrafficAttributes(data);
 assert.deepEqual(Buffer.from(new Float32Array(data.parts[0].attributes.position).buffer),Buffer.from(new Float32Array(values).buffer));
 assert.deepEqual(data.spec,before.spec);assert.deepEqual(data.parts[0].indices,before.parts[0].indices);
});

test('Default traffic loading skips body preparation while explicit original bytes retain identical geometry and appearance',async()=>{
 let load;
 isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
 const path=new URL('../../engine/traffic-model.js',import.meta.url);
 const {contents}=await load({path:path.pathname});
 const source=contents
  .replace("from './asset-request.js'",`from '${new URL('../../engine/asset-request.js',import.meta.url).href}'`)
  .replace("from 'three'",`from '${import.meta.resolve('three')}'`)
  .replace("from 'three/addons/utils/BufferGeometryUtils.js'",`from '${import.meta.resolve('three/addons/utils/BufferGeometryUtils.js')}'`)
  .replace("from '../ui-draft/road-shadow-settings.js'",`from '${new URL('../road-shadow-settings.js',import.meta.url).href}'`)
  .replace("import {consolidateTrafficRear,refineTrafficBody} from '../ui-draft/traffic-surface.js';",`
   import {consolidateTrafficRear,refineTrafficBody as refine} from '${new URL('../traffic-surface.js',import.meta.url).href}';
   export let refinements=0;function refineTrafficBody(data){refinements++;return refine(data);}`)
  .replaceAll('import.meta.url',JSON.stringify(path.href));
 const module=await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
 const fetchBefore=globalThis.fetch,urls=[];
 globalThis.fetch=async url=>{urls.push(String(url));return new Response(preparedBytes);};
 try{
  globalThis.__draftTrafficRequest=Promise.resolve(preparedBytes);
  await module.readyTrafficModel(null,'prefetched');assert.equal(urls.length,0);assert.equal(globalThis.__draftTrafficRequest,undefined);
  globalThis.__draftTrafficRequest=Promise.reject(Error('early request failed'));
  await module.readyTrafficModel(null,'prepared');
  assert.equal(module.refinements,0,'the normal browser path must not repeat static geometry work');
  assert.equal(urls.length,1);
  assert.equal(new URL(urls[0]).pathname,new URL('../traffic-model-y.prepared.json.gz',import.meta.url).pathname);
  await module.readyTrafficModel(originalBytes,'explicit');
  assert.equal(module.refinements,1,'original supplied bytes still use the existing preparation');
  assert.equal(urls.length,1,'supplied bytes do not fetch');
  const summarize=car=>car.children.map(mesh=>{
   const material=mesh.material.toJSON();delete material.uuid;
   return {name:mesh.name,position:mesh.position.toArray(),rotation:mesh.rotation.toArray(),scale:mesh.scale.toArray(),
    index:mesh.geometry.index&&Array.from(mesh.geometry.index.array),
    attributes:Object.fromEntries(Object.entries(mesh.geometry.attributes).map(([name,a])=>[name,{itemSize:a.itemSize,normalized:a.normalized,array:Array.from(a.array)}])),
    material,shader:String(mesh.material.onBeforeCompile),programKey:mesh.material.customProgramCacheKey()};
  });
  for(const dark of [false,true])for(const opacity of [1,.9]){
   const a=module.createTrafficVehicle('prepared'),b=module.createTrafficVehicle('explicit');
   module.setTrafficAppearance(a,dark,opacity);module.setTrafficAppearance(b,dark,opacity);
   assert.deepEqual(jsonValues(summarize(a)),jsonValues(summarize(b)));
  }
 }finally{globalThis.fetch=fetchBefore;}
});
