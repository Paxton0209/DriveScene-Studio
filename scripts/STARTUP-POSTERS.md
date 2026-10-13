# Exact startup frames

Serve the repository after `npm install`, open `scripts/prepare-state-posters.html` in a browser, and click **Export exact startup frames**. The page renders all 556 supported state combinations using the production World and full vehicle, then downloads `startup-states.tar`. Extract its WebP files into `assets/startup/states/`. Each frame is 1280 × 720 at WebP quality 0.88. Only the current URL state is preloaded by the app.

The name is `{scene}-{lanes}-{view}-{theme}-{mask}.webp`. The five mask bits are Buildings, Coast, Trees, Vehicle, Roadworks in that order. Road uses scene 09 for two lanes and 02 for four/six lanes; other families use zero for lanes. Regenerate after changing final scene geometry, materials, framing or lighting, and update the `v` query in both index.html and app.js. Timing-only changes with identical endpoints do not require regeneration.

`prepare-startup-posters.mjs` remains the legacy non-state poster generator; it does not regenerate the current state directory. Do not replace current frames with its output.
