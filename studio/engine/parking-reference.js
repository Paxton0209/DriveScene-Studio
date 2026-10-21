import {createParkingSurface} from './ground-reflection.js';
import * as THREE from 'three';
import {parkingBayRows,parkingBaySize} from './parking-layout.js';
// Geometry follows the supplied 937/611 parking references: a small floating
// cluster of neutral bays, sparse frosted supports and
// generous dark negative space. No navigation graphics are part of the scene.
export function buildParkingReference(world,id){
 const {root}=world;
 const tone={value:world.state?.mode==='dark'?1:0};world.parkingTone=tone;
 const floor=createParkingSurface(world,tone,true);
 const fm=new THREE.Mesh(new THREE.PlaneGeometry(1000,1000),floor);fm.rotation.x=-Math.PI/2;fm.position.y=.014;root.add(fm);fm.userData.reflectiveSurface=true;
 const shadow=new THREE.Mesh(new THREE.PlaneGeometry(1000,1000),new THREE.ShadowMaterial({color:0x24303d,opacity:world.state?.mode==='dark'?0:.24}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.018;shadow.receiveShadow=true;root.add(shadow);world.parkingShadow=shadow;
 const bayMat=new THREE.ShaderMaterial({polygonOffset:true,polygonOffsetFactor:-4,polygonOffsetUnits:-8,uniforms:{tone,study:{value:world.palette==='current'?0:1}},transparent:true,depthWrite:false,vertexShader:'varying vec3 p;varying vec2 v;void main(){v=uv;p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}',fragmentShader:`uniform float tone;uniform float study;varying vec3 p;varying vec2 v;void main(){float distanceFade=exp(-dot(p.xz*vec2(.035,.04),p.xz*vec2(.035,.04)));float sheen=.91+.09*v.y;vec3 dark=vec3(1.);vec3 light=vec3(0.);vec2 q=abs(v-.5)-vec2(.475,.455);float sd=length(max(q,0.))+min(max(q.x,q.y),0.)-.018;float mask=1.-smoothstep(-.002,.003,sd);float edge=1.-smoothstep(0.,.009,abs(sd));float alpha=(mix(.23,.025,tone)*(.72+.28*distanceFade))*mask;float original=mix(.17,.025,tone)*(.72+.28*distanceFade);gl_FragColor=vec4(mix(light,dark,tone),mix(original,alpha,study));\n#include <tonemapping_fragment>\n#include <colorspace_fragment>}`});
 world.parkingBays=[];world.parkingColumns=[];world.pedestrianPassages=[];world.parkedVehicles=[];
 const rows=parkingBayRows;
 const {length:width,width:depth,centerX:x}=parkingBaySize;
 for(const side of [-1,1])for(const z of rows){const tile=new THREE.Mesh(new THREE.PlaneGeometry(width,depth),bayMat);tile.rotation.x=-Math.PI/2;tile.position.set(side*x,.028,z);root.add(tile);world.parkingBays.push({x:side*x,z,width,depth,angle:0});}
 // Low wheel stops at bay heads, matching the outdoor parking convention.
 for(const side of [-1,1])for(const z of rows){
  const stop=world.box(.16,.10,1.65,side*8.02,.07,z,'curb',.035);stop.material=new THREE.MeshStandardMaterial({color:'#4a4b49',roughness:.85});stop.castShadow=false;
  for(const dz of [-.48,.48]){const mark=world.box(.17,.012,.25,side*8.02,.128,z+dz,'yellow',.01);mark.castShadow=false;}
 }
 // Uniform 3.6m pitch: 2.8m bays with 0.8m separation, including beside ego.
 world.parkingGhostMaterials=[];
 // Supports occupy the gaps between bays, set back from the clear aisle.
 const columnMaterial=new THREE.ShaderMaterial({uniforms:{tone},transparent:true,depthWrite:false,vertexShader:'varying vec3 p;varying vec3 n;void main(){p=(modelMatrix*vec4(position,1.)).xyz;n=normal;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}',fragmentShader:`uniform float tone;varying vec3 p;varying vec3 n;void main(){float top=1.-smoothstep(2.5,3.2,p.y);float far=1.-smoothstep(14.,35.,-p.z);float face=.84+.16*max(n.x,0.);vec3 c=mix(vec3(.27,.29,.31),vec3(.10),tone)*face;gl_FragColor=vec4(c,top*far*.8);
#include <colorspace_fragment>
}`});
 for(const side of [-1,1])for(const z of [-1.8,-12.6]){const column=new THREE.Mesh(new THREE.BoxGeometry(.68,3.2,.68),columnMaterial);column.position.set(side*7.45,1.6,z);root.add(column);world.parkingColumns.push(column);}

 world.parkingReplica={references:['6b769787','892a70a1','f0d98605'],method:'one shared aisle environment for all camera views',occupiedBays:0,bayPitch:3.6,bayGap:.8,columnSection:.68,columnHeight:3.2,wheelStopFromBayEnd:.33,columnSetbackFromAisle:4,noNavigationGraphics:true};
}
