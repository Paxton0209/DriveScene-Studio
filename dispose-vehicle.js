// glTF meshes can share materials, geometry and textures within one vehicle.
export function disposeVehicle(root){
 const geometries=new Set(),materials=new Set(),textures=new Set();
 root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of (Array.isArray(o.material)?o.material:o.material?[o.material]:[])){materials.add(m);for(const value of Object.values(m))if(value?.isTexture)textures.add(value);}});
 for(const t of textures)t.dispose();for(const m of materials)m.dispose();for(const g of geometries)g.dispose();
}
