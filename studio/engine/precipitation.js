import * as THREE from 'three';
import {createWeatherGround} from './weather-ground.js';

// Falling rain/snow through the visible air volume. A separate scene group
// (World swaps world.root per scene), drawn only for world.camera: the ground
// Reflector and depth export render the same scene with other cameras/flags.
// Particles form a world-fixed periodic field: each moves in a straight line
// and wraps inside a window placed around the actual render camera's view, so
// camera motion reveals the same drops instead of re-seeding them on screen.
// Drops stop at the ground, at raised decks and at the ego vehicle box.
// No render loop, no DOM; fog, sky and lights are untouched. The ground
// response lives in weather-ground.js.

const WEATHERS=['default','overcast','rain','snow'];
const SUPPRESSED_IDS=['10','14','15','16','11'];
// User calibration: rain/snow are 68.5% weaker across particles and ground; sky calibrated independently.
export const WEATHER_STRENGTH=.315;
const GROUND_AMOUNT=.15*WEATHER_STRENGTH;
const PERIOD=600,GROUND_Y=0,MAX_FAR=120,DECKS=4;
const KIND={
 // field: [horizontal tile, vertical band]; screen density is validated at low/high/BEV, not inferred from tile area.
 rain:{field:[72,30],count:1800,reduced:650,near:3,far:45,speed:[10.5,13.5],size:[.32,.58],wind:[.9,0,.25],
  color:{light:new THREE.Color('#eef3f8').multiplyScalar(1.15),dark:new THREE.Color('#aeb4bb')},opacity:{light:.55,dark:.45}},
 snow:{field:[56,24],count:1400,reduced:520,near:3,far:40,speed:[.8,1.3],size:[.045,.085],wind:[.12,0,.04],
  color:{light:new THREE.Color('#ffffff').multiplyScalar(1.35),dark:new THREE.Color('#d5d9de')},opacity:{light:.92,dark:.8}}
};
// Rates are snapped so every drop returns to its start when time wraps at PERIOD.
const periodic=(rate,size)=>Math.max(1,Math.round(rate*PERIOD/size))*size/PERIOD;
for(const k of Object.values(KIND))k.wind=[periodic(k.wind[0],k.field[0])*Math.sign(k.wind[0]),0,k.wind[2]?periodic(k.wind[2],k.field[0])*Math.sign(k.wind[2]):0];

const common=`uniform vec3 camPos;uniform vec3 camForward;uniform vec2 center;uniform vec3 field;uniform float groundY;uniform vec2 depthFade;
uniform float time;uniform float drawEnabled;uniform vec3 carMin;uniform vec3 carMax;uniform vec4 deckRect[${DECKS}];uniform float deckTop[${DECKS}];
uniform vec3 wind;uniform vec2 speedRange;uniform vec2 sizeRange;
attribute vec4 seedA;attribute vec4 seedB;varying float vAlpha;
const float PERIOD=${PERIOD.toFixed(1)};
float periodic(float rate,float size){return max(1.,floor(rate*PERIOD/size+.5))*size/PERIOD;}
float wrapAround(float v,float c,float size){return c+mod(v-c+.5*size,size)-.5*size;}
// Straight-line motion from a seeded world position, wrapped into the window.
vec3 fieldPosition(float speed,out float edge){
 vec3 p=seedA.xyz*field+vec3(wind.x,-speed,wind.z)*time;
 p=vec3(wrapAround(p.x,center.x,field.x),groundY+mod(p.y,field.y),wrapAround(p.z,center.y,field.z));
 vec2 e=abs(p.xz-center)/(.5*field.xz);
 edge=(1.-smoothstep(.8,1.,max(e.x,e.y)))*(1.-smoothstep(.88,1.,(p.y-groundY)/field.y));
 return p;
}
float surfaceY(vec2 xz){
 float y=groundY;
 for(int i=0;i<${DECKS};i++){vec4 r=deckRect[i];if(xz.x>r.x&&xz.x<r.z&&xz.y>r.y&&xz.y<r.w)y=max(y,deckTop[i]);}
 return y;
}
bool inCar(vec3 p){return all(greaterThan(p,carMin))&&all(lessThan(p,carMax));}
float depthAlpha(float depth){return smoothstep(depthFade.x,depthFade.x+2.5,depth)*(1.-smoothstep(depthFade.y*.65,depthFade.y,depth));}`;

