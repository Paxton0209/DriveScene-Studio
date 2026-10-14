import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { test } from 'node:test';
const source = readFileSync(new URL('../analytics.js', import.meta.url), 'utf8').replaceAll('export function', 'function');
function setup(overrides = {}) {
 const scripts=[];
 const context = vm.createContext({ URL, Date,
  location: {protocol:'https:', hostname:'paxton0209.github.io',pathname:'/DriveScene-Studio/'},
  navigator: {},localStorage:{getItem:key=>key==='drivescene-analytics-choice'?'allow':null},window:{},
  document: {referrer:'https://www.linkedin.com/feed/?private=secret',createElement:()=>({}),head:{append:s=>scripts.push(s)}},
  ...overrides });
 vm.runInContext(source,context);
 return {context,scripts,run:s=>vm.runInContext(s,context),events:()=>Array.from(context.window.dataLayer||[],a=>Array.from(a))};
}
test('single sanitized page view; deny storage before configuration',()=>{
 const a=setup();a.run('startAnalytics();startAnalytics()');const es=a.events();
 assert.equal(a.scripts.length,1);assert.equal(es.filter(e=>e[0]==='event'&&e[1]==='page_view').length,1);
 assert.equal(es[0][0],'consent');assert.equal(es[0][2].analytics_storage,'denied');assert.equal(es[0][2].ad_storage,'denied');
 const config=es.find(e=>e[0]==='config')[2];assert.equal(config.send_page_view,false);assert.equal(config.allow_google_signals,false);assert.equal(config.page_referrer,'https://www.linkedin.com/');assert.ok(!JSON.stringify(es).includes('private=secret'));
});
test('localhost, fork, non-scene page, DNT, GPC and owner opt-out do not load or queue analytics',()=>{
 for(const overrides of [
  {location:{protocol:'http:',hostname:'localhost',pathname:'/DriveScene-Studio/'}},
  {location:{protocol:'https:',hostname:'fork.github.io',pathname:'/DriveScene-Studio/'}},
  {location:{protocol:'https:',hostname:'paxton0209.github.io',pathname:'/DriveScene-Studio/privacy.html'}},
  {localStorage:{getItem:()=>null}},{localStorage:{getItem:key=>key==='drivescene-analytics-choice'?'deny':null}},{navigator:{doNotTrack:'1'}},{navigator:{globalPrivacyControl:true}},
  {localStorage:{getItem:()=> '1'}},{localStorage:{getItem:()=>{throw Error('blocked')}}}
 ]){const a=setup(overrides);a.run("startAnalytics();trackPngExport('road','light')");assert.equal(a.scripts.length,0);assert.equal(a.events().length,0)}
});
test('exports are allowlisted, opt-out rechecked, provider failures isolated',()=>{
 const a=setup();a.run("startAnalytics();trackPngExport('private data','unknown')");let event=a.events().at(-1);assert.equal(event[1],'png_export');assert.equal(event[2].scene,'other');assert.equal(event[2].theme,'light');
 a.context.localStorage.getItem=()=> '1';const before=a.events().length;a.run("trackPngExport('road','dark')");assert.equal(a.events().length,before);
 a.context.localStorage.getItem=key=>key==='drivescene-analytics-choice'?'allow':null;a.context.window.gtag=()=>{throw Error('provider blocked')};assert.doesNotThrow(()=>a.run("trackPngExport('road','dark')"));
});
