export const vehicleCatalog=Object.freeze([
 {id:'x6',name:'BMW X6',author:'vecarz (heynic)',source:'https://sketchfab.com/3d-models/bmw-x6m-competition-assetto-wwwvecarzcom-3979a908081948e0971f5a5380b60a0f'},
 {id:'model-3',name:'Tesla Model 3',author:'RBLXSupercars',source:'https://sketchfab.com/3d-models/2024-tesla-model-3-fd22be415215453693d67e33aa7812d0'},
 {id:'ix',name:'BMW iX',author:'DisneyCars (supercarmodels)',source:'https://sketchfab.com/3d-models/2024-bmw-ix-b277d6b6109845ffb3cc5de325e71948'},
 {id:'xc90',name:'Volvo XC90',author:'Nieve5677',source:'https://sketchfab.com/3d-models/volvo-xc90-8135a6c9c9344079bfaefc9d747e2ceb'}
]);
export function vehicleSpec(id){return vehicleCatalog.find(model=>model.id===id)||vehicleCatalog[0];}
export function vehicleReadme(readme,id){
 const model=vehicleSpec(id);
 return readme.replace(/Vehicle: BMW[^\n]+/,`Vehicle: ${model.name}, by ${model.author}. CC BY 4.0 as declared in the asset metadata. White paint, glazing, lamps, orientation, scale and delivery geometry modified.\nSource: ${model.source}\nVehicle library: vehicle-library/README.md`);
}
