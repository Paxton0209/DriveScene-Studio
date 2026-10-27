import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
const source=await readFile(new URL('../scene-experience.js',import.meta.url),'utf8');
const body=source.slice(source.indexOf(' function meshRibbon(mesh,points){'),source.indexOf('\n function ribbon(){'));
const update=new Function('THREE',`${body};return meshRibbon`)(THREE);
// Frozen pre-optimization route construction, including the white-cap join.
function reference(points){
 const vertices=[],uv=[],indices=[],lengths=[0];
 for(let i=1;i<points.length;i++)lengths.push(lengths[i-1]+points[i].distanceTo(points[i-1]));
 const total=Math.max(.00001,lengths.at(-1));
 for(let i=0;i<points.length;i++){
  const p=points[i],t=points[Math.min(i+1,points.length-1)].clone().sub(points[Math.max(0,i-1)]).normalize(),side=new THREE.Vector3(t.z,0,-t.x).multiplyScalar(.5);
  vertices.push(...p.clone().add(side).toArray(),...p.clone().sub(side).toArray());uv.push(0,lengths[i]/total,1,lengths[i]/total);
  if(i<points.length-1){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}
 }
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeBoundingSphere();return geometry;
}
function curve(count,phase){return Array.from({length:count},(_,i)=>new THREE.Vector3(Math.sin(i*.13+phase)*5.9,.036+i%2*.003,Math.cos(i*.07+phase)*12));}
test('Route buffers preserve exact rendered vertices, UV, index and culling bounds through changing/degenerate paths',()=>{
 const mesh=new THREE.Mesh(new THREE.BufferGeometry());
 for(const count of [74,74,2,3,74,49,49,2])for(const phase of [0,.5,2,4]){
  const points=curve(count,phase);if(phase===4)points.fill(points[0]);
  const before=reference(points);update(mesh,points);
  for(const key of ['position','uv'])assert.deepEqual(mesh.geometry.getAttribute(key).array,before.getAttribute(key).array);
  assert.deepEqual(mesh.geometry.index.array,before.index.array);assert.deepEqual(mesh.geometry.boundingSphere,before.boundingSphere);before.dispose();
 }
});
test('A full moving route retains GPU geometry and attributes until topology changes',()=>{
 const mesh=new THREE.Mesh(new THREE.BufferGeometry());update(mesh,curve(74,0));
 const geometry=mesh.geometry,position=geometry.getAttribute('position'),uv=geometry.getAttribute('uv'),index=geometry.index;let disposals=0;
 geometry.addEventListener('dispose',()=>disposals++);
 for(let i=1;i<=900;i++)update(mesh,curve(74,i/60));
 assert.equal(mesh.geometry,geometry);assert.equal(mesh.geometry.getAttribute('position'),position);assert.equal(mesh.geometry.getAttribute('uv'),uv);assert.equal(mesh.geometry.index,index);assert.equal(disposals,0);
 update(mesh,curve(35,1));assert.equal(disposals,1);assert.notEqual(mesh.geometry,geometry);assert.equal(mesh.geometry.getAttribute('position').count,70);
});
