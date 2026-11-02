import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
const definition=source.slice(source.indexOf('async function replayTransition('),source.indexOf("$('scene-transport').addEventListener",source.indexOf('async function replayTransition(')));
test('Replay prepares and holds the started pose before revealing it',async()=>{
 const trace=[],cover={hidden:true,style:{},getContext(){return {drawImage(){assert.equal(cover.style.filter,'blur(28px)');trace.push('swap')}}}};let time=0,playing=false;
 const bridge={canvas:{},replay(){assert.equal(cover.hidden,false);trace.push('reset')},get:()=>({requestedPlaying:playing}),setPlaying(value){playing=value;trace.push(value?'resume':'pause')},renderReplayFrame(){assert.equal(playing,false);trace.push('render')}};
 const run=new Function('$','holdFrame','bridge','requestAnimationFrame','reducedMotion',definition+';return replayTransition;')(
  ()=>cover,async()=>{trace.push('capture');cover.hidden=false},()=>bridge,callback=>{time+=100;queueMicrotask(()=>callback(time))},()=>false);
 await run(true,async()=>{assert.equal(cover.hidden,false);playing=true;trace.push('prepare')});
 assert.deepEqual(trace,['capture','reset','prepare','pause','render','swap','resume']);
});

test('Replay control stays hidden outside completion and uses one icon throughout',async()=>{
 const css=await readFile(new URL('../shell-v5.css',import.meta.url),'utf8');
 assert.doesNotMatch(css,/\.artboard-clip:hover\s+#canvas-transport/);
 assert.match(css,/#canvas-transport\[data-visible=false\]\{opacity:0;pointer-events:none\}/);
 assert.match(css,/#canvas-transport\{background:[^\n]+transition:opacity 200ms linear\}/);
 assert.doesNotMatch(css,/#canvas-transport\[data-playing=true\]::before/);
});
