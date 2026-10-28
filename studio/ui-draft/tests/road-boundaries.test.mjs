import test from 'node:test';
import assert from 'node:assert/strict';
import {CubicBezierCurve3,Group,MeshBasicMaterial,Vector3} from 'three';
import {raisedCurb,rampNose,rampInset,RAMP_PAINT_INSET,RAMP_CURB_TOP,installRampCurbs} from '../road-boundaries.js';

test('Moving ramp curbs retain a low, level top through the nose',()=>{
 const root=new Group(),material=new MeshBasicMaterial();
 installRampCurbs({root,mat:{curb:material}},[[5.55,0],[5.55,-1],[5.8,-2],[6.4,-3]],[[8,-3],[7,-2],[5.55,-1],[5.55,0]]);
 assert.equal(root.children.length,2);
 for(const mesh of root.children){const p=mesh.geometry.attributes.position;let max=-Infinity;for(let i=0;i<p.count;i++)max=Math.max(max,p.getY(i));assert.ok(Math.abs(max-RAMP_CURB_TOP)<1e-6);mesh.geometry.dispose();}
 material.dispose();
});

test('Shared ramp nose matches tangent and curvature at both joins and keeps offsets regular',()=>{
 for(const sign of [-1,1])for(const half of [3.7,5.55,11.1]){
  const sample=u=>{const t=Math.max(0,u),q=Math.min(t,60),x=1.85+.009*q*q+Math.max(0,t-60)*1.08,dx=.018*q,h=3.7*Math.hypot(1,dx);return {l:x-h,r:x+h};};
  const toZ=u=>sign===1?-u-8:u-60,{join,end,slope,nose}=rampNose(half,sample,toZ);
  const start=nose.getPoint(0),finish=nose.getPoint(1);
  assert.ok(Math.abs(start.x-half)<1e-9&&Math.abs(start.z-toZ(join))<1e-9);
  assert.ok(Math.abs(finish.x-sample(end).l)<1e-9&&Math.abs(finish.z-toZ(end))<1e-9);
  assert.ok(nose.getTangent(0).dot(new Vector3(0,0,sign))>.999999);
  assert.ok(nose.getTangent(1).dot(new Vector3(slope,0,-sign).normalize())>.999999);
  const second=(sample(end+.001).l-2*sample(end).l+sample(end-.001).l)/1e-6;
  assert.ok(Math.abs(nose.getCurvature(0))<1e-10,'straight join has zero curvature');
  assert.ok(Math.abs(nose.getCurvature(1)+second/(1+slope*slope)**1.5)<1e-9,'branch join matches curvature');
  for(let i=0;i<=1000;i++)assert.ok(Math.abs(nose.getCurvature(i/1000))<.85,'compact nose retains at least 1.17m radius so a 1m curb cannot fold');
  for(let i=0;i<1000;i++)assert.ok(nose.getPoint((i+1)/1000).x>=nose.getPoint(i/1000).x-1e-9,'nose expands monotonically toward branch');
  const points=Array.from({length:193},(_,i)=>{const p=nose.getPoint(i/192);return[p.x,p.z];});
  const curb=raisedCurb(points,new MeshBasicMaterial(),{offset:-.5*sign}),p=curb.geometry.attributes.position,roadSide=sign===1?2:1,innerSide=sign===1?1:2;
  const inside=[];
  for(let i=0;i<points.length;i++){
   const boundary=new Vector3().fromBufferAttribute(p,i*4+roadSide),inner=new Vector3().fromBufferAttribute(p,i*4+innerSide);boundary.y=inner.y=0;
   assert.ok(Math.abs(boundary.x-points[i][0])<1e-5&&Math.abs(boundary.z-points[i][1])<1e-5);
   assert.ok(Math.abs(boundary.distanceTo(inner)-1)<1e-5,'constant curb width');inside.push([inner.x,inner.z]);
  }
  const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
  for(let i=0;i<inside.length-1;i++)for(let j=i+2;j<inside.length-1;j++)assert.equal(cross(inside[i],inside[i+1],inside[j])*cross(inside[i],inside[i+1],inside[j+1])<0&&cross(inside[j],inside[j+1],inside[i])*cross(inside[j],inside[j+1],inside[i+1])<0,false,'inner offset does not fold');
  curb.geometry.dispose();curb.material.dispose();
 }
});

