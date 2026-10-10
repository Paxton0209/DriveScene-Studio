import {playThemeSound} from './theme-sound.js';
import {World} from './world.js';
import {structures,legacyScenes} from './structures.js';
import {createVehicle} from './vehicle.js';
const $=id=>document.getElementById(id),preview=$('preview');
const query=new URLSearchParams(location.search),requested=query.get('scene'),initial=legacyScenes[requested]||requested;
const first=structures.find(s=>s.layouts.some(([id])=>id===initial))||structures[0];
const preferences=new Map(structures.map(s=>[s.key,{id:s.layouts[0][0],buildings:!!s.buildings,waterfront:s.key==='road'&&initial==='13',trees:false,vehicle:true,roadworks:false}]));
preferences.get(first.key).id=initial&&first.layouts.some(([id])=>id===initial)?initial:first.layouts[0][0];
Object.assign(preferences.get('road'),{shape:initial==='13'?'curved':'straight',laneCount:initial==='09'?2:6,cameraView:query.get('view')==='high'?'high':'low'});
if(['2','4','6'].includes(query.get('lanes')))preferences.get('road').laneCount=Number(query.get('lanes'));
if(requested==='01')preferences.get(first.key).buildings=false;
if(requested==='12')preferences.get(first.key).roadworks=true;
let savedTheme;try{savedTheme=localStorage.getItem('sr-theme');}catch{}
const initialTheme=query.get('mode')||savedTheme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
let selected=first.key,mode=initialTheme==='dark'?'dark':'light',displayedReference=false;
const optionIds=['buildings','waterfront','trees','vehicle','roadworks'];
$('status').textContent='Loading scene…';
const world=new World($('scene-canvas'),await createVehicle());
$('status').textContent='';
const referenceView=null;let referenceVehicle=true;
function currentFrame(){return $('scene-canvas');}
function active(){return structures.find(s=>s.key===selected);}
function state(){const st={...preferences.get(selected),mode};for(const key of ['buildings','waterfront','trees','roadworks'])st[key]=!!active()[key]&&!!st[key];if(selected==='road')st.id=st.shape==='curved'?'13':st.laneCount===2?'09':'02';return st;}
function updateURL(){const q=new URLSearchParams();q.set('scene',selected==='reference'?'reference':state().id);q.set('mode',mode);if(selected==='road'){q.set('lanes',state().laneCount);q.set('view',state().cameraView);}if(query.has('motion'))q.set('motion',query.get('motion'));if(document.getElementById('credits-view')&&!document.getElementById('credits-view').hidden)q.set('page','credits');history.replaceState(null,'',`?${q}`);}
const sceneButtons=new Map();
const navPill=document.createElement('span');navPill.className='nav-pill';navPill.setAttribute('aria-hidden','true');$('scenes').append(navPill);
for(const [key,title]of [['open','Driving scenes'],['closed','Parking scenes']]){
 const section=document.createElement('section'),heading=document.createElement('h2'),items=document.createElement('div');
 section.className='scene-group';heading.className='structure-heading';heading.textContent=title;items.className='structure-items';items.id=`group-${key}`;
 for(const s of structures.filter(s=>s.group===key)){
  const b=document.createElement('button');b.className='scene';b.textContent=s.name;b.dataset.structure=s.key;
  b.addEventListener('click',()=>{selected=s.key;requestRender();});items.append(b);sceneButtons.set(s.key,b);
 }
 section.append(heading,items);$('scenes').append(section);
}
let transitionFrame=0,activeCover=null,pendingRender=0;
function moveSelection(){
 const button=sceneButtons.get(selected);if(!button||!button.getClientRects().length){navPill.hidden=true;return;}
 navPill.hidden=false;navPill.style.width=button.offsetWidth+'px';navPill.style.height=button.offsetHeight+'px';navPill.style.transform=`translate(${button.offsetLeft}px,${button.offsetTop}px)`;
}
function syncSelectedControls(){
 const st=selected==='reference'?null:state();if(!st)return;
 for(const b of $('road-controls').querySelectorAll('button'))b.setAttribute('aria-pressed',String(st[b.dataset.road])===b.dataset.value);
 for(const b of $('parking-views').querySelectorAll('button'))b.setAttribute('aria-pressed',b.dataset.view===(selected==='outdoor'?({'17':'10','18':'16','19':'14'}[st.id]):st.id));
 for(const b of $('layout-options').querySelectorAll('button'))b.setAttribute('aria-pressed',b.dataset.layout===st.id);
 updateSegmentIndicators();
}
function revealActiveGroup(){
 const group=active()?.group;if(!group)return;
 const items=$('group-'+group);items.hidden=false;
}
document.querySelector('.wordmark').addEventListener('click',event=>{
 if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;
 event.preventDefault();selected='road';window.scrollTo({top:0,behavior:'instant'});requestRender();
});
function requestRender(){
 cancelAnimationFrame(pendingRender);revealActiveGroup();
 for(const [key,b]of sceneButtons)b.setAttribute('aria-current',key===selected);
 moveSelection();syncSelectedControls();
 pendingRender=requestAnimationFrame(()=>{pendingRender=requestAnimationFrame(()=>{const begin=performance.now();render(true);preview.dataset.renderMs=(performance.now()-begin).toFixed(1);});});
}

