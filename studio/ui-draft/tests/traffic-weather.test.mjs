import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';

let load;
isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
const {contents}=await load({path:new URL('../../engine/traffic-vehicle.js',import.meta.url).pathname});
const source=contents
 .replace("from 'three'",`from '${import.meta.resolve('three')}'`)
 .replace("from '../ui-draft/traffic-reveal.js'",`from '${new URL('../traffic-reveal.js',import.meta.url).href}'`)
 .replace("from '../ui-draft/junction-traffic.js'",`from '${new URL('../junction-traffic.js',import.meta.url).href}'`)
 .replace("import {createTrafficVehicle,setTrafficAppearance,readyTrafficModel} from './traffic-model.js';",`
 function createTrafficVehicle(){const car=new THREE.Group();car.userData.physicalLength=5.2;return car;}
 function setTrafficAppearance(){}
 const readyTrafficModel=()=>Promise.resolve();`);
const {createTrafficSystem}=await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const factor=w=>1-.12*(w.overcast||0)-.22*(w.rain||0)-.38*(w.snow||0);
function fixture(id,weights){
 let time=1000;
 const car=new THREE.Group();car.position.set(1.85,.02,14);
 const world={scene:new THREE.Scene(),root:new THREE.Group(),car,state:{id,laneCount:6,mode:'light'},draftWeather:{weights}};
 const traffic=createTrafficSystem(world,{load:false,now:()=>time,random:()=>.5});
 traffic.update(false);
 return {world,traffic,tick(playing=true){time+=100;traffic.update(playing,16.8);}};
}
function assertWeatherEntry(slots,weights){
 for(const slot of slots.filter(s=>s.route)){
  assert.ok(Math.abs(slot.speed-slot.desiredSpeed*factor(weights))<1e-12,`${slot.id} starts at weather speed`);
  assert.ok(slot.desiredSpeed>=9,'desired speed remains the unscaled baseline');
 }
}

test('Initial traffic uses current weather exactly once in every driving layout',()=>{
 for(const id of ['02','03','06','07','05','08'])for(const weights of [{},{rain:1},{snow:1},{overcast:.2,rain:.3,snow:.5}]){
  const {traffic}=fixture(id,weights);
  assertWeatherEntry(traffic.draftCapture().slots,weights);
  traffic.setEnabled(false);traffic.setEnabled(true);
  assertWeatherEntry(traffic.draftCapture().slots,weights);
 }
});

test('Recycled traffic retains lane differences and enters at rain/snow speed',()=>{
 for(const id of ['02','03','06','07'])for(const weights of [{rain:1},{snow:1}]){
  const {traffic,tick}=fixture(id,weights);
  for(let i=0;i<100;i++)tick();
  const snapshot=traffic.draftCapture(),active=snapshot.slots.filter(s=>s.route);
  const speeds=new Set(active.map(s=>s.desiredSpeed));assert.ok(speeds.size>1);
  for(const slot of active){slot.cooldown=0;slot.car.position.z=66;}
  traffic.draftRestore(snapshot);tick();
  const recycled=traffic.draftCapture().slots.filter(s=>s.route);
  assert.ok(recycled.every(s=>s.spawns>=2));
  assertWeatherEntry(recycled,weights);
 }
});

test('Weather changes decelerate existing traffic smoothly while new entries use current weather',()=>{
 const {world,traffic,tick}=fixture('02',{});
 for(let i=0;i<100;i++)tick();
 const prior=traffic.draftCapture();world.draftWeather.weights={snow:1};tick();
 const next=traffic.draftCapture();
 for(let i=0;i<next.slots.length;i++){
  const a=prior.slots[i],b=next.slots[i];
  if(!b.route||a.spawns!==b.spawns||a.cooldown)continue;
  assert.ok(a.speed-b.speed>=-1e-12);
  assert.ok(a.speed-b.speed<=.22+1e-12,'existing traffic keeps bounded deceleration');
 }
 traffic.setEnabled(false);traffic.setEnabled(true);
 assertWeatherEntry(traffic.draftCapture().slots,{snow:1});
});
