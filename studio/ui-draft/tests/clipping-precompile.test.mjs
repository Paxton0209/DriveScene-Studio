import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
import {WebGLClipping} from 'three/src/renderers/webgl/WebGLClipping.js';
import {patchClippingPrecompile} from '../clipping-precompile.mjs';

const source=patchClippingPrecompile(await readFile(new URL('../../node_modules/three/build/three.module.js',import.meta.url),'utf8'));
const prepare=source.match(/function prepareMaterial\( material, scene, object, camera \) \{[\s\S]*?\n\t\t\}/)[0];
const compile=source.match(/this\.compile = function \( scene, camera, targetScene = null \) \{[\s\S]*?\n\t\t\};/)[0];
function fixture(){
 const states=new WeakMap(),calls=[];
 const clipping=new WebGLClipping({get(material){if(!states.has(material))states.set(material,{});return states.get(material);}});
 const context={init(){},pushLight(){},pushShadow(){},setupLights(){}};
 const create=new Function('clipping','renderStates','renderStateStack','getProgram','DoubleSide','BackSide','FrontSide',`let _clippingEnabled=false,_localClippingEnabled=false,currentRenderState;${prepare};return function(){${compile}};`);
 const renderer={localClippingEnabled:true,clippingPlanes:[]};
 create(clipping,{get:()=>context},[],material=>calls.push({material,planes:clipping.numPlanes,intersection:clipping.numIntersection,side:material.side}),THREE.DoubleSide,THREE.BackSide,THREE.FrontSide).call(renderer);
 return {renderer,calls};
}
const plane=()=>new THREE.Plane(new THREE.Vector3(0,1,0),0);
test('Compiled variants follow each material clipping count, including arrays and cleared state',()=>{
 const {renderer,calls}=fixture(),scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera();
 const plain=new THREE.MeshBasicMaterial(),clipped=new THREE.MeshBasicMaterial({clippingPlanes:[plane()]}),intersection=new THREE.MeshBasicMaterial({clippingPlanes:[plane(),plane()],clipIntersection:true});
 scene.add(new THREE.Mesh(new THREE.PlaneGeometry(),[plain,clipped,intersection,plain]));
 renderer.compile(scene,camera);
 assert.deepEqual(calls.map(c=>[c.planes,c.intersection]),[[0,0],[1,0],[2,2],[0,0]]);
 calls.length=0;renderer.clippingPlanes=[plane()];renderer.compile(scene,camera);
 assert.deepEqual(calls.map(c=>[c.planes,c.intersection]),[[1,0],[2,0],[3,2],[1,0]]);
 calls.length=0;renderer.localClippingEnabled=false;renderer.clippingPlanes=[];renderer.compile(scene,camera);
 assert.ok(calls.every(c=>c.planes===0&&c.intersection===0));
});
test('Transparent double-sided material compiles both faces with the same clipping and restores its side',()=>{
 const {renderer,calls}=fixture(),scene=new THREE.Scene(),material=new THREE.MeshBasicMaterial({side:THREE.DoubleSide,transparent:true,clippingPlanes:[plane()]});
 scene.add(new THREE.Mesh(new THREE.PlaneGeometry(),material));renderer.compile(scene,new THREE.PerspectiveCamera());
 assert.deepEqual(calls.map(c=>[c.side,c.planes]),[[THREE.BackSide,1],[THREE.FrontSide,1]]);
 assert.equal(material.side,THREE.DoubleSide);
 assert.throws(()=>patchClippingPrecompile('unexpected library version'),/baseline mismatch/);
});
