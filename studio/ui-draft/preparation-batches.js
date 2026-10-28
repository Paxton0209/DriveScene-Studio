// A renderer invocation can warm all proxies sharing a pass at once. Keep
// transparent traffic variants separate because they share live materials.
export function batchPreparationJobs(jobs){
 const groups=new Map(),identities=new Map();
 const identity=value=>{if(!identities.has(value))identities.set(value,identities.size);return identities.get(value);};
 for(const job of jobs){
  // Render targets do not expose Object3D.uuid. Use actual object identity so
  // screen output and offscreen passes can never share a preparation batch.
  const key=[identity(job.scene),identity(job.camera),identity(job.target),!!job.trafficFade].join('|');
  if(!groups.has(key))groups.set(key,{...job,jobs:[]});
  groups.get(key).jobs.push(job);
 }
 return [...groups.values()];
}
export function attachPreparationBatch(batch){
 const original=new Map();
 for(const item of batch.jobs){
  if(item.trafficFade&&!original.has(item.material)){original.set(item.material,item.material.transparent);item.material.transparent=!item.baseTransparent;}
  batch.scene.add(item.proxy);
 }
 return ()=>{for(const item of batch.jobs)item.proxy.removeFromParent();for(const [material,transparent]of original)material.transparent=transparent;};
}
