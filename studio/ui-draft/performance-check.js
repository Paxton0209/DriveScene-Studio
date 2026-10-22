const preview=document.getElementById('preview'),result=document.getElementById('result');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
const summary=values=>{const sorted=[...values].sort((left,right)=>left-right);return {count:values.length,mean:values.reduce((sum,value)=>sum+value,0)/Math.max(1,values.length),p95:sorted[Math.floor((sorted.length-1)*.95)]||0,max:sorted.at(-1)||0,over50:values.filter(value=>value>50).length}};
async function ready(){for(let attempt=0;attempt<400;attempt++){const controller=preview.contentWindow.draftController;if(controller&&controller.bridge().get({audit:false}).ready)return controller;await wait(100)}throw Error('Preview not ready')}
function record(bridge,milliseconds){
 return new Promise(resolve=>{
  const frames=[],updates=[],start=performance.now();let last=0,lastUpdate=0,priorTime=-1;
  const tick=now=>{if(last)frames.push(now-last);last=now;const time=bridge.get({audit:false}).loopTime;if(time!==priorTime){if(lastUpdate)updates.push(now-lastUpdate);lastUpdate=now;priorTime=time}
   if(now-start<milliseconds)requestAnimationFrame(tick);else resolve({browserFrames:summary(frames),renderUpdates:summary(updates),runtime:bridge.get({audit:false})})};
  requestAnimationFrame(tick);
 });
}
document.getElementById('run').addEventListener('click',async()=>{
 const evidence={cases:[],longTasks:[]};let observer;
 try{
  result.textContent='Measuring';delete result.dataset.complete;
  observer=new PerformanceObserver(list=>{for(const entry of list.getEntries())evidence.longTasks.push({start:entry.startTime,duration:entry.duration})});observer.observe({type:'longtask',buffered:false});
  const controller=await ready(),bridge=controller.bridge();bridge.setPlaying(false);await bridge.theme('dark');
  for(const scene of ['road','ramp','parking']){
   await controller.selectScene(scene);controller.applyParam('weather','default',false);await wait(1400);
   bridge.setPlaying(true);const measured=await record(bridge,2500);evidence.cases.push({scene,weather:'default',...measured});bridge.setPlaying(false);
  }
  await controller.selectScene('road');controller.applyParam('weather','rain',false);await wait(1200);bridge.setPlaying(true);evidence.cases.push({scene:'road',weather:'rain',...await record(bridge,2500)});bridge.setPlaying(false);
  result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='true';
 }catch(error){result.textContent=JSON.stringify({...evidence,error:error.stack},null,2);result.dataset.complete='error'}finally{observer?.disconnect()}
});
