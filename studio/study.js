import {initExportControls} from './export-controls.js';
import {createVehicleMorph,glideIndicator,morphSegment,reducedMotion,initToggleMotion,animateToggle} from './ui-motion.js?v=finish-106';
const $=id=>document.getElementById(id),product=$('product'),frame=$('engine');
const scenes=[['road','Road','Driving','02-6'],['elevated','Elevated','Driving','03-0'],['junction','Junction','Driving','05-0'],['ramp','Ramp','Driving','06-0'],['parking','Indoor parking','Parking','10-0'],['outdoor','Outdoor parking','Parking','17-0']];
const vehicles=[['x6','BMW X6'],['model-3','Tesla Model 3'],['ix','BMW iX'],['xc90','Volvo XC90']];
const environments={road:['buildings','waterfront','trees','roadworks'],elevated:['buildings','trees'],junction:['buildings','trees'],ramp:[],parking:[],outdoor:['buildings','trees']};
const environmentNames={buildings:'Buildings',waterfront:'Coast',trees:'Trees',roadworks:'Roadworks'};
let sceneOpen=false,vehicleOpen=false,ready=false,theme=document.documentElement.dataset.theme||'light',controlPage=0,controlPages=[],scenePage=0,scenePageSize=6,lastScene='elevated',requestedModel=null,busySince=0,raf=0;
const saved={scene:'road',model:'x6',camera:'low',lanes:6,layout:'02',path:false,weather:'default',buildings:true,waterfront:false,trees:false,roadworks:false};
Object.assign(saved,window.__layoutBoot?.state||{});product.classList.toggle('dark',theme==='dark');
const persistState=()=>{try{sessionStorage.setItem('drivescene-layout-state-v1',JSON.stringify(saved));localStorage.setItem('sr-theme',theme)}catch{}};
const api=()=>frame.contentWindow.layoutEngine;
const button=(text,attrs='')=>`<button type="button" ${attrs}>${text}</button>`;
const chevron=(direction='right')=>`<span class="icon chevron ${direction}" style="--icon:url('icons/imgIconBasicControlsUnfold.svg')" aria-hidden="true"></span>`;
function feedback(text=''){const el=$('feedback');el.textContent=text;el.hidden=!text;requestAnimationFrame(pageControls)}
function syncState(){const s=api().get();saved.model=s.vehicle;if(s.features){saved.path=s.features.path;saved.weather=s.features.weather}saved.lanes=s.state.laneCount||saved.lanes;saved.camera=['parking','outdoor'].includes(saved.scene)?({'17':'10','18':'16','19':'14'}[s.state.id]||s.state.id):(s.state.cameraView||'low');saved.layout=s.state.id;for(const k of Object.keys(environmentNames))saved[k]=!!s.state[k]}
function apply(key,value){
 if(!ready||scenePending||(key==='model'&&requestedModel)||(key==='play'&&$('control-content').querySelector('.play')?.getAttribute('aria-disabled')==='true'))return;
 if(key!=='play'&&saved[key]===value){if(key==='model'){vehicleOpen=false;vehicleMorph.close();renderControls();$('vehicle-entry').querySelector('button')?.focus({preventScroll:true})}return;}
 feedback();if(key==='model'){requestedModel=value;busySince=Date.now()}
 api().param(key,value);if(key==='play')scheduleTransportSync();if(key!=='play'&&key!=='model'){saved[key]=value;persistState()}
 if(key==='model'){vehicleOpen=false;vehicleMorph.close();renderControls();$('vehicle-entry').querySelector('button')?.focus({preventScroll:true})}else if(key!=='play'){for(const b of $('control-content').querySelectorAll(`[data-param="${key}"]`))b.setAttribute('aria-pressed',String(b.dataset.value===String(value)));syncSelections()}
}
function segments(label,key,options,value,disabled=false){return `<div class="control-unit field${disabled?' sample':''}"><div class="field-head">${label}</div><div class="segments" role="radiogroup" aria-label="${label}">${options.map(([v,t])=>button(t,disabled?'disabled':`data-param="${key}" data-value="${v}" role="radio" aria-checked="${String(v)===String(value)}" aria-pressed="${String(v)===String(value)}"`)).join('')}</div></div>`}
function sceneControls(){let html='';if(saved.scene==='road')html+=segments('Lanes','lanes',[[2,'2'],[4,'4'],[6,'6']],saved.lanes);if(['road','elevated','ramp'].includes(saved.scene))html+=segments('Camera','camera',[['low','Low'],['high','High']],saved.camera);if(['parking','outdoor'].includes(saved.scene))html+=segments('Camera','camera',[['10','Default'],['16','Raised'],['14','BEV']],saved.camera);if(saved.scene==='junction')html+=segments('Junction','layout',[['05','Crossroads'],['08','T-junction']],saved.layout)+`<div class="control-unit field">${button('<svg class="junction-motion-icon" width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><path class="progress-track" d="M7.952 5.123C10.384 6.527 12.816 7.932 15.248 9.335C16.016 9.778 16.016 10.222 15.248 10.665C12.816 12.068 10.384 13.473 7.952 14.877C7.184 15.32 6.8 15.098 6.8 14.212C6.8 11.404 6.8 8.596 6.8 5.788C6.8 4.902 7.184 4.68 7.952 5.123Z" style="opacity:1"/><path class="progress-value" d="M7.952 5.123C10.384 6.527 12.816 7.932 15.248 9.335C16.016 9.778 16.016 10.222 15.248 10.665C12.816 12.068 10.384 13.473 7.952 14.877C7.184 15.32 6.8 15.098 6.8 14.212C6.8 11.404 6.8 8.596 6.8 5.788C6.8 4.902 7.184 4.68 7.952 5.123Z" style="opacity:0" pathLength="1"/></svg><span>Play</span>','class="play" aria-label="Play approach animation" data-param="play" data-value="1"')}</div>`;if(saved.scene==='ramp')html+=segments('Ramp','layout',[['06','Exit'],['07','Merge']],saved.layout);return html}
// Keep the approved cloud and slanted rain family; sparse dots distinguish falling snow.
const weatherIcons={"default": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5\"/>", "overcast": "<path d=\"M7 18a4 4 0 1 1 .7-7.94A6 6 0 0 1 19 9.5a4.25 4.25 0 0 1-.5 8.5Z\"/>", "rain": "<path d=\"M7 15a4 4 0 1 1 .7-7.94A6 6 0 0 1 19 6.5a4.25 4.25 0 0 1-.5 8.5M8 18l-1 3m6-3-1 3m6-3-1 3\"/>", "snow": "<path d=\"M7 15a4 4 0 1 1 .7-7.94A6 6 0 0 1 19 6.5a4.25 4.25 0 0 1-.5 8.5M8 17h.01M8 20h.01M12 18.5h.01M12 21.5h.01M16 17h.01M16 20h.01\"/>"};
function versionControls(){let html='';if(!['parking','outdoor','junction'].includes(saved.scene))html+=`<div class="control-unit path-field"><label class="toggle"><span>Path</span><input type="checkbox" role="switch" data-toggle="path" aria-label="Path" ${saved.path?'checked':''}></label></div>`;if(saved.scene!=='parking')html+=`<div class="control-unit field weather-field"><div class="field-head">Weather</div><div class="segments weather-segments" role="radiogroup" aria-label="Weather">${[['default','Clear'],['overcast','Cloudy'],['rain','Rain'],['snow','Snow']].map(([v,label])=>button(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${weatherIcons[v]}</svg>`,`data-param="weather" data-value="${v}" role="radio" aria-checked="${saved.weather===v}" aria-pressed="${saved.weather===v}" aria-label="${label}" title="${label}"`)).join('')}</div></div>`;return html}
function environmentControls(){return environments[saved.scene].map((k,i)=>`<div class="control-unit environment-field">${i===0?'<div class="field-head surroundings-heading">Surroundings</div>':''}<label class="toggle"><span>${environmentNames[k]}</span><input type="checkbox" role="switch" data-toggle="${k}" aria-label="${environmentNames[k]}" ${saved[k]?'checked':''}></label></div>`).join('')}
const vehicleDisclosure=()=>'<svg class="vehicle-disclosure" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 5 5 5-5 5"/></svg>';
const vehicleMorph=createVehicleMorph($('vehicle-options'),()=>$('vehicle-entry').querySelector('button'),()=>{vehicleOpen=false;product.dataset.vehicleOpen='false';$('vehicle-entry').querySelector('button')?.setAttribute('aria-expanded','false')});
function renderControls(){
 const focusedModel=document.activeElement?.closest('[data-param="model"]')?.dataset.value;
 const name=vehicles.find(v=>v[0]===(requestedModel||saved.model))?.[1]||'BMW X6';
 product.dataset.vehicleOpen=String(vehicleOpen);
 $('vehicle-entry').innerHTML=button(`<span>${name}</span>${vehicleDisclosure()}`,`class="vehicle-choice" aria-busy="${!!requestedModel}" data-vehicle-toggle aria-expanded="${vehicleOpen}" aria-controls="vehicle-options" aria-haspopup="dialog" aria-label="Vehicle: ${name}"`);
 const popup=$('vehicle-options');popup.hidden=false;popup.setAttribute('popover','manual');popup.setAttribute('role','dialog');popup.setAttribute('aria-label','Vehicle models');
 if(vehicleMorph.active&&requestedModel){const label=popup.querySelector('.vehicle-lid>span');if(label)label.textContent=name;}
 if(!vehicleMorph.active)popup.innerHTML=button(`<span>${name}</span>${vehicleDisclosure()}`,'class="vehicle-choice vehicle-lid" data-vehicle-toggle aria-label="Close vehicle models" aria-expanded="true"')+'<div class="vehicle-grid" role="radiogroup" aria-label="Vehicle models">'+vehicles.map(([id,label])=>button(`<img src="engine/vehicle-previews/${id}${theme==='dark'?'-dark':''}.png" alt=""><span>${label}</span>`,`class="vehicle-card" data-param="model" data-value="${id}" role="radio" aria-checked="${saved.model===id}" aria-pressed="${saved.model===id}" aria-disabled="${!!requestedModel}" aria-busy="${requestedModel===id}"`)).join('')+'</div>';
 $('control-content').innerHTML=sceneControls()+versionControls()+environmentControls();
 initToggleMotion($('control-content'));
 if(vehicleOpen)vehicleMorph.show();else vehicleMorph.close();
 requestAnimationFrame(()=>{fitVehicleOptions();pageControls();syncSelections();scheduleTransportSync()});
 if(focusedModel&&vehicleOpen)$('vehicle-options').querySelector(`[data-value="${focusedModel}"]`)?.focus({preventScroll:true});
}
function fitVehicleOptions(){
 if(vehicleOpen)vehicleMorph.place();
}

function finishVehicleRequest(){
 if(!requestedModel||!ready)return;const state=api().get();if(state.busy)return;
 const success=state.vehicle===requestedModel;requestedModel=null;saved.model=state.vehicle;persistState();feedback(success?'':'Couldn’t load vehicle. Try again.');renderControls();
}
let vehicleIntentTimer=0;
const warmVehicleIntent=event=>{const choice=event.target.closest('[data-param="model"]');clearTimeout(vehicleIntentTimer);if(!choice||!vehicleOpen||requestedModel||choice.dataset.value===saved.model)return;const id=choice.dataset.value;vehicleIntentTimer=setTimeout(()=>{if(vehicleOpen)void api().warmVehicle(id);},80);};
$('vehicle-options').addEventListener('pointerover',warmVehicleIntent);
$('vehicle-options').addEventListener('focusin',warmVehicleIntent);
$('vehicle-options').addEventListener('pointerleave',()=>clearTimeout(vehicleIntentTimer));
$('vehicle-options').addEventListener('toggle',e=>{if(e.newState==='closed'&&vehicleOpen){vehicleOpen=false;product.dataset.vehicleOpen='false';$('vehicle-entry').querySelector('button')?.setAttribute('aria-expanded','false')}});
$('vehicle-options').addEventListener('keydown',e=>{const cards=[...$('vehicle-options').querySelectorAll('.vehicle-card')],index=cards.indexOf(document.activeElement),delta={ArrowRight:1,ArrowLeft:-1,ArrowDown:2,ArrowUp:-2}[e.key];if(index>=0&&(delta||['Home','End'].includes(e.key))){e.preventDefault();cards[e.key==='Home'?0:e.key==='End'?cards.length-1:Math.max(0,Math.min(cards.length-1,index+delta))].focus()}});

function pageControls(){
 const content=$('control-content'),pager=$('control-pager'),units=[...content.children];pager.hidden=true;units.forEach(u=>u.hidden=false);if(!units.length)return;
 const measure=()=>units.reduce((sum,u,i)=>sum+u.getBoundingClientRect().height+(i?parseFloat(getComputedStyle(units[i-1]).marginBottom):0),0);
 if(measure()<=content.clientHeight+1){controlPages=[units];controlPage=0;return}
 pager.hidden=false;const available=content.clientHeight;controlPages=[];let page=[],height=0;
 for(const unit of units){const h=unit.getBoundingClientRect().height;let gap=page.length?parseFloat(getComputedStyle(page.at(-1)).marginBottom):0;if(page.length&&height+gap+h>available){controlPages.push(page);page=[];height=0;gap=0}page.push(unit);height+=gap+h;}if(page.length)controlPages.push(page);controlPage=Math.min(controlPage,controlPages.length-1);showControlPage();
}
function showControlPage(){[...$('control-content').children].forEach(u=>u.hidden=!controlPages[controlPage]?.includes(u));$('control-pager').innerHTML=button(chevron('left'),`data-control-page="-1" aria-label="Previous settings page" ${controlPage===0?'disabled':''}`)+`<span>${controlPage+1} / ${controlPages.length}</span>`+button(chevron(),`data-control-page="1" aria-label="Next settings page" ${controlPage===controlPages.length-1?'disabled':''}`)}
const icon=(name,extra='')=>`<span class="icon ${extra}" style="--icon:url('icons/${name}.svg')" aria-hidden="true"></span>`;
let renderedSceneMarkup=null,sceneRevision=0,scenePending=false;
function renderScenes(followSelection=true){
 const compact=product.clientWidth<=760,vertical=product.clientWidth>760;product.dataset.nav=compact?'select':vertical?'vertical':'horizontal';
 if(compact){renderedSceneMarkup=null;$('scene-nav').innerHTML=button(`<span>${scenes.find(s=>s[0]===saved.scene)[1]}</span>${vehicleDisclosure()}`,`class="scene-menu-trigger" aria-label="Choose scene" aria-expanded="${sceneOpen}" aria-controls="scene-menu" data-scene-menu`)+`<div id="scene-menu" class="scene-menu" ${sceneOpen?'':'hidden'}>${['Driving','Parking'].map(f=>`<section aria-label="${f}"><div class="scene-menu-family">${f}</div><div class="scene-menu-grid">${scenes.filter(s=>s[2]===f).map(([id,title])=>button(title,`data-scene="${id}" data-selected="${saved.scene===id}" aria-current="${saved.scene===id?'page':'false'}" tabindex="${saved.scene===id?'0':'-1'}"`)).join('')}</div></section>`).join('')}</div>`;return}

 const navStyle=getComputedStyle($('scene-nav'));const available=vertical?$('scene-nav').clientHeight-parseFloat(navStyle.paddingTop)-parseFloat(navStyle.paddingBottom):$('scene-nav').clientWidth;
 const size=vertical?Math.max(2,Math.min(6,Math.floor((available-128)/48))):Math.max(2,Math.min(6,Math.floor((available-80)/108)));
 if(size!==scenePageSize){scenePageSize=size;scenePage=Math.floor(scenes.findIndex(s=>s[0]===saved.scene)/size)}
 if(followSelection)scenePage=Math.floor(scenes.findIndex(s=>s[0]===saved.scene)/size);const pages=Math.ceil(scenes.length/size);scenePage=Math.max(0,Math.min(scenePage,pages-1));
  const pageScenes=scenes.slice(scenePage*size,(scenePage+1)*size);
 const markup=['Driving','Parking'].map(family=>{const entries=pageScenes.filter(s=>s[2]===family);if(!entries.length)return '';return `<section class="scene-family" aria-label="${family}"><div class="scene-family-title">${family}</div><div class="scene-items">${entries.map(([id,title])=>button(`<span>${title}</span>`,`class="scene-choice" data-scene="${id}"`)).join('')}</div></section>`}).join('')+(pages>1?`<div class="scene-pager">${button(chevron('left'),`data-scene-page="-1" aria-label="Previous scenes" ${scenePage===0?'disabled':''}`)}<span>${scenePage+1} / ${pages}</span>${button(chevron(),`data-scene-page="1" aria-label="Next scenes" ${scenePage===pages-1?'disabled':''}`)}</div>`:'');
 if(markup!==renderedSceneMarkup){$('scene-nav').innerHTML=markup;renderedSceneMarkup=markup;}
 for(const choice of $('scene-nav').querySelectorAll('[data-scene]')){const selected=choice.dataset.scene===saved.scene;choice.dataset.selected=String(selected);choice.setAttribute('aria-current',selected?'page':'false');choice.tabIndex=selected?0:-1;}
 const nav=$('scene-nav'),selected=nav.querySelector('[data-selected="true"]');if(vertical&&selected){const r=selected.getBoundingClientRect(),n=nav.getBoundingClientRect();glideIndicator(nav,r.top-n.top,reducedMotion()||document.documentElement.dataset.choiceInput==='keyboard',r.height,r.left-n.left,r.width);nav.style.setProperty('--nav-x',(r.left-n.left)+'px');nav.style.setProperty('--nav-width',r.width+'px');nav.style.setProperty('--nav-height',r.height+'px');if(!nav.dataset.selectionReady)requestAnimationFrame(()=>nav.dataset.selectionReady='true')}
}
function syncGeometry(){
 const width=product.clientWidth;product.dataset.short=String(product.clientHeight<700);const mobile=width<=760;product.dataset.nav=mobile?'select':width>760?'vertical':'horizontal';
 if(mobile){const h=Math.min((width-32)*9/16,Math.max(90,$('workspace').clientHeight-(product.clientHeight<650?382:366)));product.style.setProperty('--mobile-stage',h+'px')}
 const rect=$('stage').getBoundingClientRect(),pad=getComputedStyle($('stage')),iw=rect.width-parseFloat(pad.paddingLeft)-parseFloat(pad.paddingRight),ih=rect.height-parseFloat(pad.paddingTop)-parseFloat(pad.paddingBottom),w=Math.max(1,Math.min(iw,ih*16/9,960)),h=w*9/16;product.style.setProperty('--frame-width',w+'px');product.style.setProperty('--frame-height',h+'px');product.style.setProperty('--preview-offset',Math.max(0,(rect.height-h)/2)+'px');renderScenes();fitVehicleOptions();pageControls();syncSelections();
}
function scheduleGeometry(){cancelAnimationFrame(raf);raf=requestAnimationFrame(syncGeometry)}
function syncPreviewUrl(){history.replaceState(null,'','?layout=triple');scheduleGeometry()}
function changeScene(id){sceneOpen=false;if(!ready){renderScenes();return;}if(saved.scene===id){renderScenes();return;}lastScene=saved.scene;saved.scene=id;scenePending=true;const revision=++sceneRevision;renderScenes();feedback();requestAnimationFrame(()=>setTimeout(()=>{if(revision!==sceneRevision)return;api().scene(id);scenePending=false;syncState();persistState();controlPage=0;scenePage=Math.floor(scenes.findIndex(s=>s[0]===id)/scenePageSize);renderControls();scheduleGeometry()},0))}
$('scene-nav').addEventListener('click',e=>{if(e.target.closest('[data-scene-menu]')){sceneOpen=!sceneOpen;renderScenes();$('scene-nav').querySelector('[data-scene-menu]')?.focus();return}const b=e.target.closest('[data-scene]'),p=e.target.closest('[data-scene-page]');if(b){changeScene(b.dataset.scene);$('scene-nav').querySelector(`[data-scene="${b.dataset.scene}"]`)?.focus()}if(p){scenePage+=Number(p.dataset.scenePage);renderScenes(false);$('scene-nav').querySelector(`[data-scene-page="${p.dataset.scenePage}"]`)?.focus()}});
document.addEventListener('click',e=>{if(sceneOpen&&!e.composedPath().includes($('scene-nav'))){sceneOpen=false;renderScenes()}});$('scene-nav').addEventListener('keydown',e=>{if(e.key==='Escape'){sceneOpen=false;renderScenes();$('scene-nav').querySelector('[data-scene-menu]')?.focus()}});
$('controls').addEventListener('click',e=>{const v=e.target.closest('[data-vehicle-toggle]'),b=e.target.closest('[data-param]'),p=e.target.closest('[data-control-page]');if(v){vehicleOpen=!vehicleOpen;renderControls();if(!vehicleOpen)$('vehicle-entry').querySelector('button')?.focus()}if(b){const key=b.dataset.param;apply(key,key==='lanes'?Number(b.dataset.value):b.dataset.value);if(key==='model'&&vehicleOpen)$('vehicle-options').querySelector(`[data-value="${b.dataset.value}"]`)?.focus({preventScroll:true});else $('control-content').querySelector(`[data-param="${key}"][data-value="${b.dataset.value}"]`)?.focus()}if(p){controlPage+=Number(p.dataset.controlPage);showControlPage();$('control-pager').querySelector(`[data-control-page="${p.dataset.controlPage}"]`)?.focus()}});
$('controls').addEventListener('change',e=>{if(e.target.matches('[data-toggle]')){if(!ready||scenePending){e.target.checked=!e.target.checked;return}animateToggle(e.target);const key=e.target.dataset.toggle,value=e.target.checked;api().param(key,value);saved[key]=value;persistState()}});
$('controls').addEventListener('keydown',e=>{if(e.key==='Escape'&&vehicleOpen){vehicleOpen=false;renderControls();$('vehicle-entry').querySelector('button')?.focus()}});
function syncSelections(){
 for(const radio of document.querySelectorAll('[role=radio]')){const selected=radio.getAttribute('aria-pressed')==='true';radio.setAttribute('aria-checked',String(selected));radio.tabIndex=selected?0:-1;}
 for(const group of document.querySelectorAll('.segments')){const selected=group.querySelector('[aria-pressed=true]');if(selected)morphSegment(group,selected);}
 for(const group of document.querySelectorAll('.segments')){const selected=group.querySelector('[aria-pressed="true"]');if(!selected)continue;group.style.setProperty('--selection-x',selected.offsetLeft+'px');group.style.setProperty('--selection-width',selected.offsetWidth+'px');group.dataset.selected='true';}
}
function chooseByKeyboard(event,container,selector){
 if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key))return;
 document.documentElement.dataset.choiceInput='keyboard';
 const current=event.target.closest(selector);if(!current)return;
 const choices=[...container.querySelectorAll(selector)].filter(choice=>!choice.disabled&&choice.getClientRects().length),index=choices.indexOf(current);if(index<0)return;
 event.preventDefault();const direction=['ArrowLeft','ArrowUp'].includes(event.key)?-1:1;
 const next=event.key==='Home'?0:event.key==='End'?choices.length-1:(index+direction+choices.length)%choices.length;
 choices[next].click();
}
$('controls').addEventListener('keydown',event=>{const group=event.target.closest('.segments');if(group)chooseByKeyboard(event,group,'button[data-param]')});
$('scene-nav').addEventListener('keydown',event=>chooseByKeyboard(event,$('scene-nav'),'button[data-scene]'));
document.addEventListener('keydown',()=>document.documentElement.dataset.choiceInput='keyboard');
document.addEventListener('pointerdown',()=>document.documentElement.dataset.choiceInput='pointer');
let pageTransition=null,requestedTheme=theme,themeAnimation=null,transitionTo=null;
function commitTheme(value){theme=value;persistState();product.classList.toggle('dark',value==='dark');document.documentElement.dataset.theme=value;$('theme').setAttribute('aria-pressed',String(value==='dark'));const label=`Switch to ${value==='dark'?'light':'dark'} theme`;$('theme').setAttribute('aria-label',label);$('theme').title=label;renderControls();api().theme(value);}
function changeTheme(value){
 if(!ready||requestedTheme===value)return;requestedTheme=value;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(pageTransition){if(themeAnimation){themeAnimation.updatePlaybackRate(value===transitionTo?1:-1);themeAnimation.play()}return;}
 if(!document.startViewTransition||reduced){void commitTheme(value);return;}
 const rect=$('theme').getBoundingClientRect(),x=rect.left+rect.width/2,y=rect.top+rect.height/2;
 const feather=140,radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))+feather;
 const sheet=document.getElementById('theme-wipe-style')||document.head.appendChild(Object.assign(document.createElement('style'),{id:'theme-wipe-style'}));
 sheet.textContent=`::view-transition-old(root){z-index:1;mask:none}::view-transition-new(root){z-index:2;mask-image:radial-gradient(circle at ${x}px ${y}px,#000 max(0px,calc(var(--theme-radius) - ${feather}px)),transparent max(1px,var(--theme-radius)));mask-repeat:no-repeat}`;
 document.documentElement.classList.add('theme-changing');frame.contentDocument.documentElement.classList.add('theme-changing');transitionTo=value;
 const themeStarted=performance.now();product.dataset.themeMotion='pending';const transition=document.startViewTransition(()=>commitTheme(value));pageTransition=transition;
 transition.ready.then(()=>{product.dataset.themeMotion='running';product.dataset.themeStartDelay=String(Math.round(performance.now()-themeStarted));themeAnimation=document.documentElement.animate([{'--theme-radius':'0px'},{'--theme-radius':`${radius}px`}],{duration:400,easing:'cubic-bezier(.65,0,.35,1)',fill:'both',pseudoElement:'::view-transition-new(root)'});if(requestedTheme!==transitionTo){themeAnimation.currentTime=0;themeAnimation.reverse()}themeAnimation.onfinish=()=>{if(pageTransition===transition&&theme!==requestedTheme)void commitTheme(requestedTheme)};}).catch(()=>{if(theme!==requestedTheme)void commitTheme(requestedTheme)});
 transition.finished.catch(()=>{}).finally(()=>{if(pageTransition===transition){product.dataset.themeMotion='finished';product.dataset.themeElapsed=String(Math.round(performance.now()-themeStarted));pageTransition=null;themeAnimation=null;document.documentElement.classList.remove('theme-changing');frame.contentDocument.documentElement.classList.remove('theme-changing');if(theme!==requestedTheme)void commitTheme(requestedTheme)}});
}
$('theme').addEventListener('click',()=>changeTheme(requestedTheme==='dark'?'light':'dark'));
let exportBusy=false;
const exportControls=initExportControls($('download'),async format=>{
 exportBusy=true;exportControls.setBusy(true);exportControls.announce('Preparing export…');
 try{const result=await api().export(format);exportControls.announce(result.message,!result.ok)}catch{exportControls.announce('Export failed. Please try again.',true)}
 finally{exportBusy=false;exportControls.setBusy(false)}
});
new ResizeObserver(scheduleGeometry).observe($('workspace'));
syncPreviewUrl();renderControls();
frame.addEventListener('load',()=>{frame.contentWindow.addEventListener('pointerdown',()=>{if(sceneOpen){sceneOpen=false;renderScenes()}});frame.contentWindow.addEventListener('studio:error',()=>{requestedModel=null;if(!ready){clearTimeout(slowStartup);$('loading').textContent='Scene couldn’t load. Refresh to retry.';$('loading').hidden=false}else{feedback('Couldn’t load vehicle. Try again.');renderControls()}})});
const bootStarted=performance.now();
const slowStartup=setTimeout(()=>{if(!ready)$('loading').hidden=false},5000);
function finishStartup(){if(ready||!api()?.get().ready)return;api().restoreFeatures({path:!!saved.path,weather:saved.weather});ready=true;$('controls').inert=false;syncState();persistState();clearInterval(startup);clearTimeout(slowStartup);$('loading').hidden=true;product.dataset.ready='true';product.dataset.firstFrame=api().get().firstFrame||'';product.dataset.cachedPreview=String(api().get().cachedPreview);product.dataset.engineAudit=api().get().audit||'';product.dataset.engineInitMs=String(Math.round(performance.now()-bootStarted));product.dataset.startupMs=String(Math.round(performance.now()));renderControls();scheduleGeometry()}
const startup=setInterval(()=>{try{finishStartup()}catch{}},100);
frame.addEventListener('load',()=>{frame.contentWindow.addEventListener('studio:ready',finishStartup,{once:true});frame.contentWindow.addEventListener('vehicle:change',finishVehicleRequest);finishStartup()});
setInterval(()=>{if(!ready||document.hidden)return;scheduleTransportSync();const s=api().get();if(s.sound){const sound=JSON.stringify(s.sound);if(product.dataset.pathSound!==sound)product.dataset.pathSound=sound;}if(s.featureAudit)product.dataset.versionFeatures=s.featureAudit;$('download').disabled=!s.exportReady||s.exporting||exportBusy;if(requestedModel){if(s.busy){if(Date.now()-busySince>300)feedback('Loading vehicle…')}else finishVehicleRequest()}},200);

// Mirror the original transport outline and progress on the same animation frames.
let transportFrame=0;
function scheduleTransportSync(){if(!transportFrame&&ready&&saved.scene==='junction'&&!document.hidden)transportFrame=requestAnimationFrame(syncTransportFrame);}
function syncTransportFrame(){
 transportFrame=0;
 if(ready&&saved.scene==='junction'&&!document.hidden){
  const source=frame.contentDocument,button=$('control-content').querySelector('.play'),native=source.getElementById('junction-play');
  if(button&&native){
   button.setAttribute('aria-disabled',String(native.disabled));button.dataset.motionState=native.dataset.motionState;
   button.setAttribute('aria-label',native.disabled?'Playing approach animation':'Play approach animation');
   button.style.setProperty('--progress',source.getElementById('junction-positions').style.getPropertyValue('--progress'));
   for(const name of ['progress-track','progress-value']){const from=source.querySelector('.junction-motion-icon .'+name),to=button.querySelector('.'+name);if(from&&to){if(to.getAttribute('d')!==from.getAttribute('d'))to.setAttribute('d',from.getAttribute('d'));if(to.style.opacity!==from.style.opacity)to.style.opacity=from.style.opacity;}}
   if(native.disabled)scheduleTransportSync();
  }
 }
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(transportFrame);transportFrame=0;}else scheduleTransportSync();});
