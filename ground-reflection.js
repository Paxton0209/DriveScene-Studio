import * as THREE from 'three';
export function attachGroundReflection(material,world,custom=false){
 const previous=material.onBeforeCompile;
 material.onBeforeCompile=shader=>{
  previous.call(material,shader);
  Object.assign(shader.uniforms,{reflectionMatrix:world.reflectionMatrix,reflectionDepth:world.reflectionDepth,reflectionInverse:world.reflectionInverse,reflectionTexture:world.reflectionTexture,reflectionSharp:world.reflectionSharp,buildingFootprints:world.buildingFootprints,buildingCount:world.buildingCount,reflectionTone:world.environmentTone,reflectionStrength:world.reflectionStrength??={value:1}});
  shader.vertexShader='uniform mat4 reflectionMatrix; varying vec4 vGroundReflection; varying vec3 vGroundWorld;\n'+shader.vertexShader;
  if(custom)shader.vertexShader=shader.vertexShader.replace('gl_Position=','vGroundWorld=p;vGroundReflection=reflectionMatrix*vec4(p,1.);gl_Position=');
  else shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvGroundWorld=(modelMatrix*vec4(transformed,1.)).xyz;vGroundReflection=reflectionMatrix*vec4(vGroundWorld,1.);');
  shader.fragmentShader='uniform sampler2D reflectionDepth;uniform mat4 reflectionInverse;uniform float reflectionTone;uniform float reflectionStrength;uniform sampler2D reflectionTexture;uniform sampler2D reflectionSharp;uniform vec4 buildingFootprints[32];uniform int buildingCount;varying vec4 vGroundReflection;varying vec3 vGroundWorld;\n'+shader.fragmentShader;
  // Fade each reflected building from its own contact height. A nearest-footprint
  // mask can jump to another building and leave a detached bright reflection.
  const reflection=`vec2 reflectionUV=vGroundReflection.xy/vGroundReflection.w;float valid=(1.-smoothstep(.2,1.,abs(vGroundWorld.y)))*step(0.,reflectionUV.x)*step(reflectionUV.x,1.)*step(0.,reflectionUV.y)*step(reflectionUV.y,1.);float reflectedDepth=texture2D(reflectionDepth,reflectionUV).x;vec4 reflectedWorld=reflectionInverse*vec4(reflectionUV*2.-1.,reflectedDepth*2.-1.,1.);float reflectedHeight=max(0.,reflectedWorld.y/reflectedWorld.w-vGroundWorld.y);float proximity=exp(-reflectedHeight/9.);vec4 reflectedSample=mix(texture2D(reflectionSharp,reflectionUV),texture2D(reflectionTexture,reflectionUV),smoothstep(.4,5.,reflectedHeight));vec3 softReflection=reflectedSample.rgb/max(reflectedSample.a,.001);valid*=reflectedSample.a;`;

  if(custom)shader.fragmentShader=shader.fragmentShader.replace('gl_FragColor=vec4(surface,1.);',reflection+'surface=mix(surface,clamp(softReflection,surface*mix(.32,.65,reflectionTone),surface*mix(1.04,1.95,reflectionTone)),mix(.38,.55,reflectionTone)*proximity*valid*reflectionStrength);gl_FragColor=vec4(surface,1.);');
  else shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',reflection+'outgoingLight=mix(outgoingLight,clamp(softReflection,outgoingLight*mix(.32,.65,reflectionTone),outgoingLight*mix(1.04,1.95,reflectionTone)),mix(.38,.55,reflectionTone)*proximity*valid*reflectionStrength);\n#include <opaque_fragment>');
 };
 material.customProgramCacheKey=()=> 'localized-building-reflection-r19-'+custom;
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
