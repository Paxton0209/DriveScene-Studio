"""Option 08 refinements and a labeled reference edit. Does not touch workbench audio."""
from pathlib import Path
import importlib.util
import json
import wave
import zipfile
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'sound-review' / '08'
spec = importlib.util.spec_from_file_location('sound_options', Path(__file__).with_name('make-sound-options.py'))
base = importlib.util.module_from_spec(spec)
spec.loader.exec_module(base)
RATE = base.RATE
CONFIGS = [
    dict(id='08a-soft', label='08A', title='柔和收束', duration=.60, settle=.28, detune=.55, attack=.025, release_start=.38, end=.58, air=.012, space=.07, spread=.08,
         description='保留原版层次；失谐减弱45%，更少气流和空间尾音。'),
    dict(id='08b-clear', label='08B', title='清晰确认', duration=.52, settle=.22, detune=.32, attack=.018, release_start=.36, end=.50, air=.006, space=.035, spread=.04,
         description='起音更明确，音色更快稳定；进一步缩短余韵。'),
    dict(id='08c-minimal', label='08C', title='克制短音', duration=.46, settle=.18, detune=.18, attack=.014, release_start=.35, end=.44, air=0, space=0, spread=0,
         description='保留08的和声骨架；去掉气流和混响，落位后迅速收尾。'),
]
LIVELY = [
    dict(id='08d-two-tone', label='08D', title='轻双音', duration=.54,
         description='两个相接的轻音向上走一步；第二个音展开后落定。'),
    dict(id='08e-pitch-arc', label='08E', title='上扬收束', duration=.60,
         description='一口气轻轻上扬，再小幅回落；保留08的和声流动。'),
    dict(id='08f-bright-response', label='08F', title='明亮应答', duration=.52,
         description='柔和起音后接一个清亮回应；短尾音跟随智驾线收束。'),
]
CLEAN = [
    dict(id='08g-clear-pair', label='08G', title='清亮双音', duration=.44,
         description='音区抬高，两个短音清楚上行；第二声随智驾线落位，干净收尾。'),
]
DISTINCT = [
    dict(id='08h-light-confirm', label='08H', title='轻触确认', duration=.44,
         description='前轻后舒展，两声上行拉开音程；淡去蜂鸣感，随智驾线完成确认。'),
]
SINGLE = [
    dict(id='08i-single-spark', label='08I', title='轻弹微光', duration=.43,
         description='一次轻弹，音色短暂透亮后自然收住；单次起音，随智驾线展开。'),
]
PURE = [
    dict(id='08j-pure-touch', label='08J', title='清透落位', duration=.60,
         description='一个清楚的轻触主音，轻尾音自然消退；减少持续嗡鸣，配合0.6秒智驾线。'),
]
TUNED = [
    dict(id='08k-gentle-tone', label='08K', title='柔亮单音', duration=.45, frequency=440, attack=.016, harmonic=.012, level=.89, decay=.20, release_start=.290, release_end=.445,
         description='音调降低，起音更柔和、音量轻降；单音自然收尾，与450ms智驾线同步。'),
]

def read_wave(path):
    with wave.open(str(path), 'rb') as f:
        assert f.getnchannels() == 2 and f.getframerate() == RATE
        return np.frombuffer(f.readframes(f.getnframes()), '<i2').reshape(-1, 2) / 32767

def render(config, target_rms):
    sound = base.Design(config['duration'], 6408)
    t = sound.time
    settle = base.smooth(t / config['settle'])
    envelope = base.smooth(t / config['attack']) * (1-base.smooth((t-config['release_start'])/(config['end']-config['release_start'])))
    envelope *= .80 + .20 * base.smooth(t / .32)
    for frequency, offset, gain, pan in [(245,.035,.19,-.14),(367.5,-.026,.14,.16),(612.5,.017,.09,-.20),(980,-.012,.045,.20)]:
        phase = np.cumsum(frequency*(1+offset*config['detune']*(1-settle))) * 2*np.pi/RATE
        sound.add(np.sin(phase)*envelope, gain, pan*config['spread']/.20)
    if config['air']:
        sound.air(.015, .28, config['air'], low=1600, high=4400)
    if config['space']:
        sound.space(config['space'], config['spread'])
    signal = sound.finish()
    signal *= target_rms / np.sqrt(np.mean(signal[:round(.4*RATE)]**2))
    if np.max(np.abs(signal)) > .48:
        raise ValueError('Peak limit exceeded')
    return signal

