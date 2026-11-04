// Race a slow public asset against an immutable, integrity-checked mirror.
// Only pinned, integrity-checked build inputs may use another origin. X6's
// original PNG model is also valid when its primary uses lossless WebP pixels.
export async function fetchStartupAsset(url,{mirror,scope=globalThis,delay=3000}={}){
 const read=async(target,signal)=>{const response=await scope.fetch(target,{priority:'high',signal});if(!response.ok)throw Error(`Scene asset could not load (${response.status})`);return response.arrayBuffer()};
 if(!mirror||scope.location?.hostname!=='paxton0209.github.io')return read(url);
 const primary=new AbortController(),backup=new AbortController();let timer,startBackup;
 const fallback=new Promise((resolve,reject)=>{let started=false;startBackup=()=>{
  if(started)return;started=true;
  read(mirror.url,backup.signal).then(async bytes=>{
   const digest=await scope.crypto.subtle.digest('SHA-256',bytes);
   const hash=Array.from(new Uint8Array(digest),value=>value.toString(16).padStart(2,'0')).join('');
   if(hash!==mirror.sha256)throw Error('Scene mirror integrity check failed');return bytes;
  }).then(resolve,reject);
 };timer=setTimeout(startBackup,delay)});
 const original=read(url,primary.signal).catch(error=>{startBackup();throw error});
 try{return await Promise.any([original,fallback])}
 catch(cause){throw new Error('Scene files could not load. Please try again.',{cause})}
 finally{clearTimeout(timer);primary.abort();backup.abort()}
}

// This generated data module is self-contained: no relative imports or code from users.
export async function loadParkingNormalModule(url){
 const scope=window.parent,mirror=scope.__draftStartupMirrors?.['./parking-normals.bundle.js'];
 const bytes=await fetchStartupAsset(url,{scope,mirror,delay:150});
 const local=URL.createObjectURL(new Blob([bytes],{type:'text/javascript'}));
 try{return await import(local)}finally{URL.revokeObjectURL(local)}
}
