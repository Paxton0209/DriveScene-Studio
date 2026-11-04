import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,readFile,writeFile,stat,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {prepareDisplayVehicles,displayVehicleRecord} from '../prepare-display-assets.mjs';

async function fixture(t){
 const dir=await mkdtemp(join(tmpdir(),'drivescene-artifact-'));t.after(()=>rm(dir,{recursive:true,force:true}));
 const rootURL=pathToFileURL(join(dir,'ui/'));
 const source=Buffer.from('approved source'),output=Buffer.from('committed output');
 for(const id of ['model-3','ix','xc90','x6']){
  const sourceURL=new URL(id==='x6'?'../engine/ego-vehicle-ready.glb.gz':`../engine/vehicle-library/prepared/${id}/model.glb.gz`,rootURL);
  await mkdir(new URL('./',sourceURL),{recursive:true});await writeFile(sourceURL,source);
 }
 const artifact=new URL('vehicles/x6/model.glb.gz',rootURL),manifest=new URL('vehicles/display-manifest.json',rootURL);
 await mkdir(new URL('./',artifact),{recursive:true});await writeFile(artifact,output);
 await writeFile(manifest,JSON.stringify({x6:displayVehicleRecord(source,output)}));
 return {rootURL,source,output,artifact,manifest};
}

test('ordinary builds verify committed X6 without encoding or rewriting it',async t=>{
 const f=await fixture(t),before=await stat(f.artifact);
 await prepareDisplayVehicles({rootURL:f.rootURL,prepareX6:()=>{throw Error('encoder must not run')}});
 assert.deepEqual(await readFile(f.artifact),f.output);assert.equal((await stat(f.artifact)).mtimeMs,before.mtimeMs);
 const saved=JSON.parse(await readFile(f.manifest));assert.deepEqual(saved.x6,displayVehicleRecord(f.source,f.output));
 for(const id of ['model-3','ix','xc90'])assert.deepEqual(await readFile(new URL(`vehicles/${id}/model.glb.gz`,f.rootURL)),f.source);
});

for(const kind of ['artifact corruption','source change','missing artifact','missing manifest'])test(`build rejects ${kind} without regenerating X6`,async t=>{
 const f=await fixture(t);
 if(kind==='artifact corruption')await writeFile(f.artifact,Buffer.alloc(f.output.length,120));
 if(kind==='source change')await writeFile(new URL('../engine/ego-vehicle-ready.glb.gz',f.rootURL),'changed');
 if(kind==='missing artifact')await rm(f.artifact);
 if(kind==='missing manifest')await rm(f.manifest);
 await assert.rejects(prepareDisplayVehicles({rootURL:f.rootURL,prepareX6:()=>{throw Error('encoder must not run')}}),/X6 artifact verification failed/);
 if(kind==='missing artifact')await assert.rejects(readFile(f.artifact),{code:'ENOENT'});
 else assert.deepEqual(await readFile(f.artifact),kind==='artifact corruption'?Buffer.alloc(f.output.length,120):f.output);
});

test('explicit regeneration updates binary and manifest together',async t=>{
 const f=await fixture(t),replacement=Buffer.from('intentionally regenerated');let called=0;
 await prepareDisplayVehicles({rootURL:f.rootURL,regenerateX6:true,prepareX6:async source=>{called++;assert.deepEqual(source,f.source);return replacement}});
 assert.equal(called,1);assert.deepEqual(await readFile(f.artifact),replacement);
 assert.deepEqual(JSON.parse(await readFile(f.manifest)).x6,displayVehicleRecord(f.source,replacement));
});
