import test from 'node:test';
import assert from 'node:assert/strict';
import {createArtboard,createProject} from '../artboards.js';

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

test('Every page load resets Assist without discarding saved scene preferences',()=>{
 const saved={active:'ramp',boards:Object.fromEntries(['road','elevated','ramp','junction','parking','outdoor'].map(id=>[id,{params:{path:true,weather:'rain',model:'ix'}}]))};
 const project=createProject(saved);
 assert.equal(project.active,'ramp');
 for(const board of Object.values(project.boards)){assert.equal(board.params.path,false);assert.equal(board.params.weather,'rain');assert.equal(board.params.model,'ix')}
 assert.equal(saved.boards.ramp.params.path,true);
 project.boards.ramp.params.path=true;
 assert.equal(createProject(project).boards.ramp.params.path,false);
});
