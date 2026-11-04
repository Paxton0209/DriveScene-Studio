// The path is refreshed after the scene's appearance sample, so all of its
// shader colours must use that same sample rather than the destination mode.
// The author unified all information blue with Export's approved fill token.
// This display-referred overlay bypasses ACES, so set sRGB via Color.set rather
// than reusing the engine's legacy inverse-ACES palette. Scene lighting stays intact.
export function unifyPathAccent(theme,colors,palette,radiance,accent){
 if(!accent){
  const doc=globalThis.parent?.document;
  accent=doc?.defaultView.getComputedStyle(doc.documentElement).getPropertyValue('--ds-color-accent-fill').trim();
 }
 if(!accent)return false;
 for(const tone of Object.keys(theme)){
  theme[tone]=accent;colors[tone].set(accent);
  for(const key of Object.keys(palette[tone])){palette[tone][key]=accent;radiance[tone][key].set(accent);}
 }
 return true;
}
export function blendPathTheme(uniforms,colors,radiance,tone){
 const amount=Math.min(1,Math.max(0,tone));
 uniforms.color.value.copy(colors.light).lerp(colors.dark,amount);
 uniforms.edgeBlend.value=.34+(.72-.34)*amount;
 for(const key of Object.keys(radiance.light))uniforms[key].value.copy(radiance.light[key]).lerp(radiance.dark[key],amount);
}
