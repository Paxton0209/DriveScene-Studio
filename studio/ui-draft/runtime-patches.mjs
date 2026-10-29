import {refineIndoorFinish} from './indoor-finish.mjs';
import {readFile} from 'node:fs/promises';
import {refineFigma} from './figma-refinements.mjs';
import {refineWorld,refineWeather,refineRainGround,refineSnowGround,refineActivation} from './scene-refinements.mjs';

function replace(source,from,to){if(!source.includes(from))throw Error(`UI draft baseline mismatch: ${from.slice(0,90)}`);return source.replace(from,to)}

export function patchFeatures(source){
 source="import {blendPathTheme} from '../ui-draft/path-theme.js';\n"+source;
 source=replace(source,'u.color.value.copy(PATH_COLOR[tone]);','');
 source=replace(source,'for(const z of [0,30,60])','for(const z of [0])');
 source=replace(source,"if(path.tone!==tone){u.edgeBlend.value=tone==='light'?.34:.72;for(const [key,value]of Object.entries(PATH_RADIANCE[tone]))u[key].value.copy(value);path.tone=tone;}","blendPathTheme(u,PATH_COLOR,PATH_RADIANCE,world.draftThemeTone?.value??(tone==='dark'?1:0));path.tone=tone;");
 source="import {advanceRoadArrows} from '../ui-draft/road-mark-motion.js';\nimport {advanceRampPassage} from '../ui-draft/ramp-passage.js';\nimport {drivingSpeed,forwardPathEnd,junctionBrakeReveal} from '../ui-draft/junction-playback.js';\n"+source;
 source=replace(source,"if(id==='06')return {kind:'lane',x,y,points:straight(x,8,-255,1)};","if(id==='06')return {kind:'lane',x,y,points:straight(x,8,-255,1)};if(JUNCTION_IDS.includes(id))return {kind:'lane',x,y,points:straight(x,60,-255,1)};");
 // VSM includes receivers in the depth pass; the information ribbon must only
 // receive vehicle shadows, including portions clipped by its own surface shader.
 source=replace(source,'mesh.renderOrder=5;mesh.castShadow=false;mesh.receiveShadow=true;','mesh.renderOrder=5;mesh.castShadow=false;mesh.receiveShadow=true;mesh.customDepthMaterial=world.receiverDepth;');
 source=replace(source,'Math.min(path.plan.fixedEnd??path.startS+PATH_REACH,path.total-1)','forwardPathEnd(path.startS,drivingSpeed(world,id),path.total,path.plan.fixedEnd,JUNCTION_IDS.includes(id)?2:2.5)');
 source=replace(source,'path.endS=end;',"if(JUNCTION_IDS.includes(id)){const stopZ=(world.junctionDimensions?.markingEnd??-22.55)+(world.junctionDimensions?.stopLineWidth??.18)/2+.15;path.stopS=locate(path.points,path.cum,path.plan.x,stopZ);end=Math.max(path.startS,Math.min(end,path.stopS));}path.endS=end;");
 source=replace(source,'path.mesh.visible=reveal>.001&&end-path.startS>2;','path.mesh.visible=reveal>.001&&end-path.startS>(JUNCTION_IDS.includes(id)?.02:2);');
 // Braking is a surface treatment in the same ribbon shader, with no stacked meshes.
 source=replace(source,'uniform float startS;uniform float endS;','uniform float junctionBrake;uniform float junctionReveal;uniform float junctionStop;uniform float startS;uniform float endS;');
 source=replace(source,'material.uniforms.edgeBlend={value:.52};','material.uniforms.edgeBlend={value:.52};material.uniforms.junctionBrake={value:0};material.uniforms.junctionReveal={value:0};material.uniforms.junctionStop={value:-1000};');
 source=replace(source,'gl_FragColor=vec4(surface*contact*shadow,opacity*edge*head*tail*coverage);',`if(junctionBrake>.5){
  float phase=fract((endS-vS+abs(vSide)*.65)/2.8);
  float bandAA=max(fwidth(phase),.015);
  float band=smoothstep(.08-bandAA,.08+bandAA,phase)*(1.-smoothstep(.52-bandAA,.52+bandAA,phase));
  float enter=smoothstep(0.,1.,junctionReveal);
  float front=1.-smoothstep(enter-.12,enter+.12,t);
  surface*=1.-.14*band*enter*front;
  float stopBlend=(1.-smoothstep(3.,14.,junctionStop-startS))*smoothstep(-1.2,0.,endS-junctionStop);
  tail=mix(tail,1.,stopBlend);coverage=(1.-smoothstep(sweep-.035,sweep+.035,t))*.98;
  float stopEdge=(1.-smoothstep(.10,.17,junctionStop-vS))*stopBlend;
  surface=mix(surface,vec3(1.),stopEdge);head=1.;
 }
 gl_FragColor=vec4(surface*contact*shadow,opacity*edge*head*tail*coverage);`);
 source=replace(source,'u.startS.value=path.startS;','u.junctionStop.value=path.stopS??-1000;u.junctionBrake.value=JUNCTION_IDS.includes(id)?1:0;u.junctionReveal.value=junctionBrakeReveal(world.draftJunctionElapsed||0);u.startS.value=path.startS;');
 source=source.replaceAll("'material-draft'","'ui-draft'");
 source=source.replaceAll('performance.now()','(world.draftTime??performance.now())');
 source=replace(source,'if(patch.path&&!reduced())activationSweep?.start();',"if(patch.path&&animate&&!reduced()&&!JUNCTION_IDS.includes(sceneId()))activationSweep?.start();");
 source=replace(source,'u.singleLayer.value=activationSweep?1:0;',"u.singleLayer.value=activationSweep?1:0;if(JUNCTION_IDS.includes(id)){u.singleLayer.value=1;u.sweepProgress.value=closing?pathReveal.closingActivation*1.07-.035:reveal*1.07-.035;u.motionPreset.value=0;u.motionElapsed.value=2000;}");
 source=source.replace('surface=mix(surface,sweepColor,sweepBand);','surface=mix(surface,sweepColor,sweepBand*.8);');
 source=replace(source,'const queueFrame=()=>{','const queueFrame=()=>{if(world.draftManaged)return;');
 source=replace(source,'far.visible=opacity>.001;}\n  }\n  return data;','far.visible=opacity>.001;}\n   advanceRoadArrows(data,world.drivingDistance||0);\n  }\n  return data;');
 source=replace(source,'world.renderFrame=function(...args){','world.renderFrame=function(...args){advanceRampPassage(world.root,world.drivingDistance||0);');
 source="import {weatherFrame} from '../ui-draft/scene-experience.js';\n"+refineWeather(source);
 const a=source.indexOf(' const applyWeather=()=>{'),b=source.indexOf(' const guarded=',a);
 source=source.slice(0,a)+` const applyWeather=()=>{if(!world.state||!world.sky)return null;const weather=effectiveWeather(sceneId());lastWeather=weather;world.weatherSignature=weather+'|'+world.state.mode;return weatherFrame(world,weather,weatherMaterial,WEATHER);};\n`+source.slice(b);
 source=replace(source,'patch.path&&activationSweep&&animate&&!reduced()?150:0',"patch.path&&activationSweep&&animate&&!reduced()&&!JUNCTION_IDS.includes(sceneId())?150:0");
 source=replace(source,'return result;','if(JUNCTION_IDS.includes(world.state?.id)&&result.path)Object.assign(result.path,{revealMs:650,pathDelayMs:0,totalActivationMs:650,timingMs:{baseFill:[0,650]},sweepEase:"continuous forward reveal",sweepFront:path.material.uniforms.sweepProgress.value});return result;');
 source=replace(source,'const revealDuration=()=>activationSweep?350:',"const revealDuration=()=>JUNCTION_IDS.includes(sceneId())?650:activationSweep?350:");
 return source;
}

