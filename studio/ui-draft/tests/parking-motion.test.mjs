import test from 'node:test';
import assert from 'node:assert/strict';
import {overlaps} from '../parking-kinematics.js';
import {parkingPose,parkingTiming,parkingSegment,parkingPlan,exitPose,localBay,worldPose,reverseReplan} from '../parking-motion.js';
test('Displayed distance measures the current gear leg, holds during a shift and reaches P at completion',()=>{
 for(const z of [-18,-3.6,10.8]){
  const bay={x:-5.9,z},plan=parkingPlan(bay),timing=parkingTiming(bay),setup=plan.align+(plan.align?plan.shift:0);
  for(const [begin,end,gear] of [...(plan.align?[[0,plan.align,'R']]:[]),[setup,timing.forward,'D'],[timing.forward+timing.shift,timing.total,'R']]){
   if(end<=begin)continue;const t=(begin+end)/2,state=parkingSegment(t,bay);let measured=0,prev=parkingPose(t,bay);
   for(let i=1;i<=512;i++){const next=parkingPose(t+(end-t)*i/512,bay);measured+=Math.hypot(next.x-prev.x,next.z-prev.z);prev=next;}
   assert.equal(state.gear,gear);assert.ok(Math.abs(state.remaining-measured)<.02,`${z}/${gear}: remaining distance follows the actual curve`);
   assert.ok(parkingSegment(begin,bay).remaining>state.remaining);
  }
  if(timing.shift){assert.equal(parkingSegment(timing.forward+.1,bay).remaining,null);assert.equal(parkingSegment(timing.forward+.1,bay).gear,'R');}
  assert.deepEqual(parkingSegment(timing.total,bay),{gear:'P',remaining:0,phase:'parked'});
 }
});
test('A retargeted reverse reports arc distance and preserves it through capture-compatible sampling',()=>{
 const route=reverseReplan({x:2,z:-6,yaw:.5},{x:-5.9,z:0});let total=0,previous=route.sample(0);
 for(let i=1;i<=512;i++){const p=route.sample(route.duration*i/512);total+=Math.hypot(p.x-previous.x,p.z-previous.z);previous=p;}
 assert.ok(Math.abs(route.remaining(0)-total)<.01);assert.equal(route.remaining(route.duration),0);assert.ok(route.remaining(route.duration/2)<total);
});
for(const x of [-5.9,5.9])test(`Parking reaches bay ${x} continuously and reverses without sliding`,()=>{
 const bay={x,z:-3.6},a=parkingPose(0,bay),b=parkingPose(parkingTiming(bay).total,bay);assert.equal(a.x,0);assert.equal(a.z,0);assert.ok(Math.abs(b.x-x)<1e-9);assert.ok(Math.abs(b.z-bay.z)<1e-9);assert.ok(Math.abs(b.yaw-Math.sign(x)*Math.PI/2)<1e-10);assert.ok(b.complete);
 for(const t of [parkingTiming(bay).forward,parkingTiming(bay).forward+parkingTiming(bay).shift]){const before=parkingPose(t-.00001,bay),after=parkingPose(t+.00001,bay);assert.ok(Math.hypot(before.x-after.x,before.z-after.z)<4e-5);}
 for(let t=.1;t<parkingTiming(bay).total;t+=.1){const a=parkingPose(t,bay),b=parkingPose(t+.0001,bay),dx=b.x+Math.sin(b.yaw)*b.rearOffset-a.x-Math.sin(a.yaw)*a.rearOffset,dz=b.z+Math.cos(b.yaw)*b.rearOffset-a.z-Math.cos(a.yaw)*a.rearOffset;const slip=Math.abs(dx*Math.cos(a.yaw)-dz*Math.sin(a.yaw));assert.ok(slip<3e-7,'rear axle follows its heading without side slip');}
});

test('Distant and behind bays keep actual parking speed below 3 m/s',()=>{
 for(const z of [-18,-14.4,10.8]){const bay={x:5.9,z},t=parkingTiming(bay);let previous=parkingPose(0,bay);
  for(let time=.01;time<t.total;time+=.01){const p=parkingPose(time,bay),distance=Math.hypot(p.x+Math.sin(p.yaw)*p.rearOffset-previous.x-Math.sin(previous.yaw)*previous.rearOffset,p.z+Math.cos(p.yaw)*p.rearOffset-previous.z-Math.cos(previous.yaw)*previous.rearOffset);assert.ok(distance/.01<=3.001);previous=p;}
  const end=parkingPose(t.total,bay);assert.ok(end.complete);assert.ok(Math.abs(end.z-z)<1e-8);
  if(z===10.8){assert.equal(t.forward,0);assert.equal(t.shift,0);assert.equal(parkingSegment(0,bay).gear,'R');}
 }
});

