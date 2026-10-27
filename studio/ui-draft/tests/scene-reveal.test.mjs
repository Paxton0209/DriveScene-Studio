import test from 'node:test';
import assert from 'node:assert/strict';
import {revealScene} from '../scene-reveal.js';

test('Selection and prepared scene reveal share a start time, curve and completion boundary',async()=>{
 const records=[],resolvers=[];let committed=false;
 const animate=(frames,options)=>{assert.equal(committed,true);let resolve;const finished=new Promise(done=>resolve=done);resolvers.push(resolve);const animation={finished,startTime:null};records.push({frames,options,animation});return animation;};
 const cover={hidden:false,animate},indicator={style:{transform:'old'},classList:{add(){},remove(){}},animate};
 globalThis.getComputedStyle=()=>({transform:'old'});
 const pending=revealScene({cover,indicator,timeline:{currentTime:123},commit(){committed=true;indicator.style.transform='new';}});
 assert.equal(records.length,2);assert.deepEqual(records[0].options,records[1].options);
 assert.deepEqual(records.map(item=>item.animation.startTime),[123,123]);
 assert.deepEqual(records[1].frames,[{transform:'old'},{transform:'new'}]);
 resolvers[0]();await Promise.resolve();assert.equal(cover.hidden,false);
 resolvers[1]();await pending;assert.equal(cover.hidden,true);delete globalThis.getComputedStyle;
});

test('Reduced motion commits the prepared scene immediately without starting an animation',async()=>{
 let commits=0;const cover={hidden:false,animate(){throw Error('Unexpected animation');}};
 await revealScene({cover,reduce:true,timeline:{},commit(){commits++;}});
 assert.equal(commits,1);assert.equal(cover.hidden,true);
});
