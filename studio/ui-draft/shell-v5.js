// DriveScene shell v5 · Claude · 2026-10-31
// Runs after guizang-layout.js. Only rearranges the shell; every state change
// still goes through the original controls (vehicle strip, export section).
const byId=id=>document.getElementById(id);
const inspector=byId('inspector'),scroll=byId('inspector-scroll'),exportSection=byId('export-section');
// Wide screens have room to pin Export. Stacked layouts share one scroll area.
const stackedInspector=matchMedia('(max-width:959px)');
const placeExport=()=>{const parent=stackedInspector.matches?scroll:inspector;if(parent&&exportSection&&exportSection.parentElement!==parent)parent.append(exportSection);};
stackedInspector.addEventListener('change',placeExport);placeExport();

// A compact scene menu uses the same surface and touch targets as vehicles.
// Proxy the original scene buttons so loading locks and saved state stay shared.
const nav=byId('scene-nav'),library=byId('library');
const mobileQuery=matchMedia('(max-width:639px), (max-width:959px) and (max-height:500px), (max-width:959px) and (orientation:portrait)');
if(nav&&library){
 const picker=document.createElement('button');
 picker.type='button';picker.id='mobile-scene';
 const label=document.createTextNode('');picker.append(label);
 picker.setAttribute('aria-haspopup','menu');picker.setAttribute('aria-expanded','false');picker.setAttribute('aria-controls','mobile-scene-menu');
 library.prepend(picker);
 let menu=null;
 const close=(returnFocus=false)=>{
  if(!menu)return;
  picker.setAttribute('aria-expanded','false');
  menu.remove();menu=null;
  if(returnFocus)picker.focus();
 };
 const syncPicker=()=>{
  const sources=[...nav.querySelectorAll('[data-scene]')];
  if(!sources.length)return;
  const current=sources.find(source=>source.getAttribute('aria-current')==='page')||sources[0];
  const name=current.textContent.trim();
  if(label.data!==name){label.data=name;picker.setAttribute('aria-label','Scene: '+name);}
  const disabled=nav.inert||sources.every(source=>source.disabled);
  if(picker.disabled!==disabled)picker.disabled=disabled;
  if(picker.disabled)close();
 };
 const open=edge=>{
  if(picker.disabled||!mobileQuery.matches)return;
  if(menu)return;
  const rect=picker.getBoundingClientRect(),width=Math.min(260,innerWidth-32),top=rect.bottom+8;
  menu=document.createElement('div');menu.id='mobile-scene-menu';menu.className='shell-vehicle-menu shell-scene-menu';menu.setAttribute('role','menu');menu.setAttribute('aria-label','Scene');
  Object.assign(menu.style,{left:Math.max(16,Math.min(rect.left,innerWidth-width-16))+'px',top:top+'px',width:width+'px',maxHeight:Math.max(48,innerHeight-top-16)+'px'});
  let group=menu;const items=[];
  for(const source of nav.children){
   if(source.classList.contains('nav-title')){
    group=document.createElement('div');group.setAttribute('role','group');group.setAttribute('aria-label',source.textContent.trim());
    const heading=document.createElement('div');heading.className='shell-menu-heading';heading.setAttribute('aria-hidden','true');heading.textContent=source.textContent.trim();group.append(heading);menu.append(group);
   }
   if(!source.matches('[data-scene]'))continue;
   const item=document.createElement('button'),on=source.getAttribute('aria-current')==='page';
   item.type='button';item.setAttribute('role','menuitemradio');item.setAttribute('aria-checked',String(on));item.tabIndex=-1;item.disabled=source.disabled;
   const label=document.createElement('span');label.textContent=source.textContent.trim();item.append(label);
   item.addEventListener('click',()=>{close(true);if(!on)source.click();syncPicker();});
   group.append(item);items.push(item);
  }
  menu.addEventListener('keydown',event=>{
   if(event.key==='Escape'){event.preventDefault();close(true);return;}
   if(event.key==='Tab'){close(true);return;}
   const live=items.filter(item=>!item.disabled),index=live.indexOf(document.activeElement);
   if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
   event.preventDefault();
   const next=event.key==='Home'?0:event.key==='End'?live.length-1:(index+(event.key==='ArrowDown'?1:-1)+live.length)%live.length;
   live[next]?.focus();
  });
  library.append(menu);picker.setAttribute('aria-expanded','true');
  const live=items.filter(item=>!item.disabled),start=edge==='last'?live.length-1:Math.max(0,live.findIndex(item=>item.getAttribute('aria-checked')==='true'));
  live[start]?.focus();
 };
 picker.addEventListener('click',()=>menu?close():open());
 picker.addEventListener('keydown',event=>{if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();open(event.key==='ArrowUp'?'last':undefined);}});
 document.addEventListener('pointerdown',event=>{if(menu&&!menu.contains(event.target)&&!picker.contains(event.target))close();},true);
 addEventListener('resize',()=>close());
 new MutationObserver(syncPicker).observe(nav,{subtree:true,childList:true,attributes:true,attributeFilter:['aria-current','disabled','inert']});
 const compactLayout=()=>{
  requestAnimationFrame(()=>dispatchEvent(new Event('resize')));
 };
 mobileQuery.addEventListener('change',compactLayout);
 compactLayout();syncPicker();
}

