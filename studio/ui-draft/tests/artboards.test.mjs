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
