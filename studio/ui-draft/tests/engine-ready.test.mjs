import test from 'node:test';
import assert from 'node:assert/strict';
import {waitForEngine} from '../engine-ready.js';

function fixture(){
 const host=new EventTarget();host.location={origin:'https://example.test'};
 const frame={contentWindow:{}};
 const signal=(overrides={})=>{const event=new Event('message');Object.assign(event,{source:frame.contentWindow,origin:host.location.origin,data:{type:'ui-draft-ready'},...overrides});host.dispatchEvent(event);};
 return {host,frame,signal};
}
test('Ready signal completes without waiting for the polling interval',async()=>{
 const f=fixture();let ready=false,complete=false;
 const pending=waitForEngine({...f,ready:()=>ready}).then(()=>{complete=true});
 ready=true;f.signal();await Promise.resolve();assert.equal(complete,true);await pending;
});
test('Unrelated frames and origins cannot publish readiness',async()=>{
 const f=fixture();let ready=false,complete=false;
 const pending=waitForEngine({...f,ready:()=>ready}).then(()=>{complete=true});ready=true;
 f.signal({source:{}});f.signal({origin:'https://other.test'});await Promise.resolve();assert.equal(complete,false);
 f.signal();await pending;
});
test('Already ready engines resolve, unavailable engines time out',async()=>{
 const f=fixture();await waitForEngine({...f,ready:()=>true});
 await assert.rejects(waitForEngine({...f,ready:()=>false,timeout:5}),/timed out/);
});
test('An alternative startup asset error rejects immediately instead of reporting ready',async()=>{
 const f=fixture(),pending=waitForEngine({...f,ready:()=>false});
 f.signal({data:{type:'ui-draft-error',message:'Alternative vehicle failed'}});
 await assert.rejects(pending,/Alternative vehicle failed/);
});

test('Driving handoff waits for a changed rendered frame, without restarting or pausing the scene',async()=>{
 const {waitForStartupMotion}=await import('../engine-ready.js');
 let distance=0,renderedFrames=5,playing=true,done=false;const pending=[];
 const host={document:{hidden:false},requestAnimationFrame:fn=>pending.push(fn)},bridge={get:()=>({scene:'elevated',playing,distance}),themeStatus:()=>({renderedFrames})};
 const ready=waitForStartupMotion({host,bridge}).then(()=>done=true);
 pending.shift()();await Promise.resolve();assert.equal(done,false);
 distance=.2;pending.shift()();await Promise.resolve();assert.equal(done,false);
 distance=.3;renderedFrames++;pending.shift()();await Promise.resolve();assert.equal(done,false);
 pending.shift()();await Promise.resolve();assert.equal(done,false);
 distance=.4;renderedFrames++;pending.shift()();await ready;assert.equal(done,true);
 for(const state of [{scene:'road',playing:false},{scene:'parking',playing:false},{scene:'junction',playing:true}])await waitForStartupMotion({host:{document:{hidden:false},requestAnimationFrame:fn=>fn()},bridge:{get:()=>state,themeStatus:()=>({renderedFrames:0})}});
});

test('An aborted motion wait resolves without waiting for another frame',async()=>{
 const {waitForStartupMotion}=await import('../engine-ready.js');
 const ok=await waitForStartupMotion({host:{document:{hidden:false},requestAnimationFrame(){throw Error('should not wait')}},bridge:{get:()=>({scene:'road',playing:true,distance:0}),themeStatus:()=>({renderedFrames:0})},signal:AbortSignal.abort()});
 assert.equal(ok,false);
});

 test('Background preparation cannot complete a visible moving-scene handoff',async()=>{
 let distance=0,renderedFrames=0,done=false;const pending=[],doc={hidden:true};
 const bridge={get:()=>({scene:'road',playing:!doc.hidden,requestedPlaying:true,distance}),themeStatus:()=>({renderedFrames})};
 const {waitForStartupMotion}=await import('../engine-ready.js');
 const ready=waitForStartupMotion({host:{document:doc,requestAnimationFrame:fn=>pending.push(fn)},bridge}).then(()=>done=true);
 distance=10;renderedFrames=10;pending.shift()();await Promise.resolve();assert.equal(done,false);
 doc.hidden=false;pending.shift()();await Promise.resolve();assert.equal(done,false);
 for(let i=0;i<2;i++){distance++;renderedFrames++;pending.shift()();}await ready;assert.equal(done,true);
});
