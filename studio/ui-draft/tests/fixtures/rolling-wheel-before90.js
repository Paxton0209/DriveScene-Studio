import * as THREE from 'three';
export function installRollingWheels(car){
 if(car.userData.draftRolling)return car.userData.draftRolling;
 const wheels=car.userData.vehicleSpec?.wheels||[],distance={value:0},steer={value:0};
 if(!wheels.length)return null;
 car.updateMatrixWorld(true);const inv=new THREE.Matrix4().copy(car.matrixWorld).invert();let affected=0;
 car.traverse(mesh=>{
  if(!mesh.isMesh||!mesh.geometry?.attributes.position)return;
  const toCar=new THREE.Matrix4().multiplyMatrices(inv,mesh.matrixWorld),fromCar=toCar.clone().invert(),p=new THREE.Vector3(),a=mesh.geometry.attributes.position,data=new Float32Array(a.count*4);
  const named=/wheel|tire|tyre|rim|disc/i.test([mesh.name,...(Array.isArray(mesh.material)?mesh.material:[mesh.material]).map(m=>m.name)].join(' '));let count=0;
  for(let i=0;i<a.count;i++){
   p.fromBufferAttribute(a,i).applyMatrix4(toCar);
   for(const wheel of wheels){const [min,max]=[wheel.min,wheel.max],cx=(min[0]+max[0])/2,cy=(min[1]+max[1])/2,cz=(min[2]+max[2])/2,r=(max[1]-min[1])/2;
    if(p.x>=min[0]-.025&&p.x<=max[0]+.025&&Math.hypot(p.y-cy,p.z-cz)<r*(named?1.035:.86)){data.set([cx,cy,cz,1],i*4);count++;break;}
   }
  }
  if(!count)return;affected+=count;mesh.geometry=mesh.geometry.clone();mesh.geometry.setAttribute('draftAxle',new THREE.BufferAttribute(data,4));
  const patch=material=>{const copy=material.clone(),compile=material.onBeforeCompile,key=material.customProgramCacheKey();copy.onBeforeCompile=(shader,renderer)=>{compile.call(copy,shader,renderer);Object.assign(shader.uniforms,{draftWheelDistance:distance,draftWheelSteer:steer,draftToCar:{value:toCar},draftFromCar:{value:fromCar}});
   shader.vertexShader='attribute vec4 draftAxle;uniform float draftWheelDistance;uniform float draftWheelSteer;uniform mat4 draftToCar;uniform mat4 draftFromCar;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nfloat wheelAngle=-draftWheelDistance/max(.25,draftAxle.y);float wc=cos(wheelAngle),ws=sin(wheelAngle);mat3 wheelTurn=mat3(1.,0.,0.,0.,wc,ws,0.,-ws,wc);if(draftAxle.z<0.){float sc=cos(draftWheelSteer),ss=sin(draftWheelSteer);wheelTurn=mat3(sc,0.,-ss,0.,1.,0.,ss,0.,sc)*wheelTurn;}if(draftAxle.w>.5)objectNormal=mat3(draftFromCar)*wheelTurn*mat3(draftToCar)*objectNormal;');
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nif(draftAxle.w>.5){vec3 wheelP=(draftToCar*vec4(transformed,1.)).xyz;wheelP=wheelTurn*(wheelP-draftAxle.xyz)+draftAxle.xyz;transformed=(draftFromCar*vec4(wheelP,1.)).xyz;}');};copy.customProgramCacheKey=()=>key+'-rolling-axle-v1';return copy;};
  mesh.material=Array.isArray(mesh.material)?mesh.material.map(patch):patch(mesh.material);
 });
 return car.userData.draftRolling={distance,steer,affected};
}
