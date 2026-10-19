import {Box3,Vector3,Vector4} from 'three';

export function installEnvironmentFinish(world,strength=.4){
 const amount={value:strength};
 const treeContacts={value:Array.from({length:32},()=>new Vector4())},treeCount={value:0};
 const blockMin={value:Array.from({length:32},()=>new Vector4())},blockMax={value:Array.from({length:32},()=>new Vector4())},blockCount={value:0},bounds=new Box3(),layoutOffset=new Vector3();
 let contactRoot=null,contactKey='',contactSyncs=0,contactCacheHits=0;
 world.environmentFinish={amount,strength,audit(){return {strength:amount.value,warmth:0,localWarmth:0,environmentOccluders:blockCount.value,contactTrees:treeCount.value,contactSyncs,contactCacheHits};},contacts(){return {blocks:blockMin.value.slice(0,blockCount.value).map((point,index)=>({min:point.toArray(),max:blockMax.value[index].toArray()})),trees:treeContacts.value.slice(0,treeCount.value).map(point=>point.toArray())};},syncContacts(){
  const key=[world.environmentSignature,world.layoutBlend.value,world.layoutVisual?.width,world.environmentGrowth.buildings.value,world.environmentGrowth.trees.value,world.structureMotion?.environmentReveal??1,world.root.children.length,world.vegetation.children.length,world.vegetation.visible].join('|');
  if(contactRoot===world.root&&contactKey===key){contactCacheHits++;return;}
  contactRoot=world.root;contactKey=key;contactSyncs++;world.scene.updateMatrixWorld(true);
  const blocks=world.root.children.filter(object=>object.userData.buildingOwned&&object.visible);
  blockCount.value=0;
  for(const block of blocks){
   if(blockCount.value===32)break;
   bounds.setFromObject(block);
   const offsets=block.geometry?.getAttribute('layoutOffset');
   if(offsets){
    layoutOffset.fromBufferAttribute(offsets,0).multiplyScalar(1-world.layoutBlend.value);
    const matrix=block.matrixWorld.elements,offsetX=layoutOffset.x,offsetY=layoutOffset.y,offsetZ=layoutOffset.z;
    layoutOffset.set(matrix[0]*offsetX+matrix[4]*offsetY+matrix[8]*offsetZ,matrix[1]*offsetX+matrix[5]*offsetY+matrix[9]*offsetZ,matrix[2]*offsetX+matrix[6]*offsetY+matrix[10]*offsetZ);
    bounds.translate(layoutOffset);
   }
   if(bounds.max.y<=.08)continue;
   const index=blockCount.value++,exposure=Math.min(1,Math.max(0,bounds.max.y-.08)/Math.max(.01,bounds.max.y-bounds.min.y));
   blockMin.value[index].set(bounds.min.x+.08,Math.max(.0,bounds.min.y)+.02,bounds.min.z+.08,exposure);
   blockMax.value[index].set(bounds.max.x-.08,bounds.max.y,bounds.max.z-.08,0);
  }
  const trees=world.vegetation.visible?world.vegetation.children.filter(tree=>tree.visible):[];
  treeCount.value=Math.min(32,trees.length);
  for(let index=0;index<treeCount.value;index++){
   const tree=trees[index],laneOffset=world.layoutMotion?(world.layoutVisual.width-world.layoutMotion.to.width)*Math.sign(tree.position.x)/2:0;
   bounds.setFromObject(tree);
   const exposure=Math.min(1,Math.max(0,bounds.max.y)/Math.max(.01,bounds.max.y-bounds.min.y));
   treeContacts.value[index].set(tree.position.x+laneOffset,tree.position.z,tree.scale.x,exposure);
  }
 }};
 for(const kind of ['road','ground','pavement','curb','building','grass','leaf','leaf2','trunk']){
  const material=world.mat[kind],compile=material.onBeforeCompile,cacheKey=material.customProgramCacheKey();
  const surface=['road','ground','pavement','curb'].includes(kind);
  material.onBeforeCompile=shader=>{
   compile.call(material,shader);
   shader.uniforms.environmentFinishAmount=amount;
   shader.uniforms.finishTone=world.environmentTone;
   shader.uniforms.finishTreeContacts=treeContacts;
   shader.uniforms.finishTreeCount=treeCount;
   shader.uniforms.finishBlockMin=blockMin;shader.uniforms.finishBlockMax=blockMax;shader.uniforms.finishBlockCount=blockCount;
   shader.vertexShader='varying vec3 vFinishPosition;varying vec3 vFinishNormal;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvFinishPosition=(modelMatrix*vec4(transformed,1.)).xyz;vFinishNormal=normalize(mat3(modelMatrix)*normal);');
   shader.fragmentShader='uniform float environmentFinishAmount;uniform float finishTone;uniform vec4 finishTreeContacts[32];uniform int finishTreeCount;uniform vec4 finishBlockMin[32];uniform vec4 finishBlockMax[32];uniform int finishBlockCount;varying vec3 vFinishPosition;varying vec3 vFinishNormal;\n'+shader.fragmentShader;
   if(surface)shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
    roughnessFactor=mix(roughnessFactor,${kind==='road'?'.52':kind==='ground'?'.67':'.48'},environmentFinishAmount);
   `);
   if(surface)shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
    float finishSpecularLuma=dot(reflectedLight.indirectSpecular,vec3(.2126,.7152,.0722));
    reflectedLight.indirectSpecular=mix(reflectedLight.indirectSpecular,vec3(finishSpecularLuma),environmentFinishAmount*.85)*(1.+environmentFinishAmount*3.4);
   `);
   if(kind==='building')shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>','#include <lights_fragment_end>\nreflectedLight.directDiffuse*=1.-environmentFinishAmount*.35;reflectedLight.indirectDiffuse*=1.+environmentFinishAmount*.45;');
   const shaping=surface?`
    float finishBase=${kind==='road'?'mix(.48,.40,finishTone)':kind==='ground'?'.82':'.95'};
    vec3 finishSatin=outgoingLight*finishBase;
    outgoingLight=mix(outgoingLight,finishSatin,environmentFinishAmount);
   `:kind==='building'?`
    float finishBase=exp(-max(vFinishPosition.y,0.)/2.4);
    float finishUpper=1.-exp(-max(vFinishPosition.y,0.)/12.);
    float finishVolume=.94+.08*finishUpper-.05*finishBase;
    outgoingLight*=mix(1.,finishVolume,environmentFinishAmount);
   `:`outgoingLight*=mix(1.,.82+.22*max(finishNormal.y,0.),environmentFinishAmount);`;
   shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`
    vec3 finishNormal=normalize(vFinishNormal);
    ${shaping}
    ${surface?'outgoingLight=mix(outgoingLight,vec3(dot(outgoingLight,vec3(.2126,.7152,.0722))),finishTone);':''}
    ${surface||kind==='grass'?`
    float finishContact=0.;
    for(int contactIndex=0;contactIndex<32;contactIndex++){
     if(contactIndex>=finishBlockCount)break;
     vec2 center=(finishBlockMin[contactIndex].xz+finishBlockMax[contactIndex].xz)*.5;
     vec2 extent=(finishBlockMax[contactIndex].xz-finishBlockMin[contactIndex].xz)*.5;
     vec2 outside=max(abs(vFinishPosition.xz-center)-extent,vec2(0.));
     float separation=length(outside);
     finishContact=max(finishContact,.24*exp(-separation/.85)*exp(-finishBlockMin[contactIndex].y/.9)*finishBlockMin[contactIndex].w);
    }
    for(int treeIndex=0;treeIndex<32;treeIndex++){
     if(treeIndex>=finishTreeCount)break;
     vec4 tree=finishTreeContacts[treeIndex];
     vec2 offset=(vFinishPosition.xz-tree.xy)/max(.4,tree.z);
     finishContact=max(finishContact,.32*exp(-dot(offset,offset)/.65)*tree.w);
    }
    outgoingLight*=1.-finishContact*clamp(environmentFinishAmount*2.,0.,1.)*max(finishNormal.y,0.);
    `:''}
    #include <opaque_fragment>`);
  };
  material.customProgramCacheKey=()=>cacheKey+'-environment-finish-64-'+kind;
 }
}
