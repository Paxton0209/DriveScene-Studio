# DriveScene UI draft · saved 2026-10-27 version

This branch contains the current saved UI draft. The entry point is `studio/ui-draft/index.html`. It includes the material, floor/contact and camera profile previously served by the local review proxy; it runs as ordinary static files and no longer requires that proxy or personal filesystem paths. The production entry point and shared `studio/engine` source are unchanged.

## Preview

Serve the repository root with `python3 -m http.server 18034 --bind 127.0.0.1`, then open `http://127.0.0.1:18034/studio/ui-draft/`. The committed runtime supports direct preview without rebuilding. Normal operation needs no query parameters. Add `?perf` only for render-callback and long-task diagnostics.

## Rebuild and verify

Install dependencies with `npm ci --prefix studio` and `npm ci --prefix studio/ui-draft`. Run `npm run build --prefix studio/ui-draft` and `npm test --prefix studio/ui-draft` from the repository root. The build reads shared engine inputs, applies isolated UI-draft transformations, then applies `saved-preview/build.mjs` to reproduce the saved runtime. It does not write shared engine files. Keep the saved profile application in this chain when rebuilding this version.

`saved-preview/` contains the fixed Parking settings, local material-normal data, build-time transformations and cached frame adapter. `manifest.json` records profile hashes and the original review-runtime hash for equivalence checking. The frame adapter loads before the deferred UI module and runs inside the existing draw loop; no temporary HTTP injection is required.

## Saved behavior

The fixed Parking profile is white19/body104/cool21/roof130/side53/glass104/wheels100/matte88/shadow56. Parking tuning sliders are removed. The foreground-left edge-clipped parked car is omitted in Indoor and Outdoor; the remaining five retain their previous positions. Default, Raised and BEV camera choices remain. Parking maneuver controls stay hidden and inactive, matching the saved review state.

Theme changes use a 400ms soft radial root-snapshot reveal from the appearance button with a160px feather, without the discarded perimeter defocus. Theme switching is silent; existing indicator/path sounds are retained. Playback intent is preserved across the transition. Export remains anchored at the bottom of the desktop inspector, and scene changes use the existing inert input lock without flashing the Export button's disabled opacity.

Traffic rises intact from below its road surface, with local ground clipping and a 450ms strong ease-out (cubic-bezier(.23,1,.32,1)). An entry opacity multiplier follows the same eased progress and reaches full at 98% rise; the exterior depth shell prevents internal panels showing through. Vehicle scales and route coordinates remain unchanged; there is no squashing or overshoot. Disabling Traffic removes the body, contact and reflections immediately, including during an unfinished entry. Refresh restores the saved endpoint without replaying entry. The existing preview scheduler drives motion while playback is paused.

Indoor and Outdoor Parking expose still-image/kit/camera/depth exports only. Entering Parking with Video selected resets the format to PNG and hides duration controls; Driving and Junction retain video export. Initial artboard layout runs before engine loading, and startup publishes its first frame after saved traffic, finish and raster sizing are applied.

## Verification and limits

The preceding revision passed 235 tests and native preview checks for Indoor/Outdoor light/dark, camera choices, Traffic toggling and six-scene Export placement. The current revision passes 256 tests covering export capability, startup ordering, Traffic entry and immediate removal, cache invalidation, and existing behavior. Native checks include sampled frames, not a high-speed recording or a universal no-flicker guarantee. Packaging verification is recorded in `saved-preview/verification.json`. Tests, runtime equivalence, actual screenshots and user acceptance are separate evidence. First Ramp preparation still has a sampled52–56ms main-thread long task; no universal zero-stutter or pixel-perfect claim is made. Fine material seams remain separately tracked.
