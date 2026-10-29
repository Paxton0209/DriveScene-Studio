import test from 'node:test';
import assert from 'node:assert/strict';
import {beginStartup,pendingFade,readyFade} from '../startup-motion.js';
function setup(reduce=false,warm=false){
 const marks=[],motions=[],writes=[],node=()=>({dataset:{},values:{},style:{setProperty(key,value){this.owner.values[key]=value}}});
 const nodes=Array.from({length:27},()=>{const n=node();n.style.owner=n;return n});
 const surface={animate(frames,options){const motion={frames,options,currentTime:0,played:0,paused:0,cancelled:0,effect:{setKeyframes(value){motion.frames=value},updateTiming(value){Object.assign(motion.options,value)}},pause(){motion.paused++},play(){motion.played++},cancel(){motion.cancelled++}};motions.push(motion);return motion}},inspector={inert:false},root={dataset:{startup:warm?'warm':'controls'}};
 const doc={documentElement:root,getElementById:id=>id==='startup-surface'?surface:inspector,querySelectorAll:selector=>selector.startsWith('#scene-nav')?nodes.slice(0,9):nodes.slice(9),defaultView:{matchMedia:()=>({matches:reduce}),__draftStartupSessionKey:'session-test',sessionStorage:{setItem:(key,value)=>writes.push([key,value])}}};
 const lifecycle=beginStartup({doc,clock:{mark:name=>marks.push(name)}});
 return {lifecycle,surface,inspector,root,nodes,marks,motions,writes,motion:motions[0]};
}
test('Sidebars and the scene fade start together while readiness is pending',()=>{
 const s=setup();assert.equal(s.root.dataset.startup,'controls');assert.equal(s.inspector.inert,true);
 assert.equal(s.nodes[1].values['--startup-delay'],'40.5ms');assert.equal(s.nodes[10].values['--startup-delay'],'27ms');
 assert.equal(s.motions.length,1);assert.equal(s.marks.includes('draft-startup-fade'),true);
 const frames=s.motion.frames;assert.equal(frames[0].opacity,.1);assert.ok(frames[1].opacity>.1);
 assert.ok(frames.every((f,i)=>!i||f.opacity>frames[i-1].opacity));
});
test('Ready handoff keeps the same animation, current time and opacity',()=>{
 for(const elapsed of [0,450,1800,3500,8000,29000]){
  const s=setup(),m=s.motion;m.currentTime=elapsed;s.lifecycle.reveal();
  assert.equal(s.root.dataset.startup,'revealing');assert.equal(s.inspector.inert,false);
  assert.equal(s.motions.length,1);assert.equal(m.currentTime,elapsed);assert.equal(m.cancelled,0);
  const join=m.frames.find(f=>Math.abs(f.offset*m.options.duration-elapsed)<1e-7);
  assert.equal(join.opacity,pendingFade(elapsed).opacity);
  assert.equal(m.frames.at(-1).opacity,1);
  assert.ok(m.frames.every((f,i)=>!i||f.opacity>=m.frames[i-1].opacity));
  s.lifecycle.reveal();assert.equal(m.currentTime,elapsed);m.onfinish();assert.equal(m.cancelled,1);
 }
});
test('Normal and delayed completion curves preserve value, velocity and acceleration',()=>{
 for(let elapsed=0;elapsed<=30000;elapsed+=50){
  const p=pendingFade(elapsed),tail=readyFade(elapsed),h=.01;
  assert.equal(tail.at(0),p.opacity);assert.ok(Math.abs(tail.at(tail.duration)-1)<1e-12);
  const velocity=(tail.at(h)-tail.at(0))/h;
  const acceleration=(tail.at(2*h)-2*tail.at(h)+tail.at(0))/(h*h);
  assert.ok(Math.abs(velocity-p.velocity)<1e-8);
  assert.ok(Math.abs(acceleration-p.acceleration)<1e-8);
  let prior=p.opacity;
  for(let i=1;i<=200;i++){const value=tail.at(tail.duration*i/200);assert.ok(value>=prior-1e-12&&value<=1+1e-12);prior=value}
 }
});
test('Slow loading advances from the start and extends completion without holding at 10 percent',()=>{
 const s=setup(),m=s.motion;assert.ok(pendingFade(8000).opacity>pendingFade(4000).opacity);
 m.currentTime=8000;s.lifecycle.reveal();assert.ok(m.options.duration>10000);assert.equal(m.paused,0);assert.equal(m.played,0);
});
test('Warm entries and reduced motion reveal readiness without replaying a fade',()=>{
 for(const [reduce,warm] of [[true,false],[false,true]]){
  const s=setup(reduce,warm);assert.equal(s.motions.length,0);s.lifecycle.reveal();assert.equal(s.root.dataset.startup,undefined);assert.equal(s.motions.length,0);assert.equal(s.inspector.inert,false);
 }
});
test('Failure clears pending or active animation without marking a pending session ready',()=>{
 const failed=setup();failed.lifecycle.abort();failed.lifecycle.reveal();assert.deepEqual(failed.writes,[]);assert.equal(failed.motions.length,1);assert.equal(failed.motion.cancelled,1);assert.equal(failed.inspector.inert,false);
 const active=setup();active.lifecycle.reveal();active.lifecycle.abort();assert.equal(active.motions[0].cancelled,1);assert.equal(active.root.dataset.startup,undefined);
});
test('Only a successful ready handoff marks the session',()=>{
 const s=setup();assert.deepEqual(s.writes,[]);s.lifecycle.reveal();assert.deepEqual(s.writes,[['session-test','ready']]);
});
