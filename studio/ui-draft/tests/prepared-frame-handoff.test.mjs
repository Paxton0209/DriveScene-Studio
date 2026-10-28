import test from 'node:test';
import assert from 'node:assert/strict';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';
let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
const {contents}=await load({path:new URL('../../engine/world.js',import.meta.url).pathname});
const method=contents.slice(contents.indexOf(' renderPreparedFrame(){'),contents.indexOf('\n completeLayoutTransition('));
const run=new Function(`return ({${method}}).renderPreparedFrame`)();
for(const fail of [false,true])test(`Prepared frame acquires live programs before cleanup and restores suspension (failure=${fail})`,()=>{
 const mesh={visible:false,frustumCulled:true},root={traverse(fn){fn(mesh)}},events=[];
 const world={root,suspended:true,preparedRoots:new Set(),renderer:{shadowMap:{}},preparedMaterials:[{dispose(){events.push('dispose')}}],renderFrame(){assert.equal(this.suspended,false);assert.equal(mesh.visible,true);assert.equal(mesh.frustumCulled,false);events.push('draw');if(fail)throw Error('draw failure')}};
 if(fail)assert.throws(()=>run.call(world),/draw failure/);else run.call(world);
 assert.deepEqual(events,['draw','dispose']);assert.equal(world.suspended,true);assert.equal(mesh.visible,false);assert.equal(mesh.frustumCulled,true);assert.equal(world.preparedMaterials.length,0);
});
