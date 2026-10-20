import {prepareAuditionPath} from './audition-path.js';

const $=id=>document.getElementById(id),engine=$('engine'),stateKey='drivescene-earshot-review-v1';
const presets=await fetch('./presets.json',{cache:'no-store'}).then(response=>{if(!response.ok)throw Error('候选清单加载失败');return response.json()});
let saved={};try{saved=JSON.parse(localStorage.getItem(stateKey)||'{}')||{}}catch{}
let selected=presets.find(preset=>preset.id===saved.selected)||presets[0],rejected=new Set((saved.rejected||[]).filter(id=>presets.some(preset=>preset.id===id)));
let context,gain,ready=false,revision=0,animationFrame=0,voices=[],dark=false;
const buffers=new Map();
engine.src='../../engine/?'+new URLSearchParams({scene:'02',mode:'light',lanes:'6',view:'low',model:'model-3',buildings:'1',trees:'1',waterfront:'0',roadworks:'0',vehicle:'1',weather:'default',path:'0',review:'material-draft',quality:'sr50',v:'finish-110',qa:'earshot-audition'});
const api=()=>engine.contentWindow.layoutEngine;
function persist(){try{localStorage.setItem(stateKey,JSON.stringify({selected:selected.id,rejected:[...rejected],confirmed:saved.confirmed||null}))}catch{$('saved').textContent='浏览器无法保存。请记下候选编号。'}}
function audioContext(){if(!context){context=new AudioContext({latencyHint:'interactive'});gain=context.createGain();gain.connect(context.destination)}gain.gain.value=Number($('volume').value);return context}
function loadAudio(path){if(!buffers.has(path))buffers.set(path,fetch(path,{cache:'no-store'}).then(response=>{if(!response.ok)throw Error('音效加载失败');return response.arrayBuffer()}).then(bytes=>audioContext().decodeAudioData(bytes)).catch(error=>{buffers.delete(path);throw error}));return buffers.get(path)}
function scopedPresets(){return presets.filter(preset=>$('scope').value==='all'||($('scope').value==='new'?preset.round===2:preset.round!==2))}
function render(){
 const scoped=scopedPresets();
 $('options').innerHTML=scoped.map(preset=>`<article data-id="${preset.id}" data-selected="${preset.id===selected.id}" data-rejected="${rejected.has(preset.id)}" ${rejected.has(preset.id)&&!$('show-rejected').checked?'hidden':''}><div class="row"><span class="number">${preset.id}</span><h3>${preset.name}</h3><span class="beats">${preset.group||'上轮候选'} · ${(preset.enterAudit.durationMs/1000).toFixed(2)}s</span></div><p>${preset.description}</p><div class="buttons"><button data-action="cycle" ${ready?'':'disabled'} aria-label="完整试听 ${preset.id} ${preset.name}">完整试听</button><button data-action="on" ${ready?'':'disabled'} aria-label="试听开启 ${preset.id} ${preset.name}">开启</button><button data-action="off" ${ready?'':'disabled'} aria-label="试听退出 ${preset.id} ${preset.name}">退出</button><button data-action="reject" aria-pressed="${rejected.has(preset.id)}" aria-label="${rejected.has(preset.id)?'恢复':'排除'} ${preset.id} ${preset.name}">${rejected.has(preset.id)?'恢复':'排除'}</button></div></article>`).join('');
 $('count').textContent=`${scoped.filter(preset=>!rejected.has(preset.id)).length} / ${scoped.length} 保留`;$('restore').hidden=!scoped.some(preset=>rejected.has(preset.id));$('current').textContent=selected.id+' · '+selected.name;
}
function stop(reset=true){revision++;cancelAnimationFrame(animationFrame);animationFrame=0;for(const voice of voices){try{voice.stop()}catch{}}voices=[];if(reset&&ready)api().restoreFeatures({path:false});document.body.dataset.playing='false'}
function outputTime(when){const stamp=context.getOutputTimestamp?.();return stamp?.contextTime>0&&stamp?.performanceTime>0?stamp.performanceTime+(when-stamp.contextTime)*1000:performance.now()+(when-context.currentTime+(context.outputLatency||context.baseLatency||0))*1000}
function schedule(buffer,when){const voice=context.createBufferSource();voice.buffer=buffer;voice.connect(gain);voices.push(voice);voice.onended=()=>{voice.disconnect();voices=voices.filter(active=>active!==voice)};voice.start(when)}
async function play(preset,mode){
 if(!ready)return;stop(false);const request=revision;selected=preset;persist();render();$('phase').textContent='准备试听…';
 try{
  const audio=audioContext();await audio.resume();const on=mode==='off'?null:await loadAudio(preset.enter),off=mode==='on'?null:await loadAudio(preset.exit);if(request!==revision)return;
  prepareAuditionPath(api(),mode);
  const when=audio.currentTime+.08,exitAt=Math.max(1.15,(on?.duration||0)+.18);
  if(on)schedule(on,when);if(off)schedule(off,when+(mode==='cycle'?exitAt:0));
  let entered=false,exited=false;const duration=mode==='cycle'?exitAt+off.duration:mode==='on'?Math.max(.85,on.duration):Math.max(.2,off.duration);
  document.body.dataset.playing='true';document.body.dataset.audition=JSON.stringify({id:preset.id,mode,cues:preset.cues.map(cue=>Math.round(cue.at*1000)),exitAtMs:mode==='cycle'?Math.round(exitAt*1000):0,exitMethod:preset.exitAudit.method,exitDurationMs:off?Math.round(off.duration*1000):null,productionSoundUnchanged:true});
  const tick=now=>{
   if(request!==revision)return;const target=outputTime(when),elapsed=(now-target)/1000;
   if(!entered&&elapsed>=0){entered=true;api().param('path',mode!=='off');$('phase').textContent=mode==='off'?'退出 · 开启声倒放':'开启 · 扫入与智驾线连续展开';document.body.dataset.syncSkewMs=String(Math.round(elapsed*1000))}
   if(mode==='cycle'&&!exited&&elapsed>=exitAt){exited=true;api().param('path',false);$('phase').textContent='退出 · 开启声倒放'}
   if(elapsed<duration)animationFrame=requestAnimationFrame(tick);else{animationFrame=0;document.body.dataset.playing='false';$('phase').textContent='试听结束，可重播或排除'}
  };animationFrame=requestAnimationFrame(tick);
 }catch(error){if(request===revision){stop();$('phase').textContent=error.message||'试听失败，请重试'}}
}
$('options').addEventListener('click',event=>{const button=event.target.closest('[data-action]');if(!button)return;const preset=presets.find(preset=>preset.id===button.closest('article').dataset.id),action=button.dataset.action;if(action==='reject'){if(rejected.has(preset.id))rejected.delete(preset.id);else rejected.add(preset.id);if(selected.id===preset.id)stop();persist();render();return}void play(preset,action)});
document.querySelectorAll('[data-preview]').forEach(button=>button.addEventListener('click',()=>void play(selected,button.dataset.preview)));
$('stop').addEventListener('click',()=>{stop();$('phase').textContent='已停止'});
$('volume').addEventListener('input',()=>{if(gain)gain.gain.setTargetAtTime(Number($('volume').value),context.currentTime,.015)});
$('show-rejected').addEventListener('change',render);
$('scope').addEventListener('change',render);
$('restore').addEventListener('click',()=>{for(const preset of scopedPresets())rejected.delete(preset.id);persist();render()});
$('save').addEventListener('click',()=>{saved.confirmed=selected.id;persist();$('saved').textContent=`已保存 ${selected.id} · ${selected.name}，尚未替换工作台声音。`});
$('theme').addEventListener('click',()=>{if(!ready)return;stop();dark=!dark;document.body.dataset.theme=dark?'dark':'light';$('theme').setAttribute('aria-pressed',String(dark));$('theme').textContent=dark?'浅色画面':'深色画面';api().theme(dark?'dark':'light')});
engine.addEventListener('load',()=>{
 const sheet=engine.contentDocument.createElement('style');sheet.textContent='html,body{margin:0!important;padding:0!important;overflow:hidden!important}body>header,body>footer,aside,.preview-settings,#status,#download,#dimensions,.preview-feedback,#header-sentinel{display:none!important}main,.workspace,.preview-shell{display:block!important;margin:0!important;padding:0!important;width:100%!important;max-width:none!important;min-height:0!important;height:100vh!important}#preview{width:100%!important;height:100vh!important;max-width:none!important;aspect-ratio:16/9!important;border-radius:0!important}#scene-canvas{width:100%!important;height:100%!important}';engine.contentDocument.head.append(sheet);
});
render();if(saved.confirmed){const confirmed=presets.find(preset=>preset.id===saved.confirmed);if(confirmed)$('saved').textContent=`上次保存：${confirmed.id} · ${confirmed.name}，尚未替换工作台声音。`}
const startup=setInterval(()=>{try{if(!api()?.get().ready)return;clearInterval(startup);ready=true;api().restoreFeatures({path:false});api().param('traffic',true);api().param('autoplay',1);document.body.dataset.ready='true';document.querySelectorAll('[data-preview],#save,#stop').forEach(button=>button.disabled=false);$('phase').textContent='选择候选，配合画面完整试听';render()}catch{}},120);
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();if(context?.state==='running')void context.suspend()}});
window.addEventListener('pagehide',()=>{stop(false);if(context)void context.close()});