test('A curved curb stays joined, finite and raised with an upward top face',()=>{
 const points=Array.from({length:65},(_,i)=>{const a=i/64*Math.PI/2;return [5+2*(1-Math.cos(a)),-20-2*Math.sin(a)]});
 const curb=raisedCurb(points,new MeshBasicMaterial()),g=curb.geometry,p=g.attributes.position;
 assert.equal(p.count,points.length*6);assert.equal(g.index.count,(points.length-1)*18);
 for(const n of p.array)assert.ok(Number.isFinite(n));
 for(let i=0;i<points.length;i++){
  const left=new Vector3().fromBufferAttribute(p,i*4+1),right=new Vector3().fromBufferAttribute(p,i*4+2),middle=left.clone().add(right).multiplyScalar(.5);
  assert.ok(Math.abs(middle.x-points[i][0])<1e-5&&Math.abs(middle.z-points[i][1])<1e-5);
  assert.ok(Math.abs(left.distanceTo(right)-1)<1e-5);assert.ok(Math.abs(middle.y-.12)<1e-6);
 }
 const a=new Vector3().fromBufferAttribute(p,1),b=new Vector3().fromBufferAttribute(p,2),c=new Vector3().fromBufferAttribute(p,5);
 assert.ok(b.sub(a).cross(c.sub(a)).y>0);assert.equal(curb.castShadow,false);assert.equal(curb.receiveShadow,false);
});


test('Ramp curb road-facing edge exactly follows its original boundary through the nose',()=>{
 for(const sign of [-1,1]){
  const points=Array.from({length:97},(_,i)=>{const a=i/96*Math.PI;return [5.55+.35*(1-Math.cos(a)),sign*.35*Math.sin(a)];});
  const curb=raisedCurb(points,new MeshBasicMaterial(),{offset:-.5*sign}),p=curb.geometry.attributes.position;
  const roadSide=sign===1?2:1;
  for(let i=0;i<points.length;i++){
   assert.ok(Math.abs(p.getX(i*4+roadSide)-points[i][0])<1e-5);
   assert.ok(Math.abs(p.getZ(i*4+roadSide)-points[i][1])<1e-5);
  }
 }
});

test('Tight ramp noses narrow the curb before its inner offset can fold across the bend',()=>{
 const radius=.35,points=Array.from({length:97},(_,i)=>{const a=i/96*Math.PI;return [5.55+radius*(1-Math.cos(a)),radius*Math.sin(a)];});
 const curb=raisedCurb(points,new MeshBasicMaterial(),{offset:-.5,limitInnerRadius:true}),p=curb.geometry.attributes.position;
 for(let i=1;i<points.length-1;i++){
  const left=new Vector3().fromBufferAttribute(p,i*4+1),right=new Vector3().fromBufferAttribute(p,i*4+2);
  assert.ok(left.distanceTo(right)<radius*.5);
  assert.ok(Math.abs(right.x-points[i][0])<1e-5&&Math.abs(right.z-points[i][1])<1e-5);
 }
});

