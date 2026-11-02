import test from 'node:test';import assert from 'node:assert/strict';import {setAssistDemo} from '../assist-demo.js';
function fixture(scene='road'){
 const events=[],status={scene,playing:false,features:{path:false}},bridge={get:()=>status,setPlaying(value){events.push(['playing',value]);status.playing=value},async param(key,value){events.push([key,value]);status.features[key]=value},replay(){events.push(['replay']);status.junction.complete=false},async parkingPlay(){events.push(['parking']);await this.param('path',true);this.setPlaying(true)}};
 return {bridge,status,events};
}
for(const scene of ['road','elevated','ramp','junction','parking','outdoor'])test(`Demo intent owns both path and playback for ${scene}`,async()=>{
 const {bridge,status,events}=fixture(scene);assert.equal(await setAssistDemo(bridge,true),true);assert.equal(status.playing,true);assert.equal(status.features.path,true);events.length=0;
 assert.equal(await setAssistDemo(bridge,true),true);assert.deepEqual(events,[],'repeating an on intent never pauses the demo');
 assert.equal(await setAssistDemo(bridge,false),false);assert.equal(status.playing,false);assert.equal(status.features.path,false);assert.deepEqual(events,[['playing',false],['path',false]]);
});
test('A completed junction restarts before enabling its route and playback',async()=>{const f=fixture('junction');f.status.junction={complete:true};await setAssistDemo(f.bridge,true);assert.deepEqual(f.events,[['replay'],['path',true],['playing',true]])});
test('Failed parking preparation rolls back both motion and guidance',async()=>{const f=fixture('parking');f.bridge.parkingPlay=async()=>{f.status.features.path=true;throw Error('No empty bay')};await assert.rejects(setAssistDemo(f.bridge,true),/No empty bay/);assert.equal(f.status.playing,false);assert.equal(f.status.features.path,false)});
test('A pending path request cannot start playback after a scene change',async()=>{const f=fixture();f.bridge.param=async()=>{f.status.scene='parking'};assert.equal(await setAssistDemo(f.bridge,true),false);assert.equal(f.status.playing,false)});

test('Parking and junction completion turn off guidance in the same simulation step',async()=>{
 const {readFile}=await import('node:fs/promises'),source=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8'),step=source.match(/ function step\(seconds\)\{[^\n]+\}/)[0];
 for(const scene of ['parking','junction']){
  const observed=[],world={state:{id:scene==='parking'?'10':'05'},root:{},draftTime:0,renderFrame(){observed.push('draw')}},features={path:true,set(value){this.path=value.path;observed.push(['path',value.path])}};
  const run=new Function('world','features','observed',`let playing=true,loopTime=0,junctionPoses={motion:{duration:1000}};const drive={advance(){}},parking={step(){},get:()=>({active:false,complete:true})},isParking=id=>id==='10',current=()=>${JSON.stringify(scene)},seekJunction=()=>observed.push(['junction-draw',features.path]);${step};step(2);return playing;`);
  assert.equal(run(world,features,observed),false);assert.equal(features.path,false);assert.deepEqual(observed,scene==='parking'?[['path',false],'draw']:[['path',false],['junction-draw',false]]);
 }
});
