const preview=document.getElementById('preview'),result=document.getElementById('result');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
async function ready(){for(let attempt=0;attempt<400;attempt++){const controller=preview.contentWindow.draftController;if(controller&&preview.contentDocument.body.dataset.ready==='true'&&controller.bridge().get({audit:false}).ready)return controller;await wait(100)}throw Error('Preview not ready')}
document.getElementById('run').addEventListener('click',async()=>{
 const evidence={checks:[],transitions:[],errors:[]},check=(name,passed,detail)=>evidence.checks.push({name,passed,detail});
 try{
  delete result.dataset.complete;result.textContent='Running';const controller=await ready(),bridge=controller.bridge(),doc=preview.contentDocument;
  const engine=doc.getElementById('engine').contentWindow;
  for(const target of [preview.contentWindow,engine]){target.addEventListener('error',event=>evidence.errors.push(event.message));target.addEventListener('unhandledrejection',event=>evidence.errors.push(String(event.reason)))}
  for(const scene of ['road','ramp','junction','parking']){
   await controller.selectScene(scene);if(scene==='junction')bridge.junctionPlay();
   for(let trial=0;trial<2;trial++){
    const samples=[],tasks=[],playing=bridge.get({audit:false}).playing;let sampling=true;
    const observer=new PerformanceObserver(list=>tasks.push(...list.getEntries().map(entry=>({start:entry.startTime,duration:entry.duration}))));observer.observe({type:'longtask',buffered:false});
    const sample=timestamp=>{const state=bridge.get({audit:false});samples.push({timestamp,distance:state.distance,loopTime:state.loopTime,...bridge.themeStatus()});if(sampling)requestAnimationFrame(sample)};requestAnimationFrame(sample);
    doc.getElementById('theme').click();await wait(700);sampling=false;observer.disconnect();
    const audit=JSON.parse(doc.body.dataset.themeMotion||'null'),during=samples.filter(sample=>sample.timestamp>=audit.animationStarted&&sample.timestamp<=audit.finished),entry={scene,trial,audit,playing,samples,longTasks:tasks};evidence.transitions.push(entry);
    check(scene+' live rendering #'+trial,during.length>5&&during.at(-1).renderedFrames>during[0].renderedFrames&&!during.some(sample=>sample.held),{samples:during.length,frames:during.at(-1)?.renderedFrames-during[0]?.renderedFrames});
    check(scene+' playback state #'+trial,playing?during.at(-1)?.loopTime>during[0]?.loopTime:!during.some(sample=>sample.loopTime!==during[0].loopTime),{before:during[0]?.loopTime,after:during.at(-1)?.loopTime});
   }
  }
  await controller.selectScene('road');await controller.applyParam('path',false,false);await wait(200);
  const before=bridge.get({audit:false}).sound;doc.getElementById('assist').click();await wait(700);const enabled=bridge.get({audit:false}).sound;
  doc.getElementById('assist').click();await wait(300);const disabled=bridge.get({audit:false}).sound;
  check('09 chosen enable and first-note exit',enabled.cue==='09'&&enabled.durationMs===615&&disabled.exitDurationMs===230&&enabled.plays===before.plays+1&&disabled.exitPlays===before.exitPlays+1,{before,enabled,disabled});
  await controller.selectScene('ramp');await controller.selectScene('road');const restored=bridge.get({audit:false}).sound;
  check('Scene restoration plays neither cue',restored.plays===disabled.plays&&restored.exitPlays===disabled.exitPlays,restored);
  result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='true';
 }catch(error){evidence.errors.push(error.stack);result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='error'}
});
