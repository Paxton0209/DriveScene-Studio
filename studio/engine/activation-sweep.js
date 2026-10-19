import * as THREE from 'three';
export const SWEEP_DURATION_MS=850;
// Bounds describe only the carriageway carrying the ego vehicle.
export function activationCarriageway(state,visualWidth){
 if(state?.id==='03')return {min:-5.55,max:5.55};
 const width=Number.isFinite(visualWidth)?visualWidth:(state?.laneCount||6)*3.7;
 return {min:0,max:width/2};
}
export function activationEnvelope(progress){return Math.sin(Math.PI*Math.min(1,Math.max(0,progress))*.5)*Math.pow(Math.max(0,1-progress),.85);}
export function createActivationSweep(world){
 const uniforms={progress:{value:1},tone:{value:0},bounds:{value:new THREE.Vector2()},origin:{value:new THREE.Vector2()}};
 const material=new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,depthTest:true,toneMapped:false,polygonOffset:true,polygonOffsetFactor:-3,vertexShader:'varying vec3 p;void main(){p=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}',fragmentShader:`uniform float progress;uniform float tone;uniform vec2 bounds;uniform vec2 origin;varying vec3 p;
 float hash(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
 void main(){
  float travel=clamp(progress*(850./500.),0.,1.);
  float distance=origin.y-p.z,front=travel*travel*(3.-2.*travel)*118.;
  // A soft moving front carries a longer translucent wake, never a hard rectangle.
  float behind=front-distance;
  float frontCloud=exp(-pow(behind/22.,2.));
  float wake=exp(-pow(behind/36.,2.));
  float edge=step(bounds.x,p.x)*step(p.x,bounds.y)*smoothstep(bounds.x-.18,bounds.x+.025,p.x)*(1.-smoothstep(bounds.y-.025,bounds.y+.18,p.x));
  float nearFade=smoothstep(-3.,9.,distance);
  // Road-locked lattice: no drifting flecks or isolated circular particles.
  vec2 lattice=p.xz*vec2(1.15,1.0);
  vec2 grid=abs(fract(lattice-.5)-.5),aa=max(fwidth(lattice),vec2(.001));
  vec2 strokes=1.-smoothstep(vec2(.015),vec2(.015)+aa*1.15,grid);
  float meshLine=max(strokes.x,strokes.y);
  float junction=strokes.x*strokes.y;
  float detail=1.-smoothstep(.12,.48,max(aa.x,aa.y));
  float fade=smoothstep(0.,.10,progress)*pow(max(0.,1.-progress),.85);
  float alpha=(.14*wake+(.20*meshLine+.06*junction)*frontCloud*detail)*edge*nearFade*fade*mix(1.,.70,tone);
  gl_FragColor=vec4(mix(vec3(.90,.94,.98),vec3(.83,.85,.88),tone),alpha);
 }`});
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(24,132),material);mesh.rotation.x=-Math.PI/2;mesh.visible=false;mesh.renderOrder=5;mesh.name='Assistance road material lattice';mesh.userData.informationOverlay=true;mesh.castShadow=false;mesh.receiveShadow=false;world.scene.add(mesh);let started=-Infinity,activations=0;
 const active=(time=performance.now())=>time>=started&&time-started<SWEEP_DURATION_MS;
 return {mesh,active,start(time=performance.now()){started=time;activations++;},cancel(){started=-Infinity;mesh.visible=false;},update(time=performance.now()){
  const progress=(time-started)/SWEEP_DURATION_MS;mesh.visible=active(time)&&['02','09','03'].includes(world.state?.id);if(!mesh.visible)return;
  const range=activationCarriageway(world.state,world.layoutVisual?.width);
  mesh.position.set((range.min+range.max)/2,world.car.position.y+.025,world.car.position.z-60);
  uniforms.origin.value.set(0,world.car.position.z-1);uniforms.bounds.value.set(range.min,range.max);uniforms.progress.value=progress;uniforms.tone.value=world.state.mode==='dark'?1:0;
 },audit(){return {visible:mesh.visible,activations,durationMs:SWEEP_DURATION_MS,travelMs:500,progress:uniforms.progress.value,carriageway:[uniforms.bounds.value.x,uniforms.bounds.value.y],pathDelayMs:150};}};
}
