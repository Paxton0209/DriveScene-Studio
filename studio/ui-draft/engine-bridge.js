import {syncVehicleCastFade} from './vehicle-cast-shadow.js';
import {indoorShadowLimits,syncIndoorShadowLight,syncIndoorReflectionResolution} from './indoor-shadow-settings.js';
import {syncRoadShadow} from './road-shadow-settings.js';
import {createIndoorDither} from './indoor-dither.js';
import {unlockIndicatorSound,stopIndicatorSound,setIndicatorMuted} from './assist-sound.js';
import {createVehicleWeather} from './vehicle-weather.js';
import {createJunctionFeedback} from './junction-feedback.js';
import * as THREE from 'three';
import {createParkingMotion,installRollingWheels,isParking} from './scene-experience.js';
import {cameraMetadata,perspectiveSvg,renderDepth} from '../engine/export-scene.js';
import {canvasPng,depthPng,zipFiles} from '../engine/export-files.js';
import {previewPixels} from './pixel-resolution.js';
import {pathSoundStatus} from '../engine/theme-sound.js';
import {frameStep} from './frame-clock.js';
import {appearanceSnapshot,createAppearanceBlend} from './theme-blend.js';

export function makeRandom(seed){
 let value=seed>>>0;
 const next=()=>{value=(value+0x6d2b79f5)>>>0;let mixed=value;mixed=Math.imul(mixed^(mixed>>>15),mixed|1);mixed^=mixed+Math.imul(mixed^(mixed>>>7),mixed|61);return ((mixed^(mixed>>>14))>>>0)/4294967296};
 next.state=()=>value;next.restore=state=>{value=state>>>0};next.reset=nextSeed=>{if(Number.isFinite(nextSeed))seed=nextSeed;value=seed>>>0};return next;
}

