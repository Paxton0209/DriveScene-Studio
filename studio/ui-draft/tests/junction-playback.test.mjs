import test from 'node:test';
import assert from 'node:assert/strict';
import {brakingSpeed,previewDistance} from '../junction-playback.js';
test('Junction line length follows eight seconds of current speed to zero',()=>{
 const timing={speed:10,cruise:1,brake:2},samples=[0,1000,1500,2000,2500,3000].map(time=>brakingSpeed(time,timing));
 assert.deepEqual(samples,[10,10,7.5,5,2.5,0]);
 assert.deepEqual(samples.map(previewDistance),[80,80,60,40,20,0]);
 assert.equal(previewDistance(NaN),0);assert.equal(previewDistance(-1),0);
});
test('Playback time scaling preserves the actual distance derivative',()=>{
 const speed=brakingSpeed(1000,{speed:10,cruise:1,brake:2,scale:.5});
 assert.equal(speed,10);assert.equal(previewDistance(speed),80);
});
