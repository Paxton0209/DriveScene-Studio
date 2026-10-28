import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({absWorkingDir:fileURLToPath(new URL('.',import.meta.url)),entryPoints:['app.js'],bundle:true,minify:true,format:'esm',outfile:'app.bundle.js',target:['chrome110','safari17','firefox115']});

// Keep the model inspection page in sync with the shared traffic implementation.
const review=await build({absWorkingDir:fileURLToPath(new URL('.',import.meta.url)),entryPoints:['../traffic-review/review.js'],bundle:true,minify:true,format:'esm',outfile:'../traffic-review/review.bundle.js',write:false,target:['chrome110','safari17','firefox115']});
const {writeFile}=await import('node:fs/promises');
await writeFile(new URL('../traffic-review/review.bundle.js',import.meta.url),review.outputFiles[0].text.replace(/[ \t]+$/gm,''));
