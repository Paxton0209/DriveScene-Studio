export const isJunction=id=>['05','08'].includes(id);
// The approach yields to the cross street. Longitudinal traffic stops at the
// same physical boundary as the ego; cross traffic occupies distinct lanes.
export function junctionTrafficPlan(id){
 if(!isJunction(id))return null;
 return [{x:5.55,z:9,direction:-1,speed:9},{x:9.25,z:24,direction:-1,speed:10},...(id==='05'?[{x:-1.85,z:-113,direction:1,speed:9}]:[]),{axis:'x',x:-108,z:-34.45,direction:1,speed:11},{axis:'x',x:116,z:-45.55,direction:-1,speed:12}];
}
export function stoppedApproachZ(direction,length=5.2,markingEnd=-22.55){
 const near=markingEnd+.09+.5+length/2;
 return direction<0?near:-80-near;
}
export function advanceJunctionTraffic(slot,seconds,world){
 const {car,route}=slot;
 const w=world.draftWeather?.weights,factor=w?1-.12*(w.overcast||0)-.22*(w.rain||0)-.38*(w.snow||0):1,desired=slot.desiredSpeed*factor;
 if(route.axis==='x'){slot.speed+=Math.max(-2.4*seconds,Math.min(.7*seconds,desired-slot.speed));car.position.x+=slot.speed*route.direction*seconds;if(car.position.x*route.direction>160)car.position.x=-160*route.direction;return;}
 const length=car.userData.physicalLength||car.userData.vehicleSpec?.length||5.2,limit=stoppedApproachZ(route.direction,length,world.junctionDimensions?.markingEnd),remaining=Math.max(0,(limit-car.position.z)*route.direction);
 const deceleration=2.4,target=Math.min(desired,Math.sqrt(2*deceleration*remaining));
 const travel=Math.min(remaining,Math.max(0,target*seconds-.5*deceleration*seconds*seconds));car.position.z+=route.direction*travel;
 if(remaining<.015||target*seconds>=remaining){car.position.z=limit;slot.speed=0;}else slot.speed=target;
}
