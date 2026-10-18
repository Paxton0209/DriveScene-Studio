import * as THREE from 'three';
let shared;

export function createModel3Reflections(){
 if(shared){shared.userData.vehicleOwners++;return shared;}
 const width=512,height=256,pixels=new Float32Array(width*height*4);
 const smooth=(start,end,value)=>{const amount=THREE.MathUtils.clamp((value-start)/(end-start),0,1);return amount*amount*(3-2*amount);};
 const panel=(yaw,elevation,centerYaw,centerElevation,halfWidth,halfHeight)=>{
  const distance=Math.abs(Math.atan2(Math.sin(yaw-centerYaw),Math.cos(yaw-centerYaw)));
  return (1-smooth(halfWidth*.85,halfWidth,distance))*(1-smooth(halfHeight*.65,halfHeight,Math.abs(elevation-centerElevation)));
 };
 for(let row=0;row<height;row++)for(let column=0;column<width;column++){
  const yaw=(column/width-.5)*Math.PI*2,elevation=(row/height-.5)*Math.PI;
  const ambient=.07+.15*smooth(-.12,.6,elevation);
  const light=ambient+2.8*panel(yaw,elevation,-1.2,.36,.78,.14)+1.8*panel(yaw,elevation,1.7,.58,.65,.28)+1.5*smooth(.9,1.45,elevation);
  const offset=(row*width+column)*4;pixels[offset]=light*.97;pixels[offset+1]=light*.99;pixels[offset+2]=light;pixels[offset+3]=1;
 }
 const texture=new THREE.DataTexture(pixels,width,height,THREE.RGBAFormat,THREE.FloatType);texture.mapping=THREE.EquirectangularReflectionMapping;texture.colorSpace=THREE.LinearSRGBColorSpace;texture.needsUpdate=true;texture.userData.vehicleOwners=1;shared=texture;return texture;
}

export function releaseVehicleReflection(texture){
 if(texture.userData.vehicleOwners===undefined)return false;
 if(--texture.userData.vehicleOwners===0){texture.dispose();if(shared===texture)shared=undefined;}return true;
}
