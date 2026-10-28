import * as THREE from 'three';
import {vehicleShell} from './traffic-depth-shell.js';
const records=new WeakMap(),materialRecords=new WeakMap();
const finishKeys=['roughness','clearcoat','clearcoatRoughness','specularIntensity','envMapIntensity'];
// Test broad bounds against several sight lines, avoiding per-triangle raycasts.
export function updateParkingOcclusion(world,parking,target,route=[]){
 let state=records.get(world);if(!state||state.root!==world.root){state={root:world.root,items:[],time:0};records.set(world,state);world.root.updateMatrixWorld(true);// Vegetation is a container for separated trees, not one solid obstruction.
 // Its aggregate box spans the empty parking aisle and would fade both trees.
 for(const object of world.root.children.flatMap(o=>o===world.vegetation?o.children:[o])){if(!object.isMesh&&!object.isGroup)continue;const box=new THREE.Box3().setFromObject(object);if(box.isEmpty()||(box.max.y<.6&&object.parent!==world.vegetation))continue;state.items.push({object,box,alpha:1,materials:null});}}
 for(const object of parking.children)if(object.userData.trafficVehicle&&!state.items.some(i=>i.object===object))state.items.push({object,box:new THREE.Box3().setFromObject(object),alpha:1,materials:null});
 const center=world.car.position.clone().add(new THREE.Vector3(0,.8,0)),targets=[center,...[-.8,.8].flatMap(x=>[-1.6,1.6].map(z=>new THREE.Vector3(x,.5,z).applyAxisAngle(new THREE.Vector3(0,1,0),world.car.rotation.y).add(world.car.position))),...route];if(target)targets.push(new THREE.Vector3(target.x,.05,target.z));
 const time=world.draftTime??0,dt=Math.min(.1,Math.max(.016,(time-state.time)/1000));state.time=time;
 for(const item of state.items){const o=item.object;if(!o.visible)continue;
  // Reveal moves each tree vertically; keep its existing box on the live tree.
  if(o.parent===world.vegetation||o.userData.trafficVehicle&&((o.userData.draftTrafficGrowth??1)<1||item.growth!==o.userData.draftTrafficGrowth)){o.updateWorldMatrix(true,true);item.box.setFromObject(o);item.growth=o.userData.draftTrafficGrowth;}
  const hit=targets.some(p=>{const direction=p.clone().sub(world.camera.position),length=direction.length();const intersection=new THREE.Ray(world.camera.position,direction.normalize()).intersectBox(item.box,new THREE.Vector3());return intersection&&intersection.distanceTo(world.camera.position)<length-.25;});
  item.hit=hit;item.floor=o.userData.trafficVehicle?.90:.10;item.alpha=THREE.MathUtils.lerp(item.alpha,hit?item.floor:1,1-Math.exp(-dt*5));
  if(!item.materials){
   item.materials=[];
   o.traverse(mesh=>{
    if(!mesh.isMesh||mesh.userData.trafficShadow||mesh.userData.draftOcclusionDepth)return;
    const patch=original=>{
     const existing=materialRecords.get(original);if(existing){item.materials.push(existing);return original;}
     const m=original.clone(),uniform={value:1};if(original.isShaderMaterial)m.uniforms={...original.uniforms};
     m.onBeforeCompile=(shader,renderer)=>{original.onBeforeCompile.call(m,shader,renderer);shader.uniforms.draftOcclusion=uniform;shader.fragmentShader='uniform float draftOcclusion;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace(/}\s*$/,'gl_FragColor.a*=draftOcclusion;\n}');};
     m.customProgramCacheKey=()=>original.customProgramCacheKey()+'-occlusion';m.userData.draftOcclusion=true;m.transparent=true;m.depthWrite=false;
     // Blend translucent obstacles over the vehicle colour. Its opaque depth
     // shell still rejects obstacles behind it; pillars in front remain visible
     // throughout entry rather than being painted over by the fading body.
     mesh.renderOrder=o.userData.trafficVehicle?8:9;
     // Environment follows the source theme; traffic owns its copied colours.
     const source=o.userData.trafficVehicle?null:original;
     if(source){if(source.color)m.color=source.color;if(source.emissive)m.emissive=source.emissive;}
     const record={m,uniform,source,transparent:original.transparent,depthWrite:original.depthWrite};materialRecords.set(m,record);item.materials.push(record);return m;
    };
    mesh.material=Array.isArray(mesh.material)?mesh.material.map(patch):patch(mesh.material);
   });
  }
  if(o.userData.trafficVehicle){if(!item.shells)item.shells=vehicleShell(o);for(const shell of item.shells)shell.visible=item.alpha<.999||(o.userData.draftTrafficEntryOpacity??1)<.999;}
  o.userData.draftOcclusionAlpha=item.alpha;
  for(const record of item.materials){record.uniform.value=item.alpha;record.m.depthWrite=(o.userData.trafficVehicle?(o.userData.trafficOpacity??1)>.90:record.depthWrite)&&item.alpha>.999;if(record.source)for(const key of finishKeys)if(key in record.source)record.m[key]=record.source[key];}
 }
 world.draftOcclusionActive=state.items.some(i=>i.object.visible&&Math.abs(i.alpha-(i.hit?i.floor:1))>.003);
 world.draftOccluders=state.items.filter(i=>i.alpha<.95).length;
}
