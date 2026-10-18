import * as THREE from 'three';
import {createPrecipitation,WEATHER_STRENGTH} from './precipitation.js';
import {PATH_MOTION_KEY,readPathMotion,savePathMotion,normalizePathMotion,pathMotionDuration,pathMotionTimeline,pathMotionFrame} from './path-motion.js';
import {MOTION_TIME_SCALE} from '../motion-config.js';

// Version features: lane path, research-based road paint and weather.
// All overlays synchronise immediately before the original render.

const LANE=3.7,JUNCTION_Z=-40,JUNCTION_HALF=LANE*3;
const LANE_PATH_IDS=['02','09','03','07'],JUNCTION_IDS=['05','08'];
const PARKING_IDS=['10','14','15','16','17','18','19'],INDOOR_IDS=['10','14','16','15'];
const PATH_HALF_WIDTH=.5,PATH_FAR_RATIO=1.,PATH_NEAR_RATIO=1.,PATH_WIDEN_DISTANCE=18,PATH_LIFT=.022,PATH_FRONT_GAP=-.65,PATH_REACH=80;
const ARROW_LIFT=.039,CITY_ARROW_LENGTH=4.5;
export const weatherOptions=Object.freeze(['default','overcast','rain','snow']);

// Match study.css --accent after the world's ACES output pass. Information
// color uses display-referred tokens; road/vehicle materials keep their lighting.
const PATH_THEME={light:'#168aef',dark:'#279df5'};
function accentRadiance(hex){
 const c=new THREE.Color(hex),input=new THREE.Matrix3().set(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),output=new THREE.Matrix3().set(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);
 const v=new THREE.Vector3(c.r,c.g,c.b).applyMatrix3(output.invert());
 const fit=x=>(x*(x+.0245786)-.000090537)/(x*(.983729*x+.432951)+.238081);
 for(const k of ['x','y','z']){let lo=0,hi=64;for(let i=0;i<40;i++){const mid=(lo+hi)/2;if(fit(mid)<v[k])lo=mid;else hi=mid}v[k]=(lo+hi)/2;}
 v.applyMatrix3(input.invert()).multiplyScalar(.6);
 return new THREE.Color().setRGB(v.x,v.y,v.z,THREE.LinearSRGBColorSpace);
}
const PATH_COLOR=Object.fromEntries(Object.entries(PATH_THEME).map(([tone,hex])=>[tone,accentRadiance(hex)])),PATH_OPACITY={light:1,dark:1};
const PATH_PALETTE={light:{nearColor:'#2876dc',midColor:'#168aef',farColor:'#477fc5',edgeColor:'#95c8ff',sweepColor:'#65b2ff'},dark:{nearColor:'#2d6ed0',midColor:'#279df5',farColor:'#477fc5',edgeColor:'#62aaf6',sweepColor:'#65b2ff'}};
const PATH_RADIANCE=Object.fromEntries(Object.entries(PATH_PALETTE).map(([tone,palette])=>[tone,Object.fromEntries(Object.entries(palette).map(([key,hex])=>[key,accentRadiance(hex)]))]));
const PATH_RETRACT_MS=180*MOTION_TIME_SCALE,PATH_EDGE_WIDTH=.045,PATH_PARTICLE_SPACING=.96;
const PATH_SWEEP_KEYS=[[240,0],[280,.10],[320,.267],[360,.369],[400,.513],[440,.559],[480,.605],[520,.641],[560,.672],[600,.728],[640,.749],[680,.774],[720,.790],[760,.805],[800,.831],[840,.841],[880,.851],[920,.862],[1040,.900],[1160,.940],[1320,1]];
const sweepSlopes=PATH_SWEEP_KEYS.slice(1).map(([time,progress],index)=>(progress-PATH_SWEEP_KEYS[index][1])/(time-PATH_SWEEP_KEYS[index][0]));
const sweepTangents=PATH_SWEEP_KEYS.map((point,index)=>index===0?sweepSlopes[0]:index===PATH_SWEEP_KEYS.length-1?sweepSlopes.at(-1):2*sweepSlopes[index-1]*sweepSlopes[index]/(sweepSlopes[index-1]+sweepSlopes[index]));
function referenceSweep(elapsed){
 if(elapsed<=PATH_SWEEP_KEYS[0][0])return 0;
 for(let index=1;index<PATH_SWEEP_KEYS.length;index++){
  const [time,progress]=PATH_SWEEP_KEYS[index];
  if(elapsed>=time)continue;
  const [previousTime,previousProgress]=PATH_SWEEP_KEYS[index-1],span=time-previousTime,phase=(elapsed-previousTime)/span,squared=phase*phase,cubed=squared*phase;
  return (2*cubed-3*squared+1)*previousProgress+(cubed-2*squared+phase)*sweepTangents[index-1]*span+(-2*cubed+3*squared)*progress+(cubed-squared)*sweepTangents[index]*span;
 }
 return 1;
}
// Weather only re-tints the sky above the horizon and adds a distant cloud band.
// The horizon keeps the original bottom color, which the unchanged fog matches.
const preset=(top,light,shade,coverage,opacity)=>({top:new THREE.Color(top),light:new THREE.Color(light),shade:new THREE.Color(shade),coverage,opacity});
const WEATHER={
 overcast:{light:preset('#aebccb','#eef1f4','#c4ccd5',.62,.55),dark:preset('#2b2d31','#45484d','#33363a',.62,.5)},
 rain:{light:preset('#8f9cab','#bcc4cd','#8c96a2',.78,.7),dark:preset('#1d1f22','#34373b','#26282b',.78,.6)},
 snow:{light:preset('#cdd5de','#f4f6f8','#d6dce3',.66,.55),dark:preset('#34373b','#55585d','#43464a',.66,.5)}
};

