import {setAssistDemo} from './assist-demo.js';
import {commitTrafficToggle} from './traffic-toggle.js';
import engineDocument from './engine.html';
import {decodeStartupControls} from './startup-readiness.js';
import {layoutStartupPoster,rememberReloadPoster} from './startup-poster.mjs';
import vehicleThumbnails from './vehicle-thumbnails.json';
import {beginStartup} from './startup-motion.js';
import {waitForEngine,waitForStartupMotion} from './engine-ready.js';
import {createControlPaint} from './control-paint.js?v=interaction-20261027';
import {indoorShadowValues} from './indoor-shadow-settings.js';
import {vehicleShadowPreset} from './vehicle-shadow-settings.js';
import {indoorFinishValues} from './indoor-finish-settings.js';
import {createEntryProject,sceneTypes,setProjectWeather,setProjectVehicle,setProjectOption} from './artboards.js?v=traffic33-20261025';
import {revealScene} from './scene-reveal.js?v=interaction-20261027';
import {mountFormatSelect} from './format-select.js?v=parking-export-20261027';
import {syncExportFormat} from './export-format.js';
import {exportSize,sizeLabel} from './export-size.js';
import {morphSegment,glideIndicator,reducedMotion} from './motion-runtime.js';
import {chooseExportDestination,writeExportFile} from './export-destination.js';

