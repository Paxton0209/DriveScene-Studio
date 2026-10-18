import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
await build({absWorkingDir:fileURLToPath(new URL('.',import.meta.url)),entryPoints:['app.js'],bundle:true,minify:true,format:'esm',outfile:'app.bundle.js',target:['chrome110','safari17','firefox115']});
