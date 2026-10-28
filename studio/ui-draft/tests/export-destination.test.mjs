import test from 'node:test';
import assert from 'node:assert/strict';
import {chooseExportDestination,writeExportFile} from '../export-destination.js';
test('Save As starts synchronously from the click, with correct names and format filters',async()=>{
 for(const [format,extension,mime]of [['png','png','image/png'],['depth','png','image/png'],['camera','json','application/json'],['kit','zip','application/zip'],['video','mp4','video/mp4']]){
  let invoked=false;const handle={name:`road.${extension}`};
  const pending=chooseExportDestination({format,name:'road'}, {showSaveFilePicker(options){invoked=true;assert.equal(options.suggestedName,`road.${extension}`);assert.deepEqual(options.types.map(type=>type.accept),[{[mime]:[`.${extension}`]}]);return Promise.resolve(handle);}});
  assert.equal(invoked,true);assert.equal(await pending,handle);
 }
});
test('Cancelling destination selection propagates cancellation and never writes a file',async()=>{
 await assert.rejects(chooseExportDestination({format:'png',name:'road'},{showSaveFilePicker(){throw new DOMException('Cancelled','AbortError');}}),{name:'AbortError'});
});
test('Export closes a successful file and aborts incomplete writes',async()=>{
 const events=[],blob=new Blob(['scene']);const handle={async createWritable(){return {async write(value){assert.equal(value,blob);events.push('write');},async close(){events.push('close');},async abort(){events.push('abort');}};}};
 await writeExportFile(handle,blob);assert.deepEqual(events,['write','close']);
 await assert.rejects(writeExportFile({async createWritable(){return {async write(){throw Error('Disk full');},async abort(){events.push('abort');}};}},blob),/Disk full/);assert.equal(events.at(-1),'abort');
});
