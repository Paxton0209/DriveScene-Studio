import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {patchApp} from '../runtime-patches.mjs';

test('Theme commits while view transitions have suspended iframe animation callbacks',async()=>{
 const source=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
 const body=source.match(/async theme\(value\)\{([^\n]+)\},/)[1];
 let renders=0;
 const commit=new Function('render','requestAnimationFrame',`let mode='light',requestedTheme='light';return async function(value){${body}}`)(animate=>{assert.equal(animate,false);renders++},()=>{throw Error('Frame callbacks are suspended during capture')});
 await commit('dark');await commit('light');assert.equal(renders,2);
});

test('Canvas and controls use one prepared target snapshot during the circular theme reveal',async()=>{
 const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
 const theme=source.slice(source.indexOf('async function setTheme('),source.indexOf("$('theme').addEventListener"));
 assert.match(theme,/document.startViewTransition\(\(\)=>commit\(target,false\)\)/);
 const css=await readFile(new URL('../inspector.css',import.meta.url),'utf8');
 assert.doesNotMatch(css,/view-transition-name:live-scene/);
});

test('Theme changes retain the sampled Junction pose before the first visible frame',async()=>{
 const source=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 const body=source.match(/async theme\(value,\{animate=false\}=\{\}\)\{([^\n]+)\},/)[1];
 for(const scene of ['junction','road','parking'])for(const elapsed of [0,1.8,3.5])for(const animate of [false,true]){
  const expected={carZ:38-elapsed*10,cameraY:8.5+elapsed*6};
  const world={suspended:false,draftThemeTone:{value:0},pose:{...expected}};
  const frames=[],snapshots=[],prepared=[];let samples=0;
  world.draftPrepareAppearance=async()=>{assert.equal(world.suspended,true);prepared.push({...world.pose})};
  const theme=new Function('world','api','current','seekJunction','appearance','appearanceSnapshot','renderOnce','publish','schedule',`return async function(value,{animate=false}={}){${body}}`)(
   world,{async theme(){assert.equal(world.suspended,true);world.pose={carZ:38,cameraY:8.5}}},()=>scene,
   ()=>{assert.equal(world.suspended,true);samples++;world.pose={...expected}},
   {finish(){},start(from,to){snapshots.push(to)}},w=>({...w.pose}),
   ()=>{assert.equal(world.suspended,false);frames.push({...world.pose})},()=>{},()=>{}
  );
  await theme('dark',{animate});
  const retained=scene==='junction'?expected:{carZ:38,cameraY:8.5};
  assert.deepEqual(prepared,[retained]);assert.deepEqual(frames,[retained]);assert.equal(samples,scene==='junction'?1:0);
  if(animate)assert.deepEqual(snapshots,[retained]);
  assert.equal(world.draftThemeTone.value,1);
 }
});

test('Junction replay reuses the prepared route after an appearance update',async()=>{
 const source=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 const body=source.match(/ replay\(\)\{([^\n]+)\},/)[1];
 let elapsed=3.5;const preparedRoute={duration:3500};let sampledRoute=null;
 const replay=new Function('route','world','current','isParking','traffic','parking','stopIndicatorSound','settle','seek','restartJunctionPath','publish','schedule',`let junctionPoses=route,loopTime=3.5,audioHeld=false;const seekJunction=()=>seek(junctionPoses,loopTime);return function(){${body}}`)(
  preparedRoute,{state:{id:'08'},suspended:false,draftTrafficEnabled:true},()=> 'junction',()=>false,
  {setEnabled(){}},{},()=>{},()=>{},(route,time)=>{sampledRoute=route;elapsed=time},()=>{},()=>{},()=>{}
 );
 replay();assert.equal(sampledRoute,preparedRoute);assert.equal(elapsed,0);
});
