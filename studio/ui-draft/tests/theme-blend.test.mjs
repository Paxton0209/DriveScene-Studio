import test from 'node:test';
import assert from 'node:assert/strict';
import {Color} from 'three';
import {createAppearanceBlend} from '../theme-blend.js';
import {readFile} from 'node:fs/promises';
import {refineWeather,refineWorld} from '../scene-refinements.mjs';

test('Appearance blends existing color and numeric channels without changing their identities',()=>{
 const material={color:new Color('#ffffff'),roughness:.3},color=material.color,blend=createAppearanceBlend();
 const from=[{owner:material,key:'color',value:color.clone()},{owner:material,key:'roughness',value:.3}];
 const to=[{owner:material,key:'color',value:new Color('#000000')},{owner:material,key:'roughness',value:.7}];
 blend.start(from,to,100);assert.equal(blend.active(),true);assert.equal(material.color,color);
 blend.sample(300);assert.ok(Math.abs(material.color.r-.5)<1e-9);assert.ok(Math.abs(material.roughness-.5)<1e-9);
 blend.sample(500);assert.equal(material.color.r,0);assert.equal(material.roughness,.7);assert.equal(blend.active(),false);
});

test('Appearance interpolation is continuous, finishes exactly and has no animation loop of its own',()=>{
 const uniform={value:0},blend=createAppearanceBlend();
 blend.start([{owner:uniform,key:'value',value:0}],[{owner:uniform,key:'value',value:1}],0);
 let previous=0;
 for(let frame=1;frame<=24;frame++){blend.sample(frame*400/24);assert.ok(uniform.value>=previous);assert.ok(uniform.value-previous<.07);previous=uniform.value}
 assert.equal(uniform.value,1);assert.equal(blend.sample(500),false);
});

test('Weather colors and the aerial curve follow the same continuous theme weight',async()=>{
 const weather=refineWeather(await readFile(new URL('../../engine/version-features.js',import.meta.url),'utf8'));
 assert.match(weather,/themeTone=world.draftThemeTone\?\.value/);
 assert.match(weather,/copy\(light.top\)\.lerp\(night.top,themeTone\)/);
 const world=refineWorld(await readFile(new URL('../../engine/world.js',import.meta.url),'utf8'));
 assert.match(world,/linearToOutputTexel\(vec4\(fogColor,1\.\)\)/);
 assert.doesNotMatch(world,/outgoingLight=mix\(outgoingLight,sharedHorizon/);
 assert.doesNotMatch(world,/if\(darkAerialPerspective>\.5\)t=/);
});
