import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {isolatedRuntimePlugin,patchApp} from '../runtime-patches.mjs';

test('Both Ramp variants advance and freeze when suspended without another animation loop',async()=>{
 let load;
 isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
 const {contents}=await load({path:new URL('../../engine/continuous-driving.js',import.meta.url).pathname});
 const {createContinuousDriving}=await import(`data:text/javascript;base64,${Buffer.from(contents).toString('base64')}`);
 for(const id of ['06','07']){
  const world={draftManaged:true,state:{id,laneCount:4},root:{uuid:id,children:[]}};
  let scheduled=0;
  const drive=createContinuousDriving(world,{schedule(){scheduled++;return 1},cancel(){},hidden:()=>false});
  for(const key of ['shadowKey','groundReflectionKey','carReflectionKey'])world[key]='before-bind';
  drive.rebind();
  for(const key of ['shadowKey','groundReflectionKey','carReflectionKey']){assert.equal(world[key],null);world[key]='steady';}
  drive.rebind();
  for(const key of ['shadowKey','groundReflectionKey','carReflectionKey'])assert.equal(world[key],'steady');
  drive.setPlaying(true);
  for(let frame=0;frame<30;frame++)assert.equal(drive.advance(1/30),true);
  assert.ok(Math.abs(drive.audit().distance-13.9)<.00001);
  world.suspended=true;
  const paused=drive.audit().distance;
  assert.equal(drive.advance(1/30),false);
  assert.equal(drive.audit().distance,paused);
  assert.equal(scheduled,0);
 }
});

test('Junction samples the original motion rather than a simultaneous looping lerp',async()=>{
 const source=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 assert.match(source,/world.startCameraMotion\(from\)/);
 assert.match(source,/junctionPoses.motion.sample/);
 assert.doesNotMatch(source,/loopTime%5|blend=progress/);
 assert.match(source,/\['road','elevated','ramp'\]/);
});

test('Ego follows a stopped leader without restarting its cruise speed at zero',async()=>{
 let load;
 isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
 const {contents}=await load({path:new URL('../../engine/continuous-driving.js',import.meta.url).pathname});
 const {createContinuousDriving}=await import(`data:text/javascript;base64,${Buffer.from(contents).toString('base64')}`);
 const world={draftManaged:true,state:{id:'02',laneCount:4},root:{uuid:'following',children:[]},car:{position:{x:1.85,z:14}},trafficSystem:{audit:()=>({visible:true,positions:[[1.85,0,10]],lanes:[{direction:-1,speed:0}]})}};
 const drive=createContinuousDriving(world,{hidden:()=>false});
 drive.setPlaying(true);
 let prior=16.8;
 for(let i=0;i<1800;i++){
  drive.advance(1/60);
  assert.ok(world.draftCruiseSpeed<=prior+1e-9);
  assert.ok(prior-world.draftCruiseSpeed<=2.2/60+1e-9);
  prior=world.draftCruiseSpeed;
 }
 assert.equal(world.draftCruiseSpeed,0);
});

test('Inspector rows remove inherited padding',async()=>{
 const css=await readFile(new URL('../inspector.css',import.meta.url),'utf8');
 assert.match(css,/\.properties\{[^}]*padding:0;[^}]*width:100%/);
});

test('Only explicit Assist intent can request sound; restoration is silent by default',async()=>{
 const original=await readFile(new URL('../../engine/app.js',import.meta.url),'utf8');
 const source=patchApp(original);
 assert.match(source,/param\(key,value,\{sound=false,animate=true\}=\{\}\)/);
 assert.match(source,/if\(sound&&key==='path'/);
 assert.match(source,/versionFeatures.set\(\{\[key\]:value\},\{animate\}\)/);
 assert.match(source,/function rememberPreview\(immediate=false\)\{if\(query.get\('review'\)==='ui-draft'\)return/);
 const draft=await readFile(new URL('../draft.js',import.meta.url),'utf8');
 assert.match(draft,/applyParam\('path',true,true,\{sound:true\}\)/);
 assert.equal((draft.match(/sound:true/g)||[]).length,1);
 assert.match(draft,/ready=true;await bridge\(\).param\('traffic',state.traffic\)/);
});


test('Draft junction traffic follows playback without a camera motion owner',async()=>{
 const original=await readFile(new URL('../../engine/app.js',import.meta.url),'utf8');
 const source=patchApp(original);
 const expression=source.match(/const moving=(.*?);trafficSystem.update/)[1];
 const moving=new Function('world','continuousDrive','return '+expression);
 let playing=true;
 const world={draftManaged:true,state:{id:'05'},cameraMotion:null,draftJunctionPlaying:()=>playing};
 const drive={audit:()=>({playing:false})};
 assert.equal(moving(world,drive),true,'Cross traffic advances during approach');
 world.state.id='08';assert.equal(moving(world,drive),true,'T traffic advances during approach');
 playing=false;assert.equal(moving(world,drive),false,'Pause and completed approach freeze traffic');
 assert.equal(moving(world,{audit:()=>({playing:true})}),true,'Continuous driving is unchanged');
 world.draftManaged=false;world.cameraMotion={};assert.equal(moving(world,drive),true);
 world.cameraMotion=null;assert.equal(moving(world,drive),false);
});
