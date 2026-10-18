import {MOTION_TIME_SCALE} from '../motion-config.js';
export const PATH_MOTION_KEY='drivescene-path-motion-v1';
export const DEFAULT_PATH_MOTION=Object.freeze({preset:'flow'});
const LEGACY_PATH_MOTION=Object.freeze({tailMs:198,curve:55,mode:'accelerate'});
export const PATH_MOTION_PRESETS=Object.freeze({
 glide:Object.freeze({id:'glide',label:'连续扫入',durationMs:760,bezier:[.32,.72,0,1],lead:.24,feather:.055,handoff:.10,bandLength:.42,bandBlend:.22,particles:.70}),
 flow:Object.freeze({id:'flow',label:'柔和推开',durationMs:680,bezier:[.42,0,.58,1],lead:.30,feather:.105,handoff:.17,bandLength:.65,bandBlend:.16,particles:.42}),
 snap:Object.freeze({id:'snap',label:'轻快收束',durationMs:520,bezier:[.23,1,.32,1],lead:.16,feather:.04,handoff:.075,bandLength:.28,bandBlend:.18,particles:.56})
});
export function normalizePathMotion(value={}){
 if(value&&Object.hasOwn(PATH_MOTION_PRESETS,value.preset))return {preset:value.preset};
 value=value&&typeof value==='object'?value:{};
 if(!['tailMs','curve','mode'].some(key=>Object.hasOwn(value,key)))return {...DEFAULT_PATH_MOTION};
 return {tailMs:Math.round(Math.min(800,Math.max(60,Number(value.tailMs)||LEGACY_PATH_MOTION.tailMs))),curve:Math.min(100,Math.max(0,Number.isFinite(Number(value.curve))?Number(value.curve):LEGACY_PATH_MOTION.curve)),mode:['accelerate','decelerate','smooth'].includes(value.mode)?value.mode:LEGACY_PATH_MOTION.mode};
}
export function readPathMotion(){try{return normalizePathMotion(JSON.parse(localStorage.getItem(PATH_MOTION_KEY)||'null')||DEFAULT_PATH_MOTION);}catch{return {...DEFAULT_PATH_MOTION};}}
export function savePathMotion(value){const settings=normalizePathMotion(value);localStorage.setItem(PATH_MOTION_KEY,JSON.stringify(settings));return settings;}
export function pathTailPhase(phase,settings){
 const progress=Math.min(1,Math.max(0,phase)),power=1+settings.curve/25;
 const eased=settings.mode==='decelerate'?1-(1-progress)**power:settings.mode==='smooth'?(progress<.5?(2*progress)**power/2:1-(2*(1-progress))**power/2):progress**power;
 return progress*.25+eased*.75;
}
export const pathMotionDuration=settings=>(PATH_MOTION_PRESETS[settings.preset]?.durationMs??400+settings.tailMs)*MOTION_TIME_SCALE;
export const pathMotionTimeline=(elapsed,settings)=>{const clock=elapsed/MOTION_TIME_SCALE;return Math.min(clock,400)+920*pathTailPhase((clock-400)/settings.tailMs,settings);};
const clamp=value=>Math.min(1,Math.max(0,value));
const smooth=(start,end,value)=>{const phase=clamp((value-start)/(end-start));return phase*phase*(3-2*phase);};
const curveCache=new WeakMap();
function compileCurve(curve){
 let compiled=curveCache.get(curve);
 if(compiled)return compiled;
 const [firstX,firstY,secondX,secondY]=curve;
 const ax=1+3*firstX-3*secondX,bx=3*secondX-6*firstX,cx=3*firstX,ay=1+3*firstY-3*secondY,by=3*secondY-6*firstY,cy=3*firstY;
 compiled={x:phase=>((ax*phase+bx)*phase+cx)*phase,y:phase=>((ay*phase+by)*phase+cy)*phase,slope:phase=>(3*ax*phase+2*bx)*phase+cx};
 curveCache.set(curve,compiled);return compiled;
}
export function cubicBezierProgress(progress,curve){
 const target=clamp(progress);
 if(target===0||target===1)return target;
 const compiled=compileCurve(curve);let phase=target;
 for(let iteration=0;iteration<8;iteration++){const error=compiled.x(phase)-target;if(Math.abs(error)<1e-9)return compiled.y(phase);const slope=compiled.slope(phase);if(slope<1e-7)break;const next=phase-error/slope;if(next<0||next>1)break;phase=next;}
 let lower=0,upper=1;
 for(let iteration=0;iteration<25;iteration++){phase=(lower+upper)/2;if(compiled.x(phase)<target)lower=phase;else upper=phase;}
 return compiled.y((lower+upper)/2);
}
export function pathMotionFrame(elapsed,settings,result={}){
 const preset=PATH_MOTION_PRESETS[settings.preset];
 if(!preset)return null;
 const phase=clamp(elapsed/pathMotionDuration(settings)),front=cubicBezierProgress(phase,preset.bezier);
 result.elapsed=phase*1320;result.front=front*1.18-.06;
 result.appearance=clamp(front+preset.lead*smooth(0,.12,phase));
 result.outline=smooth(0,48*MOTION_TIME_SCALE,elapsed);result.fill=smooth(0,42*MOTION_TIME_SCALE,elapsed);
 result.feather=preset.feather;result.handoff=preset.handoff;result.particles=preset.particles;
 result.bandLength=preset.bandLength;result.bandBlend=preset.bandBlend*smooth(0,.09,phase)*(1-smooth(.50,1,front));
 return result;
}
