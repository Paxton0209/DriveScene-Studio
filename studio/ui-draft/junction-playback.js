export const LOOKAHEAD_SECONDS=8;
export function previewDistance(speed){return Math.max(0,Number.isFinite(speed)?speed:0)*LOOKAHEAD_SECONDS}
export function brakingSpeed(elapsed,{speed,cruise,brake,scale=1}){
 const time=Math.max(0,elapsed)/1000/scale;
 return speed*(1-Math.max(0,Math.min(1,(time-cruise)/Math.max(.001,brake))))/scale;
}
