import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {activationCarriageway,activationEnvelope,createActivationSweep} from '../engine/activation-sweep.js';
test('activation is confined to the actual same-direction carriageway at every lane count',()=>{
 for(const laneCount of [2,4,6]){const b=activationCarriageway({id:'02',laneCount});assert.ok(b.min===0);assert.ok(b.max===laneCount*3.7/2);}
 const b=activationCarriageway({id:'03'});assert.ok(b.min=== -5.55);assert.ok(b.max===5.55);
 assert.ok(activationCarriageway({id:'02',laneCount:6},7.4).max===3.7);
});
test('the sweep keeps rendering after the line settles and its wake fades continuously',()=>{
 const world={scene:new THREE.Scene(),car:new THREE.Group(),state:{id:'02',laneCount:6,mode:'light'}};const sweep=createActivationSweep(world);sweep.start(0);sweep.update(700);assert.equal(sweep.active(700),true);assert.equal(sweep.mesh.visible,true);sweep.update(851);assert.equal(sweep.mesh.visible,false);
 assert.ok(activationEnvelope(.6)>activationEnvelope(.8));assert.ok(activationEnvelope(.8)>activationEnvelope(.95));assert.equal(activationEnvelope(1),0);
});
