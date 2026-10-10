import * as THREE from 'three';
// Normalized distance from the actual vehicle mesh to the output edges.
// Shadow/reflection pixels are excluded. Box corners would overestimate the
// silhouette and give different visible baselines at different camera angles.
export const framingTargets={low:.785,high:.69};
export function vehicleFrame(car,camera){
 car.updateMatrixWorld(true);camera.updateMatrixWorld(true);
 const projection=new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse),m=new THREE.Matrix4(),p=new THREE.Vector3();
 let left=Infinity,right=-Infinity,top=Infinity,bottom=-Infinity;
 car.traverse(o=>{if(!o.isMesh)return;const a=o.geometry.getAttribute('position');if(!a)return;m.multiplyMatrices(projection,o.matrixWorld);for(let i=0;i<a.count;i++){p.fromBufferAttribute(a,i).applyMatrix4(m);const x=(p.x+1)/2,y=(1-p.y)/2;left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}});
 return {left,top,width:right-left,height:bottom-top,bottom,bottomMargin:1-bottom};
}
export function anchorVehicle(car,camera,group){
 const target=framingTargets[group],before=vehicleFrame(car,camera),v=camera.view;
 const x=v?.enabled?v.offsetX:0,y=v?.enabled?v.offsetY:0;
 camera.setViewOffset(1920,1080,x,y+(before.bottom-target)*1080,1920,1080);camera.updateMatrixWorld(true);
 return {group,targetBottom:target,viewOffset:{x:camera.view.offsetX,y:camera.view.offsetY},vehicleFrame:vehicleFrame(car,camera)};
}
