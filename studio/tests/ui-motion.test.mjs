import test from 'node:test';
import assert from 'node:assert/strict';
let now=0,reduce=false,sequence=0;
const callbacks=new Map();
globalThis.performance={now:()=>now};
globalThis.matchMedia=()=>({matches:reduce});
globalThis.requestAnimationFrame=callback=>{callbacks.set(++sequence,callback);return sequence;};
globalThis.cancelAnimationFrame=identifier=>callbacks.delete(identifier);
const {createSpring,ARC_MOTION_SCALE}=await import('../ui-motion.js');
function advance(){now+=1000/120;const pending=[...callbacks.values()];callbacks.clear();pending.forEach(callback=>callback(now));}
test('the common UI motion scale includes the extra twenty percent reduction',()=>assert.ok(Math.abs(ARC_MOTION_SCALE-.64)<1e-12));
test('a spring retargets from its presentation position and settles',()=>{let current=0;const spring=createSpring(value=>current=value);spring.to(300);for(let index=0;index<10;index++)advance();const presentation=current;spring.to(-80);assert.equal(current,presentation);for(let index=0;index<200;index++)advance();assert.equal(current,-80);assert.equal(callbacks.size,0);});
test('reduced motion finishes immediately without a pending animation',()=>{reduce=true;let current=0;const spring=createSpring(value=>current=value);spring.to(500);assert.equal(current,500);assert.equal(callbacks.size,0);reduce=false;});
