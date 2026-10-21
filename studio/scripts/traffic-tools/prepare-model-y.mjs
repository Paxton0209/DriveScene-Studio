import{mergeVertices}from'../../node_modules/three/examples/jsm/utils/BufferGeometryUtils.js';
import{ConvexGeometry}from'../../node_modules/three/examples/jsm/geometries/ConvexGeometry.js';
import{readFile}from'node:fs/promises';import{createHash}from'node:crypto';
import{NodeIO}from'@gltf-transform/core';import{dequantize}from'@gltf-transform/functions';import{MeshoptSimplifier}from'meshoptimizer';import * as T from '../../node_modules/three/build/three.module.js';import{writeFile}from'node:fs/promises';import{gzipSync}from'node:zlib';
await MeshoptSimplifier.ready;const source=process.argv[2];if(!source)throw Error('Pass the extracted Model Y source.glb path');const bytes=await readFile(source);if(createHash('sha256').update(bytes).digest('hex')!=='dd60df30cf39410c4ec4f6591b4cbf7dc62817186c948279f4dc5c99e143a55f')throw Error('Unexpected Model Y source asset');const doc=await new NodeIO().read(source);await doc.transform(dequantize());
const keep=new Set([21,32,47,53,1,2,3,4,5,7,8,9,14,15,16,17,23,30,35,36,37,38,39,40,41,42,43,44,49,50,51,59,63,64,65,66,67,68,69,70,71,72,73,74,75,76,78,80,81,82,84,89,90,91,92,93,94,95,96,97,98,99,100]);
const rims=new Set([21,32,47,53]);
const windows=new Set([1,3,9,16,71,99,100]),tires=new Set([23,30,44,51]),trim=new Set([2,4,8,14,15,17,35,36,49,50,59]);
const components=[];
const groups=new Map(),grillePoints=[],wheelBounds=new Map();let original=0,retained=0;const scale=4.75/(2.5472757557547254+2.2272435139915103),cx=(2.5472757557547254-2.2272435139915103)/2,cz=(1.1022477330180183-1.0377860600343778)/2;
for(const node of doc.getRoot().listNodes()){
 const id=Number(node.getName().match(/me_(\d+)_/)?.[1]);if(!node.getMesh()||!keep.has(id))continue;
 for(const p of node.getMesh().listPrimitives()){
  const a=p.getAttribute('POSITION'),n=p.getAttribute('NORMAL'),idx=p.getIndices()?.getArray()||Uint32Array.from({length:a.getCount()},(_,i)=>i),m=new T.Matrix4().fromArray(node.getWorldMatrix()),nm=new T.Matrix3().getNormalMatrix(m);let pos=[],nor=[];
  for(let i=0;i<a.getCount();i++){const v=new T.Vector3().fromArray(a.getArray(),i*3).applyMatrix4(m),nn=new T.Vector3().fromArray(n.getArray(),i*3).applyMatrix3(nm).normalize();pos.push((v.z-cz)*scale,(v.y+.0118269)*scale,-(v.x-cx)*scale);nor.push(nn.z,nn.y,-nn.x);}
  if(id===2)for(let i=0;i<pos.length;i+=3){const v=new T.Vector3().fromArray(pos,i);if(v.z< -2.04&&v.y>.20&&v.y<.56&&Math.abs(v.x)<.76){v.z-=.004;grillePoints.push(v);}}
  original+=idx.length/3;
  if(id===35||id===36){for(let i=0;i<pos.length;i+=3)grillePoints.push(new T.Vector3().fromArray(pos,i));continue;}
  if(tires.has(id)){if(!wheelBounds.has(id))wheelBounds.set(id,new T.Box3());for(let i=0;i<pos.length;i+=3)wheelBounds.get(id).expandByPoint(new T.Vector3().fromArray(pos,i));continue;}
  let result=idx;
  // Exterior body and glazing retain every source triangle and original normal.
  // Only high-density tire tread is reduced, independently per primitive.
  if(tires.has(id)||rims.has(id)){
   const map=new Map(),pp=[],nn=[],ii=[];
   for(let i=0;i<pos.length/3;i++){const key=pos.slice(i*3,i*3+3).map(v=>v.toFixed(5)).join(',');let j=map.get(key);if(j===undefined){j=pp.length/3;map.set(key,j);pp.push(...pos.slice(i*3,i*3+3));nn.push(...nor.slice(i*3,i*3+3));}ii.push(j);}
   const remapped=Uint32Array.from(idx,i=>ii[i]);const gg=new T.BufferGeometry();gg.setAttribute('position',new T.Float32BufferAttribute(pp,3));gg.setIndex(Array.from(remapped));gg.computeVertexNormals();nn.length=0;for(const v of gg.attributes.normal.array)nn.push(v);[result]=MeshoptSimplifier.simplifyWithAttributes(remapped,new Float32Array(pp),3,new Float32Array(nn),3,[.05,.05,.05],null,tires.has(id)?6000:4500,.001,['LockBorder']);pos=pp;nor=nn;
  }
  const role=rims.has(id)?'rim':tires.has(id)?'rubber':windows.has(id)?'window':trim.has(id)?'trim':'paint';
  if(!groups.has(role))groups.set(role,{name:role,role,attributes:{position:[],normal:[]},indices:[]});const g=groups.get(role),map=new Map();
  for(const i of result){let j=map.get(i);if(j===undefined){j=g.attributes.position.length/3;map.set(i,j);g.attributes.position.push(...pos.slice(i*3,i*3+3));g.attributes.normal.push(...nor.slice(i*3,i*3+3));}g.indices.push(j);}components.push({node:id,role,triangles:result.length/3,sourceTriangles:idx.length/3});retained+=result.length/3;
 }
}
function appendGeometry(name,role,geometry){const g=groups.get(role)||{name,role,attributes:{position:[],normal:[]},indices:[]};groups.set(role,g);const offset=g.attributes.position.length/3;for(const key of ['position','normal'])for(const value of geometry.attributes[key].array)g.attributes[key].push(value);for(const i of geometry.index?.array||Array.from({length:geometry.attributes.position.count},(_,i)=>i))g.indices.push(offset+i);}
// Replace open grille slats with one closed convex surface using its source outline.
for(const points of [grillePoints]){const fascia=new ConvexGeometry(points);fascia.deleteAttribute('normal');const smoothFascia=mergeVertices(fascia,.00001);smoothFascia.computeVertexNormals();appendGeometry('paint','paint',smoothFascia);}
// Smooth tire sidewalls replace dense tread and hidden internal tire faces.
for(const bounds of wheelBounds.values()){
 const center=bounds.getCenter(new T.Vector3()),radius=(bounds.max.y-bounds.min.y)/2,half=(bounds.max.x-bounds.min.x)/2;
 const profile=[[.79,-1],[.9,-1],[.98,-.75],[1,-.4],[1,.4],[.98,.75],[.9,1],[.79,1],[.79,-1]].map(([r,x])=>new T.Vector2(r*radius,x*half));
 const geometry=new T.LatheGeometry(profile,64);geometry.rotateZ(-Math.PI/2);geometry.translate(...center.toArray());appendGeometry('rubber','rubber',geometry);
}
retained=[...groups.values()].reduce((sum,p)=>sum+p.indices.length/3,0);
const data={type:'model-y',spec:{length:4.75},parts:[...groups.values()],originalTriangles:original,triangles:retained,revision:'model-y-smooth-2',components,source:'Nieve5677 / Tesla Model Y, CC BY 4.0',exteriorPreserved:true};
for(const p of data.parts)for(const a of Object.values(p.attributes))for(let i=0;i<a.length;i++)a[i]=Number(a[i].toFixed(6));await writeFile(new URL('../../engine/assets/traffic-model-y.json.gz',import.meta.url),gzipSync(JSON.stringify(data),{level:9}));console.log({original,retained,parts:data.parts.map(p=>[p.role,p.indices.length/3])});
