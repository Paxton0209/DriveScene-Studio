import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {prepareAuditionPath} from '../sound-review/earshot/audition-path.js';

const root=new URL('../sound-review/earshot/',import.meta.url);
const presets=JSON.parse(await readFile(new URL('presets.json',root),'utf8'));

test('Exit audition leaves both an existing and absent path untouched until fade-out',async()=>{
 for(const visible of [true,false]){
  const calls=[],engine={restoreFeatures(value){calls.push(value)}};
  prepareAuditionPath(engine,'off');
  assert.deepEqual(calls,[],`No path reset or re-enable when previously ${visible}`);
 }
 for(const mode of ['on','cycle']){
  const calls=[];
  prepareAuditionPath({restoreFeatures(value){calls.push(value)}},mode);
  assert.deepEqual(calls,[{path:false}]);
 }
 const script=await readFile(new URL('review.js',root),'utf8');
 assert.match(script,/if\(!ready\)return;stop\(false\);const request=revision/);
 assert.doesNotMatch(script,/restoreFeatures\(\{path:mode==='off'\}\)/);
});

test('Candidate scopes expose all three valid native options and keep selection storage',async()=>{
 const html=await readFile(new URL('index.html',root),'utf8');
 const script=await readFile(new URL('review.js',root),'utf8');
 const options=[...html.matchAll(/<option value="([^"]+)"[^>]*>/g)].map(match=>match[1]);
 assert.deepEqual(options,['all','previous','new']);
 assert.doesNotMatch(html,/<\/option\s+[^>]/);
 assert.match(script,/stateKey='drivescene-earshot-review-v1'/);
 assert.doesNotMatch(script,/rejected\.clear\(\)/);
});

test('Earshot audition adds thirty distinct starts and reverses corresponding starts for exits',()=>{
 assert.equal(presets.length,40);
 assert.equal(new Set(presets.map(preset=>preset.id)).size,40);
 assert.equal(new Set(presets.map(preset=>JSON.stringify(preset.cues))).size,40);
 const added=presets.filter(preset=>preset.round===2);
 assert.equal(added.length,30);
 assert.ok(added.some(preset=>preset.beats===1));
 assert.ok(added.some(preset=>preset.beats===5));
 assert.equal(new Set(added.map(preset=>preset.group)).size,5);
 for(const preset of presets){
  assert.ok(Number.isInteger(preset.beats)&&preset.beats>=1);
  assert.equal(preset.cues.length,preset.beats);
  assert.equal(preset.cues[0].at,0);
  assert.ok(preset.cues.slice(1).every((cue,index)=>cue.at>=preset.cues[index].at));
  assert.equal(preset.exitAudit.events.length,preset.beats);
  assert.equal(preset.exitAudit.method,'reverse-pcm-frames');
  assert.equal(preset.exitAudit.source,preset.enter);
  assert.ok(preset.exitAudit.events.every(event=>event.reversed));
  assert.ok(preset.enterAudit.durationMs<=1200);
  assert.equal(preset.exitAudit.durationMs,preset.enterAudit.durationMs);
 }
});

test('Each exit is the exact sample reversal of its own clean start',async()=>{
 function pcm(wave){let offset=12;while(wave.toString('ascii',offset,offset+4)!=='data')offset+=8+wave.readUInt32LE(offset+4)+(wave.readUInt32LE(offset+4)%2);return wave.subarray(offset+8,offset+8+wave.readUInt32LE(offset+4))}
 for(const preset of presets){
  const start=pcm(await readFile(new URL(preset.enter,root))),exit=pcm(await readFile(new URL(preset.exit,root)));
  assert.equal(exit.length,start.length);
  for(let offset=0;offset<start.length;offset+=2)assert.equal(exit.readInt16LE(offset),start.readInt16LE(start.length-offset-2),`${preset.id} sample ${offset/2}`);
 }
});

test('Retained five and all new candidates remove noise layers at the source',()=>{
 const retained=['02','06','08','09','10'];
 for(const preset of presets.filter(preset=>retained.includes(preset.id)||preset.round===2)){
  assert.equal(preset.cleaned,true);
  for(const event of [...preset.enterAudit.events,...preset.exitAudit.events]){
   assert.equal(event.clean,true);
   assert.match(event.sound,/^(notify|pro_notify|pluck|shimmer|pro_shimmer)\//);
   const edits=event.sourceEdits;
   for(const key of ['skin_lvl','knock_lvl','rumble','box_lvl','g_noise','c_sub','drive','head_drive'])if(key in edits)assert.equal(edits[key],0);
   for(const key of ['air_db','floor_db','strike','tick_db','c_mallet','air','body_db','sizzle'])if(key in edits)assert.ok(edits[key]<=-80);
  }
 }
});

test('Every audition file is local mono PCM16 with safe peaks and faded boundaries',async()=>{
 for(const preset of presets)for(const file of [preset.enter,preset.exit]){
  assert.match(file,/^audio\/\d{2}-(on|off)\.wav$/);
  const wave=await readFile(new URL(file,root));
  assert.equal(wave.toString('ascii',0,4),'RIFF');
  assert.equal(wave.toString('ascii',8,12),'WAVE');
  assert.equal(wave.readUInt16LE(22),1);
  assert.equal(wave.readUInt32LE(24),48000);
  assert.equal(wave.readUInt16LE(34),16);
  let offset=12;
  while(wave.toString('ascii',offset,offset+4)!=='data')offset+=8+wave.readUInt32LE(offset+4)+(wave.readUInt32LE(offset+4)%2);
  const samples=wave.subarray(offset+8,offset+8+wave.readUInt32LE(offset+4));
  let peak=0;
  for(let index=0;index<samples.length;index+=2)peak=Math.max(peak,Math.abs(samples.readInt16LE(index)));
  assert.ok(peak>100&&peak<16500);
  assert.ok(Math.abs(samples.readInt16LE(0))<=1);
  assert.ok(Math.abs(samples.readInt16LE(samples.length-2))<=1);
 }
});
