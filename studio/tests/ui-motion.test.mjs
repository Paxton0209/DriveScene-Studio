import test from 'node:test';
import assert from 'node:assert/strict';
let now=0,reduce=false,sequence=0;
const callbacks=new Map();
globalThis.performance={now:()=>now};
globalThis.matchMedia=()=>({matches:reduce});
globalThis.requestAnimationFrame=callback=>{callbacks.set(++sequence,callback);return sequence;};
globalThis.cancelAnimationFrame=identifier=>callbacks.delete(identifier);
const {createSpring,ARC_MOTION_SCALE,selectionMotionFrames,toggleMotionFrames,MORPH_STRENGTH,morphSegment,glideIndicator}=await import('../ui-motion.js');
function advance(){now+=1000/120;const pending=[...callbacks.values()];callbacks.clear();pending.forEach(callback=>callback(now));}
test('the common UI motion scale includes the extra twenty percent reduction',()=>assert.ok(Math.abs(ARC_MOTION_SCALE-.64)<1e-12));
test('a spring retargets from its presentation position and settles',()=>{let current=0;const spring=createSpring(value=>current=value);spring.to(300);for(let index=0;index<10;index++)advance();const presentation=current;spring.to(-80);assert.equal(current,presentation);for(let index=0;index<200;index++)advance();assert.equal(current,-80);assert.equal(callbacks.size,0);});
test('reduced motion finishes immediately without a pending animation',()=>{reduce=true;let current=0;const spring=createSpring(value=>current=value);spring.to(500);assert.equal(current,500);assert.equal(callbacks.size,0);reduce=false;});
test('selection morphs have twenty percent stronger deformation',()=>assert.equal(MORPH_STRENGTH,1.2));
for(const axis of ['x','y']){
 test(axis+' selection motion has finite geometry, an exact landing and a single continuous trajectory',()=>{
  const from={x:3,y:3,width:84,height:44},to={...from,[axis]:227},motion=selectionMotionFrames(from,to,axis);
  assert.deepEqual(motion.states[0],{...from,leadingVelocity:0,trailingVelocity:0});
  const last=motion.states.at(-1);for(const key of Object.keys(to))assert.equal(last[key],to[key]);
  assert.ok(Math.abs(last.leadingVelocity)<1e-8&&Math.abs(last.trailingVelocity)<1e-8);
  assert.ok(motion.states.some(state=>axis==='x'?state.height<44*.95:state.width<84*.96));
  for(let index=0;index<motion.states.length;index++){
   const state=motion.states[index];assert.ok(state.width>0&&state.height>0);for(const value of Object.values(state))assert.ok(Number.isFinite(value));
   if(index)assert.ok(Math.abs(state[axis]-motion.states[index-1][axis])<16);
  }
 });
 test(axis+' selection motion preserves position and velocity when interrupted',()=>{
  const from={x:3,y:3,width:84,height:44},target={...from,[axis]:115},first=selectionMotionFrames(from,target,axis),present=first.states[22],next=selectionMotionFrames(present,from,axis,{leading:present.leadingVelocity,trailing:present.trailingVelocity});
  assert.deepEqual(next.states[0],present);assert.ok(Math.abs(next.states[1][axis]-present[axis])<16);
 });
}
test('selection indicators use one browser animation without a per-frame layout loop or restarting the same target',()=>{
 let animations=0;
 const element=()=>({style:{},setAttribute(){},animate(){animations++;return {currentTime:0,cancel(){}};}});
 globalThis.document={createElement:element};
 const container={clientWidth:280,clientHeight:50,dataset:{},prepend(indicator){indicator.parentNode=this;}};
 morphSegment(container,{offsetLeft:3,offsetWidth:90});morphSegment(container,{offsetLeft:96,offsetWidth:90});morphSegment(container,{offsetLeft:96,offsetWidth:90});
 glideIndicator(container,10,false,44,8,170);glideIndicator(container,66,false,44,8,170);glideIndicator(container,66,false,44,8,170);
 assert.equal(animations,2);assert.equal(callbacks.size,0);
});
test('toggle morphs have a smooth 24 percent stretch and settle exactly in either direction',()=>{
 for(const [start,target] of [[0,12],[12,0]]){
  const motion=toggleMotionFrames({x:start,width:1,height:1},target);
  assert.ok(Math.abs(motion.duration-224)<1e-9);
  assert.equal(motion.frames[0].transform,`translateX(${start}px) scale(1,1)`);
  assert.equal(motion.frames.at(-1).transform,`translateX(${target}px) scale(1,1)`);
  const scales=motion.frames.map(frame=>frame.transform.match(/scale\(([^,]+),([^\)]+)\)/).slice(1).map(Number));
  assert.ok(Math.abs(Math.max(...scales.map(scale=>scale[0]))-1.24)<.001);
  assert.ok(Math.abs(Math.min(...scales.map(scale=>scale[1]))-.904)<.001);
  assert.ok(Math.abs(motion.velocities.at(-1))<1e-9);
 }
});
test('interrupting a toggle continues its shape clock without stacking extra deformation',()=>{
 const motion=toggleMotionFrames({x:6,width:1.19,height:.924,velocity:45},0,224,.33);
 assert.equal(motion.frames[0].transform,'translateX(6px) scale(1.19,0.924)');
 assert.equal(motion.velocities[0],45);
 for(const frame of motion.frames){const [width,height]=frame.transform.match(/scale\(([^,]+),([^\)]+)\)/).slice(1).map(Number);assert.ok(width<=1.24&&height>=.904);}
 assert.equal(motion.frames.at(-1).transform,'translateX(0px) scale(1,1)');
});
