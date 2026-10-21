export function initExportControls(download,onExport){
 const dialog=document.createElement('dialog');dialog.id='export-dialog';dialog.className='export-dialog';dialog.setAttribute('aria-labelledby','export-dialog-title');dialog.setAttribute('aria-describedby','export-dialog-size');
 const header=document.createElement('div'),heading=document.createElement('h2'),size=document.createElement('p'),closeButton=document.createElement('button');
 header.className='export-heading';heading.id='export-dialog-title';heading.textContent='Download';size.id='export-dialog-size';size.textContent='1920 × 1080';
 closeButton.type='button';closeButton.className='export-close';closeButton.setAttribute('aria-label','Close download dialog');closeButton.innerHTML='<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15"/></svg>';
 header.append(heading,closeButton);
 const choices=document.createElement('fieldset'),legend=document.createElement('legend');legend.className='export-sr-only';legend.textContent='File format';choices.append(legend);
 const formats=[['image','PNG image','Scene image','PNG'],['kit','Perspective kit','Image, camera, depth & Figma guide','ZIP'],['camera','Camera settings','Projection & camera parameters','JSON'],['depth','Depth map','16-bit · linear · 0–200 m','PNG']];
 const submit=document.createElement('button');submit.type='button';submit.className='export-submit';submit.textContent='Download PNG';
 for(const [format,title,description,extension]of formats){
  const label=document.createElement('label'),input=document.createElement('input'),copy=document.createElement('span'),name=document.createElement('span'),detail=document.createElement('span');
  label.className='export-choice';input.type='radio';input.name='export-format';input.value=format;input.checked=format==='image';name.textContent=title;detail.textContent=description;detail.className='export-detail';copy.append(name,detail);label.append(input,copy);choices.append(label);
  input.addEventListener('change',()=>{if(input.checked)submit.textContent='Download '+extension;});
 }
 dialog.append(header,size,choices,submit);document.body.append(dialog);
 const feedback=document.createElement('span');feedback.className='export-feedback';feedback.hidden=true;feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');document.querySelector('.preview-shell').append(feedback);
 download.setAttribute('aria-haspopup','dialog');download.setAttribute('aria-controls','export-dialog');download.setAttribute('aria-label','Download');download.title='Download';
 let busy=false,feedbackTimer=0,previousOverflow='',openingFrame=0;
 const close=()=>{
  if(!dialog.open||dialog.dataset.state==='closing')return;
  cancelAnimationFrame(openingFrame);dialog.dataset.state='closing';
  const animations=dialog.getAnimations();
  const finish=()=>{if(dialog.open&&dialog.dataset.state==='closing')dialog.close();};
  if(animations.length)Promise.allSettled(animations.map(animation=>animation.finished)).then(finish);else finish();
 };
 download.addEventListener('click',()=>{
  if(download.disabled||busy||dialog.open)return;
  previousOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';dialog.dataset.state='entering';dialog.showModal();choices.querySelector('input:checked').focus({preventScroll:true});
  dialog.getBoundingClientRect();
  openingFrame=requestAnimationFrame(()=>{if(dialog.open&&dialog.dataset.state==='entering')dialog.dataset.state='open';});
 });
 dialog.addEventListener('close',()=>{cancelAnimationFrame(openingFrame);delete dialog.dataset.state;document.documentElement.style.overflow=previousOverflow;});
 dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 closeButton.addEventListener('click',close);
 dialog.addEventListener('click',event=>{const bounds=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom))close();});
 submit.addEventListener('click',()=>{if(dialog.dataset.state==='closing')return;const format=choices.querySelector('input:checked').value;close();onExport(format);});
 const sync=()=>{if(busy&&!download.disabled)download.disabled=true;submit.disabled=busy||download.disabled||download.inert;if(download.inert)close();};
 new MutationObserver(sync).observe(download,{attributes:true,attributeFilter:['disabled','inert']});
 return {
  close,
  setBusy(value){busy=value;sync();download.setAttribute('aria-busy',String(value));},
  announce(text,error=false){clearTimeout(feedbackTimer);feedback.textContent=text;feedback.hidden=false;feedback.dataset.error=String(error);if(!error)feedbackTimer=setTimeout(()=>{feedback.hidden=true;},5000);}
 };
}
