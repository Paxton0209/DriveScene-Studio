import {createHash} from 'node:crypto';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {prepareLosslessVehicle} from './prepare-lossless-vehicle.mjs';

// Keep approved geometry and texture pixels. Only X6's PNG delivery changes;
// the other three prepared models remain byte-for-byte copies.
export async function prepareDisplayVehicles(){
 const manifest={};
 for(const id of ['model-3','ix','xc90','x6']){
  const source=await readFile(new URL(id==='x6'?'../engine/ego-vehicle-ready.glb.gz':`../engine/vehicle-library/prepared/${id}/model.glb.gz`,import.meta.url));
  await mkdir(new URL(`./vehicles/${id}/`,import.meta.url),{recursive:true});
  const output=id==='x6'?await prepareLosslessVehicle(source):source;
  await writeFile(new URL(`./vehicles/${id}/model.glb.gz`,import.meta.url),output);
  const hash=createHash('sha256').update(source).digest('hex');
  manifest[id]={source:hash,output:createHash('sha256').update(output).digest('hex'),originalBytes:source.length,bytes:output.length};
 }
 await writeFile(new URL('./vehicles/display-manifest.json',import.meta.url),JSON.stringify(manifest));
 return manifest;
}
