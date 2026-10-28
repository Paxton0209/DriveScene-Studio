import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {readFile} from 'node:fs/promises';
import {patchLaneGeometry} from '../runtime-patches.mjs';

const source=patchLaneGeometry(await readFile(new URL('../../engine/lane-geometry-cache.js',import.meta.url),'utf8'));
const warmGeometry=new Function('THREE',source.slice(source.indexOf('async function warmGeometry'),source.indexOf('// Build inactive'))+';return warmGeometry;')(THREE);

for(const reject of [false,true])test(`Lane warmup compiles the draw target without retaining it across waits (${reject?'reject':'success'})`,async()=>{
 const live={},camera={},events=[];let current=live,finish,disposed=false,warmTarget;
 const compilation=new Promise((resolve,fail)=>{finish=()=>reject?fail(Error('compile rejected')):resolve();});
 const root=new THREE.Group(),mesh=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshBasicMaterial());root.add(mesh);mesh.visible=false;
 const renderer={shadowMap:{needsUpdate:true},getRenderTarget:()=>current,setRenderTarget(value){current=value;},
  compileAsync(scene,view){assert.equal(view,camera);assert.notEqual(current,live);assert.ok(scene.children.includes(root));warmTarget=current;warmTarget.addEventListener('dispose',()=>{disposed=true;});events.push('compile');return compilation;},
  render(scene,view){assert.equal(current,warmTarget);assert.equal(view,camera);assert.ok(scene.children.includes(root));events.push('draw');}};
 const world={renderer,camera,scene:new THREE.Scene()};
 const pending=warmGeometry(world,root,async()=>{assert.equal(current,live);events.push('yield');});
 assert.equal(current,live);assert.deepEqual(events,['compile']);finish();
 if(reject)await assert.rejects(pending,/compile rejected/);else await pending;
 assert.equal(current,live);assert.equal(disposed,true);assert.equal(root.parent,null);assert.equal(mesh.visible,false);assert.equal(mesh.frustumCulled,true);
 assert.deepEqual(events,reject?['compile']:['compile','yield','draw']);
});
