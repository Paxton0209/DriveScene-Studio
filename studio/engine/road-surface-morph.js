// Road planes resize as rigid surfaces; curbs and shoulders translate intact.
// Keeping their widths intact avoids a stretched curb appearing inside asphalt.
export function roadSurfaceMorph(root,mat,targetWidth){
 const surfaces=[];
 for(const mesh of root.children){
  const role=mesh.material===mat.road?'road':[mat.curb,mat.pavement].includes(mesh.material)?'shoulder':null;
  if(!role||role==='road'&&Math.abs((mesh.geometry.parameters.width||0)-targetWidth)>.01)continue;
  const x=mesh.userData.roadBaseX??(mesh.userData.roadBaseX=mesh.position.x),scale=mesh.userData.roadBaseScaleX??(mesh.userData.roadBaseScaleX=mesh.scale.x);surfaces.push({mesh,role,x,scale});
 }
 const apply=width=>{for(const {mesh,role,x,scale}of surfaces){mesh.position.x=role==='shoulder'?x+(width-targetWidth)/2*Math.sign(x):x;mesh.scale.x=role==='road'?scale*width/targetWidth:scale;}};
 return {apply,reset:()=>apply(targetWidth)};
}
