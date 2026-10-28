import {createModel3Reflections} from './vehicle-library/three/model3-reflections.js';
// Applied before warming/compilation, and only by the isolated material draft.
export function applySrVehicleFinish(car){
 if(car.userData.materialStudy)return car;
 const seen=new Set(),roles={paint:0,glass:0,trim:0};
 car.traverse(object=>{
  if(!object.isMesh)return;
  for(const material of (Array.isArray(object.material)?object.material:[object.material])){
   if(!material||seen.has(material))continue;seen.add(material);
   const role=material.userData.surfaceRole||({body:'paint',glass:'glass',tires:'rubber',rim1:'rim',rim2:'rim'}[material.name]);
   if(role==='paint'){
    material.color.set('#d9dbdd');material.metalness=.22;material.roughness=.25;
    if(material.isMeshPhysicalMaterial){material.clearcoat=1;material.clearcoatRoughness=.14;material.specularIntensity=1;}
    if(!material.envMap)material.envMap=createModel3Reflections();
    material.envMapIntensity=1.35;
    const compile=material.onBeforeCompile,cacheKey=material.customProgramCacheKey();
    material.onBeforeCompile=shader=>{
     compile.call(material,shader);
     shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
      vec3 srVehicleNormal=inverseTransformDirection(normal,viewMatrix);
      float srVehiclePlanes=.72+.28*smoothstep(-.5,.85,dot(srVehicleNormal,normalize(vec3(-.6,1.,.6))));
      reflectedLight.indirectDiffuse*=srVehiclePlanes;
      reflectedLight.directDiffuse*=.86;
     `);
    };
    material.customProgramCacheKey=()=>cacheKey+'-sr-paint-structure-1';roles.paint++;
   }else if(role==='glass'){
    material.color.set('#232a30');material.metalness=0;material.roughness=.38;
    // Use the scene's broad, subdued environment instead of paint's bright lightboxes.
    material.envMapIntensity=.24;
    const glassCompile=material.onBeforeCompile,glassKey=material.customProgramCacheKey();
    material.onBeforeCompile=shader=>{
     glassCompile.call(material,shader);
     shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_end>',`#include <lights_fragment_end>
      reflectedLight.directSpecular*=.22;
      reflectedLight.indirectSpecular*=.70;
     `);
    };
    material.customProgramCacheKey=()=>glassKey+'-sr-glass-soft-highlight-1';
    // Exterior-only models retain opaque glass, avoiding missing interiors.
    material.transparent=false;material.opacity=1;material.depthWrite=true;roles.glass++;
   }else if(role==='chrome'||role==='rim'){
    material.metalness=.72;material.roughness=.28;material.envMapIntensity=.85;roles.trim++;
   }
   material.needsUpdate=true;
  }
 });
 car.userData.materialStudy={version:4,...roles,paintRoughness:.25,coatRoughness:.14,glassRoughness:.38};
 return car;
}
