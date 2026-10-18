import {MOTION_TIME_SCALE} from './motion-config.js';
export const reducedMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
export const ARC_MOTION_SCALE=.8*MOTION_TIME_SCALE;

export function createSpring(paint,initial=0){
 let value=initial,velocity=0,target=initial,frame=0,last=0,duration=.28,bounce=.08,complete;
 function tick(now){
  const delta=Math.min(.064,(now-last)/1000);last=now;
  const frequency=2*Math.PI/(duration*1.2),damping=1-bounce,offset=value-target,decay=Math.exp(-damping*frequency*delta);
  if(bounce===0){const tangent=velocity+frequency*offset;value=target+(offset+tangent*delta)*decay;velocity=(velocity-frequency*tangent*delta)*decay;}
  else{const damped=frequency*Math.sqrt(1-damping*damping),tangent=(velocity+damping*frequency*offset)/damped,angle=damped*delta;value=target+decay*(offset*Math.cos(angle)+tangent*Math.sin(angle));velocity=decay*(velocity*Math.cos(angle)-(damping*frequency*tangent+damped*offset)*Math.sin(angle));}
  if(Math.abs(value-target)<.12&&Math.abs(velocity)<1){value=target;velocity=0;frame=0;paint(value);complete?.();complete=null;return;}
  paint(value);frame=requestAnimationFrame(tick);
 }
 return {to(next,{instant=false,visualDuration=.28,rebound=.08,onfinish}={}){
  target=next;duration=visualDuration*ARC_MOTION_SCALE;bounce=rebound;complete=onfinish;
  if(instant||reducedMotion()){cancelAnimationFrame(frame);frame=0;value=next;velocity=0;paint(value);complete?.();complete=null;return;}
  if(!frame){last=performance.now();frame=requestAnimationFrame(tick);}
 },stop(){cancelAnimationFrame(frame);frame=0;velocity=0;complete=null;},get value(){return value;}};
}

const indicators=new WeakMap();
const segmentIndicators=new WeakMap();
export function morphSegment(container,selected,instant=false){
 const inset=3,start=selected.offsetLeft,end=start+selected.offsetWidth;
 let motion=segmentIndicators.get(container);
 if(!motion){
  const indicator=document.createElement('span');indicator.className='segment-indicator';indicator.setAttribute('aria-hidden','true');container.prepend(indicator);container.dataset.motionIndicator='true';
  let leading=start,trailing=end,targetWidth=end-start;
  const paint=()=>{const left=Math.max(inset,leading),right=Math.min(container.clientWidth-inset,trailing),width=Math.max(1,right-left),compression=1-Math.min(.08,Math.max(0,width/targetWidth-1)*.24);indicator.style.width=width+'px';indicator.style.transform=`translateX(${left}px) scaleY(${compression})`;indicator.style.borderRadius=(6+Math.max(0,1-compression)*24)+'px';};
  const leftSpring=createSpring(value=>{leading=value;paint();},start),rightSpring=createSpring(value=>{trailing=value;paint();},end);
  motion={target:start,to(left,right,immediate){targetWidth=right-left;const forward=left>=this.target;leftSpring.to(left,{instant:immediate,visualDuration:forward?.42:.26,rebound:.16});rightSpring.to(right,{instant:immediate,visualDuration:forward?.26:.42,rebound:.16});this.target=left;}};
  segmentIndicators.set(container,motion);instant=true;
 }
 motion.to(start,end,instant||reducedMotion());
}
export function glideIndicator(container,position,instant=false,height=44,left=0,width=container.clientWidth){
 let motion=indicators.get(container);
 if(!motion){
  const indicator=document.createElement('span');indicator.className='scene-indicator';indicator.setAttribute('aria-hidden','true');
  let leading=position,trailing=position+height,targetHeight=height,offset=left;
  const paint=()=>{const span=Math.max(1,trailing-leading),compression=1-Math.min(.045,Math.max(0,span/targetHeight-1)*.14);indicator.style.transform=`translate3d(${offset}px,${leading}px,0) scale(${compression},${span/targetHeight})`;};
  const leadingSpring=createSpring(value=>{leading=value;paint();},leading),trailingSpring=createSpring(value=>{trailing=value;paint();},trailing);
  motion={indicator,target:position,to(next,nextHeight,nextLeft,nextWidth,immediate){targetHeight=nextHeight;offset=nextLeft;indicator.style.width=nextWidth+'px';indicator.style.height=nextHeight+'px';const forward=next>=this.target;leadingSpring.to(next,{instant:immediate,visualDuration:forward?.38:.25,rebound:.08});trailingSpring.to(next+nextHeight,{instant:immediate,visualDuration:forward?.25:.38,rebound:.08});this.target=next;}};
  indicators.set(container,motion);instant=true;
 }
 if(motion.indicator.parentNode!==container)container.prepend(motion.indicator);
 container.dataset.motionIndicator='true';motion.to(position,height,left,width,instant);
}