def render_lively(config, target_rms):
    sound = base.Design(config['duration'], 6408)
    t = sound.time
    def env(start, attack, release_start, end):
        return base.smooth((t-start)/attack)*(1-base.smooth((t-release_start)/(end-release_start)))
    def layer(root, envelope, gain=1, brightness=None, pan=.0):
        # Preserve 08's 1 : 1.5 : 2.5 : 4 partial skeleton, with more upper-partial motion.
        for index, (ratio, weight) in enumerate([(1,.15),(1.5,.13),(2.5,.105),(4,.05)]):
            detune=[.006,-.004,.003,-.002][index]*(1-base.smooth(t/.16))
            frequency=np.asarray(root)*ratio*(1+detune)
            if frequency.ndim==0:frequency=np.full_like(t,frequency)
            phase=np.cumsum(frequency)*2*np.pi/RATE
            color=1 if brightness is None or index<2 else brightness
            sound.add(np.sin(phase)*envelope*color, weight*gain, pan*(-1 if index%2 else 1))
    if config['id']=='08d-two-tone':
        # Whole-step rise; overlap avoids a hard gap while leaving two recognizable gestures.
        layer(245,env(.0,.012,.095,.225),.85,pan=.025)
        layer(275,env(.135,.021,.355,.515),1,pan=.04)
    elif config['id']=='08e-pitch-arc':
        root=245*(1+.16*base.smooth(t/.21)-.045*base.smooth((t-.21)/.12))
        brightness=.55+.60*np.exp(-((t-.19)/.105)**2)
        layer(root,env(.0,.02,.36,.575),1,brightness,pan=.04)
        sound.space(.025,.04)
    else:
        root=245*(1+.05*base.smooth(t/.22))
        brightness=.45+.45*base.smooth(t/.20)
        layer(root,env(.0,.015,.28,.46),.90,brightness,pan=.025)
        # A quiet upper-partial answer at 240ms; no repeated alarm rhythm or noise sweep.
        response=env(.235,.018,.355,.495)
        phase=np.cumsum(735*(1+.018*(1-base.smooth((t-.235)/.10))))*2*np.pi/RATE
        sound.add(np.sin(phase)*response,.10,.035)
        sound.add(np.sin(phase*1.5)*response,.028,-.035)
    signal=sound.finish()
    signal*=target_rms/np.sqrt(np.mean(signal[:round(.4*RATE)]**2))
    if np.max(np.abs(signal))>.48:raise ValueError('Peak limit exceeded')
    return signal

def render_clean_pair(config, target_rms):
    t = np.arange(round(config['duration'] * RATE)) / RATE
    mono = np.zeros_like(t)
    for frequency, start, end, decay, gain in [(349.228, 0, .155, .17, 1), (391.995, .18, .42, .20, .96)]:
        local = np.maximum(t-start, 0)
        envelope = base.smooth((t-start)/.010) * np.exp(-local/decay)
        envelope *= 1-base.smooth((t-(end-.045))/.045)
        phase = 2*np.pi*frequency*local
        # Fixed pitches and harmonic partials only: no glide, detune, subharmonics or reverb.
        tone = np.sin(phase)
        tone += .14*np.exp(-local/.045)*np.sin(2*phase)
        tone += .025*np.exp(-local/.018)*np.sin(3*phase)
        mono += gain*envelope*tone
    signal = np.column_stack((mono, mono))
    signal *= target_rms/np.sqrt(np.mean(signal[:round(.4*RATE)]**2))
    if np.max(np.abs(signal)) > .48:
        raise ValueError('Peak limit exceeded')
    return signal

