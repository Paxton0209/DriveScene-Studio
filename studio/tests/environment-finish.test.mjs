import test from 'node:test';
import assert from 'node:assert/strict';
import {installEnvironmentFinish} from '../engine/environment-finish.js';
function fixture(){
 const mat=Object.fromEntries(['road','ground','pavement','curb','building','grass','leaf','leaf2','trunk'].map(kind=>[kind,{customProgramCacheKey:()=>kind,onBeforeCompile(shader){shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','outgoingLight+=reflectedColor;\n#include <opaque_fragment>');}}]));
 const world={mat,environmentTone:{value:1}};installEnvironmentFinish(world);return world;
}
function compile(material){const shader={uniforms:{},vertexShader:'#include <project_vertex>',fragmentShader:'#include <roughnessmap_fragment>\n#include <lights_fragment_end>\n#include <opaque_fragment>'};material.onBeforeCompile(shader);return shader;}
test('dry surfaces and buildings bypass the added finish in dark mode while retaining light-mode control',()=>{
 const world=fixture();
 for(const kind of ['road','ground','pavement','curb','building']){
  const shader=compile(world.mat[kind]);
  assert.ok(shader.fragmentShader.includes('float finishStrength=environmentFinishAmount*(1.-finishTone);'));
  assert.equal(shader.uniforms.finishTone,world.environmentTone);
  assert.equal(shader.uniforms.environmentFinishAmount,world.environmentFinish.amount);
  assert.ok(!shader.fragmentShader.includes('outgoingLight=mix(outgoingLight,vec3(dot(outgoingLight'));
 }
 world.environmentTone.value=0;assert.equal(compile(world.mat.road).uniforms.finishTone.value,0);
});
test('vegetation retains its finish independently of dark road and building colors',()=>{
 const world=fixture();
 for(const kind of ['grass','leaf','leaf2','trunk'])assert.ok(compile(world.mat[kind]).fragmentShader.includes('float finishStrength=environmentFinishAmount*1.;'));
});
