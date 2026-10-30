import test from 'node:test';
import assert from 'node:assert/strict';
import {stillPng} from '../still-export.js';
import {exportSize} from '../export-size.js';

for(const width of [1920,3840])test(`${width}px PNG samples at 4K, preserves the chosen output and restores the preview on failure`,async()=>{
 const previous=globalThis.document;
 try{
  for(const failure of ['draw','encode',null]){
   if(width===3840&&failure==='draw')continue;
   let output,sampled;
   const encode=(callback,type)=>{assert.equal(type,'image/png');callback(failure==='encode'?null:new Blob(['png'],{type}))};
   const context={drawImage(source){sampled=[source.width,source.height];if(failure==='draw')throw Error('draw failed')}};
   globalThis.document={createElement(){return output={getContext:()=>context,toBlob:encode}}};
   const resolutions=[],canvas={width:1408,height:792,toBlob:encode},world={width:1408,height:792,renderer:{domElement:canvas},setResolution(w,h){resolutions.push([w,h]);this.width=canvas.width=w;this.height=canvas.height=h},renderFrame(){}};
   const options=exportSize('png',width);
   if(failure)await assert.rejects(stillPng(world,options));else assert.equal((await stillPng(world,options)).type,'image/png');
   assert.deepEqual([world.width,world.height,canvas.width,canvas.height],[1408,792,1408,792]);
   assert.deepEqual(resolutions[0],[3840,2160]);
   if(width===1920){assert.deepEqual(sampled,[3840,2160]);assert.deepEqual([output.width,output.height],[1920,1080]);}
   else assert.equal(output,undefined,'4K encodes the native raster without a second canvas or 8K allocation');
  }
 }finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});

test('Still formats share the same chosen size; video reports its actual 1080p size',()=>{
 for(const format of ['png','camera','depth','kit']){
  assert.deepEqual(exportSize(format),{width:3840,height:2160});
  assert.deepEqual(exportSize(format,1920),{width:1920,height:1080});
  assert.throws(()=>exportSize(format,2000),RangeError);
 }
 assert.deepEqual(exportSize('video',3840),{width:1920,height:1080});
});
