import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {vehicleReflectionSampling,LIGHT_REFLECTION_GAIN,bodyReflectionStrength} from '../vehicle-reflection-sampling.js';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';
async function worldSource(){let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});return (await load({path:new URL('../../engine/world.js',import.meta.url).pathname})).contents;}
test('Prepared draws discard their vehicle capture and restore scene state even when drawing fails',async()=>{
 const source=await worldSource(),start=source.indexOf(' renderPreparedFrame(){'),end=source.indexOf('\n completeLayoutTransition(',start);
 assert.ok(start>0&&end>start);const run=new Function('return ({'+source.slice(start,end)+'}).renderPreparedFrame')();
 for(const fails of [false,true]){
  const mesh={visible:false,frustumCulled:true},root={traverse(fn){fn(mesh)}},disposed=[];
  const world={root,renderer:{shadowMap:{needsUpdate:false}},preparedRoots:new Set(),preparedMaterials:[{dispose(){disposed.push(true)}}],reflectionSceneRoot:root,carReflectionKey:'recording',renderFrame(){assert.equal(mesh.visible,true);assert.equal(mesh.frustumCulled,false);this.carReflectionKey='prepared-frame';if(fails)throw Error('draw failed');}};
  if(fails)assert.throws(()=>run.call(world),/draw failed/);else run.call(world);
  assert.equal(world.carReflectionKey,null);assert.equal(world.reflectionSceneRoot,null);assert.equal(world.renderer.shadowMap.needsUpdate,true);
  assert.equal(mesh.visible,false);assert.equal(mesh.frustumCulled,true);assert.equal(world.preparedRoots.has(root),true);assert.deepEqual(disposed,[true]);assert.deepEqual(world.preparedMaterials,[]);
 }
});
test('Vehicle prefilter reconstructs current capture before absorption and only absorbs the first blur pass',async()=>{
 const source=await worldSource(),start=source.indexOf('const carTarget=this.renderer.getRenderTarget();'),end=source.indexOf('this.carReflectionMatrix.value.copy',start);
 assert.ok(start>0&&end>start);const run=new Function('mode','isParking',source.slice(start,end));
 for(const [mode,parking] of [['light',false],['dark',true]]){
  const calls=[],u=Object.fromEntries(['absorbSource','reflectionTone','groundY','source'].map(key=>[key,{value:null}]));u.direction={value:{set(x,y){calls.push(['direction',x,y])}}};
  const inverse={copy(){calls.push(['inverse']);return this},multiply(){return this},invert(){return this}};
  const world={width:1920,height:1080,state:{id:parking?'10':'01'},carMirror:{position:{y:.015},camera:{projectionMatrix:{},matrixWorldInverse:{}},getRenderTarget:()=>({texture:'capture'})},carReflectionInverse:{value:inverse},carBlurMaterial:{uniforms:u},carBlurTargets:[{texture:'horizontal'},{texture:'vertical'}],renderer:{getRenderTarget:()=> 'live',setRenderTarget(t){calls.push(['target',t])}},carBlurQuad:{render(){calls.push(['draw',u.source.value,u.absorbSource.value,u.reflectionTone.value,u.groundY.value])}}};
  run.call(world,mode,parking);assert.equal(calls[0][0],'inverse');assert.equal(calls.filter(x=>x[0]==='inverse').length,1);assert.deepEqual(calls.filter(x=>x[0]==='draw'),[['draw','capture',1,mode==='dark'?1:0,.015],['draw','horizontal',0,mode==='dark'?1:0,.015]]);assert.deepEqual(calls.at(-1),['target','live']);
 }
});
test('Hiding ego keeps every remaining traffic reflection in the weaker role and caps footprint count',async()=>{
 const source=await worldSource(),start=source.indexOf('(this.draftEgoReflectionCount??={value:0}).value=vehicle?1:0;'),end=source.indexOf('reflectedVehicles.slice(0,12).forEach',start);assert.ok(start>0&&end>start);
 const update=new Function('vehicle','parkingVehicles','trafficVisible',source.slice(start,end));
 const cars=Array.from({length:15},()=>({visible:true})),world={car:{visible:true},trafficSystem:{group:{children:cars}},vehicleReflectionCount:{value:0}};
 update.call(world,true,[],true);assert.equal(world.draftEgoReflectionCount.value,1);assert.equal(world.vehicleReflectionCount.value,12);
 update.call(world,false,[],true);assert.equal(world.draftEgoReflectionCount.value,0);assert.equal(world.vehicleReflectionCount.value,12);
 update.call(world,false,[],false);assert.equal(world.draftEgoReflectionCount.value,0);assert.equal(world.vehicleReflectionCount.value,0);
});