const pathVertex='attribute float pathS;attribute float pathSide;varying float vS;varying float vSide;\n'+THREE.ShaderLib.shadow.vertexShader.replace('void main() {','void main() {vS=pathS;vSide=pathSide;');
const pathFragment=THREE.ShaderLib.shadow.fragmentShader.replace('void main() {',`uniform float startS;uniform float endS;uniform float farRatio;uniform float contactMin;uniform vec3 edgeColor;uniform vec3 nearColor;uniform vec3 midColor;uniform vec3 farColor;uniform vec3 sweepColor;uniform float activation;uniform float nearDepth;uniform float farDepth;varying float vS;varying float vSide;
float pathEase(float value){return 1.-pow(1.-clamp(value,0.,1.),3.);}
uniform float sweepProgress;
uniform float edgeBlend;uniform float motionElapsed;uniform float motionPreset;uniform float motionAppearance;uniform float motionOutline;uniform float motionFill;uniform float motionFeather;uniform float motionHandoff;uniform float motionParticles;uniform float motionBandLength;uniform float motionBandBlend;
void main() {`).replace('gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );',`
 float t=(vS-startS)/max(endS-startS,.001);if(t<0.||t>1.)discard;
 float projected=clamp(t*farDepth/max(mix(nearDepth,farDepth,t),.001),0.,1.);
 float elapsed=motionElapsed;
 float appearance=motionPreset>.5?motionAppearance:pathEase(elapsed/200.);
 float outline=(motionPreset>.5?motionOutline:pathEase(elapsed/160.))*(1.-smoothstep(appearance-.06,appearance+.06,projected));
 float sweep=sweepProgress;
 float fill=(1.-smoothstep(sweep-motionFeather,sweep+motionFeather,projected))*(motionPreset>.5?motionFill:smoothstep(60.,120.,elapsed));
 float settle=smoothstep(projected-motionHandoff*.4,projected+motionHandoff*(motionPreset>.5?.55:1.),sweep);
 float aa=max(fwidth(vSide),.012),edge=1.-smoothstep(farRatio-aa,farRatio+aa,abs(vSide));
 float fadeT=clamp((t-.38)/.62,0.,1.);float tail=1.-fadeT*fadeT*fadeT*(fadeT*(fadeT*6.-15.)+10.);
 float head=smoothstep(0.,.18,vS-startS);
 float contact=mix(contactMin,1.,smoothstep(0.,4.8,vS-startS));
 float shadow=mix(.72,1.,getShadowMask());
 float rim=smoothstep(${(1-PATH_EDGE_WIDTH/PATH_HALF_WIDTH).toFixed(2)}-aa,${(1-PATH_EDGE_WIDTH/PATH_HALF_WIDTH).toFixed(2)}+aa,abs(vSide));
 vec3 surface=mix(nearColor,midColor,smoothstep(.02,.52,projected));
 surface=mix(surface,farColor,smoothstep(.56,1.,projected));
 vec2 cells=vec2(vSide*1.8,(vS-startS)/${PATH_PARTICLE_SPACING.toFixed(2)});
 vec2 cell=fract(cells+.5)-.5;
 float dotDistance=length(cell),dotAA=max(length(fwidth(cells)),.025);
 float dots=(1.-smoothstep(.16-dotAA,.16+dotAA,dotDistance))*(1.-smoothstep(.72,.84,abs(vSide)));
 dots*=1.-smoothstep(.35,.8,dotAA);
 float particles=outline*(1.-settle)*motionParticles;
 float sweepBand=fill*exp(-max(sweep-projected,0.)/motionBandLength)*(motionPreset>.5?motionBandBlend:.25*smoothstep(80.,200.,elapsed)*(1.-smoothstep(400.,1160.,elapsed)));
 surface=mix(surface,sweepColor,sweepBand);
 surface=mix(surface,edgeColor,rim*edgeBlend*(1.-smoothstep(.65,1.,projected)));
 float particleShade=.42;
 surface=mix(surface,sweepColor,max(particleShade,0.)*dots*particles);
 surface*=1.+min(particleShade,0.)*dots*particles;
 float foundation=outline*.21;
 float coverage=max(mix(foundation,.92,fill),max(rim*outline*.38,dots*particles*.7));
 gl_FragColor=vec4(surface*contact*shadow,opacity*edge*head*tail*coverage);
`).replace('#include <tonemapping_fragment>','').replace('#include <fog_fragment>','');
const skyVertex='varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}';
const skyFragment=`varying vec3 v;uniform vec3 top;uniform vec3 bottom;uniform float range;uniform vec3 weatherTop;uniform vec3 cloudLight;uniform vec3 cloudShade;uniform float amount;uniform float coverage;uniform float cloudOpacity;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*noise(p);p=p*2.03+vec2(17.1,9.2);a*=.5;}return s;}
void main(){
 vec3 d=normalize(v);
 float t=smoothstep(0.,range,d.y);
 vec3 color=mix(bottom,top,t);
 float lift=smoothstep(0.,.07,d.y)*amount;
 color=mix(color,mix(bottom,weatherTop,t),lift);
 vec2 q=d.xz/(d.y+.12);
 float cloud=smoothstep(1.-coverage,1.32-coverage,fbm(q*1.45+vec2(3.,7.)));
 float band=smoothstep(.015,.06,d.y)*(1.-smoothstep(.16,.34,d.y));
 vec3 cloudColor=mix(cloudLight,cloudShade,.7*smoothstep(.35,.85,fbm(q*3.1+11.)));
 color=mix(color,cloudColor,cloud*band*cloudOpacity*amount);
 gl_FragColor=vec4(color,1.0);
 #include <colorspace_fragment>
}`;

