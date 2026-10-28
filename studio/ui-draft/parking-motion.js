import {planParking} from './parking-kinematics.js';
const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)};
const plans=new Map();
function planFor(bay,startZ,options={}){
 const key=JSON.stringify([bay.x,bay.z,startZ,options]);if(plans.has(key))return plans.get(key);
 const plan=planParking(bay,startZ,options);if(plans.size>64)plans.clear();plans.set(key,plan);return plan;
}
export function parkingPlan(bay,startZ=0,options={}){return planFor(bay,startZ,options);}
export function parkingTiming(bay,startZ=0,options={}){
 const p=planFor(bay,startZ,options);if(!p)return {forward:0,shift:0,reverse:0,total:0,blocked:true};
 return {forward:p.align+(p.align?p.shift:0)+p.forward,shift:p.shift,reverse:p.reverse,total:p.total};
}
export function parkingPose(time,bay,startZ=0,options={}){
 const p=planFor(bay,startZ,options);if(!p)return {x:0,z:startZ,yaw:0,steer:0,phase:'blocked',complete:false,distance:0};
 const setup=p.align+(p.align?p.shift:0),forwardEnd=setup+p.forward,reverseStart=forwardEnd+p.shift;
 let q,phase,distance;
 if(p.align&&time<setup){const f=smooth(time/p.align);q={x:0,z:startZ+p.straight*f,yaw:0,steer:0};phase=time<p.align?'aligning':'shift';distance=-Math.abs(p.straight)*f;}
 else if(time<=forwardEnd){const f=smooth((time-setup)/p.forward);q=p.forwardSample(f);phase='forward';distance=q.distance;}
 else {const t=smooth((time-reverseStart)/p.reverse);q=p.reverseSample(t);phase=time<reverseStart?'shift':'reverse';distance=p.forwardLength-(p.align?2*Math.abs(p.straight):0)-p.reverseLength*t;}
 return {...q,phase,complete:time>=p.total,distance,setupAngle:p.side*p.theta,rearOffset:p.vehicle.rearOffset,wheelbase:p.vehicle.wheelbase};
}

// A forward exit starts along the parked vehicle's heading, then turns into
// the aisle. Its tangent, vehicle heading and displayed route share one curve.
export function exitPose(time,bay,direction=-1,duration=7.5){
 const a=smooth(time/duration)*Math.PI/2,r=Math.abs(bay.x),side=Math.sign(bay.x)||1;
 return {x:side*r*(1-Math.sin(a)),z:bay.z+direction*r*(1-Math.cos(a)),yaw:side*(Math.PI/2+direction*a),distance:r*a,phase:'exiting',complete:time>=duration};
}
export function localBay(bay,start,yaw){const x=bay.x-start.x,z=bay.z-start.z,c=Math.cos(yaw),s=Math.sin(yaw);return {x:x*c-z*s,z:x*s+z*c};}
export function worldPose(p,start,yaw){const c=Math.cos(yaw),s=Math.sin(yaw);return {...p,x:start.x+p.x*c+p.z*s,z:start.z-p.x*s+p.z*c,yaw:p.yaw+yaw};}
// Replanning from a paused reverse uses endpoint tangents, preserving the
// current vehicle pose and arriving square to the selected bay.
export function reverseReplan(start,bay){
 const endYaw=Math.sign(bay.x)*Math.PI/2,reach=Math.max(2,Math.min(5,Math.hypot(bay.x-start.x,bay.z-start.z)*.48));
 const p=[start,{x:start.x+Math.sin(start.yaw)*reach,z:start.z+Math.cos(start.yaw)*reach},{x:bay.x-Math.sin(endYaw)*reach,z:bay.z-Math.cos(endYaw)*reach},bay];
 const duration=Math.max(6,Math.hypot(bay.x-start.x,bay.z-start.z)*.9);
 return {duration,sample(time){const t=smooth(time/duration),u=1-t,x=u*u*u*p[0].x+3*u*u*t*p[1].x+3*u*t*t*p[2].x+t*t*t*p[3].x,z=u*u*u*p[0].z+3*u*u*t*p[1].z+3*u*t*t*p[2].z+t*t*t*p[3].z,dx=3*u*u*(p[1].x-p[0].x)+6*u*t*(p[2].x-p[1].x)+3*t*t*(p[3].x-p[2].x),dz=3*u*u*(p[1].z-p[0].z)+6*u*t*(p[2].z-p[1].z)+3*t*t*(p[3].z-p[2].z);return {x,z,yaw:Math.atan2(dx,dz),distance:-Math.hypot(x-start.x,z-start.z),phase:'reverse',complete:time>=duration};}};
}
