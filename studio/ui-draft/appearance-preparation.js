export function installAppearancePreparation(world,prepareRenderer){
 const preparedAppearances=new WeakMap(),appearanceKey=()=>world.car.uuid+'|'+world.state?.mode;
 const preparedDraw=world.renderPreparedFrame;
 world.renderPreparedFrame=function(...args){const result=preparedDraw.apply(this,args);let keys=preparedAppearances.get(this.root);if(!keys)preparedAppearances.set(this.root,keys=new Set());keys.add(appearanceKey());return result;};
 // Warm exact scene/light/shadow variants after a car or tone changes. Keep
 // live animation suspended while independent warm jobs yield to input.
 world.draftPrepareAppearance=async()=>{
  if(preparedAppearances.get(world.root)?.has(appearanceKey()))return;
  const initializing=world.initializingScene,suspended=world.suspended;
  world.initializingScene=true;world.suspended=false;
  try{const pending=prepareRenderer(world);world.suspended=true;await pending;world.renderPreparedFrame();}
  finally{world.initializingScene=initializing;world.suspended=suspended;}
 };
}
