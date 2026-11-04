import {transform} from 'esbuild';
import {fetchStartupAsset} from './startup-transfer.mjs';
import {readFile} from 'node:fs/promises';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';

// Preserve the exact Float32BufferAttribute values without parsing a large
// JavaScript number array on every cold start.
export function packedNormalsModule(data){
 const packed=Object.fromEntries(Object.entries(data).map(([role,values])=>{
  const floats=new Float32Array(values);
  return [role,gzipSync(Buffer.from(floats.buffer),{level:9,mtime:0}).toString('base64')];
 }));
 return `const packed=${JSON.stringify(packed)};const normals={};await Promise.all(Object.entries(packed).map(async([role,data])=>{const response=await fetch('data:application/octet-stream;base64,'+data);const buffer=await new Response(response.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();normals[role]=new Float32Array(buffer);}));export default normals;`;
}
export function startupBundlesPlugin(){return {name:'startup-payloads',setup(builder){
 builder.onResolve({filter:/^\.\/video\.js$/},()=>({path:'./video.bundle.js?v=interaction-20261027',external:true}));
 builder.onResolve({filter:/parking-material-normals\.json$/},async()=>{
  const data=JSON.parse(await readFile(new URL('./saved-preview/parking-material-normals.json',import.meta.url),'utf8'));
  const hash=createHash('sha256').update(packedNormalsModule(data)).digest('hex').slice(0,12);
  return {path:hash,namespace:'parking-normal-module'};
 });
 builder.onLoad({filter:/.*/,namespace:'parking-normal-module'},({path})=>({contents:`import {loadParkingNormalModule} from './startup-transfer.mjs';export default (await loadParkingNormalModule(new URL('./parking-normals.bundle.js?v=${path}',import.meta.url))).default;`,loader:'js',resolveDir:new URL('.',import.meta.url).pathname}));
}};}

// Start requests during parent HTML parsing. The iframe consumes the promises;
// direct iframe visits retain their normal fetch and transient-failure retry.
export function startStartupAssets(scope=window,loadAsset=null,mirrors={}){
 const query=new URLSearchParams(scope.location.search),qa=query.has('qa'),value=query.get('qa');
 const suffix=qa?'-qa'+(['','1'].includes(value)?'':'-'+value):'';
 let saved={};try{saved=JSON.parse(scope.localStorage.getItem('drivescene-ui-draft-project-v2'+suffix)||'{}')||{}}catch{}
 const active=['road','elevated','ramp','junction','parking','outdoor'].includes(saved.active)?saved.active:'road';
 const params=saved.boards?.[active]?.params||{},candidate=saved.shared?.model??params.model;
 const model=['model-3','x6','ix','xc90'].includes(candidate)?candidate:'model-3';
 // The entry always opens Road, even when the last saved scene was Parking.
 const traffic=saved.shared?.layers?.traffic??saved.boards?.road?.params?.traffic??false;
 const urls=['../engine/assets/studio-environment.bin.gz?v=1',`./vehicles/${model}/model.glb.gz?v=${model==='x6'?'x6-lossless-20261104':'restore26'}`,`./vehicles/${model}/framing-hull.json?v=cold-20261102`];
 if(traffic)urls.push('./traffic-model-y.prepared.bin.gz?v=restore26');
 scope.document.documentElement.dataset.startup='loading';scope.__draftStartupMirrors=mirrors;
 const requests=scope.__draftStartupAssets=new Map();
 // Required scene assets share high priority with the executable module.
 // Audio and alternative models wait until the first scene is visible.
 for(const path of urls){const url=new URL(path,scope.document.baseURI).href;
  const request=loadAsset?loadAsset(url,{scope,mirror:mirrors[path.split('?')[0]]}):scope.fetch(url,{priority:'high'}).then(response=>{if(!response.ok)throw Error('Scene asset could not load');return response.arrayBuffer()});
  request.catch(()=>{});requests.set(url,request);
 }
 return requests;
}
const pinnedMirrors={"../engine/assets/studio-environment.bin.gz":{"url":"https://cdn.jsdelivr.net/gh/Paxton0209/DriveScene-Studio@c9b06f6cbe63d1d721c4c19c78d593c6fb3e59ce/studio/engine/assets/studio-environment.bin.gz","sha256":"c3364959c271fe664a07741be3128528b06924421f0f8ce01f5d64d0a5d70153"},"./traffic-model-y.prepared.bin.gz":{"url":"https://cdn.jsdelivr.net/gh/Paxton0209/DriveScene-Studio@c9b06f6cbe63d1d721c4c19c78d593c6fb3e59ce/studio/ui-draft/traffic-model-y.prepared.bin.gz","sha256":"03c1dd52ce3f4380a584369934f9dba8541ec8839987376404d80c4e830c15e9"},"./vehicles/model-3/model.glb.gz":{"url":"https://cdn.jsdelivr.net/gh/Paxton0209/DriveScene-Studio@c9b06f6cbe63d1d721c4c19c78d593c6fb3e59ce/studio/ui-draft/vehicles/model-3/model.glb.gz","sha256":"a0b34d54ff19cf1ef46ee7c1abaaa204c6f5f6de163e9e2b9e0fcfb2ef06e143"},"./vehicles/ix/model.glb.gz":{"url":"https://cdn.jsdelivr.net/gh/Paxton0209/DriveScene-Studio@c9b06f6cbe63d1d721c4c19c78d593c6fb3e59ce/studio/ui-draft/vehicles/ix/model.glb.gz","sha256":"dab4bc2955a101f09e32bf4eae896c23e4fb5fe4788006cbe4404dffa280200c"},"./vehicles/xc90/model.glb.gz":{"url":"https://cdn.jsdelivr.net/gh/Paxton0209/DriveScene-Studio@c9b06f6cbe63d1d721c4c19c78d593c6fb3e59ce/studio/ui-draft/vehicles/xc90/model.glb.gz","sha256":"5bd110a26b9d8cbd73b02b768e3cf221668053a843266abe3af14ff58d8e1208"},"./vehicles/x6/model.glb.gz":{"url":"https://cdn.jsdelivr.net/gh/Paxton0209/DriveScene-Studio@c9b06f6cbe63d1d721c4c19c78d593c6fb3e59ce/studio/ui-draft/vehicles/x6/model.glb.gz","sha256":"2651f46a64bd41c24cd482b73d4f31d14b26cb5b703e33eaf95a9199d813df99"},"./parking-normals.bundle.js":{"url":"https://cdn.jsdelivr.net/gh/Paxton0209/DriveScene-Studio@c9b06f6cbe63d1d721c4c19c78d593c6fb3e59ce/studio/ui-draft/parking-normals.bundle.js","sha256":"8422b501a3fab272c16c079bfee850808f6de14c280864565e1af125c76a0aab"}};
export async function startupAssetScript(){
 const mirrors={};for(const [path,mirror] of Object.entries(pinnedMirrors)){
  // X6's existing mirror retains the approved PNG source. It remains a verified
  // network fallback with identical pixels, without adding PNGs to the WebP GLB.
  const bytes=await readFile(new URL(path==='./vehicles/x6/model.glb.gz'?'../engine/ego-vehicle-ready.glb.gz':path,import.meta.url));
  if(createHash("sha256").update(bytes).digest("hex")===mirror.sha256)mirrors[path]=mirror;
 }
 return (await transform(`(${startStartupAssets.toString()})(window,${fetchStartupAsset.toString()},${JSON.stringify(mirrors)})`,{minify:true,target:"es2021"})).code;
}
