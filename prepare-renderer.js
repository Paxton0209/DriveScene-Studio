import * as THREE from 'three';

const yieldToBrowser=()=>new Promise(resolve=>setTimeout(resolve,0));

// Record the actual reflection, shadow and composer passes without drawing.
// Warm their exact shader variants in small tasks, including uniform discovery.
export async function prepareRenderer(world){
 const {renderer,scene}=world,jobs=[],seen=new Set(),hidden=[],contexts=new Map(),targets=new Map();
 scene.traverse(object=>{if(!object.visible){hidden.push(object);object.visible=true;}});
 const draw=renderer.renderBufferDirect;
 renderer.renderBufferDirect=(camera,targetScene,geometry,material,object)=>{
  const target=renderer.getRenderTarget();
  const key=JSON.stringify([material.uuid,material.side,material.defines,material.clippingPlanes?.length||0,material.clipIntersection,!!object.receiveShadow,!!object.isInstancedMesh,!!object.isSkinnedMesh,Object.keys(geometry.attributes),targetScene?.uuid,target?.texture.type,target?.texture.colorSpace,target===null]);
  if(seen.has(key))return;seen.add(key);
  let copy;
  if(material.isShaderMaterial){
   // Render-target textures belong to their pass; share them rather than clone.
   const uniforms=material.uniforms;material.uniforms={};
   try{copy=material.clone();}finally{material.uniforms=uniforms;}
   const textures=Object.entries(uniforms).filter(([,uniform])=>uniform.value?.isTexture);
   copy.uniforms=THREE.UniformsUtils.clone(Object.fromEntries(Object.entries(uniforms).filter(([,uniform])=>!uniform.value?.isTexture)));
   for(const [name,uniform]of textures)copy.uniforms[name]={...uniform};
  }else copy=material.clone();
  copy.onBeforeCompile=material.onBeforeCompile;copy.customProgramCacheKey=material.customProgramCacheKey;
  const proxy=object.clone(false);proxy.geometry=geometry;proxy.material=copy;proxy.visible=true;proxy.frustumCulled=false;
  if(!contexts.has(targetScene)){
   const context=targetScene?targetScene.clone(false):new THREE.Scene();
   scene.traverseVisible(light=>{if(light.isLight)context.add(light.clone());});contexts.set(targetScene,context);
  }
  let warmTarget=null;
  if(target){
   const targetKey=JSON.stringify([target.texture.type,target.texture.colorSpace,target.samples]);
   if(!targets.has(targetKey)){
    const scratch=new THREE.WebGLRenderTarget(1,1,{type:target.texture.type,samples:target.samples});scratch.texture.colorSpace=target.texture.colorSpace;targets.set(targetKey,scratch);
   }
   warmTarget=targets.get(targetKey);
  }
  jobs.push({camera,scene:contexts.get(targetScene),target:warmTarget,proxy,material:copy});
 };
 try{world.renderFrame();}finally{renderer.renderBufferDirect=draw;for(const object of hidden)object.visible=false;renderer.shadowMap.needsUpdate=true;}
 await yieldToBrowser();
 world.preparedMaterials=jobs.map(job=>job.material);
 let sliceStart=performance.now();
 try{
 const pending=[];
 for(const job of jobs){
  job.scene.add(job.proxy);
  const previous=renderer.getRenderTarget();renderer.setRenderTarget(job.target);
  try{if(world.performanceStats)world.performanceStats.compiles++;pending.push(renderer.compileAsync(job.scene,job.camera));}finally{job.proxy.removeFromParent();renderer.setRenderTarget(previous);}
  if(performance.now()-sliceStart>6){await yieldToBrowser();sliceStart=performance.now();}
 }
 await Promise.all(pending);sliceStart=performance.now();
 for(const job of jobs){
  job.scene.add(job.proxy);
  const previous=renderer.getRenderTarget();
  const viewport=renderer.getViewport(new THREE.Vector4());
  renderer.setRenderTarget(job.target);renderer.setViewport(0,0,1,1);renderer.shadowMap.needsUpdate=false;
  try{renderer.render(job.scene,job.camera);}finally{job.proxy.removeFromParent();renderer.setRenderTarget(previous);renderer.setViewport(viewport);renderer.shadowMap.needsUpdate=true;}
  if(performance.now()-sliceStart>6){await yieldToBrowser();sliceStart=performance.now();}
 }
 }finally{for(const target of targets.values())target.dispose();}
}
