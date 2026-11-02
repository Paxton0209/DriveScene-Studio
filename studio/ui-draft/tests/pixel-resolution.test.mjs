import test from 'node:test';
import assert from 'node:assert/strict';
import {previewPixels,previewPixelLimit} from '../pixel-resolution.js';
import {createProject} from '../artboards.js';
import {patchFeatures,patchApp} from '../runtime-patches.mjs';
import {readFile} from 'node:fs/promises';

test('Interactive raster respects display density and a finite GPU budget',()=>{
 assert.deepEqual(previewPixels(320,1),{width:320,height:180,pixelRatio:1});
 assert.deepEqual(previewPixels(720,2),{width:1440,height:810,pixelRatio:2});
 for(const width of [320,720,1120,1680,4000])for(const ratio of [1,2]){
  const pixels=previewPixels(width,ratio);assert.ok(pixels.width<=1440);assert.equal(pixels.width/pixels.height,16/9);
 }
 assert.equal(previewPixels(928,2,4).width,1440);
 assert.equal(previewPixels(928,2,1,960).width,960);
});
test('Software rendering gets a smaller preview budget; driver lookup failure keeps the default',()=>{
 for(const name of ['SwiftShader Device','llvmpipe','Software Rasterizer'])assert.equal(previewPixelLimit({getContext:()=>({getExtension:()=>({UNMASKED_RENDERER_WEBGL:1}),getParameter:()=>name})}),960);
 assert.equal(previewPixelLimit({getContext:()=>({getExtension:()=>null})}),1440);
 assert.equal(previewPixelLimit({getContext(){throw Error('context lost')}}),1440);
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
