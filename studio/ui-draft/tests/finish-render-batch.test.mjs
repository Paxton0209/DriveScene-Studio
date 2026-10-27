import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {indoorShadowLimits,indoorShadowValues} from '../indoor-shadow-settings.js';
import {indoorFinishValues} from '../indoor-finish-settings.js';
import {vehicleShadowPreset} from '../vehicle-shadow-settings.js';

const bridgeSource=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
const draftSource=await readFile(new URL('../draft.js',import.meta.url),'utf8');
function harness(){
 const world={carReflectionKey:'car',groundReflectionKey:'ground'},frames=[];
 const methods=bridgeSource.slice(bridgeSource.indexOf('roadShadow(value'),bridgeSource.indexOf('suspendIndicator(){'));
 const bridge=new Function('world','indoorShadowLimits','renderOnce',`return {${methods}}`)(world,indoorShadowLimits,()=>frames.push(structuredClone(world)));
 return {world,frames,bridge};
}

test('Finish setters preserve immediate redraws, clamping, returned values and reflection invalidation',()=>{
 const {bridge,world,frames}=harness();
 assert.deepEqual(bridge.roadShadow({ego:10,traffic:-1}),{ego:4,traffic:0});
 assert.equal(frames.length,1);
 assert.deepEqual(bridge.parkingFinish({traffic:1.05,reflectionGain:9,egoOpacity:-1}),{bay:1,column:1,traffic:1.05,reflectionGain:3,egoOpacity:0});
 assert.equal(frames.length,2);assert.equal(world.carReflectionKey,null);assert.equal(world.groundReflectionKey,null);
 world.carReflectionKey='car';world.groundReflectionKey='ground';
 bridge.parkingFinish({traffic:1.05,ground:NaN},{render:false});
 bridge.roadShadow({ego:2,traffic:Infinity},{render:false});
 assert.equal(frames.length,2);assert.equal(world.carReflectionKey,'car');assert.equal(world.groundReflectionKey,'ground');
 assert.deepEqual(world.draftRoadShadowStrength,{ego:2,traffic:0});
 assert.equal(world.draftParkingFinish.ground,undefined);
});

test('Grouped fixed finish updates draw once with both sets of uniforms and can defer to the theme frame',()=>{
 const body=draftSource.slice(draftSource.indexOf('function syncFinish('),draftSource.indexOf('function cameraChoices('));
 for(const scene of ['parking','outdoor','road'])for(const theme of ['light','dark']){
  const {bridge,world,frames}=harness();
  const sync=new Function('ready','project','finishTheme','bridge','vehicleShadowPreset','indoorShadowValues','indoorFinishValues',`${body};return syncFinish;`)(true,{active:scene},()=>theme,()=>bridge,vehicleShadowPreset,indoorShadowValues,indoorFinishValues);
  sync();assert.equal(frames.length,1);assert.deepEqual(frames[0],world);
  const expectedContact=indoorShadowValues(theme),parking=vehicleShadowPreset('parking',theme),light=theme==='light';
  const expected={...indoorFinishValues(theme),shadow:parking.environment,...(scene==='parking'?expectedContact:{egoShadow:parking.ego,trafficShadow:light?expectedContact.trafficShadow:parking.traffic,egoOpacity:1,trafficOpacity:light?expectedContact.trafficOpacity:1,egoWidth:1,egoLength:1,trafficWidth:light?expectedContact.trafficWidth:1,trafficLength:light?expectedContact.trafficLength:1})};
  for(const [key,value] of Object.entries(expected))assert.equal(world.draftParkingFinish[key].value,value,`${scene}/${theme}/${key}`);
  assert.deepEqual(world.draftRoadShadowStrength,vehicleShadowPreset('road',theme));
  const baseline=structuredClone(world);sync(theme,{render:false});
  assert.equal(frames.length,1);assert.deepEqual(world,baseline);
 }
});
