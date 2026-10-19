import test from 'node:test';
import assert from 'node:assert/strict';
import {installEnvironmentFinish} from '../engine/environment-finish.js';
function fixture(){
 const mat=Object.fromEntries(['road','ground','pavement','curb','building','grass','leaf','leaf2','trunk'].map(kind=>[kind,{customProgramCacheKey:()=>kind,onBeforeCompile(shader){shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','outgoingLight+=reflectedColor;\n#include <opaque_fragment>');}}]));
 const world={mat,environmentTone:{value:1}};installEnvironmentFinish(world);return world;
}
function compile(material){const shader={uniforms:{},vertexShader:'#include <project_vertex>',fragmentShader:'#include <roughnessmap_fragment>\n#include <lights_fragment_end>\n#include <opaque_fragment>'};material.onBeforeCompile(shader);return shader;}
test('dark dry-surface color correction happens after environment reflection and retains theme control',()=>{
 const world=fixture(),correction='outgoingLight=mix(outgoingLight,vec3(dot(outgoingLight,vec3(.2126,.7152,.0722))),finishTone);';
 for(const kind of ['road','ground','pavement','curb']){const shader=compile(world.mat[kind]);assert.ok(shader.fragmentShader.includes(correction));assert.ok(shader.fragmentShader.indexOf(correction)>shader.fragmentShader.indexOf('outgoingLight+=reflectedColor'));assert.equal(shader.uniforms.finishTone,world.environmentTone);}
 world.environmentTone.value=0;assert.equal(compile(world.mat.road).uniforms.finishTone.value,0);
});
test('building and vegetation colors do not inherit the neutral dry-surface correction',()=>{
 const world=fixture();for(const kind of ['building','grass','leaf','leaf2','trunk'])assert.ok(!compile(world.mat[kind]).fragmentShader.includes('outgoingLight=mix(outgoingLight,vec3(dot(outgoingLight'));
});
