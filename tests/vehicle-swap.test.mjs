import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {readFile} from 'node:fs/promises';
import {createContactShadows} from '../contact-shadows.js';
import {disposeVehicle} from '../dispose-vehicle.js';

globalThis.__studioEnvironmentRequest=readFile(new URL('../assets/studio-environment.bin.gz',import.meta.url));
const {World}=await import('../world.js');

test('replacing the ego preserves the camera, parking root and prepared scene',()=>{
 const car=new THREE.Group();car.userData.vehicleSpec={wheels:[]};car.add(new THREE.Mesh(new THREE.BoxGeometry(2,1.5,4.8),new THREE.MeshStandardMaterial()));car.position.set(1.85,0,4);
 const replacement=car.clone();replacement.userData.vehicleSpec={wheels:[]};replacement.children[0].geometry=car.children[0].geometry.clone();replacement.children[0].material=car.children[0].material.clone();
 const camera=new THREE.PerspectiveCamera(38,16/9,1,2000);camera.position.set(1.85,8.5,23);camera.lookAt(1.85,0,-24);camera.setViewOffset(1920,1080,0,3,1920,1080);camera.updateMatrixWorld(true);
 const world=Object.create(World.prototype),root=new THREE.Group(),scene=new THREE.Scene(),preparedRoots=new WeakSet([root]),sceneCache=new Map([['parking',{fields:{current:'10',root}}]]);
 Object.assign(world,{car,camera,root,current:'10',scene,sceneCache,preparedRoots,roadCameraCache:new Map(),renderer:{shadowMap:{}},egoContact:createContactShadows(car),framing:{viewOffset:{x:0,y:3}}});scene.add(root,car,world.egoContact);
 const beforeProjection=camera.projectionMatrix.clone(),beforeCamera=camera.matrixWorld.clone();
 world.setVehicle(replacement,{disposePrevious:false,preserveScene:true});
 assert.equal(world.root,root);assert.equal(world.current,'10');assert.equal(world.sceneCache,sceneCache);assert.equal(sceneCache.size,1);assert.equal(world.preparedRoots,preparedRoots);assert.ok(preparedRoots.has(root));assert.deepEqual(camera.projectionMatrix.elements,beforeProjection.elements);assert.deepEqual(camera.matrixWorld.elements,beforeCamera.elements);assert.equal(world.vehicleNeedsFraming,false);assert.equal(car.parent,null);
 disposeVehicle(car);disposeVehicle(replacement);disposeVehicle(world.egoContact);
});
