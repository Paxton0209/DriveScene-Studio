// Parking-only data must not block the default driving module. Keep the
// original Float32 payload and await it before a parked vehicle can appear.
export function createParkingNormalData(load){
 let data,pending;
 return {get data(){return data},prepare(){return pending??=Promise.resolve().then(load).then(module=>data=module.default).catch(error=>{pending=null;throw error})}};
}
const normalData=createParkingNormalData(()=>import('./parking-material-normals.json'));
export const prepareParkingMaterialStructure=()=>normalData.prepare();
const filtered=new WeakMap();
export function parkingMaterialStructure(THREE,car,tone){
 for(const child of car.children){
  const role=child.material?.userData?.trafficRole;if(role!=='paint')continue;
  if(!child.parkingMaterialOriginal)child.parkingMaterialOriginal=child.geometry;
  const original=child.parkingMaterialOriginal;
  if(tone>=.5){child.geometry=original;continue;}
  let geometry=filtered.get(original);
  if(!geometry){
   const normals=normalData.data?.[role];if(!normals)throw Error('Parking materials are not prepared');if(normals.length!==original.getAttribute('normal').array.length)throw Error('Parking material normal count changed');
   geometry=new THREE.BufferGeometry();for(const [key,value]of Object.entries(original.attributes))geometry.setAttribute(key,value);
   geometry.setIndex(original.index);geometry.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));
   geometry.boundingBox=original.boundingBox;geometry.boundingSphere=original.boundingSphere;filtered.set(original,geometry);
  }
  child.geometry=geometry;
 }
}
