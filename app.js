import {playThemeSound} from './theme-sound.js';
import {World} from './world.js';
import {structures,legacyScenes} from './structures.js';
import {createVehicle,createVehicleProxy} from './vehicle.js';
import {disposeVehicle} from './dispose-vehicle.js';
import {createTransportIcon} from './transport-icon.js';
import {initContinuousCorners} from './continuous-corners.js';
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
headerLayoutObserver.observe(sceneLayout);headerLayoutObserver.observe(siteHeader);headerLayoutObserver.observe(document.querySelector('.preview-shell'));
syncHeaderLayout();
const query=new URLSearchParams(location.search),requested=query.get('scene'),initial=legacyScenes[requested]||requested;
const first=structures.find(s=>s.layouts.some(([id])=>id===initial))||structures[0];
const preferences=new Map(structures.map(s=>[s.key,{id:s.layouts[0][0],buildings:!!s.buildings,waterfront:s.key==='road'&&requested==='13',trees:false,vehicle:true,roadworks:false}]));
preferences.get(first.key).id=initial&&first.layouts.some(([id])=>id===initial)?initial:first.layouts[0][0];
Object.assign(preferences.get('road'),{laneCount:initial==='09'?2:6,cameraView:first.key==='road'&&query.get('view')==='high'?'high':'low'});
preferences.get('junction').cameraView=first.key==='junction'&&query.get('view')==='low'?'low':'high';
preferences.get('junction').junctionPosition=query.get('position')==='approaching'||(first.key==='junction'&&query.get('view')==='low'&&!query.has('position'))?'approaching':'near';
preferences.get('junction').cameraView=preferences.get('junction').junctionPosition==='near'?'high':'low';
preferences.get('elevated').cameraView=first.key==='elevated'&&query.get('view')==='high'?'high':'low';
preferences.get('ramp').cameraView=first.key==='ramp'&&query.get('view')==='high'?'high':'low';
if(['2','4','6'].includes(query.get('lanes')))preferences.get('road').laneCount=Number(query.get('lanes'));
if(requested==='01')preferences.get(first.key).buildings=false;
if(requested==='12')preferences.get(first.key).roadworks=true;
for(const key of ['buildings','waterfront','trees','vehicle','roadworks'])if(query.has(key))preferences.get(first.key)[key]=query.get(key)==='1';
for(const preference of preferences.values())for(const key of ['buildings','waterfront','trees','vehicle','roadworks'])preference[key]=preferences.get(first.key)[key];
let savedTheme;try{savedTheme=localStorage.getItem('sr-theme');}catch{}
const initialTheme=query.get('mode')||savedTheme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
let selected=first.key,mode=initialTheme==='dark'?'dark':'light',displayedReference=false;
const comparingNav=false; // Production uses the selected grouped navigation; studies remain in the local scene project.
let navDesign=comparingNav&&['1','2','3'].includes(query.get('nav'))?query.get('nav'):'1';
const optionIds=['buildings','waterfront','trees','vehicle','roadworks'];
let vehicleReady=false,vehicleFullReady=false,junctionRequested=false;
function previewResolution(){const mobile=matchMedia('(max-width:760px)').matches;const width=Math.min(mobile?1280:1440,Math.max(640,Math.ceil(preview.clientWidth*Math.min(devicePixelRatio||1,2)/16)*16));return [width,Math.round(width*9/16)];}
requestAnimationFrame(()=>requestAnimationFrame(()=>{document.documentElement.dataset.uiReady='true';}));
const vehiclePromise=createVehicle();
await new Promise(resolve=>setTimeout(resolve,0));
performance.mark('studio-renderer-start');
const world=await World.create($('scene-canvas'),createVehicleProxy(),{width:previewResolution()[0],height:previewResolution()[1],measure:query.has("perf")});
world.initializingScene=true;
performance.measure('studio-renderer','studio-renderer-start');
await new Promise(resolve=>setTimeout(resolve,0));
world.onCameraFrame=moving=>{if(selected==='junction'){junctionRequested=false;syncJunctionTransport();}preview.dataset.cameraMoving=String(moving);if(!moving||query.has('perf'))preview.dataset.cameraPose=JSON.stringify({position:world.camera.position.toArray(),aim:world.cameraAim.toArray(),offset:world.camera.view.offsetY,car:world.car.position.toArray(),anchor:world.captureCamera().anchor.toArray()});if(!moving){preview.dataset.audit=JSON.stringify(world.audit());}};
world.onEnvironmentFrame=moving=>{preview.dataset.environmentMoving=String(moving);if(!moving){preview.dataset.audit=JSON.stringify(world.audit());}};
world.onLayoutFrame=moving=>{preview.dataset.layoutMoving=String(moving);if(!moving){preview.dataset.audit=JSON.stringify(world.audit());}};
document.addEventListener('visibilitychange',()=>{if(document.hidden){world.finishLayoutTransition();world.finishCameraMotion();world.finishEnvironmentMotion();world.finishLayoutMotion();}});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{if(event.matches){world.finishLayoutTransition();world.finishCameraMotion();world.finishEnvironmentMotion();world.finishLayoutMotion();}});
const referenceView=null;let referenceVehicle=true;

