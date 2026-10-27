import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createProject,setProjectVehicle,setProjectWeather} from '../artboards.js';
const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
const apply=source.slice(source.indexOf('async function applyParam('),source.indexOf('\nfunction toggleAssist('));
const scene=source.slice(source.indexOf('function selectScene('),source.indexOf('\nasync function performScene('));
const theme=source.slice(source.indexOf('async function setTheme('),source.indexOf("\n$('theme').addEventListener"));
function harness(){
 const project=createProject(),calls=[],locks=[],saved=[],errors=[],elements=new Map();let resolve,reject;
 const pending=new Promise((a,b)=>{resolve=a;reject=b;});
 const $=id=>{if(!elements.has(id))elements.set(id,{open:false,textContent:'',disabled:false});return elements.get(id);};
 const bridge=()=>({param:async(key,value)=>{calls.push([key,value]);await pending;}});
 const create=new Function('project','setProjectVehicle','setProjectWeather','$','bridge','lockControls','persist','feedback','renderVehicles',`
 let ready=true,exporting=false,previewBusy=false,sceneUpdating=false,vehicleUpdating=false,status={},themeTransition=null,requestedTheme='light',sceneRequest=0,sceneSelection=Promise.resolve();
 const params=()=>project.boards[project.active].params,vehicles=[['model-3','Tesla Model 3'],['x6','BMW X6'],['ix','BMW iX'],['xc90','Volvo XC90']];
 const renderLabel=()=>{},refreshExportPreview=()=>{},performScene=()=>{throw Error('Scene must not overlap vehicle replacement');};
 ${apply}\n${scene}\n${theme}
 return {applyParam,selectScene,setTheme,get busy(){return vehicleUpdating},setThemeTransition(value){themeTransition=value;}};`);
 const controller=create(project,setProjectVehicle,setProjectWeather,$,bridge,value=>locks.push(value),()=>saved.push(structuredClone(project)),error=>errors.push(error),()=>{});
 return {controller,project,calls,locks,saved,errors,elements,resolve,reject};
}
test('A pending model replacement excludes model, weather, scene and theme changes, then unlocks and persists one coherent choice',async()=>{
 const h=harness(),first=h.controller.applyParam('model','x6');
 assert.equal(h.controller.busy,true);assert.deepEqual(h.locks,[true]);
 await h.controller.applyParam('model','ix');await h.controller.applyParam('weather','snow');await h.controller.selectScene('parking');await h.controller.setTheme('dark');
 assert.deepEqual(h.calls,[['model','x6']]);assert.equal(h.project.active,'road');assert.equal(h.project.shared.weather,'default');assert.equal(h.saved.length,0);
 h.resolve();await first;assert.equal(h.controller.busy,false);assert.deepEqual(h.locks,[true,false]);assert.equal(h.saved.length,1);
 for(const board of Object.values(h.saved[0].boards))assert.equal(board.params.model,'x6');
 assert.equal(h.elements.get('vehicle-name').textContent,'BMW X6');
 await h.controller.applyParam('model','ix');assert.equal(h.project.shared.model,'ix');assert.equal(h.saved.length,2);
});
test('Failed replacement restores the previous global model and unlocks controls without persisting the failed choice',async()=>{
 const h=harness(),first=h.controller.applyParam('model','xc90');h.reject(Error('Could not switch vehicle'));await first;
 assert.equal(h.controller.busy,false);assert.deepEqual(h.locks,[true,false]);assert.equal(h.saved.length,0);assert.deepEqual(h.errors,['Could not switch vehicle']);
 for(const board of Object.values(h.project.boards))assert.equal(board.params.model,'model-3');
 assert.equal(h.elements.get('vehicle-name').textContent,'Tesla Model 3');
});
test('Model replacement does not start during an existing theme transition',async()=>{
 const h=harness();h.controller.setThemeTransition({});await h.controller.applyParam('model','ix');assert.deepEqual(h.calls,[]);assert.equal(h.project.shared.model,'model-3');assert.equal(h.controller.busy,false);
});
