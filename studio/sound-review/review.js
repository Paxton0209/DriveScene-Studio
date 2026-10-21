const engine=document.querySelector('#engine'),audio=document.querySelector('#audio'),options=document.querySelector('#options'),status=document.querySelector('#status'),current=document.querySelector('#current'),progress=document.querySelector('#progress'),volume=document.querySelector('#volume');
let theme='light';try{theme=localStorage.getItem('sr-theme')==='dark'?'dark':'light';}catch{}
document.documentElement.dataset.theme=theme;
engine.src='../engine/?'+new URLSearchParams({scene:'02',mode:theme,lanes:'4',view:'low',model:'model-3',buildings:'1',trees:'1',waterfront:'0',roadworks:'0',vehicle:'1',weather:'default',path:'0',review:'sound-options'});
let ready=false,active=null,revision=0,progressFrame=0;
const events=[];
function record(event,detail={}){events.push({event,time:Math.round(performance.now()),...detail});document.body.dataset.audioEvents=JSON.stringify(events.slice(-80));}
function stop(){++revision;cancelAnimationFrame(progressFrame);progressFrame=0;audio.pause();audio.currentTime=0;for(const button of options.querySelectorAll('button'))button.setAttribute('aria-pressed','false');active=null;progress.style.transform='scaleX(0)';if(ready)engine.contentWindow.layoutEngine.restoreFeatures({path:false});}
function paintProgress(){if(!active||audio.paused)return;progress.style.transform=`scaleX(${Math.min(1,audio.currentTime/(audio.duration||1))})`;progressFrame=requestAnimationFrame(paintProgress);}
async function play(track,button){
 if(active===track.id){stop();record('stopped',{id:track.id});return;}
 stop();const request=revision;active=track.id;button.setAttribute('aria-pressed','true');current.textContent=String(track.number).padStart(2,'0')+' · '+track.title;status.textContent='';audio.src=track.src;audio.volume=Number(volume.value);
 try{await audio.play();if(request!==revision)return;record('playing',{id:track.id,duration:audio.duration});if(ready)engine.contentWindow.layoutEngine.param('path',true);paintProgress();}
 catch(error){if(request!==revision)return;record('error',{id:track.id,message:error.message});stop();status.textContent='播放未能开始，请再点击一次。';}
}
audio.addEventListener('ended',()=>{record('ended',{id:active,duration:audio.duration,engineCuePlays:engine.contentWindow.layoutEngine?.get().sound?.plays??null});cancelAnimationFrame(progressFrame);progressFrame=0;progress.style.transform='scaleX(1)';for(const button of options.querySelectorAll('button'))button.setAttribute('aria-pressed','false');active=null;});
audio.addEventListener('error',()=>{if(active){record('error',{id:active,message:audio.error?.message||'audio load failed'});status.textContent='音频加载失败，请刷新后重试。';}});
volume.addEventListener('input',()=>audio.volume=Number(volume.value));
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();record('hidden-stop');}});
const tracks=await fetch('./tracks.json').then(response=>{if(!response.ok)throw Error('声音清单加载失败');return response.json();});
for(const track of tracks){const button=document.createElement('button');button.type='button';button.disabled=true;button.dataset.track=track.id;button.setAttribute('aria-pressed','false');button.setAttribute('aria-label','试听 '+String(track.number).padStart(2,'0')+' '+track.title);button.innerHTML=`<span class="number">${String(track.number).padStart(2,'0')}</span><span class="title">${track.title}</span><span class="duration">${(track.durationMs/1000).toFixed(2)}s</span><span class="description">${track.description}</span>`;button.addEventListener('click',()=>play(track,button));options.append(button);}
const startup=setInterval(()=>{try{if(engine.contentWindow.layoutEngine?.get().ready){clearInterval(startup);ready=true;engine.contentWindow.layoutEngine.restoreFeatures({path:false});for(const button of options.querySelectorAll('button'))button.disabled=false;document.body.dataset.ready='true';}}catch{}},100);
setTimeout(()=>{if(!ready)status.textContent='预览仍在准备，可以刷新重试。';},15000);
