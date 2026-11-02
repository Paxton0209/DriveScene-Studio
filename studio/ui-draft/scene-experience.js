import {createTrafficReveal,applyTrafficGrowth,trafficEntryOpacity} from './traffic-reveal.js';
import {parkingTargetFragment,parkingPathFragment,parkingStopFragment,softenIndoorTraffic,syncIndoorVehicleContacts,syncIndoorColumns,updateIndoorContactOpacity,syncParkingCastShadows,syncOutdoorLawns,createParkingSightTarget} from './parking-materials.js';
import * as THREE from 'three';
import {vehicleFrame} from '../engine/framing.js';
import {fitParkingCamera,sampleParkingView,parkingFrame,captureParkingView,parkingViewPose,applyParkingView} from './parking-camera.js';
import {updateParkingOcclusion} from './parking-occlusion.js';
import {parkingVehicle} from './parking-kinematics.js';
import {parkingPose,parkingTiming,parkingSegment,parkingPlan,exitPose,localBay,worldPose,reverseReplan} from './parking-motion.js';
import {createTrafficVehicle,readyTrafficModel,setTrafficAppearance} from '../engine/traffic-model.js';
import {prepareParkingMaterialStructure} from './saved-preview/parking-material-structure.mjs';

const clamp=THREE.MathUtils.clamp, smooth=t=>{t=clamp(t,0,1);return t*t*(3-2*t)};
// One slow breath confirms arrival before the complete bay fades away.
const completionRiseMs=900,completionFallMs=900,completionBreathMs=completionRiseMs+completionFallMs,completionCycles=1,completionPulseMs=completionBreathMs*completionCycles,completionFadeMs=600,completionDuration=completionPulseMs+completionFadeMs;
export const isParking=id=>['10','14','15','16','17','18','19'].includes(id);

// One continuous sky shader. Weather never replaces or reloads the scene.
export function weatherFrame(world,weather,material,palette){
 const now=world.draftTime??performance.now(),themeTone=world.draftThemeTone?.value??(world.state.mode==='dark'?1:0);
 let motion=world.draftWeather;
 if(!motion)motion=world.draftWeather={target:'default',from:{default:1,overcast:0,rain:0,snow:0},weights:{default:1,overcast:0,rain:0,snow:0},start:now};
 if(motion.target!==weather){motion.from={...motion.weights};motion.target=weather;motion.start=now;}
 const t=matchMedia('(prefers-reduced-motion: reduce)').matches?1:smooth((now-motion.start)/650);
 for(const key of Object.keys(motion.weights))motion.weights[key]=THREE.MathUtils.lerp(motion.from[key],key===weather?1:0,t);
 world.draftWeatherActive=t<1;const w=motion.weights,u=material.uniforms,original=world.sky.material;
 u.top.value.copy(original.uniforms.top.value);u.bottom.value.copy(original.uniforms.bottom.value);u.range.value=original.uniforms.range.value;u.weatherTop.value.copy(u.top.value).multiplyScalar(w.default);u.cloudLight.value.set(0);u.cloudShade.value.set(0);u.cloudOpacity.value=0;
 for(const key of ['overcast','rain','snow']){const light=palette[key].light,night=palette[key].dark;u.weatherTop.value.add(light.top.clone().lerp(night.top,themeTone).multiplyScalar(w[key]));u.cloudLight.value.add(light.light.clone().lerp(night.light,themeTone).multiplyScalar(w[key]));u.cloudShade.value.add(light.shade.clone().lerp(night.shade,themeTone).multiplyScalar(w[key]));u.cloudOpacity.value+=THREE.MathUtils.lerp(light.opacity,night.opacity,themeTone)*w[key];}
 const rain=w.rain,cloud=w.overcast;
 (world.draftReflectionWet??={value:0}).value=rain;
 // Ocean color follows the same continuous cloud cover as sky and lighting.
 (world.draftCoastCloud??={value:0}).value=clamp(rain+cloud*.72+w.snow*.88,0,1);
 const daylight=1-themeTone;u.weatherTop.value.lerp(new THREE.Color('#77818b'),rain*.72*daylight);u.bottom.value.lerp(new THREE.Color('#a6adb4'),(rain*.64+cloud*.16)*daylight);
 u.amount.value=1;u.coverage.value=0;const fog=world.scene.fog;if(fog?.color)fog.color.copy(u.bottom.value);world.draftWeatherHorizon=u.bottom.value.clone();const horizonBefore=original.uniforms.bottom.value.clone();original.uniforms.bottom.value.copy(u.bottom.value);
 // Baselines are captured before each temporary weather pass and restored after it.
 const lights=[world.sun,world.hemi,world.fill],intensities=lights.map(l=>l.intensity);
 world.sun.intensity*=1-(.50*rain+.20*cloud)*daylight;world.hemi.intensity*=1-.22*rain*daylight;world.fill.intensity*=1-.18*rain*daylight;
 world.sky.material=material;
 return ()=>{original.uniforms.bottom.value.copy(horizonBefore);world.sky.material=original;lights.forEach((l,i)=>l.intensity=intensities[i]);};
}

