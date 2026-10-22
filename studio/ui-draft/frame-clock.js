export const FRAME_SECONDS=1/60;
export function frameStep(accumulator){
 const frames=Math.max(0,Math.floor((accumulator+FRAME_SECONDS*.25)/FRAME_SECONDS));
 return {seconds:Math.min(.1,frames*FRAME_SECONDS),remaining:accumulator-frames*FRAME_SECONDS};
}
