import {releaseVehicleReflection} from './vehicle-library/three/model3-reflections.js';
// glTF meshes can share materials, geometry and textures within one vehicle.
export function disposeVehicle(root){
 const geometries=new Set(),materials=new Set(),textures=new Set();
 root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of (Array.isArray(o.material)?o.material:o.material?[o.material]:[])){materials.add(m);for(const value of Object.values(m))if(value?.isTexture)textures.add(value);}});
 for(const material of materials)if(material.envMap?.userData.vehicleOwners!==undefined)releaseVehicleReflection(material.envMap);
 for(const t of textures)if(t.userData.vehicleOwners===undefined)t.dispose();for(const m of materials)m.dispose();for(const g of geometries)g.dispose();
}
