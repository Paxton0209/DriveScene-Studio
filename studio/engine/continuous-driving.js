// Bounded scenery pool: geometry/materials are shared; recycling allocates no meshes.
export function createContinuousDriving(world,{schedule=cb=>requestAnimationFrame(cb),cancel=id=>cancelAnimationFrame(id),hidden=()=>document.hidden,onFrame=()=>{},random=Math.random}={}){
 let playing=false,frame=0,last=0,root=null,rootKey='',groups=[],marks=[],clones=[],distance=0,recycled=0;
 const span=420,exit=65,speed=16.8;
 function restore(){
  for(const group of groups)for(const item of group.items){item.object.position.copy(item.position);item.object.scale.copy(item.scale);item.object.rotation.copy(item.rotation);for(const key of ['growthBaseY','growthHeight']){if(item[key]===undefined)delete item.object.userData[key];else item.object.userData[key]=item[key];}}
  for(const item of marks)item.object.position.copy(item.position);
  for(const clone of clones){clone.removeFromParent();const index=world.lawns?.indexOf(clone);if(index>=0)world.lawns.splice(index,1);}
  groups=[];marks=[];clones=[];root=null;rootKey='';world.drivingDistance=0;world.drivingFrame=0;
 }
 const record=object=>({object,position:object.position.clone(),scale:object.scale.clone(),rotation:object.rotation.clone(),growthBaseY:object.userData.growthBaseY,growthHeight:object.userData.growthHeight,baseY:object.userData.growthBaseY??object.position.y});
 function bind(){
  const key=world.root?.uuid+'|'+world.state?.laneCount;
  if(rootKey===key)return;
  const carry=!!root&&['02','09'].includes(root.userData?.trafficScene)&&['02','09'].includes(world.state?.id),priorDistance=distance;
  const priorGroups=carry?groups.map(g=>({kind:g.kind,z:g.z})):[];
  restore();root=world.root;rootKey=key;if(!root)return;
  const map=new Map();
  function add(object,key,kind){if(!map.has(key))map.set(key,{kind,items:[]});map.get(key).items.push(record(object));}
  for(const object of [...root.children]){
   if(object.userData.environmentKey)add(object,object.userData.environmentKey,object.userData.buildingOwned?'building':'lawn');
   else if(object.userData.constructionAssembly||object.userData.constructionContact)add(object,'roadworks','roadworks');
   if(object.userData.laneDash)marks.push(record(object));
  }
  for(const tree of [...(world.vegetation?.children||[])])add(tree,tree.uuid,'tree');
  groups=[...map.values()];
  for(const group of groups){
   group.x=group.items.reduce((n,item)=>n+item.position.x,0)/group.items.length;
   group.z=group.items.reduce((n,item)=>n+item.position.z,0)/group.items.length;
  }
  const copies=[];
  for(const group of groups){
   if(group.kind==='roadworks')continue;
   const copied={...group,items:[]};
   for(const item of group.items){
    const clone=item.object.clone(true);clone.position.z-=210;item.object.parent.add(clone);clones.push(clone);
    if(group.kind==='lawn')world.lawns?.push(clone);
    copied.items.push(record(clone));
   }
   copied.z-=210;copies.push(copied);
  }
  groups.push(...copies);distance=carry?priorDistance:0;
  if(carry){const used=new Set();for(const group of groups){const index=priorGroups.findIndex((p,i)=>p.kind===group.kind&&!used.has(i));let z;if(index>=0){used.add(index);z=priorGroups[index].z;}else{z=group.z+distance%span;while(z>exit)z-=span;}const offset=z-group.z;group.z=z;for(const item of group.items)item.object.position.z+=offset;}}
 }
 function advance(dt){
  if(!['02','09','03'].includes(world.state?.id)||world.suspended||world.initializingScene||world.structureMotion)return false;
  bind();const delta=Math.max(0,Math.min(.1,dt))*speed;distance+=delta;
  for(const group of groups){
   group.z+=delta;
   for(const item of group.items)item.object.position.z+=delta;
   if(group.z>exit){
    group.z-=span;recycled++;
    const width=group.kind==='building'?.85+random()*.30:1,height=group.kind==='building'?.76+random()*.58:1;
    const lateral=group.kind==='building'?(random()-.5)*2:0;
    for(const item of group.items){
     const object=item.object;
     const centerZ=group.items.reduce((n,i)=>n+i.position.z,0)/group.items.length;
     object.position.z=group.z+(item.position.z-centerZ)*width;
     object.position.x=group.x+(item.position.x-group.x)*width+lateral;
     if(group.kind==='building'){object.scale.set(item.scale.x*width,item.scale.y*height,item.scale.z*width);object.position.y=item.baseY*height;object.userData.growthBaseY=object.position.y;if(item.growthHeight!==undefined)object.userData.growthHeight=item.growthHeight*height;}
     if(group.kind==='tree'){const size=.83+random()*.34;object.scale.copy(item.scale).multiplyScalar(size);object.rotation.y=random()*Math.PI*2;}
    }
   }
  }
  for(const item of marks)item.object.position.z=item.position.z+(distance%10);
  world.drivingDistance=distance;world.drivingFrame=Math.floor(distance*2);return true;
 }
 function tick(time){
  frame=0;if(!playing||hidden())return;
  if(!['02','09','03'].includes(world.state?.id)){pause();return;}
  if(last&&time-last<1000/30){frame=schedule(tick);return;}
  const dt=last?(time-last)/1000:0;last=time;
  if(advance(dt)){world.renderFrame(true);onFrame();}
  frame=schedule(tick);
 }
 function pause(){playing=false;if(frame)cancel(frame);frame=0;last=0;onFrame();}
 function setPlaying(value){if(!value){pause();return;}if(playing)return;playing=true;last=0;if(!hidden())frame=schedule(tick);onFrame();}
 function reset({resume=false}={}){pause();restore();distance=0;recycled=0;if(resume)setPlaying(true);}
 function visibility(){if(frame)cancel(frame);frame=0;last=0;if(playing&&!hidden())frame=schedule(tick);}
 return {setPlaying,pause,reset,advance,visibility,audit(){return {playing,distance,recycled,speed,pooledObjects:groups.reduce((n,g)=>n+g.items.length,0),sceneryGroups:groups.length,clonedObjects:clones.length};}};
}
