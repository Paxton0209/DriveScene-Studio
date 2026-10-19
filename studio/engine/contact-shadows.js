import * as THREE from 'three';
// Contact occlusion complements cast shadows and is shared by every BMW view.
export function createContactShadows(car,{softBody=false}={}){
 const group=new THREE.Group();
 const patch=(x,z,w,d,opacity,body=0)=>{
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-4,uniforms:{opacity:{value:opacity},body:{value:body},softBody:{value:softBody?1:0}},vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 v;uniform float opacity;uniform float body;uniform float softBody;void main(){vec2 p=(v-.5)*2.;float r=pow(pow(abs(p.x),4.)+pow(abs(p.y),4.),.25);float a=mix(exp(-dot(p,p)*3.8),1.-smoothstep(.5,1.,r),body)*opacity;float softOcclusion=exp(-dot(p*vec2(1.35,1.05),p*vec2(1.35,1.05))*2.4)*(1.-smoothstep(.65,1.,length(p)));a=mix(a,softOcclusion*opacity,body*softBody);gl_FragColor=vec4(.008,.010,.014,a);}'});
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,d),material);mesh.rotation.x=-Math.PI/2;mesh.position.set(x,.035,z);group.add(mesh);
 };
 const wheels=car.userData.vehicleSpec.wheels;
 const track=Math.max(...wheels.map(w=>w.max[0]))-Math.min(...wheels.map(w=>w.min[0]));
 patch(0,0,softBody?Math.max(1.8,track)*1.2:2.5,softBody?(car.userData.vehicleSpec.length||4.85)*1.10:5.1,softBody?.36:.52,1);
 for(const wheel of car.userData.vehicleSpec.wheels){const x=(wheel.min[0]+wheel.max[0])/2,z=(wheel.min[2]+wheel.max[2])/2;patch(x,z,.56,.80,softBody?.92:.88);}
 return group;
}
