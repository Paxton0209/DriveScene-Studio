import * as THREE from 'three';

const templates=new Map(),requests=new Map();
export const trafficModelTypes=Object.freeze(['model-y']);
const blueSeasoning=new THREE.Color('#7698c5');
export async function readyTrafficModel(bytes,type='model-y'){
 if(templates.has(type))return templates.get(type);if(requests.has(type))return requests.get(type);
 const pending=(async()=>{
  if(!bytes){const response=await fetch(new URL('../engine/assets/traffic-model-y.json.gz?v=1',import.meta.url));if(!response.ok)throw Error('Traffic model could not load');bytes=await response.arrayBuffer();}
  const header=new Uint8Array(bytes.buffer||bytes,bytes.byteOffset||0,Math.min(2,bytes.byteLength));const blob=new Blob([bytes]);const text=header[0]===31&&header[1]===139?await new Response(blob.stream().pipeThrough(new DecompressionStream('gzip'))).text():await blob.text();
  const data=JSON.parse(text),template=new THREE.Group();template.userData.spec=data.spec;template.userData.triangles=data.triangles;template.userData.originalTriangles=data.originalTriangles;
  for(const part of data.parts){const geometry=new THREE.BufferGeometry();for(const [name,array]of Object.entries(part.attributes))geometry.setAttribute(name,new THREE.Float32BufferAttribute(array,3));if(part.indices)geometry.setIndex(part.indices);const material=new THREE.MeshPhysicalMaterial({color:'#a5a9b3',roughness:part.role==='rubber'?.88:.50,metalness:0,clearcoat:part.role==='paint'?.18:.08,clearcoatRoughness:.42,specularIntensity:.32,ior:1.49,transmission:0,thickness:.10,side:THREE.FrontSide});material.userData.trafficRole=part.role;
   if(part.role==='paint'){
    material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
     vec3 trafficNormal=inverseTransformDirection(normal,viewMatrix);
     float trafficPlanes=.68+.32*smoothstep(-.45,.90,dot(trafficNormal,normalize(vec3(-.6,1.,.6))));
     reflectedLight.indirectDiffuse*=trafficPlanes;
     reflectedLight.directDiffuse*=.84;
    `);};material.customProgramCacheKey=()=> 'traffic-structure-2';
   }
const mesh=new THREE.Mesh(geometry,material);mesh.name=part.name;template.add(mesh);}
  templates.set(type,template);return template;
 })().catch(error=>{requests.delete(type);throw error;});requests.set(type,pending);return pending;
}
const shadowGeometry=new THREE.PlaneGeometry(3.05,5.8);
export function createTrafficVehicle(type='model-y'){
 const template=templates.get(type),car=new THREE.Group();car.name='Traffic Model Y';car.userData={trafficVehicle:true,trafficType:type,physicalLength:template?.userData.spec.length||4.62,modelReady:!!template,triangles:template?.userData.triangles,originalTriangles:template?.userData.originalTriangles};
 if(template)for(const part of template.children){const mesh=part.clone();mesh.material=part.material.clone();mesh.material.onBeforeCompile=part.material.onBeforeCompile;mesh.material.customProgramCacheKey=part.material.customProgramCacheKey;mesh.castShadow=false;mesh.receiveShadow=false;car.add(mesh);}
 const shadow=new THREE.Mesh(shadowGeometry,new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,polygonOffset:true,polygonOffsetFactor:-2,uniforms:{visibility:{value:1}},vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 v;uniform float visibility;void main(){vec2 p=(v-.5)*2.;float a=exp(-dot(p*vec2(1.5,1.05),p*vec2(1.5,1.05))*2.8)*(1.-smoothstep(.65,1.,length(p)));gl_FragColor=vec4(.008,.01,.014,a*.36*visibility);}'}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.012;shadow.userData.trafficShadow=true;car.add(shadow);setTrafficAppearance(car);return car;
}
export function setTrafficAppearance(car,dark=false,opacity=1){
 const palette=dark?{paint:'#85878c',window:'#777b82',rubber:'#3f444c',rim:'#616a76',trim:'#85878c'}:{paint:'#a5a5a3',window:'#919395',rubber:'#454a51',rim:'#727b87',trim:'#a5a5a3'};
 for(const child of car.children){const material=child.material;if(!material)continue;if(material.isShaderMaterial)material.uniforms.visibility.value=opacity;else{material.color.set(palette[material.userData.trafficRole]||palette.paint);if(material.userData.trafficRole!=='rubber')material.color.lerp(blueSeasoning,.10);material.envMapIntensity=dark?.22:.28;material.opacity=opacity;material.transparent=opacity<.999;material.depthWrite=opacity>.98;}}
 car.userData.trafficOpacity=opacity;car.userData.trafficTheme=dark?'dark':'light';
}
