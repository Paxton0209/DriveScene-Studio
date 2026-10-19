import * as THREE from 'three';
const jobs=new WeakMap();
const yieldIdle=()=>new Promise(resolve=>globalThis.requestIdleCallback?requestIdleCallback(()=>resolve(),{timeout:350}):setTimeout(resolve,16));
async function warmGeometry(world,root,yieldControl){
 if(!world.renderer)return;
 const scene=new THREE.Scene();scene.fog=world.scene.fog?.clone();scene.environment=world.scene.environment;scene.environmentIntensity=world.scene.environmentIntensity;
 world.scene.traverse(o=>{if(o.isLight)scene.add(o.clone());});
 const prior=[];root.traverse(o=>{prior.push([o,o.visible,o.frustumCulled]);o.visible=true;o.frustumCulled=false;});scene.add(root);
 const renderer=world.renderer,target=new THREE.WebGLRenderTarget(1,1);let previous,drawStarted=false;
 try{
  await renderer.compileAsync(scene,world.camera);await yieldControl();
  // A 1px offscreen draw uploads vertex buffers before the first lane click.
  previous=renderer.getRenderTarget();drawStarted=true;renderer.shadowMap.needsUpdate=false;renderer.setRenderTarget(target);renderer.render(scene,world.camera);
 }finally{if(drawStarted){renderer.setRenderTarget(previous);renderer.shadowMap.needsUpdate=true;}target.dispose();root.removeFromParent();for(const [o,visible,culled]of prior){o.visible=visible;o.frustumCulled=culled;}}
}
// Build inactive lane variants in slices without replacing the live root/camera.
export function prepareLaneGeometry(world,{yieldControl=yieldIdle}={}){
 if(jobs.has(world))return jobs.get(world);
 const pending=(async()=>{
  for(const laneCount of [2,4,6]){
   const id=laneCount===2?'09':'02',key=JSON.stringify([id,laneCount,world.palette]);if(world.sceneCache.has(key))continue;
   const stage=Object.create(world);stage.scene=new THREE.Scene();stage.root=null;stage.sceneCache=new Map();stage.roadCameraCache=new Map();stage.camera=world.camera.clone();stage.car=world.car.clone(true);stage.sun=world.sun.clone();stage.sun.target=world.sun.target.clone();stage.scene.add(stage.car,stage.sun,stage.sun.target);
   const iterator=stage.buildSteps(id,{...world.state,id,laneCount,palette:world.palette});let done=false;
   while(!done){await yieldControl();while(world.layoutTransition||world.initializingScene){await yieldControl();}const roughness=world.mat.water.roughness;try{done=iterator.next().done;}finally{world.mat.water.roughness=roughness;}}
   if(!world.sceneCache.has(key)){const cached=stage.sceneCache.get(key);cached.fields.root.removeFromParent();await warmGeometry(world,cached.fields.root,yieldControl);world.sceneCache.set(key,cached);}
  }
  world.laneCacheReady=true;
 })().catch(error=>{console.error('Lane geometry preparation failed',error);jobs.delete(world);});jobs.set(world,pending);return pending;
}
