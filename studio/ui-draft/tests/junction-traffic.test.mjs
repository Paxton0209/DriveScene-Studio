import test from 'node:test';
import assert from 'node:assert/strict';
import {junctionTrafficPlan,stoppedApproachZ,advanceJunctionTraffic} from '../junction-traffic.js';
const world={junctionDimensions:{markingEnd:-22.55}};
test('Cross and T traffic never drive longitudinally through their stop lines',()=>{
 for(const id of ['05','08'])for(const dt of [1/60,.1])for(const route of junctionTrafficPlan(id)){
  const slot={route,desiredSpeed:route.speed,speed:route.speed,car:{position:{x:route.x,z:route.z},userData:{}}};
  for(let time=0;time<90;time+=dt){advanceJunctionTraffic(slot,dt,world);if(route.axis!=='x'){
   const front=slot.car.position.z+route.direction*2.6,edge=route.direction<0?-22.46:-57.54;
   assert.ok((front-edge)*route.direction<=-.49);
  }}
  if(route.axis!=='x'){assert.equal(slot.speed,0);assert.equal(slot.car.position.z,stoppedApproachZ(route.direction));}
 }
});
test('T junction has no vehicle approaching from the missing road; no car starts ahead of ego in its turn lane',()=>{
 assert.equal(junctionTrafficPlan('08').some(route=>route.axis!=='x'&&route.direction>0),false);
 for(const id of ['05','08'])assert.equal(junctionTrafficPlan(id).some(route=>route.axis!=='x'&&route.x===1.85),false);
 assert.equal(junctionTrafficPlan('02'),null);
});
