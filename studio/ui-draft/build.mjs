import {prepareDisplayVehicles} from './prepare-display-assets.mjs';
import {createHash} from 'node:crypto';
import {encodeTrafficPayload} from './traffic-payload.js';
import {showStartupPoster,layoutStartupPoster} from './startup-poster.mjs';
import {startupBundlesPlugin,startupAssetScript} from './startup-bundles.mjs';
import {clippingPrecompilePlugin} from './clipping-precompile.mjs';
import {build} from 'esbuild';
import {access,mkdir,readFile,writeFile} from 'node:fs/promises';
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
await prepareDisplayVehicles();
const frameHulls={};
for(const [id,length] of [['ix',4.95],['xc90',4.95],['model-3',4.72]]){
 const bytes=gunzipSync(await readFile(new URL(`./vehicles/${id}/model.glb.gz`,import.meta.url)));
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
const preparedTraffic=compactTrafficAttributes(refineTrafficBody(consolidateTrafficRear(traffic)));
await writeFile(new URL('./traffic-model-y.prepared.json.gz',import.meta.url),gzipSync(JSON.stringify(preparedTraffic)));
// Keep the approved Traffic topology and normals exactly. Lossless packing
// reduces parsing work without collapsing exterior panels.
await writeFile(new URL('./traffic-model-y.prepared.bin.gz',import.meta.url),gzipSync(encodeTrafficPayload(preparedTraffic),{level:9}));
const html=await readFile(new URL('../engine/index.html',import.meta.url),'utf8');
const embedded=html.replace('if(!q.get("model")||q.get("model")==="x6")','if(!globalThis.__fullVehicleRequest&&(!q.get("model")||q.get("model")==="x6"))').replace('async function preloadAsset(url){',`async function preloadAsset(url){try{const requests=window.parent.__draftStartupAssets,key=new URL(url,document.baseURI).href,early=requests?.get(key);if(early){requests.delete(key);return await early;}}catch{} `).replace('globalThis.__studioEnvironmentRequest=preloadAsset(',`const selectedModel=q.get('model')||'x6';if(['model-3','ix','xc90'].includes(selectedModel)){globalThis.__draftPreparedVehicle={id:selectedModel,request:preloadAsset('../ui-draft/vehicles/'+selectedModel+'/model.glb.gz?v=restore26')};globalThis.__draftPreparedVehicle.request.catch(()=>{});}globalThis.__fullVehicleRequest=preloadAsset('./ego-vehicle-ready.glb.gz?v=17.9');globalThis.__fullVehicleRequest.catch(()=>{});globalThis.__draftTrafficRequest=preloadAsset('../ui-draft/traffic-model-y.prepared.bin.gz?v=restore26');globalThis.__draftTrafficRequest.catch(()=>{});globalThis.__studioEnvironmentRequest=preloadAsset(`).replace('<head>','<head><base href="../engine/"><link rel="stylesheet" href="../ui-draft/engine.css?v=startup-20261027">').replaceAll('drivescene-preview-v15','drivescene-ui-draft-preview-v1').replaceAll('"sr-theme"','"sr-ui-draft-theme"').replace('<script src="startup.js?v=20261019-finish-110"></script>','<script type="module" src="../ui-draft/runtime.bundle.js?v=theme-parking-v33-20261029"></script>');
let engineHtml=embedded.replace(/const c=new AbortController\(\),t=setTimeout\(\(\)=>c.abort\(\),30000\);try\{/,'try{').replace('fetch(url,{priority:"high",signal:c.signal})','fetch(url,{priority:"low"})').replace('finally{clearTimeout(t)}','').replaceAll('./ego-vehicle-ready.glb.gz?v=17.9','../ui-draft/vehicles/x6/model.glb.gz?v=restore26').replace(/document\.documentElement\.style\.setProperty\(\"--startup-frame\"[\s\S]*?document\.head\.append\(link\);/,'');
// Preserve the engine cascade exactly while avoiding a separate network turn
// for each stylesheet in the first embedded frame. These styles have no URLs.
for(const [tag] of engineHtml.matchAll(/<link[^>]*rel="stylesheet"[^>]*>/g)){
 const href=tag.match(/href="([^"]+)"/)[1].split('?')[0];
 const css=await readFile(new URL(href,new URL('../engine/',import.meta.url)),'utf8');
 engineHtml=engineHtml.replace(tag,`<style>${css}</style>`);
}
engineHtml=engineHtml.replaceAll('location.search','(globalThis.__draftSearch??location.search)').replace('<head>','<head><script>globalThis.__draftSearch=window.frameElement?.dataset.search||location.search;<\/script>');
await writeFile(new URL('./engine.html',import.meta.url),engineHtml);
const parentFile=new URL('./index.html',import.meta.url);let parent=await readFile(parentFile,'utf8');
parent=parent.replace(/<script id="startup-draft"[^>]*>[\s\S]*?<\/script>/,'<script type="module" src="draft.bundle.js?v=theme-parking-v33-20261029"></script>');
parent=parent.replace(/<link rel="modulepreload"[^>]+>/g,'').replace(/<link rel="preload" href="icons.json"[^>]+>/g,'').replace(/<script id="startup-assets">[\s\S]*?<\/script>/,'').replace('<title>',`<script id="startup-assets">${startupAssetScript()}</script><title>`).replace(/src="(?:draft|draft.bundle)\.js\?v=[^"]+"/,'src="draft.bundle.js?v=theme-parking-v33-20261029"');
// Discover and download both executable bundles before the poster/body parse.
// The embedded document reuses the runtime's module request from this origin.
parent=parent.replace('<script id="startup-assets">','<link rel="modulepreload" fetchpriority="high" href="runtime.bundle.js?v=theme-parking-v33-20261029"><script id="startup-assets">');
parent=parent.replace(/<script id="startup-poster">[\s\S]*?<\/script>/,'').replace(/<script id="startup-layout">[\s\S]*?<\/script>/,'');
// Keep the default first frame inline. Other scenes/themes do not belong in
// every visitor's critical HTML; preserve their exact JPEG bytes as assets.
const previewData=JSON.parse(await readFile(new URL('./startup-previews.json',import.meta.url),'utf8'));
await mkdir(new URL('./startup-previews/',import.meta.url),{recursive:true});
const previewDirectory={};
for(const [key,data] of Object.entries(previewData)){
 const bytes=Buffer.from(data.split(',')[1],'base64'),hash=createHash('sha256').update(bytes).digest('hex').slice(0,12);
 await writeFile(new URL('./startup-previews/'+key+'.jpg',import.meta.url),bytes);
 previewDirectory[key]=key==='road-light'?data:'./startup-previews/'+key+'.jpg?v='+hash;
}
const previews=JSON.stringify(previewDirectory);
// Keep the approved profile's execution order without a parser-blocking fetch.
parent=parent.replace(/<script(?: id="saved-frame-profile"| src="saved-preview\/frame-profile\.js[^"]*")[^>]*>[\s\S]*?<\/script>/g,'');
const frameProfile=await readFile(new URL('./saved-preview/frame-profile.js',import.meta.url),'utf8');
parent=parent.replace('</body>',`<script id="saved-frame-profile">${frameProfile}</script></body>`);

parent=parent.replace('</head>',`<script id="startup-poster">(${showStartupPoster.toString()})(${previews.trim()},window)</script></head>`).replace('<script type="module"',`<script id="startup-layout">(${layoutStartupPoster.toString()})()</script><script type="module"`);
// First paint must not wait for a separate CSS response. Keep the complete
// existing cascade inline and regenerate it on every build.
parent=parent.replace(/<style data-startup-css="[^"]+">[\s\S]*?<\/style>/g,'');
for(const name of ['draft.css','inspector.css']){
 parent=parent.replace(new RegExp('<link rel="stylesheet" href="'+name.replace('.','\\.')+'[^\"]*">'),'');
 const css=await readFile(new URL('./'+name,import.meta.url),'utf8');
 parent=parent.replace('</head>',`<style data-startup-css="${name}">${css}</style></head>`);
}
await writeFile(parentFile,parent);
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
await build({absWorkingDir:root,entryPoints:['./draft.js'],loader:{'.html':'text'},bundle:true,minify:true,format:'esm',outfile:'draft.bundle.js',target:['chrome110','safari17'],plugins:[{name:'inline-icons',setup(b){b.onLoad({filter:/\/draft\.js$/},async({path})=>({contents:(await readFile(path,'utf8')).replace("await fetch('./icons.json').then(response=>response.json())",await readFile(iconFile,'utf8')),loader:'js',resolveDir:root}));}}]});
await build({absWorkingDir:root,entryPoints:['../engine/app.js'],bundle:true,minify:true,format:'esm',outfile:'runtime.bundle.js',plugins:[startupBundlesPlugin(),clippingPrecompilePlugin(),isolatedRuntimePlugin()],target:['chrome110','safari17']});
console.log('UI draft runtime built; shared engine files are read-only inputs.');

// Reproduce the saved preview, including its fixed material and frame profile.
await build({absWorkingDir:root,entryPoints:['./video.js'],bundle:true,minify:true,format:'esm',outfile:'video.bundle.js',target:['chrome110','safari17']});
await import('./saved-preview/build.mjs');
// The complete control tree must start with the first HTML response, without
// another module round trip. Escape embedded HTML script terminators once.
const draftBundle=await readFile(new URL('./draft.bundle.js',import.meta.url),'utf8');
const inlineDraft=draftBundle.replace(/<\/script/gi,'<\\/script');
await writeFile(parentFile,parent.replace(/<script type="module" src="draft.bundle.js[^"]*"><\/script>/,()=>`<script id="startup-draft" type="module">${inlineDraft}</script>`));
console.log('Saved 2026-10-27 preview profile applied.');
