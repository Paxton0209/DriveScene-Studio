import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';
import {parkingViewPose,applyParkingView} from '../parking-camera.js';
import {anchorVehicle,vehicleFrame} from '../../engine/framing.js';

let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
const {contents}=await load({path:new URL('../../engine/world.js',import.meta.url).pathname});
const begin=contents.indexOf(' configureCamera(id,options){'),end=contents.indexOf('\n update({id,mode,trees,vehicle',begin);
assert.ok(begin>=0&&end>begin);
const configureCamera=new Function('THREE','parkingViewPose','applyParkingView','vehicleFrame','anchorVehicle','parkingIds','ELEVATED_DECK_HEIGHT',`return function ${contents.slice(begin,end).trim()}`)(THREE,parkingViewPose,applyParkingView,vehicleFrame,anchorVehicle,['10','14','15','16','17','18','19'],8.5);
function world(){
 const car=new THREE.Group();car.position.set(0,.02,0);car.add(new THREE.Mesh(new THREE.BoxGeometry(2,1.7,4.85)));
 const camera=new THREE.PerspectiveCamera(40,16/9,.1,1000);
 return {car,camera,cameraAim:new THREE.Vector3(),roadCameraCache:new Map(),captureCamera(){return {framing:this.framing}},configureCamera};
}
for(const scene of ['10','17'])test(`Built ${scene} initial/default camera shares Driving Low geometry and the manual endpoint`,()=>{
 const road=world();road.configureCamera('02',{cameraView:'low'});
 const parking=world();parking.configureCamera(scene,{cameraView:'low'});
 assert.ok(parking.camera.position.clone().sub(parking.car.position).distanceTo(road.camera.position.clone().sub(road.car.position))<1e-12);
 assert.ok(parking.cameraAim.clone().sub(parking.car.position).distanceTo(road.cameraAim.clone().sub(road.car.position))<1e-12);
 assert.ok(parking.camera.quaternion.angleTo(road.camera.quaternion)<1e-7);
 const expected=parkingViewPose(parking.camera,parking.car,'default'),initialMatrix=parking.camera.projectionMatrix.clone();
 applyParkingView(parking.camera,parking.car,expected);
 assert.deepEqual(parking.camera.projectionMatrix.elements,initialMatrix.elements,'initialization and the parking controller agree on framing');
 for(const view of ['raised','bev','default'])applyParkingView(parking.camera,parking.car,parkingViewPose(parking.camera,parking.car,view));
 assert.deepEqual(parking.camera.projectionMatrix.elements,initialMatrix.elements,'view return uses the same endpoint');
 parking.configureCamera(scene,{cameraView:'low'});
 assert.deepEqual(parking.camera.projectionMatrix.elements,initialMatrix.elements,'reconfiguration cannot restore the old high endpoint');
});
