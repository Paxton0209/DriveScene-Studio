import test from 'node:test';
import assert from 'node:assert/strict';
import {installAppearancePreparation} from '../appearance-preparation.js';

test('Appearance preparation yields without allowing live frames and keys warm programs by scene and car while reusing uniform-only theme changes',async()=>{
 const events=[],world={root:{},car:{uuid:'one'},state:{mode:'light'},initializingScene:false,suspended:false,renderPreparedFrame(){events.push('draw')}};
 let release;installAppearancePreparation(world,()=>{assert.equal(world.suspended,false);assert.equal(world.initializingScene,true);events.push('record');return new Promise(resolve=>release=resolve)});
 const run=world.draftPrepareAppearance();assert.equal(world.suspended,true);release();await run;
 assert.deepEqual(events,['record','draw']);assert.equal(world.initializingScene,false);assert.equal(world.suspended,false);
 await world.draftPrepareAppearance();assert.equal(events.length,2);
 world.state.mode='dark';await world.draftPrepareAppearance();assert.equal(events.length,2);
 for(const change of [()=>world.car={uuid:'two'},()=>world.root={}]){change();const next=world.draftPrepareAppearance();release();await next;}
 assert.equal(events.length,6);
});

test('Failed appearance preparation restores prior suspension and remains retryable',async()=>{
 let fail=true,n=0;const world={root:{},car:{uuid:'one'},state:{mode:'light'},initializingScene:false,suspended:true,renderPreparedFrame(){n++}};
 installAppearancePreparation(world,async()=>{if(fail)throw Error('warm failure')});
 await assert.rejects(world.draftPrepareAppearance(),/warm failure/);assert.equal(world.suspended,true);assert.equal(world.initializingScene,false);assert.equal(n,0);
 fail=false;await world.draftPrepareAppearance();assert.equal(n,1);assert.equal(world.suspended,true);
});


test('A batch warms every model in one pass and restores scene ownership, transforms and visibility',async()=>{
 const THREE=await import('three'),scene=new THREE.Scene(),parent=new THREE.Group(),active=new THREE.Group(),other=new THREE.Group();
 scene.add(active);parent.add(other);other.position.set(4,5,6);other.rotation.set(.1,.2,.3);other.visible=false;active.position.set(1,2,3);
 const before={position:other.position.toArray(),rotation:other.rotation.toArray()},world={scene,root:{},car:active,state:{mode:'light'},initializingScene:false,suspended:true,renderPreparedFrame(){}};
 let calls=0;installAppearancePreparation(world,async()=>{calls++;assert.equal(other.parent,scene);assert.equal(other.visible,true);assert.deepEqual(other.position.toArray(),active.position.toArray());});
 await world.draftPrepareAppearances([active,other]);await world.draftPrepareAppearances([active,other]);assert.equal(calls,1);
 assert.equal(other.parent,parent);assert.equal(other.visible,false);assert.deepEqual(other.position.toArray(),before.position);assert.deepEqual(other.rotation.toArray(),before.rotation);assert.equal(world.suspended,true);
 world.root={};world.renderPreparedFrame=()=>{throw Error('final draw failed')};await assert.rejects(world.draftPrepareAppearances([active,other]),/final draw failed/);
 assert.equal(other.parent,parent);world.renderPreparedFrame=()=>{};await world.draftPrepareAppearances([active,other]);assert.equal(calls,3);
});
