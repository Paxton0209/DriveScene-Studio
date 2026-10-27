import test from 'node:test';
import assert from 'node:assert/strict';
import {previewPixels} from '../pixel-resolution.js';
import {createProject} from '../artboards.js';
import {patchFeatures,patchApp} from '../runtime-patches.mjs';
import {readFile} from 'node:fs/promises';

test('Retina rendering has two samples per CSS pixel before compositor zoom',()=>{
 for(const width of [320,720,1120,1200,1680])for(const ratio of [1,2]){
  const pixels=previewPixels(width,ratio);assert.ok(pixels.width>=width*2);assert.ok(pixels.width<width*2+16);assert.equal(pixels.width/pixels.height,16/9);
 }
 assert.deepEqual(previewPixels(720,2),{width:1440,height:810,pixelRatio:2});assert.equal(previewPixels(1120,2).width,2240);
});
test('Compositor zoom receives native pixels without changing the CSS aspect ratio or adding sharpening',()=>{
 const zoomed=previewPixels(928,1.8,1.58745);assert.equal(zoomed.width,2960);assert.equal(zoomed.height,1665);
 assert.equal(previewPixels(928,1.8,1).width,1856);
 assert.equal(previewPixels(928,1.8,2.397).width,4096);assert.equal(previewPixels(4000,2,4).width,4096);
 for(const bad of [undefined,NaN,-1,0])assert.equal(previewPixels(928,1.8,bad).width,1856);
});
test('Draft raster patch removes the legacy 1440 ceiling without editing shared source',async()=>{
 const source=await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'),patched=patchApp(source);
 assert.match(patched,/previewPixels\(preview.clientWidth,devicePixelRatio,window.parent.visualViewport/);assert.doesNotMatch(patched,/Math.min\(mobile\?1280:1440/);
});
test('Path sweep intensity drops twenty percent while all other shader timing remains intact',async()=>{
 const source=await readFile(new URL('../../engine/version-features.js',import.meta.url),'utf8'),patched=patchFeatures(source);
 const fragment=value=>value.slice(value.indexOf('const pathFragment='),value.indexOf('const skyVertex=')).replace('uniform float junctionBrake;uniform float junctionReveal;uniform float junctionStop;','').replace(/ if\(junctionBrake>\.5\)\{[\s\S]*?\n \}\n/,'');
 assert.equal(fragment(patched),fragment(source).replace('surface=mix(surface,sweepColor,sweepBand);','surface=mix(surface,sweepColor,sweepBand*.8);'));assert.match(patched,/const revealDuration=\(\)=>JUNCTION_IDS.includes\(sceneId\(\)\)\?650:activationSweep\?350:/);assert.match(patched,/PATH_RETRACT_MS=180\*MOTION_TIME_SCALE/);
});
test('Artboards hold independent parameters and durable seeds',()=>{
 const project=createProject();project.boards.road.params.lanes=2;assert.equal(project.boards.elevated.params.lanes,6);assert.notEqual(project.boards.road.seed,project.boards.junction.seed);assert.equal(project.boards.road.size.width/project.boards.road.size.height,16/9);
});
