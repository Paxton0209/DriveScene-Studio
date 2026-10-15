// Stop stalled transfers while allowing a slow connection that still makes progress.
export async function fetchAsset(url,{priority='high',timeoutMs=30000}={}){
 const controller=new AbortController();
 let timer;
 const touch=()=>{clearTimeout(timer);timer=setTimeout(()=>controller.abort(),timeoutMs);};
 touch();
 try{
  const response=await fetch(url,{priority,signal:controller.signal});
  if(!response.ok)throw new Error(`Asset request failed (${response.status})`);
  const reader=response.body?.getReader();
  if(!reader)return await response.arrayBuffer();
  const chunks=[];let length=0;
  try{
   while(true){
    const {done,value}=await reader.read();if(done)break;
    if(value.byteLength){touch();chunks.push(value);length+=value.byteLength;}
   }
  }finally{reader.releaseLock();}
  const bytes=new Uint8Array(length);let offset=0;
  for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}
  return bytes.buffer;
 }catch(cause){throw Object.assign(new Error('Scene asset could not load',{cause}),{code:'asset'});}
 finally{clearTimeout(timer);}
}
export function takePrefetched(key,fallback,scope=globalThis){
 const request=scope[key];
 delete scope[key];
 // A transient early preload failure gets one fresh request before showing Retry.
 return request?Promise.resolve(request).catch(()=>fallback()):fallback();
}
