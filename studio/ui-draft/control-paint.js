// Let the browser present the selected control before synchronous scene/GPU work.
// Per-key revisions also discard clicks superseded before that paint.
export function createControlPaint({frame=requestAnimationFrame,task=setTimeout}={}){
 const revisions=new Map();
 return async key=>{
  const revision=(revisions.get(key)||0)+1;
  revisions.set(key,revision);
  await new Promise(resolve=>frame(()=>task(resolve,0)));
  return revisions.get(key)===revision;
 };
}
