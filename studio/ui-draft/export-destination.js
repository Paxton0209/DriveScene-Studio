export function exportFileSpec(format,videoExtension='mp4'){
 const [extension,mime,description]=({png:['png','image/png','PNG image'],depth:['png','image/png','Depth image'],camera:['json','application/json','Camera settings'],kit:['zip','application/zip','Perspective kit'],video:videoExtension==='webm'?['webm','video/webm','WebM video']:['mp4','video/mp4','MP4 video']})[format]||['png','image/png','PNG image'];
 return {extension,mime,description};
}
// Invoke before rendering/encoding so the native picker retains the click's
// transient user activation. Cancelling never starts the export.
export async function chooseExportDestination({format,name,videoExtension='mp4'},host=window){
 const spec=exportFileSpec(format,videoExtension);
 if(typeof host.showSaveFilePicker!=='function')throw Error('Choose a save location in a browser that supports Save As (Chrome or Edge).');
 return host.showSaveFilePicker({id:'drivescene-export',suggestedName:`${name}.${spec.extension}`,types:[{description:spec.description,accept:{[spec.mime]:[`.${spec.extension}`]}}]});
}
export async function writeExportFile(handle,blob){
 const stream=await handle.createWritable();
 try{await stream.write(blob);await stream.close();}catch(error){await stream.abort().catch(()=>{});throw error;}
}
