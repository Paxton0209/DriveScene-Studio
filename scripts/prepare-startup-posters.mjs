import {chromium,webkit} from 'playwright';
import sharp from 'sharp';
import {mkdir,writeFile} from 'node:fs/promises';
const dir=new URL('../assets/startup/',import.meta.url).pathname;
const base=(process.env.STARTUP_BASE_URL||'http://127.0.0.1:8000').replace(/\/$/,'');
await mkdir(dir,{recursive:true});
const browser=await (process.env.POSTER_ENGINE==='webkit'?webkit:chromium).launch(process.env.POSTER_ENGINE==='webkit'?{headless:true}:{...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),headless:true,args:['--enable-unsafe-swiftshader','--use-angle=swiftshader']});
try{
 const page=await browser.newPage();
 await page.route('**/__poster',r=>r.fulfill({contentType:'text/html',body:'<script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js","three/addons/":"/node_modules/three/examples/jsm/"}}</script><canvas id="canvas"></canvas>'}));
 await page.goto(`${base}/__poster`);
 await page.evaluate(async()=>{const {World}=await import('/world.js'),{createVehicle}=await import('/vehicle.js');window.posterWorld=new World(document.querySelector('canvas'),await createVehicle(),{width:1280,height:720});});
 let count=0,bytes=0;
 for(const scene of (process.env.POSTER_SCENES?.split(',')||['01','02','03','05','06','07','08','09','10','12','13','14','16','17','18','19'])){
  const road=['01','02','09','12','13'].includes(scene),ramp=['06','07'].includes(scene),junction=['05','08'].includes(scene),elevated=scene==='03';
  for(const lanes of road?[2,4,6]:[0])for(const view of road||ramp||junction||elevated?['low','high']:['low'])for(const mode of ['dark','light']){
   const state={id:road?(scene==='13'?'13':lanes===2?'09':'02'):scene,mode,laneCount:lanes||6,cameraView:view,junctionPosition:view==='high'?'near':'approaching',buildings:['01','06','07','10','14','16'].includes(scene)?false:true,waterfront:scene==='13',trees:false,vehicle:true,roadworks:scene==='12'};
   const data=await page.evaluate(state=>{window.posterWorld.update(state);return document.querySelector('canvas').toDataURL('image/png');},state);
   const image=await sharp(Buffer.from(data.split(',')[1],'base64')).webp({quality:85}).toBuffer();
   await writeFile(`${dir}/${scene}-${lanes}-${view}-${mode}.webp`,image);count++;bytes+=image.length;
  }
 }
 console.log(JSON.stringify({count,bytes,averageBytes:Math.round(bytes/count)}));
}finally{await browser.close();}
