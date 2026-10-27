export const sceneTypes=[{id:'road',label:'Road',group:'Driving',layout:'02',seed:110},{id:'elevated',label:'Elevated',group:'Driving',layout:'03',seed:111},{id:'ramp',label:'Ramp',group:'Driving',layout:'06',seed:112},{id:'junction',label:'Junction',group:'Intersection',layout:'05',seed:113},{id:'parking',label:'Indoor parking',icon:'indoor',group:'Parking',layout:'10',seed:114},{id:'outdoor',label:'Outdoor parking',group:'Parking',layout:'17',seed:115}];
export function createArtboard(type,settings={}){const scene=sceneTypes.find(scene=>scene.id===type)||sceneTypes[0],parking=['parking','outdoor'].includes(scene.id),camera=parking?(['default','raised','bev'].includes(settings.camera)?settings.camera:'default'):(settings.camera||'low');return {id:`artboard-${scene.id}`,type:scene.id,title:scene.label,size:{width:1920,height:1080},seed:scene.seed,params:{layout:scene.layout,lanes:6,weather:'default',model:'model-3',path:false,traffic:false,buildings:true,trees:true,waterfront:false,roadworks:false,...settings,camera}}}
export function setProjectWeather(project,value){
 const weather=['default','rain','snow'].includes(value)?value:'default';project.shared.weather=weather;for(const board of Object.values(project.boards))board.params.weather=weather;return weather;
}
export function setProjectVehicle(project,value){const model=['model-3','x6','ix','xc90'].includes(value)?value:'model-3';project.shared.model=model;for(const board of Object.values(project.boards))board.params.model=model;return model;}
export function createProject(saved={}){
 const active=sceneTypes.some(scene=>scene.id===saved.active)?saved.active:'road',project={schema:'drivescene.ui-draft.artboards.v3',active,shared:{},boards:Object.fromEntries(sceneTypes.map(scene=>[scene.id,createArtboard(scene.id,{...saved.boards?.[scene.id]?.params})]))};
 delete project.boards.junction.params.liftDistance;
 setProjectVehicle(project,saved.shared?.model??saved.boards?.[active]?.params?.model);setProjectWeather(project,saved.shared?.weather??saved.boards?.[active]?.params?.weather??'default');return project;
}