const $=id=>document.getElementById(id),frame=$('engine'),qa=new URLSearchParams(location.search).has('qa'),qaSuffix=qa?'-qa'+(['','1'].includes(new URLSearchParams(location.search).get('qa'))?'':'-'+new URLSearchParams(location.search).get('qa')):'',storageKey='drivescene-ui-draft-project-v2'+qaSuffix,themeKey='sr-ui-draft-theme'+qaSuffix;
mountFormatSelect($('format'));mountFormatSelect($('image-size'),'Export size');
let stillWidth=3840;
const selectedExportSize=(format=$('format').value)=>exportSize(format,stillWidth);
if(qa){try{document.documentElement.dataset.theme=localStorage.getItem(themeKey)||'light'}catch{}}
let saved={};try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}')}catch{}
const controlPaint=createControlPaint();
const project=createEntryProject(saved);for(const board of Object.values(project.boards))board.params.path=false;project.shared.playing=true;project.shared.playback=project.shared.playing;if(project.shared.layers)project.shared.layers.path=false;const icons=await fetch('./icons.json').then(response=>response.json());
let ready=false,status={playing:false},duration=10,videoExtension='mp4',videoAvailable=true,videoReady=false,scrollTimer=0,resizeFrame=0,exporting=false,previewBusy=false,demoUpdating=false,sceneUpdating=false,vehicleUpdating=false,tooltipTimer=0,tooltipLast=0,tooltipAnchor=null,sceneRequest=0;
const api=()=>frame.contentWindow.layoutEngine,bridge=()=>api().draft,board=()=>project.boards[project.active],params=()=>board().params;
const canvasTransport=document.createElement('button');canvasTransport.id='canvas-transport';canvasTransport.type='button';canvasTransport.className='icon-button';canvasTransport.hidden=true;canvasTransport.disabled=true;document.querySelector('.artboard-clip').append(canvasTransport);
const vehicles=[['model-3','Tesla Model 3'],['x6','BMW X6'],['ix','BMW iX'],['xc90','Volvo XC90']],thumb=id=>vehicleThumbnails[id];
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(project))}catch{feedback('Settings could not be saved')}}
function warmParkingAssets(){if(ready&&params().traffic)void bridge().prepareParkingAssets().catch(()=>{});}
function feedback(text){$('feedback').textContent=text;$('feedback').hidden=!text}
function syncExportControls(){const format=syncExportFormat($('format'),$('video-duration'),project.active,{videoAvailable});const size=selectedExportSize(format);$('artboard-size').textContent=sizeLabel(size);$('image-size').value=String(size.width);$('image-size').disabled=format==='video';if(!exporting&&!sceneUpdating)$('export').disabled=!ready||previewBusy||vehicleUpdating||format==='video'&&!videoReady;return format;}
function replaceContent(element,content){if(element.innerHTML===content)return;const populated=!!element.innerHTML;element.getAnimations().forEach(animation=>animation.cancel());element.innerHTML=content;if(populated&&!reducedMotion())element.animate([{opacity:.2,filter:'blur(2px)'},{opacity:1,filter:'blur(0px)'}],{duration:160,easing:'ease-out'})}
function renderTheme(){const dark=document.documentElement.dataset.theme==='dark';if(!$('theme').firstElementChild)replaceContent($('theme'),'<svg class="theme-icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><defs><mask id="draft-moon-cutout"><rect width="24" height="24" fill="white"/><circle class="moon-cutout" cx="25" cy="-2" r="6" fill="black"/></mask></defs><g mask="url(#draft-moon-cutout)"><circle class="sun-disc" cx="12" cy="12" r="4.5" fill="currentColor"/><g class="sun-rays" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></g></svg>');$('theme').setAttribute('aria-label',`Switch to ${dark?'light':'dark'} theme`);document.querySelectorAll('#ud-icAsph stop').forEach((stop,index)=>stop.setAttribute('stop-color',dark?['#7d8597','#535a6a'][index]:['#737b8d','#474e5d'][index]))}
function renderNav(){let group='';$('scene-nav').innerHTML=icons.defs+sceneTypes.map(scene=>{const header=group===scene.group?'':`<div class="nav-title">${scene.group}</div>`;group=scene.group;return header+`<button class="scene-row" data-scene="${scene.id}" data-tip="${scene.label}" aria-label="${scene.label}" ${scene.id===project.active?'aria-current="page"':''}>${icons.nav[scene.icon||scene.id]}<span data-label="${scene.label}">${scene.label}</span></button>`}).join('');renderTheme();requestAnimationFrame(()=>moveNav(true))}
function moveNav(instant=false){const selected=$('scene-nav').querySelector('[aria-current=page]');if(selected){if(innerWidth<640){const item=selected.getBoundingClientRect(),nav=$('scene-nav').getBoundingClientRect();if(item.left<nav.left||item.right>nav.right)selected.scrollIntoView({block:'nearest',inline:'center',behavior:'instant'});}glideIndicator($('scene-nav'),selected.offsetTop,instant,selected.offsetHeight,selected.offsetLeft,selected.offsetWidth)}}
function segment(key,label,choices,value){return `<div class="property"><span class="property-label">${label}</span><div class="segment" role="radiogroup" aria-label="${label}" data-param="${key}">${choices.map(([id,text])=>`<button role="radio" aria-checked="${String(id)===String(value)}" data-value="${id}" tabindex="${String(id)===String(value)?0:-1}" data-tip="${String(text).startsWith('<')?id:label+' '+text}" aria-label="${key==='weather'?{default:'Clear',overcast:'Cloudy',rain:'Rain',snow:'Snow'}[id]:text}">${text}</button>`).join('')}</div></div>`}
// Indoor calibration is fixed at the user-selected dark/light endpoints.
function finishTheme(){return document.documentElement.dataset.theme==='dark'?'dark':'light'}
function syncFinish(theme=finishTheme(),{render=true}={}){
 const parking=vehicleShadowPreset('parking',theme),indoor=project.active==='parking',contact=indoorShadowValues(theme),light=theme==='light';
 if(ready){bridge().parkingCamera({start:.4,duration:1},{render:false});bridge().parkingFinish({...indoorFinishValues(theme),trafficGray:.6,shadow:parking.environment,...(indoor?indoorShadowValues(theme):light?contact:{egoShadow:parking.ego,trafficShadow:parking.traffic,egoOpacity:1,trafficOpacity:1,egoWidth:1,egoLength:1,trafficWidth:1,trafficLength:1})},{render:false});bridge().roadShadow(vehicleShadowPreset('road',theme),{render});}
}
function cameraChoices(){return ['parking','outdoor'].includes(project.active)?[['default','Low'],['raised','High'],['bev','BEV']]:[['low','Low'],['high','High']]}
function renderInspector(){syncExportControls();
 const state=params(),type=project.active;$('vehicle-name').textContent=vehicles.find(vehicle=>vehicle[0]===state.model)?.[1]||'Tesla Model 3';$('scene-group').textContent=board().title;
 let html='';if(type==='road')html+=segment('lanes','Lanes',[[2,'2'],[4,'4'],[6,'6']],state.lanes);
 if(type==='junction')html+=segment('layout','Type',[['05','Cross'],['08','T']],state.layout);if(type==='ramp')html+=segment('layout','Type',[['06','Exit'],['07','Merge']],state.layout);
 if(type!=='junction')html+=segment('camera','Camera',cameraChoices(),state.camera);if(type!=='parking')html+=segment('weather','Weather',Object.entries(icons.weather).filter(([key])=>key!=='overcast'),state.weather);$('scene-properties').innerHTML=html;
 $('assist').hidden=true;
 const layers=[['traffic','Traffic'],['buildings','Buildings'],['trees','Trees'],['waterfront','Coast'],['roadworks','Roadworks']].filter(([key])=>type==='ramp'?key==='traffic':type==='parking'?key==='traffic':type==='outdoor'?['traffic','buildings','trees'].includes(key):key==='waterfront'?type==='road':key==='roadworks'?type==='road':true);
 $('layers').innerHTML=layers.map(([key,label])=>`<button class="layer-row" data-layer="${key}" aria-label="${label}" aria-pressed="${state[key]}" data-tip="${label}" ${key==='roadworks'?'disabled':''}><span>${label}</span><svg class="layer-check" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m2.5 6 2.2 2.2 4.8-4.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`).join('');$('layers').parentElement.hidden=!layers.length;
 renderVehicles();renderAssist(true);sizeSegments();renderLabel();syncJunctionPathLock();
}
function sizeSegments(){document.querySelectorAll('.segment').forEach(container=>{const buttons=[...container.querySelectorAll('button')];if(!buttons.length)return;const available=container.clientWidth-4-(buttons.length-1)*2,base=Math.floor(available/buttons.length),extra=available%buttons.length;buttons.forEach((button,index)=>button.style.width=base+(index<extra?1:0)+'px');morphSegment(container,container.querySelector('[aria-checked=true]')||buttons[0],true)})}
function renderLabel(){const state={...params(),camera:status.parking?.view||params().camera},name=board().title;replaceContent($('artboard-name'),project.active==='road'?`${name} · ${state.lanes} lanes · ${state.camera==='high'?'High':'Low'} camera`:project.active==='junction'?`${name} · ${state.layout==='08'?'T-junction':'Crossroads'}`:`${name} · ${state.camera==='high'?'High':state.camera==='raised'?'High':state.camera==='bev'?'BEV':state.camera==='default'?'Low':'Low'} camera`)} /* ds-allow: Pre-existing metadata and export copy is outside the author-requested theme synchronization; retain frozen wording in this local follow-up. */
function sizeBoard(){cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(layoutBoard)}
function layoutBoard(){layoutStartupPoster();const width=parseFloat($('artboard').style.width);if(ready)bridge().resize(width);if(!sceneUpdating)moveNav(true)}

