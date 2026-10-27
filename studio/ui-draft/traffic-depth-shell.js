import * as THREE from 'three';
// Resolve the nearest exterior surface before blending the vehicle. Applying
// alpha independently to every panel exposes far wheels/interior/back faces.
// The depth-only shell shares each mesh transform and never writes a colour.
export function vehicleShell(object){
 const shells=[];
 object.traverse(mesh=>{if(!mesh.isMesh||mesh.userData.trafficShadow||mesh.userData.draftOcclusionDepth)return;shells.push(mesh);});
 return shells.map(mesh=>{
  let shell=mesh.children.find(o=>o.userData.draftOcclusionDepth);
  if(!shell){const source=Array.isArray(mesh.material)?mesh.material:[mesh.material];const materials=source.map(m=>new THREE.MeshBasicMaterial({side:m.side,colorWrite:false,depthWrite:true,depthTest:true,clippingPlanes:m.clippingPlanes,clipShadows:true}));shell=new THREE.Mesh(mesh.geometry,Array.isArray(mesh.material)?materials:materials[0]);shell.name='Traffic exterior depth';shell.userData.draftOcclusionDepth=true;shell.renderOrder=7.5;shell.castShadow=false;shell.receiveShadow=false;mesh.add(shell);}
  const materials=Array.isArray(shell.material)?shell.material:[shell.material],sources=Array.isArray(mesh.material)?mesh.material:[mesh.material];
  materials.forEach((material,i)=>{const source=sources[i];if(source?.clippingPlanes){material.clippingPlanes=source.clippingPlanes;if(Number.isInteger(source.userData.draftTrafficClipIndex))material.userData.draftTrafficClipIndex=source.userData.draftTrafficClipIndex;}});
  return shell;
 });
}
