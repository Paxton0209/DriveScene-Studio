import test from 'node:test';
import assert from 'node:assert/strict';
import {protectThemeFrame} from '../theme-frame.js';

const deferred=()=>{let resolve,reject;const promise=new Promise((yes,no)=>{resolve=yes;reject=no});return {promise,resolve,reject}};
const flush=async()=>{for(let i=0;i<8;i++)await Promise.resolve()};
function harness(){
 const images=[],children=[],decodes=[];
 const document={createElement(){const image={src:'',setAttribute(){},decode(){const pending=deferred();decodes.push({image,...pending});return pending.promise},remove(){children.splice(children.indexOf(this),1)}};images.push(image);return image}};
 const renderer={style:{visibility:''}},host={ownerDocument:document,append(image){children.push(image)}};
 let frame='old';const canvas={toDataURL(){return frame}};
 return {images,children,decodes,renderer,host,canvas,set frame(v){frame=v}};
}
test('Capture replaces WebGL only after its image is decoded and retains the old raster until the new one is ready',async()=>{
 const h=harness(),pending=protectThemeFrame(h);await flush();
 assert.equal(h.children.length,0);assert.equal(h.renderer.style.visibility,'');
 h.decodes[0].resolve();await flush();h.decodes[1].resolve();const raster=await pending;
 assert.equal(h.children.length,1);assert.equal(h.renderer.style.visibility,'hidden');assert.equal(h.children[0].src,'old');
 h.frame='new';const updating=raster.update();await flush();
 assert.equal(h.children[0].src,'old');h.decodes[2].resolve();await flush();h.decodes[3].resolve();await updating;
 assert.equal(h.children[0].src,'new');raster.release();raster.release();
 assert.equal(h.children.length,0);assert.equal(h.renderer.style.visibility,'');
});
test('Failed initial decoding leaves the live scene visible',async()=>{
 const h=harness(),pending=protectThemeFrame(h);h.decodes[0].reject(Error('decode failed'));
 await assert.rejects(pending,/decode failed/);assert.equal(h.children.length,0);assert.equal(h.renderer.style.visibility,'');
});
test('A failed end-frame decode keeps the last valid image until cleanup',async()=>{
 const h=harness(),pending=protectThemeFrame(h);h.decodes[0].resolve();await flush();h.decodes[1].resolve();const raster=await pending;
 h.frame='new';const updating=raster.update();h.decodes[2].reject(Error('decode failed'));
 await assert.rejects(updating,/decode failed/);assert.equal(h.children[0].src,'old');
 raster.release();assert.equal(h.renderer.style.visibility,'');assert.equal(h.children.length,0);
});
