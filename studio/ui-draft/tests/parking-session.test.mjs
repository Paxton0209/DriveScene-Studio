import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createParkingMotion} from '../scene-experience.js';
import {parkingPose,parkingTiming} from '../parking-motion.js';
import {parkingFrame} from '../parking-camera.js';
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
 assert.equal(hover(world.parkingBays[1]),false,'inactive assistance does not highlight a bay');
 motion.sync({assist:true});assert.equal(hover(world.parkingBays[1]),true);assert.equal(values().filter(Boolean).length,1);
 assert.equal(hover(world.parkingBays[1]),false,'moving inside the same bay needs no repaint');
 assert.equal(hover(world.parkingBays[2]),true);assert.equal(values()[1],0);assert.equal(values()[2],1);
 assert.equal(motion.hover(null,null),true);assert.ok(values().every(v=>v===0));
 assert.equal(motion.hover(null,null),false,'repeated leave stays idle');
 motion.sync({traffic:true,assist:true});assert.equal(hover(world.parkingBays[3]),false,'occupied bay has no hover');
 assert.equal(hover(world.parkingBays[1]),true);assert.equal(pick(world.parkingBays[1]),true);
 assert.equal(hover(world.parkingBays[1]),true,'selection clears the previous hover');assert.ok(values().every(v=>v===0));
 assert.equal(hover(world.parkingBays[1]),false);assert.equal(motion.start(),true);
 assert.equal(hover(world.parkingBays[2]),false,'active maneuver does not accept hover');
});
for(const direction of [-1,1])for(const side of [-5.9,5.9])test(`Independent camera and continuous pause/exit/reselection for bay ${side}, direction ${direction}`,()=>{
 const {world,motion,pick,tick}=fixture();const bay=world.parkingBays.find(b=>b.x===side&&b.z===-3.6),beforeSelection=world.camera.position.clone();assert.ok(pick(bay));assert.ok(beforeSelection.equals(world.camera.position),'selection starts the camera transition without jumping');tick(.5);assert.equal(motion.get().camera.tween,true,'initial rise is still in motion at half a second');tick(.55);assert.equal(motion.get().camera.tween,false);assert.equal(motion.get().view,'raised');motion.start();tick(8);
 assert.ok(Math.abs(world.car.rotation.y)>.05);assert.ok(Math.abs(motion.get().camera.heading-world.car.rotation.y)<1e-8,'camera follows chassis through reverse');
 motion.sync({assist:false});const held=world.car.position.clone(),beforePause=world.camera.position.clone();motion.step(1);assert.ok(held.equals(world.car.position),'missing path freezes vehicle');assert.ok(beforePause.equals(world.camera.position),'pause transition starts from actual camera');tick(2,false);assert.equal(motion.get().paused,true);
 const beforeResume=world.camera.position.clone();motion.start();assert.ok(beforeResume.equals(world.camera.position),'resume never jumps camera');tick(parkingTiming(bay).total-motion.get().elapsed+.05);assert.equal(motion.get().complete,true);assert.ok(world.car.position.distanceTo(new THREE.Vector3(bay.x,0,bay.z))<1e-8);assert.equal(motion.start(),false);tick(1.2);assert.equal(motion.get().view,'bev');assert.ok(Math.abs(world.camera.position.z-world.cameraAim.z)<.1,'completion is top view');
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


for(const scene of ['10','17'])test(`Parking ${scene} default uses Driving Low's relative pose and survives model replacement`,()=>{
 const {world,motion,tick}=fixture();world.state.id=scene;motion.sync();motion.previewCamera('default');tick(1,false);
 const camera=motion.get().camera,offset=new THREE.Vector3(...camera.position).sub(new THREE.Vector3(...camera.aim));
 assert.ok(new THREE.Vector3(...camera.position).sub(world.car.position).distanceTo(new THREE.Vector3(0,8.48,23))<1e-6);
 assert.ok(new THREE.Vector3(...camera.aim).sub(world.car.position).distanceTo(new THREE.Vector3(0,-.02,-24))<1e-6);
 assert.ok(Math.abs(Math.atan2(offset.y,Math.hypot(offset.x,offset.z))-Math.atan2(8.5,47))<1e-6);
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

for(const scene of ['10','17'])for(const mode of ['light','dark'])test(`Parking ${scene}/${mode} distinguishes occupied bays and updates availability with Traffic`,()=>{
 const {world,motion}=fixture();world.state.id=scene;world.state.mode=mode;world.root=new THREE.Group();
 world.parkingBays=[-5.9,5.9].flatMap(x=>[10.8,7.2,3.6,0,-3.6,-7.2,-10.8,-14.4,-18].map(z=>({x,z,width:4.9,depth:2.8,tile:{material:{uniforms:{available:{value:-1}}}}})));
 motion.sync({traffic:true});
 const values=()=>world.parkingBays.map(b=>b.tile.material.uniforms.available.value);
 assert.deepEqual(values(),world.parkingBays.map((_,i)=>[3,7,11,14,16].includes(i)?0:1));
 motion.sync({traffic:false});assert.ok(values().every(v=>v===1),'all bays become available when other cars are hidden');
 motion.sync({traffic:true});assert.equal(values().filter(v=>v===0).length,5,'restoring Traffic restores the five occupied bays');
});

for(const scene of ['10','17'])test(`One-click parking selects a stable reachable vacant bay and supports pause/replay in ${scene}`,()=>{
 const {world,motion,tick}=fixture();world.state.id=scene;motion.sync({traffic:true});
 assert.equal(motion.get().target,null,'selection waits for Play');
 assert.equal(motion.selectDefault(),true);const target=motion.get().target;
 assert.deepEqual(target,{x:-5.9,z:-3.6});assert.ok(!motion.get().occupied.some(b=>b.x===target.x&&b.z===target.z));
 assert.equal(motion.start(),true);tick(2);motion.pause();const held=world.car.position.clone();tick(1,false);
 assert.ok(held.equals(world.car.position));assert.equal(motion.selectDefault(),true);assert.deepEqual(motion.get().target,target);
 assert.equal(motion.start(),true);tick(30);assert.equal(motion.get().complete,true);
 assert.ok(world.car.position.distanceTo(new THREE.Vector3(target.x,0,target.z))<1e-8);
 motion.reset();motion.sync({traffic:true});assert.equal(motion.selectDefault(),true);assert.deepEqual(motion.get().target,target);
 assert.equal(motion.start(),true);tick(30);assert.equal(motion.get().complete,true);
});
test('Automatic parking skips an occupied preferred bay and fails without a reachable alternative',()=>{
 const {world,motion}=fixture();
 world.root=new THREE.Group();world.parkingBays=[{x:-5.9,z:8,width:4.9,depth:2.8},{x:-5.9,z:5,width:4.9,depth:2.8},{x:-5.9,z:2,width:4.9,depth:2.8},{x:-5.9,z:-3.6,width:4.9,depth:2.8},{x:5.9,z:-3.6,width:4.9,depth:2.8}];
 motion.sync({traffic:true});assert.equal(motion.selectDefault(),true);assert.deepEqual(motion.get().target,{x:5.9,z:-3.6});
 world.root=new THREE.Group();world.parkingBays=[];motion.sync({traffic:true});assert.equal(motion.selectDefault(),false);assert.equal(motion.get().target,null);assert.equal(motion.start(),false);
});

test('Parking route keeps its continuous seam, remains occluded and fades at the parked rear bumper',()=>{
 const {world,motion,pick}=fixture(),bay=world.parkingBays.find(b=>b.x===-5.9&&b.z===-3.6);assert.ok(pick(bay));motion.sync({assist:true});
 const group=world.draftParkingGroup,approach=group.getObjectByName('Parking approach path'),reverse=group.getObjectByName('Parking reverse path'),stop=group.getObjectByName('Approach stop line');
 const centre=(mesh,index)=>{const a=mesh.geometry.attributes.position;return new THREE.Vector3().fromBufferAttribute(a,index).add(new THREE.Vector3().fromBufferAttribute(a,index+1)).multiplyScalar(.5)};
 const seam=centre(approach,approach.geometry.attributes.position.count-2);assert.ok(seam.distanceTo(centre(reverse,0))<1e-5);
 assert.equal(stop.material.depthTest,true);assert.equal(group.getObjectByName('Reverse stop line').visible,false);
 const endpoint=centre(reverse,reverse.geometry.attributes.position.count-2);const final=parkingPose(parkingTiming(bay).total,bay),offset=4.72/2;assert.ok(Math.hypot(endpoint.x-bay.x-Math.sin(final.yaw)*offset,endpoint.z-bay.z-Math.cos(final.yaw)*offset)<1e-5);assert.equal(reverse.material.uniforms.endFade.value,1);
 const uv=reverse.geometry.attributes.uv;assert.equal(uv.getY(uv.count-1),1);
});

for(const scene of ['10','17'])for(const side of [-5.9,5.9])for(const [length,frontOffset,bodyShift] of [[4.72,-1.25,0],[4.96,-1.72,.12]])test(`Nose reaches the first line at rest in scene ${scene}, bay ${side}, length ${length}`,()=>{
 const {world,motion,pick,tick}=fixture();world.state.id=scene;
 world.car.userData.vehicleSpec={length,width:2.1,wheels:[{min:[-.9,0,frontOffset-.3],max:[-.6,.6,frontOffset+.3]},{min:[.6,0,frontOffset-.3],max:[.9,.6,frontOffset+.3]},{min:[-.9,0,1.05],max:[-.6,.6,1.65]},{min:[.6,0,1.05],max:[.9,.6,1.65]}]};
 const body=new THREE.Mesh(new THREE.BoxGeometry(2.1,1.5,length));body.position.z=bodyShift;world.car.add(body);
 const noseOffset=bodyShift-length/2,bay=world.parkingBays.find(b=>b.x===side&&b.z===-3.6);assert.ok(pick(bay));motion.sync({assist:true});
 const line=world.draftParkingGroup.getObjectByName('Approach stop line'),initialLine=line.position.clone(),options={vehicle:world.car.userData.vehicleSpec},timing=parkingTiming(bay,0,options),end=parkingPose(timing.forward,bay,0,options),heading=new THREE.Vector3(-Math.sin(end.yaw),0,-Math.cos(end.yaw));
 const nose=p=>new THREE.Vector3(p.x+Math.sin(p.yaw)*noseOffset,0,p.z+Math.cos(p.yaw)*noseOffset);
 for(let i=0;i<=300;i++){const p=parkingPose(timing.forward*i/300,bay,0,options),gap=line.position.clone().sub(nose(p)).dot(heading);assert.ok(gap>=-1e-6,`nose crossed the line before stopping at ${i}: ${gap}`);}
 assert.ok(nose(end).distanceTo(new THREE.Vector3(line.position.x,0,line.position.z))<1e-6,'line uses the actual nose, including a shifted model origin');
 const before=parkingPose(timing.forward-.001,bay,0,options);assert.ok(nose(end).distanceTo(nose(before))/.001<.001,'nose reaches the line at zero speed');
 motion.start();tick(timing.forward+.05);const stopped=world.car.position.clone(),yaw=world.car.rotation.y;
 assert.ok(nose({x:stopped.x,z:stopped.z,yaw}).distanceTo(new THREE.Vector3(line.position.x,0,line.position.z))<1e-6);assert.equal(motion.get().phase,'shift');
 tick(.1);assert.ok(world.car.position.distanceTo(stopped)<1e-9,'no creep after touching the line');assert.ok(line.position.distanceTo(initialLine)<1e-9,'line stays anchored during the approach');
 tick(timing.shift+.1);assert.equal(motion.get().phase,'reverse');tick(timing.total);assert.equal(motion.get().complete,true);assert.ok(world.car.position.distanceTo(new THREE.Vector3(bay.x,0,bay.z))<1e-8,'reverse still arrives at the selected bay');
});

for(const side of [-5.9,5.9])for(const initialView of ['default','raised','bev'])test(`Camera follows the broad turn and ends with the vehicle facing up for ${side}/${initialView}`,()=>{
 const {world,motion,pick,tick}=fixture(),bay=world.parkingBays.find(b=>b.x===side&&b.z===-3.6);world.state.id={default:'10',raised:'16',bev:'14'}[initialView];world.root=new THREE.Group();motion.sync();pick(bay);tick(1.1);
 const before=world.camera.position.clone();motion.start();assert.ok(before.equals(world.camera.position),'Play acquires automatic control without a jump');assert.equal(motion.capture().cameraState.reference,false);
 const end=parkingTiming(bay).forward;let previous=world.camera.quaternion.clone();
 for(let t=0;t<end;t+=1/60){tick(Math.min(1/60,end-t));const state=motion.get();assert.ok(Math.abs(state.camera.heading-world.car.rotation.y)<1e-9,'camera follows the continuous chassis heading');assert.ok(previous.angleTo(world.camera.quaternion)<.06,'no abrupt camera turn');previous.copy(world.camera.quaternion);assert.equal(state.camera.tween,state.elapsed<1.4-1e-8,'automatic rise completes at 0.4 s + 1.0 s');}
 assert.equal(motion.get().camera.tween,false,'rise is finished at the first stop');const o=world.camera.position.clone().sub(world.cameraAim);assert.ok(Math.abs(Math.atan2(o.x,o.z)-world.car.rotation.y)<1e-8,'camera aligns with chassis at the stop');assert.ok(Math.abs(world.draftWheelSteer)<1e-6,'wheels unwind before shifting');
 tick(.8);for(let i=0;i<120;i++){tick(1/60);assert.ok(Math.abs(motion.get().camera.heading-world.car.rotation.y)<1e-9,'reverse camera follows chassis');}
 tick(20);world.camera.updateMatrixWorld();const rear=world.car.position.clone().project(world.camera),front=world.car.position.clone().add(new THREE.Vector3(-Math.sin(world.car.rotation.y),0,-Math.cos(world.car.rotation.y))).project(world.camera);assert.ok(front.y>rear.y,'parked nose points toward top of screen');assert.ok(Math.abs(front.x-rear.x)<1e-7,'parked nose is vertically aligned');
});

for(const side of [-5.9,5.9])test(`Slim guidance stays centred on the leading axle through forward and reverse bends for ${side}`,()=>{
 const {world,motion,pick,tick}=fixture(),front=-1.48,rear=1.36,track=1.58;
 world.car.userData.vehicleSpec={length:4.72,width:2.1,wheels:[front,rear].flatMap(z=>[-track/2,track/2].map(x=>({min:[x-.1,0,z-.3],max:[x+.1,.6,z+.3]})))};
 const bay=world.parkingBays.find(b=>b.x===side&&b.z===-3.6),timing=parkingTiming(bay,0,{vehicle:world.car.userData.vehicleSpec});assert.ok(pick(bay));motion.start();
 const check=(name,offset)=>{const positions=world.draftParkingGroup.getObjectByName(name).geometry.attributes.position,yaw=world.car.rotation.y,s=Math.sin(yaw),c=Math.cos(yaw),heading=yaw+(offset<0?world.draftWheelSteer||0:0);
  for(let i=0;i<2;i++){const x=(i?1:-1)*.5,point=new THREE.Vector3().fromBufferAttribute(positions,i),expected=new THREE.Vector3(world.car.position.x+s*offset+Math.cos(heading)*x,.036,world.car.position.z+c*offset-Math.sin(heading)*x);assert.ok(point.distanceTo(expected)<1e-5,'one-metre display ribbon stays centred on the leading axle');}
 };
 let previous=0;for(const elapsed of [timing.forward*.6,timing.forward*.85,timing.forward+timing.shift+.2,timing.forward+timing.shift+1,timing.total-.5]){tick(elapsed-previous);previous=elapsed;const reversing=elapsed>timing.forward+timing.shift;check(reversing?'Parking reverse path':'Parking approach path',reversing?rear:front);}
});

for(const time of [.3,2.5,7.5])test(`Pause freezes the complete camera pose at playback ${time}s and resumes without a jump`,()=>{
 const {world,motion,tick}=fixture();motion.selectDefault();motion.start();tick(time);motion.pause();
 const camera=world.camera.position.clone(),aim=world.cameraAim.clone(),rotation=world.camera.quaternion.clone(),projection=[...world.camera.projectionMatrix.elements],elapsed=motion.get().elapsed;
 tick(3,true);assert.ok(world.camera.position.distanceTo(camera)<1e-10);assert.ok(world.cameraAim.distanceTo(aim)<1e-10);assert.ok(world.camera.quaternion.angleTo(rotation)<1e-7);assert.deepEqual(world.camera.projectionMatrix.elements,projection);assert.equal(motion.get().elapsed,elapsed);
 motion.start();assert.ok(world.camera.position.distanceTo(camera)<1e-10);tick(.1);assert.ok(motion.get().elapsed>elapsed);assert.ok(world.camera.quaternion.angleTo(rotation)<.12,'resume advances from held angle');
});
test('High-camera delay and duration follow playback time, including time spent paused',()=>{
 const {world,motion,tick}=fixture();motion.selectDefault();motion.configureCamera({start:2,duration:1});motion.start();
 tick(1);assert.equal(motion.capture().cameraTween.legStart,2);const before=world.camera.position.clone().sub(world.car.position).length();motion.pause();tick(4,true);assert.ok(Math.abs(motion.get().elapsed-1)<1e-9);motion.start();tick(.9);assert.ok(Math.abs(world.camera.position.clone().sub(world.car.position).length()-before)<.1,'delay does not consume paused wall time');
 tick(1.2);assert.equal(motion.get().camera.tween,false);assert.equal(motion.configureCamera().start,2);assert.equal(motion.configureCamera().duration,1);
});

test('Untravelled guidance vertices keep their world positions and fade coordinates after the first stop',()=>{
 const {world,motion,tick}=fixture();motion.selectDefault();motion.start();
 const timing=parkingTiming(motion.get().target),reverseStart=timing.forward+timing.shift;
 tick(reverseStart+.2);
 const path=world.draftParkingGroup.getObjectByName('Parking reverse path');
 const snapshot=()=>{const {position,uv}=path.geometry.attributes;return Array.from({length:position.count/2},(_,i)=>({key:[position.getX(i*2),position.getZ(i*2),position.getX(i*2+1),position.getZ(i*2+1)].join(','),v:uv.getY(i*2)}));};
 const before=new Map(snapshot().map(p=>[p.key,p.v]));tick(.6);const after=snapshot();
 assert.ok(after.length<before.size,'only the travelled prefix is removed');
 for(const p of after.slice(1)){assert.ok(before.has(p.key),'remaining route vertices stay fixed');assert.equal(p.v,before.get(p.key),'colour and fade never sweep through the remaining route');}
 assert.equal(path.material.uniforms.activation.value,1);assert.equal(path.material.uniforms.opacity.value,.75);
});

for(const scene of ['10','17'])test(`Completion feedback breathes once with a continuous outline, restores its clock and resets in ${scene}`,()=>{
 const {world,motion,pick,tick}=fixture();world.state.id=scene;motion.sync();pick(world.parkingBays[2]);motion.start();
 while(!motion.get().complete)tick(1/30);
 const uniforms=world.draftParkingGroup.getObjectByName('Parking target space').material.uniforms;
 assert.equal(uniforms.completion.value,1);assert.equal(uniforms.celebrate.value,0);assert.equal(uniforms.success.value,0);
 let saved,clock;
 for(let cycle=0;cycle<1;cycle++){
  let previous=0;
  for(let i=0;i<54;i++){tick(1/60);const value=uniforms.celebrate.value;assert.ok(value>=previous-1e-8);assert.ok(value-previous<.04,'no abrupt opacity jump');previous=value;}
  assert.ok(uniforms.celebrate.value>.99);assert.equal(uniforms.completion.value,1);assert.equal(uniforms.success.value,1);assert.equal(motion.animating(),true);
  if(!cycle){saved=motion.capture();clock=world.draftTime;}
  for(let i=0;i<54;i++){tick(1/60);const value=uniforms.celebrate.value;assert.ok(value<=previous+1e-8);assert.ok(previous-value<.04,'900 ms exhale stays continuous');previous=value;assert.equal(uniforms.success.value,1,'outline remains visible through the breath');}
  assert.ok(uniforms.celebrate.value<1e-8);assert.equal(uniforms.completion.value,1);
 }
 tick(.3);assert.ok(uniforms.completion.value>.45&&uniforms.completion.value<.55);tick(.31);assert.equal(uniforms.completion.value,0);
 motion.restore(saved);world.draftTime=clock;motion.sync({assist:true});assert.equal(uniforms.completion.value,1);
 tick(1.51);assert.ok(uniforms.completion.value<1e-8);tick(1);assert.equal(uniforms.completion.value,0,'steady Parked never restarts the pulse');assert.equal(uniforms.celebrate.value,0);
 motion.reset();motion.sync();assert.equal(uniforms.completion.value,1);assert.equal(uniforms.success.value,0);assert.equal(uniforms.celebrate.value,0,'replay shows a fresh selected bay');
 world.root=new THREE.Group();motion.sync();assert.equal(motion.capture().completionAt,null,'scene replacement clears the completion clock');
});
test('Reduced motion completion skips the outline pulse and fades in 200 ms',()=>{
 const previous=globalThis.matchMedia;globalThis.matchMedia=()=>({matches:true});
 try{const {world,motion,pick,tick}=fixture();pick(world.parkingBays[2]);motion.start();while(!motion.get().complete)tick(1/30);
 const uniforms=world.draftParkingGroup.getObjectByName('Parking target space').material.uniforms;
 tick(.1);assert.equal(uniforms.celebrate.value,0);assert.ok(uniforms.completion.value>0&&uniforms.completion.value<1);
 tick(.11);assert.equal(uniforms.completion.value,0);
 }finally{if(previous)globalThis.matchMedia=previous;else delete globalThis.matchMedia;}
});


for(const scene of ['10','17'])for(const selected of ['default','raised','bev'])test(`Play and Replay join ${selected} to automatic camera in ${scene}`,()=>{
 const {world,motion,tick}=fixture();world.state.id=scene;motion.previewCamera(selected);tick(.9,false);
 motion.selectDefault();const before=world.camera.position.clone(),orientation=world.camera.quaternion.clone(),car=world.car.position.clone();
 motion.start();assert.ok(world.camera.position.distanceTo(before)<1e-9,'Play starts at the current camera');assert.equal(motion.get().manualView,null);
 tick(.35);if(selected==='raised'){assert.ok(motion.get().elapsed>.3,'High starts moving immediately');assert.equal(motion.get().view,'raised');}else{assert.equal(motion.get().elapsed,0,'return completes before the car moves');assert.ok(world.car.position.equals(car));}
 motion.pause();const held=world.camera.position.clone();tick(2,false);assert.ok(world.camera.position.distanceTo(held)<1e-9,'pause freezes return too');
 motion.start();assert.ok(world.camera.position.distanceTo(held)<1e-9);tick(.02);assert.ok(world.camera.position.distanceTo(held)<2,'resume continues the spring without catching up paused time');
 tick(1);assert.ok(motion.get().elapsed>0);assert.equal(motion.get().manualView,null);
 tick(4);motion.pause();const elapsed=motion.get().elapsed,mid=world.camera.position.clone();tick(1,false);motion.start();assert.equal(motion.get().elapsed,elapsed);assert.ok(world.camera.position.equals(mid));
 tick(30);assert.equal(motion.get().complete,true);assert.equal(motion.get().view,'bev');
 const finished=world.camera.quaternion.clone();motion.reset();motion.sync({assist:true});assert.ok(finished.angleTo(world.camera.quaternion)<1e-7,'Replay does not cut orientation');
 motion.start();tick(30);assert.equal(motion.get().complete,true);assert.equal(motion.get().manualView,null);assert.equal(motion.get().view,'bev');
});
for(const scene of ['10','17'])for(const hz of [30,60,120])test(`High joins playback without a Low dip in ${scene} at ${hz} Hz`,()=>{
 const {world,motion,tick}=fixture();world.state.id=scene;motion.previewCamera('raised');tick(.9,false);motion.selectDefault();motion.start();
 const elevation=()=>{const offset=world.camera.position.clone().sub(world.cameraAim);return Math.atan2(offset.y,Math.hypot(offset.x,offset.z));};
 const initial=elevation();let previous=world.camera.quaternion.clone(),maxAngle=0;
 for(let i=0;i<2*hz;i++){tick(1/hz);assert.equal(motion.get().view,'raised');assert.ok(elevation()>initial-.015,'High never drops toward Low');maxAngle=Math.max(maxAngle,previous.angleTo(world.camera.quaternion));previous.copy(world.camera.quaternion);}
 assert.ok(maxAngle<.07,`continuous handoff: ${maxAngle}`);assert.ok(motion.get().elapsed>1.9);
 tick(30);motion.previewCamera('raised');tick(.9,false);motion.reset();motion.sync({assist:true});motion.start();tick(.2);assert.equal(motion.get().view,'raised');assert.ok(motion.get().elapsed>.19,'a manual High before Replay also skips Low');
});
for(const scene of ['10','17'])for(const hz of [30,60,120])test(`Camera return and automatic rise are continuous in ${scene} at ${hz} Hz`,()=>{
 const {world,motion,tick}=fixture();world.state.id=scene;motion.previewCamera('bev');tick(.9,false);motion.selectDefault();motion.start();
 let previous=world.camera.quaternion.clone(),maxRate=0,returnTail=0;
 for(let i=0;i<3*hz;i++){tick(1/hz);const rate=previous.angleTo(world.camera.quaternion)*hz;maxRate=Math.max(maxRate,rate);if(i/hz>.7&&i/hz<.8)returnTail=Math.max(returnTail,rate);previous.copy(world.camera.quaternion);}
 assert.ok(maxRate<10,`angular speed ${maxRate}`);assert.ok(returnTail<.15,`return must settle softly: ${returnTail}`);
 tick(30);const car=world.car.position.clone().project(world.camera),nose=world.car.position.clone().add(new THREE.Vector3(-Math.sin(world.car.rotation.y),0,-Math.cos(world.car.rotation.y))).project(world.camera);
 assert.ok(nose.y>car.y);assert.ok(Math.abs(nose.x-car.x)<1e-5,'completed BEV remains nose-up');
});

for(const scene of ['10','17'])test(`Replay reset starts a fresh parking motion in ${scene}`,()=>{
 const {world,motion,tick}=fixture();world.state.id=scene;motion.sync({assist:true});assert.equal(motion.selectDefault(),true);assert.equal(motion.start(),true);
 tick(30);assert.equal(motion.get().complete,true);motion.reset({replay:true});motion.sync({assist:true});assert.equal(motion.selectDefault(),true);assert.equal(motion.start(),true);tick(.2);assert.equal(motion.get().active,true);assert.ok(motion.get().elapsed>0);
});

test('Selected target stays invisible until parking assistance is enabled',()=>{
 const {world,motion,pick}=fixture();assert.equal(pick(world.parkingBays[1]),true);motion.sync({assist:false});
 const target=world.draftParkingGroup.getObjectByName('Parking target space');assert.equal(target.visible,false);
 motion.sync({assist:true});assert.equal(target.visible,true);motion.sync({assist:false});assert.equal(target.visible,false);
});

test('Replay becomes available only after parking completion feedback finishes',()=>{
 const {motion,tick}=fixture();motion.selectDefault();motion.start();while(!motion.get().complete)tick(1/30);
 assert.equal(motion.get().replayReady,false);tick(1.7);assert.equal(motion.get().replayReady,false);tick(.15);assert.equal(motion.get().replayReady,true);
});

test('Prepared replay resumes from the same camera and vehicle pose',()=>{
 const {world,motion,tick}=fixture();motion.sync({assist:true});motion.selectDefault();motion.start();tick(30);
 assert.equal(motion.get().complete,true);motion.reset({replay:true});motion.sync({assist:true});assert.equal(motion.start(),true);motion.pause();
 const position=world.car.position.clone(),camera=world.camera.position.clone(),orientation=world.camera.quaternion.clone();
 assert.equal(motion.start(),true);assert.ok(world.car.position.distanceTo(position)<1e-9);assert.ok(world.camera.position.distanceTo(camera)<1e-9);assert.ok(world.camera.quaternion.angleTo(orientation)<1e-7);
});

for(const scene of ['10','17'])for(const hz of [30,60,120])test(`Completed replay retains the restored Low framing through its first moving frames in ${scene} at ${hz} Hz`,()=>{
 const {world,motion,tick}=fixture();world.state.id=scene;
 world.car.add(new THREE.Mesh(new THREE.BoxGeometry(1.85,1.45,4.65)));
 world.captureCamera=()=>({position:world.camera.position.clone(),carPosition:world.car.position.clone(),aim:world.cameraAim.clone(),quaternion:world.camera.quaternion.clone(),offset:new THREE.Vector2(world.camera.view?.offsetX??0,world.camera.view?.offsetY??0)});
 world.applyCamera=pose=>{world.car.position.copy(pose.carPosition);world.camera.position.copy(pose.position);world.cameraAim.copy(pose.aim);world.camera.quaternion.copy(pose.quaternion);world.camera.setViewOffset(1920,1080,pose.offset.x,pose.offset.y,1920,1080);world.camera.updateMatrixWorld(true);};
 motion.sync({assist:true});motion.previewCamera('default');tick(1.2);motion.selectDefault();motion.start();tick(30);
 assert.equal(motion.get().complete,true);assert.ok(Math.abs(world.framing.targetCenter-.5)<1e-8);
 motion.reset({replay:true});motion.sync({assist:true});
 const frame=parkingFrame(world.car,world.camera),anchor=(frame.top+frame.bottom)/2,orientation=world.camera.quaternion.clone();
 assert.ok(anchor>.65,'restored Low view places the car below the finished BEV center');
 assert.equal(motion.start(),true);
 for(let i=0;i<Math.floor(.3*hz);i++){
  world.draftTime+=1000/hz;motion.step(1/hz);motion.sync({assist:true});
  const next=parkingFrame(world.car,world.camera);
  assert.ok(Math.abs((next.top+next.bottom)/2-anchor)<.002,'replay must not snap Low framing to stale completion framing');
  assert.ok(orientation.angleTo(world.camera.quaternion)<.002,'the initial hold retains the restored camera angle');
 }
});
