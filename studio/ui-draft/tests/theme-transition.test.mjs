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

test('Circular theme wipe prepares the renderer behind a held frame before capturing the transition',async()=>{
 const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
 assert.match(source,/await holdFrame\(\);bridge\(\)\.beginTheme\(\);try\{await bridge\(\)\.theme\(target\)/);
 assert.match(source,/document.startViewTransition\(\(\)=>\{\$\('frame-cover'\)\.hidden=true;return commit\(target,false\)\}\)/);
});
