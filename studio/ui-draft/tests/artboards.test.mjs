import test from 'node:test';
import assert from 'node:assert/strict';
import {createArtboard,createProject,setProjectWeather,setProjectVehicle} from '../artboards.js';

test('Parking camera choices start with an actual selected option',()=>{
 for(const type of ['parking','outdoor']){
  assert.equal(createArtboard(type).params.camera,'default');
  assert.equal(createArtboard(type,{camera:'low'}).params.camera,'default');
  assert.equal(createArtboard(type,{camera:'bev'}).params.camera,'bev');
 }
 assert.equal(createArtboard('road',{camera:'high'}).params.camera,'high');
});

test('Saved board properties survive normalization independently',()=>{
 const project=createProject({active:'outdoor',boards:{outdoor:{params:{camera:'raised',model:'ix',path:true}},ramp:{params:{layout:'07'}}}});
 assert.equal(project.active,'outdoor');
 assert.equal(project.boards.outdoor.params.camera,'raised');
 assert.equal(project.boards.outdoor.params.model,'ix');
 assert.equal(project.boards.road.params.path,false);
 assert.equal(project.boards.ramp.params.layout,'07');
});

test('Project normalization preserves explicit Assist and scene preferences',()=>{
 const saved={active:'ramp',boards:Object.fromEntries(['road','elevated','ramp','junction','parking','outdoor'].map(id=>[id,{params:{path:true,weather:'rain',model:'ix'}}]))};
 const project=createProject(saved);
 assert.equal(project.active,'ramp');
 for(const board of Object.values(project.boards)){assert.equal(board.params.path,true);assert.equal(board.params.weather,'rain');assert.equal(board.params.model,'ix')}
 assert.equal(saved.boards.ramp.params.path,true);
 project.boards.ramp.params.path=true;
 assert.equal(createProject(project).boards.ramp.params.path,true);
});

test('Weather is a shared setting and migrates the active scene without overwriting its camera',()=>{
 const p=createProject({active:'ramp',boards:{ramp:{params:{weather:'rain',camera:'high'}},road:{params:{weather:'snow',lanes:2}}}});
 assert.equal(p.shared.weather,'rain');assert.equal(p.boards.road.params.weather,'rain');
 setProjectWeather(p,'snow');const reopened=createProject(JSON.parse(JSON.stringify(p)));
 for(const b of Object.values(reopened.boards))assert.equal(b.params.weather,'snow');
 assert.equal(reopened.boards.ramp.params.camera,'high');assert.equal(reopened.boards.road.params.lanes,2);
});

test('Vehicle selection persists globally across every scene and reload',()=>{const p=createProject({active:'ramp',boards:{ramp:{params:{model:'ix'}},road:{params:{model:'x6'}}}});for(const b of Object.values(p.boards))assert.equal(b.params.model,'ix');setProjectVehicle(p,'xc90');const reopened=createProject(JSON.parse(JSON.stringify(p)));for(const b of Object.values(reopened.boards))assert.equal(b.params.model,'xc90');});

test('Removed cloudy setting normalizes to Clear',()=>{const p=createProject({active:'road',boards:{road:{params:{weather:'overcast'}}}});assert.equal(p.shared.weather,'default');});

test('Temporary Junction lift calibration is removed from restored settings',()=>{
 const restored=createProject({boards:{junction:{params:{liftDistance:31,layout:'08'}}}});
 assert.equal('liftDistance' in restored.boards.junction.params,false);assert.equal(restored.boards.junction.params.layout,'08');
});
