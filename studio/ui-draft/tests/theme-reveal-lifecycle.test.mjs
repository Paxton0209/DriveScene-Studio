import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
const block=source.slice(source.indexOf('let themeTransition=null'),source.indexOf("$('theme').addEventListener"));
const deferred=()=>{let resolve,reject;const promise=new Promise((yes,no)=>{resolve=yes;reject=no});return {promise,resolve,reject}};
const flush=async()=>{for(let i=0;i<12;i++)await Promise.resolve()};
function harness({reduce=false,failCommit=false}={}){
 const calls=[],pending=[];let snapshots=0;
 const document={documentElement:{dataset:{theme:'light'}},body:{dataset:{}},startViewTransition(){snapshots++;throw Error('Snapshot must not be used')}};
 const controller=new Function('document','bridge','localStorage','syncFinish','renderTheme','reducedMotion',`
 let ready=true,exporting=false,previewBusy=false,sceneUpdating=false,vehicleUpdating=false;const themeKey='test';
 ${block}
 return {setTheme,get busy(){return !!themeTransition}};
 `)(document,()=>({theme(value,{animate}){calls.push([value,animate]);if(failCommit)return Promise.reject(Error('Theme unavailable'));const d=deferred();pending.push(d);return d.promise}}),{setItem(){}},()=>{},()=>{},()=>reduce);
 return {controller,document,calls,pending,get snapshots(){return snapshots}};
}
test('Theme changes blend the live scene and avoid full-page captures',async()=>{
 const h=harness(),done=h.controller.setTheme('dark');await flush();
 assert.deepEqual(h.calls,[['dark',true]]);assert.equal(h.controller.busy,true);
 h.pending[0].resolve();await done;
 assert.equal(h.document.documentElement.dataset.theme,'dark');assert.equal(h.snapshots,0);assert.equal(h.controller.busy,false);
 assert.equal(JSON.parse(h.document.body.dataset.themeMotion).method,'live-colors');
});
test('Rapid theme requests serialize and resolve to the latest intent',async()=>{
 const h=harness(),done=h.controller.setTheme('dark');await flush();
 await h.controller.setTheme('light');assert.equal(h.calls.length,1);
 h.pending[0].resolve();await flush();assert.deepEqual(h.calls,[['dark',true],['light',true]]);
 h.pending[1].resolve();await done;assert.equal(h.document.documentElement.dataset.theme,'light');assert.equal(h.controller.busy,false);
});
test('Reduced motion commits directly and failed commits unlock the controller',async()=>{
 const h=harness({reduce:true}),done=h.controller.setTheme('dark');await flush();assert.deepEqual(h.calls,[['dark',false]]);h.pending[0].resolve();await done;
 const failed=harness({failCommit:true});await assert.rejects(failed.controller.setTheme('dark'),/Theme unavailable/);assert.equal(failed.controller.busy,false);
});
test('Theme changes stay silent after the explicit audio removal',()=>{assert.doesNotMatch(block,/playThemeSound|AudioContext/)});
