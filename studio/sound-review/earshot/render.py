import argparse
import json
from pathlib import Path
import sys

import numpy as np
import soundfile as sf
from scipy.signal import butter, sosfilt
from reverse_exits import reverse_exit

parser = argparse.ArgumentParser()
parser.add_argument('--earshot', required=True, type=Path)
parser.add_argument('--only-new', action='store_true')
parser.add_argument('--clean-retained', action='store_true')
args = parser.parse_args()
sys.path.insert(0, str(args.earshot.resolve()))
from earshot.forge import bank

ROOT = Path(__file__).parent
RATE = 48000


def cue(sound, at, duration, level=1, pitch=None, clean=False):
    return dict(sound=sound, at=at, duration=duration, level=level, pitch=pitch, clean=clean)


presets = [
    ('01', '轻航', '柔和气流，接一声低亮确认。', [cue('swish/soft', 0, .30, .75), cue('notify/m1', .22, .32, .50, 'E5')], cue('pro_zip/down_warm', 0, .22, .8)),
    ('02', '清透', '清晰扫动，接一声玻璃质地的确认。', [cue('whoosh_fast/crisp', 0, .34, .70), cue('notify/m5', .24, .42, .60, 'G5')], cue('swish/soft', 0, .22, .8)),
    ('03', '能量展开', '上行扫描、低频落点、短音锁定。', [cue('pro_zip/arc', 0, .28, .65, 'E5'), cue('pro_pop_in/deep', .19, .16, .65), cue('notify/m5', .43, .27, .45, 'G5')], cue('pro_zip/down', 0, .23, .75, 'E4')),
    ('04', '磁悬', '低重气流，接一段圆润的电子上行。', [cue('whoosh_fast/heavy', 0, .34, .65), cue('pro_zip/up', .23, .30, .55, 'C5')], cue('pro_zip/down_warm', 0, .26, .75)),
    ('05', '晶体', '纤细扫动，接一声短促晶体共鸣。', [cue('swish/zing', 0, .28, .55), cue('notify/m3', .22, .43, .6, 'E5')], cue('pro_pop_in/round', 0, .18, .7)),
    ('06', '柔性座舱', '短空气感，接柔和拨弦，保留温润尾音。', [cue('swish/soft', 0, .28, .60), cue('pluck/kalimba_soft', .23, .42, .70, 'E5')], cue('swish/stick', 0, .21, .65)),
    ('07', '三拍脉冲', '轻触唤醒、弧形扫描、短音确认。', [cue('pro_pop_in/round', 0, .15, .6), cue('pro_zip/arc', .15, .27, .55, 'G5'), cue('pro_notify/ding_2045', .42, .29, .45, 'C6')], cue('pro_zip/down_warm', 0, .20, .70)),
    ('08', '空间唤醒', '反向吸入，接一声带低频底座的电子共鸣。', [cue('whoosh_fast/reverse', 0, .31, .55), cue('pro_logo_sting/chirp_hum', .24, .40, .65)], cue('pro_zip/down', 0, .26, .70, 'C4')),
    ('09', '极简电子', '克制的上行电子音，接清脆短拨弦。', [cue('pro_zip/up', 0, .25, .50, 'G4'), cue('pluck/kalimba', .23, .36, .70, 'G5')], cue('pro_pop_in/airy', 0, .17, .65)),
    ('10', '舰桥', '低频扫动、能量落点、共鸣锁定。', [cue('whoosh_fast/heavy', 0, .30, .6), cue('pro_pop_in/deep', .18, .17, .65), cue('pluck/kalimba_ring', .42, .40, .55, 'C5')], cue('pro_zip/down_warm', 0, .28, .80)),
]

