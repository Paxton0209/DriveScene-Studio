#!/usr/bin/env python3
"""Fetch and verify DriveScene's vehicle library with Python's standard library."""
import argparse
import gzip
import hashlib
import json
from pathlib import Path
import shutil
import urllib.request
import zipfile

BASE_URL = "https://raw.githubusercontent.com/Paxton0209/DriveScene-Studio/main/vehicle-library/"
HERE = Path(__file__).resolve().parent


def digest(path):
    h = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def verify(path, info):
    return path.is_file() and path.stat().st_size == info["bytes"] and digest(path) == info["sha256"]


def fetch_file(info, cache, base_url):
    relative = Path(info["path"])
    if relative.is_absolute() or ".." in relative.parts:
        raise ValueError("Invalid asset path")
    local = HERE / relative
    if verify(local, info):
        return local
    dest = cache / relative
    if verify(dest, info):
        return dest
    dest.parent.mkdir(parents=True, exist_ok=True)
    temp = dest.with_name(dest.name + ".download")
    print("Downloading", relative, flush=True)
    with urllib.request.urlopen(base_url + relative.as_posix(), timeout=120) as response, temp.open("wb") as output:
        shutil.copyfileobj(response, output, 1024 * 1024)
    if not verify(temp, info):
        temp.unlink(missing_ok=True)
        raise ValueError("Checksum mismatch: " + str(relative))
    temp.replace(dest)
    return dest


def restore_original(model, output, cache, base_url):
    info = model["source_archive"]
    parts = [fetch_file(part, cache, base_url) for part in info["parts"]]
    if len(parts) == 1:
        archive = parts[0]
    else:
        archive = cache / (model["id"] + ".zip")
        if not verify(archive, info):
            with archive.open("wb") as dest:
                for part in parts:
                    with part.open("rb") as source:
                        shutil.copyfileobj(source, dest, 1024 * 1024)
    if not verify(archive, info):
        raise ValueError("Archive checksum mismatch: " + model["id"])
    expected = {entry["path"] for entry in model["original_files"]}
    with zipfile.ZipFile(archive) as zipped:
        if set(zipped.namelist()) != expected:
            raise ValueError("Unexpected archive contents: " + model["id"])
        for name in zipped.namelist():
            target = (output / name).resolve()
            if not target.is_relative_to(output.resolve()):
                raise ValueError("Invalid archive path")
        zipped.extractall(output)
    for entry in model["original_files"]:
        if not verify(output / entry["path"], entry):
            raise ValueError("Extracted checksum mismatch: " + entry["path"])
    print("Ready:", output / model["id"], flush=True)


def restore_prepared(model, output, cache, base_url):
    info = model["prepared"]
    compressed = fetch_file(info, cache, base_url)
    dest = output / "prepared" / model["id"] / "model.glb"
    dest.parent.mkdir(parents=True, exist_ok=True)
    with gzip.open(compressed, "rb") as source, dest.open("wb") as stream:
        shutil.copyfileobj(source, stream, 1024 * 1024)
    if not verify(dest, {"bytes": info["glb_bytes"], "sha256": info["glb_sha256"]}):
        raise ValueError("Prepared GLB checksum mismatch: " + model["id"])
    print("Ready:", dest, flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--models", nargs="+", help="IDs: ix xc90 model-3 model-y taycan")
    parser.add_argument("--variant", choices=["original", "prepared"], default="original")
    parser.add_argument("--output", type=Path, default=Path("vehicle-models"))
    parser.add_argument("--base-url", default=BASE_URL, help="Override the library URL, e.g. a pinned commit")
    args = parser.parse_args()
    base_url = args.base_url.rstrip("/") + "/"
    manifest = HERE / "manifest.json"
    if manifest.is_file():
        data = json.loads(manifest.read_text(encoding="utf-8"))
    else:
        with urllib.request.urlopen(base_url + "manifest.json", timeout=60) as response:
            data = json.load(response)
    available = {model["id"]: model for model in data["models"]}
    selected = args.models or list(available)
    if set(selected) - available.keys():
        parser.error("Unknown model IDs: " + ", ".join(sorted(set(selected) - available.keys())))
    args.output.mkdir(parents=True, exist_ok=True)
    cache = args.output / ".downloads"
    cache.mkdir(exist_ok=True)
    for ident in selected:
        model = available[ident]
        if args.variant == "prepared" and model["prepared"]:
            restore_prepared(model, args.output, cache, base_url)
        else:
            if args.variant == "prepared":
                print(model["name"], "has no prepared variant; restoring its original.", flush=True)
            restore_original(model, args.output, cache, base_url)
    if manifest.is_file():
        shutil.copyfile(manifest, args.output / "manifest.json")
    else:
        (args.output / "manifest.json").write_text(json.dumps(data, indent=2), encoding="utf-8")
    credits = HERE / "CREDITS.md"
    if credits.is_file():
        shutil.copyfile(credits, args.output / "CREDITS.md")
    else:
        with urllib.request.urlopen(base_url + "CREDITS.md", timeout=60) as response:
            (args.output / "CREDITS.md").write_bytes(response.read())
    print("Complete. Attribution:", args.output / "CREDITS.md")


if __name__ == "__main__":
    main()
