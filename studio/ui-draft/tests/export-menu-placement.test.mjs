import test from 'node:test';
import assert from 'node:assert/strict';
import {exportMenuPlacement} from '../export-menu-placement.js';
test('different option counts share upward direction and a four pixel gap',()=>{
 const items=[{top:650,bottom:678,height:168},{top:690,bottom:718,height:72}];
 for(let index=0;index<2;index++){const p=exportMenuPlacement({items,index,viewportHeight:900,exportTop:840});assert.equal(p.direction,'up');assert.equal(p.top+p.height,items[index].top-4);}
});
test('one list lacking top space flips both and scrolls before Export',()=>{
 const items=[{top:100,bottom:128,height:168},{top:140,bottom:168,height:72}];
 for(let index=0;index<2;index++){const p=exportMenuPlacement({items,index,viewportHeight:300,exportTop:220});assert.equal(p.direction,'down');assert.equal(p.top,items[index].bottom+4);assert.ok(p.top+p.height<=216);assert.ok(p.height>0);}
});