async function holdFrame(retain=false){if(retain&&!$('frame-cover').hidden)return;const cover=$('frame-cover'),source=bridge().canvas;if(cover.width!==source.width||cover.height!==source.height){cover.width=source.width;cover.height=source.height}cover.getContext('2d').drawImage(source,0,0);cover.hidden=false}
async function releaseFrame(){if(reducedMotion()){$('frame-cover').hidden=true;return}const fade=$('frame-cover').animate([{opacity:1},{opacity:0}],{duration:200,easing:'ease-out'});await fade.finished.catch(()=>{});$('frame-cover').hidden=true}
let sceneSelection=Promise.resolve(),pendingScene=null,sceneReveal=null;
function acknowledgeScene(type){document.querySelectorAll('[data-scene]').forEach(button=>{if(button.dataset.scene===type)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});moveNav(false);}
function selectScene(type){if(!ready){pendingScene=type;acknowledgeScene(type);return Promise.resolve();}if(exporting||previewBusy||vehicleUpdating||type===project.active&&!sceneUpdating)return Promise.resolve();const request=++sceneRequest;sceneUpdating=true;acknowledgeScene(type);sceneReveal?.abort();sceneSelection=sceneSelection.catch(()=>{}).then(async()=>{while(themeTransition)await themeTransition.finished.catch(()=>{});return request===sceneRequest?performScene(type,request):undefined;});return sceneSelection;}
async function performScene(type,request){
 sceneUpdating=true;bridge().suspendIndicator();$('theme').disabled=true;$('inspector-scroll').inert=true;$('scene-transport').disabled=true;canvasTransport.disabled=true;
 await holdFrame(true);await controlPaint('scene');if(request!==sceneRequest)return;
 if(typeof project.shared.playing!=='boolean')project.shared.playing=bridge().get({audit:false}).requestedPlaying;
 project.active=type;status={playing:false};params().path=false;
 if(['parking','outdoor'].includes(type)){params().path=false;params().camera='default';}
 persist();feedback('');
 try{
  await bridge().scene(type,board().seed,params());
  if(request!==sceneRequest)return;
  if(params().model!==api().get().vehicle)await bridge().param('model',params().model);
  if(request!==sceneRequest)return;
  syncFinish(finishTheme(),{render:false});if(type==='junction')bridge().replay();bridge().finishScene({playing:false});sizeBoard();
 }catch(error){if(request===sceneRequest)feedback(error.message);}
 finally{
  if(request===sceneRequest){
   sceneReveal=new AbortController();
   await revealScene({cover:$('frame-cover'),signal:sceneReveal.signal,reduce:reducedMotion(),commit(){
    status=bridge().get({audit:false});renderInspector();renderTransport();
   }});
   if(request!==sceneRequest)return;
   sceneReveal=null;sceneUpdating=false;syncExportControls();$('theme').disabled=false;$('inspector-scroll').inert=false;if(['road','elevated','ramp','junction'].includes(type))bridge().setPlaying(true);status=bridge().get({audit:false});renderTransport();$('scene-transport').disabled=false;canvasTransport.disabled=false;
   if($('export-preview').open)void refreshExportPreview();
  }
 }
}
async function applyParam(key,value,save=true,options={}){const previousTraffic=params().traffic;if(!ready||exporting||previewBusy||sceneUpdating||vehicleUpdating)return false;if(themeTransition)return false;if(key==='camera'&&save&&status.parking?.cameraLocked)return;if(key==='lanes')value=Number(value);if(key==='weather')value=setProjectWeather(project,value);if(save)setProjectOption(project,key,value);const model=key==='model',previousModel=project.shared.model;if(model){vehicleUpdating=true;lockControls(true);value=setProjectVehicle(project,value);}const layout=key==='layout';if(layout){sceneUpdating=true;lockControls(true);await holdFrame();}const intentRequest=sceneRequest;params()[key]=value;const engineValue=key==='camera'&&['parking','outdoor'].includes(project.active)?({parking:{default:'10',raised:'16',bev:'14'},outdoor:{default:'10',raised:'16',bev:'14'}}[project.active][value]||value):value;
 const preparingTraffic=key==='traffic'&&value&&['parking','outdoor'].includes(project.active);
 try{if(model||preparingTraffic)await holdFrame();if(!await controlPaint(key)||intentRequest!==sceneRequest)return false;await bridge().param(key,engineValue,options);if(save)persist();if(layout)await releaseFrame();}catch(error){if(model)setProjectVehicle(project,previousModel);if(key==='traffic')setProjectOption(project,key,previousTraffic);feedback(error.message);return false;}finally{if(preparingTraffic&&intentRequest===sceneRequest)$('frame-cover').hidden=true;if(model){$('frame-cover').hidden=true;vehicleUpdating=false;lockControls(false);renderVehicles();$('vehicle-name').textContent=vehicles.find(vehicle=>vehicle[0]===params().model)[1];}if(layout){sceneUpdating=false;lockControls(false);$('frame-cover').hidden=true;}}
 renderLabel();if(key==='traffic'&&value)warmParkingAssets();if($('export-preview').open)void refreshExportPreview();return true;
}

