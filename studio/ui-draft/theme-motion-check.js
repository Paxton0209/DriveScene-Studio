const preview=document.getElementById('preview'),result=document.getElementById('result'),state=document.getElementById('state');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
document.getElementById('run').addEventListener('click',async()=>{
 try{
  state.textContent='Running';result.textContent='';
  for(let attempt=0;!preview.contentWindow.draftController&&attempt<300;attempt++)await wait(100);
  const controller=preview.contentWindow.draftController,doc=preview.contentDocument,bridge=controller.bridge();
  await controller.selectScene('ramp');controller.applyParam('layout','06',false);controller.applyParam('traffic',false,false);await wait(1200);
  const measurements=[];
  for(let trial=0;trial<4;trial++){
   const timestamps=[],longTasks=[];let sampling=true;
   const observer=new preview.contentWindow.PerformanceObserver(list=>longTasks.push(...list.getEntries().map(entry=>({start:entry.startTime,duration:entry.duration}))));
   observer.observe({type:'longtask',buffered:false});
   const sample=timestamp=>{timestamps.push(timestamp);if(sampling)preview.contentWindow.requestAnimationFrame(sample)};
   preview.contentWindow.requestAnimationFrame(sample);
   const before=bridge.get({audit:false}),start=performance.now();doc.getElementById('theme').click();await wait(1100);sampling=false;observer.disconnect();
   const intervals=timestamps.slice(1).map((timestamp,index)=>timestamp-timestamps[index]);
   measurements.push({trial,theme:doc.documentElement.dataset.theme,start,elapsed:performance.now()-start,frameTimestamps:timestamps,intervals,maxInterval:Math.max(...intervals),framesOver25ms:intervals.filter(value=>value>25).length,longTasks,distanceBefore:before.distance,distanceAfter:bridge.get({audit:false}).distance,themeAudit:JSON.parse(doc.body.dataset.themeMotion||'null')});
  }
  bridge.setPlaying(false);bridge.restart();
  const poses=[];
  for(let frame=0;frame<=60;frame++){
   const captured=bridge.capture(),arrows=captured.objects.filter(item=>item.object.name==='version-arrows'||item.object.name==='version-arrows-repeat');
   poses.push({time:frame/60,distance:bridge.get().distance,car:captured.pose.carPosition.toArray(),arrows:arrows.map(item=>({name:item.object.name,z:item.position.z}))});
   if(frame<60)bridge.advance(1/60);
  }
  bridge.setPlaying(true);result.textContent=JSON.stringify({measurements,poses},null,2);state.textContent='Complete';result.dataset.complete='true';
 }catch(error){state.textContent='Error';result.textContent=error.stack}
});
