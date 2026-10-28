// Navigation acknowledges input immediately. Only the prepared canvas waits.
export async function revealScene({cover,commit,reduce=false,signal}){
 commit();
 if(reduce||signal?.aborted){cover.hidden=true;return;}
 const fade=cover.animate([{opacity:1},{opacity:0}],{duration:200,easing:'cubic-bezier(.2,0,.2,1)'});
 const cancel=()=>fade.cancel();signal?.addEventListener('abort',cancel,{once:true});
 try{await fade.finished.catch(()=>{});}
 finally{signal?.removeEventListener('abort',cancel);cover.hidden=true;}
}
