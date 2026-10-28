// Separate shared uniforms reach ego and traffic contacts, including recycled cars.
export const roadShadowStrength={value:1},roadTrafficShadowStrength={value:1};
// Plane-local width/length; tyre contacts retain their original footprint.
export const roadShadowSpread={value:[1,1]};
export function syncRoadShadow(scene,value=1){
 const driving=['road','elevated','ramp','junction'].includes(scene);
 roadShadowSpread.value[0]=driving?1.1:1;roadShadowSpread.value[1]=driving?1.075:1;
 const setting=Number.isFinite(value)?{ego:value,traffic:value}:value||{};
 for(const [key,uniform,max] of [['ego',roadShadowStrength,4],['traffic',roadTrafficShadowStrength,2]])uniform.value=driving&&Number.isFinite(setting[key])?Math.max(0,Math.min(max,setting[key])):1;
 return {ego:roadShadowStrength.value,traffic:roadTrafficShadowStrength.value};
}
