from pathlib import Path
import json
import wave
import zipfile
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'sound-review' / 'audio'
RATE = 48000
OPTIONS = [
    ('01-phase-unfold', '相位展开', '柔和气流带出清透谐波，声场由窄变宽。', .78),
    ('02-magnetic-field', '磁场上电', '低频感应线圈逐渐稳定，有厚度但没有轰鸣。', .82),
    ('03-avionics-wake', '航电唤醒', '细小继电器与伺服声接入一层稳定的电子气息。', .72),
    ('04-dimensional-gate', '维度开启', '内吸的空间气流在中段打开，向外散成柔光。', .96),
    ('05-neural-link', '神经接入', '细碎的数据颗粒连续汇聚，最后融合为一个整体。', .76),
    ('06-cold-scan', '冷光扫描', '一条纤薄的滤波气流平滑掠过，克制而清晰。', .68),
    ('07-ion-drive', '离子推进', '圆润低频托起短促推进气流，具有设备启动的力度。', .88),
    ('08-crystal-cohere', '晶体聚合', '微微失谐的清透共鸣逐渐对齐，不走提示旋律。', .90),
    ('09-gravity-release', '引力解锁', '下沉的低频与上行的空气交错，形成空间松开的感觉。', .94),
    ('10-quiet-intelligence', '静默智能', '短触感脉冲与极轻泛音，空间尾声更少。', .62),
]


def smooth(value):
    phase = np.clip(value, 0, 1)
    return phase * phase * (3 - 2 * phase)


class Design:
    def __init__(self, duration, seed):
        self.time = np.arange(round(duration * RATE)) / RATE
        self.rng = np.random.default_rng(seed)
        self.signal = np.zeros((len(self.time), 2))

    def envelope(self, start, end, attack=.025, release=.16):
        return smooth((self.time - start) / attack) * smooth((end - self.time) / release)

    def add(self, signal, gain=1, pan=0):
        position = np.asarray(pan)
        self.signal[:, 0] += signal * gain * np.sqrt((1 - position) / 2)
        self.signal[:, 1] += signal * gain * np.sqrt((1 + position) / 2)

    def noise(self, low, high):
        source = self.rng.standard_normal(len(self.time))
        frequencies = np.fft.rfftfreq(len(source), 1 / RATE)
        shape = smooth((frequencies - low) / max(80, low * .5)) * smooth((high - frequencies) / max(160, high * .3))
        filtered = np.fft.irfft(np.fft.rfft(source) * shape, n=len(source))
        return filtered / max(1e-9, np.std(filtered))

    def tone(self, low, high, start, end, gain, harmonics=(1, .18, .06), pan=0, attack=.025, release=.16, fm=0, ratio=1.7):
        progress = smooth((self.time - start) / max(.03, min(end - start, .4)))
        frequency = low * (high / low) ** progress
        phase = np.cumsum(frequency) * 2 * np.pi / RATE
        modulation = fm * (1 - progress * .8) * np.sin(phase * ratio)
        carrier = sum(weight * np.sin((index + 1) * phase + modulation) for index, weight in enumerate(harmonics))
        self.add(carrier * self.envelope(start, end, attack, release), gain, pan)

    def air(self, start, end, gain, reverse=False, pan=0, low=200, high=4400):
        progress = smooth((self.time - start) / max(.04, end - start))
        if reverse:
            progress = 1 - progress
        broad = self.noise(low, high)
        narrow = self.noise(low, min(high, low + 600))
        shape = broad * progress + narrow * (1 - progress)
        self.add(shape * self.envelope(start, end, .055, .16), gain, pan)

    def tick(self, start, gain=.05, pan=0):
        local = np.maximum(0, self.time - start)
        envelope = (self.time >= start) * smooth(local / .002) * np.exp(-local / .012)
        self.add(self.noise(650, 3900) * envelope, gain, pan)

    def space(self, amount=.15, spread=.16):
        dry = self.signal.copy()
        for index, delay in enumerate([.031, .047, .073, .109, .157, .211]):
            offset = round(delay * RATE)
            damp = amount * .68 ** index
            echoed = dry[:-offset, ::-1] if index % 2 else dry[:-offset]
            self.signal[offset:] += echoed * damp
        middle = self.signal.mean(axis=1)
        side = (self.signal[:, 0] - self.signal[:, 1]) / 2
        self.signal[:, 0] = middle + side * (1 + spread)
        self.signal[:, 1] = middle - side * (1 + spread)

    def finish(self):
        frequencies = np.fft.rfftfreq(len(self.time), 1 / RATE)
        highpass = frequencies ** 2 / (frequencies ** 2 + 42 ** 2)
        for channel in range(2):
            self.signal[:, channel] = np.fft.irfft(np.fft.rfft(self.signal[:, channel]) * highpass, n=len(self.time))
        self.signal *= self.envelope(0, self.time[-1], .008, .10)[:, None]
        core = self.signal[:round(.5 * RATE)]
        self.signal *= .10 / max(1e-9, np.sqrt(np.mean(core ** 2)))
        peak = np.max(np.abs(self.signal))
        if peak > .48:
            self.signal *= .48 / peak
        return self.signal


