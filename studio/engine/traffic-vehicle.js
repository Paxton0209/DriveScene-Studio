import * as THREE from 'three';
import {createTrafficVehicle,setTrafficAppearance,readyTrafficModel} from './traffic-model.js';
export {createTrafficVehicle,setTrafficAppearance,readyTrafficModel};
export function trafficPlan(state,egoX=1.85){
 const id=state.id;if(!['01','02','03','04','05','06','07','08','09','12'].includes(id))return [];
 if(id==='08')return [{axis:'x',lane:-35,z:-35,x:-65,direction:1,speed:16},{axis:'x',lane:-44,z:-44,x:85,direction:-1,speed:18}];
 if(['03','06','07'].includes(id)){const opposite=-12.7;return [{x:3.7,z:-34,speed:22,direction:-1},{x:3.7,z:-95,speed:22,direction:-1},{x:-3.7,z:-88,speed:21,direction:-1},{x:0,z:-135,speed:19,direction:-1,egoLane:true},{x:opposite,z:-38,speed:20,direction:1},{x:opposite-3.7,z:-170,speed:22,direction:1}];}
 const lanes=state.laneCount||6,positive=lanes>=4?5.55:1.85;
 const slots=[{x:positive,z:-30,speed:positive===egoX?19:24,direction:-1,egoLane:positive===egoX},{x:egoX,z:-100,speed:19,direction:-1,egoLane:true},{x:-1.85,z:-36,speed:21,direction:1}];
 if(lanes>=4)slots.push({x:-5.55,z:-150,speed:22,direction:1});if(lanes>=6)slots.push({x:9.25,z:-185,speed:22,direction:-1});return slots;
}
export function createTrafficSystem(world,{enabled=true,now=()=>performance.now(),load=true,random=Math.random}={}){
 const group=new THREE.Group();group.name='Traffic vehicles';group.visible=false;world.scene.add(group);
 const pool=Array.from({length:10},()=>{const car=createTrafficVehicle();car.visible=false;group.add(car);return car;});let root=null,key='',last=0,elapsed=0,modelError=null,modelsReady=!load;
 const slots=pool.map(car=>({car,route:null,id:'',alpha:0,target:0,delay:false,cooldown:0,speed:0,spawns:0}));
 function enter(slot,{recycled=false}={}){
  const route=slot.route;if(!route)return;
  slot.alpha=1;slot.car.visible=false;slot.spawns++;
  slot.speed=route.speed+(random()-.5)*2.2;slot.desiredSpeed=slot.speed;
  const firstSide=route.direction<0&&!route.egoLane&&Math.abs(route.x)<7;
  const firstOpposite=route.direction>0&&(Math.abs(route.x)<4||world.state?.id==='03'&&Math.abs(route.x+12.7)<.1);
  slot.cooldown=recycled?(world.state?.id==='03'&&route.direction<0?1.1+random()*3.5:1.3+random()*8):firstSide?.35+random()*.35:firstOpposite?.12+random()*.25:1.8+random()*4.5;
  if(route.axis==='x')slot.car.position.x=route.direction>0?-160:160;
  else {
   const n=Number(route.id?.split(':').at(-1))||0;
   slot.car.position.z=route.direction<0?(route.egoLane?-175-n*45-random()*40:((world.state?.cameraView==='high'?24:12)+(Math.abs(route.x)>7?15:0)+n*30+random()*2)):-105-random()*8-n*42;
  }
  if(recycled&&modelsReady){
   const type=['sedan','suv'][Math.floor(random()*2)],fresh=createTrafficVehicle(type);
   for(const child of [...slot.car.children]){slot.car.remove(child);child.material?.dispose();}
   for(const child of [...fresh.children])slot.car.add(child);Object.assign(slot.car.userData,fresh.userData);
  }
 }
 const ready=load?Promise.all(['sedan','suv'].map(type=>readyTrafficModel(null,type))).then(()=>{for(const [index,slot] of slots.entries()){const fresh=createTrafficVehicle(['sedan','suv'][index%2]);while(slot.car.children.length)slot.car.remove(slot.car.children[0]);for(const child of [...fresh.children])slot.car.add(child);Object.assign(slot.car.userData,fresh.userData);}modelsReady=true;for(const slot of slots)if(slot.route)enter(slot);if(world.state)world.renderFrame();}).catch(error=>{modelError=error.message;console.error(error);}):Promise.resolve();
 const identities=routes=>{const count=new Map();return routes.map(route=>{const lane=[route.axis||'z',route.x,route.direction].join(':'),n=count.get(lane)||0;count.set(lane,n+1);return {...route,id:lane+':'+n};});};
 function update(playing=false,egoSpeed=0){
  const state=world.state;if(!state)return;const time=now(),dt=last?Math.min(.1,Math.max(0,(time-last)/1000)):0;last=time;
  const transitioning=world.layoutTransition?.kind==='lanes'||!!world.layoutMotion,targetState=world.layoutTransition?.kind==='lanes'?world.layoutTransition.target:state,next=[targetState.id,targetState.laneCount].join('|'),sameRoot=root===world.root;
  if(next!==key||!sameRoot){
   const laneChange=!!root&&(transitioning||(['02','09'].includes(state.id)&&['02','09'].includes(root.userData?.trafficScene)));
   const routes=identities(trafficPlan(targetState,world.car.position.x));key=next;
   if(!laneChange)for(const slot of slots){slot.route=null;slot.id='';slot.alpha=0;slot.target=0;slot.car.visible=false;}
   for(const slot of slots)if(slot.route)slot.target=routes.some(route=>route.id===slot.id)?1:0;
   for(const route of routes){let slot=slots.find(s=>s.id===route.id&&s.route);if(slot){slot.route=route;slot.target=1;continue;}
    slot=slots.find(s=>!s.route||s.alpha===0&&s.target===0);if(!slot)continue;slot.id=route.id;slot.route=route;slot.alpha=laneChange?0:1;slot.target=1;slot.delay=laneChange&&transitioning;slot.car.position.set(route.x||0,state.id==='03'?8.52:.02,route.z);slot.car.rotation.y=route.axis==='x'?(route.direction===1?-Math.PI/2:Math.PI/2):(route.direction===1?Math.PI:0);if(enabled)enter(slot);
   }
   root=world.root;if(root)root.userData.trafficScene=state.id;
  }
  group.visible=enabled&&modelsReady&&slots.some(s=>s.route);if(playing&&enabled)elapsed+=dt;
  // Cars in the same lane follow the physical leader with bounded acceleration.
  const laneGroups=new Map();for(const slot of slots){if(!slot.route||!slot.target||slot.cooldown||slot.delay||slot.route.axis==='x')continue;const lane=slot.route.x+'|'+slot.route.direction;if(!laneGroups.has(lane))laneGroups.set(lane,[]);laneGroups.get(lane).push(slot);}
  if(playing&&enabled)for(const members of laneGroups.values()){
   const direction=members[0].route.direction;members.sort((a,b)=>(b.car.position.z-a.car.position.z)*direction);
   for(let i=0;i<members.length;i++){const slot=members[i],leader=members[i-1];let target=slot.desiredSpeed;
    if(leader){const gap=(leader.car.position.z-slot.car.position.z)*direction;target=Math.min(target,leader.speed+Math.max(-leader.speed,(gap-(6+slot.speed*1.3))/3));}
    slot.speed+=THREE.MathUtils.clamp(target-slot.speed,-2.2*dt,.7*dt);
   }
  }
  for(const slot of slots){const {car,route}=slot;if(!route){car.visible=false;continue;}
   if(slot.delay&&!transitioning)slot.delay=false;
   if(slot.delay){car.visible=false;continue;}
   const target=slot.target;slot.alpha=THREE.MathUtils.clamp(slot.alpha+Math.sign(target-slot.alpha)*dt/(target? .25:.15),Math.min(target,slot.alpha),Math.max(target,slot.alpha));
   if(slot.alpha<.001&&slot.target===0){slot.route=null;slot.id='';car.visible=false;continue;}
   // A retiring lane cannot keep a car after its physical road edge passes it.
   const edge=world.layoutVisual?.width/2;if(slot.target===0&&Number.isFinite(edge)&&Math.abs(car.position.x)+.93>edge){slot.alpha=0;slot.route=null;slot.id='';car.visible=false;continue;}
   if(slot.cooldown>0){if(playing&&enabled&&!transitioning)slot.cooldown=Math.max(0,slot.cooldown-dt);car.visible=false;continue;}
   car.visible=slot.alpha>.001;setTrafficAppearance(car,state.mode==='dark',slot.alpha);
   if(!playing||!enabled||!modelsReady)continue;
   if(route.axis==='x'){car.position.x+=slot.speed*route.direction*dt;if(Math.abs(car.position.x)>165)enter(slot,{recycled:true});}
   else{car.position.z+=(egoSpeed+route.direction*slot.speed)*dt;if(car.position.z>65||car.position.z< -345)enter(slot,{recycled:true});}
  }
  for(const members of laneGroups.values())for(let i=1;i<members.length;i++){const slot=members[i],leader=members[i-1],direction=slot.route.direction;const limit=leader.car.position.z-direction*10;if(direction<0)slot.car.position.z=Math.max(slot.car.position.z,limit);else slot.car.position.z=Math.min(slot.car.position.z,limit);}
  const active=slots.filter(s=>s.route&&s.target&&!s.cooldown);
  // The ego is a physical leader/obstacle too. Its lane never respawns behind it.
  const egoLength=world.car.userData.vehicleSpec?.length||4.85;
  const egoLane=active.filter(s=>s.route.direction<0&&s.route.axis!=='x'&&Math.abs(s.car.position.x-world.car.position.x)<1.7).sort((a,b)=>b.car.position.z-a.car.position.z);
  let nearest=world.car.position.z-(egoLength+5.2)/2-8;
  for(const slot of egoLane){slot.car.position.z=Math.min(slot.car.position.z,nearest);nearest=slot.car.position.z-15;}


 }
 return {group,ready,update,setEnabled(value){const entering=!!value&&!enabled;enabled=!!value;
  if(entering)for(const slot of slots)if(slot.route&&slot.target)enter(slot);
  group.visible=enabled&&modelsReady&&slots.some(s=>s.route);},audit(){const visible=slots.filter(s=>s.car.visible&&group.visible);return {enabled,visible:group.visible,count:visible.length,elapsed,model:'neutral-modern-closed',types:[...new Set(visible.map(s=>s.car.userData.trafficType))],modelReady:slots.every(s=>s.car.userData.modelReady),modelError,positions:visible.map(s=>s.car.position.toArray()),lanes:visible.map(s=>({id:s.id,alpha:s.alpha,retiring:!s.target,x:s.car.position.x,direction:s.route.direction,speed:s.speed,spawns:s.spawns})),spawnSerial:slots.reduce((n,s)=>n+s.spawns,0),waiting:slots.filter(s=>s.cooldown>0).length,poolSize:pool.length};}};
}