for(const x of [-5.9,5.9])for(const direction of [-1,1])test(`Exit ${x}/${direction} follows forward heading and ends in aisle`,()=>{
 const bay={x,z:-3.6},start=exitPose(0,bay,direction),end=exitPose(7.5,bay,direction);assert.equal(start.x,x);assert.equal(start.z,bay.z);assert.ok(Math.abs(end.x)<1e-9);assert.ok(end.complete);
 for(let t=.1;t<7.4;t+=.1){const a=exitPose(t,bay,direction),b=exitPose(t+.0001,bay,direction),dx=b.x-a.x,dz=b.z-a.z;assert.ok(Math.abs(dx*Math.cos(a.yaw)-dz*Math.sin(a.yaw))<1e-6);assert.ok(-dx*Math.sin(a.yaw)-dz*Math.cos(a.yaw)>0);}
});
test('Rotated re-selection preserves initial pose and rearward endpoint tangents',()=>{const start={x:2,z:-6,yaw:.5},bay={x:-5.9,z:0};const local=localBay(bay,start,start.yaw),back=worldPose({...local,yaw:0},start,start.yaw);assert.ok(Math.hypot(back.x-bay.x,back.z-bay.z)<1e-9);const plan=reverseReplan(start,bay),a=plan.sample(0),b=plan.sample(plan.duration);assert.ok(Math.hypot(a.x-start.x,a.z-start.z)<1e-9);assert.ok(Math.abs(a.yaw-start.yaw)<1e-9);assert.ok(Math.hypot(b.x-bay.x,b.z-bay.z)<1e-9);assert.ok(Math.abs(b.yaw+Math.PI/2)<1e-9);});

test('Forward probe and reverse route preserve heading, steering and parking speed across near/far/behind bays',()=>{
 for(const x of [-5.9,5.9])for(const z of [-18,-3.6,10.8]){
  const bay={x,z},timing=parkingTiming(bay),initial=parkingPose(0,bay);assert.ok(Math.abs(initial.yaw)<1e-8,'no initial half turn');
  let maxSpeed=0;for(let t=.01;t<timing.total-.001;t+=.02){const p=parkingPose(t,bay),q=parkingPose(t+.0001,bay),dx=q.x+Math.sin(q.yaw)*q.rearOffset-p.x-Math.sin(p.yaw)*p.rearOffset,dz=q.z+Math.cos(q.yaw)*q.rearOffset-p.z-Math.cos(p.yaw)*p.rearOffset;
   maxSpeed=Math.max(maxSpeed,Math.hypot(dx,dz)/.0001);assert.ok(Math.abs(dx*Math.cos(p.yaw)-dz*Math.sin(p.yaw))<3e-7);assert.ok(Math.abs(p.steer)<=.56001);
   const velocity=(-dx*Math.sin(p.yaw)-dz*Math.cos(p.yaw))/.0001;assert.ok(Math.abs((q.yaw-p.yaw)/.0001-velocity*Math.tan(p.steer)/p.wheelbase)<.004,"yaw rate obeys rear-axle bicycle model");
   if(p.phase==='forward')assert.ok(-dx*Math.sin(p.yaw)-dz*Math.cos(p.yaw)>=-1e-8);
   else if(p.phase==='reverse'||p.phase==='aligning')assert.ok(dx*Math.sin(p.yaw)+dz*Math.cos(p.yaw)>=-1e-8);
  }assert.ok(maxSpeed<=3,`speed ${maxSpeed}`);
 }
});

test('Approach bends progressively before the final third with bounded yaw rate',()=>{
 for(const x of [-5.9,5.9]){const bay={x,z:-3.6},f=parkingTiming(bay).forward;
  for(const ratio of [.1,.2]){const p=parkingPose(f*ratio,bay);assert.equal(p.x,0);assert.ok(Math.abs(p.yaw)<1e-10);}
  const end=parkingPose(f,bay);assert.ok(Math.abs(parkingPose(f*.65,bay).yaw)>.35*Math.abs(end.yaw),'turn is distributed across the leg');
  let prior=parkingPose(0,bay);for(let t=.01;t<f;t+=.01){const p=parkingPose(t,bay);assert.ok(Math.abs(p.yaw-prior.yaw)/.01<(14*8/7)*Math.PI/180,'broad arc limits environment rotation');prior=p;}
 }
});

