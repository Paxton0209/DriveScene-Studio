// Native squircles where available; a size-aware SVG path fallback for older engines.
// The fallback runs on layout changes only, never on scene-animation frames.
const selectors='.preview,.view-segments,.view-segments button,.toggle,.download,.junction-play,#scene-picker,.theme-toggle,.scene,.nav-pill,.back-link,#status button';
function path(width,height,radius){
 const r=Math.min(radius,width/2,height/2),points=[`M${r} 0`];
 for(const [cx,cy,start] of [[width-r,r,-Math.PI/2],[width-r,height-r,0],[r,height-r,Math.PI/2],[r,r,Math.PI]]){
  for(let i=0;i<=16;i++){const a=start+i*Math.PI/32,c=Math.cos(a),s=Math.sin(a);points.push(`L${(cx+r*Math.sign(c)*Math.sqrt(Math.abs(c))).toFixed(3)} ${(cy+r*Math.sign(s)*Math.sqrt(Math.abs(s))).toFixed(3)}`);}
 }
 return points.join(' ')+'Z';
}
export function initContinuousCorners({forceFallback=false}={}){
 if(!forceFallback&&CSS.supports('corner-shape','squircle')){document.documentElement.dataset.corners='native';return;}
 document.documentElement.dataset.corners='fallback';
 const radius=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--ui-radius'))||8;
 const watched=new WeakSet(),sizes=new WeakMap();
 const update=element=>{
  const {width,height}=element.getBoundingClientRect();if(!width||!height)return;
  const r=element.matches('.view-segments button')?Math.max(0,radius-3):radius,key=`${width}:${height}:${r}`;
  if(sizes.get(element)===key)return;sizes.set(element,key);element.dataset.continuous='true';
  element.style.setProperty('--continuous-clip',`path("${path(width,height,r)}")`);
  if(element.classList.contains('view-segments')){const active=element.querySelector('[aria-pressed=true]');if(active)element.style.setProperty('--selection-clip',`path("${path(active.offsetWidth,element.clientHeight-6,Math.max(0,radius-3))}")`);}
 };
 const observer=new ResizeObserver(entries=>{for(const entry of entries)update(entry.target);});
 const scan=root=>{const elements=[...(root.matches?.(selectors)?[root]:[]),...root.querySelectorAll(selectors)];for(const element of elements){if(watched.has(element))continue;watched.add(element);observer.observe(element);update(element);}};
 scan(document.body);
 new MutationObserver(entries=>{for(const entry of entries)for(const node of entry.addedNodes)if(node.nodeType===1)scan(node);}).observe(document.body,{childList:true,subtree:true});
}
