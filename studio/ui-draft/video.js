import {Output,BufferTarget,CanvasSource,Mp4OutputFormat,WebMOutputFormat,canEncodeVideo} from 'mediabunny';

const fps=30,bitrate=8_000_000,stallTimeout=15000;
// WebKit's quality-mode H.264 encoder can stop dequeuing after a few frames.
const userAgent=globalThis.navigator?.userAgent??'';
const webkitH264=/AppleWebKit\//.test(userAgent)&&!/(?:Chrome|Chromium|Edg|OPR)\//.test(userAgent);
const avcOptions={width:1920,height:1080,bitrate,frameRate:fps};
let avcConfig;
async function selectAvc(){
 if(webkitH264&&await canEncodeVideo('avc',{...avcOptions,latencyMode:'realtime'}))return {latencyMode:'realtime'};
 return await canEncodeVideo('avc',avcOptions)?{}:null;
}
const avcEncoding=()=>avcConfig??=selectAvc();
export async function videoType(){return await avcEncoding()?'mp4':'webm'}

export async function encodeVideo(canvas,{duration,render,signal}){
 signal?.throwIfAborted();
 const avc=await avcEncoding(),extension=avc?'mp4':'webm';
 const target=new BufferTarget(),output=new Output({target,format:avc?new Mp4OutputFormat():new WebMOutputFormat()});
 let packets=0;
 const frameCount=Math.ceil(duration*fps);
 const source=new CanvasSource(canvas,{codec:avc?'avc':'vp9',bitrate,...avc,onEncodedPacket(){packets++;}});
 signal?.throwIfAborted();
 output.addVideoTrack(source,{frameRate:fps});
 let abort,stallTimer,stop,interruption;
 const interrupted=new Promise((_,reject)=>{
  stop=error=>{
   interruption=error;
   clearTimeout(stallTimer);
   reject(error);
  };
  abort=()=>stop(signal.reason);
  signal?.addEventListener('abort',abort,{once:true});
 });
 const checkInterrupted=()=>{if(interruption)throw interruption;};
 const armTimeout=()=>{
  clearTimeout(stallTimer);
  stallTimer=setTimeout(()=>stop(new Error('Video encoding stopped. Please try again.')),stallTimeout);
 };
 async function encode(){
  armTimeout();
  await output.start();
  for(let index=0;index<frameCount;index++){
   checkInterrupted();
   render(index);
   armTimeout();
   await source.add(index/fps,1/fps);
  }
  checkInterrupted();
  armTimeout();
  await output.finalize();
  checkInterrupted();
  if(avc?.latencyMode==='realtime'&&packets!==frameCount)throw new Error('Some video frames could not be saved. Please try again.');
  return {blob:new Blob([target.buffer],{type:avc?'video/mp4':'video/webm'}),extension};
 }
 try{return await Promise.race([encode(),interrupted]);}
 catch(error){
  // Cleanup may depend on the encoder that stopped responding.
  if(output.state!=='finalized')void output.cancel().catch(()=>{});
  throw error;
 }finally{
  clearTimeout(stallTimer);
  signal?.removeEventListener('abort',abort);
 }
}
