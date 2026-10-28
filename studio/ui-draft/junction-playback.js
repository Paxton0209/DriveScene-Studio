export const LOOKAHEAD_SECONDS=2.5;
export function previewDistance(speed){return Math.max(0,Number.isFinite(speed)?speed:0)*LOOKAHEAD_SECONDS}
export function brakingSpeed(elapsed,{speed,cruise,brake,scale=1}){
 const time=Math.max(0,elapsed)/1000/scale;
 return speed*(1-Math.max(0,Math.min(1,(time-cruise)/Math.max(.001,brake))))/scale;
}

export function junctionBrakeReveal(seconds){return Math.max(0,Math.min(1,(seconds-.65)/.85));}

// Playback pause preserves the physical speed at the held frame.
export function drivingSpeed(world,id){
 if(['05','08'].includes(id))return Math.max(0,world.draftSpeed??0);
 if(Number.isFinite(world.draftCruiseSpeed))return Math.max(0,world.draftCruiseSpeed);
 const w=world.draftWeather?.weights,weather=w?1-.12*(w.overcast||0)-.22*(w.rain||0)-.38*(w.snow||0):1;
 return (['06','07'].includes(id)?13.9:16.8)*weather;
}
export function forwardPathEnd(start,speed,total,boundary=Infinity,seconds=LOOKAHEAD_SECONDS){
 return Math.max(start,Math.min(start+previewDistance(speed)*seconds/LOOKAHEAD_SECONDS,total-1,boundary));
}

// Published 20261017-release: z14 -> z-20.5 in 1.87s; the last half
// brakes linearly. Keep that speed and brake span when the start is farther.
export function publishedApproachTiming(travel){
 const referenceStop=1.87/.969,brake=referenceStop*.5;
 const speed=34.5/(referenceStop-brake*.5);
 const cruise=Math.max(0,travel/speed-brake*.5);
 return {speed,brake,cruise,stop:cruise+brake};
}

// Latest user timing overrides the published pace; retain relative braking.
export function requestedJunctionTiming(travel){
 const reference=publishedApproachTiming(travel),factor=3.5/(reference.stop*.969);
 return {speed:reference.speed/factor,brake:reference.brake*factor,cruise:reference.cruise*factor,stop:3.5/.969};
}

// Lift starts at the chosen distance before the ego stop centre.
// Invert the same cruise/brake distance curve, so camera onset follows position.
export function junctionLiftStart(travel){
 const t=requestedJunctionTiming(travel),distance=Math.max(0,travel-25);
 const cruiseDistance=t.speed*t.cruise;
 if(distance<=cruiseDistance)return distance/Math.max(.001,t.speed);
 const brakingDistance=distance-cruiseDistance;
 return t.cruise+t.brake*(1-Math.sqrt(Math.max(0,1-2*brakingDistance/(t.speed*t.brake))));
}
