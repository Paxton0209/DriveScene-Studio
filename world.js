import {attachGroundReflection} from './ground-reflection.js';
import {createTailLight,updateTailLight} from './tail-light.js';
import {anchorVehicle} from './framing.js';
import {buildOutdoorParking} from './outdoor-parking.js';
import {buildParkingReference} from './parking-reference.js';
import * as THREE from 'three';
import {disposeVehicle} from './dispose-vehicle.js';
import {createContactShadows} from './contact-shadows.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {FXAAPass} from 'three/addons/postprocessing/FXAAPass.js';
import {FullScreenQuad} from 'three/addons/postprocessing/Pass.js';
import {Reflector} from 'three/addons/objects/Reflector.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
import {createVehicleDetail} from './vehicle-detail.js';

export const catalog=[
 ['01','Highway',false],['02','City avenue',true],['03','Elevated road',true],
 ['04','Local street',true],['05','Crossroads',true],['06','Exit ramp',false],
 ['07','Merge ramp',false],['08','T-junction',true],['09','Residential road',true],
 ['12','Lane closure',true],['13','Waterfront road',true],
 ['10','Parking aisle',false],['14','Overhead parking',false],['15','Angled parking',false],
 ['17','Outdoor parking',true],['18','Outdoor raised',true],['19','Outdoor overhead',true],['16','Parallel parking',false],['11','Covered passage',true]
].map(([id,name,trees])=>({id,name,trees,group:['10','14','15','16','11'].includes(id)?'closed':'open'}));
const parkingIds=['10','14','15','16','17','18','19'];
const ELEVATED_DECK_HEIGHT=8.5;

