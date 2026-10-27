// CPU bounds describe the target root; GPU vertices can still be at the old
// road edge. Keep both visible and shadow passes alive until the morph ends.
export function retainMorphingScenery(root){
 const restored=[];
 root.traverse(object=>{
  if(!object.isMesh||!object.frustumCulled)return;
  const role=object.geometry?.getAttribute('roadLayoutRole');
  if(!role?.count||role.getX(0)===0)return;
  restored.push(object);object.frustumCulled=false;
 });
 return ()=>{for(const object of restored)object.frustumCulled=true;restored.length=0;};
}
