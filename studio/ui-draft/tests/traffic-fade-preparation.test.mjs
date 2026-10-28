import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
import {patchRendererPreparation} from '../runtime-patches.mjs';

const original=await readFile(new URL('../../engine/prepare-renderer.js',import.meta.url),'utf8');
const source=patchRendererPreparation(original).replace("from 'three'",`from '${import.meta.resolve('three')}'`);
const {prepareRenderer}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));

function fixture(fail=false){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(),target=new THREE.WebGLRenderTarget(4,4),calls=[];
 const materials=[new THREE.MeshPhysicalMaterial(),new THREE.MeshPhysicalMaterial(),new THREE.MeshPhysicalMaterial({transparent:true})];
 materials[0].userData.trafficRole='paint';materials[2].userData.trafficRole='window';
 for(const material of materials)scene.add(new THREE.Mesh(new THREE.PlaneGeometry(),material));
 const hidden=new THREE.Group();hidden.visible=false;scene.add(hidden);
 let current=target;
 const renderer={shadowMap:{autoUpdate:true,needsUpdate:false},renderBufferDirect(){},getRenderTarget:()=>current,setRenderTarget(value){current=value;},getViewport:()=>new THREE.Vector4(0,0,4,4),setViewport(){},
  compileAsync(context){const material=context.children.find(o=>o.isMesh).material;calls.push({kind:'compile',material,transparent:material.transparent});
   return Promise.resolve().then(()=>{assert.equal(materials[0].transparent,false,'live traffic restored before asynchronous work');assert.equal(current,target);if(fail)throw Error('compile failure');});},
  render(context){const material=context.children.find(o=>o.isMesh).material;calls.push({kind:'draw',material,transparent:material.transparent});}
 };
 const draw=renderer.renderBufferDirect;
 const world={scene,renderer,performanceStats:{compiles:0},renderFrame(){if(this.suspended)return;for(const mesh of scene.children.filter(o=>o.isMesh))renderer.renderBufferDirect(camera,scene,mesh.geometry,mesh.material,mesh);}};
 return {world,materials,calls,target,hidden,draw};
}

test('Existing preparation covers traffic fade on the live material and preserves visible material state',async()=>{
 const f=fixture(),before=f.materials.map(m=>m.toJSON());
 await prepareRenderer(f.world);
 for(const kind of ['compile','draw']){
  const calls=f.calls.filter(c=>c.kind===kind);assert.equal(calls.length,4);
  assert.equal(calls.filter(c=>c.material===f.materials[0]&&c.transparent).length,1,'fade variant retained on actual traffic material');
  assert.equal(calls.filter(c=>c.material===f.materials[1]).length,0,'ordinary scene materials remain preparation copies');
 }
 assert.deepEqual(f.materials.map(m=>m.toJSON()),before);
 assert.equal(f.world.preparedMaterials.length,3);
 assert.ok(f.world.preparedMaterials.every(m=>!f.materials.includes(m)),'caller disposal only owns copies');
 assert.equal(f.hidden.visible,false);assert.equal(f.world.renderer.renderBufferDirect,f.draw);assert.equal(f.world.renderer.getRenderTarget(),f.target);
});

test('Rejected compilation restores live traffic transparency and output target',async()=>{
 const f=fixture(true);await assert.rejects(prepareRenderer(f.world),/compile failure/);
 assert.equal(f.materials[0].transparent,false);assert.equal(f.hidden.visible,false);
 assert.equal(f.world.renderer.getRenderTarget(),f.target);assert.equal(f.world.renderer.renderBufferDirect,f.draw);
 assert.throws(()=>patchRendererPreparation('changed baseline'),/baseline mismatch/);
});


test('Suspended scene switches still prepare all render jobs and restore suspension before yielding',async()=>{
 const f=fixture();f.world.suspended=true;
 const preparation=prepareRenderer(f.world);
 assert.equal(f.world.suspended,true,'suspension restored before the first asynchronous yield');
 assert.equal(f.world.renderer.renderBufferDirect,f.draw);
 await preparation;
 assert.equal(f.calls.filter(c=>c.kind==='compile').length,4);
 assert.equal(f.calls.filter(c=>c.kind==='draw').length,4);
 assert.equal(f.world.suspended,true);assert.equal(f.hidden.visible,false);
});

test('Recording failure restores suspension, renderer interception and hidden objects',async()=>{
 const f=fixture();f.world.suspended=true;
 f.world.renderFrame=function(){assert.equal(this.suspended,false);throw Error('record failure');};
 await assert.rejects(prepareRenderer(f.world),/record failure/);
 assert.equal(f.world.suspended,true);assert.equal(f.hidden.visible,false);
 assert.equal(f.world.renderer.renderBufferDirect,f.draw);
});


test('Preparation copies preserve metadata references without serializing scene-owned resources',async()=>{
 const f=fixture(),resource={toJSON(){throw Error('resource must not serialize');}};
 f.world.scene.userData.resource=resource;
 const mesh=f.world.scene.children.find(o=>o.isMesh);mesh.userData.resource=resource;
 const sceneData=f.world.scene.userData,meshData=mesh.userData;
 const raw=f.world.renderer.compileAsync;
 f.world.renderer.compileAsync=function(context,camera){
  assert.equal(context.userData.resource,resource);
  if(context.children[0].material===f.materials[0])assert.equal(context.children[0].userData.resource,resource);
  return raw.call(this,context,camera);
 };
 await prepareRenderer(f.world);
 assert.equal(f.world.scene.userData,sceneData);assert.equal(mesh.userData,meshData);
 assert.equal(mesh.userData.resource,resource);
});

for(const failDraw of [false,true])test(`Warm colour draws skip redundant shadow atlases and restore flags (failure=${failDraw})`,async()=>{
 const f=fixture(),render=f.world.renderer.render;
 f.world.renderer.render=function(...args){assert.equal(this.shadowMap.autoUpdate,false);assert.equal(this.shadowMap.needsUpdate,false);if(failDraw)throw Error('draw failure');return render.apply(this,args)};
 if(failDraw)await assert.rejects(prepareRenderer(f.world),/draw failure/);else await prepareRenderer(f.world);
 assert.equal(f.world.renderer.shadowMap.autoUpdate,true);assert.equal(f.world.renderer.shadowMap.needsUpdate,true);
 assert.equal(f.world.renderer.getRenderTarget(),f.target);assert.equal(f.materials[0].transparent,false);
});
