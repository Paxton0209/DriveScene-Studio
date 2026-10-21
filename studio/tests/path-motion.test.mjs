import test from 'node:test';
import assert from 'node:assert/strict';
import {PATH_MOTION_PRESETS,DEFAULT_PATH_MOTION,normalizePathMotion,pathMotionDuration,pathMotionFrame,cubicBezierProgress} from '../engine/path-motion.js';
function referenceBezier(progress,curve){
 let lower=0,upper=1;
 const sample=(phase,first,second)=>3*(1-phase)**2*phase*first+3*(1-phase)*phase**2*second+phase**3;
 for(let iteration=0;iteration<36;iteration++){const phase=(lower+upper)/2;if(sample(phase,curve[0],curve[2])<progress)lower=phase;else upper=phase;}
 return sample((lower+upper)/2,curve[1],curve[3]);
}
test('the selected soft-flow preset is the default and opens in 400ms',()=>{assert.deepEqual(DEFAULT_PATH_MOTION,{preset:'flow'});assert.equal(pathMotionDuration(DEFAULT_PATH_MOTION),400);});
test('invalid and legacy settings remain safe',()=>{for(const value of [null,undefined,{},[],{preset:'unknown'}])assert.deepEqual(normalizePathMotion(value),DEFAULT_PATH_MOTION);assert.deepEqual(normalizePathMotion({tailMs:119,curve:46,mode:'accelerate'}),{tailMs:119,curve:46,mode:'accelerate'});});
for(const [id,preset]of Object.entries(PATH_MOTION_PRESETS)){
 test(id+' is monotone, accurate and fully settled',()=>{let previous=-1;const settings={preset:id},duration=pathMotionDuration(settings);for(let index=0;index<=10000;index++){const progress=index/10000,eased=cubicBezierProgress(progress,preset.bezier);assert.ok(Math.abs(eased-referenceBezier(progress,preset.bezier))<1e-7);const frame=pathMotionFrame(progress*duration,settings);assert.ok(frame.front>=previous);previous=frame.front;for(const value of Object.values(frame))assert.ok(Number.isFinite(value));}const last=pathMotionFrame(duration,settings);assert.equal(last.bandBlend,0);assert.equal(last.appearance,1);assert.equal(last.fill,1);assert.ok(last.front>1+last.feather);assert.ok(last.front>1+last.handoff*.55);});
 test(id+' has no speed discontinuity at the old 400ms seam',()=>{const settings={preset:id},before=pathMotionFrame(399.99,settings).front,at=pathMotionFrame(400,settings).front,after=pathMotionFrame(400.01,settings).front;assert.ok(Math.abs((at-before)-(after-at))<1e-6);});
 test(id+' can write into a reusable frame object',()=>{const result={};assert.equal(pathMotionFrame(100,{preset:id},result),result);assert.ok(result.front>-.06);});
}
