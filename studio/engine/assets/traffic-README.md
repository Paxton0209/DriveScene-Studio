# Traffic Model Y

The active traffic fleet uses one Model Y asset. The prior A7/Tucson adaptations were rejected for visible surface damage and are no longer loaded.

Source: [Tesla Model Y](https://sketchfab.com/3d-models/tesla-model-y-bc8ac22c744b4d11b92f2f31ab0297d0), by [Nieve5677](https://sketchfab.com/niev), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The original archive is retained in vehicle-library/sources/model-y.zip.part001–004. Its extracted GLB SHA-256 is dd60df30cf39410c4ec4f6591b4cbf7dc62817186c948279f4dc5c99e143a55f. Attribution and license were checked against the original Sketchfab API on 2026-10-20.

Changes: orientation and 4.75 m physical length; opaque neutral materials with restrained blue tint and weak broad reflections; emblem and hidden cabin/mechanical assemblies omitted; original body and glazing triangles and normals retained; lower grille covered with one closed smooth convex surface following the original outline; dense tire tread replaced with smooth tire sidewalls; rim geometry simplified independently. No artificial inner body core. The asset contains 135,054 triangles in five indexed material meshes, sharing immutable geometry between traffic instances. Source exterior assemblies selected before cleanup contain 455,126 triangles.

Regenerate with `node studio/scripts/traffic-tools/prepare-model-y.mjs /absolute/path/to/source.glb` after installing preparation dependencies in that directory. Runtime does not need those dependencies. The script validates the source digest before conversion. Body triangle preservation is a regression check, not a claim that numeric checks replace visual inspection. Inspect front, rear, both sides and underside on /studio/traffic-review/.

No manufacturer endorsement is implied. Historical attribution remains in traffic-LICENSE.txt for earlier assets and scripts.
