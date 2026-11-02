// View-transition capture must not depend on a WebGL layer being available
// during its compositor handoff. Decode each raster before exposing it.
export async function protectThemeFrame({canvas,renderer,host}){
 const document=host.ownerDocument,image=document.createElement('img');
 image.className='theme-scene-frame';image.alt='';image.setAttribute('aria-hidden','true');
 const visibility=renderer.style.visibility;
 let released=false;
 const update=async()=>{
  const next=document.createElement('img');
  next.src=canvas.toDataURL('image/png');
  await next.decode();
  if(!released){image.src=next.src;await image.decode();}
 };
 await update();host.append(image);renderer.style.visibility='hidden';
 return {update,release(){if(released)return;released=true;renderer.style.visibility=visibility;image.remove();}};
}
