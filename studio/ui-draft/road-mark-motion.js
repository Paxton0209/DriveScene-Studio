export const RAMP_CYCLE_SECONDS=25;
export const RAMP_SPEED=16.8;
export const RAMP_APPROACH_METRES=180;

export function rampPassageState(distance){
 const period=RAMP_CYCLE_SECONDS*RAMP_SPEED;
 const offset=((distance+RAMP_APPROACH_METRES)%period+period)%period-RAMP_APPROACH_METRES;
 return {offset,visible:offset<=120,period,cycleSeconds:RAMP_CYCLE_SECONDS};
}

export function advanceRoadArrows(data,distance){
 if(!['06','07'].includes(data.id)||!data.arrows)return;
 const passage=rampPassageState(distance);
 for(const mesh of [data.arrows.near,data.arrows.far])if(mesh){mesh.position.z=passage.offset;mesh.visible=passage.visible&&mesh.material.opacity>.001;}
}
