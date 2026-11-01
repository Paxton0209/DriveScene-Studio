// Integrate body-centre speed so geometry, steering and wheels stay together.
// Every gear leg begins and ends at rest, with zero endpoint acceleration.
const cruise=8/3.6,launchTime=2.2,brakeTime=2.8;
// The forward stop settles 20% sooner; reverse and alignment retain their timing.
export const parkingApproachBrakeScale=.8;
export function parkingLegDuration(length,brakeScale=1){
 const rampTime=launchTime+brakeTime*brakeScale;
 const run=Math.max(0,length)/cruise;
 // Short legs lower their peak speed, keeping the same acceleration bounds.
 return run>=rampTime/2?run+rampTime/2:Math.sqrt(2*run*rampTime);
}
export function parkingTravel(time,duration,brakeScale=1){
 if(duration<=0||time>=duration)return 1;
 const rampTime=launchTime+brakeTime*brakeScale,t=Math.max(0,time),scale=Math.min(1,duration/rampTime),launch=launchTime*scale,brake=brakeTime*brakeScale*scale,brakeStart=duration-brake,travel=duration-(launch+brake)/2;
 if(t<launch){const u=t/launch;return launch*(u*u*u-u*u*u*u/2)/travel;}
 if(t<=brakeStart)return (t-launch/2)/travel;
 const u=(t-brakeStart)/brake;
 // Integral of 1-smoothstep(u) spreads braking over the full approach.
 return Math.min(1,(brakeStart-launch/2+brake*(u-u*u*u+u*u*u*u/2))/travel);
}
