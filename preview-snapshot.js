export const previewSnapshotKey='drivescene-preview-v10';
export function previewSnapshotSearch(search){const query=new URLSearchParams(search);for(const key of ['review','v','qa','perf','bootqa'])query.delete(key);query.sort();const value=query.toString();return value?'?'+value:'';}

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
