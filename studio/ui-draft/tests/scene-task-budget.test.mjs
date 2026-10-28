import {test} from 'node:test';
import assert from 'node:assert/strict';
import {prepareSceneSteps,yieldSceneTask} from '../scene-preparation.js';

test('construction preserves every operation in order with time bounded batches',async()=>{
 let time=0;const operations=[],pauses=[];
 function* steps(){for(let i=0;i<10;i++){operations.push(i);time++;yield;}}
 await prepareSceneSteps(steps(),{now:()=>time,yieldTask:async()=>{pauses.push(operations.length);}});
 assert.deepEqual(operations,[0,1,2,3,4,5,6,7,8,9]);assert.deepEqual(pauses,[4,8]);
});
test('cheap and cached construction does not wait per object',async()=>{
 let pauses=0;
 await prepareSceneSteps(Array(100),{now:()=>0,yieldTask:async()=>{pauses++;}});
 assert.equal(pauses,0);
});
test('construction errors propagate without continuing a damaged scene',async()=>{
 function* steps(){yield;throw Error('construction failed');}
 await assert.rejects(prepareSceneSteps(steps()),/construction failed/);
});
test('task yield permits queued work before resuming and releases its ports',async()=>{
 const order=[];const task=yieldSceneTask().then(()=>order.push('task'));
 queueMicrotask(()=>order.push('microtask'));await task;
 assert.deepEqual(order,['microtask','task']);
});
