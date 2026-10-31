import {parkingBayFragment} from './parking-materials.js';
// Isolated transformations of read-only engine inputs for the Figma review.
function change(source,from,to){if(!source.includes(from))throw Error('Figma review baseline mismatch: '+from.slice(0,110));return source.replace(from,to)}
export function refineFigma(name,source){
 if(name==='world.js'){
  source=source.replaceAll("?-480:-260","?-900:-600");
  // Ramp mainlines used the old 260m end after the aerial range was extended.
  // Both directions continue beyond the completed atmosphere blend.
  source=change(source,"const distantEnd=SR_QUALITY_MIX>0&&this.current==='03'?-900:-600;","const distantEnd=-900;");
  source=change(source,"const distantEnd=SR_QUALITY_MIX>0&&['01','02','03','04','09','12'].includes(id)?-900:-600;","const distantEnd=SR_QUALITY_MIX>0&&['01','02','03','04','06','07','09','12'].includes(id)?-900:-600;");
  source=change(source,"this.box(.68,.62,70-distantEnd,medianX,deck+.31,(70+distantEnd)/2,'curb',.05);","{const median=this.box(.68,.62,70-distantEnd,medianX,deck+.31,(70+distantEnd)/2,'curb',.05);median.castShadow=false;median.receiveShadow=false;}");
  source=change(source,"this.plane(medianWidth,70-distantEnd,medianX,(70+distantEnd)/2,deck+.025,'pavement');","this.plane(medianWidth,70-distantEnd,medianX,(70+distantEnd)/2,deck+.025,'pavement').receiveShadow=false;");
  // Ramp pavement receivers enter the VSM depth pass. The empty surround
  // must stay clean while the moving branch passes, retaining vehicle contact
  // and road shadows on the asphalt itself.
  source=change(source,"if(!parkingIds.includes(id))this.plane(20000,20000,0,-1000,-.14,'ground');","if(!parkingIds.includes(id))this.plane(20000,20000,0,-1000,-.14,'ground').receiveShadow=!['06','07'].includes(id);");
  // The old terminal road patch was a dark transverse band across the horizon.
  source=change(source,"this.road(farX,120,distantEnd+4,distantEnd-8,deck)","this.road(farX,120,distantEnd-1,distantEnd-50,deck)");
  source=change(source,"if(id==='03'){this.line(w/2-.25,70,-260,deck);this.line(-w/2+.25,70,-260,deck);}","if(id==='03'){this.line(w/2-.25,70,distantEnd,deck);this.line(-w/2+.25,70,distantEnd,deck);}");
  source=change(source,'if(tee)for(const x of [-21,16,33])','if(tee)for(const x of [-27,-9,9,27])');
  source=change(source,'cross&&Math.abs(z+40)<24','cross&&(Math.abs(z+40)<24||z< -95)');
  source=change(source,'x=cx+side*r*(1-u)**2,zz=cz+edge*r*u*u','x=cx+side*r*(1-Math.sin(u*Math.PI/2)),zz=cz+edge*r*(1-Math.cos(u*Math.PI/2))');
  source=source.replaceAll('side*u/n','side*Math.sin(u*Math.PI/2)').replaceAll('edge*(1-u)/n','edge*Math.cos(u*Math.PI/2)');
  // Preserve the road-facing lawn edge, extending its back to the facade.
  // The former one-metre exposed ground strip read as a white building rim.
  source=change(source,"add('lawn',elevated?2.4:residential?3.6:5,depth,lawnX,z);","const lawnWidth=elevated?2.4:residential?3.6:5,lawnBack=centerX+side*(w/2+(elevated?10:residential?5.8:8)),lawnGap=Math.max(0,Math.abs(lawnBack-lawnX)-lawnWidth/2);add('lawn',lawnWidth+lawnGap,depth,lawnX+side*lawnGap/2,z);");
  // The front face also needs its reflection to meet the -.14 ground plane;
  // the old light-mode .015 capture left a second, thinner exposed strip.
  source=change(source,"this.mirror.position.y=SR_QUALITY_MIX>0&&mode==='light'?.015:isParking?0:-.14;","this.mirror.position.y=isParking?0:-.14;");
  // Rounded footings are buried, preserving the upper silhouette.
  // Tall architecture uses its soft ground reflection for grounding. Re-enabling
  // directional casting here projected enormous diagonal wedges over the road.
  source=change(source,'o.material=this.mat.environmentBuilding;','o.material=this.mat.environmentBuilding;o.castShadow=false;o.receiveShadow=false;');
  source=change(source,'const height=bounds.max.y-bounds.min.y;o.scale.y=(height+.30)/height;o.position.y-=.15;','const height=bounds.max.y-bounds.min.y;o.scale.y=(height+.50)/height;o.position.y-=.25;');
  // Keep the existing soft contact and reflection at the facade. The distant
  // sun projection overwhelmed the road and crawled across it during resizing.
  source=change(source,"if(id==='03'){this.line(w/2-.25,70,distantEnd,deck);this.line(-w/2+.25,70,distantEnd,deck);}","if(id==='03'){this.line(w/2-.25,70,distantEnd,deck);this.line(-w/2+.25,70,distantEnd,deck);this.box(.24,.24,70-distantEnd,w/2+.10,deck+.10,(70+distantEnd)/2,'curb',.02).castShadow=false;}");
 }
 if(name==='organic-tree.js'){
  // VSM also includes receivers in its shadow pass. Disable both flags just
  // like architecture, retaining environment-finish's soft root contact.
  source=change(source,'object.castShadow=true;object.receiveShadow=true;','object.castShadow=false;object.receiveShadow=false;');
 }
 if(name==='activation-sweep.js'){
  source=change(source,'return {min:0,max:width/2};','return {min:.1525,max:width/2-.315};');
  source=change(source,'const uniforms={progress:','const uniforms={stopZ:{value:-10000},progress:');
  source=change(source,'uniform float progress;uniform float tone;uniform vec2 bounds;','uniform float stopZ;uniform float progress;uniform float tone;uniform vec2 bounds;');
  source=change(source,'float edge=step(bounds.x,p.x)','float edge=step(stopZ,p.z)*step(bounds.x,p.x)');
  source=change(source,'mesh.visible=active(time)&&!!world.state','mesh.visible=active(time)&&!!world.state&&!world.parkingBays?.length');
  source=change(source,'uniforms.origin.value.set(0,world.car.position.z-1);',"uniforms.stopZ.value=['05','08'].includes(world.state.id)?(world.junctionDimensions?.markingEnd??-22.55)+.15:-10000;uniforms.origin.value.set(0,world.car.position.z-1);");
 }
 if(name==='traffic-model.js'){
  source=change(source,"const mesh=new THREE.Mesh(geometry,material);mesh.name=part.name;template.add(mesh);",`if(part.role==='rim'){
    // Four smooth discs replace the high contrast spoke mesh. Keep the real
    // axle centres and tyre geometry, avoiding a second noisy wheel surface.
    geometry.dispose();for(const side of [-1,1])for(const z of [-1.498,1.405]){const disc=new THREE.Mesh(new THREE.CylinderGeometry(.285,.285,.025,48),material);disc.rotation.z=Math.PI/2;disc.position.set(side*.947,.365,z);disc.name='Flat wheel disc';template.add(disc);}
   }else{const mesh=new THREE.Mesh(geometry,material);mesh.name=part.name;template.add(mesh);}`);
  source=change(source,'a*.55*visibility','a*.84*visibility');
  source=change(source,'exp(-dot(p*vec2(1.5,1.05),p*vec2(1.5,1.05))*2.8)*(1.-smoothstep(.65,1.,length(p)))','(1.-smoothstep(.25,1.,pow(pow(abs(p.x),4.)+pow(abs(p.y),4.),.25)))*(.50+.50*exp(-dot(p,p)*2.8))');
  source=change(source,'car.add(shadow);setTrafficAppearance(car);return car;',`car.add(shadow);
  for(const x of [-.88,.88])for(const z of [-1.498,1.405]){const contact=shadow.clone();contact.material=shadow.material;contact.scale.set(.18,.105,1);contact.position.set(x,.014,z);contact.userData.trafficShadow=true;car.add(contact);}
  setTrafficAppearance(car);return car;`);
  // Traffic shares the outdoor atmosphere instead of turning white at 55-210m.
  source=change(source,"const mesh=new THREE.Mesh(geometry,material);mesh.name=part.name;template.add(mesh);",`const finishCompile=material.onBeforeCompile;
   material.onBeforeCompile=shader=>{finishCompile.call(material,shader);shader.fragmentShader=shader.fragmentShader.replace('#include <fog_fragment>',\`#ifdef USE_FOG
    float trafficDistance=clamp((vFogDepth-125.)/430.,0.,1.);
    float trafficAerial=trafficDistance*trafficDistance*trafficDistance*(trafficDistance*(trafficDistance*6.-15.)+10.);
    gl_FragColor.rgb=mix(gl_FragColor.rgb,linearToOutputTexel(vec4(fogColor,1.)).rgb,trafficAerial);
   #endif\`);};
   const mesh=new THREE.Mesh(geometry,material);mesh.name=part.name;template.add(mesh);`);
  source=change(source,'float trafficPlanes=.68+.32*','float trafficPlanes=.90+.10*');
  source=change(source,'reflectedLight.directDiffuse*=.84;','reflectedLight.directDiffuse*=.88;');

  // Stable transparent variants avoid a shader recompile while fading. The
  // small surface alpha softens the pearl shell without exposing the far side.
  {const start=source.indexOf('export function setTrafficAppearance(');
   if(start<0)throw Error('Traffic finish entry missing');
   source=source.slice(0,start)+`const trafficFinishes={
    light:{paint:'#8e969e',window:'#74818e',rubber:'#606971',rim:'#959fa8',trim:'#89949d'},
    dark:{paint:'#96999d',window:'#7f858b',rubber:'#52575d',rim:'#858a90',trim:'#90959a'}
   };for(const [theme,palette] of Object.entries(trafficFinishes))for(const role in palette){
    // Apply the requested 20% once to the linear light endpoint. Keeping the
    // multiplier here preserves role contrast and a continuous theme blend.
    palette[role]=new THREE.Color(palette[role]).multiplyScalar(theme==='light'?1.2:1);
   }
   export function setTrafficAppearance(car,dark=false,opacity=1,tone=dark?1:0,whiteness=0){
    const t=Math.max(0,Math.min(1,tone));
    for(const child of car.children){const material=child.material;if(!material)continue;
     if(material.isShaderMaterial){material.uniforms.visibility.value=opacity;continue;}
     const role=material.userData.trafficRole||'paint';
     material.color.copy(trafficFinishes.light[role]||trafficFinishes.light.paint).lerp(trafficFinishes.dark[role]||trafficFinishes.dark.paint,t);
     if(role==='paint'){const c=material.color.multiplyScalar(car.userData.draftPaintBrightness??1);c.r+=(1-c.r)*whiteness;c.g+=(1-c.g)*whiteness;c.b+=(1-c.b)*whiteness;}
     material.roughness=role==='rubber'?.82:role==='window'?.42:.62;material.metalness=role==='rim'?.18:0;
     material.clearcoat=role==='paint'?.08+.04*t:role==='window'?.18:.04;
     material.clearcoatRoughness=.45;material.specularIntensity=.24+.08*t;material.envMapIntensity=.30-.08*t;
     material.opacity=opacity;material.transparent=!!material.userData.draftOcclusion||opacity<.999;material.depthWrite=opacity>.90&&(!material.userData.draftOcclusion||(car.userData.draftOcclusionAlpha??1)>.98);
    }
    car.userData.trafficOpacity=opacity;car.userData.trafficTheme=dark?'dark':'light';
   }
`;
  }

 }
 if(name==='traffic-vehicle.js'){
  // Sample the longitudinal pose on entry, keeping the route's lane and heading.
  // The traffic update resolves same-lane spacing before rendering this pose.
  source=change(source,'if(recycled&&modelsReady){',`if(!recycled){slot.cooldown=0;slot.car.position.x=route.x||0;slot.car.position.z=route.z+(random()-.5)*80;if(route.egoLane)slot.car.position.z=Math.min(slot.car.position.z,world.car.position.z-32);}
  if(recycled&&modelsReady){`);
 }
 if(name==='ground-reflection.js'){
  source=change(source,'(noise(p.xz*22.)-.5)*.0015+(noise(p.xz*.65)-.5)*.002','(noise(p.xz*.65)-.5)*.0015');
  source=change(source,'smoothstep(24.,95.,-p.z)','smoothstep(90.,210.,-p.z)');
  // Keep the first 20m unchanged. An exponential tail joins the sky across
  // the visible courtyard without the compressed smoothstep dark band.
  source=change(source,'1.-exp(-courtyardDistance/32.)','mix(smoothstep(95.,250.,courtyardDistance),(1.-exp(-max(0.,courtyardDistance-20.)/18.)),tone)');
  source=change(source,'surface=mix(surface,horizon,outdoor*aerial);','vec3 courtyardSurface=surface;surface=mix(surface,horizon,outdoor*aerial);');
 }
 if(name==='weather-ground.js'){
  // Weather changes surface radiance before atmospheric attenuation. Restrict
  // the reordered blend to dark Outdoor; preserve Indoor and daylight output.
  source=change(source,"'surface=weatherGround(surface,p,1.,normalize(cameraPosition-p).y,0.,p);'+out","'surface=weatherGround(mix(surface,courtyardSurface,tone*(1.-indoor)),p,1.,normalize(cameraPosition-p).y,0.,p);surface=mix(surface,horizon,tone*(1.-indoor)*outdoor*aerial);'+out");
 }
 if(['parking-reference.js','outdoor-parking.js'].includes(name)){
  const begin=source.indexOf('fragmentShader:`uniform float tone;uniform float study;'),end=source.indexOf('`});',begin);
  if(begin<0||end<0)throw Error('Bay shader baseline mismatch');
  source=source.slice(0,begin)+'fragmentShader:`'+parkingBayFragment+'\n'+source.slice(end);
  // Each vacant bay can independently hide its P while selected or occupied.
  source=change(source,'uniforms:{tone,study:','uniforms:{tone,brightness:{value:1},indoor:{value:'+Number(name==='parking-reference.js')+'},available:{value:1},hover:{value:0},study:');
  source=change(source,'new THREE.PlaneGeometry(width,depth),bayMat)','new THREE.PlaneGeometry(width,depth),bayMat.clone())');
  source=change(source,'tile.rotation.x=-Math.PI/2','tile.material.uniforms.tone=tone;tile.rotation.x=-Math.PI/2');
  if(name==='parking-reference.js')source=change(source,'world.parkingBays.push({x:side*x,z,width,depth,angle:0})','world.parkingBays.push({x:side*x,z,width,depth,angle:0,tile})');
  else source=change(source,'world.parkingBays.push({x,z,width,depth,angle:0})','world.parkingBays.push({x,z,width,depth,angle:0,tile})');
 }
 return source;
}
