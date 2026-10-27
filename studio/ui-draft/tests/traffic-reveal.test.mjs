import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createTrafficReveal,applyTrafficGrowth,trafficContactGrowth,trafficEntryProgress,trafficEntryOpacity} from '../traffic-reveal.js';

function fixture(enabled=false){let time=0,reduce=false;const reveal=createTrafficReveal({enabled,now:()=>time,reduced:()=>reduce});return {reveal,at(ms){time=ms;return reveal.sample()},reduce(){reduce=true}};}

test('Traffic strong ease-out establishes the body early and settles in 450ms without overshoot',()=>{
 const f=fixture();f.reveal.set(true);assert.equal(f.at(0),0);assert.equal(f.reveal.present,true);
 assert.ok(f.at(75)>.5,'recognizable proportions in the first sixth of entry');
 assert.ok(f.at(150)>.85,'most height arrives in the first third');
 assert.ok(f.at(300)>.98,'last third only settles the endpoint');
 let last=0;
 for(let ms=0;ms<=450;ms+=4){const value=f.at(ms);assert.ok(value>=last&&value<=1);last=value;}
 assert.equal(f.at(450),1);assert.equal(f.reveal.active,false);
 f.reveal.set(false);assert.equal(f.at(450),0);assert.equal(f.reveal.present,false);assert.equal(f.reveal.active,false);
});

test('Entry curve has a pronounced ease-out and honors shared time scaling',()=>{
 assert.equal(trafficEntryProgress(-1),0);assert.equal(trafficEntryProgress(2),1);
 const steps=[0,.25,.5,.75,1].map(trafficEntryProgress);
 for(let i=1;i<4;i++)assert.ok(steps[i]-steps[i-1]>steps[i+1]-steps[i]);
 let time=0;const reveal=createTrafficReveal({now:()=>time,reduced:()=>false,timeScale:1});
 reveal.set(true);time=450;assert.ok(reveal.sample()<1);assert.equal(reveal.active,true);
 time=562.5;assert.equal(reveal.sample(),1);assert.equal(reveal.active,false);
});

test('Disabling during entry ends immediately; a new enable starts a fresh upward reveal',()=>{
 const f=fixture();f.reveal.set(true);const up=f.at(120);assert.ok(up>0&&up<1);
 f.reveal.set(false);assert.equal(f.at(120),0);assert.equal(f.reveal.present,false);assert.equal(f.reveal.active,false);
 f.reveal.set(true);assert.equal(f.at(120),0);assert.ok(f.at(240)>0);assert.equal(f.at(1400),1);
});

test('Saved scene, reduced motion and repeated same-value sync settle without a new animation',()=>{
 const f=fixture();f.reveal.set(true,{snap:true});assert.equal(f.at(0),1);assert.equal(f.reveal.active,false);
 f.reveal.set(false);f.at(70);f.reveal.set(false);assert.equal(f.at(240),0,'frame sync never restarts exit');
 f.reduce();f.reveal.set(true);assert.equal(f.at(241),1);assert.equal(f.reveal.active,false);
});

test('Ground reveal translates the intact model, clips below the road and preserves every scale and route coordinate',()=>{
 const car=new THREE.Group();car.scale.set(1.2,1.4,.9);car.position.set(5.55,8.52,-30);
 const body=new THREE.Mesh(new THREE.BoxGeometry(2,1.6,4),new THREE.MeshStandardMaterial());body.position.y=.8;car.add(body);
 const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.3,.3,.2),new THREE.MeshStandardMaterial());wheel.position.set(.9,.3,1);car.add(wheel);
 const contact=new THREE.Mesh();contact.userData.trafficShadow=true;contact.position.y=.012;contact.material={uniforms:{visibility:{value:.7}}};car.add(contact);
 const position=car.position.toArray(),scale=car.scale.toArray(),spacing=body.position.y-wheel.position.y;
 applyTrafficGrowth(car,0);car.updateMatrixWorld(true);
 const top=new THREE.Vector3(0,.8,0).applyMatrix4(body.matrixWorld);
 assert.ok(top.y<8.5,'whole model starts below elevated road, including its roof');
 assert.equal(body.material.clippingPlanes[0].distanceToPoint(new THREE.Vector3(0,8.49,0))<0,true);
 assert.ok(Math.abs(body.material.clippingPlanes[0].distanceToPoint(new THREE.Vector3(0,8.5,0)))<1e-12);
 assert.equal(body.material.clipShadows,true);
 const begin=body.position.y;contact.material.uniforms.visibility.value=.7;applyTrafficGrowth(car,.8);
 assert.ok(body.position.y>begin&&body.position.y<.8);
 assert.ok(Math.abs(body.position.y-wheel.position.y-spacing)<1e-12,'body and wheels translate together');
 assert.deepEqual(car.position.toArray(),position);assert.deepEqual(car.scale.toArray(),scale);assert.equal(contact.position.y,.012);
 assert.ok(Math.abs(contact.material.uniforms.visibility.value-.35)<1e-12);
 contact.material.uniforms.visibility.value=.7;applyTrafficGrowth(car,1);
 assert.equal(body.position.y,.8);assert.equal(wheel.position.y,.3);assert.deepEqual(car.scale.toArray(),scale);assert.equal(contact.material.uniforms.visibility.value,.7);
 assert.equal(trafficContactGrowth(.6),0);assert.equal(trafficContactGrowth(1),1);
});

