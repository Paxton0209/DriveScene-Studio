import {gzipSync} from 'node:zlib';
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {packedNormalsModule} from '../startup-bundles.mjs';
import {createControlPaint} from '../control-paint.js';

test('Packed Parking normals preserve every GPU Float32 bit in the approved source',async()=>{
 const data=JSON.parse(await readFile(new URL('../saved-preview/parking-material-normals.json',import.meta.url),'utf8'));
 const source=packedNormalsModule(data);
 const {default:decoded}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
 for(const [role,values] of Object.entries(data)){
  const expected=new Float32Array(values);
  assert.deepEqual(Buffer.from(decoded[role].buffer),Buffer.from(expected.buffer),role);
 }
 assert.ok(source.length<850000);
});

test('Runtime excludes the encoder and resolves the complete encoder only through a lazy module',async()=>{
 const runtime=await readFile(new URL('../runtime.bundle.js',import.meta.url),'utf8');
 const video=await readFile(new URL('../video.bundle.js',import.meta.url),'utf8');
 assert.match(runtime,/import\("\.\/video\.bundle\.js\?v=interaction-20261027"\)/);
 assert.ok(Buffer.byteLength(runtime)<2400000);
 assert.ok(Buffer.byteLength(video)>200000);
 assert.match(video,/export\{/);
 const {videoType}=await import('../video.bundle.js');
 assert.equal(typeof videoType,'function');
});

test('Control work waits through a paint opportunity, supersedes same-key clicks and preserves independent controls',async()=>{
 const frames=[],tasks=[],events=[];
 const paint=createControlPaint({frame:cb=>frames.push(cb),task:cb=>tasks.push(cb)});
 const old=paint('camera').then(current=>events.push(['old',current]));
 const weather=paint('weather').then(current=>events.push(['weather',current]));
 const last=paint('camera').then(current=>events.push(['last',current]));
 assert.deepEqual(events,[]);
 for(const frame of frames)frame();
 await Promise.resolve();assert.deepEqual(events,[]);
 for(const task of tasks)task();
 await Promise.all([old,weather,last]);
 assert.deepEqual(events,[['old',false],['weather',true],['last',true]]);
});

test('Parking and PNG startup never initiate a video capability probe',async()=>{
 const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
 assert.doesNotMatch(source,/\nbridge\(\)\.videoFormat\(\)/);
 assert.match(source,/if\(format==='video'\)await probeVideo\(\)/);
});

test('Selected vehicle preload is consumed once, mismatched models use their own URL, and an early failure retries',async()=>{
 const {patchLoadPrepared}=await import('../runtime-patches.mjs');
 const {takePrefetched}=await import('../../engine/asset-request.js');
 const source=patchLoadPrepared(await readFile(new URL('../../engine/vehicle-library/three/load-prepared.js',import.meta.url),'utf8'));
 const body=source.slice(source.indexOf('const early='),source.indexOf('const header='));
 const run=new (async()=>{}).constructor('id','url','signal','takePrefetched',body+'return bytes;');
 const previous=globalThis.fetch,previousEarly=globalThis.__draftPreparedVehicle,calls=[],early=new Uint8Array([1,2]).buffer;
 globalThis.fetch=async url=>{calls.push(url);return new Response(new Uint8Array([3,4]));};
 try{
  globalThis.__draftPreparedVehicle={id:'model-3',request:Promise.resolve(early)};
  assert.equal(await run('model-3','selected',undefined,takePrefetched),early);assert.deepEqual(calls,[]);assert.equal(globalThis.__draftPreparedVehicle,undefined);
  globalThis.__draftPreparedVehicle={id:'ix',request:Promise.resolve(early)};
  assert.deepEqual(new Uint8Array(await run('xc90','different',undefined,takePrefetched)),new Uint8Array([3,4]));assert.deepEqual(calls,['different']);assert.equal(globalThis.__draftPreparedVehicle.id,'ix');
  globalThis.__draftPreparedVehicle={id:'model-3',request:Promise.reject(Error('early failure'))};
  await run('model-3','retry',undefined,takePrefetched);assert.deepEqual(calls,['different','retry']);
 }finally{globalThis.fetch=previous;if(previousEarly===undefined)delete globalThis.__draftPreparedVehicle;else globalThis.__draftPreparedVehicle=previousEarly;}
});

test('Parent preloads the first vehicle despite saved selection, plus environment and Traffic before UI imports',async()=>{
 const {startStartupAssets}=await import('../startup-bundles.mjs');
 for(const [search,saved,model] of [['?qa=cold',{active:'parking',shared:{model:'ix'}},'model-3'],['',{active:'outdoor',boards:{outdoor:{params:{model:'xc90'}}}},'model-3'],['?qa=1',{shared:{model:'invalid'}},'model-3'],['?qa=cold',{shared:{model:'x6'}},'model-3']]){
  const calls=[],keys=[],scope={location:{search},document:{documentElement:{dataset:{}},baseURI:'https://example.test/DriveScene-Studio/studio/ui-draft/'},localStorage:{getItem(key){keys.push(key);return JSON.stringify(saved)}},fetch:async(url,options)=>{assert.equal(options.priority,'low');assert.equal(options.signal,undefined);calls.push(url);return new Response(new Uint8Array([1,2]))}};
  const requests=startStartupAssets(scope);assert.equal(requests.size,6);await Promise.all(requests.values());
  assert.equal(new Set(calls).size,6);assert.ok(calls.some(url=>url.includes(model==='x6'?'ego-vehicle-ready.glb.gz':`vehicles/${model}/model.glb.gz`)));
  assert.ok(calls.some(url=>url.includes('studio-environment')));assert.ok(calls.some(url=>url.includes('traffic-model-y')));
  assert.deepEqual(keys,[]);assert.equal(scope.document.documentElement.dataset.startup,'loading');
 }
});

test('Generated parent UI is bundled and engine consumes parent assets without preloading an unused poster',async()=>{
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8'),engine=await readFile(new URL('../engine.html',import.meta.url),'utf8'),bundle=await readFile(new URL('../draft.bundle.js',import.meta.url),'utf8');
 assert.ok(html.indexOf('id="startup-assets"')<html.indexOf('<title>'));assert.match(html,/<link rel="modulepreload" fetchpriority="high" href="runtime.bundle.js\?v=parking-camera-v31-v018-20261029">/);assert.match(engine,/runtime.bundle.js\?v=parking-camera-v31-v018-20261029/);assert.doesNotMatch(html,/<script src="saved-preview\/frame-profile/);assert.match(html,/<script id="startup-draft" type="module">/);assert.doesNotMatch(html,/<script[^>]*src="draft.bundle/);
 assert.doesNotMatch(bundle,/from\s*["']\.\//);assert.doesNotMatch(bundle,/fetch\(["']\.\/icons.json/);
 assert.doesNotMatch(engine,/link\.as="image"/);assert.match(engine,/requests\.delete\(key\);return await early/);
 assert.doesNotMatch(engine,/setTimeout\(\(\)=>c.abort\(\),30000\)/);
});


test('Inline engine styles retain the source cascade and have no unresolved relative CSS assets',async()=>{
 const source=await readFile(new URL('../../engine/index.html',import.meta.url),'utf8');
 const result=await readFile(new URL('../engine.html',import.meta.url),'utf8');
 const styles=[new URL('../engine.css',import.meta.url),...[...source.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"?]+)/g)].map(m=>new URL('../../engine/'+m[1],import.meta.url))];
 let previous=-1;
 for(const url of styles){const css=await readFile(url,'utf8');assert.doesNotMatch(css,/@import|url\(/);const at=result.indexOf(`<style>${css}</style>`,previous+1);assert.ok(at>previous,'Stylesheet order must stay identical: '+url.pathname);previous=at;}
 assert.doesNotMatch(result,/<link[^>]*rel="stylesheet"/);
});


test('Critical HTML contains only the unchanged default preview; other exact JPEGs stay external',async()=>{
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8'),previews=JSON.parse(await readFile(new URL('../startup-previews.json',import.meta.url),'utf8'));
 assert.ok(gzipSync(html).byteLength<160000);assert.equal((html.match(/data:image\/jpeg;base64,/g)||[]).length,1);assert.ok(html.includes(previews['road-light']));
 for(const [name,data]of Object.entries(previews)){const bytes=await readFile(new URL('../startup-previews/'+name+'.jpg',import.meta.url));assert.deepEqual(bytes,Buffer.from(data.split(',')[1],'base64'));if(name!=='road-light')assert.ok(html.includes('./startup-previews/'+name+'.jpg?v='));}
});