const rainVertex=`${common}
attribute float tip;
void main(){
 vAlpha=0.;gl_Position=vec4(2.,2.,2.,1.);
 if(drawEnabled<.5)return;
 float speed=periodic(mix(speedRange.x,speedRange.y,seedB.x),field.y),edge;
 vec3 head=fieldPosition(speed,edge);
 vec3 tail=head+normalize(vec3(-wind.x,speed,-wind.z))*mix(sizeRange.x,sizeRange.y,seedB.y);
 if(head.y<surfaceY(head.xz)||inCar(head)||inCar(tail))return;
 float alpha=mix(.55,1.,seedB.w)*edge*depthAlpha(dot(head-camPos,camForward));
 if(alpha<.003)return;
 vAlpha=mix(.1,1.,tip)*alpha;
 gl_Position=projectionMatrix*viewMatrix*vec4(mix(tail,head,tip),1.);
}`;
const rainFragment=`uniform vec3 color;uniform float opacity;varying float vAlpha;
void main(){
 if(vAlpha<.005)discard;
 gl_FragColor=vec4(color,opacity*vAlpha);
 #include <colorspace_fragment>
}`;

const snowVertex=`${common}
uniform float pixelScale;uniform float sway;
void main(){
 vAlpha=0.;gl_PointSize=0.;gl_Position=vec4(2.,2.,2.,1.);
 if(drawEnabled<.5)return;
 float speed=periodic(mix(speedRange.x,speedRange.y,seedB.x),field.y),edge;
 vec3 p=fieldPosition(speed,edge);
 float phase=seedB.z*6.2831853,w=mix(.55,.95,seedB.x),amp=sway*mix(.5,1.,seedB.w);
 p.x+=amp*sin(time*periodic(w,6.2831853)+phase);p.z+=amp*.6*cos(time*periodic(w*.8,6.2831853)+phase*1.7);
 if(p.y<surfaceY(p.xz)||inCar(p))return;
 float depth=dot(p-camPos,camForward),px=mix(sizeRange.x,sizeRange.y,seedB.y)*pixelScale/max(depth,.1);
 vAlpha=smoothstep(.6,1.8,px)*mix(.7,1.,seedB.w)*edge*depthAlpha(depth);
 if(vAlpha<.003)return;
 gl_PointSize=clamp(px,1.8,12.);
 gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);
}`;
const snowFragment=`uniform vec3 color;uniform float opacity;varying float vAlpha;
void main(){
 vec2 c=gl_PointCoord*2.-1.;
 float a=vAlpha*(1.-smoothstep(.35,1.,dot(c,c)));
 if(a<.005)discard;
 gl_FragColor=vec4(color,opacity*a);
 #include <colorspace_fragment>
}`;

