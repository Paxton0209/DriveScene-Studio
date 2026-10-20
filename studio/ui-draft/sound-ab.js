const frame=document.getElementById('preview'),status=document.getElementById('status'),key='drivescene-ui-draft-sound-ab-v1';
let candidate='08',context,voice,request=0;
try{candidate=['08','09'].includes(localStorage.getItem(key))?localStorage.getItem(key):'08'}catch{}
const buffers=new Map();
frame.src='./engine.html?scene=02&mode=light&lanes=6&view=low&model=model-3&buildings=1&trees=1&vehicle=1&path=0&review=ui-draft&quality=sr50&qa=ab&seed=110';
function renderSelection(){document.querySelectorAll('[data-candidate]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.candidate===candidate)))}
async function play(action){
 const revision=++request;context??=new AudioContext({latencyHint:'interactive'});await context.resume();
 const path=`./sounds/${candidate}-${action}.wav`;
 if(!buffers.has(path))buffers.set(path,fetch(path).then(response=>response.arrayBuffer()).then(bytes=>context.decodeAudioData(bytes)));
 const buffer=await buffers.get(path);if(revision!==request)return;voice?.stop();voice=context.createBufferSource();voice.buffer=buffer;const gain=context.createGain();gain.gain.value=.3;voice.connect(gain);gain.connect(context.destination);
 const api=frame.contentWindow.layoutEngine;if(action==='on')api.restoreFeatures({path:false});voice.start();api.draft.param('path',action==='on');status.textContent=`${candidate} · ${action==='on'?'开启':'倒放退出'} · ${Math.round(buffer.duration*1000)}ms`;
}
document.querySelectorAll('[data-candidate]').forEach(button=>button.addEventListener('click',()=>{candidate=button.dataset.candidate;renderSelection()}));
document.getElementById('on').onclick=()=>void play('on');document.getElementById('off').onclick=()=>void play('off');document.getElementById('save').onclick=()=>{try{localStorage.setItem(key,candidate);status.textContent=`已保存草稿候选${candidate}，工作台仍为08K`}catch{status.textContent='保存失败，请记下候选编号'}};
renderSelection();const timer=setInterval(()=>{if(!frame.contentWindow.layoutEngine?.draft?.get().ready)return;clearInterval(timer);for(const id of ['on','off','save'])document.getElementById(id).disabled=false;status.textContent='选择08或09，配合画面试听'},100);
document.addEventListener('visibilitychange',()=>{if(document.hidden){request++;voice?.stop();voice=null;void context?.suspend()}});
