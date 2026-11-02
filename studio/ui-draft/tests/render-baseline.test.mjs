import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';
import {refineWorld} from '../scene-refinements.mjs';

test('Draft world preserves the approved rendering source without the rejected scene-look shader',async()=>{
  const sourcePath=new URL('../../engine/world.js',import.meta.url).pathname;
  const original=await readFile(sourcePath,'utf8');
  let load;
  isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
  const result=await load({path:sourcePath});
  for(const color of ['#202225','#373a3e'])assert.ok(result.contents.includes(color));
  assert.doesNotMatch(result.contents,/draftAtmosphere|draftFacade|installSceneLook/);
});

test('One assist demo switch replaces the independent path layer in every scene',async()=>{
 const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
 assert.doesNotMatch(source,/\['path','Assist path'\]/);assert.ok(source.includes("transport.textContent='Assist'"));
 assert.ok(source.includes("transport.setAttribute('role','switch')"));assert.ok(source.includes('await setAssistDemo(bridge()'));
});
