import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';

async function driver(){
 let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
 const {contents}=await load({path:new URL('../../engine/continuous-driving.js',import.meta.url).pathname});
 return (await import(`data:text/javascript;base64,${Buffer.from(contents).toString('base64')}`)).createContinuousDriving;
}
function scenery(lanes){
 const root=new THREE.Group(),vegetation=new THREE.Group(),lawns=[];
 root.add(vegetation);
 for(const side of [-1,1]){
  const front=lanes*3.7/2+8,x=side*(front+6.5);
  for(const [offset,width]of [[-2.795,7.41],[3.705,5.59]]){
   const g=new THREE.BoxGeometry(width,12,11);g.computeBoundingBox();
   const b=new THREE.Mesh(g);b.position.set(x+offset,6,-9);
   b.userData={buildingOwned:true,environmentKey:JSON.stringify(['building',x,-9,13,11,12,1]),growthBaseY:6,growthHeight:12};root.add(b);
  }
  const lawn=new THREE.Mesh(new THREE.PlaneGeometry(6,16));lawn.position.set(side*(lanes*3.7/2+5),.025,-9);lawn.userData.environmentKey=JSON.stringify(['lawn',6,16,lawn.position.x,-9]);root.add(lawn);lawns.push(lawn);
  const tree=new THREE.Group();tree.position.set(side*(lanes*3.7/2+4.5),0,-5.48);vegetation.add(tree);
 }
 return {root,vegetation,lawns};
}
function use(world,cache,lanes){Object.assign(world,cache);world.state={id:lanes===2?'09':'02',laneCount:lanes};}

test('Recycled building facades stay flush with the lawn on both sides over 10km',async()=>{
 const world={draftManaged:true};use(world,scenery(4),4);
 let seed=3;const random=()=>((seed=Math.imul(seed,1664525)+1013904223>>>0)/2**32);
 const drive=(await driver())(world,{random});
 for(let i=0;i<6000;i++){
  drive.advance(.1);
  for(const b of world.root.children.filter(o=>o.userData.buildingOwned)){
   const half=Math.max(Math.abs(b.geometry.boundingBox.min.x),Math.abs(b.geometry.boundingBox.max.x))*b.scale.x;
   assert.ok(Math.abs(b.position.x)-half>=4*3.7/2+8-1e-6,'building crossed the lawn boundary');
  }
 }
 assert.ok(drive.audit().distance>10000);
 assert.ok(drive.audit().recycled>50);
});

test('Lane rebind preserves moving poses without Traffic and keeps each cached lawn registry bounded',async()=>{
 const world={draftManaged:true},caches=new Map([2,4,6].map(n=>[n,scenery(n)]));use(world,caches.get(4),4);
 const drive=(await driver())(world,{random:()=>.9});
 for(let i=0;i<350;i++)drive.advance(.1);
 for(const lanes of [6,2,4,2,6,4,6,2,4]){
  const before=world.root.children.filter(o=>o.userData.buildingOwned).map(o=>({z:o.position.z,y:o.position.y,s:o.scale.toArray()}));
  const distance=drive.audit().distance;
  use(world,caches.get(lanes),lanes);drive.rebind();
  assert.equal(drive.audit().distance,distance,'traffic-disabled lane edit reset travel');
  const after=world.root.children.filter(o=>o.userData.buildingOwned);
  after.forEach((o,i)=>{assert.equal(o.position.z,before[i].z);assert.equal(o.position.y,before[i].y);assert.deepEqual(o.scale.toArray(),before[i].s)});
  for(const c of caches.values())assert.equal(c.lawns.length,c===caches.get(lanes)?4:2,'outgoing lawn clones leaked into cache');
  assert.equal(drive.audit().pooledObjects,16);
 }
});

