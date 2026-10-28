# UI draft implementation and verification, 2026-10-22

## Scope and acceptance status

Baseline: `preview/ui-draft-20261020` at `51dce85`. Implementation remains inside `studio/ui-draft/`; evidence remains in this directory. Shared `studio/engine/`, the material draft and the original Earshot page are unchanged. This is a tested implementation checkpoint, not full performance certification. All subjective appearance and sound judgments are **待用户验收**. The user's later instructions take precedence over the older proposed material treatments in FINAL.md, including retaining the established look rather than the rejected fog-heavy experiment.

## Functional changes

Assist is off on every page load, even when previous saved scene settings say on. The other scene settings survive. Explicit activation is the sole source of enable-sound intent; restoring a scene, lane count, view, model or theme stays silent. The visible button text remains “Driving assist” in both states, so its icon/text geometry does not jump. The current decoded 08K buffer measures **400ms**, as recorded in browser status; older 450ms prose must not be used as its current measured duration.

Cross and T junctions now start paused. Their inspector includes Play/Pause/Replay. Playback uses the original native approach, delayed camera lift and braking trajectory. When Assist is enabled, the preview distance equals eight seconds times the derivative of that native trajectory; the line shortens continuously to zero at rest. This is a scene-animation calculation, not a validated vehicle-control model. Continuing through another junction remains an undecided product option and was not added.

Both Ramp variants move continuously. Branch geometry and arrows are world-fixed features that pass the car and disappear, with a plain-road interval before the next 25-second cycle. Meshes are reused rather than appended. Ordinary lane dashes keep their independent travel phase. The existing 20261021 Ramp-cycle evidence records both variants, light/dark, pause and export restoration.

Paused scene playback no longer marks the WebGL world as interrupted. This fixes the previously failing model preparation while parking is paused. Scene restoration waits for the native queued render and checks request generation between parameter restores; a stale restore cannot continue writing the next scene's settings. Exports wait out scene restoration through a UI lock, disable conflicting theme/scene changes during encoding, and restore time, speed, distance, pose and playback after success or cancellation.

## Rendering and motion

Dark horizon blending now uses matching output color space and calibrated sky inputs while retaining the existing distance curve. The final Ramp screenshot replaces the earlier unsuccessful `20261021-horizon-dark-after.png` trial. No global blur, new fog layer, road blue pool or building pattern was added. The overcast shader uses one broad, restrained field instead of projective multi-octave cloud patches.

The activation plane extends past the visible region, while spatial fade reaches zero before its geometry boundary and temporal fade reaches zero at completion. The saved scan sequence contains 55 actual rendered PNGs at deterministic 16.6667ms clock increments from 0 to 900ms, with timestamps. This is a deterministic 60fps sample sequence, not a real-time 60fps capture or a GPU throughput guarantee. Inspection includes near-completion frames and the subsequent Assist-off frame.

Indoor parking increases cast/contact shadow strength and reduces floor mirror contrast, retaining the existing horizon fade. Latest actual frames are `20261022-indoor-light-contact.png` and `20261022-indoor-dark-contact.png`. Snow removes random coarse/fine coverage islands and the dark undercoat, replacing them with continuous, surface-orientation-weighted coverage. The rain branch remains byte-equivalent in the source test; lane paint, path materials and falling precipitation are untouched. `20261022-snow-light-continuous-coating.png` and its dark counterpart show the resulting render.

The right-top appearance icon is 18px inside its existing hit target. The 400ms top-right circular wipe and sun/moon morph are restored. A trace exposed 162.8ms in the synchronous theme render callback; the destination render is now prepared behind a held frame before starting the composited wipe. Four subsequent actual switch trials completed without recorded long tasks in that helper. Their largest browser callback gaps were 25.07 / 33.40 / 9.30 / 9.30ms. Cold preparation still has a cost; these four trials do not establish a global worst-case limit.

## Performance and stability evidence

