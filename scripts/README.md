# Vehicle delivery asset

The runtime loads `ego-vehicle-ready.glb.gz`. `createSourceVehicle()` in `vehicle.js` and `ego-suv.meshopt.glb.gz` retain the source preparation recipe and original geometry.

To regenerate, run `npm install`, serve the repository, and open `scripts/prepare-vehicle.html`. Export the prepared GLB, then run `npm run prepare:vehicle -- /path/to/vehicle-prepared.glb`. The compressor removes only cabin nodes occluded by permanently opaque glazing, retains exterior topology, and applies 16-bit position / 12-bit normal quantization, Meshopt, and gzip. Update the asset URL in `vehicle.js` and rebuild the bundle when changing the published asset so stale caches cannot mix revisions.

The source and prepared models retain the third-party attribution in `CREDITS.md`. Preparation tools are development dependencies; the static site has no added runtime dependency.
