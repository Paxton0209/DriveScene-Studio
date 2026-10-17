import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {vehicleFrame} from '../framing.js';

test('framing cache retains exact bounds and invalidates camera, transform and vertex changes',()=>{
 const car=new THREE.Group(),mesh=new THREE.Mesh(new THREE.BoxGeometry(2,1.5,4.8),new THREE.MeshBasicMaterial()),camera=new THREE.PerspectiveCamera(38,16/9,.1,200);car.add(mesh);camera.position.set(1.8,8,23);camera.lookAt(0,0,0);
 const first=vehicleFrame(car,camera);assert.deepEqual(vehicleFrame(car,camera),first);first.bottom=-1;assert.notEqual(vehicleFrame(car,camera).bottom,-1);
 camera.position.x+=2;camera.lookAt(0,0,0);const movedCamera=vehicleFrame(car,camera);assert.notDeepEqual(movedCamera,first);car.position.x+=1;assert.notDeepEqual(vehicleFrame(car,camera),movedCamera);
 const before=vehicleFrame(car,camera),position=mesh.geometry.attributes.position;for(let index=0;index<position.count;index++)position.setX(index,position.getX(index)*2);position.needsUpdate=true;assert.notEqual(vehicleFrame(car,camera).width,before.width);
 mesh.geometry.dispose();mesh.material.dispose();
});
