(async()=>{
 if(window.__feedback160)return;
 const qa=window.__feedback160={version:'feedback171-perf-20261027',errors:[],patched:new WeakSet(),events:[],floors:new WeakMap()};
 const style=document.createElement('style');style.textContent='#parking-flow,#assist,#parking-hint,#exit-directions{display:none!important}';document.head.append(style);
 // Saved review profile shares one light Parking state.
 // Scene material updates consume these fixed values in place.
 // Temporary review: reuse the existing export image, with no new inspector entry.
 // The pixels come from the regular PNG export; Escape returns to the inspector.
 let reviewImage=null;
 const closeDetail=()=>{if(reviewImage){reviewImage.removeAttribute('style');reviewImage=null;}};
 const previewImage=document.getElementById('export-preview-image');
 if(previewImage){previewImage.tabIndex=0;previewImage.setAttribute('role','button');previewImage.setAttribute('aria-label','放大导出预览');}
 document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){closeDetail();return;}
  if(!reviewImage&&event.target===previewImage&&['Enter',' '].includes(event.key)){event.preventDefault();previewImage.click();return;}
  if(!reviewImage)return;
  if(['+','=','-'].includes(event.key)){event.preventDefault();const scale=Math.max(1,Math.min(4,(Number(reviewImage.dataset.reviewScale)||1)+(event.key==='-'?-.5:.5)));reviewImage.dataset.reviewScale=scale;reviewImage.style.transformOrigin='75% 75%';reviewImage.style.transform='scale('+scale+')';}
 });
 document.addEventListener('click',event=>{
  const image=event.target;if(image.id!=='export-preview-image')return;
  if(reviewImage){closeDetail();return;}
  reviewImage=image;image.dataset.reviewScale=1;image.style.cssText='position:fixed;inset:0;width:100vw;height:100vh;max-width:none;max-height:none;object-fit:contain;background:#b8c0c9;z-index:10000;cursor:zoom-in;border-radius:0';
 });
 document.addEventListener('wheel',event=>{
  if(!reviewImage||event.target!==reviewImage)return;
  event.preventDefault();
  const scale=Math.max(1,Math.min(4,(Number(reviewImage.dataset.reviewScale)||1)+(event.deltaY<0?.25:-.25)));
  reviewImage.dataset.reviewScale=scale;reviewImage.style.transformOrigin=(event.clientX/innerWidth*100)+'% '+(event.clientY/innerHeight*100)+'%';reviewImage.style.transform='scale('+scale+')';
 },{passive:false});
 const savedParkingProfile=Object.freeze({
  "white": 19,
  "body": 104,
  "cool": 21,
  "roof": 130,
  "side": 53,
  "glass": 104,
  "wheels": 100,
  "matte": 88,
  "shadow": 56
});
 qa.controls=savedParkingProfile;qa.white=qa.controls.white;qa.controlSignature=JSON.stringify(qa.controls);
 const metrics=qa.metrics={frames:0,applications:0,sceneTraversals:0,totalMs:0,maxMs:0};
 const diagnostic=new URLSearchParams(location.search).has('perf');

 const cadence={buckets:{},longTasks:[],observerErrors:[]};
 const sample=(values,value)=>{values.push(Math.round(value*100)/100);if(values.length>600)values.shift();};
 const summarize=values=>{const sorted=[...values].sort((a,b)=>a-b);return {n:values.length,p50:sorted[Math.floor(sorted.length*.5)]||0,p95:sorted[Math.min(sorted.length-1,Math.floor(sorted.length*.95))]||0,max:sorted.at(-1)||0,over33:values.filter(v=>v>33.4).length,over50:values.filter(v=>v>50).length};};
 const watchLongTasks=(host,realm)=>{try{if(!host.PerformanceObserver?.supportedEntryTypes?.includes('longtask'))return;const observer=new host.PerformanceObserver(list=>{for(const task of list.getEntries()){cadence.longTasks.push({realm,duration:Math.round(task.duration),start:Math.round(host.performance.timeOrigin+task.startTime-performance.timeOrigin),reportedAt:Math.round(performance.now()),scene:qa.scene,phase:document.documentElement.classList.contains('theme-changing')?'theme':document.getElementById('frame-cover')?.hidden===false?'covered':'steady'});if(cadence.longTasks.length>20)cadence.longTasks.shift();}});observer.observe({type:'longtask',buffered:false});}catch(error){cadence.observerErrors.push(error.message);}};
 let watchedWorld;
 const instrument=world=>{if(!diagnostic||watchedWorld===world)return;watchedWorld=world;watchLongTasks(window,'parent');watchLongTasks(document.getElementById('engine').contentWindow,'engine');const draw=world.renderFrame;let prior=0,priorKey='';world.renderFrame=function(...args){const now=performance.now(),phase=document.documentElement.classList.contains('theme-changing')?'theme':document.getElementById('frame-cover')?.hidden===false?'covered':window.draftController?.status.playing?'playing':'idle',key=[qa.scene,world.state?.mode,phase].join('/'),bucket=cadence.buckets[key]??={intervals:[],drawMs:[]};if(priorKey===key&&!document.hidden&&now-prior>4)sample(bucket.intervals,now-prior);prior=now;priorKey=key;try{return draw.apply(this,args)}finally{sample(bucket.drawMs,performance.now()-now)}};};
 let auditOutput,lastAudit=0;
 if(diagnostic){auditOutput=document.createElement('output');auditOutput.id='material-frame-audit';auditOutput.style.cssText='position:fixed;bottom:8px;left:220px;z-index:10001;background:#fff;color:#222;font:11px monospace;max-width:650px;max-height:140px;overflow:hidden;padding:4px';document.body.append(auditOutput);}
 let lastWorld,lastRoot,lastCar,lastGroup,lastChildren,lastSceneChildren,lastContact,lastScene,lastDark,lastWeather,parkingFloor;
 const syncEnvironment=(world,scene,dark)=>{
  if(!['parking','outdoor'].includes(scene)||!parkingFloor)return;
  const sky=world.sky;
  if(!sky?.material?.uniforms?.top)return;
  const u=sky.material.uniforms,top=dark?0x2e3036:0xc0c6ce,bottom=dark?0x2e3036:0xb7bfc9;
  if(u.top.value.getHex()!==top)u.top.value.setHex(top);
  if(u.bottom.value.getHex()!==bottom)u.bottom.value.setHex(bottom);
  u.range.value=.45;parkingFloor.uniforms.horizon.value.copy(u.bottom.value);
 };

 const patch=(world,scene)=>{
  const s=world.scene,state={scene},group=world.draftParkingGroup;
  const dark=world.state.mode==='dark';
  if(lastRoot===world.root)syncEnvironment(world,scene,dark);
  const children=group?.children.length,sceneChildren=s.children.length,contact=world.car?.userData.draftIndoorContact;
  if(lastWorld===world&&lastRoot===world.root&&lastCar===world.car&&lastGroup===group&&lastChildren===children&&lastSceneChildren===sceneChildren&&lastContact===contact&&lastScene===scene&&lastDark===dark&&lastWeather===world.state.weather)return false;
  lastWorld=world;lastRoot=world.root;lastCar=world.car;lastGroup=group;lastScene=scene;lastDark=dark;lastWeather=world.state.weather;
  metrics.applications++;
  const traverse=visit=>{metrics.sceneTraversals++;s.traverse(visit);};
  const parking=['parking','outdoor'].includes(state.scene);
  let changed=qa.lastKey!==state.scene+'|'+dark,floor;qa.lastKey=state.scene+'|'+dark;
  traverse(o=>{if(o.material?.uniforms?.horizon)floor=o.material;});
  // Only unapproved Parking receives the calibrated environment and contact pass.
  parkingFloor=parking?floor:null;
  if(parking&&floor){
   syncEnvironment(world,scene,dark);
   if(floor.customProgramCacheKey()!=='feedback160-parking-floor-v3'){
    const original=qa.floors.get(floor)||floor.onBeforeCompile;qa.floors.set(floor,original);
    floor.onBeforeCompile=function(shader,r){
     original.call(this,shader,r);
     const start=shader.fragmentShader.indexOf('// A broad, world-space light pool');
     const end=shader.fragmentShader.indexOf('#include <colorspace_fragment>',start);
     if(start<0||end<0)throw Error('Parking floor anchor missing');
     shader.fragmentShader=shader.fragmentShader.slice(0,start)+`
 float pool160=smoothstep(-65.,15.,p.z);
 vec3 dark160=mix(vec3(.033,.035,.040),vec3(.046,.049,.057),pool160);
 float luma160=dot(dark160,vec3(.2126,.7152,.0722));
 vec3 blue160=vec3(.82,.99,1.63);blue160/=dot(blue160,vec3(.2126,.7152,.0722));
 dark160=mix(dark160,luma160*blue160,.10165)*.91;
 vec3 floor160=mix(light,dark160,tone);
 floor160=weatherGround(floor160,p,1.,normalize(cameraPosition-p).y,0.,p);
 float aerial160=1.-exp(-pow(max(0.,-p.z)/70.,1.25));
 gl_FragColor.rgb=mix(floor160,horizon,aerial160);
 `+shader.fragmentShader.slice(end);
     shader.fragmentShader=shader.fragmentShader.replace('mix(4.,18.,smoothstep(0.,.9,height))','mix(3.,8.,smoothstep(0.,.9,height))').replace('(float(y)+float(x)/7.)*8.','(float(y)+float(x)/7.)*2.');
     // Retain the same local reflection response in Indoor and Outdoor.
    };
    floor.customProgramCacheKey=()=> 'feedback160-parking-floor-v3';floor.needsUpdate=true;changed=true;
   }
   const egoContacts=new Set(),liveContacts=new Set(),contacts=[];
   const contactParent=s.getObjectByName('Parking maneuver');
   traverse(o=>{if(o.userData.trafficVehicle){
     if(o.userData.parkingReferenceSignature!==qa.controlSignature){o.userData.parkingReferenceWhite=qa.controls.white/100;o.userData.parkingReferenceControls=qa.controls;o.userData.parkingReferenceSignature=qa.controlSignature;changed=true;}
     const contact=o.userData.draftIndoorContact;
     contact?.traverse(mesh=>{const m=mesh.material;if(!m?.isShaderMaterial||!m.uniforms.opacity)return;
      if(!m.uniforms.parkingReferenceContact){m.uniforms.parkingReferenceContact={value:1};m.fragmentShader='uniform float parkingReferenceContact;\n'+m.fragmentShader.replace('void main(){','void main(){').replace(/;\s*}\s*$/,';gl_FragColor.a*=parkingReferenceContact;}');m.needsUpdate=true;changed=true;}
      const strength=dark?1:qa.controls.shadow/100;if(m.uniforms.parkingReferenceContact.value!==strength){m.uniforms.parkingReferenceContact.value=strength;changed=true;}
     });
    }
    if(o.userData.indoorContact)contacts.push(o);
    if(o.userData.draftIndoorContact)liveContacts.add(o.userData.draftIndoorContact);
    if(o.userData.vehicleSpec&&o.userData.draftIndoorContact){
     const g=o.userData.draftIndoorContact;liveContacts.add(g);
     // Match the imported X6 wheel envelope to its fenders in this review only.
     const tire=o.getObjectByName('Object_48');
     if(tire?.material?.name==='tires'&&o.userData.vehicleSpec.continuousRearValance&&!o.userData.f163WheelInset){
      o.updateMatrixWorld(true);const local=o.matrixWorld.clone().invert();
      o.traverse(part=>{if(!['Object_14','Object_47','Object_48','Object_49','Object_50','Object_51'].includes(part.name)||!part.geometry)return;
       const geometry=part.geometry.clone(),p=geometry.attributes.position,point=o.position.clone(),toCar=local.clone().multiply(part.matrixWorld),fromCar=toCar.clone().invert();
       for(let i=0;i<p.count;i++){point.fromBufferAttribute(p,i).applyMatrix4(toCar);point.x-=Math.sign(point.x)*.058;point.applyMatrix4(fromCar);p.setXYZ(i,point.x,point.y,point.z);}
       p.needsUpdate=true;geometry.computeBoundingBox();geometry.computeBoundingSphere();part.geometry=geometry;
      });
      o.userData.vehicleSpec={...o.userData.vehicleSpec,wheels:o.userData.vehicleSpec.wheels.map(w=>({...w,min:[...w.min],max:[...w.max]}))};
      for(const w of o.userData.vehicleSpec.wheels){const inset=-Math.sign((w.min[0]+w.max[0])/2)*.058;w.min[0]+=inset;w.max[0]+=inset;}
      g.children.slice(2,6).forEach((m,i)=>m.position.x=(o.userData.vehicleSpec.wheels[i].min[0]+o.userData.vehicleSpec.wheels[i].max[0])/2);
      o.userData.f163WheelInset=.058;changed=true;
     }
     if(o.parent!==contactParent)egoContacts.add(g);
     // Keep restored receivers inside the maneuver lifecycle, not the scene root.
     if(contactParent&&g.parent!==contactParent){contactParent.add(g);g.position.set(o.position.x,0,o.position.z);g.rotation.y=o.rotation.y;changed=true;qa.events.push({repair:'detached-contact',model:o.name,time:Date.now()});}
    }
   });
   for(const g of contacts)if(!liveContacts.has(g)){
    g.removeFromParent();changed=true;qa.events.push({repair:'orphan-contact',id:g.id,time:Date.now()});
   }
   traverse(group=>{
    if(!group.userData.indoorContact||!egoContacts.has(group))return;
    group.children.forEach((mesh,index)=>{
     const m=mesh.material;if(!m?.uniforms||qa.patched.has(m))return;
     qa.patched.add(m);m.uniforms.f160Tone=floor.uniforms.tone;
     m.uniforms.f160Scale={value:{x:1,y:1}};
     if(index===0){
      m.vertexShader='uniform vec2 f160Scale;varying vec2 v;void main(){v=uv;vec3 p=position;p.xy*=f160Scale;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}';
      mesh.onBeforeRender=function(){m.uniforms.f160Scale.value.x=1.12/this.scale.x;m.uniforms.f160Scale.value.y=1.10/this.scale.y;};
     }
     const ego=egoContacts.has(group);if(index>=2&&index<6)mesh.scale.set(1.05,.70,1);
     // Vehicle identity is recorded explicitly by its following contact owner below.
     const kind=index===0?'ambient':index===1?'chassis':index<6?'wheel':'rear';
     const alpha=kind==='ambient'?'.56':kind==='chassis'?'.92':kind==='wheel'?'.98':'.23';
     const mask=kind==='chassis'?'vec2 q=max(abs(p)-vec2(.57,.60),0.)/vec2(.43,.40);float a=1.-smoothstep(0.,1.,length(q));':kind==='wheel'?'float a=1.-smoothstep(.20,1.,length(p));':'float r=pow(pow(abs(p.x),4.)+pow(abs(p.y),4.),.25);float a=(1.-smoothstep(.25,1.,r))*(.7+.3*exp(-dot(p*vec2(1.1,.8),p*vec2(1.1,.8))*2.));';
     m.fragmentShader=`varying vec2 v;uniform float opacity;uniform float f160Tone;void main(){vec2 p=(v-.5)*2.;${mask}float occ=clamp(opacity/${mesh.userData.baseOpacity||1},0.,1.);float strength=mix(${ego?'2.':'1.2'},${ego?'2.7':'1.27'},f160Tone);float alpha=1.-pow(1.-a*${alpha},strength);gl_FragColor=vec4(.004,.006,.009,alpha*occ*.90);}`;
     m.needsUpdate=true;changed=true;
    });
   });
  }
  // Clip the sweep inside the painted carriageway; never change its appearance.
  const sweep=s.getObjectByName('Assistance road material lattice');
  if(sweep?.material?.uniforms?.bounds&&!qa.patched.has(sweep.material)){
   const m=sweep.material;qa.patched.add(m);
   const old=sweep.onBeforeRender;
   sweep.onBeforeRender=function(...args){
    old?.apply(this,args);const st={scene:qa.scene};
    if(['parking','outdoor','junction'].includes(st.scene)){this.visible=false;return;}
    const bounds=m.uniforms.bounds.value;
    if(st.scene==='ramp'){bounds.set(-5.55+.55,5.55-.55);}
    else if(st.scene==='elevated'){bounds.set(-5.55+.35,5.55-.35);}
    else if(st.scene==='road'){bounds.set(.35,world.layoutVisual.width/2-.35);}
   };
   changed=true;
  }
  if(changed){qa.events.push({scene:state.scene,dark,time:Date.now()});if(qa.events.length>64)qa.events.shift();}
  lastChildren=group?.children.length;lastSceneChildren=s.children.length;lastContact=world.car?.userData.draftIndoorContact;
  qa.scene=state.scene;qa.dark=dark;return true;
 };
 // Runs inside the existing draw, after scene setup and before visible pixels.
 // Stable frames only compare lifecycle identities; no snapshots or extra draws.
 qa.prepareFrame=(world,scene)=>{
  instrument(world);metrics.frames++;const start=performance.now();
  try{patch(world,scene);}catch(e){if(qa.errors.at(-1)!==e.message){qa.errors.push(e.message);if(qa.errors.length>64)qa.errors.shift();}}
  const elapsed=performance.now()-start;metrics.totalMs+=elapsed;metrics.maxMs=Math.max(metrics.maxMs,elapsed);
  if(auditOutput&&start-lastAudit>1000){lastAudit=start;auditOutput.textContent=JSON.stringify({version:qa.version,scene,...metrics,errors:qa.errors,...(diagnostic?{cadence:Object.fromEntries(Object.entries(cadence.buckets).map(([key,b])=>[key,{interval:summarize(b.intervals),drawMs:summarize(b.drawMs)}])),longTasks:cadence.longTasks,observerErrors:cadence.observerErrors,exportControl:{top:document.getElementById('export-section').getBoundingClientRect().top,buttonTop:document.getElementById('export').getBoundingClientRect().top,opacity:getComputedStyle(document.getElementById('export')).opacity,disabled:document.getElementById('export').disabled,inspectorInert:document.getElementById('inspector-scroll').inert},themeMotion:document.body.dataset.themeMotion,themeHeld:window.draftController?.bridge().themeStatus().held,transport:{label:document.getElementById('scene-transport').textContent,hidden:document.getElementById('scene-transport').hidden},runtime:document.getElementById('engine').contentDocument?.querySelector('script[src*=runtime]')?.src}:{})});}
 };
})();