new_groups = [
    ('连续展开', [
        ('星幕', '连续的清亮泛音，缓缓展开并收住。', [cue('shimmer/m4', 0, .82, .7, 'D')]),
        ('微光', '细密的高处共鸣，起势轻、余音短。', [cue('pro_shimmer/m1', 0, .72, .65, 'E')]),
        ('光环', '一段连续的晶体泛音，向外舒展。', [cue('pro_shimmer/m0', 0, .94, .7, 'C')]),
        ('光场', '共鸣由疏到密展开，尾部自然消散。', [cue('pro_shimmer/m4', 0, 1.02, .65, 'G')]),
        ('银弧', '短促的旋律光泽，连续掠过画面。', [cue('pro_shimmer/m3', 0, .78, .55, 'D')]),
        ('星轨', '更长的连续泛音，保留清透的延展感。', [cue('shimmer/m4', 0, 1.12, .65, 'A')]),
    ]),
    ('清透电子', [
        ('清澈确认', '一声柔亮电子共鸣，完整起落。', [cue('notify/m0', 0, .55, .7, 'E5')]),
        ('玻璃信号', '一声偏高的玻璃共鸣，干净利落。', [cue('notify/m3', 0, .48, .65, 'G5')]),
        ('双层共振', '中高两层同时发声，尾音稍微错开。', [cue('notify/m2', 0, .58, .55, 'C5'), cue('notify/m5', .035, .52, .4, 'G5')]),
        ('开阔五度', '两个音分开进入，留出舒展的音程。', [cue('notify/m1', 0, .42, .55, 'D5'), cue('notify/m4', .23, .46, .5, 'A5')]),
        ('清亮锁定', '一声细亮提示，接更柔和的共鸣。', [cue('pro_notify/ding_2045', 0, .22, .4, 'C6'), cue('notify/m0', .2, .46, .65, 'G5')]),
        ('温和回响', '单个中音起势，保留圆润余韵。', [cue('notify/m4', 0, .62, .7, 'A4')]),
    ]),
    ('短旋律', [
        ('三音开启', '三个清亮短音逐次抬升，轻快确认。', [cue('notify/m1', 0, .28, .5, 'C5'), cue('notify/m1', .16, .3, .55, 'E5'), cue('notify/m1', .35, .4, .6, 'G5')]),
        ('四音舒展', '四个拨弦音依次展开，收在高音。', [cue('pluck/kalimba_soft', 0, .3, .5, 'D5'), cue('pluck/kalimba_soft', .12, .3, .5, 'A5'), cue('pluck/kalimba_soft', .26, .32, .55, 'D6'), cue('pluck/kalimba_soft', .43, .42, .55, 'E6')]),
        ('短促琶音', '三个短音紧凑展开，干净收尾。', [cue('pro_notify/ding_1822', 0, .19, .4, 'E5'), cue('pro_notify/ding_1930', .1, .21, .4, 'G5'), cue('pro_notify/ding_2045', .22, .27, .45, 'C6')]),
        ('柔和回落', '由高到中三个音，平缓落定。', [cue('notify/m5', 0, .31, .45, 'G5'), cue('notify/m5', .2, .32, .5, 'E5'), cue('notify/m5', .42, .42, .55, 'C5')]),
        ('五音涟漪', '五个轻音连续流过，保留细小音程。', [cue('pluck/kalimba_soft', index * .11, .38, .4 + index * .025, pitch) for index, pitch in enumerate(['C5', 'D5', 'E5', 'G5', 'A5'])]),
        ('悬浮音程', '三个间隔稍大的音，带一点悬而未落的感觉。', [cue('notify/m2', 0, .38, .5, 'D5'), cue('notify/m2', .22, .4, .5, 'E5'), cue('notify/m2', .46, .43, .55, 'A5')]),
    ]),
    ('柔性拨弦', [
        ('轻触', '一声柔软拨弦，不附加扫气与冲击。', [cue('pluck/kalimba_soft', 0, .5, .7, 'E5')]),
        ('清拨', '一声稍亮的拨弦，边缘更清楚。', [cue('pluck/kalimba', 0, .54, .65, 'G5')]),
        ('双弦', '两个柔软拨弦错开进入，轻轻落定。', [cue('pluck/kalimba_soft', 0, .43, .6, 'D5'), cue('pluck/kalimba_ring', .21, .52, .5, 'A5')]),
        ('叠弦', '三层拨弦紧邻进入，组成一个完整和弦。', [cue('pluck/kalimba_soft', 0, .5, .5, 'C5'), cue('pluck/kalimba_soft', .025, .5, .4, 'E5'), cue('pluck/kalimba_ring', .055, .58, .4, 'G5')]),
        ('晶弦交接', '柔软拨弦接一声清亮确认，前后有质地差异。', [cue('pluck/kalimba_soft', 0, .4, .6, 'G5'), cue('notify/m3', .24, .46, .45, 'D6')]),
        ('深一点的柔音', '使用中低音域拨弦，保持明确音高与柔软尾音。', [cue('pluck/kalimba_soft', 0, .62, .65, 'G4')]),
    ]),
    ('音头与共鸣', [
        ('清音入场', '短音先进入，接一声柔亮确认。', [cue('notify/m1', 0, .27, .4, 'B4'), cue('notify/m2', .2, .45, .6, 'E5')]),
        ('光点与弦', '一声轻亮音头，接短拨弦的清晰触感。', [cue('notify/m5', 0, .25, .35, 'A5'), cue('pluck/kalimba_soft', .22, .48, .65, 'D5')]),
        ('共鸣展开', '先有一个清晰音头，再向连续泛音交接。', [cue('notify/m0', 0, .28, .5, 'G5'), cue('pro_shimmer/m1', .18, .66, .4, 'G')]),
        ('连续双音', '轻亮音头之后，两声短音连续落定。', [cue('pluck/kalimba_soft', 0, .25, .3, 'A4'), cue('notify/m1', .17, .3, .5, 'D5'), cue('notify/m5', .36, .4, .5, 'A5')]),
        ('弦与微光', '柔软拨弦慢慢融入连续的晶体共鸣。', [cue('pluck/kalimba_soft', 0, .4, .55, 'C5'), cue('shimmer/m4', .16, .8, .35, 'C')]),
        ('清透收束', '连续泛音展开后，用一个短音结束。', [cue('pro_shimmer/m0', 0, .7, .4, 'E'), cue('notify/m5', .48, .4, .55, 'E5')]),
    ]),
]
styles = {}
for group, items in new_groups:
    for name, description, events in items:
        number = str(11 + len(styles))
        styles[number] = group
        for event in events:
            event['clean'] = True
        exit_sound = ['notify/m1', 'notify/m5', 'pluck/kalimba_soft'][int(number) % 3]
        exit_pitch = ['C5', 'D5', 'E5', 'G5'][int(number) % 4]
        presets.append((number, name, description, events, cue(exit_sound, 0, .22, .6, exit_pitch, clean=True)))

