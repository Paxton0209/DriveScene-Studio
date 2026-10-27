// Preparation stays behind the outgoing frame. Commit the selection only when
// the destination is ready, then reveal both on the document's single timeline.
export async function revealScene({cover,indicator,commit,reduce=false,timeline=document.timeline}){
 const from=indicator&&getComputedStyle(indicator).transform;
 commit();
 if(reduce){cover.hidden=true;return;}
 const options={duration:200,easing:'cubic-bezier(.2,0,.2,1)'};
 const animations=[cover.animate([{opacity:1},{opacity:0}],options)];
 if(indicator){
  animations.push(indicator.animate([{transform:from},{transform:indicator.style.transform}],options));
  indicator.classList.add('is-moving');
 }
 const start=timeline.currentTime;
 for(const animation of animations)animation.startTime=start;
 try{await Promise.all(animations.map(animation=>animation.finished.catch(()=>{})));}
 finally{cover.hidden=true;indicator?.classList.remove('is-moving');}
}
