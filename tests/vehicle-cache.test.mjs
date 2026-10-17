import test from 'node:test';
import assert from 'node:assert/strict';
import {createVehicleCache} from '../vehicle-cache.js';

test('vehicle cache shares pending transfers and reuses prepared models',async()=>{
 let requests=0,complete;const cache=createVehicleCache({load:()=>{requests++;return new Promise(resolve=>complete=resolve);},dispose(){},estimate:()=>10});
 const first=cache.get('ix'),second=cache.get('ix');await Promise.resolve();assert.equal(requests,1);const car={};complete(car);assert.equal(await first,car);assert.equal(await second,car);cache.activate('ix');assert.equal(await cache.get('ix'),car);assert.equal(requests,1);
});

test('cache evicts least recently used inactive models within its budget',async()=>{
 const disposed=[],cache=createVehicleCache({load:async id=>({id}),dispose:car=>disposed.push(car.id),estimate:()=>10,maxEntries:3,maxBytes:25});
 await cache.get('model-3');cache.activate('model-3');await cache.get('ix');await cache.get('xc90');assert.deepEqual(disposed,['ix']);assert.equal(cache.peek('model-3').id,'model-3');cache.activate('xc90');assert.equal(cache.stats().estimatedBytes,20);
});

test('retained and active models cannot be evicted during preparation or rollback',async()=>{
 const disposed=[],cache=createVehicleCache({load:async id=>({id}),dispose:car=>disposed.push(car.id),estimate:()=>10,maxEntries:2,maxBytes:20});
 await cache.get('model-3');cache.activate('model-3');const release=cache.retain('ix');await cache.get('ix');await cache.get('xc90');assert.ok(cache.peek('ix'));assert.ok(cache.peek('model-3'));release();assert.ok(!cache.peek('ix'));assert.deepEqual(disposed,['ix']);
});

test('failed preparation can be invalidated and retried without releasing the active car',async()=>{
 const disposed=[];let attempts=0;const cache=createVehicleCache({load:async id=>{if(id==='xc90'&&++attempts===1)throw Error('offline');return {id};},dispose:car=>disposed.push(car.id),estimate:()=>10});
 await cache.get('ix');cache.activate('ix');await assert.rejects(cache.get('xc90'));await cache.get('xc90');cache.invalidate('xc90');cache.invalidate('ix');assert.deepEqual(disposed,['xc90']);assert.equal(cache.peek('ix').id,'ix');await cache.get('xc90');assert.equal(attempts,3);
});
