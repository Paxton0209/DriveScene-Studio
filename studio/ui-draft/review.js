const $=id=>document.getElementById(id),preview=$('preview'),report={subjective:'待用户验收',measurements:[],flows:[],motion:[],errors:[]};
const controller=()=>preview.contentWindow.draftController,bridge=()=>controller().bridge(),doc=()=>preview.contentDocument;
const delay=milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
function fit(){const width=Number($('width').value),scale=Math.min(1,($('viewport').clientWidth||innerWidth-16)/width,Math.max(200,innerHeight-104)/720);Object.assign(preview.style,{width:width+'px',height:'720px',transform:`scale(${scale})`});$('viewport').style.overflow='clip';$('viewport').style.height=Math.round(720*scale)+'px'}
function say(text){$('status').textContent=text}
function display(value){const pre=document.createElement('pre');pre.textContent=JSON.stringify(value,null,2);$('results').append(pre);document.body.dataset.report=JSON.stringify(report)}
function link(blob,name){const anchor=document.createElement('a');anchor.href=URL.createObjectURL(blob);anchor.download=name;anchor.textContent=name;$('results').append(anchor);return anchor}
function saveReport(){link(new Blob([JSON.stringify(report,null,2)],{type:'application/json'}),'ui-draft-measurements.json')}
function dimensions(){
 const entries=[['toolbar','.toolbar'],['sidebar','#scene-nav'],['nav row','.scene-row'],['nav title','.nav-title'],['inspector','#inspector'],['vehicle','#vehicle'],['vehicle image','#vehicle img'],['group heading','#scene-settings h2'],['property','.property'],['field label','.property-label'],['segment','.segment'],['selected segment','.segment-indicator'],['assist capsule','#assist'],['corner controls','#corner-controls'],['layer row','.layer-row'],['export','#export'],['format','#format'],['play','#play'],['artboard','#artboard']];
 const values=entries.map(([name,selector])=>{const element=doc().querySelector(selector),rect=element.getBoundingClientRect(),style=preview.contentWindow.getComputedStyle(element);return {name,selector,width:rect.width,height:rect.height,x:rect.x,y:rect.y,radius:style.borderRadius,fontSize:style.fontSize,fontWeight:style.fontWeight,fontFamily:style.fontFamily,cursor:style.cursor,background:style.backgroundColor,backgroundImage:style.backgroundImage,boxShadow:style.boxShadow}});
 const result={viewportWidth:preview.contentWindow.innerWidth,viewportHeight:preview.contentWindow.innerHeight,devicePixelRatio:preview.contentWindow.devicePixelRatio,runtime:bridge().get(),values,renderedFontVerification:'Computed system font stack measured; platform font name is not exposed by this WebKit DOM API.'};report.measurements.push(result);display(result);saveReport();return result;
}
async function record(name,run){
 const canvas=bridge().canvas,mime=['video/webm;codecs=vp9','video/webm','video/mp4'].find(type=>MediaRecorder.isTypeSupported(type));
 if(!canvas.captureStream||!mime)throw Error('Canvas recording unavailable');
 const stream=canvas.captureStream(60),recorder=new MediaRecorder(stream,{mimeType:mime}),chunks=[],samples=[];let captureFrame=0;
 recorder.ondataavailable=event=>{if(event.data.size)chunks.push(event.data)};
 const start=performance.now(),sample=now=>{const assist=doc().getElementById('assist'),style=preview.contentWindow.getComputedStyle(assist);samples.push({timestampMs:now-start,assist:{checked:assist.getAttribute('aria-checked'),background:style.backgroundColor,color:style.color},...bridge().get()});captureFrame=requestAnimationFrame(sample)};recorder.start();captureFrame=requestAnimationFrame(sample);
 try{await run()}finally{cancelAnimationFrame(captureFrame);await new Promise(resolve=>{recorder.onstop=resolve;recorder.stop()});stream.getTracks().forEach(track=>track.stop())}
 const blob=new Blob(chunks,{type:mime}),video=document.createElement('video');video.src=URL.createObjectURL(blob);video.controls=true;video.muted=true;video.setAttribute('aria-label',name);$('results').append(video);link(blob,name+(mime.includes('webm')?'.webm':'.mp4'));link(new Blob([JSON.stringify(samples,null,2)],{type:'application/json'}),name+'-timestamps.json');
 report.flows.push({name,mime,sampleCount:samples.length,first:samples[0],last:samples.at(-1),samples});display({name,mime,sampleCount:samples.length,first:samples[0],last:samples.at(-1)});
}
async function runFlows(){
 const assist=value=>{const button=doc().getElementById('assist');if(button.getAttribute('aria-checked')!==String(value))button.click()};
 await controller().selectScene('road');bridge().setPlaying(true);assist(false);await delay(250);
 await record('playing-assist-on-off',async()=>{assist(true);await delay(1100);assist(false);await delay(450)});
 bridge().setPlaying(false);
 await record('paused-assist-on-off',async()=>{assist(true);await delay(500);assist(false);await delay(500)});
 bridge().setPlaying(true);assist(true);await delay(1000);
 await record('assist-pause-resume',async()=>{bridge().setPlaying(false);await delay(700);bridge().setPlaying(true);await delay(700)});
 saveReport();say('三段录制结束；请下载视频与时间戳。主观效果待用户验收。');
}
async function freezeMotion(kind){
 bridge().setPlaying(false);const target=kind==='nav'?doc().querySelector('[data-scene=elevated]'):doc().querySelector('[data-param=lanes] [data-value="4"]');
 if(kind!=='nav'&&controller().project.active!=='road')await controller().selectScene('road');
 const button=kind==='nav'?doc().querySelector('[data-scene=elevated]'):doc().querySelector('[data-param=lanes] [data-value="4"]');button.click();await delay(24);
 const element=doc().querySelector(kind==='nav'?'.scene-indicator':'[data-param=lanes] .segment-indicator'),animation=element?.getAnimations().find(item=>item.effect.getKeyframes().some(frame=>'transform' in frame));if(!animation)throw Error('No selection morph found');animation.pause();animation.currentTime=animation.effect.getTiming().duration*.35;
 const value={kind,controlledIntermediateFrame:true,timeMs:animation.currentTime,durationMs:animation.effect.getTiming().duration,transform:preview.contentWindow.getComputedStyle(element).transform,rect:element.getBoundingClientRect().toJSON()};report.motion.push(value);display(value);say('已暂停在真实选中层动画35%位置，可截图。');
}
async function determinism(){
 await controller().selectScene('road');bridge().setPlaying(false);bridge().param('path',false);
 const runs=[];
 for(let run=0;run<2;run++){
  if(!bridge().restart())throw Error('Origin not ready');const frames=[];
  for(let group=0;group<3;group++){for(let frame=0;frame<25;frame++)bridge().advance(1/30);const blob=await bridge().snapshot(),digest=await crypto.subtle.digest('SHA-256',await blob.arrayBuffer()),hash=[...new Uint8Array(digest)].map(value=>value.toString(16).padStart(2,'0')).join('');frames.push({distance:bridge().get().distance,hash});link(blob,`repeat-${run+1}-${group+1}.png`)}runs.push(frames);
 }
 report.determinism={runs,equal:runs[0].every((frame,index)=>frame.hash===runs[1][index].hash)};display(report.determinism);saveReport();say(report.determinism.equal?'三组同距离PNG逐字节一致':'同距离重放未通过，报告保留实际差异');
}
async function exportVideo(){
 bridge().setPlaying(true);bridge().param('path',false);const before=bridge().get();say('正在离线渲染150帧…');
 const result=await bridge().export({format:'video',duration:5,onProgress:percent=>say(`离线导出 ${percent}%`)});link(result.blob,'offline-5s.'+result.extension);await delay(300);report.video={...result.audit,before,after:bridge().get()};display(report.video);saveReport();say('5秒视频导出结束。');
}
async function endurance(){
 await controller().selectScene('road');bridge().setPlaying(true);const started=performance.now(),samples=[];say('30分钟实时时钟运行中，请保持此页可见。');
 const timer=setInterval(()=>{bridge().input();const elapsedMs=performance.now()-started,entry={elapsedMs,heapBytes:preview.contentWindow.performance.memory?.usedJSHeapSize??null,...bridge().get()};samples.push(entry);say(`实际运行 ${Math.floor(elapsedMs/1000)}s · ${Math.round(entry.distance)}m`);report.endurance={requestedMs:1800000,samples,complete:elapsedMs>=1800000};document.body.dataset.report=JSON.stringify(report);if(elapsedMs>=1800000){clearInterval(timer);display(report.endurance);saveReport();say('30分钟实际计时完成；堆大小仅在浏览器提供时记录。')}},10000);
}
for(const [id,action]of [['measure',dimensions],['flows',runFlows],['nav-motion',()=>freezeMotion('nav')],['segment-motion',()=>freezeMotion('segment')],['determinism',determinism],['video',exportVideo],['endurance',endurance]])$(id).onclick=async()=>{try{await action()}catch(error){say(error.message);report.errors.push(error.stack);display({error:error.message})}};
$('width').onchange=fit;window.addEventListener('resize',fit);fit();
const startup=setInterval(()=>{if(!controller()?.status?.ready)return;clearInterval(startup);say('草稿已就绪，可逐项实测。')},100);
async function assistFrame(milliseconds){
 await controller().selectScene('road');bridge().setPlaying(false);
 const button=doc().getElementById('assist');
 if(button.getAttribute('aria-checked')==='true')button.click();
 await delay(250);
 bridge().setPlaying(true);button.click();bridge().setPlaying(false);
 bridge().advance(milliseconds/1000);
 for(const animation of button.getAnimations()){animation.pause();animation.currentTime=milliseconds}
 const result={controlledIntermediateFrame:true,nominalTimeMs:milliseconds,capturedAt:new Date().toISOString(),runtime:bridge().get(),background:preview.contentWindow.getComputedStyle(button).backgroundColor};
 report.motion.push(result);display(result);say(`Assist 受控中途帧 ${milliseconds}ms；与真实录制分开标注。`);
}
for(const milliseconds of [0,50,100,200]){
 const button=document.createElement('button');button.textContent=`Assist ${milliseconds}ms`;
 button.onclick=()=>assistFrame(milliseconds).catch(error=>say(error.message));
 document.querySelector('header').append(button);
}
