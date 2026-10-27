// A thin coat on upward body panels, shared by ego and traffic vehicles.
export function createVehicleWeather(world){
 const amount={value:0},tone=world.draftThemeTone,installed=new WeakSet();let patched=0;
 function install(car){
  car?.traverse(mesh=>{
   if(!mesh.isMesh||!mesh.material)return;
   for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material]){
    const role=material.userData.trafficRole||material.userData.surfaceRole;
    if(installed.has(material)||!(role==='paint'||/^(body|Pearl white paint)$/i.test(material.name)))continue;
    installed.add(material);patched++;
    const compile=material.onBeforeCompile,key=material.customProgramCacheKey();
    material.onBeforeCompile=function(shader,renderer){
     compile.call(this,shader,renderer);shader.uniforms.draftVehicleSnow=amount;shader.uniforms.draftSnowTone=tone;
     shader.vertexShader='varying vec3 vDraftSnowLocal;\n'+shader.vertexShader;
     shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvDraftSnowLocal=transformed;');
     shader.fragmentShader='varying vec3 vDraftSnowLocal;uniform float draftVehicleSnow;uniform float draftSnowTone;\n'+shader.fragmentShader;
     shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`float snowFacing=dot(normal,normalize((viewMatrix*vec4(0.,1.,0.,0.)).xyz));
      float snowPatch=sin(vDraftSnowLocal.x*6.1+sin(vDraftSnowLocal.z*3.7))*sin(vDraftSnowLocal.z*5.3-vDraftSnowLocal.x*1.8);
      float snowCover=smoothstep(.60,.96,snowFacing)*smoothstep(-.12,.36,snowPatch)*draftVehicleSnow;
      vec3 settledSnow=mix(vec3(.72,.76,.81),vec3(.17,.19,.22),draftSnowTone);
      outgoingLight=mix(outgoingLight,max(outgoingLight,settledSnow),snowCover*.26);
      #include <opaque_fragment>`);
    };
    material.customProgramCacheKey=()=>key+'-draft-vehicle-snow-2';material.needsUpdate=true;
   }
  });
 }
 return {install,update(){
  amount.value=['10','14','15','16','11'].includes(world.state?.id)?0:(world.draftWeather?.weights.snow||0);
  install(world.car);
  world.draftVehicleSnow={amount:amount.value,patched,maximumCoverage:.26,orientation:'upward body panels only'};
 }};
}
