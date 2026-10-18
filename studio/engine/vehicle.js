import * as THREE from 'three';
import frameHulls from './vehicle-frame-hull.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
import {fetchAsset,takePrefetched} from './asset-request.js';
import {neutralizePlate} from './vehicle-library/three/neutral-plate.js';
import {prepareFrontGrilles} from './vehicle-library/three/grille-materials.js?v=grille-14';
// Prepared exterior: fixed geometry/material edits are baked once for delivery.
// Keep createSourceVehicle below as the reproducible source preparation step.
let decodingWorkersReady=false;
export async function createVehicle({startup=false}={}){
 if(!decodingWorkersReady&&typeof Worker!=='undefined'){decodingWorkersReady=true;try{MeshoptDecoder.useWorkers(Math.min(2,Math.max(1,(navigator.hardwareConcurrency||2)-1)));}catch{MeshoptDecoder.useWorkers(0);}}
 const compressed=await takePrefetched(startup?'__startupVehicleRequest':'__fullVehicleRequest',()=>fetchAsset(new URL(startup?'./ego-vehicle-startup.glb.gz?v=17.9':'./ego-vehicle-ready.glb.gz?v=17.9',import.meta.url)));
 const bytes=await new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
 const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes,'');
 const root=gltf.scene.children[0];
 root.name='Ego vehicle';
 let frameIndex=0;
 root.traverse(o=>{if(!o.isMesh)return;const hull=frameHulls[frameIndex++];if(!startup&&hull?.name===o.name&&hull.count===o.geometry.attributes.position.count&&hull.indices?.length)o.geometry.userData.frameIndices=hull.indices;o.castShadow=true;o.receiveShadow=false;
  for(const m of (Array.isArray(o.material)?o.material:[o.material])){
   if(m.name==='license')neutralizePlate(m);
   if(m.name==='body'){m.roughness=Math.max(m.roughness,.24);m.clearcoatRoughness=Math.max(m.clearcoatRoughness,.22);}
   if(m.name==='lights'){
   // Vertex color encodes the original rear/front separation. Unlike source
   // position thresholds, it remains valid after geometry quantization.
   m.onBeforeCompile=shader=>{shader.vertexShader='varying float vTail;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvTail=step(color.g*2.0,color.r);');shader.fragmentShader='varying float vTail;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance*=vTail;');};
   m.needsUpdate=true;
  }

  } });prepareFrontGrilles(root,'x6');return root;
}

