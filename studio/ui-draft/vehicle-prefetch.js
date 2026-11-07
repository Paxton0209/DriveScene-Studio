import {fetchAsset} from '../engine/asset-request.js';

// Transfer compressed files only. Model decoding and GPU preparation still
// happen on selection, and the loader consumes the same in-flight request.
export async function prefetchVehicleFiles(models,{needsModel,host=window.parent,download=fetchAsset}){
 const requests=host.__draftStartupAssets,connection=host.navigator.connection;
 if(!requests||connection?.saveData||['slow-2g','2g'].includes(connection?.effectiveType))return;
 for(const id of models){
  if(host.document.hidden)return;
  if(!needsModel(id))continue;
  const version=id==='x6'?'x6-lossless-20261104':'restore26';
  const preload=path=>{
   const url=new URL(`./vehicles/${id}/${path}`,host.document.baseURI).href;
   if(requests.has(url))return requests.get(url);
   const request=download(url,{priority:'low',timeoutMs:10000}).catch(error=>{
    if(requests.get(url)===request)requests.delete(url);
    throw error;
   });
   requests.set(url,request);
   return request;
  };
  await Promise.allSettled([preload(`model.glb.gz?v=${version}`),preload('framing-hull.json?v=cold-20261102')]);
 }
}
