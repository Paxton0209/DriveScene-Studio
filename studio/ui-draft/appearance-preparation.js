export function installAppearancePreparation(world,prepareRenderer){
 const preparedAppearances=new WeakMap(),appearanceKey=car=>car.uuid+'|'+world.state?.mode;
 const remember=car=>{let keys=preparedAppearances.get(world.root);if(!keys)preparedAppearances.set(world.root,keys=new Set());keys.add(appearanceKey(car));};
 const preparedDraw=world.renderPreparedFrame;
 world.renderPreparedFrame=function(...args){const result=preparedDraw.apply(this,args);remember(this.car);return result;};
 // All four models share the scene's lights and render passes. Record their
 // exact meshes together so each pass is traversed/compiled once per scene.
 world.draftPrepareAppearances=async cars=>{
  const pendingCars=cars.filter(car=>!preparedAppearances.get(world.root)?.has(appearanceKey(car)));
  if(!pendingCars.length)return;
  world.draftAppearancePreparations=(world.draftAppearancePreparations||0)+1;
  const initializing=world.initializingScene,suspended=world.suspended,staged=[];
  world.initializingScene=true;world.suspended=false;
  try{
   for(const car of pendingCars)if(car!==world.car){
    staged.push({car,parent:car.parent,position:car.position.clone(),rotation:car.rotation.clone(),visible:car.visible});
    car.position.copy(world.car.position);car.rotation.copy(world.car.rotation);car.visible=true;world.scene.add(car);
   }
   const pending=prepareRenderer(world);world.suspended=true;await pending;
  }finally{
   for(const {car,parent,position,rotation,visible}of staged){car.removeFromParent();parent?.add(car);car.position.copy(position);car.rotation.copy(rotation);car.visible=visible;}
   world.initializingScene=initializing;world.suspended=suspended;
  }
  world.renderPreparedFrame();
  for(const car of pendingCars)remember(car);
 };
 world.draftPrepareAppearance=()=>world.draftPrepareAppearances([world.car]);
}
