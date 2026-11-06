import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('Vehicle card preserves its decoded thumbnail through readiness and model preparation',async()=>{
 const source=await readFile(new URL('../shell-v5.js',import.meta.url),'utf8');
 const start=source.indexOf(' const render=()=>{');
 const body=source.slice(start+' const render=()=>{'.length,source.indexOf('\n };',start));
 let writes=0,image='',busy=false,name='Tesla Model 3',src='model3.webp';
 const current={disabled:true,getAttribute:()=>name};
 const card={disabled:false,setAttribute(){}};
 const cardName={textContent:''};
 const cardImage={getAttribute:()=>image,set src(value){writes++;image=value;}};
 const cardChevron={getAttribute:()=> '1.4',setAttribute(){}};
 const library={getAttribute:()=>String(busy)};
 const render=new Function('selected','thumb','mobileQuery','card','cardImage','cardName','cardChevron','library',`return ()=>{${body}}`)(()=>current,()=>src,{matches:false},card,cardImage,cardName,cardChevron,library);
 render();assert.equal(card.disabled,true);assert.equal(writes,1);assert.equal(image,'model3.webp');
 current.disabled=false;render();assert.equal(card.disabled,false);assert.equal(writes,1);
 busy=true;current.disabled=true;name='BMW X6';src='x6.webp';
 render();assert.equal(card.disabled,true);assert.equal(writes,1);assert.equal(cardName.textContent,'Tesla Model 3');
 busy=false;current.disabled=false;
 render();assert.equal(card.disabled,false);assert.equal(writes,2);assert.equal(image,'x6.webp');assert.equal(cardName.textContent,'BMW X6');
});

test('Shipped controls preload the shared Assist icon and compact scene chevron',async()=>{
 for(const entry of ['index.html','skill.html']){
  const html=await readFile(new URL('../'+entry,import.meta.url),'utf8');
  assert.ok(html.includes('<link data-startup-icon rel="preload" href="./assist-wheel-off.svg" as="image">'));
  assert.doesNotMatch(html,/assist-wheel-on\.svg/);
  assert.match(html,/<link data-startup-icon rel="preload" href="\.\/chevron-down\.svg" as="image" media="\(max-width:639px\), \(max-width:959px\) and \(max-height:500px\), \(max-width:959px\) and \(orientation:portrait\)">/);
  assert.match(html,/<button id="scene-transport"[^>]*role="switch"[^>]*aria-checked="false"[^>]*disabled[^>]*>Driving assist<\/button>/);
 }
});

import {decodeStartupControls} from '../startup-readiness.js';
test('Readiness waits for the shared CSS Assist image to decode',async()=>{
 const pending=[],images=[];let done=false;
 class Image {constructor(){images.push(this);this.naturalWidth=80;} decode(){return new Promise(resolve=>pending.push(resolve));}}
 const root={defaultView:{Image},baseURI:'https://example.com/studio/ui-draft/',querySelectorAll:()=>[],fonts:{ready:Promise.resolve()}};
 const ready=decodeStartupControls(root).then(()=>done=true);
 assert.deepEqual(images.map(im=>im.src),['https://example.com/studio/ui-draft/assist-wheel-off.svg']);
 assert.equal(done,false);pending[0]();await ready;assert.equal(done,true);
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
