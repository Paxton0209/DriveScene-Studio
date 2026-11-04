# DriveScene UI draft · saved 2026-10-27 version

This branch contains the current saved UI draft. The entry point is `studio/ui-draft/index.html`. It includes the material, floor/contact and camera profile previously served by the local review proxy; it runs as ordinary static files and no longer requires that proxy or personal filesystem paths. The production entry point and shared `studio/engine` source are unchanged.

## Preview

Serve the repository root with `python3 -m http.server 18034 --bind 127.0.0.1`, then open `http://127.0.0.1:18034/studio/ui-draft/`. The committed runtime supports direct preview without rebuilding. Normal operation needs no query parameters. Add `?perf` only for render-callback and long-task diagnostics.

## Rebuild and verify

The X6 delivery binary and `vehicles/display-manifest.json` are committed together. A normal build checks the X6 source SHA-256, output SHA-256 and byte lengths before preparing display vehicles; it does not encode or rewrite the X6 binary. Missing or mismatched files stop the build. To intentionally regenerate X6, run `npm run prepare:x6 --prefix studio/ui-draft`, review and commit the binary and manifest together, and update the resource version if the deployed bytes change. The original `node studio/ui-draft/prepare-lossless-vehicle.mjs` preparation entry point also updates both files. Encoder versions are pinned, but byte stability across different platforms is not assumed.

Install dependencies with `npm ci --prefix studio` and `npm ci --prefix studio/ui-draft`. Run `npm run build --prefix studio/ui-draft` and `npm test --prefix studio/ui-draft` from the repository root. The build reads shared engine inputs, applies isolated UI-draft transformations, then applies `saved-preview/build.mjs` to reproduce the saved runtime. It does not write shared engine files. Keep the saved profile application in this chain when rebuilding this version.

`saved-preview/` contains the fixed Parking settings, local material-normal data, build-time transformations and cached frame adapter. `manifest.json` records profile hashes and the original review-runtime hash for equivalence checking. The frame adapter loads before the deferred UI module and runs inside the existing draw loop; no temporary HTTP injection is required.

## Cold-start delivery

The default Road runtime excludes Parking-only material normals and all-model framing tables. Parking awaits `parking-normals.bundle.js` before displaying its prepared traffic vehicles; the module preserves the approved Float32 bits. Each vehicle loads its own exact `vehicles/<id>/framing-hull.json` alongside its GLB, consuming the parent's early request when available. A failed framing request falls back to full-mesh projection and can retry. Vehicle geometry, traffic geometry and material parameters remain unchanged. X6 delivery uses the committed lossless WebP texture artifact; the other three vehicle GLBs remain byte-for-byte copies of the approved sources.

The shell preloads `guizang-trial/InterLatin.woff2`; the full original Inter font remains available for other scripts. Regenerate the subset with `python prepare-startup-font.py` in an environment containing `fonttools[woff]`. The script retains variation axes, features and metrics. For an opt-in report of the final saved runtime's dependency contributions, set `DRIVESCENE_BUNDLE_REPORT` to an absolute JSON output path when building.

The 2026-11-02 controlled comparison used fresh resource URL prefixes, a 390×738 Chrome viewport, 4× CPU throttling, 10 Mbps download and 80 ms latency, with three samples per condition. Median startup-visible time fell from 3.87 s to 3.17 s with Traffic off, and from 5.80 s to 5.00 s with Traffic on. Sampled transfer bytes fell by 0.96 MB in either case. These are local-server delivery measurements, not real iPhone/Safari or GitHub CDN timings; renderer-driver caches were not controlled. The improvement primarily reduces downloading and module preparation, and does not establish a frame-rate improvement. First Parking use now fetches its normal-data module on demand.

## Saved behavior

The fixed Parking profile is white19/body104/cool21/roof130/side53/glass104/wheels100/matte88/shadow56. Parking tuning sliders are removed. The foreground-left edge-clipped parked car is omitted in Indoor and Outdoor; the remaining five retain their previous positions. Default, Raised and BEV camera choices remain. Parking maneuver controls stay hidden and inactive, matching the saved review state.

Theme changes use a 400ms soft radial root-snapshot reveal from the appearance button with a160px feather, without the discarded perimeter defocus. Theme switching is silent; existing indicator/path sounds are retained. Playback intent is preserved across the transition. The prepared 3D scene remains live in a separate transition layer and blends its appearance while the shell uses the root snapshot reveal; Junction prepares both theme shader endpoints when the scene is selected. Export remains anchored at the bottom of the desktop inspector, and scene changes use the existing inert input lock without flashing the Export button's disabled opacity.

Traffic rises intact from below its road surface, with local ground clipping and a 450ms strong ease-out (cubic-bezier(.23,1,.32,1)). An entry opacity multiplier follows the same eased progress and reaches full at 98% rise; the exterior depth shell prevents internal panels showing through. Vehicle scales and route coordinates remain unchanged; there is no squashing or overshoot. Disabling Traffic removes the body, contact and reflections immediately, including during an unfinished entry. Refresh restores the saved endpoint without replaying entry. The existing preview scheduler drives motion while playback is paused.

Indoor and Outdoor Parking expose still-image/kit/camera/depth exports only. Entering Parking with Video selected resets the format to PNG and hides duration controls; Driving and Junction retain video export. Initial artboard layout runs before engine loading, and startup publishes its first frame after saved traffic, finish and raster sizing are applied.

## Verification and limits

The preceding revision passed 235 tests and native preview checks for Indoor/Outdoor light/dark, camera choices, Traffic toggling and six-scene Export placement. The current revision passes 256 tests covering export capability, startup ordering, Traffic entry and immediate removal, cache invalidation, and existing behavior. Native checks include sampled frames, not a high-speed recording or a universal no-flicker guarantee. Packaging verification is recorded in `saved-preview/verification.json`. Tests, runtime equivalence, actual screenshots and user acceptance are separate evidence. First Ramp preparation still has a sampled52–56ms main-thread long task; no universal zero-stutter or pixel-perfect claim is made. Fine material seams remain separately tracked.

## 2026-11-04 UI follow-up

Replay uses the primary foreground color in both themes. Assist icon-to-label spacing is 8px, continuous corners include shell controls and surface border pseudo-elements, and the desktop vehicle/export footers share 16px side and bottom insets. The original Parking HUD typography and scrim are restored. Finished Junction and Parking scenes disable assistance until replay. The release verification passes 527 tests; automated tests do not establish universal stutter-free rendering.
