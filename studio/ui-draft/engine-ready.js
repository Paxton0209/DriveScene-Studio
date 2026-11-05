// Readiness is signalled by the actual prepared engine. Polling only provides
// a fallback for a signal dispatched before the parent subscribes.
export function waitForEngine({host,frame,ready,timeout=30000}){
 return new Promise((resolve,reject)=>{
  let timer,poll;
  const clean=()=>{clearTimeout(timer);clearInterval(poll);host.removeEventListener('message',message);};
  const check=()=>{try{if(ready()){clean();resolve();}}catch{}};
  const message=event=>{if(event.source!==frame.contentWindow||event.origin!==host.location.origin)return;if(event.data?.type==='ui-draft-context-lost'||event.data?.type==='ui-draft-error'){clean();reject(Error(event.data.message||'Scene preparation failed'));}else if(event.data?.type==='ui-draft-ready')check();};
  host.addEventListener('message',message);
  timer=setTimeout(()=>{clean();reject(Error('Scene update timed out'));},timeout);
  poll=setInterval(check,250);check();
 });
}

// A background document cannot prove that its renderer is moving. Wait for
// visible presentation and two distinct advancing frames before the handoff.
export function waitForStartupMotion({host,bridge,signal,timeout=8000}){
 let previous=bridge.get({audit:false}),frames=bridge.themeStatus().renderedFrames,advancing=0;
 return new Promise((resolve,reject)=>{
  let first=null,frame;
  const reset=()=>{first=null;advancing=0;previous=bridge.get({audit:false});frames=bridge.themeStatus().renderedFrames;};
  const clean=()=>{host.cancelAnimationFrame?.(frame);signal?.removeEventListener('abort',abort);host.document.removeEventListener?.('visibilitychange',reset);};
  const abort=()=>{clean();reject(new Error('The 3D view stopped before it was ready.'));};
  const finish=()=>{clean();resolve();};
  if(signal?.aborted){abort();return;}
  signal?.addEventListener('abort',abort,{once:true});
  host.document.addEventListener?.('visibilitychange',reset);
  const check=now=>{
   const current=bridge.get({audit:false}),rendered=bridge.themeStatus().renderedFrames;
   if(host.document.hidden){first=null;advancing=0;previous=current;frames=rendered;frame=host.requestAnimationFrame(check);return}
   const moving=['road','elevated','ramp'].includes(current.scene)&&(current.requestedPlaying??current.playing);
   if(!moving){finish();return}
   if(rendered>frames){
    advancing=current.distance>previous.distance?advancing+1:0;
    previous=current;frames=rendered;
   }
   if(advancing>=2){finish();return}
   first??=now;if(now-first>=timeout){abort();return}
   frame=host.requestAnimationFrame(check);
  };
  frame=host.requestAnimationFrame(check);
 });
}
