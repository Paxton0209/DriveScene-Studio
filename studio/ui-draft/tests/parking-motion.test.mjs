import test from 'node:test';
import assert from 'node:assert/strict';
import {overlaps} from '../parking-kinematics.js';
import {parkingPose,parkingTiming,parkingPlan,exitPose,localBay,worldPose,reverseReplan} from '../parking-motion.js';
for(const x of [-5.9,5.9])test(`Parking reaches bay ${x} continuously and reverses without sliding`,()=>{
 const bay={x,z:-3.6},a=parkingPose(0,bay),b=parkingPose(parkingTiming(bay).total,bay);assert.equal(a.x,0);assert.equal(a.z,0);assert.ok(Math.abs(b.x-x)<1e-9);assert.ok(Math.abs(b.z-bay.z)<1e-9);assert.equal(b.yaw,Math.sign(x)*Math.PI/2);assert.ok(b.complete);
 for(const t of [parkingTiming(bay).forward,parkingTiming(bay).forward+.65]){const before=parkingPose(t-.00001,bay),after=parkingPose(t+.00001,bay);assert.ok(Math.hypot(before.x-after.x,before.z-after.z)<1e-5);}
 for(let t=.1;t<parkingTiming(bay).total;t+=.1){const a=parkingPose(t,bay),b=parkingPose(t+.0001,bay),dx=b.x+Math.sin(b.yaw)*b.rearOffset-a.x-Math.sin(a.yaw)*a.rearOffset,dz=b.z+Math.cos(b.yaw)*b.rearOffset-a.z-Math.cos(a.yaw)*a.rearOffset;const slip=Math.abs(dx*Math.cos(a.yaw)-dz*Math.sin(a.yaw));assert.ok(slip<3e-7,'rear axle follows its heading without side slip');}
});

test("Distant bays extend approach time without exceeding 3 m/s",()=>{for(const z of [-18,-14.4,10.8]){const bay={x:5.9,z},t=parkingTiming(bay);assert.ok(Math.abs(z-5.9)*1.5/t.forward<=3.001);const end=parkingPose(t.total,bay);assert.ok(end.complete);assert.ok(Math.abs(end.z-z)<1e-8);}});

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

// The first leg must communicate two actions without a steering discontinuity.
test('Approach travels straight before a separate gentle alignment, with continuous heading',()=>{
 for(const x of [-5.9,5.9]){const bay={x,z:-3.6},f=parkingTiming(bay).forward;
  for(const ratio of [.1,.2,.3]){const p=parkingPose(f*ratio,bay);assert.equal(p.x,0);assert.ok(Math.abs(p.yaw)<1e-10);}
  assert.ok(Math.abs(parkingPose(f*.8,bay).x)>.3);
  let prior=parkingPose(0,bay);for(let t=.01;t<f;t+=.01){const p=parkingPose(t,bay);assert.ok(Math.abs(p.yaw-prior.yaw)<.02);prior=p;}
 }
});

test('Useful setup angle shortens the former 6.5m run-up and checks the complete swept body',()=>{
 const obstacles=[[-5.9,10.8],[-5.9,0],[-5.9,-14.4],[5.9,3.6],[5.9,-7.2],[5.9,-14.4]].map(([x,z])=>({x,z,width:2.35,length:4.98,yaw:Math.sign(x)*Math.PI/2}));
 for(const x of [-5.9,5.9]){const bay={x,z:-3.6},options={obstacles},plan=parkingPlan(bay,0,options);assert.ok(plan);assert.ok(plan.theta>=24*Math.PI/180);assert.ok(bay.z-plan.stop.z<5.1,'useful swing reduces the former straight 6.5m overshoot');
  let prior=parkingPose(0,bay,0,options);for(let t=.02;t<plan.total;t+=.02){const p=parkingPose(t,bay,0,options);assert.equal(obstacles.some(o=>overlaps({...p,width:2.10,length:4.72},o)),false);if(p.phase==='forward'&&prior.phase==='forward')assert.ok(Math.abs(p.steer-prior.steer)<.04,'finite steering ramp');prior=p;}
 }
 assert.equal(parkingPlan({x:5.9,z:-3.6},0,{obstacles:[{x:0,z:0,width:5,length:5,yaw:0}]}),null,'blocked plans never fall back to unchecked motion');
});
