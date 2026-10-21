import * as THREE from 'three';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
// A restrained detail pass limited to the vehicle's projected bounds.
// The environment is copied unchanged; clamping avoids bright outline halos.
export function createVehicleDetail(){
 const pass=new ShaderPass({name:'Vehicle detail',uniforms:{tDiffuse:{value:null},bounds:{value:new THREE.Vector4()},amount:{value:.34},texel:{value:new THREE.Vector2(1/1920,1/1080)}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`uniform sampler2D tDiffuse;uniform vec4 bounds;uniform vec2 texel;uniform float amount;varying vec2 vUv;
 void main(){vec4 base=texture2D(tDiffuse,vUv);vec3 a=texture2D(tDiffuse,vUv+vec2(texel.x,0.)).rgb,b=texture2D(tDiffuse,vUv-vec2(texel.x,0.)).rgb,c=texture2D(tDiffuse,vUv+vec2(0.,texel.y)).rgb,d=texture2D(tDiffuse,vUv-vec2(0.,texel.y)).rgb;
 vec2 p=vec2(vUv.x,1.-vUv.y);vec2 edge=min(p-bounds.xy,bounds.zw-p);float mask=smoothstep(0.,.003,min(edge.x,edge.y));vec3 lo=min(base.rgb,min(min(a,b),min(c,d))),hi=max(base.rgb,max(max(a,b),max(c,d)));vec3 detail=clamp(base.rgb+(base.rgb-(a+b+c+d)*.25)*amount,lo,hi);gl_FragColor=vec4(mix(base.rgb,detail,mask),base.a);}`});
 pass.setVehicleFrame=(f,visible)=>{pass.enabled=visible;pass.uniforms.bounds.value.set(f.left,f.top,f.left+f.width,f.bottom);};return pass;
}
