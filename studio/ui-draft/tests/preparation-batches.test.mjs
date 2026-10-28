import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {batchPreparationJobs,attachPreparationBatch} from '../preparation-batches.js';

test('Batching preserves target, camera and scene boundaries and both traffic variants',()=>{
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(),material=new THREE.MeshBasicMaterial(),target=new THREE.WebGLRenderTarget(1,1);
 const make=extra=>({scene,camera,material,proxy:new THREE.Mesh(new THREE.PlaneGeometry(),material),target:null,...extra});
 const jobs=[make(),make(),make({target}),make({camera:camera.clone()}),make({scene:new THREE.Scene()}),make({trafficFade:true,baseTransparent:false})];
 const batches=batchPreparationJobs(jobs);assert.equal(batches.length,5);assert.equal(batches[0].jobs.length,2);
 assert.deepEqual(new Set(batches.flatMap(b=>b.jobs)),new Set(jobs));
 const fade=batches.at(-1),detach=attachPreparationBatch(fade);assert.equal(material.transparent,true);assert.equal(fade.jobs[0].proxy.parent,scene);
 detach();assert.equal(material.transparent,false);assert.equal(fade.jobs[0].proxy.parent,null);
});
test('Shared live material is changed once and restored after all proxies detach',()=>{
 const scene=new THREE.Scene(),material=new THREE.MeshBasicMaterial({transparent:true});
 const jobs=Array.from({length:3},()=>({scene,material,proxy:new THREE.Mesh(new THREE.PlaneGeometry(),material),trafficFade:true,baseTransparent:true}));
 const detach=attachPreparationBatch({scene,jobs});assert.equal(material.transparent,false);assert.equal(scene.children.length,3);
 detach();assert.equal(material.transparent,true);assert.equal(scene.children.length,0);
});
