import {addReviewReflection} from './reflection.js';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {createTrafficVehicle,setTrafficAppearance,readyTrafficModel} from '../engine/traffic-vehicle.js';

let dark=false,rotate=false;
await Promise.all(['sedan','suv'].map(type=>readyTrafficModel(null,type)));
const views=[];
for(const [id,create] of ['sedan','suv'].map(type=>[type,()=>createTrafficVehicle(type)])){
 const container=document.getElementById(id),scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(28,1,.1,100),renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.95;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;container.append(renderer.domElement);
 const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromScene(new RoomEnvironment(),.04).texture;scene.environmentIntensity=.45;pmrem.dispose();
 const hemi=new THREE.HemisphereLight(0xd4e2f3,0x737882,1.35),key=new THREE.DirectionalLight(0xfff9f0,2.3);key.position.set(-5,8,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-6;key.shadow.camera.right=6;key.shadow.camera.top=6;key.shadow.camera.bottom=-6;key.shadow.normalBias=.015;key.shadow.radius=4;scene.add(hemi,key);
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:'#9ca7b8',roughness:.65}));ground.rotation.x=-Math.PI/2;ground.position.y=-.006;ground.receiveShadow=true;scene.add(ground);
 const car=create();container.dataset.triangles=String(car.userData.triangles);container.dataset.originalTriangles=String(car.userData.originalTriangles);container.dataset.modelType=id;const label=document.createElement('div');label.className='model-metrics';label.textContent=`${car.userData.originalTriangles.toLocaleString()} → ${car.userData.triangles.toLocaleString()} triangles · ${car.children.filter(o=>!o.material.isShaderMaterial).length} meshes`;container.after(label);car.traverse(o=>{if(o.isMesh&&!o.material.isShaderMaterial){o.castShadow=true;o.receiveShadow=true;}});scene.add(car);camera.position.set(4.6,3.2,6.6);camera.lookAt(0,.72,0);
 const resize=()=>{const {width,height}=container.getBoundingClientRect();renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();};new ResizeObserver(resize).observe(container);resize();const view={scene,camera,renderer,hemi,key,ground,car,id};view.reflect=addReviewReflection(view);views.push(view);
}
function appearance(){document.body.dataset.theme=dark?'dark':'light';document.getElementById('theme').setAttribute('aria-pressed',String(dark));for(const v of views){v.scene.background=new THREE.Color(dark?'#1a202b':'#c6ceda');v.scene.environmentIntensity=dark?.25:.45;v.hemi.intensity=dark?.9:1.35;v.key.intensity=dark?1.45:2.3;v.ground.material.color.set(dark?'#272e3b':'#9ca7b8');setTrafficAppearance(v.car,dark);}}
document.getElementById('theme').onclick=()=>{dark=!dark;appearance();};document.getElementById('rotate').onclick=event=>{rotate=!rotate;event.currentTarget.setAttribute('aria-pressed',String(rotate));};appearance();
let last=0;function render(time){const dt=last?Math.min(.05,(time-last)/1000):0;last=time;for(const v of views){if(rotate)v.car.rotation.y+=dt*.28;v.reflect();v.renderer.render(v.scene,v.camera);}requestAnimationFrame(render);}requestAnimationFrame(render);

for(const [id,pos]of [['rear',[4.6,3.2,6.6]],['front',[-4.6,3.2,-6.6]],['side',[9.5,2.7,0]]])document.getElementById(id).onclick=()=>{rotate=false;document.getElementById('rotate').setAttribute('aria-pressed','false');for(const v of views){v.car.rotation.y=0;v.camera.position.set(...pos);v.camera.lookAt(0,.75,0);}};
