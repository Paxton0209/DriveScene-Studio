export function vehicleBytes(root){
 const buffers=new Set(),textures=new Set();let bytes=0;
 root.traverse(node=>{
  if(node.geometry){for(const attribute of [...Object.values(node.geometry.attributes),node.geometry.index]){const buffer=(attribute?.data?.array||attribute?.array)?.buffer;if(buffer&&!buffers.has(buffer)){buffers.add(buffer);bytes+=buffer.byteLength;}}}
  for(const material of Array.isArray(node.material)?node.material:node.material?[node.material]:[])for(const value of Object.values(material)){
   if(!value?.isTexture||textures.has(value))continue;textures.add(value);const image=value.source?.data||value.image;
   bytes+=image?.data?.byteLength||((image?.width||0)*(image?.height||0)*4*(value.generateMipmaps?4/3:1));
  }
 });return Math.ceil(bytes);
}

export function createVehicleCache({load,dispose,maxEntries=4,maxBytes=128*1024*1024,estimate=vehicleBytes}){
 const entries=new Map(),pending=new Map(),pins=new Map();let active;
 const total=()=>[...entries.values()].reduce((sum,entry)=>sum+entry.bytes,0);
 function touch(id){const entry=entries.get(id);if(entry){entries.delete(id);entries.set(id,entry);}return entry;}
 function trim(protectedId){
  while(entries.size>maxEntries||total()>maxBytes){const victim=[...entries.keys()].find(id=>id!==active&&id!==protectedId&&!pins.has(id));if(victim===undefined)break;const entry=entries.get(victim);entries.delete(victim);dispose(entry.root);}
 }
 return {
  peek(id){return entries.get(id)?.root;},
  retain(id){pins.set(id,(pins.get(id)||0)+1);let released=false;return()=>{if(released)return;released=true;const count=pins.get(id)-1;if(count)pins.set(id,count);else pins.delete(id);trim();};},
  async get(id){
   const cached=touch(id);if(cached)return cached.root;
   if(pending.has(id))return pending.get(id);
   const request=Promise.resolve().then(()=>load(id)).then(root=>{entries.set(id,{root,bytes:estimate(root)});trim(id);return root;}).finally(()=>pending.delete(id));
   pending.set(id,request);return request;
  },
  activate(id){if(!entries.has(id))throw Error('Vehicle is not prepared');active=id;touch(id);trim(id);},
  invalidate(id){if(id===active)return;const entry=entries.get(id);if(entry){entries.delete(id);dispose(entry.root);}},
  stats(){return {active,models:[...entries.keys()],estimatedBytes:total(),maxBytes,maxEntries,pending:[...pending.keys()]};}
 };
}
