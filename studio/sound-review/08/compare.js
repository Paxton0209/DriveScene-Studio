const $=id=>document.getElementById(id),engine=$('engine'),options=$('options'),status=$('status'),current=$('current'),progress=$('progress'),volume=$('volume');
let theme='light';try{theme=localStorage.getItem('sr-theme')==='dark'?'dark':'light';}catch{}
document.documentElement.dataset.theme=theme;
engine.src='../../engine/?'+new URLSearchParams({scene:'02',mode:theme,lanes:'4',view:'low',model:'model-3',buildings:'1',trees:'1',waterfront:'0',roadworks:'0',vehicle:'1',weather:'default',path:'0',review:'sound-options'});
const events=[],buffers=new Map();let context,gain,source,ready=false,active=null,revision=0,frame=0;
function record(event,detail={}){events.push({event,time:performance.now(),...detail});document.body.dataset.audioEvents=JSON.stringify(events.slice(-60));}
function getAudio(){if(!context){context=new AudioContext({latencyHint:'interactive'});gain=context.createGain();gain.connect(context.destination);}gain.gain.value=Number(volume.value);return context;}
async function buffer(track){if(!buffers.has(track.id)){buffers.set(track.id,fetch(track.src).then(r=>{if(!r.ok)throw Error('音频加载失败');return r.arrayBuffer();}).then(bytes=>getAudio().decodeAudioData(bytes)).catch(e=>{buffers.delete(track.id);throw e;}));}return buffers.get(track.id);}
function reset(){++revision;cancelAnimationFrame(frame);frame=0;if(source){source.onended=null;try{source.stop();}catch{}source.disconnect();source=null;}active=null;document.querySelectorAll('button[data-track]').forEach(b=>b.setAttribute('aria-pressed','false'));progress.style.transform='scaleX(0)';if(ready)engine.contentWindow.layoutEngine.restoreFeatures({path:false});}
function outputTime(when){const stamp=context.getOutputTimestamp?.();return stamp?.contextTime>0&&stamp?.performanceTime>0?stamp.performanceTime+(when-stamp.contextTime)*1000:performance.now()+(when-context.currentTime+(context.outputLatency||context.baseLatency||0))*1000;}
async function play(track,button){
 if(active===track.id){reset();record('stopped',{id:track.id});return;}
 reset();const request=revision,animationMs=track.animationMs||400;active=track.id;button.setAttribute('aria-pressed','true');current.textContent=track.label+' · '+track.title;status.textContent=track.referenceOnly?'参考录音保留原始节奏，本次不驱动智驾线。':'';
 try{
  if(!track.referenceOnly){const engineMs=engine.contentWindow.layoutEngine.previewPathDuration(animationMs);if(engineMs!==animationMs)throw Error('动画时长未就绪');document.body.dataset.previewTiming=JSON.stringify({requestedMs:animationMs,engineMs});engine.title=animationMs+'ms智驾开启动画';$('timing-note').textContent=`本次智驾线展开 ${animationMs}ms，声音与动画同步起势。独立试听；工作台已应用08K 450ms。`;}
  const audio=getAudio();await audio.resume();const decoded=await buffer(track);if(request!==revision)return;
  const voice=audio.createBufferSource();voice.buffer=decoded;voice.connect(gain);source=voice;
  const when=audio.currentTime+.12;let target=outputTime(when),started=false;voice.start(when);
  record('scheduled',{id:track.id,durationMs:decoded.duration*1000,animationMs:track.referenceOnly?null:animationMs,audioTime:when});
  const tick=now=>{if(request!==revision)return;if(!started){target=outputTime(when);if(now>=target){started=true;if(!track.referenceOnly)engine.contentWindow.layoutEngine.param('path',true);record(track.referenceOnly?'reference-start':'animation-start',{id:track.id,outputSkewMs:now-target,engineCuePlays:engine.contentWindow.layoutEngine.get().sound.plays});}}
   progress.style.transform=`scaleX(${Math.max(0,Math.min(1,(now-target)/(track.referenceOnly?decoded.duration*1000:animationMs)))})`;if(!started||now-target<(track.referenceOnly?decoded.duration*1000:animationMs))frame=requestAnimationFrame(tick);
  };frame=requestAnimationFrame(tick);
  voice.onended=()=>{if(request!==revision)return;record('ended',{id:track.id,engineCuePlays:engine.contentWindow.layoutEngine.get().sound.plays});button.setAttribute('aria-pressed','false');active=null;source=null;voice.disconnect();};
 }catch(error){if(request!==revision)return;reset();status.textContent='播放未能开始，请再次点击。';record('error',{id:track.id,message:error.message});}
}
volume.addEventListener('input',()=>{if(gain)gain.gain.setTargetAtTime(Number(volume.value),context.currentTime,.01);});
document.addEventListener('visibilitychange',()=>{if(document.hidden)reset();});
const tracks=await fetch('./tracks.json').then(r=>r.json());
const isCurrent=track=>track.round===8||track.id==='08j-pure-touch'||track.kind==='original';
for(const track of [...tracks.filter(t=>t.round===8),...tracks.filter(t=>t.id==='08j-pure-touch'),...tracks.filter(t=>t.kind==='original'),...tracks.filter(t=>!isCurrent(t))]){const b=document.createElement('button');b.type='button';b.disabled=true;b.dataset.track=track.id;b.setAttribute('aria-pressed','false');b.setAttribute('aria-label','试听 '+track.label+' '+track.title);for(const [name,value]of [['number',track.label],['title',track.title],['duration',(track.durationMs/1000).toFixed(2)+'s'],['description',track.description]]){const span=document.createElement('span');span.className=name;span.textContent=value;b.append(span);}b.addEventListener('click',()=>play(track,b));(isCurrent(track)?options:$('previous-options')).append(b);}
const references=await fetch('./references.json').then(r=>r.json());
for(const ref of references){const card=document.createElement('article');card.className='reference';const heading=document.createElement('div');heading.className='reference-head';const name=document.createElement('span');name.textContent=ref.brand;const badge=document.createElement('span');badge.className='badge';badge.textContent=ref.status;heading.append(name,badge);const p=document.createElement('p');p.textContent=ref.description;const link=document.createElement('a');link.href=ref.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=ref.sourceLabel;card.append(heading,p,link);if(ref.src){const b=document.createElement('button');b.type='button';b.disabled=true;b.dataset.track=ref.id;b.setAttribute('aria-pressed','false');b.setAttribute('aria-label','试听 '+ref.brand+' 开启参考');b.textContent='试听原声 · '+(ref.durationMs/1000).toFixed(2)+'s';b.addEventListener('click',()=>play({...ref,label:ref.brand,title:ref.cueTitle||'开启参考'},b));card.append(b);}document.getElementById('references').append(card);}
const startup=setInterval(()=>{try{if(engine.contentWindow.layoutEngine?.get().ready){clearInterval(startup);ready=true;engine.contentWindow.layoutEngine.previewPathDuration(450);engine.contentWindow.layoutEngine.restoreFeatures({path:false});document.querySelectorAll('button[data-track]').forEach(b=>b.disabled=false);document.body.dataset.ready='true';status.textContent='';}}catch{}},100);
setTimeout(()=>{if(!ready)status.textContent='场景仍在准备，请稍后重试或刷新。';},15000);
