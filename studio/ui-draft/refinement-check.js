const preview=document.getElementById('preview'),result=document.getElementById('result'),images=document.getElementById('images'),scanFrames=document.getElementById('scan-frames');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
const dataUrl=blob=>new Promise(resolve=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.readAsDataURL(blob)});
async function ready(){for(let attempt=0;attempt<400;attempt++){const controller=preview.contentWindow.draftController;if(controller&&preview.contentDocument.body.dataset.ready==='true'&&controller.bridge().get({audit:false}).ready)return controller;await wait(100)}throw Error('Preview not ready')}
async function image(bridge,label,target=images){const figure=document.createElement('figure'),picture=document.createElement('img'),caption=document.createElement('figcaption');picture.src=await dataUrl(await bridge.snapshot());picture.dataset.label=label;caption.textContent=label;figure.append(picture,caption);target.append(figure)}
document.getElementById('run').addEventListener('click',async()=>{
 const evidence={checks:[],junctions:[],scan:[],errors:[]};const check=(name,passed,detail)=>evidence.checks.push({name,passed,detail});
 try{
  result.textContent='Checking';delete result.dataset.complete;images.replaceChildren();scanFrames.replaceChildren();
  const seeded={active:'ramp',boards:Object.fromEntries(['road','elevated','ramp','junction','parking','outdoor'].map(id=>[id,{params:{path:true,model:'model-3',weather:'default',traffic:false}}]))};
  localStorage.setItem('drivescene-ui-draft-project-v2-qa',JSON.stringify(seeded));
  preview.src='index.html?qa=1&v=refine-20261022e';await new Promise(resolve=>preview.onload=resolve);
  let controller=await ready(),bridge=controller.bridge();const doc=preview.contentDocument;
  preview.contentWindow.addEventListener('unhandledrejection',event=>evidence.errors.push(String(event.reason)));
  check('Saved enabled states all start off',Object.values(controller.project.boards).every(board=>board.params.path===false)&&!bridge.get({audit:false}).features.path,{sound:bridge.get({audit:false}).sound});
  bridge.setPlaying(false);await bridge.theme('dark');await image(bridge,'Ramp dark horizon');
  await controller.selectScene('road');bridge.setPlaying(false);await controller.applyParam('weather','overcast',false);await image(bridge,'Overcast dark');
  await bridge.theme('light');await image(bridge,'Overcast light');
  await controller.applyParam('weather','snow',false);await image(bridge,'Snow light continuous coating');
  await bridge.theme('dark');await image(bridge,'Snow dark continuous coating');
  await controller.applyParam('weather','default',false);await bridge.theme('light');
  await controller.selectScene('parking');bridge.setPlaying(false);await image(bridge,'Indoor light contact');
  await bridge.theme('dark');await image(bridge,'Indoor dark contact');
  for(const layout of ['05','08']){
   await controller.selectScene('junction');await controller.applyParam('layout',layout,false);bridge.replay();
   const paused=bridge.get({audit:false}),position=bridge.capture().pose.carPosition.toArray();await wait(200);
   check(layout+' starts paused',!paused.playing&&bridge.get({audit:false}).loopTime===0,position);
   if(!controller.project.boards.junction.params.path)doc.getElementById('assist').click();
   await wait(650);const initial=bridge.get(),entry={layout,initial:{speed:initial.junction?.speed,length:initial.path?.length}};
   check(layout+' uses speed times eight',Math.abs(initial.path.length-initial.junction.speed*8)<.001,entry.initial);
   await image(bridge,layout+' before braking');
   doc.getElementById('junction-transport').click();await wait(4500);
   const stopped=bridge.get();entry.stopped={speed:stopped.junction?.speed,length:stopped.path?.length,visible:stopped.path?.visible,playing:stopped.playing,complete:stopped.junction?.complete,button:doc.getElementById('junction-transport').textContent};evidence.junctions.push(entry);
   check(layout+' stops with zero-length line',entry.stopped.speed===0&&entry.stopped.length===0&&!entry.stopped.visible&&!entry.stopped.playing&&entry.stopped.button==='Replay',entry.stopped);
   await image(bridge,layout+' stopped');
  }
  await controller.selectScene('road');bridge.setPlaying(false);await controller.applyParam('weather','default',false);await controller.applyParam('path',false,false);await bridge.theme('dark');
  bridge.beginTheme();await controller.applyParam('path',true,false,{sound:true});
  for(let frame=0;frame<=54;frame++){if(frame)bridge.advance(1/60);const current=bridge.get({audit:false});evidence.scan.push({frame,timestampMs:frame*1000/60,logicalTime:current.logicalTime});await image(bridge,'scan-'+String(frame).padStart(2,'0'),scanFrames)}
  bridge.endTheme();await controller.applyParam('path',false,false);
  await image(bridge,'Scan finished, Assist off');
  await controller.selectScene('parking');
  const engine=doc.getElementById('engine').contentWindow.layoutEngine;
  for(const model of ['x6','ix','xc90','model-3']){
   doc.querySelector('[data-vehicle="'+model+'"]').click();
   for(let attempt=0;attempt<300;attempt++){if(engine.get().vehicle===model&&!engine.get().busy)break;await wait(50)}
   check('Paused parking vehicle '+model,engine.get().vehicle===model&&!engine.get().busy,{vehicle:engine.get().vehicle,busy:engine.get().busy,playing:bridge.get({audit:false}).playing});
  }
  const soundCount=bridge.get({audit:false}).sound.plays;
  for(const scene of ['outdoor','elevated','ramp','junction','road'])await controller.selectScene(scene);
  check('Scene restoration stays silent',bridge.get({audit:false}).sound.plays===soundCount,{before:soundCount,after:bridge.get({audit:false}).sound.plays});
  check('Assist changes require explicit action',bridge.get({audit:false}).sound.plays>=1,{sound:bridge.get({audit:false}).sound});
  doc.getElementById('assist').click();await wait(600);
  preview.src='index.html?qa=1&v=refine-20261022e&reload=1';await new Promise(resolve=>preview.onload=resolve);
  controller=await ready();bridge=controller.bridge();
  check('Reload resets previously active Assist',!bridge.get({audit:false}).features.path&&bridge.get({audit:false}).sound.plays===0,{features:bridge.get({audit:false}).features,sound:bridge.get({audit:false}).sound});
  result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='true';
 }catch(error){evidence.errors.push(error.stack);result.textContent=JSON.stringify(evidence,null,2);result.dataset.complete='error'}
});
