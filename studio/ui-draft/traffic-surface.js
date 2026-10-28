// The loader immediately converts attributes to Float32BufferAttribute. Keep
// those exact bits while omitting decimal digits that cannot reach the GPU.
// Metadata, indices and the existing JSON/explicit-byte loading stay intact.
export function compactTrafficAttributes(data){
 for(const part of data.parts)for(const array of Object.values(part.attributes))for(let i=0;i<array.length;i++){
  const value=array[i],float=Math.fround(value);if(!Number.isFinite(float))continue;
  for(let digits=1;digits<=9;digits++){
   const short=Number(float.toPrecision(digits));
   if(Object.is(Math.fround(short),float)){
    if(String(short).length<String(value).length)array[i]=short;
    break;
   }
  }
 }
 return data;
}

// The rear fascia is bodywork at SR scale. Its old trim material split one
// continuous bumper into several differently shaded, hard-normal surfaces.
// Consolidate those original faces with the body before its normals are built;
// retain their positions, outer silhouette, wheels, glass and lamp openings.
export function consolidateTrafficRear(data){
 const paint=data.parts.find(part=>part.role==='paint'),trim=data.parts.find(part=>part.role==='trim');
 if(!paint||!trim)return data;
 const position=trim.attributes.position,kept=[],moved=[],map=new Map();
 for(let i=0;i<trim.indices.length;i+=3){
  const triangle=trim.indices.slice(i,i+3);
  const rear=triangle.every(index=>position[index*3+2]>1.7&&position[index*3+1]<.72);
  (rear?moved:kept).push(...triangle);
 }
 for(const index of moved){
  let target=map.get(index);
  if(target===undefined){target=paint.attributes.position.length/3;map.set(index,target);for(const name of Object.keys(paint.attributes))paint.attributes[name].push(...trim.attributes[name].slice(index*3,index*3+3));}
  paint.indices.push(target);
 }
 trim.indices=kept;
 data.draftRearSurface={consolidatedTriangles:moved.length/3,geometry:'original fascia joined to body paint',silhouettePreserved:true};
 return data;
}