test('Moving routes, model replacement and copied occlusion materials retain ground clipping without accumulating offsets or planes',()=>{
 const car=new THREE.Group();car.position.y=.02;const material=new THREE.MeshStandardMaterial(),body=new THREE.Mesh(new THREE.BoxGeometry(2,2,4),material);body.position.y=1;car.add(body);
 applyTrafficGrowth(car,.5);const y=body.position.y,plane=material.clippingPlanes[0];
 for(let i=0;i<10;i++){car.position.x+=1;applyTrafficGrowth(car,.5);}
 assert.equal(body.position.y,y);assert.equal(material.clippingPlanes.length,1);assert.equal(material.clippingPlanes[0],plane);
 body.material=material.clone();applyTrafficGrowth(car,.5);applyTrafficGrowth(car,.5);
 assert.equal(body.material.clippingPlanes.length,1,'copied clip slot is rebound without an extra plane');
 car.position.y=8.52;applyTrafficGrowth(car,.5);assert.equal(plane.constant,-8.5);
 car.remove(body);const replacement=new THREE.Mesh(new THREE.BoxGeometry(2,3,4),new THREE.MeshStandardMaterial());replacement.position.y=1.5;car.add(replacement);
 applyTrafficGrowth(car,0);car.updateMatrixWorld(true);assert.ok(new THREE.Box3().setFromObject(car).max.y<8.5);
 applyTrafficGrowth(car,1);assert.equal(replacement.position.y,1.5);assert.equal(body.position.y,1);
});


test('Growing a stationary vehicle invalidates cast shadows and reflections only when height changes',()=>{
 const car=new THREE.Group();car.add(new THREE.Mesh(new THREE.BoxGeometry(2,2,4),new THREE.MeshStandardMaterial()));const world={renderer:{shadowMap:{needsUpdate:false}},shadowKey:'shadow',groundReflectionKey:'ground',carReflectionKey:'car'};
 applyTrafficGrowth(car,.5,world);
 assert.equal(world.renderer.shadowMap.needsUpdate,true);
 for(const key of ['shadowKey','groundReflectionKey','carReflectionKey'])assert.equal(world[key],null);
 Object.assign(world,{shadowKey:'shadow',groundReflectionKey:'ground',carReflectionKey:'car'});world.renderer.shadowMap.needsUpdate=false;
 applyTrafficGrowth(car,.5,world);assert.equal(world.renderer.shadowMap.needsUpdate,false);assert.equal(world.groundReflectionKey,'ground');
});


test('Entry opacity follows the same ease-out, reaches full before movement ends and never compounds',()=>{
 assert.equal(trafficEntryOpacity(0),0);assert.equal(trafficEntryOpacity(.98),1);assert.equal(trafficEntryOpacity(1),1);
 let previous=0;
 for(let ms=0;ms<=450;ms+=5){const opacity=trafficEntryOpacity(trafficEntryProgress(ms/450));assert.ok(opacity>=previous&&opacity<=1);previous=opacity;}
 assert.ok(trafficEntryOpacity(trafficEntryProgress(.5))>.9);
 const car=new THREE.Group(),mesh=new THREE.Mesh(new THREE.BoxGeometry(2,2,4),new THREE.MeshStandardMaterial());mesh.renderOrder=3;car.add(mesh);
 applyTrafficGrowth(car,.5);const shell=mesh.children.find(o=>o.userData.draftOcclusionDepth);
 assert.ok(shell.visible);assert.equal(shell.material.colorWrite,false);assert.equal(shell.material.depthWrite,true);assert.equal(mesh.renderOrder,8);
 assert.equal(shell.material.clippingPlanes.length,1);assert.equal(shell.material.clippingPlanes[0],mesh.material.clippingPlanes[0]);
 for(let i=0;i<5;i++)applyTrafficGrowth(car,.5);
 assert.equal(mesh.children.length,1);assert.equal(car.userData.draftTrafficEntryOpacity,trafficEntryOpacity(.5));
 applyTrafficGrowth(car,1);assert.equal(shell.visible,false);assert.equal(mesh.renderOrder,3);assert.equal(car.userData.draftTrafficEntryOpacity,1);
 applyTrafficGrowth(car,0);assert.equal(shell.visible,true);assert.equal(car.userData.draftTrafficEntryOpacity,0);
});

test('Shared wheel-contact material is faded once regardless of contact mesh count',()=>{
 const car=new THREE.Group();car.add(new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial()));
 const material=new THREE.ShaderMaterial({uniforms:{visibility:{value:.7}}});
 for(let i=0;i<5;i++){const shadow=new THREE.Mesh(new THREE.PlaneGeometry(),material);shadow.userData.trafficShadow=true;car.add(shadow);}
 applyTrafficGrowth(car,.8);assert.ok(Math.abs(material.uniforms.visibility.value-.35)<1e-12);
});
