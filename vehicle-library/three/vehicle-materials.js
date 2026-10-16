import * as THREE from 'three';
import {mergeVertices,deinterleaveGeometry} from 'three/addons/utils/BufferGeometryUtils.js';

// Source exports contain numeric material names. Match retained mesh names,
// rather than the deduplicated glTF material shared by otherwise distinct parts.
function roleFor(id,mesh,material){
 const name=material.name;
 if(id==='xc90'){
  const n=Number(mesh.name.match(/Material_#(\d+)/)?.[1]);
  if(n===2125664766)return 'paint';
  if([2125664769,2125664772].includes(n))return 'glass';
  if(n===2125664770)return 'rubber';
  if([2125664758,2125664761].includes(n))return 'tail';
  if(n===2125664767)return 'tail-lens';
  if(n===2125664764)return 'headlamp';
  if(n===2125664763)return 'head-lens';
  if([2125664754,2125664755,2125664757,2125664765,2125664771].includes(n))return 'chrome';
  if(n===2125664773)return 'plate';
  if(n===2125664760)return 'rim';
  return 'trim';
 }
 if(id==='ix'){
  if(['Kapot11Mtl','Rpbsw0031Mtl'].includes(name))return 'paint';
  if(['Wind1Mtl','Rl31Mtl','Fr20041Mtl'].includes(name))return 'glass';
  if(['Fr20071Mtl','Seat0051Mtl','Symb0011Mtl'].includes(name))return 'trim';
  if(name==='Wheel1Mtl')return 'rubber';
  if(name==='Wheel0011Mtl')return 'rim-textured';
  if(name==='Trunkwind0011Mtl')return 'tail';
  if(name==='Opttrans0011Mtl')return 'headlamp';
  if(name==='Optglass0011Mtl')return 'head-lens';
  return 'original';
 }
 if(id==='model-3'){
  if(['Geohoodsub00021Mtl','Georimblurlfsub01Mtl'].includes(name))return 'paint';
  if(/extwindow|Geodoorl2sub31|Geodoorr2sub31/i.test(name))return 'glass';
  if(name==='Ln12Mtl')return 'tail';
 }
 if(id==='taycan'){
  if(name==='corpus1')return 'paint';
  if(name==='red_headlight')return 'tail';
  if(name==='headlight_white_color')return 'headlamp';
  if(name==='MIRROR')return 'chrome';
 }
 if(/tire|tyre|rubber/i.test(name))return 'rubber';
 if(/window|glass/i.test(name))return /lamp|light/i.test(name)?'head-lens':'glass';
 return 'original';
}

export function prepareVehicleMaterials(model,id,length){
 const materials=new Map(),wheelBounds=new Map(),lampBounds=new THREE.Box3();
 model.updateMatrixWorld(true);
 model.traverse(mesh=>{
  if(!mesh.isMesh)return;
  mesh.castShadow=true;mesh.receiveShadow=true;
  const source=Array.isArray(mesh.material)?mesh.material:[mesh.material];
  const prepared=source.map(original=>{
   const role=roleFor(id,mesh,original),key=original.uuid+':'+role;
   if(!materials.has(key)){
    let m=original.clone();
    if(role==='paint'){
     m=new THREE.MeshPhysicalMaterial();THREE.MeshStandardMaterial.prototype.copy.call(m,original);m.defines={STANDARD:'',PHYSICAL:''};
     m.name='Pearl white paint';m.map=null;m.metalnessMap=null;m.roughnessMap=null;m.color.set('#edf0f3');
     m.metalness=.38;m.roughness=.28;m.clearcoat=.85;m.clearcoatRoughness=.20;m.envMapIntensity=1.1;
     m.transparent=false;m.opacity=1;m.depthWrite=true;m.emissive.set(0);
    }else if(role!=='original'&&role!=='rim-textured'){
     m.map=null;m.metalnessMap=null;m.roughnessMap=null;m.transparent=false;m.opacity=1;m.depthWrite=true;m.emissive.set(0);
     if(role==='glass'){m.color.set('#25313c');m.metalness=.12;m.roughness=.34;m.envMapIntensity=.75;m.side=THREE.DoubleSide;}
     if(role==='rubber'){m.color.set('#303238');m.metalness=0;m.roughness=.94;}
     if(role==='rim'||role==='chrome'){m.color.set(role==='rim'?'#737a83':'#9198a0');m.metalness=role==='chrome'?.55:.78;m.roughness=role==='chrome'?.4:.28;m.envMapIntensity=role==='chrome'?.65:1;}
     if(role==='trim'||role==='detail'){m.color.set(role==='trim'?'#292d33':'#555d65');m.metalness=role==='trim'?.05:.3;m.roughness=role==='trim'?.65:.4;}
     if(role==='plate'){m.color.set('#d6d9dc');m.metalness=.1;m.roughness=.55;}
     if(role==='tail'||role==='tail-lens'){m.color.set('#a71724');m.metalness=.15;m.roughness=.26;m.emissive.set('#ff1729');m.emissiveIntensity=role==='tail'?1.1:.12;if(role==='tail-lens'){m.color.set('#5b101b');m.transparent=true;m.opacity=.48;m.depthWrite=false;}}
     if(role==='headlamp'||role==='head-lens'){m.color.set(role==='headlamp'?'#d7e1ec':'#758391');m.metalness=.2;m.roughness=.22;if(role==='headlamp'){m.emissive.set('#dce7f2');m.emissiveIntensity=.2;}else{m.transparent=true;m.opacity=.3;m.depthWrite=false;}}
    }
    if(id==='xc90'&&role==='glass'){m.normalMap=null;m.bumpMap=null;m.flatShading=false;}
    m.userData.surfaceRole=role;m.needsUpdate=true;materials.set(key,m);
   }
   if(role==='rubber'){
    const p=mesh.geometry.getAttribute('position'),v=new THREE.Vector3();
    for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld);const quadrant=(v.x<0?'left':'right')+'-'+(v.z<0?'front':'rear');if(!wheelBounds.has(quadrant))wheelBounds.set(quadrant,new THREE.Box3());wheelBounds.get(quadrant).expandByPoint(v);}
   }
   if(role==='tail'||role==='tail-lens'){
    const box=new THREE.Box3().setFromObject(mesh);if(box.getCenter(new THREE.Vector3()).z>length*.38)lampBounds.union(box);
   }
   return materials.get(key);
  });
  if(id==='xc90'&&prepared.some(m=>['paint','glass'].includes(m.userData.surfaceRole))){let g=mesh.geometry.clone();g.deleteAttribute('normal');g.deleteAttribute('tangent');g.deleteAttribute('uv');deinterleaveGeometry(g);g=mergeVertices(g,1e-4);g.computeVertexNormals();mesh.geometry=g;}
  mesh.material=Array.isArray(mesh.material)?prepared:prepared[0];
 });
 const wheels=[...wheelBounds].map(([position,b])=>({position,min:b.min.toArray(),max:b.max.toArray(),size:b.getSize(new THREE.Vector3()).toArray()}));
 const lampCenter=lampBounds.isEmpty()?new THREE.Vector3(0,.85,length*.47):lampBounds.getCenter(new THREE.Vector3());
 const lamps={rearZ:lampCenter.z,height:lampCenter.y,halfWidth:lampBounds.isEmpty()?.72:Math.min(.83,lampBounds.getSize(new THREE.Vector3()).x*.42),continuous:id==='taycan'};
 return {wheels,lamps};
}
