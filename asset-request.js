// Bound both response headers and body transfer. Retrying must start a fresh request.
export async function fetchAsset(url,{priority='high',timeoutMs=30000}={}){
 const controller=new AbortController();
 const timer=setTimeout(()=>controller.abort(),timeoutMs);
 try{
  const response=await fetch(url,{priority,signal:controller.signal});
  if(!response.ok)throw new Error(`Asset request failed (${response.status})`);
  return await response.arrayBuffer();
 }catch(cause){throw Object.assign(new Error('Scene asset could not load',{cause}),{code:'asset'});}
 finally{clearTimeout(timer);}
}
export function takePrefetched(key,fallback,scope=globalThis){
 const request=scope[key];
 delete scope[key];
 return request||fallback();
}
