import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('Readiness unlocks the vehicle card without replacing its decoded content',async()=>{
 const source=await readFile(new URL('../shell-v5.js',import.meta.url),'utf8');
 const body=source.slice(source.indexOf(' const render=()=>{')+' const render=()=>{'.length,source.indexOf('\n };',source.indexOf(' const render=()=>{')));
 let writes=0,markup='';const card={dataset:{},setAttribute(){},set innerHTML(value){writes++;markup=value}};
 const current={disabled:true,getAttribute:()=> 'BMW X6'};
 const render=new Function('selected','thumb','mobileQuery','card','mobileChevron','chevron',`return ()=>{${body}}`)(()=>current,()=> 'x6.webp',{matches:false},card,'down','up');
 render();assert.equal(card.disabled,true);assert.equal(writes,1);assert.match(markup,/x6.webp/);
 current.disabled=false;render();assert.equal(card.disabled,false);assert.equal(writes,1);
 current.disabled=true;render();assert.equal(card.disabled,true);assert.equal(writes,1);
});

test('Shipped controls preload the Assist icons and compact scene chevron',async()=>{
 for(const entry of ['index.html','skill.html']){
  const html=await readFile(new URL('../'+entry,import.meta.url),'utf8');
  for(const state of ['off','on'])assert.ok(html.includes(`<link data-startup-icon rel="preload" href="./assist-wheel-${state}.svg" as="image">`));
  assert.match(html,/<link data-startup-icon rel="preload" href="\.\/chevron-down\.svg" as="image" media="\(max-width:639px\), \(max-width:959px\) and \(max-height:500px\), \(max-width:959px\) and \(orientation:portrait\)">/);
  assert.match(html,/<button id="scene-transport"[^>]*role="switch"[^>]*aria-checked="false"[^>]*disabled[^>]*>Driving assist<\/button>/);
 }
});

import {decodeStartupControls} from '../startup-readiness.js';
test('Readiness waits for both CSS Assist images to decode',async()=>{
 const pending=[],images=[];let done=false;
 class Image {constructor(){images.push(this);this.naturalWidth=80;} decode(){return new Promise(resolve=>pending.push(resolve));}}
 const root={defaultView:{Image},baseURI:'https://example.com/studio/ui-draft/',querySelectorAll:()=>[],fonts:{ready:Promise.resolve()}};
 const ready=decodeStartupControls(root).then(()=>done=true);
 assert.deepEqual(images.map(im=>im.src),['https://example.com/studio/ui-draft/assist-wheel-off.svg','https://example.com/studio/ui-draft/assist-wheel-on.svg']);
 pending[0]();await Promise.resolve();assert.equal(done,false);
 pending[1]();await ready;assert.equal(done,true);
});

test('Compact readiness waits for visible icons and tolerates a failed decoration',async()=>{
 const pending=new Map();let decoded=false;
 class Image {
  naturalWidth=80;
  decode(){return new Promise((resolve,reject)=>pending.set(new URL(this.src).pathname.split('/').at(-1),{resolve,reject}));}
 }
 const thumbnail=new Image();thumbnail.src='https://example.com/selected.webp';
 const root={defaultView:{Image},baseURI:'https://example.com/studio/ui-draft/',querySelectorAll(selector){
  assert.match(selector,/aria-checked="true"/);
  return [thumbnail];
 }};
 const ready=decodeStartupControls(root,{compact:true}).then(()=>decoded=true);
 assert.deepEqual([...pending.keys()],['selected.webp','assist-wheel-off.svg','chevron-down.svg']);
 pending.get('selected.webp').resolve();pending.get('chevron-down.svg').reject(Error('Image failed'));
 await Promise.resolve();assert.equal(decoded,false);
 pending.get('assist-wheel-off.svg').resolve();await ready;assert.equal(decoded,true);
});
