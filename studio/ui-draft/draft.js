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
import {createProject,sceneTypes,setProjectWeather,setProjectVehicle} from './artboards.js?v=traffic33-20261025';
import {revealScene} from './scene-reveal.js?v=interaction-20261027';
import {mountFormatSelect} from './format-select.js?v=parking-export-20261027';
import {syncExportFormat} from './export-format.js';
import {morphSegment,glideIndicator,reducedMotion} from './motion-runtime.js';
import {chooseExportDestination,writeExportFile} from './export-destination.js';

const $=id=>document.getElementById(id),frame=$('engine'),qa=new URLSearchParams(location.search).has('qa'),qaSuffix=qa?'-qa'+(['','1'].includes(new URLSearchParams(location.search).get('qa'))?'':'-'+new URLSearchParams(location.search).get('qa')):'',storageKey='drivescene-ui-draft-project-v2'+qaSuffix,themeKey='sr-ui-draft-theme'+qaSuffix;
mountFormatSelect($('format'));
if(qa){try{document.documentElement.dataset.theme=localStorage.getItem(themeKey)||'light'}catch{}}
let saved={};try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}')}catch{}
const controlPaint=createControlPaint();
const project=createProject(saved);setProjectVehicle(project,'model-3');for(const id of ['parking','outdoor']){project.boards[id].params.path=false;project.boards[id].params.camera='default';}const icons=await fetch('./icons.json').then(response=>response.json());
let ready=false,status={playing:false},duration=10,videoExtension='mp4',videoAvailable=true,videoReady=false,scrollTimer=0,resizeFrame=0,exporting=false,previewBusy=false,sceneUpdating=false,vehicleUpdating=false,tooltipTimer=0,tooltipLast=0,tooltipAnchor=null,sceneRequest=0;
const indicatorMuteKey='drivescene-indicator-muted';let indicatorMuted=false;try{indicatorMuted=localStorage.getItem(indicatorMuteKey)==='true'}catch{}
const api=()=>frame.contentWindow.layoutEngine,bridge=()=>api().draft,board=()=>project.boards[project.active],params=()=>board().params;
const vehicles=[['model-3','Tesla Model 3'],['x6','BMW X6'],['ix','BMW iX'],['xc90','Volvo XC90']],thumb=id=>vehicleThumbnails[id];
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(project))}catch{feedback('Settings could not be saved')}}
function feedback(text){$('feedback').textContent=text;$('feedback').hidden=!text}
function syncExportControls(){const format=syncExportFormat($('format'),$('video-duration'),project.active,{videoAvailable});if(!exporting&&!sceneUpdating)$('export').disabled=!ready||previewBusy||vehicleUpdating||format==='video'&&!videoReady;return format;}
function replaceContent(element,content){if(element.innerHTML===content)return;const populated=!!element.innerHTML;element.getAnimations().forEach(animation=>animation.cancel());element.innerHTML=content;if(populated&&!reducedMotion())element.animate([{opacity:.2,filter:'blur(2px)'},{opacity:1,filter:'blur(0px)'}],{duration:160,easing:'ease-out'})}
function renderTheme(){const dark=document.documentElement.dataset.theme==='dark';if(!$('theme').firstElementChild)replaceContent($('theme'),'<svg class="theme-icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><defs><mask id="draft-moon-cutout"><rect width="24" height="24" fill="white"/><circle class="moon-cutout" cx="25" cy="-2" r="6" fill="black"/></mask></defs><g mask="url(#draft-moon-cutout)"><circle class="sun-disc" cx="12" cy="12" r="4.5" fill="currentColor"/><g class="sun-rays" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></g></svg>');$('theme').setAttribute('aria-label',`Switch to ${dark?'light':'dark'} theme`);document.querySelectorAll('#ud-icAsph stop').forEach((stop,index)=>stop.setAttribute('stop-color',dark?['#7d8597','#535a6a'][index]:['#737b8d','#474e5d'][index]))}
function renderNav(){let group='';$('scene-nav').innerHTML=icons.defs+sceneTypes.map(scene=>{const header=group===scene.group?'':`<div class="nav-title">${scene.group}</div>`;group=scene.group;return header+`<button class="scene-row" data-scene="${scene.id}" data-tip="${scene.label}" aria-label="${scene.label}" ${scene.id===project.active?'aria-current="page"':''}>${icons.nav[scene.icon||scene.id]}<span data-label="${scene.label}">${scene.label}</span></button>`}).join('');renderTheme();requestAnimationFrame(()=>moveNav(true))}
function moveNav(instant=false){const selected=$('scene-nav').querySelector('[aria-current=page]');if(selected){if(innerWidth<640){const item=selected.getBoundingClientRect(),nav=$('scene-nav').getBoundingClientRect();if(item.left<nav.left||item.right>nav.right)selected.scrollIntoView({block:'nearest',inline:'center',behavior:'instant'});}glideIndicator($('scene-nav'),selected.offsetTop,instant,selected.offsetHeight,selected.offsetLeft,selected.offsetWidth)}}
function segment(key,label,choices,value){return `<div class="property"><span class="property-label">${label}</span><div class="segment" role="radiogroup" aria-label="${label}" data-param="${key}">${choices.map(([id,text])=>`<button role="radio" aria-checked="${String(id)===String(value)}" data-value="${id}" tabindex="${String(id)===String(value)?0:-1}" data-tip="${String(text).startsWith('<')?id:label+' '+text}" aria-label="${key==='weather'?{default:'Clear',overcast:'Cloudy',rain:'Rain',snow:'Snow'}[id]:text}">${text}</button>`).join('')}</div></div>`}
// Indoor calibration is fixed at the user-selected dark/light endpoints.
function finishTheme(){return document.documentElement.dataset.theme==='dark'?'dark':'light'}
function syncFinish(theme=finishTheme(),{render=true}={}){
 const parking=vehicleShadowPreset('parking',theme),indoor=project.active==='parking',contact=indoorShadowValues(theme),light=theme==='light';
 if(ready){bridge().parkingFinish({...indoorFinishValues(theme),shadow:parking.environment,...(indoor?indoorShadowValues(theme):{egoShadow:parking.ego,trafficShadow:light?contact.trafficShadow:parking.traffic,egoOpacity:1,trafficOpacity:light?contact.trafficOpacity:1,egoWidth:1,egoLength:1,trafficWidth:light?contact.trafficWidth:1,trafficLength:light?contact.trafficLength:1})},{render:false});bridge().roadShadow(vehicleShadowPreset('road',theme),{render});}
}
function cameraChoices(){return ['parking','outdoor'].includes(project.active)?[['default','Default'],['raised','Raised'],['bev','BEV']]:[['low','Low'],['high','High']]}
function renderIndicatorMute(){const button=$('indicator-mute');button.hidden=project.active!=='junction';button.setAttribute('aria-pressed',String(indicatorMuted));const label=indicatorMuted?'Unmute turn signal sound':'Mute turn signal sound';button.setAttribute('aria-label',label);button.dataset.tip=label;button.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4Z"/>${indicatorMuted?'<path d="m16 9 6 6m0-6-6 6"/>':'<path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>'}</svg>`;}
$('indicator-mute').addEventListener('click',()=>{if(!ready)return;indicatorMuted=!indicatorMuted;try{localStorage.setItem(indicatorMuteKey,String(indicatorMuted))}catch{}bridge().indicatorMuted(indicatorMuted,{unlock:true});renderIndicatorMute()});
window.addEventListener('storage',event=>{if(event.key!==indicatorMuteKey)return;indicatorMuted=event.newValue==='true';if(ready)bridge().indicatorMuted(indicatorMuted);renderIndicatorMute()});
function renderInspector(){renderIndicatorMute();syncExportControls();
 const state=params(),type=project.active;$('vehicle-name').textContent=vehicles.find(vehicle=>vehicle[0]===state.model)?.[1]||'Tesla Model 3';$('scene-group').textContent=board().title;
 let html='';if(type==='road')html+=segment('lanes','Lanes',[[2,'2'],[4,'4'],[6,'6']],state.lanes);
 if(type==='junction')html+=segment('layout','Type',[['05','Cross'],['08','T']],state.layout);if(type==='ramp')html+=segment('layout','Type',[['06','Exit'],['07','Merge']],state.layout);
 if(type!=='junction')html+=segment('camera','Camera',cameraChoices(),state.camera);if(type!=='parking')html+=segment('weather','Weather',Object.entries(icons.weather).filter(([key])=>key!=='overcast'),state.weather);$('scene-properties').innerHTML=html;
 $('assist').hidden=!['parking','outdoor'].includes(type);$('parking-flow')?.append($('assist'));$('assist').setAttribute('aria-checked',String(state.path));
 const layers=[['path','Path'],['traffic','Traffic'],['buildings','Buildings'],['trees','Trees'],['waterfront','Coast'],['roadworks','Roadworks']].filter(([key])=>type==='ramp'?['path','traffic'].includes(key):type==='parking'?key==='traffic':type==='outdoor'?['traffic','buildings','trees'].includes(key):key==='waterfront'?type==='road':key==='roadworks'?type==='road':true);
 $('layers').innerHTML=layers.map(([key,label])=>`<button class="layer-row" data-layer="${key}" aria-label="${label}" aria-pressed="${state[key]}" data-tip="${label}" ${key==='roadworks'?'disabled':''}><span>${label}</span><svg class="layer-check" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="m2.5 6 2.2 2.2 4.8-4.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`).join('');$('layers').parentElement.hidden=!layers.length;
 renderVehicles();renderAssist(true);sizeSegments();renderLabel();syncJunctionPathLock();
}
function sizeSegments(){document.querySelectorAll('.segment').forEach(container=>{const buttons=[...container.querySelectorAll('button')];if(!buttons.length)return;const available=container.clientWidth-4-(buttons.length-1)*2,base=Math.floor(available/buttons.length),extra=available%buttons.length;buttons.forEach((button,index)=>button.style.width=base+(index<extra?1:0)+'px');morphSegment(container,container.querySelector('[aria-checked=true]')||buttons[0],true)})}
function renderLabel(){const state={...params(),camera:status.parking?.view||params().camera},name=board().title;replaceContent($('artboard-name'),project.active==='road'?`${name} · ${state.lanes} lanes · ${state.camera==='high'?'High':'Low'} camera`:project.active==='junction'?`${name} · ${state.layout==='08'?'T-junction':'Crossroads'}`:`${name} · ${state.camera==='high'?'High':state.camera==='raised'?'Raised':state.camera==='bev'?'BEV':state.camera==='default'?'Default':'Low'} camera`)}
function sizeBoard(){cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(layoutBoard)}
function layoutBoard(){layoutStartupPoster();const width=parseFloat($('artboard').style.width);if(ready)bridge().resize(width);if(!sceneUpdating)moveNav(true)}

async function holdFrame(retain=false){if(retain&&!$('frame-cover').hidden)return;const cover=$('frame-cover'),source=bridge().canvas;if(cover.width!==source.width||cover.height!==source.height){cover.width=source.width;cover.height=source.height}cover.getContext('2d').drawImage(source,0,0);cover.hidden=false}
async function releaseFrame(){if(reducedMotion()){$('frame-cover').hidden=true;return}const fade=$('frame-cover').animate([{opacity:1},{opacity:0}],{duration:200,easing:'ease-out'});await fade.finished.catch(()=>{});$('frame-cover').hidden=true}
let sceneSelection=Promise.resolve(),pendingScene=null,sceneReveal=null;
function acknowledgeScene(type){document.querySelectorAll('[data-scene]').forEach(button=>{if(button.dataset.scene===type)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});moveNav(false);}
function selectScene(type){if(!ready){pendingScene=type;acknowledgeScene(type);return Promise.resolve();}if(exporting||previewBusy||vehicleUpdating||type===project.active&&!sceneUpdating)return Promise.resolve();const request=++sceneRequest;sceneUpdating=true;acknowledgeScene(type);sceneReveal?.abort();sceneSelection=sceneSelection.catch(()=>{}).then(async()=>{while(themeTransition)await themeTransition.finished.catch(()=>{});return request===sceneRequest?performScene(type,request):undefined;});return sceneSelection;}
async function performScene(type,request){
 sceneUpdating=true;bridge().suspendIndicator();$('indicator-mute').hidden=true;$('theme').disabled=true;$('inspector-scroll').inert=true;$('scene-transport').disabled=true;
 await holdFrame(true);await controlPaint('scene');if(request!==sceneRequest)return;
 project.active=type;status={playing:false};
 if(['parking','outdoor'].includes(type)){params().path=false;params().camera='default';}
 persist();feedback('');
 try{
  await bridge().scene(type,board().seed,params());
  if(request!==sceneRequest)return;
  if(params().model!==api().get().vehicle)await bridge().param('model',params().model);
  if(request!==sceneRequest)return;
  syncFinish(finishTheme(),{render:false});if(type==='junction')bridge().replay();bridge().finishScene();sizeBoard();
 }catch(error){if(request===sceneRequest)feedback(error.message);}
 finally{
  if(request===sceneRequest){
   sceneReveal=new AbortController();
   await revealScene({cover:$('frame-cover'),signal:sceneReveal.signal,reduce:reducedMotion(),commit(){
    status=bridge().get({audit:false});renderInspector();renderTransport();
   }});
   if(request!==sceneRequest)return;
   sceneReveal=null;sceneUpdating=false;syncExportControls();$('theme').disabled=false;$('inspector-scroll').inert=false;$('scene-transport').disabled=false;
   if($('export-preview').open)void refreshExportPreview();
  }
 }
}
async function applyParam(key,value,save=true,options={}){if(!ready||exporting||previewBusy||sceneUpdating||vehicleUpdating)return;if(themeTransition)return;if(key==='camera'&&save&&status.parking?.cameraLocked)return;if(key==='lanes')value=Number(value);if(key==='weather')value=setProjectWeather(project,value);const model=key==='model',previousModel=project.shared.model;if(model){vehicleUpdating=true;lockControls(true);value=setProjectVehicle(project,value);}const layout=key==='layout';if(layout){sceneUpdating=true;lockControls(true);await holdFrame();}const intentRequest=sceneRequest;params()[key]=value;const engineValue=key==='camera'&&['parking','outdoor'].includes(project.active)?({parking:{default:'10',raised:'16',bev:'14'},outdoor:{default:'10',raised:'16',bev:'14'}}[project.active][value]||value):value;
 try{if(model)await holdFrame();if(!await controlPaint(key)||intentRequest!==sceneRequest)return;await bridge().param(key,engineValue,options);if(save)persist();if(layout)await releaseFrame();}catch(error){if(model)setProjectVehicle(project,previousModel);feedback(error.message);}finally{if(model){$('frame-cover').hidden=true;vehicleUpdating=false;lockControls(false);renderVehicles();$('vehicle-name').textContent=vehicles.find(vehicle=>vehicle[0]===params().model)[1];}if(layout){sceneUpdating=false;lockControls(false);$('frame-cover').hidden=true;}}
 renderLabel();if($('export-preview').open)void refreshExportPreview();
}
function toggleAssist(){
 if(!ready||$('assist').disabled||exporting||previewBusy||sceneUpdating||vehicleUpdating)return;
 if(status.parking?.complete){bridge().prepareExit();return;}
 if(status.playing){bridge().setPlaying(false);return;}
 params().path=true;applyParam('path',true,true,{sound:true});
}
function toggleLayer(key){if(!ready||exporting||previewBusy||sceneUpdating||vehicleUpdating||themeTransition)return;const button=$('layers').querySelector(`[data-layer="${key}"]`);if(!button||button.disabled)return;params()[key]=!params()[key];button.setAttribute('aria-pressed',String(params()[key]));applyParam(key,params()[key],true,{sound:key==='path'})}
function lockControls(busy,{cancel=false}={}){
 $('theme').disabled=busy;$('scene-nav').inert=busy;$('scene-transport').disabled=busy||sceneUpdating;
 for(const section of $('inspector-scroll').children){if(section.id!=='export-section')section.inert=busy;else for(const child of section.children)if(!['export','feedback'].includes(child.id))child.inert=busy;}
 $('export').disabled=(busy&&!cancel)||sceneUpdating||!exporting&&$('format').value==='video'&&!videoReady;
}
async function exportCurrent(){
 if(exporting){bridge().cancelExport();$('export-label').textContent='Cancelling…';return;}
 if(!ready||previewBusy||sceneUpdating||vehicleUpdating||themeTransition)return;const format=syncExportControls();if(format==='video'&&!videoReady)return;exporting=true;feedback('');lockControls(true,{cancel:true});$('export-label').textContent='Cancel';
 try{if(format==='video')await probeVideo();const handle=await chooseExportDestination({format,name:`${board().type}-${params().weather}`,videoExtension});await holdFrame();const result=await bridge().export({format,duration,onProgress:percent=>{$('export-label').textContent=`Cancel · ${percent}%`;$('export').style.setProperty('--progress',percent/100)}});await writeExportFile(handle,result.blob);document.body.dataset.lastExport=JSON.stringify({...result.audit,savedAs:handle.name});window.dispatchEvent(new CustomEvent('ui-draft-export',{detail:result}));feedback('')}
 catch(error){feedback(error.name==='AbortError'?'Export cancelled':error.message)}
 finally{exporting=false;lockControls(false);$('export-label').textContent='Export';$('export').style.setProperty('--progress',0);await releaseFrame()}
}
function tooltipHide(){clearTimeout(tooltipTimer);if(!$('tooltip').hidden)tooltipLast=performance.now();$('tooltip').hidden=true;tooltipAnchor=null}
function tooltipShow(target){tooltipAnchor=target;const [text,key]=target.dataset.tip.split('|');$('tooltip').replaceChildren(document.createTextNode(text));if(key){const keyboard=document.createElement('kbd');keyboard.textContent=key;$('tooltip').append(keyboard)}$('tooltip').hidden=false;const box=target.getBoundingClientRect(),tip=$('tooltip').getBoundingClientRect();Object.assign($('tooltip').style,{left:Math.round(Math.max(8,Math.min(innerWidth-tip.width-8,box.left+box.width/2-tip.width/2)))+'px',top:Math.round(Math.min(innerHeight-tip.height-8,box.bottom+8))+'px'})}
document.addEventListener('pointerover',event=>{if(!matchMedia('(hover:hover) and (pointer:fine)').matches)return;const target=event.target.closest('[data-tip]');if(!target||target===tooltipAnchor)return;const instant=performance.now()-tooltipLast<600;tooltipHide();tooltipTimer=setTimeout(()=>tooltipShow(target),instant?0:600)});
document.addEventListener('pointerout',event=>{if(event.target.closest('[data-tip]')&&!event.target.closest('[data-tip]').contains(event.relatedTarget))tooltipHide()});document.addEventListener('pointerdown',tooltipHide);
$('scene-nav').addEventListener('click',event=>{const button=event.target.closest('[data-scene]');if(button)void selectScene(button.dataset.scene)});
$('scene-properties').addEventListener('click',event=>{const button=event.target.closest('[data-value]');if(!button||button.disabled||sceneUpdating||vehicleUpdating||previewBusy||exporting||themeTransition||button.getAttribute('aria-checked')==='true')return;const container=button.closest('.segment');container.querySelectorAll('[role=radio]').forEach(option=>{option.setAttribute('aria-checked',String(option===button));option.tabIndex=option===button?0:-1});morphSegment(container,button);applyParam(container.dataset.param,button.dataset.value);renderLabel()});
$('scene-properties').addEventListener('keydown',event=>{const container=event.target.closest('[role=radiogroup]');if(!container||!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const choices=[...container.querySelectorAll('button')],index=choices.indexOf(event.target),next=event.key==='Home'?0:event.key==='End'?choices.length-1:(index+(event.key==='ArrowRight'?1:-1)+choices.length)%choices.length;choices[next].focus();choices[next].click()});
$('assist').addEventListener('click',toggleAssist);$('layers').addEventListener('click',event=>{const button=event.target.closest('[data-layer]');if(button)toggleLayer(button.dataset.layer)});


function syncCameraLock(){if(!['parking','outdoor'].includes(project.active))return;const locked=!!status.parking?.cameraLocked;const control=$('scene-properties').querySelector('[data-param=camera]');if(control){control.querySelectorAll('button').forEach(button=>{button.disabled=locked;if(status.parking?.view){button.setAttribute('aria-checked',String(button.dataset.value===status.parking.view));button.tabIndex=button.dataset.value===status.parking.view?0:-1;}});const selected=control.querySelector('[aria-checked=true]');if(selected)morphSegment(control,selected,true);control.setAttribute('aria-disabled',String(locked));control.dataset.tip=locked?'Automatic parking camera':'Camera';}}
let assistRenderKey=null;
function renderAssist(force=false){
 const p=status.parking,key=JSON.stringify([project.active,ready,exporting,previewBusy,status.playing,!!p?.target,p?.complete,p?.mode,p?.exitChoice,p?.exited,p?.phase,!!p?.elapsed,p?.cameraLocked,p?.view]);
 if(!force&&key===assistRenderKey)return;assistRenderKey=key;
 const isParking=['parking','outdoor'].includes(project.active);let hint=$('parking-hint'),directions=$('exit-directions');
 if(!hint){const flow=document.createElement('div');flow.id='parking-flow';$('artboard').append(flow);flow.append($('assist'));hint=document.createElement('p');hint.id='parking-hint';hint.setAttribute('role','status');$('assist').before(hint);directions=document.createElement('div');directions.id='exit-directions';directions.innerHTML='<button data-exit="-1" aria-pressed="false">Left</button><button data-exit="1" aria-pressed="false">Right</button>';$('assist').before(directions);directions.addEventListener('click',e=>{const b=e.target.closest('[data-exit]');if(b)bridge().chooseExit(Number(b.dataset.exit))});}
 $('scene-transport').hidden=isParking;$('parking-flow').hidden=true;/* Temporarily hidden for scene material review. */hint.hidden=!isParking;$('parking-flow').dataset.active=String(status.playing);$('parking-flow').dataset.stage=p?.mode==='out'&&!p.elapsed?'exit-select':'parking';directions.hidden=!isParking||p?.mode!=='out'||p?.elapsed>0;
 directions.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.exit)===p?.exitChoice)));
 const label=p?.complete?'Park out':status.playing?'Pause':p?.elapsed>0?'Resume':p?.mode==='out'?'Start exit':'Start parking';
 $('assist-label').textContent=label;$('assist').setAttribute('role','button');$('assist').removeAttribute('aria-checked');$('assist').disabled=!ready||exporting||previewBusy||!p?.target||p?.mode==='out'&&!p.exitChoice;delete $('assist').dataset.tip;
 hint.hidden=isParking&&p?.mode==='out'&&!p.elapsed;hint.textContent=!p?.target?(p?.exited?'Choose another space':'Click an empty space'):p.complete?'Parked':p.mode==='out'&&!p.exitChoice?'Choose an exit direction':status.playing?({forward:'Moving forward…',aligning:'Aligning…',shift:'Changing direction…',reverse:'Reversing…',exiting:'Leaving space…'}[p.phase]||'Parking…'):p.elapsed>0?'Paused · Click another space':p.mode==='out'?'Exit route ready':'Space selected';
 syncCameraLock();
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
  if(!document.startViewTransition||reducedMotion()){const pending=commit(target);themeTransition={finished:pending};try{await pending}finally{themeTransition=null}continue}
  const rect=$('theme').getBoundingClientRect(),x=rect.left+rect.width/2,y=rect.top+rect.height/2,radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))+180;
  const root=document.documentElement;
  root.style.setProperty('--theme-reveal-x',`${x}px`);root.style.setProperty('--theme-reveal-y',`${y}px`);root.style.setProperty('--theme-reveal-radius',`${radius}px`);
  root.classList.add('theme-changing');frame.contentDocument?.documentElement.classList.add('theme-changing');
  const started=performance.now(),audit={target,started,method:'soft-radial-snapshot',duration:400,feather:160,blur:0};
  // Hold the sampled pose across both snapshots without changing the Play/Pause state.
  if(ready)bridge().beginTheme();
  try{
   const transition=document.startViewTransition(()=>commit(target,false));themeTransition=transition;
   await transition.ready;audit.animationStarted=performance.now();await transition.finished;
  }catch(error){audit.error=error.message;if(root.dataset.theme!==target)await commit(target,false)}
  finally{if(themeTransition)await themeTransition.finished.catch(()=>{});root.classList.remove('theme-changing');frame.contentDocument?.documentElement.classList.remove('theme-changing');if(ready)bridge().endTheme();themeTransition=null;audit.finished=performance.now();document.body.dataset.themeMotion=JSON.stringify(audit)}
 }
}
$('theme').addEventListener('click',()=>{void setTheme(requestedTheme==='dark'?'light':'dark').then(refreshExportPreview).catch(error=>feedback(error.message))});
$('inspector-scroll').addEventListener('scroll',()=>{clearTimeout(scrollTimer);$('inspector-scroll').classList.add('scrolling');scrollTimer=setTimeout(()=>$('inspector-scroll').classList.remove('scrolling'),1000)},{passive:true});
$('format').addEventListener('change',()=>{if(syncExportControls()==='video')void probeVideo().catch(error=>feedback(error.message));void refreshExportPreview()});$('video-duration').addEventListener('change',()=>{duration=Number($('video-duration').value);void refreshExportPreview()});$('export').addEventListener('click',()=>void exportCurrent());
function syncJunctionPathLock(){const path=$('layers').querySelector('[data-layer=path]');if(path)path.disabled=project.active==='junction'&&!!status.junction?.complete;}
let transportRenderKey=null;
function renderTransport(){const key=JSON.stringify([project.active,!!status.parking,status.playing,status.junction?.complete,status.parking?.complete,!!status.parking?.elapsed]);if(key===transportRenderKey)return;transportRenderKey=key;syncJunctionPathLock();const transport=$('scene-transport');if(transport){transport.hidden=['parking','outdoor'].includes(project.active);transport.textContent=status.playing?'Pause':status.junction?.complete||status.parking?.complete?'Replay':status.parking?.elapsed>0?'Continue':'Play';transport.setAttribute('aria-label',transport.textContent+' animation');}}
window.addEventListener('message',event=>{if(event.source!==frame.contentWindow||event.origin!==location.origin||event.data?.type!=='ui-draft-status')return;const priorView=status.parking?.view;status=event.data.value;document.body.dataset.runtime=JSON.stringify(status);if(sceneUpdating||vehicleUpdating)return;if(status.parking?.view!==priorView)renderLabel();if(status.parking&&!status.parking.target&&params().path){params().path=false;persist();$('assist').setAttribute('aria-checked','false');}renderAssist();renderTransport();});
new ResizeObserver(sizeBoard).observe($('stage'));new ResizeObserver(sizeSegments).observe($('scene-properties'));window.addEventListener('resize',sizeBoard);window.visualViewport?.addEventListener('resize',sizeBoard);
// Decode the initial scene before exposing it alongside the controls.
await window.__draftStartupPosterReady;
// The decoded first frame and controls enter without an extra frame delay.
renderNav();renderInspector();const startup=beginStartup();$('debug-links').hidden=!new URLSearchParams(location.search).has('debug');
layoutBoard();
window.__draftStartupProject=structuredClone(project);
const controlsReady=decodeStartupControls(document);controlsReady.catch(()=>{});
const state=params(),initialLayout=({parking:{default:'10',raised:'16',bev:'14'},outdoor:{default:'17',raised:'18',bev:'19'}}[project.active]?.[state.camera])||state.layout,query=new URLSearchParams({review:'ui-draft',quality:'sr50',scene:initialLayout,mode:document.documentElement.dataset.theme||'light',lanes:state.lanes,view:state.camera,model:state.model,buildings:Number(state.buildings),trees:Number(state.trees),waterfront:Number(state.waterfront),roadworks:'0',vehicle:'1',weather:state.weather,path:Number(state.path),traffic:Number(state.traffic),seed:board().seed});if(new URLSearchParams(location.search).get('paused')==='1')query.set('paused','1');frame.dataset.search='?'+query;frame.srcdoc=engineDocument;
try{await waitForEngine({host:window,frame,ready:()=>api()?.get().ready&&api().draft?.get({audit:false}).ready,timeout:120000});await controlsReady}catch(error){startup.abort();feedback('Scene could not load. Reload to retry.');const retry=document.createElement('button');retry.textContent='Reload';retry.className='raised';retry.onclick=()=>location.reload();$('feedback').append(retry);throw error;}ready=true;await bridge().param('traffic',state.traffic);syncFinish();bridge().indicatorMuted(indicatorMuted);for(const id of ['assist','export','scene-transport'])$(id).disabled=false;layoutBoard();bridge().completeStartup();status=bridge().get({audit:false});renderVehicles();renderAssist();renderTransport();
window.draftController={project,selectScene,applyParam,bridge,get status(){return status},exportCurrent};
if(pendingScene!==null){const target=pendingScene;pendingScene=null;await selectScene(target);}performance.mark('draft-resources-ready');await waitForStartupMotion({host:frame.contentWindow,bridge:bridge()});performance.mark('draft-startup-motion-ready');document.body.dataset.ready='true';startup.reveal();
addEventListener('pagehide',()=>{if(ready)rememberReloadPoster(bridge().canvas)});
let videoProbe;
function probeVideo(){return videoProbe??=bridge().videoFormat().then(format=>{videoReady=true;videoExtension=format;$('format').querySelector('[value=video]').textContent=`Video · ${format==='mp4'?'MP4':'WebM'}`;syncExportControls();return format;}).catch(error=>{videoAvailable=false;syncExportControls();throw error;});}

