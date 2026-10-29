// Both entrances start together. Normal loading uses one linear opacity
// timeline; a slow download may extend its last five percent smoothly.
const HORIZON=60000,STEP=20,RATE=.9/1800,LINEAR_END=1700;
export function pendingFade(time){
 const t=Math.max(0,time);
 if(t<=LINEAR_END)return {opacity:.1+RATE*t,velocity:RATE,acceleration:0};
 const denominator=1+(t-LINEAR_END)*RATE/.04;
 return {opacity:.99-.04/denominator,velocity:RATE/denominator**2,acceleration:-2*RATE*RATE/.04/denominator**3};
}
export function readyFade(time){
 const start=pendingFade(time);
 // When resources meet the normal budget there is no change of speed, curve,
 // or animation clock at readiness. The same fade ends at 1.8 seconds.
 if(time<=LINEAR_END)return {duration:1800-time,at:elapsed=>Math.min(1,start.opacity+RATE*Math.max(0,elapsed))};
 // A delayed load never restarts the fade or rushes a large remaining range.
 // A Hermite tail starts at the exact current velocity and only decelerates.
 const distance=1-start.opacity,duration=Math.min(1000,2*distance/start.velocity),b=start.velocity*duration;
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
 let done=false,revealed=false,motion=null;
 function finish(){
  if(done)return;done=true;
  delete root.dataset.startup;
  if(motion){motion.onfinish=null;motion.cancel()}
  inspector.inert=false;clock.mark('draft-startup-visible');
 }
 inspector.inert=true;root.dataset.startup=warm?'warm':'controls';
 if(!warm)clock.mark('draft-startup-controls');
 if(!warm&&!reduce){
  motion=surface.animate(pendingFrames(HORIZON,HORIZON),{duration:HORIZON,easing:'linear',fill:'both'});
  clock.mark('draft-startup-fade');
 }
 return {
  reveal(){
   if(done||revealed)return;revealed=true;inspector.inert=false;
   try{doc.defaultView.sessionStorage?.setItem(doc.defaultView.__draftStartupSessionKey,'ready')}catch{}
   clock.mark('draft-startup-reveal');
   if(warm||reduce){finish();return}
   // Retain the compositor animation and its clock. Rebuild the remaining
   // timeline without an opacity reset, zero-speed hold or velocity jump.
   const elapsed=Number(motion.currentTime)||0,tail=readyFade(elapsed),total=elapsed+tail.duration;
   const frames=pendingFrames(elapsed,total);
   for(let i=1;i<=120;i++){const time=tail.duration*i/120;frames.push({opacity:i===120?1:tail.at(time),offset:(elapsed+time)/total})}
   motion.effect.setKeyframes(frames);motion.effect.updateTiming({duration:total});motion.currentTime=elapsed;
   root.dataset.startup='revealing';motion.onfinish=finish;
  },
  abort:finish
 };
}
