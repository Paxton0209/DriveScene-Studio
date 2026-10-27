import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createParkingSightTarget} from '../parking-materials.js';
import {updateParkingOcclusion} from '../parking-occlusion.js';
import {fitParkingCamera,sampleParkingView,parkingFrame} from '../parking-camera.js';

test('Returning to a cached scene never applies the occlusion shader twice',()=>{
 const first=new THREE.Group(),second=new THREE.Group();
 const column=new THREE.Mesh(new THREE.BoxGeometry(1,4,1),new THREE.MeshStandardMaterial());column.position.set(0,2,5);first.add(column);
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,2,10);
 const world={root:first,car:new THREE.Group(),camera,draftTime:0},parking=new THREE.Group();
 updateParkingOcclusion(world,parking);const once=column.material;
 world.root=second;updateParkingOcclusion(world,parking);world.root=first;updateParkingOcclusion(world,parking);
 assert.equal(column.material,once);const shader={uniforms:{},fragmentShader:'void main(){gl_FragColor=vec4(1.);}'};
 once.onBeforeCompile(shader,{});assert.equal((shader.fragmentShader.match(/uniform float draftOcclusion/g)||[]).length,1);
 assert.equal(once.transparent,true);assert.equal(once.depthWrite,false);
});

test('An obstacle hiding only the future route fades gradually and recovers',()=>{
 const root=new THREE.Group(),obstacle=new THREE.Mesh(new THREE.BoxGeometry(2,4,1),new THREE.MeshStandardMaterial());obstacle.position.set(4,2,5);root.add(obstacle);
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,3,10);
 const world={root,car:new THREE.Group(),camera,draftTime:0},parking=new THREE.Group(),shader={uniforms:{},fragmentShader:'void main(){gl_FragColor=vec4(1.);}'};
 updateParkingOcclusion(world,parking,null,[new THREE.Vector3(8,.1,0)]);obstacle.material.onBeforeCompile(shader,{});
 const first=shader.uniforms.draftOcclusion.value;assert.ok(first>.1&&first<1);
 for(let i=1;i<=30;i++){world.draftTime=i*33.33;updateParkingOcclusion(world,parking,null,[new THREE.Vector3(8,.1,0)]);}
 const faded=shader.uniforms.draftOcclusion.value;assert.ok(faded<.12);
 world.draftTime+=33.33;updateParkingOcclusion(world,parking);assert.ok(shader.uniforms.draftOcclusion.value>faded&&shader.uniforms.draftOcclusion.value<1);
});

for(const x of [-5.9,5.9])for(const z of [-21.6,10.8])test(`Joint camera fit retains near, far and behind bay ${x}/${z}`,()=>{
 const camera=new THREE.PerspectiveCamera(40,16/9,.1,1000),car=new THREE.Vector3(),focus=new THREE.Vector3(x/2,.85,z/2),points=[-.5,.5].flatMap(a=>[-.5,.5].map(b=>new THREE.Vector3(x+a*4.9,.05,z+b*2.8)));
 const direction=new THREE.Vector3(0,Math.sin(.89),Math.cos(.89));const fit=fitParkingCamera(camera,car,0,focus,direction,26,points,.785);
 camera.position.copy(fit.position);camera.lookAt(fit.aim);camera.updateMatrixWorld(true);
 const corners=[-1.1,1.1].flatMap(a=>[-2.65,2.65].flatMap(b=>[0,1.9].map(c=>new THREE.Vector3(a,c,b))));
 const bottom=Math.max(...corners.map(p=>(1-p.clone().project(camera).y)/2));camera.setViewOffset(1920,1080,0,(bottom-fit.anchor)*1080,1920,1080);camera.updateMatrixWorld(true);
 for(const point of [...points,...corners]){const p=point.clone().project(camera);assert.ok(Math.abs(p.x)<.90&&p.y>-.84&&p.y<.88&&p.z<1,JSON.stringify(p));}
});

