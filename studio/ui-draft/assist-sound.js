let context,loading,voice,revision=0,plays=0,exitPlays=0,failures=0;
let indicatorPhase=null,indicatorEdges=0,indicatorMuted=false;const indicatorVoices=new Set(),indicatorHistory=[];
const buffers=new Map();
const sources={on:new URL('./sounds/09-on.wav',import.meta.url),off:new URL('./sounds/09-first-note-off.wav',import.meta.url)};
function audioContext(){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return null;return context??=new Audio({latencyHint:'interactive'})}
export function pathSoundStatus(){return {ready:buffers.size===2,plays,exitPlays,failures,state:context?.state||'unavailable',durationMs:buffers.has('on')?Math.round(buffers.get('on').duration*1000):null,exitDurationMs:buffers.has('off')?Math.round(buffers.get('off').duration*1000):null,cue:'09',exitCue:'09-first-note-forward',indicatorMuted,indicatorVoices:indicatorVoices.size,indicatorEdges,indicatorHistory:[...indicatorHistory]}}
export function preparePathSound(){
 if(loading)return loading;
 const audio=audioContext();if(!audio)return Promise.resolve();
 loading=Promise.all(Object.entries(sources).map(async([action,url])=>{const response=await fetch(url);if(!response.ok)throw Error('Assist audio unavailable');let decoded=await audio.decodeAudioData(await response.arrayBuffer());if(action==='off'){const extra=audio.sampleRate,extended=audio.createBuffer(decoded.numberOfChannels,decoded.length+extra,audio.sampleRate);for(let c=0;c<decoded.numberOfChannels;c++){const from=decoded.getChannelData(c),to=extended.getChannelData(c);to.set(from);const tail=Math.min(Math.round(audio.sampleRate*.18),decoded.length);for(let i=0;i<extra;i++){const phase=i%tail;to[decoded.length+i]=from[decoded.length-tail+phase]*Math.exp(-i/(extra*.18))*.22*Math.sin(Math.PI*phase/tail);}}decoded=extended;}buffers.set(action,decoded)})).catch(()=>{failures++;loading=null});
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

// Lamp edges own this cue; no second clock or interval can drift out of sync.
export function unlockIndicatorSound(){
 const audio=audioContext();if(audio?.state==='suspended')void audio.resume().catch(()=>{});
}
export function stopIndicatorSound(){
 indicatorPhase=null;
 for(const source of indicatorVoices){try{source.stop()}catch{}}
 indicatorVoices.clear();
}
export function setIndicatorMuted(value){indicatorMuted=!!value;if(indicatorMuted)stopIndicatorSound();}
export function updateIndicatorSound(active,on,{silent=false}={}){
 if(!active||indicatorMuted){if(indicatorPhase!==null||indicatorVoices.size)stopIndicatorSound();return;}
 if(silent){for(const source of indicatorVoices){try{source.stop()}catch{}}indicatorVoices.clear();return;}
 if(indicatorPhase===on)return;
 const initial=indicatorPhase===null;indicatorPhase=on;
 if(initial&&!on)return;
 const audio=audioContext();if(!audio||audio.state!=='running')return;
 const duration=.045,buffer=audio.createBuffer(1,Math.ceil(audio.sampleRate*duration),audio.sampleRate),data=buffer.getChannelData(0);
 for(let i=0;i<data.length;i++){
  const t=i/audio.sampleRate,attack=Math.min(1,t/.0015),decay=Math.exp(-t/(on?.008:.011));
  // A brief damped relay impulse, with separate closing/opening resonances.
  data[i]=attack*decay*(Math.sin(2*Math.PI*(on?960:720)*t)*.65+Math.sin(2*Math.PI*(on?1920:1560)*t)*.23);
 }
 const source=audio.createBufferSource(),gain=audio.createGain();source.buffer=buffer;gain.gain.value=.12;
 source.connect(gain);gain.connect(audio.destination);indicatorVoices.add(source);
 source.onended=()=>{source.disconnect();gain.disconnect();indicatorVoices.delete(source)};source.start();
 indicatorEdges++;indicatorHistory.push({on,time:audio.currentTime});if(indicatorHistory.length>16)indicatorHistory.shift();
}
