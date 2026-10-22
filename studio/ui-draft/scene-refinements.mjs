function replace(source,from,to){if(!source.includes(from))throw Error('Scene refinement baseline mismatch: '+from.slice(0,80));return source.replace(from,to)}

export function refineWorld(source){
 source="import {brakingSpeed} from '../ui-draft/junction-playback.js';\n"+source;
 source=replace(source,'submittedAt-(this.lastMovingSubmit??-Infinity)<25','submittedAt-(this.lastMovingSubmit??-Infinity)<(this.draftManaged?12:25)');
 source=replace(source,'motion.sample=sample;motion.tick=tick;motion.frame=requestAnimationFrame(tick);','motion.speedAt=elapsed=>approach&&forward?brakingSpeed(elapsed,{speed:vehicleSpeed,cruise:vehicleCruiseTime,brake:vehicleBrakeTime,scale:.969*MOTION_TIME_SCALE}):0;motion.sample=sample;motion.tick=tick;motion.frame=requestAnimationFrame(tick);');
 source=replace(source,'gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);','gl_FragColor.rgb=mix(gl_FragColor.rgb,linearToOutputTexel(vec4(fogColor,1.)).rgb,fogFactor);');
 source=replace(source,'if(darkAerialPerspective>.5)t=clamp((vFogDepth-65.)/235.,0.,1.);','t=mix(t,clamp((vFogDepth-65.)/235.,0.,1.),darkAerialPerspective);');
 source=replace(source,"this.sky.material.uniforms.top.value.set(dark?'#202225':'#96bde0');","this.sky.material.uniforms.top.value.set(dark?'#2e3134':'#96bde0');");
 source=replace(source,"this.sky.material.uniforms.bottom.value.set(dark?'#2b2e32':'#dce5ee');","this.sky.material.uniforms.bottom.value.set(dark?'#35383c':'#dce5ee');");
 source=replace(source,"(dark?.16:.22);","(dark?.34:.40);");
 source=replace(source,'bodyContact.material.uniforms.opacity.value=SR_QUALITY_MIX>0?(dark?.28:.36):(dark?.30:.38);','bodyContact.material.uniforms.opacity.value=isIndoor?(dark?.48:.50):SR_QUALITY_MIX>0?(dark?.28:.36):(dark?.30:.38);');
 source=replace(source,'this.weatherSignature,this.drivingFrame]);','this.weatherSignature,(this.vegetation?.children.length||this.environmentGrowth.roadworks.value>0)?this.drivingFrame:0]);');
 source=replace(source,'reflectedCar,this.drivingFrame].join','reflectedCar,this.buildingPlacements.length?this.drivingFrame:0].join');
 return source;
}

export function refineWeather(source){
 const start=source.indexOf('const skyFragment='),end=source.indexOf('\n\nconst mirror=',start);
 if(start<0||end<0)throw Error('Weather shader baseline mismatch');
 const fragment=`const skyFragment=\`varying vec3 v;uniform vec3 top;uniform vec3 bottom;uniform float range;uniform vec3 weatherTop;uniform vec3 cloudLight;uniform vec3 cloudShade;uniform float amount;uniform float coverage;uniform float cloudOpacity;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 cell=floor(p),f=fract(p);f=f*f*f*(f*(f*6.-15.)+10.);return mix(mix(hash(cell),hash(cell+vec2(1.,0.)),f.x),mix(hash(cell+vec2(0.,1.)),hash(cell+1.),f.x),f.y);}
void main(){
 vec3 d=normalize(v);float t=smoothstep(0.,range,d.y);
 vec3 color=mix(bottom,mix(top,weatherTop,amount),t);
 float broad=noise(d.xz*.85+vec2(d.y*.45,4.));
 float upper=smoothstep(.015,.22,d.y);
 vec3 cloud=mix(cloudShade,cloudLight,smoothstep(.15,.85,broad));
 color=mix(color,cloud,upper*cloudOpacity*amount*.18);
 gl_FragColor=vec4(color,1.);
 #include <colorspace_fragment>
}\`;`;
 const result=source.slice(0,start)+fragment+source.slice(end);
 return replace(result,'u.weatherTop.value.copy(u.top.value).lerp(p.top,1.15);u.cloudLight.value.copy(p.light);u.cloudShade.value.copy(p.shade);u.coverage.value=p.coverage;u.cloudOpacity.value=p.opacity;',"const themeTone=world.draftThemeTone?.value??(dark?1:0),light=WEATHER[weather].light,night=WEATHER[weather].dark;u.weatherTop.value.copy(light.top).lerp(night.top,themeTone).sub(u.top.value).multiplyScalar(1.15).add(u.top.value);u.cloudLight.value.copy(light.light).lerp(night.light,themeTone);u.cloudShade.value.copy(light.shade).lerp(night.shade,themeTone);u.coverage.value=p.coverage;u.cloudOpacity.value=THREE.MathUtils.lerp(light.opacity,night.opacity,themeTone);");
}

export function refineSnowGround(source){
 const start=source.indexOf(' // Thin settling snow favours'),end=source.indexOf(' float accumulation=',start);
 if(start<0||end<0)throw Error('Snow ground baseline mismatch');
 const snow=`
 float distSnow=abs(world.x-weatherRoad.x)/max(weatherRoad.y,1.);
 float edgeSnow=smoothstep(.55,1.,distSnow);
 float settling=mix(.3+.7*edgeSnow,1.,max(clamp(roof,0.,1.),1.-weatherRoad.z));
 float crown=roof>1.5?1.:0.;
 float snowUp=smoothstep(mix(.54,.16,crown),mix(.92,.85,crown),up);
 float cover=roof>.5?snowUp*.72:level*settling;
`;
 return (source.slice(0,start)+snow+source.slice(end)).replace("const KEY='-weather-ground-7';","const KEY='-weather-ground-draft-continuous-1';").replace('animated road-width drainage; stable irregular roof and crown snow patches','animated road-width drainage; continuous normal-weighted snow coating');
}

export function refineActivation(source){
 source=replace(source,'new THREE.PlaneGeometry(24,132)','new THREE.PlaneGeometry(24,320)');
 source=replace(source,'world.car.position.z-60','world.car.position.z-145');
 source=replace(source,'float nearFade=smoothstep(-3.,9.,distance);','float nearFade=smoothstep(-3.,9.,distance);float farFade=1.-smoothstep(68.,126.,distance);');
 source=replace(source,'pow(max(0.,1.-progress),.85);','(1.-smoothstep(.40,1.,progress));');
 source=replace(source,'*edge*nearFade*fade*mix','*edge*nearFade*farFade*fade*mix');
 return source;
}