export function patchApp(source){
 // The embedded canvas may be narrow on desktop; capacity follows the host viewport.
 source=replace(source,"maxEntries:matchMedia('(max-width:760px)').matches?2:4","maxEntries:4");
 source="import {prepareStartupChoices,startupChoices} from '../ui-draft/startup-readiness.js';\n"+source;
 source=replace(source,"if(query.has('qa')){const records=JSON.parse(preview.dataset.vehiclePerformance", "if(query.has('qa')||query.get('review')==='ui-draft'){const records=JSON.parse(preview.dataset.vehiclePerformance");
 source=replace(source,' vehicleReady=true;vehicleFullReady=full;',` await prepareAllStartupChoices();
 vehicleReady=true;vehicleFullReady=full;`);
 source=replace(source,'function failedVehicle(error){console.error(error);',"function failedVehicle(error){console.error(error);window.parent.postMessage({type:'ui-draft-error',message:error.message},location.origin);");
 source=replace(source,'async function installVehicle(car,full=false,animate=false,retainPrevious=false){',`async function prepareAllStartupChoices(){
 const project=window.parent.__draftStartupProject;if(!project)return;
 const initial=selected,saved=new Map([...preferences].map(([key,value])=>[key,{...value}]));
 const scenery=world.draftSceneryRandom.state(),traffic=world.draftTrafficRandom.state();
 const initialFeatures=versionFeatures.get();
 function select(choice){
  selected=choice.key;const values=choice.params,preference=preferences.get(selected);
  Object.assign(preference,{id:values.layout,laneCount:Number(values.lanes),cameraView:values.camera||'low'});
  for(const name of environmentIds)if(name in values)preference[name]=!!values[name];
  if(['parking','outdoor'].includes(selected))preference.id=({parking:{default:'10',raised:'16',bev:'14'},outdoor:{default:'17',raised:'18',bev:'19'}}[selected][values.camera]||preference.id);
  if(selected==='junction'){preference.junctionPosition='approaching';preference.cameraView='low';}
  world.draftSceneryRandom.reset(choice.seed);world.draftTrafficRandom.reset(choice.seed+1);
  versionFeatures.set({path:!!values.path,weather:values.weather||'default'},{animate:false,render:false});
 }
 await prepareStartupChoices({world,models:vehicleCatalog.map(model=>model.id),cache:vehicleCache,prepareVehicle:prepareChoice,choices:startupChoices(project.boards),select,state,restore(){
  selected=initial;for(const [key,value]of saved)Object.assign(preferences.get(key),value);
  world.draftSceneryRandom.restore(scenery);world.draftTrafficRandom.restore(traffic);
  versionFeatures.set(initialFeatures,{animate:false,render:false});
 }});
 idleWarmIndex=idleWarmModels.length;
}
async function installVehicle(car,full=false,animate=false,retainPrevious=false){`);
 source=replace(source,"if(key==='model'){document.getElementById('vehicle-option-'+value)?.click();return;}","if(key==='model')return vehicleSelector.choose(value);");
 source=replace(source,'preparationQueue.then(()=>prepareVehicleChoice(world,car))','preparationQueue.then(()=>{world.draftPrepareVehicle?.(car);return prepareVehicleChoice(world,car);})');
 source=replace(source,"delete preview.dataset.loadError;world.setVehicle(car,", "delete preview.dataset.loadError;world.draftPrepareVehicle?.(car);world.setVehicle(car,");
 source=replace(source,"mark('update');world.renderFrame();mark('frame');","mark('update');await world.draftPrepareAppearance?.();world.renderFrame();mark('frame');");
 source=replace(source,"(['05','08','06','07'].includes(world.state?.id)&&!!world.cameraMotion)","(world.draftManaged?!!world.draftJunctionPlaying?.():['05','08','06','07'].includes(world.state?.id)&&!!world.cameraMotion)");
 source="import {previewPixels} from '../ui-draft/pixel-resolution.js';\nimport {installDraftBridge,makeRandom} from '../ui-draft/engine-bridge.js';\n"+source;
 source=replace(source,"function previewResolution(){const mobile=matchMedia('(max-width:760px)').matches;const width=Math.min(mobile?1280:1440,Math.max(640,Math.ceil(preview.clientWidth*Math.min(devicePixelRatio||1,2)/16)*16));return [width,Math.round(width*9/16)];}","function previewResolution(){const raster=previewPixels(preview.clientWidth,devicePixelRatio,window.parent.visualViewport?.scale??1);return [raster.width,raster.height];}");
 source=source.replaceAll("'material-draft'","'ui-draft'").replaceAll("'sr-theme'","'sr-ui-draft-theme'");
 source=source.replaceAll("history.replaceState(null,'',`?${q}`)","history.replaceState(null,'',location.pathname+`?${q}`)");
 source=replace(source,'createContinuousDriving(world,{onFrame(){if(performance.now()-lastDrivingAudit>180)',"createContinuousDriving(world,{random:world.draftSceneryRandom=makeRandom(Number(query.get('seed'))||110),onFrame(){if(world.root&&!world.initializingScene&&performance.now()-lastDrivingAudit>180)");
 source=replace(source,'createTrafficSystem(world):null',"createTrafficSystem(world,{enabled:query.get('traffic')!=='0',random:world.draftTrafficRandom=makeRandom((Number(query.get('seed'))||110)+1),now:()=>world.draftTime??performance.now()}):null");
 source=replace(source,"continuousDrive.setPlaying(['road','elevated'].includes(selected));","if(!world.draftManaged)continuousDrive.setPlaying(['road','elevated'].includes(selected)&&!matchMedia('(prefers-reduced-motion: reduce)').matches);");
 source=replace(source,"if(key==='layout'){document.querySelector('[data-layout=\"'+value+'\"]')?.click();return;}","if(key==='layout'){preferences.get(selected).id=value;render(true,false,'draft');return;}");
 source=replace(source,"if(key==='path'&&!value&&driveArmTimer)","if(key==='path'&&!value&&driveArmTimer&&!world.draftManaged)");
 // Managed previews already publish state and draw through the bridge. Avoid
 // a second full render and vertex-projection audit in the Traffic click task.
 source=replace(source,"if(key==='traffic'){trafficSystem?.setEnabled(value);world.renderFrame();preview.dataset.audit=JSON.stringify(world.audit());return;}","if(key==='traffic'){trafficSystem?.setEnabled(value);if(!world.draftManaged){world.renderFrame();preview.dataset.audit=JSON.stringify(world.audit());}return;}");
 source=replace(source,"param(key,value){document.documentElement.dataset.choiceInput='pointer';","param(key,value,{sound=false,animate=true}={}){document.documentElement.dataset.choiceInput='pointer';");
 source=replace(source,"if(key==='path'&&!query.has('qa')","if(sound&&key==='path'&&!query.has('qa')");
 source=replace(source,'playPathSound,stopPathSound','playPathSound,playPathExitSound,stopPathSound');
 source=replace(source,'if(value)playPathSound();else stopPathSound();','if(value)playPathSound();else playPathExitSound();');
 source=replace(source,'versionFeatures.set({[key]:value});','versionFeatures.set({[key]:value},{animate});');
 source=replace(source,'scene(key){const button=sceneButtons.get(key);','scene(key){stopPathSound();const button=sceneButtons.get(key);');
 source=replace(source,"preferences.get('junction').junctionPosition=query.get('position')==='approaching'||(first.key==='junction'&&query.get('view')==='low'&&!query.has('position'))?'approaching':'near';","preferences.get('junction').junctionPosition='approaching';");
 source=source.replaceAll("if(!reduced)playThemeSound(theme==='dark');",'').replaceAll("if(mode!==value&&!matchMedia('(prefers-reduced-motion: reduce)').matches)playThemeSound(value==='dark');",'');
 source=replace(source,"mode=value;requestedTheme=value;render(false);await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));","mode=value;requestedTheme=value;render(false);");
 // Traffic is part of the initial scene, including its final shader variants.
 // Wait inside the existing preparation lifecycle before any warm or visible frame.
 source=replace(source,'try{let requested;','try{await world.draftPrepareStartup?.();let requested;');
 // The prepared frame is already complete. The parent applies its saved
 // settings and presents the visible frame; no extra RAF/render is needed here.
 source=replace(source,'await new Promise(requestAnimationFrame);world.renderFrame();','if(!world.draftManaged){await new Promise(requestAnimationFrame);world.renderFrame();}');
 source=replace(source,"window.dispatchEvent(new Event('studio:ready'));","window.dispatchEvent(new Event('studio:ready'));window.parent.postMessage({type:'ui-draft-ready'},location.origin);");
 // The parent completes saved settings and raster sizing before publishing its first frame.
 source=replace(source,"preview.setAttribute('aria-busy',String(world.initializingScene||","preview.setAttribute('aria-busy',String(world.draftInitialFrameReady!==true||world.initializingScene||");
 source=replace(source,'function rememberPreview(immediate=false){',"function rememberPreview(immediate=false){if(query.get('review')==='ui-draft')return;");
 // Restore a scene's saved settings before constructing it. This avoids the
 // old scene render followed by one render/two RAFs for every saved parameter.
 source=replace(source,'if(vehicleReady&&!versionFeatures.animating()','if(!world.draftManaged&&vehicleReady&&!versionFeatures.animating()');
 source=replace(source,' warmVehicle,',` warmVehicle,
 startupAudit(){return {readiness:world.draftStartupReadiness,cache:vehicleCache.stats(),appearancePreparations:world.draftAppearancePreparations||0,vehiclePerformance:JSON.parse(preview.dataset.vehiclePerformance||'[]')};},
 async prepareDraftLayout(value){
  preferences.get(selected).id=value;
  const previousRoot=world.root,initializing=world.initializingScene;world.initializingScene=true;
  try{await world.prepareInitialScene(state());}finally{world.initializingScene=initializing;}
  render(true,false,'draft');if(world.root!==previousRoot)world.continuousDrive?.rebind();
 },
 async prepareDraftScene(key,values){
  if(!preferences.has(key))throw Error('Unknown draft scene');
  cancelDriveArming();continuousDrive?.reset();selected=key;
  const preference=preferences.get(key);
  Object.assign(preference,{id:values.layout||preference.id,laneCount:Number(values.lanes)||6,cameraView:values.camera||'low'});
  for(const name of environmentIds)if(name in values)preference[name]=!!values[name];
  if(['parking','outdoor'].includes(key))preference.id=({parking:{default:'10',raised:'16',bev:'14'},outdoor:{default:'17',raised:'18',bev:'19'}}[key][values.camera]||preference.id);
  if(key==='junction'){preference.junctionPosition='approaching';preference.cameraView='low';}
  versionFeatures.set({path:!!values.path,weather:values.weather||'default'},{animate:false});
  trafficSystem?.setEnabled(!!values.traffic);
  const previousRoot=world.root,initializing=world.initializingScene;world.initializingScene=true;
  try{await world.prepareInitialScene(state());}finally{world.initializingScene=initializing;}
  render(true,false,'draft');if(world.root!==previousRoot)world.continuousDrive?.rebind();
 },`);
 source=replace(source,"if(animate&&vehicleReady&&!reduced&&!cameraMotion", "if(animate&&motion!=='draft'&&vehicleReady&&!reduced&&!cameraMotion");
 source=replace(source,"window.dispatchEvent(new Event('layout:ready'));","installDraftBridge({world,features:versionFeatures,drive:continuousDrive,traffic:trafficSystem,api:window.layoutEngine,current:()=>selected,updateURL});\nwindow.dispatchEvent(new Event('layout:ready'));");
 source=replace(source,"const r=preview.getBoundingClientRect();preview.dataset[kind+'MotionRect']=JSON.stringify({x:r.x,y:r.y,w:r.width,h:r.height});","if(!world.draftManaged){const r=preview.getBoundingClientRect();preview.dataset[kind+'MotionRect']=JSON.stringify({x:r.x,y:r.y,w:r.width,h:r.height});}");
 return source;
}