function currentFrame(){return $('scene-canvas');}
function active(){return structures.find(s=>s.key===selected);}
function state(){const st={...preferences.get(selected),mode};for(const key of ['buildings','waterfront','trees','roadworks'])st[key]=!!active()[key]&&!!st[key];if(selected==='road')st.id=st.laneCount===2?'09':'02';return st;}
function updateURL(){const q=new URLSearchParams();q.set('scene',selected==='reference'?'reference':state().id);q.set('mode',mode);if(selected==='road')q.set('lanes',state().laneCount);if(['road','ramp','junction','elevated'].includes(selected))q.set('view',state().cameraView);if(selected==='junction')q.set('position',state().junctionPosition);for(const key of optionIds)q.set(key,state()[key]?'1':'0');if(comparingNav){q.set('study','1');q.set('nav',navDesign);}if(query.has('motion'))q.set('motion',query.get('motion'));if(document.getElementById('credits-view')&&!document.getElementById('credits-view').hidden)q.set('page','credits');history.replaceState(null,'',`?${q}`);}
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
  button.addEventListener('click',()=>{if(selected===scene.key)return;selected=scene.key;requestRender();});items.append(button);sceneButtons.set(scene.key,button);
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
let transitionFrame=0,activeCover=null,pendingRender=0,renderRevision=0;
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
const morphTransportIcon=createTransportIcon(document.querySelector('.junction-motion-icon'));
let junctionTransportState='',junctionProgressPercent=-1;
function syncJunctionTransport(){
 const near=preferences.get('junction').junctionPosition==='near',moving=selected==='junction'&&!!world.cameraMotion,busy=moving||junctionRequested,progress=moving?(world.cameraMotion.progress||0):junctionRequested?0:near?1:0;
 const status=busy?'playing':near?'replay':'ready';
 if(status!==junctionTransportState){junctionTransportState=status;const button=$('junction-play');button.dataset.motionState=status;$('junction-positions').dataset.motionState=status;button.hidden=false;button.disabled=busy;$('junction-playing').hidden=!busy;$('junction-play-label').textContent='Play';button.setAttribute('aria-label','Play approach animation');morphTransportIcon(busy);}
 const bar=$('junction-progress');$('junction-positions').style.setProperty('--progress',String(progress));const percent=Math.round(progress*100);if(percent!==junctionProgressPercent){junctionProgressPercent=percent;bar.setAttribute('aria-valuenow',String(percent));bar.setAttribute('aria-valuetext',busy?`${percent}% complete`:near?'Stopped at junction':'Ready to approach');}
}
function syncSelectedControls(){
 const st=selected==='reference'?null:state();if(!st)return;
 for(const b of $('road-controls').querySelectorAll('button'))b.setAttribute('aria-pressed',String(st[b.dataset.road])===b.dataset.value);
 for(const b of $('parking-views').querySelectorAll('button'))b.setAttribute('aria-pressed',b.dataset.view===(selected==='outdoor'?({'17':'10','18':'16','19':'14'}[st.id]):st.id));
 for(const b of $('layout-options').querySelectorAll('button'))b.setAttribute('aria-pressed',b.dataset.layout===st.id);
 for(const b of $('junction-views').querySelectorAll('button'))b.setAttribute('aria-pressed',selected==='junction'&&b.dataset.junctionView===st.cameraView);
 for(const b of $('ramp-views').querySelectorAll('button'))b.setAttribute('aria-pressed',['ramp','elevated'].includes(selected)&&b.dataset.rampView===st.cameraView);
 syncJunctionTransport();
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
function requestRender(motion='scene'){
 ++renderRevision;

 if($('current-scene-name'))$('current-scene-name').textContent=active().name;
 cancelAnimationFrame(pendingRender);revealActiveGroup();
 for(const [key,b]of sceneButtons)b.setAttribute('aria-current',key===selected);
 moveSelection();syncSelectedControls();
 pendingRender=requestAnimationFrame(()=>{pendingRender=requestAnimationFrame(()=>{const begin=performance.now();render(true,false,motion);preview.dataset.renderMs=(performance.now()-begin).toFixed(1);});});
}

function render(animate=false,themeWipe=false,motion='scene'){
 const revision=++renderRevision;
 if($('current-scene-name'))$('current-scene-name').textContent=active().name;
 cancelAnimationFrame(transitionFrame);
 let cover,previous;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const environmentMotion=animate&&motion==='growth'&&vehicleReady&&!reduced&&document.documentElement.dataset.choiceInput!=='keyboard';
 const structureMotion=animate&&motion==='layout'&&selected==='junction'&&vehicleReady&&!reduced&&document.documentElement.dataset.choiceInput!=='keyboard';
 const layoutMotion=animate&&motion==='layout'&&selected==='road'&&vehicleReady&&!reduced&&document.documentElement.dataset.choiceInput!=='keyboard';
 const cameraMotion=animate&&motion==='camera'&&vehicleReady&&!reduced&&document.documentElement.dataset.choiceInput!=='keyboard';
 if(animate&&vehicleReady&&!reduced&&!cameraMotion&&!environmentMotion&&!layoutMotion&&!structureMotion&&document.documentElement.dataset.choiceInput!=='keyboard'){
  const frame=currentFrame();cover=document.createElement('canvas');cover.width=frame.width;cover.height=frame.height;
  const ctx=cover.getContext('2d');ctx.drawImage(frame,0,0);
  if(activeCover){ctx.globalAlpha=Number(getComputedStyle(activeCover).opacity);ctx.drawImage(activeCover,0,0,cover.width,cover.height);ctx.globalAlpha=1;}
  cover.className='frame-cover';
  if(themeWipe){previous=document.createElement('canvas');previous.width=1920;previous.height=1080;previous.getContext('2d').drawImage(cover,0,0,1920,1080);cover.width=1920;cover.height=1080;ctx.drawImage(previous,0,0);}
 }
 document.querySelectorAll('.frame-cover').forEach(el=>el.remove());activeCover=cover||null;if(cover)preview.append(cover);
 const isReference=selected==='reference',s=active(),st=isReference?null:state();
 if(!vehicleReady&&!isReference){const mask=optionIds.reduce((bits,key,i)=>bits+(st[key]?1<<i:0),0),lanes=selected==='road'?st.laneCount:0,view=['road','ramp','junction','elevated'].includes(selected)?st.cameraView:'low';document.documentElement.style.setProperty('--startup-frame',`url("assets/startup/states/${st.id}-${lanes}-${view}-${mode}-${mask}.webp?v=139")`);}
 const deferred=animate&&!cameraMotion&&!environmentMotion&&!layoutMotion&&!structureMotion&&!isReference&&vehicleReady;preview.dataset.renderPending=String(deferred);
 if(isReference)referenceView.render(mode,referenceVehicle);else if(!world.initializingScene&&(vehicleReady||!st.vehicle))world.update({...st,vehicle:vehicleReady&&st.vehicle},{cameraMotion,environmentMotion,layoutMotion,structureMotion,deferRender:deferred});
 $('scene-canvas').hidden=false;$('reference-image').hidden=true;displayedReference=isReference;
 $('reference').setAttribute('aria-current',isReference);
 $('scene-title').textContent=isReference?'Visual key':s.name;
 $('scene-canvas').setAttribute('aria-label',isReference?`Visual key, ${mode}, BMW vehicle`:`${s.name}, ${mode}, ${optionIds.filter(k=>st[k]).join(', ')}`);
 document.documentElement.dataset.theme=mode;
 try{localStorage.setItem('sr-theme',mode);}catch{}
 document.querySelector('.credits').href=`credits.html?mode=${mode}&scene=${encodeURIComponent(isReference?'reference':st.id)}`;
 const themeButton=$('theme-toggle');themeButton.setAttribute('aria-pressed',mode==='dark');themeButton.setAttribute('aria-label',`Switch to ${mode==='dark'?'light':'dark'} theme`);themeButton.title=themeButton.getAttribute('aria-label');
 for(const key of optionIds){const available=key==='vehicle'||(!isReference&&!!s[key]);$(key).closest('label').hidden=!available;$(key).disabled=!available;$(key).checked=isReference?key==='vehicle'&&referenceVehicle:st[key];}
 const parking=!isReference&&s.group==='closed';
 const hasLayouts=!isReference&&!parking&&s.key!=='road'&&s.layouts.length>1;$('layout-control').hidden=!hasLayouts;
 if(hasLayouts){
  $('layout-label').textContent=s.key==='junction'?'Junction type':'Ramp type';
  $('layout').replaceChildren(...s.layouts.map(([id,name])=>new Option(name,id)));$('layout').value=st.id;
  if($('layout-options').dataset.structure!==s.key){$('layout-options').replaceChildren(...s.layouts.map(([id,name])=>{const b=document.createElement('button');b.type='button';b.textContent=name.replace('High-angle ','').replace('crossroads','Crossroads');b.dataset.layout=id;b.addEventListener('click',()=>{preferences.get(selected).id=id;requestRender('layout');});return b;}));$('layout-options').dataset.structure=s.key;}
  for(const b of $('layout-options').querySelectorAll('button'))b.setAttribute('aria-pressed',b.dataset.layout===st.id);
 }

 $('parking-views').hidden=!parking;$('parking-control').hidden=!parking;$('road-controls').hidden=isReference||s.key!=='road';
 const junction=!isReference&&s.key==='junction';
 $('junction-camera-control').hidden=true;
 $('junction-position-control').hidden=!junction;
 syncJunctionTransport();
 for(const button of $('junction-views').querySelectorAll('button')){button.disabled=!junction;button.setAttribute('aria-pressed',junction&&button.dataset.junctionView===st.cameraView);}
 const ramp=!isReference&&['ramp','elevated'].includes(s.key);
 $('ramp-camera-control').hidden=!ramp;
 for(const button of $('ramp-views').querySelectorAll('button')){button.disabled=!ramp;button.setAttribute('aria-pressed',ramp&&button.dataset.rampView===st.cameraView);}
 for(const b of $('road-controls').querySelectorAll('button'))b.setAttribute('aria-pressed',!isReference&&String(st[b.dataset.road])===b.dataset.value);
 $('camera-control').hidden=!(parking||hasLayouts||ramp);document.querySelector('.toolbar').hidden=!(parking||hasLayouts||ramp);
 for(const button of $('parking-views').querySelectorAll('button'))button.setAttribute('aria-pressed',parking&&button.dataset.view===(s.key==='outdoor'?({'17':'10','18':'16','19':'14'}[st.id]):st.id));
 for(const [key,b]of sceneButtons)b.setAttribute('aria-current',key===selected);
 preview.dataset.mode=mode;preview.setAttribute('aria-busy',String(world.initializingScene||!vehicleReady&&(isReference?referenceVehicle:st.vehicle)));if(!deferred&&(isReference||world.state))preview.dataset.audit=JSON.stringify(isReference?referenceView.audit():world.audit());$('download').disabled=!vehicleFullReady||deferred;$('download').title=vehicleFullReady?'Download PNG':'Preparing full-quality PNG';updateURL();
 document.querySelector('.wordmark').href=`./?scene=02&mode=${mode}&lanes=6&view=low`;revealActiveGroup();updateSegmentIndicators();moveSelection();
 const revealFrame=()=>{
 if(revision!==renderRevision)return;
 if(deferred){if(!world.preparedRoots.has(world.root))world.renderPreparedFrame();world.renderFrame();preview.dataset.audit=JSON.stringify(world.audit());preview.dataset.renderPending='false';$('download').disabled=!vehicleFullReady;}
 if(cover){
  const finish=()=>{cover.remove();if(activeCover===cover)activeCover=null;};
  if(themeWipe){
   const ctx=cover.getContext('2d'),start=performance.now(),toDark=mode==='dark',band=600;
   const tick=now=>{const t=Math.min(1,(now-start)/480),ease=t*t*(3-2*t),x=toDark?1920+band-(1920+2*band)*ease:-band+(1920+2*band)*ease;
    ctx.clearRect(0,0,1920,1080);ctx.globalCompositeOperation='source-over';ctx.drawImage(previous,0,0);
    ctx.globalCompositeOperation='destination-in';const mask=ctx.createLinearGradient(x-band/2,0,x+band/2,0);mask.addColorStop(0,toDark?'#000':'#0000');mask.addColorStop(1,toDark?'#0000':'#000');ctx.fillStyle=mask;ctx.fillRect(0,0,1920,1080);ctx.globalCompositeOperation='source-over';
    if(t<1)transitionFrame=requestAnimationFrame(tick);else finish();};transitionFrame=requestAnimationFrame(tick);
  }else{const animation=cover.animate([{opacity:1},{opacity:0}],{duration:layoutMotion?160:motion==='element'?240:motion==='layout'?500:220,easing:motion==='layout'&&selected==='ramp'?'cubic-bezier(.4,0,.2,1)':'cubic-bezier(.33,0,.2,1)'});animation.onfinish=finish;}
 }
 };
 // Compile new scene programs without holding the input handler until GPU completion.

 if(deferred){world.prepareScene().then(revealFrame).catch(error=>{console.error(error);revealFrame();});}else revealFrame();
}
function updateSegmentIndicators(){
 for(const group of document.querySelectorAll('.view-segments')){if(group.hidden||group.closest('[hidden]'))continue;const active=group.querySelector('[aria-pressed=true]');if(!active)continue;group.style.setProperty('--selection-x',active.offsetLeft+'px');group.style.setProperty('--selection-width',active.offsetWidth+'px');}
}
let resizeChoicesTimer=0;
function syncChoiceGeometry(){document.documentElement.dataset.resizing='true';clearTimeout(resizeChoicesTimer);resizeChoicesTimer=setTimeout(()=>{delete document.documentElement.dataset.resizing;},120);updateSegmentIndicators();}
const choiceResizeTimers=new WeakMap();
const choiceResizeObserver=new ResizeObserver(entries=>{
 for(const {target:group} of entries){group.dataset.resizing='true';clearTimeout(choiceResizeTimers.get(group));choiceResizeTimers.set(group,setTimeout(()=>{delete group.dataset.resizing;},120));}
 updateSegmentIndicators();
});
for(const group of document.querySelectorAll('.view-segments'))choiceResizeObserver.observe(group);
window.addEventListener('resize',()=>{syncChoiceGeometry();world.finishLayoutTransition();world.finishCameraMotion();world.finishEnvironmentMotion();world.finishLayoutMotion();moveSelection();const [w,h]=previewResolution();if(world.width!==w||world.height!==h){world.setResolution(w,h);requestRender();}});
new ResizeObserver(()=>{moveSelection();}).observe($('scenes'));
for(const b of $('road-controls').querySelectorAll('button'))b.addEventListener('click',()=>{const key=b.dataset.road,value=key==='laneCount'?Number(b.dataset.value):b.dataset.value;if(preferences.get('road')[key]===value)return;preferences.get('road')[key]=value;requestRender(key==='cameraView'?'camera':'layout');});
for(const button of $('ramp-views').querySelectorAll('button'))button.addEventListener('click',()=>{if(preferences.get(selected).cameraView===button.dataset.rampView)return;preferences.get(selected).cameraView=button.dataset.rampView;requestRender('camera');});

for(const button of $('junction-views').querySelectorAll('button'))button.addEventListener('click',()=>{if(preferences.get('junction').cameraView===button.dataset.junctionView)return;preferences.get('junction').cameraView=button.dataset.junctionView;requestRender('camera');});

$('junction-play').addEventListener('click',()=>{
 if(junctionRequested||world.cameraMotion)return;
 // Settle a type change before resetting the camera for an approach replay.
 world.finishLayoutTransition();
 const preference=preferences.get('junction');
 if(preference.junctionPosition==='near'){
  preference.junctionPosition='approaching';preference.cameraView='low';
  world.update(state());
 }
 junctionRequested=true;preference.junctionPosition='near';preference.cameraView='high';requestRender('camera');
});

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
 if(!document.startViewTransition||reduced){mode=theme;render(!reduced,true);return;}
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
document.querySelector('.wordmark').addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();showCredits(false);selected='road';Object.assign(preferences.get('road'),{id:'02',laneCount:6,cameraView:'low'});requestRender();});
window.addEventListener('popstate',()=>showCredits(new URLSearchParams(location.search).get('page')==='credits'));
for(const key of optionIds)$(key).addEventListener('change',()=>{if(selected==='reference')referenceVehicle=$('vehicle').checked;else for(const preference of preferences.values())preference[key]=$(key).checked;requestRender(['buildings','trees','waterfront','roadworks'].includes(key)?'growth':'element');});
for(const button of $('parking-views').querySelectorAll('button'))button.addEventListener('click',()=>{const id=selected==='outdoor'?({'10':'17','16':'18','14':'19'}[button.dataset.view]):button.dataset.view;if(preferences.get(selected).id===id)return;preferences.get(selected).id=id;requestRender('camera');});
$('layout').addEventListener('change',()=>{preferences.get(selected).id=$('layout').value;requestRender('layout');});
function frameName(){if(selected==='reference')return `waterfront-study-${mode}-1920x1080`;const st=state();return `${selected}-${st.id}${selected==='road'?'-'+st.laneCount+'lanes-'+st.cameraView:selected==='junction'?'-'+st.junctionPosition+'-'+st.cameraView:['ramp','elevated'].includes(selected)?'-'+st.cameraView:''}-${mode}-${optionIds.map(k=>`${k}-${st[k]?'on':'off'}`).join('-')}`;}
$('download').addEventListener('click',()=>{
 if(!vehicleFullReady)return;world.finishLayoutTransition();world.finishCameraMotion();world.finishEnvironmentMotion();world.finishLayoutMotion();const name=frameName(),[w,h]=[world.width,world.height];$('download').disabled=true;
 try{world.setResolution(1920,1080);world.update(state());currentFrame().toBlob(blob=>{if(blob){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name+'.png';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),5000);}});}
 finally{world.setResolution(w,h);render(false);}
});

