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
  assert.ok(Math.abs(bounds.min+5.235)<1e-9);assert.ok(Math.abs(bounds.max-5.235)<1e-9);
  assert.equal(bounds.min,-bounds.max);
 }
 const resized=activationCarriageway({id:'06'},22.2,7.4);
 assert.ok(Math.abs(resized.min+3.385)<1e-9);assert.ok(Math.abs(resized.max-3.385)<1e-9);
});

test('Road and elevated activation retain their carriageway semantics',()=>{
 for(const [id,width,min,max] of [['02',22.2,.1525,10.785],['09',7.4,.1525,3.385],['03',22.2,-5.235,5.235]]){
  const result=activationCarriageway({id},width);assert.ok(Math.abs(result.min-min)<1e-9);assert.ok(Math.abs(result.max-max)<1e-9);
 }
});

test('Sweep follows inner paint edges across live lane widths and has no saved-profile override',async()=>{
 for(const lanes of [2,4,6])for(const blend of [0,.25,.5,.75,1]){const width=lanes*3.7+(22.2-lanes*3.7)*blend;const {min,max}=activationCarriageway({id:'02',laneCount:lanes},width);assert.equal(min,.105+.095/2);assert.ok(Math.abs(max-(width/2-.25-.13/2))<1e-10);}
 const profile=await import('node:fs/promises').then(fs=>fs.readFile(new URL('../saved-preview/frame-profile.js',import.meta.url),'utf8'));
 assert.ok(!profile.includes('uniforms.bounds'),'the saved material profile must not overwrite geometry-derived boundaries');
});
