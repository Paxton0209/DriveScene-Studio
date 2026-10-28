import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import {vehicleCatalog,vehicleSpec,vehicleReadme} from '../vehicle-catalog.js';
import {exportReadme} from '../export-scene.js';
import {initVehicleSelector} from '../vehicle-selector.js';

test('model choices and selected export credit match the prepared library',async()=>{
 const root=new URL('../vehicle-library/',import.meta.url),manifest=JSON.parse(await readFile(new URL('manifest.json',root),'utf8'));
 assert.equal(vehicleSpec('unknown').id,'x6');assert.equal(vehicleSpec('taycan').id,'x6');assert.deepEqual(vehicleCatalog.map(model=>model.id),['x6','model-3','ix','xc90']);
 for(const model of vehicleCatalog){
  const readme=vehicleReadme(exportReadme,model.id);assert.ok(readme.includes(model.name));assert.ok(readme.includes(model.author));assert.ok(readme.includes(model.source));
  if(model.id==='x6')continue;
  assert.ok(!readme.includes('vecarz'));
  const prepared=manifest.models.find(spec=>spec.id===model.id).prepared,bytes=await readFile(new URL(prepared.path,root)),glb=gunzipSync(bytes);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),prepared.sha256);assert.equal(glb.toString('ascii',0,4),'glTF');
  assert.equal(createHash('sha256').update(glb).digest('hex'),prepared.glb_sha256);
 }
});

function fixture(context,onChange,appearance='default'){
 const nodes={};
 class Element extends EventTarget{
  children=[];attributes={};dataset={};hidden=false;disabled=false;value='';
  set id(value){this.identifier=value;nodes[value]=this;}get id(){return this.identifier;}
  setAttribute(key,value){this.attributes[key]=value;}removeAttribute(key){delete this.attributes[key];}
  append(...elements){for(const element of elements){if(element.parentElement)element.parentElement.children=element.parentElement.children.filter(child=>child!==element);element.parentElement=this;this.children.push(element);}}add(element){this.append(element);}
  after(element){this.afterElement=element;}replaceWith(element){this.replacement=element;}
  remove(){this.removed=true;}
  matches(){return false;}
  focus(){document.activeElement=this;this.dispatchEvent(new Event('focus'));}
  showModal(){this.open=true;}close(){this.open=false;this.dispatchEvent(new Event('close'));}
  getAnimations(){return [];}getBoundingClientRect(){return {left:0,right:480,top:0,bottom:480};}
 }
 for(const id of ['vehicle-picker-trigger','vehicle-current']){const node=new Element();node.id=id;}
 const replaceGlobal=(key,value)=>{
  const previous=Object.getOwnPropertyDescriptor(globalThis,key);Object.defineProperty(globalThis,key,{value,configurable:true,writable:true});
  context.after(()=>{if(previous)Object.defineProperty(globalThis,key,previous);else delete globalThis[key];});
 };
 replaceGlobal('document',Object.assign(new EventTarget(),{body:new Element(),documentElement:{dataset:{appearance},style:{}},getElementById:id=>nodes[id],createElement:()=>new Element()}));
 replaceGlobal('requestAnimationFrame',callback=>{queueMicrotask(callback);return 1;});replaceGlobal('cancelAnimationFrame',()=>{});
 replaceGlobal('window',{addEventListener(){}});
 replaceGlobal('Option',class extends Element{constructor(name,value){super();this.textContent=name;this.value=value;}});
 const control=initVehicleSelector({selected:'x6',onChange});control.sync(true);return {nodes,control};
}

test('vehicle entry separates model selection from scene elements and blocks duplicate transfers',async context=>{
 let complete,requests=0;const view=fixture(context,()=>{requests++;return new Promise(resolve=>{complete=resolve;});});
 const card=view.nodes['vehicle-option-ix'];assert.equal(view.nodes.vehicle,undefined);assert.equal(view.nodes['vehicle-current'].textContent,'BMW X6');
 card.dispatchEvent(new Event('click'));
 assert.equal(card.disabled,true);assert.equal(view.nodes['vehicle-feedback'].hidden,true);assert.equal(view.nodes['vehicle-picker'].attributes['aria-busy'],'true');
 card.dispatchEvent(new Event('click'));assert.equal(requests,1);
 complete();await new Promise(setImmediate);assert.equal(card.disabled,false);assert.equal(card.attributes['aria-pressed'],'true');assert.equal(view.nodes['vehicle-option-x6'].attributes['aria-pressed'],'false');
 assert.equal(view.nodes['vehicle-current'].textContent,'BMW iX');view.control.sync(false);assert.equal(card.disabled,true);view.control.sync(true);assert.equal(card.disabled,false);
});

test('selecting the current model does not transfer it again',async context=>{
 let requests=0;const view=fixture(context,async()=>{requests++;});view.nodes['vehicle-option-x6'].dispatchEvent(new Event('click'));
 assert.equal(requests,0);assert.equal(view.nodes['vehicle-current'].textContent,'BMW X6');
});

