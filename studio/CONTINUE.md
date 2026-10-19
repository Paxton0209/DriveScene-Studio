# 换电脑接续

本轮工程位于GitHub仓库 `Paxton0209/DriveScene-Studio` 的 `preview/three-column-20261018` 分支、`studio/`目录。不要用仓库根目录的正式版替代本轮工程，不自动合并或覆盖 `main`。

## 启动

```sh
git clone --branch preview/three-column-20261018 --single-branch https://github.com/Paxton0209/DriveScene-Studio.git
cd DriveScene-Studio/studio
python3 -m http.server 8034 --bind 127.0.0.1
```

已有克隆时先检查当前分支和本地修改，再拉取该预览分支；不要对有修改的目录执行硬重置。Windows可用 `py -m http.server 8034 --bind 127.0.0.1`。已提交运行bundle，直接浏览不需要先构建。改源代码时执行 `npm ci`、`npm test`、`npm run build`。

工作台：`http://127.0.0.1:8034/?layout=triple`。十案声音试听：`http://127.0.0.1:8034/sound-review/`。声音页有配合400ms智驾开启的预览，以及全部WAV下载；到公司后按01–10编号选择，目前未选定或替换正式音效。

## 当前有效参数

智驾开启为B「柔和推开」flow、400ms，关闭144ms，沿用单一连续前沿。选中层320ms、toggle224ms；支持从当前位置中断接续。左侧tab相对finish-62夸张版先降30%再降20%，累计形变量为该版56%；右侧segment保留该版85%；右侧toggle先降15%再降10%，累计76.5%。本轮只收弱形变，不改变位移中心轨迹或总时长。

路面保持平整、暖光为0，不加横向亮度渐变，不给智驾线额外地面蓝色光池。本轮在深色干燥地面光照末端收掉环境反射/照明的偏蓝，保留亮度和明暗层次；浅色与水面、草木、车模、智驾线配色不改。对应路面RGB从约(35.62,39.63,44.15)变为(39.13,39.13,39.13)，检查的12个深浅位置在Path开关前后RGB不变。截图箭头附近光标自身还带显示光晕，需要与原始canvas分开判断。

主界面仍保留原启用音，十个新候选完全独立，等待用户在公司试听选择。新候选是原创程序合成样音，研究来源和制作方法见 `sound-review/README.md`，不是影片原声采样或已完成车内声学验证的量产提示音。

## 继续修改的位置

界面状态与事件：`study.js`；布局与样式：`study.css`；弹性形变和弹层：`ui-motion.js`。智驾节奏：`engine/path-motion.js`和`engine/version-features.js`；真实渲染：`engine/world.js`、`engine/environment-finish.js`；启用声音接入：`engine/theme-sound.js`。候选试听：`sound-review/`；可重建音频的生成器：`scripts/make-sound-options.py`，依赖Python与NumPy。

不要因用户后续想再微调形变或声音而重新修改路面光照。首次匝道冷准备曾记录一次约66.6ms主线程长帧，尚未彻底消除；现有浏览器动画可独立驱动选中层，但不能据此宣称所有设备零掉帧。对照 `docs/PERFORMANCE.md` 中的验证范围，继续以真实工作台的录帧及用户反馈为准。
