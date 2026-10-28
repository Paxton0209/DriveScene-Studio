import test from 'node:test';
import assert from 'node:assert/strict';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';
let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
const {contents}=await load({path:new URL('../../engine/activation-sweep.js',import.meta.url).pathname});
const runnable=contents.replace("from 'three'",`from '${import.meta.resolve('three')}'`);
const {activationCarriageway}=await import('data:text/javascript;base64,'+Buffer.from(runnable).toString('base64'));

test('Both ramp directions cover the centred physical road independently of the previous lane layout',()=>{
 for(const id of ['06','07'])for(const previousWidth of [7.4,14.8,22.2,undefined]){
  const bounds=activationCarriageway({id,laneCount:6},previousWidth,11.1);
  assert.ok(Math.abs(bounds.min+5.3)<1e-9);assert.ok(Math.abs(bounds.max-5.3)<1e-9);
  assert.equal(bounds.min,-bounds.max);
 }
 const resized=activationCarriageway({id:'06'},22.2,7.4);
 assert.ok(Math.abs(resized.min+3.45)<1e-9);assert.ok(Math.abs(resized.max-3.45)<1e-9);
});

test('Road and elevated activation retain their carriageway semantics',()=>{
 for(const [id,width,min,max] of [['02',22.2,.25,10.85],['09',7.4,.25,3.45],['03',22.2,-5.55,5.55]]){
  const result=activationCarriageway({id},width);assert.ok(Math.abs(result.min-min)<1e-9);assert.ok(Math.abs(result.max-max)<1e-9);
 }
});
