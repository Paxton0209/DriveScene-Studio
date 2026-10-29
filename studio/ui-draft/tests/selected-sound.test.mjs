import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';

function wav(buffer){const start=buffer.indexOf(Buffer.from('data')),bytes=buffer.readUInt32LE(start+4),samples=buffer.subarray(start+8,start+8+bytes);return {samples,rate:buffer.readUInt32LE(24),channels:buffer.readUInt16LE(22),bits:buffer.readUInt16LE(34)}}
test('Selected 09 keeps the exact chosen enable audio and only its forward first onset for exit',async()=>{
 const source=await readFile(new URL('../../sound-review/earshot/audio/09-on.wav',import.meta.url));
 const exit=await readFile(new URL('../sounds/09-first-note-off.wav',import.meta.url)),audit=JSON.parse(await readFile(new URL('../sounds/selected09.json',import.meta.url)));
 assert.equal(createHash('sha256').update(source).digest('hex'),audit.sourceSha256);
 assert.deepEqual(await readFile(new URL('../sounds/09-on.wav',import.meta.url)),source);
 const enterWav=wav(source),exitWav=wav(exit);assert.equal(exitWav.rate,48000);assert.equal(exitWav.bits,16);assert.equal(exitWav.channels,1);
 assert.equal(exitWav.samples.length/2/exitWav.rate,.230);
 const unchanged=Math.round(.212*exitWav.rate)*2;
 assert.deepEqual(exitWav.samples.subarray(0,unchanged),enterWav.samples.subarray(0,unchanged));
 assert.equal(exitWav.samples.readInt16LE(exitWav.samples.length-2),0);assert.equal(audit.reversed,false);
 assert.equal(createHash('sha256').update(exit).digest('hex'),audit.exitSha256);
});

test('Chosen sound runs only on explicit on/off intent and does not replace the original Earshot page',async()=>{
 const sound=await readFile(new URL('../assist-sound.js',import.meta.url),'utf8');
 assert.match(sound,/cue:'09',exitCue:'09-first-note-forward'/);
 assert.match(sound,/if\(request!==revision\|\|!buffers.has\(action\)\)return/);
 const {patchApp}=await import('../runtime-patches.mjs'),app=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
 assert.match(app,/if\(sound&&key==='path'/);
 assert.match(app,/if\(value\)playPathSound\(\);else playPathExitSound\(\)/);
 assert.match(app,/scene\(key\)\{stopPathSound\(\)/);
});

test('Delayed audio resume cannot replay a cue after a silent restoration cancels it',async()=>{
 const starts=[];
 class AudioContext {
  state='running';currentTime=0;sampleRate=48000;
  async resume(){}
  createBuffer(channels,length,rate){const data=Array.from({length:channels},()=>new Float32Array(length));return {duration:length/rate,numberOfChannels:channels,length,getChannelData:c=>data[c]}}
  async decodeAudioData(bytes){const audio=wav(Buffer.from(bytes));const buffer=this.createBuffer(1,audio.samples.length/2,audio.rate);for(let i=0;i<buffer.length;i++)buffer.getChannelData(0)[i]=audio.samples.readInt16LE(i*2)/32768;return buffer;}
  createBufferSource(){return {connect(){},disconnect(){},stop(){},start(){starts.push(this.buffer.duration)}}}
  createGain(){return {gain:{value:0,cancelScheduledValues(){},setTargetAtTime(){}},connect(){},disconnect(){}}}
 }
 const moduleUrl=new URL('../assist-sound.js',import.meta.url),source=(await readFile(moduleUrl,'utf8')).replaceAll('export ','').replaceAll('import.meta.url',JSON.stringify(moduleUrl.href));
 const sound=new Function('window','document','fetch',source+';return {preparePathSound,playPathSound,playPathExitSound,stopPathSound,pathSoundStatus};')({AudioContext},{documentElement:{dataset:{}}},async url=>({ok:true,arrayBuffer:async()=>{const bytes=await readFile(url);return bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength)}}));
 await sound.preparePathSound();sound.playPathSound();sound.stopPathSound();await new Promise(resolve=>setImmediate(resolve));assert.equal(starts.length,0);
 sound.playPathSound();await new Promise(resolve=>setImmediate(resolve));sound.playPathExitSound();await new Promise(resolve=>setImmediate(resolve));
 assert.deepEqual(starts,[.615,1.23]);assert.equal(sound.pathSoundStatus().plays,1);assert.equal(sound.pathSoundStatus().exitPlays,1);
});

test('Both runtime cues resolve inside the UI draft in normal and unique cold-start URL namespaces',async()=>{
 const moduleUrl=new URL('../assist-sound.js',import.meta.url),code=await readFile(moduleUrl,'utf8');
 const block=code.slice(code.indexOf('const sources='),code.indexOf('function audioContext'));
 for(const base of ['https://example.test/DriveScene-Studio/studio/ui-draft/runtime.bundle.js','http://127.0.0.1:18055/runs/cold/studio/ui-draft/runtime.bundle.js']){
  const sources=new Function(block.replaceAll('import.meta.url',JSON.stringify(base))+'return sources')();
  for(const url of Object.values(sources)){
   assert.equal(url.origin,new URL(base).origin);
   assert.ok(url.pathname.startsWith(new URL('./sounds/',base).pathname));
   assert.doesNotMatch(url.pathname,/sound-review/);
   const local=new URL('../sounds/'+url.pathname.split('/').at(-1),import.meta.url);
   assert.ok((await readFile(local)).length>1000);
  }
 }
});
