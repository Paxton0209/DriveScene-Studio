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
  const expected=("import {installRampPassage} from '../ui-draft/ramp-passage.js';\n"+refineWorld(original))
   .replace('ramp(id,w){','ramp(id,w){const draftRampStart=this.root.children.length;')
   .replace("this.prepareStructurePaint('ramp');","installRampPassage(this,id,w,draftRampStart,join);this.prepareStructurePaint('ramp');")
   .replace('if(this.suspended)return;','if(this.suspended||document.hidden)return;').replaceAll('import.meta.url',"new URL('../engine/world.js',import.meta.url).href");
  assert.equal(result.contents,expected);
  assert.doesNotMatch(result.contents,/draftAtmosphere|draftFacade|installSceneLook/);
});

test('Assist visible label stays constant across on and off states',async()=>{
  const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
  assert.match(source,/function renderAssist\(\)\{\$\('assist-label'\)\.textContent='Driving assist'\}/);
  assert.doesNotMatch(source,/Driving assist on/);
});
