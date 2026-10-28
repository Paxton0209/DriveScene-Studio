const frame=document.querySelector('iframe'),out=document.querySelector('pre'),wait=ms=>new Promise(r=>setTimeout(r,ms));
document.querySelector('#mobile').onclick=()=>{frame.style.width='390px';frame.style.height='844px'};
document.querySelector('#run').onclick=async()=>{const e={errors:[],images:[]};const save=()=>out.textContent=JSON.stringify(e,null,2);try{
 while(frame.contentDocument?.body.dataset.ready!=='true')await wait(100);
 const c=frame.contentWindow.draftController,b=c.bridge(),d=frame.contentDocument,advance=t=>{for(let i=0;i<t-1e-8;i+=1/30)b.advance(Math.min(1/30,t-i));};
 const check=(v,m)=>{if(!v)throw Error(m)},snap=name=>{const img=new Image();img.dataset.name=name;img.src=b.canvas.toDataURL();document.querySelector('#gallery').append(img);e.images.push(name);save()};
 await c.selectScene('junction');await c.applyParam('traffic',true);await c.applyParam('path',true);b.setPlaying(true);advance(4);b.setPlaying(false);snap('junction-braking');
 b.setPlaying(true);advance(30);b.setPlaying(false);check(b.get().junction.complete&&b.get().junction.speed===0,'junction zero speed');
 const lamp=b.capture().objects.find(o=>o.object.name==='Left rear turn signal');check(lamp,'rear turn signal exists');
 e.indicator=[];for(let i=0;i<10;i++){advance(.1);e.indicator.push(lamp.object.visible);if(lamp.object.visible&&!e.images.includes('junction-stop-indicator'))snap('junction-stop-indicator');}check(e.indicator.includes(true)&&e.indicator.includes(false),'rear lamp blinks');
 await c.selectScene('road');await c.applyParam('weather','rain');b.setPlaying(false);await wait(500);snap('road-rain-horizon');await c.applyParam('weather','snow');await wait(500);snap('road-snow-horizon');await c.applyParam('weather','default');
 await c.selectScene('outdoor');await c.applyParam('traffic',true);await c.applyParam('buildings',true);await c.applyParam('path',false);
 const bay=b.audit().parkingBays.find(p=>p.x===5.9&&p.z===-3.6),r=b.canvas.getBoundingClientRect();for(const type of ['pointerdown','pointerup'])b.canvas.dispatchEvent(new PointerEvent(type,{clientX:r.left+bay.screen[0]*r.width,clientY:r.top+bay.screen[1]*r.height,bubbles:true}));
 await wait(1100);await c.applyParam('path',true,true,{sound:true});advance(6.1);b.setPlaying(false);e.occluders=b.audit().occluders;snap('outdoor-route-occlusion');
 await c.selectScene('parking');await c.applyParam('traffic',true);await c.applyParam('path',false);e.complete=true;save();out.dataset.complete='true';
 }catch(error){e.errors.push(error.stack);save();out.dataset.complete='error'}};