try{render();}catch(e){$('status').textContent='This preview requires WebGL. Please reopen in a modern browser.';throw e;}
initContinuousCorners({forceFallback:query.has('corner-fallback')});
if(query.get('page')==='credits'){showCredits(true);const q=new URLSearchParams(location.search);q.set('page','credits');history.replaceState(null,'',`?${q}`);}

async function installVehicle(car,full=false,animate=false){
 performance.mark('studio-scene-start');
 delete preview.dataset.loadError;world.setVehicle(car);
 // Keep the matching poster visible until the final mesh, shaders and shadow
 // map have produced complete frames. Never reveal the decimated loading car.
 world.initializingScene=true;
 try{let requested;
  do{
   requested=state();await world.prepareInitialScene(requested);
   world.update({...requested,vehicle:true},{deferRender:true});
   performance.measure('studio-scene','studio-scene-start');
   await new Promise(resolve=>setTimeout(resolve,0));
   performance.mark('studio-warm-start');
   await world.prepareScene();world.renderPreparedFrame();
   performance.measure('studio-warm','studio-warm-start');
   await new Promise(requestAnimationFrame);world.renderFrame();
  }while(requested.id!==state().id||requested.laneCount!==state().laneCount);
 }finally{world.initializingScene=false;}
 vehicleReady=true;vehicleFullReady=full;$('status').replaceChildren();render(animate,false,'element');preview.dataset.vehicleReady='true';preview.dataset.vehicleQuality=full?'full':'startup';
}
function failedVehicle(error){preview.dataset.loadError='true';console.error(error);$('status').textContent=vehicleReady?'Full-quality export is unavailable. ':'Vehicle could not load. ';const retry=document.createElement('button');retry.type='button';retry.textContent='Retry';retry.addEventListener('click',()=>{retry.disabled=true;delete preview.dataset.loadError;createVehicle().then(car=>installVehicle(car,true)).catch(failedVehicle);});$('status').append(retry);}
vehiclePromise.then(car=>installVehicle(car,true)).catch(failedVehicle);
