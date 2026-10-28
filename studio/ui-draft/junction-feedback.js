import {updateIndicatorSound} from './assist-sound.js';
import * as THREE from 'three';
import {junctionBrakeReveal} from './junction-playback.js';
const smooth=(a,b,v)=>THREE.MathUtils.smoothstep(v,a,b);
// Highlight vertices belonging to the existing left rear lamp. The same pulse
// is captured by the existing vehicle mirror, using the road material response.
export function createJunctionFeedback(world){
 const pulse=world.draftIndicatorPulse??={value:0},installed=new WeakSet();let lampVertices=0,stopStarted=null,previousPulse=-1;
 function install(){
  const car=world.car;if(!car?.children.length)return;
  lampVertices=0;
  car.updateMatrixWorld(true);const inverse=car.matrixWorld.clone().invert();
  const length=car.userData.vehicleSpec?.length||4.85;
  const model=car.userData.vehicleSpec?.id||'x6';
  // The assets merge tail, reflector and auxiliary lamp surfaces. Limit the
  // indicator to the main cluster; never flash lower fascia or high brake lamps.
  const lampBand=({ 'model-3':[.72,.96], x6:[1.08,1.16], ix:[1.01,1.07], xc90:[1.17,1.39] })[model];
  car.traverse(mesh=>{
   if(!mesh.isMesh)return;
   if(installed.has(mesh)){lampVertices+=mesh.userData.draftLeftLampVertices||0;return;}installed.add(mesh);
   const materials=Array.isArray(mesh.material)?mesh.material:[mesh.material];
   const isLamp=m=>['tail','tail-lens'].includes(m.userData.surfaceRole)||(/tail|rear.?light/i.test(m.name))||(m.color?.r>m.color?.g*2.5&&m.color?.r>m.color?.b*2.5&&m.emissiveIntensity>0);
   if(!materials.some(isLamp))return;
   const transform=new THREE.Matrix4().multiplyMatrices(inverse,mesh.matrixWorld),positions=mesh.geometry.attributes.position,mask=new Float32Array(positions.count),point=new THREE.Vector3();let count=0;
   for(let i=0;i<positions.count;i++){point.fromBufferAttribute(positions,i).applyMatrix4(transform);if(point.x<-.3&&point.z>length*.32&&point.y>=lampBand[0]&&point.y<=lampBand[1]){mask[i]=1;count++;}}
   if(!count)return;lampVertices+=count;mesh.userData.draftLeftLampVertices=count;mesh.geometry=mesh.geometry.clone();mesh.geometry.setAttribute('draftLeftLamp',new THREE.BufferAttribute(mask,1));
   const patch=material=>{
    if(!isLamp(material))return material;
    const copy=material.clone(),compile=material.onBeforeCompile,key=material.customProgramCacheKey();
    copy.onBeforeCompile=(shader,renderer)=>{compile.call(copy,shader,renderer);shader.uniforms.draftLeftPulse=pulse;shader.uniforms.draftLampTransform={value:transform};shader.uniforms.draftLampBounds={value:new THREE.Vector3(length*.32,lampBand[0],lampBand[1])};
     shader.vertexShader='varying vec3 vDraftLampLocal;uniform mat4 draftLampTransform;\n'+shader.vertexShader;
     shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvDraftLampLocal=(draftLampTransform*vec4(transformed,1.0)).xyz;');
     shader.fragmentShader='varying vec3 vDraftLampLocal;uniform vec3 draftLampBounds;uniform float draftLeftPulse;\n'+shader.fragmentShader;
     shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','float lampMask=step(vDraftLampLocal.x,-.3)*step(draftLampBounds.x,vDraftLampLocal.z)*step(draftLampBounds.y,vDraftLampLocal.y)*step(vDraftLampLocal.y,draftLampBounds.z);\noutgoingLight=mix(outgoingLight,vec3(2.4,.50,.018),lampMask*draftLeftPulse);\n#include <opaque_fragment>');};
    copy.customProgramCacheKey=()=>key+'-left-lamp-v3';return copy;
   };
   mesh.material=Array.isArray(mesh.material)?materials.map(patch):patch(mesh.material);
  });
 }
 return {update(pathEnabled){
  const junction=['05','08'].includes(world.state?.id);install();
  const stopped=junction&&(world.draftJunctionElapsed||0)>0&&(world.draftSpeed??1)<.01;
  const now=(world.draftTime||0)/1000;
  if(stopped&&stopStarted===null)stopStarted=now;
  if(!stopped)stopStarted=null;
  const phase=stopped?Math.max(0,now-stopStarted)%.8:0;
  // Start a complete flash at the stop, then repeat at 75 flashes/minute.
  // LED switching is quick, with no breathing or independent ground decal.
  pulse.value=stopped?smooth(0,.035,phase)*(1-smooth(.365,.4,phase)):0;
  updateIndicatorSound(stopped,pulse.value>=.5,{silent:world.draftAudioSuppressed||world.suspended||document.hidden});
  const reflectionStep=Math.round(pulse.value*16);
  if(reflectionStep!==previousPulse){world.groundReflectionKey=null;world.carReflectionKey=null;previousPulse=reflectionStep;}
  world.draftIndicatorActive=stopped;
  if(!junction)return;
  const length=world.car.userData.vehicleSpec?.length||4.85;
  const start=world.car.position.z-length/2+.65;
  const end=(world.junctionDimensions?.markingEnd??-22.55)+(world.junctionDimensions?.stopLineWidth??.18)/2+.15;
  world.draftJunctionFeedback={stopVisible:!!pathEnabled,arrowVisible:false,surfaceChevrons:!!pathEnabled,end,span:Math.max(0,start-end),braking:!stopped,indicator:stopped,lampPulse:pulse.value,lampVertices,reflectionSource:'blurred actual vehicle lamp capture',reveal:junctionBrakeReveal(world.draftJunctionElapsed||0)};
 }};
}
