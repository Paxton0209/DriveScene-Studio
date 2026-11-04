export const FRAME_SECONDS=1/60;
// Accumulate fast callbacks, but preserve actual elapsed time instead of
// quantizing 60 Hz jitter into skipped and doubled simulation updates.
export function frameStep(accumulator,elapsed=accumulator,sampleEveryFrame=false){
 // Keep each display callback at 60–100 Hz. Only accumulate faster callbacks:
 // an 80/90 Hz display otherwise falls to 40/45 updates per second.
 if(!sampleEveryFrame&&elapsed<1/100&&accumulator<1/75)return {seconds:0,remaining:accumulator};
 return {seconds:Math.min(.1,accumulator),remaining:0};
}
