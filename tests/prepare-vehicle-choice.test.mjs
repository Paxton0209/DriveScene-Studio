import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {prepareVehicleChoice} from '../prepare-vehicle-choice.js';

function fixture(fail){
 const scene=new THREE.Scene(),light=new THREE.DirectionalLight(),car=new THREE.Group(),parent=new THREE.Group(),mesh=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial());scene.environment=new THREE.Texture();scene.add(light);parent.add(car);car.add(mesh);mesh.frustumCulled=true;
 const viewport=new THREE.Vector4(2,3,640,360),originalTarget=new THREE.WebGLRenderTarget(4,4),source=new THREE.WebGLRenderTarget(4,4);let target=originalTarget,rendered=0,disposed=false;
 const renderer={shadowMap:{autoUpdate:true,needsUpdate:true},initTexture(){},getRenderTarget:()=>target,getViewport:value=>value.copy(viewport),setViewport(value,vertical,width,height){if(value.isVector4)viewport.copy(value);else viewport.set(value,vertical,width,height);},setRenderTarget:value=>{target=value;if(value&&value!==originalTarget)value.addEventListener('dispose',()=>disposed=true);},async compileAsync(context){assert.ok(context.children.includes(car));assert.equal(context.environment,scene.environment);if(fail==='compile')throw Error('compile');},render(context){rendered++;assert.notEqual(target,originalTarget);assert.equal(renderer.shadowMap.needsUpdate,false);assert.deepEqual(viewport.toArray(),[0,0,1,1]);assert.ok(context.children.includes(car));if(fail==='render')throw Error('render');}};
 return {world:{renderer,scene,camera:new THREE.PerspectiveCamera(),composer:{renderTarget1:source}},car,parent,mesh,viewport,originalTarget,source,state:()=>({target,rendered,disposed})};
}

test('vehicle preparation renders offscreen and restores canvas, shadow and parent state',async()=>{
 const view=fixture();await prepareVehicleChoice(view.world,view.car);assert.equal(view.state().rendered,1);assert.equal(view.state().target,view.originalTarget);assert.equal(view.state().disposed,true);assert.deepEqual(view.viewport.toArray(),[2,3,640,360]);assert.equal(view.car.parent,view.parent);assert.equal(view.mesh.frustumCulled,true);assert.deepEqual(view.world.renderer.shadowMap,{autoUpdate:true,needsUpdate:true});view.mesh.geometry.dispose();view.mesh.material.dispose();view.source.dispose();view.originalTarget.dispose();
});

test('failed shader preparation or rendering cannot leave the real scene on a scratch target',async()=>{
 for(const failure of ['compile','render']){
  const view=fixture(failure);await assert.rejects(prepareVehicleChoice(view.world,view.car));assert.equal(view.state().target,view.originalTarget);assert.equal(view.state().disposed,true);assert.equal(view.car.parent,view.parent);assert.equal(view.mesh.frustumCulled,true);assert.deepEqual(view.viewport.toArray(),[2,3,640,360]);assert.deepEqual(view.world.renderer.shadowMap,{autoUpdate:true,needsUpdate:true});view.mesh.geometry.dispose();view.mesh.material.dispose();view.source.dispose();view.originalTarget.dispose();
 }
});
