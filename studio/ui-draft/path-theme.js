// Keep the original driving gradient and rim; follow the live scene tone.
export function blendPathTheme(uniforms,colors,radiance,tone){
 const amount=Math.min(1,Math.max(0,tone));
 uniforms.color.value.copy(colors.light).lerp(colors.dark,amount);
 uniforms.edgeBlend.value=.34+(.72-.34)*amount;
 for(const key of Object.keys(radiance.light))uniforms[key].value.copy(radiance.light[key]).lerp(radiance.dark[key],amount);
}