export class World {
 constructor(canvas,car,{palette='balanced',alpha=false,width=1920,height=1080}={}){
  this.palette=palette;this.width=width;this.height=height;this.sceneCache=new Map();
  this.environmentGrowth={buildings:{value:1,velocity:0},trees:{value:0,velocity:0}};
  this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,preserveDrawingBuffer:true,alpha});
  this.renderer.setPixelRatio(1);this.renderer.setSize(width,height,false);
  this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.VSMShadowMap;this.renderer.shadowMap.autoUpdate=false;
  this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1;
  this.scene=new THREE.Scene();this.camera=new THREE.PerspectiveCamera(38,16/9,1,2000);
  this.mat={};this.colors={
   road:['#545e6d','#303031'],ground:['#b4c3d6','#373a3e'],pavement:['#d1dbee','#3c4045'],
   curb:['#d6e1ef','#5a6068'],building:['#d3d7dd','#817d7d'],glass:['#a6bed0','#606a72'],
   white:['#d6e0e9','#a7adb2'],yellow:['#bbaa6f','#99864e'],grass:['#809c68','#3e4d3d'],
   leaf:['#6f914f','#4a593e'],leaf2:['#84a25c','#526047'],trunk:['#776956','#4b463e'],cone:['#ff5109','#ff590c'],water:['#7695ae','#304146'],parkingFloor:['#7c8b9e','#17181b'],parkingBay:['#aebdce','#393c41'],parkingEdge:['#98a9bc','#34383e']
  };
  for(const [key,pair]of Object.entries(this.colors))this.mat[key]=new THREE.MeshStandardMaterial({color:pair[0],roughness:key==='glass'?.35:.86,metalness:key==='glass'?.1:0});
  for(const k of ['leaf','leaf2','trunk'])this.mat[k].flatShading=true;
  this.mat.road.roughness=.54;this.mat.road.metalness=.08;this.mat.building.roughness=.36;this.mat.glass.dispose();
  this.mat.glass=new THREE.MeshPhysicalMaterial({color:this.colors.glass[0],roughness:.30,metalness:0,clearcoat:.72,clearcoatRoughness:.25,envMapIntensity:.8});
  this.mat.glass.onBeforeCompile=shader=>{
   shader.vertexShader='varying vec3 vAcrylicPosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvAcrylicPosition=position;');
   shader.fragmentShader='varying vec3 vAcrylicPosition;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','float sheen=smoothstep(-.8,.8,vAcrylicPosition.y);outgoingLight*=.86+.18*sheen;\n#include <opaque_fragment>');
  };
  this.mat.building.dispose();
  this.mat.building=new THREE.MeshPhysicalMaterial({color:this.colors.building[0],roughness:.62,metalness:0,clearcoat:.025,clearcoatRoughness:.6,envMapIntensity:.55,specularIntensity:.24});
  this.buildingTint={value:1};
  this.mat.building.onBeforeCompile=shader=>{
   shader.uniforms.buildingTint=this.buildingTint;
   shader.vertexShader='varying float vBuildingHeight;varying vec3 vBuildingNormal;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvBuildingHeight=(modelMatrix*vec4(transformed,1.0)).y;vBuildingNormal=normalize(mat3(modelMatrix)*normal);');
   shader.fragmentShader='uniform float buildingTint;varying float vBuildingHeight;varying vec3 vBuildingNormal;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','float shaded=1.-smoothstep(-.3,.7,dot(normalize(vBuildingNormal),normalize(vec3(-38.,55.,48.))));vec3 lightFace=mix(vec3(.94,.97,1.0),vec3(.90,.93,.98),shaded);vec3 darkFace=mix(vec3(.78,.85,.92),vec3(.67,.72,.77),shaded);outgoingLight*=mix(darkFace,lightFace,buildingTint);outgoingLight*=.90+.10*(1.-exp(-max(0.,vBuildingHeight)/4.));\n#include <opaque_fragment>');
  };
  this.mat.white.polygonOffset=true;this.mat.white.polygonOffsetFactor=-2;this.mat.white.polygonOffsetUnits=-2;
  this.mat.yellow.polygonOffset=true;this.mat.yellow.polygonOffsetFactor=-2;this.mat.yellow.polygonOffsetUnits=-2;
  this.mat.grass.transparent=true;this.mat.grass.depthWrite=false;
  this.renderer.localClippingEnabled=true;
  this.buildingRevealPlane=new THREE.Plane(new THREE.Vector3(0,1,0),.14);
  this.treeRevealPlane=new THREE.Plane(new THREE.Vector3(0,1,0),.14);
  for(const key of ['leaf','leaf2','trunk']){this.mat[key].clippingPlanes=[this.treeRevealPlane];this.mat[key].clipShadows=true;}
  this.hemi=new THREE.HemisphereLight('#d9eaff','#8b959d',2.15);this.scene.add(this.hemi);
  this.sun=new THREE.DirectionalLight('#fff5e8',3.2);this.sun.position.set(-38,55,48);this.sun.castShadow=true;
  Object.assign(this.sun.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:180});
  this.sun.shadow.mapSize.set(width<1920?2048:4096,width<1920?2048:4096);this.sun.shadow.bias=.00004;this.sun.shadow.normalBias=.015;this.sun.shadow.radius=3;this.sun.shadow.intensity=.42;this.sun.shadow.blurSamples=16;this.sun.target.position.set(0,0,-14);this.scene.add(this.sun,this.sun.target);
  this.fill=new THREE.DirectionalLight('#aacded',.7);this.fill.position.set(24,16,-12);this.scene.add(this.fill);
  // Soft environment panels provide coherent highlights to the same 3D body.
  const studio=new THREE.Scene();studio.background=new THREE.Color('#8297aa');
  const panel=(color,intensity,w,h,x,y,z)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:new THREE.Color(color).multiplyScalar(intensity),side:THREE.DoubleSide}));m.position.set(x,y,z);m.lookAt(0,0,0);studio.add(m);};
  panel('#ffffff',3,30,20,-18,22,8);panel('#d6e5f1',1.8,30,12,20,13,-5);panel('#ffffff',2,24,16,0,30,0);
  const pmrem=new THREE.PMREMGenerator(this.renderer);this.env=pmrem.fromScene(studio,.02).texture;this.scene.environment=this.env;this.scene.environmentIntensity=.38;pmrem.dispose();
  this.mat.parkingFloor.roughness=.32;this.mat.parkingFloor.metalness=.08;this.mat.parkingBay.roughness=.46;this.mat.parkingBay.metalness=.08;this.mat.parkingBay.polygonOffset=true;this.mat.parkingBay.polygonOffsetFactor=-4;this.mat.parkingBay.polygonOffsetUnits=-4;
  this.mat.parkingFloor.onBeforeCompile=shader=>{
   shader.vertexShader='varying vec3 parkingPosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nparkingPosition=(modelMatrix*vec4(transformed,1.0)).xyz;');
   shader.fragmentShader='varying vec3 parkingPosition;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','float edge=smoothstep(16.,58.,length(parkingPosition.xz*vec2(1.0,.72)));outgoingLight*=mix(1.08,.32,edge);outgoingLight+=vec3(.014,.018,.025)*exp(-dot(parkingPosition.xz*vec2(.12,.08),parkingPosition.xz*vec2(.12,.08)));\n#include <opaque_fragment>');
  };
  // A smooth analytic sky gradient has no cloud texture or luminous horizon stripe.
  this.sky=new THREE.Mesh(new THREE.SphereGeometry(1000,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{range:{value:.12},top:{value:new THREE.Color('#72afe0')},bottom:{value:new THREE.Color('#c4ddec')}},vertexShader:'varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec3 v;uniform vec3 top;uniform vec3 bottom;uniform float range;void main(){float t=smoothstep(0.,range,normalize(v).y);gl_FragColor=vec4(mix(bottom,top,t),1.0);#include <colorspace_fragment> }'.replace(';#include',';\n#include').replace('fragment> }','fragment>\n}') }));
  this.tailReflection=createTailLight();this.scene.add(this.tailReflection);
  this.scene.add(this.sky);this.scene.fog=new THREE.Fog('#c9dbea',85,280);this.car=car;this.scene.add(this.car);this.egoContact=createContactShadows(this.car);this.scene.add(this.egoContact);this.current=null;
  const target=new THREE.WebGLRenderTarget(width,height,{type:THREE.HalfFloatType,samples:4});
  this.composer=new EffectComposer(this.renderer,target);this.composer.addPass(new RenderPass(this.scene,this.camera));
  this.ao=new GTAOPass(this.scene,this.camera,width,height,{}, {radius:1.2,thickness:1.5,distanceExponent:1,scale:.85,samples:16,screenSpaceRadius:false},{radius:5,lumaPhi:8,depthPhi:2,normalPhi:3});
  this.ao.blendIntensity=.8;this.composer.addPass(this.ao);this.composer.addPass(new OutputPass());
  // Keep subpixel road paint smooth in both still frames and camera motion.
  this.edgeAA=new FXAAPass();this.edgeAA.setSize(width,height);this.composer.addPass(this.edgeAA);
  this.vehicleDetail=createVehicleDetail();this.vehicleDetail.uniforms.amount.value=0;this.vehicleDetail.uniforms.texel.value.set(1/width,1/height);this.composer.addPass(this.vehicleDetail);
  this.mirror=new Reflector(new THREE.PlaneGeometry(1,1),{textureWidth:width,textureHeight:height,multisample:2});this.mirror.rotation.x=-Math.PI/2;
  this.reflectionSharp={value:this.mirror.getRenderTarget().texture};this.reflectionMatrix={value:new THREE.Matrix4()};this.waterReflectionMatrix={value:new THREE.Matrix4()};this.buildingFootprints={value:Array.from({length:32},()=>new THREE.Vector4())};this.buildingCount={value:0};
  this.blurTargets=[0,1].map(()=>new THREE.WebGLRenderTarget(width,height,{type:THREE.HalfFloatType}));
  this.blurMaterial=new THREE.ShaderMaterial({depthTest:false,depthWrite:false,uniforms:{source:{value:null},direction:{value:new THREE.Vector2()}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:'uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027; c+=(texture2D(source,vUv+direction*1.384615)+texture2D(source,vUv-direction*1.384615))*.316216;c+=(texture2D(source,vUv+direction*3.230769)+texture2D(source,vUv-direction*3.230769))*.070270;gl_FragColor=c;}'});
  this.blurQuad=new FullScreenQuad(this.blurMaterial);this.reflectionTexture={value:this.blurTargets[1].texture};
  this.waterReflectionTarget=new THREE.WebGLRenderTarget(width,height,{type:THREE.HalfFloatType});this.waterReflectionTexture={value:this.waterReflectionTarget.texture};
  for(const kind of ['water']){const material=this.mat[kind],strength=kind==='water'?.43:.025;
   const previousCompile=material.onBeforeCompile;
   material.onBeforeCompile=shader=>{previousCompile.call(material,shader);shader.uniforms.reflectionMatrix=this.waterReflectionMatrix;shader.uniforms.reflectionTexture=this.waterReflectionTexture;
    shader.vertexShader='uniform mat4 reflectionMatrix;varying vec4 vReflection;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvReflection=reflectionMatrix*modelMatrix*vec4(transformed,1.0);');
    shader.fragmentShader='uniform sampler2D reflectionTexture;varying vec4 vReflection;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`vec2 ru=vReflection.xy/vReflection.w;vec3 reflected=texture2D(reflectionTexture,ru).rgb;outgoingLight=mix(outgoingLight,reflected,${strength.toFixed(3)});\n#include <opaque_fragment>`);
   };material.customProgramCacheKey=()=>kind+'-reflection';
  }

  this.environmentTone={value:0};
  this.darkAerialPerspective={value:0};
  this.mat.ground.onBeforeCompile=shader=>{
   shader.uniforms.environmentTone=this.environmentTone;
   shader.vertexShader='varying vec3 ambientGroundPosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nambientGroundPosition=(modelMatrix*vec4(transformed,1.)).xyz;');
   shader.fragmentShader='uniform float environmentTone;varying vec3 ambientGroundPosition;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','vec2 ambientOffset=(ambientGroundPosition.xz-vec2(-18.,-22.))/vec2(40.,65.);float ambientPool=exp(-dot(ambientOffset,ambientOffset));outgoingLight*=.86+.20*ambientPool;float groundLuma=dot(outgoingLight,vec3(.2126,.7152,.0722));outgoingLight=mix(outgoingLight,groundLuma*vec3(.94,1.,1.09),environmentTone);\n#include <opaque_fragment>');
  };
  for(const kind of ['road','ground','pavement','parkingFloor']){attachGroundReflection(this.mat[kind],this);this.mat[kind].customProgramCacheKey=()=>kind+'-localized-reflection-r15';}
  // Gradual aerial perspective starts in the middle distance; all far surfaces
  // reach the same horizon color before the geometry ends.
  for(const material of Object.values(this.mat)){
   const compile=material.onBeforeCompile;
   material.onBeforeCompile=shader=>{compile.call(material,shader);shader.uniforms.darkAerialPerspective=this.darkAerialPerspective;shader.fragmentShader='uniform float darkAerialPerspective;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <fog_fragment>',`#ifdef USE_FOG
    float t=clamp((vFogDepth-${material===this.mat.ground?'45.':material===this.mat.water?'65.':'105.'})/${material===this.mat.ground?'180.':material===this.mat.water?'125.':'140.'},0.,1.);
    // In dark scenes a shared distance curve joins sky and ground gradually.
    if(darkAerialPerspective>.5)t=clamp((vFogDepth-65.)/235.,0.,1.);
    float aerial=t*t*t*(t*(t*6.-15.)+10.);
    float fogFactor=fogNear>10000.?0.:aerial;
    gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);
    #endif`);};
  }
  const building=this.mat.building;
  this.mat.environmentBuilding=building.clone();this.mat.environmentBuilding.onBeforeCompile=building.onBeforeCompile;
  this.mat.environmentBuilding.clippingPlanes=[this.buildingRevealPlane];
  // Integrate paint over a pixel footprint rather than sampling tiny hard-edged
  // triangles. The expanded quad keeps thin paint covered between pixels.
  for(const key of ['white','yellow']){
   const source=this.mat[key],paint=source.clone();paint.onBeforeCompile=shader=>{
    source.onBeforeCompile(shader);
    shader.vertexShader='attribute vec4 paintSize;varying vec2 vPaintLocal;varying vec2 vPaintSize;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvPaintLocal=(uv-.5)*paintSize.zw;vPaintSize=paintSize.xy;');
    shader.fragmentShader='varying vec2 vPaintLocal;varying vec2 vPaintSize;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>',`vec2 paintPixel=max(fwidth(vPaintLocal)*1.5,vec2(.00001));vec2 paintA=max(vPaintLocal-paintPixel*.5,-vPaintSize*.5);vec2 paintB=min(vPaintLocal+paintPixel*.5,vPaintSize*.5);vec2 paintCoverage=clamp((paintB-paintA)/paintPixel,0.,1.);diffuseColor.a*=paintCoverage.x*paintCoverage.y;
    #include <alphatest_fragment>`);
   };paint.transparent=true;paint.depthWrite=false;paint.alphaTest=0;paint.alphaToCoverage=false;paint.customProgramCacheKey=()=>key+'-integrated-paint-3';this.mat[key+'Paint']=paint;
  }
  const white=this.mat.white,crosswalk=white.clone();crosswalk.onBeforeCompile=shader=>{
   white.onBeforeCompile(shader);shader.vertexShader='attribute vec4 paintSize;varying vec2 vCrosswalkLocal;varying vec2 vCrosswalkSize;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvCrosswalkLocal=(uv-.5)*paintSize.zw;vCrosswalkSize=paintSize.xy;');
   shader.fragmentShader='varying vec2 vCrosswalkLocal;varying vec2 vCrosswalkSize;\nfloat stripeIntegral(float x){return floor(x)*(.62/1.5)+clamp(fract(x)-(1.-.62/1.5)*.5,0.,.62/1.5); }\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>',`vec2 stripeFootprint=max(fwidth(vCrosswalkLocal)*1.5,vec2(.00001));float stripeX=(vCrosswalkLocal.x+vCrosswalkSize.x*.5)/1.5;float stripePixel=stripeFootprint.x/1.5;float stripeCoverage=clamp((stripeIntegral(stripeX+stripePixel*.5)-stripeIntegral(stripeX-stripePixel*.5))/stripePixel,0.,1.);vec2 edgeA=max(vCrosswalkLocal-stripeFootprint*.5,-vCrosswalkSize*.5),edgeB=min(vCrosswalkLocal+stripeFootprint*.5,vCrosswalkSize*.5);vec2 edgeCoverage=clamp((edgeB-edgeA)/stripeFootprint,0.,1.);diffuseColor.a*=stripeCoverage*edgeCoverage.x*edgeCoverage.y;
   #include <alphatest_fragment>`);
  };crosswalk.transparent=true;crosswalk.depthWrite=false;crosswalk.alphaTest=0;crosswalk.alphaToCoverage=false;crosswalk.customProgramCacheKey=()=> 'integrated-crosswalk-3';this.mat.crosswalk=crosswalk;
 }
 box(w,h,d,x,y,z,mat='building',round=0){const g=round?new RoundedBoxGeometry(w,h,d,2,round):new THREE.BoxGeometry(w,h,d);const m=new THREE.Mesh(g,this.mat[mat]);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;this.root.add(m);return m;}
 plane(w,d,x,z,y,mat){const paint=['white','yellow','crosswalk'].includes(mat),pw=paint?w+.8:w,pd=paint?d+.8:d,g=new THREE.PlaneGeometry(pw,pd,Math.max(pw,pd)>=1000?64:1,Math.max(pw,pd)>=1000?64:1);if(paint)g.setAttribute('paintSize',new THREE.Float32BufferAttribute(Array.from({length:4},()=>[w,d,pw,pd]).flat(),4));const m=new THREE.Mesh(g,this.mat[paint&&mat!=='crosswalk'?mat+'Paint':mat]);m.rotation.x=-Math.PI/2;m.position.set(x,y,z);m.receiveShadow=true;this.root.add(m);return m;}
 road(x,w,z0,z1,y=0){return this.plane(w,Math.abs(z1-z0),x,(z0+z1)/2,y+.015,'road');}
 line(x,z0,z1,y=0,mat='white',width=.13){this.plane(width,Math.abs(z1-z0),x,(z0+z1)/2,y+.028,mat);}
 dashed(x,z0,z1,y=0){for(let z=z0;z>z1;z-=10){const end=Math.max(z-3.8,z1);this.line(x,z,end,y);this.root.children.at(-1).userData.laneDash=true;}}
 marks(w,lane,z0,z1,y=0,twoWay=false,edges=true){
  if(edges){this.line(-w/2+.25,z0,z1,y);this.line(w/2-.25,z0,z1,y);}
  const n=Math.round(w/lane);for(let i=1;i<n;i++){const x=-w/2+i*lane;if(twoWay&&i===n/2){this.line(x-.105,z0,z1,y,'yellow',.095);this.line(x+.105,z0,z1,y,'yellow',.095);}else this.dashed(x,z0,Math.max(z1,-650),y);}
 }
 curbs(w,z0,z1,y=0){for(const s of [-1,1]){this.box(1.6,.18,z0-z1,s*(w/2+.8),y-.02,(z0+z1)/2,'pavement');this.box(.20,.20,z0-z1,s*(w/2+.1),y,(z0+z1)/2,'curb');}}
 building(x,z,w,d,h,variantIndex){
  const before=new Set(this.root.children);
  const variant=(variantIndex??this.buildingPlacements.length)%3;
  this.buildingPlacements.push({x,z,width:w,depth:d,variant:['solid-cap','solid-wing','solid-terrace'][variant]});
  // Three restrained silhouettes share the same footprint and material family.
  if(variant===0){
   this.box(w,h,d,x,h/2-.10,z,'building',.065);
   this.box(w*.76,.30,d*.73,x+w*.04,h+.03,z-d*.05,'building',.03);
  }else if(variant===1){
   this.box(w*.57,h,d*.88,x-w*.215,h/2-.10,z-d*.06,'building',.065);
   this.box(w*.43,h*.72,d,x+w*.285,h*.36-.10,z,'building',.065);
  }else{
   this.box(w,h*.50,d,x,h*.25-.10,z,'building',.065);
   this.box(w*.69,h*.50,d*.70,x+w*.08,h*.75-.10,z-d*.15,'building',.065);
   // A solid stepped volume intentionally has no decorative glazing.
  }
  // Building ground shadows removed by visual direction.
  for(const o of this.root.children)if(!before.has(o)){
   o.userData.buildingOwned=true;
   o.userData.growthHeight=h+.5;
   o.material=this.mat.environmentBuilding;
   // Extend only the buried footing, retaining the roof height and silhouette.
   o.geometry.computeBoundingBox();const bounds=o.geometry.boundingBox;
   if(o.position.y+bounds.min.y<0){const height=bounds.max.y-bounds.min.y;o.scale.y=(height+.30)/height;o.position.y-=.15;}
  }
 }
 contact(x,z,w,d,opacity=.22){
  if(!this.contactMap){const n=64,data=new Uint8Array(n*n*4);for(let y=0;y<n;y++)for(let x=0;x<n;x++){const u=Math.abs((x+.5)/n*2-1),v=Math.abs((y+.5)/n*2-1),a=Math.pow(Math.max(0,1-Math.pow(Math.max(u,v),3)),2);const i=(y*n+x)*4;data[i]=data[i+1]=data[i+2]=0;data[i+3]=Math.round(a*255);}this.contactMap=new THREE.DataTexture(data,n,n);this.contactMap.needsUpdate=true;}
  const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshBasicMaterial({map:this.contactMap,transparent:true,opacity,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1}));m.rotation.x=-Math.PI/2;m.position.set(x,.022,z);this.root.add(m);
 }
 tree(x,z,scale=1){const g=new THREE.Group();const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.10,.17,1.6,7),this.mat.trunk);trunk.position.y=.8;g.add(trunk);for(const [px,py,pz,r,m]of [[0,2.7,0,1.05,'leaf'],[-.65,2.03,.05,.74,'leaf2'],[.60,2.25,.02,.83,'leaf'],[.13,2.18,.60,.71,'leaf2']]){const o=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),this.mat[m]);o.position.set(px,py,pz);o.scale.y=1.16;o.castShadow=true;g.add(o);}g.position.set(x,0,z);g.scale.setScalar(scale);g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});this.vegetation.add(g);}
 environment(w,{small=false,cross=false,tee=false,elevated=false,residential=false,centerX=0}={}){
  const sites=[[-1,6,9,13,small?5:23],[1,-9,13,11,small?4.5:12],[-1,-31,13,17,small?6:14],[1,-54,8,12,small?5.3:21],[-1,-83,11,13,small?4:10],[1,-107,14,15,small?6:13],[-1,-144,9,14,small?5:16],[1,-180,11,14,small?4:9]];
  let siteVariant=0;
  for(const [s,z,bw,bd,bh]of sites.map(v=>residential?[v[0],v[1]-8,v[2]*.82,v[3]*.8,3.8]:v)){if(elevated&&s===-1&&z>0)continue;if(this.options.waterfront&&s===1)continue;if(cross&&Math.abs(z+40)<24)continue;if(tee&&z< -35)continue;const x=centerX+s*(w/2+(elevated?10:residential?5.8:8)+bw/2);const variant=siteVariant++;if(!(s===-1&&z>0&&['02','09','05','08'].includes(this.current)))this.building(x,z,bw,bd,elevated?bh*.58:bh,variant);const lawnX=centerX+s*(w/2+(elevated?6.8:residential?3.8:4.5)),lawnDepth=bd+5;const p=this.plane(elevated?2.4:residential?3.6:5.0,lawnDepth,lawnX,z,.025,'grass');this.lawns.push(p);this.tree(lawnX,z+lawnDepth*.22,elevated?1.25:small?.8:1.05);if(z>-90)this.tree(lawnX,z-lawnDepth*.24,elevated?1.1:small?.73:.83);}
  if(tee){for(const x of [-21,16,33]){this.building(x,-66,10,11,6);const p=this.plane(13,7,x,-57,.025,'grass');this.lawns.push(p);this.tree(x,-57,.95);}}
 }
 curveStrip(points,width,y,mat='road'){
  const curve=new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,y+.015,z)),false,'centripetal');const pos=[],ind=[];
  for(let i=0;i<=180;i++){const t=i/180,p=curve.getPoint(t),v=curve.getTangent(t);const n=new THREE.Vector3(-v.z,0,v.x).normalize();for(const s of [-1,1])pos.push(p.x+n.x*width*.5*s,p.y,p.z+n.z*width*.5*s);if(i<180){const k=i*2;ind.push(k,k+1,k+2,k+1,k+3,k+2);}}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(ind);g.computeVertexNormals();const mesh=new THREE.Mesh(g,this.mat[mat]);mesh.material.side=THREE.DoubleSide;mesh.receiveShadow=true;this.root.add(mesh);return curve;
 }
 curveLine(curve,offset,width,y,dashed=false,mat='white',clipX=-Infinity){const paint=['white','yellow'].includes(mat),ribbonWidth=width+(paint?.8:0),pts=[],idx=[],uv=[];for(let i=0;i<=600;i++){const t=i/600,p=curve.getPoint(t),v=curve.getTangent(t),n=new THREE.Vector3(-v.z,0,v.x).normalize();for(const s of [-1,1]){uv.push((s+1)/2,.5);pts.push(p.x+n.x*(offset+ribbonWidth*.5*s),y+.033,p.z+n.z*(offset+ribbonWidth*.5*s));}if(i<600&&p.x+n.x*offset>clipX&&(!dashed||Math.floor(t*curve.getLength()/5)%2===0)){const k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pts,3));g.setIndex(idx);g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));if(paint)g.setAttribute('paintSize',new THREE.Float32BufferAttribute(Array.from({length:pts.length/3},()=>[width,100000,ribbonWidth,100000]).flat(),4));g.computeVertexNormals();this.root.add(new THREE.Mesh(g,this.mat[paint?mat+'Paint':mat]));}
 flatShape(shape,y,mat){const g=new THREE.ShapeGeometry(shape,24);g.rotateX(Math.PI/2);const ix=Array.from(g.index.array);for(let i=0;i<ix.length;i+=3)[ix[i+1],ix[i+2]]=[ix[i+2],ix[i+1]];g.setIndex(ix);g.computeVertexNormals();const mesh=new THREE.Mesh(g,this.mat[mat]);mesh.position.y=y;mesh.material.side=THREE.DoubleSide;mesh.receiveShadow=true;this.root.add(mesh);return mesh;}
 pathRibbon(points,width,y,mat){const paint=['white','yellow'].includes(mat),ribbonWidth=width+(paint?.8:0),p=[],ix=[],uv=[];for(let i=0;i<points.length;i++){const before=points[Math.max(0,i-1)],after=points[Math.min(points.length-1,i+1)],dx=after[0]-before[0],dz=after[1]-before[1],len=Math.hypot(dx,dz),nx=-dz/len,nz=dx/len;for(const t of [-1,1]){uv.push((t+1)/2,.5);p.push(points[i][0]+nx*ribbonWidth/2*t,y,points[i][1]+nz*ribbonWidth/2*t);}if(i<points.length-1){const k=i*2;ix.push(k,k+1,k+2,k+1,k+3,k+2);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setIndex(ix);g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));if(paint)g.setAttribute('paintSize',new THREE.Float32BufferAttribute(Array.from({length:p.length/3},()=>[width,100000,ribbonWidth,100000]).flat(),4));g.computeVertexNormals();const mesh=new THREE.Mesh(g,this.mat[paint?mat+'Paint':mat]);mesh.material.side=THREE.DoubleSide;this.root.add(mesh);return mesh;}
 junction(id,w){
  const half=w/2,near=-40+half,far=-40-half,r=2.4,crossroad=id==='05';
  // Three mutually disjoint road rectangles meet on the exact same boundaries.
  this.road(0,w,70,near);if(crossroad)this.road(0,w,far,-260);
  this.plane(300,w,0,-40,.015,'road');
  this.marks(w,3.7,70,-22.55,0,true,false);if(crossroad)this.marks(w,3.7,-57.45,-260,0,true,false);
  for(const side of [-1,1]){
   this.line(side*(half-.25),70,near+r);if(crossroad)this.line(side*(half-.25),far-r,-260);
   for(const edge of [-1,1]){
    const z=-40+edge*half,start=half+(edge===1||crossroad?r:0);
    this.box(150-start,.18,1.6,side*(150+start)/2,-.02,z+edge*.8,'pavement');
    this.box(150-start,.20,.20,side*(150+start)/2,0,z+edge*.1,'curb');
    this.plane(150-start,.13,side*(150+start)/2,z-edge*.25,.028,'white');
    if(edge===-1&&!crossroad)continue;
    const cx=side*half,cz=z,arc=[],outer=[];
    for(let i=0;i<=48;i++){const u=i/48,n=Math.hypot(u,1-u),x=cx+side*r*(1-u)**2,zz=cz+edge*r*u*u;arc.push([x,zz]);outer.push([x+side*u/n*1.6,zz+edge*(1-u)/n*1.6]);}
    const road=new THREE.Shape();road.moveTo(cx,cz);for(const [x,zz]of arc)road.lineTo(x,zz);road.closePath();this.flatShape(road,.015,'road');
    const pavement=new THREE.Shape();pavement.moveTo(...arc[0]);for(const p of arc.slice(1))pavement.lineTo(...p);for(const p of outer.reverse())pavement.lineTo(...p);pavement.closePath();this.flatShape(pavement,.07,'pavement');
    const curb=arc.map(([x,zz],i)=>{const u=i/48,n=Math.hypot(u,1-u);return[x+side*u/n*.1,zz+edge*(1-u)/n*.1];});this.pathRibbon(curb,.2,.1,'curb');
    const paint=arc.map(([x,zz],i)=>{const u=i/48,n=Math.hypot(u,1-u);return[x-side*u/n*.25,zz-edge*(1-u)/n*.25];});this.pathRibbon(paint,.13,.028,'white');
   }
  }
  for(let x=-140;x<140;x+=10){if(Math.abs(x)<19)continue;for(const off of [-7.4,-3.7,3.7,7.4])this.plane(3.8,.13,x,-40+off,.030,'white');for(const off of [-.105,.105])this.plane(5,.10,x,-40+off,.031,'yellow');}
  const crosswalkCount=14,crosswalkSpacing=1.5,crosswalkStripeWidth=.62,crosswalkLength=2.5;
  const stripeOffsets=Array.from({length:crosswalkCount},(_,i)=>(i-(crosswalkCount-1)/2)*crosswalkSpacing);
  for(const z of (crossroad?[-27,-53]:[-27]))this.plane(crosswalkCount*crosswalkSpacing,crosswalkLength,0,z,.035,'crosswalk');
  for(const x of [-12.8,12.8])this.plane(crosswalkCount*crosswalkSpacing,crosswalkLength,x,-40,.035,'crosswalk').rotation.z=Math.PI/2;
  this.curbs(w,70,near+r);if(crossroad)this.curbs(w,far-r,-260);
  else{this.box(w,.18,1.6,0,-.02,far-.8,'pavement');this.box(w,.20,.20,0,0,far-.1,'curb');this.plane(w,.13,0,far+.25,.028,'white');}
  this.junctionDimensions={crosswalkCount,crosswalkSpacing,crosswalkLength,crosswalkStripeWidth,stripeOffsets,camera:'high-angle',roadSurface:'disjoint shared boundaries',cornerRadius:r,corners:crossroad?4:2,edgePaint:'continuous shared curve endpoints',nearCrosswalk:-27,markingEnd:-22.55,stopLineVisible:false,stopLineCount:0};
 }
 dividedCarriageway(w,deck){
  const medianWidth=1.6,oppositeX=-(w+medianWidth),start=this.root.children.length;
  this.road(0,w,70,-260,deck);this.marks(w,3.7,70,-260,deck,false,false);
  this.line(-w/2+.25,70,-260,deck);this.line(w/2-.25,70,-260,deck);
  for(const mesh of this.root.children.slice(start))mesh.position.x+=oppositeX;
  const medianX=-(w+medianWidth)/2;
  this.plane(medianWidth,330,medianX,-95,deck+.025,'pavement');
  this.box(.68,.62,330,medianX,deck+.31,-95,'curb',.05);
  this.dividedRoad={lanesPerDirection:3,medianWidth,oppositeCenter:oppositeX,egoCenter:0,directions:2};
 }
 ramp(id,w){
  const exit=id==='06',half=w/2,branchHalf=3.7,sign=exit?1:-1;
  const toU=z=>exit?-z-8:z+60,toZ=u=>exit?-u-8:u-60;
  const sample=u=>{const t=Math.max(0,u),q=Math.min(t,60),x=1.85+.009*q*q+Math.max(0,t-60)*1.08,dx=.018*q,h=branchHalf*Math.sqrt(1+dx*dx);return{x,l:x-h,r:x+h};};
  const near=Math.min(toU(70),toU(-260)),far=Math.max(toU(70),toU(-260));
  // A single rounded nose joins the straight and curved edges with shared tangents.
  let join=0;while(sample(join).l<half+2.4)join+=.01;
  const end=join+2.5,handle=4.5,epsilon=.001,slope=(sample(end+epsilon).l-sample(end-epsilon).l)/(2*epsilon);
  const nose=new THREE.CubicBezierCurve3(new THREE.Vector3(half,0,toZ(join)),new THREE.Vector3(half,0,toZ(join-handle)),new THREE.Vector3(sample(end).l-slope*handle,0,toZ(end-handle)),new THREE.Vector3(sample(end).l,0,toZ(end)));
  const inner=[];for(let u=far;u>join;u-=.1)inner.push([half,toZ(u)]);
  for(let i=0;i<=96;i++){const p=nose.getPoint(i/96);inner.push([p.x,p.z]);}
  for(let u=end+.1;u<far;u+=.1)inner.push([sample(u).l,toZ(u)]);inner.push([sample(far).l,toZ(far)]);
  const outer=[];for(let u=far;u>near;u-=.1)outer.push([Math.max(half,sample(u).r),toZ(u)]);outer.push([half,toZ(near)]);
  // Surface and paint use the same perimeter, so the nose has no masked seam.
  const outline=[[-half,toZ(near)],[-half,toZ(far)],...inner,...outer],shape=new THREE.Shape();
  outline.forEach(([x,z],i)=>i?shape.lineTo(x,z):shape.moveTo(x,z));shape.closePath();this.flatShape(shape,.015,'road');
  const inset=(points,amount)=>points.map(([x,z],i)=>{const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz);return[x-dz/len*amount*sign,z+dx/len*amount*sign];});
  this.pathRibbon(inset(inner,.25),.13,.033,'white');this.pathRibbon(inset(outer,.25),.13,.033,'white');
  this.line(-half+.25,70,-260);this.dashed(-1.85,70,-260);this.dashed(1.85,70,-260);
  let dist=0,previous=null;const dash=[];for(let u=near;u<=far;u+=.1){const x=sample(u).x,z=toZ(u);if(previous)dist+=Math.hypot(x-previous[0],z-previous[1]);if(x>half+.3&&dist%9<3.8){dash.push([x,z]);}else if(dash.length){if(dash.length>1)this.pathRibbon(dash,.13,.033,'white');dash.length=0;}previous=[x,z];}if(dash.length>1)this.pathRibbon(dash,.13,.033,'white');
  const startTangent=nose.getTangent(0),endTangent=nose.getTangent(1),branchTangent=new THREE.Vector3(slope,0,exit?-1:1).normalize();
  this.rampDimensions={lanes:2,laneWidth:3.7,width:7.4,surface:'single triangulated perimeter',nose:'tangent-continuous cubic',paintInset:.25,startTangentDot:startTangent.dot(new THREE.Vector3(0,0,sign)),endTangentDot:endTangent.dot(branchTangent)};
 }
 parking(id){if(['17','18','19'].includes(id))buildOutdoorParking(this);else buildParkingReference(this,id);}
 roadworks(w){
  const startIndex=this.root.children.length;const inner=w/2-3.38,edge=w/2-.32,narrow=w<10;
  this.roadworkZone={side:'right roadside lane',left:inner,right:edge,roadHalfWidth:w/2,taperStart:edge,taperEnd:inner,front:-10,back:-48,blocksEgoLane:narrow,bypass:narrow?'opposing lane':'adjacent lane',truck:{localX:w/2-1.85,x:w/2-1.85,z:-34,width:2.35,length:7.0}};
  for(let i=0;i<14;i++){
   const z=-10-i*2.9,t=Math.min(i/4,1),x=edge-t*(edge-inner);
   this.box(.48,.065,.48,x,.05,z,'cone',.025);
   const cone=new THREE.Mesh(new THREE.ConeGeometry(.23,.78,20),this.mat.cone);cone.position.set(x,.47,z);cone.castShadow=true;this.root.add(cone);
   const stripe=new THREE.Mesh(new THREE.CylinderGeometry(.085,.14,.18,20),this.mat.white);stripe.position.set(x,.48,z);stripe.castShadow=true;this.root.add(stripe);
  }
  const tx=w/2-1.85,tz=-34;
  const tire=new THREE.MeshStandardMaterial({color:'#202329',roughness:.87});
  const steel=new THREE.MeshStandardMaterial({color:'#7f8993',metalness:.5,roughness:.35});
  const part=(w,h,d,x,y,z,mat,round=.04)=>this.box(w,h,d,tx+x,y,tz+z,mat,round);
  part(2.25,.36,6.6,0,.78,0,'building');
  part(2.35,1.9,2.1,0,1.74,-2.25,'cone',.14);
  part(2.12,.72,.06,0,2.12,-3.32,'glass');
  for(const side of [-1,1])part(.055,.7,1.4,side*1.19,2.14,-2.35,'glass');
  part(2.32,.24,4.35,0,1.08,1.1,'building');
  for(const side of [-1,1])part(.14,.95,4.35,side*1.1,1.62,1.1,'cone');
  part(2.3,.95,.14,0,1.62,3.27,'cone');
  for(const side of [-1,1])for(const z of [-2.3,1.6,2.65]){
   const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.48,.48,.28,24),tire);wheel.rotation.z=Math.PI/2;wheel.position.set(tx+side*1.08,.50,tz+z);wheel.castShadow=true;this.root.add(wheel);
   const hub=new THREE.Mesh(new THREE.CylinderGeometry(.23,.23,.29,20),steel);hub.rotation.z=Math.PI/2;hub.position.copy(wheel.position);this.root.add(hub);
  }
  for(const side of [-1,1])part(.40,.19,.05,side*.7,1.05,3.36,'cone');
  this.contact(tx,tz,2.6,7.4,.26);
  for(const o of this.root.children.slice(startIndex))o.userData.construction=true;
  if(this.current==='13'){const center=z=>z>=-30?0:18*(1-Math.exp(-Math.pow((-z-30)/95,3)));for(const o of this.root.children.slice(startIndex)){const z=o.position.z;o.position.x+=center(z);o.rotation.y+=Math.atan2(center(z+.05)-center(z-.05),.1);}this.roadworkZone.followsCurve=true;this.roadworkZone.truck.x+=center(tz);}
 }
 roundedWater(w){
  const points=[];for(let z=90;z>=-290;z-=4){const x=this.current==='13'&&z< -30?18*(1-Math.exp(-Math.pow((-z-30)/95,3))):0;points.push(new THREE.Vector3(x,0,z));}
  const curve=new THREE.CatmullRomCurve3(points),bankOffset=w/2+3.2,waterWidth=62;
  const strip=(offset,width,height,material)=>{const pos=[],idx=[];for(let i=0;i<=600;i++){const t=i/600,p=curve.getPoint(t),v=curve.getTangent(t),n=new THREE.Vector3(-v.z,0,v.x).normalize();for(const edge of [offset,offset+width])pos.push(p.x+n.x*edge,height,p.z+n.z*edge);if(i<600){const k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setIndex(idx);geo.computeVertexNormals();const m=new THREE.Mesh(geo,this.mat[material]);m.material.side=THREE.DoubleSide;m.receiveShadow=true;this.root.add(m);return m;};
  strip(w/2,3.2,.018,'pavement');strip(bankOffset,waterWidth,-.10,'water');strip(bankOffset-.12,.24,.07,'curb');
  this.waterBounds={back:-290,front:90,bankOffset,waterWidth,parallelToRoad:true,constantNormalOffset:3.2,reflectionPolicy:'shoreline objects only; distant buildings excluded'};
 }

 build(id,options={}){
  this.camera.clearViewOffset();
  this.options={buildings:true,waterfront:id==='13',roadworks:id==='12',...options};
  if(this.root)this.scene.remove(this.root);
  const environmentId=['10','14','16'].includes(id)?'10':['17','18','19'].includes(id)?'17':id;
  const cacheKey=JSON.stringify([environmentId,options.waterfront,options.roadworks,options.laneCount,options.palette]);
  const cached=this.sceneCache.get(cacheKey);
  if(cached){
   Object.assign(this,cached.fields);this.current=id;this.scene.add(this.root);this.car.position.copy(cached.carPosition);this.car.rotation.copy(cached.carRotation);
   this.sun.target.position.copy(cached.sunTarget);this.configureCamera(id,options);this.sceneCache.delete(cacheKey);this.sceneCache.set(cacheKey,cached);return;
  }
  this.dividedRoad=null;this.root=new THREE.Group();this.scene.add(this.root);this.vegetation=new THREE.Group();this.root.add(this.vegetation);this.lawns=[];this.current=id;this.parkingBays=[];this.parkingColumns=[];this.buildingPlacements=[];this.waterBounds=null;this.rampDimensions=null;this.roadworkZone=null;this.pedestrianPassages=[];this.junctionDimensions=null;this.parkingReplica=null;
  const urban=['02','05','08','09','13'].includes(id),w=['02','09','13'].includes(id)&&options.laneCount?options.laneCount*3.7:['04','09'].includes(id)?7.4:urban?22.2:11.1,deck=id==='03'?ELEVATED_DECK_HEIGHT:0;
  if(!parkingIds.includes(id))this.plane(20000,20000,0,-1000,-.14,'ground');
  let carX=urban||id==='04'?1.85:0;let carZ=0;let roadEnd=-260;
  if(id==='08'||id==='05'){roadEnd=-40;carZ=id==='05'?-17.5:-10;}
  if(id==='10')roadEnd=-150;
  if(id==='03'){
   const medianWidth=1.6,totalWidth=w*2+medianWidth,deckCenter=-(w+medianWidth)/2;
   this.box(totalWidth+.6,.95,330,deckCenter,deck-.48,-95,'curb').castShadow=false;
   for(const side of [-1,1]){const edge=this.box(.24,.28,330,deckCenter+side*(totalWidth/2+.12),deck+.12,-95,'curb',.025);edge.castShadow=false;}
   for(const z of [8,-20,-65,-110]){
    this.box(totalWidth-2,.8,2.6,deckCenter,deck-1.3,z,'building',.08).castShadow=false;
    for(const side of [-1,1])this.box(1.65,deck-1.7,1.9,deckCenter+side*6,(deck-1.7)/2,z,'building',.06).castShadow=false;
   }
   // Keep the bridge edge unambiguous from both camera heights.
  }
  if(!['13','06','07','05','08'].includes(id)&&!parkingIds.includes(id))this.road(0,w,70,roadEnd,deck);
  if(parkingIds.includes(id)){this.parking(id);}
  else if(id==='13'){
   const points=[];for(let z=70;z>=-260;z-=5){const x=z>=-30?0:18*(1-Math.exp(-Math.pow((-z-30)/95,3)));points.push([x,z]);}const c=this.curveStrip(points,w,0);
   // Match the straight road's 1.6 m sidewalk and 0.2 m curb along the curve.
   for(const side of [-1,1]){this.curveLine(c,side*(w/2+.8),1.6,.037,false,'pavement');this.curveLine(c,side*(w/2+.1),.2,.067,false,'curb');}
   for(const offset of [-w/2+.25,w/2-.25])this.curveLine(c,offset,.13,0);
   for(let lane=1;lane<Math.round(w/3.7);lane++){const offset=-w/2+lane*3.7;if(Math.abs(offset)>.01)this.curveLine(c,offset,.13,0,true);}
   this.curveLine(c,-.10,.095,0,false,'yellow');this.curveLine(c,.10,.095,0,false,'yellow');
   
   
   for(const [x,z,bw,bd,bh]of [[-23,-66,14,13,8],[28,-19,17,13,8],[32,-70,13,11,11],[-18,-113,11,12,9],[42,-133,16,13,10]]){
    if(this.options.waterfront&&x>0)continue;
    this.building(x,z,bw,bd,bh);
    this.lawns.push(this.plane(bw+3,5,x,z+bd/2+3,.01,'grass'));this.tree(x-3,z+bd/2+3,.85);this.tree(x+4,z+bd/2+3,.95);
   }
  }else if(id==='05'||id==='08'){
   this.junction(id,w);this.environment(w,{cross:true,tee:id==='08'});
  }else if(id==='06'||id==='07'){
   this.ramp(id,w);
  }else{
   this.marks(w,3.7,70,-260,deck,id==='02'||id==='04'||id==='09',id!=='03');if(id==='03'){this.line(w/2-.25,70,-260,deck);this.line(-w/2+.25,70,-260,deck);}if(id!=='03')this.curbs(w,70,-260,deck);
   if(!['01'].includes(id))this.environment(id==='03'?w*2+1.6:w,{small:['04','11','12'].includes(id),elevated:id==='03',residential:false,centerX:id==='03'?-(w+1.6)/2:0});
   if(id==='11'){
    for(const x of [-w/2-1.2,w/2+1.2])this.box(1.2,5.3,7,x,2.56,-35,'building',.06);
    this.box(w+3.6,1.0,7,0,5.6,-35,'building',.05);
   }
   
  }
  if(['03','06','07'].includes(id))this.dividedCarriageway(w,deck);
  if(['02','09','13','12'].includes(id)&&this.options.roadworks)this.roadworks(w);
  if(['02','09','13'].includes(id)&&this.options.waterfront){this.mat.water.roughness=.28;this.mat.water.metalness=.32;this.roundedWater(w);}
  if(!['08',...parkingIds].includes(id)){const farX=id==='13'?18:0;this.road(farX,120,-256,-268,deck);}
  // Center the ego in its lane. Elevation is added to camera and car together.
  this.car.position.set(carX,deck+.02,carZ);this.car.rotation.set(0,0,0);
  this.configureCamera(id,options);
  // Omit a dash only when the viewport clips it to a tiny bottom-edge fragment.
  this.root.updateMatrixWorld(true);this.root.traverse(o=>{if(!o.userData.laneDash)return;const a=o.geometry.getAttribute('position'),ys=[];for(let i=0;i<a.count;i++)ys.push(new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld).project(this.camera).y);const lo=Math.min(...ys),hi=Math.max(...ys);if(lo < -1 && hi > -1 && hi < -.966)o.visible=false;});
  this.sun.position.set(-38,55+deck,48);this.sun.target.position.set(0,deck,-14);
  this.root.traverse(o=>{if(o.userData.buildingOwned)o.traverse(part=>{part.castShadow=false;part.receiveShadow=false;});});
  this.scene.updateMatrixWorld(true);
  let signature=2166136261;const mix=n=>{signature=Math.imul(signature^(Math.round(n*100000)),16777619)>>>0;};
  this.root.traverse(o=>{o.matrixWorld.elements.forEach(mix);if(o.geometry){const a=o.geometry.getAttribute('position').array;for(const n of a)mix(n);}});
  this.environmentSignature=signature.toString(16);
  this.camera.projectionMatrix.elements.forEach(mix);this.camera.matrixWorld.elements.forEach(mix);this.car.matrixWorld.elements.forEach(mix);
  this.geometrySignature=signature.toString(16);
  this.batchRoadMarkings();
  const fields={};
  for(const key of ['root','vegetation','lawns','current','parkingBays','parkingColumns','buildingPlacements','waterBounds','rampDimensions','roadworkZone','pedestrianPassages','junctionDimensions','parkingReplica','parkedVehicles','parkingTone','parkingShadow','parkingGhostMaterials','environmentSignature','geometrySignature','dividedRoad'])fields[key]=this[key];
  this.sceneCache.set(cacheKey,{fields,carPosition:this.car.position.clone(),carRotation:this.car.rotation.clone(),sunTarget:this.sun.target.position.clone()});
  if(this.sceneCache.size>8){const oldest=this.sceneCache.keys().next().value;this.disposeSceneRoot(this.sceneCache.get(oldest).fields.root);this.sceneCache.delete(oldest);}

 }
 disposeSceneRoot(root){
  const shared=new Set(Object.values(this.mat)),geometries=new Set(),materials=new Set();
  root.traverse(o=>{if(o.geometry&&!o.userData.sharedVehicleGeometry)geometries.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])if(!shared.has(m)&&!o.userData.sharedVehicleGeometry)materials.add(m);});
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());root.removeFromParent();
 }
 // Road paint shares material and render state; submit each color once.
 batchRoadMarkings(){
  for(const material of [this.mat.white,this.mat.yellow,this.mat.whitePaint,this.mat.yellowPaint]){
   const meshes=this.root.children.filter(o=>o.isMesh&&o.visible&&o.material===material&&!o.userData.buildingOwned&&o.geometry.index&&o.geometry.hasAttribute('uv')&&!o.castShadow);
   if(meshes.length<2)continue;
   const geometries=meshes.map(o=>o.geometry.clone().applyMatrix4(o.matrix));
   const merged=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());if(!merged)continue;
   const batch=new THREE.Mesh(merged,material);batch.receiveShadow=true;this.root.add(batch);
   for(const mesh of meshes){mesh.removeFromParent();mesh.geometry.dispose();}
  }
 }
 configureCamera(id,options){
  this.camera.clearViewOffset();
  const carX=this.car.position.x,carZ=this.car.position.z,deck=id==='03'?ELEVATED_DECK_HEIGHT:0;
  const aimAt=(x,y,z)=>{this.cameraAim=new THREE.Vector3(x,y,z);this.camera.lookAt(this.cameraAim);};
  const close=id==='01';const distance=close?18:23,height=close?6.8:8.5;
  this.camera.position.set(carX,height+deck,distance);aimAt(carX,deck,close?-20:-24);this.camera.updateMatrixWorld();this.camera.updateProjectionMatrix();
  // Keep the physical vehicle at 4.85m; camera changes determine its projected scale.
  if(parkingIds.includes(id)){
   const cameras={'10':[0,11,22,0,0,-5],'14':[0,34,.1,0,0,0],'15':[18,33,26,0,0,-3],'16':[0,26,22,0,0,-5],'17':[0,11,22,0,0,-5],'18':[0,26,22,0,0,-5],'19':[0,34,.1,0,0,0]};
   const c=cameras[id];this.camera.position.set(...c.slice(0,3));aimAt(...c.slice(3));
  }else if(['05','08'].includes(id)){
   const high=options.cameraView==='high';
   this.car.position.z=options.junctionPosition==='approaching'?14:-20.5;
   const z=this.car.position.z;
   this.camera.position.set(carX,high?32:8.5,z+(high?40:23));aimAt(carX,0,z-24);
   if(this.junctionDimensions)this.junctionDimensions.camera=high?'high-angle':'low-approach';
  }
  if(['02','09','13','06','07'].includes(id)&&options.cameraView==='high'){this.camera.position.set(carX,26,32);aimAt(carX,0,-16);}
  if(id==='03'&&options.cameraView==='high'){this.camera.position.set(carX,deck+26,32);aimAt(carX,deck,-16);}
  this.camera.updateMatrixWorld();this.camera.updateProjectionMatrix();
  this.framing=anchorVehicle(this.car,this.camera,(['14','16','18','19'].includes(id)||options.cameraView==='high')?'high':'low');
 }
 update({id,mode,trees,vehicle,buildings=true,waterfront=id==='13',roadworks=id==='12',laneCount,cameraView='low',junctionPosition='near'},{cameraMotion=false,environmentMotion=false,deferRender=false}={}){
  if(['05','08'].includes(id))cameraView=junctionPosition==='near'?'high':'low';
  const from=cameraMotion&&this.state?this.captureCamera():null;
  this.stopCameraMotion();
  this.stopEnvironmentMotion();
  const options={buildings,waterfront,roadworks,laneCount,cameraView,junctionPosition,palette:this.palette};
  const geometryChanged=id!==this.current||!this.options||['waterfront','roadworks','laneCount','palette'].some(key=>options[key]!==this.options[key]);
  if(geometryChanged)this.build(id,options);
  else if(cameraView!==this.options.cameraView||junctionPosition!==this.options.junctionPosition){this.options=options;this.configureCamera(id,options);}
  const dark=mode==='dark',idx=dark?1:0,isParking=parkingIds.includes(id),isIndoor=['10','14','15','16'].includes(id),vegetated=trees&&catalog.find(s=>s.id===id).trees;
  for(const [key,pair]of Object.entries(this.colors)){this.mat[key].color.set(pair[idx]);if(!dark){const c=this.mat[key].color,l=.2126*c.r+.7152*c.g+.0722*c.b;c.lerp(new THREE.Color(l,l,l),.025);}}
  const palettes={balanced:{road:'#59616c',ground:'#c4cfdd',pavement:'#d3dce4',building:'#d3d7dd'},cool:{road:'#626974',ground:'#c1c9d3',pavement:'#d4d9e0',building:'#d3d7dd'},neutral:{road:'#68696b',ground:'#cccdce',pavement:'#d9dadb',building:'#dcdddd'},warm:{road:'#6c6965',ground:'#d1cec8',pavement:'#dfdbd4',building:'#e2dfd9'},soft:{road:'#7d7f82',ground:'#d5d7da',pavement:'#e0e2e5',building:'#e1e3e6'}};
  if(!dark&&palettes[this.palette])for(const[k,c]of Object.entries(palettes[this.palette]))this.mat[k].color.set(c);
  this.mat.environmentBuilding.color.copy(this.mat.building.color);
  this.mat.whitePaint.color.copy(this.mat.white.color);this.mat.yellowPaint.color.copy(this.mat.yellow.color);this.mat.crosswalk.color.copy(this.mat.white.color);
  for(const lawn of this.lawns)lawn.material=this.mat.grass;
  this.ao.enabled=false;
  this.buildingTint.value=dark?0:1;
  this.mat.building.roughness=dark?.5:.62;this.mat.building.clearcoat=dark?.04:.025;this.mat.building.clearcoatRoughness=dark?.56:.6;this.mat.building.specularIntensity=dark?.36:.24;this.mat.building.envMapIntensity=dark?1.5:.55;
  for(const key of ['roughness','clearcoat','clearcoatRoughness','specularIntensity','envMapIntensity'])this.mat.environmentBuilding[key]=this.mat.building[key];
  this.mat.glass.roughness=dark?.46:.30;this.mat.glass.clearcoat=dark?.22:.72;this.mat.glass.envMapIntensity=dark?.35:.8;
  if(this.parkingTone)this.parkingTone.value=dark?1:0;if(isParking&&this.parkingShadow)this.parkingShadow.material.opacity=dark?.20:.30;
  if(isIndoor)for(const m of this.parkingGhostMaterials){const part=m.userData.ghostPart;m.color.set(part==='body'?(dark?'#424243':'#939aa3'):part==='glass'?(dark?'#2e2e30':'#5b626b'):(dark?'#272729':'#575c63'));}
  this.car.visible=vehicle;this.hemi.color.set(dark?'#d5d5d5':'#a6c8f2');this.hemi.groundColor.set(dark?'#717171':'#8b959d');this.hemi.intensity=dark?.95:1.05;
  this.sun.color.set(dark?'#ebebeb':'#fff5e8');this.sun.intensity=dark?1.65:3.0;this.fill.color.set(dark?'#cacaca':'#aacded');this.fill.intensity=dark?.45:.5;
  this.scene.environmentIntensity=isParking?(dark?.28:.42):(dark?.42:.52);
  if(isParking){this.hemi.color.set(dark?'#e5e5e5':'#d9e2eb');this.hemi.groundColor.set(dark?'#717171':'#91969e');this.hemi.intensity=dark?.65:.85;this.sun.color.set(dark?'#eeeeee':'#fff5e8');this.sun.intensity=dark?1.4:2.6;this.fill.color.set(dark?'#cccccc':'#d7e2eb');this.fill.intensity=.35;}
  this.sun.position.set(-38,55+(id==='03'?ELEVATED_DECK_HEIGHT:0),48);
  const bodyContact=this.egoContact.children[0];bodyContact.scale.y=1;bodyContact.position.z=0;bodyContact.material.uniforms.opacity.value=dark?.42:.52;
  this.environmentTone.value=dark?1:0;this.darkAerialPerspective.value=dark?1:0;
  this.sky.material.uniforms.range.value=dark?.32:.20;this.sky.material.uniforms.top.value.set(dark?'#2d2e30':'#96bde0');this.sky.material.uniforms.bottom.value.set(dark?'#48494b':'#dce5ee');
  this.scene.fog.color.set(dark?'#48494b':'#dce5ee');this.scene.fog.near=isIndoor?100000:55;this.scene.fog.far=isIndoor?120000:210;this.sky.visible=!isIndoor;this.scene.background=isIndoor?new THREE.Color().setRGB(dark?.022:.66,dark?.022:.94,dark?.022:1.45):null;
  if(dark){
   this.sky.material.uniforms.range.value=.20;
   this.sky.material.uniforms.top.value.set('#202225');
   this.sky.material.uniforms.bottom.value.set('#373a3e');
   this.scene.fog.color.copy(this.sky.material.uniforms.bottom.value);
  }
  if(!dark&&this.palette!=='current'){
   const warm=this.palette==='warm';this.hemi.color.set(this.palette==='balanced'?'#cedded':warm?'#ece8e2':'#e2e5e8');this.fill.color.set(this.palette==='balanced'?'#cbdde9':warm?'#e8e4df':'#dfe3e8');
   if(isIndoor){const c=this.palette==='balanced'?[.54,.62,.72]:this.palette==='cool'?[.72,.74,.77]:this.palette==='warm'?[.75,.73,.69]:this.palette==='soft'?[.77,.78,.79]:[.72,.73,.74];this.scene.background=new THREE.Color().setRGB(...c);}
  }
  this.state={id,mode,trees:vegetated,vehicle,buildings,waterfront,roadworks,laneCount,cameraView,junctionPosition};
  this.environmentTargets={buildings:buildings?1:0,trees:vegetated?1:0};
  if(!environmentMotion||geometryChanged)for(const key of ['buildings','trees'])Object.assign(this.environmentGrowth[key],{value:this.environmentTargets[key],velocity:0});
  this.applyEnvironmentGrowth();
  if(environmentMotion&&!geometryChanged)this.startEnvironmentMotion();
  if(from)this.startCameraMotion(from);else if(!deferRender)this.renderFrame();
  if(!from)this.onCameraFrame?.(false);
  return this.audit();
 }
 applyEnvironmentGrowth(){
  const b=this.environmentGrowth.buildings.value,t=this.environmentGrowth.trees.value;
  this.root.traverse(o=>{if(!o.userData.buildingOwned)return;const base=o.userData.growthBaseY??(o.userData.growthBaseY=o.position.y);o.visible=b>.0005;o.position.y=base-o.userData.growthHeight*(1-b);});
  this.vegetation.visible=t>.0005;
  for(const tree of this.vegetation.children){
   if(tree.userData.growthHeight===undefined){let height=1;for(const mesh of tree.children){mesh.geometry.computeBoundingBox();height=Math.max(height,(mesh.position.y+mesh.geometry.boundingBox.max.y*mesh.scale.y)*tree.scale.y);}tree.userData.growthHeight=height+.3;tree.userData.growthBaseY=tree.position.y;}
   tree.position.y=tree.userData.growthBaseY-tree.userData.growthHeight*(1-t);
  }
  // Ease the ground fade in before the canopy finishes rising; no hard green first frame.
  const lawnOpacity=THREE.MathUtils.smoothstep(t,0,.65);
  for(const lawn of this.lawns)lawn.visible=lawnOpacity>.0005;
  this.mat.grass.opacity=lawnOpacity;
 }
 stopEnvironmentMotion(){const active=!!this.environmentMotion;if(active)cancelAnimationFrame(this.environmentMotion.frame);this.environmentMotion=null;if(active)this.onEnvironmentFrame?.(false);}
 finishEnvironmentMotion(){this.stopEnvironmentMotion();if(!this.environmentTargets)return;for(const key of ['buildings','trees'])Object.assign(this.environmentGrowth[key],{value:this.environmentTargets[key],velocity:0});this.applyEnvironmentGrowth();this.renderFrame();this.onEnvironmentFrame?.(false);}
 startEnvironmentMotion(){
  const motion={frame:0,last:0,elapsed:0,exits:{}};this.environmentMotion=motion;
  this.onEnvironmentFrame?.(true);
  const tick=now=>{
   if(this.environmentMotion!==motion)return;
   const dt=motion.last?Math.min(.048,(now-motion.last)/1000):0;motion.last=now;motion.elapsed+=dt;let settled=true;
   for(const key of ['buildings','trees']){
    const channel=this.environmentGrowth[key],target=this.environmentTargets[key];
    if(!target){
     const exit=motion.exits[key]??={value:channel.value,velocity:Math.min(0,channel.velocity),duration:key==='buildings'?.34:.30},u=Math.min(1,motion.elapsed/exit.duration);
     channel.value=Math.max(0,exit.value*(1-u*u*u)+(u*u*u-2*u*u+u)*exit.velocity*exit.duration);
     channel.velocity=u===1?0:-3*exit.value*u*u/exit.duration+(3*u*u-4*u+1)*exit.velocity;
    }else{const omega=12,delta=channel.value-target,c=channel.velocity+omega*delta,decay=Math.exp(-omega*dt);channel.value=THREE.MathUtils.clamp(target+(delta+c*dt)*decay,0,1);channel.velocity=(channel.velocity-omega*c*dt)*decay;}
    if(Math.abs(channel.value-target)>.001||Math.abs(channel.velocity)>.01)settled=false;
   }
   this.applyEnvironmentGrowth();if(!this.cameraMotion)this.renderFrame();this.onEnvironmentFrame?.(true);
   if(settled){this.finishEnvironmentMotion();return;}motion.frame=requestAnimationFrame(tick);
  };
  motion.frame=requestAnimationFrame(tick);
 }
 renderFrame(moving=false){
  const {id,mode,vehicle}=this.state,dark=mode==='dark',isParking=parkingIds.includes(id);
  const shadowKey=JSON.stringify([this.car.position.toArray(),this.car.rotation.toArray(),vehicle,this.environmentGrowth.trees.value,mode]);
  const shadowChanged=this.shadowSceneRoot!==this.root||this.shadowKey!==shadowKey||this.renderer.shadowMap.needsUpdate;
  const reflectors=[...this.buildingPlacements,...this.parkingColumns.map(c=>({x:c.position.x,z:c.position.z,width:.68,depth:.68}))];this.buildingCount.value=Math.min(32,reflectors.length);reflectors.slice(0,32).forEach((b,i)=>this.buildingFootprints.value[i].set(b.x,b.z,b.width/2,b.depth/2));
  this.scene.updateMatrixWorld(true);this.mirror.position.y=0;this.mirror.updateMatrixWorld(true);
  const reflective=[];this.root.traverse(o=>{if(o.isMesh&&(o.userData.reflectiveSurface||['road','ground','pavement','water','parkingFloor','parkingBay'].some(k=>o.material===this.mat[k]))){reflective.push([o,o.visible]);o.visible=false;}});
  for(const column of this.parkingColumns){if(column.userData.glow)column.userData.glow.visible=false;}
  this.egoContact.visible=false;this.tailReflection.visible=false;this.car.visible=false;this.renderer.shadowMap.needsUpdate=false;
  if(this.options.waterfront){
   const excluded=[];this.root.traverse(o=>{if(o.userData.buildingOwned){excluded.push([o,o.visible]);o.visible=false;}});
   this.mirror.onBeforeRender(this.renderer,this.scene,this.camera);
   this.waterReflectionMatrix.value.copy(this.mirror.material.uniforms.textureMatrix.value).multiply(new THREE.Matrix4().copy(this.mirror.matrixWorld).invert());
   const prevTarget=this.renderer.getRenderTarget();this.blurMaterial.uniforms.source.value=this.mirror.getRenderTarget().texture;this.blurMaterial.uniforms.direction.value.set(7/this.width,7/this.height);this.renderer.setRenderTarget(this.waterReflectionTarget);this.blurQuad.render(this.renderer);this.renderer.setRenderTarget(prevTarget);
   for(const [o,visible]of excluded)o.visible=visible;
  }
  // Building reflection contains no sky; clear areas must not tint the ground.
  this.mirror.position.y=isParking?0:-.14;this.mirror.updateMatrixWorld(true);
  const priorBackground=this.scene.background,priorSky=this.sky.visible,priorAlpha=this.renderer.getClearAlpha(),priorClear=this.renderer.getClearColor(new THREE.Color());
  this.scene.background=null;this.sky.visible=false;this.renderer.setClearColor(0x000000,0);
  const reflectionExcluded=[];this.root.traverse(o=>{if(o.isMesh&&!o.userData.buildingOwned&&!this.parkingColumns.includes(o)){reflectionExcluded.push([o,o.visible]);o.visible=false;}});
  this.groundReflectionAudit={trees:0,buildings:0};this.root.traverse(o=>{if(!o.isMesh||!o.visible)return;if(o.userData.buildingOwned)this.groundReflectionAudit.buildings++;if([this.mat.leaf,this.mat.leaf2,this.mat.trunk].includes(o.material))this.groundReflectionAudit.trees++;});
  this.mirror.onBeforeRender(this.renderer,this.scene,this.camera);
  for(const [o,visible]of reflectionExcluded)o.visible=visible;
  this.scene.background=priorBackground;this.sky.visible=priorSky;this.renderer.setClearColor(priorClear,priorAlpha);
  const rt=this.renderer.getRenderTarget();
  this.blurMaterial.uniforms.source.value=this.mirror.getRenderTarget().texture;this.blurMaterial.uniforms.direction.value.set(4/this.width,0);this.renderer.setRenderTarget(this.blurTargets[0]);this.blurQuad.render(this.renderer);
  this.blurMaterial.uniforms.source.value=this.blurTargets[0].texture;this.blurMaterial.uniforms.direction.value.set(0,4/this.height);this.renderer.setRenderTarget(this.blurTargets[1]);this.blurQuad.render(this.renderer);this.renderer.setRenderTarget(rt);
  this.reflectionMatrix.value.copy(this.mirror.material.uniforms.textureMatrix.value).multiply(new THREE.Matrix4().copy(this.mirror.matrixWorld).invert());
  for(const [o,visible]of reflective)o.visible=visible;
  for(const column of this.parkingColumns){if(column.userData.glow)column.userData.glow.visible=true;}
  this.car.visible=vehicle;this.tailReflection.visible=vehicle;updateTailLight(this.tailReflection,this.car,dark,isParking);this.renderer.shadowMap.needsUpdate=shadowChanged;
  this.egoContact.visible=vehicle;this.egoContact.position.set(this.car.position.x,this.car.position.y-.02,this.car.position.z);
  this.vehicleDetail.setVehicleFrame(this.framing.vehicleFrame,vehicle);this.composer.render();
  this.shadowSceneRoot=this.root;this.shadowKey=shadowKey;this.shadowVehiclePosition=this.car.position.clone();this.shadowFrameAudit={updated:shadowChanged,car:this.shadowVehiclePosition.toArray(),contact:this.egoContact.position.toArray()};
 }
 captureCamera(){
  const ego=this.car.position.clone().add(new THREE.Vector3(0,.85,0)),projected=ego.clone().project(this.camera);
  return {position:this.camera.position.clone(),carPosition:this.car.position.clone(),quaternion:this.camera.quaternion.clone(),aim:this.cameraAim.clone(),offset:new THREE.Vector2(this.camera.view?.offsetX||0,this.camera.view?.offsetY||0),anchor:new THREE.Vector2((projected.x+1)/2,(1-projected.y)/2),velocity:this.cameraMotion?.velocity.clone()||new THREE.Vector3(),carVelocity:this.cameraMotion?.carVelocity?.clone()||new THREE.Vector3(),framing:this.framing};
 }
 applyCamera(pose){if(pose.carPosition)this.car.position.copy(pose.carPosition);this.camera.position.copy(pose.position);this.cameraAim.copy(pose.aim);if(pose.quaternion)this.camera.quaternion.copy(pose.quaternion);else this.camera.lookAt(this.cameraAim);this.camera.setViewOffset(1920,1080,pose.offset.x,pose.offset.y,1920,1080);this.camera.updateMatrixWorld(true);}
 stopCameraMotion(){
  const motion=this.cameraMotion;if(!motion)return;
  cancelAnimationFrame(motion.frame);this.cameraMotion=null;
  this.applyCamera(motion.to);this.framing=motion.to.framing;
  this.setResolution(...motion.resolution);
 }
 finishCameraMotion(){
  const motion=this.cameraMotion;if(!motion)return;
  this.applyCamera(motion.to);this.framing=motion.to.framing;this.stopCameraMotion();this.renderFrame();this.onCameraFrame?.(false);
 }
 startCameraMotion(from){
  const to=this.captureCamera();
  if(from.position.distanceTo(to.position)<.00001&&from.aim.distanceTo(to.aim)<.00001&&from.offset.distanceTo(to.offset)<.00001){this.renderFrame();this.onCameraFrame?.(false);return;}
  const motion={from,to,resolution:[this.width,this.height],frame:0,elapsed:0,last:0,velocity:from.velocity.clone(),carVelocity:from.carVelocity.clone()};this.cameraMotion=motion;
  const fromPivot=from.carPosition.clone().add(new THREE.Vector3(0,.85,0)),toPivot=to.carPosition.clone().add(new THREE.Vector3(0,.85,0)),pivot=fromPivot.clone();
  const a=new THREE.Spherical().setFromVector3(from.position.clone().sub(fromPivot)),b=new THREE.Spherical().setFromVector3(to.position.clone().sub(toPivot));
  b.theta=a.theta+Math.atan2(Math.sin(b.theta-a.theta),Math.cos(b.theta-a.theta));
  const carDirection=to.carPosition.clone().sub(from.carPosition),travel=carDirection.length(),approach=['05','08'].includes(this.current)&&travel>.01,forward=carDirection.z<0;
  const approachSpeed=10,brakeDuration=Math.min(2,2*travel/approachSpeed),cruiseDuration=Math.max(0,(travel-approachSpeed*brakeDuration/2)/approachSpeed);
  const baseDuration=approach&&forward?cruiseDuration+brakeDuration:Math.max(.65,Math.min(2.6,travel/15));
  const referenceLiftStart=Math.max(0,cruiseDuration+brakeDuration*.40-.8/.969),baseLiftDuration=baseDuration-referenceLiftStart,leadDuration=.45/.969;
  // Advance the visible prelude cumulatively by 5%, 7%, 3%, 5%, 7%, 7%, and 10%; retain the approved duration.
  const liftStart=Math.max(0,referenceLiftStart-leadDuration)*.95*.93*.97*.95*.93*.93*.90+leadDuration;
  const duration=approach&&forward?(referenceLiftStart+baseLiftDuration*1.05)*1.02:baseDuration,liftDuration=duration-liftStart;
  // Advance vehicle stopping cumulatively by 5%, 10%, and 10%, independently of camera timing.
  const vehicleStopTime=(referenceLiftStart+baseLiftDuration*.42)*.95*.90*.90,vehicleBrakeTime=Math.min(1.6,vehicleStopTime*.5),vehicleCruiseTime=vehicleStopTime-vehicleBrakeTime;
  const vehicleSpeed=travel/Math.max(.001,vehicleCruiseTime+vehicleBrakeTime*.5);
  const junctionLiftEase=time=>{
  const preludeDuration=leadDuration,preludeAmount=.07,preludeStart=liftStart-preludeDuration;
  if(time<liftStart){
   const lead=THREE.MathUtils.clamp((time-preludeStart)/preludeDuration,0,1);
   return preludeAmount*lead*lead;
  }else{
   const u=THREE.MathUtils.clamp((time-liftStart)/liftDuration,0,1),omega=9.5/liftDuration,elapsed=u*liftDuration;
   // Match the prelude's position and velocity at the spring's start.
   const remaining=1-preludeAmount,startVelocity=2*preludeAmount/preludeDuration,c=omega*remaining-startVelocity;
   const tail=(remaining+c*liftDuration)*Math.exp(-omega*liftDuration);
   return 1-(remaining+c*elapsed)*Math.exp(-omega*elapsed)+tail*u*u*(3-2*u);
  }
  };
  const liftAtVehicleStop=junctionLiftEase(vehicleStopTime);
  const initialCarSlope=Math.max(0,Math.min(2,from.carVelocity.dot(carDirection)/Math.max(.001,travel*travel)*duration));
  const direction=to.position.clone().sub(from.position),initialVelocity=Math.max(0,Math.min(8,from.velocity.dot(direction)/Math.max(.001,direction.lengthSq()))),frequency=13.8;
  const pose={position:new THREE.Vector3(),carPosition:new THREE.Vector3(),quaternion:new THREE.Quaternion(),aim:new THREE.Vector3(),offset:new THREE.Vector2()},bounds=new THREE.Box3().setFromObject(this.car),points=[];
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])points.push(new THREE.Vector3(x,y,z).sub(to.carPosition));
  // Keep the same sampling grid throughout the move; resolution changes make
  // thin lane markings pop at the first and last frame.
  this.applyCamera(from);this.framing=from.framing;this.renderFrame();this.onCameraFrame?.(true);
  const tick=now=>{
   if(this.cameraMotion!==motion)return;const dt=motion.last?Math.min(48,now-motion.last):0;motion.elapsed+=dt;motion.last=now;
   // One clock keeps vehicle braking and the delayed camera lift coordinated.
   const time=motion.elapsed/1000/(approach&&forward?.969:1),decay=Math.exp(-frequency*time),spring=Math.min(1,Math.max(0,1+(-1+(initialVelocity-frequency)*time)*decay));
   const motionDuration=approach&&forward?vehicleStopTime:duration;
   const t=Math.min(1,time/motionDuration);motion.progress=t;const brakeTime=Math.max(0,time-cruiseDuration);
   const vehicleBrakeElapsed=THREE.MathUtils.clamp(time-vehicleCruiseTime,0,vehicleBrakeTime);
   const forwardDistance=time>=vehicleStopTime?travel:time<vehicleCruiseTime?vehicleSpeed*time:vehicleSpeed*vehicleCruiseTime+vehicleSpeed*vehicleBrakeElapsed-.5*vehicleSpeed/vehicleBrakeTime*vehicleBrakeElapsed*vehicleBrakeElapsed;
   const carEase=approach?(forward?Math.min(1,forwardDistance/Math.max(.001,travel)):(t*t*(3-2*t)+(t*t*t-2*t*t+t)*initialCarSlope)):spring;
   if(approach?t>=1:1-spring<.0008){this.finishCameraMotion();return;}
   const previousPosition=this.camera.position.clone(),previousCar=this.car.position.clone();
   pose.carPosition.lerpVectors(from.carPosition,to.carPosition,carEase);pivot.copy(pose.carPosition).add(new THREE.Vector3(0,.85,0));
   // The camera retains the shared critically damped response at a slower timescale.
   let ease=spring;
   if(approach&&forward){
    ease=THREE.MathUtils.smootherstep(junctionLiftEase(time),0,liftAtVehicleStop);
   }else if(approach)ease=carEase;
   pose.aim.lerpVectors(from.aim,to.aim,ease);pose.offset.lerpVectors(from.offset,to.offset,ease);pose.quaternion.slerpQuaternions(from.quaternion,to.quaternion,ease);
   // All camera channels and the vehicle settle on the same frame.
   const framingEase=ease;
   pose.position.setFromSpherical(new THREE.Spherical(THREE.MathUtils.lerp(a.radius,b.radius,framingEase),THREE.MathUtils.lerp(a.phi,b.phi,ease),THREE.MathUtils.lerp(a.theta,b.theta,ease))).add(pivot);this.applyCamera(pose);
   // Keep ego on the screen-space path between the two composed endpoints.
   const anchorEase=framingEase;
   const actual=pivot.clone().project(this.camera),anchor=from.anchor.clone().lerp(to.anchor,anchorEase);
   pose.offset.x+=((actual.x+1)/2-anchor.x)*1920;pose.offset.y+=((1-actual.y)/2-anchor.y)*1080;
   this.camera.setViewOffset(1920,1080,pose.offset.x,pose.offset.y,1920,1080);this.camera.updateMatrixWorld(true);
   if(dt){motion.velocity.copy(this.camera.position).sub(previousPosition).multiplyScalar(1000/dt);motion.carVelocity.copy(this.car.position).sub(previousCar).multiplyScalar(1000/dt);}
   const projected=points.map(p=>p.clone().add(pose.carPosition).project(this.camera)),xs=projected.map(p=>(p.x+1)/2),ys=projected.map(p=>(1-p.y)/2);
   this.framing={...to.framing,vehicleFrame:{left:Math.min(...xs),top:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys),bottom:Math.max(...ys)}};
   this.renderFrame(true);this.onCameraFrame?.(true);motion.frame=requestAnimationFrame(tick);
  };
  motion.frame=requestAnimationFrame(tick);
 }
 setVehicle(car){this.finishEnvironmentMotion();this.stopCameraMotion();for(const cached of this.sceneCache.values())this.disposeSceneRoot(cached.fields.root);this.sceneCache.clear();this.car.removeFromParent();this.egoContact.removeFromParent();disposeVehicle(this.car);disposeVehicle(this.egoContact);this.car=car;this.scene.add(car);this.egoContact=createContactShadows(car);this.scene.add(this.egoContact);
  // The scene may already have been built with the loading proxy. Rebuild on
  // the next update so the real mesh receives its lane position and framing.
  this.current=null;
 }
 setResolution(width,height){
  if(this.width===width&&this.height===height)return;
  this.width=width;this.height=height;const shadowSize=width<1920?2048:4096;if(this.sun.shadow.mapSize.x!==shadowSize){this.sun.shadow.map?.dispose();this.sun.shadow.mapPass?.dispose();this.sun.shadow.map=null;this.sun.shadow.mapPass=null;this.sun.shadow.mapSize.set(shadowSize,shadowSize);this.renderer.shadowMap.needsUpdate=true;}this.renderer.setSize(width,height,false);this.composer.setSize(width,height);this.mirror.getRenderTarget().setSize(width,height);this.blurTargets.forEach(t=>t.setSize(width,height));this.waterReflectionTarget.setSize(width,height);this.vehicleDetail.uniforms.texel.value.set(1/width,1/height);
 }
 audit(){
  const center=this.car.position.clone().add(new THREE.Vector3(0,.9,0)).project(this.camera);
  const box=new THREE.Box3().setFromObject(this.car),pts=[];for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])pts.push(new THREE.Vector3(x,y,z).project(this.camera));
  const treePlacements=this.vegetation.children.map(t=>{const p=t.position;const lawn=this.lawns.find(l=>{const a=l.geometry.parameters;return Math.abs(p.x-l.position.x)<a.width/2-1&&Math.abs(p.z-l.position.z)<a.height/2-1;});return {x:p.x,z:p.z,insideLawn:!!lawn};});
  const minX=Math.min(...pts.map(p=>p.x)),maxX=Math.max(...pts.map(p=>p.x)),minY=Math.min(...pts.map(p=>p.y)),maxY=Math.max(...pts.map(p=>p.y));
  const glass=[];let exhaustCount=0;this.car.traverse(o=>{if(!o.isMesh)return;if(o.name==='Object_39')exhaustCount++;for(const m of (Array.isArray(o.material)?o.material:[o.material]))if(m.name==='glass')glass.push({opacity:m.opacity,transparent:m.transparent,transmission:m.transmission||0,roughness:m.roughness,envMapIntensity:m.envMapIntensity});});
  const junctionFrame=['05','08'].includes(this.current)?[-1,1].flatMap(x=>[-28.9,-51.1].map(z=>{const p=new THREE.Vector3(x*11.1,0,z).project(this.camera);return {x:(p.x+1)/2,y:(1-p.y)/2};})):null;
  return {...this.state,dividedRoad:this.dividedRoad,groundReflection:this.groundReflectionAudit,shadow:this.shadowFrameAudit,environmentGrowth:{buildings:this.environmentGrowth.buildings.value,trees:this.environmentGrowth.trees.value},palette:this.palette,roadColor:this.mat.road.color.getHexString(),groundColor:this.mat.ground.color.getHexString(),lightIntensity:[this.hemi.intensity,this.sun.intensity,this.fill.intensity],framing:this.framing,environmentSignature:this.environmentSignature,glass,exhaustCount,contactPatches:this.egoContact.children.length,junctionFrame,vehicleSpec:this.car.userData.vehicleSpec,junctionDimensions:this.junctionDimensions,parkingReplica:this.parkingReplica,parkedVehicles:this.parkedVehicles||[],buildingOwnedCount:this.root.children.filter(o=>o.userData.buildingOwned).length,buildingShadowCasters:this.root.children.filter(o=>o.userData.buildingOwned&&o.castShadow).length,buildingVSMParticipants:this.root.children.filter(o=>o.userData.buildingOwned&&(o.castShadow||o.receiveShadow)).length,roadworkZone:this.roadworkZone,pedestrianPassages:this.pedestrianPassages,rampDimensions:this.rampDimensions,vehicleDimensions:box.getSize(new THREE.Vector3()).toArray(),vehicleBounds:{left:(minX+1)/2,top:(1-maxY)/2,width:(maxX-minX)/2,height:(maxY-minY)/2,bottom:(1-minY)/2},center:{x:(center.x+1)/2,y:(1-center.y)/2},roadElevation:this.car.position.y-.02,roadSlope:0,horizon:this.environmentTone.value?'shared smootherstep from 65m to 300m':'original material-specific smootherstep',treePlacements,buildingsPlaced:this.buildingPlacements,waterBounds:this.waterBounds,parkingBays:this.parkingBays,parkingColumns:this.parkingColumns.map(c=>c.position.toArray()),vehiclePhysicalLength:this.car.userData.vehicleSpec.length||4.85,geometry:this.current,geometrySignature:this.geometrySignature,camera:this.camera.position.toArray(),car:this.car.position.toArray()};
 }
}
