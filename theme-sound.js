// Original single-syllable cue: rounded harmonics and a short directional bend.
// One onset per action; dark settles downward, light opens upward.
let context,voice;
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
