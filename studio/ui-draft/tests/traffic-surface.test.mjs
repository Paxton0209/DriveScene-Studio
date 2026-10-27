import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
import {consolidateTrafficRear,refineTrafficBody} from '../traffic-surface.js';

test('Rear fascia consolidation preserves the real traffic-car silhouette, glass, wheels and every original triangle',async()=>{
 const data=JSON.parse(gunzipSync(await readFile(new URL('../../engine/assets/traffic-model-y.json.gz',import.meta.url))));
 const original=structuredClone(data),count=d=>d.parts.reduce((sum,p)=>sum+p.indices.length,0);
 consolidateTrafficRear(data);
 assert.equal(count(data),count(original));assert.deepEqual(data.spec,original.spec);
 for(const role of ['window','rubber','rim'])assert.deepEqual(data.parts.find(p=>p.role===role),original.parts.find(p=>p.role===role));
 const paint=data.parts.find(p=>p.role==='paint'),oldPaint=original.parts.find(p=>p.role==='paint'),trim=data.parts.find(p=>p.role==='trim'),oldTrim=original.parts.find(p=>p.role==='trim');
 assert.deepEqual(paint.attributes.position.slice(0,oldPaint.attributes.position.length),oldPaint.attributes.position);
 assert.deepEqual(paint.indices.slice(0,oldPaint.indices.length),oldPaint.indices);
 assert.ok(data.draftRearSurface.consolidatedTriangles>500,'exercise the fragmented lower rear surface');
 const newIds=paint.indices.slice(oldPaint.indices.length);
 for(const id of newIds){assert.ok(paint.attributes.position[id*3+2]>1.7);assert.ok(paint.attributes.position[id*3+1]<.72);}
 const retained=new Set(trim.indices);
 for(let i=0;i<oldTrim.indices.length;i+=3){const ids=oldTrim.indices.slice(i,i+3);if(ids.some(id=>oldTrim.attributes.position[id*3+2]<=1.7||oldTrim.attributes.position[id*3+1]>=.72))for(const id of ids)assert.ok(retained.has(id),'front, side and upper trim remain intact');}
});

test('Shared traffic simplification keeps dimensions, glass, wheels, roof and wheel openings while removing the low rear tab',async()=>{
 const source=JSON.parse(gunzipSync(await readFile(new URL('../../engine/assets/traffic-model-y.json.gz',import.meta.url))));
 const data=consolidateTrafficRear(structuredClone(source)),before=structuredClone(data);
 refineTrafficBody(data);
 const count=d=>d.parts.reduce((sum,p)=>sum+p.indices.length,0);
 assert.equal(count(data),count(source),'body fairing must not open holes by dropping faces');
 assert.deepEqual(data.spec,source.spec);
 for(const role of ['window','rubber','rim'])assert.deepEqual(data.parts.find(p=>p.role===role),source.parts.find(p=>p.role===role));
 const paint=data.parts.find(p=>p.role==='paint'),p=paint.attributes.position,old=before.parts.find(p=>p.role==='paint').attributes.position;
 const rubber=source.parts.find(p=>p.role==='rubber').attributes.position,wheels=[];
 for(const side of [-1,1])for(const end of [-1,1]){
  const points=[];for(let i=0;i<rubber.length;i+=3)if(rubber[i]*side>0&&rubber[i+2]*end>0)points.push([rubber[i+1],rubber[i+2]]);
  const ys=points.map(p=>p[0]),zs=points.map(p=>p[1]);wheels.push({side,y:(Math.min(...ys)+Math.max(...ys))/2,z:(Math.min(...zs)+Math.max(...zs))/2,r:(Math.max(...ys)-Math.min(...ys))/2});
 }
 let roof=0,arches=0,tab=0,maxOtherMovement=0;
 for(let i=0;i<old.length;i+=3){
  const [x,y,z]=old.slice(i,i+3),after=p.slice(i,i+3),move=Math.hypot(after[0]-x,after[1]-y,after[2]-z);
  if(y>=1.14){assert.deepEqual(after,[x,y,z]);roof++;}
  if(Math.abs(x)>.68&&wheels.some(w=>x*w.side>0&&Math.hypot(y-w.y,z-w.z)<=w.r+.11)){assert.ok(move<1e-10,'wheel opening remains the source boundary');arches++;}
  if(Math.abs(x)<.68&&z>2.05&&y<.35){assert.ok(after[1]>=.35-1e-10);tab++;}
  if(!(z>1.9&&y<.68))maxOtherMovement=Math.max(maxOtherMovement,move);
 }
 assert.ok(roof>500&&arches>0&&tab>10,`exercise the protected and simplified regions: roof=${roof}, arches=${arches}, tab=${tab}`);
 assert.ok(maxOtherMovement<=.008000001,'panel repair is bounded to 8mm away from the lower fascia');
 for(const part of data.parts){for(const array of Object.values(part.attributes))assert.ok(array.every(Number.isFinite));}
 const normals=paint.attributes.normal;for(let i=0;i<normals.length;i+=3)assert.ok(Math.abs(Math.hypot(...normals.slice(i,i+3))-1)<.001,'unit finite normals avoid transient lighting spikes');
});
