import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('Export cannot capture a partially restored scene or change themes during encoding',async()=>{
 const source=await readFile(new URL('../draft.js',import.meta.url),'utf8');
 assert.match(source,/if\(!ready\|\|previewBusy\|\|sceneUpdating\|\|vehicleUpdating\|\|themeTransition\)return/);
 assert.match(source,/if\(exporting\)\{bridge\(\)\.cancelExport/);
 assert.match(source,/finally\{exporting=false;lockControls\(false\)/);
 assert.match(source,/\$\('theme'\)\.disabled=busy/);
 assert.match(source,/await bridge\(\)\.param\('model',params\(\)\.model\)/);
 assert.match(source,/sceneUpdating=false;\$\('theme'\)\.disabled=false;\$\('inspector-scroll'\)\.inert=false/);
});

test('Discarded play, eye, checkbox and vehicle popover styles no longer ship in the workbench stylesheet',async()=>{
 const css=await readFile(new URL('../draft.css',import.meta.url),'utf8');
 assert.doesNotMatch(css,/corner-play|corner-controls|vehicle-popup|vehicle-popover-head|vehicle-grid|\.checkbox|\.check-row|\.eye\b/);
 const inspector=await readFile(new URL('../inspector.css',import.meta.url),'utf8');
 assert.match(inspector,/#assist\{display:flex;align-items:center/);
});
