# Motion and performance checks

## Changes

- Static building and tree contact bounds are reused until the root, environment geometry, layout width, reveal state or visibility changes.
- Full path ray-casting audits are deferred until activation finishes. Live controls continue using lightweight state.
- Bezier coefficients are cached and solved with Newton iteration plus a bounded bisection fallback. Per-frame path output reuses an object, and palette uniforms update only when the theme changes.
- The idle navigation-to-engine transport loop now runs only while a junction playback needs updates. Hidden-page polling does no work.
- Vehicle dismissal uses a finite 204.8 ms animation. This avoids waiting for an imperceptible spring remainder before removing the popover.
- All motion uses the common 0.8 time scale. The selected soft-flow path is 544 ms, and path retraction is 144 ms.

## Validation

Three activation cycles in the same desktop browser produced average control-state polling times of approximately 1.63 ms before and 0.36 ms after the changes. Static contacts were synchronized three times and reused 255 times in the latter run. RAF interval p95 was approximately 9.9 ms before and 9.6 ms after; these samples are not a GPU frame-time measurement or a cross-device FPS guarantee.

The UI regression recorded the vehicle popover fully hidden at approximately 211 ms. The left selection indicator produced 39 distinct transforms across 57 sampled frames. The checked desktop layout had no horizontal overflow.

Each preset is checked against a high-precision reference at 10,001 positions, with maximum progress error below 6.1e-9. Tests also cover monotonicity, settled particles/highlight, reusable frame output, spring retargeting, the common motion scale and reduced motion. Low-end mobile GPU performance remains a device-validation task.

The 14 Node tests pass in both the source workspace and a clean package installation. A further 26 light/dark scene, lane-count and environment-visibility sequences reported no internal feature errors or invalid/ghost contact bounds. A real activation confirmed the decoded audio buffer, running audio context and one playback with no audio failures.

In one matched light-mode road patch, the screenshot mean RGB values were approximately (96.4, 106.4, 118.4) in clear weather and (89.9, 99.9, 111.9) in rain. This confirms the intended darker rain relationship without a lateral brightness gradient.