if(inspector&&scroll){
 let scrollRange=0;
 const updateScrollPosition=()=>{
  if(!scrollRange)return;
  const progress=Math.max(0,Math.min(1,scroll.scrollTop/scrollRange));
  inspector.style.setProperty('--scroll-progress',progress);
 };
 const updateScrollIndicator=()=>{
  const height=scroll.clientHeight,range=scroll.scrollHeight-height;
  scrollRange=mobileQuery.matches&&height>0&&range>1?range:0;
  inspector.toggleAttribute('data-scroll-overflow',scrollRange>0);
  updateScrollPosition();
 };
 scroll.addEventListener('scroll',updateScrollPosition,{passive:true});
 const resizeIndicator=new ResizeObserver(updateScrollIndicator);
 resizeIndicator.observe(scroll);
 for(const child of scroll.children)resizeIndicator.observe(child);
 mobileQuery.addEventListener('change',updateScrollIndicator);
 updateScrollIndicator();
}

const panel=byId('vehicle-panel'),strip=byId('vehicle-strip');
if(panel&&strip){
 const options=()=>[...strip.querySelectorAll('[data-vehicle]')];
 const selected=()=>options().find(b=>b.getAttribute('aria-checked')==='true')||options()[0];
 const thumb=button=>button?.querySelector('img')?.getAttribute('src')||'';
 const chevron='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 6.5 3-3 3 3M5 9.5l3 3 3-3"/></svg>';
 const card=document.createElement('button');
 card.type='button';card.className='shell-vehicle-card';
 card.setAttribute('aria-haspopup','menu');card.setAttribute('aria-expanded','false');
 card.innerHTML=`<span class="thumb"><img alt=""></span><span class="text"><span class="caption">Vehicle</span><span class="name"></span></span>${chevron}`;
 const cardImage=card.querySelector('img'),cardName=card.querySelector('.name'),cardChevron=card.querySelector('svg');
 panel.append(card);
 let menu=null;
 const render=()=>{
  const current=selected();if(!current)return;
  if(card.disabled!==current.disabled)card.disabled=current.disabled;
  const stroke=mobileQuery.matches?'1.5':'1.4';
  if(cardChevron.getAttribute('stroke-width')!==stroke)cardChevron.setAttribute('stroke-width',stroke);
  // Keep displaying the last committed vehicle until the replacement is ready.
  if(library?.getAttribute('aria-busy')==='true')return;
  const name=current.getAttribute('aria-label')||'',src=thumb(current);
  if(cardName.textContent!==name){
   cardName.textContent=name;
   card.setAttribute('aria-label','Vehicle: '+name);
  }
  if(cardImage.getAttribute('src')!==src)cardImage.src=src;
 };
 const close=(returnFocus=false)=>{
  if(!menu)return;card.setAttribute('aria-expanded','false');
  menu.remove();menu=null;
  if(returnFocus)card.focus();
 };
 const open=focusIndex=>{
  if(card.disabled)return;
  if(menu)return;
  const rect=card.getBoundingClientRect();
  menu=document.createElement('div');menu.className='shell-vehicle-menu';menu.setAttribute('role','menu');menu.setAttribute('aria-label','Vehicle');
  const menuWidth=mobileQuery.matches?Math.min(300,innerWidth-32):rect.width;
  menu.style.left=(mobileQuery.matches?Math.min(rect.left,innerWidth-menuWidth-16):rect.left)+'px';menu.style.width=menuWidth+'px';
  // On phones the compact picker sits above the canvas; open below it.
  if(mobileQuery.matches)menu.style.top=(rect.bottom+8)+'px';
  else menu.style.bottom=(innerHeight-rect.top+8)+'px';
  const items=options().map(source=>{
   const item=document.createElement('button');item.type='button';item.setAttribute('role','menuitemradio');
   const on=source.getAttribute('aria-checked')==='true';item.setAttribute('aria-checked',String(on));item.tabIndex=-1;
   item.disabled=source.disabled;
   item.innerHTML=`<img src="${thumb(source)}" alt=""><span>${source.getAttribute('aria-label')||''}</span>`;
   item.addEventListener('click',event=>{event.stopPropagation();if(!on)source.click();close(true);});
   menu.append(item);return item;
  });
  menu.addEventListener('keydown',event=>{
   const live=items.filter(i=>!i.disabled),index=live.indexOf(document.activeElement);
   if(event.key==='Escape'||event.key==='Tab'){event.preventDefault();close(true);return;}
   if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
   event.preventDefault();
   const next=event.key==='Home'?0:event.key==='End'?live.length-1:(index+(event.key==='ArrowDown'?1:-1)+live.length)%live.length;
   live[next]?.focus();
  });
  panel.append(menu);card.setAttribute('aria-expanded','true');
  const start=focusIndex==='last'?items.length-1:Math.max(0,items.findIndex(i=>i.getAttribute('aria-checked')==='true'));
  items[start]?.focus();
 };
 card.addEventListener('click',event=>{event.stopPropagation();menu?close():open();});
 card.addEventListener('keydown',event=>{
  if(event.key==='ArrowUp'||event.key==='ArrowDown'){event.preventDefault();open(event.key==='ArrowUp'?'last':undefined);}
 });
 document.addEventListener('pointerdown',event=>{if(menu&&!menu.contains(event.target)&&event.target!==card&&!card.contains(event.target))close();},true);
 addEventListener('resize',()=>close());
 new MutationObserver(render).observe(strip,{subtree:true,childList:true,attributes:true,attributeFilter:['aria-checked','disabled','src']});
 mobileQuery.addEventListener('change',render);
 render();
}
