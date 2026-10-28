import {MOTION_TIME_SCALE} from '../motion-config.js';
import * as THREE from 'three';


// Stable world-space envelope: replacing a mesh must not pan the environment.
export function parkingFrame(car,camera){
 const axis=new THREE.Vector3(0,1,0),points=[-1.05,1.05].flatMap(x=>[-1.74,1.74].flatMap(z=>[0,1.9].map(y=>new THREE.Vector3(x,y,z).applyAxisAngle(axis,car.rotation.y).add(car.position).project(camera))));
 const xs=points.map(p=>(1+p.x)/2),ys=points.map(p=>(1-p.y)/2),left=Math.min(...xs),top=Math.min(...ys),bottom=Math.max(...ys);
 return {left,top,bottom,width:Math.max(...xs)-left,height:bottom-top};
}

// Fit the maneuver after applying the same lower vehicle anchor as the live view.
// This keeps a distant/behind bay visible without allowing the car to drift up.
export function fitParkingCamera(camera,car,yaw,focus,direction,distance,points,anchor,centered=false){
 const probe=new THREE.PerspectiveCamera(camera.fov,camera.aspect,camera.near,camera.far),axis=new THREE.Vector3(0,1,0);
 const corners=[-1.1,1.1].flatMap(x=>[-2.65,2.65].flatMap(z=>[0,1.9].map(y=>new THREE.Vector3(x,y,z).applyAxisAngle(axis,yaw).add(car))));
 const fits=length=>{
  probe.position.copy(focus).addScaledVector(direction,length);probe.lookAt(focus);probe.updateMatrixWorld(true);probe.clearViewOffset();
  const projections=corners.map(p=>p.clone().project(probe)),ys=projections.map(p=>(1-p.y)/2),xs=projections.map(p=>(1+p.x)/2);
  const bottom=Math.max(...ys),centerY=(Math.min(...ys)+bottom)/2,centerX=(Math.min(...xs)+Math.max(...xs))/2;
  probe.setViewOffset(1920,1080,centered?(centerX-.5)*1920:0,((centered?centerY:bottom)-anchor)*1080,1920,1080);probe.updateMatrixWorld(true);
  const projected=[...corners,...points].map(p=>p.clone().project(probe));
  return projected.every(p=>Math.abs(p.x)<.90&&p.y>-.84&&p.y<.88&&p.z<1)||!points.length;
 };
 let length=distance;
 if(!fits(length)){
  let low=length,high=length;
  for(let n=0;n<24&&!fits(high);n++)high*=1.25;
  // Solve the framing boundary continuously; geometric steps caused visible
  // camera distance jumps as a moving route crossed a screen margin.
  for(let n=0;n<22;n++){const mid=(low+high)/2;if(fits(mid))high=mid;else low=mid;}
  length=high;
 }
 return {position:focus.clone().addScaledVector(direction,length),aim:focus,anchor};
}

// Match the open-road critically damped camera response and spherical orbit.
// A single monotone phase drives radius, elevation, heading and screen anchor.
export function sampleParkingView(from,to,elapsed){
 const time=Math.max(0,elapsed)/1000/MOTION_TIME_SCALE;
 const remaining=(1+13.8*time)*Math.exp(-13.8*time),complete=remaining<.0008;
 const phase=complete?1:1-remaining;
 const a=new THREE.Spherical().setFromVector3(from.position.clone().sub(from.aim));
 const b=new THREE.Spherical().setFromVector3(to.position.clone().sub(to.aim));
 b.theta=a.theta+Math.atan2(Math.sin(b.theta-a.theta),Math.cos(b.theta-a.theta));
 const aim=from.aim.clone().lerp(to.aim,phase);
 const orbit=new THREE.Spherical(THREE.MathUtils.lerp(a.radius,b.radius,phase),THREE.MathUtils.lerp(a.phi,b.phi,phase),THREE.MathUtils.lerp(a.theta,b.theta,phase));
 return {position:new THREE.Vector3().setFromSpherical(orbit).add(aim),aim,anchor:THREE.MathUtils.lerp(from.anchor,to.anchor,phase),complete};
}
