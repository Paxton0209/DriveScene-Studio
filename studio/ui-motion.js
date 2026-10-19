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
export const MORPH_STRENGTH=1.2;
export const NAV_MORPH_SCALE=.56;
export const CONTROL_MORPH_SCALE=.85;
export const TOGGLE_MORPH_SCALE=CONTROL_MORPH_SCALE*.90;
function boundedSpring(initial,target,velocity,seconds,duration,visualDuration){
 const frequency=2*Math.PI/(visualDuration*ARC_MOTION_SCALE*1.2),damping=.84,damped=frequency*Math.sqrt(1-damping*damping),offset=initial-target,tangent=(velocity+damping*frequency*offset)/damped;
 const sample=time=>{const decay=Math.exp(-damping*frequency*time),angle=damped*time,value=target+decay*(offset*Math.cos(angle)+tangent*Math.sin(angle)),speed=decay*(velocity*Math.cos(angle)-(damping*frequency*tangent+damped*offset)*Math.sin(angle));return {value,speed};};
 const end=sample(duration),raw=sample(seconds),phase=seconds/duration,correction=(end.value-target)*(3*phase*phase-2*phase**3)+end.speed*duration*(phase**3-phase*phase),slope=(end.value-target)*(6*phase-6*phase*phase)/duration+end.speed*(3*phase*phase-2*phase);
 return {value:raw.value-correction,speed:raw.speed-slope};
}
export function selectionMotionFrames(from,to,axis='x',velocity={leading:0,trailing:0},durationMs=500*ARC_MOTION_SCALE,deformationScale=axis==='y'?NAV_MORPH_SCALE:CONTROL_MORPH_SCALE){
 const vertical=axis==='y',start=vertical?from.y:from.x,end=start+(vertical?from.height:from.width),target=vertical?to.y:to.x,targetSize=vertical?to.height:to.width,forward=target>=start,duration=durationMs/1000,count=Math.ceil(durationMs/4),frames=[],states=[];
 const initialSpan=end-start,initialSpanVelocity=velocity.trailing-velocity.leading,limit=(vertical?.045:.08)*MORPH_STRENGTH,compress=span=>limit*(1-Math.exp(-Math.max(0,span/targetSize-1)*(vertical?.14:.24)/limit)),initialCompression=1-(vertical?from.width/to.width:from.height/to.height);
 for(let index=0;index<=count;index++){
  const offset=index/count,time=duration*offset,leading=boundedSpring(start,target,velocity.leading,time,duration,forward?.26+.16*MORPH_STRENGTH:.26),trailing=boundedSpring(end,target+targetSize,velocity.trailing,time,duration,forward?.26:.26+.16*MORPH_STRENGTH),rawSpan=trailing.value-leading.value,settle=offset*offset*(3-2*offset),tangent=offset**3-2*offset*offset+offset,span=Math.max(1,targetSize+(rawSpan-targetSize)*deformationScale+(initialSpan-targetSize)*(1-deformationScale)*(1-settle)+initialSpanVelocity*(1-deformationScale)*duration*tangent),compression=1-compress(rawSpan)*deformationScale-(initialCompression-compress(initialSpan)*deformationScale)*(1-settle),center=(leading.value+trailing.value)/2;
  const spanVelocity=(trailing.speed-leading.speed)*deformationScale+(initialSpan-targetSize)*(1-deformationScale)*(-6*offset+6*offset*offset)/duration+initialSpanVelocity*(1-deformationScale)*(3*offset*offset-4*offset+1),centerVelocity=(leading.speed+trailing.speed)/2;
  const position={x:vertical?to.x:center-span/2,y:vertical?center-span/2:to.y,width:vertical?to.width*compression:span,height:vertical?span:to.height*compression};
  if(index===0)Object.assign(position,from);
  if(index===count)Object.assign(position,to);
  states.push({...position,leadingVelocity:centerVelocity-spanVelocity/2,trailingVelocity:centerVelocity+spanVelocity/2});
  frames.push({offset,transform:`translate3d(${position.x}px,${position.y}px,0) scale(${position.width/to.width},${position.height/to.height})`});
 }
 return {frames,states,duration:durationMs};
}
function createSelectionMotion(indicator,initial,axis){
 let target={...initial},presentation={...initial},animation=null,sequence=null;
 function current(){
  if(!animation||!sequence)return {...presentation,leadingVelocity:0,trailingVelocity:0};
  const phase=Math.min(1,Math.max(0,(Number(animation.currentTime)||0)/sequence.duration)),position=phase*(sequence.states.length-1),index=Math.floor(position),first=sequence.states[index],second=sequence.states[Math.min(index+1,sequence.states.length-1)],blend=position-index;
  return Object.fromEntries(Object.keys(first).map(key=>[key,first[key]+(second[key]-first[key])*blend]));
 }
 return {indicator,to(next,instant=false){
  if(Object.keys(next).every(key=>next[key]===target[key])&&indicator.style.transform)return;
  const from=current();animation?.cancel();animation=null;target={...next};presentation={...next};
  indicator.style.width=next.width+'px';indicator.style.height=next.height+'px';indicator.style.transform=`translate3d(${next.x}px,${next.y}px,0)`;
  if(instant||reducedMotion())return;
  sequence=selectionMotionFrames(from,next,axis,{leading:from.leadingVelocity,trailing:from.trailingVelocity});
  const active=indicator.animate(sequence.frames,{duration:sequence.duration,easing:'linear'});animation=active;
  active.onfinish=()=>{if(animation===active){animation=null;sequence=null;}};
 }};
}
export function morphSegment(container,selected,instant=false){
 const next={x:selected.offsetLeft,y:3,width:selected.offsetWidth,height:container.clientHeight-6};
 let motion=segmentIndicators.get(container);
 if(!motion){
  const indicator=document.createElement('span');indicator.className='segment-indicator';indicator.setAttribute('aria-hidden','true');container.prepend(indicator);container.dataset.motionIndicator='true';
  motion=createSelectionMotion(indicator,next,'x');
  segmentIndicators.set(container,motion);instant=true;
 }
 motion.to(next,instant);
}
export function glideIndicator(container,position,instant=false,height=44,left=0,width=container.clientWidth){
 let motion=indicators.get(container);
 if(!motion){
  const indicator=document.createElement('span');indicator.className='scene-indicator';indicator.setAttribute('aria-hidden','true');
  motion=createSelectionMotion(indicator,{x:left,y:position,width,height},'y');
  indicators.set(container,motion);instant=true;
 }
 if(motion.indicator.parentNode!==container)container.prepend(motion.indicator);
 container.dataset.motionIndicator='true';motion.to({x:left,y:position,width,height},instant);
}

