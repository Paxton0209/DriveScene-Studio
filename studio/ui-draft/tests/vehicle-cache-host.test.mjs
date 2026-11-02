import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {patchApp} from '../runtime-patches.mjs';
import {createVehicleCache} from '../../engine/vehicle-cache.js';

async function capacity(hostWidth,canvasWidth){
 const source=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
 const expression=source.match(/maxEntries:([^}\n]+)\}/)[1];
 const media=width=>query=>{assert.equal(query,'(max-width:760px)');return {matches:width<=760};};
 return new Function('window','matchMedia',`return ${expression}`)({parent:{matchMedia:media(hostWidth)}},media(canvasWidth));
}

test('Desktop narrow embedded preview retains all four prepared models on repeated selection',async()=>{
 const maxEntries=await capacity(1280,704),loads=[],disposed=[];
 assert.equal(maxEntries,4);
 const cache=createVehicleCache({maxEntries,load:async id=>{loads.push(id);return {id};},dispose:root=>disposed.push(root.id),estimate:()=>20*1024*1024});
 const ids=['model-3','x6','ix','xc90'];
 for(const id of [...ids,...ids,...ids]){await cache.get(id);cache.activate(id);}
 assert.deepEqual(loads,ids);assert.deepEqual(disposed,[]);
 assert.equal(cache.stats().estimatedBytes,80*1024*1024);
});

test('All viewports can retain four selected models; cache eviction still respects its memory cap',async()=>{
 assert.equal(await capacity(390,640),4);
 for(const [maxEntries,bytes] of [[2,20*1024*1024],[4,60*1024*1024]]){
  const disposed=[];
  const cache=createVehicleCache({maxEntries,load:async id=>({id}),dispose:root=>disposed.push(root.id),estimate:()=>bytes});
  await cache.get('active');cache.activate('active');
  await cache.get('older');await cache.get('newer');
  assert.deepEqual(cache.stats().models,['active','newer']);
  assert.deepEqual(disposed,['older']);assert.ok(cache.stats().estimatedBytes<=cache.stats().maxBytes);
 }
});

test('Opening the selected vehicle does not schedule unused models over continuous driving',async()=>{
 const source=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
 const completion=source.slice(source.indexOf(" window.dispatchEvent(new Event('studio:ready'));"),source.indexOf('\nfunction failedVehicle'));
 const calls=[];
 new Function('window','location','Event','query','prepareLaneGeometry','world','scheduleVehicleWarmup','rememberPreview',completion.slice(0,completion.lastIndexOf('}')))(
  {dispatchEvent(){calls.push('ready');},parent:{postMessage(){}}},{origin:'http://localhost'},class Event{},new URLSearchParams('review=ui-draft'),()=>calls.push('lanes'),{},()=>calls.push('unused models'),()=>calls.push('preview'));
 assert.deepEqual(calls,['ready','lanes','preview']);
 assert.ok(source.includes('await prepareChoice(car);mark(\'prepare\')'),'actual model selection still prepares its complete vehicle');
});
