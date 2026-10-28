import * as THREE from 'three';

export function createOrganicTree(materials,variant,seed){
 const group=new THREE.Group();
 const shape=[[.88,1.50,.87],[.95,1.42,.90],[.84,1.55,.84],[1.02,1.36,.95]][variant];
 const trunkGeometry=new THREE.CylinderGeometry(.045,.105,2.15,7,7);
 const trunkPositions=trunkGeometry.attributes.position;
 const lean=(seed-.5)*.45;
 for(let vertex=0;vertex<trunkPositions.count;vertex++){
  const height=(trunkPositions.getY(vertex)+1.075)/2.15;
  trunkPositions.setX(vertex,trunkPositions.getX(vertex)+lean*height*height+.085*Math.sin(height*3.));
 }
 trunkGeometry.computeVertexNormals();
 const trunk=new THREE.Mesh(trunkGeometry,materials.trunk);trunk.position.y=1.075;group.add(trunk);
 for(const side of [-1,1]){
  const start=new THREE.Vector3(.055+lean*.3,1.05+(side+1)*.16,0);
  const end=new THREE.Vector3(side*.43+lean,1.95,side*.12);
  const direction=end.clone().sub(start);
  const branch=new THREE.Mesh(new THREE.CylinderGeometry(.022,.052,direction.length(),6),materials.trunk);
  branch.position.copy(start).add(end).multiplyScalar(.5);
  branch.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());group.add(branch);
 }
 const geometry=new THREE.SphereGeometry(1,20,16),positions=geometry.attributes.position;
 for(let vertex=0;vertex<positions.count;vertex++){
  const horizontal=positions.getX(vertex),height=positions.getY(vertex),depth=positions.getZ(vertex);
  const angle=Math.atan2(depth,horizontal),belt=Math.max(0,1-height*height);
  const lobes=1+.085*Math.sin(angle*3+height*4+seed*6)*belt+.045*Math.cos(angle*5-height*3)*belt;
  const taper=1-.22*Math.max(height,0)+.05*Math.sin(height*5+seed*3);
  positions.setXYZ(vertex,horizontal*lobes*taper+.10*Math.sin(height*3+seed*4)*belt,height+.03*Math.sin(angle*3)*belt,depth*lobes*taper);
 }
 geometry.computeVertexNormals();
 const crown=new THREE.Mesh(geometry,materials[variant%2?'leaf2':'leaf']);
 crown.scale.set(...shape);crown.position.set(lean*.6,2.48,0);crown.rotation.y=seed*Math.PI*2;group.add(crown);
 group.userData.treeShape={variant,crownMeshes:1,crownTriangles:geometry.index.count/3,style:'organic-lobed',branches:2};
 group.traverse(object=>{if(object.isMesh){object.castShadow=true;object.receiveShadow=true;}});
 return group;
}
