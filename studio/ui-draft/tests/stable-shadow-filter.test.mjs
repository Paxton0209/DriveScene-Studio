import {clippingPrecompilePlugin} from '../clipping-precompile.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {stableShadowFilter} from '../stable-shadow-filter.mjs';
import {build} from 'esbuild';

test('VSM variance remains finite when uniform depth suffers float cancellation',async()=>{
 const source=await readFile(new URL('../../../node_modules/three/src/renderers/shaders/ShaderLib/vsm.glsl.js',import.meta.url),'utf8');
 const filtered=stableShadowFilter(source);
 assert.match(filtered,/sqrt\( max\( squared_mean - mean \* mean, 0\.0 \) \)/);
 // Reproduce the cancellation with the precision used by the shader.
 let mean=Math.fround(.7),second=Math.fround(Math.fround(mean*mean)-2**-25);
 assert.ok(Number.isNaN(Math.sqrt(second-mean*mean)));
 assert.equal(Math.sqrt(Math.max(second-mean*mean,0)),0);
 assert.throws(()=>stableShadowFilter('changed upstream shader'),/baseline mismatch/);
});

test('Package-resolved renderer receives the finite-variance filter in the browser bundle',async()=>{
 const result=await build({stdin:{contents:"import {WebGLRenderer} from 'three';console.log(WebGLRenderer);",resolveDir:new URL('../../../',import.meta.url).pathname},bundle:true,format:'esm',write:false,plugins:[clippingPrecompilePlugin()]});
 assert.match(result.outputFiles[0].text,/sqrt\( max\( squared_mean - mean \* mean, 0\.0 \) \)/);
 assert.doesNotMatch(result.outputFiles[0].text,/sqrt\( squared_mean - mean \* mean \)/);
});
