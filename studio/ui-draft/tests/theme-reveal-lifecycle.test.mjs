import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
const block=source.slice(source.indexOf('let themeTransition=null'),source.indexOf("$('theme').addEventListener"));
const deferred=()=>{let resolve,reject;const promise=new Promise((yes,no)=>{resolve=yes;reject=no});return {promise,resolve,reject}};
const flush=async()=>{for(let i=0;i<12;i++)await Promise.resolve()};
function harness({playing=true,reduce=false,unavailable=false,failStart=false}={}){
 const transitions=[],events=[],styles={},classes=new Set();let held=false;
 const root={dataset:{theme:'light'},style:{setProperty(k,v){styles[k]=v}},classList:{add(v){classes.add(v)},remove(v){classes.delete(v)}}};
 const document={documentElement:root,body:{dataset:{}},startViewTransition:unavailable?undefined:update=>{
  if(failStart)throw Error('Snapshot unavailable');
  const ready=deferred(),finished=deferred(),transition={ready:ready.promise,finished:finished.promise};
  transitions.push({...transition,finish:finished.resolve});
  Promise.resolve().then(update).then(ready.resolve,ready.reject);return transition;
 }};
 const bridge=()=>({beginTheme(){held=true;events.push('hold')},async theme(theme){assert.equal(held,!reduce&&!unavailable);events.push(theme)},endTheme(){held=false;events.push('release')}});
 const controller=new Function('document','frame','bridge','localStorage','$','syncFinish','renderTheme','reducedMotion','innerWidth','innerHeight',`
 let ready=true,exporting=false,previewBusy=false,sceneUpdating=false,vehicleUpdating=false;const themeKey='test';
 ${block}
 return {setTheme,get busy(){return !!themeTransition}};
 `)(document,{contentDocument:{documentElement:root}},bridge,{setItem(){}},()=>({getBoundingClientRect:()=>({left:1220,top:8,width:28,height:28})}),()=>{},()=>{},()=>reduce,1266,1000);
 return {controller,document,styles,classes,transitions,events,get held(){return held},get playing(){return playing}};
}
test('Theme snapshots hold playback through reveal, preserving playing and paused intent',async()=>{
 for(const playing of [false,true]){
  const h=harness({playing}),done=h.controller.setTheme('dark');await flush();
  assert.equal(h.document.documentElement.dataset.theme,'dark');assert.equal(h.held,true);assert.equal(h.playing,playing);assert.equal(h.controller.busy,true);
  assert.ok(parseFloat(h.styles['--theme-reveal-radius'])>Math.hypot(1234,978)+179);
  h.transitions[0].finish();await done;assert.equal(h.held,false);assert.equal(h.playing,playing);assert.equal(h.controller.busy,false);assert.equal(h.classes.size,0);
  assert.deepEqual(h.events,['hold','dark','release']);
 }
});
test('Rapid theme requests serialize complete snapshots and resolve to latest intent',async()=>{
 const h=harness(),done=h.controller.setTheme('dark');await flush();await h.controller.setTheme('light');assert.equal(h.transitions.length,1);
 h.transitions[0].finish();await flush();assert.equal(h.transitions.length,2);assert.equal(h.document.documentElement.dataset.theme,'light');assert.equal(h.held,true);
 h.transitions[1].finish();await done;assert.equal(h.held,false);assert.deepEqual(h.events,['hold','dark','release','hold','light','release']);
});
test('Unavailable snapshots and reduced motion commit without a held animation',async()=>{
 for(const options of [{reduce:true},{unavailable:true}]){
  const h=harness(options);await h.controller.setTheme('dark');assert.equal(h.document.documentElement.dataset.theme,'dark');assert.equal(h.transitions.length,0);assert.equal(h.held,false);assert.equal(h.controller.busy,false);
 }
});
test('A failed snapshot commits once and always releases the playback hold',async()=>{
 const h=harness({failStart:true});await h.controller.setTheme('dark');assert.equal(h.document.documentElement.dataset.theme,'dark');assert.deepEqual(h.events,['hold','dark','release']);assert.equal(h.controller.busy,false);
 assert.equal(JSON.parse(h.document.body.dataset.themeMotion).error,'Snapshot unavailable');
});
test('Transport stays in the root snapshot and soft reveal follows the reference recipe',async()=>{
 const css=await readFile(new URL('../inspector.css',import.meta.url),'utf8'),base=await readFile(new URL('../draft.css',import.meta.url),'utf8');
 assert.doesNotMatch(css,/view-transition-(?:name:scene-transport|old\(scene-transport\)|new\(scene-transport\))/);
 assert.match(base,/@property --theme-reveal-progress\{[^}]*inherits:false/);assert.match(base,/- 160px/);assert.doesNotMatch(base,/theme-defocus|--theme-reveal-background/);assert.match(base,/400ms cubic-bezier\(\.65,0,\.35,1\)/);
});

test('Theme changes stay silent after the explicit audio removal',()=>{assert.doesNotMatch(block,/playThemeSound|AudioContext/)});
