import {Output,BufferTarget,CanvasSource,Mp4OutputFormat,WebMOutputFormat,canEncodeVideo} from 'mediabunny';

export async function videoType(){return await canEncodeVideo('avc',{width:1920,height:1080})?'mp4':'webm'}
export async function encodeVideo(canvas,{duration,render,signal}){
 signal?.throwIfAborted();
 const extension=await videoType(),target=new BufferTarget(),output=new Output({target,format:extension==='mp4'?new Mp4OutputFormat():new WebMOutputFormat()}),source=new CanvasSource(canvas,{codec:extension==='mp4'?'avc':'vp9',bitrate:8_000_000});
 signal?.throwIfAborted();
 output.addVideoTrack(source,{frameRate:30});
 let abort;
 const cancellation=new Promise((_,reject)=>{
  abort=()=>reject(signal.reason);
  signal?.addEventListener('abort',abort,{once:true});
 });
 async function encode(){
  await output.start();
  for(let index=0;index<duration*30;index++){signal?.throwIfAborted();render(index);await source.add(index/30,1/30)}
  signal?.throwIfAborted();
  await output.finalize();
  return {blob:new Blob([target.buffer],{type:extension==='mp4'?'video/mp4':'video/webm'}),extension};
 }
 // The encoder may stop advancing while waiting to accept a frame.
 try{return await Promise.race([encode(),cancellation]);}
 catch(error){await output.cancel();throw error}
 finally{signal?.removeEventListener('abort',abort)}
}
