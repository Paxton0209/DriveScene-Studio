// Light ground response under falling rain/snow: rain darkens upward-facing
// surfaces with sparse low-angle water sheen, snow adds a thin uneven dusting.
// No extra reflection pass, fog, glass, vehicle or paint changes;
// lane paint and paths keep their own materials and stay crisp on top.
// Shared World materials carry one uniform-gated overlay: amount 0 skips it,
// so clear/overcast output is the original shading and toggles never recompile.
// Current outdoor parking floors join initial warm-up too; amount zero restores
// the original output, and root changes restore their original shader hooks.

const SHARED=['road','ground','pavement','curb','grass','building','environmentBuilding','leaf','leaf2','trunk'];
const KEY='-weather-ground-7';

const overlay=`uniform float weatherAmount;uniform float weatherKind;uniform float weatherTone;uniform vec4 weatherRoad;
float weatherHash(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
float weatherNoise(vec2 q){vec2 i=floor(q),f=fract(q);f=f*f*(3.-2.*f);return mix(mix(weatherHash(i),weatherHash(i+vec2(1.,0.)),f.x),mix(weatherHash(i+vec2(0.,1.)),weatherHash(i+vec2(1.)),f.x),f.y);}
// up: surface normal against world up; facing: normal against the view direction.
vec3 weatherGround(vec3 color,vec3 world,float up,float facing,float roof,vec3 local){
 if(weatherAmount<=0.)return color;
 vec2 drainageUV=vec2((world.x-weatherRoad.x)*11.1/max(weatherRoad.y,1.),world.z);
 float level=smoothstep(.55,.92,up),broad=weatherNoise(world.xz*.11);
 if(weatherKind<1.5){
  if(roof>.5){
   // Wet exposed foliage and walls, with restrained broad vertical runoff.
   float exposed=roof>1.5?(.65+.35*level):(.3+.7*level);
   float streak=weatherNoise(vec2(world.x*.4+world.z*.31,world.y*.08));
   float wet=weatherAmount*exposed*(1.4+.45*streak);
   color*=1.-wet;
   return mix(color,mix(vec3(.72,.78,.84),vec3(.35,.38,.41),weatherTone),weatherAmount*exposed*pow(1.-clamp(facing,0.,1.),3.)*.65);
  }
  // A road crown drains toward its edges; only broad low spots collect water.
  float dist=weatherRoad.w>.5?min(abs(world.x-weatherRoad.x),abs(world.z+40.)):abs(world.x-weatherRoad.x);
  float edge=smoothstep(.62,1.,dist/max(weatherRoad.y,1.));
  float basin=weatherNoise(drainageUV*vec2(.12,.045)+7.3);
  float pockets=smoothstep(.62,.79,basin);
  float drainage=mix(.28,edge,weatherRoad.z);
  // Dark mode uses an even wet film; random puddle islands read as dirt.
  float wet=level*mix(.45+.22*broad,.56,weatherTone);
  float pool=level*drainage*pockets*(1.-weatherTone);

  color*=1.-weatherAmount*(mix(3.2,.55,weatherTone)*wet+.18*pool);
  float sheen=weatherAmount*pool*(.25+.75*pow(1.-clamp(facing,0.,1.),4.))*.6;
  return mix(color,mix(vec3(.82,.86,.9),vec3(.33),weatherTone),sheen);
 }
 // Thin settling snow favours horizontal roofs, verges and broad quiet patches.
 float distSnow=abs(world.x-weatherRoad.x)/max(weatherRoad.y,1.);
 float edgeSnow=smoothstep(.55,1.,distSnow);
 float settling=mix(.3+.7*edgeSnow,1.,max(clamp(roof,0.,1.),1.-weatherRoad.z));
 color*=1.-weatherAmount*level*(1.-settling)*1.6;
 float coarse=weatherNoise(local.xz*.43+local.y*.17);
 float fine=weatherNoise(local.xz*1.7+vec2(local.y*.5,3.7));
 float drift=.68*coarse+.32*fine;
 float crown=roof>1.5?1.:0.;
 float snowUp=smoothstep(mix(.54,.16,crown),mix(.92,.85,crown),up);
 float patches=smoothstep(.25,.72,drift);
 float cover=roof>.5?snowUp*(.12+.78*patches):level*settling*(.82+.18*broad);
 float accumulation=roof>1.5?18.:roof>.5?16.:1.;
 vec3 snowColor=mix(vec3(.90,.92,.95),vec3(.47,.50,.54),weatherTone);
 float roadClear=mix(1.,edgeSnow,weatherRoad.z*(1.-step(.5,roof)));
 return mix(color,snowColor,min(.90,weatherAmount*cover*.9*accumulation*roadClear));
}
`;

