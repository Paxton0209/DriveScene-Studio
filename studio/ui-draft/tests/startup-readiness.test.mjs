import test from 'node:test';
import assert from 'node:assert/strict';
import {prepareStartupChoices,startupChoices,decodeStartupControls} from '../startup-readiness.js';
import {createProject} from '../artboards.js';

function fixture(){
 const models=['model-3','x6','ix','xc90'],cars=Object.fromEntries(models.map(id=>[id,{id}])),events=[];
 let selected='initial',pins=0;
 const world={car:cars['model-3'],initializingScene:false,suspended:false,continuousDrive:{rebind(){events.push('rebind')}},
  async prepareInitialScene(){events.push('scene:'+selected)},setVehicle(car){this.car=car},update(){},
  async draftPrepareAppearance(){events.push('appearance:'+selected+':'+this.car.id)},async draftPrepareAppearances(cars){for(const car of cars)events.push('appearance:'+selected+':'+car.id)},renderPreparedFrame(){events.push('restored-frame')}};
 const options={world,models,cache:{retain(){pins++;return()=>pins--},get:async id=>cars[id],stats:()=>({models})},prepareVehicle:async car=>events.push('model:'+car.id),choices:startupChoices(createProject().boards),select(choice){selected=choice.key+':'+choice.params.layout+':'+choice.params.lanes},state:()=>({selected}),restore(){selected='initial'}};
 return {options,events,get pins(){return pins}};
}
test('Completion waits for an unselected model, all ten scene geometries and all forty appearances',async()=>{
 const f=fixture();let release,done=false;const get=f.options.cache.get;
 f.options.cache.get=id=>id==='xc90'?new Promise(resolve=>release=()=>resolve({id})):get(id);
 const pending=prepareStartupChoices(f.options).then(()=>done=true);
 await Promise.resolve();assert.equal(done,false);assert.equal(f.options.world.draftStartupReadiness.ready,false);assert.equal(f.pins,4);
 release();await pending;
 const audit=f.options.world.draftStartupReadiness;
 assert.equal(audit.ready,true);assert.equal(audit.models.length,4);assert.equal(audit.scenes.length,10);assert.equal(audit.appearances,40);
 assert.equal(f.options.world.car.id,'model-3');assert.equal(f.options.world.initializingScene,false);assert.equal(f.options.world.suspended,false);assert.equal(f.pins,0);
 assert.deepEqual(f.events.slice(-3),['appearance:initial:model-3','restored-frame','rebind']);
});
test('An alternative asset failure cannot publish startup completion and restores the initial scene',async()=>{
 const f=fixture();f.options.cache.get=async id=>{if(id==='ix')throw Error('BMW iX download failed');return {id}};
 await assert.rejects(prepareStartupChoices(f.options),/BMW iX/);
 assert.equal(f.options.world.draftStartupReadiness.ready,false);assert.equal(f.options.world.car.id,'model-3');assert.equal(f.pins,0);assert.equal(f.options.world.initializingScene,false);
});
test('The UI completion gate waits for every thumbnail decode and for fonts',async()=>{
 let release,fontsRelease,complete=false;
 const root={querySelectorAll:()=>[{naturalWidth:72,decode:()=>new Promise(resolve=>release=resolve)},{naturalWidth:72,decode:async()=>{}}],fonts:{ready:new Promise(resolve=>fontsRelease=resolve)}};
 const pending=decodeStartupControls(root).then(()=>complete=true);
 await Promise.resolve();assert.equal(complete,false);release();await Promise.resolve();assert.equal(complete,false);fontsRelease();await pending;assert.equal(complete,true);
});
