// Original single-syllable cue: rounded harmonics and a short directional bend.
// One onset per action; dark settles downward, light opens upward.
let context,voice;
let pathBuffer=null,pathLoading=null,pathVoice=null,pathPlays=0,pathFailures=0,pathCue='08K',pathRequest=0;
const soundChoices={'piano-3':'../sound-review/final/audio/piano-3.wav','piano-4':'../sound-review/final/audio/piano-4.wav','assist-a':'../sound-review/final/audio/assist-a.wav','assist-b':'../sound-review/final/audio/assist-b.wav',tesla:'../sound-review/final/audio/tesla-engage.wav','apple-soft':'../sound-review/final/audio/apple-soft.wav','apple-clear':'../sound-review/final/audio/apple-clear.wav'};
function chosenSound(){try{return localStorage.getItem('drivescene-assist-sound');}catch{return null;}}
window.addEventListener('storage',event=>{if(event.key==='drivescene-assist-sound'){pathRequest++;pathLoading=null;pathBuffer=null;preparePathSound();}});
function audioContext(){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return null;context??=new Audio();return context;}
export function pathSoundStatus(){return {ready:!!pathBuffer,plays:pathPlays,failures:pathFailures,state:context?.state||'unavailable',durationMs:pathBuffer?Math.round(pathBuffer.duration*1000):null,cue:pathCue};}
export function preparePathSound(){
 try{
 if(pathLoading)return pathLoading;
 const audio=audioContext();if(!audio)return Promise.resolve();
 const request=++pathRequest,choice=chosenSound();pathCue=soundChoices[choice]?choice:'08K';
 pathLoading=fetch(new URL(soundChoices[choice]||'./assets/sounds/path-enable.wav?v=08k-400',import.meta.url)).then(response=>{if(!response.ok)throw Error('sound unavailable');return response.arrayBuffer();}).then(data=>audio.decodeAudioData(data)).then(buffer=>{if(request===pathRequest)pathBuffer=buffer;}).catch(()=>{if(request===pathRequest){pathFailures++;pathLoading=null;}});
 return pathLoading;
 }catch{pathFailures++;return Promise.resolve();}
}
export function stopPathSound(){if(!context||!pathVoice)return;const now=context.currentTime;pathVoice.gain.gain.cancelScheduledValues(now);pathVoice.gain.gain.setTargetAtTime(.0001,now,.008);try{pathVoice.source.stop(now+.04);}catch{}pathVoice=null;}
export function playPathSound(){
 try{
  const audio=audioContext();if(!audio)return;audio.resume().then(()=>{document.documentElement.dataset.pathSound=JSON.stringify(pathSoundStatus());}).catch(()=>{});stopPathSound();
  const now=audio.currentTime,gain=audio.createGain();gain.connect(audio.destination);gain.gain.setValueAtTime(.40,now);
  let source;
  if(pathBuffer){source=audio.createBufferSource();source.buffer=pathBuffer;}
  else{preparePathSound();return;}
  source.connect(gain);source.start(now);pathPlays++;document.documentElement.dataset.pathSound=JSON.stringify(pathSoundStatus());const active=pathVoice={source,gain};
  source.onended=()=>{source.disconnect();gain.disconnect();if(pathVoice===active)pathVoice=null;};
 }catch{pathFailures++;}
}
export function playThemeSound(dark){
 try{
  const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;
  context??=new Audio();if(context.state!=='running')context.resume();
  const now=context.currentTime;
  if(voice){voice.gain.gain.cancelScheduledValues(now);voice.gain.gain.setTargetAtTime(.0001,now,.008);try{voice.osc.stop(now+.04);}catch{}}
  const osc=context.createOscillator(),gain=context.createGain(),filter=context.createBiquadFilter();
  const partials=new Float32Array([0,1,dark?.14:.24,.045]);
  osc.setPeriodicWave(context.createPeriodicWave(new Float32Array(4),partials));
  osc.frequency.setValueAtTime(dark?620:280,now);
  osc.frequency.exponentialRampToValueAtTime(dark?300:690,now+.17);
  osc.frequency.exponentialRampToValueAtTime(dark?260:640,now+.25);
  filter.type='lowpass';filter.Q.value=.65;
  filter.frequency.setValueAtTime(dark?1850:1000,now);filter.frequency.exponentialRampToValueAtTime(dark?900:2400,now+.21);
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.075,now+.018);
  gain.gain.exponentialRampToValueAtTime(.038,now+.095);gain.gain.exponentialRampToValueAtTime(.0001,now+.27);
  osc.connect(filter);filter.connect(gain);gain.connect(context.destination);osc.start(now);osc.stop(now+.29);
  const active=voice={osc,gain};osc.onended=()=>{osc.disconnect();filter.disconnect();gain.disconnect();if(voice===active)voice=null;};
 }catch{/* Audio availability must never block a theme change. */}
}