def render_light_confirm(config, target_rms):
    t = np.arange(round(config['duration'] * RATE)) / RATE
    mono = np.zeros_like(t)
    # A minor-third rise and short/long articulation distinguish this from the reference's whole step.
    for frequency, start, end, attack, decay, gain in [(440, 0, .12, .009, .085, .72), (523.251, .145, .415, .015, .155, 1)]:
        local = np.maximum(t-start, 0)
        envelope = base.smooth((t-start)/attack) * np.exp(-local/decay)
        envelope *= 1-base.smooth((t-(end-.065))/.065)
        phase = 2*np.pi*frequency*local
        # A very quiet, fast-damping strike adds a rounded touch without a sustained synth layer.
        tone = np.sin(phase) + .025*np.exp(-local/.022)*np.sin(2*phase)
        tone += .012*np.exp(-local/.009)*np.sin(2.73*phase)
        mono += gain*envelope*tone
    signal = np.column_stack((mono, mono))
    signal *= target_rms/np.sqrt(np.mean(signal[:round(.4*RATE)]**2))
    if np.max(np.abs(signal)) > .48:
        raise ValueError('Peak limit exceeded')
    return signal

def render_single_spark(config, target_rms):
    t = np.arange(round(config['duration'] * RATE)) / RATE
    # One uninterrupted gesture: a single attack and a fixed pitch, with a small timbral bloom.
    envelope = base.smooth(t/.012) * np.exp(-t/.22)
    envelope *= 1-base.smooth((t-.275)/.130)
    phase = 2*np.pi*523.251*t
    bloom = base.smooth(t/.065) * np.exp(-t/.075)
    mono = np.sin(phase)
    mono += (.018*np.exp(-t/.026)+.11*bloom)*np.sin(2*phase)
    # Quiet, fast-damping resonances soften the oscillator's otherwise uniform edge.
    mono += .022*np.exp(-t/.018)*np.sin(2.76*phase)
    mono += .007*np.exp(-t/.009)*np.sin(4.07*phase)
    mono *= envelope
    signal = np.column_stack((mono, mono))
    signal *= target_rms/np.sqrt(np.mean(signal[:round(.4*RATE)]**2))
    if np.max(np.abs(signal)) > .48:
        raise ValueError('Peak limit exceeded')
    return signal

def render_tesla_merge(target_rms):
    reference = read_wave(OUT/'references/tesla-community.wav')
    signal = np.zeros((round(.43*RATE), 2))
    # Align the recorded attacks (about 65ms and 325ms), retaining both original pitches.
    # No resynthesis, pitch shift or time stretch: only crop, overlap, fades and level matching.
    for start, end in [(.060, .315), (.320, .720)]:
        segment = reference[round(start*RATE):round(end*RATE)].copy()
        local = np.arange(len(segment))/RATE
        fade = base.smooth(local/.005) * (1-base.smooth((local-(len(segment)/RATE-.035))/.035))
        signal[:len(segment)] += .5*segment*fade[:, None]
    t = np.arange(len(signal))/RATE
    signal *= (1-base.smooth((t-.365)/.040))[:, None]
    signal *= target_rms/np.sqrt(np.mean(signal[:round(.4*RATE)]**2))
    if np.max(np.abs(signal)) > .48:
        raise ValueError('Peak limit exceeded')
    return signal

def render_pure_touch(config, target_rms):
    t = np.arange(round(config['duration']*RATE))/RATE
    # One pitch and one attack; remove the close-pitch overlap responsible for rough beating.
    phase = 2*np.pi*config.get('frequency',554.365)*t
    envelope = base.smooth(t/config.get('attack',.009))*np.exp(-t/config.get('decay',.26))*(1-base.smooth((t-config.get('release_start',.430))/(config.get('release_end',.595)-config.get('release_start',.430))))
    mono = (np.sin(phase)+config.get('harmonic',.025)*np.exp(-t/.024)*np.sin(2*phase))*envelope
    signal = np.column_stack((mono,mono))
    signal *= config.get('level',1)*target_rms/np.sqrt(np.mean(signal[:round(.4*RATE)]**2))
    if np.max(np.abs(signal))>.48:
        raise ValueError('Peak limit exceeded')
    return signal

