import * as THREE from 'three';
const request=globalThis.__studioEnvironmentRequest||fetch(new URL('./assets/studio-environment.bin.gz?v=1',import.meta.url)).then(response=>{if(!response.ok)throw Error('Environment asset failed to load');return response.arrayBuffer();});
const packed=await request;
const decoded=await new Response(new Blob([packed]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
const header=new DataView(decoded),width=header.getUint32(0,true),height=header.getUint32(4,true),pixels=new Uint16Array(decoded,8);
export function createStudioEnvironment(){
 const texture=new THREE.DataTexture(pixels,width,height,THREE.RGBAFormat,THREE.HalfFloatType);
 texture.mapping=THREE.CubeUVReflectionMapping;texture.minFilter=texture.magFilter=THREE.LinearFilter;
 texture.generateMipmaps=false;texture.flipY=false;texture.colorSpace=THREE.LinearSRGBColorSpace;texture.needsUpdate=true;
 return texture;
}
