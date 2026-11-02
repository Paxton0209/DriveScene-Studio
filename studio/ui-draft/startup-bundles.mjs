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
  return {path:'./parking-normals.bundle.js?v='+hash,external:true};
 });
}};}

// Start requests during parent HTML parsing. The iframe consumes the promises;
// direct iframe visits retain their normal fetch and transient-failure retry.
export function startStartupAssets(scope=window){
 const query=new URLSearchParams(scope.location.search),qa=query.has('qa'),value=query.get('qa');
 const suffix=qa?'-qa'+(['','1'].includes(value)?'':'-'+value):'';
 let saved={};try{saved=JSON.parse(scope.localStorage.getItem('drivescene-ui-draft-project-v2'+suffix)||'{}')||{}}catch{}
 const active=['road','elevated','ramp','junction','parking','outdoor'].includes(saved.active)?saved.active:'road';
 const params=saved.boards?.[active]?.params||{},candidate=saved.shared?.model??params.model;
 const model=['model-3','x6','ix','xc90'].includes(candidate)?candidate:'model-3';
 // The entry always opens Road, even when the last saved scene was Parking.
 const traffic=saved.shared?.layers?.traffic??saved.boards?.road?.params?.traffic??false;
 const urls=['../engine/assets/studio-environment.bin.gz?v=1',`./vehicles/${model}/model.glb.gz?v=restore26`,`./vehicles/${model}/framing-hull.json?v=cold-20261102`];
 if(traffic)urls.push('./traffic-model-y.prepared.bin.gz?v=restore26');
 scope.document.documentElement.dataset.startup='loading';
 const requests=scope.__draftStartupAssets=new Map();
 // Executable module preloads take priority over the large assets. An
 // in-flight download must survive slow transport without losing its bytes.
 for(const path of urls){const url=new URL(path,scope.document.baseURI).href;
  const request=scope.fetch(url,{priority:'low'}).then(response=>{if(!response.ok)throw Error('Scene asset could not load');return response.arrayBuffer()});
  request.catch(()=>{});requests.set(url,request);
 }
 return requests;
}
export const startupAssetScript=()=>`(${startStartupAssets.toString()})()`;
