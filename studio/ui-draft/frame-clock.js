export const FRAME_SECONDS=1/60;
// Accumulate fast callbacks, but preserve actual elapsed time instead of
// quantizing 60 Hz jitter into skipped and doubled simulation updates.
export function frameStep(accumulator){
 if(accumulator<1/75)return {seconds:0,remaining:accumulator};
 return {seconds:Math.min(.1,accumulator),remaining:0};
}
