import test from 'node:test';
import assert from 'node:assert/strict';
import {frameStep} from '../frame-clock.js';
import {readFile} from 'node:fs/promises';

test('A 120Hz screen receives 60 scene updates, with one render per callback',()=>{
 let accumulator=0,seconds=0,updates=0;
 for(let frame=0;frame<120;frame++){accumulator+=1/120;const next=frameStep(accumulator);accumulator=next.remaining;seconds+=next.seconds;if(next.seconds)updates++}
 assert.equal(updates,60);assert.ok(Math.abs(seconds-1)<1e-9);
 const stalled=frameStep(.08);assert.ok(Math.abs(stalled.seconds+stalled.remaining-.08)<1e-9);assert.ok(Math.abs(stalled.remaining)<1/60);
});

test('A stalled frame never requests an unbounded catch-up render burst',()=>{
 assert.equal(frameStep(5).seconds,.1);
 assert.equal(frameStep(.001).seconds,0);
});

test('Small 120Hz timestamp jitter does not alternate one-frame and three-frame gaps',()=>{
 let accumulator=0,previous=0,lastUpdate=0,updates=0;
 for(let frame=1;frame<=120;frame++){
  const now=frame/120+(frame%4===1?.0008:frame%4===2?-.0008:0);
  accumulator+=now-previous;previous=now;const next=frameStep(accumulator);accumulator=next.remaining;
  if(next.seconds){if(lastUpdate)assert.equal(frame-lastUpdate,2);lastUpdate=frame;updates++}
 }
 assert.equal(updates,60);assert.ok(Math.abs(accumulator)<1e-9);
});

test('Junction and parking begin paused and the Junction step renders through its native sampler only',async()=>{
 const source=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 assert.match(source,/playing=\['road','elevated','ramp'\]\.includes\(current\(\)\)/);
 assert.match(source,/if\(current\(\)==='junction'\)seekJunction\(\);else if\(!world.cameraMotion/);
 assert.doesNotMatch(source,/while\(accumulator>=1\/30\)/);
});
