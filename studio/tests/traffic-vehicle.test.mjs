import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createTrafficVehicle,setTrafficAppearance,readyTrafficModel,trafficPlan,createTrafficSystem} from '../engine/traffic-vehicle.js';
import {driveIconPoints,interpolateDriveIcon} from '../drive-icon.js';
import {readFile} from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
for(const type of ['sedan','suv'])await readyTrafficModel(await readFile(new URL(`../engine/assets/generic-${type}.json.gz`,import.meta.url)),type);
test('two independent opaque car assets retain grounded dimensions, normals and shared immutable geometry',()=>{
 const lengths={sedan:4.72,suv:4.85},sizes=[];
 for(const type of Object.keys(lengths)){
  const a=createTrafficVehicle(type),b=createTrafficVehicle(type),parts=a.children.filter(o=>!o.material.isShaderMaterial);a.updateMatrixWorld(true);const box=new THREE.Box3();
  for(const part of parts){box.union(new THREE.Box3().setFromObject(part));assert.equal(part.geometry.attributes.normal.count,part.geometry.attributes.position.count);assert.ok([...part.geometry.attributes.normal.array].every(Number.isFinite));assert.equal(part.material.transparent,false);assert.ok(part.material.transmission<=.05);assert.equal(part.material.emissiveIntensity,1);assert.equal(part.material.emissive.getHex(),0);}
  assert.ok(Math.abs(box.max.z-box.min.z-lengths[type])<.03);assert.ok(box.min.y>=-.001);assert.ok(parts.length>=4&&parts.length<=5);assert.equal(a.children[0].geometry,b.children[0].geometry);assert.notEqual(a.children[0].material,b.children[0].material);assert.ok(a.userData.triangles<a.userData.originalTriangles*.90);sizes.push(box.getSize(new THREE.Vector3()));
  setTrafficAppearance(a,false);const light=a.children[0].material.color.clone();setTrafficAppearance(a,true);assert.ok(a.children[0].material.color.r<light.r);
 }
 assert.ok(sizes[1].y>sizes[0].y+.2);
});
test('routes fit narrow roads, divided elevated roads and the actual T-junction branches',()=>{
 assert.ok(trafficPlan({id:'09',laneCount:2}).every(route=>Math.abs(route.x)<=1.85));assert.ok(trafficPlan({id:'03'}).some(route=>route.x< -9));assert.ok(trafficPlan({id:'08'}).every(route=>route.axis==='x'));assert.deepEqual(trafficPlan({id:'10'}),[]);
});
test('traffic pauses in place, moves relative to ego, respects its toggle and reuses its pool across scenes',()=>{
 let time=0;const world={scene:new THREE.Scene(),root:new THREE.Group(),car:new THREE.Group(),state:{id:'02',laneCount:6}};world.car.position.x=1.85;
 const traffic=createTrafficSystem(world,{now:()=>time,load:false,random:()=>.5});traffic.update(false);for(let i=0;i<60;i++){time+=100;traffic.update(true,16.8);}const before=traffic.audit().positions;
 time=10000;traffic.update(false);assert.deepEqual(traffic.audit().positions,before);time+=100;traffic.update(true,16.8);assert.notDeepEqual(traffic.audit().positions,before);
 const pool=traffic.group.children.slice();world.state.id='03';traffic.update(false);for(let i=0;i<60;i++){time+=100;traffic.update(true,16.8);}assert.deepEqual(traffic.group.children,pool);assert.ok(traffic.audit().positions.every(p=>p[1]===8.52));traffic.setEnabled(false);assert.equal(traffic.audit().count,0);world.state.id='10';traffic.setEnabled(true);traffic.update(false);assert.equal(traffic.audit().count,0);
});
test('play and pause use matching finite point topology that can retarget from the current shape',()=>{
 const play=driveIconPoints(false),pause=driveIconPoints(true),half=interpolateDriveIcon(play,pause,.5);assert.equal(play.length,pause.length);assert.ok(half.every(Number.isFinite));assert.deepEqual(interpolateDriveIcon(half,play,0),half);assert.deepEqual(interpolateDriveIcon(half,play,1),play);
});

