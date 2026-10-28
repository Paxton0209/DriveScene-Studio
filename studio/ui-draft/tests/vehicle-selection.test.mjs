import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createVehicleSelection} from '../vehicle-selection.js';
import {patchApp} from '../runtime-patches.mjs';
test('Headless picker switches all models and waits for the real replacement without DOM buttons',async()=>{
 const calls=[];let finish;
 const picker=createVehicleSelection({selected:'model-3',ids:['model-3','x6','ix','xc90'],onChange:id=>{calls.push(id);return new Promise(r=>finish=r);}});
 await assert.rejects(picker.choose('x6'),/not ready/);picker.sync(true);
 for(const id of ['x6','ix','xc90','model-3']){
  let done=false;const request=picker.choose(id).then(()=>done=true);await Promise.resolve();assert.equal(done,false);
  await assert.rejects(picker.choose(id),/in progress/);finish();await request;assert.equal(done,true);
  await picker.choose(id);assert.equal(calls.at(-1),id);
 }
 assert.deepEqual(calls,['x6','ix','xc90','model-3']);await assert.rejects(picker.choose('invalid'),/Unknown/);
});
test('A failed model change propagates and leaves the previous selection available for retry',async()=>{
 let fail=true,calls=0;const picker=createVehicleSelection({selected:'model-3',ids:['model-3','ix'],onChange:async()=>{calls++;if(fail)throw Error('Download failed');}});picker.sync(true);
 await assert.rejects(picker.choose('ix'),/Download failed/);await picker.choose('model-3');assert.equal(calls,1);
 fail=false;await picker.choose('ix');assert.equal(calls,2);
});
test('Built app selection uses the async controller rather than a removed hidden DOM picker',async()=>{
 const source=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
 assert.match(source,/if\(key==='model'\)return vehicleSelector.choose\(value\)/);
 assert.doesNotMatch(source,/getElementById\('vehicle-option-'/);
 const bridge=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');assert.match(bridge,/else await api.param\(key,value/);
});
