import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {syncVehicleCastFade} from '../vehicle-cast-shadow.js';
test('Live cast penumbra follows vehicle poses and chains the road reflection shader once',()=>{
 const car=new THREE.Group(),traffic=new THREE.Group(),group=new THREE.Group();group.add(traffic);traffic.userData.vehicleSpec={width:2,length:5};
 const material=new THREE.MeshStandardMaterial();let calls=0;material.onBeforeCompile=shader=>{calls++;shader.uniforms.existing={value:1}};
 const world={car,trafficSystem:{group},mat:{road:material}};
 syncVehicleCastFade(world);const compile=material.onBeforeCompile,shader={uniforms:{},vertexShader:'#include <worldpos_vertex>',fragmentShader:'#include <shadowmap_pars_fragment>\nvoid main(){}'};
 compile.call(material,shader);assert.equal(calls,1);assert.equal(shader.uniforms.existing.value,1);assert.match(shader.fragmentShader,/mix\(1\.,VSMShadow/);
 assert.equal(shader.uniforms.draftCastCount.value,2);assert.equal(shader.uniforms.draftCastBoxes.value[1].z,1);
 traffic.position.set(8,0,-14);traffic.rotation.y=Math.PI/2;syncVehicleCastFade(world);
 assert.equal(material.onBeforeCompile,compile);assert.equal(shader.uniforms.draftCastBoxes.value[1].x,8);assert.equal(shader.uniforms.draftCastBoxes.value[1].y,-14);assert.equal(shader.uniforms.draftCastYaw.value[1],Math.PI/2);
 traffic.visible=false;syncVehicleCastFade(world);assert.equal(shader.uniforms.draftCastCount.value,1);
});
