import {createParkingSurface} from './ground-reflection.js';
import * as THREE from 'three';
import {parkingBayRows,parkingBaySize} from './parking-layout.js';
// Ground-level residential parking immediately beside the buildings.
export function buildOutdoorParking(world){
 const tone={value:world.state?.mode==='dark'?1:0};world.parkingTone=tone;world.parkingShadow=null;world.parkingGhostMaterials=[];world.parkedVehicles=[];
 world.plane(20000,20000,0,-1000,-.14,'ground');
 // One continuous courtyard surface: no road branch, lane lines or perimeter frame.
 const surface=world.plane(20000,20000,0,-1000,.015,'parkingFloor');surface.material=createParkingSurface(world,tone,true);surface.userData.reflectiveSurface=true;
 // Center the receiver on the courtyard so shadows extend past the ego in every view.
 const shadow=new THREE.Mesh(new THREE.PlaneGeometry(2000,2000,64,64),new THREE.ShadowMaterial({color:0x18212b,opacity:.24,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));shadow.rotation.x=-Math.PI/2;shadow.position.set(0,.018,-60);shadow.receiveShadow=true;shadow.userData.reflectiveSurface=true;world.root.add(shadow);world.parkingShadow=shadow;
 const bayMat=new THREE.ShaderMaterial({polygonOffset:true,polygonOffsetFactor:-4,polygonOffsetUnits:-8,uniforms:{tone,study:{value:world.palette==='current'?0:1}},transparent:true,depthWrite:false,vertexShader:'varying vec3 p;varying vec2 v;void main(){v=uv;p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}',fragmentShader:`uniform float tone;uniform float study;varying vec3 p;varying vec2 v;void main(){if(study<.5){gl_FragColor=vec4(vec3(tone),mix(.17,.025,tone));return;}float distanceFade=exp(-dot(p.xz*vec2(.035,.04),p.xz*vec2(.035,.04)));float sheen=.91+.09*v.y;vec3 dark=vec3(1.);vec3 light=vec3(0.);vec2 q=abs(v-.5)-vec2(.475,.455);float sd=length(max(q,0.))+min(max(q.x,q.y),0.)-.018;float mask=1.-smoothstep(-.002,.003,sd);float edge=1.-smoothstep(0.,.009,abs(sd));float alpha=(mix(.23,.025,tone)*(.72+.28*distanceFade))*mask;float original=mix(.17,.025,tone)*(.72+.28*distanceFade);gl_FragColor=vec4(mix(light,dark,tone),mix(original,alpha,study));\n#include <tonemapping_fragment>\n#include <colorspace_fragment>}`});
 world.parkingBays=[];world.parkingColumns=[];world.pedestrianPassages=[{x:-9.4,z:-1,width:1.5,depth:42,clearWidth:1.5},{x:9.4,z:-1,width:1.5,depth:42,clearWidth:1.5}];
 for(const side of [-1,1])for(const z of parkingBayRows){
  const x=side*parkingBaySize.centerX,width=parkingBaySize.length,depth=parkingBaySize.width,tile=new THREE.Mesh(new THREE.PlaneGeometry(width,depth),bayMat);tile.rotation.x=-Math.PI/2;tile.position.set(x,.028,z);world.root.add(tile);world.parkingBays.push({x,z,width,depth,angle:0});
  // Short wheel stop inside the bay; preserve a visible gap before the walkway.
  const stop=world.box(.16,.10,1.65,side*8.02,.07,z,'curb',.035);stop.material=new THREE.MeshStandardMaterial({color:'#4a4b49',roughness:.85});stop.castShadow=false;
  for(const dz of [-.48,.48]){const tab=world.box(.17,.012,.25,side*8.02,.128,z+dz,'yellow',.01);tab.castShadow=false;}

 }
 // Bay heads face the residential walls, separated by a 1.5m walking strip.
 // Walking clearance stays level with the courtyard, without contrasting ribbons.

 // Separate residential volumes leave visible gaps, side faces and varied rooflines.
 for(const side of [-1,1])for(const [i,z]of [12,-3,-18].entries())world.building(side*(15.15+(i===1?1.2:0)),z,10,11.5,[8.6,11.2,7.4][i]);
 // A small planted court closes the long visual axis; access remains offset on the left.
 for(const [x,z,w,d,h] of [[-15,-42,12,9,5.2],[9,-48,13,9,5.8]])world.building(x,z,w,d,h);
 const planter=world.box(16.7,.18,3,0,.09,-25.8,'pavement',.10);planter.castShadow=false;
 const planting=world.box(16.3,.32,2.6,0,.32,-25.8,'grass',.16);planting.castShadow=false;
 // Keep an uninterrupted surface underneath the courtyard and beyond its low boundary.
 // Small planted areas sit at the row breaks, outside the clear parking aisle.
 for(const side of [-1,1]){const x=side*10.8,z=-10.5;const lawn=world.plane(3.2,3.2,x,z,.03,'grass');world.lawns.push(lawn);world.tree(x,z,side<0?1.32:1.4);const tree=world.vegetation.children.at(-1);tree.scale.x*=.82;tree.scale.z*=.82;}
 world.parkingReplica={method:'ground-level residential parking; bays 1.5m from building faces; no road junction',occupiedBays:0,noNavigationGraphics:true,buildingBayGap:1.8,headGap:.3,bayPitch:3.6,bayGap:.8,planterBounds:{left:-8.35,right:8.35,center:0},wheelStops:parkingBayRows.length*2,wheelStopFromBayEnd:.33,roadBranches:0};
}
