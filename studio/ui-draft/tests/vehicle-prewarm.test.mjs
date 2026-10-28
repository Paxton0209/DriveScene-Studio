import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {readFile} from 'node:fs/promises';
import {createVehicleWeather} from '../vehicle-weather.js';
import {patchApp} from '../runtime-patches.mjs';
import {createContinuousDriving} from '../../engine/continuous-driving.js';

test('Pausing before cold assets construct a scene cannot abort bridge installation through its audit callback',async()=>{
 const patched=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
 const setup=patched.slice(patched.indexOf('let lastDrivingAudit=0;'),patched.indexOf('\nworld.continuousDrive='));
 let now=500,audits=0;const preview={dataset:{}},world={audit(){assert.ok(this.root);assert.equal(this.initializingScene,false);audits++;return {ready:true};}};
 const drive=new Function('world','preview','query','createContinuousDriving','makeRandom','performance',setup+';return continuousDrive;')(
  world,preview,new URLSearchParams('review=ui-draft'),createContinuousDriving,()=>Math.random,{now:()=>now});
 drive.pause();assert.equal(audits,0);assert.equal(drive.audit().playing,false);
 world.root=new THREE.Group();world.initializingScene=true;drive.pause();assert.equal(audits,0);
 world.initializingScene=false;drive.pause();assert.equal(audits,1);assert.deepEqual(JSON.parse(preview.dataset.audit),{ready:true});
 drive.pause();assert.equal(audits,1,'the normal audit interval remains');
 now+=200;drive.reset();assert.equal(audits,2);
});

test('Offscreen vehicle preparation installs final wheel/snow variants before compilation, including initial vehicle',async()=>{
 const original=await readFile(new URL('../../engine/app.js',import.meta.url),'utf8');
 const patched=patchApp(original),events=[];
 const queue=patched.match(/preparationQueue\.then\((\(\)=>\{world\.draftPrepareVehicle\?\.\(car\);return prepareVehicleChoice\(world,car\);\})\)/)[1];
 const car={},world={draftPrepareVehicle(value){assert.equal(value,car);events.push('materials');}};
 await new Function('world','car','prepareVehicleChoice',`return (${queue})()`)(world,car,async()=>events.push('compile'));
 assert.deepEqual(events,['materials','compile']);
 assert.ok(patched.includes('world.draftPrepareVehicle?.(car);world.setVehicle(car,'));
});

test('Prewarming snow hooks is idempotent and preserves the same shader/uniforms as first-frame installation',()=>{
 const make=()=>{const material=new THREE.MeshStandardMaterial();material.name='body';const car=new THREE.Group();car.add(new THREE.Mesh(new THREE.BoxGeometry(),material));return {car,material};};
 const world={state:{id:'01'},draftThemeTone:{value:1},draftWeather:{weights:{snow:.6}}};
 const early=make(),visible=make(),a=createVehicleWeather({...world,car:early.car}),b=createVehicleWeather({...world,car:visible.car});
 a.install(early.car);const version=early.material.version,key=early.material.customProgramCacheKey();
 a.install(early.car);a.update();b.update();
 assert.equal(early.material.version,version);assert.equal(early.material.customProgramCacheKey(),key);
 const shader=()=>({uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <opaque_fragment>'});
 const first=shader(),second=shader();early.material.onBeforeCompile(first);visible.material.onBeforeCompile(second);
 assert.equal(first.vertexShader,second.vertexShader);assert.equal(first.fragmentShader,second.fragmentShader);
 assert.deepEqual(first.uniforms,second.uniforms);assert.equal(first.uniforms.draftVehicleSnow.value,.6);
});
