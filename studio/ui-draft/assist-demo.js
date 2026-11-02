// Driving assistance changes the overlay; parking assistance starts the maneuver.
export async function setAssistDemo(bridge,enabled){
 const state=()=>bridge.get({audit:false}),scene=state().scene;
 if(!!state().features.path===!!enabled)return !!enabled;
 if(['parking','outdoor'].includes(scene)){
  if(!enabled){bridge.setPlaying(false);await bridge.param('path',false,{sound:true});return false;}
  try{await bridge.parkingPlay();return state().scene===scene&&!!state().features.path;}
  catch(error){bridge.setPlaying(false);if(state().scene===scene)await bridge.param('path',false,{sound:false});throw error;}
 }
 await bridge.param('path',!!enabled,{sound:true});
 return state().scene===scene&&!!state().features.path;
}
