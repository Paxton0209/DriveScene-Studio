import test from 'node:test';
import assert from 'node:assert/strict';
import {indoorFinishValues} from '../indoor-finish-settings.js';

test('Approved dark/light bay and column endpoints stay independent of floor and traffic tuning',()=>{
 assert.deepEqual(indoorFinishValues('dark'),{bay:2,column:.8,traffic:1.05,blue:.10165,ground:.91});
 assert.deepEqual(indoorFinishValues('light'),{bay:0,column:2,traffic:1,blue:0,ground:1});
 const tuned=indoorFinishValues('dark',1.3,.001,.98);
 assert.equal(tuned.bay,2);assert.equal(tuned.column,.8);
 assert.equal(tuned.blue,.001);assert.equal(tuned.traffic,1.3);assert.equal(tuned.ground,.98);
 assert.equal(indoorFinishValues('light',NaN,NaN,NaN).ground,1);
});