export function patchVehicleMaterials(source){
 source="import {yieldSceneTask} from '../../../ui-draft/scene-preparation.js';\n"+source;
 source=replace(source,'export function prepareVehicleMaterials(model,id,length){','export async function prepareVehicleMaterials(model,id,length){');
 // The model is still offscreen. Preserve traversal order and every per-mesh
 // operation, yielding only between meshes so input/rendering can make progress.
 source=replace(source,` model.traverse(mesh=>{
  if(!mesh.isMesh)return;`, ` const meshes=[];model.traverse(mesh=>{if(mesh.isMesh)meshes.push(mesh);});
 let sliceStart=performance.now();
 for(const mesh of meshes){
  if(performance.now()-sliceStart>=4){await yieldSceneTask();sliceStart=performance.now();}`);
 source=replace(source,' });\n prepareFrontGrilles(model,id);',' }\n prepareFrontGrilles(model,id);');
 return source;
}

export function patchLoadPrepared(source){
 source="import {takePrefetched} from '../../asset-request.js';\nimport frameHulls from '../../../ui-draft/vehicles/framing-hulls.json';\n"+source;
 source=replace(source,'const response=await fetch(url,{signal});if(!response.ok)throw Error(`Vehicle download failed (${response.status})`);\n let bytes=await response.arrayBuffer();',`const early=globalThis.__draftPreparedVehicle;
 const scope=early?.id===id?{request:early.request}:{};if(early?.id===id)delete globalThis.__draftPreparedVehicle;
 if(!scope.request){try{const requests=window.parent.__draftStartupAssets,key=new URL(url,document.baseURI).href;scope.request=requests?.get(key);requests?.delete(key);}catch{}}
 let bytes=await takePrefetched('request',async()=>{const response=await fetch(url,{signal});if(!response.ok)throw Error(\`Vehicle download failed (\${response.status})\`);return response.arrayBuffer();},scope);`);
 return replace(source,'const surfaces=prepareVehicleMaterials(model,id,spec.length);',`const surfaces=await prepareVehicleMaterials(model,id,spec.length);
 const hulls=frameHulls[id],meshes=[];model.traverse(mesh=>{if(mesh.isMesh)meshes.push(mesh);});
 if(hulls?.length===meshes.length&&meshes.every((mesh,index)=>mesh.name===hulls[index].name&&mesh.geometry.attributes.position.count===hulls[index].count)){
  meshes.forEach((mesh,index)=>{const indices=hulls[index].indices;if(indices?.length)mesh.geometry.userData.frameIndices=indices;});
 }`);
}

export function patchLaneGeometry(source){
 // Output color space selects a shader variant. Compile for the same target as
 // the warm draw, restoring the live output before any asynchronous wait.
 return replace(source,'await renderer.compileAsync(scene,world.camera);await yieldControl();',`const compileTarget=renderer.getRenderTarget();let compilation;
  try{renderer.setRenderTarget(target);compilation=renderer.compileAsync(scene,world.camera);}finally{renderer.setRenderTarget(compileTarget);}
  await compilation;await yieldControl();`);
}

export function patchRendererPreparation(source){
 source="import {batchPreparationJobs,attachPreparationBatch} from '../ui-draft/preparation-batches.js';\n"+source;
 source=replace(source,' const {renderer,scene}=world,jobs='," const phaseStart=performance.now();const {renderer,scene}=world,jobs=");
 source=replace(source,' await yieldToBrowser();\n world.preparedMaterials='," performance.measure('studio-warm-record',{start:phaseStart,detail:{jobs:jobs.length,batches:batchPreparationJobs(jobs).length}});const compileStart=performance.now();await yieldToBrowser();\n world.preparedMaterials=");
 source=replace(source,'await Promise.all(pending);sliceStart=performance.now();',"await Promise.all(pending);performance.measure('studio-warm-compile',{start:compileStart});const drawStart=performance.now();sliceStart=drawStart;");
 source=replace(source,' }finally{for(const target of targets.values())target.dispose();}'," performance.measure('studio-warm-draw',{start:drawStart});\n }finally{for(const target of targets.values())target.dispose();}");
 source="import {yieldSceneTask} from '../ui-draft/scene-preparation.js';\n"+source;
 source=replace(source,'const yieldToBrowser=()=>new Promise(resolve=>setTimeout(resolve,0));','const yieldToBrowser=yieldSceneTask;');
 // Warm proxies need object metadata references, not a JSON serialization of
 // scene-owned geometry/textures. Keep the source intact even if cloning fails.
 source=replace(source,'const yieldToBrowser=',`function clonePassObject(object){
 const userData=object.userData;let copy;object.userData={};
 try{copy=object.clone(false);}finally{object.userData=userData;}
 copy.userData={...userData};return copy;
}
const yieldToBrowser=`);
 source=replace(source,'const proxy=object.clone(false);','const proxy=clonePassObject(object);');
 source=replace(source,'targetScene.clone(false)','clonePassObject(targetScene)');
 // Fullscreen passes own a light-free scene. Adding the world's lights creates
 // different programs from the actual pass after a scene/light transition.
 source=replace(source,'scene.traverseVisible(light=>','(targetScene||scene).traverseVisible(light=>');

 source=replace(source,'material.uuid,material.side,material.defines','material.uuid,material.side,material.transparent,material.depthWrite,material.defines');
 // Scene switches suspend visible draws. Recording still needs to traverse the
 // incoming scene; restore suspension synchronously before preparation yields.
 source=replace(source,'try{world.renderFrame();}finally{renderer.renderBufferDirect=draw;',
  `const suspended=world.suspended,render=renderer.render;
 renderer.render=function(...args){const passHidden=[],culled=[];scene.traverse(object=>{if(!object.visible){passHidden.push(object);object.visible=true;}if(object.isMesh&&object.frustumCulled){culled.push(object);object.frustumCulled=false;}});try{return render.apply(this,args);}finally{for(const object of passHidden)object.visible=false;for(const object of culled)object.frustumCulled=true;}};
 try{world.suspended=false;world.renderFrame();world.draftRecordStartupVariants?.(()=>world.renderFrame());}finally{world.suspended=suspended;renderer.render=render;renderer.renderBufferDirect=draw;`);
 // Keep both traffic variants on the live material. Hidden cars do not take
 // ownership of a program during the final frame, so disposing proxy copies
 // would otherwise evict their base program before the first reveal.
 source=replace(source,'if(material.isShaderMaterial){','if(material.userData.trafficRole||material.userData.draftTrafficPreparation)copy=material;else if(material.isShaderMaterial){');
 source=replace(source,'jobs.push({camera,scene:contexts.get(targetScene),target:warmTarget,proxy,material:copy});',`jobs.push({camera,scene:contexts.get(targetScene),target:warmTarget,proxy,material:copy,liveMaterial:!!(material.userData.trafficRole||material.userData.draftTrafficPreparation)});
  if(material.userData.trafficRole){
   const fading=clonePassObject(proxy);fading.material=material;
   jobs.push({camera,scene:contexts.get(targetScene),target:warmTarget,proxy:fading,material,liveMaterial:true,trafficFade:true,baseTransparent:material.transparent});
  }`);
 source=replace(source,'jobs.map(job=>job.material)','jobs.filter(job=>!job.liveMaterial).map(job=>job.material)');
 source=replace(source,'const previous=renderer.getRenderTarget();renderer.setRenderTarget(job.target);','const previous=renderer.getRenderTarget(),transparent=job.material.transparent;if(job.trafficFade)job.material.transparent=!job.baseTransparent;renderer.setRenderTarget(job.target);');
 source=replace(source,'job.proxy.removeFromParent();renderer.setRenderTarget(previous);}', 'job.proxy.removeFromParent();job.material.transparent=transparent;renderer.setRenderTarget(previous);}');
 source=replace(source,'const previous=renderer.getRenderTarget();\n  const viewport=', 'const previous=renderer.getRenderTarget(),transparent=job.material.transparent;if(job.trafficFade)job.material.transparent=!job.baseTransparent;\n  const viewport=');
 source=replace(source,'job.proxy.removeFromParent();renderer.setRenderTarget(previous);renderer.setViewport(viewport);','job.proxy.removeFromParent();job.material.transparent=transparent;renderer.setRenderTarget(previous);renderer.setViewport(viewport);');
 // The recorded jobs already contain the shadow passes. A one-pixel colour
 // warm draw must not allocate and redraw a full shadow atlas for every proxy.
 source=replace(source,'renderer.setRenderTarget(job.target);renderer.setViewport(0,0,1,1);renderer.shadowMap.needsUpdate=false;',
  'const shadowAutoUpdate=renderer.shadowMap.autoUpdate,shadowNeedsUpdate=renderer.shadowMap.needsUpdate;renderer.setRenderTarget(job.target);renderer.setViewport(0,0,1,1);renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=false;');
 source=replace(source,'renderer.setViewport(viewport);renderer.shadowMap.needsUpdate=true;',
  'renderer.setViewport(viewport);renderer.shadowMap.autoUpdate=shadowAutoUpdate;renderer.shadowMap.needsUpdate=shadowNeedsUpdate;');
 // Group equivalent pass contexts instead of repeating renderer traversal for
 // every individual material. Each mesh and exact shader variant is retained.
 source=source.replaceAll('for(const job of jobs){','for(const job of batchPreparationJobs(jobs)){');
 source=source.replaceAll('job.scene.add(job.proxy);','const detach=attachPreparationBatch(job);');
 source=source.replaceAll('job.proxy.removeFromParent();','detach();');
 source=source.replaceAll(',transparent=job.material.transparent;if(job.trafficFade)job.material.transparent=!job.baseTransparent;', ';');
 source=source.replaceAll('job.material.transparent=transparent;','');
 // Separate CPU work from asynchronous shader completion in diagnostics.
 source=replace(source,'const compileStart=performance.now();','const compileStart=performance.now(),compileBatches=[],drawBatches=[];');
 source=source.replaceAll('const detach=attachPreparationBatch(job);','const batchStart=performance.now(),programsBefore=(renderer.info?.programs?.length||0);const detach=attachPreparationBatch(job);');
 source=replace(source,'pending.push(renderer.compileAsync(job.scene,job.camera));','pending.push(renderer.compileAsync(job.scene,job.camera));compileBatches.push({jobs:job.jobs.length,cpu:performance.now()-batchStart,newPrograms:(renderer.info?.programs?.length||0)-programsBefore});');
 source=replace(source,"performance.measure('studio-warm-compile',{start:compileStart})","performance.measure('studio-warm-compile',{start:compileStart,detail:{batches:compileBatches,programs:(renderer.info?.programs?.length||0)}})");
 source=replace(source,'try{renderer.render(job.scene,job.camera);}','try{renderer.render(job.scene,job.camera);drawBatches.push({jobs:job.jobs.length,cpu:performance.now()-batchStart,newPrograms:(renderer.info?.programs?.length||0)-programsBefore});}');
 source=replace(source,"performance.measure('studio-warm-draw',{start:drawStart})","performance.measure('studio-warm-draw',{start:drawStart,detail:{batches:drawBatches,programs:(renderer.info?.programs?.length||0)}})");
 return source;
}

