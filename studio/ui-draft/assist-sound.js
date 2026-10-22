let context,loading,voice,revision=0,plays=0,exitPlays=0,failures=0;
const buffers=new Map();
const sources={on:new URL('../sound-review/earshot/audio/09-on.wav',import.meta.url),off:new URL('./sounds/09-first-note-off.wav',import.meta.url)};
function audioContext(){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return null;return context??=new Audio({latencyHint:'interactive'})}
export function pathSoundStatus(){return {ready:buffers.size===2,plays,exitPlays,failures,state:context?.state||'unavailable',durationMs:buffers.has('on')?Math.round(buffers.get('on').duration*1000):null,exitDurationMs:buffers.has('off')?Math.round(buffers.get('off').duration*1000):null,cue:'09',exitCue:'09-first-note-forward'}}
export function preparePathSound(){
 if(loading)return loading;
 const audio=audioContext();if(!audio)return Promise.resolve();
 loading=Promise.all(Object.entries(sources).map(async([action,url])=>{const response=await fetch(url);if(!response.ok)throw Error('Assist audio unavailable');buffers.set(action,await audio.decodeAudioData(await response.arrayBuffer()))})).catch(()=>{failures++;loading=null});
 return loading;
}
export function stopPathSound(){
 revision++;
 if(!voice||!context)return;
 const prior=voice;voice=null;const now=context.currentTime;
 prior.gain.gain.cancelScheduledValues(now);prior.gain.gain.setTargetAtTime(.0001,now,.008);
 try{prior.source.stop(now+.04)}catch{}
}
async function play(action){
 stopPathSound();const request=revision;
 try{
  const audio=audioContext();if(!audio)return;await audio.resume();await preparePathSound();
  if(request!==revision||!buffers.has(action))return;
  const source=audio.createBufferSource(),gain=audio.createGain();source.buffer=buffers.get(action);gain.gain.value=.3;source.connect(gain);gain.connect(audio.destination);
  const active=voice={source,gain};source.onended=()=>{source.disconnect();gain.disconnect();if(voice===active)voice=null};source.start();
  if(action==='on')plays++;else exitPlays++;
  document.documentElement.dataset.pathSound=JSON.stringify(pathSoundStatus());
 }catch{failures++}
}
export function playPathSound(){void play('on')}
export function playPathExitSound(){void play('off')}
export function playThemeSound(){}
