import test from 'node:test';
import assert from 'node:assert/strict';
import {brakingSpeed,previewDistance,drivingSpeed,forwardPathEnd,publishedApproachTiming,requestedJunctionTiming,junctionLiftStart} from '../junction-playback.js';
test('Lookahead distance remains finite and tracks speed independently of the fixed Junction stop boundary',()=>{
 const timing={speed:10,cruise:1,brake:2},samples=[0,1000,1500,2000,2500,3000].map(time=>brakingSpeed(time,timing));
 assert.deepEqual(samples,[10,10,7.5,5,2.5,0]);
 assert.deepEqual(samples.map(previewDistance),[25,25,18.75,12.5,6.25,0]);
 assert.equal(previewDistance(NaN),0);assert.equal(previewDistance(-1),0);
});
test('Playback time scaling preserves the actual distance derivative',()=>{
 const speed=brakingSpeed(1000,{speed:10,cruise:1,brake:2,scale:.5});
 assert.equal(speed,10);assert.equal(previewDistance(speed),25);
});


test('Generated runtime clips speed reach at the stop line without extending it',async()=>{
 const {patchFeatures}=await import('../runtime-patches.mjs'),{readFile}=await import('node:fs/promises');
 const patched=patchFeatures(await readFile(new URL('../../engine/version-features.js',import.meta.url),'utf8'));
 const from=patched.indexOf('let end=forwardPathEnd('),to=patched.indexOf('path.endS=end;',from)+'path.endS=end;'.length;
 const refreshEnd=new Function('path','world','id','forwardPathEnd','drivingSpeed','JUNCTION_IDS','PATH_HALF_WIDTH','locate',patched.slice(from,to)+'return path.endS;');
 for(const id of ['05','08'])for(const speed of [12.4037469,8,4,0]){
  const path={startS:0,total:300,plan:{x:0,kind:'lane'},points:[],cum:[]};
  const end=refreshEnd(path,{draftSpeed:speed},id,forwardPathEnd,drivingSpeed,['05','08'],.5,()=>58.6);
  assert.ok(Math.abs(end-previewDistance(speed)*2/2.5)<1e-9);
 }
 assert.equal(forwardPathEnd(10,30,300,58.6),58.6);
 assert.equal(forwardPathEnd(10,0,300,58.6),10);
 assert.match(patched,/smoothstep\(-1\.2,0\.,endS-junctionStop\)/,'stop cap forms continuously only at the physical boundary');
 assert.match(patched,/tail=mix\(tail,1\.,stopBlend\)/,'free endpoint retains its continuous fade');
});
test('Driving path uses physical cruise speed and keeps it in a paused frame',()=>{
 for(const id of ['02','03','06','07']){
  const world={draftCruiseSpeed:7,playing:false};assert.equal(drivingSpeed(world,id),7);
  assert.equal(forwardPathEnd(10,drivingSpeed(world,id),300)-10,17.5);
 }
 assert.equal(drivingSpeed({},'06'),13.9);assert.equal(drivingSpeed({},'02'),16.8);
 assert.ok(drivingSpeed({draftWeather:{weights:{snow:1}}},'02')<drivingSpeed({},'02'));
});

test('Published Junction pace retains the 1.87s reference and extends only cruise for a farther start',()=>{
 const reference=publishedApproachTiming(34.5),farther=publishedApproachTiming(58.5);
 assert.ok(Math.abs(reference.stop*.969-1.87)<1e-12);
 assert.equal(reference.speed,farther.speed);assert.equal(reference.brake,farther.brake);
 assert.ok(Math.abs((farther.stop-reference.stop)*.969-24/(reference.speed/.969))<1e-12);
 for(const sample of [reference,farther])assert.ok(Math.abs(sample.speed*(sample.cruise+.5*sample.brake)-(sample===reference?34.5:58.5))<1e-10);
});

test('Published pace keeps the initial Junction preview clear of the stop boundary',()=>{
 const initialSpeed=publishedApproachTiming(57.6).speed/.969;
 assert.ok(forwardPathEnd(0,initialSpeed,300,57.6,2)<57.6);
 assert.ok(Math.abs(forwardPathEnd(0,initialSpeed/2,300,57.6,2)*2-forwardPathEnd(0,initialSpeed,300,57.6,2))<1e-10);
});

test('Requested 3.5 second approach preserves distance and continuous braking at either Junction',()=>{
 for(const travel of [57.6,58.5]){
  const timing=requestedJunctionTiming(travel),scale=.969;
  assert.ok(Math.abs(timing.stop*scale-3.5)<1e-12);
  assert.ok(Math.abs(timing.speed*(timing.cruise+timing.brake*.5)-travel)<1e-10);
  let distance=0,prior=Infinity;
  const dt=.0005;
  for(let t=dt/2;t<3.5;t+=dt){const speed=brakingSpeed(t*1000,{...timing,scale});assert.ok(speed<=prior+1e-10);prior=speed;distance+=speed*dt;}
  assert.ok(Math.abs(distance-travel)<.001);
  assert.ok(brakingSpeed(3500,{...timing,scale})<1e-10);
  assert.ok(forwardPathEnd(0,timing.speed/scale,300,travel,2)<travel);
 }
});

test('Camera position trigger inverts the actual vehicle distance, independent of trip length',()=>{
 for(const travel of [34.5,57.6,58.5]){
  const timing=requestedJunctionTiming(travel),time=junctionLiftStart(travel),b=Math.max(0,time-timing.cruise);
  const distance=time<timing.cruise?timing.speed*time:timing.speed*timing.cruise+timing.speed*b-.5*timing.speed/timing.brake*b*b;
  assert.ok(Math.abs(travel-distance-25)<1e-9);
  assert.ok(time<timing.stop&&time>0);
 }
});
