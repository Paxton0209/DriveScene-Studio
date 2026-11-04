import {createHash} from 'node:crypto';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';

const encodeX6=async source=>{const {prepareLosslessVehicle}=await import('./prepare-lossless-vehicle.mjs');return prepareLosslessVehicle(source)};
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
export function displayVehicleRecord(source,output){
 return {source:digest(source),output:digest(output),originalBytes:source.length,bytes:output.length};
}

// X6 is a committed delivery artifact. Ordinary builds verify its source and
// output bytes without invoking an image encoder or rewriting that artifact.
// Regeneration is explicit so encoder/library differences cannot silently
// produce different bytes under the same deployed resource version.
export async function prepareDisplayVehicles({rootURL=new URL('./',import.meta.url),regenerateX6=false,prepareX6=encodeX6}={}){
 const sourceURL=id=>new URL(id==='x6'?'../engine/ego-vehicle-ready.glb.gz':`../engine/vehicle-library/prepared/${id}/model.glb.gz`,rootURL);
 const outputURL=id=>new URL(`./vehicles/${id}/model.glb.gz`,rootURL);
 const source=await readFile(sourceURL('x6'));
 let output;
 if(regenerateX6){
  output=await prepareX6(source);
 }else{
  try{
   const saved=JSON.parse(await readFile(new URL('./vehicles/display-manifest.json',rootURL),'utf8'));
   output=await readFile(outputURL('x6'));
   const actual=displayVehicleRecord(source,output);
   if(!saved.x6||Object.keys(actual).some(key=>actual[key]!==saved.x6[key]))throw Error('source or artifact hash/size mismatch');
  }catch(error){
   throw new Error('X6 artifact verification failed. Restore the committed artifact and manifest, or explicitly run npm run prepare:x6 --prefix studio/ui-draft and review the generated changes.',{cause:error});
  }
 }
 const manifest={};
 for(const id of ['model-3','ix','xc90','x6']){
  const original=id==='x6'?source:await readFile(sourceURL(id));
  const prepared=id==='x6'?output:original;
  if(id!=='x6'||regenerateX6){
   await mkdir(new URL(`./vehicles/${id}/`,rootURL),{recursive:true});
   await writeFile(outputURL(id),prepared);
  }
  manifest[id]=displayVehicleRecord(original,prepared);
 }
 await writeFile(new URL('./vehicles/display-manifest.json',rootURL),JSON.stringify(manifest));
 return manifest;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 if(process.argv.length!==3||process.argv[2]!=='--regenerate-x6')throw Error('Expected --regenerate-x6');
 await prepareDisplayVehicles({regenerateX6:true});
}
