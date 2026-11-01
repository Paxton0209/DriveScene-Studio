import {planParking} from './parking-kinematics.js';
import {parkingTravel,parkingLegDuration,parkingApproachBrakeScale} from './parking-speed.js';
export {parkingTravel} from './parking-speed.js';
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
// Remaining travel belongs to the current gear leg, in metres along the
// visible body-centre curve. A stationary gear change never inherits another leg.
export function parkingSegment(time,bay,startZ=0,options={}){
 const p=planFor(bay,startZ,options);if(!p)return {gear:null,remaining:null,phase:'blocked'};
 const setup=p.align+(p.align?p.shift:0),forwardEnd=setup+p.forward,reverseStart=forwardEnd+p.shift;
 if(time>=p.total)return {gear:'P',remaining:0,phase:'parked'};
 if(p.align&&time<p.align)return {gear:'R',remaining:Math.abs(p.straight)*(1-parkingTravel(time,p.align)),phase:'aligning'};
 if(time<setup)return {gear:'D',remaining:null,phase:'shift'};
 if(time<forwardEnd)return {gear:'D',remaining:p.forwardTravelLength*(1-parkingTravel(time-setup,p.forward,parkingApproachBrakeScale)),phase:'forward'};
 if(time<reverseStart)return {gear:'R',remaining:null,phase:'shift'};
 return {gear:'R',remaining:p.reverseTravelLength*(1-parkingTravel(time-reverseStart,p.reverse)),phase:'reverse'};
}
export function parkingPose(time,bay,startZ=0,options={}){
 const p=planFor(bay,startZ,options);if(!p)return {x:0,z:startZ,yaw:0,steer:0,phase:'blocked',complete:false,distance:0};
 const setup=p.align+(p.align?p.shift:0),forwardEnd=setup+p.forward,reverseStart=forwardEnd+p.shift;
 let q,phase,distance;
 if(p.align&&time<setup){const f=parkingTravel(time,p.align);q={x:0,z:startZ+p.straight*f,yaw:0,steer:0};phase=time<p.align?'aligning':'shift';distance=-Math.abs(p.straight)*f;}
 else if(time<=forwardEnd&&p.forward>0){const f=parkingTravel(time-setup,p.forward,parkingApproachBrakeScale);q=p.forwardSample(f);phase='forward';distance=q.distance;}
 else {const t=parkingTravel(time-reverseStart,p.reverse);q=p.reverseSample(t);phase=time<reverseStart?'shift':'reverse';distance=p.forwardLength-(p.align?2*Math.abs(p.straight):0)-p.reverseLength*q.axleFraction;}
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

 const point=t=>{const u=1-t;return {x:u*u*u*p[0].x+3*u*u*t*p[1].x+3*u*t*t*p[2].x+t*t*t*p[3].x,z:u*u*u*p[0].z+3*u*u*t*p[1].z+3*u*t*t*p[2].z+t*t*t*p[3].z};};
 const lengths=[0];let previous=point(0);for(let i=1;i<=128;i++){const q=point(i/128);lengths.push(lengths.at(-1)+Math.hypot(q.x-previous.x,q.z-previous.z));previous=q;}
 const length=lengths.at(-1),duration=parkingLegDuration(length),travelled=time=>length*parkingTravel(time,duration);
 const parameter=time=>{const d=travelled(time);let lo=0,hi=128;while(hi-lo>1){const m=(lo+hi)>>1;if(lengths[m]<d)lo=m;else hi=m;}return (lo+(d-lengths[lo])/Math.max(1e-9,lengths[hi]-lengths[lo]))/128;};
 return {duration,remaining:time=>Math.max(0,length-travelled(time)),sample(time){const t=parameter(time),u=1-t,{x,z}=point(t),dx=3*u*u*(p[1].x-p[0].x)+6*u*t*(p[2].x-p[1].x)+3*t*t*(p[3].x-p[2].x),dz=3*u*u*(p[1].z-p[0].z)+6*u*t*(p[2].z-p[1].z)+3*t*t*(p[3].z-p[2].z);return {x,z,yaw:Math.atan2(dx,dz),distance:-travelled(time),phase:'reverse',complete:time>=duration};}};
}
