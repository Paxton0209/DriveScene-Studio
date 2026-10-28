import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {patchApp} from '../runtime-patches.mjs';

const source=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
const method=source.match(/async prepareDraftScene\(key,values\)\{[\s\S]*?\n \},/)[0];
function fixture(){
 const events=[],preferences=new Map([['parking',{id:'10'}]]);
 let resolve,reject;
 const pending=new Promise((a,b)=>{resolve=a;reject=b;});
 const world={root:{},initializingScene:false,continuousDrive:{rebind(){events.push('rebind');}},async prepareInitialScene(state){
  assert.equal(this.initializingScene,true);assert.equal(state.id,'16');assert.equal(state.trees,false);
  events.push('build');await pending;this.root={};events.push('built');
 }};
 const api=new Function('world','preferences','events','let selected;const environmentIds=["trees"],cancelDriveArming=()=>{},continuousDrive={reset(){}},versionFeatures={set(){}},trafficSystem={setEnabled(){}},state=()=>preferences.get(selected),render=()=>{if(world.initializingScene)throw Error("rendered partial scene");events.push("render");};return ({'+method+'});')(world,preferences,events);
 return {world,api,events,resolve,reject};
}

test('Scene preparation holds its initialization guard through async construction and renders once before rebinding',async()=>{
 const f=fixture(),pending=f.api.prepareDraftScene('parking',{camera:'raised',trees:false});
 assert.equal(f.world.initializingScene,true);assert.deepEqual(f.events,['build']);
 f.resolve();await pending;
 assert.equal(f.world.initializingScene,false);assert.deepEqual(f.events,['build','built','render','rebind']);
});

test('A failed scene build restores the guard without rendering or rebinding an incomplete root',async()=>{
 const f=fixture(),pending=f.api.prepareDraftScene('parking',{camera:'raised',trees:false});
 f.reject(Error('construction failed'));await assert.rejects(pending,/construction failed/);
 assert.equal(f.world.initializingScene,false);assert.deepEqual(f.events,['build']);
});

test('Layout choices use asynchronous construction and never draw a partial root',async()=>{
 const method=source.match(/async prepareDraftLayout\(value\)\{[\s\S]*?\n \},/)[0];
 for(const fail of [false,true]){
  const events=[],preferences=new Map([['ramp',{id:'06',cameraView:'high'}]]);let release,reject;
  const pending=new Promise((a,b)=>{release=a;reject=b});
  const world={root:{},initializingScene:false,continuousDrive:{rebind(){events.push('rebind')}},async prepareInitialScene(state){
   assert.equal(this.initializingScene,true);assert.deepEqual(state,{id:'07',cameraView:'high'});events.push('prepare');await pending;this.root={};
  }};
  const api=new Function('world','preferences','events',`const selected='ramp',state=()=>preferences.get(selected),render=()=>{assertReady();events.push('render')};function assertReady(){if(world.initializingScene)throw Error('partial layout')}return ({${method}})`)(world,preferences,events);
  const run=api.prepareDraftLayout('07');assert.deepEqual(events,['prepare']);
  if(fail){reject(Error('layout failed'));await assert.rejects(run,/layout failed/);assert.deepEqual(events,['prepare']);}
  else{release();await run;assert.deepEqual(events,['prepare','render','rebind']);}
  assert.equal(world.initializingScene,false);
 }
});
