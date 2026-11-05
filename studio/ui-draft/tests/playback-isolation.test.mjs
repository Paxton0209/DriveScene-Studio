import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';

const bridge=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
const tickSource=bridge.slice(bridge.indexOf(' function tick(now){'),bridge.indexOf('\n function capture(){'));

test('Leaving a selected parking bay never queries its route during Junction playback',()=>{
 const create=new Function('world','parking','current',`
  let frame=0,scenePreparing=false,playing=true,exporting=false,themeHeld=false;
  let originRoot=world.root,lastInput=0,last=1000,accumulator=0,lastPublish=1000,lastReplayReady=false;
  const document={hidden:false},traffic={audit:()=>({modelReady:false})};
  const visualMotion=()=>false,isParking=id=>['10','17'].includes(id);
  const frameStep=seconds=>({seconds,remaining:0});
  const step=()=>{},schedule=()=>{},publish=()=>{},sync=()=>{};
  ${tickSource}
  return tick;
 `);
 for(const [id,scene]of [['05','junction'],['08','junction'],['02','road'],['10','parking'],['17','outdoor']]){
  const world={root:{},state:{id}},parking={get(){queries++;return {replayReady:true}}};
  let queries=0;
  const tick=create(world,parking,()=>scene);
  for(let frame=1;frame<=120;frame++)tick(1000+frame*1000/60);
  assert.equal(queries,['10','17'].includes(id)?120:0,`${scene}/${id} read stale parking progress`);
 }
});

test('Built Junction sampler can submit every display frame while other camera throttles remain intact',async()=>{
 let load;
 isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
 const {contents}=await load({path:new URL('../../engine/world.js',import.meta.url).pathname});
 const start=contents.indexOf(' renderFrame(moving=false){');
 const prefix=contents.slice(start+' renderFrame(moving=false){'.length,contents.indexOf('this.environmentFinish.syncContacts();',start));
 let now=0;
 const draw=new Function('document','performance','moving',prefix+'return true;');
 const submit=function(clock,moving){return draw.call(this,{hidden:false},clock,moving)};
 for(const hz of [60,90,120]){
  const world={continuousDrive:{},draftJunctionPlaying:()=>true};
  for(let frame=0;frame<hz;frame++){
   now=frame*1000/hz;
   assert.equal(submit.call(world,{now:()=>now},true),true,`lost ${hz}Hz Junction frame ${frame}`);
  }
 }
 const other={continuousDrive:{},draftJunctionPlaying:()=>false};
 now=0;assert.equal(submit.call(other,{now:()=>now},true),true);
 now=16;assert.equal(submit.call(other,{now:()=>now},true),undefined);
 now=34;assert.equal(submit.call(other,{now:()=>now},true),true);
 other.suspended=true;now=60;assert.equal(submit.call(other,{now:()=>now},true),undefined);
});
