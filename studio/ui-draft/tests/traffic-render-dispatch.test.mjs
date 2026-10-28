import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {patchApp} from '../runtime-patches.mjs';

const app=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
const trafficBody=app.slice(app.indexOf("if(key==='traffic'){"),app.indexOf("if(key==='path'||key==='weather')"));
const dispatch=new Function('world','trafficSystem','preview','key','value',trafficBody);

test('Managed Traffic changes delegate drawing and avoid a vertex audit in the input task',()=>{
 for(const managed of [false,true])for(const enabled of [false,true]){
  const calls=[],world={draftManaged:managed,renderFrame(){calls.push('draw')},audit(){calls.push('audit');return {}}};
  dispatch(world,{setEnabled(value){calls.push(value)}},{dataset:{}},'traffic',enabled);
  assert.deepEqual(calls,managed?[enabled]:[enabled,'draw','audit']);
 }
});

test('The bridge draws each Traffic change once, including paused parking and playing roads',async()=>{
 const source=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 const start=source.indexOf('async param(key,value,{sound=false}={}){')+'async param(key,value,{sound=false}={}){'.length;
 const body=source.slice(start,source.indexOf('},async scene(',start));
 for(const scene of ['parking','outdoor','road','elevated','ramp','junction'])for(const playing of [false,true])for(const enabled of [false,true]){
  const calls=[],world={state:{id:'02'},suspended:false,draftManaged:true,renderFrame(){calls.push('draw')},audit(){throw Error('input audit')}};
  const draw=()=>world.renderFrame(),api={param(key,value){dispatch(world,{setEnabled(v){calls.push(v)}},{dataset:{}},key,value)}};
  const run=new Function('world','api','current','isParking','renderOnce','seekJunction','publish','schedule',`let exporting=false,playing=${playing},lastInput=0,idlePaused=false,last=0,accumulator=0,junctionPoses=null,loopTime=0;return async function(key,value,{sound=false}={}){${body}}`)(world,api,()=>scene,()=>false,draw,draw,()=>{},()=>{});
  await run('traffic',enabled);
  assert.deepEqual(calls,[enabled,'draw'],`${scene}, playing=${playing}`);
  assert.equal(world.draftTrafficEnabled,enabled);assert.equal(world.suspended,false);
 }
});
