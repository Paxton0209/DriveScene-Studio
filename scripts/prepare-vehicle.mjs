import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {meshopt,prune,dedup} from '@gltf-transform/functions';
import {MeshoptDecoder,MeshoptEncoder} from 'meshoptimizer';
import {readFile,writeFile} from 'node:fs/promises';import {gzipSync} from 'node:zlib';
await Promise.all([MeshoptDecoder.ready,MeshoptEncoder.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder,'meshopt.encoder':MeshoptEncoder});
const document=await io.read(process.argv[2]||'vehicle-prepared.glb');
// Cabin geometry is occluded by the permanently opaque glass. Keep every exterior panel, wheel and lamp.
const interiorNames=new Set(['Object_9','Object_15','Object_17','Object_18','Object_19','Object_20','Object_21','Object_25','Object_26','Object_27','Object_29','Object_30','Object_31','Object_32','Object_34','Object_35','Object_43','Object_45','Object_46']);
for(const node of document.getRoot().listNodes())if(interiorNames.has(node.getName()))node.dispose();
await document.transform(dedup(),prune(),meshopt({encoder:MeshoptEncoder,level:'medium',quantizePosition:16,quantizeNormal:12,quantizeTexcoord:16,quantizeColor:12}));
const raw=await io.writeBinary(document),gz=gzipSync(raw,{level:9});await writeFile('ego-vehicle-ready.glb.gz',gz);
console.log(JSON.stringify({source:(await readFile('ego-suv.meshopt.glb.gz')).length,optimized:gz.length,glb:raw.length,meshCount:document.getRoot().listMeshes().length}));
