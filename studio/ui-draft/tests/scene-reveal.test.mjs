import test from 'node:test';
import assert from 'node:assert/strict';
import {revealScene} from '../scene-reveal.js';
function fixture(){
 let resolve,reject;const events=[];
 const animation={finished:new Promise((a,b)=>{resolve=a;reject=b}),cancel(){events.push('cancel');reject(Error('cancelled'))}};
 const cover={hidden:false,animate(frames,options){events.push('fade');assert.equal(options.duration,200);return animation}};
 return {cover,events,resolve,commit(){events.push('commit')}};
}
test('Prepared content commits before its fade and remains covered until completion',async()=>{
 const h=fixture(),pending=revealScene(h);assert.deepEqual(h.events,['commit','fade']);assert.equal(h.cover.hidden,false);
 h.resolve();await pending;assert.equal(h.cover.hidden,true);
});
test('New navigation cancels the old fade instead of queuing behind its duration',async()=>{
 const h=fixture(),controller=new AbortController(),pending=revealScene({...h,signal:controller.signal});
 controller.abort();await pending;assert.deepEqual(h.events,['commit','fade','cancel']);assert.equal(h.cover.hidden,true);
});
test('Reduced motion and obsolete reveals do not start animations',async()=>{
 for(const reduce of [true,false]){const h=fixture(),controller=new AbortController();controller.abort();await revealScene({...h,reduce,signal:controller.signal});assert.deepEqual(h.events,['commit']);assert.equal(h.cover.hidden,true);}
});
