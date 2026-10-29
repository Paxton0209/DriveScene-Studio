import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createParkingMotion} from '../scene-experience.js';
function fixture(){
 const camera=new THREE.PerspectiveCamera(40,16/9,.1,1000);camera.position.set(0,22,14);camera.lookAt(0,.85,0);camera.updateMatrixWorld(true);
 const world={state:{id:'10',mode:'light'},root:new THREE.Group(),scene:new THREE.Scene(),car:new THREE.Group(),camera,cameraAim:new THREE.Vector3(0,.85,0),parkingBays:[-5.9,5.9].flatMap(x=>[3.6,0,-3.6,-7.2].map(z=>({x,z,width:4.9,depth:2.8}))),renderFrame(){},finishCameraMotion(){},captureCamera(){return {position:camera.position.clone(),carPosition:this.car.position.clone(),aim:this.cameraAim.clone()}},applyCamera(p){this.car.position.copy(p.carPosition);camera.position.copy(p.position);this.cameraAim.copy(p.aim);camera.lookAt(p.aim)}};
 world.draftTime=0;const motion=createParkingMotion(world);motion.sync();
 const tick=(seconds,assist=true)=>{for(let t=0;t<seconds-1e-8;t+=1/30){const dt=Math.min(1/30,seconds-t);world.draftTime+=dt*1000;motion.step(dt);motion.sync({assist});}};
 const pick=bay=>{const p=new THREE.Vector3(bay.x,.03,bay.z).project(camera);return motion.pick(p.x,p.y)};
 return {world,motion,pick,tick};
}
test('No bay is assigned or maneuver started until the user selects a vacant bay',()=>{
 const {world,motion,pick}=fixture();assert.equal(motion.get().target,null);assert.equal(motion.start(),false);const center=world.car.position.clone().add(new THREE.Vector3(0,.85,0)).project(world.camera);assert.ok(Math.abs(center.x)<1e-9&&Number.isFinite(center.y)&&Math.abs(center.y)<1,'ego remains centered horizontally and inside the default frame');
 motion.sync({traffic:true});assert.equal(pick(world.parkingBays[3]),false,'occupied bay is not selectable');assert.equal(motion.get().target,null);
 assert.equal(pick(world.parkingBays[1]),true);assert.deepEqual(motion.get().target,{x:-5.9,z:0});assert.equal(motion.get().active,false);assert.equal(motion.start(),true);
 assert.equal(pick(world.parkingBays[5]),false,'selection locked during maneuver');
});
test('Parking hover requests repaint only for changed coverage and clears selected or occupied bays',()=>{
 const {world,motion,pick}=fixture();
 for(const bay of world.parkingBays)bay.tile={material:{uniforms:{hover:{value:0}}}};
 const hover=bay=>{const p=new THREE.Vector3(bay.x,.03,bay.z).project(world.camera);return motion.hover(p.x,p.y);};
 const values=()=>world.parkingBays.map(b=>b.tile.material.uniforms.hover.value);
 assert.equal(motion.hover(null,null),false);
 assert.equal(hover(world.parkingBays[1]),true);assert.equal(values().filter(Boolean).length,1);
 assert.equal(hover(world.parkingBays[1]),false,'moving inside the same bay needs no repaint');
 assert.equal(hover(world.parkingBays[2]),true);assert.equal(values()[1],0);assert.equal(values()[2],1);
 assert.equal(motion.hover(null,null),true);assert.ok(values().every(v=>v===0));
 assert.equal(motion.hover(null,null),false,'repeated leave stays idle');
 motion.sync({traffic:true});assert.equal(hover(world.parkingBays[3]),false,'occupied bay has no hover');
 assert.equal(hover(world.parkingBays[1]),true);assert.equal(pick(world.parkingBays[1]),true);
 assert.equal(hover(world.parkingBays[1]),true,'selection clears the previous hover');assert.ok(values().every(v=>v===0));
 assert.equal(hover(world.parkingBays[1]),false);assert.equal(motion.start(),true);
 assert.equal(hover(world.parkingBays[2]),false,'active maneuver does not accept hover');
});
for(const direction of [-1,1])for(const side of [-5.9,5.9])test(`Independent camera and continuous pause/exit/reselection for bay ${side}, direction ${direction}`,()=>{
 const {world,motion,pick,tick}=fixture();const bay=world.parkingBays.find(b=>b.x===side&&b.z===-3.6),beforeSelection=world.camera.position.clone();assert.ok(pick(bay));assert.ok(beforeSelection.equals(world.camera.position),'selection starts the camera transition without jumping');tick(1);assert.equal(motion.get().camera.tween,false);assert.equal(motion.get().view,'raised');motion.start();tick(8);
 assert.ok(Math.abs(world.car.rotation.y)>.05);assert.ok(Math.abs(motion.get().camera.heading-world.car.rotation.y)<1e-8,'camera follows the reversing vehicle heading');
 motion.sync({assist:false});const held=world.car.position.clone(),beforePause=world.camera.position.clone();motion.step(1);assert.ok(held.equals(world.car.position),'missing path freezes vehicle');assert.ok(beforePause.equals(world.camera.position),'pause transition starts from actual camera');tick(2,false);assert.equal(motion.get().paused,true);
 const beforeResume=world.camera.position.clone();motion.start();assert.ok(beforeResume.equals(world.camera.position),'resume never jumps camera');tick(8);assert.equal(motion.get().complete,true);assert.ok(world.car.position.distanceTo(new THREE.Vector3(bay.x,0,bay.z))<1e-8);assert.equal(motion.start(),false);tick(1.2);assert.equal(motion.get().view,'bev');assert.ok(Math.abs(world.camera.position.z-world.cameraAim.z)<.1,'completion is top view');
 assert.equal(motion.prepareExit(),true);assert.equal(motion.start(),false,'exit requires direction');motion.chooseExit(direction);motion.start();tick(7.6);assert.equal(motion.get().target,null);assert.equal(motion.get().exited,true);assert.ok(Math.abs(world.car.position.x)<1e-8);tick(1.2);assert.equal(pick(bay),true);motion.start();tick(30);assert.ok(world.car.position.distanceTo(new THREE.Vector3(bay.x,0,bay.z))<1e-8);
});
for(const hz of [30,60,120])for(const direction of [-1,1])for(const side of [-5.9,5.9])test(`Exit camera avoids a one-frame half-turn at ${hz} Hz, bay ${side}, direction ${direction}`,()=>{
 const {world,motion,pick,tick}=fixture();assert.ok(pick(world.parkingBays.find(b=>b.x===side&&b.z===-3.6)));tick(1.2);motion.start();tick(30);motion.prepareExit();motion.chooseExit(direction);tick(1.2);motion.start();
 let previous=world.camera.quaternion.clone(),maxAngle=0,minRadius=Infinity;
 for(let i=0;i<10*hz;i++){
  world.draftTime+=1000/hz;motion.step(1/hz);motion.sync({assist:true});
  if(motion.get().exited){maxAngle=Math.max(maxAngle,previous.angleTo(world.camera.quaternion));const offset=world.camera.position.clone().sub(world.cameraAim);minRadius=Math.min(minRadius,Math.hypot(offset.x,offset.z));}
  previous.copy(world.camera.quaternion);
 }
 assert.equal(motion.get().exited,true);assert.ok(maxAngle<12*Math.PI/180,`camera jumped ${maxAngle*180/Math.PI} degrees`);assert.ok(minRadius>12,`camera crossed overhead at radius ${minRadius}`);assert.equal(motion.get().camera.tween,false);
 const offset=world.camera.position.clone().sub(world.cameraAim);assert.ok(Math.abs(offset.x)<.01);assert.equal(Math.sign(offset.z),direction<0?1:-1);
});
test('Changing scene clears selection and cannot carry an active parking session',()=>{
 const {world,motion,pick}=fixture();pick(world.parkingBays[1]);motion.start();world.root=new THREE.Group();motion.sync();assert.equal(motion.get().target,null);assert.equal(motion.get().active,false);
});

