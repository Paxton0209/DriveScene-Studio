// Selected in the local motion tuner: fraction of the 448 ms contraction.
export const laneRetireTiming=Object.freeze({'6-4':.38,'4-2':.35,'6-2':.31});

// Selected in the local junction tuner; wall-clock seconds from Play.
export const junctionRhythm=Object.freeze({liftDelay:.41,stopTime:1.87});
export function junctionApproachTiming(travel){
 const approachSpeed=10,brakeDuration=Math.min(2,2*travel/approachSpeed),cruiseDuration=Math.max(0,(travel-approachSpeed*brakeDuration/2)/approachSpeed);
 const baseDuration=cruiseDuration+brakeDuration,referenceLiftStart=Math.max(0,cruiseDuration+brakeDuration*.40-.8/.969),baseLiftDuration=baseDuration-referenceLiftStart,leadDuration=.45/.969;
 const defaultLiftStart=junctionRhythm.liftDelay/.969+leadDuration;
 return {brakeDuration,cruiseDuration,baseDuration,referenceLiftStart,baseLiftDuration,leadDuration,defaultLiftStart,duration:(referenceLiftStart+baseLiftDuration*1.05)*1.02,vehicleStopTime:junctionRhythm.stopTime/.969};
}

// Selected in the local preview controls; fixed for every browser and reload.
export const previewMotionSettings=Object.freeze({branchPaintStart:.07,laneSpeed:1.35,coastDuration:.70});
