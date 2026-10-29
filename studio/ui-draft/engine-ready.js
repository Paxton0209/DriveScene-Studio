// Readiness is signalled by the actual prepared engine. Polling only provides
// a fallback for a signal dispatched before the parent subscribes.
export function waitForEngine({host,frame,ready,timeout=30000}){
 return new Promise((resolve,reject)=>{
  let timer,poll;
  const clean=()=>{clearTimeout(timer);clearInterval(poll);host.removeEventListener('message',message);};
  const check=()=>{try{if(ready()){clean();resolve();}}catch{}};
  const message=event=>{if(event.source!==frame.contentWindow||event.origin!==host.location.origin)return;if(event.data?.type==='ui-draft-error'){clean();reject(Error(event.data.message||'Scene preparation failed'));}else if(event.data?.type==='ui-draft-ready')check();};
  host.addEventListener('message',message);
  timer=setTimeout(()=>{clean();reject(Error('Scene update timed out'));},timeout);
  poll=setInterval(check,250);check();
 });
}

// Uncover the running renderer only after it has drawn a changed driving frame.
// The first static preparation raster must not become a visible pause.
export function waitForStartupMotion({host,bridge}){
 const initial=bridge.get({audit:false}),frames=bridge.themeStatus().renderedFrames;
 if(!initial.playing||!['road','elevated','ramp'].includes(initial.scene)||host.document.hidden)return Promise.resolve();
 return new Promise(resolve=>{
  const check=()=>{const current=bridge.get({audit:false});
   if(!current.playing||host.document.hidden||bridge.themeStatus().renderedFrames>frames&&current.distance>initial.distance){resolve();return}
   host.requestAnimationFrame(check);
  };
  host.requestAnimationFrame(check);
 });
}