// Reproduce the engine's asymmetric cubic gore, rather than a circular bend.
for(const sign of [-1,1])for(const steps of [96,192])test(`Ramp asymmetric nose has no folded curb edge: direction ${sign}, samples ${steps}`,()=>{
 const half=5.55,toZ=u=>sign===1?-u-8:u-60;
 const branch=u=>{const q=Math.min(Math.max(u,0),60);return 1.85+.009*q*q+Math.max(0,u-60)*1.08-3.7*Math.sqrt(1+(.018*q)**2)};
 let join=0;while(branch(join)<half+2.4)join+=.01;
 const end=join+2.5,slope=(branch(end+.001)-branch(end-.001))/.002;
 const curve=new CubicBezierCurve3(new Vector3(half,0,toZ(join)),new Vector3(half,0,toZ(join-4.5)),new Vector3(branch(end)-slope*4.5,0,toZ(end-4.5)),new Vector3(branch(end),0,toZ(end)));
 const points=Array.from({length:steps+1},(_,i)=>{const p=curve.getPoint(i/steps);return[p.x,p.z]});
 for(let u=end+.1;u<end+10;u+=.1)points.push([branch(u),toZ(u)]);
 const curb=raisedCurb(points,new MeshBasicMaterial(),{offset:-.5*sign,limitInnerRadius:true}),p=curb.geometry.attributes.position;
 for(const value of p.array)assert.ok(Number.isFinite(value));
 const roadSide=sign===1?2:1,inside=sign===1?1:2;
 const edge=points.map((point,i)=>{
  assert.ok(Math.abs(p.getX(i*4+roadSide)-point[0])<1e-5&&Math.abs(p.getZ(i*4+roadSide)-point[1])<1e-5,'road-facing boundary must remain unchanged');
  return[p.getX(i*4+inside),p.getZ(i*4+inside)];
 });
 const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
 for(let i=0;i<edge.length-1;i++)for(let j=i+2;j<edge.length-1;j++){
  const intersects=cross(edge[i],edge[i+1],edge[j])*cross(edge[i],edge[i+1],edge[j+1])<0&&cross(edge[j],edge[j+1],edge[i])*cross(edge[j],edge[j+1],edge[i+1])<0;
  assert.equal(intersects,false,`curb segments ${i} and ${j} intersect`);
 }
 // Sample the slit between opposing inner edges. Every midpoint must now
 // hit an upward top triangle, including where the old offset strips ended.
 const tangent=i=>{const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],d=Math.hypot(b[0]-a[0],b[1]-a[1]);return [(b[0]-a[0])/d,(b[1]-a[1])/d]};
 const triangles=[];for(let k=0;k<curb.geometry.index.count;k+=3){const ids=[0,1,2].map(n=>curb.geometry.index.getX(k+n));if(ids.every(id=>Math.abs(p.getY(id)-.12)<1e-5))triangles.push(ids.map(id=>[p.getX(id),p.getZ(id)]));}
 let checked=0;
 for(let i=0;i<steps;i+=4)for(let j=i+8;j<steps;j+=4){const a=tangent(i),b=tangent(j),d=Math.hypot(points[i][0]-points[j][0],points[i][1]-points[j][1]);if(a[0]*b[0]+a[1]*b[1]>-.65||d>1.8)continue;
  const q=[(edge[i][0]+edge[j][0])/2,(edge[i][1]+edge[j][1])/2];
  const covered=triangles.some(([a,b,c])=>{const area=Math.abs(cross(a,b,c));return area>1e-10&&Math.abs(Math.abs(cross(a,b,q))+Math.abs(cross(b,c,q))+Math.abs(cross(c,a,q))-area)<1e-6});
  assert.ok(covered,`nose slit at ${i}/${j} must be physically capped`);checked++;
 }
 assert.ok(checked>0,'exercise the actual returning nose');
 const normals=curb.geometry.attributes.normal;
 for(let i=points.length*4;i<p.count;i++){assert.ok(Math.abs(normals.getX(i))<1e-5&&normals.getY(i)>.9999&&Math.abs(normals.getZ(i))<1e-5,'level cap must not inherit vertical-wall normals');}

 curb.geometry.dispose();curb.material.dispose();
});


test('Both ramp directions retain the same paint clearance through straight, nose and branch',()=>{
 for(const sign of [-1,1]){
  const sample=u=>{const q=Math.min(Math.max(0,u),60),x=1.85+.009*q*q+Math.max(0,u-60)*1.08;return {l:x-3.7*Math.hypot(1,.018*q)};};
  const toZ=u=>sign===1?-u-8:u-60,{join,end,nose}=rampNose(5.55,sample,toZ);
  const points=[];for(let u=join+20;u>join;u-=.1)points.push([5.55,toZ(u)]);
  for(let i=0;i<=192;i++){const p=nose.getPoint(i/192);points.push([p.x,p.z]);}
  for(let u=end+.1;u<end+30;u+=.1)points.push([sample(u).l,toZ(u)]);
  const paint=rampInset(points,sign),curb=raisedCurb(points,new MeshBasicMaterial(),{offset:-.5*sign});
  const position=curb.geometry.attributes.position,side=sign===1?2:1;
  for(let i=0;i<points.length;i++){
   const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],dx=b[0]-a[0],dz=b[1]-a[1];
   const offset=[paint[i][0]-position.getX(i*4+side),paint[i][1]-position.getZ(i*4+side)];
   assert.ok(Math.abs(Math.hypot(...offset)-RAMP_PAINT_INSET)<1e-5,'paint to curb distance');
   assert.ok(Math.abs((offset[0]*dx+offset[1]*dz)/Math.hypot(dx,dz))<1e-5,'offset is perpendicular');
  }
  curb.geometry.dispose();curb.material.dispose();
 }
});
