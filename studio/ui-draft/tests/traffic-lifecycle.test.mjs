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
 export const records=[];
 export let geometryDisposals=0;
 const geometry=new THREE.BoxGeometry();geometry.addEventListener('dispose',()=>geometryDisposals++);
 function createTrafficVehicle(){
  const car=new THREE.Group(),material=new THREE.MeshStandardMaterial();
  const record={car,material,disposals:0};records.push(record);
  material.addEventListener('dispose',()=>record.disposals++);
  car.userData={physicalLength:5.2,trafficType:'model-y'};
  car.add(new THREE.Mesh(geometry,material));return car;
 }
 function setTrafficAppearance(car,dark,opacity){
  car.children[0].material.color.set(dark?'#777777':'#aaaaaa');
  car.children[0].material.opacity=opacity;car.userData.trafficOpacity=opacity;
 }
 const readyTrafficModel=()=>Promise.resolve();`);
const runtime=await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
function fixture(id='02',weights={},random=()=>.5,laneCount=6){
 let time=1000;
 const car=new THREE.Group();car.position.set(1.85,.02,14);
 const world={scene:new THREE.Scene(),root:new THREE.Group(),car,renderer:{shadowMap:{needsUpdate:false}},state:{id,laneCount,mode:'light'},draftWeather:{weights},renderFrame(){}};
 const traffic=runtime.createTrafficSystem(world,{now:()=>time,random});
 return {world,traffic,tick(){time+=100;traffic.update(true,16.8)}};
}

function seeded(seed){return ()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296)}
function poses(traffic){return traffic.draftCapture().slots.filter(s=>s.route&&s.target).map(s=>({x:s.car.position.x,z:s.car.position.z,direction:s.route.direction,egoLane:s.route.egoLane,axis:s.route.axis}));}

test('Road entries vary on enable and scene return, retain lanes and 32m safety gaps, and remain stable while paused',async()=>{
 for(const id of ['02','03','06','07'])for(const lanes of [2,4,6]){
  const {world,traffic}=fixture(id,{},seeded(110),lanes);await traffic.ready;traffic.update(false);
  let previous=poses(traffic);
  for(let i=0;i<30;i++){
   if(i%2){world.state.id=id==='02'?'06':'02';world.root=new THREE.Group();traffic.update(false);world.state.id=id;world.root=new THREE.Group();traffic.update(false)}
   else{traffic.setEnabled(false);traffic.setEnabled(true);traffic.update(false)}
   const current=poses(traffic);assert.notDeepEqual(current,previous,'entry advances the random stream');
   for(const slot of current){
    assert.equal(slot.x,previous[current.indexOf(slot)].x,'random placement never crosses a lane');
    assert.ok(world.car.position.z-slot.z>=(slot.egoLane?32:28),'every initial lane keeps its longitudinal clearance from ego');
    for(const other of current)if(other!==slot&&other.x===slot.x&&other.direction===slot.direction)assert.ok(Math.abs(other.z-slot.z)>=32-1e-9);
   }
   world.state.mode=i%2?'dark':'light';world.state.cameraView=i%2?'high':'low';traffic.update(false);
   assert.deepEqual(poses(traffic),current,'theme/camera/paused frames do not reroll traffic');previous=current;
  }
 }
});

test('Junction entries vary inside legal approach corridors with ego clearance and unchanged cross-street lanes',async()=>{
 for(const id of ['05','08']){
  const {world,traffic}=fixture(id,{},seeded(37));await traffic.ready;traffic.update(false);let previous=poses(traffic);
  const routes=traffic.draftCapture().slots.filter(s=>s.route).map(s=>s.route);
  for(let i=0;i<15;i++){
   traffic.setEnabled(false);traffic.setEnabled(true);traffic.update(false);const current=poses(traffic);
   assert.notDeepEqual(current,previous);
   current.forEach((p,n)=>{const route=routes[n],axis=route.axis==='x'?'x':'z',offset=(route[axis]-p[axis])*route.direction;if(axis==='x'||route.direction>0)assert.ok(offset>=0&&offset<=24);else{assert.ok(p.z>=-19.36-1e-9,'approach stays behind the stop line');assert.ok(world.car.position.z-p.z>=28,'approach never initially appears beside ego');}assert.equal(p[axis==='x'?'z':'x'],route[axis==='x'?'z':'x']);});previous=current;
  }
 }
});

test('Extreme entry samples keep every driving lane away from ego and preserve approach stop lines',async()=>{
 for(const id of ['02','03','06','07'])for(const sample of [0,.01,.25,.5,.75,.99,1]){
  const {world,traffic}=fixture(id,{},()=>sample);await traffic.ready;traffic.update(false);
  for(const p of poses(traffic))assert.ok(world.car.position.z-p.z>=(p.egoLane?32:28)-1e-9,`${id} sample ${sample}: ${p.z}`);
 }
 for(const id of ['05','08']){
  const {world,traffic}=fixture(id,{},seeded(1));world.car.position.z=-19;await traffic.ready;traffic.update(false);
  for(const p of poses(traffic))if(p.axis!=='x'&&p.direction<0)assert.ok(p.z>world.car.position.z+40,'late approach entry waits beyond the rear camera instead of appearing alongside ego');
 }
});

test('An explicit random seed reproduces the same entry sequence',async()=>{
 const a=fixture('02',{},seeded(29)),b=fixture('02',{},seeded(29));await Promise.all([a.traffic.ready,b.traffic.ready]);
 for(let i=0;i<10;i++){for(const {traffic}of [a,b]){traffic.update(false);traffic.setEnabled(false);traffic.setEnabled(true);traffic.update(false)}assert.deepEqual(poses(a.traffic),poses(b.traffic));}
});

test('First model load releases each owned placeholder material once and retains shared geometry',async()=>{
 const start=runtime.records.length,{traffic}=fixture();
 const placeholders=runtime.records.slice(start);
 assert.equal(placeholders.length,10);
 await traffic.ready;
 assert.equal(runtime.records.length-start,20);
 assert.ok(placeholders.every(record=>record.disposals===1));
 assert.ok(runtime.records.slice(start+10).every(record=>record.disposals===0));
 assert.equal(runtime.geometryDisposals,0);
});

test('Repeated road recycling retains pool meshes/materials and applies current theme and weather',async()=>{
 for(const id of ['02','03','06','07'])for(const weights of [{},{rain:1},{snow:1}]){
  const {world,traffic,tick}=fixture(id,weights);await traffic.ready;traffic.update(false);
  const start=runtime.records.length,owned=runtime.records.slice(start-10);
  const meshes=traffic.group.children.map(car=>car.children[0]);
  for(let n=0;n<20;n++){
   const snapshot=traffic.draftCapture(),active=snapshot.slots.filter(slot=>slot.route);
   const spawns=active.map(slot=>slot.spawns);
   for(const slot of active){slot.cooldown=0;slot.delay=false;slot.car.position.z=66;}
   traffic.draftRestore(snapshot);tick();
   const next=traffic.draftCapture().slots.filter(slot=>slot.route);
   assert.ok(next.every((slot,i)=>slot.spawns===spawns[i]+1));
   for(const slot of next){
    const factor=1-.22*(weights.rain||0)-.38*(weights.snow||0);
    assert.ok(Math.abs(slot.speed-slot.desiredSpeed*factor)<1e-12);
   }
   assert.equal(runtime.records.length,start,'recycling allocates no new model/material');
   assert.deepEqual(traffic.group.children.map(car=>car.children[0]),meshes);
   assert.ok(owned.every(record=>record.disposals===0));
  }
  world.state.mode='dark';
  const snapshot=traffic.draftCapture();
  for(const slot of snapshot.slots)if(slot.route){slot.cooldown=0;slot.car.position.z=slot.route.z;}
  traffic.draftRestore(snapshot);traffic.update(false);
  for(const slot of traffic.draftCapture().slots.filter(slot=>slot.route)){
   assert.equal(slot.car.children[0].material.color.getHexString(),'777777');
  }
  traffic.setEnabled(false);traffic.setEnabled(true);world.root=new THREE.Group();traffic.update(false);
  assert.equal(runtime.records.length,start,'enable and scene return also retain the pool');
  assert.equal(runtime.geometryDisposals,0);
 }
});

test('Road, Elevated, Ramp and Junction grow through paused frames and hide immediately when disabled mid-entry',async()=>{
 for(const id of ['02','03','06','05']){
  let time=1000;
  const car=new THREE.Group();car.position.set(1.85,.02,14);
  const world={scene:new THREE.Scene(),root:new THREE.Group(),car,renderer:{shadowMap:{needsUpdate:false}},state:{id,laneCount:6,mode:'light'},renderFrame(){}};
  const traffic=runtime.createTrafficSystem(world,{enabled:false,now:()=>time,random:()=>.5});await traffic.ready;traffic.update(false);
  world.draftInitialFrameReady=true;traffic.setEnabled(true);traffic.update(false);
  const active=traffic.group.children.filter(c=>c.visible),positions=active.map(c=>c.position.toArray());
  assert.ok(active.length>0);assert.ok(active.every(c=>c.scale.y===1&&c.children[0].position.y<0));assert.equal(traffic.animating(),true);
  assert.ok(active.every(c=>c.userData.trafficOpacity===0));
  time+=120;traffic.update(false);assert.ok(active.every(c=>c.userData.trafficOpacity>0&&c.userData.trafficOpacity<1));const intermediate=active[0].children[0].position.y;assert.ok(intermediate<0&&intermediate>-.5);assert.ok(active.every(c=>c.scale.y===1));
  assert.deepEqual(active.map(c=>c.position.toArray()),positions,'paused reveal preserves physical route poses while the intact model rises');
  const meshes=traffic.group.children.slice();traffic.setEnabled(false);assert.equal(traffic.group.visible,false);assert.equal(traffic.animating(),false);
  traffic.update(false);assert.equal(traffic.group.visible,false,'no descending exit frame');
  traffic.setEnabled(true);traffic.update(false);assert.ok(active.every(c=>c.scale.y===1&&c.children[0].position.y<0));
  assert.deepEqual(traffic.group.children,meshes,'re-enabling reuses the existing car pool');
  time+=1200;traffic.update(false);assert.ok(active.every(c=>c.scale.y===1&&c.children[0].position.y===0));assert.equal(traffic.animating(),false);assert.ok(active.every(c=>c.userData.trafficOpacity===1));
  const snapshot=traffic.draftCapture(),slot=snapshot.slots.find(s=>s.route&&s.car.visible);slot.alpha=.4;slot.target=.4;traffic.draftRestore(snapshot);traffic.update(false);assert.equal(slot.car.userData.trafficOpacity,.4,'entry endpoint preserves existing lane opacity');
  traffic.setEnabled(false);assert.equal(traffic.group.visible,false);assert.equal(traffic.animating(),false);
 }
});
