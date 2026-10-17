import * as THREE from 'three';

const yieldToBrowser=()=>new Promise(resolve=>setTimeout(resolve,0));

export async function prepareVehicleChoice(world,car){
 const {renderer,scene,camera}=world;
 if(world.suspended)throw Error('The 3D view is interrupted');
 const context=new THREE.Scene(),meshes=[],textures=new Set();context.environment=scene.environment;context.environmentIntensity=scene.environmentIntensity;context.environmentRotation.copy(scene.environmentRotation);context.fog=scene.fog;context.background=scene.background;context.overrideMaterial=scene.overrideMaterial;
 scene.traverseVisible(light=>{if(light.isLight){const clone=light.clone();if(light.shadow)clone.shadow=light.shadow;context.add(clone);}});
 car.updateMatrixWorld(true);
 car.traverse(mesh=>{if(!mesh.isMesh)return;meshes.push(mesh);for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material])for(const value of Object.values(material))if(value?.isTexture)textures.add(value);});
 let slice=performance.now();
 for(const texture of textures){renderer.initTexture(texture);if(performance.now()-slice>4){await yieldToBrowser();slice=performance.now();}}
 const source=world.composer.renderTarget1,target=new THREE.WebGLRenderTarget(1,1,{type:source.texture.type});target.texture.colorSpace=source.texture.colorSpace;
 const previousParent=car.parent,visibility=meshes.map(mesh=>mesh.frustumCulled);context.add(car);meshes.forEach(mesh=>mesh.frustumCulled=false);
 try{
  const previousTarget=renderer.getRenderTarget();let compilation;
  try{renderer.setRenderTarget(target);compilation=renderer.compileAsync(context,camera);}finally{renderer.setRenderTarget(previousTarget);}
  await compilation;await yieldToBrowser();if(world.suspended)throw Error('The 3D view is interrupted');
  const output=renderer.getRenderTarget(),viewport=renderer.getViewport(new THREE.Vector4()),autoUpdate=renderer.shadowMap.autoUpdate,needsUpdate=renderer.shadowMap.needsUpdate;
  try{renderer.setRenderTarget(target);renderer.setViewport(0,0,1,1);renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=false;renderer.render(context,camera);}
  finally{renderer.setRenderTarget(output);renderer.setViewport(viewport);renderer.shadowMap.autoUpdate=autoUpdate;renderer.shadowMap.needsUpdate=needsUpdate;}
 }finally{car.removeFromParent();if(previousParent)previousParent.add(car);meshes.forEach((mesh,index)=>mesh.frustumCulled=visibility[index]);target.dispose();}
}
