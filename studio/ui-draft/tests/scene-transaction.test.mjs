import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
const selection=source.slice(source.indexOf('function acknowledgeScene('),source.indexOf('\nasync function applyParam('));
const exportSync=source.slice(source.indexOf('function syncExportControls('),source.indexOf('\nfunction replaceContent('));
const deferred=()=>{let resolve;const promise=new Promise(done=>resolve=done);return {promise,resolve}};
async function flush(){for(let i=0;i<12;i++)await Promise.resolve();}
function harness(){
 const nodes=new Map(),unlocks=[],prepared=[],reveals=[],commits=[],navigation=[];
 const $=id=>{if(!nodes.has(id)){const node={hidden:false,disabled:false,open:false,querySelector(){return null}};Object.defineProperty(node,'inert',{set(value){if(id==='inspector-scroll'&&!value)unlocks.push(id)}});nodes.set(id,node);}return nodes.get(id)};
 const project={active:'road',boards:Object.fromEntries(['road','parking','outdoor','junction'].map(type=>[type,{seed:1,params:{model:'model-3'}}]))};
 const bridge=()=>({suspendIndicator(){},scene(type){const task=deferred();prepared.push({type,...task});return task.promise},get(){return {}},finishScene(){},replay(){}});
 const create=new Function('$','project','bridge','api','holdFrame','revealScene','document','navigation',`
 const controlPaint=async()=>true;
 let ready=true,pendingScene=null,exporting=false,previewBusy=false,vehicleUpdating=false,sceneUpdating=false,sceneRequest=0,sceneSelection=Promise.resolve(),sceneReveal=null,themeTransition=null,status={},videoAvailable=true,videoReady=false;
 const syncExportFormat=()=> 'png',selectedExportSize=()=>({width:3840,height:2160}),sizeLabel=()=> '3840 × 2160';
 ${exportSync}
 const params=()=>project.boards[project.active].params,board=()=>project.boards[project.active];
 const persist=()=>{},feedback=()=>{},syncFinish=()=>{},finishTheme=()=> 'light',sizeBoard=()=>{},reducedMotion=()=>false,moveNav=()=>{navigation.push('selected')},renderInspector=()=>syncExportControls(),renderTransport=()=>{},refreshExportPreview=()=>{};
 ${selection}
 return {selectScene,setReady(value){ready=value},get pending(){return pendingScene},holdTheme(promise){themeTransition={finished:promise};promise.finally(()=>themeTransition=null)},get busy(){return sceneUpdating}};`);
 const controller=create($,project,bridge,()=>({get:()=>({vehicle:'model-3'})}),async()=>{},options=>{options.commit();commits.push(project.active);const task=deferred();reveals.push(task);return task.promise},{querySelectorAll:()=>[]},navigation);
 return {controller,prepared,reveals,commits,unlocks,nodes,navigation};
}
test('Navigation waits for an in-flight theme and prepares only the latest requested scene',async()=>{
 const h=harness(),theme=deferred();h.controller.holdTheme(theme.promise);
 h.controller.selectScene('parking');const last=h.controller.selectScene('outdoor');await flush();
 assert.equal(h.controller.busy,true);assert.equal(h.prepared.length,0);
 theme.resolve();await flush();assert.deepEqual(h.prepared.map(item=>item.type),['outdoor']);
 h.prepared[0].resolve();await flush();h.reveals[0].resolve();await last;
 assert.deepEqual(h.commits,['outdoor']);assert.equal(h.controller.busy,false);
});
test('A superseded preparation stays covered and cannot reveal or unlock the inspector',async()=>{
 const h=harness();h.controller.selectScene('parking');await flush();const last=h.controller.selectScene('outdoor');h.prepared[0].resolve();await flush();
 assert.equal(h.reveals.length,0);assert.equal(h.unlocks.length,0);assert.equal(h.prepared[1].type,'outdoor');
 h.prepared[1].resolve();await flush();h.reveals[0].resolve();await last;
 assert.deepEqual(h.commits,['outdoor']);assert.equal(h.unlocks.length,1);
});
test('A new selection during the reveal keeps controls locked through the next scene',async()=>{
 const h=harness();h.controller.selectScene('parking');await flush();h.prepared[0].resolve();await flush();
 const last=h.controller.selectScene('outdoor');h.reveals[0].resolve();await flush();
 assert.equal(h.prepared[1].type,'outdoor');assert.equal(h.controller.busy,true);assert.equal(h.unlocks.length,0);
 h.prepared[1].resolve();await flush();h.reveals[1].resolve();await last;assert.equal(h.unlocks.length,1);assert.equal(h.controller.busy,false);
});
test('Scene input lock does not toggle Export opacity through its disabled state',async()=>{
 const h=harness();const done=h.controller.selectScene('parking');await flush();
 assert.equal(h.nodes.has('export'),false);assert.equal(h.unlocks.length,0);assert.equal(h.controller.busy,true);
 h.prepared[0].resolve();await flush();assert.equal(h.unlocks.length,0);h.reveals[0].resolve();await done;
 assert.equal(h.nodes.get('export').disabled,false);assert.equal(h.unlocks.length,1);assert.equal(h.controller.busy,false);
});

test('Navigation acknowledges each click before preparation or an in-flight theme completes',async()=>{
 const h=harness(),theme=deferred();h.controller.holdTheme(theme.promise);
 h.controller.selectScene('parking');assert.equal(h.navigation.length,1);assert.equal(h.prepared.length,0);
 const last=h.controller.selectScene('outdoor');assert.equal(h.navigation.length,2);
 theme.resolve();await flush();h.prepared[0].resolve();await flush();h.reveals[0].resolve();await last;
 assert.deepEqual(h.commits,['outdoor']);
});

test('A click during startup acknowledges the last intent without preparing an unavailable engine',async()=>{
 const h=harness();h.controller.setReady(false);await h.controller.selectScene('parking');await h.controller.selectScene('outdoor');
 assert.equal(h.navigation.length,2);assert.equal(h.controller.pending,'outdoor');assert.equal(h.prepared.length,0);
});

test('Image export remains enabled after the real inspector commit and scene unlock',async()=>{
 const h=harness();const done=h.controller.selectScene('parking');await flush();h.prepared[0].resolve();await flush();
 assert.equal(h.controller.busy,true);h.reveals[0].resolve();await done;
 assert.equal(h.controller.busy,false);assert.equal(h.nodes.get('export').disabled,false);
});
