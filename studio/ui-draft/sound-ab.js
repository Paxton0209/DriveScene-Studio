const frame=document.getElementById('preview'),status=document.getElementById('status');
let candidate='09',context,voice,request=0;
const buffers=new Map();
frame.src='./engine.html?scene=02&mode=light&lanes=6&view=low&model=model-3&buildings=1&trees=1&vehicle=1&path=0&review=ui-draft&quality=sr50&qa=ab&seed=110';
function renderSelection(){document.querySelectorAll('[data-candidate]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.candidate===candidate)))}
async function play(action){
 const revision=++request;context??=new AudioContext({latencyHint:'interactive'});await context.resume();
 const path=candidate==='09'&&action==='off'?'./sounds/09-first-note-off.wav':`./sounds/${candidate}-${action}.wav`;
 if(!buffers.has(path))buffers.set(path,fetch(path).then(response=>response.arrayBuffer()).then(bytes=>context.decodeAudioData(bytes)));
 const buffer=await buffers.get(path);if(revision!==request)return;voice?.stop();voice=context.createBufferSource();voice.buffer=buffer;const gain=context.createGain();gain.gain.value=.3;voice.connect(gain);gain.connect(context.destination);
 const api=frame.contentWindow.layoutEngine;if(action==='on')api.restoreFeatures({path:false});voice.start();api.draft.param('path',action==='on',{sound:true});status.textContent=`${candidate} · ${action==='on'?'开启':candidate==='09'?'首音节退出':'原版退出'} · ${Math.round(buffer.duration*1000)}ms`;
}
document.querySelectorAll('[data-candidate]').forEach(button=>button.addEventListener('click',()=>{candidate=button.dataset.candidate;renderSelection()}));
document.getElementById('on').onclick=()=>void play('on');document.getElementById('off').onclick=()=>void play('off');
renderSelection();const timer=setInterval(()=>{if(!frame.contentWindow.layoutEngine?.draft?.get().ready)return;clearInterval(timer);for(const id of ['on','off'])document.getElementById(id).disabled=false;status.textContent='09 已接入草稿，退出只播放开启的第一个音节'},100);
document.addEventListener('visibilitychange',()=>{if(document.hidden){request++;voice?.stop();voice=null;void context?.suspend()}});
