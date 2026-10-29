import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {gunzipSync,gzipSync} from 'node:zlib';
import {pathToFileURL} from 'node:url';

// Replace only the image prefix. Meshopt streams and every decoded geometry
// attribute remain byte-for-byte identical to the approved exterior model.
export async function repackVehicleTextures(glb,encode){
 const jsonLength=glb.readUInt32LE(12),json=JSON.parse(glb.subarray(20,20+jsonLength));
 const binary=glb.subarray(28+jsonLength),images=new Set(json.images.map(image=>image.bufferView));
 const boundary=Math.max(...[...images].map(index=>{const view=json.bufferViews[index];if(view.buffer!==0)throw Error('Unexpected image buffer');return (view.byteOffset||0)+view.byteLength}));
 const paddedBoundary=Math.ceil(boundary/4)*4,chunks=[];let offset=0;
 for(const image of json.images){
  const view=json.bufferViews[image.bufferView],source=binary.subarray(view.byteOffset||0,(view.byteOffset||0)+view.byteLength);
  const bytes=await encode(source);view.byteOffset=offset;view.byteLength=bytes.length;image.mimeType='image/webp';
  chunks.push(bytes,Buffer.alloc((4-bytes.length%4)%4));offset+=Math.ceil(bytes.length/4)*4;
 }
 const delta=offset-paddedBoundary;
 for(let index=0;index<json.bufferViews.length;index++){
  const view=json.bufferViews[index];
  if(view.buffer===0&&!images.has(index)){if((view.byteOffset||0)<paddedBoundary)throw Error('Geometry overlaps image prefix');view.byteOffset=(view.byteOffset||0)+delta;}
  const compressed=view.extensions?.EXT_meshopt_compression;
  if(compressed?.buffer===0){if((compressed.byteOffset||0)<paddedBoundary)throw Error('Compressed geometry overlaps image prefix');compressed.byteOffset=(compressed.byteOffset||0)+delta;}
 }
 for(const texture of json.textures){texture.extensions={...texture.extensions,EXT_texture_webp:{source:texture.source}};delete texture.source;}
 json.extensionsUsed=[...new Set([...json.extensionsUsed,'EXT_texture_webp'])];
 json.extensionsRequired=[...new Set([...json.extensionsRequired,'EXT_texture_webp'])];
 json.buffers[0].byteLength+=delta;chunks.push(binary.subarray(paddedBoundary));
 const payload=Buffer.concat(chunks),text=Buffer.from(JSON.stringify(json)),paddedText=Buffer.concat([text,Buffer.alloc((4-text.length%4)%4,32)]),header=Buffer.alloc(20),binHeader=Buffer.alloc(8);
 header.write('glTF');header.writeUInt32LE(2,4);header.writeUInt32LE(28+paddedText.length+payload.length,8);header.writeUInt32LE(paddedText.length,12);header.write('JSON',16);
 binHeader.writeUInt32LE(payload.length);binHeader.write('BIN\0',4);
 return Buffer.concat([header,paddedText,binHeader,payload]);
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 const {default:sharp}=await import('sharp');
 const source=gunzipSync(await readFile(new URL('../engine/ego-vehicle-ready.glb.gz',import.meta.url)));
 const result=await repackVehicleTextures(source,bytes=>sharp(bytes).webp({lossless:true,effort:6}).toBuffer());
 await mkdir(new URL('./vehicles/x6/',import.meta.url),{recursive:true});
 await writeFile(new URL('./vehicles/x6/model.glb.gz',import.meta.url),gzipSync(result,{level:9,mtime:0}));
}
