import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {prepareLaneGeometry} from '../engine/lane-geometry-cache.js';
test('lane variants are prepared without replacing or moving the live scene and camera',async()=>{
 const scene=new THREE.Scene(),root=new THREE.Group(),car=new THREE.Group(),camera=new THREE.PerspectiveCamera(),sun=new THREE.DirectionalLight();scene.add(root,car);car.position.set(1.85,.02,0);camera.position.set(1.85,8.5,23);
 const world={scene,root,car,camera,sun,sceneCache:new Map(),roadCameraCache:new Map(),palette:'balanced',state:{id:'02',laneCount:6},mat:{water:{roughness:.5}},*buildSteps(id,options){this.root=new THREE.Group();this.scene.add(this.root);this.camera.position.set(99,99,99);this.car.position.set(12,12,12);this.mat.water.roughness=.28;yield;this.sceneCache.set(JSON.stringify([id,options.laneCount,options.palette]),{fields:{root:this.root},carPosition:this.car.position.clone()});}};
 let slices=0;await prepareLaneGeometry(world,{yieldControl:async()=>{slices++;assert.equal(world.mat.water.roughness,.5);}});
 assert.equal(world.root,root);assert.equal(world.scene,scene);assert.deepEqual(camera.position.toArray(),[1.85,8.5,23]);assert.deepEqual(car.position.toArray(),[1.85,.02,0]);assert.equal(scene.children.length,2);assert.equal(world.sceneCache.size,3);assert.ok(slices>=6);assert.equal(world.laneCacheReady,true);
});
