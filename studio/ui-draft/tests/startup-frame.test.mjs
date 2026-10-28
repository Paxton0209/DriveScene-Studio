import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {patchApp} from '../runtime-patches.mjs';
const source = await readFile(new URL('../draft.js', import.meta.url), 'utf8');

test('Initial layout is synchronous; later resize frames preserve the same rectangle', () => {
  const block = source.slice(source.indexOf('function sizeBoard('), source.indexOf('\nfunction waitFor('));
  for (const [viewport, bounds] of [[1280, {width: 792, height: 676}], [800, {width: 744, height: 420}], [390, {width: 390, height: 300}]]) {
    const style = {}, pending = [], resizes = [];
    const nodes = {stage: {getBoundingClientRect: () => bounds}, artboard: {style}};
    const h = new Function('$', 'innerWidth', 'requestAnimationFrame', 'cancelAnimationFrame', 'bridge', `
      let ready=false,resizeFrame=0,sceneUpdating=false;const moveNav=()=>{};
      ${block}
      return {layoutBoard,sizeBoard,start(){ready=true}};
    `)(id => nodes[id], viewport, callback => pending.push(callback), () => {}, () => ({resize: width => resizes.push(width)}));
    h.layoutBoard();
    assert.equal(pending.length, 0);
    assert.deepEqual(resizes, []);
    const first = {...style};
    assert.ok(parseFloat(style.width) > 0);
    assert.equal(parseFloat(style.width) / parseFloat(style.height), 16 / 9);
    h.start();h.sizeBoard();pending.pop()();
    assert.deepEqual(style, first);
    assert.equal(resizes.length, 1);
  }
  assert.ok(source.indexOf('\nlayoutBoard();') < source.indexOf("frame.src='./engine.html?"));
});
test('Startup publication follows traffic, saved finish and immediate final raster sizing', async () => {
  const bridgeSource = await readFile(new URL('../engine-bridge.js', import.meta.url), 'utf8');
  const method = bridgeSource.match(/completeStartup\(\)\{([^\n]+)\},/)[1];
  const world = {}, events = [];
  new Function('world', 'renderOnce', 'document', 'publish', method)(world,
    () => {assert.notEqual(world.draftInitialFrameReady, true);events.push('render')},
    {getElementById: () => ({setAttribute(key, value) {assert.equal(world.draftInitialFrameReady, true);events.push([key, value])}})},
    () => events.push('publish'));
  assert.deepEqual(events, ['render', ['aria-busy', 'false'], 'publish']);
  const startup = source.slice(source.indexOf('clearTimeout(loadingTimer);ready=true;'));
  assert.ok(startup.indexOf("bridge().param('traffic'") < startup.indexOf('syncFinish()'));
  assert.ok(startup.indexOf('syncFinish()') < startup.indexOf('layoutBoard()'));
  assert.ok(startup.indexOf('layoutBoard()') < startup.indexOf('bridge().completeStartup()'));
  const shared = await readFile(new URL('../../engine/app.js', import.meta.url), 'utf8');
  assert.ok(patchApp(shared).includes("preview.setAttribute('aria-busy',String(world.draftInitialFrameReady!==true||world.initializingScene||"));
});
test('Parking transport stays hidden before the first engine status arrives', () => {
  const block = source.slice(source.indexOf('let transportRenderKey='), source.indexOf("\nwindow.addEventListener('message'"));
  for (const active of ['parking', 'outdoor']) {
    const transport = {setAttribute() {}};
    new Function('$', 'project', `let status={playing:false};const syncJunctionPathLock=()=>{};${block};renderTransport();`)(() => transport, {active});
    assert.equal(transport.hidden, true);
  }
});
test('Initial label population skips the replacement blur; subsequent changes still animate', () => {
  const block = source.slice(source.indexOf('function replaceContent('), source.indexOf('\nfunction renderTheme('));
  let animations = 0;
  const replace = new Function('reducedMotion', `${block};return replaceContent`)(() => false);
  const node = {innerHTML: '', getAnimations: () => [], animate() {animations++}};
  replace(node, 'Indoor parking');assert.equal(animations, 0);
  replace(node, 'Outdoor parking');assert.equal(animations, 1);
  replace(node, 'Outdoor parking');assert.equal(animations, 1);
});

test('Initial Traffic preference is applied before construction and late model completion cannot miss the warmup',async()=>{
 const bridgeSource=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 const method=bridgeSource.match(/world.draftPrepareStartup=async\(\)=>\{([^\n]+)\};/)[1];
 let resolveTraffic,resolveParking;const traffic={ready:new Promise(done=>resolveTraffic=done),audit:()=>({})},parking={ready:new Promise(done=>resolveParking=done)};
 const prepare=new Function('traffic','parking',`return async()=>{${method}}`)(traffic,parking);
 let complete=false;const pending=prepare().then(()=>complete=true);
 await Promise.resolve();assert.equal(complete,false);resolveTraffic();await Promise.resolve();assert.equal(complete,false);resolveParking();await pending;assert.equal(complete,true);
 const fail=new Function('traffic','parking',`return async()=>{${method}}`)({ready:Promise.resolve(),audit:()=>({modelError:'Traffic unavailable'})},{ready:Promise.resolve()});
 await assert.rejects(fail(),/Traffic unavailable/);
 const shared=await readFile(new URL('../../engine/app.js',import.meta.url),'utf8'),patched=patchApp(shared);
 assert.ok(patched.includes("enabled:query.get('traffic')!=='0'"));
 assert.ok(patched.indexOf('await world.draftPrepareStartup?.()')<patched.indexOf('requested=state();await world.prepareInitialScene(requested)'));
 assert.ok(source.includes('traffic:Number(state.traffic)'));
 const preference=bridgeSource.match(/world.draftTrafficEnabled=([^;]+);/)[1];
 for(const enabled of [false,true])assert.equal(new Function('traffic',`return ${preference}`)({audit:()=>({enabled})}),enabled);
});
