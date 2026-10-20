import test from 'node:test';
import assert from 'node:assert/strict';
import {previewPixels} from '../pixel-resolution.js';
import {createProject} from '../artboards.js';
import {patchFeatures,patchApp} from '../runtime-patches.mjs';
import {readFile} from 'node:fs/promises';

test('Retina rendering has at least one raster pixel per physical display pixel at DPR 1 or 2',()=>{
 for(const width of [320,720,1120,1200,1680])for(const ratio of [1,2]){
  const pixels=previewPixels(width,ratio);assert.ok(pixels.width>=width*ratio);assert.ok(pixels.width<width*ratio+16);assert.equal(pixels.width/pixels.height,16/9);
 }
 assert.deepEqual(previewPixels(720,2),{width:1440,height:810,pixelRatio:2});assert.equal(previewPixels(1120,2).width,2240);
});
test('Draft raster patch removes the legacy 1440 ceiling without editing shared source',async()=>{
 const source=await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'),patched=patchApp(source);
 assert.match(patched,/previewPixels\(preview.clientWidth,devicePixelRatio\)/);assert.doesNotMatch(patched,/Math.min\(mobile\?1280:1440/);
});
test('Finish-110 path shaders and timing constants are preserved',async()=>{
 const source=await readFile(new URL('../../engine/version-features.js',import.meta.url),'utf8'),patched=patchFeatures(source);
 const fragment=value=>value.slice(value.indexOf('const pathFragment='),value.indexOf('const skyVertex='));
 assert.equal(fragment(patched),fragment(source));assert.match(patched,/const revealDuration=\(\)=>activationSweep\?350:/);assert.match(patched,/PATH_RETRACT_MS=180\*MOTION_TIME_SCALE/);
});
test('Artboards hold independent parameters and durable seeds',()=>{
 const project=createProject();project.boards.road.params.lanes=2;assert.equal(project.boards.elevated.params.lanes,6);assert.notEqual(project.boards.road.seed,project.boards.junction.seed);assert.equal(project.boards.road.size.width/project.boards.road.size.height,16/9);
});
