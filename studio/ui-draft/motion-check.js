const preview=document.getElementById('preview'),result=document.getElementById('result');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
const evidence={ramps:[],junction:[],errors:[]};
preview.addEventListener('load',()=>preview.contentWindow.addEventListener('error',event=>evidence.errors.push(event.message)));
async function ready(){
 for(let attempt=0;attempt<300;attempt++){
  const api=preview.contentWindow.layoutEngine;
  if(api?.draft?.get().ready&&api.get().ready&&!api.get().busy)return api;
  await wait(100);
 }
 throw Error('Engine did not become ready');
}
const pose=bridge=>{const snapshot=bridge.capture();return {time:snapshot.loopTime,car:snapshot.pose.carPosition.toArray(),camera:snapshot.pose.position.toArray()}};
document.getElementById('run').addEventListener('click',async()=>{
 try{
  result.textContent='Running';
  const api=await ready(),bridge=api.draft;
  for(const layout of ['06','07']){
   bridge.setPlaying(false);await bridge.scene('ramp');api.param('layout',layout);await wait(1600);await ready();
   const before=bridge.get();bridge.setPlaying(true);await wait(1200);const moving=bridge.get();bridge.setPlaying(false);const stopped=bridge.get();await wait(300);const paused=bridge.get();
   evidence.ramps.push({layout,before:before.distance,moving:moving.distance,playing:moving.playing,paused:paused.distance,stopped:stopped.distance,passed:moving.distance>before.distance&&paused.distance===stopped.distance});
  }
  await bridge.scene('junction');await wait(500);bridge.setPlaying(false);bridge.replay();
  evidence.junction.push(pose(bridge));
  for(let frame=0;frame<75;frame++){bridge.advance(1/60);evidence.junction.push(pose(bridge))}
  const initial=evidence.junction[0],early=evidence.junction[6],later=evidence.junction[60];
  evidence.junctionPassed=early.car[2]<initial.car[2]&&Math.abs(early.camera[1]-initial.camera[1])<.001&&later.camera[1]>early.camera[1];
  result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='true';
 }catch(error){evidence.errors.push(error.message);result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='error'}
});
