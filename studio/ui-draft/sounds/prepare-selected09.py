import array
import hashlib
import json
import math
from pathlib import Path
import wave

root = Path(__file__).resolve().parent
source = root.parents[1] / 'sound-review' / 'earshot' / 'audio' / '09-on.wav'
with wave.open(str(source), 'rb') as stream:
    parameters = stream.getparams()
    samples = array.array('h', stream.readframes(stream.getnframes()))
assert parameters.nchannels == 1 and parameters.sampwidth == 2
end_frame = round(parameters.framerate * .230)
fade_frames = round(parameters.framerate * .018)
first_note = samples[:end_frame]
for index in range(fade_frames):
    envelope = .5 + .5 * math.cos(math.pi * index / (fade_frames - 1))
    position = end_frame - fade_frames + index
    first_note[position] = round(first_note[position] * envelope)
target = root / '09-first-note-off.wav'
with wave.open(str(target), 'wb') as stream:
    stream.setparams(parameters)
    stream.writeframes(first_note.tobytes())
audit = {
    'selected': '09',
    'enter': '../../sound-review/earshot/audio/09-on.wav',
    'exit': '09-first-note-off.wav',
    'method': 'forward first onset, cut before the second onset at 230ms',
    'reversed': False,
    'enterDurationMs': len(samples) / parameters.framerate * 1000,
    'exitDurationMs': len(first_note) / parameters.framerate * 1000,
    'tailFadeMs': 18,
    'sourceSha256': hashlib.sha256(source.read_bytes()).hexdigest(),
    'exitSha256': hashlib.sha256(target.read_bytes()).hexdigest(),
}
(root / 'selected09.json').write_text(json.dumps(audit, ensure_ascii=False, indent=2) + '\n')
print(json.dumps(audit, ensure_ascii=False))
