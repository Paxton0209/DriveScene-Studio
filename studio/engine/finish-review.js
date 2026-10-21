export function installFinishReview(world,preview,query){
 if(location.hostname!=='127.0.0.1'||!['finish','path-motion'].includes(query.get('review')))return;
 const origin='http://127.0.0.1:8036';
 const style=document.createElement('style');
 style.textContent='html,body{margin:0!important;padding:0!important;overflow:hidden!important;background:transparent!important}body>header,body>footer,aside,.preview-settings,#status,#download,#dimensions,.preview-feedback,#header-sentinel{display:none!important}main,.workspace,.preview-shell{display:block!important;margin:0!important;padding:0!important;width:100%!important;max-width:none!important;min-height:0!important;height:100vh!important}#preview{width:100%!important;height:100vh!important;max-width:none!important;aspect-ratio:16/9!important;border-radius:0!important}#scene-canvas{width:100%!important;height:100%!important}';
 document.head.append(style);
 let ready=false,scheduled=false,pending=world.environmentFinish.strength;
 const report=()=>{
  const audit=world.audit();preview.dataset.audit=JSON.stringify(audit);
  window.parent.postMessage({type:'finish:rendered',strength:world.environmentFinish.amount.value,warmth:0,mode:world.state.mode,audit},origin);
 };
 const apply=()=>{
  scheduled=false;if(!ready)return;
  world.environmentFinish.strength=pending;
  world.environmentFinish.amount.value=pending;
  for(const lawn of world.lawns)lawn.receiveShadow=pending>0;
  world.renderer.shadowMap.needsUpdate=true;world.reflectionSceneRoot=null;
  world.renderFrame();report();
 };
 window.addEventListener('message',event=>{
  if(event.origin===origin&&event.source===window.parent&&event.data?.type==='finish:capture'&&ready){
   world.renderFrame();
   window.parent.postMessage({type:'finish:captured',image:world.renderer.domElement.toDataURL('image/png'),audit:world.audit()},origin);
   return;
  }
  if(event.origin!==origin||event.source!==window.parent||event.data?.type!=='finish:set')return;
  const value=event.data.strength;
  if(typeof value!=='number'||!Number.isFinite(value)||value<0||value>1)return;
  pending=value;if(!scheduled){scheduled=true;requestAnimationFrame(apply);}
 });
 window.addEventListener('studio:ready',()=>{ready=true;apply();});
}
