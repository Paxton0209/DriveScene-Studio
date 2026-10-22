import {readFile} from 'node:fs/promises';
import {refineWorld,refineWeather,refineSnowGround,refineActivation} from './scene-refinements.mjs';

function replace(source,from,to){if(!source.includes(from))throw Error(`UI draft baseline mismatch: ${from.slice(0,90)}`);return source.replace(from,to)}

export function patchFeatures(source){
 source="import {advanceRoadArrows} from '../ui-draft/road-mark-motion.js';\nimport {advanceRampPassage} from '../ui-draft/ramp-passage.js';\nimport {previewDistance} from '../ui-draft/junction-playback.js';\n"+source;
 source=replace(source,"if(id==='06')return {kind:'lane',x,y,points:straight(x,8,-255,1)};","if(id==='06')return {kind:'lane',x,y,points:straight(x,8,-255,1)};if(JUNCTION_IDS.includes(id))return {kind:'lane',x,y,points:straight(x,30,-255,1)};");
 source=replace(source,'path.startS+PATH_REACH,path.total-1','path.startS+(JUNCTION_IDS.includes(id)?previewDistance(world.draftSpeed??0):PATH_REACH),path.total-1');
 source=replace(source,'path.mesh.visible=reveal>.001&&end-path.startS>2;','path.mesh.visible=reveal>.001&&end-path.startS>(JUNCTION_IDS.includes(id)?.02:2);');
 source=source.replaceAll("'material-draft'","'ui-draft'");
 source=source.replaceAll('performance.now()','(world.draftTime??performance.now())');
 source=replace(source,'if(patch.path&&!reduced())activationSweep?.start();','if(patch.path&&animate&&!reduced())activationSweep?.start();');
 source=replace(source,'const queueFrame=()=>{','const queueFrame=()=>{if(world.draftManaged)return;');
 source=replace(source,'far.visible=opacity>.001;}\n  }\n  return data;','far.visible=opacity>.001;}\n   advanceRoadArrows(data,world.drivingDistance||0);\n  }\n  return data;');
 source=replace(source,'world.renderFrame=function(...args){','world.renderFrame=function(...args){advanceRampPassage(world.root,world.drivingDistance||0);');
 return refineWeather(source);
}

export function patchApp(source){
 source="import {previewPixels} from '../ui-draft/pixel-resolution.js';\nimport {installDraftBridge,makeRandom} from '../ui-draft/engine-bridge.js';\n"+source;
 source=replace(source,"function previewResolution(){const mobile=matchMedia('(max-width:760px)').matches;const width=Math.min(mobile?1280:1440,Math.max(640,Math.ceil(preview.clientWidth*Math.min(devicePixelRatio||1,2)/16)*16));return [width,Math.round(width*9/16)];}","function previewResolution(){const raster=previewPixels(preview.clientWidth,devicePixelRatio);return [raster.width,raster.height];}");
 source=source.replaceAll("'material-draft'","'ui-draft'").replaceAll("'sr-theme'","'sr-ui-draft-theme'");
 source=source.replaceAll("history.replaceState(null,'',`?${q}`)","history.replaceState(null,'',location.pathname+`?${q}`)");
 source=replace(source,'createContinuousDriving(world,{onFrame()',"createContinuousDriving(world,{random:world.draftSceneryRandom=makeRandom(Number(query.get('seed'))||110),onFrame()");
 source=replace(source,'createTrafficSystem(world):null',"createTrafficSystem(world,{random:world.draftTrafficRandom=makeRandom((Number(query.get('seed'))||110)+1),now:()=>world.draftTime??performance.now()}):null");
 source=replace(source,"continuousDrive.setPlaying(['road','elevated'].includes(selected));","if(!world.draftManaged)continuousDrive.setPlaying(['road','elevated'].includes(selected)&&!matchMedia('(prefers-reduced-motion: reduce)').matches);");
 source=replace(source,"if(key==='path'&&!value&&driveArmTimer)","if(key==='path'&&!value&&driveArmTimer&&!world.draftManaged)");
 source=replace(source,"param(key,value){document.documentElement.dataset.choiceInput='pointer';","param(key,value,{sound=false,animate=true}={}){document.documentElement.dataset.choiceInput='pointer';");
 source=replace(source,"if(key==='path'&&!query.has('qa')","if(sound&&key==='path'&&!query.has('qa')");
 source=replace(source,'versionFeatures.set({[key]:value});','versionFeatures.set({[key]:value},{animate});');
 source=replace(source,'scene(key){const button=sceneButtons.get(key);','scene(key){stopPathSound();const button=sceneButtons.get(key);');
 source=replace(source,"preferences.get('junction').junctionPosition=query.get('position')==='approaching'||(first.key==='junction'&&query.get('view')==='low'&&!query.has('position'))?'approaching':'near';","preferences.get('junction').junctionPosition='approaching';");
 source=source.replaceAll("if(!reduced)playThemeSound(theme==='dark');",'').replaceAll("if(mode!==value&&!matchMedia('(prefers-reduced-motion: reduce)').matches)playThemeSound(value==='dark');",'');
 source=replace(source,"mode=value;requestedTheme=value;render(false);await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));","mode=value;requestedTheme=value;render(false);");
 source=replace(source,'function rememberPreview(immediate=false){',"function rememberPreview(immediate=false){if(query.get('review')==='ui-draft')return;");
 source=replace(source,"window.dispatchEvent(new Event('layout:ready'));","installDraftBridge({world,features:versionFeatures,drive:continuousDrive,traffic:trafficSystem,api:window.layoutEngine,current:()=>selected,updateURL});\nwindow.dispatchEvent(new Event('layout:ready'));");
 return source;
}

