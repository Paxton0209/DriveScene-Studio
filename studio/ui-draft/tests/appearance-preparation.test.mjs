import test from 'node:test';
import assert from 'node:assert/strict';
import {installAppearancePreparation} from '../appearance-preparation.js';

test('Appearance preparation yields without allowing live frames and keys warm programs by scene, car and tone',async()=>{
 const events=[],world={root:{},car:{uuid:'one'},state:{mode:'light'},initializingScene:false,suspended:false,renderPreparedFrame(){events.push('draw')}};
 let release;installAppearancePreparation(world,()=>{assert.equal(world.suspended,false);assert.equal(world.initializingScene,true);events.push('record');return new Promise(resolve=>release=resolve)});
 const run=world.draftPrepareAppearance();assert.equal(world.suspended,true);release();await run;
 assert.deepEqual(events,['record','draw']);assert.equal(world.initializingScene,false);assert.equal(world.suspended,false);
 await world.draftPrepareAppearance();assert.equal(events.length,2);
 for(const change of [()=>world.state.mode='dark',()=>world.car={uuid:'two'},()=>world.root={}]){change();const next=world.draftPrepareAppearance();release();await next;}
 assert.equal(events.length,8);
});

test('Failed appearance preparation restores prior suspension and remains retryable',async()=>{
 let fail=true,n=0;const world={root:{},car:{uuid:'one'},state:{mode:'light'},initializingScene:false,suspended:true,renderPreparedFrame(){n++}};
 installAppearancePreparation(world,async()=>{if(fail)throw Error('warm failure')});
 await assert.rejects(world.draftPrepareAppearance(),/warm failure/);assert.equal(world.suspended,true);assert.equal(world.initializingScene,false);assert.equal(n,0);
 fail=false;await world.draftPrepareAppearance();assert.equal(n,1);assert.equal(world.suspended,true);
});
