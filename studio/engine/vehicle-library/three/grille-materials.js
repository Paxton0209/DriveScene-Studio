import * as THREE from 'three';
import {createModel3Reflections} from './model3-reflections.js';

export function finishGrille(material,role){
 material.color.set(role==='grille-frame'?'#a2aab3':role==='grille-slat'?'#7a8590':role==='grille-pattern'?'#78838f':'#454e59');
 material.metalness=role==='grille-frame'?.8:role==='grille-slat'?.65:role==='grille-pattern'?.35:.15;
 material.roughness=role==='grille-frame'?.25:.3;
 material.envMap=createModel3Reflections();material.envMapIntensity=role==='grille-panel'?.5:.8;
 material.emissive.set(0);material.transparent=false;material.opacity=1;material.depthWrite=true;
 material.userData.surfaceRole=role;material.needsUpdate=true;return material;
}

export function isolateGrille(mesh,contains,role){
 const source=mesh.geometry,position=source.getAttribute('position'),indices=source.index;
 const count=indices?indices.count:position.count,regular=[],grille=[],point=new THREE.Vector3();
 for(let offset=0;offset<count;offset+=3){
  const triangle=[0,1,2].map(corner=>indices?indices.getX(offset+corner):offset+corner);
  const selected=triangle.every(vertex=>contains(point.fromBufferAttribute(position,vertex).applyMatrix4(mesh.matrixWorld)));
  (selected?grille:regular).push(...triangle);
 }
 if(!grille.length)return false;
 const original=mesh.material,material=original.clone();
 material.map=null;material.metalnessMap=null;material.roughnessMap=null;
 finishGrille(material,role);material.name='Graphite grille';
 mesh.geometry=source.clone();mesh.geometry.setIndex([...regular,...grille]);mesh.geometry.clearGroups();
 if(regular.length)mesh.geometry.addGroup(0,regular.length,0);
 mesh.geometry.addGroup(regular.length,grille.length,1);mesh.material=[original,material];return true;
}

export function prepareFrontGrilles(model,id){
 model.updateMatrixWorld(true);
 model.traverse(mesh=>{
  if(!mesh.isMesh||Array.isArray(mesh.material))return;
  if(id==='x6'&&mesh.name==='Object_5')isolateGrille(mesh,point=>point.z< -2.1&&point.y>.28&&point.y<1.03,'grille-slat');
  if(id==='ix'&&['Object_26','Object_32'].includes(mesh.name))isolateGrille(mesh,point=>point.z< -2.3&&point.y>.48&&point.y<1.1&&Math.abs(point.x)<.7,mesh.name==='Object_26'?'grille-panel':'grille-pattern');
 });
}