const mirror=shape=>shape.map(([u,v])=>[-u,v]).reverse();
// Local arrow outlines: u is lateral (right), v is forward from the tail, metres.
// GB 5768.3-2025, 5.13 / figure 43: 6m urban/ramp arrows,
// .30m shaft, 2.40m straight head, 45-degree turn branches. Dimensions in metres.
const LEFT=[[-.15,0],[.15,0],[.15,3.9],[-1.05,5.1],[-1.05,6],[-1.45,4.3],[-1.05,2.8],[-1.05,3.9],[-.15,3.0]];
const STRAIGHT_LEFT=[[-.15,0],[.15,0],[.15,3.6],[.45,3.6],[0,6],[-.45,3.6],[-.15,3.6],[-.15,1.6],[-.95,2.4],[-.95,3.4],[-1.35,1.8],[-.95,.3],[-.95,1.2],[-.15,.4]];
const MERGE_LEFT=[[-.15,0],[.15,0],[.14,.9],[.07,1.7],[-.08,2.5],[-.3,3.2],[-.02,3.32],[-1.2,6],[-1.34,3.0],[-.59,3.12],[-.38,2.42],[-.23,1.65],[-.16,.88]];
const ARROW_SHAPES={
 straight:[[-.15,0],[.15,0],[.15,3.6],[.45,3.6],[0,6],[-.45,3.6],[-.15,3.6]],
 left:LEFT,right:mirror(LEFT),straightLeft:STRAIGHT_LEFT,straightRight:mirror(STRAIGHT_LEFT),mergeLeft:MERGE_LEFT
};

// Centre the complete road symbol, including its branch, within its lane.
// Junctions use the 4.5m urban family (GB 5768.3-2025 figure 45).
function arrowOutline(arrow){
 const scale=arrow.scale??1,shape=ARROW_SHAPES[arrow.kind],xs=shape.map(p=>p[0]),mid=(Math.min(...xs)+Math.max(...xs))/2;
 return shape.map(([u,v])=>[(u-mid)*scale,v*scale]);
}

function cumulative(points){const cum=[0];for(let i=1;i<points.length;i++)cum.push(cum[i-1]+Math.hypot(points[i][0]-points[i-1][0],points[i][1]-points[i-1][1]));return cum;}
function locate(points,cum,x,z){
 let best=Infinity,s=0;
 for(let i=0;i<points.length-1;i++){const [ax,az]=points[i],[bx,bz]=points[i+1],dx=bx-ax,dz=bz-az,t=Math.min(1,Math.max(0,((x-ax)*dx+(z-az)*dz)/(dx*dx+dz*dz||1))),px=ax+dx*t-x,pz=az+dz*t-z,d=px*px+pz*pz;if(d<best){best=d;s=cum[i]+(cum[i+1]-cum[i])*t;}}
 return s;
}
function sample(points,cum,s){
 let i=1;while(i<cum.length-1&&cum[i]<s)i++;
 const a=points[i-1],b=points[i],t=THREE.MathUtils.clamp((s-cum[i-1])/((cum[i]-cum[i-1])||1),0,1),len=Math.hypot(b[0]-a[0],b[1]-a[1])||1;
 return {x:a[0]+(b[0]-a[0])*t,z:a[1]+(b[1]-a[1])*t,nx:-(b[1]-a[1])/len,nz:(b[0]-a[0])/len};
}
const straight=(x,z0,z1,step)=>{const points=[];for(let z=z0;z>=z1;z-=step)points.push([x,z]);return points;};

// Centerlines follow the lane geometry World builds for each scene.
function pathPlan(world,id){
 const car=world.car.position,x=car.x,y=car.y-.02+PATH_LIFT;
 if(LANE_PATH_IDS.includes(id))return {kind:'lane',x,y,points:straight(x,8,-255,1)};
 if(id==='06')return {kind:'lane',x,y,points:straight(x,8,-255,1)};

 return null;
}

