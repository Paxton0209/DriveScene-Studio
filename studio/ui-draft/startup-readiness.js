// The opening prepares the selected scene; alternatives prepare on selection.
// Preparation stays in the hidden renderer; only the restored initial scene
// may be handed to the parent opacity surface.
export function startupChoices(boards,active){
 if(active&&boards[active]){const board=boards[active];return [{key:board.type,seed:board.seed,params:{...board.params}}];}
 const choices=[];
 for(const board of Object.values(boards)){
  const variants=board.type==='road'?[2,4,6].map(lanes=>({...board.params,lanes})):board.type==='ramp'?['06','07'].map(layout=>({...board.params,layout})):board.type==='junction'?['05','08'].map(layout=>({...board.params,layout})):[{...board.params}];
  for(const params of variants)choices.push({key:board.type,seed:board.seed,params});
 }
 return choices;
}

export async function prepareStartupChoices({world,models,cache,prepareVehicle,choices,select,state,restore,now=()=>performance.now()}){
 const started=now(),initialCar=world.car,suspended=world.suspended,initializing=world.initializingScene;
 const releases=models.map(id=>cache.retain(id));
 const audit=world.draftStartupReadiness={ready:false,models:[],scenes:[],appearances:0,started};
 world.initializingScene=true;world.suspended=true;
 try{
  // Parallel downloads, serialized renderer work. A failed alternative model
  // must reject the same completion gate as a failed initial model.
  const cars=await Promise.all(models.map(async id=>({id,car:await cache.get(id)})));
  world.suspended=false;
  for(const {id,car} of cars){await prepareVehicle(car);audit.models.push(id);}
  world.suspended=true;
  for(const choice of choices){
   select(choice);await world.prepareInitialScene(state());
   for(const {car} of cars){
    if(world.car!==car)world.setVehicle(car,{disposePrevious:false,preserveScene:true});
    world.update(state(),{deferRender:true});
   }
   await world.draftPrepareAppearances(cars.map(({car})=>car));audit.appearances+=cars.length;
   // Theme changes mostly update uniforms, but road reflection materials also
   // select a physical shader variant. Draw both themes before exposing clicks.
   const initialState=state();
   if(initialState.mode){
    world.update({...initialState,mode:initialState.mode==='dark'?'light':'dark'},{deferRender:true});
    world.renderPreparedFrame();world.update(initialState,{deferRender:true});world.renderPreparedFrame();
   }
   audit.scenes.push({scene:choice.key,layout:choice.params.layout,lanes:choice.params.lanes});
  }
  // Exercise each retained car in the restored scene's real colour pass too.
  // Proxy compilation alone can miss active-car-only glass/depth variants.
  restore();await world.prepareInitialScene(state());
  for(const {car} of cars){
   if(world.car!==car)world.setVehicle(car,{disposePrevious:false,preserveScene:true});
   world.update(state(),{deferRender:true});world.renderPreparedFrame();
  }
 }catch(error){audit.error=error.message;throw error;}
 finally{
  try{
   restore();
   if(world.car!==initialCar)world.setVehicle(initialCar,{disposePrevious:false,preserveScene:true});
   await world.prepareInitialScene(state());world.update(state(),{deferRender:true});
   await world.draftPrepareAppearance();world.renderPreparedFrame();
   world.continuousDrive?.rebind();
  }finally{world.initializingScene=initializing;world.suspended=suspended;for(const release of releases)release();}
 }
 const resident=cache.stats();
 if(models.some(id=>!resident.models.includes(id)))throw Error('Startup vehicle cache could not retain every choice');
 audit.cache=resident;audit.finished=now();audit.duration=audit.finished-started;audit.ready=true;
 return audit;
}

export async function decodeStartupControls(root,{compact=false}={}){
 const images=[...root.querySelectorAll(compact
  ? '#vehicle-strip [aria-checked="true"] img, .shell-vehicle-card img'
  : '#vehicle-strip img')];
 // CSS backgrounds and masks need their own decode gate. The compact
 // scene picker also has a chevron.
 const Image=root.defaultView?.Image;
 const icons=['assist-wheel-off.svg',...(compact?['chevron-down.svg']:[])];
 if(Image)for(const path of icons){const image=new Image();image.src=new URL('./'+path,root.baseURI).href;images.push(image);}
 const decoding=images.map(async image=>{
  await image.decode();if(!image.naturalWidth)throw Error('Control image could not load');
 });
 // A missing decoration must not keep the compact controls and scene hidden.
 if(compact)await Promise.allSettled(decoding);
 else await Promise.all(decoding);
 await root.fonts?.ready;
}