test('removed-lane cars disappear while surviving cars never slide sideways',()=>{
 let time=1;const world={scene:new THREE.Scene(),root:new THREE.Group(),car:new THREE.Group(),state:{id:'02',laneCount:6}};world.car.position.x=1.85;
 const traffic=createTrafficSystem(world,{now:()=>time,load:false,random:()=>.5});traffic.update();for(let i=0;i<60;i++){time+=100;traffic.update(true,16.8);}const before=traffic.audit().lanes;
 world.layoutTransition={kind:'lanes',target:{id:'02',laneCount:2}};world.layoutVisual={width:7.4};time+=100;traffic.update();
 world.state.laneCount=2;world.layoutTransition=null;for(let i=0;i<60;i++){time+=100;traffic.update(true,16.8);}
 const after=traffic.audit().lanes;assert.equal(after.length,3);assert.ok(after.every(lane=>Math.abs(lane.x)<=1.85));for(const lane of after){const old=before.find(old=>old.id===lane.id);if(old)assert.equal(lane.x,old.x);}
});
test('traffic re-enters both directions from outside the view at a constant relative velocity',()=>{
 let time=1;const world={scene:new THREE.Scene(),root:new THREE.Group(),car:new THREE.Group(),state:{id:'02',laneCount:6}};world.car.position.x=1.85;
 const traffic=createTrafficSystem(world,{now:()=>time,load:false,random:()=>.5});traffic.update();traffic.setEnabled(false);for(const car of traffic.group.children)car.position.z=-300;traffic.setEnabled(true);
 for(let i=0;i<19;i++){time+=100;traffic.update(true,16.8);}
 const cars=traffic.audit().positions;assert.ok(cars.some(p=>p[0]>0&&p[2]<12&&p[2]>-60));assert.ok(cars.some(p=>p[0]<0&&p[2]>-60));
 const right=()=>traffic.audit().positions.find(p=>Math.abs(p[0]-5.55)<.01)[2];const first=right();time+=100;traffic.update(true,16.8);const second=right();time+=100;traffic.update(true,16.8);assert.ok(Math.abs((right()-second)-(second-first))<1e-6);
});

test('long running randomized traffic cannot cross ego, and respawn velocities and intervals vary',()=>{
 let time=1,seed=17;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const world={scene:new THREE.Scene(),root:new THREE.Group(),car:new THREE.Group(),state:{id:'02',laneCount:2}};world.car.position.x=1.85;
 const traffic=createTrafficSystem(world,{now:()=>time,load:false,random}),speeds=new Set();traffic.update();
 for(let i=0;i<6000;i++){time+=100;traffic.update(true,16.8);const a=traffic.audit();for(let n=0;n<a.positions.length;n++){const p=a.positions[n];if(Math.abs(p[0]-1.85)<1.7)assert.ok(p[2]<=-13);speeds.add(a.lanes[n].speed.toFixed(2));}}
 assert.ok(traffic.audit().spawnSerial>12);assert.ok(speeds.size>8);
});

test('long elevated traffic keeps separate same-direction vehicles at least ten metres apart',()=>{
 let time=1,seed=9;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const world={scene:new THREE.Scene(),root:new THREE.Group(),car:new THREE.Group(),state:{id:'03'}};
 const traffic=createTrafficSystem(world,{now:()=>time,load:false,random});traffic.update();
 for(let i=0;i<3000;i++){time+=100;traffic.update(true,16.8);const a=traffic.audit();for(let j=0;j<a.lanes.length;j++)for(let k=j+1;k<a.lanes.length;k++)if(a.lanes[j].x===a.lanes[k].x&&a.lanes[j].direction===a.lanes[k].direction)assert.ok(Math.abs(a.positions[j][2]-a.positions[k][2])>=9.999);}
});

test('each model retains a closed opaque core after simplification and rounded asset serialization',async()=>{
 for(const type of ['sedan','suv']){
  const data=JSON.parse(gunzipSync(await readFile(new URL(`../engine/assets/generic-${type}.json.gz`,import.meta.url))));
  const core=data.parts.find(p=>p.name==='sealed-body-core');assert.ok(core);
  const p=core.attributes.position,edges=new Map();let volume=0;
  const key=i=>p.slice(i,i+3).join(',');
  for(let i=0;i<p.length;i+=9){const v=[key(i),key(i+3),key(i+6)];if(new Set(v).size<3)continue;
   const a=new THREE.Vector3().fromArray(p,i),b=new THREE.Vector3().fromArray(p,i+3),c=new THREE.Vector3().fromArray(p,i+6);volume+=a.dot(b.cross(c))/6;
   for(let j=0;j<3;j++){const edge=[v[j],v[(j+1)%3]].sort().join('|');edges.set(edge,(edges.get(edge)||0)+1);}
  }
  assert.ok([...edges.values()].every(count=>count===2),type+' core has a boundary or non-manifold edge');assert.ok(volume>1);
  const car=createTrafficVehicle(type),sealed=car.children.find(c=>c.name==='sealed-body-core');assert.equal(sealed.material.transmission,0);assert.equal(sealed.material.transparent,false);
 }
});
