import test from 'node:test';
import assert from 'node:assert/strict';
import {Color} from 'three';
import {blendPathTheme} from '../path-theme.js';
import {createAppearanceBlend} from '../theme-blend.js';

test('Every path colour follows the scene blend continuously in both directions and on reversal',()=>{
 const colors={light:new Color('#1696ff'),dark:new Color('#55beff')};
 const radiance={light:{fill:new Color('#0884ff'),rim:new Color('#55ccff')},dark:{fill:new Color('#46bbff'),rim:new Color('#a2e8ff')}};
 const u={color:{value:new Color()},edgeBlend:{value:0},fill:{value:new Color()},rim:{value:new Color()}},identity=u.color.value;
 const tone={value:0},blend=createAppearanceBlend();
 function start(target,time){blend.start([{owner:tone,key:'value',value:tone.value}],[{owner:tone,key:'value',value:target}],time);}
 let previous=colors.light.clone();
 start(1,0);
 for(let frame=0;frame<=12;frame++){
  blend.sample(frame*16);blendPathTheme(u,colors,radiance,tone.value);
  assert.equal(u.color.value,identity);
  for(const channel of ['r','g','b'])assert.ok(Math.abs(u.color.value[channel]-previous[channel])<.08);
  for(const key of ['fill','rim'])assert.ok(u[key].value.equals(radiance.light[key].clone().lerp(radiance.dark[key],tone.value)));
  previous.copy(u.color.value);
 }
 const before=previous.clone();start(0,192);blendPathTheme(u,colors,radiance,tone.value);assert.ok(u.color.value.equals(before));
 for(let frame=1;frame<=25;frame++){blend.sample(192+frame*16);blendPathTheme(u,colors,radiance,tone.value);for(const channel of ['r','g','b'])assert.ok(Math.abs(u.color.value[channel]-previous[channel])<.08);previous.copy(u.color.value);}
 assert.ok(u.color.value.equals(colors.light));assert.equal(u.edgeBlend.value,.34);
 start(1,600);blend.sample(1000);blendPathTheme(u,colors,radiance,tone.value);assert.ok(u.color.value.equals(colors.dark));assert.equal(u.edgeBlend.value,.72);
});
