import * as THREE from 'three';
import {cameraMetadata,perspectiveSvg,renderDepth} from '../engine/export-scene.js';
import {canvasPng,depthPng,zipFiles} from '../engine/export-files.js';
import {previewPixels} from './pixel-resolution.js';
import {pathSoundStatus} from '../engine/theme-sound.js';
import {frameStep} from './frame-clock.js';

export function makeRandom(seed){
 let value=seed>>>0;
 const next=()=>{value=(value+0x6d2b79f5)>>>0;let mixed=value;mixed=Math.imul(mixed^(mixed>>>15),mixed|1);mixed^=mixed+Math.imul(mixed^(mixed>>>7),mixed|61);return ((mixed^(mixed>>>14))>>>0)/4294967296};
 next.state=()=>value;next.restore=state=>{value=state>>>0};next.reset=nextSeed=>{if(Number.isFinite(nextSeed))seed=nextSeed;value=seed>>>0};return next;
}

export function installDraftBridge({world,features,drive,traffic,api,current,updateURL}){
 let playing=['road','elevated','ramp'].includes(current())&&!matchMedia('(prefers-reduced-motion: reduce)').matches,frame=0,last=0,accumulator=0,exporting=false,cancelled=false,idlePaused=false,lastInput=performance.now(),loopTime=0,junctionPoses=null,origin=null,originRoot=null,themeHeld=false;
 const query=new URLSearchParams(location.search);if(query.get('paused')==='1')playing=false;
 world.draftManaged=true;world.draftTime=performance.now();drive.pause();
 const get=({audit=true}={})=>({ready:!!world.root&&!world.initializingScene,playing:playing&&!document.hidden,requestedPlaying:playing,exporting,distance:drive.audit().distance,originEpoch:Math.floor(drive.audit().distance/1000),loopTime,scene:current(),features:features.get(),...(audit?{path:features.audit().path,objects:world.scene.getObjectsByProperty('isObject3D',true).length}:{}),junction:current()==='junction'?{complete:!!junctionPoses&&loopTime*1000>=junctionPoses.motion.duration,speed:world.draftSpeed??0}:null,sound:pathSoundStatus(),pooledObjects:drive.audit().pooledObjects,logicalTime:world.draftTime,raster:{width:world.renderer.domElement.width,height:world.renderer.domElement.height,cssWidth:world.renderer.domElement.clientWidth,cssHeight:world.renderer.domElement.clientHeight,devicePixelRatio}});
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
 function setPlaying(value){playing=!!value;idlePaused=false;lastInput=performance.now();sync();schedule()}
 function seekJunction(){
  if(current()!=='junction')return;
  const key=[world.state.id,world.state.mode,world.state.laneCount].join('|');
  if(!junctionPoses||junctionPoses.key!==key){
   const state={...world.state};world.update({...state,junctionPosition:'approaching',cameraView:'low'},{deferRender:true});const from=world.captureCamera();world.update({...state,junctionPosition:'near',cameraView:'high'},{deferRender:true});world.startCameraMotion(from);
   const motion=world.cameraMotion;cancelAnimationFrame(motion.frame);motion.paused=true;world.cameraMotion=null;junctionPoses={key,motion};
  }
  const complete=loopTime*1000>=junctionPoses.motion.duration;
  world.draftSpeed=complete?0:junctionPoses.motion.speedAt(loopTime*1000);
  junctionPoses.motion.sample(Math.min(loopTime*1000,junctionPoses.motion.duration));
  if(complete&&playing){playing=false;sync()}
 }
 function step(seconds){if(!world.state||!world.root||world.initializingScene)return;world.draftTime+=seconds*1000;loopTime+=seconds;drive.advance(seconds);if(current()==='junction')seekJunction();else if(!world.cameraMotion&&!world.layoutMotion&&!world.environmentMotion&&!world.structureMotion)world.renderFrame()}
 const visualMotion=()=>features.animating()||world.activationSweep?.active();
 function schedule(){if(frame||!playing&&!visualMotion()||document.hidden||exporting||themeHeld)return;frame=requestAnimationFrame(tick)}
 let lastPublish=0;
 function tick(now){
  frame=0;if(!playing&&!visualMotion()||document.hidden||exporting||themeHeld)return;
  if(!world.state||!world.root||world.initializingScene){last=0;schedule();return}
  if(originRoot!==world.root&&traffic.audit().modelReady){drive.rebind();world.renderFrame();origin=capture();originRoot=world.root}
  if(now-lastInput>=300000){idlePaused=true;playing=false;sync();return}
  accumulator+=last?Math.min(.1,(now-last)/1000):0;last=now;
  const next=frameStep(accumulator);accumulator=next.remaining;if(next.seconds>0){if(playing)step(next.seconds);else{world.draftTime+=next.seconds*1000;renderOnce()}}
  if(now-lastPublish>200){lastPublish=now;publish()}
  schedule();
 }
 function capture(){const objects=[];world.scene.traverse(object=>objects.push({object,position:object.position.clone(),rotation:object.rotation.clone(),scale:object.scale.clone(),visible:object.visible,growthBaseY:object.userData.growthBaseY,growthHeight:object.userData.growthHeight}));return {objects,drive:drive.draftCapture(),traffic:traffic?.draftCapture(),time:world.draftTime,loopTime,speed:world.draftSpeed,sceneryRandom:world.draftSceneryRandom.state(),trafficRandom:world.draftTrafficRandom.state(),width:world.width,height:world.height,pose:world.captureCamera()}}
 function restore(saved){for(const item of saved.objects){const {object}=item;object.position.copy(item.position);object.rotation.copy(item.rotation);object.scale.copy(item.scale);object.visible=item.visible;for(const key of ['growthBaseY','growthHeight'])if(item[key]===undefined)delete object.userData[key];else object.userData[key]=item[key]}
  drive.draftRestore(saved.drive);if(saved.traffic)traffic.draftRestore(saved.traffic);world.draftTime=saved.time;loopTime=saved.loopTime;world.draftSpeed=saved.speed;world.draftSceneryRandom.restore(saved.sceneryRandom);world.draftTrafficRandom.restore(saved.trafficRandom);world.applyCamera(saved.pose);world.setResolution(saved.width,saved.height);world.renderer.shadowMap.needsUpdate=true;world.shadowKey='';world.groundReflectionKey='';world.carReflectionKey='';}
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
    drive.setPlaying(true);
    result=await encodeVideo(world.renderer.domElement,{duration,render(index){if(cancelled)throw new DOMException('Export cancelled','AbortError');if(index>0)step(1/30);onProgress(Math.round((index+1)/(duration*30)*100))}});
   }
   result.audit={format,width:1920,height:1080,duration:format==='video'?duration:0,frames:format==='video'?duration*30:1,startDistance:saved.drive.distance,exportEndDistance:drive.audit().distance,extension:result.extension,wasPlaying};
   return result;
  }finally{restore(saved);exporting=false;playing=wasPlaying;lastInput=performance.now();sync();renderOnce();schedule()}
 }
 const bridge={get,resources(){const info=world.renderer.info;return {geometries:info.memory.geometries,textures:info.memory.textures,programs:info.programs?.length??0,drawCalls:info.render.calls,triangles:info.render.triangles,heapBytes:performance.memory?.usedJSHeapSize??null}},setPlaying,toggle(){if(current()==='junction')bridge.junctionPlay();else setPlaying(!playing)},async param(key,value,{sound=false}={}){
  if(current()==='junction'&&key==='layout'){playing=false;loopTime=0;junctionPoses=null}
  const held=world.suspended;world.suspended=false;api.param(key,value,{sound,animate:key==='path'?sound:true});world.suspended=held;
  if(!['path','weather','traffic','autoplay'].includes(key))await waitForRender();
  if(!playing)settle();
  if(current()==='junction')seekJunction();else if(!playing)renderOnce();
  publish();schedule();
 },async scene(key,seed){settle();drive.reset();playing=['road','elevated','ramp'].includes(key)&&!matchMedia('(prefers-reduced-motion: reduce)').matches;world.draftSceneryRandom.reset(seed);world.draftTrafficRandom.reset(Number.isFinite(seed)?seed+1:undefined);junctionPoses=null;loopTime=0;world.suspended=false;api.scene(key);await waitForRender();if(key==='junction')seekJunction();sync();schedule()},
 beginTheme(){themeHeld=true;cancelAnimationFrame(frame);frame=0;sync()},
 endTheme(){themeHeld=false;last=0;sync();schedule()},
 async theme(value){const held=world.suspended;world.suspended=false;try{await api.theme(value);if(!themeHeld)renderOnce()}finally{world.suspended=held}publish()},
 replay(){loopTime=0;junctionPoses=null;const held=world.suspended;world.suspended=false;seekJunction();world.suspended=held;publish()},
 junctionPlay(){if(playing){setPlaying(false);return}if(junctionPoses&&loopTime*1000>=junctionPoses.motion.duration)bridge.replay();setPlaying(true)},
 export:exportScene,async videoFormat(){return (await import('./video.js')).videoType()},cancelExport(){cancelled=true},resize(width){if(exporting)return;const raster=previewPixels(width,devicePixelRatio);if(world.width===raster.width&&world.height===raster.height)return;world.setResolution(raster.width,raster.height);renderOnce();publish()},
 capture,restore,canvas:world.renderer.domElement,restart(){if(!origin)return false;const held=world.suspended;world.suspended=false;restore(origin);world.renderFrame();world.suspended=held;publish();return true},advance(seconds){const held=world.suspended;world.suspended=false;step(seconds);world.suspended=held;publish()},
 async snapshot(){return canvasPng(world.renderer.domElement)},
 input(){lastInput=performance.now();if(idlePaused)setPlaying(true)}
 };
 api.draft=bridge;
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;world.suspended=true;drive.pause()}else{lastInput=performance.now();sync();schedule()}},true);
 for(const event of ['pointerdown','keydown','wheel'])window.parent.addEventListener(event,bridge.input,{passive:true});
 matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{if(event.matches)setPlaying(false)});
 sync();schedule();
}
