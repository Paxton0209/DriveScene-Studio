import {playThemeSound} from './theme-sound.js';
import {World} from './world.js';
import {structures,legacyScenes} from './structures.js';
import {createVehicle,createVehicleProxy} from './vehicle.js';
const $=id=>document.getElementById(id),preview=$('preview');
const siteHeader=document.querySelector('header');
siteHeader.classList.toggle('is-scrolled',scrollY>1);
const headerObserver=new IntersectionObserver(([entry])=>siteHeader.classList.toggle('is-scrolled',!entry.isIntersecting));
headerObserver.observe($('header-sentinel'));
// Keep the scrolling workspace fade outside the stationary desktop navigation.
const sceneLayout=document.querySelector('main');
function syncHeaderLayout(){
 if(sceneLayout.hidden)return;
 const headerBox=siteHeader.getBoundingClientRect();
 const workspaceBox=document.querySelector('.workspace').getBoundingClientRect();
 siteHeader.style.setProperty('--workspace-left',`${Math.max(0,workspaceBox.left-headerBox.left)}px`);
 sceneLayout.style.setProperty('--sidebar-top',`${headerBox.height+parseFloat(getComputedStyle(sceneLayout).paddingTop)}px`);
}
const headerLayoutObserver=new ResizeObserver(syncHeaderLayout);
headerLayoutObserver.observe(sceneLayout);headerLayoutObserver.observe(siteHeader);
syncHeaderLayout();
const query=new URLSearchParams(location.search),requested=query.get('scene'),initial=legacyScenes[requested]||requested;
const first=structures.find(s=>s.layouts.some(([id])=>id===initial))||structures[0];
const preferences=new Map(structures.map(s=>[s.key,{id:s.layouts[0][0],buildings:!!s.buildings,waterfront:s.key==='road'&&initial==='13',trees:false,vehicle:true,roadworks:false}]));
preferences.get(first.key).id=initial&&first.layouts.some(([id])=>id===initial)?initial:first.layouts[0][0];
Object.assign(preferences.get('road'),{shape:initial==='13'?'curved':'straight',laneCount:initial==='09'?2:6,cameraView:first.key==='road'&&query.get('view')==='high'?'high':'low'});
preferences.get('ramp').cameraView=first.key==='ramp'&&query.get('view')==='high'?'high':'low';
if(['2','4','6'].includes(query.get('lanes')))preferences.get('road').laneCount=Number(query.get('lanes'));
if(requested==='01')preferences.get(first.key).buildings=false;
if(requested==='12')preferences.get(first.key).roadworks=true;
let savedTheme;try{savedTheme=localStorage.getItem('sr-theme');}catch{}
const initialTheme=query.get('mode')||savedTheme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
let selected=first.key,mode=initialTheme==='dark'?'dark':'light',displayedReference=false;
const comparingNav=false; // Production uses the selected grouped navigation; studies remain in the local scene project.
let navDesign=comparingNav&&['1','2','3'].includes(query.get('nav'))?query.get('nav'):'1';
const optionIds=['buildings','waterfront','trees','vehicle','roadworks'];
$('status').textContent='Loading scene…';
let vehicleReady=false,exportInFlight=false,exportNoticeTimer;
function previewResolution(){const width=matchMedia('(max-width:760px)').matches?Math.min(1280,Math.max(640,Math.ceil(preview.clientWidth*Math.min(devicePixelRatio||1,2)/16)*16)):1920;return [width,Math.round(width*9/16)];}
const world=new World($('scene-canvas'),createVehicleProxy(),{width:previewResolution()[0],height:previewResolution()[1]});
const vehiclePromise=createVehicle();
const referenceView=null;let referenceVehicle=true;
function currentFrame(){return $('scene-canvas');}
function active(){return structures.find(s=>s.key===selected);}
function state(){const st={...preferences.get(selected),mode};for(const key of ['buildings','waterfront','trees','roadworks'])st[key]=!!active()[key]&&!!st[key];if(selected==='road')st.id=st.shape==='curved'?'13':st.laneCount===2?'09':'02';return st;}
function updateURL(){const q=new URLSearchParams();q.set('scene',selected==='reference'?'reference':state().id);q.set('mode',mode);if(selected==='road')q.set('lanes',state().laneCount);if(selected==='road'||selected==='ramp')q.set('view',state().cameraView);if(comparingNav){q.set('study','1');q.set('nav',navDesign);}if(query.has('motion'))q.set('motion',query.get('motion'));if(document.getElementById('credits-view')&&!document.getElementById('credits-view').hidden)q.set('page','credits');history.replaceState(null,'',`?${q}`);}
const sceneButtons=new Map(),sceneGroups=new Map(),categoryButtons=new Map();
const groupSelection=new Map([['open',first.group==='open'?selected:'road'],['closed',first.group==='closed'?selected:'parking']]);
const folderSVG='<svg class="folder-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M2.5 6V4.75A1.5 1.5 0 0 1 4 3.25h3.1c.4 0 .78.16 1.06.44l1.62 1.62a.75.75 0 0 0 .53.22H16A1.5 1.5 0 0 1 17.5 7.03v8.22A1.5 1.5 0 0 1 16 16.75H4a1.5 1.5 0 0 1-1.5-1.5V6Z" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const categorySwitch=document.createElement('div');categorySwitch.className='nav-category-switch';categorySwitch.setAttribute('role','group');categorySwitch.setAttribute('aria-label','Scene category');
for(const [key,label]of [['open','Driving'],['closed','Parking']]){
 const button=document.createElement('button');button.type='button';button.innerHTML=folderSVG;button.append(document.createTextNode(label));button.setAttribute('aria-pressed',String(first.group===key));
 button.addEventListener('click',()=>{selected=groupSelection.get(key);requestRender();});categoryButtons.set(key,button);categorySwitch.append(button);
}
$('scenes').append(categorySwitch);
for(const [key,title]of [['open','Driving scenes'],['closed','Parking scenes']]){
 const section=document.createElement('section'),heading=document.createElement('h2'),items=document.createElement('div');
 section.className='scene-group';heading.className='structure-heading';heading.innerHTML=folderSVG;heading.append(document.createTextNode(title));items.className='structure-items';items.id=`group-${key}`;
 for(const scene of structures.filter(scene=>scene.group===key)){
  const button=document.createElement('button'),image=document.createElement('img'),label=document.createElement('span');
  button.type='button';button.className='scene';button.dataset.structure=scene.key;
  image.className='scene-thumbnail';image.alt='';image.width=240;image.height=135;image.decoding='async';
  label.className='scene-label';label.textContent=scene.name;button.append(image,label);
  button.addEventListener('click',()=>{selected=scene.key;requestRender();});items.append(button);sceneButtons.set(scene.key,button);
 }
 section.append(heading,items);sceneGroups.set(key,section);$('scenes').append(section);
}
const navPill=document.createElement('span');navPill.className='nav-pill';navPill.hidden=true;navPill.setAttribute('aria-hidden','true');$('scenes').prepend(navPill);
const studyButtons=new Map();
if(comparingNav){
 const study=document.createElement('div'),label=document.createElement('span'),options=document.createElement('div');study.className='nav-study';label.className='nav-study-label';label.textContent='导航方案';options.className='nav-study-options';options.setAttribute('role','group');options.setAttribute('aria-label','Navigation design');
 for(const [id,name]of [['1','01 分组'],['2','02 模式'],['3','03 缩略图']]){
  const button=document.createElement('button');button.type='button';button.textContent=name;button.setAttribute('aria-pressed',String(id===navDesign));
  button.addEventListener('click',()=>{navDesign=id;moveSelection();updateURL();});options.append(button);studyButtons.set(id,button);
 }
 study.append(label,options);document.querySelector('header').after(study);
}
function syncNavigation(){
 document.documentElement.dataset.navDesign=navDesign;
 groupSelection.set(active().group,selected);
 for(const [key,section]of sceneGroups)section.hidden=navDesign==='2'&&key!==active().group;
 for(const [key,button]of categoryButtons)button.setAttribute('aria-pressed',String(key===active().group));
 for(const [id,button]of studyButtons)button.setAttribute('aria-pressed',String(id===navDesign));
 for(const [key,button]of sceneButtons){
  button.setAttribute('aria-current',String(key===selected));
  const image=button.querySelector('img');
  if(navDesign==='3'){
   const source=`assets/nav/${key}-${mode}.webp`;
   if(image.getAttribute('src')!==source)image.src=source;
  }
 }
}
syncNavigation();
const scenePicker=$('scene-picker'),sceneMenu=$('mobile-scene-menu'),sceneNav=$('scenes'),desktopAside=document.querySelector('aside'),mobileNav=$('mobile-scene-nav'),mobileMedia=matchMedia('(max-width:760px)'),creditsLink=document.querySelector('.credits'),appearanceControl=document.querySelector('.appearance-control');
function closeSceneSheet(){if(sceneMenu.contains(document.activeElement)&&mobileMedia.matches)scenePicker.focus({preventScroll:true});sceneMenu.classList.remove('is-open');sceneMenu.inert=true;sceneMenu.setAttribute('aria-hidden','true');scenePicker.setAttribute('aria-expanded','false');scenePicker.setAttribute('aria-label','Choose a scene');}
function placeSceneNav(){closeSceneSheet();(mobileMedia.matches?mobileNav:desktopAside).append(sceneNav);if(mobileMedia.matches)$('mobile-menu-footer').append(creditsLink);else appearanceControl.prepend(creditsLink);requestAnimationFrame(moveSelection);}
scenePicker.addEventListener('click',()=>{const open=scenePicker.getAttribute('aria-expanded')!=='true';sceneMenu.classList.toggle('is-open',open);sceneMenu.inert=!open;sceneMenu.setAttribute('aria-hidden',String(!open));scenePicker.setAttribute('aria-expanded',String(open));scenePicker.setAttribute('aria-label',open?'Close scene menu':'Choose a scene');if(open)requestAnimationFrame(()=>{moveSelection();if(sceneMenu.getBoundingClientRect().top<siteHeader.getBoundingClientRect().bottom)window.scrollTo({top:0,behavior:'instant'});});});
sceneMenu.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSceneSheet();scenePicker.focus({preventScroll:true});}});
scenePicker.addEventListener('keydown',e=>{if(e.key==='Escape')closeSceneSheet();});
mobileMedia.addEventListener('change',placeSceneNav);placeSceneNav();
let transitionFrame=0,activeCover=null,pendingRender=0;
function moveSelection(){
 syncNavigation();
 const button=sceneButtons.get(selected),nav=$('scenes');
 if(navDesign!=='1'||!button?.getClientRects().length){navPill.hidden=true;navPill.dataset.ready='false';return;}
 const target=button.getBoundingClientRect(),origin=nav.getBoundingClientRect();
 navPill.style.width=target.width+'px';navPill.style.height=target.height+'px';
 navPill.style.transform=`translate3d(${target.left-origin.left}px,${target.top-origin.top}px,0)`;
 navPill.hidden=false;
 if(navPill.dataset.ready!=='true')requestAnimationFrame(()=>{navPill.dataset.ready='true';});
}
// Pointer and keyboard choices share selected colors; repeated keyboard actions snap immediately.
document.addEventListener('pointerdown',()=>{document.documentElement.dataset.choiceInput='pointer';},true);
document.addEventListener('keydown',event=>{if(['Enter',' ','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))document.documentElement.dataset.choiceInput='keyboard';},true);
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
 if($('current-scene-name'))$('current-scene-name').textContent=active().name;
 cancelAnimationFrame(pendingRender);revealActiveGroup();
 for(const [key,b]of sceneButtons)b.setAttribute('aria-current',key===selected);
 moveSelection();syncSelectedControls();
 pendingRender=requestAnimationFrame(()=>{pendingRender=requestAnimationFrame(()=>{const begin=performance.now();render(true);preview.dataset.renderMs=(performance.now()-begin).toFixed(1);});});
}

function render(animate=false,themeWipe=false){
 if($('current-scene-name'))$('current-scene-name').textContent=active().name;
 cancelAnimationFrame(transitionFrame);
 let cover,previous;
 if(animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  previous=document.createElement('canvas');previous.width=1920;previous.height=1080;
  const ctx=previous.getContext('2d');ctx.drawImage(currentFrame(),0,0,1920,1080);
  if(activeCover){ctx.globalAlpha=Number(getComputedStyle(activeCover).opacity);ctx.drawImage(activeCover,0,0);ctx.globalAlpha=1;}
  cover=document.createElement('canvas');cover.width=1920;cover.height=1080;cover.getContext('2d').drawImage(previous,0,0);cover.className='frame-cover';
 }
 document.querySelectorAll('.frame-cover').forEach(el=>el.remove());activeCover=cover||null;if(cover)preview.append(cover);
 const isReference=selected==='reference',s=active(),st=isReference?null:state();
 if(isReference)referenceView.render(mode,referenceVehicle);else world.update({...st,vehicle:vehicleReady&&st.vehicle});
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
 const ramp=!isReference&&s.key==='ramp';
 $('ramp-camera-control').hidden=!ramp;
 for(const button of $('ramp-views').querySelectorAll('button')){button.disabled=!ramp;button.setAttribute('aria-pressed',ramp&&button.dataset.rampView===st.cameraView);}
 for(const b of $('road-controls').querySelectorAll('button'))b.setAttribute('aria-pressed',!isReference&&String(st[b.dataset.road])===b.dataset.value);
 $('camera-control').hidden=!(parking||hasLayouts);document.querySelector('.toolbar').hidden=!(parking||hasLayouts);
 for(const button of $('parking-views').querySelectorAll('button'))button.setAttribute('aria-pressed',parking&&button.dataset.view===(s.key==='outdoor'?({'17':'10','18':'16','19':'14'}[st.id]):st.id));
 for(const [key,b]of sceneButtons)b.setAttribute('aria-current',key===selected);
 preview.dataset.mode=mode;preview.setAttribute('aria-busy','false');preview.dataset.audit=JSON.stringify(isReference?referenceView.audit():world.audit());$('download').disabled=!vehicleReady||exportInFlight;updateURL();
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
window.addEventListener('resize',()=>{updateSegmentIndicators();moveSelection();const [w,h]=previewResolution();if(world.width!==w||world.height!==h){world.setResolution(w,h);requestRender();}});
new ResizeObserver(()=>{moveSelection();}).observe($('scenes'));
for(const b of $('road-controls').querySelectorAll('button'))b.addEventListener('click',()=>{preferences.get('road')[b.dataset.road]=b.dataset.road==='laneCount'?Number(b.dataset.value):b.dataset.value;requestRender();});
for(const button of $('ramp-views').querySelectorAll('button'))button.addEventListener('click',()=>{preferences.get('ramp').cameraView=button.dataset.rampView;requestRender();});

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
 if(open){sceneScroll=scrollY;closeSceneSheet();}
 scenePage.hidden=open;creditsPage.hidden=!open;siteHeader.classList.toggle('credits-open',open);scenePicker.hidden=open;document.querySelector('.site-signature').hidden=open;
 document.title=open?'Credits · DriveScene Studio':'DriveScene Studio';
 const target=open?creditsPage:scenePage;
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches)target.animate([{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:180,easing:'cubic-bezier(.22,1,.36,1)'});
 if(push){const q=new URLSearchParams(location.search);q.set('page','credits');history.pushState({srCredits:true},'',`?${q}`);}
 scrollTo({top:open?0:sceneScroll,behavior:'instant'});
 if(open)$('credits-title').focus({preventScroll:true});else (mobileMedia.matches?scenePicker:creditsLink).focus({preventScroll:true});
}
document.querySelector('.credits').addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();showCredits(true,true);});
$('credits-back').addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();if(history.state?.srCredits)history.back();else{showCredits(false);updateURL();}});
document.querySelector('.wordmark').addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();showCredits(false);selected='road';Object.assign(preferences.get('road'),{id:'02',shape:'straight',laneCount:6,cameraView:'low'});requestRender();});
window.addEventListener('popstate',()=>showCredits(new URLSearchParams(location.search).get('page')==='credits'));
for(const key of optionIds)$(key).addEventListener('change',()=>{if(selected==='reference')referenceVehicle=$('vehicle').checked;else preferences.get(selected)[key]=$(key).checked;requestRender();});
for(const button of $('parking-views').querySelectorAll('button'))button.addEventListener('click',()=>{preferences.get(selected).id=selected==='outdoor'?({'10':'17','16':'18','14':'19'}[button.dataset.view]):button.dataset.view;requestRender();});
$('layout').addEventListener('change',()=>{preferences.get(selected).id=$('layout').value;requestRender();});
function frameName(){if(selected==='reference')return `waterfront-study-${mode}-1920x1080`;const st=state();return `${selected}-${st.id}${selected==='road'?'-'+st.laneCount+'lanes-'+st.cameraView:selected==='ramp'?'-'+st.cameraView:''}-${mode}-${optionIds.map(k=>`${k}-${st[k]?'on':'off'}`).join('-')}`;}
$('download').addEventListener('click',async()=>{
 if(!vehicleReady||exportInFlight)return;
 const button=$('download'),label=button.querySelector('.export-label'),name=frameName(),snapshot=state(),[w,h]=[world.width,world.height];
 exportInFlight=true;clearTimeout(exportNoticeTimer);button.disabled=true;button.setAttribute('aria-busy','true');delete button.dataset.exportState;label.textContent='Exporting…';$('status').textContent='Preparing PNG…';
 try{
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  world.setResolution(1920,1080);world.update(snapshot);
  const blob=await new Promise(resolve=>currentFrame().toBlob(resolve));
  if(!blob)throw new Error('PNG encoding failed');
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name+'.png';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000);
  label.textContent='Exported';button.dataset.exportState='done';$('status').textContent='PNG download started.';
  exportNoticeTimer=setTimeout(()=>{label.textContent='Export PNG';delete button.dataset.exportState;$('status').textContent='';},2400);
 }catch(error){console.error(error);label.textContent='Try again';$('status').textContent='Export failed. Please try again.';}
 finally{exportInFlight=false;button.setAttribute('aria-busy','false');world.setResolution(w,h);render(false);}
});
try{render();}catch(e){$('status').textContent='This preview requires WebGL. Please reopen in a modern browser.';throw e;}
if(query.get('page')==='credits'){showCredits(true);const q=new URLSearchParams(location.search);q.set('page','credits');history.replaceState(null,'',`?${q}`);}

function installVehicle(car){world.setVehicle(car);vehicleReady=true;$('status').replaceChildren();render(false);preview.dataset.vehicleReady='true';}
function failedVehicle(error){console.error(error);$('status').textContent='Vehicle could not load. ';const retry=document.createElement('button');retry.type='button';retry.textContent='Retry';retry.addEventListener('click',()=>{retry.disabled=true;createVehicle().then(installVehicle).catch(failedVehicle);});$('status').append(retry);}
vehiclePromise.then(installVehicle).catch(failedVehicle);
