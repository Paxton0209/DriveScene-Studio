import * as THREE from 'three';
import {vehicleShell} from './traffic-depth-shell.js';
import {MOTION_TIME_SCALE} from '../motion-config.js';

// A quick rise and gentle stop make the intact vehicle rise and settle.
// Standard strong ease-out: cubic-bezier(.23,1,.32,1), 450ms at the shared time scale.
// The existing preview scheduler supplies draws, including while playback is paused.
export function trafficEntryProgress(progress){
 const x=Math.max(0,Math.min(1,progress));
 if(x===0||x===1)return x;
 let t=x;
 // Invert the Bezier time axis; a single scalar sample serves the whole fleet.
 for(let i=0;i<6;i++){
  const u=1-t,bx=3*u*u*t*.23+3*u*t*t*.32+t*t*t;
  const slope=3*u*u*.23+6*u*t*(.32-.23)+3*t*t*(1-.32);
  t=Math.max(0,Math.min(1,t-(bx-x)/slope));
 }
 return 1-(1-t)**3;
}

export function createTrafficReveal({enabled=false,now=()=>performance.now(),reduced=()=>globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches,timeScale=MOTION_TIME_SCALE}={}){
 let target=enabled?1:0,value=target,start=now(),active=false;
 function sample(){
  if(!active)return value;
  if(reduced()){value=target;active=false;return value;}
  const progress=Math.max(0,(now()-start)/(562.5*timeScale));
  value=trafficEntryProgress(progress);
  if(progress>=1){value=1;active=false;}
  return value;
 }
 return {sample,set(enabled,{snap=false}={}){
  sample();const next=enabled?1:0;
  // Disabling a layer removes it immediately; only entry grows from the ground.
  if(snap||!next||reduced()){target=value=next;active=false;return;}
  if(next===target)return;
  target=next;value=0;start=now();active=true;
 },get active(){return active},get present(){return target===1},capture:()=>({target,value,start,active}),restore(saved){({target,value,start,active}=saved)}};
}

// Reuse the eased rise; finish the fade slightly before the final settle.
export const trafficEntryOpacity=value=>Math.max(0,Math.min(1,value/.98));
const revealStates=new WeakMap();
export const trafficContactGrowth=value=>{const u=Math.max(0,Math.min(1,(value-.6)/.4));return u*u*(3-2*u)};
function revealState(car){
 const children=car.children.filter(o=>!o.userData.trafficShadow&&!o.userData.draftOwned);
 let state=revealStates.get(car);
 if(state&&children.length===state.parts.length&&children.every((o,i)=>o===state.parts[i].object))return state;
 // Restore old offsets before rebuilding after an asynchronous model replacement.
 if(state)for(const part of state.parts)part.object.position.y=part.y;
 car.updateWorldMatrix(true,true);
 const inverse=new THREE.Matrix4().copy(car.matrixWorld).invert(),bounds=new THREE.Box3();
 for(const child of children)child.traverse(o=>{
  if(!o.isMesh||o.userData.draftOcclusionDepth||!o.geometry?.attributes.position)return;
  if(!o.geometry.boundingBox)o.geometry.computeBoundingBox();
  bounds.union(o.geometry.boundingBox.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld)));
 });
 state={parts:children.map(object=>({object,y:object.position.y})),top:bounds.isEmpty()?1.7:bounds.max.y,plane:new THREE.Plane(new THREE.Vector3(0,1,0)),materials:new WeakSet(),worldPosition:new THREE.Vector3(),drop:null,shells:null,orders:new Map(),contacts:[...new Set(car.children.filter(o=>o.userData.trafficShadow&&o.material?.uniforms.visibility).map(o=>o.material))]};
 revealStates.set(car,state);return state;
}
function clipMaterial(material,state){
 if(state.materials.has(material))return;
 const planes=[...(material.clippingPlanes||[])],index=material.userData.draftTrafficClipIndex;
 if(Number.isInteger(index)&&index>=0&&index<planes.length)planes[index]=state.plane;
 else {material.userData.draftTrafficClipIndex=planes.length;planes.push(state.plane);}
 material.clippingPlanes=planes;
 material.clipShadows=true;material.needsUpdate=true;state.materials.add(material);
}
export function applyTrafficGrowth(car,value,world){
 const state=revealState(car),progress=Math.max(0,Math.min(1,value));
 // Keep the route/group pose, XYZ scale, wheel shape and footprint intact.
 // Only the visible model descends below its real road surface, then rises.
 car.updateWorldMatrix(true,false);
 const groundY=car.getWorldPosition(state.worldPosition).y-.02;
 const opacity=trafficEntryOpacity(progress);car.userData.draftTrafficEntryOpacity=opacity;
 if(opacity<1){
  if(!state.shells)state.shells=vehicleShell(car);
  for(const part of state.parts)part.object.traverse(o=>{if(o.isMesh&&!o.userData.draftOcclusionDepth){if(!state.orders.has(o))state.orders.set(o,o.renderOrder);o.renderOrder=8;}});
  for(const shell of state.shells)shell.visible=true;
 }else if(state.orders.size){
  for(const shell of state.shells)shell.visible=false;
  for(const [mesh,order] of state.orders)mesh.renderOrder=order;state.orders.clear();
 }
 if(progress===1&&state.drop===0&&state.plane.constant===-groundY){car.userData.draftTrafficGrowth=1;return;}
 state.plane.constant=-groundY;
 const drop=(state.top+.025)*(1-progress);
 for(const part of state.parts){
  part.object.position.y=part.y-drop;
  part.object.traverse(o=>{if(o.isMesh&&o.material){if(Array.isArray(o.material))o.material.forEach(m=>clipMaterial(m,state));else clipMaterial(o.material,state);}});
 }
 if(state.drop!==drop&&world&&state.parts.length){world.renderer.shadowMap.needsUpdate=true;world.shadowKey=null;world.groundReflectionKey=null;world.carReflectionKey=null;}
 state.drop=drop;car.userData.draftTrafficGrowth=progress;
 // Contact remains on the ground, appearing near the wheels' arrival.
 for(const material of state.contacts)material.uniforms.visibility.value*=trafficContactGrowth(progress);
}
