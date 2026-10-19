// Retain the original Volvo glazing; roll off only the blown-out bright lobe.
export function glazingLuminance(value){return value<=.028?value:.028+.027*(1-Math.exp(-Math.max(0,value-.028)/.027));}
export function softenXc90Glazing(material){
 if(material.userData.glazingHighlightFixed)return;
 const compile=material.onBeforeCompile,key=material.customProgramCacheKey();
 material.onBeforeCompile=function(shader,renderer){
  compile.call(this,shader,renderer);
  shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`
   float glazingLuma=dot(outgoingLight,vec3(.2126,.7152,.0722));
   float glazingSoft=.028+.027*(1.-exp(-max(0.,glazingLuma-.028)/.027));
   outgoingLight*=min(1.,glazingSoft/max(glazingLuma,.0001));
   #include <opaque_fragment>`);
 };
 material.customProgramCacheKey=()=>key+'-xc90-glazing-rolloff-1';
 material.userData.glazingHighlightFixed=true;
}
