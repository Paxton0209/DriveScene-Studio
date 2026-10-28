import*as THREE from'three';import{FBXLoader}from'three/addons/loaders/FBXLoader.js';import{readFile,writeFile,copyFile}from'node:fs/promises';import{gzipSync}from'node:zlib';
const manager=new THREE.LoadingManager();manager.addHandler(/.*/,{setPath(){return this;},load(){return new THREE.Texture();}});
for(const [type,id,length]of [['sedan','sedan',4.72],['suv','suv',4.85],['mpv','multivan',5.15]]){
 const b=await readFile('../work/sumonity-cars/models/import/'+id+'.fbx'),root=new FBXLoader(manager).parse(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');root.updateMatrixWorld(true);let box=new THREE.Box3().setFromObject(root),size=box.getSize(new THREE.Vector3());root.scale.multiplyScalar(length/size.z);root.updateMatrixWorld(true);box.setFromObject(root);const center=box.getCenter(new THREE.Vector3());root.position.sub(new THREE.Vector3(center.x,box.min.y,center.z));root.updateMatrixWorld(true);
 const parts=[];root.traverse(mesh=>{if(!mesh.isMesh)return;let g=mesh.geometry.clone();if(g.index)g=g.toNonIndexed();g.applyMatrix4(mesh.matrixWorld);const materials=Array.isArray(mesh.material)?mesh.material:[mesh.material],groups=g.groups.length?g.groups:[{start:0,count:g.attributes.position.count,materialIndex:0}];
  for(const group of groups){const m=materials[group.materialIndex],name=m.name,role=/glass/i.test(name)?'window':/wheel/i.test(name)?'rubber':'paint',attributes={};for(const key of ['position','normal'])attributes[key]=Array.from(g.attributes[key].array.slice(group.start*3,(group.start+group.count)*3));parts.push({name:mesh.name,role,attributes});}
 });
 const payload={source:'Comrade1280 / Generic passenger car pack',type,spec:{length},parts,triangles:parts.reduce((n,p)=>n+p.attributes.position.length/9,0)};await writeFile(`studio/engine/assets/generic-${type}.json.gz`,gzipSync(JSON.stringify(payload),{level:9}));console.log(type,payload.triangles);
}
await copyFile('../work/sumonity-cars/LICENSE.txt','studio/engine/assets/traffic-LICENSE.txt');