retained = {
    '02': ('清亮音头接玻璃共鸣，已去掉扫气噪声。', [cue('notify/m2', 0, .24, .4, 'D5', True), cue('notify/m5', .24, .42, .6, 'G5', True)], cue('notify/m2', 0, .22, .6, 'D5', True)),
    '06': ('柔软拨弦前后交接，已去掉气流与摩擦声。', [cue('pluck/kalimba_soft', 0, .24, .4, 'B4', True), cue('pluck/kalimba_soft', .23, .42, .7, 'E5', True)], cue('pluck/kalimba_soft', 0, .21, .6, 'E4', True)),
    '08': ('连续晶体共鸣接一个清晰音头，已去掉吸气与低频底座。', [cue('pro_shimmer/m1', 0, .32, .45, 'G5', True), cue('notify/m0', .24, .4, .6, 'D5', True)], cue('notify/m0', 0, .26, .6, 'D5', True)),
    '09': ('清亮电子音接短拨弦，已去掉滑频的粗糙感。', [cue('notify/m5', 0, .25, .5, 'G4', True), cue('pluck/kalimba', .23, .36, .7, 'G5', True)], cue('pluck/kalimba_soft', 0, .17, .6, 'G4', True)),
    '10': ('清晰唤醒、柔和确认、共鸣锁定，已去掉低频扑响。', [cue('notify/m2', 0, .26, .45, 'G4', True), cue('pluck/kalimba_soft', .18, .17, .5, 'G5', True), cue('pluck/kalimba_ring', .42, .4, .55, 'C5', True)], cue('notify/m2', 0, .28, .6, 'G4', True)),
}
presets = [(number, name, *(retained[number] if number in retained else (description, events, leave))) for number, name, description, events, leave in presets]


