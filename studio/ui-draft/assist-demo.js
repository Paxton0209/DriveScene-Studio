// The single demo intent owns both route guidance and vehicle playback.
export async function setAssistDemo(bridge,enabled){
 const state=()=>bridge.get({audit:false});
 if(!enabled){bridge.setPlaying(false);await bridge.param('path',false,{sound:true});return false;}
 if(state().playing)return true;
 const scene=state().scene;
 try{
  if(['parking','outdoor'].includes(scene))await bridge.parkingPlay();
  else{
   if(state().junction?.complete)bridge.replay();
   await bridge.param('path',true,{sound:true});
   if(state().scene!==scene)return false;
   bridge.setPlaying(true);
  }
  return !!state().playing;
 }catch(error){bridge.setPlaying(false);if(state().scene===scene)await bridge.param('path',false,{sound:false});throw error;}
}