export function isolatedRuntimePlugin(){return {name:'isolated-ui-draft',setup(build){build.onLoad({filter:/\/engine\/.*\.js$/},async args=>{
 let source=await readFile(args.path,'utf8');const name=args.path.split('/engine/').at(-1);
 if(name==='app.js')source=patchApp(source);
 if(name==='vehicle.js')source=source.replaceAll('./ego-vehicle-ready.glb.gz?v=17.9','../ui-draft/vehicles/x6/model.glb.gz?v=lossless1');
 // The parent owns the visible vehicle selector; do not build a second hidden picker.
 if(name==='vehicle-selector.js')source="import {createVehicleSelection} from '../ui-draft/vehicle-selection.js';\n"+replace(source," const element=(tag,className,text)=>"," if(new URLSearchParams(location.search).get('review')==='ui-draft')return createVehicleSelection({selected,onChange,ids:vehicleCatalog.map(model=>model.id)});\n const element=(tag,className,text)=>");
 if(name==='vehicle-library/three/vehicle-materials.js')source=patchVehicleMaterials(source);
 if(name==='vehicle-library/three/load-prepared.js')source=patchLoadPrepared(source);
 if(name==='lane-geometry-cache.js')source=patchLaneGeometry(source);
 if(name==='prepare-renderer.js')source=patchRendererPreparation(source);
 if(name==='version-features.js')source=patchFeatures(source);
 if(name==='sr-quality.js')source=source.replaceAll("'material-draft'","'ui-draft'");
 if(name==='road-layout-morph.js'){
  // BufferGeometry.copy shares userData with its template. A role marker can
  // therefore survive on a later clone whose vertex attribute was never set.
  source=replace(source,'if(o.geometry.userData.roadLayoutRole===role)return;',"if(o.geometry.userData.roadLayoutRole===role&&o.geometry.getAttribute('roadLayoutRole')?.count===o.geometry.attributes.position.count)return;");
  source=replace(source,"o.geometry.setAttribute('roadLayoutRole'","o.geometry.userData={...o.geometry.userData};\n  o.geometry.setAttribute('roadLayoutRole'");
 }
 if(name==='weather-ground.js')source=refineSnowGround(refineRainGround(source)).replace('uniforms.weatherTone.value=dark?1:0;','uniforms.weatherTone.value=world.draftThemeTone?.value??(dark?1:0);');
 if(name==='activation-sweep.js')source=refineActivation(source).replaceAll('performance.now()','(world.draftTime??performance.now())');
 if(name==='parking-reference.js'){source="import {createIndoorDetails} from '../ui-draft/parking-materials.js';\n"+source;source=replace(source,'world.parkingReplica={','createIndoorDetails(world);world.parkingReplica={');}
 if(name==='continuous-driving.js'){
  source=replace(source,'const span=420,exit=65,speed=16.8;',`const span=420,exit=65;let speed=null;const cruise=()=>['06','07'].includes(world.state?.id)?13.9:16.8;
 function weatherFactor(){const w=world.draftWeather?.weights;return w?1-.12*(w.overcast||0)-.22*(w.rain||0)-.38*(w.snow||0):1;}`);
  source=replace(source,'bind();const delta=Math.max(0,Math.min(.1,dt))*speed;distance+=delta;',`bind();const seconds=Math.max(0,Math.min(.1,dt)),reference=cruise()*weatherFactor(),prior=speed??reference;let target=reference;const traffic=world.trafficSystem?.audit();if(traffic?.visible)for(let i=0;i<traffic.positions.length;i++){const p=traffic.positions[i],lane=traffic.lanes[i],gap=world.car.position.z-p[2];if(lane.direction<0&&Math.abs(p[0]-world.car.position.x)<1.7&&gap>0)target=Math.min(target,Math.max(0,lane.speed+(gap-(6+prior*1.5))/3));}speed=prior+Math.max(-2.2*seconds,Math.min(.9*seconds,target-prior));const delta=(prior+speed)*.5*seconds;distance+=delta;world.draftCruiseSpeed=speed;`);
  source=replace(source,'pause();restore();distance=0;recycled=0;', 'pause();restore();distance=0;recycled=0;speed=null;world.draftCruiseSpeed=null;');
  // Rebind restores the outgoing root after world.lawns points at the incoming
  // root. Keep the outgoing registry so recycled clones cannot leak into caches.
  source=replace(source,"groups=[],marks=[],clones=[],distance=0", "groups=[],marks=[],clones=[],boundLawns=null,boundScene=null,distance=0");
  source=replace(source,"world.lawns?.indexOf(clone)","boundLawns?.indexOf(clone)");
  source=replace(source,"world.lawns.splice(index,1)","boundLawns.splice(index,1)");
  source=replace(source,"['02','09'].includes(root.userData?.trafficScene)","['02','09'].includes(boundScene)");
  source=replace(source,"rootKey=key;if(!root)return;","rootKey=key;boundLawns=world.lawns;boundScene=world.state?.id;if(!root)return;if(!['02','09','03','06','07'].includes(boundScene)){distance=0;return;}");
  // Mesh.clone does not copy custom shadow materials. Recycled tree copies
  // otherwise cast from the target lane position while their canopy morphs.
  source=replace(source,'const clone=item.object.clone(true);clone.position.z-=210;',`const clone=item.object.clone(true);const originals=[];item.object.traverse(object=>originals.push(object));let shadowIndex=0;clone.traverse(object=>{const original=originals[shadowIndex++];if(object.isMesh){object.customDepthMaterial=original.customDepthMaterial;object.customDistanceMaterial=original.customDistanceMaterial;}});clone.position.z-=210;`);
  // Binding adds scenery copies after the root's first capture. Refresh the
  // existing targets once so paused first frames include those same objects.
  source=replace(source,'world.drivingDistance=distance;\n\n }','world.drivingDistance=distance;world.shadowKey=null;world.groundReflectionKey=null;world.carReflectionKey=null;\n\n }');
  // Recycled buildings pivot their width around the facade beside the lawn.
  source=replace(source,"group.identity=[group.kind", "if(group.kind==='building')group.front=Math.min(...group.items.map(item=>{const b=item.object.geometry.boundingBox;return Math.abs(item.position.x)-Math.max(Math.abs(b.min.x),Math.abs(b.max.x))*item.scale.x;}));\n   group.identity=[group.kind");
  source=replace(source,"const lateral=group.kind==='building'?(random()-.5)*2:0;","const lateral=group.kind==='building'?Math.sign(group.x)*(width-1)*(Math.abs(group.x)-group.front):0;");

  source=source.replaceAll("['02','09','03'].includes(world.state?.id)","['02','09','03','06','07'].includes(world.state?.id)");
  source=source.replaceAll('if(!hidden())frame=schedule(tick)','if(!world.draftManaged&&!hidden())frame=schedule(tick)').replaceAll('if(playing&&!hidden())frame=schedule(tick)','if(playing&&!world.draftManaged&&!hidden())frame=schedule(tick)');
  source=replace(source,'return {setPlaying,pause,reset,advance,',"return {draftCapture:()=>({distance,recycled,speed,z:groups.map(group=>group.z)}),draftRestore(snapshot){distance=snapshot.distance;recycled=snapshot.recycled;speed=snapshot.speed;world.draftCruiseSpeed=speed;snapshot.z.forEach((z,index)=>{if(groups[index])groups[index].z=z});world.drivingDistance=distance;world.drivingFrame=Math.floor(distance*2);},setPlaying,pause,reset,advance,");
 }
 if(name==='continuous-driving.js')source=source.replaceAll('world.drivingFrame=Math.floor(distance*2)','world.drivingFrame=distance');
 if(name==='environment-finish.js')source=replace(source,'bounds.setFromObject(block);',"bounds.setFromObject(block);if(world.layoutMotion)bounds.translate(layoutOffset.set((world.layoutVisual.width-world.layoutMotion.to.width)*Math.sign(block.position.x)/2,0,0));");
 if(name==='precipitation.js'){
  source=replace(source,'count:1400,reduced:520','count:800,reduced:300');
  source=replace(source,'size:[.045,.085]','size:[.028,.062]');
  source=replace(source,'gl_PointSize=clamp(px,1.8,12.);','gl_PointSize=clamp(px,1.,5.);');
  source=replace(source,'smoothstep(.35,1.,dot(c,c))','smoothstep(.04,1.,dot(c,c))');

  source=replace(source,'count:1800,reduced:650','count:420,reduced:180');
  source=replace(source,'size:[.32,.58]','size:[.18,.34]');
  source=replace(source,'uniforms.opacity.value=k.opacity[t]*WEATHER_STRENGTH','uniforms.opacity.value=k.opacity[t]*WEATHER_STRENGTH*(kind==="snow"?1.15:1)*(world.draftWeather?.weights[kind]??1)');
 }
 if(name==='contact-shadows.js'){
  source=replace(source,'exp(-dot(p*vec2(1.35,1.05),p*vec2(1.35,1.05))*2.4)*(1.-smoothstep(.65,1.,length(p)))','(1.-smoothstep(.28,1.,r))*(.70+.30*exp(-dot(p*vec2(1.1,.8),p*vec2(1.1,.8))*2.))');

  source=replace(source,'patch(x,z,.56,.80,softBody?.92:.88)','patch(x,z,.44,.60,.98)');
  source=replace(source,'mesh.position.set(x,.035,z)','mesh.position.set(x,.023,z)');
 }
 if(name==='ground-reflection.js'){
  source=replace(source,"const satinRoad=SR_QUALITY_MIX>0&&kind==='road';","const satinRoad=SR_QUALITY_MIX>0&&(kind==='road'||custom);");
  source="import {vehicleReflectionSampling} from '../ui-draft/vehicle-reflection-sampling.js';\n"+source;
  source=replace(source,'if(satinRoad){shader.uniforms.vehicleFootprints=',"if(satinRoad){shader.uniforms.vehicleReflectionTexel=world.draftVehicleReflectionTexel??={value:new THREE.Vector2(1/world.width,1/world.height)};shader.uniforms.vehicleFootprints=");
  source=replace(source,"if(satinRoad)shader.fragmentShader='uniform vec4 vehicleFootprints[12];uniform int vehicleReflectionCount;\\n'+shader.fragmentShader;","if(satinRoad)shader.fragmentShader='uniform vec4 vehicleFootprints[12];uniform int vehicleReflectionCount;\\n'+shader.fragmentShader.replace('void main()',vehicleReflectionSampling+'\\nvoid main()');");
  source=replace(source,'vec4 reflectedSample=mix(texture2D(reflectionSharp,reflectionUV),texture2D(reflectionTexture,reflectionUV),smoothstep(.4,5.,reflectedHeight));',"vec4 reflectedSample=${satinRoad?'roughVehicleSample(reflectionUV,reflectedHeight,reflectionTone,vGroundWorld.y)':'mix(texture2D(reflectionSharp,reflectionUV),texture2D(reflectionTexture,reflectionUV),1.)'};");
  source=replace(source,"${profile.soften?'reflectedSample=", "${profile.soften&&!satinRoad?'reflectedSample=");
  // Keep the capture silhouette attached; no alpha threshold or whole-body blur.
  source=replace(source,'valid*=footprintMask*smoothstep(.02,.14,reflectedSample.a);','valid*=footprintMask;');
  // The first footprint is ego only while ego participates in the capture.
  source=replace(source,'shader.uniforms.vehicleReflectionCount=world.vehicleReflectionCount;', 'shader.uniforms.vehicleReflectionCount=world.vehicleReflectionCount;shader.uniforms.egoReflectionCount=world.draftEgoReflectionCount??={value:0};');
  source=replace(source,'uniform int vehicleReflectionCount;', 'uniform int vehicleReflectionCount;uniform int egoReflectionCount;');
  source=replace(source,'footprintMask=max(footprintMask,(1.-smoothstep(.65,1.,q.x))*(1.-smoothstep(.65,1.,q.y)));', 'footprintMask=max(footprintMask,(i<egoReflectionCount?1.:.42)*(1.-smoothstep(.65,1.,q.x))*(1.-smoothstep(.65,1.,q.y)));');
  source=replace(source,"${['road','ground','pavement'].some","${!satinRoad&&['road','ground','pavement'].some");
  // Dry satin asphalt keeps only a short, rough body response beside contact.
  source=replace(source,'smoothstep(.65,1.,q.y)','smoothstep(.62,1.,q.y)');
  source=replace(source,'smoothstep(.65,1.,q.x)','smoothstep(.58,1.,q.x)');
  source=replace(source,"else shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',reflection+`", "else shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',reflection+(satinRoad?'\\n#include <opaque_fragment>':`");
  source=replace(source,'\\n#include <opaque_fragment>`);','\\n#include <opaque_fragment>`));');

  source=replace(source,"if(custom)shader.fragmentShader=shader.fragmentShader.replace('gl_FragColor=vec4(surface,1.);',reflection+'surface=mix","if(custom)shader.fragmentShader=shader.fragmentShader.replace('gl_FragColor=vec4(surface,1.);',reflection+(satinRoad?'gl_FragColor=vec4(surface,1.);':'surface=mix");
  source=replace(source,"*valid*reflectionStrength);gl_FragColor=vec4(surface,1.);');","*valid*reflectionStrength);gl_FragColor=vec4(surface,1.);'));");
  source=replace(source," material.customProgramCacheKey=","  if(satinRoad){const compile=material.onBeforeCompile;material.onBeforeCompile=shader=>{compile(shader);const response='gl_FragColor.rgb=compositeVehicleReflection(gl_FragColor.rgb,linearToOutputTexel(vec4(softReflection,1.)).rgb,bodyReflectionOpacity(reflectionTone)*valid*reflectionStrength,reflectionTone);';const anchor=custom?'#include <colorspace_fragment>':'#include <premultiplied_alpha_fragment>';shader.fragmentShader=shader.fragmentShader.replace(anchor,custom?anchor+'\\n'+response:response+'\\n'+anchor);};}\n material.customProgramCacheKey=");
 }


 if(name==='traffic-model.js'){
  source="import {consolidateTrafficRear,refineTrafficBody} from '../ui-draft/traffic-surface.js';\n"+source;
  source="import {takePrefetched} from './asset-request.js';\n"+source;
  source=replace(source,"if(!bytes){const response=await fetch(new URL('../engine/assets/traffic-model-y.json.gz?v=1',import.meta.url));if(!response.ok)throw Error('Traffic model could not load');bytes=await response.arrayBuffer();}","if(!bytes)bytes=await takePrefetched('__draftTrafficRequest',async()=>{const response=await fetch(new URL('../engine/assets/traffic-model-y.json.gz?v=1',import.meta.url));if(!response.ok)throw Error('Traffic model could not load');return response.arrayBuffer();});");
  source=replace(source,"../engine/assets/traffic-model-y.json.gz?v=1","../ui-draft/traffic-model-y.prepared.bin.gz?v=transport122");
  source="import {decodeTrafficPayload} from '../ui-draft/traffic-payload.js';\n"+source;
  source=replace(source,"const text=header[0]===31&&header[1]===139?await new Response(blob.stream().pipeThrough(new DecompressionStream('gzip'))).text():await blob.text();", "const decoded=header[0]===31&&header[1]===139?await new Response(blob.stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer():await blob.arrayBuffer();");
  source=replace(source,'const data=JSON.parse(text),template=', 'let data=decodeTrafficPayload(decoded);if(!data.draftBodySurface)data=refineTrafficBody(consolidateTrafficRear(data));const template=');
  source=source.replace('a*.36*visibility','a*.55*visibility');
  source="import {toCreasedNormals} from 'three/addons/utils/BufferGeometryUtils.js';\n"+source;
  source=replace(source,'const geometry=new THREE.BufferGeometry();','let geometry=new THREE.BufferGeometry();');
  source=replace(source,'if(part.indices)geometry.setIndex(part.indices);',"if(part.indices)geometry.setIndex(Array.isArray(part.indices)?part.indices:new THREE.BufferAttribute(part.indices,1));if(part.role==='paint'&&!data.draftBodySurface){const original=geometry;geometry=toCreasedNormals(original,Math.PI/3);const normals=geometry.attributes.normal;for(let i=0;i<normals.count;i++){const n=new THREE.Vector3().fromBufferAttribute(normals,i);if(!Number.isFinite(n.lengthSq())||n.lengthSq()<1e-8){const index=original.index?.getX(i)??i;if(original.attributes.normal)n.fromBufferAttribute(original.attributes.normal,index);if(!Number.isFinite(n.lengthSq())||n.lengthSq()<1e-8)n.set(0,1,0);n.normalize();normals.setXYZ(i,n.x,n.y,n.z);}}if(geometry!==original)original.dispose();}");
 }
 if(name==='traffic-vehicle.js'){
  source="import {junctionTrafficPlan,isJunction,advanceJunctionTraffic} from '../ui-draft/junction-traffic.js';\n"+source;
  // Initial pending cars own their shadow materials, but share geometry.
  source=replace(source,'while(slot.car.children.length)slot.car.remove(slot.car.children[0]);','for(const child of [...slot.car.children]){slot.car.remove(child);child.material?.dispose();}');
  source=replace(source,'slot.speed=route.speed+(random()-.5)*2.2;',`const reference=['06','07'].includes(world.state?.id)?13.9:16.8;slot.speed=isJunction(world.state?.id)?route.speed:reference*(route.direction>0?1.02:route.egoLane?.99:Math.abs(route.x)>7?1.025:1.055);slot.speed+=(random()-.5)*.5;`);
  source=replace(source,'let target=slot.desiredSpeed;',`const weights=world.draftWeather?.weights,factor=weights?1-.12*(weights.overcast||0)-.22*(weights.rain||0)-.38*(weights.snow||0):1;let target=slot.desiredSpeed*factor;`);
  source=replace(source,"const id=state.id;if(!", "const id=state.id;const junction=junctionTrafficPlan(id);if(junction)return junction;if(!");
  // Keep desiredSpeed as the clear-weather baseline. A newly entered car must
  // already match the current weather, including after it recycles offscreen.
  source=replace(source,'slot.desiredSpeed=slot.speed;','slot.desiredSpeed=slot.speed;const weather=world.draftWeather?.weights;if(weather)slot.speed*=1-.12*(weather.overcast||0)-.22*(weather.rain||0)-.38*(weather.snow||0);if(isJunction(world.state?.id)){slot.cooldown=0;slot.car.position.set(route.x,.02,route.z);return;}');
  source=replace(source,"if(route.axis==='x'){car.position.x+=slot.speed", "if(isJunction(state.id)){advanceJunctionTraffic(slot,dt,world);continue;}if(route.axis==='x'){car.position.x+=slot.speed");
  source=replace(source,'const egoLane=active.filter','const egoLane=(isJunction(state.id)?[]:active).filter');
  source=replace(source,"setTrafficAppearance(car,state.mode==='dark',slot.alpha)","setTrafficAppearance(car,state.mode==='dark',slot.alpha,world.draftThemeTone?.value??(state.mode==='dark'?1:0))");
  source=replace(source,'firstSide?.35+random()*.35','firstSide?.4+Math.abs(route.x)*.22+random()*2.8');
  source=replace(source,"((world.state?.cameraView==='high'?24:12)+(Math.abs(route.x)>7?15:0)+n*30+random()*2)","((world.state?.cameraView==='high'?12:4)+Math.abs(route.x)*2+n*40+random()*6)");
  source=replace(source,'(gap-(6+slot.speed*1.3))/3','(gap-Math.max(36,6+slot.speed*1.5))/3');
  // Resolve the current ordering after movement and recycling, including paused
  // frames. A stale pre-movement group can otherwise clamp a respawn to a car
  // on the other side of the loop and create the visible close pair again.
  source=replace(source,'for(const members of laneGroups.values())for(let i=1;i<members.length;i++){const slot=members[i],leader=members[i-1],direction=slot.route.direction;const limit=leader.car.position.z-direction*10;if(direction<0)slot.car.position.z=Math.max(slot.car.position.z,limit);else slot.car.position.z=Math.min(slot.car.position.z,limit);}',`const currentLanes=new Map();for(const slot of slots){if(!slot.route||!slot.target||slot.cooldown||slot.delay||!slot.car.visible||slot.route.axis==='x')continue;const lane=slot.route.x+'|'+slot.route.direction;if(!currentLanes.has(lane))currentLanes.set(lane,[]);currentLanes.get(lane).push(slot);}for(const members of currentLanes.values()){const direction=members[0].route.direction;members.sort((a,b)=>(b.car.position.z-a.car.position.z)*direction);for(let i=1;i<members.length;i++){const slot=members[i],leader=members[i-1];const limit=leader.car.position.z-direction*32;if(direction<0)slot.car.position.z=Math.max(slot.car.position.z,limit);else slot.car.position.z=Math.min(slot.car.position.z,limit);}}`);
  source=replace(source,'nearest=slot.car.position.z-15','nearest=slot.car.position.z-32');
 }
 if(name==='traffic-vehicle.js')source=replace(source,'return {group,ready,update,',"return {draftCapture:()=>({last,elapsed,slots:slots.map(slot=>({...slot}))}),draftRestore(snapshot){last=snapshot.last;elapsed=snapshot.elapsed;slots.forEach((slot,index)=>Object.assign(slot,snapshot.slots[index]));},group,ready,update,");
 if(name==='world.js'){
  // Ten exposed geometry variants must survive the opening preparation.
  source=replace(source,'if(this.sceneCache.size>8)','if(this.sceneCache.size>12)');
  // Retain hidden variants with their cached scene. Releasing warm proxies at
  // the final frame evicts programs unused by that initial frame's layers.
  source=replace(source,'for(const material of this.preparedMaterials||[])material.dispose();this.preparedMaterials=[];',`if(!this.draftPreparedMaterials)this.draftPreparedMaterials=new WeakMap();const retained=this.draftPreparedMaterials.get(this.root)||[];retained.push(...this.preparedMaterials||[]);this.draftPreparedMaterials.set(this.root,retained);this.preparedMaterials=[];`);
  source=replace(source,' disposeSceneRoot(root){',' disposeSceneRoot(root){for(const material of this.draftPreparedMaterials?.get(root)||[])material.dispose();this.draftPreparedMaterials?.delete(root);');

  source=refineWorld(source);
  source=replace(source,'updateTailLight(this.tailReflection,this.car,dark,isParking);','updateTailLight(this.tailReflection,this.car,dark,isParking,this);');
  source="import {retainMorphingScenery} from '../ui-draft/lane-culling.js';\n"+source;
  source=replace(source,'this.layoutMotion.surfaces?.reset();','this.layoutMotion.surfaces?.reset();this.layoutMotion.restoreSceneryCulling?.();');
  source=replace(source,'motion.sample=sample;\n  const tick=now=>{if(this.layoutMotion!==motion', 'motion.restoreSceneryCulling=retainMorphingScenery(this.root);motion.sample=sample;\n  const tick=now=>{if(this.layoutMotion!==motion');
  // The bridge samples managed lane morphs after advancing scenery on one RAF.
  {const begin=source.indexOf(' startLayoutMotion(from,to){'),end=source.indexOf(' seekLaneMotion(progress){',begin);if(begin<0||end<0)throw Error('Lane clock baseline mismatch');source=source.slice(0,begin)+source.slice(begin,end).replaceAll('motion.frame=requestAnimationFrame(tick);','if(!this.draftManaged)motion.frame=requestAnimationFrame(tick);')+source.slice(end);}
  source=replace(source,'motion.start=0;motion.frame=requestAnimationFrame(motion.tick);','motion.start=0;if(!this.draftManaged)motion.frame=requestAnimationFrame(motion.tick);');

  // Contact bounds already include the current lane blend and recycled pose.
  // Initial placement records become stale after driving and must not mask
  // the reflection at the building's old position.
  source=replace(source,"const reflectors=[...this.buildingPlacements,...this.parkingColumns.map(c=>({x:c.position.x,z:c.position.z,width:.68,depth:.68}))];this.buildingCount.value=Math.min(32,reflectors.length);reflectors.slice(0,32).forEach((b,i)=>this.buildingFootprints.value[i].set(b.x+(this.layoutMotion?(this.layoutVisual.width-this.layoutMotion.to.width)*Math.sign(b.x)/2:0),b.z,b.width/2,b.depth/2));", "const reflectors=[...this.environmentFinish.contacts().blocks.map(({min,max})=>({x:(min[0]+max[0])/2,z:(min[2]+max[2])/2,width:max[0]-min[0]+.16,depth:max[2]-min[2]+.16})),...this.parkingColumns.map(c=>({x:c.position.x,z:c.position.z,width:.68,depth:.68}))];this.buildingCount.value=Math.min(32,reflectors.length);reflectors.slice(0,32).forEach((b,i)=>this.buildingFootprints.value[i].set(b.x,b.z,b.width/2,b.depth/2));");

  source=replace(source,"const trafficReflectionStamp=this.trafficSystem?.group.visible?this.trafficSystem.group.children.filter(o=>o.visible).map(o=>o.position.toArray().join(',')).join(';'):'none';","const parkingVehicles=(this.draftParkingGroup?.visible?this.draftParkingGroup.children:[]).filter(o=>o.visible&&o.userData.trafficVehicle);const trafficReflectionStamp=(this.trafficSystem?.group.visible?this.trafficSystem.group.children.filter(o=>o.visible).map(o=>o.position.toArray().join(',')).join(';'):'none')+'|'+parkingVehicles.map(o=>o.position.toArray().join(',')).join(';');");
  source=replace(source,'const rootChanged=this.reflectionSceneRoot!==this.root;', 'const draftOverlays=[];const rootChanged=this.reflectionSceneRoot!==this.root;');
  source=replace(source,'this.egoContact.visible=false;this.tailReflection.visible=false;',"this.draftParkingGroup?.traverse(o=>{if(o.visible&&(o.userData.draftOwned||o.userData.trafficShadow)){draftOverlays.push(o);o.visible=false;}});this.egoContact.visible=false;this.tailReflection.visible=false;");
  source=replace(source,'...(vehicle?[this.car]:[]),...(trafficVisible?', '...(vehicle?[this.car]:[]),...parkingVehicles,...(trafficVisible?');
  source=replace(source,'this.car.visible=vehicle;this.tailReflection.visible=vehicle;', 'for(const o of draftOverlays)o.visible=true;this.car.visible=vehicle;this.tailReflection.visible=vehicle;');
  source=replace(source,'const reflectedVehicles=[','(this.draftEgoReflectionCount??={value:0}).value=vehicle?1:0;const reflectedVehicles=[');
  source="import {vehicleReflectionPrefilter} from '../ui-draft/vehicle-reflection-sampling.js';\n"+source;
  source=replace(source,'this.carBlurQuad=new FullScreenQuad(this.carBlurMaterial);',`this.carBlurMaterial.fragmentShader=vehicleReflectionPrefilter;Object.assign(this.carBlurMaterial.uniforms,{reflectionDepth:this.carReflectionDepth,reflectionInverse:this.carReflectionInverse,absorbSource:{value:1},reflectionTone:{value:0},groundY:{value:0}});this.carBlurQuad=new FullScreenQuad(this.carBlurMaterial);`);
  // Move the existing inverse before source-height absorption. The fullscreen
  // blur passes do not change the capture camera, so the receiver reuses it.
  source=replace(source,'this.carReflectionInverse.value.copy(this.carMirror.camera.projectionMatrix).multiply(this.carMirror.camera.matrixWorldInverse).invert();','');
  source=replace(source,'this.carBlurMaterial.uniforms.source.value=this.carMirror.getRenderTarget().texture;',`this.carReflectionInverse.value.copy(this.carMirror.camera.projectionMatrix).multiply(this.carMirror.camera.matrixWorldInverse).invert();this.carBlurMaterial.uniforms.absorbSource.value=1;this.carBlurMaterial.uniforms.reflectionTone.value=mode==='dark'?1:0;this.carBlurMaterial.uniforms.groundY.value=this.carMirror.position.y;this.carBlurMaterial.uniforms.source.value=this.carMirror.getRenderTarget().texture;`);
  source=replace(source,'this.carBlurMaterial.uniforms.source.value=this.carBlurTargets[0].texture;', 'this.carBlurMaterial.uniforms.absorbSource.value=0;this.carBlurMaterial.uniforms.source.value=this.carBlurTargets[0].texture;');
  // The road receiver must end near the real footprint, not four metres aft.
  source=replace(source,'(horizontal?1.1:length/2)+4.0','(horizontal?(o.userData.vehicleSpec?.width||1.9)+.55:length+.45)*.75');
  source=replace(source,'(horizontal?length/2:1.1)+.5','(horizontal?length+.45:(o.userData.vehicleSpec?.width||1.9)+.55)*.75');
  // Match roughness in UV space to the accepted 1408x792 preview at every raster.
  source=replace(source,'this.carBlurMaterial.uniforms.direction.value.set(2/this.width,0)','this.carBlurMaterial.uniforms.direction.value.set(3.5/1408,0)');
  source=replace(source,'this.carBlurMaterial.uniforms.direction.value.set(0,2/this.height)','this.carBlurMaterial.uniforms.direction.value.set(0,3.5/792)');

  // The simulation and UI animations share frames; do not force synchronous
  // geometry projection/audit work into every animation frame.
  source=replace(source,'this.egoContact.visible=vehicle;this.egoContact.position.set','this.egoContact.rotation.y=this.car.rotation.y;this.egoContact.visible=vehicle;this.egoContact.position.set');
  // Moving buildings and their reflection must be captured on the same frame.
  // Reusing every third capture makes the reflection visibly step behind them.
  source=replace(source,'const construction=[];for(const o of this.root.children)', 'const laneMeshes=[];this.root.traverse(o=>{if(o.userData.laneOffset!==undefined)laneMeshes.push(o)});const construction=[];for(const o of this.root.children)');
  source=replace(source,'this.root.traverse(o=>{if(o.userData.laneOffset!==undefined){const start=', 'laneMeshes.forEach(o=>{if(o.userData.laneOffset!==undefined){const start=');

  source="import {installRampPassage} from '../ui-draft/ramp-passage.js';\nimport {installRampCurbs,rampNose,rampInset,RAMP_PAINT_INSET} from '../ui-draft/road-boundaries.js';\n"+source;
  source=replace(source,'ramp(id,w){','ramp(id,w){const draftRampStart=this.root.children.length;');
  source=replace(source,`let join=0;while(sample(join).l<half+2.4)join+=.01;
  const end=join+2.5,handle=4.5,epsilon=.001,slope=(sample(end+epsilon).l-sample(end-epsilon).l)/(2*epsilon);
  const nose=new THREE.CubicBezierCurve3(new THREE.Vector3(half,0,toZ(join)),new THREE.Vector3(half,0,toZ(join-handle)),new THREE.Vector3(sample(end).l-slope*handle,0,toZ(end-handle)),new THREE.Vector3(sample(end).l,0,toZ(end)));`,
  'const {join,end,slope,nose}=rampNose(half,sample,toZ);');
  source=replace(source,"nose:'tangent-continuous cubic'","nose:'integrated continuous-curvature bend'");
  source=replace(source,"const inset=(points,amount)=>points.map(([x,z],i)=>{const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz);return[x-dz/len*amount*sign,z+dx/len*amount*sign];});","const inset=points=>rampInset(points,sign);");
  source=replace(source,"this.pathRibbon(inset(inner,.25),.13,.033,'white');this.pathRibbon(inset(outer,.25),.13,.033,'white');","this.pathRibbon(inset(inner),.13,.028,'white');this.pathRibbon(inset(outer),.13,.028,'white');");
  source=replace(source,"this.line(-half+.25,70,-260)","this.line(-half+RAMP_PAINT_INSET,70,-900)");
  source=replace(source,"paintInset:.25,startTangentDot","paintInset:RAMP_PAINT_INSET,startTangentDot");
  source=replace(source,"this.line(-w/2+.25,70,distantEnd,deck);this.line(w/2-.25,70,distantEnd,deck);","const inset=['06','07'].includes(this.current)?RAMP_PAINT_INSET:.25;this.line(-w/2+inset,70,distantEnd,deck);this.line(w/2-inset,70,distantEnd,deck);");

  source=replace(source,'i<=96;i++){const p=nose.getPoint(i/96)','i<=192;i++){const p=nose.getPoint(i/192)');
  source=replace(source,'this.rampDimensions={lanes:2,laneWidth:3.7,width:7.4,','this.rampDimensions={lanes:w/3.7,laneWidth:3.7,width:w,');
  source=replace(source,"this.prepareStructurePaint('ramp');","installRampCurbs(this,inner,outer,sign);installRampPassage(this,id,w,draftRampStart,join);this.prepareStructurePaint('ramp');");
  source=replace(source,'if(this.suspended)return;','if(this.suspended||document.hidden)return;');
 }
 if(name==='preview-snapshot.js')source=source.replaceAll('drivescene-preview-v15','drivescene-ui-draft-preview-v2');
 if(name==='path-motion.js')source=source.replaceAll('drivescene-path-motion','drivescene-ui-draft-path-motion');
 if(name==='theme-sound.js')source="export {preparePathSound,pathSoundStatus,playPathSound,playPathExitSound,stopPathSound,playThemeSound} from '../ui-draft/assist-sound.js';";
 if(name==='world.js'){
  source=replace(source,"import {createTailLight,updateTailLight} from './tail-light.js';",'');
  source=replace(source,'this.tailReflection=createTailLight();this.scene.add(this.tailReflection);','');
  source=source.replaceAll('this.tailReflection.visible=false;','').replaceAll('this.tailReflection.visible=vehicle;','');
  source=replace(source,'updateTailLight(this.tailReflection,this.car,dark,isParking,this);','');
  // Preparation records mirror passes before its final shadow draw. Discard
  // that vehicle capture with the existing ground capture invalidation.
  source=replace(source,'this.reflectionSceneRoot=null;this.preparedRoots.add(this.root);','this.reflectionSceneRoot=null;this.carReflectionKey=null;this.preparedRoots.add(this.root);');
  // Initial scene suspension also covered the hand-off draw. A skipped draw
  // disposed every warmed program before live materials could acquire it.
  source=replace(source,' renderPreparedFrame(){\n  const prior=[];', ' renderPreparedFrame(){\n  const suspended=this.suspended;this.suspended=false;\n  const prior=[];');
  source=replace(source,'finally{for(const [object,visible,culled]of prior)', 'finally{this.suspended=suspended;for(const [object,visible,culled]of prior)');

 }
 source=refineIndoorFinish(name,refineFigma(name,source));
 if(name==='world.js'){
  source="import {prepareSceneSteps} from '../ui-draft/scene-preparation.js';\n"+source;
  source=replace(source,'for(const step of this.buildSteps(id,{...state,palette:this.palette}))await new Promise(resolve=>setTimeout(resolve,0));','await prepareSceneSteps(this.buildSteps(id,{...state,palette:this.palette}));');
  // Use the same construction path for synchronous callers and sliced scene
  // preparation. Yield only after a complete independent geometry operation.
  source=replace(source,'{installRampCurbs,rampNose,','{installRampCurbs,rampCurbSteps,rampNose,');
  source=replace(source,' ramp(id,w){',' ramp(id,w){for(const step of this.rampSteps(id,w)){} }\n *rampSteps(id,w){');
  source=replace(source,'   this.ramp(id,w);','   yield* this.rampSteps(id,w);');
  source=replace(source,"shape.closePath();this.flatShape(shape,.015,'road');","shape.closePath();yield;this.flatShape(shape,.015,'road');yield;");
  source=replace(source,"this.pathRibbon(inset(outer),.13,.028,'white');","this.pathRibbon(inset(outer),.13,.028,'white');yield;");
  source=replace(source,'  const startTangent=nose.getTangent(0)', '  yield;const startTangent=nose.getTangent(0)');
  source=replace(source,'installRampCurbs(this,inner,outer,sign);installRampPassage(this,id,w,draftRampStart,join);', 'yield* rampCurbSteps(this,inner,outer,sign);installRampPassage(this,id,w,draftRampStart,join);yield;');
 }

 if(name==='traffic-vehicle.js'){
  source="import {createTrafficReveal,applyTrafficGrowth,trafficEntryOpacity} from '../ui-draft/traffic-reveal.js';\n"+source;
  source=replace(source,"const group=new THREE.Group();group.name='Traffic vehicles';", "const reveal=createTrafficReveal({enabled,now});const group=new THREE.Group();group.name='Traffic vehicles';");
  source=replace(source,'if(next!==key||!sameRoot){','if(next!==key||!sameRoot){if(!sameRoot)reveal.set(enabled,{snap:true});');
  source=source.replaceAll('group.visible=enabled&&modelsReady&&slots.some(s=>s.route);','group.visible=reveal.present&&modelsReady&&slots.some(s=>s.route);');
  source=replace(source,'group.visible=reveal.present&&modelsReady&&slots.some(s=>s.route);','const growth=reveal.sample();group.visible=reveal.present&&modelsReady&&slots.some(s=>s.route);');
  source=replace(source,'const active=slots.filter(s=>s.route&&s.target&&!s.cooldown);','for(const car of pool)applyTrafficGrowth(car,growth,world);const active=slots.filter(s=>s.route&&s.target&&!s.cooldown);');
  source=replace(source,"setTrafficAppearance(car,state.mode==='dark',slot.alpha,","setTrafficAppearance(car,state.mode==='dark',slot.alpha*trafficEntryOpacity(growth),");
  source=replace(source,'setEnabled(value){const entering=!!value&&!enabled;enabled=!!value;', 'animating:()=>reveal.active,setEnabled(value){const entering=!!value&&!enabled&&!reveal.present;reveal.set(value,{snap:world.draftInitialFrameReady!==true||!!world.initializingScene});enabled=!!value;');
  source=replace(source,'draftCapture:()=>({last,elapsed,slots:', 'draftCapture:()=>({reveal:reveal.capture(),last,elapsed,slots:');
  source=replace(source,'draftRestore(snapshot){last=snapshot.last;', 'draftRestore(snapshot){if(snapshot.reveal)reveal.restore(snapshot.reveal);last=snapshot.last;');
 }
 if(name==='traffic-vehicle.js'){
  // Apply after the initial-pose refinement, which anchors to this old branch.
  // The fixed-model pool only needs a new pose and speed when recycling.
  source=replace(source,`  if(recycled&&modelsReady){
   const type='model-y',fresh=createTrafficVehicle(type);
   for(const child of [...slot.car.children]){slot.car.remove(child);child.material?.dispose();}
   for(const child of [...fresh.children])slot.car.add(child);Object.assign(slot.car.userData,fresh.userData);
  }
`,'');
 }
 if(['contact-shadows.js','traffic-model.js'].includes(name)){
  source=(name==='contact-shadows.js'?"import {roadShadowStrength,roadShadowSpread} from '../ui-draft/road-shadow-settings.js';\n":"import {roadTrafficShadowStrength as roadShadowStrength,roadShadowSpread} from '../ui-draft/road-shadow-settings.js';\n")+source;
  const uniformAnchor=name==='contact-shadows.js'?'uniforms:{opacity:':'uniforms:{visibility:';
  source=replace(source,uniformAnchor,uniformAnchor.replace('uniforms:{','uniforms:{roadShadowStrength,roadShadowSpread,'));
  const spread=name==='contact-shadows.js'?'mix(vec2(1.),roadShadowSpread,body)':'roadShadowSpread';
  source=replace(source,"vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}'","vertexShader:'uniform vec2 roadShadowSpread;"+(name==='contact-shadows.js'?'uniform float body;':'')+"varying vec2 v;void main(){v=uv;vec3 local=position;local.xy*="+spread+";gl_Position=projectionMatrix*modelViewMatrix*vec4(local,1.);}'");
  source=replace(source,"fragmentShader:'varying vec2 v;","fragmentShader:'uniform float roadShadowStrength;varying vec2 v;");
  if(name==='contact-shadows.js')source=replace(source,'gl_FragColor=vec4(.008,.010,.014,a);','gl_FragColor=vec4(.008,.010,.014,1.-pow(1.-clamp(a,0.,.999),roadShadowStrength));');
  else source=replace(source,'a*.84*visibility','(1.-pow(1.-clamp(a*.84,0.,.999),roadShadowStrength))*visibility');
 }

 source=source.replaceAll('location.search','(globalThis.__draftSearch??location.search)').replaceAll('location.origin',"(window.frameElement?window.parent.location.origin:location.origin)").replaceAll('history.replaceState(',"if(location.protocol!=='about:')history.replaceState(");
 source=source.replaceAll('import.meta.url',`new URL('../engine/${name}',import.meta.url).href`);
 return {contents:source,loader:'js',resolveDir:args.path.slice(0,args.path.lastIndexOf('/'))};
 });}}}
