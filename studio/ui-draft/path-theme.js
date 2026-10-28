// The path is refreshed after the scene's appearance sample, so all of its
// shader colours must use that same sample rather than the destination mode.
export function blendPathTheme(uniforms,colors,radiance,tone){
 const amount=Math.min(1,Math.max(0,tone));
 uniforms.color.value.copy(colors.light).lerp(colors.dark,amount);
 uniforms.edgeBlend.value=.34+(.72-.34)*amount;
 for(const key of Object.keys(radiance.light))uniforms[key].value.copy(radiance.light[key]).lerp(radiance.dark[key],amount);
}
