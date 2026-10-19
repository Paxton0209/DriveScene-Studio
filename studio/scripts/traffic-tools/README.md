# Traffic asset preparation

Install dependencies with `npm install --prefix studio/scripts/traffic-tools`.
Extract vehicle-library/sources/model-y.zip.part001–004 in order and unzip model-y/source.glb.
Run `node studio/scripts/traffic-tools/prepare-model-y.mjs /absolute/path/to/source.glb`.
The script checks the original asset digest, retains body and glazing surfaces, smooths the lower grille and tire sidewalls, and emits one indexed asset shared by all traffic instances. Source attribution is in ../../engine/assets/traffic-README.md.

The earlier prepare-modern.mjs pipeline is retired after visual rejection. A closed hidden core did not establish that the visible skin was intact. Do not regenerate or restore those assets for runtime use.
