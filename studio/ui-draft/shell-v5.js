// DriveScene shell v5 · Claude · 2026-10-31
// Runs after guizang-layout.js. Only rearranges the shell; every state change
// still goes through the original controls (vehicle strip, export section).
const byId=id=>document.getElementById(id);
const inspector=byId('inspector'),scroll=byId('inspector-scroll'),exportSection=byId('export-section');
// Export stays visible on short windows: pin it below the scrolling inspector.
if(inspector&&exportSection&&exportSection.parentElement===scroll)inspector.append(exportSection);

const panel=byId('vehicle-panel'),strip=byId('vehicle-strip');
if(panel&&strip){
 const options=()=>[...strip.querySelectorAll('[data-vehicle]')];
 const selected=()=>options().find(b=>b.getAttribute('aria-checked')==='true')||options()[0];
 const thumb=button=>button?.querySelector('img')?.getAttribute('src')||'';
 const chevron='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 6.5 3-3 3 3M5 9.5l3 3 3-3"/></svg>';
 const check='<svg class="check" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7"/></svg>';
 const card=document.createElement('button');
 card.type='button';card.className='shell-vehicle-card';
 card.setAttribute('aria-haspopup','menu');card.setAttribute('aria-expanded','false');
 panel.append(card);
 let menu=null;
 const render=()=>{
  const current=selected();if(!current)return;
  const name=current.getAttribute('aria-label')||'';
  const key=name+'|'+thumb(current)+'|'+current.disabled;
  if(card.dataset.key===key)return;
  card.dataset.key=key;
  card.setAttribute('aria-label','Vehicle: '+name);
  card.disabled=current.disabled;
  card.innerHTML=`<span class="thumb"><img src="${thumb(current)}" alt=""></span><span class="text"><span class="caption">Vehicle</span><span class="name">${name}</span></span>${chevron}`;
 };
 const close=(returnFocus=false)=>{
  if(!menu)return;menu.remove();menu=null;card.setAttribute('aria-expanded','false');
  if(returnFocus)card.focus();
 };
 const open=(focusIndex)=>{
  if(menu||card.disabled)return;
  const rect=card.getBoundingClientRect();
  menu=document.createElement('div');menu.className='shell-vehicle-menu';menu.setAttribute('role','menu');menu.setAttribute('aria-label','Vehicle');
  menu.style.left=rect.left+'px';menu.style.width=rect.width+'px';menu.style.bottom=(innerHeight-rect.top+8)+'px';
  const items=options().map(source=>{
   const item=document.createElement('button');item.type='button';item.setAttribute('role','menuitemradio');
   const on=source.getAttribute('aria-checked')==='true';item.setAttribute('aria-checked',String(on));item.tabIndex=-1;
   item.disabled=source.disabled;
   item.innerHTML=`<img src="${thumb(source)}" alt=""><span>${source.getAttribute('aria-label')||''}</span>${on?check:'<span class="check"></span>'}`;
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
 render();
}