function render(animate=false,themeWipe=false){
 cancelAnimationFrame(transitionFrame);
 let cover,previous;
 if(animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  previous=document.createElement('canvas');previous.width=1920;previous.height=1080;
  const ctx=previous.getContext('2d');ctx.drawImage(currentFrame(),0,0);
  if(activeCover){ctx.globalAlpha=Number(getComputedStyle(activeCover).opacity);ctx.drawImage(activeCover,0,0);ctx.globalAlpha=1;}
  cover=document.createElement('canvas');cover.width=1920;cover.height=1080;cover.getContext('2d').drawImage(previous,0,0);cover.className='frame-cover';
 }
 document.querySelectorAll('.frame-cover').forEach(el=>el.remove());activeCover=cover||null;if(cover)preview.append(cover);
 const isReference=selected==='reference',s=active(),st=isReference?null:state();
 if(isReference)referenceView.render(mode,referenceVehicle);else world.update(st);
 $('scene-canvas').hidden=false;$('reference-image').hidden=true;displayedReference=isReference;
 $('reference').setAttribute('aria-current',isReference);
 $('scene-title').textContent=isReference?'Visual key':s.name;
 $('scene-canvas').setAttribute('aria-label',isReference?`Visual key, ${mode}, BMW vehicle`:`${s.name}, ${mode}, ${optionIds.filter(k=>st[k]).join(', ')}`);
 document.documentElement.dataset.theme=mode;
 try{localStorage.setItem('sr-theme',mode);}catch{}
 document.querySelector('.credits').href=`credits.html?mode=${mode}&scene=${encodeURIComponent(isReference?'reference':st.id)}`;
 const themeButton=$('theme-toggle');themeButton.setAttribute('aria-pressed',mode==='dark');themeButton.setAttribute('aria-label',`Switch to ${mode==='dark'?'light':'dark'} theme`);themeButton.title=themeButton.getAttribute('aria-label');
 for(const key of optionIds){const available=key==='vehicle'||(!isReference&&!!s[key]);$(key).closest('label').hidden=!available;$(key).disabled=!available;$(key).checked=isReference?key==='vehicle'&&referenceVehicle:available&&st[key];}
 const parking=!isReference&&s.group==='closed';
 const hasLayouts=!isReference&&!parking&&s.key!=='road'&&s.layouts.length>1;$('layout-control').hidden=!hasLayouts;
 if(hasLayouts){
  $('layout-label').textContent=s.key==='junction'?'Junction type':'Ramp type';
  $('layout').replaceChildren(...s.layouts.map(([id,name])=>new Option(name,id)));$('layout').value=st.id;
  if($('layout-options').dataset.structure!==s.key){$('layout-options').replaceChildren(...s.layouts.map(([id,name])=>{const b=document.createElement('button');b.type='button';b.textContent=name.replace('High-angle ','').replace('crossroads','Crossroads');b.dataset.layout=id;b.addEventListener('click',()=>{preferences.get(selected).id=id;requestRender();});return b;}));$('layout-options').dataset.structure=s.key;}
  for(const b of $('layout-options').querySelectorAll('button'))b.setAttribute('aria-pressed',b.dataset.layout===st.id);
 }

 $('parking-views').hidden=!parking;$('parking-control').hidden=!parking;$('road-controls').hidden=isReference||s.key!=='road';
 for(const b of $('road-controls').querySelectorAll('button'))b.setAttribute('aria-pressed',!isReference&&String(st[b.dataset.road])===b.dataset.value);
 $('camera-control').hidden=!(parking||hasLayouts);document.querySelector('.toolbar').hidden=!(parking||hasLayouts);
 for(const button of $('parking-views').querySelectorAll('button'))button.setAttribute('aria-pressed',parking&&button.dataset.view===(s.key==='outdoor'?({'17':'10','18':'16','19':'14'}[st.id]):st.id));
 for(const [key,b]of sceneButtons)b.setAttribute('aria-current',key===selected);
 preview.dataset.mode=mode;preview.setAttribute('aria-busy','false');preview.dataset.audit=JSON.stringify(isReference?referenceView.audit():world.audit());$('download').disabled=false;updateURL();
 document.querySelector('.wordmark').href=`./?scene=02&mode=${mode}&lanes=6&view=low`;revealActiveGroup();updateSegmentIndicators();moveSelection();
 if(cover){
  const finish=()=>{cover.remove();if(activeCover===cover)activeCover=null;};
  if(themeWipe){
   const ctx=cover.getContext('2d'),start=performance.now(),toDark=mode==='dark',band=600;
   const tick=now=>{const t=Math.min(1,(now-start)/480),ease=t*t*(3-2*t),x=toDark?1920+band-(1920+2*band)*ease:-band+(1920+2*band)*ease;
    ctx.clearRect(0,0,1920,1080);ctx.globalCompositeOperation='source-over';ctx.drawImage(previous,0,0);
    ctx.globalCompositeOperation='destination-in';const mask=ctx.createLinearGradient(x-band/2,0,x+band/2,0);mask.addColorStop(0,toDark?'#000':'#0000');mask.addColorStop(1,toDark?'#0000':'#000');ctx.fillStyle=mask;ctx.fillRect(0,0,1920,1080);ctx.globalCompositeOperation='source-over';
    if(t<1)transitionFrame=requestAnimationFrame(tick);else finish();};transitionFrame=requestAnimationFrame(tick);
  }else{const animation=cover.animate([{opacity:1},{opacity:0}],{duration:240,easing:'cubic-bezier(.22,.8,.25,1)'});animation.onfinish=finish;}
 }
}
function updateSegmentIndicators(){
 for(const group of document.querySelectorAll('.view-segments')){if(group.hidden||group.closest('[hidden]'))continue;const active=group.querySelector('[aria-pressed=true]');if(!active)continue;group.style.setProperty('--selection-x',active.offsetLeft+'px');group.style.setProperty('--selection-width',active.offsetWidth+'px');}
}
window.addEventListener('resize',()=>{updateSegmentIndicators();moveSelection();});
for(const b of $('road-controls').querySelectorAll('button'))b.addEventListener('click',()=>{preferences.get('road')[b.dataset.road]=b.dataset.road==='laneCount'?Number(b.dataset.value):b.dataset.value;requestRender();});

