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
