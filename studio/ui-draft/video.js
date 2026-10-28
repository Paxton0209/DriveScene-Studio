import {Output,BufferTarget,CanvasSource,Mp4OutputFormat,WebMOutputFormat,canEncodeVideo} from 'mediabunny';

export async function videoType(){return await canEncodeVideo('avc',{width:1920,height:1080})?'mp4':'webm'}
export async function encodeVideo(canvas,{duration,render}){
 const extension=await videoType(),target=new BufferTarget(),output=new Output({target,format:extension==='mp4'?new Mp4OutputFormat():new WebMOutputFormat()}),source=new CanvasSource(canvas,{codec:extension==='mp4'?'avc':'vp9',bitrate:8_000_000});
 output.addVideoTrack(source,{frameRate:30});
 try{await output.start();for(let index=0;index<duration*30;index++){render(index);await source.add(index/30,1/30)}await output.finalize();return {blob:new Blob([target.buffer],{type:extension==='mp4'?'video/mp4':'video/webm'}),extension}}catch(error){await output.cancel();throw error}
}
