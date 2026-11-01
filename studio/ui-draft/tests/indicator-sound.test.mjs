import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
async function fixture(){
 const starts=[],stops=[],gains=[];
 class AudioContext {
  state='running';currentTime=0;sampleRate=48000;destination={};
  async resume(){this.state='running'}
  createBuffer(channels,length,rate){const data=new Float32Array(length);return {duration:length/rate,getChannelData:()=>data}}
  createBufferSource(){return {connect(){},disconnect(){},stop(){stops.push(this)},start(){starts.push(this.buffer)}}}
  createGain(){const gain={gain:{value:0},connect(){},disconnect(){}};gains.push(gain);return gain}
 }
 const url=new URL('../assist-sound.js',import.meta.url),source=(await readFile(url,'utf8')).replaceAll('export ','').replaceAll('import.meta.url',JSON.stringify(url.href));
 const api=new Function('window',source+';return {updateIndicatorSound,stopIndicatorSound,resetIndicatorSound,pathSoundStatus};')({AudioContext});
 return {api,starts,stops,gains};
}
test('Indicator follows lamp edges exactly once, ignores initial off and suppresses export frames',async()=>{
 const {api,starts,stops}=await fixture(),update=api.updateIndicatorSound;
 update(true,false);assert.equal(starts.length,0);
 update(true,true);update(true,true);assert.equal(starts.length,1);
 update(true,false,{silent:true});assert.equal(starts.length,1);
 update(true,true);assert.equal(starts.length,1);
 update(true,false);update(true,false);assert.equal(starts.length,2);
 assert.deepEqual(api.pathSoundStatus().indicatorHistory.map(x=>x.on),[true,false]);
 update(false,false);assert.equal(stops.length,2);
 update(true,true);assert.equal(starts.length,3);
 api.stopIndicatorSound();update(true,false);assert.equal(starts.length,3);
});
test('Both relay impulses are finite, brief, distinct and quiet with no repeating timer',async()=>{
 const {api,starts,gains}=await fixture();api.updateIndicatorSound(true,true);api.updateIndicatorSound(true,false);
 for(const buffer of starts){const data=buffer.getChannelData(0);assert.equal(buffer.duration,.045);assert.ok(data.every(Number.isFinite));assert.equal(data[0],0);assert.ok(Math.abs(data.at(-1))<.02);assert.ok(Math.max(...data.map(Math.abs))<1)}
 assert.notDeepEqual(starts[0].getChannelData(0),starts[1].getChannelData(0));assert.deepEqual(gains.map(g=>g.gain.value),[.12,.12]);
 const source=await readFile(new URL('../assist-sound.js',import.meta.url),'utf8');assert.doesNotMatch(source,/setInterval|setTimeout/);
});

test('An activation sounds four individual ticks then remains silent through pause and focus loss',async()=>{
 const {api,starts}=await fixture();
 for(let i=0;i<20;i++)api.updateIndicatorSound(true,i%2===0);
 assert.equal(starts.length,4);assert.equal(api.pathSoundStatus().indicatorBurstEdges,4);
 api.stopIndicatorSound();
 for(let i=0;i<20;i++)api.updateIndicatorSound(true,i%2===0,{silent:i<4});
 assert.equal(starts.length,4,'focus and pause cannot replenish the burst');
 api.updateIndicatorSound(false,false);api.updateIndicatorSound(true,true);
 assert.equal(starts.length,5,'a new activation can sound again');
 api.resetIndicatorSound();api.updateIndicatorSound(true,true);
 assert.equal(starts.length,6,'explicit replay can start a new activation');
});

test('Interrupting a partial burst preserves its remaining quota',async()=>{
 const {api,starts}=await fixture();api.updateIndicatorSound(true,true);api.updateIndicatorSound(true,false);
 api.stopIndicatorSound();
 for(let i=0;i<20;i++)api.updateIndicatorSound(true,i%2===0);
 assert.equal(starts.length,4);
});
