import {canvasPng} from '../engine/export-files.js';

// 1080p uses a 4K sample for clean edges. Native 4K never expands to an 8K buffer.
export async function stillPng(world,{width=3840,height=2160}={}){
 const saved={width:world.width,height:world.height};
 try{
  const sampleWidth=Math.max(3840,width),sampleHeight=sampleWidth*height/width;
  world.setResolution(sampleWidth,sampleHeight);
  world.renderFrame();
  if(sampleWidth===width)return await canvasPng(world.renderer.domElement);
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
  const context=canvas.getContext('2d');
  if(!context)throw Error('The image could not be rendered.');
  context.imageSmoothingEnabled=true;context.imageSmoothingQuality='high';
  context.drawImage(world.renderer.domElement,0,0,width,height);
  return await canvasPng(canvas);
 }finally{world.setResolution(saved.width,saved.height);}
}
