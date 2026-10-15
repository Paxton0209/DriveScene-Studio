import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {fetchAsset,takePrefetched} from '../asset-request.js';

test('a failed prefetch is consumed so the next attempt performs a fresh request',async()=>{
 const scope={asset:Promise.reject(new Error('offline'))};let requests=0;
 await assert.rejects(takePrefetched('asset',()=>++requests,scope),/offline/);
 assert.equal('asset' in scope,false);
 assert.equal(takePrefetched('asset',()=>++requests,scope),1);
});
test('asset timeout covers a stalled body, not just response headers',async t=>{
 let aborted=false;
 t.mock.method(globalThis,'fetch',async(_url,{signal})=>({ok:true,arrayBuffer:()=>new Promise((_,reject)=>{
  signal.addEventListener('abort',()=>{aborted=true;reject(new Error('aborted'));});
 })}));
 await assert.rejects(fetchAsset('test',{timeoutMs:10}),{code:'asset'});assert.equal(aborted,true);
});
test('HTTP failures are classified and successful assets retain exact bytes',async t=>{
 t.mock.method(globalThis,'fetch',async()=>({ok:false,status:503}));
 await assert.rejects(fetchAsset('test'),{code:'asset'});
 const bytes=new Uint8Array([1,2,3]).buffer;
 globalThis.fetch=async()=>({ok:true,arrayBuffer:async()=>bytes});
 assert.equal(await fetchAsset('test'),bytes);
});

const source=(await readFile(new URL('../startup.js',import.meta.url),'utf8')).replace(/import\('\.\/app\.bundle\.js[^']*'\)/,'loadApp()');
function fixture(){
 class Element extends EventTarget{
  inert=false;hidden=false;disabled=false;dataset={};children=[];attributes={};
  style={setProperty(){}};
  append(...items){this.children.push(...items);}after(item){this.feedback=item;}
  setAttribute(key,value){this.attributes[key]=value;}
 }
 const nodes=Object.fromEntries(['preview','scene-canvas','scenes','scene-picker','theme-toggle','download','settings'].map(id=>[id,new Element()]));
 const controls=['scenes','settings','scene-picker','theme-toggle','download'].map(id=>nodes[id]);
 const window=new EventTarget();let rejectImport,timer,reloads=0;
 vm.runInNewContext(source,{document:{getElementById:id=>nodes[id],createElement:()=>new Element(),querySelectorAll:()=>controls},window,
  setTimeout:fn=>(timer=fn,1),clearTimeout:()=>{timer=null;},console:{error(){}},
  location:{reload(){reloads++;}},loadApp:()=>new Promise((_,reject)=>{rejectImport=reject;})});
 return {nodes,controls,window,rejectImport,get timer(){return timer;},get reloads(){return reloads;}};
}
test('slow startup remains recoverable and ready restores controls',()=>{
 const f=fixture();assert.ok(f.controls.every(e=>e.inert));
 f.timer();assert.equal(f.nodes.preview.feedback.hidden,false);
 f.window.dispatchEvent(new Event('studio:ready'));
 assert.equal(f.nodes.preview.feedback.hidden,true);assert.ok(f.controls.every(e=>!e.inert));assert.equal(f.timer,null);
});
test('failed app import exposes visible retry even before the app initializes',async()=>{
 const f=fixture();f.rejectImport(Object.assign(new Error('WebGL unavailable'),{code:'renderer'}));await Promise.resolve();
 const feedback=f.nodes.preview.feedback;assert.equal(feedback.hidden,false);
 assert.match(feedback.children[0].textContent,/static preview/);assert.equal(f.nodes.preview.attributes['aria-busy'],'false');
 assert.ok(f.controls.every(e=>e.inert));feedback.children[1].dispatchEvent(new Event('click'));assert.equal(f.reloads,1);
});
test('context loss blocks controls and late ready events cannot conceal the failure',()=>{
 const f=fixture();f.window.dispatchEvent(new Event('studio:ready'));
 const event=new Event('webglcontextlost',{cancelable:true});f.nodes['scene-canvas'].dispatchEvent(event);
 assert.equal(event.defaultPrevented,true);f.window.dispatchEvent(new Event('studio:ready'));
 assert.equal(f.nodes.preview.feedback.hidden,false);assert.ok(f.controls.every(e=>e.inert));assert.equal(f.nodes.download.disabled,true);
});
