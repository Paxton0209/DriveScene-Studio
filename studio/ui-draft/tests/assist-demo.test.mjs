import test from 'node:test';import assert from 'node:assert/strict';import {setAssistDemo} from '../assist-demo.js';
function fixture(scene='road'){
 const events=[],status={scene,playing:false,features:{path:false}},bridge={get:()=>status,setPlaying(value){events.push(['playing',value]);status.playing=value},async param(key,value){events.push([key,value]);status.features[key]=value},replay(){events.push(['replay']);status.junction.complete=false},async parkingPlay(){events.push(['parking']);await this.param('path',true);this.setPlaying(true)}};
 return {bridge,status,events};
}
for(const scene of ['road','elevated','ramp','junction'])for(const playing of [false,true])test(`Driving Assist preserves playback in ${scene} while playing=${playing}`,async()=>{
 const {bridge,status,events}=fixture(scene);status.playing=playing;
 assert.equal(await setAssistDemo(bridge,true),true);assert.equal(status.features.path,true);assert.equal(status.playing,playing);assert.deepEqual(events,[['path',true]]);
 events.length=0;await setAssistDemo(bridge,true);assert.deepEqual(events,[],'repeated mode intent has no playback or sound side effects');
 assert.equal(await setAssistDemo(bridge,false),false);assert.equal(status.features.path,false);assert.equal(status.playing,playing);assert.deepEqual(events,[['path',false]]);
});
for(const scene of ['parking','outdoor'])test(`Parking Assist still owns the maneuver in ${scene}`,async()=>{
 const {bridge,status,events}=fixture(scene);assert.equal(await setAssistDemo(bridge,true),true);assert.equal(status.playing,true);assert.equal(status.features.path,true);
 events.length=0;await setAssistDemo(bridge,true);assert.deepEqual(events,[]);await setAssistDemo(bridge,false);assert.equal(status.playing,false);assert.equal(status.features.path,false);assert.deepEqual(events,[['playing',false],['path',false]]);
});
test('Failed parking preparation rolls back both motion and guidance',async()=>{const f=fixture('parking');f.bridge.parkingPlay=async()=>{f.status.features.path=true;throw Error('No empty bay')};await assert.rejects(setAssistDemo(f.bridge,true),/No empty bay/);assert.equal(f.status.playing,false);assert.equal(f.status.features.path,false)});
test('A pending path request cannot start playback after a scene change',async()=>{const f=fixture();f.bridge.param=async()=>{f.status.scene='parking'};assert.equal(await setAssistDemo(f.bridge,true),false);assert.equal(f.status.playing,false)});

test('Completion stops time and preserves assistance state',async()=>{
 const {readFile}=await import('node:fs/promises'),source=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8'),step=source.match(/ function step\(seconds\)\{[^\n]+\}/)[0];
 for(const scene of ['parking','junction']){
  const observed=[],world={state:{id:scene==='parking'?'10':'05'},root:{},draftTime:0,renderFrame(){observed.push('draw')}},features={path:true,set(value){this.path=value.path;observed.push(['path',value.path])}};
  const run=new Function('world','features','observed',`let playing=true,loopTime=0,junctionPoses={motion:{duration:1000}};const drive={advance(){}},parking={step(){},get:()=>({active:false,complete:true})},isParking=id=>id==='10',current=()=>${JSON.stringify(scene)},seekJunction=()=>observed.push(['junction-draw',features.path]);${step};step(2);return playing;`);
  assert.equal(run(world,features,observed),false);assert.equal(features.path,true);assert.deepEqual(observed,scene==='parking'?['draw']:[['junction-draw',true]]);
 }
});

test('Parking playback pause switches assistance off and resume switches it on',async()=>{
 const {readFile}=await import('node:fs/promises'),source=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 const body=source.slice(source.indexOf(' async parkingPlay(){'),source.indexOf('\n junctionPlay()',source.indexOf(' async parkingPlay(){'))).replace(/^ async parkingPlay\(\)/,'async function parkingPlay()').replace(/,\s*$/,'');
 const run=new Function(`let playing=true,enabled=true;const world={initializingScene:false},features={get:()=>({path:enabled})},parking={get:()=>({complete:false}),sync(){},selectDefault:()=>true};let exporting=false;function setPlaying(value){playing=value}const bridge={async param(key,value){enabled=value},replay(){}};${body};return {parkingPlay,get:()=>({playing,enabled})}`)();
 await run.parkingPlay();assert.deepEqual(run.get(),{playing:false,enabled:false});
 await run.parkingPlay();assert.deepEqual(run.get(),{playing:true,enabled:true});
});
