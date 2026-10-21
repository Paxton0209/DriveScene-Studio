import {SR_QUALITY_MIX} from './sr-quality.js';
import * as THREE from 'three';
export function groundReflectionProfile(study=false,kind=''){
 if(study&&kind==='road')return {blend:.18,floor:.72,ceiling:1.25,heightFade:.9,soften:1};
 if(study&&['ground','pavement','curb'].includes(kind))return {blend:.48,floor:.40,ceiling:1.0,heightFade:7.5,soften:.28};
 return {blend:.38,floor:.32,ceiling:1.04,heightFade:9,soften:0};
}
export function attachGroundReflection(material,world,custom=false){
 const previous=material.onBeforeCompile;
 const kind=Object.keys(world.mat||{}).find(key=>world.mat[key]===material)||'';
 const profile=groundReflectionProfile(SR_QUALITY_MIX>0,kind);
 const satinRoad=SR_QUALITY_MIX>0&&kind==='road';
 const reflectionSource=satinRoad?{reflectionMatrix:world.carReflectionMatrix,reflectionDepth:world.carReflectionDepth,reflectionInverse:world.carReflectionInverse,reflectionTexture:world.carReflectionTexture,reflectionSharp:world.carReflectionSharp}:world;
 const satinSurround=SR_QUALITY_MIX>0&&['ground','pavement','curb'].includes(kind);
 material.onBeforeCompile=shader=>{
  previous.call(material,shader);
  Object.assign(shader.uniforms,{reflectionMatrix:reflectionSource.reflectionMatrix,reflectionDepth:reflectionSource.reflectionDepth,reflectionInverse:reflectionSource.reflectionInverse,reflectionTexture:reflectionSource.reflectionTexture,reflectionSharp:reflectionSource.reflectionSharp,buildingFootprints:world.buildingFootprints,buildingCount:world.buildingCount,reflectionTone:world.environmentTone,reflectionStrength:world.reflectionStrength??={value:1}});
  if(satinRoad){shader.uniforms.vehicleFootprints=world.vehicleFootprints;shader.uniforms.vehicleReflectionCount=world.vehicleReflectionCount;}
  shader.vertexShader='uniform mat4 reflectionMatrix; varying vec4 vGroundReflection; varying vec3 vGroundWorld;\n'+shader.vertexShader;
  if(custom)shader.vertexShader=shader.vertexShader.replace('gl_Position=','vGroundWorld=p;vGroundReflection=reflectionMatrix*vec4(p,1.);gl_Position=');
  else shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvGroundWorld=(modelMatrix*vec4(transformed,1.)).xyz;vGroundReflection=reflectionMatrix*vec4(vGroundWorld,1.);');
  shader.fragmentShader='uniform sampler2D reflectionDepth;uniform mat4 reflectionInverse;uniform float reflectionTone;uniform float reflectionStrength;uniform sampler2D reflectionTexture;uniform sampler2D reflectionSharp;uniform vec4 buildingFootprints[32];uniform int buildingCount;varying vec4 vGroundReflection;varying vec3 vGroundWorld;\n'+shader.fragmentShader;
  if(satinRoad)shader.fragmentShader='uniform vec4 vehicleFootprints[12];uniform int vehicleReflectionCount;\n'+shader.fragmentShader;
  // Fade each reflected building from its own contact height. A nearest-footprint
  // mask can jump to another building and leave a detached bright reflection.
  const reflection=`vec2 reflectionUV=vGroundReflection.xy/vGroundReflection.w;float valid=${satinRoad?'1.':'(1.-smoothstep(.2,1.,abs(vGroundWorld.y)))'}*step(0.,reflectionUV.x)*step(reflectionUV.x,1.)*step(0.,reflectionUV.y)*step(reflectionUV.y,1.);float reflectedDepth=texture2D(reflectionDepth,reflectionUV).x;vec4 reflectedWorld=reflectionInverse*vec4(reflectionUV*2.-1.,reflectedDepth*2.-1.,1.);float reflectedHeight=max(0.,reflectedWorld.y/reflectedWorld.w-vGroundWorld.y);float proximity=exp(-reflectedHeight/mix(${profile.heightFade.toFixed(2)},9.,reflectionTone));vec4 reflectedSample=mix(texture2D(reflectionSharp,reflectionUV),texture2D(reflectionTexture,reflectionUV),smoothstep(.4,5.,reflectedHeight));${profile.soften?'reflectedSample=mix(reflectedSample,texture2D(reflectionTexture,reflectionUV),'+profile.soften.toFixed(2)+'*(1.-reflectionTone));':''}vec3 softReflection=reflectedSample.rgb/max(reflectedSample.a,.001);valid*=reflectedSample.a;${satinRoad?'float footprintMask=0.;for(int i=0;i<12;i++){if(i>=vehicleReflectionCount)break;vec4 f=vehicleFootprints[i];vec2 q=abs(vGroundWorld.xz-f.xy)/f.zw;footprintMask=max(footprintMask,(1.-smoothstep(.65,1.,q.x))*(1.-smoothstep(.65,1.,q.y)));}valid*=footprintMask*smoothstep(.02,.14,reflectedSample.a);':''}${satinSurround?'valid*=smoothstep(.01,.12,reflectedSample.a);':''}${satinSurround?'softReflection=mix(softReflection,vec3(dot(softReflection,vec3(.2126,.7152,.0722))),.20*(1.-reflectionTone));':''}${['road','ground','pavement'].some(key=>world.mat?.[key]===material)?'float reflectionLuma=dot(softReflection,vec3(.2126,.7152,.0722));softReflection=mix(softReflection,vec3(reflectionLuma),reflectionTone);':''}`;

  if(custom)shader.fragmentShader=shader.fragmentShader.replace('gl_FragColor=vec4(surface,1.);',reflection+'surface=mix(surface,clamp(softReflection,surface*mix(.32,.65,reflectionTone),surface*mix(1.04,1.95,reflectionTone)),mix(.38,.55,reflectionTone)*proximity*valid*reflectionStrength);gl_FragColor=vec4(surface,1.);');
  else shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',reflection+`outgoingLight=mix(outgoingLight,clamp(softReflection,outgoingLight*mix(${profile.floor.toFixed(2)},.65,reflectionTone),outgoingLight*mix(${profile.ceiling.toFixed(2)},1.95,reflectionTone)),mix(${profile.blend.toFixed(2)},${satinRoad?'.28':'.55'},reflectionTone)*proximity*valid*reflectionStrength);\n#include <opaque_fragment>`);
 };
 material.customProgramCacheKey=()=> 'localized-building-reflection-r28-'+kind+'-'+custom;
}
export function createParkingSurface(world,tone,outdoor=false){
 const swatches={balanced:[[.37,.435,.52],[.37,.435,.52],[.54,.62,.72]],current:[[.48,.59,.77],[.26,.35,.48],[.66,.94,1.45]],cool:[[.59,.61,.64],[.43,.46,.50],[.72,.74,.77]],neutral:[[.61,.62,.63],[.46,.47,.48],[.72,.73,.74]],warm:[[.64,.62,.59],[.49,.47,.44],[.75,.73,.69]],soft:[[.67,.68,.69],[.53,.54,.55],[.77,.78,.79]]};
 const c=swatches[world.palette]||swatches.current;
 const floor=new THREE.ShaderMaterial({uniforms:{tone,outdoor:{value:outdoor?1:0},horizon:world.sky.material.uniforms.bottom,base:{value:new THREE.Vector3(...c[0])},centerTone:{value:new THREE.Vector3(...c[1])},farTone:{value:new THREE.Vector3(...c[2])}},toneMapped:false,depthWrite:true,vertexShader:'varying vec3 p;void main(){p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}',fragmentShader:`uniform float tone;uniform float outdoor;uniform vec3 horizon;uniform vec3 base;uniform vec3 centerTone;uniform vec3 farTone;varying vec3 p;
float grain(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(grain(i),grain(i+vec2(1.,0.)),f.x),mix(grain(i+vec2(0.,1.)),grain(i+vec2(1.)),f.x),f.y);}
void main(){
 float radius=length(p.xz*vec2(.055,.038));float pool=exp(-radius*radius*.8);
 vec3 dark=mix(vec3(.022),vec3(.027),pool);
 dark*=mix(vec3(1.),vec3(.94,1.,1.09),outdoor);
 float center=exp(-dot(vec2(p.x*.10,(p.z+3.)*.08),vec2(p.x*.10,(p.z+3.)*.08))*1.2);
 vec3 light=mix(base,centerTone,center*.68);
 // Broad overhead illumination, with subdued, stable concrete variation.
 vec2 lightOffset=(p.xz-vec2(-4.,-6.))/vec2(7.,13.);
 float overhead=exp(-dot(lightOffset,lightOffset));
 float sideShade=smoothstep(5.,15.,abs(p.x));
 float microVariation=(noise(p.xz*22.)-.5)*.0015+(noise(p.xz*.65)-.5)*.002;
 light*=.975+.035*overhead-.015*sideShade;
 light+=vec3(microVariation);
 float distanceFade=smoothstep(24.,95.,-p.z);
 light=mix(light,farTone,distanceFade);
 vec3 surface=mix(light,dark,tone);float courtyardDistance=max(0.,-p.z);float aerial=1.-exp(-courtyardDistance/32.);surface=mix(surface,horizon,outdoor*aerial);gl_FragColor=vec4(surface,1.);
#include <colorspace_fragment>}`});
 attachGroundReflection(floor,world,true);return floor;
}
