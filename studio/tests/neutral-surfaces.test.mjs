import test from 'node:test';
import assert from 'node:assert/strict';
import {ShaderLib} from 'three';
import {installNeutralDarkSurfaces} from '../engine/neutral-surfaces.js';
import {createWeatherGround} from '../engine/weather-ground.js';
test('dark cool-gray correction follows weather and fades into the shared horizon without affecting other materials',()=>{
 const kinds=['road','ground','pavement','curb','grass','building','leaf','water','paint'];
 const hook=function(shader){shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','outgoingLight+=vec3(.1,.2,.3);\n#include <opaque_fragment>');};
 const mat=Object.fromEntries(kinds.map(k=>[k,{onBeforeCompile:hook,customProgramCacheKey:()=>k}]));
 const world={mat,environmentTone:{value:1},current:'02',state:{laneCount:6}};
 installNeutralDarkSurfaces(world);
 const root={traverse(){}};createWeatherGround(world).update({kind:'rain',amount:.05,root,dark:true});
 for(const key of ['road','ground','pavement','curb']){
  const shader={uniforms:{},vertexShader:ShaderLib.standard.vertexShader,fragmentShader:ShaderLib.standard.fragmentShader};
  mat[key].onBeforeCompile(shader);
  const rain=shader.fragmentShader.indexOf('outgoingLight=weatherGround('),neutral=shader.fragmentShader.indexOf('float neutralGroundLuma=');
  assert.ok(rain>=0&&neutral>rain);
  assert.ok(neutral>shader.fragmentShader.indexOf('#include <fog_fragment>'));
  assert.equal(shader.uniforms.neutralGroundTone,world.environmentTone);
  assert.ok(shader.fragmentShader.includes('neutralGroundMix*=1.-fogFactor;'));
  assert.equal(shader.uniforms.weatherTone.value,1);
 }
 assert.equal(mat.water.onBeforeCompile,hook);assert.equal(mat.paint.onBeforeCompile,hook);
 assert.ok(!mat.building.customProgramCacheKey().includes('neutral-dark-ground'));
 world.environmentTone.value=0;
 const shader={uniforms:{},vertexShader:ShaderLib.standard.vertexShader,fragmentShader:ShaderLib.standard.fragmentShader};mat.road.onBeforeCompile(shader);
 assert.equal(shader.uniforms.neutralGroundTone.value,0);
});