def main():
    (OUT/'audio').mkdir(parents=True, exist_ok=True)
    original = read_wave(ROOT/'sound-review/audio/08-crystal-cohere.wav')
    target = float(np.sqrt(np.mean(original[:round(.4*RATE)]**2)))
    tracks = [dict(id='08-original', number=8, label='08', title='原版 · 晶体聚合', durationMs=900,
                   description='原始对照；保留900ms时长和原有空间尾音。',src='../audio/08-crystal-cohere.wav', kind='original')]
    for config in CONFIGS+LIVELY+CLEAN+DISTINCT+SINGLE+PURE+TUNED:
        lively=config in LIVELY
        clean=config in CLEAN
        distinct=config in DISTINCT
        single=config in SINGLE
        tuned=config in TUNED
        pure=config in PURE or tuned
        signal = render_pure_touch(config,target) if pure else render_single_spark(config,target) if single else render_light_confirm(config,target) if distinct else render_clean_pair(config,target) if clean else render_lively(config,target) if lively else render(config,target)
        if not np.all(np.isfinite(signal)) or np.any(np.abs(signal[[0,-1]])>1e-6):
            raise ValueError('Invalid waveform')
        base.write_wave(OUT/'audio'/f"{config['id']}.wav", signal)
        tracks.append(dict(id=config['id'],number=8,label=config['label'],title=config['title'],description=config['description'],
                           src=f"audio/{config['id']}.wav",durationMs=round(config['duration']*1000),kind='original-refinement',
                           round=8 if tuned else 7 if pure else 5 if single else 4 if distinct else 3 if clean else 2 if lively else 1,animationMs=450 if tuned else 600 if pure else 400,sampleRate=RATE,channels=2,
                           coreRmsDbfs=round(float(20*np.log10(np.sqrt(np.mean(signal[:round(.4*RATE)]**2)))),3),
                           peakDbfs=round(float(20*np.log10(np.max(np.abs(signal)))),3),clippedSamples=0))
    merged = render_tesla_merge(target)
    if not np.all(np.isfinite(merged)) or np.any(np.abs(merged[[0,-1]])>1e-6):
        raise ValueError('Invalid merged waveform')
    base.write_wave(OUT/'audio/tesla-two-tone-merged.wav', merged)
    tracks.append(dict(id='tesla-two-tone-merged', number=0, label='T合', title='特斯拉双音合并 · 实验',
                       description='参考录音两声对齐起音后叠合，保留原音高与音色；仅作合并效果试听。',
                       src='audio/tesla-two-tone-merged.wav', durationMs=430, kind='reference-edit', round=6,
                       animationMs=400, sampleRate=RATE, channels=2, source='references/tesla-community.wav',
                       sourceUrl='https://www.youtube.com/watch?v=mp5MaTyXnV4',
                       sourceWindowsMs=[[60,315],[320,720]], sourceOffsetMs=[0,0],
                       coreRmsDbfs=round(float(20*np.log10(np.sqrt(np.mean(merged[:round(.4*RATE)]**2)))),3),
                       peakDbfs=round(float(20*np.log10(np.max(np.abs(merged)))),3),clippedSamples=0))
    (OUT/'tracks.json').write_text(json.dumps(tracks,ensure_ascii=False,indent=2)+'\n')
    with zipfile.ZipFile(OUT/'08-refinements.zip','w',zipfile.ZIP_DEFLATED) as z:
        for track in tracks:
            if track['kind'] != 'reference-edit':
                z.write(OUT/track['src'],Path(track['src']).name)
        z.writestr('tracks.json',json.dumps([track for track in tracks if track['kind']!='reference-edit'],ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(tracks,ensure_ascii=False,indent=2))

if __name__ == '__main__':
    main()
