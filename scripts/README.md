# Vehicle delivery asset

The runtime loads `ego-vehicle-ready.glb.gz`. `createSourceVehicle()` in `vehicle.js` and `ego-suv.meshopt.glb.gz` retain the source preparation recipe and original geometry.

To regenerate, run `npm install`, serve the repository, and open `scripts/prepare-vehicle.html`. Export the prepared GLB, then run `npm run prepare:vehicle -- /path/to/vehicle-prepared.glb`. The compressor removes only cabin nodes occluded by permanently opaque glazing, retains exterior topology, and applies 16-bit position / 12-bit normal quantization, Meshopt, and gzip. Update the asset URL in `vehicle.js` and rebuild the bundle when changing the published asset so stale caches cannot mix revisions.

The source and prepared models retain the third-party attribution in `CREDITS.md`. Preparation tools are development dependencies; the static site has no added runtime dependency.

## Progressive startup

The first HTML paint uses a scene-matched 1280×720 WebP (about 19 KB on average). The header starts one request for `ego-vehicle-startup.glb.gz?v=17.9` alongside the application bundle. This 0.91 MB startup copy uses reduced geometry and 128-pixel textures. As soon as it is ready, the scene becomes interactive. The original 4.64 MB delivery model downloads in the background and replaces the startup mesh without changing the selected scene, theme, camera, or switches. PNG export stays disabled until the full model is installed.

Regenerate the startup copy with `npm run prepare:startup`. For posters, serve the repository on port 8000, install Chromium with `npx playwright install chromium`, then run `npm run prepare:posters`. Set `STARTUP_BASE_URL` to use another server or `CHROMIUM_PATH` to use an existing Chromium browser. Regenerate both assets after changing the vehicle or scene appearance, and bump the startup asset query version in both `index.html` and `vehicle.js`. Keep the model attribution from `CREDITS.md`.
