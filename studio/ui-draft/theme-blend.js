const materialNumbers=['roughness','metalness','clearcoat','clearcoatRoughness','specularIntensity','envMapIntensity','opacity'];
const materialColors=['color','emissive'];
export function appearanceSnapshot(world){
 const channels=[];
 function add(owner,key){const value=owner?.[key];if(typeof value==='number'&&Number.isFinite(value))channels.push({owner,key,value});else if(value?.isColor)channels.push({owner,key,value:value.clone()})}
 const materials=new Set([...Object.values(world.mat),...world.laneMaterials.values(),...(world.parkingGhostMaterials||[]),world.parkingShadow?.material,...world.egoContact.children.map(child=>child.material)]);
 for(const material of materials)if(material){for(const key of materialColors)add(material,key);for(const key of materialNumbers)add(material,key);if(material.uniforms?.opacity)add(material.uniforms.opacity,'value')}
 for(const light of [world.hemi,world.sun,world.fill]){add(light,'color');add(light,'groundColor');add(light,'intensity')}
 for(const key of ['intensity','radius'])add(world.sun.shadow,key);
 add(world.scene,'environmentIntensity');for(const key of ['color','near','far'])add(world.scene.fog,key);
 for(const key of ['buildingTint','environmentTone','darkAerialPerspective','parkingTone','reflectionStrength','draftThemeTone'])add(world[key],'value');
 for(const key of ['top','bottom','range'])add(world.sky.material.uniforms[key],'value');
 return channels;
}
export function createAppearanceBlend(){
 let channels=[],started=0,duration=400;
 function sample(now){
  if(!channels.length)return false;
  const progress=Math.min(1,Math.max(0,(now-started)/duration)),amount=progress*progress*(3-2*progress);
  for(const channel of channels)if(typeof channel.from==='number')channel.owner[channel.key]=channel.from+(channel.to-channel.from)*amount;else channel.owner[channel.key].copy(channel.from).lerp(channel.to,amount);
  if(progress===1)channels=[];
  return true;
 }
 return {active:()=>channels.length>0,sample,start(from,to,now,milliseconds=400){started=now;duration=milliseconds;channels=from.flatMap(channel=>{const target=to.find(value=>value.owner===channel.owner&&value.key===channel.key);return target?[{owner:channel.owner,key:channel.key,from:channel.value,to:target.value}]:[]});sample(now)},finish(){sample(started+duration)}};
}