test('Camera framing distance remains continuous while a far bay crosses a screen margin',()=>{
 const camera=new THREE.PerspectiveCamera(40,16/9,.1,1000),car=new THREE.Vector3(),direction=new THREE.Vector3(0,Math.sin(.89),Math.cos(.89));let previous=null,maxJump=0;
 for(let z=-35;z<=5;z+=.01){const focus=new THREE.Vector3(2.95,.85,z/2),points=[-.5,.5].flatMap(x=>[-.5,.5].map(d=>new THREE.Vector3(5.9+x*4.9,.05,z+d*2.8)));const fit=fitParkingCamera(camera,car,0,focus,direction,26,points,.785),distance=fit.position.distanceTo(focus);if(previous!==null)maxJump=Math.max(maxJump,Math.abs(distance-previous));previous=distance;}
 assert.ok(maxJump<.10,`Camera distance jumped ${maxJump}m for 1cm movement`);
});

test('Parking traffic carries persistent transparency ownership and renders above contact AO',()=>{
 const root=new THREE.Group(),parking=new THREE.Group(),car=new THREE.Group();car.userData.trafficVehicle=true;
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(2,2,4),new THREE.MeshPhysicalMaterial());car.add(mesh);parking.add(car);
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,2,10);
 updateParkingOcclusion({root,car:new THREE.Group(),camera,draftTime:0},parking);
 assert.equal(mesh.material.userData.draftOcclusion,true);
 assert.equal(mesh.material.transparent,true);assert.equal(mesh.material.depthWrite,false);
 assert.ok(mesh.renderOrder>7);
});


for(const fromAngle of [.41,.91,Math.PI/2-.001])for(const toAngle of [.41,.91,Math.PI/2-.001])test(`Manual view orbit is monotone and settles without reversal ${fromAngle}/${toAngle}`,()=>{
 const pose=angle=>({position:new THREE.Vector3(0,Math.sin(angle)*30,Math.cos(angle)*30),aim:new THREE.Vector3(),anchor:.5});
 const from=pose(fromAngle),to=pose(toAngle);let previous=fromAngle;
 for(let ms=0;ms<=1000;ms+=1000/120){const frame=sampleParkingView(from,to,ms),angle=Math.atan2(frame.position.y,frame.position.z);
  assert.ok((angle-previous)*Math.sign(toAngle-fromAngle)>=-1e-10);assert.ok(Math.abs(frame.position.length()-30)<1e-8);previous=angle;
 }
 const final=sampleParkingView(from,to,1000);assert.equal(final.complete,true);assert.ok(final.position.distanceTo(to.position)<1e-8);
});

test('Column occlusion retains live theme and brightness uniform ownership',()=>{
 const tone={value:0},brightness={value:1},root=new THREE.Group(),parking=new THREE.Group();
 const column=new THREE.Mesh(new THREE.BoxGeometry(1,4,1),new THREE.ShaderMaterial({uniforms:{tone,brightness}}));root.add(column);
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,2,10);
 updateParkingOcclusion({root,car:new THREE.Group(),camera,draftTime:0},parking);
 tone.value=1;brightness.value=1.5;
 assert.equal(column.material.uniforms.tone,tone);assert.equal(column.material.uniforms.brightness,brightness);
 assert.equal(column.material.uniforms.tone.value,1);assert.equal(column.material.uniforms.brightness.value,1.5);
});

test('Building and tree occlusion follows live theme finishes across cached scene returns',()=>{
 const root=new THREE.Group(),other=new THREE.Group(),parking=new THREE.Group();
 const sources=[new THREE.MeshPhysicalMaterial({color:'#d3d7dd',roughness:.9,clearcoat:.1}),new THREE.MeshStandardMaterial({color:'#70904a'})];
 const meshes=sources.map((material,i)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(2,5,2),material);mesh.position.set(i?10:-10,2,-5);root.add(mesh);return mesh;});
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,8,23);const world={root,car:new THREE.Group(),camera,draftTime:0};
 updateParkingOcclusion(world,parking);const copies=meshes.map(mesh=>mesh.material);
 for(const dark of [true,false,true]){
  world.root=other;updateParkingOcclusion(world,parking);
  sources[0].color.set(dark?'#817d7d':'#d3d7dd');sources[0].roughness=dark?.5:.9;sources[0].clearcoat=dark?.04:.1;sources[0].envMapIntensity=dark?1.5:.55;
  sources[1].color.set(dark?'#32432b':'#70904a');
  world.root=root;world.draftTime+=100;updateParkingOcclusion(world,parking);
  meshes.forEach((mesh,i)=>{assert.equal(mesh.material,copies[i]);assert.ok(mesh.material.color.equals(sources[i].color));assert.equal(mesh.material.depthWrite,true);});
  for(const key of ['roughness','clearcoat','envMapIntensity'])assert.equal(meshes[0].material[key],sources[0][key]);
 }
});