function toggleLayer(key){if(!ready||exporting||previewBusy||sceneUpdating||vehicleUpdating||themeTransition)return;const button=$('layers').querySelector(`[data-layer="${key}"]`);if(!button||button.disabled)return;if(key==='traffic'){void commitTrafficToggle({button,value:!params()[key],apply:value=>applyParam(key,value),feedback});return;}params()[key]=!params()[key];button.setAttribute('aria-pressed',String(params()[key]));applyParam(key,params()[key],true,{sound:key==='path'})}
function lockControls(busy,{cancel=false}={}){
 $('theme').disabled=busy;$('scene-nav').inert=busy;$('scene-transport').disabled=busy||sceneUpdating||!!(status.junction?.complete||status.parking?.complete);canvasTransport.disabled=busy||sceneUpdating;
 for(const section of $('inspector-scroll').children){if(section.id!=='export-section')section.inert=busy;else for(const child of section.children)if(!['export','feedback'].includes(child.id))child.inert=busy;}
 $('export').disabled=(busy&&!cancel)||sceneUpdating||!exporting&&$('format').value==='video'&&!videoReady;
}
async function exportCurrent(){
 if(exporting){bridge().cancelExport();$('export-label').textContent='Cancelling…';return;}
 if(!ready||previewBusy||sceneUpdating||vehicleUpdating||themeTransition)return;const format=syncExportControls();if(format==='video'&&!videoReady)return;exporting=true;feedback('');lockControls(true,{cancel:true});$('export-label').textContent='Cancel';
 try{if(format==='video')await probeVideo();const handle=await chooseExportDestination({format,name:`${board().type}-${params().weather}`,videoExtension});await holdFrame();const result=await bridge().export({format,...selectedExportSize(format),duration,onProgress:percent=>{$('export-label').textContent=`Cancel · ${percent}%`;$('export').style.setProperty('--progress',percent/100)}});await writeExportFile(handle,result.blob);document.body.dataset.lastExport=JSON.stringify({...result.audit,savedAs:handle.name});window.dispatchEvent(new CustomEvent('ui-draft-export',{detail:result}));feedback('')} /* ds-allow: Pre-existing metadata and export copy is outside the author-requested theme synchronization; retain frozen wording in this local follow-up. */
 catch(error){feedback(error.name==='AbortError'?'Export cancelled':error.message)}
 finally{exporting=false;lockControls(false);$('export-label').textContent='Export';$('export').style.setProperty('--progress',0);await releaseFrame()}
}
function tooltipHide(){clearTimeout(tooltipTimer);if(!$('tooltip').hidden)tooltipLast=performance.now();$('tooltip').hidden=true;tooltipAnchor=null}
function tooltipShow(target){tooltipAnchor=target;const [text,key]=target.dataset.tip.split('|');$('tooltip').replaceChildren(document.createTextNode(text));if(key){const keyboard=document.createElement('kbd');keyboard.textContent=key;$('tooltip').append(keyboard)}$('tooltip').hidden=false;const box=target.getBoundingClientRect(),tip=$('tooltip').getBoundingClientRect();Object.assign($('tooltip').style,{left:Math.round(Math.max(8,Math.min(innerWidth-tip.width-8,box.left+box.width/2-tip.width/2)))+'px',top:Math.round(Math.min(innerHeight-tip.height-8,box.bottom+8))+'px'})}
document.addEventListener('pointerover',event=>{if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return;const target=event.target.closest('[data-tip]');if(!target||target===tooltipAnchor)return;const instant=performance.now()-tooltipLast<600;tooltipHide();tooltipTimer=setTimeout(()=>tooltipShow(target),instant?0:600)});
document.addEventListener('pointerout',event=>{if(event.target.closest('[data-tip]')&&!event.target.closest('[data-tip]').contains(event.relatedTarget))tooltipHide()});document.addEventListener('pointerdown',tooltipHide);
$('scene-nav').addEventListener('click',event=>{const button=event.target.closest('[data-scene]');if(button)void selectScene(button.dataset.scene)});
$('scene-properties').addEventListener('click',event=>{const button=event.target.closest('[data-value]');if(!button||button.disabled||sceneUpdating||vehicleUpdating||previewBusy||exporting||themeTransition)return;const container=button.closest('.segment');if(button.getAttribute('aria-checked')==='true'){if(container.dataset.param==='camera'&&['parking','outdoor'].includes(project.active))applyParam('camera',button.dataset.value);return;}container.querySelectorAll('[role=radio]').forEach(option=>{option.setAttribute('aria-checked',String(option===button));option.tabIndex=option===button?0:-1});morphSegment(container,button);applyParam(container.dataset.param,button.dataset.value);renderLabel()});
$('scene-properties').addEventListener('keydown',event=>{const container=event.target.closest('[role=radiogroup]');if(!container||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const choices=[...container.querySelectorAll('button')],index=choices.indexOf(event.target),next=event.key==='Home'?0:event.key==='End'?choices.length-1:(index+(event.key==='ArrowRight'?1:-1)+choices.length)%choices.length;choices[next].focus();choices[next].click()});
$('layers').addEventListener('click',event=>{const button=event.target.closest('[data-layer]');if(button)toggleLayer(button.dataset.layer)});


function syncCameraLock(){if(!['parking','outdoor'].includes(project.active))return;const locked=!!status.parking?.cameraLocked;const control=$('scene-properties').querySelector('[data-param=camera]');if(control){control.querySelectorAll('button').forEach(button=>{button.disabled=locked;if(status.parking?.view){button.setAttribute('aria-checked',String(button.dataset.value===status.parking.view));button.tabIndex=button.dataset.value===status.parking.view?0:-1;}});const selected=control.querySelector('[aria-checked=true]');if(selected)morphSegment(control,selected,true);control.setAttribute('aria-disabled',String(locked));control.dataset.tip=locked?'Parking camera during playback':'Camera';}}
let assistRenderKey=null;
function renderAssist(force=false){
 const p=status.parking,key=JSON.stringify([project.active,p?.cameraLocked,p?.view]);
 if(!force&&key===assistRenderKey)return;assistRenderKey=key;
 $('assist').hidden=true;syncCameraLock();
}
function renderVehicles(){const strip=$('vehicle-strip');if(!strip.querySelector('button'))strip.innerHTML=vehicles.map(([id,name])=>`<button role="radio" data-vehicle="${id}" aria-label="${name}" data-tip="${name}"><img src="${thumb(id)}" decoding="sync" alt=""></button>`).join('');strip.querySelectorAll('button').forEach(button=>{button.disabled=!ready||vehicleUpdating;button.setAttribute('aria-checked',String(button.dataset.vehicle===params().model));button.tabIndex=button.dataset.vehicle===params().model?0:-1});}
function selectVehicle(id){if(!ready||exporting||previewBusy||sceneUpdating||vehicleUpdating||themeTransition||id===params().model)return;applyParam('model',id);const name=$('vehicle-name');name.textContent=vehicles.find(vehicle=>vehicle[0]===id)[1];if(!reducedMotion())name.animate([{opacity:0},{opacity:1}],{duration:120,easing:'ease-out'});renderVehicles();morphSegment($('vehicle-strip'),$('vehicle-strip').querySelector('[aria-checked=true]'))}
$('vehicle-strip').addEventListener('click',event=>{const button=event.target.closest('[data-vehicle]');if(button)selectVehicle(button.dataset.vehicle)});
$('vehicle-strip').addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const index=vehicles.findIndex(vehicle=>vehicle[0]===params().model),next=event.key==='Home'?0:event.key==='End'?3:(index+(event.key==='ArrowRight'?1:-1)+4)%4;selectVehicle(vehicles[next][0]);$('vehicle-strip').querySelector('[aria-checked=true]').focus()});

