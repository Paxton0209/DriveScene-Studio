import * as THREE from 'three';
export function accentRadiance(hex){
 const c=new THREE.Color(hex),input=new THREE.Matrix3().set(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),output=new THREE.Matrix3().set(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);
 const v=new THREE.Vector3(c.r,c.g,c.b).applyMatrix3(output.invert());
 const fit=x=>(x*(x+.0245786)-.000090537)/(x*(.983729*x+.432951)+.238081);
 for(const k of ['x','y','z']){let lo=0,hi=64;for(let i=0;i<40;i++){const mid=(lo+hi)/2;if(fit(mid)<v[k])lo=mid;else hi=mid}v[k]=(lo+hi)/2;}
 v.applyMatrix3(input.invert()).multiplyScalar(.6);
 return new THREE.Color().setRGB(v.x,v.y,v.z,THREE.LinearSRGBColorSpace);
}
