// A small JSON directory followed by aligned GPU attribute/index buffers.
// Float32 values are exactly those used by Float32BufferAttribute; no geometry
// simplification or texture resampling is involved.
export function encodeTrafficPayload(data){
 const blocks=[];let offset=0;
 const pack=(values,kind)=>{const array=kind==='index'?new Uint32Array(values):new Float32Array(values),bytes=new Uint8Array(array.buffer);const entry={offset,count:array.length,kind};blocks.push(bytes);offset+=bytes.byteLength;return entry;};
 const metadata={...data,parts:data.parts.map(part=>({...part,attributes:Object.fromEntries(Object.entries(part.attributes).map(([name,values])=>[name,pack(values,'float')])),indices:part.indices?pack(part.indices,'index'):null}))};
 const json=new TextEncoder().encode(JSON.stringify(metadata)),start=8+Math.ceil(json.length/4)*4,result=new Uint8Array(start+offset);
 result.set([68,83,84,49]);new DataView(result.buffer).setUint32(4,json.length,true);result.set(json,8);let cursor=start;
 for(const block of blocks){result.set(block,cursor);cursor+=block.length;}
 return result;
}
export function decodeTrafficPayload(buffer){
 const bytes=new Uint8Array(buffer);
 if(bytes[0]!==68||bytes[1]!==83||bytes[2]!==84||bytes[3]!==49)return JSON.parse(new TextDecoder().decode(bytes));
 const length=new DataView(buffer).getUint32(4,true),start=8+Math.ceil(length/4)*4,data=JSON.parse(new TextDecoder().decode(bytes.subarray(8,8+length)));
 const unpack=entry=>new (entry.kind==='index'?Uint32Array:Float32Array)(buffer,start+entry.offset,entry.count);
 for(const part of data.parts){for(const name of Object.keys(part.attributes))part.attributes[name]=unpack(part.attributes[name]);if(part.indices)part.indices=unpack(part.indices);}
 return data;
}
