import {readFile} from 'node:fs/promises';

// Three's compile() does not initialize per-material clipping state in this
// pinned release. Match render() before selecting a program, otherwise traffic
// ground clipping causes synchronous compilation during the first warm draw.
// Transform only the isolated UI-draft bundle; dependency files stay untouched.
export function patchClippingPrecompile(source){
 const replace=(from,to)=>{
  if(!source.includes(from))throw Error('UI draft clipping precompile baseline mismatch');
  source=source.replace(from,to);
 };
 replace('function prepareMaterial( material, scene, object ) {',`function prepareMaterial( material, scene, object, camera ) {
   if ( _clippingEnabled ) clipping.setState( material, camera, false );`);
 replace('const materials = new Set();',`_localClippingEnabled = this.localClippingEnabled;
   _clippingEnabled = clipping.init( this.clippingPlanes, _localClippingEnabled );
   if ( _clippingEnabled ) clipping.setGlobalState( this.clippingPlanes, camera );
   const materials = new Set();`);
 replace('prepareMaterial( material2, targetScene, object );','prepareMaterial( material2, targetScene, object, camera );');
 replace('prepareMaterial( material, targetScene, object );','prepareMaterial( material, targetScene, object, camera );');
 return source;
}

export function clippingPrecompilePlugin(){return {name:'draft-clipping-precompile',setup(build){
 build.onLoad({filter:/\/three\/build\/three\.module\.js$/},async({path})=>({
  contents:patchClippingPrecompile(await readFile(path,'utf8')),loader:'js',resolveDir:path.slice(0,path.lastIndexOf('/')),
 }));
}};}
