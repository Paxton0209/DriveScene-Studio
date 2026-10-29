import {createHash} from 'node:crypto';
import {readFile,writeFile,mkdir} from 'node:fs/promises';

// Restore the approved vehicle assets verbatim. Geometry, normal groups,
// material names and texture pixels must survive delivery optimization.
export async function prepareDisplayVehicles(){
 const manifest={};
 for(const id of ['model-3','ix','xc90','x6']){
  const source=await readFile(new URL(id==='x6'?'../engine/ego-vehicle-ready.glb.gz':`../engine/vehicle-library/prepared/${id}/model.glb.gz`,import.meta.url));
  await mkdir(new URL(`./vehicles/${id}/`,import.meta.url),{recursive:true});
  await writeFile(new URL(`./vehicles/${id}/model.glb.gz`,import.meta.url),source);
  const hash=createHash('sha256').update(source).digest('hex');
  manifest[id]={source:hash,output:hash,originalBytes:source.length,bytes:source.length};
 }
 await writeFile(new URL('./vehicles/display-manifest.json',import.meta.url),JSON.stringify(manifest));
 return manifest;
}
