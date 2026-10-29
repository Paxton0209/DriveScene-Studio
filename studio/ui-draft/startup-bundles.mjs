import {readFile} from 'node:fs/promises';
import {gzipSync} from 'node:zlib';
import {dirname} from 'node:path';

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
 builder.onLoad({filter:/\/parking-material-normals\.json$/},async({path})=>({contents:packedNormalsModule(JSON.parse(await readFile(path,'utf8'))),loader:'js',resolveDir:dirname(path)}));
}};}

// Start requests during parent HTML parsing. The iframe consumes the promises;
// direct iframe visits retain their normal fetch and transient-failure retry.
export function startStartupAssets(scope=window){
 // Fetch every switchable model in parallel with the initial renderer.
 const urls=['../engine/assets/studio-environment.bin.gz?v=1','./traffic-model-y.prepared.bin.gz?v=transport122','../engine/ego-vehicle-ready.glb.gz?v=17.9',...['model-3','ix','xc90'].map(model=>`../engine/vehicle-library/prepared/${model}/model.glb.gz`)];
 scope.document.documentElement.dataset.startup='loading';
 const requests=scope.__draftStartupAssets=new Map();
 for(const path of urls){const url=new URL(path,scope.document.baseURI).href,controller=new AbortController(),timer=scope.setTimeout(()=>controller.abort(),30000);
  const request=scope.fetch(url,{priority:'high',signal:controller.signal}).then(response=>{if(!response.ok)throw Error('Scene asset could not load');return response.arrayBuffer()}).finally(()=>scope.clearTimeout(timer));
  request.catch(()=>{});requests.set(url,request);
 }
 return requests;
}
export const startupAssetScript=()=>`(${startStartupAssets.toString()})()`;
