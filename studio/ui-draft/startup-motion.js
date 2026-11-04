// Only a prepared, running renderer may complete the opening. A previous
// document cannot grant readiness to this new WebGL context.
// Cold start keeps the prepared poster as a faint hint. The scene only becomes
// clear once the renderer is ready, so a stretched poster never reads as blur.
const HORIZON=60000,STEP=20,FLOOR=.1,HOLD=.3,CEILING=.34,LINEAR_END=1760,RATE=(HOLD-FLOOR)/LINEAR_END,REVEAL=720;
export function pendingFade(time){
 const t=Math.max(0,time);
 if(t<=LINEAR_END)return {opacity:FLOOR+RATE*t,velocity:RATE,acceleration:0};
 const span=CEILING-HOLD,denominator=1+(t-LINEAR_END)*RATE/span;
 return {opacity:CEILING-span/denominator,velocity:RATE/denominator**2,acceleration:-2*RATE*RATE/span/denominator**3};
}
export function readyFade(time){
 // Readiness starts one clearing pass from the current opacity and speed.
 // The pass settles at full opacity with zero velocity; it never reverses.
 const start=pendingFade(time),distance=1-start.opacity,duration=REVEAL,b=start.velocity*duration;
 return {duration,at(elapsed){const u=Math.max(0,Math.min(1,elapsed/duration));return start.opacity+b*u+(3*distance-2*b)*u*u+(b-2*distance)*u*u*u}};
}
function pendingFrames(end,total){
 const frames=[];
 for(let time=0;time<end;time+=STEP)frames.push({opacity:pendingFade(time).opacity,offset:time/total});
 frames.push({opacity:pendingFade(end).opacity,offset:end/total});return frames;
}
export function beginStartup({doc=document,clock=performance}={}){
 const root=doc.documentElement,surface=doc.getElementById('startup-surface'),inspector=doc.getElementById('inspector-scroll');
 const entries=[...doc.querySelectorAll('#scene-nav > .nav-title, #scene-nav > .scene-row')];
 entries.forEach((node,index)=>{node.dataset.startupControl='left';node.style.setProperty('--startup-delay',Math.min(index*40.5,324)+'ms')});
 const controls=[...doc.querySelectorAll('#inspector-scroll :is(.vehicle-heading, #vehicle-strip, section > h2, .property, .layer-row, #export-preview, #export)')];
 controls.forEach((node,index)=>{node.dataset.startupControl='right';node.style.setProperty('--startup-delay',Math.min(index*27,486)+'ms')});
 const warm=root.dataset.startup==='warm',reduce=doc.defaultView.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let done=false,revealed=false,motion=null,resolveFinished;
 const finished=new Promise(resolve=>{resolveFinished=resolve});
 function finish(){
  if(done)return;done=true;
  delete root.dataset.startup;
  if(motion){motion.onfinish=null;motion.cancel()}
  inspector.inert=false;doc.getElementById('scene-nav').inert=false;
  if(revealed){try{doc.defaultView.sessionStorage?.setItem(doc.defaultView.__draftStartupSessionKey,'ready')}catch{}}
  clock.mark('draft-startup-visible');resolveFinished();
 }
 inspector.inert=true;doc.getElementById('scene-nav').inert=true;root.dataset.startup=warm?'warm':'controls';
 if(!warm)clock.mark('draft-startup-controls');
 if(!reduce&&!warm){
  // Allocate the fade once, against navigation's two-second budget. Its rate
  // stays fixed after the first frame; readiness never speeds it up.
  const started=typeof clock.now==='function'?clock.now():0;
  const duration=Math.max(900,1950-started);
  motion=surface.animate(pendingFrames(HORIZON,HORIZON),{duration:HORIZON,easing:'linear',fill:'both'});
  motion.playbackRate=1800/duration;
  clock.mark('draft-startup-fade');
 }
 return {
  finished,
  reveal(){
   if(done||revealed)return;revealed=true;
   clock.mark('draft-startup-reveal');
   if(reduce||warm){finish();return}
   // Retain the compositor animation and its clock. Rebuild the remaining
   // timeline without an opacity reset, zero-speed hold or velocity jump.
   const elapsed=Number(motion.currentTime)||0,tail=readyFade(elapsed),total=elapsed+tail.duration;
   const frames=pendingFrames(elapsed,total);
   for(let i=1;i<=120;i++){const time=tail.duration*i/120;frames.push({opacity:i===120?1:tail.at(time),offset:(elapsed+time)/total})}
   motion.effect.setKeyframes(frames);motion.effect.updateTiming({duration:total});motion.currentTime=elapsed;
   root.dataset.startup=warm?'warm-revealing':'revealing';motion.onfinish=finish;
  },
  abort:finish
 };
}
