# DriveScene Studio

### 3D Backgrounds for Cockpit UI Design

An open-source workbench for designing intelligent-driving SR visualizations and automotive cockpit interfaces. Choose a driving or parking scenario, adjust its appearance, vehicle and camera, and export a 1920 × 1080 or 3840 × 2160 PNG to use in your layout.

[Open the live tool](https://paxton0209.github.io/DriveScene-Studio/studio/ui-draft/) · Created by Peixin

[![XERJ Corpus Hub contributor](https://hub.xerj.org/contributors/Paxton0209/badge.svg)](https://hub.xerj.org/contributors/Paxton0209)

![Current DriveScene background used in a cockpit interface concept, shown inside a vehicle](docs/cockpit-in-context.png)

## Why this project exists

A driver's view is shaped by the vehicle around them. A-, B- and C-pillars, and D-pillars where present, can obscure parts of the surroundings when turning, changing lanes or manoeuvring. Exterior cameras and other sensors observe the environment from different positions. When their inputs are combined, a vehicle can build an environmental model that supplements the driver's direct view. SR visualizations bring selected parts of that model into the cockpit interface, showing the road layout and detected objects around the vehicle. What they can show depends on sensor coverage and detection quality; a visualization cannot guarantee a complete view of every hazard.

For an interface designer, building an SR concept often means working with a 3D designer on road geometry, vehicle placement, camera framing, materials and lighting. Each new scenario or layout can require another round of modelling and colour adjustment. At the same time, the SR scene shares attention with speed, navigation, alerts and controls. Detailed scenery, strong colours and dense geometry can make those UI elements harder to distinguish.

This project provides a reusable starting point for that work: simplified environments with restrained colours and adjustable scene elements. Designers can compare common driving and parking contexts, choose the amount of environmental detail they need, and bring a consistent background into a cockpit layout without rebuilding the scene for every iteration. It supports early exploration of composition and visual hierarchy; it does not evaluate driving safety or connect to a vehicle's perception system.

## From background to cockpit interface

![Cockpit interface concept with an SR junction, speed display, turn guidance, map controls and arrival information](docs/cockpit-navigation-dark.png)

This example comes from the project's Figma design workspace. The SR scene sits alongside navigation, with speed and other UI information layered over a quiet environment. Its geometry remains readable while the interface retains its hierarchy. The complete cockpit screen illustrates how an exported background can be used in interface design; the website exports the scene itself, without speed labels, navigation or app controls.

Start with the closest driving or parking scenario, adjust the camera and visual density, then download the PNG and place it in Figma or another design tool. Add your interface elements and check how they read over the scene. When the layout changes, return to the tool to compare another viewpoint or reduce environmental detail.

## What you can configure

| Control | Available choices |
| --- | --- |
| Driving scenario | Road, elevated road, junction and ramp |
| Parking scenario | Indoor and outdoor parking |
| Appearance | Light and dark modes for day/night interface exploration |
| Road layout | Straight roads; 2, 4 or 6 lanes |
| Junction and ramp | Crossroads or T-junction; exit or merge |
| Camera | Low/high road and ramp views, and scenario-specific parking viewpoints, including bird's-eye views |
| Vehicle | BMW X6, Tesla Model 3, BMW iX or Volvo XC90; the selected vehicle remains visible across scenes |
| Scene elements | Buildings, trees, waterfront and roadworks, where supported by the selected scenario |
| Export | 1080p or 4K PNG, camera JSON, 16-bit depth PNG, perspective kit ZIP and 1080p video for driving scenes |

Camera changes animate through the 3D scene; other options use short transitions. Reduced-motion preferences are respected. Elevated roads and ramp mainlines have separated opposing carriageways; the elevated deck sits 8.5 m above ground with ground-level side streets and bridge supports.

Options follow the selected scenario. Light and dark modes provide visual themes for design exploration, rather than a physical simulation of changing daylight. The workbench adapts to desktop and mobile screens; scene and vehicle selectors sit above the canvas on mobile, with controls grouped below it. Use Assist to preview a driving path or a parking manoeuvre. Traffic can be enabled separately.

Use the vehicle selector to choose a model without changing the scene or camera. It supports arrow keys, Home and End, reuses recently prepared models within a bounded resource budget, and preserves the current vehicle if a new model cannot load. Indoor and outdoor parking share the same bay dimensions and spacing. Model attribution follows the selected vehicle in perspective-kit exports; additional sources and preparation notices are in [vehicle-library/CREDITS.md](vehicle-library/CREDITS.md).

## Camera, depth and Figma alignment

Choose **Format** and **Size** in the Export section, use **Preview** to check the framing, then click **Export**. PNG is selected by default. If the browser does not offer a Save As dialog, choose **Download** once the export is ready. **Perspective kit**, **Camera settings** and **Depth map** support scene alignment; driving scenes also offer video export. The kit contains the matching scene PNG, camera JSON, depth PNG, a transparent perspective SVG and usage notes. Active scene and camera animations settle to the selected endpoint before still capture; all files in a kit describe that same final frame.

Place `scene.png` and `perspective.svg` at (0, 0) in a Figma frame matching the selected export size, without cropping: 1920 × 1080 or 3840 × 2160. The SVG grid uses 1 m columns and 5 m rows on a horizontal plane at the ego vehicle's road height. A 2 m × 3.5 m reference arrow starts 18 m ahead. Use it to align navigation artwork, then hide the reference layer. The guide does not follow branch/ramp geometry or account for occlusion. Figma does not import the JSON as a 3D camera or automatically perspective-warp artwork.

The camera JSON includes the full projection and view matrices, orientation, FOV, clipping planes and view offset. Matrices are column-major; world units are meters with Y up, and the camera faces local -Z. The image origin is top-left. Preserve the projection matrix, including the view offset, when recreating the camera.

Depth PNG is 16-bit linear grayscale camera-space Z distance: `meters = uint16 / 65535 * 200`. Near geometry is dark; sky and distances at or beyond 200 m are white. Depth edges are not antialiased, and decorative transparency, glow and contact shadows are excluded. Water is represented by its surface. These depths support compositing and geometry workflows; use the SVG for manual Figma alignment. The package includes environment and vehicle attribution.

## Scene preview

![Current DriveScene Studio desktop workbench with scene and vehicle selection, a live canvas and grouped controls](docs/studio-workbench.png)

![Road, elevated road, junction, ramp, indoor parking and outdoor parking in matching light and dark themes](docs/scene-families.jpg)

## SR colour specification

The scenes use a restrained, cool palette so that speed, navigation and alerts stay on top. Saturated orange is reserved for roadwork elements. The [SR colour specification](docs/SR-COLOR.md) lists the base scene colours in light and dark themes, lighting values and workbench-specific finish adjustments.

<p><img src="docs/sr-color-paired-light.png" alt="SR colour specification in light mode, with cockpit context and scene families" width="1200"><br><img src="docs/sr-color-paired-dark.png" alt="The matching SR colour specification in dark mode" width="1200"></p>

## Run

The checked-in bundles are ready to use. Serve the repository root with any static web server. For example, run `python3 -m http.server 8000` and open [the workbench](http://localhost:8000/studio/ui-draft/). Use an HTTP URL so the renderer can load its modules, models and other assets.

## Develop

Install Node.js and run `npm install`. Build the current workbench with `node studio/ui-draft/build.mjs`; `npm run build` builds the original root application. Source modules are included beside the prebuilt bundles. Prepared vehicle assets, cached framing geometry and asynchronous shader preparation reduce initialization work. A scene-matched poster covers the canvas while the renderer initializes, and recently prepared vehicles and scenes are reused within bounded caches. Previews adapt their resolution to the display size. Still-image exports use a 4K render, with high-quality downsampling when 1080p is selected. See [the preparation recipe](scripts/README.md) and [vehicle attribution](vehicle-library/CREDITS.md) for the source and delivery assets.

## Hosting

Deploy this folder to a static HTTPS host. All runtime assets are relative to this folder, so it can run in a GitHub Pages project subdirectory. No API, backend or secret is needed.

## Contents and attribution

This repository contains the DriveScene Studio website, its runtime assets and rendered cockpit examples used in this README. Editable Figma files, internal review pages, feedback and comparison screenshots are excluded. The cockpit examples are illustrative UI compositions; their third-party app icons, vehicle-interior photography and other third-party elements are not relicensed as original project assets. See CREDITS.md and THREE-LICENSE.txt for runtime attribution. The vehicle declares CC BY 4.0 in embedded metadata; keep its attribution. The Visual key reference section and its reference images are excluded from this website package.


## License

Original application code is licensed under [MIT](LICENSE), copyright (c) 2026 Peixin. Original environments and rendered backgrounds are [CC BY 4.0](ASSET-LICENSE.md). The bundled vehicle and third-party code retain their own notices in [CREDITS.md](CREDITS.md) and [THREE-LICENSE.txt](THREE-LICENSE.txt). The Meshopt decoder license is in [MESHOPT-LICENSE.txt](MESHOPT-LICENSE.txt). Include both environment and vehicle attribution when sharing an exported image that contains the vehicle.

## Background reading

[Tesla's driving visualization documentation](https://www.tesla.com/ownersmanual/model3/en_us/GUID-2CB60804-9CEA-4F4B-8B04-09B991368DC5.html) illustrates how detected roads and objects can be represented on a cockpit display. [Volvo's camera limitations documentation](https://www.volvocars.com/en-sa/support/car/v90/16w46/article/dcc0393b8976b065c0a80151160585ff/) describes gaps in camera coverage. These references provide context for SR interface exploration and do not indicate an affiliation with either manufacturer.


## Download additional vehicle models

The [vehicle library](vehicle-library/README.md) contains complete original BMW iX, Volvo XC90, Tesla Model 3 (2024), Tesla Model Y and Porsche Taycan assets, plus four prepared delivery variants. It includes attribution, checksums and a standard-library Python downloader for use on another computer. Run `python3 vehicle-library/download.py --output vehicle-models` after cloning.