test('Broad setup turn checks the complete swept body within a bounded run-up',()=>{
 const obstacles=[[-5.9,10.8],[-5.9,0],[-5.9,-14.4],[5.9,3.6],[5.9,-7.2],[5.9,-14.4]].map(([x,z])=>({x,z,width:2.35,length:4.98,yaw:Math.sign(x)*Math.PI/2}));
 for(const x of [-5.9,5.9]){const bay={x,z:-3.6},options={obstacles},plan=parkingPlan(bay,0,options);assert.ok(plan);assert.ok(plan.forwardLength+plan.reverseLength<19,'broad arc stays within a 19m maneuver');assert.ok(plan.theta>=16*Math.PI/180&&plan.theta<=28*Math.PI/180);assert.ok(bay.z-plan.stop.z<5.1);
  let prior=parkingPose(0,bay,0,options);for(let t=.02;t<plan.total;t+=.02){const p=parkingPose(t,bay,0,options);assert.equal(obstacles.some(o=>overlaps({...p,width:2.10,length:4.72},o)),false);if(p.phase==='forward'&&prior.phase==='forward'){assert.ok(Math.abs(p.steer-prior.steer)<.06,'finite steering ramp');assert.ok(Math.abs(p.yaw-prior.yaw)/.02<(14*8/7)*Math.PI/180);}prior=p;}
 }
 assert.equal(parkingPlan({x:5.9,z:-3.6},0,{obstacles:[{x:0,z:0,width:5,length:5,yaw:0}]}),null,'blocked plans never fall back to unchecked motion');
});

test('Front tyre traces and Ackermann angles obey the same trajectory through the approach and reverse',()=>{
 for(const x of [-5.9,5.9]){const bay={x,z:-3.6},plan=parkingPlan(bay),timing=parkingTiming(bay);let previousSteer=0;
  for(let t=.01;t<timing.total-.001;t+=.01){const p=parkingPose(t,bay),q=parkingPose(t+1e-5,bay),front=p.rearOffset-p.wheelbase;
   for(const wheelX of [-.8,.8]){const tyre=a=>({x:a.x+Math.sin(a.yaw)*front+Math.cos(a.yaw)*wheelX,z:a.z+Math.cos(a.yaw)*front-Math.sin(a.yaw)*wheelX}),a=tyre(p),b=tyre(q),steer=Math.atan(p.wheelbase*Math.tan(p.steer)/(p.wheelbase+wheelX*Math.tan(p.steer))),heading=p.yaw+steer;
    assert.ok(Math.abs((b.x-a.x)*Math.cos(heading)-(b.z-a.z)*Math.sin(heading))<1e-8,'each tyre rolls along its displayed track');}
   if(p.phase==='forward')assert.ok(Math.abs(p.steer-previousSteer)<.04,'front steering has no late snap');previousSteer=p.steer;
  }
  assert.ok(Math.abs(parkingPose(timing.forward,bay).steer)<1e-8,'approach ends with straight wheels');
 }
});

// Measure actual rendered body displacement, independently of the timing curve.
test('Every gear leg launches from rest and brakes gently to zero; shifts remain stationary',()=>{
 for(const x of [-5.9,5.9])for(const z of [-18,-3.6,10.8]){
  const bay={x,z},p=parkingPlan(bay),setup=p.align+(p.align?p.shift:0),forwardEnd=setup+p.forward;
  const legs=[...(p.align?[[0,p.align]]:[]),...(p.forward?[[setup,forwardEnd]]:[]),[forwardEnd+p.shift,p.total]];
  for(const [start,end] of legs){
   const forward=start===setup&&end===forwardEnd,brakeScale=forward?.8:1;
   const speed=t=>{const dt=1/600,a=parkingPose(t,bay),b=parkingPose(t+dt,bay);return Math.hypot(b.x-a.x,b.z-a.z)/dt;};
   assert.ok(speed(start)<.001,'new gear starts at rest');
   assert.ok(speed(start+.5)<.3,'first half second eases into motion');
   assert.ok(speed(start+1)<1.1,'reverse never jumps directly to cruise');
   let previous=speed(start),max=0;
   for(let t=start+.02;t<end-.02;t+=.02){const v=speed(t),acceleration=(v-previous)/.02;max=Math.max(max,v);assert.ok(v<=8/3.6+.002,'body speed never exceeds cruise');assert.ok(acceleration<1.6&&acceleration> -(forward?1.6:1.25),`gentle launch and braking: ${acceleration}`);previous=v;}
   assert.ok(max>.2,'the leg still moves');
   previous=Infinity;
   for(let t=end-2;t<end-1/600;t+=1/120){const v=speed(t);assert.ok(v<=previous+.001,'last two seconds decrease monotonically');previous=v;}
   assert.ok(speed(end-1/600)<.001,'last frame arrives at rest');
   assert.ok(speed(end-2*brakeScale)<.9*(8/3.6),'braking is distributed across the scaled approach');
   assert.ok(speed(end-.5)<.3,'last half second settles gently');
  }
  if(p.shift){assert.equal(p.shift,.3);const a=parkingPose(forwardEnd+p.shift*.2,bay),b=parkingPose(forwardEnd+p.shift*.8,bay);assert.ok(Math.hypot(a.x-b.x,a.z-b.z)<1e-8,'gear change remains stationary');}
 }
});
