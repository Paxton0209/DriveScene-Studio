import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {prepareRoadLayout} from '../engine/road-layout-morph.js';
test('road roles are allocated once and shared templates remain safe across different roles',()=>{
 const root=new THREE.Group(),vegetation=new THREE.Group(),geometry=new THREE.BoxGeometry();root.add(vegetation);
 const mat={yellow:{},yellowPaint:{}},body=new THREE.Mesh(geometry),edge=new THREE.Mesh(geometry);body.userData.buildingOwned=true;edge.userData.roadEdge=true;root.add(body,edge);
 prepareRoadLayout(root,vegetation,mat);assert.notEqual(body.geometry,edge.geometry);assert.equal(body.geometry.attributes.roadLayoutRole.getX(0),1);assert.equal(edge.geometry.attributes.roadLayoutRole.getX(0),2);
 const attr=body.geometry.attributes.roadLayoutRole;prepareRoadLayout(root,vegetation,mat);assert.equal(body.geometry.attributes.roadLayoutRole,attr);
});
