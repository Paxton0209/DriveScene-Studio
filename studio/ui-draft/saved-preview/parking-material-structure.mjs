import normalData from './parking-material-normals.json';
const filtered=new WeakMap();
export function parkingMaterialStructure(THREE,car,tone){
 for(const child of car.children){
  const role=child.material?.userData?.trafficRole;if(role!=='paint')continue;
  if(!child.parkingMaterialOriginal)child.parkingMaterialOriginal=child.geometry;
  const original=child.parkingMaterialOriginal;
  if(tone>=.5){child.geometry=original;continue;}
  let geometry=filtered.get(original);
  if(!geometry){
   const normals=normalData[role];if(normals.length!==original.getAttribute('normal').array.length)throw Error('Parking material normal count changed');
   geometry=new THREE.BufferGeometry();for(const [key,value]of Object.entries(original.attributes))geometry.setAttribute(key,value);
   geometry.setIndex(original.index);geometry.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));
   geometry.boundingBox=original.boundingBox;geometry.boundingSphere=original.boundingSphere;filtered.set(original,geometry);
  }
  child.geometry=geometry;
 }
}