export async function createSourceVehicle(){
 const response=await fetch(new URL('./ego-suv.meshopt.glb.gz',import.meta.url));
 if(!response.ok)throw Error('Vehicle asset failed to load');
 const bytes=await new Response(response.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
 const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes,'');
 const model=gltf.scene;
 // Rear-only exhaust assembly in the source model; remove for the electric vehicle.
 const exhaust=model.getObjectByName('Object_39');exhaust?.removeFromParent();
 // Remove an isolated interior trim artifact 5 metres outside the vehicle.
 const stray=model.getObjectByName('Object_42');if(stray)stray.removeFromParent();
 // Remove the rear diffuser fins and exhaust recess trim from the source mesh.
 // Source axes: rear is negative Y, down is positive Z. Preserve side sills,
 // front trim and every wheel; the new valance seals the resulting rear opening.
 for(const name of ['Object_5','Object_6','Object_7','Object_28']){
  const part=model.getObjectByName(name);if(!part?.isMesh)continue;
  const g=part.geometry=part.geometry.clone(),p=g.getAttribute('position'),idx=g.index.array,keep=[];
  for(let i=0;i<idx.length;i+=3){const t=[idx[i],idx[i+1],idx[i+2]];
   const y=t.reduce((s,v)=>s+p.getY(v),0)/3,z=t.reduce((s,v)=>s+p.getZ(v),0)/3;
   if(!(y < -2.0 && z > (name==='Object_7'?-.05:.14)))keep.push(...t);
  }g.setIndex(keep);g.computeBoundingBox();g.computeBoundingSphere();
 }
 const authorRoot=model.getObjectByName('Sketchfab_model');if(authorRoot){authorRoot.rotation.set(-Math.PI/2,0,0);authorRoot.updateMatrix();}
 // Keep the four wheel assemblies just outside the body silhouette. The source
 // track is almost flush with the painted panels, which hid tires at rear views.
 for(const name of ['Object_14','Object_47','Object_48','Object_49','Object_50','Object_51']){
  const wheel=model.getObjectByName(name);if(!wheel?.isMesh)continue;
  wheel.geometry=wheel.geometry.clone();const position=wheel.geometry.getAttribute('position');
  for(let i=0;i<position.count;i++){position.setX(i,position.getX(i)+Math.sign(position.getX(i))*.055);position.setZ(i,position.getZ(i)+.045);}
  position.needsUpdate=true;wheel.geometry.computeBoundingBox();wheel.geometry.computeBoundingSphere();
 }
 model.rotation.y=Math.PI;
 model.updateMatrixWorld(true);
 let box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3());
 // Real dimensions, with one fixed transform reused by every theme.
 const scale=4.85/Math.max(size.x,size.z);model.scale.multiplyScalar(scale);
 model.updateMatrixWorld(true);box.setFromObject(model);const center=box.getCenter(new THREE.Vector3());
 model.position.sub(new THREE.Vector3(center.x,box.min.y,center.z));
 model.traverse(o=>{if(!o.isMesh)return;o.castShadow=true;o.receiveShadow=true;
  // The source shares window glass with lamp covers. Keep opaque windows and
  // rear lamp lenses in separate groups so sealing the roof cannot hide lights.
  if(!Array.isArray(o.material)&&o.material.name==='glass'){
   const geometry=o.geometry=o.geometry.clone(),a=geometry.getAttribute('position'),index=geometry.index.array,opaque=[],lens=[];
   for(let i=0;i<index.length;i+=3){const tri=[index[i],index[i+1],index[i+2]],rear=tri.every(v=>a.getY(v)<-2.25&&a.getZ(v)>-.65);(rear?lens:opaque).push(...tri);}
   geometry.setIndex([...opaque,...lens]);geometry.clearGroups();geometry.addGroup(0,opaque.length,0);geometry.addGroup(opaque.length,lens.length,1);
   const cover=o.material.clone();cover.name='tail_lens';o.material=[o.material,cover];
  }
  if(!Array.isArray(o.material)&&o.material.name==='lights'){
   const m=o.material=o.material.clone(),a=o.geometry.getAttribute('position'),colors=[];
   const red=new THREE.Color('#c13135'),neutral=new THREE.Color('#555b61');
   for(let i=0;i<a.count;i++){const c=a.getY(i)<-1.65?red:neutral;colors.push(c.r,c.g,c.b);}
   o.geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));m.vertexColors=true;m.color.set('#ffffff');m.metalness=.2;
  }
  const materials=Array.isArray(o.material)?o.material:[o.material];
  for(const m of materials){
   if(m.name==='body'){m.color.set('#edf0f4');m.metalness=.42;m.roughness=.20;m.clearcoat=1;m.clearcoatRoughness=.12;}
   if(m.name==='glass'){m.map=null;m.color.set('#273541');m.roughness=.72;m.metalness=0;m.envMapIntensity=0;m.clearcoat=0;m.specularIntensity=.05;m.transparent=false;m.opacity=1;m.transmission=0;m.depthWrite=true;m.alphaTest=0;}
   if(['Material_45','Material_44'].includes(m.name)){m.map=null;m.color.set('#56616d');m.metalness=.7;m.roughness=.2;}
   if(m.name==='tail_lens'){m.map=null;m.color.set('#8e111c');m.transparent=true;m.opacity=.78;m.depthWrite=false;m.transmission=0;m.roughness=.18;m.metalness=.1;}
   if(m.name==='tires'){m.map=null;m.color.set('#34363b');m.metalness=0;m.transparent=false;m.opacity=1;m.depthWrite=true;m.depthTest=true;m.alphaTest=0;m.roughness=.92;}
   if(['rim1','rim2'].includes(m.name)){m.color.set('#8c9298');m.metalness=.65;m.roughness=.32;}
   m.emissive?.set(0);
   if(m.name==='tail_lens'){m.emissive.set('#ff1022');m.emissiveIntensity=.85;}
   if(m.name==='lights'){
    m.emissiveMap=null;m.emissive.set('#ff251c');m.emissiveIntensity=1.4;
    m.onBeforeCompile=shader=>{shader.vertexShader='varying float vTail;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvTail=1.0-step(-1.65,position.y);');shader.fragmentShader='varying float vTail;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance*=vTail;');};
   }
   m.needsUpdate=true;
  }
 });
 model.updateMatrixWorld(true);
 const tires=model.getObjectByName('Object_48'),tirePositions=tires.geometry.getAttribute('position'),wheelBounds=new Map();
 for(let i=0;i<tirePositions.count;i++){
  const p=new THREE.Vector3().fromBufferAttribute(tirePositions,i),key=(p.x<0?'left':'right')+'-'+(p.y<0?'rear':'front');
  if(!wheelBounds.has(key))wheelBounds.set(key,new THREE.Box3());
  wheelBounds.get(key).expandByPoint(p.applyMatrix4(tires.matrixWorld));
 }
 const wheelAudit=[...wheelBounds].map(([position,b])=>({position,min:b.min.toArray(),max:b.max.toArray(),size:b.getSize(new THREE.Vector3()).toArray()}));
 const root=new THREE.Group();root.name='Ego vehicle';root.add(model);
 // A continuous EV rear valance closes both former exhaust apertures.
 // This stays within the original bumper envelope and clear of the tires.
 const valanceGeometry=new RoundedBoxGeometry(1.78,.19,.30,6,.045);
 const va=valanceGeometry.getAttribute('position');for(let i=0;i<va.count;i++)va.setZ(i,va.getZ(i)-.32*Math.pow(Math.abs(va.getX(i))/.91,3));valanceGeometry.computeVertexNormals();
 const valance=new THREE.Mesh(valanceGeometry,new THREE.MeshStandardMaterial({color:'#626970',roughness:.64,metalness:.10}));
 valance.name='Continuous rear valance';valance.position.set(0,.505,2.30);valance.castShadow=true;valance.receiveShadow=true;root.add(valance);
 root.userData.vehicleSpec={wheelCount:wheelAudit.length,wheels:wheelAudit,continuousRearValance:true,opaqueGlass:true,exhaustRemoved:!!exhaust&&!model.getObjectByName('Object_39'),sourceExhaustNode:'Object_39',tireMaterial:{opaque:!tires.material.transparent,depthWrite:tires.material.depthWrite,depthTest:tires.material.depthTest}};return root;
}

// Invisible framing proxy lets the environment render before the model arrives.
export function createVehicleProxy(){
 const root=new THREE.Group(),mesh=new THREE.Mesh(new THREE.BoxGeometry(2,1.7,4.85),new THREE.MeshBasicMaterial());mesh.position.y=.85;mesh.visible=false;root.add(mesh);root.userData.vehicleSpec={wheels:[]};return root;
}
