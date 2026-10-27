import {trafficContactGrowth} from './traffic-reveal.js';
import * as THREE from 'three';
import {accentRadiance} from './path-color.js';
const ink=hex=>'vec3('+accentRadiance(hex).toArray().map(n=>n.toFixed(6)).join(',')+')';
const vertex='varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';
export const bayShape=`vec2 t=(v-.5)*vec2(4.9,2.8);vec2 q=abs(t)-(vec2(2.45,1.4)-vec2(.15));float d=length(max(q,0.))+min(max(q.x,q.y),0.)-.09;float aa=max(fwidth(d),.001);float fill=1.-smoothstep(-aa,aa,d);float rim=(1.-smoothstep(.045-aa,.045+aa,abs(d+.045)))*fill;`;
export const bayGlyph=`float line=min(segment(t,vec2(-.16,-.28),vec2(-.16,.28)),min(segment(t,vec2(-.16,.28),vec2(.13,.28)),min(segment(t,vec2(.13,.28),vec2(.19,.20)),min(segment(t,vec2(.19,.20),vec2(.19,.07)),min(segment(t,vec2(.19,.07),vec2(.12,0.)),segment(t,vec2(.12,0.),vec2(-.16,0.)))))));float glyph=1.-smoothstep(.033,.033+max(fwidth(line),.001),line);`;
const segment='float segment(vec2 p,vec2 a,vec2 b){vec2 pa=p-a,ba=b-a;return length(pa-ba*clamp(dot(pa,ba)/dot(ba,ba),0.,1.));}';
export const parkingBayFragment=`uniform float tone;uniform float study;uniform float indoor;uniform float brightness;uniform float available;uniform float hover;varying vec3 p;varying vec2 v;
void main(){${bayShape}float fillAlpha=mix(mix(.16,.055,tone),mix(.38,.48,v.y),hover)*fill;vec3 ink=mix(mix(vec3(.06,.08,.11),vec3(.63,.68,.74),tone),vec3(.021,.242,.82),hover);float indoorFinish=tone*indoor*(1.-hover);fillAlpha=mix(fillAlpha,.07*fill,indoorFinish);fillAlpha*=1.+.40*available*(1.-tone)*(1.-hover);ink=mix(ink,vec3(.11,.115,.125),indoorFinish);ink*=mix(1.,brightness,indoor*(1.-hover));gl_FragColor=vec4(ink,fillAlpha);
#include <colorspace_fragment>
}`;
// The bay receiver owns only its fill. Direction cues are sampled on the
// same route ribbon as the car, so a curved trajectory cannot cross the arrows.
export const parkingTargetFragment=`uniform float tone;uniform float celebrate;uniform float selected;varying vec2 v;
void main(){${bayShape.replace('vec2(4.9,2.8)','vec2(8.,2.8)')}float a=mix(.38,.48,v.y)*fill;vec3 blue=mix(vec3(.021,.242,.82),vec3(.084,.391,1.),v.y);gl_FragColor=vec4(blue,a);
#include <colorspace_fragment>
}`;
export const parkingPathFragment=`varying vec2 v;uniform float tone;uniform float opacity;uniform float activation;uniform float startFade;uniform float endFade;void main(){float aa=max(fwidth(v.x),.008);float edge=1.-smoothstep(1.-aa,1.,abs(v.x*2.-1.));float fade=mix(1.,smoothstep(0.,.16,v.y),startFade)*mix(1.,1.-smoothstep(.74,1.,v.y),endFade);vec3 nearColor=mix(${ink('#2d7fe1')},${ink('#2865ba')},tone),midColor=mix(${ink('#1e91f2')},${ink('#2689d8')},tone),farColor=mix(${ink('#4b86ce')},${ink('#4272aa')},tone);vec3 color=mix(mix(nearColor,midColor,smoothstep(0.,.5,v.y)),farColor,smoothstep(.5,1.,v.y));gl_FragColor=vec4(color,opacity*edge*fade*activation);
#include <colorspace_fragment>
}`;
// Base .014, bay .028, target .032, route .036, diffuse .040, AO .046/.049.
export function createGroundAO(width,length,opacity,core=false,strength={value:1}){
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,length),new THREE.ShaderMaterial({transparent:true,depthWrite:false,toneMapped:false,uniforms:{opacity:{value:opacity},shadowStrength:strength,coverage:{value:1},footprint:{value:0}},vertexShader:vertex,fragmentShader:`varying vec2 v;uniform float opacity;uniform float shadowStrength;uniform float coverage;uniform float footprint;void main(){vec2 p=(v-.5)*2.;float r=length(p);float a=exp(-r*r*${core?'3.6':'2.6'})*(1.-smoothstep(.72,1.,r));vec2 q=max(abs(p)-vec2(.58,.68),0.)/vec2(.42,.32);float chassis=1.-smoothstep(.05,1.,length(q));a=mix(a,chassis,footprint);gl_FragColor=vec4(.004,.006,.009,a*(1.-pow(1.-min(opacity,.99),shadowStrength))*coverage);}`}));
 mesh.rotation.x=-Math.PI/2;mesh.position.y=core?.049:.046;mesh.renderOrder=core?7:6;mesh.userData.draftOwned=true;mesh.userData.baseOpacity=opacity;return mesh;
}
export function createIndoorVehicleContact(car,{ego=false,indoor=true}={}){
 const group=new THREE.Group(),spec=car.userData.vehicleSpec||{},length=spec.length||car.userData.physicalLength||4.62,wheels=spec.wheels||[];
 group.name='Indoor ambient + chassis + four wheel AO';group.userData.indoorContact=true;group.userData.egoContact=ego;
 group.add(createGroundAO((spec.width||1.9)*1.42,length*1.12,ego?.58:.50),createGroundAO((spec.width||1.9)*1.04,length*.97,ego?.90:.85,true));
 group.children[0].scale.set(1.1,1.075,1);
 const centres=wheels.length?wheels.map(w=>[(w.min[0]+w.max[0])/2,(w.min[2]+w.max[2])/2]):[-.88,.88].flatMap(x=>[-1.498,1.405].map(z=>[x,z]));
 for(const [x,z]of centres){const patch=createGroundAO(.46,.62,ego?.92:.85,true);patch.position.x=x;patch.position.z=z;group.add(patch);}
 if(ego){const rear=createGroundAO((spec.width||1.9)*1.18,length*.32,.36);rear.position.z=length*.36;group.add(rear);}
 return group;
}
// Own contact creation, replacement cleanup and pose; return the same vehicles for the post-occlusion pass.
export function syncIndoorVehicleContacts(group,ego,cars,indoor,finish={},tone=1){
 const vehicles=[ego,...cars],liveContacts=new Set(vehicles.map(car=>car.userData.draftIndoorContact));
 for(const old of [...group.children])if(old.userData.indoorContact&&!liveContacts.has(old)){old.removeFromParent();old.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});}
 for(const car of vehicles){
  let contact=car.userData.draftIndoorContact;
  const egoProfile=indoor&&car===ego;
  if(contact&&contact.userData.egoContact!==egoProfile){contact.removeFromParent();contact.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});contact=null;}
  if(!contact){contact=car.userData.draftIndoorContact=createIndoorVehicleContact(car,{ego:egoProfile,indoor});group.add(contact);}
  if(contact){const prefix=car===ego?'ego':'traffic',calibration=indoor?1:car===ego?0:1-tone;contact.children[0].scale.set(1.1*THREE.MathUtils.lerp(1,finish[prefix+'Width']?.value??1,calibration),1.075*THREE.MathUtils.lerp(1,finish[prefix+'Length']?.value??1,calibration),1);contact.traverse(o=>{if(o.material?.uniforms.coverage)o.material.uniforms.coverage.value=THREE.MathUtils.lerp(1,finish[prefix+'Opacity']?.value??1,calibration);});contact.visible=car.visible;contact.position.set(car.position.x,0,car.position.z);contact.rotation.y=car.rotation.y;}
  contact.children[1].material.uniforms.footprint.value=1;
  if(car!==ego)car.children.filter(o=>o.userData.trafficShadow).forEach(o=>o.visible=false);
 }
 return vehicles;
}
// Occlusion must update first so the contact uses this frame's vehicle alpha.
export function updateIndoorContactOpacity(vehicles,strength={value:1},egoStrength=strength,ego=vehicles[0]){
 for(const car of vehicles)car.userData.draftIndoorContact?.traverse(o=>{if(o.material?.uniforms.opacity){o.material.uniforms.opacity.value=o.userData.baseOpacity*(car.userData.draftOcclusionAlpha??1)*trafficContactGrowth(car.userData.draftTrafficGrowth??1);o.material.uniforms.shadowStrength=car===ego?egoStrength:strength;}});
}
// Actual mirrored column pixels keep the footing aligned with its own faces.
// Height attenuates the response; there is no circular root shadow decal.
export function createColumnGroundResponse(world,column){
 const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,toneMapped:false,uniforms:{reflectionMatrix:world.reflectionMatrix,reflectionInverse:world.reflectionInverse,reflectionDepth:world.reflectionDepth,reflectionTexture:world.reflectionTexture,tone:world.parkingTone},vertexShader:`uniform mat4 reflectionMatrix;varying vec4 reflected;varying vec3 ground;
 void main(){vec4 p=modelMatrix*vec4(position,1.);ground=p.xyz;reflected=reflectionMatrix*p;gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`uniform sampler2D reflectionDepth;uniform sampler2D reflectionTexture;uniform mat4 reflectionInverse;uniform float tone;varying vec4 reflected;varying vec3 ground;
 void main(){vec2 uv=reflected.xy/reflected.w;float depth=texture2D(reflectionDepth,uv).x;vec4 source=reflectionInverse*vec4(uv*2.-1.,depth*2.-1.,1.);source/=source.w;float height=max(0.,source.y-ground.y);vec4 color=texture2D(reflectionTexture,uv);float fade=exp(-height/ .78);float valid=step(0.,uv.x)*step(uv.x,1.)*step(0.,uv.y)*step(uv.y,1.);gl_FragColor=vec4(color.rgb/max(color.a,.001),color.a*fade*mix(.32,.22,tone)*valid);
 #include <colorspace_fragment>
 }`});
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(3.6,5.2),material);mesh.rotation.x=-Math.PI/2;mesh.position.set(column.position.x,.030,column.position.z);mesh.renderOrder=3;mesh.name='Column soft mirrored footing';mesh.userData.draftOwned=true;return mesh;
}
export function createIndoorDetails(world){
 const finish=world.draftParkingFinish??={};finish.bay??={value:1};finish.column??={value:1};finish.shadow??={value:1};
 for(const bay of world.parkingBays)if(bay.tile)bay.tile.material.uniforms.brightness=finish.bay;
 for(const column of world.parkingColumns){column.castShadow=false;column.receiveShadow=false;
 if(column.material?.isShaderMaterial){column.material=column.material.clone();column.material.uniforms.tone=world.parkingTone;column.material.uniforms.brightness=finish.column;column.material.fragmentShader="uniform float brightness;\n"+column.material.fragmentShader.replace("gl_FragColor=vec4(c,top*far*.8);","gl_FragColor=vec4(c*brightness,top*far*.8);");column.material.fragmentShader=column.material.fragmentShader.replace('float face=.84+.16*max(n.x,0.);','float face=.62+.38*max(dot(normalize(n),normalize(vec3(.7,.25,.6))),0.);').replace('vec3(.27,.29,.31),vec3(.10)','vec3(.34,.37,.41),vec3(.18,.19,.215)').replace('float top=1.-smoothstep(2.5,3.2,p.y);','float top=mix(1.-smoothstep(2.5,3.2,p.y),1.-smoothstep(.55,3.2,p.y),tone);');}
 const response=createColumnGroundResponse(world,column);world.root.add(response);}
 for(const side of [-1,1])for(const z of world.parkingBays.filter(b=>b.x<0).map(b=>b.z)){const ao=createGroundAO(.44,1.95,.23,false,finish.shadow);ao.position.set(side*8.02,.031,z);world.root.add(ao);}
}

// Hidden bay markers retain sight points without image loads or render callbacks.
export function createParkingSightTarget(number){
 const target=new THREE.Object3D();target.name='Parking space '+number;target.visible=false;return target;
}

// Reuse the real light's shadow map, so direction and shape follow the same light as the body.
// Contact AO remains separate and local; changing opacity cannot create a cast shadow.
export function syncParkingCastShadows(world,vehicles,indoor){
 if(!world.parkingShadow)return;
 if(indoor){const tone=world.draftThemeTone?.value??(world.state.mode==='dark'?1:0);world.parkingShadow.material.opacity=world.draftParkingFinish?.castOpacity?.value??THREE.MathUtils.lerp(.58,.28,tone);world.parkingShadow.material.depthWrite=false;world.parkingShadow.renderOrder=4;
  // VSM includes receivers in its depth pass. This large plane must never cast onto itself.
  world.parkingShadow.customDepthMaterial=world.receiverDepth;
 }
 const stamp=vehicles.map(car=>car.uuid+':'+car.visible).join('|');
 if(stamp!==world.draftParkingCasterStamp){
  // Traffic starts without real casters. Ego assets already define them,
  // including surface details such as plates which intentionally do not cast.
  for(const car of vehicles)if(car!==world.car)car.traverse(o=>{if(o.isMesh&&!o.userData.trafficShadow)o.castShadow=true;});
  world.draftParkingCasterStamp=stamp;world.renderer.shadowMap.needsUpdate=true;
 }
}
