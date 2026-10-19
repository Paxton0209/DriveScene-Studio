import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createContinuousDriving} from '../engine/continuous-driving.js';
import {glazingLuminance,softenXc90Glazing} from '../engine/xc90-glass-highlight.js';
function fixture(){
 const root=new THREE.Group(),vegetation=new THREE.Group();root.add(vegetation);
 const building=new THREE.Mesh(new THREE.BoxGeometry(8,12,8),new THREE.MeshStandardMaterial());building.position.set(25,6,-20);building.userData.environmentKey='building';building.userData.buildingOwned=true;root.add(building);
 const tree=new THREE.Group();tree.position.set(-15,0,-10);vegetation.add(tree);
 const mark=new THREE.Mesh(new THREE.PlaneGeometry(1,20),new THREE.MeshStandardMaterial());mark.userData.laneDash=true;root.add(mark);
 let draws=0,callbacks=new Map(),next=0,hidden=false;
 const world={root,vegetation,lawns:[],state:{id:'02',laneCount:6},renderFrame(){draws++;}};
 const drive=createContinuousDriving(world,{schedule(cb){callbacks.set(++next,cb);return next;},cancel(id){callbacks.delete(id);},hidden:()=>hidden,random:()=>.7});
 const run=time=>{const entries=[...callbacks];callbacks.clear();for(const [,cb]of entries)cb(time);};
 return {world,drive,building,tree,mark,run,get draws(){return draws;},setHidden(value){hidden=value;drive.visibility();}};
}
test('pause freezes the current frame and resume continues without a clock jump',()=>{
 const f=fixture();f.drive.setPlaying(true);f.run(100);f.run(150);const at=f.building.position.z,phase=f.drive.audit().distance;assert.ok(at>-20);f.drive.pause();f.run(5000);assert.equal(f.building.position.z,at);assert.equal(f.drive.audit().distance,phase);
 f.drive.setPlaying(true);f.run(10000);assert.equal(f.drive.audit().distance,phase);f.run(10050);assert.ok(f.drive.audit().distance>phase);f.drive.reset();
});
test('many recycling passes keep a bounded pool and restore shared source geometry on reset',()=>{
 const f=fixture();f.drive.advance(.1);const count=f.world.root.children.length,geometry=f.building.geometry;
 for(let i=0;i<4000;i++)f.drive.advance(.1);
 assert.ok(f.drive.audit().recycled>30);assert.equal(f.world.root.children.length,count);assert.equal(f.building.geometry,geometry);assert.ok(f.building.scale.y!==1);
 f.drive.reset();assert.deepEqual(f.building.position.toArray(),[25,6,-20]);assert.deepEqual(f.building.scale.toArray(),[1,1,1]);assert.equal(f.world.vegetation.children.length,1);assert.equal(f.world.root.children.length,3);
});
test('backgrounding holds the clock and non-driving scenes cannot advance',()=>{
 const f=fixture();f.drive.setPlaying(true);f.run(100);f.run(150);const at=f.drive.audit().distance;f.setHidden(true);f.run(5000);assert.equal(f.drive.audit().distance,at);f.setHidden(false);f.run(10000);assert.equal(f.drive.audit().distance,at);f.world.state.id='05';assert.equal(f.drive.advance(.1),false);f.drive.reset();
});
test('glass rolloff preserves low tones, is continuous and monotonic, and bounds white highlights',()=>{
 assert.equal(glazingLuminance(.02),.02);assert.equal(glazingLuminance(.028),.028);let previous=0;
 for(let value=0;value<=4;value+=.001){const next=glazingLuminance(value);assert.ok(next>=previous);assert.ok(next<=.055);previous=next;}
 const material=new THREE.MeshStandardMaterial({color:'#17232f',roughness:.3});const color=material.color.getHexString();softenXc90Glazing(material);assert.equal(material.color.getHexString(),color);assert.equal(material.roughness,.3);const hook=material.onBeforeCompile;softenXc90Glazing(material);assert.equal(material.onBeforeCompile,hook);
});
test('recycled multi-part buildings keep their roofs attached after environment growth refresh',()=>{
 const root=new THREE.Group(),vegetation=new THREE.Group();root.add(vegetation);
 for(const [name,height,y]of [['body',12,6],['roof',.4,12.2]]){const mesh=new THREE.Mesh(new THREE.BoxGeometry(8,height,8));mesh.name=name;mesh.position.set(25,y,-20);Object.assign(mesh.userData,{buildingOwned:true,environmentKey:'building',growthBaseY:y,growthHeight:13});root.add(mesh);}
 const world={root,vegetation,lawns:[],state:{id:'03'},renderFrame(){}};
 const drive=createContinuousDriving(world,{random:()=>.9,schedule:()=>1,cancel(){},hidden:()=>false});
 for(let i=0;i<1000;i++)drive.advance(.1);
 for(const object of root.children)if(object.userData.buildingOwned)object.position.y=object.userData.growthBaseY;
 const bodies=root.children.filter(o=>o.name==='body'),roofs=root.children.filter(o=>o.name==='roof');
 for(const body of bodies){const roof=roofs.find(o=>Math.abs(o.position.z-body.position.z)<.01);assert.ok(roof);assert.ok(Math.abs((body.position.y+6*body.scale.y)-(roof.position.y-.2*roof.scale.y))<1e-6);}
 drive.reset();
});

test('camera and surroundings transitions never stop forward scene movement',()=>{
 const f=fixture();f.drive.advance(.1);const before=f.drive.audit().distance;f.world.cameraMotion=true;f.world.environmentMotion=true;f.world.layoutMotion=true;
 assert.equal(f.drive.advance(.1),true);assert.ok(f.drive.audit().distance>before);f.drive.reset();
});

test('recycling hidden buildings uses their standing height rather than their buried animation position',()=>{
 const f=fixture();f.building.userData.growthBaseY=6;f.building.userData.growthHeight=13;f.building.position.y=-7;
 for(let i=0;i<1000;i++)f.drive.advance(.1);
 assert.ok(f.building.userData.growthBaseY>0);f.drive.reset();
});

test('switching cached road widths keeps accumulated driving phase and scenery depth',()=>{
 const f=fixture();f.world.root.userData.trafficScene='02';for(let i=0;i<50;i++)f.drive.advance(.1);
 const distance=f.drive.audit().distance,z=f.building.position.z;
 const next=new THREE.Group(),vegetation=new THREE.Group(),building=f.building.clone();building.position.set(22,6,-20);next.add(vegetation,building);
 f.world.root=next;f.world.vegetation=vegetation;f.world.state={id:'09',laneCount:2};f.drive.advance(.05);
 assert.ok(Math.abs(f.drive.audit().distance-distance-.84)<1e-6);assert.ok(Math.abs(building.position.z-z-.84)<1e-6);f.drive.reset();
});