// Wheels are often merged into a material mesh. Give only wheel vertices a
// local axle rotation, preserving the prepared materials and body geometry.
export function installRollingWheels(car){
 if(car.userData.draftRolling)return car.userData.draftRolling;
 const wheels=car.userData.vehicleSpec?.wheels||[],distance={value:0},steer={value:0};
 const centres=wheels.map(w=>(w.min[2]+w.max[2])/2),front=centres.filter(z=>z<0),rear=centres.filter(z=>z>0),wheelbase={value:front.length&&rear.length?rear.reduce((a,b)=>a+b,0)/rear.length-front.reduce((a,b)=>a+b,0)/front.length:2.85};
 if(!wheels.length)return null;
 car.updateMatrixWorld(true);const inv=new THREE.Matrix4().copy(car.matrixWorld).invert();let affected=0;
 car.traverse(mesh=>{
  if(!mesh.isMesh||!mesh.geometry?.attributes.position)return;
  const toCar=new THREE.Matrix4().multiplyMatrices(inv,mesh.matrixWorld),fromCar=toCar.clone().invert(),p=new THREE.Vector3(),a=mesh.geometry.attributes.position,data=new Float32Array(a.count*4);
  const named=/wheel|tire|tyre|rim|disc/i.test([mesh.name,...(Array.isArray(mesh.material)?mesh.material:[mesh.material]).map(m=>m.name)].join(' '));let count=0;
  const axles=wheels.map(({min,max})=>({left:min[0]-.025,right:max[0]+.025,cx:(min[0]+max[0])/2,cy:(min[1]+max[1])/2,cz:(min[2]+max[2])/2,radius:(max[1]-min[1])/2*(named?1.035:.86)}));
  for(let i=0;i<a.count;i++){
   p.fromBufferAttribute(a,i).applyMatrix4(toCar);
   for(const axle of axles){
    if(p.x>=axle.left&&p.x<=axle.right&&Math.hypot(p.y-axle.cy,p.z-axle.cz)<axle.radius){const offset=i*4;data[offset]=axle.cx;data[offset+1]=axle.cy;data[offset+2]=axle.cz;data[offset+3]=1;count++;break;}
   }
  }
  if(!count)return;affected+=count;mesh.geometry=mesh.geometry.clone();mesh.geometry.setAttribute('draftAxle',new THREE.BufferAttribute(data,4));
  const patch=material=>{const copy=material.clone(),compile=material.onBeforeCompile,key=material.customProgramCacheKey();copy.onBeforeCompile=(shader,renderer)=>{compile.call(copy,shader,renderer);Object.assign(shader.uniforms,{draftWheelDistance:distance,draftWheelSteer:steer,draftWheelbase:wheelbase,draftToCar:{value:toCar},draftFromCar:{value:fromCar}});
   shader.vertexShader='attribute vec4 draftAxle;uniform float draftWheelDistance;uniform float draftWheelSteer;uniform float draftWheelbase;uniform mat4 draftToCar;uniform mat4 draftFromCar;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>','#include <beginnormal_vertex>\nfloat wheelAngle=-draftWheelDistance/max(.25,draftAxle.y);float wc=cos(wheelAngle),ws=sin(wheelAngle);mat3 wheelTurn=mat3(1.,0.,0.,0.,wc,ws,0.,-ws,wc);if(draftAxle.z<0.){float tangent=tan(draftWheelSteer);float wheelSteer=atan(draftWheelbase*tangent/(draftWheelbase+draftAxle.x*tangent));float sc=cos(wheelSteer),ss=sin(wheelSteer);wheelTurn=mat3(sc,0.,-ss,0.,1.,0.,ss,0.,sc)*wheelTurn;}if(draftAxle.w>.5)objectNormal=mat3(draftFromCar)*wheelTurn*mat3(draftToCar)*objectNormal;');
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nif(draftAxle.w>.5){vec3 wheelP=(draftToCar*vec4(transformed,1.)).xyz;wheelP=wheelTurn*(wheelP-draftAxle.xyz)+draftAxle.xyz;transformed=(draftFromCar*vec4(wheelP,1.)).xyz;}');};copy.customProgramCacheKey=()=>key+'-rolling-ackermann-v2';return copy;};
  mesh.material=Array.isArray(mesh.material)?mesh.material.map(patch):patch(mesh.material);
 });
 return car.userData.draftRolling={distance,steer,affected};
}


export function createParkingMotion(world){
 const trafficReveal=createTrafficReveal(),preparedGroups=new WeakMap();
 const axis=new THREE.Vector3(0,1,0),raised=new THREE.Vector3(0,22,14),bev=new THREE.Vector3(0,32,.015);
 let root,group,target=null,highlight,paths=[],stops=[],cars=[],occupied=[],active=false,elapsed=0,done=false,origin=null,modelReady=false,trafficVisible=false,cameraTween=null,ownedOffset=null,mode='in',exitChoice=0,exited=false,assistOn=false,lastPath='',routeYaw=0,cameraHeading=0,view='default',cameraState=null,cameraGoal=null,lastCameraTime=0,cameraVelocity={position:new THREE.Vector3(),aim:new THREE.Vector3(),anchor:0},replan=null,paused=false,resumeView='raised',badges=[],selectedAt=0,completionAt=null;
 let riseStart=.4,riseDuration=1,manualView=null,playbackReturn=null,routeOptions=null;
 const cameraOffset=kind=>kind==='bev'?bev:kind==='raised'?raised:new THREE.Vector3(0,11,22);
 let readyPromise,modelError=null;function ensureReady(){return readyPromise??=Promise.all([readyTrafficModel(null,'model-y'),prepareParkingMaterialStructure()]).then(()=>{modelReady=true;modelError=null;}).catch(error=>{readyPromise=null;modelError=error.message;throw error})}
 const now=()=>world.draftTime??0;
 const own=mesh=>{mesh.userData.draftOwned=true;group.add(mesh);return mesh;};
 function currentCamera(){
  // Replay restores the camera before framing metadata is refreshed. Start
  // each transition at the projected pose rather than the previous BEV anchor.
  const frame=parkingFrame(world.car,world.camera);
  return {...captureParkingView(world.camera,world.car,world.cameraAim),anchor:(frame.top+frame.bottom)/2};
 }
 function goalFor(kind){
  // Keep the selected elevation and align the vehicle nose with screen up.
  if(manualView)return parkingViewPose(world.camera,world.car,manualView);
  if(kind==='default'||!target||cameraState?.reference)return parkingViewPose(world.camera,world.car,kind);
  const car=world.car.position,focus=car.clone().add(new THREE.Vector3(0,.85,0));
  const reverse=mode==='in'&&!done&&target?(replan?clamp(elapsed/replan.duration,0,1):clamp((elapsed-timing().forward-timing().shift)/timing().reverse,0,1)):0;

  const extent=target?Math.hypot(target.x-car.x,target.z-car.z):0;
  const distance=Math.max(30,Math.min(50,30+extent*.35));
  const top=kind==='bev'?1:kind==='raised'?smooth(clamp((reverse-.14)/.72,0,1)):0;
  const elevation=THREE.MathUtils.lerp(.91,Math.PI/2-.001,top);
  const offset=new THREE.Vector3(0,Math.sin(elevation),Math.cos(elevation)).applyAxisAngle(axis,cameraHeading);
  const points=[];
  if(target){
   for(const x of [-.5,.5])for(const z of [-.5,.5])points.push(new THREE.Vector3(target.x+x*target.width,.05,target.z+z*target.depth));
   if(!done){const end=mode==='out'?7.5:timing().total;for(let t=elapsed;t<=end;t+=(end-elapsed)/12||1){const p=pose(t);points.push(new THREE.Vector3(p.x,.25,p.z));}}
  }
  return fitParkingCamera(world.camera,car,world.car.rotation.y,focus,offset,distance,points,.5,true);
 }
 function moveCamera(offset,duration=650,manual=false){
  view=offset.y>30?'bev':offset.y>15?'raised':'default';
  if(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches)duration=1;
  world.finishCameraMotion();cameraState=currentCamera();cameraState.reference=manual;cameraGoal=goalFor(view);cameraTween={from:{...cameraState,position:cameraState.position.clone(),aim:cameraState.aim.clone(),velocity:cameraVelocity.position.clone()},velocity:{position:cameraVelocity.position.clone(),aim:cameraVelocity.aim.clone(),anchor:cameraVelocity.anchor},start:now(),duration,manual};ownedOffset=offset.clone();lastCameraTime=now();
 }
 function camera(){
  if(!ownedOffset)return;
  if(paused&&(!cameraTween?.manual||playbackReturn!==null)){lastCameraTime=now();return;}
  const time=now(),dt=clamp((time-lastCameraTime)/1000,0,.1);lastCameraTime=time;
  cameraGoal=goalFor(view);
  const previous={position:cameraState.position.clone(),aim:cameraState.aim.clone(),anchor:cameraState.anchor};
  if(manualView||cameraTween?.manual||!cameraTween&&(cameraState.reference||!target)){
   cameraState=cameraTween?sampleParkingView(cameraTween.from,cameraGoal,globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches?10000:time-cameraTween.start,world.car.position.clone().add(new THREE.Vector3(0,.85,0))):cameraGoal;
   if(cameraState.complete)cameraTween=null;
   if(dt>0){cameraVelocity.position.copy(cameraState.position).sub(previous.position).divideScalar(dt);cameraVelocity.aim.copy(cameraState.aim).sub(previous.aim).divideScalar(dt);cameraVelocity.anchor=(cameraState.anchor-previous.anchor)/dt;}
   applyParkingView(world.camera,world.car,cameraState);world.cameraAim.copy(cameraState.aim);
   const actual=vehicleFrame(world.car,world.camera);world.framing={group:view==='default'?'low':'high',targetCenter:cameraState.anchor,targetBottom:actual.bottom,vehicleFrame:actual};
   return;
  }
  if(cameraTween){const u=clamp(cameraTween.legEnd!==undefined?(elapsed-cameraTween.legStart)/Math.max(.001,cameraTween.legEnd-cameraTween.legStart):(time-cameraTween.start)/cameraTween.duration,0,1),t=smooth(u),v=u*(1-u)*(1-u)*cameraTween.duration/1000;
   for(const key of ['position','aim'])cameraState[key].copy(cameraTween.from[key]).lerp(cameraGoal[key],t).addScaledVector(cameraTween.velocity[key],v);
   // Lift around a single vehicle pivot; avoid a diagonal dolly during rise.
   if((cameraTween.legEnd!==undefined||cameraTween.duration===1000)&&!cameraTween.manual){
    const pivot=world.car.position.clone().add(new THREE.Vector3(0,.85,0)),startPivot=cameraTween.pivot||pivot,a=new THREE.Spherical().setFromVector3(cameraTween.from.position.clone().sub(startPivot)),b=new THREE.Spherical().setFromVector3(cameraGoal.position.clone().sub(pivot));
    if(cameraTween.legEnd!==undefined)a.theta+=cameraHeading-cameraTween.heading;
    b.theta=a.theta+Math.atan2(Math.sin(b.theta-a.theta),Math.cos(b.theta-a.theta));
    cameraState.position.setFromSpherical(new THREE.Spherical(THREE.MathUtils.lerp(a.radius,b.radius,t),THREE.MathUtils.lerp(a.phi,b.phi,t),THREE.MathUtils.lerp(a.theta,b.theta,t))).add(pivot);
    // Position and aim follow the same translating pivot. A stationary aim
    // crosses the overhead pole as the vehicle starts, causing a half-turn.
    cameraState.aim.copy(cameraTween.from.aim).add(pivot.clone().sub(startPivot)).lerp(cameraGoal.aim,t);
   }
   // Return behind a reversed car by orbiting the aim, avoiding the lookAt pole.
   const fromOffset=cameraTween.from.position.clone().sub(cameraTween.from.aim),toOffset=cameraGoal.position.clone().sub(cameraGoal.aim);
   const fromHeading=Math.atan2(fromOffset.x,fromOffset.z),turn=Math.atan2(Math.sin(Math.atan2(toOffset.x,toOffset.z)-fromHeading),Math.cos(Math.atan2(toOffset.x,toOffset.z)-fromHeading));
   if(Math.abs(turn)>Math.PI/2){
    const heading=fromHeading+turn*t,radius=THREE.MathUtils.lerp(Math.hypot(fromOffset.x,fromOffset.z),Math.hypot(toOffset.x,toOffset.z),t);
    cameraState.position.x=cameraState.aim.x+Math.sin(heading)*radius+(cameraTween.velocity.position.x-cameraTween.velocity.aim.x)*v;
    cameraState.position.z=cameraState.aim.z+Math.cos(heading)*radius+(cameraTween.velocity.position.z-cameraTween.velocity.aim.z)*v;
   }
   cameraState.anchor=THREE.MathUtils.lerp(cameraTween.from.anchor,cameraGoal.anchor,t)+cameraTween.velocity.anchor*v;if(u>=1)cameraTween=null;
  }else {const damping=1-Math.exp(-dt*4.5);cameraState.position.lerp(cameraGoal.position,damping);cameraState.aim.lerp(cameraGoal.aim,damping);cameraState.anchor=cameraGoal.anchor;}
  if(active&&!cameraTween){const radius=Math.hypot(cameraState.position.x-cameraState.aim.x,cameraState.position.z-cameraState.aim.z);cameraState.position.x=cameraState.aim.x+Math.sin(cameraHeading)*radius;cameraState.position.z=cameraState.aim.z+Math.cos(cameraHeading)*radius;}
  if(dt>0){cameraVelocity.position.copy(cameraState.position).sub(previous.position).divideScalar(dt);cameraVelocity.aim.copy(cameraState.aim).sub(previous.aim).divideScalar(dt);cameraVelocity.anchor=(cameraState.anchor-previous.anchor)/dt;}
  world.camera.position.copy(cameraState.position);world.camera.clearViewOffset();world.camera.up.set(0,1,0);world.cameraAim.copy(cameraState.aim);world.camera.lookAt(world.cameraAim);world.camera.updateMatrixWorld(true);
  if(world.car.children.some(o=>o.isMesh||o.children.length)){
   const before=parkingFrame(world.car,world.camera),anchor=cameraState.anchor;
   const centerY=(before.top+before.bottom)/2,centerX=before.left+before.width/2;
   world.camera.setViewOffset(1920,1080,(centerX-.5)*1920,(centerY-anchor)*1080,1920,1080);world.camera.updateMatrixWorld(true);
   const actual=vehicleFrame(world.car,world.camera);world.framing={group:view==='default'?'low':'high',targetCenter:anchor,targetBottom:anchor+before.height/2,vehicleFrame:actual};
  }
 }
 function ensure(){
  if(!isParking(world.state?.id)){if(group)group.visible=false;return false;}
  if(root===world.root)return true;
  if(group&&root)preparedGroups.set(root,{group,highlight,paths,stops,cars,occupied,badges});group?.removeFromParent();
  routeOptions=null;playbackReturn=null;manualView=null;view=['14','19'].includes(world.state.id)?'bev':['16','18'].includes(world.state.id)?'raised':'default';root=world.root;group=new THREE.Group();group.name='Parking maneuver';world.scene.add(group);world.draftParkingGroup=group;delete world.car.userData.draftIndoorContact;cars=[];target=null;active=false;elapsed=0;done=false;origin=null;ownedOffset=null;cameraTween=null;mode='in';exited=false;exitChoice=0;lastPath='';cameraState=null;cameraGoal=null;cameraVelocity={position:new THREE.Vector3(),aim:new THREE.Vector3(),anchor:0};replan=null;paused=false;badges=[];selectedAt=0;completionAt=null;
  const cached=preparedGroups.get(root);
  if(cached){group.removeFromParent();({group,highlight,paths,stops,cars,occupied,badges}=cached);world.scene.add(group);world.draftParkingGroup=group;ownedOffset=view==='bev'?bev.clone():view==='raised'?raised.clone():new THREE.Vector3(0,11,22);cameraState=goalFor(view);cameraGoal=cameraState;lastCameraTime=now();camera();return true;}
  const bays=world.parkingBays||[];occupied=bays.filter((b,i)=>[3,7,11,14,16].includes(i));const b=bays[0];if(!b)return true;
  highlight=own(new THREE.Mesh(new THREE.PlaneGeometry(8,b.depth),new THREE.ShaderMaterial({transparent:true,depthWrite:false,toneMapped:false,polygonOffset:true,polygonOffsetFactor:-4,uniforms:{tone:{value:0},celebrate:{value:0},completion:{value:1},success:{value:0},selected:{value:0}},vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:parkingTargetFragment})));
  for(const [i,bay]of bays.entries()){const badge=createParkingSightTarget(i+1);if(badge){badge.userData.bay=bay;badge.position.set(bay.x,.055,bay.z);group.add(badge);badges.push(badge);}}
  highlight.name='Parking target space';highlight.renderOrder=2;highlight.rotation.x=-Math.PI/2;highlight.position.y=.032;
  paths=[0,1].map(i=>own(new THREE.Mesh(new THREE.BufferGeometry(),new THREE.ShaderMaterial({transparent:true,depthWrite:false,toneMapped:false,side:THREE.DoubleSide,uniforms:{tone:{value:0},opacity:{value:i?.40:.84},activation:{value:1},startFade:{value:i?0:1},endFade:{value:i?1:0}},vertexShader:'attribute vec2 uv;varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}'.replace('attribute vec2 uv;',''),fragmentShader:parkingPathFragment}))));
  paths.forEach((p,i)=>{p.name=i?'Parking reverse path':'Parking approach path';p.renderOrder=3});
  stops=[0,1].map(i=>{const m=own(new THREE.Mesh(new THREE.PlaneGeometry(1,.065),new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,side:THREE.DoubleSide,toneMapped:false,vertexShader:'void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:parkingStopFragment})));m.name=i?'Reverse stop line':'Approach stop line';m.rotation.x=-Math.PI/2;m.renderOrder=4;return m;});
  ownedOffset=view==='bev'?bev.clone():view==='raised'?raised.clone():new THREE.Vector3(0,11,22);cameraState=goalFor(view);cameraGoal=cameraState;lastCameraTime=now();camera();
  return true;
 }
 const boundsCache=new WeakMap();
 function vehicleBounds(car){
  if(boundsCache.has(car))return boundsCache.get(car);
  car.updateMatrixWorld(true);const inverse=new THREE.Matrix4().copy(car.matrixWorld).invert(),bounds=new THREE.Box3();
  car.traverse(o=>{if(!o.isMesh||o.userData.trafficShadow||!o.geometry?.attributes.position)return;o.geometry.computeBoundingBox();bounds.union(o.geometry.boundingBox.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld)));});
  const size=bounds.getSize(new THREE.Vector3()),spec=car.userData.vehicleSpec||{};
  const result={...spec,width:size.x||spec.width||2.1,length:spec.length||size.z||4.72,frontOffset:Number.isFinite(bounds.min.z)?bounds.min.z:-(spec.length||4.72)/2};boundsCache.set(car,result);return result;
 }
 function planningOptions(){
  // A layer reveal must never change the route underneath a moving vehicle.
  if(routeOptions)return routeOptions;
  const start=origin?.carPosition||world.car.position,base=routeYaw;
  const obstacles=(trafficVisible?cars.filter(c=>c.userData.bay!==target).map(c=>({x:c.position.x,z:c.position.z,width:vehicleBounds(c).width,length:vehicleBounds(c).length,yaw:c.rotation.y})):[])
   .concat((world.parkingColumns||[]).map(c=>({x:c.position.x,z:c.position.z,width:.78,length:.78,yaw:0})))
   .map(o=>({...o,...localBay(o,start,base),yaw:o.yaw-base}));
  return {vehicle:vehicleBounds(world.car),obstacles};
 }
 function timing(){if(replan)return {forward:0,shift:0,reverse:replan.duration,total:replan.duration};if(!target)return {forward:5,shift:.3,reverse:7.5,total:12.8};return parkingTiming(localBay(target,origin?.carPosition||world.car.position,routeYaw),0,planningOptions());}
 function pose(t){
  if(mode==='out')return exitPose(t,target,exitChoice||-1);
  if(replan)return replan.sample(t);
  const start=origin?.carPosition||world.car.position,local=localBay(target,start,routeYaw),p=parkingPose(t,local,0,planningOptions());return worldPose(p,start,routeYaw);
 }
 function meshRibbon(mesh,points){
  const count=points.length;
  let geometry=mesh.geometry,position=geometry.getAttribute('position'),uv=geometry.getAttribute('uv');
  if(position?.count!==count*2||uv?.count!==count*2){
   geometry.dispose();geometry=mesh.geometry=new THREE.BufferGeometry();
   position=new THREE.BufferAttribute(new Float32Array(count*6),3);uv=new THREE.BufferAttribute(new Float32Array(count*4),2);
   geometry.setAttribute('position',position);geometry.setAttribute('uv',uv);
   const indices=[];for(let i=0;i<count-1;i++){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}geometry.setIndex(indices);
  }
  let total=0;for(let i=1;i<count;i++)total+=points[i].distanceTo(points[i-1]);total=Math.max(.00001,total);
  let length=0;
  for(let i=0;i<count;i++){
   if(i)length+=points[i].distanceTo(points[i-1]);
   const p=points[i],next=points[Math.min(i+1,count-1)],previous=points[Math.max(0,i-1)];
   const dx=next.x-previous.x,dy=next.y-previous.y,dz=next.z-previous.z,inverse=1/(Math.sqrt(dx*dx+dy*dy+dz*dz)||1),sx=dz*inverse*.5,sz=-dx*inverse*.5;
   const left=p.edges?.[0],right=p.edges?.[1];
   position.setXYZ(i*2,left?.x??p.x+sx,p.y,left?.z??p.z+sz);position.setXYZ(i*2+1,right?.x??p.x-sx,p.y,right?.z??p.z-sz);
   const v=p.routeV??length/total;uv.setXY(i*2,0,v);uv.setXY(i*2+1,1,v);
  }
  position.needsUpdate=true;uv.needsUpdate=true;geometry.computeBoundingSphere();
 }
 function ribbon(){
  const key=[elapsed,mode,exitChoice,target.x,target.z].join('|');if(key===lastPath)return;lastPath=key;
  const {forward,shift,total}=timing(),reverseStart=forward+shift,half=(world.car.userData.vehicleSpec?.length||4.85)/2;
  // Follow the leading axle in each gear. The one-metre ribbon shares the
  // tangent of the leading axle, including front-wheel steering.
  const spec=world.car.userData.vehicleSpec||{},vehicle=parkingVehicle(spec),front=vehicle.rearOffset-vehicle.wheelbase;
  const guideHalfWidth=.5;
  const pointAt=(time,offset)=>{const p=pose(time),s=Math.sin(p.yaw),c=Math.cos(p.yaw),point=new THREE.Vector3(p.x+s*offset,.036,p.z+c*offset);point.time=time;if(mode==='in'){const heading=p.yaw+(offset<0?p.steer||0:0);point.edges=[-guideHalfWidth,guideHalfWidth].map(x=>({x:point.x+Math.cos(heading)*x,z:point.z-Math.sin(heading)*x}));}return point;};
  const sample=(begin,end,offset=0,count=144)=>Array.from({length:count+1},(_,i)=>pointAt(begin+(end-begin)*i/count,offset));
  // Anchor colour and fade coordinates to the complete leg. Only its travelled
  // prefix changes; future vertices never slide along or repaint the route.
  const anchor=points=>{let length=0;points[0].routeV=0;for(let i=1;i<points.length;i++){length+=points[i].distanceTo(points[i-1]);points[i].routeV=length;}for(const p of points)p.routeV/=Math.max(length,.00001);return points;};
  const remaining=(points,time,offset)=>{if(time<=points[0].time)return points;const index=points.findIndex(p=>p.time>time);if(index<0)return [points.at(-1)];const head=pointAt(time,offset),a=points[index-1],b=points[index];head.routeV=THREE.MathUtils.lerp(a.routeV,b.routeV,(time-a.time)/Math.max(b.time-a.time,.00001));return [head,...points.slice(index)];};
  const trim=(points,length)=>{while(points.length>2&&length>0){const d=points[0].distanceTo(points[1]);if(d>=length){points[0].lerp(points[1],length/Math.max(d,.00001));break;}length-=d;points.shift();}return points;};
  const stopAt=(index,points,yaw,front=0)=>{const cap=points.at(-1).clone();cap.x-=Math.sin(yaw)*front;cap.z-=Math.cos(yaw)*front;cap.y=.039;stops[index].position.copy(cap);stops[index].rotation.z=yaw;};
  if(mode==='out'){const points=trim(sample(elapsed,7.5),half);stopAt(0,points,pose(7.5).yaw);meshRibbon(paths[0],points);paths[1].visible=false;stops[1].visible=false;return;}
  let first=sample(0,forward,front),second=sample(reverseStart,total,vehicle.rearOffset);
  // The stop marker and zero-speed pose share the nose's ground projection.
  // Extend only the final cap; the moving ribbon still follows the front axle.
  first.push(pointAt(forward,vehicleBounds(world.car).frontOffset));
  // Finish the fade at the parked rear bumper, next to the bay's wheel stop.
  const finish=pose(total),tail=(spec.length||4.72)/2,endpoint=new THREE.Vector3(finish.x+Math.sin(finish.yaw)*tail,.036,finish.z+Math.cos(finish.yaw)*tail);
  endpoint.edges=[-guideHalfWidth,guideHalfWidth].map(x=>({x:endpoint.x+Math.cos(finish.yaw)*x,z:endpoint.z-Math.sin(finish.yaw)*x}));second.push(endpoint);
  // The front/rear axle handover lies entirely beneath the stationary chassis.
  const seam=first.at(-1).clone();seam.edges=first.at(-1).edges;seam.time=reverseStart;second.unshift(seam);
  endpoint.time=total;anchor(first);anchor(second);first=remaining(first,Math.min(elapsed,forward),front);second=remaining(second,Math.max(reverseStart,elapsed),vehicle.rearOffset);
  // The next leg is visible from selection. Both legs meet at the same
  // direction-change point; the vehicle naturally masks the seam.
  // Keep the route under the chassis; AO and the body mask its exact origin.
  const approach=pose(forward);
  stopAt(0,first,approach.yaw);meshRibbon(paths[0],first);meshRibbon(paths[1],second);
 }
 function sync({traffic=false,assist=false}={}){
  const first=root!==world.root;if(!ensure())return;if(traffic&&!modelReady)void ensureReady().catch(error=>console.error(error));trafficReveal.set(traffic&&modelReady,{snap:first||world.draftInitialFrameReady!==true});const growth=trafficReveal.sample();group.visible=true;trafficVisible=traffic;assistOn=assist;if(!assist&&active)pause();
  // Leave the foreground-left bay empty; retain the other vehicles' original offsets.
  if(modelReady&&!cars.length)for(const [index,bay]of occupied.entries()){const i=index+1,car=createTrafficVehicle('model-y');car.position.set(bay.x+(i%2?.10:-.10),.02,bay.z+(i%3-1)*.10);car.rotation.y=(bay.x>0?Math.PI/2:-Math.PI/2)+(i%2?.014:-.012);car.userData.bay=bay;group.add(car);cars.push(car);}
  if(traffic&&target&&occupied.includes(target)&&!elapsed&&!active)target=null;
  cars.forEach(car=>{car.userData.draftPaintBrightness=(['10','14','15','16'].includes(world.state.id)?(world.draftParkingFinish?.traffic?.value??1):1)*(1+.22*(1-(world.draftThemeTone?.value??(world.state.mode==='dark'?1:0))));car.visible=trafficReveal.present&&car.userData.bay!==target;setTrafficAppearance(car,world.state.mode==='dark',trafficEntryOpacity(growth),world.draftThemeTone?.value??(world.state.mode==='dark'?1:0),.6*(1-(world.draftThemeTone?.value??(world.state.mode==='dark'?1:0))));softenIndoorTraffic(car,1-(world.draftThemeTone?.value??(world.state.mode==='dark'?1:0)),world.draftParkingFinish?.trafficGray?.value??.6);applyTrafficGrowth(car,growth,world)});
  for(const bay of world.parkingBays||[])if(bay.tile?.material.uniforms.available)bay.tile.material.uniforms.available.value=bay!==target&&(!traffic||!occupied.includes(bay))?1:0;
  // Hide markers during material review; preserve their sight targets and occlusion behavior.
  badges.forEach(b=>{b.userData.parkingSightTarget=!active&&!done&&mode==='in'&&(!traffic||!occupied.includes(b.userData.bay));b.visible=false;});
  const sightPoints=badges.filter(b=>b.userData.parkingSightTarget).flatMap(b=>[-.24,0,.24].map(dx=>b.position.clone().add(new THREE.Vector3(dx,0,0))));
  if(target&&!done&&(elapsed===0||assist)){
   const end=mode==='out'?7.5:timing().total;
   for(let i=0;i<=12;i++){const p=pose(elapsed+(end-elapsed)*i/12);for(const side of [-.82,.82])sightPoints.push(new THREE.Vector3(p.x+Math.cos(p.yaw)*side,.1,p.z-Math.sin(p.yaw)*side));}
  }
  const indoor=['10','14','15','16'].includes(world.state.id);
  const vehicles=syncIndoorVehicleContacts(group,world.car,cars,indoor,world.draftParkingFinish,world.draftThemeTone?.value??(world.state.mode==='dark'?1:0));
  camera();syncIndoorColumns(world);if(!indoor)syncOutdoorLawns(world);updateParkingOcclusion(world,group,target,sightPoints);
  updateIndoorContactOpacity(vehicles,world.draftParkingFinish?.trafficShadow??world.draftParkingFinish?.shadow,world.draftParkingFinish?.egoShadow??world.draftParkingFinish?.shadow,world.car);syncParkingCastShadows(world,vehicles,indoor);
  if(!highlight)return;
  highlight.material.uniforms.selected.value=globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches?1:smooth((now()-selectedAt)/850);
  highlight.visible=!!target&&assist;highlight.material.uniforms.tone.value=world.draftThemeTone?.value??(world.state.mode==='dark'?1:0);const reduced=!!globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches,age=done&&mode==='in'&&completionAt!==null?Math.max(0,now()-completionAt):null;
  const cycleAge=age===null||age>=completionPulseMs?null:age%completionBreathMs;
  const breath=cycleAge===null?0:cycleAge<completionRiseMs?cycleAge/completionRiseMs:1-(cycleAge-completionRiseMs)/completionFallMs;
  highlight.material.uniforms.success.value=age===null?0:reduced?1:smooth(age/200);
  highlight.material.uniforms.celebrate.value=age===null||reduced?0:Math.sin(Math.PI/2*clamp(breath,0,1))**2;highlight.material.uniforms.completion.value=age===null?1:1-smooth(reduced?age/200:(age-completionPulseMs)/completionFadeMs);
  const visible=!!target&&!done&&assist;paths.forEach((p,i)=>{p.visible=visible&&(mode==='out'?i===0:timing().forward>0&&elapsed<timing().forward+timing().shift||i===1);p.material.uniforms.tone.value=highlight.material.uniforms.tone.value;p.material.uniforms.activation.value=1;p.material.uniforms.opacity.value=i?(mode==='out'||timing().forward===0?.75:THREE.MathUtils.lerp(.4,.75,smooth((elapsed-timing().forward)/timing().shift))):1;p.material.uniforms.endFade.value=mode==='out'||i===1?1:0;stops[i].visible=i===0&&p.visible&&mode==='in'&&!replan;});if(visible)ribbon();
 }
 function hitBay(x,y){
  const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2(x,y),world.camera);const badge=ray.intersectObjects(badges.filter(b=>b.visible))[0]?.object;if(badge)return badge.userData.bay;const p=ray.ray.intersectPlane(new THREE.Plane(axis,-.03),new THREE.Vector3());
  return p?(world.parkingBays||[]).find(b=>Math.abs(p.x-b.x)<b.width/2&&Math.abs(p.z-b.z)<b.depth/2&&(!trafficVisible||!occupied.includes(b))):null;
 }
 function hover(x,y){if(!ensure())return false;const bay=assistOn&&!active&&!done&&mode==='in'&&x!==null?hitBay(x,y):null;let changed=false;for(const b of world.parkingBays||[]){const uniform=b.tile?.material.uniforms.hover;if(!uniform)continue;const value=b===bay&&b!==target?1:0;if(uniform.value!==value){uniform.value=value;changed=true;}}return changed;}
 function selectBay(bay){
  if(!bay||trafficVisible&&occupied.includes(bay))return false;selectedAt=now();completionAt=null;
  routeOptions=null;const retarget=elapsed>0;target=bay;routeYaw=world.car.rotation.y;origin=world.captureCamera();if(!retarget&&!parkingPlan(localBay(target,origin.carPosition,routeYaw),0,planningOptions())){target=null;origin=null;return false;}replan=retarget&&Math.abs(Math.sin(routeYaw))>.02?reverseReplan({x:world.car.position.x,z:world.car.position.z,yaw:routeYaw},bay):null;elapsed=0;paused=false;exited=false;cameraHeading=pose(timing().total).yaw-Math.sign(bay.x)*Math.PI/2;lastPath='';highlight.position.set(bay.x,.032,bay.z);if(!manualView&&view==='default')moveCamera(raised,1000);return true;
 }
 function pick(x,y){
  if(!ensure()||active||done||mode==='out')return false;
  return selectBay(hitBay(x,y));
 }
 function selectDefault(){
  if(!ensure()||active||done||mode==='out')return false;
  if(target)return true;
  const bays=[...(world.parkingBays||[])].sort((a,b)=>Math.abs(a.z+3.6)-Math.abs(b.z+3.6)||a.x-b.x);
  return bays.some(selectBay);
 }
 function progress(){
  if(!target)return {gear:null,remaining:null};
  if(done)return {gear:'P',remaining:0};
  if(mode==='out')return exitChoice?{gear:'D',remaining:Math.max(0,Math.abs(target.x)*Math.PI/2-pose(elapsed).distance)}:{gear:'P',remaining:null};
  if(replan)return {gear:'R',remaining:replan.remaining(elapsed)};
  return parkingSegment(elapsed,localBay(target,origin?.carPosition||world.car.position,routeYaw),0,planningOptions());
 }
 function automaticRise(){
  if(cameraState)cameraState.reference=false;
  const end=mode==='in'&&!replan?riseStart+(riseDuration??timing().forward):0;
  moveCamera(raised,elapsed<end?(end-elapsed)*1000:1000);
  if(elapsed<end&&!globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches){Object.assign(cameraTween,{legStart:Math.max(elapsed,riseStart),legEnd:end,pivot:world.car.position.clone().add(new THREE.Vector3(0,.85,0)),heading:cameraHeading});}
 }
 function start(){
  ensure();if(!target||mode==='out'&&!exitChoice||done)return false;if(active)return true;
  if(!origin)origin=world.captureCamera();routeOptions??=planningOptions();const restoring=paused;paused=false;
  cameraHeading=pose(elapsed).yaw;
  if(restoring){if(playbackReturn!==null&&cameraTween)cameraTween.start=now()-playbackReturn*1000;lastCameraTime=now();active=true;assistOn=true;return true;}
  // High already begins at the assisted elevation. Join the automatic camera
  // from that pose; only the end-stage BEV needs the return through Low.
  if(manualView==='raised'&&mode==='in'){
   manualView=null;automaticRise();
  }else if(manualView&&mode==='in'){
   manualView=null;playbackReturn=0;moveCamera(cameraOffset('default'),650,true);
  }else automaticRise();
  active=true;assistOn=true;return true;
 }
 function pause(){if(active){resumeView=view;active=false;paused=true;lastCameraTime=now();}}
 function configureCamera(values={}){
  const nextStart=Number.isFinite(values.start)?clamp(values.start,0,8):riseStart,nextDuration=values.duration===null?null:Number.isFinite(values.duration)?clamp(values.duration,.2,8):riseDuration;
  const changed=nextStart!==riseStart||nextDuration!==riseDuration;riseStart=nextStart;riseDuration=nextDuration;
  if(changed&&!manualView&&target&&!done&&mode==='in'&&!replan&&(active||paused)){
   const end=riseStart+(riseDuration??timing().forward);moveCamera(raised,Math.max(.001,end-Math.max(elapsed,riseStart))*1000);
   Object.assign(cameraTween,{legStart:Math.max(elapsed,riseStart),legEnd:Math.max(elapsed+.001,end),pivot:world.car.position.clone().add(new THREE.Vector3(0,.85,0)),heading:cameraHeading});
  }
  return {start:riseStart,duration:riseDuration};
 }
 function reset({replay=false}={}){
  const from=currentCamera(),previous=world.car.position.clone(),previousView=view,previousManual=manualView;
  active=false;elapsed=0;done=false;completionAt=null;exited=false;mode='in';exitChoice=0;world.draftWheelDistance=0;world.draftWheelSteer=0;
  if(origin)world.applyCamera(origin);world.car.rotation.y=0;origin=null;routeOptions=null;ownedOffset=null;cameraTween=null;cameraState=null;replan=null;paused=false;playbackReturn=null;lastPath='';cameraVelocity={position:new THREE.Vector3(),aim:new THREE.Vector3(),anchor:0};
  if(replay){view='default';manualView=null;cameraHeading=world.car.rotation.y;}
  else if(isParking(world.state?.id)&&root===world.root){
   // Replay resets the car while retaining the current viewing direction;
   // start() then eases that view to Low instead of snapping the camera.
   const shift=world.car.position.clone().sub(previous);from.position.add(shift);from.aim.add(shift);
   view=previousView;manualView=previousView;cameraHeading=world.car.rotation.y;ownedOffset=cameraOffset(view).clone();cameraState=from;cameraGoal=from;lastCameraTime=now();
   applyParkingView(world.camera,world.car,from);world.cameraAim.copy(from.aim);manualView=previousManual==='raised'?'raised':'default';moveCamera(cameraOffset(manualView),650,true);
  }
 }

 // The broad setup arc lets the camera turn with the chassis continuously,
 // keeping the final parked vehicle facing up in the frame.
 function step(dt){if(!active||!target||!assistOn)return false;if(playbackReturn!==null){playbackReturn+=dt;camera();if(playbackReturn>=.85||globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches){playbackReturn=null;cameraVelocity.position.set(0,0,0);cameraVelocity.aim.set(0,0,0);cameraVelocity.anchor=0;automaticRise();}return true;}elapsed=Math.min(mode==='out'?7.5:timing().total,elapsed+dt);const p=pose(elapsed);cameraHeading=p.yaw;world.car.position.set(p.x,origin.carPosition.y,p.z);world.car.rotation.y=p.yaw;world.draftWheelDistance=p.distance;world.draftWheelSteer=p.complete?0:(p.steer??0);camera();if(p.complete){active=false;done=true;world.draftWheelSteer=0;if(mode==='in'){completionAt=now();if(!manualView)moveCamera(bev,650);}else{exited=true;target=null;elapsed=0;done=false;mode='in';exitChoice=0;origin=null;routeOptions=null;routeYaw=world.car.rotation.y;cameraHeading=routeYaw;replan=null;}}return true;}
 return {get ready(){return ensureReady()},revealTraffic(){trafficReveal.set(false);trafficReveal.set(true)},sync,start,pick,selectDefault,hover,step,reset,configureCamera,finishPreview(){if(done&&mode==='in')completionAt=now()-completionDuration;if(cameraTween){cameraState=goalFor(view);cameraTween=null;camera();}},previewCamera(value){ensure();const kind={'10':'default','16':'raised','14':'bev'}[value]||value;manualView=kind;moveCamera(cameraOffset(kind),650,true);return true;},pause,useCamera(){ownedOffset=null;cameraTween=null},animating:()=>done&&mode==='in'&&completionAt!==null&&now()-completionAt<(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches?200:completionDuration)||trafficReveal.active||!!world.draftOcclusionActive||(!paused||cameraTween?.manual)&&(!!cameraTween||!!ownedOffset&&!!cameraState&&!!cameraGoal&&cameraState.position.distanceTo(cameraGoal.position)>.003),prepareExit(){if(!done)return false;mode='out';done=false;completionAt=null;elapsed=0;exitChoice=0;origin=null;routeOptions=null;replan=null;paused=false;lastPath='';return true},chooseExit(direction){if(mode!=='out'||active)return false;exitChoice=direction<0?-1:1;lastPath='';if(!manualView)moveCamera(raised);return true},get:()=>({...progress(),traffic:{enabled:trafficVisible,modelReady,modelError,count:cars.length,visible:cars.filter(car=>group?.visible&&car.visible&&car.userData.modelReady&&car.userData.draftTrafficEntryOpacity>.98).length,inView:cars.filter(car=>{if(!group?.visible||!car.visible||!car.userData.modelReady||car.userData.draftTrafficEntryOpacity<=.98)return false;const p=car.getWorldPosition(new THREE.Vector3()).project(world.camera);return Math.abs(p.x)<1&&Math.abs(p.y)<1&&Math.abs(p.z)<1}).length},active,elapsed,selectedAt,complete:done,replayReady:done&&completionAt!==null&&now()-completionAt>=(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches?200:completionPulseMs),target:target?{x:target.x,z:target.z}:null,phase:mode==='out'&&!exitChoice?'exit-select':done?'parked':target?pose(elapsed).phase:'select',mode,exitChoice,exited,cameraLocked:active,view,manualView,paused,camera:{position:world.camera.position.toArray(),aim:world.cameraAim.toArray(),heading:cameraHeading,tween:!!cameraTween},occupied:occupied.map(b=>({x:b.x,z:b.z}))}),capture:()=>({routeOptions,playbackReturn,trafficReveal:trafficReveal.capture(),elapsed,active,done,selectedAt,completionAt,origin,target,ownedOffset:ownedOffset?.clone(),cameraTween:cameraTween?{...cameraTween,from:{...cameraTween.from,position:cameraTween.from.position.clone(),aim:cameraTween.from.aim.clone()},velocity:{position:cameraTween.velocity.position.clone(),aim:cameraTween.velocity.aim.clone(),anchor:cameraTween.velocity.anchor}}:null,mode,exitChoice,exited,assistOn,routeYaw,cameraHeading,view,manualView,cameraState:cameraState?{...cameraState,position:cameraState.position.clone(),aim:cameraState.aim.clone()}:null,cameraGoal:cameraGoal?{...cameraGoal,position:cameraGoal.position.clone(),aim:cameraGoal.aim.clone()}:null,replan,paused,resumeView,lastCameraTime,cameraVelocity:{position:cameraVelocity.position.clone(),aim:cameraVelocity.aim.clone(),anchor:cameraVelocity.anchor}}),restore(s){if(s.trafficReveal)trafficReveal.restore(s.trafficReveal);({routeOptions,playbackReturn,elapsed,active,done,selectedAt,completionAt,origin,target,ownedOffset,cameraTween,mode,exitChoice,exited,assistOn,routeYaw,cameraHeading,view,manualView,cameraState,cameraGoal,replan,paused,resumeView,lastCameraTime,cameraVelocity}=s);lastPath=''}};
}
