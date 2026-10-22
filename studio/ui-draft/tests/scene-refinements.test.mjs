import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {refineWorld,refineWeather,refineSnowGround,refineActivation} from '../scene-refinements.mjs';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';

test('Horizon fog blends in output color space while preserving the approved distance curve',async()=>{
 const source=refineWorld(await readFile(new URL('../../engine/world.js',import.meta.url),'utf8'));
 assert.match(source,/linearToOutputTexel\(vec4\(fogColor,1\.\)\)\.rgb/);
 assert.match(source,/vFogDepth-65\.\)\/235\./);
 assert.match(source,/isIndoor\?\(dark\?\.48:\.50\)/);
});

test('Weather uses a broad low-contrast field without a projective cloud band',async()=>{
 const source=refineWeather(await readFile(new URL('../../engine/version-features.js',import.meta.url),'utf8'));
 const shader=source.slice(source.indexOf('const skyFragment='),source.indexOf('const mirror='));
 assert.doesNotMatch(shader,/fbm|d\.xz\/|float band=/);
 assert.match(shader,/cloudOpacity\*amount\*\.18/);
});

test('Scan fades out inside its geometry, with zero energy at the far boundary and at completion',async()=>{
 const source=refineActivation(await readFile(new URL('../../engine/activation-sweep.js',import.meta.url),'utf8'));
 assert.match(source,/PlaneGeometry\(24,320\)/);assert.match(source,/smoothstep\(68\.,126\.,distance\)/);
 assert.match(source,/\*edge\*nearFade\*farFade\*fade/);
 const farEdge=145+320/2;
 assert.ok(farEdge>126+118);
 assert.match(source,/1\.-smoothstep\(\.40,1\.,progress\)/);
});

test('Indoor floor reduces mirror contrast while retaining the horizon fade',async()=>{
 let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
 const result=await load({path:new URL('../../engine/parking-reference.js',import.meta.url).pathname});
 assert.match(result.contents,/createParkingSurface\(world,tone,true\)/);
 assert.match(result.contents,/mix\(\.16,\.24,reflectionTone\)/);
 assert.match(result.contents,/draft-indoor-matte/);
});

test('Snow is a continuous orientation-weighted coating without dirty noise islands or a dark undercoat',async()=>{
 const original=await readFile(new URL('../../engine/weather-ground.js',import.meta.url),'utf8'),updated=refineSnowGround(original);
 const snow=updated.slice(updated.indexOf(' float distSnow='),updated.indexOf('const strRoof='));
 assert.doesNotMatch(snow,/weatherNoise|patches|drift|coarse|fine|color\*=/);
 assert.match(snow,/float cover=roof>\.5\?snowUp\*\.72:level\*settling/);
 assert.match(snow,/roadClear=mix\(1\.,edgeSnow/);
 assert.equal(updated.slice(updated.indexOf(' if(weatherKind<1.5)'),updated.indexOf(' float distSnow=')).trimEnd(),original.slice(original.indexOf(' if(weatherKind<1.5)'),original.indexOf(' // Thin settling snow favours')).trimEnd());
});
