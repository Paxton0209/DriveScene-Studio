# Vehicle delivery asset

The runtime loads `ego-vehicle-ready.glb.gz`. `createSourceVehicle()` in `vehicle.js` and `ego-suv.meshopt.glb.gz` retain the source preparation recipe and original geometry.

To regenerate, run `npm install`, serve the repository, and open `scripts/prepare-vehicle.html`. Export the prepared GLB, then run `npm run prepare:vehicle -- /path/to/vehicle-prepared.glb`. The compressor removes only cabin nodes occluded by permanently opaque glazing, retains exterior topology, and applies 16-bit position / 12-bit normal quantization, Meshopt, and gzip. Update the asset URL in `vehicle.js` and rebuild the bundle when changing the published asset so stale caches cannot mix revisions.

The source and prepared models retain the third-party attribution in `CREDITS.md`. Preparation tools are development dependencies; the static site has no added runtime dependency.

## Stable startup

The first HTML paint uses a scene-matched 1280×720 WebP. The header fetches the full delivery vehicle and baked studio lighting alongside the application bundle. The matching poster remains visible until the full model, shaders and shadow map have produced complete frames. The preview then becomes interactive with the same mesh used by PNG export. The decimated startup asset remains a development tool and is not swapped into the live scene.

Refresh restores the exact last rendered PNG when the URL and release match. Environment switches are encoded in the URL. Source changes require rebuilding the bundle; appearance changes also require regenerating startup posters and bumping their cache version.

Run `npm run prepare:lighting` to bake the fixed HDR studio environment. Run `npm run prepare:framing` after changing the delivery vehicle to regenerate per-mesh convex hull indices; these reduce framing projection work without changing the silhouette. Both scripts use a local server and Playwright. Set `STARTUP_BASE_URL` and optionally `CHROMIUM_PATH`. Run `npm run prepare:posters` after scene changes. Keep the attribution from `CREDITS.md`.
