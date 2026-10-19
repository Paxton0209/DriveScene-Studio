# Motion and performance checks

## Changes

- Static building and tree contact bounds are reused until the root, environment geometry, layout width, reveal state or visibility changes.
- Full path ray-casting audits are deferred until activation finishes. Live controls continue using lightweight state.
- Bezier coefficients are cached and solved with Newton iteration plus a bounded bisection fallback. Per-frame path output reuses an object, and palette uniforms update only when the theme changes.
- The idle navigation-to-engine transport loop now runs only while a junction playback needs updates. Hidden-page polling does no work.
- Vehicle dismissal uses a finite 204.8 ms animation. This avoids waiting for an imperceptible spring remainder before removing the popover.
- All motion uses the common 0.8 time scale. The selected soft-flow path is now 400 ms following user review, and path retraction remains 144 ms.
- Navigation and segmented indicators use sampled, bounded two-edge spring trajectories handed to the browser as transform-only WAAPI animations. They land in 320 ms, preserve presentation position and edge velocity on interruption, and do not restart when geometry synchronization repeats the same target.
- Navigation retains its DOM nodes across selection changes. The selection starts before engine scene work, and no indicator is detached and reinserted during geometry synchronization.
- Switch thumbs now deform throughout their 224 ms transition, with a continuous envelope reaching 24% horizontal stretch and 9.6% vertical compression. All selection deformation strengths use a shared 1.2 multiplier. Input semantics, focus indication and forced-colors fallback remain native.
- Preview snapshot readback is deferred while path, camera, layout or environment animation is in progress, keeping snapshot work out of these transitions.

## Validation

Finish-64: left-tab deformation is now 56% of the finish-62 amount (successive 30% and 20% reductions); segmented-control deformation is 85%, and switch deformation is 76.5% (successive 15% and 10% reductions). Tests compare every sampled stretch/compression against the previous trajectory and assert unchanged center travel, duration and landing. Path activation remains 400 ms.

Dark dry surfaces now neutralize residual environment-light/reflection chroma at the final surface-lighting stage, preserving luminance and contact/reflection structure. The correction follows reflection composition; applying it only to the reflected texture left some environment lighting blue. It does not affect light mode, vegetation, building colors, water or path colors. At one matched road patch the old RGB was approximately (35.62, 39.63, 44.15), now (39.13, 39.13, 39.13); a nearby paved patch changed from (69.90, 76.85, 85.21) to (76.20, 76.20, 76.20). Six sampled positions per theme are identical with Path off/on, so there is no detected path-colored spill there. The six light-theme samples remain identical to their previous values.

The ten original sound options have separate 48 kHz stereo PCM WAV assets and a synchronized audition page at `sound-review/`. All ten were decoded and played to their `ended` event in the browser without an audio error; waveform tests cover finite metadata, bounded peaks and silent boundaries. These are technical checks, not a claim of car-cabin acoustic or subjective listening approval. The main-workbench sound is not replaced pending the user's selection.

The current source has 37 passing Node tests. Temporary browser QA pages and local evidence remain outside the uploaded preview package.

Finish-62: 22 Node tests cover the 400 ms path duration, exact spring landing, interruption continuity, same-target deduplication, the 1.2 deformation multiplier and the continuous switch envelope without shape stacking. Actual workbench checks cover 27 sequences and 1,899 RAF samples, including all scene entries, both camera views, weather selection, segmented changes, light/dark path activation, switch reversal, environment toggles and vehicle expansion/dismissal. Captured path frames at roughly 50 ms intervals confirm a visible continuous fill rather than an instant replacement. The main workbench also confirms `revealMs=400`, the `flow` preset and successful audio playback.

Most sampled desktop RAF intervals have p95 around 9–10 ms. The first ramp entry still records an isolated main-thread interval around 66.6 ms during scene preparation. Selection transforms run as browser animations independently of that JS sampling loop; this is not evidence of zero dropped compositor frames, a GPU timing result or a low-end-device guarantee. The prior finish-61 baseline follows.

Three activation cycles in the same desktop browser produced average control-state polling times of approximately 1.63 ms before and 0.36 ms after the changes. Static contacts were synchronized three times and reused 255 times in the latter run. RAF interval p95 was approximately 9.9 ms before and 9.6 ms after; these samples are not a GPU frame-time measurement or a cross-device FPS guarantee.

The UI regression recorded the vehicle popover fully hidden at approximately 211 ms. The left selection indicator produced 39 distinct transforms across 57 sampled frames. The checked desktop layout had no horizontal overflow.

Each preset is checked against a high-precision reference at 10,001 positions, with maximum progress error below 6.1e-9. Tests also cover monotonicity, settled particles/highlight, reusable frame output, spring retargeting, the common motion scale and reduced motion. Low-end mobile GPU performance remains a device-validation task.

The 14 Node tests pass in both the source workspace and a clean package installation. A further 26 light/dark scene, lane-count and environment-visibility sequences reported no internal feature errors or invalid/ghost contact bounds. A real activation confirmed the decoded audio buffer, running audio context and one playback with no audio failures.

In one matched light-mode road patch, the screenshot mean RGB values were approximately (96.4, 106.4, 118.4) in clear weather and (89.9, 99.9, 111.9) in rain. This confirms the intended darker rain relationship without a lateral brightness gradient.