let themeTransition=null,requestedTheme=document.documentElement.dataset.theme||'light';
async function setTheme(theme){
 if(exporting||previewBusy||sceneUpdating||vehicleUpdating)return;
 requestedTheme=theme;
 if(themeTransition)return;
 const commit=async(value,animate=false)=>{syncFinish(value,{render:false});if(ready)await bridge().theme(value,{animate});document.documentElement.dataset.theme=value;try{localStorage.setItem(themeKey,value)}catch{}renderTheme()};
 while(document.documentElement.dataset.theme!==requestedTheme){
  const target=requestedTheme;
  const liveScene=ready;
  if(!document.startViewTransition||reducedMotion()){const pending=commit(target);themeTransition={finished:pending};try{await pending}finally{themeTransition=null}continue}
  const rect=$('theme').getBoundingClientRect(),x=rect.left+rect.width/2,y=rect.top+rect.height/2,radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))+180;
  const root=document.documentElement,sceneRect=frame.closest('.artboard-clip').getBoundingClientRect();
  root.style.setProperty('--theme-scene-x',`${x-sceneRect.left}px`);root.style.setProperty('--theme-scene-y',`${y-sceneRect.top}px`);
  root.style.setProperty('--theme-reveal-x',`${x}px`);root.style.setProperty('--theme-reveal-y',`${y}px`);root.style.setProperty('--theme-reveal-radius',`${radius}px`);
  const started=performance.now(),audit={target,started,method:liveScene?'soft-radial-live':'soft-radial-unified',duration:400,feather:160,blur:0};
  let transition=null,unlock;
  // Reserve the transaction before snapshot capture, including rapid taps.
  themeTransition={finished:new Promise(resolve=>{unlock=resolve})};
  try{
   root.classList.add('theme-changing');if(liveScene)root.classList.add('theme-live-scene');frame.contentDocument?.documentElement.classList.add('theme-changing');
   transition=document.startViewTransition(()=>commit(target,liveScene));
   await transition.ready;audit.animationStarted=performance.now();
   // The scene stays live in its own layer; only the shell uses snapshots.
   await transition.finished;
  }catch(error){audit.error=error.message;if(root.dataset.theme!==target)await commit(target,false)}
  finally{if(transition)await transition.finished.catch(()=>{});root.classList.remove('theme-changing');root.classList.remove('theme-live-scene');frame.contentDocument?.documentElement.classList.remove('theme-changing');themeTransition=null;unlock();audit.finished=performance.now();document.body.dataset.themeMotion=JSON.stringify(audit)}
 }
}
$('theme').addEventListener('click',()=>{void setTheme(requestedTheme==='dark'?'light':'dark').then(refreshExportPreview).catch(error=>feedback(error.message))});
$('inspector-scroll').addEventListener('scroll',()=>{clearTimeout(scrollTimer);$('inspector-scroll').classList.add('scrolling');scrollTimer=setTimeout(()=>$('inspector-scroll').classList.remove('scrolling'),1000)},{passive:true});
$('image-size').addEventListener('change',()=>{stillWidth=Number($('image-size').value);syncExportControls();void refreshExportPreview()});
$('format').addEventListener('change',()=>{if(syncExportControls()==='video')void probeVideo().catch(error=>feedback(error.message));void refreshExportPreview()});$('video-duration').addEventListener('change',()=>{duration=Number($('video-duration').value);void refreshExportPreview()});$('export').addEventListener('click',()=>void exportCurrent());
function syncJunctionPathLock(){const path=$('layers').querySelector('[data-layer=path]');if(path)path.disabled=project.active==='junction'&&!!status.junction?.complete;}
let transportRenderKey=null,parkingStatusRenderKey=null,playbackRenderKey=null;
function renderParkingStatus(){
 const node=$('parking-status');if(!node)return;
 const p=status.parking,hidden=!document.body.dataset.ready||!p?.target||!status.features?.path;
 if(hidden){if(parkingStatusRenderKey!=='hidden'){node.hidden=true;delete node.dataset.complete;delete node.dataset.executing;}parkingStatusRenderKey='hidden';return;}
 const gear=p.gear||'P',distance=Number.isFinite(p.remaining)?Math.max(0,p.remaining).toFixed(1):null;
 const instruction=p.complete?'Parked':p.phase==='exit-select'?'Choose exit direction':p.paused?'Paused'+(distance===null?'':'\u2009'+distance+' m'):p.phase==='shift'?'Shifting to '+gear:(p.active?'Continue':'Ready')+(distance===null?'':'\u2009'+distance+' m');
 const executing=!p.complete&&(p.active||p.paused)&&['D','R'].includes(gear);
 const key=gear+'|'+instruction+'|'+!!executing;if(key===parkingStatusRenderKey)return;parkingStatusRenderKey=key;node.hidden=false;
 node.dataset.complete=String(!!p.complete);node.dataset.executing=String(!!executing);
 node.querySelector('.parking-gear text').textContent=gear;node.querySelector('.parking-instruction').textContent=instruction;
 const reminder=p.complete?'Parking complete.':p.phase==='exit-select'?'Check surroundings before moving.':p.paused?'Check surroundings before resuming.':'Parking in progress. Watch your surroundings.';
 node.querySelector('.parking-reminder').textContent=reminder;
 node.setAttribute('aria-label',p.complete?'Parking complete':gear+' '+instruction);
}
function renderPlayback(){
 const control=$('canvas-transport');if(!control)return;
 const parked=['parking','outdoor'].includes(project.active),loaded=document.body.dataset.ready==='true',running=!!status.playing,complete=!!(status.junction?.complete||status.parking?.replayReady),key=JSON.stringify([parked,loaded,running,complete]);if(key===playbackRenderKey)return;playbackRenderKey=key;
 control.hidden=!loaded;control.dataset.parking=String(parked);control.dataset.visible=String(complete);control.tabIndex=complete?0:-1;control.setAttribute('aria-hidden',String(!complete));control.dataset.playing='false';control.dataset.complete=String(complete);control.setAttribute('aria-label','Replay scene');control.dataset.tip='Replay scene';
}
function renderTransport(){
 renderParkingStatus();renderPlayback();const transport=$('scene-transport');
 if(!document.body.dataset.ready){const key='loading:'+project.active;if(transportRenderKey===key)return;transportRenderKey=key;transport.hidden=false;transport.disabled=true;transport.textContent='Loading…';transport.setAttribute('aria-label','Loading scene');return;}
 const complete=!!(status.junction?.complete||status.parking?.complete),running=!!status.playing,assisted=!!status.features?.path,key=JSON.stringify([project.active,running,assisted,complete,!!status.parking?.elapsed]);if(key===transportRenderKey)return;transportRenderKey=key;
 transport.hidden=false;const finished=complete;transport.dataset.finished=String(finished);transport.disabled=finished||exporting||previewBusy||demoUpdating||sceneUpdating||vehicleUpdating||!!themeTransition;const assistName=['parking','outdoor'].includes(project.active)?'Park assist':'Driving assist';transport.textContent=assistName;transport.setAttribute('role','switch');transport.setAttribute('aria-label',assistName);transport.setAttribute('aria-checked',String(assisted));
 transport.dataset.tip=(assisted?'Turn off ':'Turn on ')+assistName.toLowerCase();
}
window.addEventListener('message',event=>{if(event.source!==frame.contentWindow||event.origin!==location.origin)return;if(event.data?.type!=='ui-draft-status')return;const priorView=status.parking?.view;status=event.data.value;document.body.dataset.runtime=JSON.stringify(status);if(sceneUpdating||vehicleUpdating||status.scene!==project.active)return;if(status.features&&params().path!==!!status.features.path){params().path=!!status.features.path;persist();}if(status.parking?.view!==priorView)renderLabel();renderAssist();renderTransport();});
// Shell normalization can remove a heading after the first navigation measure.
new MutationObserver(()=>moveNav(true)).observe($('scene-nav'),{childList:true});
new ResizeObserver(()=>moveNav(true)).observe($('scene-nav'));
new ResizeObserver(sizeBoard).observe($('stage'));new ResizeObserver(sizeSegments).observe($('scene-properties'));window.addEventListener('resize',sizeBoard);window.visualViewport?.addEventListener('resize',sizeBoard);
// Decode the initial scene before exposing it alongside the controls.
await window.__draftStartupPosterReady;
// The decoded first frame and controls enter without an extra frame delay.
renderNav();renderInspector();const startup=beginStartup();$('artboard').setAttribute('aria-busy','true');$('theme').disabled=true;renderTransport();$('debug-links').hidden=!new URLSearchParams(location.search).has('debug');
layoutBoard();
window.__draftStartupProject=structuredClone(project);
const controlsReady=decodeStartupControls(document);controlsReady.catch(()=>{});
const state=params(),initialLayout=({parking:{default:'10',raised:'16',bev:'14'},outdoor:{default:'17',raised:'18',bev:'19'}}[project.active]?.[state.camera])||state.layout,query=new URLSearchParams({review:'ui-draft',quality:'sr50',scene:initialLayout,mode:document.documentElement.dataset.theme||'light',lanes:state.lanes,view:state.camera,model:state.model,buildings:Number(state.buildings),trees:Number(state.trees),waterfront:Number(state.waterfront),roadworks:'0',vehicle:'1',weather:state.weather,path:Number(state.path),traffic:Number(state.traffic),seed:board().seed});query.set('paused','1');frame.dataset.search='?'+query;frame.srcdoc=engineDocument;
try{await waitForEngine({host:window,frame,ready:()=>api()?.get().ready&&api().draft?.get({audit:false}).ready&&api().draft.get({audit:false}).startup?.ready===true,timeout:120000});await controlsReady}catch(error){startup.abort();feedback('Scene could not load. Reload to retry.');const retry=document.createElement('button');retry.textContent='Reload';retry.className='raised';retry.onclick=()=>location.reload();$('feedback').append(retry);throw error;}ready=true;await bridge().param('traffic',state.traffic);syncFinish();layoutBoard();bridge().completeStartup();if(['road','elevated','ramp','junction'].includes(project.active))bridge().setPlaying(project.shared.playing);status=bridge().get({audit:false});renderVehicles();renderAssist();renderTransport();
window.draftController={project,selectScene,applyParam,bridge,get status(){return status},exportCurrent};
if(pendingScene!==null){const target=pendingScene;pendingScene=null;await selectScene(target);}performance.mark('draft-resources-ready');await waitForStartupMotion({host:frame.contentWindow,bridge:bridge()});performance.mark('draft-startup-motion-ready');startup.reveal();await startup.finished;document.body.dataset.ready='true';$('artboard').setAttribute('aria-busy','false');$('theme').disabled=false;for(const id of ['assist','export','scene-transport','canvas-transport'])$(id).disabled=false;renderTransport();if(window.requestIdleCallback)requestIdleCallback(warmParkingAssets,{timeout:800});else setTimeout(warmParkingAssets,0);
addEventListener('pagehide',()=>{if(ready)rememberReloadPoster(bridge().canvas)});
let videoProbe;
function probeVideo(){return videoProbe??=bridge().videoFormat().then(format=>{videoReady=true;videoExtension=format;$('format').querySelector('[value=video]').textContent=`Video · ${format==='mp4'?'MP4':'WebM'}`;syncExportControls();return format;}).catch(error=>{videoAvailable=false;syncExportControls();throw error;});} /* ds-allow: Pre-existing metadata and export copy is outside the author-requested theme synchronization; retain frozen wording in this local follow-up. */

