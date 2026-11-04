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

test('Author information blue replaces both theme palettes without replacing Color instances',async()=>{
 const {unifyPathAccent}=await import('../path-theme.js');
 const theme={light:'#1e91f2',dark:'#2689d8'},colors={light:new Color(theme.light),dark:new Color(theme.dark)};
 const palette={light:{nearColor:'#2d7fe1',midColor:'#1e91f2',edgeColor:'#9bcfff'},dark:{nearColor:'#2865ba',midColor:'#2689d8',edgeColor:'#548fcd'}};
 const radiance=Object.fromEntries(Object.entries(palette).map(([tone,p])=>[tone,Object.fromEntries(Object.entries(p).map(([key,c])=>[key,new Color(c)]))]));
 const original=colors.light,edge=radiance.dark.edgeColor,expected=new Color('#1471D6');
 assert.equal(unifyPathAccent(theme,colors,palette,radiance,'#1471D6'),true);
 assert.equal(colors.light,original);assert.equal(radiance.dark.edgeColor,edge);
 for(const tone of ['light','dark']){assert.equal(theme[tone],'#1471D6');assert.ok(colors[tone].equals(expected));for(const key of Object.keys(palette[tone])){assert.equal(palette[tone][key],'#1471D6');assert.ok(radiance[tone][key].equals(expected));}}
 const u={color:{value:new Color()},edgeBlend:{value:0},...Object.fromEntries(Object.keys(palette.light).map(key=>[key,{value:new Color()}]))};
 for(const tone of [0,.2,.5,.8,1]){blendPathTheme(u,colors,radiance,tone);assert.ok(u.color.value.equals(expected));for(const key of Object.keys(palette.light))assert.ok(u[key].value.equals(expected));}
});
