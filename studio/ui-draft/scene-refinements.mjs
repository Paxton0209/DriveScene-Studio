function replace(source,from,to){const count=source.split(from).length-1;if(count!==1)throw Error('Scene refinement baseline mismatch: expected 1 anchor, found '+count+': '+from.slice(0,80));return source.replace(from,to)}

export function refineWorld(source){
 source="import {brakingSpeed,requestedJunctionTiming,junctionLiftStart} from '../ui-draft/junction-playback.js';\n"+source;
 // Light-mode ground-level Driving roads: reduce material radiance by 10%.
 // Apply after palette assignment so all palettes and theme restores agree.
 source=replace(source,'  this.mat.environmentBuilding.color.copy(this.mat.building.color);',"  if(!dark&&['02','09','13'].includes(id))this.mat.road.color.multiplyScalar(.9);\n  this.mat.environmentBuilding.color.copy(this.mat.building.color);");
 // Bound water radiance independently from exposure and reflected sky.
 source=replace(source,"water:['#7695ae','#304146']","water:['#218fc1','#142733']");
 source=replace(source,'shader.uniforms.waterMix=this.waterMix;',"shader.uniforms.waterMix=this.waterMix;shader.uniforms.coastTone=this.draftThemeTone??this.environmentTone;shader.uniforms.coastCloud=this.draftCoastCloud??={value:0};");
 source=replace(source,'uniform float waterMix;uniform sampler2D coastReflectionTexture;','uniform float waterMix;uniform float coastTone;uniform float coastCloud;uniform sampler2D coastReflectionTexture;');
 source=replace(source,'outgoingLight=mix(outgoingLight,reflected,${strength.toFixed(3)}*waterMix);',`float night=clamp(coastTone,0.,1.);vec3 sea=mix(vec3(.055,.14,.25),vec3(.026,.035,.043),night);vec3 reflectionLimit=mix(vec3(.30,.37,.44),vec3(.045,.052,.06),night);float cloud=clamp(coastCloud,0.,1.);sea=mix(sea,mix(vec3(.10,.135,.15),vec3(.029,.035,.039),night),cloud);reflectionLimit=mix(reflectionLimit,mix(vec3(.18,.22,.24),vec3(.038,.044,.048),night),cloud);float grazing=pow(1.-clamp(dot(normalize(vViewPosition),normal),0.,1.),5.);float skyWeight=mix(.10+.34*grazing,.08+.13*grazing,night);vec3 coastal=mix(sea,min(reflected,reflectionLimit),skyWeight);outgoingLight=mix(outgoingLight,coastal,waterMix);`);
 source=replace(source,'submittedAt-(this.lastMovingSubmit??-Infinity)<25','submittedAt-(this.lastMovingSubmit??-Infinity)<(this.draftManaged?0:25)');
 source=replace(source,'motion.sample=sample;motion.tick=tick;motion.frame=requestAnimationFrame(tick);','motion.speedAt=elapsed=>approach&&forward?brakingSpeed(elapsed,{speed:vehicleSpeed,cruise:vehicleCruiseTime,brake:vehicleBrakeTime,scale:.969}):0;motion.sample=sample;motion.tick=tick;motion.frame=requestAnimationFrame(tick);');
 source=replace(source,'const vehicleStopTime=timing.vehicleStopTime;','const published=requestedJunctionTiming(travel),physicalBrakeTime=published.brake;const vehicleStopTime=published.stop;');
 // Leave 24m of additional approach before the shared Cross/T braking sequence.
 source=replace(source,"options.junctionPosition==='approaching'?14:","options.junctionPosition==='approaching'?38:");
 source=replace(source,'stopNearEdge+2.5-frontOffset','(this.junctionDimensions?.markingEnd??-22.55)+(this.junctionDimensions?.stopLineWidth??.18)/2+.5-frontOffset');
 source=replace(source,'const liftStart=defaultLiftStart;','const liftStart=approach&&forward?junctionLiftStart(travel):defaultLiftStart;');
 // No anticipatory prelude before the road-position trigger. The shared quintic easing
 // starts and ends with zero camera velocity/acceleration over the remaining trip.
 source=replace(source,'const preludeDuration=leadDuration,preludeAmount=.07,preludeStart=liftStart-preludeDuration;',`if(approach&&forward){const u=THREE.MathUtils.clamp((time-liftStart)/liftDuration,0,1);return u;}const preludeDuration=leadDuration,preludeAmount=.07,preludeStart=liftStart-preludeDuration;`);
 source=replace(source,'motion.liftDelay=(liftStart-leadDuration)*.969*MOTION_TIME_SCALE;','motion.liftDelay=approach&&forward?liftStart*.969:(liftStart-leadDuration)*.969*MOTION_TIME_SCALE;');
 source=replace(source,'const duration=approach&&forward?timing.duration:baseDuration','const duration=approach&&forward?vehicleStopTime:baseDuration');
 source=replace(source,'Math.min(1.6,vehicleStopTime*.5)','physicalBrakeTime');
 source=replace(source,'1000*MOTION_TIME_SCALE;motion.liftDelay=','1000*(approach&&forward?1:MOTION_TIME_SCALE);motion.liftDelay=');
 source=replace(source,'motion.elapsed/1000/MOTION_TIME_SCALE/(approach&&forward?.969:1)','motion.elapsed/1000/(approach&&forward?.969:MOTION_TIME_SCALE)');
 // One distance curve and the live sky color keep every intermediate theme
 // frame joined. A fixed night-color preblend produced a dark horizon stripe.
 source=replace(source,'${lightQuality.aerialStart.toFixed(1)})/${lightQuality.aerialSpan.toFixed(1)}','125.)/430.');
 source=replace(source,'    if(darkAerialPerspective>.5)t=clamp((vFogDepth-65.)/235.,0.,1.);','');
 source=replace(source,'gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);','gl_FragColor.rgb=mix(gl_FragColor.rgb,linearToOutputTexel(vec4(fogColor,1.)).rgb,fogFactor);');
 source=replace(source,'float horizonDistance=length(vGroundWorld.xz-cameraPosition.xz);float horizonAerial=smoothstep(70.,280.,horizonDistance)*darkAerialPerspective;outgoingLight=mix(outgoingLight,sharedHorizon,horizonAerial);','');
 // Restore the published v0.18 neutral night sky exactly. The shared
 // horizon continues to feed distant fog; light-mode values stay unchanged.
 source=replace(source,'this.sky.material.uniforms.range.value=dark?.42:.20;','this.sky.material.uniforms.range.value=dark?.20:.20;');
 source=replace(source,"this.sky.material.uniforms.bottom.value.set(dark?'#2b2e32':'#dce5ee');","this.sky.material.uniforms.bottom.value.set(dark?'#373a3e':'#dce5ee');");
 source=replace(source,"(dark?.16:.22);","0;");
 source=replace(source,'bodyContact.material.uniforms.opacity.value=SR_QUALITY_MIX>0?(dark?.28:.36):(dark?.30:.38);','bodyContact.material.uniforms.opacity.value=isIndoor?0:(dark?.95:.99);');
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

export function refineRainGround(source){
 const start=source.indexOf('  // A road crown drains'),end=source.indexOf('\n }',start);
 if(start<0||end<0)throw Error('Rain ground baseline mismatch');
 return source.slice(0,start)+`  // Keep a uniform wet surface without puddle islands or water stains.
  return color*(1.-weatherAmount*level*.5);`+source.slice(end);
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
 float cover=roof>.5?snowUp*.72:level*settling*.30;
`;
 return (source.slice(0,start)+snow+source.slice(end)).replace("const KEY='-weather-ground-7';","const KEY='-weather-ground-draft-continuous-1';").replace('animated road-width drainage; stable irregular roof and crown snow patches','animated road-width drainage; continuous normal-weighted snow coating');
}

export function refineActivation(source){
 // Ramp mainlines are centred on x=0 and have their own fixed road geometry.
 // layoutVisual can still contain the previous Road scene's lane width.
 source=replace(source,'activationCarriageway(state,visualWidth)','activationCarriageway(state,visualWidth,rampWidth)');
 source=replace(source,"if(state?.id==='03')", "if(['06','07'].includes(state?.id)){const half=(Number.isFinite(rampWidth)?rampWidth:7.4)/2;return {min:-half+.315,max:half-.315};}if(state?.id==='03')");
 source=replace(source,'return {min:-5.55,max:5.55};','return {min:-5.235,max:5.235};');
 source=replace(source,'activationCarriageway(world.state,world.layoutVisual?.width)','activationCarriageway(world.state,world.layoutVisual?.width,world.rampDimensions?.width)');
 source=replace(source,"if(state?.id==='03')","if(['10','14','15','16','17','18','19'].includes(state?.id))return {min:-3.3,max:3.3};if(state?.id==='03')");
 source=source.replace("['02','09','03'].includes(world.state?.id)","!!world.state&&!['05','08'].includes(world.state.id)").replace(')*edge*nearFade*fade*mix',')*.8*edge*nearFade*fade*mix');
 source=replace(source,'new THREE.PlaneGeometry(24,132)','new THREE.PlaneGeometry(24,320)');
 source=replace(source,'world.car.position.z-60','world.car.position.z-145');
 source=replace(source,'float nearFade=smoothstep(-3.,9.,distance);','float nearFade=smoothstep(-3.,9.,distance);float farFade=1.-smoothstep(68.,126.,distance);');
 source=replace(source,'pow(max(0.,1.-progress),.85);','(1.-smoothstep(.40,1.,progress));');
 source=replace(source,'*edge*nearFade*fade*mix','*edge*nearFade*farFade*fade*mix');
 return source;
}
