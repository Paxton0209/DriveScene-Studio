// Readiness is signalled by the actual prepared engine. Polling only provides
// a fallback for a signal dispatched before the parent subscribes.
export function waitForEngine({host,frame,ready,timeout=30000}){
 return new Promise((resolve,reject)=>{
  let timer,poll;
  const clean=()=>{clearTimeout(timer);clearInterval(poll);host.removeEventListener('message',message);};
  const check=()=>{try{if(ready()){clean();resolve();}}catch{}};
  const message=event=>{if(event.source===frame.contentWindow&&event.origin===host.location.origin&&event.data?.type==='ui-draft-ready')check();};
  host.addEventListener('message',message);
  timer=setTimeout(()=>{clean();reject(Error('Scene update timed out'));},timeout);
  poll=setInterval(check,250);check();
 });
}
