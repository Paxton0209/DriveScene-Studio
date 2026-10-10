import {attachGroundReflection} from './ground-reflection.js';
import {createTailLight,updateTailLight} from './tail-light.js';
import {anchorVehicle} from './framing.js';
import {buildOutdoorParking} from './outdoor-parking.js';
import {buildParkingReference} from './parking-reference.js';
import * as THREE from 'three';
import {createContactShadows} from './contact-shadows.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {GTAOPass} from 'three/addons/postprocessing/GTAOPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {FullScreenQuad} from 'three/addons/postprocessing/Pass.js';
import {Reflector} from 'three/addons/objects/Reflector.js';
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

export class World {
 constructor(canvas,car,{palette='balanced',alpha=false,width=1920,height=1080}={}){
  this.palette=palette;this.width=width;this.height=height;
  this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,preserveDrawingBuffer:true,alpha});
  this.renderer.setPixelRatio(1);this.renderer.setSize(width,height,false);
  this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.VSMShadowMap;
  this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1;
  this.scene=new THREE.Scene();this.camera=new THREE.PerspectiveCamera(38,16/9,.2,12000);
  this.mat={};this.colors={
   road:['#545e6d','#303031'],ground:['#b4c3d6','#45484d'],pavement:['#d1dbee','#575b62'],
   curb:['#d6e1ef','#7b8088'],building:['#d3d7dd','#817d7d'],glass:['#a6bed0','#606a72'],
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
  this.mat.building=new THREE.MeshPhysicalMaterial({color:this.colors.building[0],roughness:.30,metalness:.04,clearcoat:.32,clearcoatRoughness:.34,envMapIntensity:1.1});
  this.buildingTint={value:1};
  this.mat.building.onBeforeCompile=shader=>{
   shader.uniforms.buildingTint=this.buildingTint;
   shader.vertexShader='varying float vBuildingHeight;varying vec3 vBuildingNormal;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvBuildingHeight=(modelMatrix*vec4(transformed,1.0)).y;vBuildingNormal=normalize(mat3(modelMatrix)*normal);');
   shader.fragmentShader='uniform float buildingTint;varying float vBuildingHeight;varying vec3 vBuildingNormal;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>','float shaded=1.-smoothstep(-.3,.7,dot(normalize(vBuildingNormal),normalize(vec3(-38.,55.,48.))));vec3 lightFace=mix(vec3(.94,.97,1.0),vec3(.90,.93,.98),shaded);vec3 darkFace=mix(vec3(.80,.88,.96),vec3(.58,.63,.68),shaded);outgoingLight*=mix(darkFace,lightFace,buildingTint);outgoingLight*=.90+.10*(1.-exp(-max(0.,vBuildingHeight)/4.));\n#include <opaque_fragment>');
  };
  this.mat.white.polygonOffset=true;this.mat.white.polygonOffsetFactor=-2;this.mat.white.polygonOffsetUnits=-2;
  this.mat.yellow.polygonOffset=true;this.mat.yellow.polygonOffsetFactor=-2;this.mat.yellow.polygonOffsetUnits=-2;
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
  this.sky=new THREE.Mesh(new THREE.SphereGeometry(10000,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{range:{value:.12},top:{value:new THREE.Color('#72afe0')},bottom:{value:new THREE.Color('#c4ddec')}},vertexShader:'varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec3 v;uniform vec3 top;uniform vec3 bottom;uniform float range;void main(){float t=smoothstep(0.,range,normalize(v).y);gl_FragColor=vec4(mix(bottom,top,t),1.0);#include <colorspace_fragment> }'.replace(';#include',';\n#include').replace('fragment> }','fragment>\n}') }));
  this.tailReflection=createTailLight();this.scene.add(this.tailReflection);
  this.scene.add(this.sky);this.scene.fog=new THREE.Fog('#c9dbea',85,280);this.car=car;this.scene.add(this.car);this.egoContact=createContactShadows(this.car);this.scene.add(this.egoContact);this.current=null;
  const target=new THREE.WebGLRenderTarget(width,height,{type:THREE.HalfFloatType,samples:4});
  this.composer=new EffectComposer(this.renderer,target);this.composer.addPass(new RenderPass(this.scene,this.camera));
  this.ao=new GTAOPass(this.scene,this.camera,width,height,{}, {radius:1.2,thickness:1.5,distanceExponent:1,scale:.85,samples:16,screenSpaceRadius:false},{radius:5,lumaPhi:8,depthPhi:2,normalPhi:3});
  this.ao.blendIntensity=.8;this.composer.addPass(this.ao);this.composer.addPass(new OutputPass());
  this.vehicleDetail=createVehicleDetail();this.vehicleDetail.uniforms.texel.value.set(1/width,1/height);this.composer.addPass(this.vehicleDetail);
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
   material.onBeforeCompile=shader=>{compile.call(material,shader);shader.fragmentShader=shader.fragmentShader.replace('#include <fog_fragment>',`#ifdef USE_FOG
    float t=clamp((vFogDepth-${material===this.mat.ground?'45.':material===this.mat.water?'65.':'105.'})/${material===this.mat.ground?'180.':material===this.mat.water?'125.':'140.'},0.,1.);
    float aerial=t*t*t*(t*(t*6.-15.)+10.);
    float fogFactor=fogNear>10000.?0.:aerial;
    gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,fogFactor);
    #endif`);};
  }

 }
 box(w,h,d,x,y,z,mat='building',round=0){const g=round?new RoundedBoxGeometry(w,h,d,2,round):new THREE.BoxGeometry(w,h,d);const m=new THREE.Mesh(g,this.mat[mat]);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;this.root.add(m);return m;}
 plane(w,d,x,z,y,mat){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),this.mat[mat]);m.rotation.x=-Math.PI/2;m.position.set(x,y,z);m.receiveShadow=true;this.root.add(m);return m;}
 road(x,w,z0,z1,y=0){return this.plane(w,Math.abs(z1-z0),x,(z0+z1)/2,y+.015,'road');}
 line(x,z0,z1,y=0,mat='white',width=.13){this.plane(width,Math.abs(z1-z0),x,(z0+z1)/2,y+.028,mat);}
 dashed(x,z0,z1,y=0){for(let z=z0;z>z1;z-=10){const end=Math.max(z-3.8,z1);this.line(x,z,end,y);this.root.children.at(-1).userData.laneDash=true;}}
 marks(w,lane,z0,z1,y=0,twoWay=false,edges=true){
  if(edges){this.line(-w/2+.25,z0,z1,y);this.line(w/2-.25,z0,z1,y);}
  const n=Math.round(w/lane);for(let i=1;i<n;i++){const x=-w/2+i*lane;if(twoWay&&i===n/2){this.line(x-.105,z0,z1,y,'yellow',.095);this.line(x+.105,z0,z1,y,'yellow',.095);}else this.dashed(x,z0,Math.max(z1,-650),y);}
 }
 curbs(w,z0,z1,y=0){for(const s of [-1,1]){this.box(1.6,.18,z0-z1,s*(w/2+.8),y-.02,(z0+z1)/2,'pavement');this.box(.20,.20,z0-z1,s*(w/2+.1),y,(z0+z1)/2,'curb');}}
 building(x,z,w,d,h,variantIndex){
  if(!this.options.buildings)return;
  const before=new Set(this.root.children);
  const variant=(variantIndex??this.buildingPlacements.length)%3;
  this.buildingPlacements.push({x,z,width:w,depth:d,variant:['solid-cap','solid-wing','solid-terrace'][variant]});
  // Three restrained silhouettes share the same footprint and material family.
  if(variant===0){
   this.box(w,h,d,x,h/2-.10,z,'building',.16);
   this.box(w*.76,.30,d*.73,x+w*.04,h+.03,z-d*.05,'building',.07);
  }else if(variant===1){
   this.box(w*.57,h,d*.88,x-w*.215,h/2-.10,z-d*.06,'building',.13);
   this.box(w*.43,h*.72,d,x+w*.285,h*.36-.10,z,'building',.13);
  }else{
   this.box(w,h*.50,d,x,h*.25-.10,z,'building',.13);
   this.box(w*.69,h*.50,d*.70,x+w*.08,h*.75-.10,z-d*.15,'building',.13);
   // A solid stepped volume intentionally has no decorative glazing.
  }
  // Building ground shadows removed by visual direction.
  for(const o of this.root.children)if(!before.has(o)){
   o.userData.buildingOwned=true;
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
 environment(w,{small=false,cross=false,tee=false,elevated=false,residential=false}={}){
  const sites=[[-1,6,9,13,small?5:23],[1,-9,13,11,small?4.5:12],[-1,-31,13,17,small?6:14],[1,-54,8,12,small?5.3:21],[-1,-83,11,13,small?4:10],[1,-107,14,15,small?6:13],[-1,-144,9,14,small?5:16],[1,-180,11,14,small?4:9]];
  let siteVariant=0;
  for(const [s,z,bw,bd,bh]of sites.map(v=>residential?[v[0],v[1]-8,v[2]*.82,v[3]*.8,3.8]:v)){if(elevated&&s===-1&&z>0)continue;if(this.options.waterfront&&s===1)continue;if(cross&&Math.abs(z+40)<24)continue;if(tee&&z< -35)continue;const x=s*(w/2+(residential?5.8:8)+bw/2);const variant=siteVariant++;if(!(s===-1&&z>0&&['02','09'].includes(this.current)))this.building(x,z,bw,bd,bh,variant);const lawnX=s*(w/2+(residential?3.8:4.5)),lawnDepth=bd+5;const p=this.plane(residential?3.6:5.0,lawnDepth,lawnX,z,.025,'grass');this.lawns.push(p);this.tree(lawnX,z+lawnDepth*.22,small?.8:1.05);if(z>-90)this.tree(lawnX,z-lawnDepth*.24,small?.73:.83);}
  if(tee){for(const x of [-21,16,33]){this.building(x,-66,10,11,6);const p=this.plane(13,7,x,-57,.025,'grass');this.lawns.push(p);this.tree(x,-57,.95);}}
 }
 curveStrip(points,width,y,mat='road'){
  const curve=new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,y+.015,z)),false,'centripetal');const pos=[],ind=[];
  for(let i=0;i<=180;i++){const t=i/180,p=curve.getPoint(t),v=curve.getTangent(t);const n=new THREE.Vector3(-v.z,0,v.x).normalize();for(const s of [-1,1])pos.push(p.x+n.x*width*.5*s,p.y,p.z+n.z*width*.5*s);if(i<180){const k=i*2;ind.push(k,k+1,k+2,k+1,k+3,k+2);}}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(ind);g.computeVertexNormals();const mesh=new THREE.Mesh(g,this.mat[mat]);mesh.material.side=THREE.DoubleSide;mesh.receiveShadow=true;this.root.add(mesh);return curve;
 }
 curveLine(curve,offset,width,y,dashed=false,mat='white',clipX=-Infinity){const pts=[],idx=[];for(let i=0;i<=600;i++){const t=i/600,p=curve.getPoint(t),v=curve.getTangent(t),n=new THREE.Vector3(-v.z,0,v.x).normalize();for(const s of [-1,1])pts.push(p.x+n.x*(offset+width*.5*s),y+.033,p.z+n.z*(offset+width*.5*s));if(i<600&&p.x+n.x*offset>clipX&&(!dashed||Math.floor(t*curve.getLength()/5)%2===0)){const k=i*2;idx.push(k,k+1,k+2,k+1,k+3,k+2);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pts,3));g.setIndex(idx);g.computeVertexNormals();this.root.add(new THREE.Mesh(g,this.mat[mat]));}
 flatShape(shape,y,mat){const g=new THREE.ShapeGeometry(shape,24);g.rotateX(Math.PI/2);const ix=Array.from(g.index.array);for(let i=0;i<ix.length;i+=3)[ix[i+1],ix[i+2]]=[ix[i+2],ix[i+1]];g.setIndex(ix);g.computeVertexNormals();const mesh=new THREE.Mesh(g,this.mat[mat]);mesh.position.y=y;mesh.material.side=THREE.DoubleSide;mesh.receiveShadow=true;this.root.add(mesh);return mesh;}
 pathRibbon(points,width,y,mat){const p=[],ix=[];for(let i=0;i<points.length;i++){const before=points[Math.max(0,i-1)],after=points[Math.min(points.length-1,i+1)],dx=after[0]-before[0],dz=after[1]-before[1],len=Math.hypot(dx,dz),nx=-dz/len,nz=dx/len;for(const t of [-1,1])p.push(points[i][0]+nx*width/2*t,y,points[i][1]+nz*width/2*t);if(i<points.length-1){const k=i*2;ix.push(k,k+1,k+2,k+1,k+3,k+2);}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setIndex(ix);g.computeVertexNormals();const mesh=new THREE.Mesh(g,this.mat[mat]);mesh.material.side=THREE.DoubleSide;this.root.add(mesh);return mesh;}
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
  for(const z of (crossroad?[-27,-53]:[-27]))for(const x of stripeOffsets)this.plane(crosswalkStripeWidth,crosswalkLength,x,z,.035,'white');
  for(const x of [-12.8,12.8])for(const offset of stripeOffsets)this.plane(crosswalkLength,crosswalkStripeWidth,x,-40+offset,.035,'white');
  this.curbs(w,70,near+r);if(crossroad)this.curbs(w,far-r,-260);
  else{this.box(w,.18,1.6,0,-.02,far-.8,'pavement');this.box(w,.20,.20,0,0,far-.1,'curb');this.plane(w,.13,0,far+.25,.028,'white');}
  this.junctionDimensions={crosswalkCount,crosswalkSpacing,crosswalkLength,crosswalkStripeWidth,stripeOffsets,camera:'high-angle',roadSurface:'disjoint shared boundaries',cornerRadius:r,corners:crossroad?4:2,edgePaint:'continuous shared curve endpoints',nearCrosswalk:-27,markingEnd:-22.55,stopLineVisible:false,stopLineCount:0};
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
  if(this.root){this.scene.remove(this.root);this.root.traverse(o=>{if(o.geometry&&!o.userData.sharedVehicleGeometry)o.geometry.dispose();});}
  this.root=new THREE.Group();this.scene.add(this.root);this.vegetation=new THREE.Group();this.root.add(this.vegetation);this.lawns=[];this.current=id;this.parkingBays=[];this.parkingColumns=[];this.buildingPlacements=[];this.waterBounds=null;this.rampDimensions=null;this.roadworkZone=null;this.pedestrianPassages=[];this.junctionDimensions=null;this.parkingReplica=null;
  const urban=['02','05','08','09','13'].includes(id),w=['02','09','13'].includes(id)&&options.laneCount?options.laneCount*3.7:['04','09'].includes(id)?7.4:urban?22.2:11.1,deck=id==='03'?6:0;
  if(!parkingIds.includes(id))this.plane(20000,20000,0,-1000,-.14,'ground');
  let carX=urban||id==='04'?1.85:0;let carZ=0;let roadEnd=-260;
  if(id==='08'||id==='05'){roadEnd=-40;carZ=id==='05'?-17.5:-10;}
  if(id==='10')roadEnd=-150;
  if(id==='03'){
   this.box(w+1.2,.65,330,0,deck-.33,-95,'curb');
   for(const s of [-1,1])this.box(.36,.84,330,s*(w/2+.33),deck+.34,-95,'pavement',.035);
   for(const z of [-20,-65,-110])this.box(2.4,5.5,2.6,0,2.65,z,'building');
  }
  if(!['13','06','07','05','08'].includes(id)&&!parkingIds.includes(id))this.road(0,w,70,roadEnd,deck);
  if(parkingIds.includes(id)){this.parking(id);}
  else if(id==='13'){
   const points=[];for(let z=70;z>=-260;z-=5){const x=z>=-30?0:18*(1-Math.exp(-Math.pow((-z-30)/95,3)));points.push([x,z]);}const c=this.curveStrip(points,w,0);
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
   this.marks(w,3.7,70,-260,deck,id==='02'||id==='04'||id==='09');if(id!=='03')this.curbs(w,70,-260,deck);
   if(!['01'].includes(id))this.environment(w,{small:['04','11','12'].includes(id),elevated:id==='03',residential:false});
   if(id==='11'){
    for(const x of [-w/2-1.2,w/2+1.2])this.box(1.2,5.3,7,x,2.56,-35,'building',.06);
    this.box(w+3.6,1.0,7,0,5.6,-35,'building',.05);
   }
   
  }
  if(['02','09','13','12'].includes(id)&&this.options.roadworks)this.roadworks(w);
  if(['02','09','13'].includes(id)&&this.options.waterfront){this.mat.water.roughness=.28;this.mat.water.metalness=.32;this.roundedWater(w);}
  if(!['08',...parkingIds].includes(id)){const farX=id==='13'?18:0;this.road(farX,120,-256,-268,deck);}
  // Center the ego in its lane. Elevation is added to camera and car together.
  this.car.position.set(carX,deck+.02,carZ);this.car.rotation.set(0,0,0);
  const close=id==='01';const distance=close?18:23,height=close?6.8:8.5;
  this.camera.position.set(carX,height+deck,distance);this.camera.lookAt(carX,deck,close?-20:-24);this.camera.updateMatrixWorld();this.camera.updateProjectionMatrix();
  // Keep the physical vehicle at 4.85m; camera changes determine its projected scale.
  if(parkingIds.includes(id)){
   const cameras={'10':[0,11,22,0,0,-5],'14':[0,34,.1,0,0,0],'15':[18,33,26,0,0,-3],'16':[0,26,22,0,0,-5],'17':[0,11,22,0,0,-5],'18':[0,26,22,0,0,-5],'19':[0,34,.1,0,0,0]};
   const c=cameras[id];this.camera.position.set(...c.slice(0,3));this.camera.lookAt(...c.slice(3));
  }else if(id==='08'){
   this.camera.position.set(carX,32,carZ+40);this.camera.lookAt(carX,0,carZ-24);
  }else if(id==='05'){
   this.camera.position.set(carX,32,carZ+40);this.camera.lookAt(carX,0,carZ-24);

  }
  if(['02','09','13'].includes(id)&&options.cameraView==='high'){this.camera.position.set(carX,26,32);this.camera.lookAt(carX,0,-16);}
  this.camera.updateMatrixWorld();this.camera.updateProjectionMatrix();
  this.framing=anchorVehicle(this.car,this.camera,(['05','08','14','16','18','19'].includes(id)||options.cameraView==='high')?'high':'low');
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

 }
 update({id,mode,trees,vehicle,buildings=true,waterfront=id==='13',roadworks=id==='12',laneCount,cameraView='low'}){
  const options={buildings,waterfront,roadworks,laneCount,cameraView,palette:this.palette};
  if(id!==this.current||JSON.stringify(options)!==JSON.stringify(this.options))this.build(id,options);
  const dark=mode==='dark',idx=dark?1:0,isParking=parkingIds.includes(id),isIndoor=['10','14','15','16'].includes(id),vegetated=trees&&catalog.find(s=>s.id===id).trees;
  for(const [key,pair]of Object.entries(this.colors)){this.mat[key].color.set(pair[idx]);if(!dark){const c=this.mat[key].color,l=.2126*c.r+.7152*c.g+.0722*c.b;c.lerp(new THREE.Color(l,l,l),.025);}}
  const palettes={balanced:{road:'#59616c',ground:'#c4cfdd',pavement:'#d3dce4',building:'#d3d7dd'},cool:{road:'#626974',ground:'#c1c9d3',pavement:'#d4d9e0',building:'#d3d7dd'},neutral:{road:'#68696b',ground:'#cccdce',pavement:'#d9dadb',building:'#dcdddd'},warm:{road:'#6c6965',ground:'#d1cec8',pavement:'#dfdbd4',building:'#e2dfd9'},soft:{road:'#7d7f82',ground:'#d5d7da',pavement:'#e0e2e5',building:'#e1e3e6'}};
  if(!dark&&palettes[this.palette])for(const[k,c]of Object.entries(palettes[this.palette]))this.mat[k].color.set(c);
  this.vegetation.visible=vegetated;for(const lawn of this.lawns){lawn.visible=vegetated;lawn.material=this.mat.grass;}
  this.ao.enabled=false;
  this.buildingTint.value=dark?0:1;
  this.mat.glass.roughness=dark?.46:.30;this.mat.glass.clearcoat=dark?.22:.72;this.mat.glass.envMapIntensity=dark?.35:.8;
  if(this.parkingTone)this.parkingTone.value=dark?1:0;if(isParking&&this.parkingShadow)this.parkingShadow.material.opacity=dark?.20:.30;
  if(isIndoor)for(const m of this.parkingGhostMaterials){const part=m.userData.ghostPart;m.color.set(part==='body'?(dark?'#424243':'#939aa3'):part==='glass'?(dark?'#2e2e30':'#5b626b'):(dark?'#272729':'#575c63'));}
  this.car.visible=vehicle;this.hemi.color.set(dark?'#d5d5d5':'#a6c8f2');this.hemi.groundColor.set(dark?'#717171':'#8b959d');this.hemi.intensity=dark?.95:1.05;
  this.sun.color.set(dark?'#ebebeb':'#fff5e8');this.sun.intensity=dark?1.65:3.0;this.fill.color.set(dark?'#cacaca':'#aacded');this.fill.intensity=dark?.45:.5;
  this.scene.environmentIntensity=isParking?(dark?.28:.42):(dark?.42:.52);
  if(isParking){this.hemi.color.set(dark?'#e5e5e5':'#d9e2eb');this.hemi.groundColor.set(dark?'#717171':'#91969e');this.hemi.intensity=dark?.65:.85;this.sun.color.set(dark?'#eeeeee':'#fff5e8');this.sun.intensity=dark?1.4:2.6;this.fill.color.set(dark?'#cccccc':'#d7e2eb');this.fill.intensity=.35;}
  this.sun.position.set(-38,55+(id==='03'?6:0),48);
  const bodyContact=this.egoContact.children[0];bodyContact.scale.y=1;bodyContact.position.z=0;bodyContact.material.uniforms.opacity.value=dark?.42:.52;
  this.environmentTone.value=dark?1:0;
  this.sky.material.uniforms.range.value=dark?.32:.20;this.sky.material.uniforms.top.value.set(dark?'#2d2e30':'#96bde0');this.sky.material.uniforms.bottom.value.set(dark?'#48494b':'#dce5ee');
  this.scene.fog.color.set(dark?'#48494b':'#dce5ee');this.scene.fog.near=isIndoor?100000:55;this.scene.fog.far=isIndoor?120000:210;this.sky.visible=!isIndoor;this.scene.background=isIndoor?new THREE.Color().setRGB(dark?.022:.66,dark?.022:.94,dark?.022:1.45):null;
  if(dark){
   this.sky.material.uniforms.top.value.setRGB(.038*.94,.038,.038*1.09);
   this.sky.material.uniforms.bottom.value.setRGB(.063*.94,.063,.063*1.09);
   this.scene.fog.color.copy(this.sky.material.uniforms.bottom.value);
  }
  if(!dark&&this.palette!=='current'){
   const warm=this.palette==='warm';this.hemi.color.set(this.palette==='balanced'?'#cedded':warm?'#ece8e2':'#e2e5e8');this.fill.color.set(this.palette==='balanced'?'#cbdde9':warm?'#e8e4df':'#dfe3e8');
   if(isIndoor){const c=this.palette==='balanced'?[.54,.62,.72]:this.palette==='cool'?[.72,.74,.77]:this.palette==='warm'?[.75,.73,.69]:this.palette==='soft'?[.77,.78,.79]:[.72,.73,.74];this.scene.background=new THREE.Color().setRGB(...c);}
  }
  const reflectors=[...this.buildingPlacements,...this.parkingColumns.map(c=>({x:c.position.x,z:c.position.z,width:.68,depth:.68}))];this.buildingCount.value=Math.min(32,reflectors.length);reflectors.slice(0,32).forEach((b,i)=>this.buildingFootprints.value[i].set(b.x,b.z,b.width/2,b.depth/2));
  this.scene.updateMatrixWorld(true);this.mirror.position.y=0;this.mirror.updateMatrixWorld(true);
  const reflective=[];this.root.traverse(o=>{if(o.isMesh&&(o.userData.reflectiveSurface||['road','ground','pavement','water','parkingFloor','parkingBay'].some(k=>o.material===this.mat[k]))){reflective.push([o,o.visible]);o.visible=false;}});
  for(const column of this.parkingColumns){if(column.userData.glow)column.userData.glow.visible=false;}
  this.egoContact.visible=false;this.tailReflection.visible=false;this.car.visible=false;this.renderer.shadowMap.needsUpdate=true;
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
  this.car.visible=vehicle;this.tailReflection.visible=vehicle;updateTailLight(this.tailReflection,this.car,dark,isParking);this.renderer.shadowMap.needsUpdate=true;
  this.egoContact.visible=vehicle;this.egoContact.position.set(this.car.position.x,this.car.position.y-.02,this.car.position.z);
  this.vehicleDetail.setVehicleFrame(this.framing.vehicleFrame,vehicle);this.composer.render();
  this.state={id,mode,trees:vegetated,vehicle,buildings,waterfront,roadworks,laneCount,cameraView};return this.audit();
 }
 setVehicle(car){this.car.removeFromParent();this.egoContact.removeFromParent();this.car.traverse(o=>{o.geometry?.dispose();o.material?.dispose?.();});this.car=car;this.scene.add(car);this.egoContact=createContactShadows(car);this.scene.add(this.egoContact);}
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
  return {...this.state,groundReflection:this.groundReflectionAudit,palette:this.palette,roadColor:this.mat.road.color.getHexString(),groundColor:this.mat.ground.color.getHexString(),lightIntensity:[this.hemi.intensity,this.sun.intensity,this.fill.intensity],framing:this.framing,environmentSignature:this.environmentSignature,glass,exhaustCount,contactPatches:this.egoContact.children.length,junctionFrame,vehicleSpec:this.car.userData.vehicleSpec,junctionDimensions:this.junctionDimensions,parkingReplica:this.parkingReplica,parkedVehicles:this.parkedVehicles||[],buildingOwnedCount:this.root.children.filter(o=>o.userData.buildingOwned).length,buildingShadowCasters:this.root.children.filter(o=>o.userData.buildingOwned&&o.castShadow).length,buildingVSMParticipants:this.root.children.filter(o=>o.userData.buildingOwned&&(o.castShadow||o.receiveShadow)).length,roadworkZone:this.roadworkZone,pedestrianPassages:this.pedestrianPassages,rampDimensions:this.rampDimensions,vehicleDimensions:box.getSize(new THREE.Vector3()).toArray(),vehicleBounds:{left:(minX+1)/2,top:(1-maxY)/2,width:(maxX-minX)/2,height:(maxY-minY)/2,bottom:(1-minY)/2},center:{x:(center.x+1)/2,y:(1-center.y)/2},roadElevation:this.car.position.y-.02,roadSlope:0,horizon:'far-only smootherstep from 105m to 245m',treePlacements,buildingsPlaced:this.buildingPlacements,waterBounds:this.waterBounds,parkingBays:this.parkingBays,parkingColumns:this.parkingColumns.map(c=>c.position.toArray()),vehiclePhysicalLength:4.85,geometry:this.current,geometrySignature:this.geometrySignature,camera:this.camera.position.toArray(),car:this.car.position.toArray()};
 }
}
