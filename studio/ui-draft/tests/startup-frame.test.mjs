import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {layoutStartupPoster} from '../startup-poster.mjs';
import {patchApp} from '../runtime-patches.mjs';
const source = await readFile(new URL('../draft.js', import.meta.url), 'utf8');

test('Initial layout is synchronous; later resize frames preserve the same rectangle', () => {
  const block = source.slice(source.indexOf('function sizeBoard('), source.indexOf('\nasync function holdFrame('));
  for (const [viewport, bounds] of [[1280, {width: 792, height: 676}], [800, {width: 744, height: 420}], [390, {width: 390, height: 300}]]) {
    const style = {}, pending = [], resizes = [];
    const nodes = {stage: {getBoundingClientRect: () => bounds}, artboard: {style}};
    const h = new Function('layoutStartupPoster', '$', 'innerWidth', 'requestAnimationFrame', 'cancelAnimationFrame', 'bridge', `
      let ready=false,resizeFrame=0,sceneUpdating=false;const moveNav=()=>{};
      ${block}
      return {layoutBoard,sizeBoard,start(){ready=true}};
    `)(() => layoutStartupPoster({getElementById:id=>nodes[id]},viewport), id => nodes[id], viewport, callback => pending.push(callback), () => {}, () => ({resize: width => resizes.push(width)}));
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
  assert.ok(source.indexOf('\nlayoutBoard();') < source.indexOf("frame.srcdoc=engineDocument"));
});
test('Startup publication follows traffic, saved finish and immediate final raster sizing', async () => {
  const bridgeSource = await readFile(new URL('../engine-bridge.js', import.meta.url), 'utf8');
  const method = bridgeSource.match(/completeStartup\(\)\{([^\n]+)\},/)[1];
  const world = {}, events = [];
  new Function('world', 'renderOnce', 'document', 'publish', 'sync', 'schedule', method)(world,
    () => {assert.notEqual(world.draftInitialFrameReady, true);events.push('render')},
    {getElementById: () => ({setAttribute(key, value) {assert.equal(world.draftInitialFrameReady, true);events.push([key, value])}})},
    () => events.push('publish'), () => events.push('sync'), () => events.push('schedule'));
  assert.deepEqual(events, ['sync', 'render', ['aria-busy', 'false'], 'schedule', 'publish']);
  const startup = source.slice(source.indexOf('ready=true;await bridge().param'));
  assert.ok(startup.indexOf("bridge().param('traffic'") < startup.indexOf('syncFinish()'));
  assert.ok(startup.indexOf('syncFinish()') < startup.indexOf('layoutBoard()'));
  assert.ok(startup.indexOf('layoutBoard()') < startup.indexOf('bridge().completeStartup()'));
  const shared = await readFile(new URL('../../engine/app.js', import.meta.url), 'utf8');
  assert.ok(patchApp(shared).includes("preview.setAttribute('aria-busy',String(world.draftInitialFrameReady!==true||world.initializingScene||"));
});
test('The transport identifies startup until readiness, then parking keeps its usual hidden transport', () => {
  const block = source.slice(source.indexOf('let transportRenderKey='), source.indexOf("\nwindow.addEventListener('message'"));
  for (const active of ['road', 'parking', 'outdoor']) {
    const transport = {setAttribute() {}},document={body:{dataset:{}}};
    const render=new Function('$', 'project','document', `let status={playing:false};const syncJunctionPathLock=()=>{};${block};return renderTransport;`)(() => transport, {active},document);
    render();assert.equal(transport.hidden,false);assert.equal(transport.disabled,true);assert.equal(transport.textContent,'Loading…');
    document.body.dataset.ready='true';render();assert.equal(transport.hidden,active!=='road');assert.notEqual(transport.textContent,'Loading…');
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

test('Startup synchronizes a suspended Road while preserving Pause and hidden/theme holds',async()=>{
 const bridge=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 const syncBody=bridge.match(/function sync\(\)\{([^\n]+)\}/)[1];
 const startupBody=bridge.match(/completeStartup\(\)\{([^\n]+)\},/)[1];
 for(const [playing,hidden,themeHeld,expected] of [[true,false,false,true],[false,false,false,false],[true,true,false,false],[true,false,true,false]]){
  const world={suspended:true,initializingScene:false},drive={setPlaying(value){this.playing=value}};
  new Function('world','drive','document','current','publish','renderOnce','schedule',`let playing=${playing},themeHeld=${themeHeld},last=1,accumulator=1;function sync(){${syncBody}};${startupBody}`)(world,drive,{hidden,getElementById:()=>({setAttribute(){}})},()=> 'road',()=>{},()=>{},()=>{});
  assert.equal(drive.playing,playing&&!themeHeld);assert.equal(world.suspended,hidden||themeHeld);assert.equal(drive.playing&&!world.suspended,expected);
 }
 assert.ok(source.includes("get('paused')==='1')query.set('paused','1')"));
 assert.match(source,/createProject\(saved\);setProjectVehicle\(project,'model-3'\)/);
});


test('Startup waits for the Traffic suspension scope before publishing a running scene',async()=>{
 const startup=source.slice(source.indexOf('ready=true;await bridge().param'),source.indexOf('status=bridge().get({audit:false});renderVehicles();'));
 let release;const pending=new Promise(done=>release=done),world={suspended:true};let complete=false;
 const bridge={async param(){const held=world.suspended;world.suspended=false;await pending;world.suspended=held},indicatorMuted(){},completeStartup(){world.suspended=false;complete=true}};
 const run=new Function('bridge','state','$','syncFinish','layoutBoard',`return (async()=>{let ready=false,indicatorMuted=false;${startup}})()`);
 const finishing=run(()=>bridge,{traffic:true},()=>({}),()=>{},()=>{});
 await Promise.resolve();assert.equal(complete,false);
 release();await finishing;assert.equal(complete,true);assert.equal(world.suspended,false);
});


test('Embedded startup passes the selected query without borrowing the parent URL and publishes to the inherited origin',async()=>{
 const html=await readFile(new URL('../engine.html',import.meta.url),'utf8');
 const bootstrap=html.match(/<head><script>([^<]+)<\/script>/)[1];
 const scope={};new Function('globalThis','window','location',bootstrap)(scope,{frameElement:{dataset:{search:'?scene=10&mode=dark&model=xc90&paused=1'}}},{search:'?qa=review'});
 assert.equal(scope.__draftSearch,'?scene=10&mode=dark&model=xc90&paused=1');
 const bridge=await readFile(new URL('../engine-bridge.js',import.meta.url),'utf8');
 const body=bridge.match(/function publish\(\)\{([^\n]+)\}/)[1],sent=[];
 new Function('window','get',body)({parent:{location:{origin:'https://example.test'},postMessage:(...args)=>sent.push(args)}},()=>({ready:true}));
 assert.deepEqual(sent,[[{type:'ui-draft-status',value:{ready:true}},'https://example.test']]);
});
