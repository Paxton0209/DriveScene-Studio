import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const root=new URL('../sound-review/',import.meta.url),tracks=JSON.parse(await readFile(new URL('tracks.json',root),'utf8'));
test('ten numbered original audio options have separate assets and descriptions',async()=>{
 assert.equal(tracks.length,10);assert.deepEqual(tracks.map(track=>track.number),[1,2,3,4,5,6,7,8,9,10]);
 assert.equal(new Set(tracks.map(track=>track.title)).size,10);
 const hashes=await Promise.all(tracks.map(async track=>createHash('sha256').update(await readFile(new URL(track.src,root))).digest('hex')));
 assert.equal(new Set(hashes).size,10);
});
for(const track of tracks)test(track.id+' has a valid stereo PCM waveform, a bounded peak and silent boundaries',async()=>{
 assert.match(track.src,/^audio\/[a-z0-9-]+\.wav$/);
 const bytes=await readFile(new URL(track.src,root));assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WAVE');assert.equal(bytes.readUInt16LE(20),1);assert.equal(bytes.readUInt16LE(22),2);assert.equal(bytes.readUInt32LE(24),48000);assert.equal(bytes.readUInt16LE(34),16);
 assert.ok(Math.abs((bytes.length-44)/192000-track.durationMs/1000)<.0001);
 let peak=0;for(let offset=44;offset<bytes.length;offset+=2)peak=Math.max(peak,Math.abs(bytes.readInt16LE(offset)));
 assert.ok(peak>3000&&peak<=15729);assert.equal(bytes.readInt16LE(44),0);assert.equal(bytes.readInt16LE(46),0);assert.equal(bytes.readInt16LE(bytes.length-2),0);assert.equal(bytes.readInt16LE(bytes.length-4),0);assert.equal(track.clippedSamples,0);
});