for(const sceneId of ['10','17'])for(const view of ['default','raised','bev'])test(`Model replacement preserves camera and projected environment in ${sceneId}/${view}`,()=>{
 const {world,motion,tick}=fixture();world.state.id=sceneId;world.car.add(new THREE.Mesh(new THREE.BoxGeometry(1.85,1.45,4.65)));
 motion.sync();motion.previewCamera(view);tick(2);const camera=world.camera.position.clone(),matrix=world.camera.projectionMatrix.clone(),point=new THREE.Vector3(7,0,-9).project(world.camera);
 for(const size of [[2.01,1.7,4.94],[1.97,1.7,4.95],[1.92,1.78,4.96],[1.85,1.45,4.65]]){
  world.car.clear();world.car.add(new THREE.Mesh(new THREE.BoxGeometry(...size)));motion.sync();tick(.1);
  assert.ok(world.camera.position.distanceTo(camera)<1e-8);assert.ok(world.camera.projectionMatrix.elements.every((n,i)=>Math.abs(n-matrix.elements[i])<1e-8));assert.ok(new THREE.Vector3(7,0,-9).project(world.camera).distanceTo(point)<1e-8);
 }
});


for(const scene of ['10','17'])test(`Parking ${scene} default uses v0.18 parking camera pose and survives model replacement`,()=>{
 const {world,motion,tick}=fixture();world.state.id=scene;motion.sync();motion.previewCamera('default');tick(1,false);
 const camera=motion.get().camera,offset=new THREE.Vector3(...camera.position).sub(new THREE.Vector3(...camera.aim));
 assert.ok(new THREE.Vector3(...camera.position).sub(world.car.position).distanceTo(new THREE.Vector3(0,11,22))<1e-6);
 assert.ok(new THREE.Vector3(...camera.aim).sub(world.car.position).distanceTo(new THREE.Vector3(0,0,-5))<1e-6);
 assert.ok(Math.abs(Math.atan2(offset.y,Math.hypot(offset.x,offset.z))-Math.atan2(11,27))<1e-6);
 const before=world.camera.position.clone(),aim=world.cameraAim.clone();
 world.car.add(new THREE.Mesh(new THREE.BoxGeometry(2.1,1.9,5.1)));motion.sync();tick(.3,false);
 assert.ok(world.camera.position.distanceTo(before)<1e-9);assert.ok(world.cameraAim.distanceTo(aim)<1e-9);
});

