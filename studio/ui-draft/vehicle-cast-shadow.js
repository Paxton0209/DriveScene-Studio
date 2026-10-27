import * as THREE from 'three';
// Retain the real light projection. Only its penumbra loses density away from
// the vehicle; chassis/tyre contact is rendered independently above this pass.
export function syncVehicleCastFade(world){
 const state=world.draftCastFade??={count:{value:0},boxes:{value:Array.from({length:32},()=>new THREE.Vector4())},yaw:{value:Array(32).fill(0)}};
 const cars=[world.car,...(world.draftParkingGroup?.visible?world.draftParkingGroup.children.filter(o=>o.userData.trafficVehicle):[]),...(world.trafficSystem?.group.visible?world.trafficSystem.group.children:[])].filter(o=>o?.visible&&o.userData);
 state.count.value=Math.min(32,cars.length);
 cars.slice(0,32).forEach((car,i)=>{const spec=car.userData.vehicleSpec||{};state.boxes.value[i].set(car.position.x,car.position.z,(spec.width||1.9)*.5,(spec.length||car.userData.physicalLength||4.85)*.5);state.yaw.value[i]=car.rotation.y;});
 for(const material of [world.mat?.road,world.parkingShadow?.material]){
  if(!material||material.userData.draftCastFade)continue;
  const previous=material.onBeforeCompile,key=material.customProgramCacheKey();
  material.onBeforeCompile=function(shader,renderer){
   previous.call(this,shader,renderer);Object.assign(shader.uniforms,{draftCastBoxes:state.boxes,draftCastYaw:state.yaw,draftCastCount:state.count});
   shader.vertexShader='varying vec3 draftCastWorld;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>','#include <worldpos_vertex>\ndraftCastWorld=(modelMatrix*vec4(transformed,1.)).xyz;');
   shader.fragmentShader=`varying vec3 draftCastWorld;uniform vec4 draftCastBoxes[32];uniform float draftCastYaw[32];uniform int draftCastCount;
   float draftCastCoverage(){float nearest=1000.;for(int i=0;i<32;i++){if(i>=draftCastCount)break;vec4 b=draftCastBoxes[i];vec2 p=draftCastWorld.xz-b.xy;float c=cos(draftCastYaw[i]),s=sin(draftCastYaw[i]);vec2 q=abs(vec2(c*p.x-s*p.y,s*p.x+c*p.y))-b.zw;nearest=min(nearest,length(max(q,0.)));}float density=exp(-nearest*nearest/.95);return mix(density,1.,smoothstep(2.8,4.,nearest));}\n`+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <shadowmap_pars_fragment>',THREE.ShaderChunk.shadowmap_pars_fragment.replace('shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );','shadow = mix(1.,VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z ),draftCastCoverage());'));
  };
  material.customProgramCacheKey=()=>key+'-physical-cast-fade-1';material.userData.draftCastFade=true;material.needsUpdate=true;
 }
}