export function isolatedRuntimePlugin(){return {name:'isolated-ui-draft',setup(build){build.onLoad({filter:/\/engine\/.*\.js$/},async args=>{
 let source=await readFile(args.path,'utf8');const name=args.path.split('/engine/').at(-1);
 if(name==='app.js')source=patchApp(source);
 if(name==='version-features.js')source=patchFeatures(source);
 if(name==='sr-quality.js')source=source.replaceAll("'material-draft'","'ui-draft'");
 if(name==='weather-ground.js')source=refineSnowGround(source);
 if(name==='activation-sweep.js')source=refineActivation(source).replaceAll('performance.now()','(world.draftTime??performance.now())');
 if(name==='parking-reference.js')source=replace(source,'const floor=createParkingSurface(world,tone,true);',"const floor=createParkingSurface(world,tone,true);const floorCompile=floor.onBeforeCompile,floorCache=floor.customProgramCacheKey();floor.onBeforeCompile=function(shader,renderer){floorCompile.call(this,shader,renderer);shader.fragmentShader=shader.fragmentShader.replace('mix(.38,.55,reflectionTone)*proximity*valid*reflectionStrength','mix(.16,.24,reflectionTone)*proximity*valid*reflectionStrength');};floor.customProgramCacheKey=()=>floorCache+'-draft-indoor-matte';");
 if(name==='continuous-driving.js'){
  source=source.replaceAll("['02','09','03'].includes(world.state?.id)","['02','09','03','06','07'].includes(world.state?.id)");
  source=source.replaceAll('if(!hidden())frame=schedule(tick)','if(!world.draftManaged&&!hidden())frame=schedule(tick)').replaceAll('if(playing&&!hidden())frame=schedule(tick)','if(playing&&!world.draftManaged&&!hidden())frame=schedule(tick)');
  source=replace(source,'return {setPlaying,pause,reset,advance,',"return {draftCapture:()=>({distance,recycled,z:groups.map(group=>group.z)}),draftRestore(snapshot){distance=snapshot.distance;recycled=snapshot.recycled;snapshot.z.forEach((z,index)=>{if(groups[index])groups[index].z=z});world.drivingDistance=distance;world.drivingFrame=Math.floor(distance*2);},setPlaying,pause,reset,advance,");
 }
 if(name==='traffic-vehicle.js')source=replace(source,'return {group,ready,update,',"return {draftCapture:()=>({last,elapsed,slots:slots.map(slot=>({...slot}))}),draftRestore(snapshot){last=snapshot.last;elapsed=snapshot.elapsed;slots.forEach((slot,index)=>Object.assign(slot,snapshot.slots[index]));},group,ready,update,");
 if(name==='world.js'){
  source=refineWorld(source);
  source="import {installRampPassage} from '../ui-draft/ramp-passage.js';\n"+source;
  source=replace(source,'ramp(id,w){','ramp(id,w){const draftRampStart=this.root.children.length;');
  source=replace(source,"this.prepareStructurePaint('ramp');","installRampPassage(this,id,w,draftRampStart,join);this.prepareStructurePaint('ramp');");
  source=replace(source,'if(this.suspended)return;','if(this.suspended||document.hidden)return;');
 }
 if(name==='preview-snapshot.js')source=source.replaceAll('drivescene-preview-v15','drivescene-ui-draft-preview-v2');
 if(name==='path-motion.js')source=source.replaceAll('drivescene-path-motion','drivescene-ui-draft-path-motion');
 if(name==='theme-sound.js')source=source.replaceAll('drivescene-assist-sound','drivescene-ui-draft-assist-sound');
 source=source.replaceAll('import.meta.url',`new URL('../engine/${name}',import.meta.url).href`);
 return {contents:source,loader:'js',resolveDir:args.path.slice(0,args.path.lastIndexOf('/'))};
 });}}}