for(const scene of ['10','17'])test(`Parking ${scene} leaves the clipped foreground bay empty without moving peers`,()=>{
 const {world,motion}=fixture();world.state.id=scene;world.root=new THREE.Group();world.parkingBays=[-5.9,5.9].flatMap(x=>[10.8,7.2,3.6,0,-3.6,-7.2,-10.8,-14.4,-18].map(z=>({x,z,width:4.9,depth:2.8})));motion.sync({traffic:true});
 assert.deepEqual(motion.get().occupied,[3,7,11,14,16].map(i=>({x:world.parkingBays[i].x,z:world.parkingBays[i].z})));
 const p=new THREE.Vector3(-5.9,.03,10.8).project(world.camera);assert.equal(motion.pick(p.x,p.y),true,'removed vehicle no longer blocks bay selection');
});

for(const scene of ['10','17'])test(`Manual parking views hold v0.18 composition after selecting a bay in ${scene}`,()=>{
 const {world,motion,pick,tick}=fixture();world.state.id=scene;motion.sync();assert.ok(pick(world.parkingBays[1]));tick(1.2);
 for(const view of ['default','bev','raised','default']){
  motion.previewCamera(view);tick(.8,false);assert.equal(motion.get().camera.tween,false);
  const position=world.camera.position.clone(),rotation=world.camera.quaternion.clone(),projection=world.camera.projectionMatrix.clone();
  tick(1.2,false);
  assert.ok(world.camera.position.distanceTo(position)<1e-9,`${view} position must not return to the assisted camera`);
  assert.ok(world.camera.quaternion.angleTo(rotation)<1e-7,`${view} orientation must stay composed`);
  assert.ok(world.camera.projectionMatrix.elements.every((n,i)=>Math.abs(n-projection.elements[i])<1e-9),`${view} framing must not settle a second time`);
 }
 motion.previewCamera('bev');tick(.1,false);motion.finishPreview();const position=world.camera.position.clone();tick(1,false);assert.ok(world.camera.position.distanceTo(position)<1e-9);
});
