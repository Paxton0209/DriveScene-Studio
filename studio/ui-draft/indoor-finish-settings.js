// User-approved Indoor endpoints. These multipliers remain independent of
// traffic colour tuning and never apply to Outdoor materials.
export const indoorFinishPresets=Object.freeze({
 dark:Object.freeze({bay:2,column:.8,traffic:1.05,blue:.10165,ground:.91}),
 light:Object.freeze({bay:0,column:2,traffic:1,blue:0,ground:1})
});
export function indoorFinishValues(theme,traffic,blue,ground){
 const preset=indoorFinishPresets[theme==='dark'?'dark':'light'];
 return {...preset,traffic:Math.max(0,Math.min(2,Number.isFinite(traffic)?traffic:preset.traffic)),blue:Math.max(0,Math.min(1,Number.isFinite(blue)?blue:preset.blue)),ground:Math.max(0,Math.min(2,Number.isFinite(ground)?ground:preset.ground))};
}