function buildPath(world,id){
 const plan=pathPlan(world,id);if(!plan)return null;
 const {points}=plan,cum=plan.cum||cumulative(points),position=[],s=[],side=[],index=[];
 for(let i=0;i<points.length;i++){
  const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],len=Math.hypot(b[0]-a[0],b[1]-a[1])||1,nx=-(b[1]-a[1])/len,nz=(b[0]-a[0])/len;
  for(const k of [-1,1]){position.push(points[i][0]+nx*PATH_HALF_WIDTH*k,plan.y,points[i][1]+nz*PATH_HALF_WIDTH*k);s.push(cum[i]);side.push(k);}
  if(i<points.length-1){const j=i*2;index.push(j,j+1,j+2,j+1,j+3,j+2);}
 }
 const geometry=new THREE.BufferGeometry();
 geometry.setAttribute('position',new THREE.Float32BufferAttribute(position,3));geometry.setAttribute('normal',new THREE.Float32BufferAttribute(position.map((_,i)=>i%3===1?1:0),3));
 geometry.setAttribute('pathS',new THREE.Float32BufferAttribute(s,1));geometry.setAttribute('pathSide',new THREE.Float32BufferAttribute(side,1));geometry.setIndex(index);
 const material=new THREE.ShaderMaterial({uniforms:THREE.UniformsUtils.merge([THREE.ShaderLib.shadow.uniforms,{color:{value:new THREE.Color()},...Object.fromEntries(Object.entries(PATH_RADIANCE.light).map(([key,value])=>[key,{value:value.clone()}])),activation:{value:1},nearDepth:{value:1},farDepth:{value:80},opacity:{value:PATH_OPACITY.light},startS:{value:0},endS:{value:1},farRatio:{value:PATH_FAR_RATIO},contactMin:{value:.72}}]),vertexShader:pathVertex,fragmentShader:pathFragment,lights:true,toneMapped:false,transparent:true,depthWrite:false,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-2});
 const mesh=new THREE.Mesh(geometry,material);
 material.uniforms.sweepProgress={value:1};
 material.uniforms.edgeBlend={value:.52};
 for(const [key,value]of Object.entries({motionElapsed:1320,motionPreset:0,motionAppearance:1,motionOutline:1,motionFill:1,motionFeather:.06,motionHandoff:.085,motionParticles:1,motionBandLength:.60,motionBandBlend:0}))material.uniforms[key]={value};
 // Information ribbon sits above road paint; vehicle depth and contact remain above it.
 mesh.renderOrder=5;mesh.castShadow=false;mesh.receiveShadow=true;mesh.visible=false;mesh.name='version-path';mesh.userData.informationOverlay=true;
 return {mesh,material,plan,points,cum,total:cum.at(-1),startS:0,endS:0,locateKey:null,blocked:false};
}

// Chosen traffic assignment, not a universal rule for every three-lane junction.
// The first head is 3m before the stop line; repeat 37.5m upstream at the solid-lane entry.
function arrowPlan(id){
 const cross=id==='05',approaches=[
  {heading:[0,-1],stop:17.45,kinds:cross?['left','straight','straightRight']:['left','left','right']},
  {heading:[-1,0],stop:17.25,kinds:cross?['left','straight','straightRight']:['left','straight','straight']},
  {heading:[1,0],stop:17.25,kinds:cross?['left','straight','straightRight']:['straight','straight','straightRight']}
 ];
 if(cross)approaches.push({heading:[0,1],stop:17.45,kinds:['left','straight','straightRight']});
 const arrows=[];
 for(const {heading:[hx,hz],stop,kinds}of approaches)for(const repeat of [0,37.5])kinds.forEach((kind,lane)=>{
  const offset=LANE*(lane+.5),d=stop+3+CITY_ARROW_LENGTH/2+repeat,x=-hx*d-hz*offset,z=JUNCTION_Z-hz*d+hx*offset;
  arrows.push({kind,scale:.75,lane:['inner','middle','outer'][lane],heading:[hx,hz],center:[x,z],tail:[x-hx*CITY_ARROW_LENGTH/2,z-hz*CITY_ARROW_LENGTH/2],far:Math.abs(x)<15.1&&z< -50});
 });
 return arrows;
}
function rampArrowPlan(id){
 const arrows=[];
 if(id==='06'){
  // Mainline choice before the exit opens: straight / straight / straight-or-exit.
  for(const z of [0,30,60])for(const [i,x]of [-3.7,0,3.7].entries())arrows.push({kind:i===2?'straightRight':'straight',lane:String(i+1),heading:[0,-1],center:[x,z],tail:[x,z+3],far:false});
 }else{
  // Incoming branch bends left into the mainline; never paint a perpendicular turn.
  for(const q of [40,52])for(const offset of [-1.85,1.85]){
   const slope=.018*q,n=Math.sqrt(1+slope*slope),hx=-slope/n,hz=-1/n,x=1.85+.009*q*q-hz*offset,z=q-60+hx*offset;
   arrows.push({kind:'mergeLeft',lane:offset<0?'inner':'outer',heading:[hx,hz],center:[x,z],tail:[x-hx*3,z-hz*3],far:true});
  }
 }
 return arrows;
}
function pushTriangle(position,a,b,c){
 // Face upward regardless of the outline winding.
 if((b[2]-a[2])*(c[0]-a[0])-(b[0]-a[0])*(c[2]-a[2])<0)[b,c]=[c,b];
 position.push(...a,...b,...c);
}
function flatGeometry(position,mask){
 const geometry=new THREE.BufferGeometry(),count=position.length/3;
 geometry.setAttribute('position',new THREE.Float32BufferAttribute(position,3));
 geometry.setAttribute('normal',new THREE.Float32BufferAttribute(Array.from({length:count},()=>[0,1,0]).flat(),3));
 geometry.setAttribute('uv',new THREE.Float32BufferAttribute(new Float32Array(count*2),2));
 // Marks as paint for World.prepareStructureOffsets: it stays put and fades.
 geometry.setAttribute('structurePaintMask',new THREE.Float32BufferAttribute(new Float32Array(count).fill(mask),1));
 return geometry;
}
function arrowGeometry(arrows,y,mask){
 const position=[];
 for(const arrow of arrows){
  const {heading:[hx,hz],tail:[tx,tz]}=arrow,shape=arrowOutline(arrow),world=shape.map(([u,v])=>[tx-hz*u+hx*v,y,tz+hx*u+hz*v]);
  for(const [a,b,c]of THREE.ShapeUtils.triangulateShape(shape.map(([u,v])=>new THREE.Vector2(u,v)),[]))pushTriangle(position,world[a],world[b],world[c]);
 }
 return flatGeometry(position,mask);
}
function rectGeometry(rects,y){
 const position=[];
 for(const [x0,x1,z0,z1]of rects){const a=[x0,y,z0],b=[x1,y,z0],c=[x1,y,z1],d=[x0,y,z1];pushTriangle(position,a,b,c);pushTriangle(position,a,c,d);}
 return flatGeometry(position,0);
}
function paintMaterial(world,transparent,factor){
 // Same shader hooks and color family as World road paint.
 const source=world.mat.white,material=source.clone();
 material.onBeforeCompile=source.onBeforeCompile;material.customProgramCacheKey=source.customProgramCacheKey;material.defaultAttributeValues=source.defaultAttributeValues;
 material.transparent=transparent;material.depthWrite=!transparent;material.polygonOffset=true;material.polygonOffsetFactor=factor;material.polygonOffsetUnits=factor*2;
 return material;
}
function flatMesh(geometry,material,name){const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=false;mesh.receiveShadow=false;mesh.name=name;return mesh;}

