import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
const deferred=()=>{let resolve;const promise=new Promise(done=>resolve=done);return {promise,resolve}};
const flush=async()=>{for(let i=0;i<8;i++)await Promise.resolve()};
function statusHarness(){
 const nodes=new Map();let writes=0,cameraSyncs=0;
 const $=id=>{if(!nodes.has(id))nodes.set(id,new Proxy({dataset:{},querySelectorAll:()=>[],setAttribute(){writes++},removeAttribute(){writes++}}, {set(target,key,value){writes++;target[key]=value;return true}}));return nodes.get(id)};
 const assist=source.slice(source.indexOf('let assistRenderKey='),source.indexOf('\nfunction renderVehicles('));
 const transport=source.slice(source.indexOf('let transportRenderKey='),source.indexOf("\nwindow.addEventListener('message'"));
 const controller=new Function('$','syncCameraLock','syncJunctionPathLock',`
 let status={},ready=true,exporting=false,previewBusy=false;const project={active:'outdoor'},document={body:{dataset:{ready:'true'}}};
 ${assist}\n${transport}
 return {render(value,force=false){status=value;renderAssist(force);renderTransport()}};
 `)($,()=>cameraSyncs++,()=>{});
 return {controller,$,get writes(){return writes},get cameraSyncs(){return cameraSyncs}};
}
test('Continuous parking camera and elapsed updates do not rewrite unchanged controls',()=>{
 const h=statusHarness(),state={playing:true,parking:{target:{x:1,z:2},elapsed:1,phase:'forward',view:'raised',cameraLocked:true}};
 h.controller.render(state);const writes=h.writes,syncs=h.cameraSyncs;
 for(let i=1;i<=1000;i++)h.controller.render({...state,logicalTime:i,parking:{...state.parking,elapsed:i,camera:{position:[i,8,23]}}});
 assert.equal(h.writes,writes);assert.equal(h.cameraSyncs,syncs);
 h.controller.render({...state,parking:{...state.parking,phase:'reverse'}});
 assert.equal(h.$('parking-hint').textContent,'Reversing…');assert.ok(h.writes>writes);
});
test('Pause, camera lock, completion and inspector replacement still update controls',()=>{
 const h=statusHarness(),parking={target:{x:1,z:2},elapsed:2,phase:'reverse',view:'bev',cameraLocked:true};
 h.controller.render({playing:true,parking});h.controller.render({playing:false,parking:{...parking,cameraLocked:false}});
 assert.equal(h.$('assist-label').textContent,'Resume');assert.equal(h.cameraSyncs,2);
 h.controller.render({playing:false,parking:{...parking,complete:true}});assert.equal(h.$('assist-label').textContent,'Park out');
 const before=h.cameraSyncs;h.controller.render({playing:false,parking:{...parking,complete:true}},true);assert.equal(h.cameraSyncs,before+1);
});
function previewHarness(){
 const nodes={'export-preview':{open:true},format:{value:'png'},'export-preview-image':{removeAttribute(key){delete this[key]}},'export-preview-description':{}};
 const exports=[],created=[],revoked=[],locks=[];
 const sourceBlock=source.slice(source.indexOf('let previewURL='),source.indexOf("\n$('export-preview').addEventListener('toggle'"));
 const controller=new Function('$','bridge','URL','lockControls',`
 let ready=true,exporting=false,previewBusy=false,sceneUpdating=false,vehicleUpdating=false,themeTransition=null,duration=10;
 const selectedExportSize=()=>({width:3840,height:2160}),sizeLabel=()=> '3840 × 2160';
 ${sourceBlock}
 return {refreshExportPreview,clearExportPreview,get busy(){return previewBusy}};
 `)(id=>nodes[id],()=>({export(options){const task=deferred();exports.push({...task,options});return task.promise}}),{createObjectURL(blob){const url='blob:'+blob;created.push(url);return url},revokeObjectURL(url){revoked.push(url)}},busy=>locks.push(busy));
 return {controller,nodes,exports,created,revoked,locks};
}
test('Closing a preview releases its image; reopening captures a fresh one',async()=>{
 const h=previewHarness(),first=h.controller.refreshExportPreview();h.exports[0].resolve({blob:'first'});await first;
 h.nodes['export-preview'].open=false;h.controller.clearExportPreview();assert.deepEqual(h.revoked,['blob:first']);assert.equal(h.nodes['export-preview-image'].src,undefined);
 h.nodes['export-preview'].open=true;const next=h.controller.refreshExportPreview();h.exports[1].resolve({blob:'next'});await next;
 assert.equal(h.nodes['export-preview-image'].src,'blob:next');assert.equal(h.controller.busy,false);
});
test('A closed in-flight capture cannot publish stale pixels; reopen waits for a fresh capture',async()=>{
 const h=previewHarness(),first=h.controller.refreshExportPreview();h.nodes['export-preview'].open=false;h.controller.clearExportPreview();
 h.nodes['export-preview'].open=true;await h.controller.refreshExportPreview();assert.equal(h.exports.length,1);
 h.exports[0].resolve({blob:'stale'});await first;await flush();assert.deepEqual(h.created,[]);assert.equal(h.exports.length,2);
 h.exports[1].resolve({blob:'fresh'});await flush();assert.equal(h.nodes['export-preview-image'].src,'blob:fresh');assert.equal(h.controller.busy,false);
});
test('Camera metadata replaces and releases the previous preview image',async()=>{
 const h=previewHarness(),first=h.controller.refreshExportPreview();h.exports[0].resolve({blob:'image'});await first;
 h.nodes.format.value='camera';const next=h.controller.refreshExportPreview();h.exports[1].resolve({blob:'metadata'});await next;
 assert.equal(h.nodes['export-preview-image'].hidden,true);h.controller.clearExportPreview();assert.deepEqual(h.revoked,['blob:image']);
});

const bridgeSource=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
const parameterBody=bridgeSource.slice(bridgeSource.indexOf("async param(key,value,{sound=false}={}){"),bridgeSource.indexOf('},async scene(')).replace(/^async param/, 'async function param');
function parameterHarness(){
 let clones=0,copies=0,renders=0,previews=0,pauses=0;
 const vector={clone(){clones++;return {}},copy(){copies++}},world={state:{id:'10'},car:{position:vector,rotation:vector}};
 const param=new Function('world','parking','api','renderOnce','setPlaying',`
 let exporting=false,lastInput=0,idlePaused=false,last=0,accumulator=0,playing=false;
 const isParking=()=>true,current=()=> 'parking',publish=()=>{},schedule=()=>{},waitForRender=async()=>{};
 ${parameterBody}}
 return param;
 `)(world,{get:()=>({active:false,elapsed:5}),previewCamera(){previews++}},Object.assign(()=>{}, {param(){},get:()=>({vehicle:'x6'})}),()=>renders++,()=>pauses++);
 return {param,get counts(){return {clones,copies,renders,previews,pauses}}};
}
test('Parking camera uses one dedicated update; weather and traffic do not snapshot car transforms',async()=>{
 const h=parameterHarness();await h.param('camera','raised');assert.deepEqual(h.counts,{clones:0,copies:0,renders:1,previews:1,pauses:0});
 await h.param('weather','rain');await h.param('traffic',true);assert.equal(h.counts.clones,0);assert.equal(h.counts.copies,0);
 await h.param('model','x6');assert.equal(h.counts.clones,2);assert.equal(h.counts.copies,2);assert.equal(h.counts.pauses,1);
});
