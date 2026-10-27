import {BufferGeometry,Float32BufferAttribute,Mesh,ShapeUtils,Vector2,Vector3} from 'three';

// A 45cm center offset leaves 38.5cm of asphalt beyond the 13cm paint.
// The former 18.5cm clearance was occluded by the raised curb at low angles.
export const RAMP_PAINT_INSET=.45;
// A low-profile divider keeps the asphalt reveal readable at grazing views.
export const RAMP_CURB_TOP=.07;
export function rampInset(points,sign=1){
 return points.map(([x,z],i)=>{
  const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)];
  const dx=b[0]-a[0],dz=b[1]-a[1],length=Math.hypot(dx,dz)||1;
  return [x-dz/length*RAMP_PAINT_INSET*sign,z+dx/length*RAMP_PAINT_INSET*sign];
 });
}

// Integrate a continuous heading profile rather than pulling a Bezier handle.
// A 4m throat keeps the island compact; zero initial curvature eases out of
// the straight and the terminal curvature matches the actual branch edge.
// Road, curb and its normal-offset paint all sample this one boundary.
export function rampNose(half,sample,toZ){
 const epsilon=.001,gap=4,slopeAt=u=>(sample(u+epsilon).l-sample(u-epsilon).l)/(2*epsilon);
 let low=0,high=60;while(sample(high).l-half<gap)high+=20;
 for(let i=0;i<60;i++){const middle=(low+high)/2;if(sample(middle).l-half<gap)low=middle;else high=middle;}
 const end=(low+high)/2,slope=slopeAt(end),second=(sample(end+epsilon).l-2*sample(end).l+sample(end-epsilon).l)/(epsilon*epsilon);
 const terminal=-second/Math.pow(1+slope*slope,1.5),turn=Math.atan2(1,slope)+Math.PI/2,steps=2048;
 let length=gap*1.6;
 const heading=(t,l)=>-Math.PI/2+turn*t*t*(3-2*t)+terminal*l*t*t*(t-1);
 const integrate=l=>{const points=[new Vector2(0,0)];let x=0,y=0;for(let i=1;i<=steps;i++){const a=(i-1)/steps,b=i/steps,m=(a+b)/2,h=l/steps/6;x+=h*(Math.cos(heading(a,l))+4*Math.cos(heading(m,l))+Math.cos(heading(b,l)));y+=h*(Math.sin(heading(a,l))+4*Math.sin(heading(m,l))+Math.sin(heading(b,l)));points.push(new Vector2(x,y));}return points;};
 for(let i=0;i<12;i++){const points=integrate(length);length*=gap/points[steps].x;}
 const points=integrate(length),join=end-points[steps].y,direction=toZ(1)-toZ(0),nose={
  getPoint:t=>{const f=Math.max(0,Math.min(1,t))*steps,i=Math.min(steps-1,Math.floor(f)),p=points[i].clone().lerp(points[i+1],f-i);return new Vector3(half+p.x,0,toZ(join+p.y));},
  getTangent:t=>{const angle=heading(t,length);return new Vector3(Math.cos(angle),0,direction*Math.sin(angle));},
  getCurvature:t=>(turn*6*t*(1-t)+terminal*length*(3*t*t-2*t))/length
 };
 return {join,end,slope,nose};
}