const strRoof=roof=>roof===2?'2.':roof?'1.':'0.';
function inject(shader,uniforms,custom,roof=false){
 if(custom){
  const out='gl_FragColor=vec4(surface,1.);';
  if(!shader.fragmentShader.includes(out))return false;
  shader.fragmentShader=overlay+shader.fragmentShader.replace(out,'surface=weatherGround(surface,p,1.,normalize(cameraPosition-p).y,0.,p);'+out);
 }else{
  if(!shader.vertexShader.includes('#include <project_vertex>')||!shader.fragmentShader.includes('#include <opaque_fragment>'))return false;
  shader.vertexShader='varying vec3 vWeatherWorld;varying vec3 vWeatherLocal;\n'+shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvWeatherWorld=(modelMatrix*vec4(transformed,1.)).xyz;vWeatherLocal=position+vec3(modelMatrix[3].x*.37,length(modelMatrix[1].xyz)*7.,0.);');
  shader.fragmentShader=overlay+'varying vec3 vWeatherWorld;varying vec3 vWeatherLocal;\n'+shader.fragmentShader.replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nfloat wetRoughness=weatherAmount*float(weatherKind<1.5);roughnessFactor=max(.28,roughnessFactor-wetRoughness*2.2);').replace('#include <opaque_fragment>','outgoingLight=weatherGround(outgoingLight,vWeatherWorld,dot(normal,normalize((viewMatrix*vec4(0.,1.,0.,0.)).xyz)),dot(normal,normalize(vViewPosition)),ROOF_FLAG,vWeatherLocal);\n#include <opaque_fragment>');
 }
 shader.fragmentShader=shader.fragmentShader.replace('ROOF_FLAG',strRoof(roof));Object.assign(shader.uniforms,uniforms);return true;
}

export function createWeatherGround(world){
 const uniforms={weatherAmount:{value:0},weatherKind:{value:0},weatherTone:{value:0},weatherRoad:{value:{x:0,y:11.1,z:1,w:0}}};
 const shared=new Map(),floors=new WeakMap(),stats={injected:0,skipped:0,rootPatches:0,rootRestores:0};
 let rootPatch=null,state={kind:null,amount:0},disposed=false;

 const patch=(material,custom,roof=false)=>{
  const original={own:Object.hasOwn(material,'onBeforeCompile'),onBeforeCompile:material.onBeforeCompile,customProgramCacheKey:material.customProgramCacheKey};
  material.onBeforeCompile=function(shader,renderer){original.onBeforeCompile.call(this,shader,renderer);if(inject(shader,uniforms,custom,roof))stats.injected++;else stats.skipped++;};
  material.customProgramCacheKey=function(){return original.customProgramCacheKey.call(this)+KEY+'-'+String(roof); };
  material.needsUpdate=true;return original;
 };
 const restore=(material,original)=>{
  if(original.own)material.onBeforeCompile=original.onBeforeCompile;else delete material.onBeforeCompile;
  material.customProgramCacheKey=original.customProgramCacheKey;material.needsUpdate=true;
 };
 const floorsOf=root=>{
  if(!floors.has(root)){const list=new Set();root.traverse(o=>{if(o.isMesh&&o.userData.reflectiveSurface&&o.material?.isShaderMaterial&&o.material.uniforms?.outdoor?.value===1)list.add(o.material);});floors.set(root,[...list]);}
  return floors.get(root);
 };
 const releaseRoot=()=>{if(!rootPatch)return;for(const [material,original]of rootPatch.materials)restore(material,original);rootPatch=null;stats.rootRestores++;};

 const api={
  // kind: 'rain' | 'snow' | null. Called every frame before rendering the current root.
  update({kind,amount,root,dark}){
   if(disposed)return;
   const active=!!(kind&&amount>0&&root);state={kind:active?kind:null,amount:active?amount:0};
   if(rootPatch&&rootPatch.root!==root)releaseRoot();
   const id=world.current,road=['02','09','13','03','05','08','06','07'].includes(id);uniforms.weatherRoad.value={x:0,y:['02','09','13'].includes(id)?(world.layoutMotion?world.layoutVisual.width/2:(world.state?.laneCount||6)*1.85):['03','06','07'].includes(id)?5.55:11.1,z:road?1:0,w:['05','08'].includes(id)?1:0};
   uniforms.weatherAmount.value=state.amount;uniforms.weatherKind.value=kind==='snow'?2:1;uniforms.weatherTone.value=dark?1:0;
   // Install before the initial shader warm-up, with amount zero in clear weather.
   for(const key of SHARED){const material=world.mat?.[key];if(material&&!shared.has(material))shared.set(material,patch(material,false,['leaf','leaf2'].includes(key)?2:['building','environmentBuilding','trunk'].includes(key)));}
   if(root&&!rootPatch){rootPatch={root,materials:floorsOf(root).map(material=>[material,patch(material,true)])};if(rootPatch.materials.length)stats.rootPatches++;}
  },
  audit(){
   const root=world.root,materials=[...shared.keys()];let meshes=0;
   root?.traverse(o=>{if(o.isMesh&&o.visible&&materials.includes(o.material))meshes++;});
   const floorCount=rootPatch&&rootPatch.root===root?rootPatch.materials.length:0;
   return {active:!!state.kind&&uniforms.weatherAmount.value>0&&meshes+floorCount>0,kind:state.kind,distribution:'animated road-width drainage; stable irregular roof and crown snow patches',amount:uniforms.weatherAmount.value,tone:uniforms.weatherTone.value?'dark':'light',
    shared:{installed:SHARED.filter(k=>shared.has(world.mat?.[k])),gatedByAmount:true,meshesInRoot:meshes},
    rootFloors:{patched:floorCount,pendingRestore:!!rootPatch&&rootPatch.root!==root},compiles:{...stats},disposed,
    untouched:{lanePaint:true,paths:true,lights:true,fog:true,glass:true,vehicles:true,reflectionPasses:true}};
  },
  dispose(){
   if(disposed)return;disposed=true;releaseRoot();
   for(const [material,original]of shared)restore(material,original);shared.clear();uniforms.weatherAmount.value=0;
  }
 };
 return api;
}
