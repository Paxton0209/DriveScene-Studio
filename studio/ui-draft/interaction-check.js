const preview=document.getElementById('preview'),result=document.getElementById('result');
const wait=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
document.getElementById('run').addEventListener('click',async()=>{
 const checks=[];
 try{
  result.textContent='Running';
  for(let attempt=0;!preview.contentWindow.draftController&&attempt<300;attempt++)await wait(100);
  const controller=preview.contentWindow.draftController,doc=preview.contentDocument,bridge=controller.bridge();
  const count=()=>bridge.get().sound.plays;
  const check=(name,passed,detail)=>checks.push({name,passed,detail});
  await controller.selectScene('road');controller.applyParam('path',true,false);
  await controller.selectScene('ramp');controller.applyParam('path',false,false);
  const initial=count();
  for(const scene of ['road','ramp','road','elevated','junction','parking','outdoor','road'])await controller.selectScene(scene);
  check('Scene restoration stays silent',count()===initial,{before:initial,after:count()});
  for(const [key,value]of [['lanes',4],['camera','high'],['weather','rain'],['traffic',false],['model','x6']]){
   controller.applyParam(key,value,false);await wait(500);
  }
  doc.getElementById('theme').click();await wait(900);
  check('Parameters, vehicle and theme stay silent',count()===initial,{before:initial,after:count()});
  controller.applyParam('path',false,false);const before=count();
  doc.getElementById('assist').click();await wait(600);
  check('Explicit Assist on plays once',count()===before+1,{before,after:count(),sound:bridge.get().sound});
  const afterOn=count();controller.applyParam('path',true,false);await wait(300);
  check('Repeated same state does not replay',count()===afterOn,{before:afterOn,after:count()});
  doc.getElementById('assist').click();await wait(300);
  check('Assist off does not play enable cue',count()===afterOn,{before:afterOn,after:count()});
  const bounds=[...doc.querySelectorAll('.properties,.vehicle-strip,#layers')].map(element=>({id:element.id,left:element.getBoundingClientRect().left,right:element.getBoundingClientRect().right}));
  check('Inspector groups align',bounds.every(value=>value.left===bounds[0].left&&value.right===bounds[0].right),bounds);
  const icon=doc.querySelector('.theme-icon').getBoundingClientRect();
  check('Theme icon reduced to 18px',icon.width===18&&icon.height===18,{width:icon.width,height:icon.height});
  result.textContent=JSON.stringify(checks,null,2);result.dataset.complete='true';
 }catch(error){result.textContent=JSON.stringify({checks,error:error.stack},null,2);result.dataset.complete='error'}
});
