import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {retainMorphingScenery} from '../lane-culling.js';

test('A tree whose target bounds leave the camera remains visible during GPU lane movement',()=>{
 const root=new THREE.Group(),camera=new THREE.PerspectiveCamera(45,1,.1,100);
 const tree=new THREE.Mesh(new THREE.BoxGeometry(1,4,1));tree.position.set(9,0,-10);
 tree.geometry.setAttribute('roadLayoutRole',new THREE.Float32BufferAttribute(new Array(24).fill(1),1));root.add(tree);
 const fixed=new THREE.Mesh(new THREE.BoxGeometry());fixed.geometry.setAttribute('roadLayoutRole',new THREE.Float32BufferAttribute(new Array(24).fill(0),1));root.add(fixed);
 camera.updateMatrixWorld();root.updateMatrixWorld();
 const frustum=new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
 assert.equal(frustum.intersectsObject(tree),false,'CPU target bounds are outside before the visual tree moves');
 assert.equal(frustum.containsPoint(new THREE.Vector3(2,0,-10)),true,'the GPU starting position is still visible');
 const restore=retainMorphingScenery(root);assert.equal(tree.frustumCulled,false);assert.equal(fixed.frustumCulled,true);
 restore();assert.equal(tree.frustumCulled,true);restore();assert.equal(tree.frustumCulled,true);
});
