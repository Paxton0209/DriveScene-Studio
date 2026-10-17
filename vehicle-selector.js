import {vehicleCatalog} from './vehicle-catalog.js';

export function initVehicleSelector({selected,onChange,onPreview=()=>{}}){
 const element=(tag,className,text)=>{const node=document.createElement(tag);node.className=className;if(text)node.textContent=text;return node;};
 const trigger=document.getElementById('vehicle-picker-trigger'),value=document.getElementById('vehicle-current');
 const panel=element('dialog','vehicle-picker');panel.id='vehicle-picker';panel.setAttribute('aria-labelledby','vehicle-picker-title');
 const header=element('div','vehicle-picker-header'),title=element('h2','','Vehicle model'),close=element('button','vehicle-picker-close'),grid=element('div','vehicle-options'),feedback=element('p','vehicle-feedback');
 title.id='vehicle-picker-title';close.type='button';close.setAttribute('aria-label','Close vehicle picker');feedback.id='vehicle-feedback';feedback.setAttribute('role','status');feedback.hidden=true;
 close.innerHTML='<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15"/></svg>';
 header.append(title,close);panel.append(header,grid,feedback);document.body.append(panel);
 let switching=false,current=selected,ready=false,openingFrame=0,previousOverflow='',intentTimer=0,openEpoch=0,focusId=selected;
 grid.setAttribute('role','group');grid.setAttribute('aria-label','Vehicle models');
 const cards=new Map();
 function update(){
  for(const [id,card]of cards){card.disabled=switching||!ready;card.setAttribute('aria-pressed',String(id===current));card.tabIndex=id===focusId?0:-1;}
  trigger.disabled=!ready&&!switching;
  value.textContent=vehicleCatalog.find(model=>model.id===current).name;
  trigger.setAttribute('aria-label','Choose vehicle, '+value.textContent);
 }
 async function choose(id){
  if(switching||!ready)return;
  if(id===current){dismiss();return;}
  const choosingEpoch=openEpoch;
  cards.get(id).append(feedback);
  clearTimeout(intentTimer);switching=true;panel.setAttribute('aria-busy','true');feedback.hidden=true;feedback.dataset.loading='true';const feedbackTimer=setTimeout(()=>{feedback.textContent='Loading…';feedback.hidden=false;},150);update();
  try{await onChange(id);current=id;if(!panel.open||choosingEpoch!==openEpoch)feedback.hidden=true;if(choosingEpoch===openEpoch)dismiss();}
  catch(error){console.error('Vehicle selection failed',error);panel.append(feedback);delete feedback.dataset.loading;feedback.hidden=false;feedback.textContent='Could not switch vehicle. Please try again.';}
  finally{clearTimeout(feedbackTimer);switching=false;if(!panel.open)feedback.hidden=true;panel.removeAttribute('aria-busy');update();}
 }
 for(const model of vehicleCatalog){
  const card=element('button','vehicle-option'),picture=element('img','vehicle-picture'),darkPicture=element('img','vehicle-picture vehicle-picture-dark'),name=element('span','vehicle-name',model.name);
  card.type='button';card.id='vehicle-option-'+model.id;card.setAttribute('aria-label',model.name);picture.src='vehicle-previews/'+model.id+'.png?v=grille-15';darkPicture.src='vehicle-previews/'+model.id+'-dark.png?v=grille-15';
  for(const image of [picture,darkPicture]){image.alt='';image.width=300;image.height=180;image.loading='lazy';}
  card.append(picture,darkPicture,name);card.addEventListener('click',()=>choose(model.id));cards.set(model.id,card);grid.append(card);
  const preview=event=>{clearTimeout(intentTimer);if(event?.type==='pointerenter'&&globalThis.matchMedia?.('(hover:hover) and (pointer:fine)').matches===false)return;if(switching||!ready||model.id===current)return;intentTimer=setTimeout(()=>{Promise.resolve().then(()=>onPreview(model.id)).catch(()=>{});},100);};
  card.addEventListener('focus',()=>{focusId=model.id;update();});
  card.addEventListener('pointerenter',preview);card.addEventListener('focus',preview);card.addEventListener('pointerleave',()=>clearTimeout(intentTimer));card.addEventListener('blur',()=>clearTimeout(intentTimer));
 }
 function dismiss(){
  if(!panel.open||panel.dataset.state==='closing')return;
  clearTimeout(intentTimer);
  cancelAnimationFrame(openingFrame);panel.dataset.state='closing';
  const animations=panel.getAnimations(),finish=()=>{if(panel.open&&panel.dataset.state==='closing')panel.close();};
  if(animations.length)Promise.allSettled(animations.map(animation=>animation.finished)).then(finish);else finish();
 }
 trigger.addEventListener('click',()=>{
  if(panel.open||trigger.disabled)return;
  openEpoch++;focusId=current;if(!switching){feedback.hidden=true;panel.append(feedback);}update();
  previousOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';panel.dataset.state='entering';panel.showModal();trigger.setAttribute('aria-expanded','true');cards.get(current).focus({preventScroll:true});panel.getBoundingClientRect();
  openingFrame=requestAnimationFrame(()=>{if(panel.open&&panel.dataset.state==='entering')panel.dataset.state='open';});
 });
 close.addEventListener('click',dismiss);
 panel.addEventListener('cancel',event=>{event.preventDefault();dismiss();});
 panel.addEventListener('close',()=>{cancelAnimationFrame(openingFrame);delete panel.dataset.state;if(!switching)feedback.hidden=true;document.documentElement.style.overflow=previousOverflow;trigger.setAttribute('aria-expanded','false');trigger.focus({preventScroll:true});});
 panel.addEventListener('click',event=>{const bounds=panel.getBoundingClientRect();if(event.target===panel&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom))dismiss();});
 panel.addEventListener('keydown',event=>{
  const buttons=[...cards.values()],index=buttons.indexOf(document.activeElement),moves={ArrowRight:1,ArrowLeft:-1,ArrowDown:2,ArrowUp:-2};
  if(index>=0){
   let target=index;
   if(event.key==='Home')target=0;else if(event.key==='End')target=buttons.length-1;
   else if(event.key==='ArrowRight'&&index%2===0)target=index+1;
   else if(event.key==='ArrowLeft'&&index%2===1)target=index-1;
   else if(event.key==='ArrowDown'&&index+2<buttons.length)target=index+2;
   else if(event.key==='ArrowUp'&&index-2>=0)target=index-2;
   else if(!(event.key in moves))return;
   event.preventDefault();buttons[target].focus();return;
  }
 });
 update();return {sync(isReady){ready=isReady;update();}};
}
