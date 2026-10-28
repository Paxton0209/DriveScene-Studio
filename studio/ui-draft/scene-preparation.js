// Keep construction order intact while yielding by work time, not object count.
export function yieldSceneTask(){
 if(globalThis.scheduler?.yield)return globalThis.scheduler.yield();
 return new Promise(resolve=>{
  const channel=new MessageChannel();
  channel.port1.onmessage=()=>{channel.port1.close();channel.port2.close();resolve();};
  channel.port2.postMessage(null);
 });
}

export async function prepareSceneSteps(steps,{budget=4,now=()=>performance.now(),yieldTask=yieldSceneTask}={}){
 let started=now();
 for(const step of steps){
  if(now()-started>=budget){await yieldTask();started=now();}
 }
}
