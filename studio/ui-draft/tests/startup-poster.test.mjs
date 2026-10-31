import test from 'node:test';
import assert from 'node:assert/strict';
import {showStartupPoster,layoutStartupPoster,rememberReloadPoster} from '../startup-poster.mjs';
function scope(search,values){const root={dataset:{},style:{setProperty(k,v){root[k]=v}}};return {document:{documentElement:root},location:{search},localStorage:{getItem:k=>values[k]??null}}}
test('Initial preview follows the same QA-specific scene/theme storage as the live page',()=>{
 const s=scope('?qa=review',{'drivescene-ui-draft-project-v2-qa-review':'{"active":"elevated"}','sr-ui-draft-theme-qa-review':'dark','sr-ui-draft-theme':'light'});
 showStartupPoster({'elevated-dark':'data:image/jpeg;base64,a'},s);assert.equal(s.document.documentElement.dataset.theme,'dark');assert.equal(s.document.documentElement['--startup-poster'],'url("data:image/jpeg;base64,a")');
 const empty=scope('?qa=1',{});showStartupPoster({'road-light':'fallback'},empty);assert.equal(empty.document.documentElement['--startup-poster'],'url("fallback")');
 const old=scope('',{'drivescene-ui-draft-project-v2':'{"active":"obsolete"}','sr-ui-draft-theme':'dark'});showStartupPoster({'road-dark':'fallback'},old);assert.equal(old.document.documentElement['--startup-poster'],'url("fallback")');
});
test('Initial and ready artboards retain identical 16:9 pixel-aligned bounds across viewport sizes',()=>{
 for(const [vw,w,h] of [[1400,924,900],[800,744,400],[500,444,300],[500,444,150]]){const style={},doc={getElementById:id=>id==='stage'?{getBoundingClientRect:()=>({width:w,height:h})}:{style}};layoutStartupPoster(doc,vw);const first={...style};layoutStartupPoster(doc,vw);assert.deepEqual(style,first);assert.equal(parseFloat(style.width)/parseFloat(style.height),16/9);assert.ok(parseFloat(style.width)<=w);assert.ok(parseFloat(style.height)<=h);}
 const desktop={},stage={getBoundingClientRect:()=>({width:836,height:756})};layoutStartupPoster({getElementById:id=>id==='stage'?stage:{style:desktop}},1280);assert.ok(parseFloat(desktop.height)>=450);
});

test('Legacy blurred caches cannot replace the clear prepared first frame',()=>{
 const s=scope('',{'drivescene-startup-preview-v2':'{"road-light":{"project":"{}","data":"legacy-blurred"}}'});
 showStartupPoster({'road-light':'clear-prepared'},s);
 assert.equal(s.document.documentElement['--startup-poster'],'url("clear-prepared")');
});

test('Independent animated previews are never displayed or exposed as a second scene',()=>{
 const s=scope('',{});showStartupPoster({'road-light':'still'},s,{'road-light':'independent-animation'});
 assert.equal(s.document.documentElement['--startup-poster'],'url("still")');assert.equal(s.document.documentElement.dataset.startupPreview,'prepared');
});
test('Reload retains a clear real raster only for identical saved settings and theme',()=>{
 const s=scope('?qa=clear',{}),storage={};s.sessionStorage={getItem:k=>storage[k]??null,setItem:(k,v)=>storage[k]=v};
 s.document.createElement=()=>({getContext:()=>({drawImage(){}}),toDataURL:()=> 'data:image/jpeg;base64,clear-real-frame'});
 s.document.documentElement.dataset.theme='light';rememberReloadPoster({width:1920,height:1080},s);
 s.performance={getEntriesByType:()=>[{type:'reload'}]};showStartupPoster({'road-light':'prepared'},s);
 assert.equal(s.document.documentElement['--startup-poster'],'url("data:image/jpeg;base64,clear-real-frame")');assert.equal(s.document.documentElement.dataset.startupPreview,'clear');
 s.localStorage.getItem=()=>'{"active":"road","shared":{"model":"ix"}}';showStartupPoster({'road-light':'prepared'},s);assert.equal(s.document.documentElement.dataset.startupPreview,'prepared');
});

test('First navigation keeps the opening; reload and an already-ready tab skip the fade before first paint',()=>{
 const previews={'road-light':'still'};
 for(const [type,stored,expected] of [['navigate',null,undefined],['reload',null,'warm'],['navigate','ready','warm'],['navigate','failed',undefined]]){
  const s=scope('?qa=session',{}),keys=[];s.performance={getEntriesByType:()=>[{type}]};s.sessionStorage={getItem:key=>{keys.push(key);return stored}};
  showStartupPoster(previews,s);assert.equal(s.document.documentElement.dataset.startup,expected);assert.equal(s.__draftStartupSessionKey,'drivescene-startup-ready-v1-qa-session');
 }
 const blocked=scope('',{});blocked.sessionStorage={getItem(){throw Error('storage unavailable')}};showStartupPoster(previews,blocked);assert.equal(blocked.document.documentElement.dataset.startup,undefined);
});

test('Legacy unblurred preview cache cannot leak a sharp first frame after CSS blur is removed',()=>{
 const s=scope('',{'drivescene-startup-preview-v1':'{"road-light":{"project":"{}","data":"legacy-sharp-preview"}}'});
 showStartupPoster({'road-light':'opaque-soft-preview'},s);
 assert.equal(s.document.documentElement['--startup-poster'],'url("opaque-soft-preview")');
});

test('Startup only uses its prepared poster and never requests a second moving scene',()=>{
 const s=scope('',{});s.document.createElement=()=>{throw Error('No startup video or canvas')};
 showStartupPoster({'road-light':'soft-poster'},s);
 assert.equal(s.document.documentElement['--startup-poster'],'url("soft-poster")');
 assert.equal(s.__draftStartupRaster,undefined);assert.equal(s.__draftStartupVideo,undefined);
});

test('Selected poster is decoded before the opening animation is allowed to start',async()=>{
 const s=scope('',{}),events=[];let decoded;
 s.Image=class{set src(value){events.push(value)}decode(){return new Promise(resolve=>decoded=resolve)}};
 showStartupPoster({'road-light':'selected-poster'},s);
 assert.deepEqual(events,['selected-poster']);let ready=false;s.__draftStartupPosterReady.then(()=>ready=true);
 await Promise.resolve();assert.equal(ready,false);decoded();await s.__draftStartupPosterReady;assert.equal(ready,true);
 s.Image=class{decode(){return Promise.reject(Error('Decode failed'))}};
 showStartupPoster({'road-light':'unavailable'},s);await s.__draftStartupPosterReady;
});
