// Both entrances start together. Loading extends a moving opacity timeline;
// readiness preserves its value, velocity and acceleration instead of restarting.
const HORIZON=60000,STEP=50,TAU=2400;
export function pendingFade(time){
 const decay=Math.exp(-Math.max(0,time)/TAU);
 return {opacity:.1+.75*(1-decay),velocity:.75/TAU*decay,acceleration:-.75/(TAU*TAU)*decay};
}
export function readyFade(time){
 const start=pendingFade(time),duration=Math.max(2000-time,1400+Math.min(time*.1,1000));
 const b=start.velocity*duration,c=start.acceleration*duration*duration/2,d=1-start.opacity;
 const e=10*d-6*b-3*c,f=-15*d+8*b+3*c,g=6*d-3*b-c;
 return {duration,at(elapsed){const u=Math.max(0,Math.min(1,elapsed/duration));return start.opacity+b*u+c*u*u+e*u**3+f*u**4+g*u**5}};
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
   // curve with a C2 join: no opacity reset, zero-speed hold or velocity jump.
   const elapsed=Number(motion.currentTime)||0,tail=readyFade(elapsed),total=elapsed+tail.duration;
   const frames=pendingFrames(elapsed,total);
   for(let i=1;i<=120;i++){const time=tail.duration*i/120;frames.push({opacity:i===120?1:tail.at(time),offset:(elapsed+time)/total})}
   motion.effect.setKeyframes(frames);motion.effect.updateTiming({duration:total});motion.currentTime=elapsed;
   root.dataset.startup='revealing';motion.onfinish=finish;
  },
  abort:finish
 };
}
