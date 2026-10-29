import {createProject,setProjectVehicle} from '../artboards.js';
const $=id=>document.getElementById(id),records=[],key='drivescene-startup-measurements-v1';let previous=null,busy=false,enabled=false;
try{records.push(...JSON.parse(localStorage.getItem(key)||'[]').slice(-40));}catch{}
const round=n=>Math.round(n),label=id=>$(id).selectedOptions[0].textContent;
function renderHistory(){
 $('count').textContent=records.length;$('rows').replaceChildren();
 for(const r of [...records].reverse()){
  const tr=document.createElement('tr');for(const text of [r.time+' · '+r.mode,r.sceneName+' / '+r.modelName,r.error||round(r.readyMs)+' ms',r.keyDownloadMs==null?'—':round(r.keyDownloadMs)+' ms',r.bytes==null?'—':(r.bytes/1048576).toFixed(2)+' MB']){const td=document.createElement('td');td.textContent=text;tr.append(td);}$('rows').append(tr);
 }
}
function lock(value){busy=value;for(const id of ['cold','scene','model'])$(id).disabled=value||!enabled;$('warm').disabled=value||!previous;}
async function run(cold){
 if(busy||!enabled||(!cold&&!previous))return;lock(true);
 const id=cold?crypto.randomUUID():previous.id,scene=cold?$('scene').value:previous.scene,model=cold?$('model').value:previous.model;
 const config={id,scene,model,sceneName:cold?label('scene'):previous.sceneName,modelName:cold?label('model'):previous.modelName};previous=config;$('scene').value=scene;$('model').value=model;$('phases').textContent='';
 const qa='speed-'+id,project=createProject();project.active=scene;setProjectVehicle(project,model);
 localStorage.setItem('drivescene-ui-draft-project-v2-qa-'+qa,JSON.stringify(project));
 const frame=document.createElement('iframe');frame.title='DriveScene 实际启动测试';$('mount').replaceChildren(frame);$('elapsed').textContent='…';$('status').textContent=cold?'正在重新下载并准备完整场景…':'正在使用同一资源地址重新加载…';
 const result={time:new Date().toLocaleTimeString('zh-CN',{hour12:false}),mode:cold?'冷启动':'缓存重测',...config},start=performance.now();
 frame.src='/runs/'+id+'/studio/ui-draft/?qa='+qa+'&paused=1';
 try{
  await new Promise((resolve,reject)=>{const timer=setInterval(()=>{try{
   if(document.hidden){clearInterval(timer);reject(Error('测试期间页面进入后台，本次结果无效，请保持窗口在前台重测。'));return;}
   const win=frame.contentWindow,doc=win.document,c=win.draftController,engine=doc.getElementById('engine'),preview=engine?.contentDocument?.getElementById('preview');
   const fail=preview?.dataset.loadError;
   if(fail){clearInterval(timer);reject(Error(fail));return;}
   if(c?.bridge()?.get({audit:false}).ready&&!doc.getElementById('export')?.disabled&&preview?.getAttribute('aria-busy')==='false'){
    clearInterval(timer);result.readyMs=performance.now()-start;
    const resources=[...win.performance.getEntriesByType('resource').map(r=>({url:r.name,start:win.performance.timeOrigin+r.startTime,end:win.performance.timeOrigin+r.responseEnd,bytes:r.transferSize})),...engine.contentWindow.performance.getEntriesByType('resource').map(r=>({url:r.name,start:engine.contentWindow.performance.timeOrigin+r.startTime,end:engine.contentWindow.performance.timeOrigin+r.responseEnd,bytes:r.transferSize}))].filter(r=>/^https?:/.test(r.url));
    result.resources=resources;result.bytes=resources.reduce((sum,r)=>sum+r.bytes,0);result.keyDownloadMs=Math.max(0,...resources.filter(r=>/runtime.bundle|model.glb.gz|ego-vehicle-ready|traffic-model-y.prepared|studio-environment/.test(r.url)).map(r=>r.end-(performance.timeOrigin+start)));
    result.stages=engine.contentWindow.performance.getEntriesByType('measure').filter(m=>m.name.startsWith('studio-')).map(m=>({name:m.name,startMs:engine.contentWindow.performance.timeOrigin+m.startTime-(performance.timeOrigin+start),ms:m.duration,detail:m.detail}));result.runtime=engine.contentDocument.querySelector('script[type=module]')?.src;result.localOnly=true;c.bridge().setPlaying(false);observeVehicleChanges(frame,result);resolve();
   }else if(performance.now()-start>45000){clearInterval(timer);reject(Error('45 秒内未完成加载，本次记为失败。'));}
  }catch(error){clearInterval(timer);reject(error);}},10);});
  $('elapsed').textContent=round(result.readyMs).toLocaleString();$('status').textContent=`${result.sceneName} · ${result.modelName} 已就绪。${cold?'本次使用全新资源地址。':'本次允许浏览器复用缓存。'}你可以在下方直接验证车模切换。`;$('phases').textContent=result.stages.map(m=>({ 'studio-renderer':'渲染器初始化','studio-scene':'场景准备','studio-warm':'材质预热合计','studio-warm-record':'收集绘制任务','studio-warm-compile':'着色器编译','studio-warm-draw':'预热绘制'}[m.name]||m.name)+' '+round(m.ms)+' ms'+(m.detail?.jobs?' ('+m.detail.jobs+' → '+m.detail.batches+' 批)':'')).join(' · ');
 }catch(error){result.error=error.message;$('elapsed').textContent='失败';$('status').textContent=error.message;}
 finally{records.push(result);if(records.length>40)records.shift();try{localStorage.setItem(key,JSON.stringify(records));}catch{}renderHistory();$('history').open=true;lock(false);}
}
// Sample the visible handoff in the test harness only, after startup timing ends.
function observeVehicleChanges(frame,result){
 const doc=frame.contentDocument,engine=doc.getElementById('engine');result.vehicleChanges=[];
 doc.addEventListener('click',event=>{
  const button=event.target.closest('#vehicle-strip [role=radio]');
  if(!button||button.disabled||button.getAttribute('aria-checked')==='true')return;
  const audit={requested:button.getAttribute('aria-label'),frames:0,uncoveredPendingFrames:0,start:performance.now()};
  result.vehicleChanges.push(audit);
  const sample=()=>{
   if(!frame.isConnected)return;
   const pending=doc.querySelector('#vehicle-strip button:disabled'),cover=doc.getElementById('frame-cover');
   audit.frames++;if(pending&&cover.hidden)audit.uncoveredPendingFrames++;
   if(pending){requestAnimationFrame(sample);return;}
   audit.ms=performance.now()-audit.start;audit.actual=engine.contentDocument.getElementById('preview').dataset.vehicleModel;
   audit.displayed=doc.getElementById('vehicle-name').textContent;audit.coverReleased=cover.hidden;
   document.body.dataset.vehicleChecks=JSON.stringify(result.vehicleChanges);
   try{localStorage.setItem(key,JSON.stringify(records));}catch{}
  };requestAnimationFrame(sample);
 },true);
}
$('cold').onclick=()=>run(true);$('warm').onclick=()=>run(false);
$('download').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({conditions:'Local server; cold uses unique resource URLs; GPU cache is not reset.',records},null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download='drivescene-startup-measurements.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
renderHistory();lock(true);
try{const response=await fetch('/config');const config=await response.json();if(!config.local)throw Error();enabled=true;$('environment').textContent=config.network;lock(false);}catch{$('environment').textContent='请通过本机测速服务打开';$('status').textContent='运行 python3 studio/ui-draft/startup-test/server.py 后，打开 http://127.0.0.1:18055/。';}
