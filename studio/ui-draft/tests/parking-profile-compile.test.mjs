import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=await readFile(new URL('../saved-preview/frame-profile.js',import.meta.url),'utf8');
for(const weather of [false,true])test(`Parking profile ${weather?'retains active':'does not invent inactive'} weather shader`,()=>{
 const floor={uniforms:{horizon:{},tone:{}},onBeforeCompile(){},customProgramCacheKey:()=>''};
 const scene={children:[],traverse(fn){fn({material:floor,userData:{}})},getObjectByName(){}};
 const world={scene,root:{},state:{mode:'light',weather:'default'}};
 const context={window:{},document:{createElement:()=>({}),head:{append(){}},getElementById:()=>null,addEventListener(){}},location:{search:''},URLSearchParams,performance:{now:()=>0}};
 vm.runInNewContext(source,context);
 context.window.__feedback160.prepareFrame(world,'parking');
 assert.deepEqual(Array.from(context.window.__feedback160.errors),[]);
 const shader={fragmentShader:(weather?'vec3 weatherGround(vec3 c,vec3 p,float u,float f,float r,vec3 l){return c;}\n':'')+'void main(){\n// A broad, world-space light pool\n// original finish\n#include <colorspace_fragment>\n}'};
 floor.onBeforeCompile(shader,{});
 assert.equal(shader.fragmentShader.includes('floor160=weatherGround('),weather);
 assert.ok(shader.fragmentShader.includes('gl_FragColor.rgb=mix(floor160,horizon,aerial160)'));
});
