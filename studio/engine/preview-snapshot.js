export const previewSnapshotKey='drivescene-preview-v15';
export const previewSnapshotSearch=search=>{const q=new URLSearchParams(search),scene=q.get('scene')||'02',road=['01','02','09','12','13'].includes(scene),cam=road||['03','05','08','06','07'].includes(scene),junction=['05','08'].includes(scene),out=new URLSearchParams({scene,mode:q.get('mode')||'light',model:q.get('model')||'x6',path:q.get('path')==='1'?'1':'0',weather:q.get('weather')||'default'});if(road)out.set('lanes',q.get('lanes')||(scene==='09'?'2':'6'));if(cam)out.set('view',q.get('view')||'low');if(junction)out.set('position',q.get('position')||(q.get('view')==='low'?'approaching':'near'));for(const key of ['buildings','waterfront','trees','vehicle','roadworks'])out.set(key,q.get(key)||'0');out.sort();return '?'+out;};

export function savePreviewSnapshot(canvas,search,storage,viewOffset,viewScroll=0){
 try{storage.setItem(previewSnapshotKey,JSON.stringify({search:previewSnapshotSearch(search),image:canvas.toDataURL('image/png'),viewOffset,viewScroll}));}catch{}
}

export async function savePreviewSnapshotAsync(canvas,search,storage,viewOffset,isCurrent=()=>true,viewScroll=0){
 try{
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob||!isCurrent())return false;
  const image=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(blob);});
  if(!isCurrent())return false;storage.setItem(previewSnapshotKey,JSON.stringify({search:previewSnapshotSearch(search),image,viewOffset,viewScroll}));return true;
 }catch{return false;}
}
