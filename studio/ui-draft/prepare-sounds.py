import array
import json
import math
from pathlib import Path
import wave

ROOT = Path(__file__).parent
DEST = ROOT / 'sounds'
DEST.mkdir(exist_ok=True)
reports = []
for candidate in ['08', '09']:
    for action in ['on', 'off']:
        source = ROOT.parent / 'sound-review/earshot/audio' / f'{candidate}-{action}.wav'
        with wave.open(str(source)) as audio:
            params = audio.getparams()
            samples = array.array('h', audio.readframes(params.nframes))
        threshold = 32768 * 10 ** (-60 / 20)
        first = next((index for index, value in enumerate(samples) if abs(value) > threshold), len(samples))
        trim = max(0, first - round(.003 * params.framerate)) if candidate == '08' and action == 'on' else 0
        samples = samples[trim:]
        peak = max(abs(value) for value in samples)
        gain = 32768 * 10 ** (-10 / 20) / peak if candidate == '09' and action == 'off' else 1
        samples = array.array('h', [max(-32768, min(32767, round(value * gain))) for value in samples])
        with wave.open(str(DEST / source.name), 'wb') as audio:
            audio.setparams(params)
            audio.writeframes(samples.tobytes())
        first = next((index for index, value in enumerate(samples) if abs(value) > threshold), len(samples))
        reports.append(dict(candidate=candidate, action=action, trimmedMs=trim / params.framerate * 1000, leadBelowMinus60DbMs=first / params.framerate * 1000, durationMs=len(samples) / params.framerate * 1000, peakDbFs=20 * math.log10(max(abs(value) for value in samples) / 32768), gainDb=20 * math.log10(gain)))
(DEST / 'audit.json').write_text(json.dumps(reports, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(reports, ensure_ascii=False, indent=2))