| Check | Observed result | Evidence |
|---|---|---|
| Earlier scene-update baseline | Mean approximately 33.4ms | `20261021-performance-before.json` |
| 60Hz update scheduling | Mean 16.70–16.71ms; p95 17.8–18.1ms in the recorded cases | `20261022-performance-final.json` |
| Sustained mixed operation | 601.0 seconds, 85 cycles, 100 checks pass, no captured application error | `20261022-stability-10min.json` |
| JS heap samples | 105.97MiB at start, 88.31MiB at end; intervening samples fluctuate rather than rise continuously | same file |
| WebGL resource counts | Textures remain 57; programs settle from 91 to 94; geometries settle from 1014 to 1019, with later Road samples stable | same file |
| Three-pass control matrix | 26 assertions pass; 10Hz scene/model/lane interruption settles coherently; export cancellation unlocks UI and resumes playback | `20261022-final-interactions.json` |
| Responsive layout | 1280 / 1440 / 1680 / 800 / 390px, no document-width overflow, complete 16:9 board | same file |
| Startup/Junction/render regression | 14 assertions pass; zero captured application errors | `20261022-refinement-regression.json` |
| Reduced motion | Ready Road begins paused at time/distance zero, Assist off; theme switches without the circular animation | `20261022-reduced-motion.json` |

Update scheduling combines simulation steps into at most one render request per callback. A small timestamp tolerance carries negative debt, avoiding a 120Hz jitter pattern of alternating short and long update gaps without accelerating simulation time. Junction's native sampler already renders, so the duplicate bridge render was removed. Expensive path raycasts and object traversal are omitted from routine status polling. Empty Ramp reflections and non-changing shadow casters no longer invalidate their caches solely because driving time changes.

Scene-cover capture now copies into a reusable canvas instead of PNG-encoding on each switch. The trace also identified a 43.8ms idle callback in native `rememberPreview` that encoded old-workbench cache images. That cache is unused by this isolated UI, so draft runtime patching now skips its save path. The shared cache implementation remains untouched.

Actual Chromium traces are saved as `20261022-interaction-trace.json.gz` and `20261022-final-interaction-trace.json.gz`, with JSON summaries. The ten-minute run precedes the final snow, stylesheet cleanup, export-lock and theme-preparation refinements; those changes were validated by the subsequent targeted browser checks, not a second ten-minute run. GPU allocated bytes are not exposed here: geometry/texture/program counts are useful proxies and must not be reported as measured GPU memory. Heap samples are not forced-GC measurements.

## Remaining limits

The strict p95 ≤16.7ms target is **not met** by the recorded update intervals. Cold/transition control-matrix runs still recorded long tasks, including Ramp up to 130ms and the pre-fix theme callback up to 163ms. The theme callback was subsequently moved out of the wipe and retested; the cold Ramp cost remains a performance follow-up. The traces do not isolate CPU geometry, shader-driver blocking and GPU waits sufficiently to assign all remaining cost to one cause. The UI's non-selected text, native 3D rendering cost and browser refresh cadence must not be conflated.

A browser first-attachment log reported `MutationObserver.observe` with a non-Node target and no source URL. Application listeners captured no error during either full regression, and an instrumented reload did not reproduce an exception. Its attribution remains unresolved; the report does not claim a universally clean console. Warm/cold interactive-start timing ≤1.5s was not certified. The rapid matrix covers scenes, vehicles and lanes, not an exhaustive proof of every possible 10Hz control combination. No new HDRI, global lighting experiment, next-junction continuation or deployment was added to close these gaps cosmetically.

## Code and delivery

Removed approximately 4.5KB of obsolete stylesheet rules for discarded on-canvas play/Assist controls, eye icons, checkboxes, panel collapse states and the old vehicle popover. Assist's current layout is explicitly defined in inspector.css. Compact scene buttons retain accessible names when their visible text is hidden. The readonly WebGL resource diagnostic is sampled on demand, not every frame.

Final verification: `npm test --prefix studio/ui-draft` passes **33 tests**, `npm test --prefix studio` passes **79 tests**, `npm run build --prefix studio/ui-draft` passes, both CSS files parse without esbuild warnings, and `git diff --check` passes. Generated `engine.html` and `runtime.bundle.js` are included for static preview. Source-level guards and math tests supplement, rather than replace, the browser evidence.

The user authorized committing after completion. The implementation checkpoint and evidence are committed only to the existing UI preview branch; no main merge or deployment is authorized by this report. The separate pre-existing edit to `outputs/CODEX-TASK-ui-draft-FINAL.md` is not part of this implementation commit. No files are added to Desktop.
