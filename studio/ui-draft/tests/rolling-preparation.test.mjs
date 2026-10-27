import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as THREE from 'three';
import {installRollingWheels as before} from './fixtures/rolling-wheel-before90.js';

const source=await readFile(new URL('../scene-experience.js',import.meta.url),'utf8');
const section=source.slice(source.indexOf('export function installRollingWheels'),source.indexOf('\n\nexport function createParkingMotion'));
const after=new Function('THREE',section.replace('export ','')+';return installRollingWheels;')(THREE);

function vehicle(){
 const car=new THREE.Group();car.position.set(4,.3,-2);car.rotation.y=.71;
 car.userData.vehicleSpec={wheels:[{min:[-.95,0,-1.8],max:[-.55,.7,-1.1]},{min:[.55,0,-1.8],max:[.95,.7,-1.1]},{min:[-.95,0,1.1],max:[-.55,.7,1.8]},{min:[.55,0,1.1],max:[.95,.7,1.8]}]};
 for(const [index,name] of ['body','front rim','glass','empty'].entries()){
  const positions=[];
  for(let i=0;i<1200;i++)positions.push(Math.sin(i*.73)*1.1,Math.cos(i*.23)*.5+.35,Math.sin(i*.17)*2);
  // Include x limits and radial threshold neighbours; the strict predicate must survive.
  positions.push(-.975,.35,-1.45,-.525,.35,-1.45,-.75,.35+.35*.86,-1.45,-.75,.35+.35*1.035,-1.45);
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  const a=new THREE.MeshStandardMaterial(),b=new THREE.MeshStandardMaterial();a.name=name;b.name='paint';
  const mesh=new THREE.Mesh(geometry,index%2?[a,b]:a);mesh.name=name;
  mesh.position.set(index*.017,index*.003,-index*.013);mesh.rotation.y=index*.09;car.add(mesh);
 }
 return car;
}

test('Prepared wheel attributes, affected count and shaders match the prior implementation exactly',()=>{
 const a=vehicle(),b=vehicle(),old=before(a),next=after(b);
 assert.ok(next.affected>0);assert.equal(next.affected,old.affected);
 a.children.forEach((mesh,i)=>{
  const other=b.children[i],axle=mesh.geometry.getAttribute('draftAxle'),actual=other.geometry.getAttribute('draftAxle');
  assert.deepEqual(actual?.array,axle?.array);
  assert.deepEqual(other.geometry.attributes.position.array,mesh.geometry.attributes.position.array);
  const mats=value=>Array.isArray(value)?value:[value];
  mats(mesh.material).forEach((material,j)=>{
   const candidate=mats(other.material)[j];assert.equal(candidate.customProgramCacheKey(),material.customProgramCacheKey());
   const shader=()=>({uniforms:{},vertexShader:'#include <beginnormal_vertex>\n#include <begin_vertex>'});
   const x=shader(),y=shader();material.onBeforeCompile(x);candidate.onBeforeCompile(y);
   assert.equal(y.vertexShader,x.vertexShader);assert.deepEqual(y.uniforms,x.uniforms);
  });
 });
 const geometries=b.children.map(mesh=>mesh.geometry),materials=b.children.map(mesh=>mesh.material);
 assert.equal(after(b),next);b.children.forEach((mesh,i)=>{assert.equal(mesh.geometry,geometries[i]);assert.equal(mesh.material,materials[i]);});
});

test('Models without wheel metadata remain untouched',()=>{
 const car=new THREE.Group(),mesh=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial());car.add(mesh);
 const geometry=mesh.geometry,material=mesh.material;assert.equal(after(car),null);assert.equal(mesh.geometry,geometry);assert.equal(mesh.material,material);
});
