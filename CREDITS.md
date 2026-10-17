# Credits

The live vehicle selector also includes Tesla Model 3 by RBLXSupercars, BMW iX by DisneyCars (supercarmodels), and Volvo XC90 by Nieve5677, with CC BY 4.0 notices declared in their source assets. See [vehicle-library/CREDITS.md](vehicle-library/CREDITS.md) for source links, authors and preparation details. Runtime changes include white paint and glazing, neutral dark-gray plate faces, grille reflections, orientation, scale and ground-contact integration. Preserve the attribution of the selected vehicle when sharing exports.

Vehicle source: **BMW X6M Competition Assetto | www.vecarz.com**, by **vecarz (heynic)**. The downloaded glTF asset declares **CC BY 4.0** in its embedded metadata.

Original source: https://sketchfab.com/3d-models/bmw-x6m-competition-assetto-wwwvecarzcom-3979a908081948e0971f5a5380b60a0f
Author: https://sketchfab.com/heynic
License: https://creativecommons.org/licenses/by/4.0/

Changes: glossy white paint and glass material adjustments, emissive red rear lamps and restrained ground reflections, removal of an isolated out-of-body trim artifact, normalized dimensions and orientation, integration into new driving environments. The delivery model additionally bakes these fixed edits, omits cabin components hidden behind opaque glazing, and quantizes position/normal data at 16/12 bits before Meshopt and gzip compression. The startup copy additionally simplifies geometry and resizes textures to 128 pixels; first-paint WebP previews are rendered from the full model. Preserve this attribution when sharing the model or its rendered derivatives. The live source page could not be fetched during this run; the license record above comes from the asset's embedded metadata.

Rendering: Three.js 0.180.0, MIT License. See THREE-LICENSE.txt. All road layouts, environments, user interface and scene code were created for this task. The vehicle is a visual design asset, not a calibrated model of a production sensing system.


Created by Peixin. Original application code: MIT (LICENSE). Original environments and rendered backgrounds: CC BY 4.0 (ASSET-LICENSE.md). Third-party assets retain the separate notices above.


## Meshopt decoder

Meshoptimizer decoder is used for vehicle geometry decompression. The original source is preserved; the delivery model uses high-precision quantization followed by lossless Meshopt and gzip encoding. MIT License, copyright Arseny Kapoulkine. See MESHOPT-LICENSE.txt.
