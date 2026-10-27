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
// Integrate a finite steering ramp before the constant-radius swing. Curvature
// starts at zero, so the wheels and chassis never snap from straight to full lock.
function setupArc(theta,radius){
 const ramp=.30,length=theta*radius/(1-ramp/2),steps=512,rows=[{x:0,z:0}],angle=u=>length/radius*(u<ramp?u*u/(2*ramp):u-ramp/2);
 let x=0,z=0;
 for(let i=1;i<=steps;i++){const mid=angle((i-.5)/steps),ds=length/steps;x-=Math.sin(mid)*ds;z-=Math.cos(mid)*ds;rows.push({x,z});}
 const sample=f=>{const u=Math.max(0,Math.min(1,f)),at=u*steps,i=Math.min(steps,Math.floor(at)),du=u-i/steps,mid=angle(i/steps+du/2),ds=du*length;return {x:rows[i].x-Math.sin(mid)*ds,z:rows[i].z-Math.cos(mid)*ds,yaw:angle(u),k:Math.min(1,u/ramp)/radius};};
 return {length,end:sample(1),sample};
}
function reverseTable(points){const rows=[{t:0,s:0}];let last=cubic(points,0),length=0;for(let i=1;i<=256;i++){const t=i/256,q=cubic(points,t);length+=Math.hypot(q.x-last.x,q.z-last.z);rows.push({t,s:length});last=q;}
 return {length,sample(f){const d=Math.max(0,Math.min(1,f))*length;let lo=0,hi=256;while(hi-lo>1){const m=(lo+hi)>>1;if(rows[m].s<d)lo=m;else hi=m;}const a=rows[lo],b=rows[hi];return cubic(points,a.t+(b.t-a.t)*(d-a.s)/Math.max(1e-9,b.s-a.s));}};
}
export function planParking(bay,startZ=0,options={}){
 const vehicle=parkingVehicle(options.vehicle),{rearOffset:rear,wheelbase,maxSteer}=vehicle,side=Math.sign(bay.x)||1,r=Math.abs(bay.x),radius=wheelbase/Math.tan(maxSteer),obstacles=options.obstacles||[],candidates=[];
 // Useful setup angle is constrained by the complete body sweep and neighbours.
 for(let deg=24;deg<=44;deg+=4){const theta=deg*Math.PI/180,arc=setupArc(theta,radius);
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
  for(let i=0;i<=128;i++){const q=cubic(plan.points,i/128),yaw=side*Math.atan2(q.dx,q.dz);if(Math.abs(q.curvature)>1/radius||!clear(bodyPose({x:side*q.x,z:q.z},yaw,rear)))return false;}
  return true;
 };
 const plan=candidates.find(valid);if(!plan)return null;
 const table=reverseTable(plan.points),forwardArc=plan.arc.length,straightLength=Math.abs(plan.straight),forwardLength=straightLength+forwardArc;
 const align=plan.straight>0?Math.max(1.2,straightLength/1.1):0,forward=Math.max(3.2,(align?forwardArc:forwardLength)/1.35),shift=.65,reverse=Math.max(5.5,table.length/.95),total=align+(align?shift:0)+forward+shift+reverse;
 const stop=bodyPose({x:side*plan.ax,z:plan.az},side*plan.theta,rear);
 return {...plan,vehicle,side,align,forward,shift,reverse,total,forwardLength,reverseLength:table.length,stop,
  forwardSample(f){
   const d=Math.max(0,Math.min(1,f))*(align?forwardArc:forwardLength),straightDistance=align?0:Math.min(d,straightLength);
   if(!align&&d<=straightLength)return {x:0,z:startZ-straightDistance,yaw:0,steer:0,distance:straightDistance};
   const q=plan.arc.sample((d-(align?0:straightLength))/forwardArc),p=bodyPose({x:side*q.x,z:plan.turnZ+q.z},side*q.yaw,rear);
   return {...p,steer:side*Math.atan(wheelbase*q.k),distance:(align?-straightLength:0)+d};
  },
  reverseSample(t){const q=table.sample(t),yaw=side*Math.atan2(q.dx,q.dz),p=bodyPose({x:side*q.x,z:q.z},yaw,rear);return {...p,steer:-side*Math.atan(wheelbase*q.curvature)};}
 };
}
