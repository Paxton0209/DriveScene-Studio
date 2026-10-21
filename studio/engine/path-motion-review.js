import {PATH_MOTION_PRESETS,pathMotionDuration} from './path-motion.js';
export function installPathMotionReview(world,features,query){
 if(location.hostname!=='127.0.0.1'||query.get('review')!=='path-motion')return;
 const origin='http://127.0.0.1:8036';let ready=false,replayFrame=0;
 const reply=(type,extra={})=>window.parent.postMessage({type,settings:features.getPathMotion(),...extra},origin);
 const replay=()=>{cancelAnimationFrame(replayFrame);features.set({path:false},{animate:false});replayFrame=requestAnimationFrame(()=>features.set({path:true}));};
 window.addEventListener('studio:ready',()=>{ready=true;reply('path-motion:ready',{presets:Object.fromEntries(Object.entries(PATH_MOTION_PRESETS).map(([id,preset])=>[id,{...preset,durationMs:pathMotionDuration({preset:id})}]))});});
 window.addEventListener('message',async event=>{
  if(!ready||event.origin!==origin||event.source!==window.parent)return;
  const message=event.data;
  if(message?.type==='path-motion:preview'){features.setPathMotion(message.settings);replay();reply('path-motion:previewed');}
  if(message?.type==='path-motion:replay')replay();
  if(message?.type==='path-motion:inspect'&&query.has('qa')&&Number.isFinite(message.elapsedMs)){features.setPathMotion(message.settings,{elapsedMs:message.elapsedMs});reply('path-motion:inspected',{requestId:message.requestId,audit:features.audit()});}
  if(message?.type==='path-motion:save'){try{features.setPathMotion(message.settings,{save:true});reply('path-motion:saved',{requestId:message.requestId});}catch(error){reply('path-motion:error',{message:'保存失败，请重试。',requestId:message.requestId});}}
  if(message?.type==='path-motion:theme'&&['light','dark'].includes(message.mode)){await window.layoutEngine.theme(message.mode);replay();reply('path-motion:themed',{requestId:message.requestId});}
  if(message?.type==='path-motion:record'&&query.has('qa')){features.setPathMotion(message.settings);replay();const samples=[],start=performance.now();const record=now=>{const path=features.audit().path;samples.push({time:now-start,reveal:path.reveal,frame:path.motionFrame,visible:path.visible});if(now-start<900)requestAnimationFrame(record);else reply('path-motion:recorded',{requestId:message.requestId,samples});};requestAnimationFrame(record);}
 });
}