export function installDraftBridge({world,features,drive,traffic,api,current,updateURL}){
 let playing=['road','elevated','ramp'].includes(current())&&!matchMedia('(prefers-reduced-motion: reduce)').matches,frame=0,last=0,accumulator=0,exporting=false,cancelled=false,idlePaused=false,lastInput=performance.now(),loopTime=0,junctionPoses=null,origin=null,originRoot=null,themeHeld=false,audioHeld=false;
 // Only the most recently operated preview may own the indicator cue.
 let indicatorOwnsAudio=false;
 const indicatorChannel=typeof BroadcastChannel==='function'?new BroadcastChannel('drivescene-indicator-audio'):null;
 function claimIndicatorAudio(){indicatorOwnsAudio=true;indicatorChannel?.postMessage('claim');}
 if(indicatorChannel)indicatorChannel.onmessage=()=>{indicatorOwnsAudio=false;stopIndicatorSound()};
 const query=new URLSearchParams(location.search);if(query.get('paused')==='1')playing=false;
 world.draftManaged=true;world.draftTime=performance.now();drive.pause();
  // The sampled junction camera does not own world.cameraMotion.
  world.draftJunctionPlaying=()=>playing&&!themeHeld&&current()==='junction';
 const parking=createParkingMotion(world),junctionFeedback=createJunctionFeedback(world);const appearance=createAppearanceBlend(),draw=world.renderFrame;let renderedFrames=0;world.draftThemeTone={value:(world.state?.mode||query.get('mode'))==='dark'?1:0};
 const vehicleWeather=createVehicleWeather(world),indoorDither=createIndoorDither();world.composer.addPass(indoorDither);world.draftIndoorDither=indoorDither;
 // Prepare the final shader variants before the existing offscreen vehicle warmup.
 world.draftPrepareVehicle=car=>{installRollingWheels(car);vehicleWeather.install(car);};
 world.renderFrame=function(...args){syncIndoorReflectionResolution(world,true);syncRoadShadow(current(),world.draftRoadShadowStrength??1);syncIndoorShadowLight(world,isParking(world.state?.id));indoorDither.enabled=['10','14','15','16'].includes(world.state?.id);if(world.state&&!world.suspended&&!document.hidden){appearance.sample(performance.now());world.draftAudioSuppressed=exporting||themeHeld||audioHeld||!indicatorOwnsAudio||current()!=='junction'||!window.parent.document.hasFocus();junctionFeedback.update(features.get().path);parking.sync({traffic:world.draftTrafficEnabled??false,assist:features.get().path});const rolling=installRollingWheels(world.car);if(rolling){rolling.steer.value=world.draftWheelSteer||0;rolling.distance.value=isParking(world.state.id)?(world.draftWheelDistance||0):current()==='junction'?-world.car.position.z:world.drivingDistance||0;}vehicleWeather.update();renderedFrames++}syncVehicleCastFade(world);return draw.apply(this,args)};
 const get=({audit=true}={})=>{const driving=drive.audit();return ({ready:!!world.root&&!world.initializingScene,playing:playing&&!document.hidden,requestedPlaying:playing,exporting,distance:driving.distance,originEpoch:Math.floor(driving.distance/1000),loopTime,scene:current(),features:features.get(),...(audit?{wheels:world.car.userData.draftRolling?.affected||0}:{}),...(audit?{path:features.audit().path,objects:world.scene.getObjectsByProperty('isObject3D',true).length}:{}),parking:isParking(world.state?.id)?parking.get():null,junction:current()==='junction'?{liftDistance:25,complete:!!junctionPoses&&loopTime*1000>=junctionPoses.motion.duration,speed:world.draftSpeed??0,feedback:world.draftJunctionFeedback}:null,sound:pathSoundStatus(),pooledObjects:driving.pooledObjects,logicalTime:world.draftTime,vehicleSnow:world.draftVehicleSnow,raster:{width:world.renderer.domElement.width,height:world.renderer.domElement.height,cssWidth:world.renderer.domElement.clientWidth,cssHeight:world.renderer.domElement.clientHeight,viewportScale:window.parent.visualViewport?.scale??1,devicePixelRatio}});};
 function publish(){window.parent.postMessage({type:'ui-draft-status',value:get({audit:false})},location.origin)}
 function settle(){world.finishLayoutTransition();world.finishCameraMotion();world.finishEnvironmentMotion();world.finishLayoutMotion()}
 function renderOnce(){const held=world.suspended;world.suspended=false;world.renderFrame();world.suspended=held}
 function sync(){world.suspended=themeHeld||document.hidden;drive.setPlaying(!themeHeld&&playing&&['road','elevated','ramp'].includes(current()));last=0;accumulator=0;publish()}
 async function waitForRender(){
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  const started=performance.now();
  while(world.initializingScene||api.get().busy||document.getElementById('preview').dataset.renderPending==='true'){
   if(performance.now()-started>15000)throw Error('Scene preparation timed out');
   await new Promise(resolve=>setTimeout(resolve,16));
  }
 }
 function setPlaying(value){if(value){claimIndicatorAudio();unlockIndicatorSound();}if(isParking(world.state?.id)){if(value&&(!features.get().path||!parking.start()))value=false;else if(!value)parking.pause();}playing=!!value;idlePaused=false;lastInput=performance.now();sync();schedule()}
 function restartJunctionPath(){if(current()!=='junction'||!features.get().path)return;features.set({path:false},{animate:false,render:false});features.set({path:true},{animate:true,render:false});renderOnce();}
 function seekJunction(){
  if(current()!=='junction')return;
  const key=[world.state.id,world.state.laneCount].join('|');
  if(!junctionPoses||junctionPoses.key!==key){
   const state={...world.state};world.update({...state,junctionPosition:'approaching',cameraView:'low'},{deferRender:true});const from=world.captureCamera();world.update({...state,junctionPosition:'near',cameraView:'high'},{deferRender:true});world.startCameraMotion(from);
   const motion=world.cameraMotion;cancelAnimationFrame(motion.frame);motion.paused=true;world.cameraMotion=null;junctionPoses={key,motion};
  }
  const complete=loopTime*1000>=junctionPoses.motion.duration;
  world.draftSpeed=complete?0:junctionPoses.motion.speedAt(loopTime*1000);
  world.draftJunctionBraking=true;world.draftJunctionElapsed=loopTime;
  junctionPoses.motion.sample(Math.min(loopTime*1000,junctionPoses.motion.duration));
  // Ego stop does not end the cross-traffic simulation.
 }
 function step(seconds){if(!world.state||!world.root||world.initializingScene)return;world.draftTime+=seconds*1000;loopTime+=seconds;drive.advance(seconds);if(isParking(world.state.id)){parking.step(seconds);if(!parking.get().active)playing=false;world.renderFrame();}else if(current()==='junction')seekJunction();else if(!world.cameraMotion&&!world.layoutMotion&&!world.environmentMotion&&!world.structureMotion)world.renderFrame()}
 const visualMotion=()=>traffic.animating?.()||!!world.layoutMotion||world.draftIndicatorActive||parking.animating()||appearance.active()||world.draftWeatherActive||features.animating()||world.activationSweep?.active();
 function schedule(){if(frame||!playing&&!visualMotion()||document.hidden||exporting||themeHeld)return;frame=requestAnimationFrame(tick)}
 let lastPublish=0;
 function tick(now){
  frame=0;if(!playing&&!visualMotion()||document.hidden||exporting||themeHeld)return;
  if(!world.state||!world.root||world.initializingScene){last=0;schedule();return}
  if(originRoot!==world.root&&traffic.audit().modelReady){drive.rebind();if(!world.layoutMotion)world.renderFrame();origin=capture();originRoot=world.root}
  if(now-lastInput>=300000){idlePaused=true;playing=false;sync();return}
  const elapsed=last?Math.min(.1,(now-last)/1000):0;last=now;
  // Lane morphing and scenery share one timestamp, including paused edits.
  const laneMotion=world.layoutMotion;
  accumulator+=elapsed;
  const next=laneMotion?{seconds:elapsed,remaining:0}:frameStep(accumulator);accumulator=next.remaining;
  if(next.seconds>0){if(playing)step(next.seconds);else{world.draftTime+=next.seconds*1000;if(!laneMotion)renderOnce()}}
  if(laneMotion&&!laneMotion.paused)laneMotion.tick(now);
  if(now-lastPublish>200||!playing&&!visualMotion()){lastPublish=now;publish()}
  schedule();
 }
 function capture(){const objects=[];world.scene.traverse(object=>objects.push({object,position:object.position.clone(),rotation:object.rotation.clone(),scale:object.scale.clone(),visible:object.visible,growthBaseY:object.userData.growthBaseY,growthHeight:object.userData.growthHeight}));return {objects,parking:parking.capture(),wheelDistance:world.draftWheelDistance,drive:drive.draftCapture(),traffic:traffic?.draftCapture(),time:world.draftTime,loopTime,speed:world.draftSpeed,sceneryRandom:world.draftSceneryRandom.state(),trafficRandom:world.draftTrafficRandom.state(),width:world.width,height:world.height,pose:world.captureCamera()}}
 function restore(saved){for(const item of saved.objects){const {object}=item;object.position.copy(item.position);object.rotation.copy(item.rotation);object.scale.copy(item.scale);object.visible=item.visible;for(const key of ['growthBaseY','growthHeight'])if(item[key]===undefined)delete object.userData[key];else object.userData[key]=item[key]}
  if(saved.parking)parking.restore(saved.parking);world.draftWheelDistance=saved.wheelDistance;drive.draftRestore(saved.drive);if(saved.traffic)traffic.draftRestore(saved.traffic);world.draftTime=saved.time;loopTime=saved.loopTime;world.draftSpeed=saved.speed;world.draftSceneryRandom.restore(saved.sceneryRandom);world.draftTrafficRandom.restore(saved.trafficRandom);world.applyCamera(saved.pose);world.setResolution(saved.width,saved.height);world.renderer.shadowMap.needsUpdate=true;world.shadowKey='';world.groundReflectionKey='';world.carReflectionKey='';}
 async function exportScene({format='png',duration=10,onProgress=()=>{},cameraPose=null}={}){
  if(exporting)throw Error('An export is already running');
  while(features.animating()||world.activationSweep?.active()){if(!playing)break;await new Promise(resolve=>requestAnimationFrame(resolve))}
  settle();exporting=true;cancelled=false;const saved=capture(),wasPlaying=playing;drive.pause();world.suspended=false;cancelAnimationFrame(frame);frame=0;
  let result;
  try{
   world.setResolution(1920,1080);if(cameraPose)world.applyCamera(cameraPose);world.renderFrame();
   if(format==='png')result={blob:await canvasPng(world.renderer.domElement),extension:'png'};
   else if(format==='camera')result={blob:new Blob([JSON.stringify(cameraMetadata(world,{sceneName:current(),sourceUrl:location.href}),null,2)],{type:'application/json'}),extension:'json'};
   else if(format==='depth'){const depth=renderDepth(world);result={blob:await depthPng(depth,1920,1080),extension:'png'}}
   else if(format==='kit'){const metadata=cameraMetadata(world,{sceneName:current(),sourceUrl:location.href}),image=await canvasPng(world.renderer.domElement),depth=renderDepth(world);result={blob:await zipFiles([['scene.png',image],['perspective.svg',perspectiveSvg(world)],['camera.json',JSON.stringify(metadata,null,2)],['depth.png',await depthPng(depth,1920,1080)]]),extension:'zip'}}
   else{
    const {encodeVideo}=await import('./video.js');
    drive.setPlaying(true);if(isParking(world.state?.id)&&features.get().path)parking.start();
    result=await encodeVideo(world.renderer.domElement,{duration,render(index){if(cancelled)throw new DOMException('Export cancelled','AbortError');if(index>0)step(1/30);onProgress(Math.round((index+1)/(duration*30)*100))}});
   }
   result.audit={format,width:1920,height:1080,duration:format==='video'?duration:0,frames:format==='video'?duration*30:1,startDistance:saved.drive.distance,exportEndDistance:drive.audit().distance,extension:result.extension,wasPlaying};
   return result;
  }finally{restore(saved);exporting=false;playing=wasPlaying;lastInput=performance.now();sync();renderOnce();schedule()}
 }
 const bridge={get,roadShadow(value,{render=true}={}){const stored=world.draftRoadShadowStrength??={ego:1,traffic:1};const setting=Number.isFinite(value)?{ego:value,traffic:value}:value||{};for(const key of ['ego','traffic'])if(Number.isFinite(setting[key]))stored[key]=Math.max(0,Math.min(key==='ego'?4:2,setting[key]));if(render)renderOnce();return {...stored};},parkingFinish(values={},{render=true}={}){const finish=world.draftParkingFinish??={bay:{value:1},column:{value:1}};const repaint=Number.isFinite(values.traffic)&&values.traffic!==finish.traffic?.value;for(const key of ['bay','column','traffic','blue','ground','shadow',...Object.keys(indoorShadowLimits)])if(Number.isFinite(values[key])){const [min,max]=indoorShadowLimits[key]??[0,key==='blue'?1:2];(finish[key]??={value:1}).value=Math.max(min,Math.min(max,values[key]));}if(repaint){world.carReflectionKey=null;world.groundReflectionKey=null;}if(render)renderOnce();return Object.fromEntries(Object.entries(finish).map(([key,u])=>[key,u.value]));},suspendIndicator(){audioHeld=true;stopIndicatorSound()},indicatorMuted(value,{unlock=false}={}){setIndicatorMuted(value);if(!value&&unlock){claimIndicatorAudio();unlockIndicatorSound();}publish()},audit:()=>({...world.audit(),indoorLighting:{reflectionRaster:world.carMirror?{width:world.carMirror.getRenderTarget().width,height:world.carMirror.getRenderTarget().height}:null,contactProfile:1,settings:Object.fromEntries(Object.entries(world.draftParkingFinish||{}).map(([k,u])=>[k,u.value])),receiver:world.parkingShadow?{opacity:world.parkingShadow.material.opacity,visible:world.parkingShadow.visible,position:world.parkingShadow.position.toArray(),order:world.parkingShadow.renderOrder}:null,light:{position:world.sun.position.toArray(),target:world.sun.target.position.toArray(),radius:world.sun.shadow.radius,intensity:world.sun.shadow.intensity},contacts:world.draftParkingGroup?.children.filter(o=>o.userData.indoorContact).map(o=>({ego:o.userData.egoContact,visible:o.visible,ambientScale:o.children[0].scale.toArray(),strength:o.children[0].material.uniforms.shadowStrength.value,coverage:o.children[0].material.uniforms.coverage.value}))},occluders:world.draftOccluders||0,parkingCamera:world.captureCamera().position.toArray(),parkingBays:(world.parkingBays||[]).map(b=>{const p=new THREE.Vector3(b.x,.03,b.z).project(world.camera);return {x:b.x,z:b.z,width:b.width,depth:b.depth,screen:[(p.x+1)/2,(1-p.y)/2]}})}),resources(){const info=world.renderer.info;return {geometries:info.memory.geometries,textures:info.memory.textures,programs:info.programs?.length??0,drawCalls:info.render.calls,triangles:info.render.triangles,heapBytes:performance.memory?.usedJSHeapSize??null}},setPlaying,toggle(){if(current()==='junction')bridge.junctionPlay();else setPlaying(!playing)},async param(key,value,{sound=false}={}){
  if(exporting)return;if(current()==='junction'&&key==='path'&&get({audit:false}).junction?.complete)return;if(key==='camera'&&isParking(world.state?.id)){if(parking.get().active)return;lastInput=performance.now();idlePaused=false;last=0;accumulator=0;parking.previewCamera(value);renderOnce();publish();schedule();return;}if(key==='path'&&value&&isParking(world.state?.id)&&!parking.get().target)return;const parkedPose=key==='model'&&isParking(world.state?.id)&&parking.get().elapsed>0?{position:world.car.position.clone(),rotation:world.car.rotation.clone()}:null;if(parkedPose)setPlaying(false);
  if(key==='traffic')world.draftTrafficEnabled=!!value;if(current()==='junction'&&key==='layout'){playing=false;loopTime=0;junctionPoses=null}
  const held=world.suspended;world.suspended=false;api.param(key,value,{sound,animate:true});world.suspended=held;
  if(!['path','weather','traffic','autoplay'].includes(key))await waitForRender();
  if(key==='model'&&api.get().vehicle!==value)throw Error('Could not switch vehicle. Please try again.');
  if(parkedPose){world.car.position.copy(parkedPose.position);world.car.rotation.copy(parkedPose.rotation);}
  if(key==='weather')world.draftWeatherActive=true;if(key==='path'&&isParking(world.state?.id)){if(!value)setPlaying(false);else if(sound)setPlaying(true);}
  if(current()==='junction'){seekJunction();if(key==='layout')restartJunctionPath();}else if(!playing)renderOnce();
  publish();schedule();
 },async scene(key,seed,values){audioHeld=true;stopIndicatorSound();try{appearance.finish();parking.reset();settle();drive.reset();playing=false;world.draftSceneryRandom.reset(seed);world.draftTrafficRandom.reset(Number.isFinite(seed)?seed+1:undefined);junctionPoses=null;loopTime=0;world.draftTrafficEnabled=!!values?.traffic;world.suspended=true;if(values)api.prepareDraftScene(key,values);else api.scene(key);world.suspended=false;await waitForRender();if(key==='junction'){seekJunction();restartJunctionPath();}sync();schedule()}finally{audioHeld=false}},
 finishScene(){settle();parking.finishPreview?.();if(current()==='junction')seekJunction();setPlaying(['road','elevated','ramp'].includes(current())&&!matchMedia('(prefers-reduced-motion: reduce)').matches);renderOnce()},
 beginTheme(){themeHeld=true;cancelAnimationFrame(frame);frame=0;sync()},
 endTheme(){themeHeld=false;last=0;sync();schedule()},
 async theme(value,{animate=false}={}){if(!animate)appearance.finish();const from=animate?appearanceSnapshot(world):null,held=world.suspended;world.suspended=true;try{await api.theme(value);world.draftThemeTone.value=value==='dark'?1:0;if(current()==='junction')seekJunction();if(from)appearance.start(from,appearanceSnapshot(world),performance.now())}finally{world.suspended=held}renderOnce();publish();schedule()},
 themeStatus(){return {blending:appearance.active(),renderedFrames,held:themeHeld}},
 prepareExit(){setPlaying(false);parking.prepareExit();renderOnce();publish();schedule()},chooseExit(direction){parking.chooseExit(direction);renderOnce();publish();schedule()},
 replay(){audioHeld=true;stopIndicatorSound();try{settle();if(isParking(world.state?.id)){parking.reset();renderOnce();publish();return;}traffic.setEnabled(false);traffic.setEnabled(!!world.draftTrafficEnabled);loopTime=0;const held=world.suspended;world.suspended=false;seekJunction();restartJunctionPath();world.suspended=held;publish();schedule()}finally{audioHeld=false}},
 junctionPlay(){if(playing){setPlaying(false);return}if(junctionPoses&&loopTime*1000>=junctionPoses.motion.duration)bridge.replay();setPlaying(true)},
 completeStartup(){renderOnce();world.draftInitialFrameReady=true;document.getElementById('preview').setAttribute('aria-busy','false');publish()},
 export:exportScene,async videoFormat(){return (await import('./video.js')).videoType()},cancelExport(){cancelled=true},resize(width){if(exporting)return;const raster=previewPixels(width,devicePixelRatio,window.parent.visualViewport?.scale??1);if(world.width===raster.width&&world.height===raster.height)return;world.setResolution(raster.width,raster.height);renderOnce();publish()},
 capture,restore,canvas:world.renderer.domElement,restart(){if(!origin)return false;const held=world.suspended;world.suspended=false;restore(origin);world.renderFrame();world.suspended=held;publish();return true},advance(seconds){const held=world.suspended;world.suspended=false;step(seconds);world.suspended=held;publish()},
 async snapshot(){return canvasPng(world.renderer.domElement)},
 input(){claimIndicatorAudio();lastInput=performance.now();if(idlePaused)setPlaying(true)}
 };
 api.draft=bridge;
 let parkingPress=null;
 world.renderer.domElement.addEventListener('pointermove',event=>{if(!isParking(world.state?.id))return;const r=world.renderer.domElement.getBoundingClientRect();if(parking.hover((event.clientX-r.left)/r.width*2-1,1-(event.clientY-r.top)/r.height*2))renderOnce();});
 world.renderer.domElement.addEventListener('pointerleave',()=>{if(isParking(world.state?.id)&&parking.hover(null,null))renderOnce();});
 world.renderer.domElement.addEventListener('pointerdown',event=>{parkingPress={x:event.clientX,y:event.clientY};});
 world.renderer.domElement.addEventListener('pointerup',event=>{
  if(!parkingPress||Math.hypot(event.clientX-parkingPress.x,event.clientY-parkingPress.y)>5)return;parkingPress=null;
  if(exporting||!isParking(world.state?.id)||world.initializingScene)return;
  const rect=world.renderer.domElement.getBoundingClientRect();
  if(parking.pick((event.clientX-rect.left)/rect.width*2-1,1-(event.clientY-rect.top)/rect.height*2)){if(features.get().path)api.param('path',false,{sound:false,animate:false});playing=false;renderOnce();publish();schedule();}
 });

 document.addEventListener('visibilitychange',()=>{if(document.hidden){stopIndicatorSound();cancelAnimationFrame(frame);frame=0;world.suspended=true;drive.pause()}else{lastInput=performance.now();sync();schedule()}},true);
 window.parent.addEventListener('blur',()=>{indicatorOwnsAudio=false;stopIndicatorSound()});window.addEventListener('pagehide',stopIndicatorSound);
 for(const event of ['pointerdown','wheel'])window.parent.addEventListener(event,bridge.input,{passive:true});
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{if(event.matches)setPlaying(false)});
 sync();schedule();
}
