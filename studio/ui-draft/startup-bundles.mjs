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
