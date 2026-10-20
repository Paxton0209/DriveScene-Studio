import hashlib
import json
from pathlib import Path
import wave


def reverse_exit(root, entry):
    source = root / entry['enter']
    with wave.open(str(source), 'rb') as audio:
        params = audio.getparams()
        frames = audio.readframes(params.nframes)
    frame_size = params.nchannels * params.sampwidth
    reversed_frames = b''.join(frames[offset:offset + frame_size] for offset in range(len(frames) - frame_size, -1, -frame_size))
    with wave.open(str(root / entry['exit']), 'wb') as audio:
        audio.setparams(params)
        audio.writeframes(reversed_frames)
    entry['exitAudit'] = {
        'method': 'reverse-pcm-frames',
        'source': entry['enter'],
        'sourceSha256': hashlib.sha256(source.read_bytes()).hexdigest(),
        'durationMs': entry['enterAudit']['durationMs'],
        'peakDb': entry['enterAudit']['peakDb'],
        'rmsDb': entry['enterAudit']['rmsDb'],
        'events': [dict(event, at=round(params.nframes / params.framerate - event['at'] - event['duration'], 6), reversed=True) for event in reversed(entry['enterAudit']['events'])],
    }


def main():
    root = Path(__file__).parent
    manifest = json.loads((root / 'presets.json').read_text(encoding='utf-8'))
    for entry in manifest:
        reverse_exit(root, entry)
    (root / 'presets.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'{len(manifest)} exits rebuilt by exact PCM frame reversal; starts unchanged.')


if __name__ == '__main__':
    main()
