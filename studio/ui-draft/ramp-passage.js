import {Group,Mesh} from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {rampPassageState} from './road-mark-motion.js';

const passages=new WeakMap();

export function installRampPassage(world,id,width,startIndex,join){
 const root=world.root,payload=new Group();payload.name='ramp-passage';
 for(const mesh of root.children.slice(startIndex)){
  if(mesh.userData.laneDash||mesh.geometry?.type==='PlaneGeometry'&&mesh.position.x<0)continue;
  payload.add(mesh);
 }
 const paint=[...payload.children].filter(mesh=>mesh.material===world.mat.whitePaint);
 if(paint.length>1){
  const geometries=paint.map(mesh=>{mesh.updateMatrix();return mesh.geometry.clone().applyMatrix4(mesh.matrix)}),merged=mergeGeometries(geometries,false);
  geometries.forEach(geometry=>geometry.dispose());
  if(merged){const batch=new Mesh(merged,world.mat.whitePaint);batch.name='ramp-passage-paint';payload.add(batch);for(const mesh of paint){mesh.removeFromParent();mesh.geometry.dispose();}}
 }
 root.add(payload);world.road(0,width,70,-260,-.002);
 const edges=new Group();edges.name='ramp-mainline-edge';root.add(edges);
 for(let index=0;index<2;index++){world.line(width/2-.25,70,-260);const mesh=root.children.at(-1);mesh.name='ramp-mainline-edge-'+index;edges.add(mesh);}
 const gap=id==='06'?[-8-join,-8]:[-60,-60+join];
 passages.set(root,{payload,edges,gap});advanceRampPassage(root,world.drivingDistance||0);
}

function edgeSpan(mesh,start,end){
 const near=Math.min(70,start),far=Math.max(-260,end);
 mesh.visible=near>far;
 if(!mesh.visible)return;
 mesh.position.z=(near+far)/2;mesh.scale.y=(near-far+.8)/mesh.geometry.parameters.height;
}

export function advanceRampPassage(root,distance){
 const passage=passages.get(root);if(!passage)return;
 const state=rampPassageState(distance),far=passage.gap[0]+state.offset,near=passage.gap[1]+state.offset;
 passage.payload.position.z=state.offset;passage.payload.visible=state.visible;
 edgeSpan(passage.edges.children[0],70,near);edgeSpan(passage.edges.children[1],far,-260);
}
