import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
const definition=source.slice(source.indexOf('async function replayTransition('),source.indexOf("$('scene-transport').addEventListener",source.indexOf('async function replayTransition(')));
test('Replay reveals a prepared sharp frame without stopping the playback clock',async()=>{
 const trace=[],cover={hidden:true,style:{}};let playing=false;
 const bridge={replay(){assert.equal(cover.hidden,false);trace.push('reset')},get:()=>({requestedPlaying:playing}),setPlaying(){assert.fail('replay must not inject a pause/resume')},renderReplayFrame(){assert.equal(playing,true);assert.equal(cover.hidden,false);trace.push('render')}};
 const run=new Function('$','holdFrame','bridge',definition+';return replayTransition;')(
  ()=>cover,async()=>{trace.push('capture');cover.hidden=false},()=>bridge);
 await run(true,async()=>{assert.equal(cover.hidden,false);playing=true;trace.push('prepare')});
 assert.deepEqual(trace,['capture','reset','prepare','render']);assert.equal(cover.hidden,true);assert.equal(cover.style.zIndex,'');
 assert.equal(cover.style.filter,undefined);assert.equal(cover.style.transform,undefined);
});
test('Replay releases the existing cover if preparation fails',async()=>{
 const cover={hidden:true,style:{}},bridge={replay(){}};
 const run=new Function('$','holdFrame','bridge',definition+';return replayTransition;')(()=>cover,async()=>{cover.hidden=false},()=>bridge);
 await assert.rejects(run(true,async()=>{throw Error('prepare failed')}),/prepare failed/);
 assert.equal(cover.hidden,true);assert.equal(cover.style.zIndex,'');
});

test('Replay control stays hidden outside completion and uses one icon throughout',async()=>{
 const css=await readFile(new URL('../shell-v5.css',import.meta.url),'utf8');
 assert.doesNotMatch(css,/\.artboard-clip:hover\s+#canvas-transport/);
 assert.match(css,/#canvas-transport\[data-visible=false\]\{opacity:0;pointer-events:none\}/);
 assert.match(css,/#canvas-transport\{background:[^\n]+transition:opacity 200ms linear\}/);
 assert.doesNotMatch(css,/#canvas-transport\[data-playing=true\]::before/);
});
