# UI draft continuation

This is the isolated workbench on `preview/ui-draft-20261020`, based on `51dce85`. The production workbench, material draft and Earshot review are unchanged. Rendering changes are applied at build time by `runtime-patches.mjs`; shared engine files are read-only inputs.

## Run and rebuild

From the repository root, run `python3 -m http.server 18034 --bind 127.0.0.1` and open `/studio/ui-draft/`. The committed runtime bundle supports direct static preview. For source work, install both dependency trees with `npm ci --prefix studio` and `npm ci --prefix studio/ui-draft`, then run `npm test --prefix studio/ui-draft` and `npm run build --prefix studio/ui-draft`. Do not rebuild or edit the shared engine to apply draft changes.

## Current behavior

Assist starts off on every load, including when saved artboards previously had it enabled. Only explicit Assist activation requests its sound; scene restoration is silent. Road, Elevated and Ramp play by default unless reduced motion is enabled. Ramp arrows and branch geometry pass the ego car once per 25-second cycle, leaving an ordinary-road interval. Cross and T junctions start paused; Play runs the original approach and delayed camera lift, brakes to a stop and changes to Replay. Enabled Junction path length follows eight seconds of the native motion's instantaneous speed and reaches zero at rest. Continuing through another junction is not implemented pending the user's decision.

The restored appearance control uses the top-right circular wipe and sun/moon morph. The renderer prepares the destination behind a held frame before the composited wipe begins. Scene restoration and encoding lock out conflicting export/theme actions. Export restores scene time, distance, pose and playback state; Escape cancels video encoding. A completed export does not automatically enable Assist.

Dark horizon calibration does not increase fog density. Overcast uses a broad, low-contrast sky field. Indoor parking has stronger contact shadows and a quieter floor reflection. Snow uses continuous orientation-weighted coverage without random roof/crown patches or a dark undercoat; rain, falling particles and lane-paint materials retain their existing behavior.

## Verification tools

Open `refinement-check.html` for startup, Junction, weather, parking and deterministic 60fps sweep samples; `stability-check.html` for ten minutes of mixed interactions and WebGL resource counts; `final-check.html` for three control-matrix passes, 10Hz interruptions, responsive sizing and video cancellation; `performance-check.html` for update intervals; `theme-motion-check.html` for repeated theme transitions. These are QA entry points, not extra controls on the workbench. QA pages use the separate `-qa` storage keys.

Evidence and measured limitations are in `outputs/ui-draft-review/20261022-final-review.md`. Visual results remain pending user acceptance. Update intervals, CPU trace durations and GPU completion are different measurements; the report does not certify universal 60fps or zero stutter.
