// Material-only indoor finish. Shared engine sources and outdoor rendering stay intact.
function once(source,from,to){if(source.split(from).length!==2)throw Error('Indoor finish anchor mismatch: '+from.slice(0,90));return source.replace(from,to);}
export function refineIndoorFinish(name,source){
 if(name==='world.js'){
  source=once(source,"this.sky.material.uniforms.top.value.set(dark?'#202225':'#96bde0');","this.sky.material.uniforms.top.value.set(dark?(isIndoor?'#2e3036':'#202225'):(isIndoor?'#c0c6ce':'#96bde0'));");
  source=once(source,"this.sky.material.uniforms.bottom.value.set(dark?'#373a3e':'#dce5ee');","this.sky.material.uniforms.bottom.value.set(dark?(isIndoor?'#2e3036':'#373a3e'):(isIndoor?'#b7bfc9':'#dce5ee'));");
  source=once(source,"this.fill.intensity=.35;}","this.fill.intensity=.35;if(dark){this.hemi.color.set('#dadbdd');this.sun.color.set('#e5e5e7');this.fill.color.set('#ccced1');}}");
 }
 if(name==='parking-reference.js')source=once(source,'createParkingSurface(world,tone,true)','createParkingSurface(world,tone,false)');
 if(name==='ground-reflection.js'){
  source=once(source,'uniforms:{tone,outdoor:{value:outdoor?1:0},','uniforms:{tone,groundBrightness:(world.draftParkingFinish??={}).ground??={value:1},floorBlue:world.draftParkingFinish.blue??={value:0},indoor:{value:outdoor?0:1},outdoor:{value:1},');
  source=once(source,'uniform float tone;uniform float outdoor;uniform vec3 horizon;','uniform float tone;uniform float groundBrightness;uniform float floorBlue;uniform float indoor;uniform float outdoor;uniform vec3 horizon;');
  source=once(source,'#include <colorspace_fragment>}`});',`// A broad, world-space light pool supplies volume without a mirror image.
 float poolIndoor=smoothstep(-65.,15.,p.z);
 vec3 indoorFloor=mix(vec3(.033,.035,.040),vec3(.046,.049,.057),poolIndoor);
 float indoorAerial=smoothstep(35.,150.,-p.z);
 gl_FragColor.rgb=mix(gl_FragColor.rgb,indoorFloor,tone*indoor);
 // Small blue steps preserve luminance; brightness remains an independent axis.
 float floorLuma=dot(gl_FragColor.rgb,vec3(.2126,.7152,.0722));
 vec3 blueTint=vec3(.82,.99,1.63);blueTint/=dot(blueTint,vec3(.2126,.7152,.0722));
 gl_FragColor.rgb=mix(gl_FragColor.rgb,mix(gl_FragColor.rgb,floorLuma*blueTint,floorBlue)*groundBrightness,indoor);
 // Join the unmodified live background after all floor colour operations.
 gl_FragColor.rgb=mix(gl_FragColor.rgb,horizon,indoor*indoorAerial);
#include <colorspace_fragment>}\x60});`);
 }
 return source;
}