// Joined top and vertical faces follow the actual road boundary and gore nose.
export function raisedCurb(points,material,{width=1.0,height=.22,base=-.10,offset=0,limitInnerRadius=false}={}){
 const vertices=[],indices=[],uv=[];
 // A curb wider than the inside bend folds over itself at the gore nose.
 // Keep its road-facing boundary fixed and narrow the outside offset locally.
 let noseCap=null;
 const widths=points.map((point,i)=>{
  if(!limitInnerRadius||!i||i===points.length-1)return width;
  const a=points[i-1],b=points[i+1],ab=Math.hypot(point[0]-a[0],point[1]-a[1]),bc=Math.hypot(b[0]-point[0],b[1]-point[1]),ac=Math.hypot(b[0]-a[0],b[1]-a[1]);
  const cross=Math.abs((point[0]-a[0])*(b[1]-a[1])-(point[1]-a[1])*(b[0]-a[0]));
  return cross>1e-9?Math.min(width,Math.max(.025,.45*ab*bc*ac/(2*cross))):width;
 });
 // Opposing sides of the asymmetric ramp nose can meet even when each local
 // curvature radius is safe. Bound their combined width by the free space.
 if(limitInnerRadius){
  const tangents=points.map((_,i)=>{const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],length=Math.hypot(b[0]-a[0],b[1]-a[1])||1;return [(b[0]-a[0])/length,(b[1]-a[1])/length];});
  const reach=width/.45;
  for(let i=0;i<points.length;i++)for(let j=i+1;j<points.length;j++){
   const dx=points[j][0]-points[i][0],dz=points[j][1]-points[i][1];
   if(Math.abs(dx)>=reach||Math.abs(dz)>=reach||tangents[i][0]*tangents[j][0]+tangents[i][1]*tangents[j][1]>=0)continue;
   if(tangents[i][0]*tangents[j][0]+tangents[i][1]*tangents[j][1]<-.5){if(!noseCap)noseCap=[i,j];else{noseCap[0]=Math.min(noseCap[0],i);noseCap[1]=Math.max(noseCap[1],j)}}
   const clearance=.45*Math.hypot(dx,dz);widths[i]=Math.min(widths[i],clearance);widths[j]=Math.min(widths[j],clearance);
  }
 }
 const tapered=widths.map((value,i)=>{let result=value;for(let j=Math.max(0,i-24);j<=Math.min(points.length-1,i+24);j++){const distance=Math.hypot(points[i][0]-points[j][0],points[i][1]-points[j][1]);result=Math.min(result,widths[j]+distance*.45);}return result;});
 for(let i=0;i<points.length;i++){
  const before=points[Math.max(0,i-1)],after=points[Math.min(points.length-1,i+1)];
  const dx=after[0]-before[0],dz=after[1]-before[1],length=Math.hypot(dx,dz)||1;
  const localWidth=tapered[i],localOffset=offset*localWidth/width;
  const nx=-dz/length*localWidth/2,nz=dx/length*localWidth/2;
  const x=points[i][0]-dz/length*localOffset,z=points[i][1]+dx/length*localOffset;
  for(const [side,y] of [[-1,base],[-1,base+height],[1,base+height],[1,base]]){vertices.push(x+nx*side,y,z+nz*side);uv.push((side+1)/2,i);}
  if(i){const a=(i-1)*4,b=i*4;for(let face=0;face<3;face++)indices.push(a+face,a+face+1,b+face,a+face+1,b+face+1,b+face);}
 }
 // Close the top of the physical curb at a tight returning nose. The two
 // offset strips otherwise leave a thin slit down to the lower ground plane.
 // These faces share the existing curb vertices and height, rather than a decal.
 if(noseCap){
  const [from,to]=noseCap,inside=offset<0?1:2,contour=[];
  for(let i=from;i<=to;i++)contour.push(new Vector2(vertices[i*12+inside*3],vertices[i*12+inside*3+2]));
  for(const triangle of ShapeUtils.triangulateShape(contour,[])){
   const ids=triangle.map(i=>(i+from)*4+inside),a=ids[0]*3,b=ids[1]*3,c=ids[2]*3;
   const normal=(vertices[b+2]-vertices[a+2])*(vertices[c]-vertices[a])-(vertices[b]-vertices[a])*(vertices[c+2]-vertices[a+2]);
   indices.push(...(normal>=0?ids:[ids[0],ids[2],ids[1]]));
  }
 }
 // A level concrete top has a hard edge against the vertical curb face.
 // Sharing their normals bends the light across the cap and leaves a dark
 // crescent / pale diagonal even when the geometry is fully closed.
 const topVertices=new Map();
 for(let i=0;i<points.length;i++)for(const side of [1,2]){const old=i*4+side;topVertices.set(old,vertices.length/3);vertices.push(...vertices.slice(old*3,old*3+3));uv.push(...uv.slice(old*2,old*2+2));}
 for(let k=0;k<indices.length;k+=3)if(indices.slice(k,k+3).every(id=>topVertices.has(id)))for(let n=0;n<3;n++)indices[k+n]=topVertices.get(indices[k+n]);
 const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(vertices,3));geometry.setAttribute('uv',new Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();
 const mesh=new Mesh(geometry,material);mesh.name='Raised road curb';mesh.castShadow=false;mesh.receiveShadow=false;mesh.userData.roadCurb=true;return mesh;
}

export function installRampCurbs(world,inner,outer,sign=1){
 // Straight mainline sections have their own fixed curbs. Retaining them in
 // the moving branch creates coplanar faces that flicker at grazing angles.
 const half=inner[0][0],epsilon=1e-6;
 let start=inner.findIndex(([x])=>Math.abs(x-half)>epsilon);
 start=Math.max(0,start-1);
 let end=outer.length-1;while(end>0&&Math.abs(outer[end-1][0]-half)<epsilon)end--;
 // The shared curvature-continuous nose accommodates the 1m curb without folding.
 // Keep a constant section so its top and the paint remain concentric.
 for(const points of [inner.slice(start),outer.slice(0,end+1)])if(points.length>1)world.root.add(raisedCurb(points,world.mat.curb,{offset:-.50*sign,height:RAMP_CURB_TOP+.10}));
}
