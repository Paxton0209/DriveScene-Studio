import {parkingLegDuration,parkingApproachBrakeScale} from './parking-speed.js';
// Low-speed rear-axle bicycle geometry (metres/radians). The displayed centre
// path is derived from that axle and the actual body offset, never slid sideways.
export function cubic(p,t){const u=1-t,[a,b,c,d]=p;
 const x=u*u*u*a.x+3*u*u*t*b.x+3*u*t*t*c.x+t*t*t*d.x,z=u*u*u*a.z+3*u*u*t*b.z+3*u*t*t*c.z+t*t*t*d.z;
 const dx=3*u*u*(b.x-a.x)+6*u*t*(c.x-b.x)+3*t*t*(d.x-c.x),dz=3*u*u*(b.z-a.z)+6*u*t*(c.z-b.z)+3*t*t*(d.z-c.z),ddx=6*u*(c.x-2*b.x+a.x)+6*t*(d.x-2*c.x+b.x),ddz=6*u*(c.z-2*b.z+a.z)+6*t*(d.z-2*c.z+b.z);
 return {x,z,dx,dz,curvature:(dz*ddx-dx*ddz)/Math.max(1e-9,Math.hypot(dx,dz)**3)};
}
export function bodyPose(axle,yaw,rearOffset){return {x:axle.x-Math.sin(yaw)*rearOffset,z:axle.z-Math.cos(yaw)*rearOffset,yaw};}
export function overlaps(a,b,margin=.12){
 const axes=[{x:Math.cos(a.yaw),z:-Math.sin(a.yaw)},{x:Math.sin(a.yaw),z:Math.cos(a.yaw)},{x:Math.cos(b.yaw),z:-Math.sin(b.yaw)},{x:Math.sin(b.yaw),z:Math.cos(b.yaw)}];
 const radius=(o,n)=>Math.abs(n.x*Math.cos(o.yaw)-n.z*Math.sin(o.yaw))*o.width/2+Math.abs(n.x*Math.sin(o.yaw)+n.z*Math.cos(o.yaw))*o.length/2;
 return axes.every(n=>Math.abs((a.x-b.x)*n.x+(a.z-b.z)*n.z)<radius(a,n)+radius(b,n)+margin);
}
export function parkingVehicle(spec={}){
 const wheels=spec.wheels||[],centres=wheels.map(w=>(w.min[2]+w.max[2])/2),front=centres.filter(z=>z<0),rear=centres.filter(z=>z>0);
 const rearOffset=rear.length?rear.reduce((a,b)=>a+b,0)/rear.length:(spec.length||4.72)*.294;
 const frontOffset=front.length?front.reduce((a,b)=>a+b,0)/front.length:-(spec.length||4.72)*.314;
 return {length:spec.length||4.72,width:spec.width||2.10,rearOffset,wheelbase:spec.wheelbase||rearOffset-frontOffset,maxSteer:.56};
}
function metric(points,samples=64){let length=0,maxCurvature=0,previous=cubic(points,0);for(let i=0;i<=samples;i++){const p=cubic(points,i/samples);maxCurvature=Math.max(maxCurvature,Math.abs(p.curvature));if(p.dx<-.001||p.dz<-.001)return null;if(i)length+=Math.hypot(p.x-previous.x,p.z-previous.z);previous=p;}return {length,maxCurvature};}
// Spread the setup turn across a broad steering bell. The long entry and
// unwind keep the heading change gradual throughout the visible arc.
function setupArc(theta,radius){
 const enter=.45,leave=.45,length=theta*radius/(1-(enter+leave)/2),steps=512,rows=[{x:0,z:0}];
 const rampIntegral=u=>u*u*u-u*u*u*u/2;
 const ease=u=>u*u*(3-2*u);
 const integral=u=>u<enter?enter*rampIntegral(u/enter):u>1-leave?1-(enter+leave)/2-leave*rampIntegral((1-u)/leave):u-enter/2;
 const angle=u=>length/radius*integral(u);
 let x=0,z=0;
 for(let i=1;i<=steps;i++){const mid=angle((i-.5)/steps),ds=length/steps;x-=Math.sin(mid)*ds;z-=Math.cos(mid)*ds;rows.push({x,z});}
 const sample=f=>{const u=Math.max(0,Math.min(1,f)),at=u*steps,i=Math.min(steps,Math.floor(at)),du=u-i/steps,mid=angle(i/steps+du/2),ds=du*length;return {x:rows[i].x-Math.sin(mid)*ds,z:rows[i].z-Math.cos(mid)*ds,yaw:angle(u),k:ease(Math.min(1,u/enter,(1-u)/leave))/radius};};
 return {length,end:sample(1),sample};
}
function reverseTable(points){const rows=[{t:0,s:0}];let last=cubic(points,0),length=0;for(let i=1;i<=256;i++){const t=i/256,q=cubic(points,t);length+=Math.hypot(q.x-last.x,q.z-last.z);rows.push({t,s:length});last=q;}
 return {length,sample(f){const d=Math.max(0,Math.min(1,f))*length;let lo=0,hi=256;while(hi-lo>1){const m=(lo+hi)>>1;if(rows[m].s<d)lo=m;else hi=m;}const a=rows[lo],b=rows[hi];return cubic(points,a.t+(b.t-a.t)*(d-a.s)/Math.max(1e-9,b.s-a.s));}};
}
// A driver can reverse at near-full lock and unwind into the bay. Ramp both
// ends of the steering arc instead of forcing a loose cubic over the whole leg.
function reverseTurn(theta,radius){
 const ramp=.10,length=(Math.PI/2-theta)*radius/(1-ramp),steps=512,rows=[{x:0,z:0}];
 const integral=u=>u<ramp?u*u/(2*ramp):u>1-ramp?1-ramp-(1-u)*(1-u)/(2*ramp):u-ramp/2;
 const angle=u=>theta+length/radius*integral(u);let x=0,z=0;
 for(let i=1;i<=steps;i++){const a=angle((i-.5)/steps),ds=length/steps;x+=Math.sin(a)*ds;z+=Math.cos(a)*ds;rows.push({x,z});}
 return {length,end:rows.at(-1),sample(f){const u=Math.max(0,Math.min(1,f)),at=u*steps,i=Math.min(steps,Math.floor(at)),du=u-i/steps,a=angle(i/steps+du/2),ds=du*length;return {x:rows[i].x+Math.sin(a)*ds,z:rows[i].z+Math.cos(a)*ds,dx:Math.sin(angle(u)),dz:Math.cos(angle(u)),curvature:Math.min(1,u/ramp,(1-u)/ramp)/radius};}};
}
function compactReverse(ax,az,theta,turn,lead,tail){
 const length=lead+turn.length+tail;
 return {length,sample(f){const d=Math.max(0,Math.min(1,f))*length,along=Math.min(d,lead),q=turn.sample((d-lead)/turn.length),last=Math.max(0,d-lead-turn.length);
  if(d<lead)return {x:ax+Math.sin(theta)*along,z:az+Math.cos(theta)*along,dx:Math.sin(theta),dz:Math.cos(theta),curvature:0};
  return {...q,x:ax+Math.sin(theta)*lead+q.x+last,z:az+Math.cos(theta)*lead+q.z};
 }};
}
// Parameterize the visible body centre by measured arc length. The rear axle
// still supplies heading, steering and wheel travel, including through bends.
function bodyTravel(sample){
 const steps=2048,rows=[0];let previous=sample(0),length=0;
 for(let i=1;i<=steps;i++){const q=sample(i/steps);length+=Math.hypot(q.x-previous.x,q.z-previous.z);rows.push(length);previous=q;}
 return {length,sample(f){const d=Math.max(0,Math.min(1,f))*length;let lo=0,hi=steps;
  while(hi-lo>1){const mid=(lo+hi)>>1;if(rows[mid]<d)lo=mid;else hi=mid;}
  return sample((lo+(d-rows[lo])/Math.max(1e-12,rows[hi]-rows[lo]))/steps);
 }};
}
export function planParking(bay,startZ=0,options={}){
 const vehicle=parkingVehicle(options.vehicle),{rearOffset:rear,wheelbase,maxSteer}=vehicle,side=Math.sign(bay.x)||1,r=Math.abs(bay.x),radius=wheelbase/Math.tan(maxSteer),obstacles=options.obstacles||[],candidates=[];
 // Useful setup angle is constrained by the complete body sweep and neighbours.
 for(let deg=0;deg<=56;deg+=4){const theta=deg*Math.PI/180,arc=setupArc(theta,radius*1.8),turn=reverseTurn(theta,radius);
  // Enumerate straight lead-ins, then solve the finish exactly. The body sweep
  // below decides whether the compact turn has enough room beside neighbours.
  for(let lead=0;lead<=2;lead+=.25){
   const ax=arc.end.x,delta=turn.end.z+lead*Math.cos(theta),az=bay.z-delta,tail=r+rear-ax-turn.end.x-lead*Math.sin(theta);if(tail<0)continue;
   const turnZ=az-arc.end.z,straight=turnZ-(startZ+rear),directReverse=deg===0&&straight>=0;
   const reverseCurve=compactReverse(ax,directReverse?startZ+rear:az,theta,turn,lead+(directReverse?straight:0),tail),score=(directReverse?0:Math.abs(straight)+arc.length)+reverseCurve.length+(straight>0&&!directReverse?.65:0);
   candidates.push({theta,radius,arc,ax,az:directReverse?startZ+rear:az,turnZ:directReverse?startZ+rear:turnZ,straight:directReverse?0:straight,directReverse,reverseCurve,length:reverseCurve.length,score});
  }
  if(deg<24||deg>44)continue;
  for(let delta=2;delta<=6;delta+=.5){
   const ax=arc.end.x,az=bay.z-delta,turnZ=az-arc.end.z,straight=turnZ-(startZ+rear);
   for(let a=2;a<=6;a+=.5)for(let b=2;b<=6;b+=.5){
    const points=[{x:ax,z:az},{x:ax+Math.sin(theta)*a,z:az+Math.cos(theta)*a},{x:r+rear-b,z:bay.z},{x:r+rear,z:bay.z}],m=metric(points,32);
    if(!m||m.maxCurvature>1/radius*.995)continue;
    // Minimize actual rear-axle travel, including the aisle setup. A gear
    // change costs time; it cannot substitute for clearance or steering limits.
    const score=Math.abs(straight)+arc.length+m.length+(straight>0?.65:0);
    candidates.push({theta,radius,arc,ax,az,turnZ,straight,points,...m,score});
   }
  }
 }
 candidates.sort((a,b)=>a.score-b.score);
 const clear=p=>!obstacles.some(o=>overlaps({...p,width:vehicle.width,length:vehicle.length},o));
 const valid=plan=>{
  const n=Math.ceil(Math.abs(plan.straight)/.10);
  for(let i=0;i<=n;i++)if(!clear({x:0,z:startZ+plan.straight*(n?i/n:0),yaw:0}))return false;
  for(let i=0;i<=160;i++){const q=plan.arc.sample(i/160);if(!clear(bodyPose({x:side*q.x,z:plan.turnZ+q.z},side*q.yaw,rear)))return false;}
  for(let i=0;i<=192;i++){const q=plan.reverseCurve?plan.reverseCurve.sample(i/192):cubic(plan.points,i/192),yaw=side*Math.atan2(q.dx,q.dz);if(Math.abs(q.curvature)>1/radius+1e-9||!clear(bodyPose({x:side*q.x,z:q.z},yaw,rear)))return false;}
  return true;
 };
 const plan=candidates.find(valid);if(!plan)return null;
 const table=plan.reverseCurve||reverseTable(plan.points),forwardArc=plan.arc.length,straightLength=Math.abs(plan.straight),forwardLength=straightLength+forwardArc;
 // Ease out of rest, cruise at up to 8 km/h, then brake into each stop.
 const legDuration=parkingLegDuration;
 const align=plan.straight>0?legDuration(straightLength):0,shift=plan.directReverse?0:.3;
 const stop=bodyPose({x:side*plan.ax,z:plan.az},side*plan.theta,rear);
 const samples={
  forwardSample(f){
   const d=Math.max(0,Math.min(1,f))*(align?forwardArc:forwardLength),straightDistance=align?0:Math.min(d,straightLength);
   if(!align&&d<=straightLength)return {x:0,z:startZ-straightDistance,yaw:0,steer:0,distance:straightDistance};
   const q=plan.arc.sample((d-(align?0:straightLength))/forwardArc),p=bodyPose({x:side*q.x,z:plan.turnZ+q.z},side*q.yaw,rear);
   return {...p,steer:side*Math.atan(wheelbase*q.k),distance:(align?-straightLength:0)+d};
  },
  reverseSample(t){const q=table.sample(t),yaw=side*Math.atan2(q.dx,q.dz),p=bodyPose({x:side*q.x,z:q.z},yaw,rear);return {...p,steer:-side*Math.atan(wheelbase*q.curvature),axleFraction:t};}
 };
 const forwardTravel=bodyTravel(samples.forwardSample),reverseTravel=bodyTravel(samples.reverseSample);
 const forward=plan.directReverse?0:legDuration(forwardTravel.length,parkingApproachBrakeScale),reverse=legDuration(reverseTravel.length),total=align+(align?shift:0)+forward+shift+reverse;
 return {...plan,vehicle,side,align,forward,shift,reverse,total,forwardLength,reverseLength:table.length,forwardTravelLength:forwardTravel.length,reverseTravelLength:reverseTravel.length,stop,forwardSample:forwardTravel.sample,reverseSample:reverseTravel.sample};
}
