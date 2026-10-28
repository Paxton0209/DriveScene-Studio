import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {prepareVehicleMaterials} from './vehicle-materials.js?v=grille-14';

export const preparedVehicles=Object.freeze({
 ix:{name:'BMW iX',length:4.95},
 xc90:{name:'Volvo XC90',length:4.95},
 'model-3':{name:'Tesla Model 3 (2024)',length:4.72},
 taycan:{name:'Porsche Taycan',length:4.96}
});

// Load a repository GLB.gz, or pass the URL of a decompressed GLB downloaded
// by download.py. The runtime material recipe reproduces the preview style.
export async function loadPreparedVehicle(id,{url=new URL(`../prepared/${id}/model.glb.gz`,import.meta.url),signal}={}){
 const timings={};let phase=performance.now();const mark=name=>{const now=performance.now();timings[name]=now-phase;phase=now;};
 const spec=preparedVehicles[id];if(!spec)throw Error(`No prepared vehicle: ${id}`);
 const response=await fetch(url,{signal});if(!response.ok)throw Error(`Vehicle download failed (${response.status})`);
 let bytes=await response.arrayBuffer();const header=new Uint8Array(bytes,0,Math.min(2,bytes.byteLength));
 mark('download');
 if(header[0]===0x1f&&header[1]===0x8b)bytes=await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
 mark('decompress');
 const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes,'');
 mark('parse');
 const model=gltf.scene;model.updateMatrixWorld(true);
 const size=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
 model.rotation.y+=id==='model-3'?Math.PI/2:(size.x>size.z?Math.PI/2:Math.PI);
 if(['ix','xc90'].includes(id))model.rotation.y+=Math.PI;
 model.scale.multiplyScalar(spec.length/Math.max(size.x,size.z));model.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3());
 model.position.sub(new THREE.Vector3(center.x,box.min.y,center.z));model.updateMatrixWorld(true);
 mark('normalize');
 await new Promise(resolve=>setTimeout(resolve,0));
 const surfaces=prepareVehicleMaterials(model,id,spec.length);
 mark('materials');
 const root=new THREE.Group();root.name=spec.name;root.add(model);
 root.userData.loadTimings=timings;
 root.userData.vehicleSpec={...surfaces,id,length:spec.length};return root;
}