let pageTransition=null,requestedTheme=mode,themeAnimation=null,transitionTo=null;
function changeTheme(theme){
 if(requestedTheme===theme)return;
 requestedTheme=theme;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(!reduced)playThemeSound(theme==='dark');
 if(pageTransition){
  if(themeAnimation){themeAnimation.updatePlaybackRate(theme===transitionTo?1:-1);themeAnimation.play();}
  return;
 }
 const commit=()=>{mode=theme;render(false);};
 if(!document.startViewTransition||reduced){commit();return;}
 // R14: reveal from the actual theme control, as in the reference.
 const rect=$('theme-toggle').getBoundingClientRect(),x=rect.left+rect.width/2,y=rect.top+rect.height/2;
 const feather=140,radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))+feather;
 const sheet=document.getElementById('theme-wipe-style')||document.head.appendChild(Object.assign(document.createElement('style'),{id:'theme-wipe-style'}));
 sheet.textContent=`::view-transition-old(root){z-index:1;mask:none}::view-transition-new(root){z-index:2;mask-image:radial-gradient(circle at ${x}px ${y}px,#000 max(0px,calc(var(--theme-radius) - ${feather}px)),transparent max(1px,var(--theme-radius)));mask-repeat:no-repeat}`;
 document.documentElement.classList.add('theme-changing');
 transitionTo=theme;
 const transition=document.startViewTransition(commit);pageTransition=transition;
 transition.ready.then(()=>{
  themeAnimation=document.documentElement.animate([{'--theme-radius':'0px'},{'--theme-radius':`${radius}px`}],{duration:400,easing:'cubic-bezier(.65,0,.35,1)',fill:'both',pseudoElement:'::view-transition-new(root)'});
  if(requestedTheme!==transitionTo){themeAnimation.currentTime=0;themeAnimation.reverse();}
  themeAnimation.onfinish=()=>{if(pageTransition===transition&&mode!==requestedTheme){mode=requestedTheme;render(false);}};
 }).catch(()=>{if(mode!==requestedTheme){mode=requestedTheme;render(false);}});
 transition.finished.catch(()=>{}).finally(()=>{if(pageTransition===transition){pageTransition=null;themeAnimation=null;document.documentElement.classList.remove('theme-changing');if(mode!==requestedTheme){mode=requestedTheme;render(false);}}});
}
$('theme-toggle').addEventListener('click',()=>changeTheme(requestedTheme==='dark'?'light':'dark'));
const scenePage=document.querySelector('main'),creditsPage=$('credits-view');let sceneScroll=0;
function showCredits(open,push=false){
 if(open)sceneScroll=scrollY;
 scenePage.hidden=open;creditsPage.hidden=!open;
 document.title=open?'Credits · SR Scenes':'Intelligent Driving Scenes';
 const target=open?creditsPage:scenePage;
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches)target.animate([{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:180,easing:'cubic-bezier(.22,1,.36,1)'});
 if(push){const q=new URLSearchParams(location.search);q.set('page','credits');history.pushState({srCredits:true},'',`?${q}`);}
 scrollTo({top:open?0:sceneScroll,behavior:'instant'});
 if(open)$('credits-title').focus({preventScroll:true});
}
document.querySelector('.credits').addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();showCredits(true,true);});
$('credits-back').addEventListener('click',e=>{e.preventDefault();if(history.state?.srCredits)history.back();else{showCredits(false);updateURL();}});
document.querySelector('.wordmark').addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();showCredits(false);selected='road';Object.assign(preferences.get('road'),{id:'02',shape:'straight',laneCount:6,cameraView:'low'});requestRender();});
window.addEventListener('popstate',()=>showCredits(new URLSearchParams(location.search).get('page')==='credits'));
for(const key of optionIds)$(key).addEventListener('change',()=>{if(selected==='reference')referenceVehicle=$('vehicle').checked;else preferences.get(selected)[key]=$(key).checked;requestRender();});
for(const button of $('parking-views').querySelectorAll('button'))button.addEventListener('click',()=>{preferences.get(selected).id=selected==='outdoor'?({'10':'17','16':'18','14':'19'}[button.dataset.view]):button.dataset.view;requestRender();});
$('layout').addEventListener('change',()=>{preferences.get(selected).id=$('layout').value;requestRender();});
function frameName(){if(selected==='reference')return `waterfront-study-${mode}-1920x1080`;const st=state();return `${selected}-${st.id}${selected==='road'?'-'+st.laneCount+'lanes-'+st.cameraView:''}-${mode}-${optionIds.map(k=>`${k}-${st[k]?'on':'off'}`).join('-')}`;}
$('download').addEventListener('click',()=>{const name=frameName();currentFrame().toBlob(blob=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name+'.png';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000);});});
try{render();}catch(e){$('status').textContent='This preview requires WebGL. Please reopen in a modern browser.';throw e;}
if(query.get('page')==='credits'){showCredits(true);const q=new URLSearchParams(location.search);q.set('page','credits');history.replaceState(null,'',`?${q}`);}
