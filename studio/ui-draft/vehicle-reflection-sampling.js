// Weight colour and coverage by source height before filtering. Raw roof/window
// depth is discontinuous; reapplying it after blur creates detached arches and
// repeating bands. These are the existing horizontal/vertical car blur passes.
export const vehicleReflectionPrefilter=`
uniform sampler2D source;uniform sampler2D reflectionDepth;
uniform mat4 reflectionInverse;uniform vec2 direction;
uniform float absorbSource;uniform float reflectionTone;uniform float groundY;
varying vec2 vUv;
void main(){vec4 color=vec4(0.);float total=0.;
 for(int i=-6;i<=6;i++){
  vec2 uv=vUv+direction*float(i);float weight=exp(-float(i*i)/8.);
  float absorption=1.;
  if(absorbSource>.5){
   float depth=texture2D(reflectionDepth,uv).x;
   vec4 p=reflectionInverse*vec4(uv*2.-1.,depth*2.-1.,1.);
   float height=max(0.,p.y/p.w-groundY);
   float rate=mix(.8,1.1,reflectionTone);
   absorption=exp(-height*rate)*(1.-smoothstep(.65,1.65,height));
  }
  vec4 sampleColor=texture2D(source,uv);
  // Recover lamp radiance in the actual capture before spatial filtering.
  float warm=max(0.,sampleColor.r-max(sampleColor.g,sampleColor.b));
  sampleColor.rgb=mix(sampleColor.rgb,sampleColor.rgb*.12+vec3(warm*12.,warm*.8,warm*.5),absorbSource*reflectionTone);
  color+=sampleColor*absorption*weight;total+=weight;
 }
 gl_FragColor=color/total;
}`;
// The requested +30% replaces +80%, using the same 1.68 baseline.
// Every ground receiver uses this response; traffic retains its weaker role.
export const LIGHT_REFLECTION_GAIN=1.68*1.3;
export function bodyReflectionStrength(tone=0,ego=true){return ((1-tone)*(.255*LIGHT_REFLECTION_GAIN)+tone*.32)*(ego?1:.42)}
export const vehicleReflectionSampling=`
uniform vec2 vehicleReflectionTexel;
// A bounded relative radiance response keeps a white reflection comparable on
// different ground colours. At night the existing AO owns contact darkness;
// the reflection adds only the filtered vehicle radiance.
vec3 compositeVehicleReflection(vec3 ground,vec3 source,float coverage,float tone){
 float groundLuma=max(dot(ground,vec3(.2126,.7152,.0722)),.035);
 // The accepted light Parking floor is the contrast reference. Preserve its
 // soft light/dark silhouette; transfer that relative contrast to other floors.
 vec3 reference=vec3(.702,.737,.773);
 float referenceLuma=dot(reference,vec3(.2126,.7152,.0722));
 vec3 lightDelta=(source-reference)*(groundLuma/referenceLuma);
 // Compensate the display tone curve: equal linear contrast compresses more
 // strongly on a bright floor. Keep the Parking reference unchanged.
 lightDelta*=(1.+2.*groundLuma)/(1.+2.*.46);
 // Night radiance stays faint and cannot paint an extra dark underbody patch.
 float nightContrast=clamp(pow(groundLuma/.025,.65),.6,2.);
 vec3 darkDelta=(vec3(1.)-ground)*source*(1.5*nightContrast);
 return clamp(ground+mix(lightDelta,darkDelta,tone)*clamp(coverage,0.,1.),0.,1.);
}
float bodyReflectionOpacity(float tone){return mix(${.255*LIGHT_REFLECTION_GAIN},.32,tone);}
vec4 roughVehicleSample(vec2 uv,float height,float tone,float groundY){
 float radius=mix(4.,18.,smoothstep(0.,.9,height));
 // Keep the accepted 1408x792 preview roughness when raster density changes.
 // Capture texels still follow the live raster; material roughness uses UV space.
 vec2 roughnessStep=vec2(1./1408.,1./792.);
 vec4 color=vec4(0.);float sum=0.;
 for(int x=-3;x<=3;x++)for(int y=-8;y<=8;y++){
  float w=exp(-float(x*x)/4.5-abs(float(y))*.20);
  vec2 sampleUV=uv+vec2(float(x)*radius/3.,(float(y)+float(x)/7.)*8.)*roughnessStep*2.;
  color+=texture2D(reflectionTexture,sampleUV)*w;sum+=w;
 }
 return color/sum;
}`;
