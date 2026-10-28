import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {syncExportFormat} from '../export-format.js';

function controls(value = 'video') {
  const option = {textContent: 'Video · MP4', hidden: false, disabled: false};
  const select = {value, dataset: {}, querySelector: () => option};
  const duration = {hidden: false};
  return {option, select, duration, sync(scene, options) {return syncExportFormat(select, duration, scene, options)}};
}
for (const scene of ['parking', 'outdoor']) {
  test(`${scene} clears a prior road video selection and hides its duration and menu option`, () => {
    const h = controls();
    h.sync('road');
    assert.equal(h.duration.hidden, false);
    assert.equal(h.sync(scene), 'png');
    assert.equal(h.option.hidden, true);
    assert.equal(h.option.disabled, true);
    assert.equal(h.duration.hidden, true);
    assert.equal(h.select.dataset.tip, 'Scene image PNG');
    // A codec capability response after the scene change must not re-enable it.
    h.sync(scene, {videoAvailable: true});
    assert.equal(h.option.disabled, true);
    for (const format of ['png', 'kit', 'camera', 'depth']) {
      h.select.value = format;
      assert.equal(h.sync(scene), format);
    }
  });
}
test('Returning to each animated scene restores the video choice without changing PNG', () => {
  for (const scene of ['road', 'elevated', 'ramp', 'junction']) {
    const h = controls();
    h.sync('parking');
    assert.equal(h.sync(scene), 'png');
    assert.equal(h.option.hidden, false);
    assert.equal(h.option.disabled, false);
    h.select.value = 'video';
    assert.equal(h.sync(scene), 'video');
    assert.equal(h.duration.hidden, false);
  }
});
test('Unavailable codecs stay disabled after leaving Parking', () => {
  const h = controls();
  h.sync('outdoor', {videoAvailable: false});
  h.sync('road', {videoAvailable: false});
  assert.equal(h.option.hidden, false);
  assert.equal(h.option.disabled, true);
  h.select.value = 'video';
  assert.equal(h.sync('road', {videoAvailable: false}), 'png');
});
test('The real export handler normalizes stale Parking video before opening Save As', async () => {
  const source = await readFile(new URL('../draft.js', import.meta.url), 'utf8');
  const block = source.slice(source.indexOf('async function exportCurrent('), source.indexOf('\nfunction tooltipHide('));
  for (const scene of ['parking', 'outdoor']) {
    const h = controls(), calls = [];
    const nodes = {'export-label': {}, export: {style: {setProperty() {}}}};
    const run = new Function('$', 'bridge', 'syncExportControls', 'chooseExportDestination', 'writeExportFile', 'document', 'window', 'CustomEvent', `
      let exporting=false,ready=true,previewBusy=false,sceneUpdating=false,vehicleUpdating=false,themeTransition=null,videoExtension='mp4',duration=10;
      const feedback=()=>{},lockControls=()=>{},holdFrame=async()=>{},releaseFrame=async()=>{},board=()=>({type:'${scene}'}),params=()=>({weather:'default'});
      ${block}
      return exportCurrent;
    `)(id => nodes[id], () => ({async export(options) {calls.push(['render', options.format]);return {blob: 'png', audit: {}}}}),
      () => h.sync(scene), async options => {calls.push(['save', options.format]);return {name: `${scene}.png`}}, async () => {},
      {body: {dataset: {}}}, {dispatchEvent() {}}, function () {});
    await run();
    assert.deepEqual(calls, [['save', 'png'], ['render', 'png']]);
  }
});

test('Video cannot open Save As or render before its lazy codec probe is ready', async () => {
  const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
  const block=source.slice(source.indexOf('async function exportCurrent('),source.indexOf('\nfunction tooltipHide('));
  const calls=[],nodes={'export-label':{},export:{style:{setProperty(){}}}};
  const run=new Function('$','bridge','chooseExportDestination',`let exporting=false,ready=true,previewBusy=false,sceneUpdating=false,vehicleUpdating=false,themeTransition=null,videoReady=false,videoExtension='mp4',duration=.1;
    const syncExportControls=()=> 'video',feedback=()=>{},lockControls=()=>{},holdFrame=async()=>{},releaseFrame=async()=>{},probeVideo=async()=>{},board=()=>({type:'road'}),params=()=>({weather:'default'}),writeExportFile=async()=>{};
    const document={body:{dataset:{}}},window={dispatchEvent(){}},CustomEvent=function(){};
    ${block}
    return {run:exportCurrent,ready(){videoReady=true}};
  `)(id=>nodes[id],()=>({async export(){calls.push('render');return {blob:'video',audit:{}}}}),async()=>{calls.push('save');return {name:'road.mp4'}});
  await run.run();assert.deepEqual(calls,[]);
  run.ready();await run.run();assert.deepEqual(calls,['save','render']);
});
