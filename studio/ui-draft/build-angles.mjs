import {build} from 'esbuild';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

await build({absWorkingDir:fileURLToPath(new URL('.',import.meta.url)),entryPoints:['vehicle-angles.js'],outfile:'vehicle-angles.bundle.js',bundle:true,minify:true,format:'esm',target:['chrome110','safari17'],plugins:[{name:'read-only-engine-assets',setup(builder){builder.onLoad({filter:/\/engine\/.*\.js$/},async args=>{
 const name=args.path.split('/engine/').at(-1),source=await readFile(args.path,'utf8');
 return {contents:source.replaceAll('import.meta.url',`new URL('../engine/${name}',import.meta.url).href`),loader:'js',resolveDir:args.path.slice(0,args.path.lastIndexOf('/'))};
})}}]});