const toggleMotions=new WeakMap();
export function toggleMotionFrames(from,target,durationMs=350*ARC_MOTION_SCALE,shapePhase=0){
 const frames=[],count=Math.ceil(durationMs/4),duration=durationMs/1000;
 for(let index=0;index<=count;index++){
  const offset=index/count,position=boundedSpring(from.x,target,from.velocity||0,offset*duration,duration,.26),shape=Math.min(1,shapePhase+offset),envelope=16*shape*shape*(1-shape)**2,width=index===0?from.width:1+.20*MORPH_STRENGTH*TOGGLE_MORPH_SCALE*envelope,height=index===0?from.height:1-.08*MORPH_STRENGTH*TOGGLE_MORPH_SCALE*envelope;
  frames.push({offset,transform:`translateX(${position.value}px) scale(${width},${height})`,velocity:position.speed});
 }
 return {frames:frames.map(({offset,transform})=>({offset,transform})),velocities:frames.map(frame=>frame.velocity),duration:durationMs};
}
export function initToggleMotion(root){
 for(const input of root.querySelectorAll('.toggle input')){
  if(toggleMotions.has(input))continue;
  const track=document.createElement('span'),thumb=document.createElement('span');track.className='toggle-track';thumb.className='toggle-thumb';track.setAttribute('aria-hidden','true');track.append(thumb);input.after(track);input.dataset.motionToggle='true';
  thumb.style.transform=`translateX(${input.checked?12:0}px)`;toggleMotions.set(input,{thumb,animation:null,sequence:null,shapePhase:0});
 }
}
export function animateToggle(input){
 const motion=toggleMotions.get(input);if(!motion)return;
 const from=getComputedStyle(motion.thumb).transform,matrix=new DOMMatrixReadOnly(from==='none'?undefined:from),phase=motion.animation&&motion.sequence?Math.min(1,Math.max(0,(Number(motion.animation.currentTime)||0)/motion.sequence.duration)):1,velocity=motion.sequence?.velocities[Math.round(phase*(motion.sequence.velocities.length-1))]||0,shape=motion.shapePhase+phase;motion.animation?.cancel();
 const target=input.checked?12:0;motion.thumb.style.transform=`translateX(${target}px)`;
 if(reducedMotion()||document.documentElement.dataset.choiceInput==='keyboard')return;
 motion.shapePhase=shape<1?shape:0;
 motion.sequence=toggleMotionFrames({x:matrix.m41,width:matrix.a,height:matrix.d,velocity},target,350*ARC_MOTION_SCALE,motion.shapePhase);
 motion.animation=motion.thumb.animate(motion.sequence.frames,{duration:motion.sequence.duration,easing:'linear'});
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
