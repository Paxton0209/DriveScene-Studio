// A separate material draft owns this experiment; the workbench stays at mix 0.
// The reference's blue palette is excluded from both variants.
const query=new URLSearchParams(globalThis.location?.search||'');
export const SR_QUALITY_MIX=query.get('review')==='material-draft'&&query.get('quality')==='sr50'?.5:0;
export function lightQualityForMix(mix){
 const blend=(current,reference)=>current+(reference-current)*mix;
 return Object.freeze({
  roadRoughness:blend(.54,.10),buildingRoughness:blend(.62,.10),buildingClearcoat:blend(.025,.455),
  reflectionStrength:1,shadowRadius:3,shadowIntensity:.28,
  roadFinishBase:blend(.48,.66),groundFinishBase:.82,
  surfaceSpecularBoost:3.4,aerialStart:55,aerialSpan:blend(225,405)

 });
}
export const lightQuality=lightQualityForMix(SR_QUALITY_MIX);
