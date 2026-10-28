const preview=document.getElementById('preview'),result=document.getElementById('result');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
async function ready(){for(let attempt=0;attempt<400;attempt++){const controller=preview.contentWindow.draftController;if(controller&&controller.bridge().get({audit:false}).ready)return controller;await wait(100)}throw Error('Preview not ready')}
document.getElementById('run').addEventListener('click',async()=>{
 const evidence={startedAt:new Date().toISOString(),durationMs:600000,cycles:[],samples:[],checks:[],errors:[],longTasks:[],limitations:['WebGL resource counts are available; allocated GPU bytes are not exposed by this browser.','JS heap samples are not forced-GC measurements.','Frame intervals record browser callbacks and simulation updates, not GPU completion.']};
 let observer;
 try{
  delete result.dataset.complete;result.textContent='Warming all scenes';
  const controller=await ready(),bridge=controller.bridge(),doc=preview.contentDocument;
  preview.contentWindow.addEventListener('unhandledrejection',event=>evidence.errors.push(String(event.reason?.stack||event.reason)));
  preview.contentWindow.addEventListener('error',event=>evidence.errors.push(event.message));
  const engineWindow=doc.getElementById('engine').contentWindow;
  engineWindow.addEventListener('unhandledrejection',event=>evidence.errors.push(String(event.reason?.stack||event.reason)));
  engineWindow.addEventListener('error',event=>evidence.errors.push(event.message));
  observer=new PerformanceObserver(list=>{for(const entry of list.getEntries())evidence.longTasks.push({start:entry.startTime,duration:entry.duration})});observer.observe({type:'longtask',buffered:false});
  const scenes=['road','elevated','ramp','junction','parking','outdoor'];
  for(const scene of scenes)await controller.selectScene(scene);
  await controller.selectScene('road');await wait(1000);
  const started=performance.now(),sample=()=>({elapsedMs:performance.now()-started,...bridge.resources(),scene:controller.project.active});
  evidence.samples.push(sample());
  let cycle=0;
  while(performance.now()-started<evidence.durationMs){
   const scene=scenes[cycle%scenes.length],operationStarted=performance.now();
   bridge.input();await controller.selectScene(scene);
   const beforeSound=bridge.get({audit:false}).sound.plays;
   for(const [key,value]of [['weather',['default','overcast','rain','snow'][Math.floor(cycle/6)%4]],['traffic',cycle%2===0],['buildings',true],['trees',true]])await controller.applyParam(key,value,false);
   if(scene==='road'){await controller.applyParam('lanes',[2,4,6][Math.floor(cycle/6)%3],false);await controller.applyParam('camera',cycle%12?'high':'low',false)}
   if(scene==='ramp')await controller.applyParam('layout',cycle%12?'07':'06',false);
   if(scene==='junction'){await controller.applyParam('layout',cycle%12?'08':'05',false);bridge.junctionPlay()}
   if(['parking','outdoor'].includes(scene))await controller.applyParam('camera',['default','raised','bev'][Math.floor(cycle/6)%3],false);
   const engine=engineWindow.layoutEngine,model=['model-3','x6','ix','xc90'][Math.floor(cycle/6)%4];
   doc.querySelector('[data-vehicle="'+model+'"]').click();
   for(let attempt=0;attempt<300&&(engine.get().busy||engine.get().vehicle!==model);attempt++)await wait(50);
   if(engine.get().vehicle!==model||engine.get().busy)throw Error('Vehicle selection did not settle: '+model);
   evidence.checks.push({name:'Silent restore '+cycle,passed:bridge.get({audit:false}).sound.plays===beforeSound});
   if(cycle%6===0){await bridge.theme(cycle%12?'dark':'light');doc.getElementById('assist').click();await wait(650);doc.getElementById('assist').click();await wait(200)}
   if(cycle%6===0){const before=bridge.capture(),playing=bridge.get({audit:false}).requestedPlaying;const exported=await bridge.export({format:'png'}),after=bridge.capture();evidence.checks.push({name:'Export restores '+cycle,passed:Math.abs(before.drive.distance-after.drive.distance)<.001&&before.loopTime===after.loopTime&&playing===bridge.get({audit:false}).requestedPlaying,bytes:exported.blob.size})}
   evidence.cycles.push({cycle,scene,operationMs:performance.now()-operationStarted});
   await wait(Math.min(6500,Math.max(0,evidence.durationMs-(performance.now()-started))));
   if(cycle%6===0)evidence.samples.push(sample());
   result.textContent=JSON.stringify({elapsedSeconds:Math.round((performance.now()-started)/1000),cycles:evidence.cycles.length,errors:evidence.errors,sample:evidence.samples.at(-1)},null,2);
   cycle++;
  }
  await controller.selectScene('road');await wait(1000);evidence.samples.push(sample());
  evidence.finishedAt=new Date().toISOString();evidence.elapsedMs=performance.now()-started;
  result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='true';
 }catch(error){evidence.errors.push(error.stack);result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='error'}finally{observer?.disconnect()}
});
