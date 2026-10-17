import * as THREE from 'three';
import {DecalGeometry} from 'three/addons/geometries/DecalGeometry.js';

export function neutralizePlate(material){
 material.color.set('#30343a');material.map=null;material.normalMap=null;material.bumpMap=null;material.aoMap=null;material.emissiveMap=null;material.metalnessMap=null;material.roughnessMap=null;material.vertexColors=false;material.emissive?.set(0);material.metalness=0;material.roughness=.82;material.transparent=false;material.opacity=1;material.depthWrite=true;material.alphaTest=0;material.userData.surfaceRole='plate';material.needsUpdate=true;return material;
}

export function addModel3Plate(model){
 const body=model.getObjectByName('Object_11');if(!body?.isMesh||model.getObjectByName('Neutral rear plate'))return;
 model.updateMatrixWorld(true);
 const geometry=new DecalGeometry(body,new THREE.Vector3(0,.735,2.258),new THREE.Euler(-.273,0,0),new THREE.Vector3(.46,.145,.05));
 if(!geometry.attributes.position.count){geometry.dispose();return;}
 geometry.applyMatrix4(model.matrixWorld.clone().invert());
 const material=neutralizePlate(new THREE.MeshStandardMaterial());material.polygonOffset=true;material.polygonOffsetFactor=-2;material.polygonOffsetUnits=-4;
 const plate=new THREE.Mesh(geometry,material);plate.name='Neutral rear plate';plate.receiveShadow=true;model.add(plate);
}
