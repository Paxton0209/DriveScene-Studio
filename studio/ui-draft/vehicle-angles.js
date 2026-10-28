import * as THREE from 'three';
import {loadPreparedVehicle} from '../engine/vehicle-library/three/load-prepared.js';
import {applySrVehicleFinish} from '../engine/sr-vehicle-finish.js';
import {createStudioEnvironment} from '../engine/studio-environment.js';
import {createVehicle} from '../engine/vehicle.js';

const exportScale=new URLSearchParams(location.search).get('export')==='4x'?4:1;
const width=400*exportScale,height=176*exportScale;
const blobFrom=canvas=>new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(Error('PNG encoding failed')),'image/png'));

async function renderAngles(){
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
 renderer.setSize(width,height);renderer.setPixelRatio(1);renderer.setClearColor(0,0);
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const scene=new THREE.Scene();scene.environment=createStudioEnvironment();scene.environmentIntensity=.38;
 scene.add(new THREE.HemisphereLight('#ffffff','#c9cbd0',2));
 const key=new THREE.DirectionalLight('#ffffff',2.8);key.position.set(-6,9,-5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:1,far:30});key.shadow.normalBias=.015;key.shadow.radius=4;scene.add(key,key.target);
 const fill=new THREE.DirectionalLight('#ffffff',.7);fill.position.set(6,3,3);scene.add(fill);
 const query=new URLSearchParams(location.search),model=['x6','ix','xc90'].includes(query.get('model'))?query.get('model'):'model-3';
 const name={'model-3':'Tesla Model 3',x6:'BMW X6',ix:'BMW iX',xc90:'Volvo XC90'}[model];
 const car=applySrVehicleFinish(await(model==='x6'?createVehicle():loadPreparedVehicle(model)));
 car.traverse(object=>{if(object.isMesh){object.castShadow=true;object.receiveShadow=false}});scene.add(car);
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(18,18),new THREE.ShadowMaterial({opacity:.055}));floor.rotation.x=-Math.PI/2;floor.position.y=-.005;floor.receiveShadow=true;scene.add(floor);
 const camera=new THREE.PerspectiveCamera(20,width/height,.1,80),distance=8.8,target=new THREE.Vector3(0,.75,0);
 const comparison=document.createElement('canvas');comparison.width=1248;comparison.height=240;const compare=comparison.getContext('2d');compare.fillStyle='#fbfbfc';compare.fillRect(0,0,1248,240);compare.font='500 14px -apple-system, BlinkMacSystemFont, sans-serif';
 const records=[];
 for(const [index,angle]of (query.get('angle')==='40'?[40]:[30,40,50]).entries()){
  const theta=THREE.MathUtils.degToRad(angle);
  camera.position.set(-distance*Math.sin(theta),target.y+distance*Math.tan(THREE.MathUtils.degToRad(14)),-distance*Math.cos(theta));camera.lookAt(target);
  renderer.render(scene,camera);
  const result=document.createElement('canvas');result.width=width;result.height=height;
  const context=result.getContext('2d');context.drawImage(renderer.domElement,0,0);
  const pixels=context.getImageData(0,0,width,height).data;let bottom=0;
  for(let row=0;row<height;row++)for(let column=0;column<width;column++)if(pixels[(row*width+column)*4+3]>100)bottom=Math.max(bottom,row);
  context.clearRect(0,0,width,height);context.drawImage(renderer.domElement,0,166*exportScale-bottom);
  const blob=await blobFrom(result),url=URL.createObjectURL(blob);
  const figure=document.createElement('figure'),image=new Image(),caption=document.createElement('figcaption'),link=document.createElement('a');
  image.src=url;image.alt=`${name} · 水平方位${angle}°`;link.href=url;link.download=`${model}-${angle}.png`;link.textContent='PNG';caption.append(`${angle}° · ${name}`,link);figure.append(image,caption);document.getElementById('angles').append(figure);
  compare.fillStyle='#ecedef';compare.fillRect(index*416,0,400,176);compare.drawImage(result,index*416,0,400,176);compare.fillStyle='#18181b';compare.fillText(`${angle}° · ${name}`,index*416+12,208);
  records.push({angle,elevation:14,fov:20,width,height,distance,bottomOpaquePixel:166*exportScale,model});
 }
 const link=document.getElementById('comparison');link.href=URL.createObjectURL(await blobFrom(comparison));link.download='vehicle-angles-30-40-50.png';link.hidden=false;
 document.body.dataset.audit=JSON.stringify(records);document.getElementById('status').textContent='三档已渲染。选定角度后再制作全部车型，当前均待用户验收。';renderer.dispose();
}
renderAngles().catch(error=>{document.getElementById('status').textContent=error.message;console.error(error)});
