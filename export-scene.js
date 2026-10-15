import * as THREE from 'three';

export const exportSize={width:1920,height:1080};
export const depthRangeMeters=200;

function surfaceHeight(world){
 const meshes=[];
 world.root?.traverseVisible(object=>{
  if(!object.isMesh)return;
  const materials=Array.isArray(object.material)?object.material:[object.material];
  if(materials.some(material=>material.depthWrite&&material.depthTest&&material.opacity>0&&!material.transparent))meshes.push(object);
 });
 const ray=new THREE.Raycaster(world.car.position.clone().add(new THREE.Vector3(0,1,0)),new THREE.Vector3(0,-1,0),0,2);
 return ray.intersectObjects(meshes,false)[0]?.point.y??world.car.position.y-.02;
}

export function cameraMetadata(world,{sceneName,sourceUrl}){
 const {camera,car}=world;camera.updateMatrixWorld(true);
 const roadHeight=surfaceHeight(world),project=point=>{
  const position=new THREE.Vector3(...point).project(camera);
  return {world:point,pixel:[(position.x+1)*exportSize.width/2,(1-position.y)*exportSize.height/2],visible:Math.abs(position.x)<=1&&Math.abs(position.y)<=1&&Math.abs(position.z)<=1};
 };
 return {
  schema:'drivescene.camera.v1',image:{...exportSize,origin:'top-left',x:'right',y:'down',pixelSample:'pixel centers at x + 0.5, y + 0.5'},
  scene:{name:sceneName,...world.state,sourceUrl},
  coordinates:{units:'meters',handedness:'right-handed',world:{x:'right',y:'up',z:'toward the rear of the ego vehicle'},cameraForward:'local -Z',matrixOrder:'column-major'},
  camera:{type:'PerspectiveCamera',position:camera.position.toArray(),quaternion:camera.quaternion.toArray(),up:camera.up.toArray(),target:world.cameraAim.toArray(),verticalFovDegrees:camera.fov,aspect:camera.aspect,near:camera.near,far:camera.far,zoom:camera.zoom,filmGauge:camera.filmGauge,filmOffset:camera.filmOffset,viewOffset:camera.view?{...camera.view}:null,projectionMatrix:camera.projectionMatrix.toArray(),projectionMatrixInverse:camera.projectionMatrixInverse.toArray(),worldMatrix:camera.matrixWorld.toArray(),viewMatrix:camera.matrixWorldInverse.toArray()},
  depth:{file:'depth.png',format:'16-bit grayscale PNG',encoding:'linear camera-space Z distance',rangeMeters:[0,depthRangeMeters],decodeMeters:'uint16 / 65535 * 200',near:'black',far:'white',background:'65535; sky and distances at or beyond 200 meters',antialiasing:false,excludes:'sky, contact shadows, glow, and transparent decorative overlays; water is represented by its surface'},
  referencePlane:{point:[car.position.x,roadHeight,car.position.z],normal:[0,1,0],note:'Horizontal plane at ego road height. Guides do not follow branch or ramp geometry and do not account for occlusion.'},
  anchors:[0,5,10,20,40,80].map(distance=>({distanceAheadMeters:distance,...project([car.position.x,roadHeight,car.position.z-distance])}))
 };
}

function projectedSegment(start,end,camera){
 const transform=new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);
 const first=new THREE.Vector4(...start,1).applyMatrix4(transform),last=new THREE.Vector4(...end,1).applyMatrix4(transform);
 let minimum=0,maximum=1;
 for(const axis of ['x','y','z'])for(const direction of [-1,1]){
  const from=first.w+direction*first[axis],to=last.w+direction*last[axis];
  if(from<0&&to<0)return null;
  if(from<0)minimum=Math.max(minimum,from/(from-to));
  if(to<0)maximum=Math.min(maximum,from/(from-to));
 }
 if(minimum>maximum)return null;
 return [first.clone().lerp(last,minimum),first.clone().lerp(last,maximum)].map(point=>[(point.x/point.w+1)*exportSize.width/2,(1-point.y/point.w)*exportSize.height/2]);
}