function revealEase(x){
 let lo=0,hi=1,t=x;
 for(let i=0;i<12;i++){const u=1-t,at=3*u*u*t*.23+3*u*t*t*.32+t*t*t;if(at<x)lo=t;else hi=t;t=(lo+hi)/2;}
 return 1-(1-t)**3;
}
export function installVersionFeatures(world){
 if(world.versionFeatures)return world.versionFeatures;
 const precipitation=createPrecipitation(world);
 const params={path:false,weather:'default'},roots=new WeakMap(),counts={created:0,released:0};
 const originalRender=world.renderFrame,originalPrepared=world.renderPreparedFrame;
 const weatherUniforms=()=>({top:{value:new THREE.Color()},bottom:{value:new THREE.Color()},range:{value:.2},weatherTop:{value:new THREE.Color()},cloudLight:{value:new THREE.Color()},cloudShade:{value:new THREE.Color()},amount:{value:0},coverage:{value:0},cloudOpacity:{value:0}});
 const skyMaterial=uniforms=>new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms,vertexShader:skyVertex,fragmentShader:skyFragment});
 const weatherMaterial=skyMaterial(weatherUniforms()),warmMaterial=skyMaterial(weatherUniforms());
 let lastError=null,lastWeather='default',animationFrame=0,lastTick=0;
 const pathReveal={value:0,from:0,to:0,start:0,duration:0,closingActivation:1};
 let pathMotion=readPathMotion();
 const motionFrame={};
 const pathDepthPoint=new THREE.Vector3();
 const reduced=()=>globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 const revealAt=time=>{
  if(!pathReveal.duration)return pathReveal.value;
  const t=THREE.MathUtils.clamp((time-pathReveal.start)/pathReveal.duration,0,1),e=pathReveal.to===1?t:(t===1?1:revealEase(t));
  pathReveal.value=THREE.MathUtils.lerp(pathReveal.from,pathReveal.to,e);
  if(t===1)pathReveal.duration=0;
  return pathReveal.value;
 };
 const queueFrame=()=>{
  if(!world.state||world.initializingScene||animationFrame||globalThis.document?.hidden||world.suspended||reduced())return;
  if(!pathReveal.duration&&!['rain','snow'].includes(effectiveWeather(sceneId())))return;
  animationFrame=requestAnimationFrame(time=>{animationFrame=0;if(!world.state||world.initializingScene)return;if(pathReveal.duration||time-lastTick>=1000/30){lastTick=time;if(!world.cameraMotion&&!world.layoutMotion&&!world.environmentMotion&&!world.structureMotion)world.renderFrame();}queueFrame();});
 };

 const sceneId=()=>world.current??world.state?.id;
 const effectiveWeather=id=>INDOOR_IDS.includes(id)?'default':params.weather;
 const release=data=>{data.group.removeFromParent();data.group.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});counts.released++;};
 const create=(id,key)=>{
  const group=new THREE.Group();group.name='version-features';group.userData.versionFeatures=true;
  const data={key,id,group,path:null,arrows:null,bays:null};
  if(!PARKING_IDS.includes(id)){data.path=buildPath(world,id);if(data.path)group.add(data.path.mesh);}
  if(JUNCTION_IDS.includes(id)||['06','07'].includes(id)){
   const plan=JUNCTION_IDS.includes(id)?arrowPlan(id):rampArrowPlan(id),y=world.car.position.y-.02+ARROW_LIFT,near=plan.filter(a=>!a.far),far=plan.filter(a=>a.far);
   data.arrows={plan,near:flatMesh(arrowGeometry(near,y,0),paintMaterial(world,true,-3),'version-arrows'),far:far.length?flatMesh(arrowGeometry(far,y,1),paintMaterial(world,true,-3),'version-arrows-far'):null};
   group.add(data.arrows.near);if(data.arrows.far)group.add(data.arrows.far);
  }
  world.root.add(group);counts.created++;return data;
 };
 // One group per World root: cached roots keep theirs, evicted roots dispose it.
 const ensure=id=>{
  const root=world.root,key=PARKING_IDS.includes(id)?'parking':id;let data=roots.get(root);
  if(data&&data.key===key&&data.group.parent===root)return data;
  if(data)release(data);
  data=create(id,key);roots.set(root,data);return data;
 };
 const refresh=()=>{
  const state=world.state,id=sceneId();if(!state||!world.root||!id)return null;
  const data=ensure(id),tone=state.mode==='dark'?'dark':'light';
  world.egoContact?.traverse(o=>{if(o.isMesh)o.renderOrder=6;});
  precipitation.update(effectiveWeather(id));precipitation.beforeRender(performance.now());queueFrame();
  const path=data.path;
  if(path){
   const car=world.car.position,length=world.car.userData.vehicleSpec?.length||4.85,ry=world.car.rotation.y,reach=length/2+PATH_FRONT_GAP,fx=car.x-Math.sin(ry)*reach,fz=car.z-Math.cos(ry)*reach,key=fx.toFixed(3)+','+fz.toFixed(3);
   if(path.locateKey!==key){path.locateKey=key;path.startS=locate(path.points,path.cum,fx,fz);}
   let end=Math.min(path.plan.fixedEnd??path.startS+PATH_REACH,path.total-1);
   // A closed ego lane ends the path before the first cone instead of crossing it.
   const zone=world.roadworkZone,works=world.environmentGrowth?.roadworks?.value??0;
   path.blocked=!!(zone&&path.plan.kind==='lane'&&works>.01&&zone.left<path.plan.x+PATH_HALF_WIDTH+.3&&zone.right>path.plan.x-PATH_HALF_WIDTH-.3);
   if(path.blocked)end=Math.min(end,locate(path.points,path.cum,path.plan.x,zone.front+.5));
   path.endS=end;
   const reveal=revealAt(performance.now()),u=path.material.uniforms,closing=pathReveal.to===0;
   const retraction=closing?reveal/Math.max(pathReveal.from,.001):1;
   u.startS.value=path.startS;u.endS.value=path.startS+(end-path.startS)*retraction;u.color.value.copy(PATH_COLOR[tone]);u.opacity.value=PATH_OPACITY[tone];u.contactMin.value=.86;u.activation.value=closing?pathReveal.closingActivation:reveal;
   const elapsed=u.activation.value*pathMotionDuration(pathMotion),motion=pathMotionFrame(elapsed,pathMotion,motionFrame);
   u.motionPreset.value=motion?1:0;u.motionElapsed.value=motion?motion.elapsed:pathMotionTimeline(elapsed,pathMotion);
   u.sweepProgress.value=motion?motion.front:referenceSweep(u.motionElapsed.value+160);
   u.motionAppearance.value=motion?.appearance??1;u.motionOutline.value=motion?.outline??1;u.motionFill.value=motion?.fill??1;
   u.motionFeather.value=motion?.feather??.06;u.motionHandoff.value=motion?.handoff??.085;u.motionParticles.value=motion?.particles??1;
   u.motionBandLength.value=motion?.bandLength??.60;u.motionBandBlend.value=motion?.bandBlend??0;
   if(path.tone!==tone){u.edgeBlend.value=tone==='light'?.34:.72;for(const [key,value]of Object.entries(PATH_RADIANCE[tone]))u[key].value.copy(value);path.tone=tone;}
   const pathStart=sample(path.points,path.cum,path.startS),pathEnd=sample(path.points,path.cum,u.endS.value);
   world.camera.updateMatrixWorld();
   u.nearDepth.value=Math.max(.01,-pathDepthPoint.set(pathStart.x,path.plan.y,pathStart.z).applyMatrix4(world.camera.matrixWorldInverse).z);
   u.farDepth.value=Math.max(.01,-pathDepthPoint.set(pathEnd.x,path.plan.y,pathEnd.z).applyMatrix4(world.camera.matrixWorldInverse).z);
   path.mesh.visible=reveal>.001&&end-path.startS>2;queueFrame();
  }
  if(data.arrows){
   data.arrows.near.material.color.copy(world.mat.white.color);data.arrows.near.material.opacity=.72;
   const far=data.arrows.far;
   if(far){const opacity=.72*(world.structureMotion?world.structurePaintOpacity.value:1);far.material.color.copy(world.mat.white.color);far.material.opacity=opacity;far.visible=opacity>.001;}
  }
  return data;
 };
 const copySky=(target,amount)=>{
  const source=world.sky.material.uniforms,u=target.uniforms;
  u.top.value.copy(source.top.value);u.bottom.value.copy(source.bottom.value);u.range.value=source.range.value;u.amount.value=amount;
 };
 // Swap the sky material only for this render; World.update keeps writing to
 // the original uniforms, so theme changes and default restore are exact.
 const applyWeather=()=>{
  const id=sceneId(),weather=effectiveWeather(id),dark=world.state?.mode==='dark',parking=PARKING_IDS.includes(id);lastWeather=weather;
  world.weatherSignature=weather+'|'+dark;
  world.sun.shadow.radius=weather==='default'?3:5;world.sun.shadow.intensity=(dark?.22:.28)*(weather==='default'?1:weather==='overcast'?.72:.6);
  if(weather==='default'||!world.sky||world.sky.material===weatherMaterial)return null;
  const original=world.sky.material,p=WEATHER[weather][dark?'dark':'light'],u=weatherMaterial.uniforms;
  copySky(weatherMaterial,1);
  // Strengthen the existing color separation by 15%, independently of particles.
  u.weatherTop.value.copy(u.top.value).lerp(p.top,1.15);u.cloudLight.value.copy(p.light);u.cloudShade.value.copy(p.shade);u.coverage.value=p.coverage;u.cloudOpacity.value=p.opacity;
  world.sky.material=weatherMaterial;
  return ()=>{world.sky.material=original;};
 };
 const guarded=fn=>{try{return fn();}catch(error){lastError=String(error?.stack||error);console.error('version-features',error);return null;}};

 world.renderFrame=function(...args){
  const restore=guarded(()=>{refresh();return applyWeather();});
  try{return originalRender.apply(this,args);}finally{restore?.();}
 };
 world.renderPreparedFrame=function(...args){
  // An amount=0 copy renders the exact default sky while compiling the
  // weather program inside the same prepared pass.
  const warm=guarded(()=>{refresh();if(!world.root||!world.sky)return null;copySky(warmMaterial,0);const mesh=new THREE.Mesh(world.sky.geometry,warmMaterial);mesh.frustumCulled=false;mesh.name='version-weather-warm';world.root.add(mesh);return mesh;});
  try{precipitation.warm(true);return originalPrepared.apply(this,args);}finally{precipitation.warm(false);warm?.removeFromParent();}
 };

 const idle=()=>!world.cameraMotion&&!world.layoutMotion&&!world.environmentMotion&&!world.structureMotion;
 const api={
  getPathMotion(){return {...pathMotion};},
  setPathMotion(value,{save=false,elapsedMs=null}={}){pathMotion=save?savePathMotion(value):normalizePathMotion(value);if(elapsedMs!==null&&Number.isFinite(elapsedMs)&&location.hostname==='127.0.0.1'&&new URLSearchParams(location.search).has('qa')){params.path=true;pathReveal.value=THREE.MathUtils.clamp(elapsedMs/pathMotionDuration(pathMotion),0,1);pathReveal.from=pathReveal.value;pathReveal.to=1;pathReveal.duration=0;}if(world.state&&idle())world.renderFrame();return {...pathMotion};},
  set(patch={},{render=true,animate=true}={}){
   for(const [key,value]of Object.entries(patch)){
    if(key==='path'){if(typeof value!=='boolean')throw new TypeError('path must be boolean');}
    else if(key==='weather'){if(!weatherOptions.includes(value))throw new TypeError(`weather must be one of ${weatherOptions.join(', ')}`);}
    else throw new TypeError(`unknown version feature: ${key}`);
   }
   if('path' in patch&&patch.path!==params.path){
    const now=performance.now();revealAt(now);pathReveal.from=pathReveal.value;if(!patch.path)pathReveal.closingActivation=pathReveal.value;pathReveal.to=patch.path?1:0;pathReveal.start=now;pathReveal.duration=(!animate||reduced())?0:(patch.path?pathMotionDuration(pathMotion)*(1-pathReveal.value):PATH_RETRACT_MS);
    if(!pathReveal.duration)pathReveal.value=pathReveal.to;
   }
   Object.assign(params,patch);queueFrame();
   if(render&&world.state&&idle())world.renderFrame();
   return api.get();
  },
  get(){return {...params};},
  motion(){return pathReveal.duration?pathReveal.value:0;},
  animating(){return pathReveal.duration>0;},
  audit(){
   const data=guarded(refresh),id=sceneId();
   const result={params:{...params},precipitation:precipitation.audit(),scene:id,error:lastError,roots:{...counts},
    effective:{path:!!data?.path?.mesh.visible,weather:effectiveWeather(id)},
    weather:{requested:params.weather,effective:effectiveWeather(id),lastRendered:lastWeather,indoorSuppressed:INDOOR_IDS.includes(id)&&params.weather!=='default',skyRestored:world.sky?.material!==weatherMaterial,fogUntouched:true,shadowRadius:world.sun.shadow.radius,shadowIntensity:world.sun.shadow.intensity}};
   const path=data?.path;
   if(path){
    const roads=[];world.root.traverse(o=>{if(o.isMesh&&o.material===world.mat.road)roads.push(o);});
    const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0),span=path.endS-path.startS;let samples=0,misses=0;
    for(let s=path.startS;s<=path.endS;s+=2){
     const p=sample(path.points,path.cum,s),nearT=THREE.MathUtils.clamp((s-path.startS)/PATH_WIDEN_DISTANCE,0,1),nearEase=nearT**3*(nearT*(nearT*6-15)+10),half=PATH_HALF_WIDTH*THREE.MathUtils.lerp(PATH_NEAR_RATIO,PATH_FAR_RATIO,nearEase);
     for(const k of [-1,0,1]){ray.set(new THREE.Vector3(p.x+p.nx*half*k,path.plan.y+5,p.z+p.nz*half*k),down);ray.far=10;samples++;if(!ray.intersectObjects(roads,false).length)misses++;}
    }
    const start=sample(path.points,path.cum,path.startS),end=sample(path.points,path.cum,path.endS);
    result.path={kind:path.plan.kind,visible:path.mesh.visible,reveal:pathReveal.value,revealing:!!pathReveal.duration,themeColor:PATH_THEME[world.state?.mode==='dark'?'dark':'light'],gradient:['nearColor','midColor','farColor'].map(key=>PATH_PALETTE[world.state?.mode==='dark'?'dark':'light'][key]),nearWidth:PATH_HALF_WIDTH*2*PATH_NEAR_RATIO,width:PATH_HALF_WIDTH*2,fadeStart:.38,revealMs:pathMotionDuration(pathMotion),retractMs:PATH_RETRACT_MS,retractReferenceVerified:false,timingMs:{outline:[0,200],baseFill:[80,564],sweep:[80,564],particleFade:[80,564]},sweepEase:'monotone cubic interpolation of 25fps reference front samples',sweepKeyframes:PATH_SWEEP_KEYS,sweepAdvanceMs:160,tailStartMs:400,tailDurationScale:pathMotion.tailMs?pathMotion.tailMs/920:null,sharedFillSweepFront:true,sweepBand:{trailingFalloff:.60,frontFeather:.06,blend:.25},particles:'three-column surface dots handed off locally to the shared fill front without a global fade delay',particleSpacing:PATH_PARTICLE_SPACING,nearContactShade:path.material.uniforms.contactMin.value,edgeColor:PATH_PALETTE[world.state?.mode==='dark'?'dark':'light'].edgeColor,edgeBlend:path.material.uniforms.edgeBlend.value,edgeWidth:PATH_EDGE_WIDTH,receivesDirectionalShadow:true,startS:path.startS,endS:path.endS,length:span,start:[start.x,start.z],end:[end.x,end.z],y:path.plan.y,exit:path.plan.exit||null,blockedByRoadworks:path.blocked,onRoad:{samples,misses},informationOverlay:path.mesh.userData.informationOverlay===true};
    Object.assign(result.path,{motion:{...pathMotion},sweepEase:pathMotion.preset?'single full-duration cubic-bezier front':'reference front with adjustable tail time remapping',sweepAdvanceMs:pathMotion.preset?0:160,tailStartMs:pathMotion.preset?null:400,timingMs:{outline:[0,pathMotion.preset?48:200],baseFill:[0,pathMotionDuration(pathMotion)],sweep:[0,pathMotionDuration(pathMotion)],particleFade:[0,pathMotionDuration(pathMotion)]},motionFrame:pathMotionFrame(pathReveal.value*pathMotionDuration(pathMotion),pathMotion)});
   }else result.path={kind:null,visible:false,reason:PARKING_IDS.includes(id)?'parking':'scene without path'};
   if(data?.arrows){
    const box=new THREE.Box3().setFromObject(world.car),dims=world.junctionDimensions||{},width=(dims.crosswalkCount||14)*(dims.crosswalkSpacing||1.5),depth=dims.crosswalkLength||2.5,nearZ=dims.nearCrosswalk??-27,sideX=JUNCTION_HALF+1.7;
    const crosswalks=JUNCTION_IDS.includes(id)?[[-width/2,width/2,nearZ-depth/2,nearZ+depth/2],...(id==='05'?[[-width/2,width/2,2*JUNCTION_Z-nearZ-depth/2,2*JUNCTION_Z-nearZ+depth/2]]:[]),...[-1,1].map(s=>[s*sideX-depth/2,s*sideX+depth/2,JUNCTION_Z-width/2,JUNCTION_Z+width/2])]:[];
    const overlap=(a,b)=>a[0]<b[1]&&a[1]>b[0]&&a[2]<b[3]&&a[3]>b[2];
    const list=data.arrows.plan.map(a=>{const outline=arrowOutline(a),lateral=outline.map(p=>p[0]),pts=outline.map(([u,v])=>[a.tail[0]-a.heading[1]*u+a.heading[0]*v,a.tail[1]+a.heading[0]*u+a.heading[1]*v]),xs=pts.map(p=>p[0]),zs=pts.map(p=>p[1]),bounds=[Math.min(...xs),Math.max(...xs),Math.min(...zs),Math.max(...zs)];
     return {kind:a.kind,length:6*(a.scale??1),lateralCenter:(Math.min(...lateral)+Math.max(...lateral))/2,lane:a.lane,heading:a.heading,center:a.center,far:a.far,crosswalk:crosswalks.some(c=>overlap(bounds,c)),underVehicle:overlap(bounds,[box.min.x,box.max.x,box.min.z,box.max.z])};});
    const roads=[];world.root.updateMatrixWorld(true);world.root.traverse(o=>{if(o.isMesh&&o.material===world.mat.road)roads.push(o)});
    const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);let samples=0,misses=0;
    for(const a of data.arrows.plan)for(const [u,v]of arrowOutline(a)){const x=a.tail[0]-a.heading[1]*u+a.heading[0]*v,z=a.tail[1]+a.heading[0]*u+a.heading[1]*v;ray.set(new THREE.Vector3(x,world.car.position.y+5,z),down);ray.far=10;samples++;if(!ray.intersectObjects(roads,false).length)misses++;}
    result.arrows={count:list.length,crosswalkOverlaps:list.filter(a=>a.crosswalk).length,underVehicle:list.filter(a=>a.underVehicle).length,onRoad:{samples,misses},farOpacity:data.arrows.far?.material.opacity??null,list};
   }else result.arrows={count:0};
   if(JUNCTION_IDS.includes(id)){const box=new THREE.Box3().setFromObject(world.car),dims=world.junctionDimensions;result.junctionStop={vehicleFront:box.min.z,stopLineNearEdge:dims.markingEnd+dims.stopLineWidth/2,clearance:box.min.z-(dims.markingEnd+dims.stopLineWidth/2),camera:world.camera.position.toArray()};}
   result.parking={bays:world.parkingBays?.length||0,lines:0,wheelStopsKept:true};
   return result;
  }
 };
 globalThis.document?.addEventListener('visibilitychange',()=>{if(!document.hidden){precipitation.beforeRender(performance.now());queueFrame();}});
 world.versionFeatures=api;
 globalThis.addEventListener?.('storage',event=>{if(event.key===PATH_MOTION_KEY)api.setPathMotion(readPathMotion());});
 return api;
}
