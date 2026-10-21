const PLAY=[7,4.8,10.8,7.27,10.8,12.73,7,15.2,10.8,7.27,15,10,15,10,10.8,12.73];
const PAUSE=[6,5,8.6,5,8.6,15,6,15,11.4,5,14,5,14,15,11.4,15];
const motions=new WeakMap();
export const driveIconPoints=playing=>(playing?PAUSE:PLAY).slice();
export const interpolateDriveIcon=(from,to,t)=>from.map((value,index)=>value+(to[index]-value)*t);
function path(points,offset){return `M${points[offset].toFixed(3)} ${points[offset+1].toFixed(3)}L${points[offset+2].toFixed(3)} ${points[offset+3].toFixed(3)}L${points[offset+4].toFixed(3)} ${points[offset+5].toFixed(3)}L${points[offset+6].toFixed(3)} ${points[offset+7].toFixed(3)}Z`;}
export function animateDriveIcon(button,playing,animate=true){
 const parts=button.querySelectorAll('.drive-motion-icon path');if(parts.length!==2)return;
 let state=motions.get(button);if(!state){state={points:PLAY.slice(),target:false,frame:0};motions.set(button,state);}
 if(state.target===playing&&button.dataset.iconReady)return;
 if(state.frame)cancelAnimationFrame(state.frame);
 const from=state.points.slice(),to=driveIconPoints(playing),start=performance.now();state.target=playing;
 function write(points){state.points=points;parts[0].setAttribute('d',path(points,0));parts[1].setAttribute('d',path(points,8));button.dataset.iconReady='true';}
 if(!animate||matchMedia('(prefers-reduced-motion:reduce)').matches){write(to);state.frame=0;return;}
 function tick(now){const t=Math.min(1,(now-start)/360),ease=1-Math.pow(1-t,3);write(interpolateDriveIcon(from,to,ease));button.dataset.iconFrames=String(Number(button.dataset.iconFrames||0)+1);state.frame=t<1?requestAnimationFrame(tick):0;}
 state.frame=requestAnimationFrame(tick);
}
