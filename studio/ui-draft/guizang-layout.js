// Trial-only composition. All scene/model/transport mutations use original controls.
const byId=id=>document.getElementById(id);
// Pointer selections share the existing spring; keyboard selections settle directly.
window.draftSelectionKeyboard=false;
document.addEventListener('pointerdown',()=>{window.draftSelectionKeyboard=false;},true);
document.addEventListener('keydown',()=>{window.draftSelectionKeyboard=true;},true);
const nav=byId('scene-nav'),strip=byId('vehicle-strip');
let pendingVehicleFocus=false;
strip.addEventListener('keydown',event=>{
 if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key))pendingVehicleFocus=true;
},true);
document.addEventListener('pointerdown',()=>{pendingVehicleFocus=false;},true);
const tabs=[byId('scenes-tab'),byId('vehicles-tab')];
const panels=[nav,byId('vehicle-panel')];
const alignSelection=(immediate=false)=>{
 window.draftSelectionMotion?.(byId('library-tabs'),tabs.find(tab=>tab.getAttribute('aria-selected')==='true'),immediate);
 if(!panels[1].hidden)window.draftSelectionMotion?.(strip,strip.querySelector('[aria-checked=true]'),immediate);
};
const selectTab=index=>{tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;panels[i].hidden=i!==index;});alignSelection();};
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectTab(i));tab.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?1:1-i;selectTab(next);tabs[next].focus();});});
alignSelection(true);
new ResizeObserver(()=>alignSelection(true)).observe(byId('library'));
const transport=byId('scene-transport');
// The weather state belongs to the project. Proxy the existing controls so their
// locking, persistence and scene rendering continue to follow the baseline.
const weather=document.createElement('div');
weather.id='shared-weather';
weather.innerHTML='<span class="shared-label">Weather</span><div class="shared-weather-options" role="radiogroup" aria-label="Weather for all outdoor scenes"></div>';
const environment=document.createElement('section');
environment.id='shared-settings';
environment.innerHTML='<h2>Across scenes</h2>';
environment.append(weather);
byId('scene-settings').before(environment);
const weatherOptions=weather.lastElementChild;
const weatherIcons=await fetch('./icons.json').then(response=>response.json());
for(const [value,label] of [['default','Clear'],['rain','Rain'],['snow','Snow']]){
 const option=document.createElement('button');
 option.type='button';option.dataset.weather=value;option.setAttribute('role','radio');
 option.setAttribute('aria-label',label);option.title=label;option.innerHTML=weatherIcons.weather[value];
 weatherOptions.append(option);
}
weatherOptions.addEventListener('click',event=>{
 const option=event.target.closest('[data-weather]');
 if(!option||option.disabled)return;
 byId('scene-properties').querySelector(`[data-param="weather"] [data-value="${option.dataset.weather}"]`)?.click();
});
weatherOptions.addEventListener('keydown',event=>{
 if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
 event.preventDefault();
 const choices=[...weatherOptions.querySelectorAll('button:not(:disabled)')],index=choices.indexOf(event.target);
 if(index<0||!choices.length)return;
 const next=event.key==='Home'?0:event.key==='End'?choices.length-1:(index+(event.key==='ArrowRight'?1:-1)+choices.length)%choices.length;
 choices[next].focus();choices[next].click();
});
const playback=document.createElement('div');
playback.id='canvas-playback';
byId('artboard').append(playback);
playback.append(transport);
const sync=()=>{
 for(const heading of nav.querySelectorAll('.nav-title')){
  if(heading.textContent==='Intersection')heading.remove();
 }
 for(const button of strip.querySelectorAll('[data-vehicle]')){
  if(!button.querySelector('.vehicle-option-name')){
   const label=document.createElement('span');label.className='vehicle-option-name';
   label.textContent=button.getAttribute('aria-label');button.append(label);
  }
 }
 if(!panels[1].hidden)window.draftSelectionMotion?.(strip,strip.querySelector('[aria-checked=true]'));
 const selected=strip.querySelector('[aria-checked=true]');
 if(pendingVehicleFocus&&selected&&!selected.disabled&&!panels[1].hidden){
  selected.focus();pendingVehicleFocus=false;
 }
 const disabled=byId('theme').disabled||!selected||selected.disabled;
 const source=byId('scene-properties').querySelector('[data-param=weather]');
 // Indoors has no weather controls. Keep the shared outdoor choice intact.
 environment.hidden=!source;
 const current=source?.querySelector('[aria-checked=true]')?.dataset.value||window.draftController?.project.shared.weather||'default';
 for(const option of weatherOptions.querySelectorAll('button')){
  const checked=option.dataset.weather===current,blocked=disabled||!source;
  if(option.getAttribute('aria-checked')!==String(checked))option.setAttribute('aria-checked',String(checked));
  if(option.disabled!==blocked)option.disabled=blocked;
  option.tabIndex=checked?0:-1;
 }
 window.draftSelectionMotion?.(weatherOptions,weatherOptions.querySelector('[aria-checked=true]'));
 weather.title=source?'Applies across outdoor scenes':'Weather is unavailable indoors';
 if(!byId('theme').querySelector('[data-appearance]')){
  byId('theme').innerHTML='<svg data-appearance width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="6.75" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 3.25a6.75 6.75 0 0 0 0 13.5Z" fill="currentColor"/></svg>';
 }
};
new MutationObserver(sync).observe(document.getElementById('app'),{subtree:true,childList:true,attributes:true,attributeFilter:['aria-checked','disabled']});
sync();
new ResizeObserver(()=>window.draftSelectionMotion?.(weatherOptions,weatherOptions.querySelector('[aria-checked=true]'),true)).observe(weatherOptions);
strip.addEventListener('keydown',event=>{
 if(event.key==='ArrowDown'||event.key==='ArrowUp'){
  event.preventDefault();strip.dispatchEvent(new KeyboardEvent('keydown',{key:event.key==='ArrowDown'?'ArrowRight':'ArrowLeft',bubbles:true}));
 }
});
