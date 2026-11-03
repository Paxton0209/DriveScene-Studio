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
 assert.match(source,/seekJunction\(\);\}else if\(!world.cameraMotion/);
 assert.doesNotMatch(source,/while\(accumulator>=1\/30\)/);
});

test('A 60Hz display with small timing jitter updates every frame without quantized motion',()=>{
 let accumulator=0,total=0,previous=0;
 for(let frame=1;frame<=120;frame++){
  const now=frame/60+(frame%2?.001:-.001);accumulator+=now-previous;previous=now;
  const next=frameStep(accumulator);assert.ok(next.seconds>0);assert.ok(Math.abs(next.seconds-accumulator)<1e-9);total+=next.seconds;accumulator=next.remaining;
 }
 assert.ok(Math.abs(total-previous)<1e-9);
});

test('80Hz and 90Hz callbacks retain every displayed frame instead of halving motion updates',()=>{
 for(const hz of [80,90]){
  let accumulator=0,total=0,updates=0;
  for(let frame=0;frame<hz;frame++){
   const elapsed=1/hz;accumulator+=elapsed;
   const next=frameStep(accumulator,elapsed);accumulator=next.remaining;
   if(next.seconds)updates++;total+=next.seconds;
  }
  assert.equal(updates,hz);assert.ok(Math.abs(total-1)<1e-9);
 }
});

test('Variable display cadence keeps elapsed time and does not skip 80/90Hz callbacks',()=>{
 let accumulator=0,total=0,wall=0,updates=0;
 for(const hz of [120,80,90,60,120])for(let frame=0;frame<hz;frame++){
  const elapsed=1/hz;wall+=elapsed;accumulator+=elapsed;
  const next=frameStep(accumulator,elapsed);accumulator=next.remaining;
  if(hz===80||hz===90)assert.ok(next.seconds>0);
  if(next.seconds)updates++;total+=next.seconds;
 }
 assert.equal(updates,350);assert.ok(Math.abs(total+accumulator-wall)<1e-9);
});

test('Fast 120Hz callbacks still share a single 60Hz render budget with actual per-callback elapsed time',()=>{
 let accumulator=0,previous=0,updates=0,lastUpdate=0;
 for(let frame=1;frame<=120;frame++){
  const now=frame/120+(frame%4===1?.0008:frame%4===2?-.0008:0),elapsed=now-previous;previous=now;
  accumulator+=elapsed;const next=frameStep(accumulator,elapsed);accumulator=next.remaining;
  if(next.seconds){if(lastUpdate)assert.equal(frame-lastUpdate,2);lastUpdate=frame;updates++;}
 }
 assert.equal(updates,60);
});