test('Reflection and shadow invalidation follows every advancing pose',async()=>{
 const world={draftManaged:true};use(world,scenery(4),4);const drive=(await driver())(world);
 drive.advance(1/120);const stamp=world.drivingFrame;
 drive.advance(1/120);assert.ok(world.drivingFrame>stamp);
 const saved=drive.draftCapture();drive.advance(1/120);drive.draftRestore(saved);
 assert.equal(world.drivingFrame,saved.distance);
});

test('Recycled tree copies keep the same lane-aware shadow shader as their canopy',async()=>{
 const world={draftManaged:true};use(world,scenery(4),4);
 const depth=new THREE.MeshDepthMaterial(),distance=new THREE.MeshDistanceMaterial();
 for(const tree of world.vegetation.children){
  const branch=new THREE.Group(),canopy=new THREE.Mesh(new THREE.SphereGeometry());
  canopy.name='test-canopy';canopy.castShadow=true;canopy.customDepthMaterial=depth;canopy.customDistanceMaterial=distance;
  branch.add(canopy);tree.add(branch);
 }
 const drive=(await driver())(world);drive.advance(1/120);
 const canopies=world.root.getObjectsByProperty('name','test-canopy');
 assert.equal(canopies.length,4,'both original trees and their pooled copies must be checked');
 for(const canopy of canopies){assert.equal(canopy.customDepthMaterial,depth);assert.equal(canopy.customDistanceMaterial,distance);}
});

test('Parking and junction rebind never clone driving scenery into the distance',async()=>{
 const world={draftManaged:true};use(world,scenery(4),4);const drive=(await driver())(world);drive.advance(.1);
 for(const id of ['17','10','05','08','17']){
  Object.assign(world,scenery(4));world.state={id,laneCount:4};drive.rebind();
  assert.equal(world.vegetation.children.length,2);assert.equal(world.lawns.length,2);
  assert.equal(drive.audit().clonedObjects,0);assert.equal(drive.audit().distance,0);
 }
});

test('Recycled buildings and trees fade in without changing shared materials',async()=>{
 const world={draftManaged:true};use(world,scenery(4),4);
 const shared=new THREE.MeshBasicMaterial();shared.onBeforeCompile=()=>{};shared.customProgramCacheKey=()=> 'scenery-test';
 for(const building of world.root.children.filter(o=>o.userData.buildingOwned))building.material=shared;
 for(const tree of world.vegetation.children)tree.add(new THREE.Mesh(new THREE.BoxGeometry(),shared));
 const drive=(await driver())(world,{random:()=>.5});
 let buildingFade=false,treeFade=false;
 for(let i=0;i<500&&!(buildingFade&&treeFade);i++){
  drive.advance(.1);
  world.root.traverse(object=>{
   if(!object.isMesh||object.material===shared)return;
   if(object.material.transparent&&object.material.opacity>0&&object.material.opacity<1){
    assert.equal(object.material.onBeforeCompile,shared.onBeforeCompile);assert.equal(object.material.customProgramCacheKey(),shared.customProgramCacheKey());
    if(object.userData.buildingOwned)buildingFade=true;
    if(object.parent?.parent===world.vegetation)treeFade=true;
   }
  });
  assert.equal(shared.opacity,1);
 }
 assert.ok(buildingFade,'buildings should fade after recycling');
 assert.ok(treeFade,'trees should fade after recycling');
 drive.reset();assert.equal(shared.opacity,1);
});

test('Scenery recycling reuses warmed fade materials across multiple loops',async()=>{
 const world={draftManaged:true};use(world,scenery(4),4);const material=new THREE.MeshBasicMaterial();let allocations=0;const clone=material.clone.bind(material);material.clone=()=>{allocations++;return clone()};
 for(const building of world.root.children.filter(o=>o.userData.buildingOwned))building.material=material;
 const drive=(await driver())(world,{random:()=>.5});for(let i=0;i<400;i++)drive.advance(.1);const warmed=allocations;
 for(let i=0;i<800;i++)drive.advance(.1);assert.ok(warmed>0);assert.equal(allocations,warmed,'no material allocation or shader disposal on later scenery loops');
 drive.reset();assert.equal(material.opacity,1);
});
