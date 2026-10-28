# Earshot 智驾音效试听

来源：[Leonxlnx/earshot](https://github.com/Leonxlnx/earshot/)，检出版本 `925ebe56a1b755e5d354ab642bb8f344440cfa9c`，银行版本 `forge_v2r6+fit1+pluck1`。本页实际使用 forge 与 pluck 银行，未使用外部参考录音、fit 录音、品牌提示音或付费素材。Earshot 代码采用 MIT，原许可保存在 `EARSHOT-LICENSE.txt`。

40 组候选均通过 Earshot 的银行 ID 在本地重渲染，然后组合节拍、调整音高与电平、轻度带通、修整起尾。原有 10 组中，用户保留 02、06、08、09、10；本轮按用户要求清理这五组的开启与退出声，并新增 11–40 共 30 组。新增分为连续展开、清透电子、短旋律、柔性拨弦、音头与共鸣五类，不限制音节数量。它们属于针对本项目画面编辑的组合，不能描述为仓库内原封不动的录音。逐个银行 ID、参数、时间点与源片段审计保存在 `presets.json`。合成时采用 48 kHz 单声道 PCM16，RMS 目标 -23 dBFS、峰值上限 -6 dBFS；这是基础电平匹配，不是 LUFS 归一化。

去噪在声源层完成：关闭拨弦的 `skin_lvl`、`knock_lvl`、`box_lvl`、`rumble`，关闭共鸣的 `strike`、`tick_db`、`air`、`c_mallet`、`c_sub`、`body_db`，移除颗粒泛音的 `g_noise` 与 `sizzle`，关闭 `drive` / `head_drive` 失真。仅修改对应配方实际存在的参数；修改值逐项保存在 `sourceEdits`。随后以 280Hz 高通收掉低频残留。新版不再选用 pop / deep、低频扫气或 zip 滑频素材作为开启与退出音。上轮被排除的五组仍按原编号隐藏，用户的筛选与保存状态不重置。

画面直接复用 `engine` 的 `review=material-draft` 行驶与智驾路径，并通过 `qa=earshot-audition` 关闭引擎自带声音，避免叠放旧提示音。道路扫描运动 0–500ms，路径从 150ms 开始、500ms 铺满，扫描余光在 850ms 收完。新候选允许连续展开、和弦与短旋律，声音最迟在约 1.15s 收完；不会为了迁就更长声音修改智驾动画。完整试听等待开启尾音结束再触发退出。2026-10-20 用户明确要求退出声倒放，因此退出采用各自最终开启 WAV 的逐帧反转，时长、音高、峰值、电平和声道不变；这条要求覆盖此前的单次起音退出方案。已去除的噗声、扫气与敲击层不会重新合成。所有声音在 Web Audio 时钟上预排，画面按输出时间戳逐帧启动，避免用串联延时驱动节拍。退出动画仍使用原场景的收线时长，未把最长约 1.15s 的反向声音强行压缩到该时长，音画尾端是否需要进一步收短由用户试听验收。

## 特斯拉参考的证据边界

查阅 [Tesla Model 3 官方 Normal Operating Sounds](https://www.tesla.com/ownersmanual/model3/en_us/GUID-AA58ED67-9C93-4EE6-8B19-9FDABE018787.html) 的 Self-Driving / Autosteer 小节（2026-10-20）。官方分别提供开启与关闭提示声，并说明声音随地区、配置和软件版本可能变化。公开文字未说明两个文件是否通过波形倒放制作，本轮没有完成官方示例文件的逐样本比对，不能宣称 Tesla 原文件互为倒放。本项目的逐帧反转是按用户要求制作的独立试听处理，不复制特斯拉录音，不用于接管或故障警报。

源片段审计的共鸣、截尾提示均保留在 JSON 中，拨弦短版本另做了 25ms 淡出。上轮被排除方案的旧滑频审计保留作为记录，新版已不再选用这类素材。技术检测不能代替人耳判断，最终耐听程度和音画节拍由试听筛选确定。本页仅保存候选与排除记录，不修改工作台的正式声音选择。

## 复现

从上述版本获取 Earshot 源码，使用 Python 3.10+，安装 `numpy`、`scipy`、`soundfile`。无需下载音频模型或上传用户文件。

```sh
python render.py --earshot /absolute/path/to/earshot
```

只更新新增候选与保留的五组，保留其余旧文件时，可增加 `--only-new --clean-retained`。

只重新生成反向退出声，不改变任何开启音或筛选记录：`python3 reverse_exits.py`。脚本仅依赖 Python 标准库，按 PCM 帧反转，保持多声道的帧内顺序，`exitAudit` 保存源文件散列及方法。生成器 `render.py` 同样调用该处理，重新合成不会恢复旧退出声。

由仓库根目录启动静态服务后打开 `/studio/sound-review/earshot/`。本页依赖同源引擎，不能直接以 file URL 运行。
