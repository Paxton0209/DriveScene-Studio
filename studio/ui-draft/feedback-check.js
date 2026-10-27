const frame=document.querySelector('iframe'),out=document.querySelector('pre'),wait=ms=>new Promise(r=>setTimeout(r,ms));
document.querySelector('#run').onclick=async()=>{
 const evidence={checks:[],images:[],errors:[]};window.feedbackEvidence=evidence;
 const save=()=>out.textContent=JSON.stringify(evidence,null,2),check=(value,label)=>{evidence.checks.push({label,pass:!!value});save();if(!value)throw Error(label)};
 try{
 while(frame.contentDocument?.body.dataset.ready!=='true')await wait(100);
 const c=frame.contentWindow.draftController,b=c.bridge(),d=frame.contentDocument;
 const snap=name=>{const img=new Image();img.dataset.name=name;img.src=b.canvas.toDataURL();document.querySelector('#gallery').append(img);evidence.images.push(name);save()};
 const param=async(k,v)=>{await c.applyParam(k,v);await wait(900);b.setPlaying(false)};
 const scene=async(name)=>{await c.selectScene(name);b.setPlaying(false);await wait(500)};
 const theme=async(value)=>{if(d.documentElement.dataset.theme!==value)d.querySelector('#theme').click();await wait(850)};
 await scene('road');await param('waterfront',true);await theme('light');snap('coast-light');await theme('dark');snap('coast-dark');
 await param('weather','rain');snap('coast-dark-rain');await theme('light');snap('coast-light-rain');await param('weather','snow');snap('road-light-snow');await theme('dark');snap('road-dark-snow');await param('weather','default');await param('waterfront',false);
 evidence.lanes=[];
 for(const lanes of [2,4,6]){await param('lanes',lanes);const before=b.audit().laneVisual.lines.length;for(const model of ['x6','ix','xc90','model-3']){await param('model',model);const a=b.audit();evidence.lanes.push({lanes,model,count:a.laneVisual.lines.length,width:a.laneVisual.width});check(a.laneVisual.lines.length===before,'model preserves lane geometry '+lanes+' '+model)}snap('road-'+lanes+'-dark')}
 await scene('ramp');await theme('light');let a=b.audit();check(a.buildingOwnedCount===0,'ramp has no buildings');check(a.treePlacements.length===0,'ramp has no trees');check(!d.querySelector('[data-param="buildings"], [data-param="trees"]'),'ramp scenery controls absent');snap('ramp-light');await theme('dark');snap('ramp-dark');await param('layout','07');snap('merge-dark');
 await scene('elevated');await param('weather','rain');await theme('light');snap('elevated-light-rain');await theme('dark');snap('elevated-dark-rain');await param('weather','default');
 await scene('junction');await param('traffic',true);await param('path',true);await theme('light');snap('junction-light');await theme('dark');snap('junction-dark');
 await scene('outdoor');await param('traffic',true);await theme('light');snap('outdoor-light');await theme('dark');snap('outdoor-dark');
 await scene('parking');await param('traffic',true);await theme('light');snap('indoor-light');await theme('dark');snap('indoor-dark');
 evidence.complete=true;save();out.dataset.complete='true';
 }catch(error){evidence.errors.push(error.stack);save();out.dataset.complete='error'}
};
