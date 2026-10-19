// Match the user's approved v0.18 cool-gray ground, after lighting, reflections,
// weather and fog. Fitted linear RGB ratios preserve luminance, while avoiding
// the perceptually warm equal-channel gray beside cool building faces.
export function installNeutralDarkSurfaces(world){
 for(const key of ['road','ground','pavement','curb']){
  const material=world.mat[key],previous=material.onBeforeCompile,cache=material.customProgramCacheKey();
  material.onBeforeCompile=function(shader,renderer){
   previous.call(this,shader,renderer);
   shader.uniforms.neutralGroundTone=world.environmentTone;
   shader.fragmentShader='uniform float neutralGroundTone;\n'+shader.fragmentShader.replace('#include <fog_fragment>',`#include <fog_fragment>
    float neutralGroundLuma=dot(gl_FragColor.rgb,vec3(.2126,.7152,.0722));
    float neutralGroundMix=neutralGroundTone;
    #ifdef USE_FOG
     neutralGroundMix*=1.-fogFactor;
    #endif
    gl_FragColor.rgb=mix(gl_FragColor.rgb,neutralGroundLuma*vec3(.92,1.035,1.16)*${key==='ground'?'.88':'1.0'},neutralGroundMix);
   `);
  };
  material.customProgramCacheKey=()=>cache+'-approved-dark-ground-3';
 }
}
