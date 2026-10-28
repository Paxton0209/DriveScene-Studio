// The parent owns the picker UI; selection remains an explicit async transaction.
export function createVehicleSelection({selected,onChange,ids}){
 let current=selected,ready=false,pending=null;
 return {
  sync(value){ready=value;},
  choose(id){
   if(!ids.includes(id))return Promise.reject(Error('Unknown vehicle'));
   if(pending)return Promise.reject(Error('Vehicle change already in progress'));
   if(!ready)return Promise.reject(Error('Vehicle is not ready'));
   if(id===current)return Promise.resolve();
   pending=Promise.resolve().then(()=>onChange(id)).then(()=>{current=id;}).finally(()=>{pending=null;});
   return pending;
  }
 };
}
