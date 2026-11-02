import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {readFile} from 'node:fs/promises';
// Use a loaded fleet with real footprints, without network or browser-only asset imports.
const url=new URL('../scene-experience.js',import.meta.url);
const source=(await readFile(url,'utf8')).replace(/from '(\.[^']+)'/g,(_,path)=>`from '${new URL(path,url).href}'`)
 .replace(/import \{createTrafficVehicle,readyTrafficModel,setTrafficAppearance\} from '[^']+';/,`const readyTrafficModel=async()=>{};function createTrafficVehicle(){const car=new THREE.Group();const material=new THREE.MeshStandardMaterial();material.userData.trafficRole='rubber';car.add(new THREE.Mesh(new THREE.BoxGeometry(1.9,1.65,4.7),material));car.userData={trafficVehicle:true,modelReady:true};return car;}const setTrafficAppearance=()=>{};`)
 .replace(/import \{prepareParkingMaterialStructure\} from '[^']+';/,'const prepareParkingMaterialStructure=async()=>{};')
 .replace("from 'three'",`from '${import.meta.resolve('three')}'`);
const {createParkingMotion}=await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
function fixture(){
 const camera=new THREE.PerspectiveCamera(40,16/9,.1,1000);camera.position.set(0,22,14);camera.lookAt(0,.85,0);camera.updateMatrixWorld(true);
 const world={state:{id:'10',mode:'light'},root:new THREE.Group(),scene:new THREE.Scene(),car:new THREE.Group(),camera,renderer:{shadowMap:{}},cameraAim:new THREE.Vector3(0,.85,0),parkingBays:[-5.9,5.9].flatMap(x=>[3.6,0,-3.6,-7.2].map(z=>({x,z,width:4.9,depth:2.8}))),renderFrame(){},finishCameraMotion(){},captureCamera(){return {position:camera.position.clone(),carPosition:this.car.position.clone(),aim:this.cameraAim.clone()}},applyCamera(p){this.car.position.copy(p.carPosition);camera.position.copy(p.position);this.cameraAim.copy(p.aim);camera.lookAt(p.aim)}};
 world.draftTime=0;const motion=createParkingMotion(world);motion.sync();
 const tick=(seconds,assist=true)=>{for(let t=0;t<seconds-1e-8;t+=1/30){const dt=Math.min(1/30,seconds-t);world.draftTime+=dt*1000;motion.step(dt);motion.sync({assist});}};
 const pick=bay=>{const p=new THREE.Vector3(bay.x,.03,bay.z).project(camera);return motion.pick(p.x,p.y)};
 return {world,motion,pick,tick};
}

for(const scene of ['10','17'])for(const enabled of [false,true])for(const seconds of [3,7,10])test(`Traffic ${enabled?'on':'off'} preserves active parking pose at ${seconds}s in ${scene}`,async()=>{
 const {world,motion,pick}=fixture();world.state.id=scene;await motion.ready;
 motion.sync({traffic:!enabled,assist:true});
 const bay=world.parkingBays.find(b=>b.x===-5.9&&b.z===-3.6);assert.ok(pick(bay));assert.ok(motion.start());
 for(let t=0;t<seconds;t+=1/60){world.draftTime+=1000/60;motion.step(1/60);motion.sync({traffic:!enabled,assist:true});}
 const position=world.car.position.clone(),camera=world.camera.position.clone(),yaw=world.car.rotation.y,state=motion.get();
 motion.sync({traffic:enabled,assist:true});motion.step(0);motion.sync({traffic:enabled,assist:true});
 assert.ok(world.car.position.distanceTo(position)<1e-9,`layer toggle moved ego by ${world.car.position.distanceTo(position)}m`);
 assert.ok(Math.abs(world.car.rotation.y-yaw)<1e-9,'layer toggle changed steering pose');
 assert.ok(world.camera.position.distanceTo(camera)<1e-9,'layer toggle changed camera at the same timestamp');
 assert.equal(motion.get().elapsed,state.elapsed);assert.equal(motion.get().phase,state.phase);assert.equal(motion.get().active,true);
});

for(const scene of ['10','17'])test(`Parking ${scene} retains its route through pause and capture/restore, and refreshes it on replay`,async()=>{
 const {world,motion,pick}=fixture();world.state.id=scene;await motion.ready;motion.sync({traffic:true,assist:true});assert.ok(pick(world.parkingBays[2]));motion.start();
 world.draftTime+=7000;motion.step(7);motion.sync({traffic:true,assist:true});
 const before=world.car.position.clone();motion.pause();motion.sync({traffic:false,assist:false});const saved=motion.capture();
 motion.reset({replay:true});motion.restore(saved);world.car.position.copy(before);motion.start();motion.step(0);motion.sync({traffic:false,assist:true});
 assert.ok(world.car.position.distanceTo(before)<1e-9,'resume and export restoration retain the chosen route');
 motion.reset({replay:true});motion.sync({traffic:false,assist:true});motion.start();
 assert.notDeepEqual(motion.capture().routeOptions,saved.routeOptions,'a new maneuver uses the current environment');
});