async function replayTransition(replaying,action){
 if(!replaying){await action();return;}
 const cover=$('frame-cover');await holdFrame();cover.style.zIndex='11';
 try{
  bridge().replay();await action();
  if(!bridge().get({audit:false}).requestedPlaying)throw Error('Replay did not start');
  // Reveal the prepared start pose in the same turn. The playback clock keeps
  // running; an extra pause/resume would hold the reset camera between frames.
  bridge().renderReplayFrame();
 }finally{cover.hidden=true;cover.style.zIndex='';}
}
$('scene-transport').addEventListener('click',async()=>{
 if(!ready||exporting||previewBusy||demoUpdating||sceneUpdating||vehicleUpdating||themeTransition||status.junction?.complete||status.parking?.complete)return;
 $('export-preview').open=false;demoUpdating=true;lockControls(true);$('scene-transport').setAttribute('aria-busy','true');
 try{await controlPaint('demo');const current=bridge().get({audit:false});await replayTransition(!!current.parking?.complete&&!current.features.path,async()=>{await setAssistDemo(bridge(),!current.features.path)});params().path=bridge().get({audit:false}).features.path;persist();status=bridge().get({audit:false});renderTransport();}
 catch(error){feedback('Unable to start parking. Please try again.')}finally{demoUpdating=false;$('scene-transport').removeAttribute('aria-busy');lockControls(false);}
});
canvasTransport.addEventListener('click',async()=>{
 if(!ready||exporting||previewBusy||demoUpdating||sceneUpdating||vehicleUpdating||themeTransition)return;
 const current=bridge().get({audit:false}),replaying=!!(current.parking?.replayReady||current.junction?.complete);if(!replaying)return;
 demoUpdating=true;lockControls(true);
 try{await replayTransition(replaying,async()=>{if(['parking','outdoor'].includes(project.active))await bridge().parkingPlay();else if(project.active==='junction')bridge().junctionPlay();else bridge().toggle();});}
 catch(error){feedback('Unable to play this scene. Please try again.');}finally{demoUpdating=false;lockControls(false);}
 status=bridge().get({audit:false});if(['road','elevated','ramp'].includes(project.active)){project.shared.playing=status.requestedPlaying;project.shared.playback=status.requestedPlaying;persist();}renderTransport();
});
let previewURL=null,previewRevision=0;
function clearExportPreview(){previewRevision++;if(previewURL)URL.revokeObjectURL(previewURL);previewURL=null;$('export-preview-image').removeAttribute('src');}
async function refreshExportPreview(){
 if(!$('export-preview').open||!ready||exporting||previewBusy||sceneUpdating||vehicleUpdating||themeTransition)return;
 previewBusy=true;lockControls(true);
 const revision=++previewRevision,format=$('format').value;
 $('export-preview-description').textContent='Preparing preview…';
 try{const result=await bridge().export({format:format==='depth'?'depth':format==='camera'?'camera':'png',...selectedExportSize(format)});if(revision!==previewRevision||!$('export-preview').open)return;
  if(previewURL)URL.revokeObjectURL(previewURL);previewURL=null;const image=$('export-preview-image');image.hidden=format==='camera';
  if(format!=='camera'){previewURL=URL.createObjectURL(result.blob);image.src=previewURL;}
  const dimensions=sizeLabel(result.audit);const descriptions={png:`PNG · ${dimensions}`,depth:`Depth PNG · ${dimensions}`,kit:`${dimensions} · scene.png · perspective.svg · camera.json · depth.png`,camera:`Camera JSON · ${dimensions}`,video:`${dimensions} · ${duration} seconds · 30 fps · preview shows the first frame`}; /* ds-allow: Pre-existing metadata and export copy is outside the author-requested theme synchronization; retain frozen wording in this local follow-up. */
  $('export-preview-description').textContent=descriptions[format];
 }catch(error){if(revision===previewRevision&&$('export-preview').open)$('export-preview-description').textContent=error.message;}finally{previewBusy=false;lockControls(false);if(revision!==previewRevision&&$('export-preview').open)void refreshExportPreview();}
}
$('export-preview').addEventListener('toggle',()=>{if($('export-preview').open)void refreshExportPreview();else clearExportPreview()});