def render_event(event):
    options = dict(dur=event['duration'], checks=True, seed=110)
    if event['pitch']:
        options['pitch'] = event['pitch']
    sound = bank.get(event['sound'])
    edits = {}
    if event.get('clean'):
        quiet = dict(g_noise=0, sizzle=-80, skin_lvl=0, knock_lvl=0, rumble=0, box_lvl=0, air_db=-80, floor_db=-90, strike=-80, tick_db=-80, c_mallet=-80, c_sub=0, air=-80, body_db=-80, drive=0, head_drive=0)
        edits = {key: value for key, value in quiet.items() if key in sound['params']}
        sound['params'].update(edits)
    if sound['recipe'] == 'shimmer' and options.get('pitch') and len(options['pitch']) == 1:
        options['pitch'] += '5'
    audio, meta = bank.render(sound, **options)
    meta['sourceEdits'] = edits
    if audio.ndim == 2:
        audio = audio.mean(axis=1)
    envelope = np.sqrt(np.convolve(audio.astype(float) ** 2, np.ones(240) / 240, 'same'))
    start = np.flatnonzero(envelope > envelope.max() * .08)
    lead = max(0, int(start[0]) - 96) if start.size else 0
    audio = audio[lead:]
    cutoff = 280 if event.get('clean') else 70
    audio = sosfilt(butter(2, [cutoff, 6500], btype='bandpass', fs=RATE, output='sos'), audio)
    fade_in = min(144, len(audio) // 4)
    fade_out = min(1200, len(audio) // 4)
    audio[:fade_in] *= np.linspace(0, 1, fade_in)
    audio[-fade_out:] *= np.linspace(1, 0, fade_out)
    return audio * event['level'], meta


def compose(events, path, single=False):
    result = np.zeros(int((max(event['at'] + event['duration'] for event in events) + .025) * RATE))
    report = []
    for event in events:
        audio, meta = render_event(event)
        if single and meta['checks']['layers']['count'] > 1:
            raise ValueError(f"Exit must have one attack: {event['sound']}")
        offset = round(event['at'] * RATE)
        result[offset:offset + len(audio)] += audio[:len(result) - offset]
        report.append(dict(**event, sourceEdits=meta.get('sourceEdits', {}), audit=meta['checks']))
    result -= result.mean()
    rms = np.sqrt(np.mean(result ** 2))
    result *= min(10 ** (-23 / 20) / max(rms, 1e-9), 10 ** (-6 / 20) / max(abs(result).max(), 1e-9))
    result[:96] *= np.linspace(0, 1, 96)
    result[-480:] *= np.linspace(1, 0, 480)
    sf.write(path, result, RATE, subtype='PCM_16')
    return dict(durationMs=round(len(result) / RATE * 1000), peakDb=round(20 * np.log10(max(abs(result).max(), 1e-9)), 2), rmsDb=round(20 * np.log10(np.sqrt(np.mean(result ** 2))), 2), events=report)


(ROOT / 'audio').mkdir(exist_ok=True)
existing = {entry['id']: entry for entry in json.loads((ROOT / 'presets.json').read_text(encoding='utf-8'))} if args.only_new else {}
manifest = []
for number, name, description, enter, leave in presets:
    if args.only_new and number in existing and int(number) <= 10 and not (args.clean_retained and number in retained):
        entry = existing[number]
        reverse_exit(ROOT, entry)
        manifest.append(entry)
        continue
    entry = dict(id=number, name=name, description=description, beats=len(enter), group=styles.get(number, '上轮候选'), round=2 if number in styles else 1, cleaned=number in retained or number in styles, enter=f'audio/{number}-on.wav', exit=f'audio/{number}-off.wav', cues=enter)
    entry['enterAudit'] = compose(enter, ROOT / entry['enter'])
    reverse_exit(ROOT, entry)
    manifest.append(entry)
    print(number, name, entry['enterAudit']['durationMs'], entry['exitAudit']['durationMs'])
(ROOT / 'presets.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2, default=lambda value: value.item()), encoding='utf-8')
