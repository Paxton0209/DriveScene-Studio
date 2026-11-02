import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createFramingData} from '../framing-data.js';
import {createParkingNormalData} from '../saved-preview/parking-material-structure.mjs';

const bytes=value=>new TextEncoder().encode(JSON.stringify(value)).buffer;
const base='https://example.test/studio/ui-draft/runtime.bundle.js';

test('Framing loader consumes the selected parent request once and deduplicates each model independently',async()=>{
 const url=new URL('./vehicles/model-3/framing-hull.json?v=cold-20261102',base).href;
 const requests=new Map([[url,Promise.resolve(bytes([{name:'body',indices:[0,3]}]))]]),calls=[];
 const load=createFramingData({base,parentRequests:()=>requests,fetch:async url=>{calls.push(url);return new Response(bytes([{name:'other'}]))}});
 const first=load('model-3');assert.equal(load('model-3'),first);
 assert.deepEqual(await first,[{name:'body',indices:[0,3]}]);assert.equal(requests.size,0);assert.deepEqual(calls,[]);
 assert.deepEqual(await load('ix'),[{name:'other'}]);assert.equal(calls.length,1);assert.ok(calls[0].includes('/ix/'));
 assert.equal(await load('unknown'),null);assert.equal(calls.length,1);
});

test('Framing request failure retains full-mesh fallback and allows a later retry',async()=>{
 let calls=0;const requests=new Map([[new URL('./vehicles/xc90/framing-hull.json?v=cold-20261102',base).href,Promise.reject(Error('early failed'))]]);
 const load=createFramingData({base,parentRequests:()=>requests,fetch:async()=>{calls++;return calls===1?new Response('failed',{status:503}):new Response(bytes([{name:'body'}]))}});
 assert.equal(await load('xc90'),null);assert.equal(calls,1);
 assert.deepEqual(await load('xc90'),[{name:'body'}]);assert.equal(calls,2);
 let valid=false;
 const malformed=createFramingData({base,parentRequests:()=>{throw Error('parent unavailable')},fetch:async()=>new Response(valid?'[]':'broken')});
 assert.equal(await malformed('x6'),null);valid=true;assert.deepEqual(await malformed('x6'),[]);
});

test('Per-model delivery preserves every approved framing index, mesh name and vertex count',async()=>{
 const original=JSON.parse(await readFile(new URL('../vehicles/framing-hulls.json',import.meta.url),'utf8'));
 original.x6=(await import('../../engine/vehicle-frame-hull.js')).default;
 for(const [id,hulls]of Object.entries(original)){
  const delivered=JSON.parse(await readFile(new URL(`../vehicles/${id}/framing-hull.json`,import.meta.url),'utf8'));
  assert.deepEqual(delivered,hulls,id);
 }
});

test('Parking normals stay unloaded until needed, share preparation and retain typed array identity',async()=>{
 let calls=0,release;const payload={body:new Float32Array([.25,-.5,1])};
 const state=createParkingNormalData(()=>{calls++;return new Promise(done=>release=done)});
 assert.equal(calls,0);assert.equal(state.data,undefined);
 const a=state.prepare(),b=state.prepare();assert.equal(a,b);await Promise.resolve();assert.equal(calls,1);assert.equal(state.data,undefined);
 release({default:payload});assert.equal(await a,payload);assert.equal(state.data,payload);assert.equal(state.data.body,payload.body);
 await state.prepare();assert.equal(calls,1);
});

test('Parking preparation errors remain explicit and a subsequent preparation can recover',async()=>{
 let calls=0;const payload={body:new Float32Array([1,0,0])};
 const state=createParkingNormalData(async()=>{if(++calls===1)throw Error('network failed');return {default:payload}});
 await assert.rejects(state.prepare(),/network failed/);assert.equal(state.data,undefined);
 assert.equal(await state.prepare(),payload);assert.equal(calls,2);
});
