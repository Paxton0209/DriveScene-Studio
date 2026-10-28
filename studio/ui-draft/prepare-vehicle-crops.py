import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent
source = Path.home() / "Desktop/DriveScene-车模透明素材-2026-10-20/01-透明PNG"
models = {"model-3": "Tesla-Model-3", "x6": "BMW-X6", "ix": "BMW-iX", "xc90": "Volvo-XC90"}
images = {key: Image.open(source / f"{name}_azimuth-40_alpha.png").convert("RGBA") for key, name in models.items()}
bounds = [image.getchannel("A").point(lambda alpha: 255 if alpha > 8 else 0).getbbox() for image in images.values()]
box = (max(0, min(bound[0] for bound in bounds) - 12), max(0, min(bound[1] for bound in bounds) - 12), min(1600, max(bound[2] for bound in bounds) + 12), min(704, max(bound[3] for bound in bounds) + 12))
size = (440, round(440 * (box[3] - box[1]) / (box[2] - box[0])))
destination = root / "vehicles/cropped"
destination.mkdir(parents=True, exist_ok=True)
for key, image in images.items():
    image.crop(box).resize(size, Image.Resampling.LANCZOS).save(destination / f"{key}.png")
(destination / "manifest.json").write_text(json.dumps({"alphaThreshold": 8, "padding": 12, "jointCrop": box, "outputSize": size, "models": models}, ensure_ascii=False, indent=2))
print(json.dumps({"jointCrop": box, "outputSize": size}))
