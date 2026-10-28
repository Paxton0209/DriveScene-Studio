const preview=document.getElementById('preview'),result=document.getElementById('result');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
async function ready(){for(let attempt=0;attempt<400;attempt++){const controller=preview.contentWindow.draftController;if(controller&&controller.bridge().get({audit:false}).ready)return controller;await wait(100)}throw Error('Preview not ready')}
document.getElementById('run').addEventListener('click',async()=>{
 const evidence={checks:[],operations:[],longTasks:[],errors:[]};let operation='startup',observer;
 const check=(name,passed,detail)=>evidence.checks.push({name,passed,detail});
 async function measure(name,action){operation=name;const start=performance.now();await action();evidence.operations.push({name,durationMs:performance.now()-start})}
 try{
  result.textContent='Running';delete result.dataset.complete;
  const controller=await ready(),bridge=controller.bridge(),doc=preview.contentDocument,engineWindow=doc.getElementById('engine').contentWindow,engine=engineWindow.layoutEngine;
  for(const target of [preview.contentWindow,engineWindow]){target.addEventListener('error',event=>evidence.errors.push(event.message));target.addEventListener('unhandledrejection',event=>evidence.errors.push(String(event.reason?.stack||event.reason)))}
  observer=new PerformanceObserver(list=>{for(const entry of list.getEntries())evidence.longTasks.push({operation,durationMs:entry.duration,start:entry.startTime})});observer.observe({type:'longtask',buffered:false});
  for(let trial=0;trial<3;trial++){
   for(const scene of ['road','elevated','ramp','junction','parking','outdoor'])await measure('scene '+scene+' #'+trial,()=>controller.selectScene(scene));
   await controller.selectScene('road');
   for(const lanes of [2,4,6])await measure('lanes '+lanes+' #'+trial,()=>controller.applyParam('lanes',lanes,false));
   for(const camera of ['high','low'])await measure('camera '+camera+' #'+trial,()=>controller.applyParam('camera',camera,false));
   for(const weather of ['overcast','rain','snow','default'])await measure('weather '+weather+' #'+trial,async()=>{await controller.applyParam('weather',weather,false);await wait(200)});
   for(const layer of ['traffic','buildings','trees','waterfront'])for(const value of [false,true])await measure(layer+' '+value+' #'+trial,()=>controller.applyParam(layer,value,false));
   for(const model of ['x6','ix','xc90','model-3'])await measure('vehicle '+model+' #'+trial,async()=>{doc.querySelector('[data-vehicle="'+model+'"]').click();for(let attempt=0;attempt<300&&(engine.get().busy||engine.get().vehicle!==model);attempt++)await wait(30);check('Vehicle '+model+' #'+trial,engine.get().vehicle===model&&!engine.get().busy)});
   await controller.applyParam('path',false,false);const sound=bridge.get({audit:false}).sound.plays;
   doc.getElementById('assist').click();await wait(650);doc.getElementById('assist').click();await wait(250);
   check('Assist plays one enable cue #'+trial,bridge.get({audit:false}).sound.plays===sound+1);
   await measure('theme roundtrip #'+trial,async()=>{doc.getElementById('theme').click();await wait(650);doc.getElementById('theme').click();await wait(650)});
  }
  for(const width of [1280,1440,1680,800,390]){
   preview.style.width=width+'px';await wait(500);const board=doc.getElementById('artboard').getBoundingClientRect(),stage=doc.getElementById('stage').getBoundingClientRect();
   check('Layout '+width,doc.documentElement.scrollWidth<=width&&Math.abs(board.width/board.height-16/9)<.001&&board.left>=stage.left&&board.right<=stage.right,{documentWidth:doc.documentElement.scrollWidth,width:board.width,height:board.height});
  }
  preview.style.width='1440px';await wait(350);
  for(let index=0;index<10;index++){doc.querySelector('[data-scene="'+['road','ramp','junction','parking','elevated'][index%5]+'"]').click();await wait(100)}
  await wait(2500);check('10Hz scene switching settles coherently',engine.get().selected===controller.project.active&&!engine.get().busy,{ui:controller.project.active,engine:engine.get().selected});
  await controller.selectScene('road');
  for(let index=0;index<10;index++){doc.querySelector('[data-vehicle="'+['x6','ix','xc90','model-3'][index%4]+'"]').click();await wait(100)}
  await wait(1800);check('10Hz vehicle switching settles coherently',engine.get().vehicle===controller.project.boards.road.params.model&&!engine.get().busy,{ui:controller.project.boards.road.params.model,engine:engine.get().vehicle});
  for(let index=0;index<10;index++){doc.querySelector('[data-param="lanes"] [data-value="'+[2,4,6][index%3]+'"]').click();await wait(100)}
  await wait(1600);check('10Hz lane switching settles coherently',engine.get().state.laneCount===controller.project.boards.road.params.lanes,{ui:controller.project.boards.road.params.lanes,engine:engine.get().state.laneCount});
  const selected=controller.project.active,theme=doc.documentElement.dataset.theme;
  doc.getElementById('format').value='video';doc.getElementById('format').dispatchEvent(new Event('change',{bubbles:true}));
  const exporting=controller.exportCurrent();await wait(100);
  check('Encoding locks theme and scene UI',doc.getElementById('theme').disabled&&doc.getElementById('scene-nav').inert);
  doc.getElementById('theme').click();doc.querySelector('[data-scene="parking"]').click();bridge.cancelExport();await exporting;
  check('Cancel restores UI and selected scene',!doc.getElementById('theme').disabled&&!doc.getElementById('scene-nav').inert&&controller.project.active===selected&&doc.documentElement.dataset.theme===theme,{feedback:doc.getElementById('feedback').textContent});
  doc.getElementById('format').value='png';doc.getElementById('format').dispatchEvent(new Event('change',{bubbles:true}));
  const oldTime=bridge.get({audit:false}).loopTime;bridge.setPlaying(true);await wait(500);check('Playback resumes after export cancellation',bridge.get({audit:false}).loopTime>oldTime);
  result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='true';
 }catch(error){evidence.errors.push(error.stack);result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='error'}finally{observer?.disconnect()}
});
