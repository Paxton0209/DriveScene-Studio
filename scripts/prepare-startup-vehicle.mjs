import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {weld,simplify,meshopt,prune,dedup,textureCompress} from '@gltf-transform/functions';
import sharp from 'sharp';
import {MeshoptDecoder,MeshoptEncoder,MeshoptSimplifier} from 'meshoptimizer';
import {readFile,writeFile} from 'node:fs/promises';
import {gzipSync,gunzipSync} from 'node:zlib';

await Promise.all([MeshoptDecoder.ready,MeshoptEncoder.ready,MeshoptSimplifier.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder,'meshopt.encoder':MeshoptEncoder});
const document=await io.readBinary(gunzipSync(await readFile('ego-vehicle-ready.glb.gz')));
// Only the startup copy is simplified. The full delivery model stays intact.
await document.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio:.025,error:.005}),textureCompress({encoder:sharp,targetFormat:'webp',resize:[128,128],quality:85}),dedup(),prune(),meshopt({encoder:MeshoptEncoder,level:'medium',quantizePosition:14,quantizeNormal:10,quantizeTexcoord:14,quantizeColor:12}));
const bytes=gzipSync(await io.writeBinary(document),{level:9});
await writeFile('ego-vehicle-startup.glb.gz',bytes);
console.log(JSON.stringify({startupBytes:bytes.length,fullBytes:(await readFile('ego-vehicle-ready.glb.gz')).length}));
