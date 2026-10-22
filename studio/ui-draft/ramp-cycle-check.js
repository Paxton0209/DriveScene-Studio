const preview=document.getElementById('preview'),result=document.getElementById('result'),frames=document.getElementById('frames');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
const errors=[];
preview.addEventListener('load',()=>{preview.contentWindow.addEventListener('error',event=>errors.push(event.message));preview.contentWindow.addEventListener('unhandledrejection',event=>errors.push(String(event.reason)))});
async function ready(){
 for(let attempt=0;attempt<300;attempt++){const api=preview.contentWindow.layoutEngine;if(api?.draft?.get().ready&&api.get().ready&&!api.get().busy)return api;await wait(100)}
 throw Error('Engine not ready');
}
function state(bridge){
 const capture=bridge.capture(),objects=capture.objects.filter(item=>['ramp-passage','ramp-mainline-edge-0','ramp-mainline-edge-1','version-arrows','version-arrows-far'].includes(item.object.name));
 return {distance:bridge.get().distance,car:capture.pose.carPosition.toArray(),objects:objects.map(item=>({name:item.object.name,z:item.position.z,visible:item.visible,scale:item.scale.toArray()}))};
}
document.getElementById('run').addEventListener('click',async()=>{
 const evidence={cycleSeconds:25,theme:document.getElementById('theme').value,ramps:[],errors};
 try{
  result.textContent='Rendering timed samples';delete result.dataset.complete;frames.replaceChildren();
  const api=await ready(),bridge=api.draft;bridge.setPlaying(false);await bridge.theme(evidence.theme);
  for(const layout of ['06','07']){
   await bridge.scene('ramp');bridge.param('layout',layout);await wait(1200);await ready();bridge.setPlaying(false);
   const initial=bridge.capture(),entry={layout,baseline:state(bridge),samples:[]};
   for(let frame=0;frame<=900;frame++){
    if(frame>0)bridge.advance(1/30);
    if([0,150,300,600,750,900].includes(frame)){
     const sample={seconds:frame/30,...state(bridge)};entry.samples.push(sample);
     const image=document.createElement('img'),figure=document.createElement('figure'),caption=document.createElement('figcaption');
     image.src=URL.createObjectURL(await bridge.snapshot());image.dataset.layout=layout;image.dataset.seconds=String(frame/30);
     caption.textContent=(layout==='06'?'Exit':'Merge')+' · '+frame/30+'s';figure.append(image,caption);frames.append(figure);
    }
    if(frame%15===0)await wait(0);
   }
   bridge.restore(initial);bridge.advance(0);
   const before=bridge.get().distance;await bridge.export({format:'camera'});const after=bridge.get().distance;
   entry.exportRestores=before===after;
   bridge.setPlaying(true);await wait(1100);bridge.setPlaying(false);entry.realPlayback={before,after:bridge.get().distance};
   entry.passed=entry.exportRestores&&entry.realPlayback.after>before&&entry.samples.some(sample=>sample.seconds===10&&sample.objects.some(object=>object.name==='ramp-passage'&&!object.visible));
   evidence.ramps.push(entry);
  }
  result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='true';
 }catch(error){errors.push(error.stack);result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='error'}
});
