import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';

async function prepare(){
 let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
 const {contents}=await load({path:new URL('../../engine/road-layout-morph.js',import.meta.url).pathname});
 const source=contents.replace("from 'three'",`from '${import.meta.resolve('three')}'`);
 return (await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`)).prepareRoadLayout;
}

test('Each cached lane root gets a building morph attribute from the shared geometry template',async()=>{
 const prepareRoadLayout=await prepare(),template=new THREE.BoxGeometry(13,18,11),mat={};
 for(const lanes of [6,2,4,6,4,2]){
  const root=new THREE.Group(),vegetation=new THREE.Group(),building=new THREE.Mesh(template.clone());
  building.userData.buildingOwned=true;building.position.x=lanes*3.7/2+14.5;root.add(building);
  prepareRoadLayout(root,vegetation,mat);
  assert.equal(building.geometry.getAttribute('roadLayoutRole')?.getX(0),1);
  assert.equal(building.geometry.getAttribute('roadLayoutRole')?.count,building.geometry.attributes.position.count);
  assert.equal(template.userData.roadLayoutRole,undefined,'preparation contaminated the shared template');
 }
});

test('A cached geometry marker without its GPU attribute is repaired before rendering',async()=>{
 const prepareRoadLayout=await prepare(),root=new THREE.Group(),vegetation=new THREE.Group();
 const building=new THREE.Mesh(new THREE.BoxGeometry());building.userData.buildingOwned=true;
 building.geometry.userData.roadLayoutRole=1;root.add(building);prepareRoadLayout(root,vegetation,{});
 assert.equal(building.geometry.getAttribute('roadLayoutRole').getX(0),1);
 const attribute=building.geometry.getAttribute('roadLayoutRole');prepareRoadLayout(root,vegetation,{});
 assert.equal(building.geometry.getAttribute('roadLayoutRole'),attribute,'prepared geometry should stay stable');
});