export function perspectiveSvg(world){
 const {car,camera}=world,height=surfaceHeight(world),lines=[];
 const add=(start,end,major=false)=>{
  const points=projectedSegment(start,end,camera);if(!points)return;
  lines.push(`<path d="M${points[0].map(value=>value.toFixed(3)).join(' ')}L${points[1].map(value=>value.toFixed(3)).join(' ')}" opacity="${major?.65:.3}"/>`);
 };
 for(let lateral=-12;lateral<=12;lateral++)add([car.position.x+lateral,height,car.position.z+10],[car.position.x+lateral,height,car.position.z-120],lateral===0);
 for(let distance=-10;distance<=120;distance+=5)add([car.position.x-12,height,car.position.z-distance],[car.position.x+12,height,car.position.z-distance],distance%10===0);
 const arrow=[[0,-3.5],[1,-1.8],[.4,-1.8],[.4,0],[-.4,0],[-.4,-1.8],[-1,-1.8]];
 const arrowLines=[];
 for(let index=0;index<arrow.length;index++){
  const start=arrow[index],end=arrow[(index+1)%arrow.length];
  const points=projectedSegment([car.position.x+start[0],height+.025,car.position.z-18+start[1]],[car.position.x+end[0],height+.025,car.position.z-18+end[1]],camera);
  if(points)arrowLines.push(`<path d="M${points[0].map(value=>value.toFixed(3)).join(' ')}L${points[1].map(value=>value.toFixed(3)).join(' ')}"/>`);
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080"><title>DriveScene perspective reference</title><desc>Horizontal plane at ego road height. Columns are 1 meter apart; rows are 5 meters apart. The reference arrow is 2 meters wide and 3.5 meters long, starting 18 meters ahead. Guides ignore occlusion and branch or ramp geometry.</desc><g id="ground-grid" fill="none" stroke="#0085ff" stroke-width="1.5">${lines.join('')}</g><g id="reference-arrow" fill="none" stroke="#0085ff" stroke-width="3">${arrowLines.join('')}</g></svg>`;
}

export function renderDepth(world){
 const {renderer,scene,camera}=world,{width,height}=exportSize;
 const target=new THREE.WebGLRenderTarget(width,height,{type:THREE.UnsignedByteType,depthBuffer:true,stencilBuffer:false});
 const materials=new Map(),originals=[],hidden=[];
 const saved={target:renderer.getRenderTarget(),viewport:renderer.getViewport(new THREE.Vector4()),scissor:renderer.getScissor(new THREE.Vector4()),scissorTest:renderer.getScissorTest(),clearColor:renderer.getClearColor(new THREE.Color()),clearAlpha:renderer.getClearAlpha(),background:scene.background,overrideMaterial:scene.overrideMaterial,autoClear:renderer.autoClear,shadowAutoUpdate:renderer.shadowMap.autoUpdate,shadowNeedsUpdate:renderer.shadowMap.needsUpdate};
 const hide=object=>{if(object){hidden.push([object,object.visible]);object.visible=false;}};
 const depthMaterial=source=>{
  if(materials.has(source))return materials.get(source);
  const material=new THREE.MeshDepthMaterial({side:source.side,map:source.map??null,alphaMap:source.alphaMap??null,alphaTest:source.alphaTest??0,depthPacking:THREE.RGBADepthPacking});material.toneMapped=false;material.clippingPlanes=source.clippingPlanes;material.clipIntersection=source.clipIntersection;
  material.onBeforeCompile=shader=>{
   Object.assign(shader.uniforms,{exportNear:{value:camera.near},exportFar:{value:camera.far},exportRange:{value:depthRangeMeters}});
   shader.fragmentShader='uniform float exportNear;uniform float exportFar;uniform float exportRange;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('gl_FragColor = packDepthToRGBA( fragCoordZ );','float meters = -perspectiveDepthToViewZ(fragCoordZ, exportNear, exportFar);float sampleValue = floor(clamp(meters / exportRange, 0.0, 1.0) * 65535.0 + 0.5);gl_FragColor = vec4(floor(sampleValue / 256.0) / 255.0, mod(sampleValue, 256.0) / 255.0, 0.0, 1.0);');
  };
  material.customProgramCacheKey=()=> 'export-linear-depth-1';materials.set(source,material);return material;
 };
 try{
  hide(world.sky);hide(world.egoContact);hide(world.tailReflection);
  scene.traverseVisible(object=>{
   if(!object.isMesh)return;
   const sources=Array.isArray(object.material)?object.material:[object.material];
   if(sources.every(material=>material.opacity===0||!material.depthTest||material.transparent&&!material.depthWrite&&material!==world.mat.water)){hide(object);return;}
   originals.push([object,object.material]);object.material=Array.isArray(object.material)?sources.map(depthMaterial):depthMaterial(object.material);
  });
  scene.background=null;scene.overrideMaterial=null;renderer.autoClear=true;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=false;
  renderer.setRenderTarget(target);renderer.setViewport(0,0,width,height);renderer.setScissorTest(false);renderer.setClearColor(0xffffff,1);renderer.render(scene,camera);
  const pixels=new Uint8Array(width*height*4);renderer.readRenderTargetPixels(target,0,0,width,height,pixels);return pixels;
 }finally{
  for(const [object,material]of originals)object.material=material;
  for(const [object,visible]of hidden)object.visible=visible;
  scene.background=saved.background;scene.overrideMaterial=saved.overrideMaterial;renderer.autoClear=saved.autoClear;renderer.shadowMap.autoUpdate=saved.shadowAutoUpdate;renderer.shadowMap.needsUpdate=saved.shadowNeedsUpdate;
  renderer.setRenderTarget(saved.target);renderer.setViewport(saved.viewport);renderer.setScissor(saved.scissor);renderer.setScissorTest(saved.scissorTest);renderer.setClearColor(saved.clearColor,saved.clearAlpha);
  for(const material of materials.values())material.dispose();target.dispose();
 }
}

export const exportReadme=`DriveScene Studio perspective kit

scene.png: 1920 x 1080 scene image.
camera.json: exact camera, projection/view matrices, image offset, scene options and world-space anchors for this image. Units are meters. Matrices are column-major. Image origin is top-left.
depth.png: 1920 x 1080, 16-bit linear grayscale depth. Black is near; white is 200 meters or further, including sky. Decode camera-space Z distance as uint16 / 65535 * 200 meters. This is distance along the camera's forward axis, not Euclidean distance along a viewing ray. Depth edges are not antialiased. Decorative transparency, contact shadows and glow are excluded; water is represented by its surface.
perspective.svg: transparent reference grid and arrow using the same projection. Columns are 1 meter apart and rows are 5 meters apart. The grid is a horizontal plane at ego road height. It does not follow branch/ramp geometry or account for occlusion. The reference arrow is 2 meters wide and 3.5 meters long, starting 18 meters ahead of the ego vehicle.

Figma: create a 1920 x 1080 frame. Place scene.png at x=0, y=0, with no crop. Place perspective.svg above it at x=0, y=0 and keep its 1920 x 1080 frame. Use the grid and reference arrow to align your navigation shapes, then hide the reference layer. Keep both layers grouped when resizing. Figma does not import camera.json as a 3D camera or automatically perspective-warp your artwork. Depth is for compositing and geometry workflows; use the SVG for manual Figma alignment.

Projection: clip = projectionMatrix * viewMatrix * [worldX, worldY, worldZ, 1]. Divide clip.xyz by clip.w. Pixel x = (ndc.x + 1) * 960; pixel y = (1 - ndc.y) * 540. Use the exported matrices to preserve the camera view offset.

Exports settle any active scene/camera animation to its selected endpoint. This kit describes that final pose, not an intermediate animation frame.

Original environments and exported images: CC BY 4.0, Peixin / DriveScene Studio. Vehicle: BMW X6M Competition Assetto | www.vecarz.com, by vecarz (heynic), CC BY 4.0 as declared in the asset metadata. Full attribution and modifications: https://paxton0209.github.io/DriveScene-Studio/credits.html
`;
