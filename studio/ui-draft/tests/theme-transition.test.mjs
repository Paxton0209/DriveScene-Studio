import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {patchApp} from '../runtime-patches.mjs';

test('Theme commits while view transitions have suspended iframe animation callbacks',async()=>{
 const source=patchApp(await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'));
 const body=source.match(/async theme\(value\)\{([^\n]+)\},/)[1];
 let renders=0;
 const commit=new Function('render','requestAnimationFrame',`let mode='light',requestedTheme='light';return async function(value){${body}}`)(animate=>{assert.equal(animate,false);renders++},()=>{throw Error('Frame callbacks are suspended during capture')});
 await commit('dark');await commit('light');assert.equal(renders,2);
});

test('Circular theme wipe keeps the live scene separate and never holds scene playback',async()=>{
 const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
 const theme=source.slice(source.indexOf('async function setTheme('),source.indexOf("$('theme').addEventListener"));
 assert.doesNotMatch(theme,/holdFrame|beginTheme|endTheme/);
 assert.match(theme,/document.startViewTransition\(\(\)=>commit\(target,true\)\)/);
 const css=await readFile(new URL('../inspector.css',import.meta.url),'utf8');
 assert.match(css,/\.artboard-clip\{view-transition-name:live-scene\}/);
 assert.match(css,/::view-transition-old\(live-scene\)\{display:none\}/);
});
