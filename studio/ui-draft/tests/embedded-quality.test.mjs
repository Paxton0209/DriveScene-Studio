import test from 'node:test';
import assert from 'node:assert/strict';
import {isolatedRuntimePlugin} from '../runtime-patches.mjs';
let load;isolatedRuntimePlugin().setup({onLoad(_options,handler){load=handler}});
const {contents}=await load({path:new URL('../../engine/sr-quality.js',import.meta.url).pathname});
const evaluate=new Function('globalThis',contents.replaceAll('export ','')+';return {SR_QUALITY_MIX,lightQuality};');
for(const embedded of [false,true])test(`Approved quality survives embedded document startup (embedded=${embedded})`,()=>{
 const query='?review=ui-draft&quality=sr50';
 const scope=embedded?{location:{search:''},__draftSearch:query}:{location:{search:query}};
 assert.equal(evaluate(scope).SR_QUALITY_MIX,.5);
 assert.equal(evaluate(scope).lightQuality.roadRoughness,.32);
});
test('Other routes retain the engine default quality',()=>assert.equal(evaluate({location:{search:''}}).SR_QUALITY_MIX,0));
