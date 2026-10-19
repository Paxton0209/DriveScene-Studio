import * as THREE from 'three';
// Prepare once when a road root is built; lane clicks only change two uniforms.
export function prepareRoadLayout(root,vegetation,mat){
 root.traverse(o=>{
  if(!o.isMesh||!o.geometry||o.userData.sharedVehicleGeometry)return;
  const role=o.userData.construction||o.userData.constructionContact||[mat.road,mat.curb,mat.pavement,mat.ground].includes(o.material)?0:o.userData.roadEdge?2:o.userData.buildingOwned||vegetation.children.includes(o.parent)?1:o.userData.laneOffset!==undefined||[mat.yellow,mat.yellowPaint].includes(o.material)?3:4;
  if(o.geometry.userData.roadLayoutRole===role)return;
  // Shared template geometry may be used by both a road edge and a body.
  if(o.geometry.userData.roadLayoutRole!==undefined){o.geometry=o.geometry.clone();o.geometry.userData={...o.geometry.userData};}
  o.geometry.setAttribute('roadLayoutRole',new THREE.BufferAttribute(new Float32Array(o.geometry.attributes.position.count).fill(role),1));
  o.geometry.userData.roadLayoutRole=role;
 });
}
export const roadLayoutVertex=`
if(roadLayoutActive>.5&&roadLayoutRole>.5){
 vec3 wp=(modelMatrix*vec4(transformed,1.)).xyz;
 float x=wp.x,fromHalf=roadLayoutWidths.x,toHalf=roadLayoutWidths.y,oldX=x;
 if(roadLayoutRole<1.5)oldX=x+(fromHalf-toHalf)*sign(modelMatrix[3].x);
 else if(roadLayoutRole<2.5)oldX=x+(fromHalf-toHalf)*sign(x);
 else if(roadLayoutRole>3.5&&abs(x)>.35)oldX=abs(x)<=toHalf?sign(x)*(.35+(abs(x)-.35)*(fromHalf-.35)/max(.01,toHalf-.35)):sign(x)*(abs(x)-toHalf+fromHalf);
 vec3 delta=vec3(oldX-x,0.,0.);
 transformed+=vec3(dot(modelMatrix[0].xyz,delta)/max(.00001,dot(modelMatrix[0].xyz,modelMatrix[0].xyz)),dot(modelMatrix[1].xyz,delta)/max(.00001,dot(modelMatrix[1].xyz,modelMatrix[1].xyz)),dot(modelMatrix[2].xyz,delta)/max(.00001,dot(modelMatrix[2].xyz,modelMatrix[2].xyz)))*(1.-layoutBlend);
}else transformed+=layoutOffset*(1.-layoutBlend);`;
export function patchRoadLayout(shader,world){
 shader.uniforms.layoutBlend=world.layoutBlend;shader.uniforms.roadLayoutActive=world.roadLayoutActive;shader.uniforms.roadLayoutWidths=world.roadLayoutWidths;
 shader.vertexShader='attribute vec3 layoutOffset;attribute float roadLayoutRole;uniform float layoutBlend;uniform float roadLayoutActive;uniform vec2 roadLayoutWidths;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n'+roadLayoutVertex);
}
