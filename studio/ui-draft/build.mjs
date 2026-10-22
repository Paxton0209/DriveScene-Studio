import {build} from 'esbuild';
import {access,readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {isolatedRuntimePlugin} from './runtime-patches.mjs';
const root=fileURLToPath(new URL('.',import.meta.url));
const html=await readFile(new URL('../engine/index.html',import.meta.url),'utf8');
const embedded=html.replace('<head>','<head><base href="../engine/"><link rel="stylesheet" href="../ui-draft/engine.css?v=1">').replaceAll('drivescene-preview-v15','drivescene-ui-draft-preview-v1').replaceAll('"sr-theme"','"sr-ui-draft-theme"').replace('<script src="startup.js?v=20261019-finish-110"></script>','<script type="module" src="../ui-draft/runtime.bundle.js?v=live-theme09-20261022"></script>');
await writeFile(new URL('./engine.html',import.meta.url),embedded);
const iconFile=new URL('./icons.json',import.meta.url),iconMissing=await access(iconFile).then(()=>false,()=>true);
if(iconMissing||process.argv.includes('--sync-icons')){
 const reference=await readFile(new URL('../../outputs/design-reference-Main.dc.html',import.meta.url),'utf8');
 const prefix=source=>source.replaceAll('id="ic','id="ud-ic').replaceAll('url(#ic','url(#ud-ic');
 const nav=Object.fromEntries([...reference.matchAll(/<button[^>]*go\.(\w+)[^>]*>(<svg[\s\S]*?<\/svg>)/g)].map(match=>[match[1],prefix(match[2])]));
 const weather=Object.fromEntries([...reference.matchAll(/<button[^>]*wx\.(clear|cloudy|rain|snow)\.on[^>]*>(<svg[\s\S]*?<\/svg>)/g)].map(match=>[{clear:'default',cloudy:'overcast',rain:'rain',snow:'snow'}[match[1]],match[2].replaceAll('width="13"','width="14"').replaceAll('height="13"','height="14"')]));
 if(Object.keys(nav).length!==6||Object.keys(weather).length!==4)throw Error('Reference SVG inventory mismatch');
 await writeFile(iconFile,JSON.stringify({defs:prefix(reference.match(/<svg width="0"[\s\S]*?<\/svg>/)[0]),nav,weather}));
}
function draftMotion(source){
 return source
  .replace('y:3,width:selected.offsetWidth,height:container.clientHeight-6','y:2,width:selected.offsetWidth,height:container.clientHeight-4')
  .replaceAll('openHeight=44','openHeight=112')
  .replaceAll('openHeight-44','openHeight-112')
  .replaceAll('round 12px','round 8px')
  .replace("const options={duration:reducedMotion()?0:(open?.375:.32)*ARC_MOTION_SCALE*1000,easing:'cubic-bezier(.22,1,.36,1)'}","const options={duration:reducedMotion()?0:(open?220:160),easing:'cubic-bezier(.2,.9,.3,1)'}")
  .replace('if(instant||reducedMotion())return;\n  sequence=selectionMotionFrames','if(instant||reducedMotion()){indicator.classList.remove(\'is-moving\');return;}\n  sequence=selectionMotionFrames')
  .replace('const active=indicator.animate(sequence.frames','indicator.classList.add(\'is-moving\');const active=indicator.animate(sequence.frames')
  .replace('animation=null;sequence=null;}','animation=null;sequence=null;indicator.classList.remove(\'is-moving\');}')
  .replace('const content=grid(),from=getComputedStyle(popup).clipPath,fromOpacity=getComputedStyle(content).opacity,fromTransform=getComputedStyle(content).transform;','const content=grid(),from=getComputedStyle(popup).clipPath,fromOpacity=getComputedStyle(content).opacity,fromTransform=getComputedStyle(content).transform,fromPopupOpacity=getComputedStyle(popup).opacity,fromPopupTransform=getComputedStyle(popup).transform;')
  .replace('popup.style.clipPath=target;content.style.opacity=opacity;','popup.style.clipPath=target;popup.style.opacity=opacity;popup.style.transform=open?\'scale(1)\':\'scale(.96)\';content.style.opacity=opacity;')
  .replace("animation=popup.animate([{clipPath:from==='none'?target:from},{clipPath:target}],options);","animation=popup.animate([{clipPath:from==='none'?target:from,opacity:fromPopupOpacity,transform:fromPopupTransform},{clipPath:target,opacity,transform:open?'scale(1)':'scale(.96)'}],options);")
  .replace("grid().style.opacity='0';grid().style.transform='translateY(-6px)';","grid().style.opacity='0';grid().style.transform='translateY(-6px)';popup.style.opacity='0';popup.style.transform='scale(.96)';");
}
await build({absWorkingDir:root,entryPoints:['../ui-motion.js'],bundle:true,minify:true,format:'esm',outfile:'motion-runtime.js',plugins:[{name:'draft-motion-dimensions',setup(builder){builder.onLoad({filter:/\/ui-motion\.js$/},async args=>({contents:draftMotion(await readFile(args.path,'utf8')),loader:'js',resolveDir:root+'../'}))}}]});
await build({absWorkingDir:root,entryPoints:['../engine/app.js'],bundle:true,minify:true,format:'esm',outfile:'runtime.bundle.js',plugins:[isolatedRuntimePlugin()],target:['chrome110','safari17']});
console.log('UI draft runtime built; shared engine files are read-only inputs.');
