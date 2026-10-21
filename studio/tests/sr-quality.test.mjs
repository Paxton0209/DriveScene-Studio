import test from 'node:test';
import assert from 'node:assert/strict';
import {SR_QUALITY_MIX,lightQuality,lightQualityForMix} from '../engine/sr-quality.js';
test('the ordinary workbench defaults to its original materials',()=>{
 assert.equal(SR_QUALITY_MIX,0);assert.equal(lightQuality.roadRoughness,.54);assert.equal(lightQuality.reflectionStrength,1);assert.equal(lightQuality.aerialStart,55);
});
test('the material study changes road and facade finishes while preserving sky and surrounding ground',()=>{
 const study=lightQualityForMix(.5);assert.equal(study.roadRoughness,.32);assert.ok(Math.abs(study.buildingRoughness-.36)<1e-12);assert.equal(study.reflectionStrength,1);assert.equal(study.aerialStart,55);assert.equal(study.aerialSpan,315);
 assert.ok(Object.values(study).every(Number.isFinite));assert.deepEqual(Object.keys(study),Object.keys(lightQuality));for(const [key,value] of Object.entries(lightQuality))if(!['roadRoughness','roadFinishBase','buildingRoughness','buildingClearcoat','aerialSpan'].includes(key))assert.equal(study[key],value,key);
});

test('original and satin-road startup snapshots have distinct identities',async()=>{
 const {previewSnapshotSearch}=await import('../engine/preview-snapshot.js');
 const scene='?scene=02&mode=light&model=model-3&path=1';
 assert.notEqual(previewSnapshotSearch(scene+'&review=material-draft&quality=sr50'),previewSnapshotSearch(scene+'&review=material-draft&quality=baseline'));
 assert.notEqual(previewSnapshotSearch(scene+'&review=material-draft&quality=sr50'),previewSnapshotSearch(scene));
});
