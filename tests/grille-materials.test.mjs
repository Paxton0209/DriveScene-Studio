import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {isolateGrille,finishGrille} from '../vehicle-library/three/grille-materials.js';
import {prepareVehicleMaterials} from '../vehicle-library/three/vehicle-materials.js';
import {disposeVehicle} from '../dispose-vehicle.js';

test('front grille partitions preserve vertices, normals and unrelated materials',()=>{
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute([-.3,.6,-2.4,.3,.6,-2.4,0,.9,-2.4,-.3,.6,2.4,.3,.6,2.4,0,.9,2.4],3));geometry.setIndex([0,1,2,3,4,5]);geometry.computeVertexNormals();
 const original=new THREE.MeshStandardMaterial({color:'#222222',map:new THREE.Texture()}),mesh=new THREE.Mesh(geometry,original);
 const positions=geometry.attributes.position.array.slice(),normals=geometry.attributes.normal.array.slice();mesh.updateMatrixWorld(true);
 assert.equal(isolateGrille(mesh,point=>point.z< -2,'grille-slat'),true);
 assert.equal(mesh.material[0],original);assert.equal(original.color.getHexString(),'222222');assert.ok(original.map);
 assert.equal(mesh.material[1].map,null);assert.deepEqual(mesh.geometry.attributes.position.array,positions);assert.deepEqual(mesh.geometry.attributes.normal.array,normals);
 assert.deepEqual([...mesh.geometry.index.array],[3,4,5,0,1,2]);assert.equal(mesh.material[1].transparent,false);disposeVehicle(mesh);
});

test('grille reflections share the existing environment and release every owner',()=>{
 const root=new THREE.Group(),slat=finishGrille(new THREE.MeshStandardMaterial(),'grille-slat'),frame=finishGrille(new THREE.MeshStandardMaterial(),'grille-frame');
 assert.equal(slat.envMap,frame.envMap);assert.notEqual(slat.color.getHex(),frame.color.getHex());assert.ok(slat.roughness>0&&slat.roughness<.5);
 root.add(new THREE.Mesh(new THREE.BoxGeometry(),slat),new THREE.Mesh(new THREE.BoxGeometry(),frame));let disposed=0;slat.envMap.addEventListener('dispose',()=>disposed++);disposeVehicle(root);assert.equal(disposed,1);
});

test('XC90 only assigns grille finishes to the identified slats, frame and diagonal',()=>{
 const root=new THREE.Group();
 const names=['desirefxme_048_Material_#2125664765_0','desirefxme_069_Material_#2125664755_0','desirefxme_007_Material_#2125664755_0','desirefxme_053_Material_#2125664765_0','desirefxme_070_Material_#2125664756_0'];
 for(const name of names){const material=new THREE.MeshStandardMaterial();material.name='Material_2125664754';const mesh=new THREE.Mesh(new THREE.BoxGeometry(),material);mesh.name=name;root.add(mesh);}
 prepareVehicleMaterials(root,'xc90',4.95);
 assert.deepEqual(root.children.map(mesh=>mesh.material.userData.surfaceRole),['grille-slat','grille-frame','grille-frame','chrome','trim']);
 assert.ok(root.children[0].material.envMap);assert.equal(root.children[3].material.envMap,null);assert.equal(root.children[4].material.color.getHexString(),'292d33');disposeVehicle(root);
});
