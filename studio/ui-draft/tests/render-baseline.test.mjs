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

test('Assist path retains its label and parking uses the common playback actions',async()=>{
  const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
  assert.match(source,/\['path','Assist path'\]/);for(const label of ['Play','Pause','Resume','Replay'])assert.ok(source.includes(label));
  assert.ok(source.includes('bridge().parkingPlay()'));assert.doesNotMatch(source,/Click an empty space|Choose an exit direction|Start parking/);
  assert.doesNotMatch(source,/Driving assist on/);
});
