// Start the selected model's exact hull indices alongside its GLB. Other
// models' framing tables do not belong in the executable renderer bundle.
export function createFramingData({fetch:request=globalThis.fetch,parentRequests=()=>globalThis.parent?.__draftStartupAssets,base=import.meta.url}={}){
 const pending=new Map();
 return function load(id){
  if(!['model-3','x6','ix','xc90'].includes(id))return Promise.resolve(null);
  if(!pending.has(id))pending.set(id,(async()=>{
   const url=new URL(`./vehicles/${id}/framing-hull.json?v=cold-20261102`,base).href;
   const fresh=async()=>{const response=await request(url);if(!response.ok)throw Error('Vehicle framing could not load');return response.arrayBuffer()};
   let early;try{const requests=parentRequests();early=requests?.get(url);requests?.delete(url)}catch{}
   try{return JSON.parse(new TextDecoder().decode(await (early?Promise.resolve(early).catch(fresh):fresh())))}
   // The existing full-mesh projection remains a correct fallback. A missing
   // optimization asset must not prevent the actual vehicle from loading.
   catch{pending.delete(id);return null}
  })());
  return pending.get(id);
 };
}
export const loadFramingHull=createFramingData();
