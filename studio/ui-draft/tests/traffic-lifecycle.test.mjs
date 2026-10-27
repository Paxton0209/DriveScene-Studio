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
function fixture(id='02',weights={}){
 let time=1000;
 const car=new THREE.Group();car.position.set(1.85,.02,14);
 const world={scene:new THREE.Scene(),root:new THREE.Group(),car,renderer:{shadowMap:{needsUpdate:false}},state:{id,laneCount:6,mode:'light'},draftWeather:{weights},renderFrame(){}};
 const traffic=runtime.createTrafficSystem(world,{now:()=>time,random:()=>.5});
 return {world,traffic,tick(){time+=100;traffic.update(true,16.8)}};
}

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