$('scene-transport').addEventListener('click',()=>{if(!ready||exporting||previewBusy||sceneUpdating||vehicleUpdating||themeTransition)return;$('export-preview').open=false;if(['parking','outdoor'].includes(project.active)&&!params().path){toggleAssist();return;}bridge().toggle()});
let previewURL=null,previewRevision=0;
function clearExportPreview(){previewRevision++;if(previewURL)URL.revokeObjectURL(previewURL);previewURL=null;$('export-preview-image').removeAttribute('src');}
async function refreshExportPreview(){
 if(!$('export-preview').open||!ready||exporting||previewBusy||sceneUpdating||vehicleUpdating||themeTransition)return;
 previewBusy=true;lockControls(true);
 const revision=++previewRevision,format=$('format').value;
 $('export-preview-description').textContent='Preparing preview…';
 try{const result=await bridge().export({format:format==='depth'?'depth':format==='camera'?'camera':'png'});if(revision!==previewRevision||!$('export-preview').open)return;
  if(previewURL)URL.revokeObjectURL(previewURL);previewURL=null;const image=$('export-preview-image');image.hidden=format==='camera';
  if(format!=='camera'){previewURL=URL.createObjectURL(result.blob);image.src=previewURL;}
  const descriptions={png:'PNG · 1920 × 1080',depth:'Depth PNG · 1920 × 1080',kit:'scene.png · perspective.svg · camera.json · depth.png',camera:'Camera JSON · camera position, projection and scene settings',video:`${duration} seconds · 30 fps · preview shows the first frame`};
  $('export-preview-description').textContent=descriptions[format];
 }catch(error){if(revision===previewRevision&&$('export-preview').open)$('export-preview-description').textContent=error.message;}finally{previewBusy=false;lockControls(false);if(revision!==previewRevision&&$('export-preview').open)void refreshExportPreview();}
}
$('export-preview').addEventListener('toggle',()=>{if($('export-preview').open)void refreshExportPreview();else clearExportPreview()});
