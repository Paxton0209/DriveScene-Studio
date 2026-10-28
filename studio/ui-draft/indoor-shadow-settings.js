// Fixed user-selected Indoor endpoints; independent from Road and Outdoor.
export const indoorShadowPresets=Object.freeze({
 dark:Object.freeze({egoShadow:3.21,trafficShadow:1.27,egoOpacity:1,trafficOpacity:1,egoWidth:1,egoLength:1,trafficWidth:1,trafficLength:1,castOpacity:.50,castSoftness:2.9,reflectionGain:2.7,reflectionRange:1.5,reflectionBlur:2.25}),
 light:Object.freeze({egoShadow:3.5,trafficShadow:1.54,egoOpacity:.86,trafficOpacity:.71,egoWidth:.99,egoLength:1.39,trafficWidth:1,trafficLength:1.23,castOpacity:.50,castSoftness:2.9,reflectionGain:3,reflectionRange:1.5,reflectionBlur:4})
});
// Capture vehicle silhouettes at the live raster before material roughness filtering.
// Full-size capture retains tyre/body boundaries before roughness filtering.
export function syncIndoorReflectionResolution(world,enabled){
 const target=world.carMirror?.getRenderTarget();if(!target)return;
 world.draftVehicleReflectionTexel?.value.set(1/world.width,1/world.height);
 const width=Math.ceil(world.width/(enabled?1:2)),height=Math.ceil(world.height/(enabled?1:2));
 if(target.width===width&&target.height===height)return;
 target.setSize(width,height);world.carReflectionKey=null;world.groundReflectionKey=null;
}
export const indoorShadowLimits={egoShadow:[0,4],trafficShadow:[0,2],egoOpacity:[0,1],trafficOpacity:[0,1],egoWidth:[.5,1.8],egoLength:[.5,1.8],trafficWidth:[.5,1.8],trafficLength:[.5,1.8],castOpacity:[0,1],castSoftness:[.5,8],reflectionGain:[0,3],reflectionRange:[.5,1.5],reflectionBlur:[1,4]};
export function indoorShadowValues(theme){return {...indoorShadowPresets[theme==='dark'?'dark':'light']};}
// A broader light source softens the same projected shape; light direction stays tied to body shading.
export function syncIndoorShadowLight(world,enabled){
 if(!world.sun?.shadow)return;
 const shadow=world.sun.shadow;
 syncParkingShadowPrecision(world,enabled);
 let state=world.draftIndoorShadowLight;
 if(!enabled){const density=shadow.mapSize&&shadow.camera?shadow.mapSize.x/(shadow.camera.right-shadow.camera.left):0;const radius=Math.max(state&&shadow.radius===state.applied?state.base:shadow.radius,density*.30);if(shadow.radius!==radius){shadow.radius=radius;world.renderer.shadowMap.needsUpdate=true;}world.draftIndoorShadowLight=null;return;}
 if(!state)state=world.draftIndoorShadowLight={base:shadow.radius,applied:null};
 else if(shadow.radius!==state.applied)state.base=shadow.radius;
 const softness=['10','14','15','16'].includes(world.state?.id)?world.draftParkingFinish?.castSoftness?.value??2.9:2.9;
 const density=shadow.mapSize&&shadow.camera?shadow.mapSize.x/(shadow.camera.right-shadow.camera.left):0;
 const radius=density?density*.30*(softness/2.9):world.draftParkingFinish?.castSoftness?.value??3;
 if(shadow.radius!==radius){shadow.radius=radius;world.renderer.shadowMap.needsUpdate=true;}
 state.applied=radius;
}

export function syncParkingShadowPrecision(world,enabled){
 const shadow=world.sun.shadow;if(!shadow.camera||!shadow.mapSize)return;
 const camera=shadow.camera,keys=['left','right','top','bottom'];let saved=world.draftParkingShadowPrecision;
 if(enabled&&!saved){saved=world.draftParkingShadowPrecision={bounds:Object.fromEntries(keys.map(k=>[k,camera[k]])),size:shadow.mapSize.clone()};}
 if(!saved)return;
 const bounds=enabled?{left:-36,right:36,top:48,bottom:-36}:saved.bounds;
 const size=enabled?4096:saved.size.x;
 let changed=shadow.mapSize.x!==size;for(const k of keys){changed||=camera[k]!==bounds[k];camera[k]=bounds[k];}
 if(changed){shadow.mapSize.set(size,enabled?4096:saved.size.y);camera.updateProjectionMatrix();shadow.map?.dispose();shadow.map=null;shadow.mapPass?.dispose();shadow.mapPass=null;world.renderer.shadowMap.needsUpdate=true;}
 if(!enabled)world.draftParkingShadowPrecision=null;
}
