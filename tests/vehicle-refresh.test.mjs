import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {savePreviewSnapshot,savePreviewSnapshotAsync,previewSnapshotKey,previewSnapshotSearch} from '../preview-snapshot.js';

const html=await readFile(new URL('../index.html',import.meta.url),'utf8'),bootstrap=html.match(/<script>([\s\S]*?)<\/script>/)[1];
function firstFrame(search,cached){
 const properties={},dataset={};
 vm.runInNewContext(bootstrap,{
  URLSearchParams,location:{search},history:{},matchMedia:()=>({matches:false}),localStorage:{getItem:()=>null},sessionStorage:{getItem:()=>cached?JSON.stringify(cached):null},
  document:{documentElement:{dataset,style:{setProperty:(key,value)=>properties[key]=value}},createElement:()=>({}),head:{append(){}}},
  AbortController,setTimeout:()=>0,clearTimeout(){},fetch:()=>new Promise(()=>{})
 });
 return {poster:properties['--startup-frame'],dataset};
}

test('a new model never boots with the BMW startup poster',()=>{
 for(const model of ['xc90','ix','model-3']){
  const {poster}=firstFrame('?scene=02&lanes=6&mode=light&vehicle=1&buildings=0&model='+model);
  assert.match(poster,/02-6-low-light-0\.webp/);
 }
 assert.match(firstFrame('?scene=02&lanes=6&mode=light&vehicle=1&buildings=0').poster,/02-6-low-light-8\.webp/);
});

test('legacy hidden-vehicle URLs keep the ego visible from the first frame',()=>{
 assert.match(firstFrame('?scene=02&lanes=6&mode=light&vehicle=0&buildings=0').poster,/02-6-low-light-8\.webp/);
 assert.ok(!html.includes('id="vehicle"'));assert.ok(!html.includes('Show vehicle'));
});

test('refresh restores only a frame matching the entire current URL',()=>{
 const search='?scene=02&mode=light&model=xc90',image='data:image/webp;base64,currentVolvo';let saved;
 savePreviewSnapshot({toDataURL:()=>image},search,{setItem:(key,value)=>{assert.equal(key,previewSnapshotKey);saved=JSON.parse(value);}});
 assert.equal(firstFrame(search,saved).poster,`url("${image}")`);
 assert.equal(firstFrame(search,saved).dataset.cachedPreview,'true');
 assert.ok(!firstFrame('?scene=02&mode=dark&model=ix',saved).poster.includes('currentVolvo'));
 assert.doesNotThrow(()=>savePreviewSnapshot({toDataURL:()=>image},search,{setItem(){throw Error('Storage unavailable');}}));
});

test('async snapshots do not let stale encodes overwrite the current selection',async context=>{
 const previous=globalThis.FileReader;globalThis.FileReader=class{readAsDataURL(){this.result='data:image/png;base64,current';queueMicrotask(()=>this.onload());}};context.after(()=>{if(previous)globalThis.FileReader=previous;else delete globalThis.FileReader;});
 let saved;const canvas={toBlob:callback=>queueMicrotask(()=>callback(new Blob(['png'])))},storage={setItem:(_,value)=>saved=JSON.parse(value)};
 assert.equal(await savePreviewSnapshotAsync(canvas,'?model=ix',storage,{x:0,y:3}),true);assert.equal(saved.search,'?model=ix');assert.equal(saved.viewOffset.y,3);
 assert.equal(await savePreviewSnapshotAsync(canvas,'?model=xc90',storage,{},()=>false),false);assert.equal(saved.search,'?model=ix');
 assert.equal(await savePreviewSnapshotAsync({toBlob:callback=>callback(null)},'?model=xc90',storage,{}),false);
 assert.equal(await savePreviewSnapshotAsync(canvas,'?model=xc90',{setItem(){throw Error('full');}},{}),false);
});

test('review and diagnostic parameters do not invalidate the matching car snapshot',()=>{
 const image='data:image/png;base64,currentCar',search='?scene=02&mode=light&model=ix&lanes=4';let saved;
 savePreviewSnapshot({toDataURL:()=>image},search,{setItem:(_,value)=>saved=JSON.parse(value)},{x:0,y:12},48);
 assert.equal(firstFrame(search+'&review=after&v=2&qa=1',saved).dataset.cachedPreview,'true');assert.equal(saved.viewScroll,48);
 assert.equal(previewSnapshotSearch('?review=before&model=ix&scene=02&mode=light&lanes=4'),previewSnapshotSearch(search));
 assert.ok(!firstFrame(search.replace('lanes=4','lanes=6')+'&review=after',saved).poster.includes('currentCar'));
});
