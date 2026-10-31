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

// Camera scheduling from release 0b10710 (v0.18, 2026-10-13).
// Preserve one vehicle pivot, one spring, quaternion rotation and screen anchor.
export function captureParkingView(camera,car,aim){
 camera.updateMatrixWorld(true);
 const pivot=car.position.clone().add(new THREE.Vector3(0,.85,0)),p=pivot.clone().project(camera);
 return {position:camera.position.clone(),aim:aim.clone(),quaternion:camera.quaternion.clone(),offset:new THREE.Vector2(camera.view?.enabled?camera.view.offsetX:0,camera.view?.enabled?camera.view.offsetY:0),screenAnchor:new THREE.Vector2((p.x+1)/2,(1-p.y)/2),anchor:.5,reference:true};
}

export function parkingViewPose(camera,car,kind){
 const probe=camera.clone(),yaw=car.rotation.y,axis=new THREE.Vector3(0,1,0);
 // Default shares Driving Low's camera-to-car offset and forward aim. Keep
 // this endpoint shared by initial configuration, scene return and view picks.
 const position=kind==='bev'?[0,34,.1]:kind==='raised'?[0,26,22]:[0,8.48,23];
 const aim=kind==='bev'?[0,0,0]:kind==='raised'?[0,0,-5]:[0,-.02,-24];
 probe.clearViewOffset();probe.up.set(0,1,0);
 probe.position.fromArray(position).applyAxisAngle(axis,yaw).add(car.position);
 const target=new THREE.Vector3(...aim).applyAxisAngle(axis,yaw).add(car.position);
 probe.lookAt(target);probe.updateMatrixWorld(true);
 // Retain the stable current vehicle envelope across model switches. Endpoint
 // composition keeps the low/high bottom anchors, without changing meshes.
 const frame=parkingFrame(car,probe),bottom=kind==='default'?.785:.69;
 probe.setViewOffset(1920,1080,0,(frame.bottom-bottom)*1080,1920,1080);probe.updateMatrixWorld(true);
 return {...captureParkingView(probe,car,target),anchor:bottom-frame.height/2};
}

export function applyParkingView(camera,car,pose){
 camera.position.copy(pose.position);camera.quaternion.copy(pose.quaternion);
 camera.setViewOffset(1920,1080,pose.offset.x,pose.offset.y,1920,1080);camera.updateMatrixWorld(true);
 const actual=car.position.clone().add(new THREE.Vector3(0,.85,0)).project(camera);
 camera.setViewOffset(1920,1080,pose.offset.x+((actual.x+1)/2-pose.screenAnchor.x)*1920,pose.offset.y+((1-actual.y)/2-pose.screenAnchor.y)*1080,1920,1080);camera.updateMatrixWorld(true);
}

export function sampleParkingView(from,to,elapsed,focus=new THREE.Vector3(0,.87,0)){
 const time=Math.max(0,elapsed)/1000,frequency=13.8,direction=to.position.clone().sub(from.position);
 const initialVelocity=THREE.MathUtils.clamp((from.velocity?.dot(direction)??0)/Math.max(.001,direction.lengthSq()),0,8);
 const spring=THREE.MathUtils.clamp(1+(-1+(initialVelocity-frequency)*time)*Math.exp(-frequency*time),0,1);
 const complete=1-spring<.0008,phase=complete?1:spring;
 const a=new THREE.Spherical().setFromVector3(from.position.clone().sub(focus)),b=new THREE.Spherical().setFromVector3(to.position.clone().sub(focus));
 b.theta=a.theta+Math.atan2(Math.sin(b.theta-a.theta),Math.cos(b.theta-a.theta));
 const position=phase===0?from.position.clone():complete?to.position.clone():new THREE.Vector3().setFromSpherical(new THREE.Spherical(THREE.MathUtils.lerp(a.radius,b.radius,phase),THREE.MathUtils.lerp(a.phi,b.phi,phase),THREE.MathUtils.lerp(a.theta,b.theta,phase))).add(focus);
 return {position,aim:from.aim.clone().lerp(to.aim,phase),quaternion:from.quaternion.clone().slerp(to.quaternion,phase),offset:from.offset.clone().lerp(to.offset,phase),screenAnchor:from.screenAnchor.clone().lerp(to.screenAnchor,phase),anchor:THREE.MathUtils.lerp(from.anchor,to.anchor,phase),reference:true,complete,phase};
}
