import {SR_QUALITY_MIX} from './sr-quality.js';
// A continuous sky lobe on the road, with no puddle masks or image patches.
export function installSrRoadSheen(world){
 if(!SR_QUALITY_MIX)return;
 const material=world.mat.road,previous=material.onBeforeCompile,cache=material.customProgramCacheKey();
 material.onBeforeCompile=function(shader,renderer){
  previous.call(this,shader,renderer);
  shader.uniforms.srRoadTone=world.environmentTone;
  shader.uniforms.srRoadSky=world.sky.material.uniforms.bottom;
  shader.fragmentShader='uniform float srRoadTone;uniform vec3 srRoadSky;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`float srFacing=clamp(dot(normal,normalize(vViewPosition)),0.,1.);
   float srFresnel=.04+.96*pow(1.-srFacing,4.);
   float srSkyLuma=dot(srRoadSky,vec3(.2126,.7152,.0722));
   // Dark bitumen foundation plus a broad dielectric sky reflection.
   // The response is continuous across the entire road, with no puddle islands.
   vec3 srAsphalt=outgoingLight*.58;
   vec3 srSatin=mix(srAsphalt,vec3(srSkyLuma*.30),srFresnel*.42);
   outgoingLight=mix(outgoingLight,srSatin,1.-srRoadTone);
   #include <opaque_fragment>`);
 };
 material.customProgramCacheKey=()=>cache+'-sr-road-satin-2';
}
