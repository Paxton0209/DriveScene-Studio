import test from 'node:test';
import assert from 'node:assert/strict';
import {advanceRoadArrows,rampPassageState,RAMP_CYCLE_SECONDS,RAMP_SPEED} from '../road-mark-motion.js';

function fixture(id='06'){
 return {id,arrows:{near:{position:{z:0},material:{opacity:.72}},far:{position:{z:0},material:{opacity:.72}}}};
}

test('Ramp markings pass with the road once without creating replacement rows',()=>{
 for(const id of ['06','07']){
  const data=fixture(id);advanceRoadArrows(data,0);
  for(let frame=1;frame<=60;frame++)advanceRoadArrows(data,frame*RAMP_SPEED/60);
  assert.ok(Math.abs(data.arrows.near.position.z-RAMP_SPEED)<1e-9);
  assert.ok(Math.abs(data.arrows.far.position.z-RAMP_SPEED)<1e-9);
  assert.equal(data.arrows.repeat,undefined);
 }
});

test('A full passage repeats after 25 seconds with an ordinary-road interval',()=>{
 const initial=rampPassageState(0),passed=rampPassageState(10*RAMP_SPEED),approaching=rampPassageState(20*RAMP_SPEED),next=rampPassageState(RAMP_CYCLE_SECONDS*RAMP_SPEED);
 assert.equal(RAMP_CYCLE_SECONDS,25);assert.equal(passed.visible,false);
 assert.equal(approaching.visible,true);assert.ok(approaching.offset<0);assert.deepEqual(next,initial);
 const data=fixture();advanceRoadArrows(data,10*RAMP_SPEED);
 assert.equal(data.arrows.near.visible,false);assert.equal(data.arrows.far.visible,false);
 advanceRoadArrows(data,25*RAMP_SPEED);
 assert.equal(data.arrows.near.visible,true);assert.equal(data.arrows.near.position.z,0);
});

test('Playback restore and Junction ground markings stay deterministic',()=>{
 const data=fixture();advanceRoadArrows(data,400);advanceRoadArrows(data,16.8);
 assert.ok(Math.abs(data.arrows.near.position.z-16.8)<1e-9);
 for(const id of ['05','08']){
  const junction=fixture(id);advanceRoadArrows(junction,16.8);
  assert.equal(junction.arrows.near.position.z,0);
 }
});