test('Traffic occlusion retains independently updated appearance rather than environment source ownership',()=>{
 const root=new THREE.Group(),parking=new THREE.Group(),vehicle=new THREE.Group();vehicle.userData.trafficVehicle=true;
 const source=new THREE.MeshPhysicalMaterial({color:'#ffffff',roughness:.4}),mesh=new THREE.Mesh(new THREE.BoxGeometry(2,2,4),source);vehicle.add(mesh);parking.add(vehicle);
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,8,23);const world={root,car:new THREE.Group(),camera,draftTime:0};
 updateParkingOcclusion(world,parking);mesh.material.color.set('#aab2ba');mesh.material.roughness=.7;
 source.color.set('#000000');source.roughness=.1;world.draftTime=100;updateParkingOcclusion(world,parking);
 assert.equal(mesh.material.color.getHexString(),'aab2ba');assert.equal(mesh.material.roughness,.7);assert.equal(source.color.getHexString(),'000000');
});

test('Different vehicle meshes cannot move the fixed parking frame or projected environment',()=>{
 const camera=new THREE.PerspectiveCamera(40,16/9,.1,1000);camera.position.set(0,11,22);camera.lookAt(0,.85,0);camera.updateMatrixWorld(true);
 const car=new THREE.Group(),before=parkingFrame(car,camera),point=new THREE.Vector3(6,0,-12).project(camera);
 for(const size of [[1.8,1.4,4.6],[2,1.9,5.1],[2.1,1.7,4.9]]){car.clear();car.add(new THREE.Mesh(new THREE.BoxGeometry(...size)));assert.deepEqual(parkingFrame(car,camera),before);assert.ok(point.distanceTo(new THREE.Vector3(6,0,-12).project(camera))<1e-12);}
});


test('Occluding parking traffic keeps at least ninety percent exterior opacity and recovers',()=>{
 const root=new THREE.Group(),parking=new THREE.Group(),vehicle=new THREE.Group();vehicle.userData.trafficVehicle=true;
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(2,2,4),new THREE.MeshPhysicalMaterial());mesh.position.y=1;vehicle.position.z=5;vehicle.add(mesh);parking.add(vehicle);parking.updateMatrixWorld(true);
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,2,10);const world={root,car:new THREE.Group(),camera,draftTime:0};
 for(let i=0;i<120;i++){world.draftTime=i*33.33;updateParkingOcclusion(world,parking);assert.ok(vehicle.userData.draftOcclusionAlpha>=.90);}
 const alpha=vehicle.userData.draftOcclusionAlpha;assert.ok(alpha<.901);
 const shell=mesh.children.find(o=>o.userData.draftOcclusionDepth);assert.ok(shell.visible);assert.equal(shell.material.colorWrite,false);assert.equal(shell.material.depthWrite,true);
 world.camera.position.x=20;world.draftTime+=33.33;updateParkingOcclusion(world,parking);assert.ok(vehicle.userData.draftOcclusionAlpha>alpha);
});


test('Flanking parking trees never fade across the empty space between them',()=>{
 const root=new THREE.Group(),vegetation=new THREE.Group(),material=new THREE.MeshStandardMaterial();root.add(vegetation);
 const trees=[-11.45,11.45].map(x=>{const tree=new THREE.Group(),crown=new THREE.Mesh(new THREE.BoxGeometry(4,7,4),material);crown.position.y=3.5;tree.position.set(x,0,-10.05);tree.add(crown);vegetation.add(tree);return tree;});
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,8.5,23);
 const world={root,vegetation,car:new THREE.Group(),camera,draftTime:0},parking=new THREE.Group();
 for(let i=0;i<90;i++){world.draftTime=i*33.33;updateParkingOcclusion(world,parking,null,[new THREE.Vector3(0,.1,-20)]);}
 for(const tree of trees){const shader={uniforms:{},fragmentShader:'void main(){gl_FragColor=vec4(1.);}'};tree.children[0].material.onBeforeCompile(shader,{});assert.equal(shader.uniforms.draftOcclusion.value,1);assert.equal(tree.children[0].material.depthWrite,true);}
 // A route behind the left tree must fade only that actual obstruction.
 for(let i=90;i<180;i++){world.draftTime=i*33.33;updateParkingOcclusion(world,parking,null,[new THREE.Vector3(-20,.1,-30)]);}
 assert.ok(trees[0].userData.draftOcclusionAlpha<.12);assert.equal(trees[1].userData.draftOcclusionAlpha,1);
 for(let i=180;i<270;i++){world.draftTime=i*33.33;updateParkingOcclusion(world,parking);}
 assert.ok(trees[0].userData.draftOcclusionAlpha>.999);assert.equal(trees[1].userData.draftOcclusionAlpha,1);
});


