// A clear prepared first frame remains faintly visible while WebGL prepares.
export function showStartupPoster(previews,scope=window){
 const root=scope.document.documentElement,q=new URLSearchParams(scope.location.search);
 const value=q.get('qa'),suffix=q.has('qa')?'-qa'+(['','1'].includes(value)?'':'-'+value):'';
 let active='road',theme='light',project='{}',settings={};
 try{project=scope.localStorage.getItem('drivescene-ui-draft-project-v2'+suffix)||'{}';settings=JSON.parse(project);active=settings.active||active}catch{}
 try{theme=scope.localStorage.getItem('sr-ui-draft-theme'+suffix)||theme}catch{}
 theme=theme==='dark'?'dark':'light';root.dataset.theme=theme;
 // Reloads reuse the session's ready path. A new document still waits for its
 // own renderer; cached resources never imply that WebGL is already ready.
 const sessionKey='drivescene-startup-ready-v1'+suffix;
 let returning=scope.performance?.getEntriesByType('navigation')?.[0]?.type==='reload';
 try{returning=returning||scope.sessionStorage?.getItem(sessionKey)==='ready'}catch{}
 if(returning)root.dataset.startup='warm';
 scope.__draftStartupSessionKey=sessionKey;
 let image=previews[active+'-'+theme]||previews['road-'+theme];
 root.dataset.startupPreview='prepared';
 try{
  const clear=JSON.parse(scope.sessionStorage?.getItem('drivescene-reload-frame-v1'+suffix)||'null');
  if(returning&&clear?.project===project&&clear.theme===theme){image=clear.data;root.dataset.startupPreview='clear';}
 }catch{}
 // Start decoding in the head, before the background first participates in
 // layout. Otherwise Safari can paint an empty artboard for one frame.
 if(scope.Image){const preview=new scope.Image();preview.src=image;scope.__draftStartupPosterReady=preview.decode().catch(()=>{});}
 root.style.setProperty('--startup-poster',`url("${image}")`);
}
export function layoutStartupPoster(doc=document,viewportWidth=innerWidth){
 const bounds=doc.getElementById('stage').getBoundingClientRect(),mobile=viewportWidth<640,compact=bounds.height<200,pad=mobile?24:80,availableWidth=Math.max(16,bounds.width-pad),availableHeight=Math.max(9,bounds.height-(compact?48:mobile?104:88)),width=Math.max(16,Math.floor(Math.min(availableWidth,availableHeight*16/9)/16)*16),height=width*9/16;
 Object.assign(doc.getElementById('artboard').style,{width:width+'px',height:height+'px',left:Math.round((bounds.width-width)/2)+'px',top:Math.round((compact?18:mobile?26:40)+(availableHeight-height)/2)+'px'});
}

// One clear, bounded snapshot is captured on navigation, outside the startup
// timeline. A reload can retain it while its new WebGL renderer is prepared.
export function rememberReloadPoster(source,scope=window){
 try{
  const q=new URLSearchParams(scope.location.search),value=q.get('qa'),suffix=q.has('qa')?'-qa'+(['','1'].includes(value)?'':'-'+value):'',project=scope.localStorage.getItem('drivescene-ui-draft-project-v2'+suffix)||'{}';
  const canvas=scope.document.createElement('canvas');canvas.width=Math.min(1280,source.width);canvas.height=Math.round(canvas.width*source.height/source.width);
  canvas.getContext('2d').drawImage(source,0,0,canvas.width,canvas.height);
  scope.sessionStorage.setItem('drivescene-reload-frame-v1'+suffix,JSON.stringify({project,theme:scope.document.documentElement.dataset.theme==='dark'?'dark':'light',data:canvas.toDataURL('image/jpeg',.9)}));
 }catch{}
}
