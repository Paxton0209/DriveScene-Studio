import {startupBundlesPlugin} from '../startup-bundles.mjs';
import {clippingPrecompilePlugin} from '../clipping-precompile.mjs';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const leaf=fileURLToPath(new URL('../',import.meta.url));
const {createRequire}=await import('node:module');const require=createRequire(leaf+'/build.mjs');const {build}=require('esbuild');
const {isolatedRuntimePlugin}=await import(leaf+'/runtime-patches.mjs');
// Review-only profile. The existing Parking lifecycle supplies identity;
// the shared traffic material implementation retains all other scene endpoints.
const savedParkingProfile=JSON.parse(await readFile(new URL('./parking-saved-profile.json',import.meta.url),'utf8'));
const baseRuntime=isolatedRuntimePlugin();
const referenceRuntime={name:'temporary-parking-reference171',setup(b){
 baseRuntime.setup({onLoad(options,loader){b.onLoad(options,async args=>{
  const result=await loader(args);
  if(args.path.endsWith('/engine/world.js')){
   let contents=result.contents;
   // The loading/proxy camera must agree with the Parking lifecycle endpoint.
   for(const id of ['10','17']){const from=`'${id}':[0,11,22,0,0,-5]`,to=`'${id}':[0,8.5,23,0,0,-24]`;if(!contents.includes(from))throw Error('Parking default camera anchor missing: '+id);contents=contents.replace(from,to);}
   return {...result,contents};
  }
  if(!args.path.endsWith('/engine/traffic-model.js'))return result;
  let source="import {parkingMaterialStructure} from "+JSON.stringify(fileURLToPath(new URL('./parking-material-structure.mjs',import.meta.url)))+";\n"+result.contents;
  const swap=(from,to)=>{if(!source.includes(from))throw Error('Reference171 anchor missing: '+from.slice(0,60));source=source.replace(from,to);};
  swap('export function setTrafficAppearance(car,dark=false,opacity=1,tone=dark?1:0,whiteness=0){',`const parkingReferenceControls171=Object.freeze(${JSON.stringify(savedParkingProfile)});
   const parkingReference171={paint:'#aab6c5',window:'#9baaba',rubber:'#8c9cab',rim:'#a3b0bf',trim:'#a1aebe'};
   for(const role in parkingReference171)parkingReference171[role]=new THREE.Color(parkingReference171[role]);
   export function setTrafficAppearance(car,dark=false,opacity=1,tone=dark?1:0,whiteness=0){if(car.userData.parkingReference171)parkingMaterialStructure(THREE,car,tone);`);
  swap('material.color.copy(trafficFinishes.light[role]||trafficFinishes.light.paint)', 'material.color.copy(car.userData.parkingReference171?(parkingReference171[role]||parkingReference171.paint):(trafficFinishes.light[role]||trafficFinishes.light.paint))');
  swap("if(role==='paint'){const c=material.color.multiplyScalar(car.userData.draftPaintBrightness??1);", "if(role==='paint'){if(car.userData.parkingReference171)whiteness=(car.userData.parkingReferenceWhite??parkingReferenceControls171.white/100)*(1-t);const c=material.color.multiplyScalar(car.userData.parkingReference171?(1+((car.userData.draftPaintBrightness??1)-1)*t):(car.userData.draftPaintBrightness??1));");
  swap("const role=material.userData.trafficRole||'paint';", `const role=material.userData.trafficRole||'paint';
     const reference=car.userData.parkingReference171?(car.userData.parkingReferenceControls??parkingReferenceControls171):null;
     if(car.userData.parkingReference171&&['paint','window'].includes(role)){
      if(!material.parkingReferenceShade){
       const shade={value:new THREE.Vector3(0,0,0)},compile=material.onBeforeCompile;
       material.parkingReferenceShade=shade;
       material.onBeforeCompile=function(shader,...args){compile.call(this,shader,...args);shader.uniforms.parkingReferenceShade=shade;
        if(!shader.fragmentShader.includes('uniform vec3 parkingReferenceShade;'))shader.fragmentShader='uniform vec3 parkingReferenceShade;\\n'+shader.fragmentShader.replace('#include <lights_fragment_end>', '#include <lights_fragment_end>\\nvec3 parkingNormal=inverseTransformDirection(normal,viewMatrix);float parkingSide=1.-smoothstep(mix(.05,.20,parkingReferenceShade.z),mix(.85,.60,parkingReferenceShade.z),parkingNormal.y);float parkingTop=smoothstep(.25,.95,parkingNormal.y);float majorPlane=1.-.13*parkingReferenceShade.z*(1.-smoothstep(-.3,.8,dot(parkingNormal,normalize(vec3(-.6,1.,.6)))));float parkingShape=majorPlane*(1.-.65*parkingReferenceShade.x*parkingSide)*(1.+parkingReferenceShade.y*parkingTop);reflectedLight.indirectDiffuse*=parkingShape;reflectedLight.directDiffuse*=parkingShape;');
       };
       material.customProgramCacheKey=()=> 'parking-reference171-shade-v2';material.needsUpdate=true;
      }
      material.parkingReferenceShade.value.set((reference?.side??0)/100*(1-t),((reference?.roof??100)/100-1)*(1-t),role==='paint'?1-t:0);
     }`);
  swap("material.roughness=role==='rubber'?.82:role==='window'?.42:.62;", `if(reference){
      const gain=role==='paint'?(reference.body??100)/100:role==='window'?(reference.glass??100)/100:['rubber','rim'].includes(role)?(reference.wheels??100)/100:1;
      material.color.multiplyScalar(1+(gain-1)*(1-t));
      const cool=(reference.cool??0)/100*(1-t);material.color.r*=1-.15*cool;material.color.g*=1+.015*cool;material.color.b*=1+.15*cool;
     }
     material.roughness=role==='rubber'?.82:role==='window'?.42:.62;
     if(reference&&['paint','window','trim'].includes(role))material.roughness=THREE.MathUtils.lerp(Math.max(.08,(reference.matte??62)/100),role==='window'?.42:.62,t);`);
  swap("material.specularIntensity=.24+.08*t;", "material.specularIntensity=car.userData.parkingReference171&&['paint','window','trim'].includes(role)?.10+.22*t:.24+.08*t;");
  swap("material.clearcoat=role==='paint'?.08+.04*t:role==='window'?.18:.04;", "material.clearcoat=role==='paint'?(car.userData.parkingReference171?.015+.105*t:.08+.04*t):role==='window'?(car.userData.parkingReference171?.015+.165*t:.18):.04;");
  return {...result,contents:source};
 });}});
}};
const replacements=[
 ["cars.forEach(car=>{car.userData.draftPaintBrightness=", "cars.forEach(car=>{car.userData.parkingReference171=true;car.userData.draftPaintBrightness="],
 ["function hover(x,y){if(!ensure())return false;","function hover(x,y){return false;if(!ensure())return false;"],
 ["function pick(x,y){","function pick(x,y){return false;"],
 ["function start(){ensure();","function start(){return false;ensure();"],
 ["function step(dt){if(!active||!target||!assistOn)","function step(dt){return false;if(!active||!target||!assistOn)"],
 ["group.visible=true;trafficVisible=traffic;assistOn=assist;","if(!ensure())return;assist=false;active=false;target=null;group.visible=true;trafficVisible=traffic;assistOn=false;"],
 ["bay!==target&&(!traffic||!occupied.includes(bay))?1:0","0"],
 ["b.userData.parkingSightTarget=!active&&!done&&mode==='in'&&(!traffic||!occupied.includes(b.userData.bay))","b.userData.parkingSightTarget=false"],
 ["prepareExit(){if(!done)","prepareExit(){return false;if(!done)"],
 ["chooseExit(direction){if(mode","chooseExit(direction){return false;if(mode"],
 ["origin=null;ownedOffset=null;cameraTween=null;cameraState=null;replan=null;paused=false;lastPath='';}","origin=null;cameraTween=null;replan=null;paused=false;lastPath='';if(isParking(world.state?.id)&&root===world.root){view='default';cameraHeading=0;cameraVelocity.position.set(0,0,0);cameraVelocity.aim.set(0,0,0);cameraVelocity.anchor=0;ownedOffset=new THREE.Vector3(0,11,22);cameraState=goalFor(view);cameraGoal=cameraState;lastCameraTime=now();camera();}else{ownedOffset=null;cameraState=null;}}"],
 ["finishPreview(){if(cameraTween){cameraState=goalFor(view);cameraTween=null;camera();}}","finishPreview(){if(ensure()&&ownedOffset){cameraState=goalFor(view);cameraTween=null;camera();}}"]
];
await build({absWorkingDir:leaf,entryPoints:['../engine/app.js'],bundle:true,minify:true,format:'esm',outfile:fileURLToPath(new URL('../runtime.bundle.js',import.meta.url)),target:['chrome110','safari17'],plugins:[startupBundlesPlugin(),clippingPrecompilePlugin(),{name:'temporary-material-frame-adapter',setup(b){b.onLoad({filter:/\/ui-draft\/engine-bridge\.js$/},async({path})=>{let contents=await readFile(path,'utf8');const anchor='parking.sync({traffic:world.draftTrafficEnabled??false,assist:features.get().path});';if(!contents.includes(anchor))throw Error('Material frame adapter anchor missing');contents=contents.replace(anchor,anchor+'window.parent.__feedback160?.prepareFrame(world,current());');return {contents,loader:'js',resolveDir:leaf};});}},{name:'temporary-npc-rollback171',setup(b){b.onLoad({filter:/\/ui-draft\/scene-experience\.js$/},async({path})=>{let contents=await readFile(path,'utf8');for(const [from,to]of replacements){if(!contents.includes(from))throw Error('Camera anchor missing');contents=contents.replace(from,to);}return {contents,loader:'js',resolveDir:leaf}})}},referenceRuntime]});
