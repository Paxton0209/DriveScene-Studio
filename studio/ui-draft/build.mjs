import {build} from 'esbuild';
import {access,readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {gunzipSync,gzipSync} from 'node:zlib';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {ConvexHull} from 'three/addons/math/ConvexHull.js';
import {prepareVehicleMaterials} from '../engine/vehicle-library/three/vehicle-materials.js';
import {isolatedRuntimePlugin} from './runtime-patches.mjs';
import {consolidateTrafficRear,refineTrafficBody,compactTrafficAttributes} from './traffic-surface.js';
const root=fileURLToPath(new URL('.',import.meta.url));
// Reuse framing.js's existing exact hull-index path. Generate after the same
// geometry preparation as load-prepared.js; never build hulls on a visible frame.
const frameHulls={};
for(const [id,length] of [['ix',4.95],['xc90',4.95],['model-3',4.72]]){
 const bytes=gunzipSync(await readFile(new URL(`../engine/vehicle-library/prepared/${id}/model.glb.gz`,import.meta.url)));
 const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
 // Images do not affect geometry or material names used by preparation.
 loader.register(parser=>({name:'offline-framing-geometry',beforeRoot(){
  const dependency=parser.getDependency;
  parser.getDependency=function(type,index){return type==='texture'?Promise.resolve(null):dependency.call(this,type,index);};
 }}));
 const {scene:model}=await loader.parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
 model.updateMatrixWorld(true);const size=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
 model.rotation.y+=id==='model-3'?Math.PI/2:(size.x>size.z?Math.PI/2:Math.PI);
 if(['ix','xc90'].includes(id))model.rotation.y+=Math.PI;
 model.scale.multiplyScalar(length/Math.max(size.x,size.z));model.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3());
 model.position.sub(new THREE.Vector3(center.x,box.min.y,center.z));model.updateMatrixWorld(true);
 prepareVehicleMaterials(model,id,length);
 const meshes=[];model.traverse(mesh=>{
  if(!mesh.isMesh)return;const p=mesh.geometry.attributes.position,indices=new Set();
  try{
   const points=Array.from({length:p.count},(_,index)=>Object.assign(new THREE.Vector3().fromBufferAttribute(p,index),{index}));
   for(const face of new ConvexHull().setFromPoints(points).faces){let edge=face.edge;do{indices.add(edge.head().point.index);edge=edge.next;}while(edge!==face.edge);}
  }catch{/* Degenerate geometry retains the full scan. */}
  meshes.push({name:mesh.name,count:p.count,indices:[...indices]});
 });frameHulls[id]=meshes;
}
await writeFile(new URL('./vehicles/framing-hulls.json',import.meta.url),JSON.stringify(frameHulls));
// Static geometry preparation belongs to the build, not the first visible frame.
const traffic=JSON.parse(gunzipSync(await readFile(new URL('../engine/assets/traffic-model-y.json.gz',import.meta.url))));
await writeFile(new URL('./traffic-model-y.prepared.json.gz',import.meta.url),gzipSync(JSON.stringify(compactTrafficAttributes(refineTrafficBody(consolidateTrafficRear(traffic))))));
const html=await readFile(new URL('../engine/index.html',import.meta.url),'utf8');
const embedded=html.replace('<head>','<head><base href="../engine/"><link rel="stylesheet" href="../ui-draft/engine.css?v=startup-20261027">').replaceAll('drivescene-preview-v15','drivescene-ui-draft-preview-v1').replaceAll('"sr-theme"','"sr-ui-draft-theme"').replace('<script src="startup.js?v=20261019-finish-110"></script>','<script type="module" src="../ui-draft/runtime.bundle.js?v=startup-handoff-20261027"></script>');
await writeFile(new URL('./engine.html',import.meta.url),embedded);
const iconFile=new URL('./icons.json',import.meta.url),iconMissing=await access(iconFile).then(()=>false,()=>true);
if(iconMissing||process.argv.includes('--sync-icons')){
 const reference=await readFile(new URL('../../outputs/design-reference-Main.dc.html',import.meta.url),'utf8');
 const prefix=source=>source.replaceAll('id="ic','id="ud-ic').replaceAll('url(#ic','url(#ud-ic');
 const nav=Object.fromEntries([...reference.matchAll(/<button[^>]*go\.(\w+)[^>]*>(<svg[\s\S]*?<\/svg>)/g)].map(match=>[match[1],prefix(match[2])]));
 const weather=Object.fromEntries([...reference.matchAll(/<button[^>]*wx\.(clear|cloudy|rain|snow)\.on[^>]*>(<svg[\s\S]*?<\/svg>)/g)].map(match=>[{clear:'default',cloudy:'overcast',rain:'rain',snow:'snow'}[match[1]],match[2].replaceAll('width="13"','width="14"').replaceAll('height="13"','height="14"')]));
 if(Object.keys(nav).length!==6||Object.keys(weather).length!==4)throw Error('Reference SVG inventory mismatch');
 await writeFile(iconFile,JSON.stringify({defs:prefix(reference.match(/<svg width="0"[\s\S]*?<\/svg>/)[0]),nav,weather}));
}
function draftMotion(source){
 return source
  .replace('y:3,width:selected.offsetWidth,height:container.clientHeight-6','y:2,width:selected.offsetWidth,height:container.clientHeight-4')
  .replaceAll('openHeight=44','openHeight=112')
  .replaceAll('openHeight-44','openHeight-112')
  .replaceAll('round 12px','round 8px')
  .replace("const options={duration:reducedMotion()?0:(open?.375:.32)*ARC_MOTION_SCALE*1000,easing:'cubic-bezier(.22,1,.36,1)'}","const options={duration:reducedMotion()?0:(open?220:160),easing:'cubic-bezier(.2,.9,.3,1)'}")
  .replace('if(instant||reducedMotion())return;\n  sequence=selectionMotionFrames','if(instant||reducedMotion()){indicator.classList.remove(\'is-moving\');return;}\n  sequence=selectionMotionFrames')
  .replace('const active=indicator.animate(sequence.frames','indicator.classList.add(\'is-moving\');const active=indicator.animate(sequence.frames')
  .replace('animation=null;sequence=null;}','animation=null;sequence=null;indicator.classList.remove(\'is-moving\');}')
  .replace('const content=grid(),from=getComputedStyle(popup).clipPath,fromOpacity=getComputedStyle(content).opacity,fromTransform=getComputedStyle(content).transform;','const content=grid(),from=getComputedStyle(popup).clipPath,fromOpacity=getComputedStyle(content).opacity,fromTransform=getComputedStyle(content).transform,fromPopupOpacity=getComputedStyle(popup).opacity,fromPopupTransform=getComputedStyle(popup).transform;')
  .replace('popup.style.clipPath=target;content.style.opacity=opacity;','popup.style.clipPath=target;popup.style.opacity=opacity;popup.style.transform=open?\'scale(1)\':\'scale(.96)\';content.style.opacity=opacity;')
  .replace("animation=popup.animate([{clipPath:from==='none'?target:from},{clipPath:target}],options);","animation=popup.animate([{clipPath:from==='none'?target:from,opacity:fromPopupOpacity,transform:fromPopupTransform},{clipPath:target,opacity,transform:open?'scale(1)':'scale(.96)'}],options);")
  .replace("grid().style.opacity='0';grid().style.transform='translateY(-6px)';","grid().style.opacity='0';grid().style.transform='translateY(-6px)';popup.style.opacity='0';popup.style.transform='scale(.96)';");
}
await build({absWorkingDir:root,entryPoints:['../ui-motion.js'],bundle:true,minify:true,format:'esm',outfile:'motion-runtime.js',plugins:[{name:'draft-motion-dimensions',setup(builder){builder.onLoad({filter:/\/ui-motion\.js$/},async args=>({contents:draftMotion(await readFile(args.path,'utf8')),loader:'js',resolveDir:root+'../'}))}}]});
await build({absWorkingDir:root,entryPoints:['../engine/app.js'],bundle:true,minify:true,format:'esm',outfile:'runtime.bundle.js',plugins:[isolatedRuntimePlugin()],target:['chrome110','safari17']});
console.log('UI draft runtime built; shared engine files are read-only inputs.');

// Reproduce the saved preview, including its fixed material and frame profile.
await import('./saved-preview/build.mjs');
console.log('Saved 2026-10-27 preview profile applied.');
