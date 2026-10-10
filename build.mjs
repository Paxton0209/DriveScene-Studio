import {build} from 'esbuild';
await build({entryPoints:['app.js'],bundle:true,minify:true,format:'esm',outfile:'app.bundle.js',target:['chrome110','safari17','firefox115']});
