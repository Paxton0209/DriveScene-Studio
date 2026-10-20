import * as THREE from 'three';
import {cameraMetadata,perspectiveSvg,renderDepth} from '../engine/export-scene.js';
import {canvasPng,depthPng,zipFiles} from '../engine/export-files.js';
import {previewPixels} from './pixel-resolution.js';

export function makeRandom(seed){
 let value=seed>>>0;
 const next=()=>{value=(value+0x6d2b79f5)>>>0;let mixed=value;mixed=Math.imul(mixed^(mixed>>>15),mixed|1);mixed^=mixed+Math.imul(mixed^(mixed>>>7),mixed|61);return ((mixed^(mixed>>>14))>>>0)/4294967296};
 next.state=()=>value;next.restore=state=>{value=state>>>0};next.reset=nextSeed=>{if(Number.isFinite(nextSeed))seed=nextSeed;value=seed>>>0};return next;
}

export function installDraftBridge({world,features,drive,traffic,api,current,updateURL}){
 let playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,frame=0,last=0,accumulator=0,exporting=false,cancelled=false,idlePaused=false,lastInput=performance.now(),loopTime=0,junctionPoses=null,origin=null,originRoot=null;
 const query=new URLSearchParams(location.search);if(query.get('paused')==='1')playing=false;
 world.draftManaged=true;world.draftTime=performance.now();drive.pause();
 const get=()=>({ready:!!world.root&&!world.initializingScene,playing:playing&&!document.hidden,requestedPlaying:playing,exporting,distance:drive.audit().distance,originEpoch:Math.floor(drive.audit().distance/1000),loopTime,scene:current(),features:features.get(),path:features.audit().path,sound:api.get().sound,pooledObjects:drive.audit().pooledObjects,objects:world.scene.getObjectsByProperty('isObject3D',true).length,logicalTime:world.draftTime,raster:{width:world.renderer.domElement.width,height:world.renderer.domElement.height,cssWidth:world.renderer.domElement.clientWidth,cssHeight:world.renderer.domElement.clientHeight,devicePixelRatio}});
 function publish(){window.parent.postMessage({type:'ui-draft-status',value:get()},location.origin)}
 function settle(){world.finishLayoutTransition();world.finishCameraMotion();world.finishEnvironmentMotion();world.finishLayoutMotion()}
 function renderOnce(){const held=world.suspended;world.suspended=false;world.renderFrame();world.suspended=held}
 function sync(){world.suspended=!playing||document.hidden;drive.setPlaying(playing&&['road','elevated'].includes(current()));last=0;publish()}
 function setPlaying(value){playing=!!value;idlePaused=false;lastInput=performance.now();sync();schedule()}
 function seekJunction(){
  if(current()!=='junction')return;
  const key=[world.state.id,world.state.mode,world.state.laneCount].join('|');
  if(!junctionPoses||junctionPoses.key!==key){
   const state={...world.state};world.update({...state,junctionPosition:'approaching',cameraView:'low'},{deferRender:true});const from=world.captureCamera();world.update({...state,junctionPosition:'near',cameraView:'high'},{deferRender:true});junctionPoses={key,from,to:world.captureCamera()};
  }
  const progress=Math.min(1,(loopTime%5)/4),blend=progress*progress*(3-2*progress),{from,to}=junctionPoses;
  const pose={...from,position:from.position.clone().lerp(to.position,blend),aim:from.aim.clone().lerp(to.aim,blend),carPosition:from.carPosition.clone().lerp(to.carPosition,blend),quaternion:from.quaternion.clone().slerp(to.quaternion,blend),offset:from.offset.clone().lerp(to.offset,blend),anchor:from.anchor.clone().lerp(to.anchor,blend)};
  world.applyCamera(pose);
 }
 function step(seconds){if(!world.state||!world.root||world.initializingScene)return;world.draftTime+=seconds*1000;loopTime+=seconds;drive.advance(seconds);seekJunction();world.renderFrame()}
 function schedule(){if(frame||!playing||document.hidden||exporting)return;frame=requestAnimationFrame(tick)}
 let lastPublish=0;
 function tick(now){
  frame=0;if(!playing||document.hidden||exporting)return;
  if(!world.state||!world.root||world.initializingScene){last=0;schedule();return}
  if(originRoot!==world.root&&traffic.audit().modelReady){drive.rebind();world.renderFrame();origin=capture();originRoot=world.root}
  if(now-lastInput>=300000){idlePaused=true;playing=false;sync();return}
  accumulator+=last?Math.min(.1,(now-last)/1000):0;last=now;
  while(accumulator>=1/30){step(1/30);accumulator-=1/30}
  if(now-lastPublish>200){lastPublish=now;publish()}
  schedule();
 }
 function capture(){const objects=[];world.scene.traverse(object=>objects.push({object,position:object.position.clone(),rotation:object.rotation.clone(),scale:object.scale.clone(),visible:object.visible,growthBaseY:object.userData.growthBaseY,growthHeight:object.userData.growthHeight}));return {objects,drive:drive.draftCapture(),traffic:traffic?.draftCapture(),time:world.draftTime,loopTime,sceneryRandom:world.draftSceneryRandom.state(),trafficRandom:world.draftTrafficRandom.state(),width:world.width,height:world.height,pose:world.captureCamera()}}
 function restore(saved){for(const item of saved.objects){const {object}=item;object.position.copy(item.position);object.rotation.copy(item.rotation);object.scale.copy(item.scale);object.visible=item.visible;for(const key of ['growthBaseY','growthHeight'])if(item[key]===undefined)delete object.userData[key];else object.userData[key]=item[key]}
  drive.draftRestore(saved.drive);if(saved.traffic)traffic.draftRestore(saved.traffic);world.draftTime=saved.time;loopTime=saved.loopTime;world.draftSceneryRandom.restore(saved.sceneryRandom);world.draftTrafficRandom.restore(saved.trafficRandom);world.applyCamera(saved.pose);world.setResolution(saved.width,saved.height);world.renderer.shadowMap.needsUpdate=true;world.shadowKey='';world.groundReflectionKey='';world.carReflectionKey='';}
 async function exportScene({format='png',duration=10,onProgress=()=>{}}={}){
  if(exporting)throw Error('An export is already running');
  while(features.animating()||world.activationSweep?.active()){if(!playing)break;await new Promise(resolve=>requestAnimationFrame(resolve))}
  settle();exporting=true;cancelled=false;const saved=capture(),wasPlaying=playing;drive.pause();world.suspended=false;cancelAnimationFrame(frame);frame=0;
  let result;
  try{
   world.setResolution(1920,1080);world.renderFrame();
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
 const bridge={get,setPlaying,toggle(){setPlaying(!playing)},param(key,value){
  if(key==='path'&&!playing){const held=world.suspended;world.suspended=false;features.set({path:!!value},{animate:false});updateURL();world.suspended=held;publish();return}
  const held=world.suspended;world.suspended=false;api.param(key,value);if(!playing){settle();renderOnce()}world.suspended=held;publish();
 },async scene(key,seed){settle();drive.reset();world.draftSceneryRandom.reset(seed);world.draftTrafficRandom.reset(Number.isFinite(seed)?seed+1:undefined);junctionPoses=null;loopTime=0;const held=world.suspended;world.suspended=false;api.scene(key);await new Promise(resolve=>setTimeout(resolve,0));world.suspended=held;sync();schedule()},
 async theme(value){const held=world.suspended;world.suspended=false;await api.theme(value);world.suspended=held;renderOnce();publish()},
 replay(){loopTime=0;junctionPoses=null;seekJunction();renderOnce();publish()},
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
