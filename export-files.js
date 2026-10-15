const encoder=new TextEncoder();
const crcTable=Uint32Array.from({length:256},(_,index)=>{
 let value=index;
 for(let bit=0;bit<8;bit++)value=value&1?0xedb88320^(value>>>1):value>>>1;
 return value>>>0;
});
function crc32(bytes){
 let checksum=0xffffffff;
 for(const byte of bytes)checksum=crcTable[(checksum^byte)&255]^(checksum>>>8);
 return (checksum^0xffffffff)>>>0;
}
function pngChunk(name,data){
 const type=encoder.encode(name),chunk=new Uint8Array(data.length+12),view=new DataView(chunk.buffer);
 view.setUint32(0,data.length);chunk.set(type,4);chunk.set(data,8);view.setUint32(chunk.length-4,crc32(chunk.subarray(4,chunk.length-4)));
 return chunk;
}
export async function depthPng(rgba,width,height){
 const stride=width*2+1,scanlines=new Uint8Array(stride*height);
 for(let row=0;row<height;row++)for(let column=0;column<width;column++){
  const source=((height-1-row)*width+column)*4,target=row*stride+1+column*2;
  scanlines[target]=rgba[source];scanlines[target+1]=rgba[source+1];
 }
 const header=new Uint8Array(13),view=new DataView(header.buffer);
 view.setUint32(0,width);view.setUint32(4,height);header[8]=16;
 const compressed=await new Response(new Blob([scanlines]).stream().pipeThrough(new CompressionStream('deflate'))).arrayBuffer();
 return new Blob([new Uint8Array([137,80,78,71,13,10,26,10]),pngChunk('IHDR',header),pngChunk('IDAT',new Uint8Array(compressed)),pngChunk('IEND',new Uint8Array())],{type:'image/png'});
}
export async function zipFiles(files){
 const localParts=[],centralParts=[];let offset=0,centralSize=0;
 for(const [name,content]of files){
  const filename=encoder.encode(name),data=typeof content==='string'?encoder.encode(content):new Uint8Array(await content.arrayBuffer()),checksum=crc32(data);
  const local=new Uint8Array(30+filename.length),localView=new DataView(local.buffer);
  localView.setUint32(0,0x04034b50,true);localView.setUint16(4,20,true);localView.setUint16(6,0x800,true);localView.setUint16(12,33,true);localView.setUint32(14,checksum,true);localView.setUint32(18,data.length,true);localView.setUint32(22,data.length,true);localView.setUint16(26,filename.length,true);local.set(filename,30);
  const central=new Uint8Array(46+filename.length),centralView=new DataView(central.buffer);
  centralView.setUint32(0,0x02014b50,true);centralView.setUint16(4,20,true);centralView.setUint16(6,20,true);centralView.setUint16(8,0x800,true);centralView.setUint16(14,33,true);centralView.setUint32(16,checksum,true);centralView.setUint32(20,data.length,true);centralView.setUint32(24,data.length,true);centralView.setUint16(28,filename.length,true);centralView.setUint32(42,offset,true);central.set(filename,46);
  localParts.push(local,data);centralParts.push(central);offset+=local.length+data.length;centralSize+=central.length;
 }
 const end=new Uint8Array(22),endView=new DataView(end.buffer);
 endView.setUint32(0,0x06054b50,true);endView.setUint16(8,files.length,true);endView.setUint16(10,files.length,true);endView.setUint32(12,centralSize,true);endView.setUint32(16,offset,true);
 return new Blob([...localParts,...centralParts,end],{type:'application/zip'});
}
export function downloadFile(blob,name){
 const link=document.createElement('a'),url=URL.createObjectURL(blob);
 link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),30000);
}
export function canvasPng(canvas){
 return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('The image could not be encoded.')),'image/png'));
}
