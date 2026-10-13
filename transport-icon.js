// One continuous outline: rounded equilateral play triangle -> progress ring.
// Both shapes use the same six cubic segments, so no icon swap is needed.
const lerp=(a,b,t)=>a+(b-a)*t;
const point=(a,b,t)=>a.map((v,i)=>lerp(v,b[i],t));
const vertices=[[6.8,4.4574],[16.4,10],[6.8,15.5426]];
const triangle=[];
for(let i=0;i<3;i++){
 const a=vertices[i],b=vertices[(i+1)%3],c=vertices[(i+2)%3];
 const start=point(a,b,.12),end=point(a,b,.88),next=point(b,c,.12);
 if(!i)triangle.push(...start);
 triangle.push(...point(start,end,1/3),...point(start,end,2/3),...end);
 triangle.push(...point(end,b,2/3),...point(next,b,2/3),...next);
}
const circle=[];
const angles=[-90,-10,30,110,150,230,270].map(v=>v*Math.PI/180);
for(let i=0;i<6;i++){
 const a=angles[i],b=angles[i+1],k=4/3*Math.tan((b-a)/4),r=6.4;
 const start=[10+r*Math.cos(a),10+r*Math.sin(a)],end=[10+r*Math.cos(b),10+r*Math.sin(b)];
 if(!i)circle.push(...start);
 circle.push(start[0]-k*r*Math.sin(a),start[1]+k*r*Math.cos(a),end[0]+k*r*Math.sin(b),end[1]-k*r*Math.cos(b),...end);
}
function outline(mix){
 const p=triangle.map((v,i)=>lerp(v,circle[i],mix).toFixed(3));
 let d=`M${p[0]} ${p[1]}`;
 for(let i=2;i<p.length;i+=6)d+=`C${p.slice(i,i+6).join(' ')}`;
 return d+'Z';
}
export function createTransportIcon(svg){
 const track=svg.querySelector('.progress-track'),value=svg.querySelector('.progress-value');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let mix=0,target=0,frame=0;
 const paint=()=>{
  const d=outline(mix);track.setAttribute('d',d);value.setAttribute('d',d);
  track.style.opacity=String(1-.8*mix);value.style.opacity=String(mix);
 };
 const snap=()=>{cancelAnimationFrame(frame);frame=0;mix=target;paint();};
 reduced.addEventListener('change',()=>{if(reduced.matches)snap();});
 paint();
 return playing=>{
  const next=playing?1:0;if(next===target)return;
  target=next;cancelAnimationFrame(frame);
  if(reduced.matches){snap();return;}
  const from=mix,start=performance.now(),duration=360;
  const tick=now=>{
   const t=Math.min(1,(now-start)/duration),ease=t*t*(3-2*t);
   mix=lerp(from,target,ease);paint();
   frame=t<1?requestAnimationFrame(tick):0;
  };
  frame=requestAnimationFrame(tick);
 };
}