// Exercise the generated shader hooks for both existing receiver materials.
// This catches a Parking-only path or a second blend before output conversion.
test('Road and Parking compile one shared vehicle response on their existing receiver',async()=>{
 let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
 const generated=(await load({path:new URL('../../engine/ground-reflection.js',import.meta.url).pathname})).contents;
 const body=generated.replace(/^import .*;\n/gm,'').replaceAll('export ','');
 const attach=new Function('THREE','SR_QUALITY_MIX','vehicleReflectionSampling',body+';return attachGroundReflection')(THREE,1,vehicleReflectionSampling);
 const shared={value:1},road=new THREE.MeshStandardMaterial(),floor=new THREE.ShaderMaterial();
 const world={mat:{road},reflectionStrength:shared,environmentTone:{value:0},width:1920,height:1080};
 const shaders=[];
 for(const [material,custom] of [[road,false],[floor,true]]){
  attach(material,world,custom);
  const shader={uniforms:{},vertexShader:'void main(){vec3 p=vec3(0.);gl_Position=vec4(p,1.);\n#include <project_vertex>\n}',fragmentShader:'void main(){vec3 surface=vec3(.5);gl_FragColor=vec4(surface,1.);\n#include <opaque_fragment>\n#include <colorspace_fragment>\nfloat neutralGroundLuma=dot(gl_FragColor.rgb,vec3(.333));gl_FragColor.rgb=vec3(neutralGroundLuma);\n#include <premultiplied_alpha_fragment>\n}'};
  material.onBeforeCompile(shader);shaders.push(shader);
  assert.equal(shader.uniforms.reflectionStrength,shared);
  assert.equal(shader.uniforms.vehicleReflectionTexel,world.draftVehicleReflectionTexel);
  assert.equal((shader.fragmentShader.match(/vec3 compositeVehicleReflection/g)||[]).length,1);
  assert.ok(shader.fragmentShader.indexOf('gl_FragColor.rgb=compositeVehicleReflection')>shader.fragmentShader.indexOf('#include <colorspace_fragment>'));
  if(!custom)assert.ok(shader.fragmentShader.indexOf('gl_FragColor.rgb=compositeVehicleReflection')>shader.fragmentShader.indexOf('gl_FragColor.rgb=vec3(neutralGroundLuma)'));
  assert.doesNotMatch(shader.fragmentShader,/surface=mix\(surface,clamp\(softReflection/);
 }
 assert.equal(shaders[0].uniforms.vehicleReflectionTexel,shaders[1].uniforms.vehicleReflectionTexel);
});
test('Current gain replaces the rejected boost and traffic remains subordinate through theme changes',()=>{
 assert.equal(LIGHT_REFLECTION_GAIN,1.68*1.3);
 for(const tone of [0,.25,.5,.75,1]){
  assert.ok(bodyReflectionStrength(tone)>0&&bodyReflectionStrength(tone)<1);
  assert.ok(Math.abs(bodyReflectionStrength(tone,false)/bodyReflectionStrength(tone)-.42)<1e-10);
 }
});
test('Generated runtime has no independent lamp reflection receiver',async()=>{
 const source=await worldSource();
 assert.doesNotMatch(source,/createTailLight|updateTailLight|this\.tailReflection/);
});
