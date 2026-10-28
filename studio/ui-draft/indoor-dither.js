import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
// Apply below one display-code value after AA/output conversion. The static,
// screen-space pattern breaks contour bands without moving noise or blur.
export function createIndoorDither(){
 const pass=new ShaderPass({
  uniforms:{tDiffuse:{value:null}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform sampler2D tDiffuse;varying vec2 vUv;
void main(){vec4 color=texture2D(tDiffuse,vUv);
 float noise=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))-.5;
 gl_FragColor=vec4(clamp(color.rgb+noise/255.,0.,1.),color.a);}`
 });
 pass.material.toneMapped=false;pass.enabled=false;return pass;
}
