import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';
let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
const transformed=async name=>(await load({path:new URL(`../../engine/${name}`,import.meta.url).pathname})).contents;
const features=await transformed('version-features.js');
const sweepSource=await transformed('activation-sweep.js');
const {createActivationSweep}=await import('data:text/javascript;base64,'+Buffer.from(sweepSource.replace("from 'three'",`from '${import.meta.resolve('three')}'`)).toString('base64'));
// Execute the actual transformed initialization and sweep, so a missed query
// rewrite reproduces the missing mesh rather than merely matching source text.
const initialization=features.match(/const activationSweep=.*?;world\.activationSweep=activationSweep;/)?.[0];
assert.ok(initialization);
const initialize=new Function('globalThis','createActivationSweep','world',initialization+'return activationSweep;');
for(const embedded of [false,true])for(const id of ['02','05','08'])test(`Approved assistance sweep is created and animates (embedded=${embedded}, scene=${id})`,()=>{
 const query='?review=ui-draft&quality=sr50';
 const scope=embedded?{location:{search:''},__draftSearch:query}:{location:{search:query}};
 const world={scene:new THREE.Scene(),state:{id,mode:'light',laneCount:6},layoutVisual:{width:22.2},car:{position:new THREE.Vector3(1.85,.02,0)}};
 const sweep=initialize(scope,createActivationSweep,world);
 assert.ok(sweep,'host review parameter must create the approved sweep');
 assert.equal(world.scene.children.length,1);
 sweep.start(0);sweep.update(0);if(['05','08'].includes(id)){assert.deepEqual(sweep.audit().carriageway,[.225,10.785]);assert.ok(Math.abs(sweep.mesh.material.uniforms.stopZ.value+22.4)<1e-9); }
 for(const time of [0,150,300,500,849]){sweep.update(time);assert.equal(sweep.mesh.visible,true);assert.equal(sweep.audit().progress,time/850);}
 sweep.update(850);assert.equal(sweep.mesh.visible,false);
 sweep.start(1000);sweep.update(1100);assert.equal(sweep.mesh.visible,true);assert.equal(sweep.audit().activations,2);
 sweep.cancel();assert.equal(sweep.mesh.visible,false);
 sweep.mesh.geometry.dispose();sweep.mesh.material.dispose();
});
test('Non-review engine routes retain their original activation behavior',()=>assert.equal(initialize({location:{search:''}},createActivationSweep,{}),null));
