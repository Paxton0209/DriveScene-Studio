// This small entry point remains available even when importing the 3D app fails.
(()=>{
 const preview=document.getElementById('preview'),canvas=document.getElementById('scene-canvas');
 const feedback=document.createElement('div');feedback.className='preview-feedback';feedback.hidden=true;
 const message=document.createElement('span');message.setAttribute('role','status');
 const retry=document.createElement('button');retry.type='button';retry.textContent='Retry';
 retry.addEventListener('click',()=>{retry.disabled=true;location.reload();});
 feedback.append(message,retry);preview.after(feedback);
 const controls=[...document.querySelectorAll('#scenes,.preview-settings,#scene-picker,#theme-toggle,#download')];
 const previousInert=controls.map(control=>control.inert);
 controls.forEach(control=>control.inert=true);
 let failed=false;
 function show(text){message.textContent=text;feedback.hidden=false;}
 const slow=setTimeout(()=>show('The 3D view is taking longer to load. You can wait or retry.'),15000);
 function fail(kind){
  failed=true;clearTimeout(slow);preview.dataset.loadError='true';preview.setAttribute('aria-busy','false');
  if(preview.dataset.poster)preview.style.setProperty('--startup-frame',`url("${preview.dataset.poster}")`);
  controls.forEach(control=>control.inert=true);document.getElementById('download').disabled=true;
  const messages={
   renderer:'The 3D view could not start. This is a static preview. Try reloading or using another browser.',
   context:'The 3D view was interrupted. Reload to continue.',
   asset:'Scene files could not load. Check your connection and retry.',
   startup:'The 3D view could not load. This is a static preview. Please retry.'
  };
  show(messages[kind]||messages.startup);
 }
 window.addEventListener('studio:ready',()=>{
  if(failed)return;
  clearTimeout(slow);feedback.hidden=true;
  controls.forEach((control,index)=>control.inert=previousInert[index]);
 });
 window.addEventListener('studio:error',event=>fail(event.detail?.kind));
 canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();fail('context');});
 import('./app.bundle.js?v=20261015-perspective-export-144').catch(error=>{
  console.error('DriveScene startup failed',error);fail(error.code||'startup');
 });
})();
