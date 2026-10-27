import test from 'node:test';
import assert from 'node:assert/strict';
import {roadShadowStrength,roadTrafficShadowStrength,roadShadowSpread,syncRoadShadow} from '../road-shadow-settings.js';
import {vehicleShadowPreset} from '../vehicle-shadow-settings.js';

test('Road ego and traffic strengths remain independent without compounding and reset outside Road',()=>{
 const ego=roadShadowStrength,traffic=roadTrafficShadowStrength;
 assert.notEqual(ego,traffic);
 for(const setting of [{ego:4,traffic:0},{ego:0,traffic:2},{ego:1.07,traffic:.7}]){
  for(let i=0;i<120;i++)assert.deepEqual(syncRoadShadow('road',setting),setting);
  assert.equal(roadShadowStrength,ego);assert.equal(roadTrafficShadowStrength,traffic);
  assert.equal(ego.value,setting.ego);assert.equal(traffic.value,setting.traffic);
 }
 for(const scene of ['parking','outdoor'])assert.deepEqual(syncRoadShadow(scene,{ego:4,traffic:2}),{ego:1,traffic:1});
 assert.deepEqual(syncRoadShadow('road',Infinity),{ego:1,traffic:1});
 assert.deepEqual(syncRoadShadow('road',-1),{ego:0,traffic:0});
 assert.deepEqual(syncRoadShadow('road',5),{ego:4,traffic:2});
});

test('Approved screenshot values apply to every driving family without leaking into parking',()=>{
 for(const scene of ['road','elevated','ramp','junction'])for(const theme of ['light','dark']){
  const setting=vehicleShadowPreset('road',theme);
  assert.deepEqual(setting,theme==='light'?{ego:2,traffic:1.2}:{ego:2.54,traffic:1.36});
  assert.deepEqual(syncRoadShadow(scene,setting),setting);
  assert.deepEqual(roadShadowSpread.value,[1.1,1.075]);
 }
 const parking=vehicleShadowPreset('parking','dark');assert.deepEqual(parking,{ego:2.7,traffic:1.27,environment:1.07});
 parking.ego=0;assert.equal(vehicleShadowPreset('parking','dark').ego,2.7);
 for(const scene of ['parking','outdoor'])assert.deepEqual(syncRoadShadow(scene,parking),{ego:1,traffic:1});
});

test('Road ambient spread resets across scenes without resizing wheel contacts or accumulating',()=>{
 const spread=roadShadowSpread.value;
 for(let i=0;i<120;i++){syncRoadShadow('road',{ego:2.4,traffic:1.21});assert.equal(roadShadowSpread.value,spread);assert.deepEqual(spread,[1.1,1.075]);}
 for(const scene of ['parking','outdoor']){syncRoadShadow(scene);assert.deepEqual(spread,[1,1]);}
});