test('slow changes show delayed feedback and clear it once ready',async context=>{
 let complete;const view=fixture(context,()=>new Promise(resolve=>complete=resolve));view.nodes['vehicle-option-ix'].dispatchEvent(new Event('click'));
 assert.equal(view.nodes['vehicle-feedback'].hidden,true);await new Promise(resolve=>setTimeout(resolve,170));assert.equal(view.nodes['vehicle-feedback'].hidden,false);assert.equal(view.nodes['vehicle-feedback'].textContent,'Loading…');
 complete();await new Promise(setImmediate);assert.equal(view.nodes['vehicle-feedback'].hidden,true);
});

test('failed selection returns to the previous choice and permits retry',async context=>{
 context.mock.method(console,'error',()=>{});let requests=0;
 const view=fixture(context,async()=>{requests++;throw Error('offline');}),card=view.nodes['vehicle-option-xc90'];
 card.dispatchEvent(new Event('click'));await new Promise(setImmediate);
 assert.equal(view.nodes['vehicle-option-x6'].attributes['aria-pressed'],'true');assert.equal(card.attributes['aria-pressed'],'false');assert.equal(card.disabled,false);assert.match(view.nodes['vehicle-feedback'].textContent,/try again/);
 card.dispatchEvent(new Event('click'));await new Promise(setImmediate);assert.equal(requests,2);
});

test('vehicle grid navigation stays in its row and column with one tab stop',async context=>{
 const view=fixture(context,async()=>{},'after'),panel=view.nodes['vehicle-picker'];view.nodes['vehicle-picker-trigger'].dispatchEvent(new Event('click'));
 const key=value=>{const event=new Event('keydown',{cancelable:true});Object.defineProperty(event,'key',{value});panel.dispatchEvent(event);};
 view.nodes['vehicle-option-model-3'].focus();key('ArrowRight');assert.equal(document.activeElement.id,'vehicle-option-model-3');
 key('ArrowDown');assert.equal(document.activeElement.id,'vehicle-option-xc90');key('ArrowDown');assert.equal(document.activeElement.id,'vehicle-option-xc90');
 key('Home');assert.equal(document.activeElement.id,'vehicle-option-x6');key('ArrowUp');assert.equal(document.activeElement.id,'vehicle-option-x6');key('End');assert.equal(document.activeElement.id,'vehicle-option-xc90');
 assert.equal(Object.values(view.nodes).filter(node=>node.id?.startsWith('vehicle-option-')&&node.tabIndex===0).length,1);
});

test('vehicle clears dismissed errors on a fresh picker session',async context=>{
 context.mock.method(console,'error',()=>{});const view=fixture(context,async()=>{throw Error('offline');},'after');
 view.nodes['vehicle-picker-trigger'].dispatchEvent(new Event('click'));view.nodes['vehicle-option-ix'].dispatchEvent(new Event('click'));await new Promise(setImmediate);
 assert.equal(view.nodes['vehicle-feedback'].hidden,false);view.nodes['vehicle-picker'].close();view.nodes['vehicle-picker-trigger'].dispatchEvent(new Event('click'));assert.equal(view.nodes['vehicle-feedback'].hidden,true);
});

test('a previous vehicle request cannot close a reopened picker',async context=>{
 let complete;const view=fixture(context,()=>new Promise(resolve=>complete=resolve),'after');view.nodes['vehicle-picker-trigger'].dispatchEvent(new Event('click'));view.nodes['vehicle-option-ix'].dispatchEvent(new Event('click'));
 view.nodes['vehicle-picker'].close();view.nodes['vehicle-picker-trigger'].dispatchEvent(new Event('click'));complete();await new Promise(setImmediate);
 assert.equal(view.nodes['vehicle-picker'].open,true);assert.equal(view.nodes['vehicle-current'].textContent,'BMW iX');assert.equal(view.nodes['vehicle-feedback'].hidden,true);
});

test('pointer opening focuses the dialog while keyboard opening focuses the current card',async context=>{
 const view=fixture(context,async()=>{});
 document.dispatchEvent(new Event('pointerdown'));
 view.nodes['vehicle-picker-trigger'].dispatchEvent(new Event('click'));
 assert.equal(document.documentElement.dataset.vehicleInput,'pointer');
 assert.equal(document.activeElement,view.nodes['vehicle-picker']);
 view.nodes['vehicle-picker'].close();
 const key=new Event('keydown');Object.defineProperty(key,'key',{value:'Tab'});document.dispatchEvent(key);
 view.nodes['vehicle-picker-trigger'].dispatchEvent(new Event('click'));
 assert.equal(document.documentElement.dataset.vehicleInput,'keyboard');
 assert.equal(document.activeElement,view.nodes['vehicle-option-x6']);
});
