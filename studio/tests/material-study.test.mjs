import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {applySrVehicleFinish} from '../engine/sr-vehicle-finish.js';
import {createContactShadows} from '../engine/contact-shadows.js';
import {disposeVehicle} from '../engine/dispose-vehicle.js';
function vehicle(length=4.72){const root=new THREE.Group();root.userData.vehicleSpec={length,wheels:[-1,1].flatMap(x=>[-1.4,1.4].map(z=>({min:[x-.1,0,z-.2],max:[x+.1,.6,z+.2]})))};return root;}
test('draft finish preserves shared materials, lamps and glass opacity and is safe to reapply',()=>{
 const car=vehicle(),paint=new THREE.MeshPhysicalMaterial(),glass=new THREE.MeshStandardMaterial(),lamp=new THREE.MeshStandardMaterial({emissive:0xff0000,emissiveIntensity:2});
 paint.userData.surfaceRole='paint';glass.userData.surfaceRole='glass';lamp.userData.surfaceRole='brake';
 for(const material of [paint,paint,glass,lamp])car.add(new THREE.Mesh(new THREE.BoxGeometry(1,1,1),material));
 applySrVehicleFinish(car);const owners=paint.envMap.userData.vehicleOwners;
 assert.equal(car.children[0].material,car.children[1].material);assert.equal(car.userData.materialStudy.paint,1);assert.equal(car.userData.materialStudy.glass,1);
 assert.equal(glass.envMap,null);assert.ok(glass.envMapIntensity<.5);assert.ok(glass.roughness>=.3);assert.equal(glass.opacity,1);assert.equal(glass.transparent,false);assert.equal(lamp.emissive.getHex(),0xff0000);assert.equal(lamp.emissiveIntensity,2);
 const shader={fragmentShader:'#include <lights_fragment_end>'};paint.onBeforeCompile(shader);assert.match(shader.fragmentShader,/reflectedLight.indirectDiffuse\*=srVehiclePlanes/);assert.match(shader.fragmentShader,/#include <lights_fragment_end>/);assert.ok(paint.clearcoatRoughness<paint.roughness);applySrVehicleFinish(car);assert.equal(paint.envMap.userData.vehicleOwners,owners);disposeVehicle(car);
});
test('soft contact shadow follows vehicle length while original contact dimensions remain unchanged',()=>{
 const car=vehicle(5.2),original=createContactShadows(car),soft=createContactShadows(car,{softBody:true});
 assert.equal(original.children.length,5);assert.equal(soft.children.length,5);assert.equal(original.children[0].geometry.parameters.height,5.1);
 assert.equal(soft.children[0].geometry.parameters.height,5.2*1.1);assert.equal(original.children[0].material.uniforms.softBody.value,0);assert.equal(soft.children[0].material.uniforms.softBody.value,1);
 assert.ok(soft.children[0].material.uniforms.opacity.value<original.children[0].material.uniforms.opacity.value);
 disposeVehicle(original);disposeVehicle(soft);
});


test('building reflections strengthen only on draft surroundings while the road keeps its subdued vehicle reflection',async()=>{
 const {groundReflectionProfile:profile}=await import('../engine/ground-reflection.js');
 const original=profile(false,'ground'),surround=profile(true,'ground'),road=profile(true,'road');
 assert.equal(original.blend,.38);assert.equal(surround.blend,.48);assert.ok(surround.heightFade<original.heightFade);assert.ok(surround.soften>original.soften);
 assert.equal(road.blend,.18);assert.equal(road.soften,1);assert.deepEqual(profile(false,'pavement'),original);assert.deepEqual(profile(true,'water'),original);
});
