import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildParkingReference} from '../parking-reference.js';
import {buildOutdoorParking} from '../outdoor-parking.js';
import {parkingBaySize,parkingBayRows} from '../parking-layout.js';

function world(){
 const root=new THREE.Group(),vegetation=new THREE.Group();root.add(vegetation);
 return {root,vegetation,lawns:[],palette:'current',state:{mode:'light'},sky:{material:{uniforms:{bottom:{value:new THREE.Color('#dddddd')}}}},
  box(width,height,depth,x,y,z){const mesh=new THREE.Mesh(new THREE.BoxGeometry(width,height,depth),new THREE.MeshStandardMaterial());mesh.position.set(x,y,z);root.add(mesh);return mesh;},
  plane(width,depth,x,z,y){const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,depth),new THREE.MeshStandardMaterial());mesh.position.set(x,y,z);root.add(mesh);return mesh;},
  building(){},tree(){vegetation.add(new THREE.Object3D());}
 };
}

test('indoor and outdoor bays share exact physical dimensions, pitch and aisle edges',()=>{
 const indoor=world(),outdoor=world();buildParkingReference(indoor,'10');buildOutdoorParking(outdoor);
 assert.deepEqual(outdoor.parkingBays,indoor.parkingBays);assert.equal(outdoor.parkingBays.length,parkingBayRows.length*2);
 for(const bay of outdoor.parkingBays){assert.equal(bay.width,4.9);assert.equal(bay.depth,2.8);assert.ok(Math.abs(Math.abs(bay.x)+bay.width/2-8.35)<1e-9);}
 assert.ok(Math.abs(parkingBaySize.centerX-parkingBaySize.length/2-3.45)<1e-9);
 for(let index=1;index<parkingBayRows.length;index++)assert.ok(Math.abs(parkingBayRows[index-1]-parkingBayRows[index]-3.6)<1e-9);
});