def render(index, duration):
    sound = Design(duration, 6400 + index)
    time = sound.time
    if index == 1:
        sound.air(.008, .43, .11, low=420, high=5100, pan=np.tanh((time - .17) * 7) * .15)
        sound.tone(195, 330, .015, .56, .30, (1, .22, .08), fm=.35)
        sound.tone(660, 660, .18, .72, .09, (1, .15), pan=.16, attack=.10, release=.35)
        sound.space(.18, .30)
    elif index == 2:
        sound.tone(85, 165, .005, .57, .45, (1, .40, .12), fm=1.25, ratio=1.005)
        sound.tone(340, 420, .05, .61, .12, (1, .20), fm=2.3, ratio=.51)
        sound.air(.01, .42, .06, low=100, high=1500)
        sound.space(.10, .05)
    elif index == 3:
        for start, pan in [(.009, -.2), (.068, .10), (.143, .18)]:
            sound.tick(start, .07, pan)
        sound.tone(145, 370, .015, .48, .31, (1, .12, .15), fm=.5, ratio=2.07)
        sound.air(.07, .50, .08, low=320, high=2400)
        sound.space(.07, .08)
    elif index == 4:
        sound.air(.005, .30, .15, reverse=True, low=160, high=4900)
        sound.tone(250, 140, .015, .32, .15, (1, .22), fm=.9)
        for frequency, pan in [(180, -.22), (270, .23), (540, -.1), (810, .12)]:
            sound.tone(frequency * .86, frequency, .18, .82, .14, (1, .04), pan=pan, attack=.11, release=.43)
        sound.air(.20, .58, .08, low=600, high=5800)
        sound.space(.22, .32)
    elif index == 5:
        for grain in range(16):
            start = .012 + .31 * (grain / 15) ** .72
            frequency = [290, 430, 580, 870][grain % 4]
            sound.tone(frequency * .94, frequency, start, start + .10, .075, (1, .06), pan=sound.rng.uniform(-.28, .28), attack=.018, release=.065, fm=.45)
        sound.tone(215, 290, .02, .54, .19, (1, .14), attack=.07)
        sound.air(.02, .47, .035, low=950, high=4100)
        sound.space(.12, .15)
    elif index == 6:
        sound.air(.005, .43, .17, low=750, high=5800, pan=np.sin(time * 6) * .16)
        sound.tone(410, 780, .025, .46, .10, (1, .06), fm=.15, release=.20)
        sound.tone(160, 200, .01, .36, .17, (1, .08), release=.13)
        sound.space(.09, .17)
    elif index == 7:
        sound.tone(72, 122, .005, .48, .43, (1, .42, .15), fm=.40, attack=.04, release=.20)
        sound.air(.06, .49, .17, low=90, high=3200)
        sound.tone(360, 510, .16, .68, .09, (1, .1), attack=.08, release=.31)
        sound.space(.15, .10)
    elif index == 8:
        envelope = sound.envelope(.008, .78, .045, .42)
        progress = smooth(time / .37)
        for frequency, offset, gain, pan in [(245, .035, .19, -.14), (367.5, -.026, .14, .16), (612.5, .017, .09, -.20), (980, -.012, .045, .20)]:
            phase = np.cumsum(frequency * (1 + offset * (1 - progress))) * 2 * np.pi / RATE
            sound.add(np.sin(phase) * envelope, gain, pan)
        sound.air(.03, .36, .035, low=1600, high=6400)
        sound.space(.19, .20)
    elif index == 9:
        sound.tone(235, 84, .005, .51, .28, (1, .31, .10), fm=.8, ratio=.502)
        sound.tone(310, 680, .05, .65, .13, (1, .12), attack=.055, release=.32)
        sound.air(.06, .50, .11, low=200, high=3700, pan=-.10)
        sound.space(.24, .25)
    else:
        sound.tone(175, 246, .005, .39, .25, (1, .16, .035), attack=.018, release=.16)
        sound.tone(492, 492, .09, .49, .045, (1,), pan=.10, attack=.07, release=.27)
        sound.air(.012, .32, .035, low=450, high=2100)
        sound.space(.07, .05)
    return sound.finish()


def write_wave(path, signal):
    with wave.open(str(path), 'wb') as output:
        output.setnchannels(2)
        output.setsampwidth(2)
        output.setframerate(RATE)
        output.writeframes(np.round(signal * 32767).astype('<i2').tobytes())


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    tracks = []
    for index, (identifier, title, description, duration) in enumerate(OPTIONS, 1):
        signal = render(index, duration)
        write_wave(OUTPUT / (identifier + '.wav'), signal)
        mono = signal.mean(axis=1)
        frequencies = np.fft.rfftfreq(len(mono), 1 / RATE)
        spectrum = np.abs(np.fft.rfft(mono)) ** 2
        track = {'id': identifier, 'number': index, 'title': title, 'description': description, 'durationMs': round(duration * 1000), 'src': 'audio/' + identifier + '.wav', 'sampleRate': RATE, 'channels': 2, 'peakDbfs': round(float(20 * np.log10(np.max(np.abs(signal)))), 2), 'rmsDbfs': round(float(20 * np.log10(np.sqrt(np.mean(signal ** 2)))), 2), 'spectralCentroidHz': round(float(np.sum(frequencies * spectrum) / np.sum(spectrum))), 'clippedSamples': int(np.count_nonzero(np.abs(signal) >= 1))}
        if not np.all(np.isfinite(signal)) or track['clippedSamples'] or abs(mono[0]) > .00001 or abs(mono[-1]) > .00001:
            raise RuntimeError('Invalid waveform: ' + identifier)
        tracks.append(track)
    (OUTPUT.parent / 'tracks.json').write_text(json.dumps(tracks, ensure_ascii=False, indent=2))
    with zipfile.ZipFile(OUTPUT.parent / 'sound-options.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
        for track in tracks:
            archive.write(OUTPUT.parent / track['src'], Path(track['src']).name)
        archive.write(OUTPUT.parent / 'tracks.json', 'tracks.json')
    print(json.dumps({'tracks': len(tracks), 'sampleRate': RATE, 'clips': sum(track['clippedSamples'] for track in tracks), 'method': 'original layered procedural synthesis; no film samples'}, ensure_ascii=False))


if __name__ == '__main__':
    main()