function mulberry32(seed){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function seeds(count,seed){const random=mulberry32(seed),a=new Float32Array(count*4),b=new Float32Array(count*4);for(let i=0;i<count*4;i++){a[i]=random();b[i]=random();}return {a,b};}
const smoothstep=(a,b,x)=>{const t=THREE.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
const wrapAround=(v,c,size)=>c+THREE.MathUtils.euclideanModulo(v-c+size/2,size)-size/2;

export function createPrecipitation(world){
 const group=new THREE.Group();group.name='precipitation';group.userData.informationOverlay=true;group.visible=false;
 const frame={camPos:{value:new THREE.Vector3()},camForward:{value:new THREE.Vector3()},center:{value:new THREE.Vector2()},groundY:{value:GROUND_Y},
  time:{value:0},carMin:{value:new THREE.Vector3()},carMax:{value:new THREE.Vector3()},
  deckRect:{value:Array.from({length:DECKS},()=>new THREE.Vector4(1,1,-1,-1))},deckTop:{value:new Array(DECKS).fill(GROUND_Y)}};
 const reducedQuery=typeof matchMedia==='function'?matchMedia('(prefers-reduced-motion: reduce)'):null;
 const ground=createWeatherGround(world);
 const stats={mainRenders:0,gatedRenders:0,warmingDraws:0};
 let weather='default',reduced=!!reducedQuery?.matches,lastTime=0,disposed=false,carKey='',deckRoot=null,view=null,warming=false;
 const decks=new WeakMap();
 const sceneId=()=>world.current??world.state?.id;
 const effective=()=>(weather==='rain'||weather==='snow')&&sceneId()&&!SUPPRESSED_IDS.includes(sceneId())?weather:null;
 const tone=()=>world.state?.mode==='dark'?'dark':'light';

 // Raised road decks (e.g. the 8.5m elevated road) as xz rectangles with a top height.
 const box=new THREE.Box3(),part=new THREE.Box3();
 const syncDecks=()=>{
  const root=world.root;if(root===deckRoot)return;deckRoot=root;
  if(root&&!decks.has(root)){
   const found=[],surfaces=['road','curb','pavement'].map(k=>world.mat?.[k]).filter(Boolean);
   root.updateMatrixWorld(true);
   root.traverse(o=>{if(!o.isMesh||!surfaces.includes(o.material))return;part.setFromObject(o);if(part.max.y>1&&part.max.y-part.min.y<3)found.push(part.clone());});
   found.sort((a,b)=>(b.max.x-b.min.x)*(b.max.z-b.min.z)-(a.max.x-a.min.x)*(a.max.z-a.min.z));
   decks.set(root,found.slice(0,DECKS).map(b=>({rect:[b.min.x,b.min.z,b.max.x,b.max.z],top:b.max.y})));
  }
  const list=root?decks.get(root):[];
  for(let i=0;i<DECKS;i++){const d=list[i];if(d){frame.deckRect.value[i].set(...d.rect);frame.deckTop.value[i]=d.top;}else{frame.deckRect.value[i].set(1,1,-1,-1);frame.deckTop.value[i]=GROUND_Y;}}
 };
 const surfaceY=(x,z)=>{let y=GROUND_Y;for(let i=0;i<DECKS;i++){const r=frame.deckRect.value[i];if(x>r.x&&x<r.z&&z>r.y&&z<r.w)y=Math.max(y,frame.deckTop.value[i]);}return y;};

 // Window center: where the render camera's view ray meets the surface below it,
 // kept within reach so near drops stay covered in road views and the car in BEV.
 const syncCamera=(camera,k)=>{
  const e=camera.matrixWorld.elements,pos=frame.camPos.value.set(e[12],e[13],e[14]),fwd=frame.camForward.value.set(-e[8],-e[9],-e[10]).normalize();
  const size=k.field[0],minReach=size/2-6,maxReach=size*.9,flat=Math.hypot(fwd.x,fwd.z),base=surfaceY(pos.x,pos.z),height=Math.max(0,pos.y-base);
  let reach=minReach;if(fwd.y< -.02&&flat>.05)reach=THREE.MathUtils.clamp(height/-fwd.y*flat,minReach,maxReach);
  if(flat>.05)frame.center.value.set(pos.x+fwd.x/flat*reach,pos.z+fwd.z/flat*reach);else frame.center.value.set(pos.x,pos.z);
  const focus=Math.hypot(flat>.05?reach:0,height),far=THREE.MathUtils.clamp(focus*1.45,k.far,MAX_FAR);
  view={camera:pos.toArray(),surfaceUnderCamera:base,heightAboveSurface:height,center:frame.center.value.toArray(),reach:flat>.05?reach:0,focus,far};
  return far;
 };
 const syncCar=()=>{
  const car=world.car,key=car&&car.visible?car.matrixWorld.elements.join(',')+car.children.map(c=>c.uuid).join(','):'none';
  if(key===carKey)return;carKey=key;
  if(key==='none'){frame.carMin.value.setScalar(1e6);frame.carMax.value.setScalar(-1e6);return;}
  box.setFromObject(car).expandByScalar(.04);frame.carMin.value.copy(box.min);frame.carMax.value.copy(box.max);
 };

 const build=kind=>{
  const k=KIND[kind],count=k.count,s=seeds(count,kind==='rain'?0x5eed24:0x5a0f24),geometry=new THREE.BufferGeometry();
  if(kind==='rain'){
   // Two vertices per streak share seeds; tip 0 is the tail, 1 the head.
   const a=new Float32Array(count*8),b=new Float32Array(count*8),tip=new Float32Array(count*2);
   for(let i=0;i<count;i++)for(let j=0;j<2;j++){a.set(s.a.subarray(i*4,i*4+4),(i*2+j)*4);b.set(s.b.subarray(i*4,i*4+4),(i*2+j)*4);tip[i*2+j]=j;}
   geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(count*6),3));geometry.setAttribute('seedA',new THREE.BufferAttribute(a,4));geometry.setAttribute('seedB',new THREE.BufferAttribute(b,4));geometry.setAttribute('tip',new THREE.BufferAttribute(tip,1));
  }else{
   geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(count*3),3));geometry.setAttribute('seedA',new THREE.BufferAttribute(s.a,4));geometry.setAttribute('seedB',new THREE.BufferAttribute(s.b,4));
  }
  const uniforms={...frame,drawEnabled:{value:0},field:{value:new THREE.Vector3(k.field[0],k.field[1],k.field[0])},depthFade:{value:new THREE.Vector2(k.near,k.far)},wind:{value:new THREE.Vector3(...k.wind)},speedRange:{value:new THREE.Vector2(...k.speed)},sizeRange:{value:new THREE.Vector2(...k.size)},color:{value:new THREE.Color()},opacity:{value:1}};
  if(kind==='snow')Object.assign(uniforms,{pixelScale:{value:1},sway:{value:.4}});
  const material=new THREE.ShaderMaterial({uniforms,vertexShader:kind==='rain'?rainVertex:snowVertex,fragmentShader:kind==='rain'?rainFragment:snowFragment,transparent:true,depthTest:true,depthWrite:false,fog:false,lights:false});
  const object=kind==='rain'?new THREE.LineSegments(geometry,material):new THREE.Points(geometry,material);
  object.name='precipitation-'+kind;object.userData.informationOverlay=true;object.frustumCulled=false;object.castShadow=false;object.receiveShadow=false;object.visible=false;
  // After paths, contact shadows and other blended overlays.
  object.renderOrder=10;
  const size=new THREE.Vector2();
  // The renderer has already updated this camera's matrixWorld for this exact
  // render, so the window follows the drawn view, never a previous frame.
  object.onBeforeRender=(renderer,scene,camera)=>{
   const on=!warming&&camera===world.camera&&effective()===kind;if(warming)stats.warmingDraws++;uniforms.drawEnabled.value=on?1:0;
   if(on){
    stats.mainRenders++;syncDecks();uniforms.depthFade.value.y=syncCamera(camera,k);syncCar();
    const t=tone();uniforms.color.value.copy(k.color[t]);uniforms.opacity.value=k.opacity[t]*WEATHER_STRENGTH;
    if(uniforms.pixelScale){const target=renderer.getRenderTarget();uniforms.pixelScale.value=(target?target.height:renderer.getDrawingBufferSize(size).y)*camera.projectionMatrix.elements[5]/2;}
   }else stats.gatedRenders++;
   material.uniformsNeedUpdate=true;
  };
  group.add(object);
  return {object,material,geometry,count,uniforms,seeds:s};
 };
 const layers={rain:build('rain'),snow:build('snow')};

 const sync=()=>{
  const kind=effective();
  for(const [name,layer]of Object.entries(layers)){layer.object.visible=warming||kind===name;layer.geometry.setDrawRange(0,(reduced?KIND[name].reduced:KIND[name].count)*(name==='rain'?2:1));}
  group.visible=warming||!!kind;
  if(group.parent!==world.scene)world.scene.add(group);
  ground.update({kind,amount:GROUND_AMOUNT,root:world.root,dark:tone()==='dark'});
  return kind;
 };
 sync();

 const api={
  warm(value){warming=!!value;sync();},
  update(next){
   if(disposed)return null;
   if(!WEATHERS.includes(next))throw new TypeError(`weather must be one of ${WEATHERS.join(', ')}`);
   weather=next;return {weather,effective:sync()};
  },
  beforeRender(time){
   if(disposed)return;
   reduced=!!reducedQuery?.matches;
   // Reduced motion freezes a sparse frame; otherwise time wraps every PERIOD seconds, seamlessly.
   lastTime=reduced?0:((Number(time)||0)/1000)%PERIOD;frame.time.value=lastTime;
   sync();
  },
  audit(){
   const id=sceneId(),kind=disposed?null:effective(),camera=world.camera,result={
    weather,scene:id,effective:kind,strength:WEATHER_STRENGTH,particleOpacity:kind?KIND[kind].opacity[tone()]*WEATHER_STRENGTH:0,indoorSuppressed:(weather==='rain'||weather==='snow')&&SUPPRESSED_IDS.includes(id),reducedMotion:reduced,time:lastTime,disposed,
    attached:group.parent===world.scene&&group.parent!==world.root,
    counts:{rain:KIND.rain.count,snow:KIND.snow.count,drawn:kind?(reduced?KIND[kind].reduced:KIND[kind].count):0},
    renders:{...stats},
    flags:Object.values(layers).every(l=>l.object.userData.informationOverlay&&l.material.depthTest&&!l.material.depthWrite&&!l.object.castShadow&&!l.object.receiveShadow)&&group.userData.informationOverlay===true,
    ground:ground.audit(),
    untouched:{fog:true,sky:true,lights:true}
   };
   if(!kind||!camera)return result;
   // Replays the shader placement for the current camera and time.
   camera.updateMatrixWorld();syncDecks();const k=KIND[kind],far=syncCamera(camera,k);syncCar();
   const layer=layers[kind],c=frame.center.value,[S,H]=k.field,bands={top:0,middle:0,bottom:0},p=new THREE.Vector3(),q=new THREE.Vector3(),fwd=frame.camForward.value;
   let offscreen=0,faded=0,surfaceHidden=0,deckHidden=0,insideCar=0,penetrating=0;
   const inCar=v=>v.x>frame.carMin.value.x&&v.x<frame.carMax.value.x&&v.y>frame.carMin.value.y&&v.y<frame.carMax.value.y&&v.z>frame.carMin.value.z&&v.z<frame.carMax.value.z;
   for(let i=0;i<result.counts.drawn;i++){
    const sa=layer.seeds.a.subarray(i*4,i*4+4),sb=layer.seeds.b.subarray(i*4,i*4+4),speed=periodic(THREE.MathUtils.lerp(k.speed[0],k.speed[1],sb[0]),H);
    p.set(wrapAround(sa[0]*S+k.wind[0]*lastTime,c.x,S),GROUND_Y+THREE.MathUtils.euclideanModulo(sa[1]*H-speed*lastTime,H),wrapAround(sa[2]*S+k.wind[2]*lastTime,c.y,S));
    const edge=(1-smoothstep(.8,1,Math.max(Math.abs(p.x-c.x),Math.abs(p.z-c.y))/(S/2)))*(1-smoothstep(.88,1,(p.y-GROUND_Y)/H));
    const top=surfaceY(p.x,p.z);
    if(p.y<top){surfaceHidden++;if(top>GROUND_Y)deckHidden++;continue;}
    if(kind==='rain'){q.set(-k.wind[0],speed,-k.wind[2]).normalize().multiplyScalar(THREE.MathUtils.lerp(k.size[0],k.size[1],sb[1])).add(p);if(inCar(p)||inCar(q)){insideCar++;continue;}}
    else if(inCar(p)){insideCar++;continue;}
    const depth=q.copy(p).sub(frame.camPos.value).dot(fwd),alpha=edge*smoothstep(k.near,k.near+2.5,depth)*(1-smoothstep(far*.65,far,depth));
    if(alpha<.003){faded++;continue;}
    if(p.y<surfaceY(p.x,p.z)-1e-4)penetrating++;
    p.project(camera);
    if(Math.abs(p.x)>1||Math.abs(p.y)>1||p.z>1){offscreen++;continue;}
    bands[p.y>1/3?'top':p.y< -1/3?'bottom':'middle']++;
   }
   result.layout={kind,screenBands:bands,onScreen:bands.top+bands.middle+bands.bottom,offscreen,faded,surfaceHidden,deckHidden,insideCarHidden:insideCar,penetrating,
    field:{size:S,height:H,groundY:GROUND_Y,decks:(decks.get(world.root)||[]).map(d=>({...d})),...view},note:'snow sway and building occlusion are not included'};
   return result;
  },
  dispose(){
   if(disposed)return;disposed=true;
   group.removeFromParent();ground.dispose();
   for(const layer of Object.values(layers)){layer.geometry.dispose();layer.material.dispose();}
  }
 };
 return api;
}