export function createVehicleMorph(popup,trigger,onClose){
 let opened=false,closing=false,openHeight=44,animation=null,gridAnimation=null;
 const grid=()=>popup.querySelector('.vehicle-grid');
 function place(){
  const anchor=trigger()?.getBoundingClientRect();if(!anchor)return;
  const width=Math.min(336,anchor.width,innerWidth-32),content=grid();if(!content)return;
  popup.style.width=width+'px';popup.style.left=Math.max(16,Math.min(anchor.left,innerWidth-width-16))+'px';content.style.width=(width-24)+'px';
  const spacing=getComputedStyle(content);openHeight=44+content.getBoundingClientRect().height+parseFloat(spacing.marginTop)+parseFloat(spacing.marginBottom);
  popup.style.height=openHeight+'px';popup.style.top=Math.max(16,Math.min(anchor.top,innerHeight-openHeight-16))+'px';
 }
 function animate(open,onfinish){
  const content=grid(),from=getComputedStyle(popup).clipPath,fromOpacity=getComputedStyle(content).opacity,fromTransform=getComputedStyle(content).transform;
  animation?.cancel();gridAnimation?.cancel();
  const target=open?'inset(0px 0px 0px 0px round 12px)':`inset(0px 0px ${Math.max(0,openHeight-44)}px 0px round 8px)`;
  const opacity=open?'1':'0',transform=open?'translateY(0px)':'translateY(-6px)';
  const options={duration:reducedMotion()?0:(open?.375:.32)*ARC_MOTION_SCALE*1000,easing:'cubic-bezier(.22,1,.36,1)'};
  popup.style.clipPath=target;content.style.opacity=opacity;content.style.transform=transform;
  animation=popup.animate([{clipPath:from==='none'?target:from},{clipPath:target}],options);
  gridAnimation=content.animate([{opacity:fromOpacity,transform:fromTransform},{opacity,transform}],options);
  const active=animation;animation.onfinish=()=>{if(animation!==active)return;animation=null;gridAnimation=null;onfinish?.();};
 }
 function close({restoreFocus=true}={}){
  if(!opened||closing)return;closing=true;popup.dataset.closing='true';grid().inert=true;onClose();
  if(restoreFocus)trigger()?.focus({preventScroll:true});
  animate(false,()=>{popup.hidePopover();opened=false;closing=false;delete popup.dataset.closing;popup.style.height='';});
 }
 popup.addEventListener('keydown',event=>{
  if(event.key==='Escape'){event.preventDefault();close();}
  if(event.key==='Tab'){event.preventDefault();const anchor=trigger();close();const controls=[...document.querySelectorAll('button:not(:disabled),input:not(:disabled)')].filter(control=>control.getClientRects().length&&!popup.contains(control));const position=controls.indexOf(anchor);controls[Math.max(0,Math.min(controls.length-1,position+(event.shiftKey?-1:1)))]?.focus({preventScroll:true});}
 });
 document.addEventListener('pointerdown',event=>{if(opened&&!popup.contains(event.target)&&!trigger()?.contains(event.target))close({restoreFocus:false});});
 return {close,place,show(){
  if(opened&&!closing){place();return;}
  closing=false;delete popup.dataset.closing;grid().inert=false;
  if(!opened){popup.style.clipPath='inset(0px 0px 0px 0px round 8px)';popup.showPopover();opened=true;place();popup.style.clipPath=`inset(0px 0px ${Math.max(0,openHeight-44)}px 0px round 8px)`;grid().style.opacity='0';grid().style.transform='translateY(-6px)';}
  else place();
  animate(true);popup.querySelector('[aria-pressed=true]')?.focus({preventScroll:true});
 },get active(){return opened;}};
}
