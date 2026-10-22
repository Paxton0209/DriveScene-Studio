import test from 'node:test';
import assert from 'node:assert/strict';
import {Group,Mesh,MeshBasicMaterial,PlaneGeometry} from 'three';
import {installRampPassage,advanceRampPassage} from '../ramp-passage.js';
import {RAMP_SPEED} from '../road-mark-motion.js';

function fixture(id){
 const root=new Group(),roadMaterial=new MeshBasicMaterial(),whitePaint=new MeshBasicMaterial();
 const world={root,mat:{whitePaint},drivingDistance:0,
  road(offset,width,near,far,height){const mesh=new Mesh(new PlaneGeometry(width,near-far),roadMaterial);mesh.position.set(offset,height+.015,(near+far)/2);root.add(mesh)},
  line(offset,near,far){const mesh=new Mesh(new PlaneGeometry(.93,near-far+.8),whitePaint);mesh.position.set(offset,.028,(near+far)/2);mesh.rotation.x=-Math.PI/2;root.add(mesh)}
 };
 const branch=new Mesh(new PlaneGeometry(20,330),roadMaterial);branch.geometry.type='BufferGeometry';root.add(branch);
 world.line(-3.45,70,-260);const leftEdge=root.children.at(-1);
 world.line(1.85,70,-260);const dash=root.children.at(-1);dash.userData.laneDash=true;
 world.line(8,0,-30);world.line(12,-30,-60);
 installRampPassage(world,id,7.4,0,34);
 return {root,branch,leftEdge,dash,payload:root.getObjectByName('ramp-passage'),edges:root.getObjectByName('ramp-mainline-edge')};
}

test('A passed ramp leaves a continuous main road and does not translate ordinary lane dashes',()=>{
 for(const id of ['06','07']){
  const {root,branch,leftEdge,dash,payload,edges}=fixture(id);
  assert.equal(branch.parent,payload);assert.equal(leftEdge.parent,root);assert.equal(dash.parent,root);
  assert.ok(payload.getObjectByName('ramp-passage-paint'));
  advanceRampPassage(root,10*RAMP_SPEED);
  assert.equal(payload.visible,false);assert.equal(dash.position.z,-95);
  const visibleEdges=edges.children.filter(mesh=>mesh.visible);
  assert.equal(visibleEdges.length,1);assert.equal(visibleEdges[0].position.z,-95);assert.equal(visibleEdges[0].scale.y,1);
 }
});

test('Ramp passages reuse their meshes and return to the same placement after 25 seconds',()=>{
 for(const id of ['06','07']){
  const {root,payload,edges}=fixture(id),meshes=[];
  root.traverse(object=>meshes.push(object.uuid));
  for(let frame=0;frame<=7500;frame++)advanceRampPassage(root,frame*RAMP_SPEED/30);
  assert.ok(Math.abs(payload.position.z)<1e-9);assert.equal(payload.visible,true);
  const after=[];root.traverse(object=>after.push(object.uuid));assert.deepEqual(after,meshes);
  advanceRampPassage(root,20*RAMP_SPEED);assert.ok(payload.position.z<0);
  assert.equal(edges.children.filter(mesh=>mesh.visible).length,2);
  advanceRampPassage(root,0);assert.equal(payload.position.z,0);
 }
});