// Fit the existing outer body locally instead of averaging normals by voxel.
// Area-weighted samples favour the broad body panels over the tiny walls inside
// panel gaps. A continuous radial kernel crosses the gaps without a grid seam.
// Glass, wheels, the roof and wheel-arch openings remain the original geometry.
export function refineTrafficBody(data){
 const paint=data.parts.find(p=>p.role==='paint'),trim=data.parts.find(p=>p.role==='trim');
 if(!paint||!trim)return data;
 const kept=[],map=new Map();let joined=0;
 for(let k=0;k<trim.indices.length;k+=3){
  const ids=trim.indices.slice(k,k+3),pos=trim.attributes.position;
  if(!ids.every(i=>pos[i*3+1]<1.12)){kept.push(...ids);continue;}
  for(const i of ids){let j=map.get(i);if(j===undefined){j=paint.attributes.position.length/3;map.set(i,j);for(const name of Object.keys(paint.attributes))paint.attributes[name].push(...trim.attributes[name].slice(i*3,i*3+3));}paint.indices.push(j);}
  joined++;
 }
 trim.indices=kept;
 const p=paint.attributes.position,n=paint.attributes.normal,originalNormals=n.slice(),r=.065,r2=r*r,bins=new Map(),samples=[];
 const smooth=(a,b,v)=>{const t=Math.max(0,Math.min(1,(v-a)/(b-a)));return t*t*(3-2*t);};
 // The low centre tab is a diffuser detail, not the bumper's structural fold.
 // Fair it into the adjoining lower edge without cutting open the body shell.
 let lipVertices=0,fasciaVertices=0;const fasciaWeights=new Map();
 for(let i=0;i<p.length;i+=3){
  const mask=(1-smooth(.68,.86,Math.abs(p[i])))*smooth(1.90,2.05,p[i+2]);
  if(mask&&p[i+1]<.35){p[i+1]+=(.35-p[i+1])*mask;lipVertices++;}
  const x=p[i],y=p[i+1],z=p[i+2],upper=2.363-.25*x*x-.16*x**4;
  const fascia=(1-smooth(.78,.92,Math.abs(x)))*(1-smooth(.61,.68,y))*smooth(upper-.20,upper-.12,z);
  if(fascia&&y<.68){const target=upper-.08*(1-smooth(.35,.65,y));p[i+2]+=(target-z)*fascia;fasciaWeights.set(i,fascia);fasciaVertices++;}
 }
 const rubber=data.parts.find(part=>part.role==='rubber')?.attributes.position||[],wheels=[];
 for(const side of [-1,1])for(const end of [-1,1]){
  let y0=Infinity,y1=-Infinity,z0=Infinity,z1=-Infinity;
  for(let i=0;i<rubber.length;i+=3)if(rubber[i]*side>0&&rubber[i+2]*end>0){y0=Math.min(y0,rubber[i+1]);y1=Math.max(y1,rubber[i+1]);z0=Math.min(z0,rubber[i+2]);z1=Math.max(z1,rubber[i+2]);}
  if(Number.isFinite(y0))wheels.push({side,y:(y0+y1)/2,z:(z0+z1)/2,radius:(y1-y0)/2});
 }
 const strength=(x,y,z)=>{
  const side=smooth(.68,.84,Math.abs(x))*smooth(.32,.49,y)*(1-smooth(1.00,1.14,y));
  const end=smooth(1.65,1.92,Math.abs(z))*smooth(.17,.32,y)*(1-smooth(.86,1.06,y));
  let mask=1;
  if(Math.abs(x)>.68)for(const wheel of wheels)if(x*wheel.side>0)mask=Math.min(mask,smooth(wheel.radius+.11,wheel.radius+.17,Math.hypot(y-wheel.y,z-wheel.z)));
  return Math.max(side,end)*mask*(z>1.9? smooth(.62,.72,y):1);
 };
 const key=(x,y,z)=>`${x},${y},${z}`;
 for(let k=0;k<paint.indices.length;k+=3){
  const ids=paint.indices.slice(k,k+3).map(i=>i*3),a=ids[0],b=ids[1],c=ids[2];
  const x=(p[a]+p[b]+p[c])/3,y=(p[a+1]+p[b+1]+p[c+1])/3,z=(p[a+2]+p[b+2]+p[c+2])/3;
  if(!strength(x,y,z))continue;
  const ux=p[b]-p[a],uy=p[b+1]-p[a+1],uz=p[b+2]-p[a+2],vx=p[c]-p[a],vy=p[c+1]-p[a+1],vz=p[c+2]-p[a+2];
  let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;const area=Math.hypot(nx,ny,nz);if(area<1e-10)continue;
  nx/=area;ny/=area;nz/=area;
  const sample={x,y,z,nx,ny,nz,area},id=samples.push(sample)-1,kb=key(Math.floor(x/r),Math.floor(y/r),Math.floor(z/r));
  if(!bins.has(kb))bins.set(kb,[]);bins.get(kb).push(id);
 }
 const fitted=new Map();let moved=0,maxMovement=0;
 for(let i=0;i<p.length;i+=3){
  const x=p[i],y=p[i+1],z=p[i+2],blend=strength(x,y,z);if(!blend)continue;
  const identity=`${x},${y},${z}`;let fit=fitted.get(identity);
  if(!fit){
   // The lateral/rear outward direction excludes the seam's inward walls.
   let ex=x/.95,ey=(y-.68)*.3,ez=z/2.375;const el=Math.hypot(ex,ey,ez);ex/=el;ey/=el;ez/=el;
   const bx=Math.floor(x/r),by=Math.floor(y/r),bz=Math.floor(z/r);let wsum=0,mx=0,my=0,mz=0,nx=0,ny=0,nz=0;
   for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++)for(let dz=-1;dz<=1;dz++)for(const id of bins.get(key(bx+dx,by+dy,bz+dz))||[]){
    const s=samples[id],d2=(s.x-x)**2+(s.y-y)**2+(s.z-z)**2;if(d2>=r2)continue;
    const alignment=s.nx*ex+s.ny*ey+s.nz*ez;if(alignment<.3)continue;
    const radial=1-d2/r2,w=s.area*radial**3*alignment**4;wsum+=w;mx+=s.x*w;my+=s.y*w;mz+=s.z*w;nx+=s.nx*w;ny+=s.ny*w;nz+=s.nz*w;
   }
   const nl=Math.hypot(nx,ny,nz);
   if(wsum>1e-10&&nl>1e-10){
    nx/=nl;ny/=nl;nz/=nl;
    const distance=((mx/wsum-x)*nx+(my/wsum-y)*ny+(mz/wsum-z)*nz);
    // A narrow 8mm repair retains the original panel and bumper transitions.
    const offset=Math.max(-.008,Math.min(.008,distance))*blend;
    fit={x:x+nx*offset,y:y+ny*offset,z:z+nz*offset,nx,ny,nz,offset};
   }else fit={x,y,z,nx:n[i],ny:n[i+1],nz:n[i+2],offset:0};
   fitted.set(identity,fit);
  }
  p[i]=fit.x;p[i+1]=fit.y;p[i+2]=fit.z;
  if(Math.abs(fit.offset)>1e-6){moved++;maxMovement=Math.max(maxMovement,Math.abs(fit.offset));}
 }
 // Rebuild from the repaired faces, weighting by area so a narrow seam wall
 // cannot dominate a broad panel. Keep the original normal groups at folds.
 const adjacent=new Map(),vertexKey=i=>`${Math.round(p[i]*1e5)},${Math.round(p[i+1]*1e5)},${Math.round(p[i+2]*1e5)}`;
 for(let k=0;k<paint.indices.length;k+=3){
  const ids=paint.indices.slice(k,k+3).map(i=>i*3),[a,b,c]=ids;
  const ux=p[b]-p[a],uy=p[b+1]-p[a+1],uz=p[b+2]-p[a+2],vx=p[c]-p[a],vy=p[c+1]-p[a+1],vz=p[c+2]-p[a+2];
  const normal=[uy*vz-uz*vy,uz*vx-ux*vz,ux*vy-uy*vx],area=Math.hypot(...normal);if(area<1e-12)continue;
  for(const i of ids){const key=vertexKey(i);if(!adjacent.has(key))adjacent.set(key,[]);adjacent.get(key).push({normal,area});}
 }
 for(let i=0;i<p.length;i+=3){
  let nx=0,ny=0,nz=0;
  for(const {normal,area}of adjacent.get(vertexKey(i))||[]){
   const alignment=(normal[0]*originalNormals[i]+normal[1]*originalNormals[i+1]+normal[2]*originalNormals[i+2])/area;
   if(alignment<.57)continue;nx+=normal[0];ny+=normal[1];nz+=normal[2];
  }
  const length=Math.hypot(nx,ny,nz);if(length>1e-12){n[i]=nx/length;n[i+1]=ny/length;n[i+2]=nz/length;}
  else {n[i]=originalNormals[i];n[i+1]=originalNormals[i+1];n[i+2]=originalNormals[i+2];}
  const fascia=fasciaWeights.get(i)||0;
  if(fascia){
   const t=Math.max(0,Math.min(1,(p[i+1]-.35)/.3)),nx=.5*p[i]+.64*p[i]**3,ny=-.08*6*t*(1-t)/.3,length=Math.hypot(nx,ny,1);
   const a=n[i]*(1-fascia)+nx/length*fascia,b=n[i+1]*(1-fascia)+ny/length*fascia,c=n[i+2]*(1-fascia)+fascia/length,l=Math.hypot(a,b,c)||1;
   n[i]=a/l;n[i+1]=b/l;n[i+2]=c/l;
  }
 }
 data.draftBodySurface={method:'narrow local outer-skin fit with area-weighted crease normals',joinedTriangles:joined,movedVertices:moved,maxMovement,radius:r,lipVertices,fasciaVertices,glassAndWheelsPreserved:true};
 return data;
}