test('Hidden bay sight targets need no textures or drawing and still fade a real obstruction',()=>{
 const load=THREE.TextureLoader.prototype.load;let loads=0;
 THREE.TextureLoader.prototype.load=()=>{loads++;throw new Error('Hidden marker image load');};
 let target;
 try{target=createParkingSightTarget(4);}finally{THREE.TextureLoader.prototype.load=load;}
 assert.equal(loads,0);assert.equal(target.visible,false);assert.equal(target.material,undefined);assert.equal(target.geometry,undefined);
 const bay={x:8,z:0};target.userData.bay=bay;target.position.set(bay.x,.055,bay.z);
 const root=new THREE.Group(),parking=new THREE.Group(),obstacle=new THREE.Mesh(new THREE.BoxGeometry(2,4,1),new THREE.MeshStandardMaterial());obstacle.position.set(4,2,5);root.add(obstacle);parking.add(target);
 const camera=new THREE.PerspectiveCamera();camera.position.set(0,3,10);const world={root,car:new THREE.Group(),camera,draftTime:0};
 const points=[-.24,0,.24].map(dx=>target.position.clone().add(new THREE.Vector3(dx,0,0)));
 for(let i=0;i<90;i++){world.draftTime=i*33.33;updateParkingOcclusion(world,parking,null,points);}
 assert.ok(obstacle.userData.draftOcclusionAlpha<.12);assert.equal(target.userData.bay,bay);assert.equal(target.visible,false);
 const ray=new THREE.Raycaster();assert.deepEqual(ray.intersectObjects([target]),[]);
});


test('Parking exterior masking remains active during entry fade even without an occluding sight line',()=>{
 const root=new THREE.Group(),parking=new THREE.Group(),vehicle=new THREE.Group();vehicle.userData.trafficVehicle=true;vehicle.userData.draftTrafficEntryOpacity=.5;vehicle.userData.draftTrafficGrowth=.5;vehicle.position.z=5;
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(2,2,4),new THREE.MeshPhysicalMaterial());vehicle.add(mesh);parking.add(vehicle);parking.updateMatrixWorld(true);
 const camera=new THREE.PerspectiveCamera();camera.position.set(20,2,10);const world={root,car:new THREE.Group(),camera,draftTime:0};
 updateParkingOcclusion(world,parking);const shell=mesh.children.find(o=>o.userData.draftOcclusionDepth);assert.equal(vehicle.userData.draftOcclusionAlpha,1);assert.equal(shell.visible,true);
 vehicle.userData.draftTrafficEntryOpacity=1;vehicle.userData.draftTrafficGrowth=1;world.draftTime=33;updateParkingOcclusion(world,parking);assert.equal(shell.visible,false);
});


test('Parking entry restores exterior depth writing after the first fully transparent frame',()=>{
 const root=new THREE.Group(),parking=new THREE.Group(),vehicle=new THREE.Group();vehicle.position.z=5;vehicle.userData.trafficVehicle=true;vehicle.userData.trafficOpacity=0;vehicle.userData.draftTrafficEntryOpacity=0;
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(2,2,4),new THREE.MeshPhysicalMaterial({transparent:true,opacity:0,depthWrite:false}));vehicle.add(mesh);parking.add(vehicle);
 const camera=new THREE.PerspectiveCamera();camera.position.set(20,2,10);const world={root,car:new THREE.Group(),camera,draftTime:0};
 updateParkingOcclusion(world,parking);assert.equal(mesh.material.depthWrite,false);
 vehicle.userData.trafficOpacity=1;vehicle.userData.draftTrafficEntryOpacity=1;mesh.material.opacity=1;world.draftTime=500;updateParkingOcclusion(world,parking);
 assert.equal(mesh.material.depthWrite,true);assert.equal(mesh.children.find(o=>o.userData.draftOcclusionDepth).visible,false);
});
