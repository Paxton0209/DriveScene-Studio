# 换电脑接续

## 本地增量（2026-10-20，待提交）

当前行驶版入口为 `studio/material-draft/`，保留连续行驶、Model Y 车流和“道路扫描→智驾线”的开启节拍。该入口已恢复 Driving / Parking 文件夹分组，支持折叠与展开，移除顶部材质研究导航、参考弹层入口和底部材质注释。旧的 `studio/?layout=triple` 仍是历史静态工作台，不要误作当前行驶版。

新增 `studio/sound-review/earshot/`：原有 10 组，用户保留 02、06、08、09、10，明确要求这五组内的噗声与杂音也清掉。现已重渲染这五组的开启与退出，关闭声源中的低频扑响、敲击/摩擦/气流/噪声层与失真；不是原音不动。另新增 11–40 共 30 组，不限制音节数量，覆盖连续共鸣、电子提示、短旋律和拨弦。退出仍为单个发声事件。页面默认展示上轮保留，范围控件可切到本轮新增或全部；旧排除记录与保存不重置，恢复操作仅作用于当前范围。页面复用当前材质草稿引擎并关闭旧智驾声音，可完整试听、单听开启/退出、排除/恢复、切换深浅画面及保存当前候选。保存作用域为本机浏览器，不替换工作台声音。来源、许可、银行 ID、逐组参数与复现方式见该目录 `SOURCES.md`、`presets.json` 与 `render.py`。本机预览服务器从仓库根目录提供 `http://127.0.0.1:18034/studio/sound-review/earshot/`；若从 studio 目录启动，去掉 URL 中的 `/studio`。

验证：77 项 Node 测试通过，覆盖 40 组 / 80 个 WAV、五个保留与 30 个新增的声源去噪参数、单次退出起音、原存储键与范围控件。本轮五个去噪保留方案与五类新增各一案完成浏览器开启/退出播放，抽样音画启动偏差 3–8ms，控制台无错误。技术检查不代表最终听感或量产车内声学验收，等待用户试听排除。

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

智驾开启为B「柔和推开」flow、400ms，关闭144ms，沿用单一连续前沿。选中层320ms、toggle224ms；支持从当前位置中断接续。左侧tab相对finish-62夸张版先降30%、再降20%、再降15%，累计形变量为该版47.6%；右侧segment保留该版85%；右侧toggle先降15%再降10%，累计76.5%。本轮只收弱形变，不改变位移中心轨迹或总时长。

路面保持平整，暖光为0，不加横向亮度渐变或智驾地面蓝色光池。深色路面、建筑以origin/main 8ba6118为基准：道路#303031、金属度.08，建筑#817d7d及main的面部调色；新增environment-finish在深色干燥地面和建筑上退出，去掉后加的整体去色/压暗。浅色与草木保留当前处理。用户明确要求参照main，后续不要再仅靠去色或随意提亮处理这两类材质。

主界面仍保留原启用音，十个新候选完全独立，等待用户在公司试听选择。新候选是原创程序合成样音，研究来源和制作方法见 `sound-review/README.md`，不是影片原声采样或已完成车内声学验证的量产提示音。

## 继续修改的位置

界面状态与事件：`study.js`；布局与样式：`study.css`；弹性形变和弹层：`ui-motion.js`。智驾节奏：`engine/path-motion.js`和`engine/version-features.js`；真实渲染：`engine/world.js`、`engine/environment-finish.js`；启用声音接入：`engine/theme-sound.js`。候选试听：`sound-review/`；可重建音频的生成器：`scripts/make-sound-options.py`，依赖Python与NumPy。

不要因用户后续想再微调形变或声音而重新修改路面光照。首次匝道冷准备曾记录一次约66.6ms主线程长帧，尚未彻底消除；现有浏览器动画可独立驱动选中层，但不能据此宣称所有设备零掉帧。对照 `docs/PERFORMANCE.md` 中的验证范围，继续以真实工作台的录帧及用户反馈为准。

## 公司端新增对比页

08原版与08A/08B/08C三个优化版本，以及四品牌来源录音入口：`/sound-review/08/`。工作台原启用音保持原样。原创候选与400ms智驾线按音频输出时钟同步；品牌现场录音保留原节奏，作为单独参考。车型、版本、截取时间及待核验事项见 `sound-review/08/README.md`。

后续修订：新增08D–F，A–C折叠保留。含语音、现场讲解的小鹏／蔚来／理想录音已撤出试听，不能当独立开启音效；只保留特斯拉社区标注片段。参考来源档案位于 `sound-review/08/recording-sources.json`。

当前新增08G「清亮双音」440ms，349.228→391.995Hz固定上行双音，无失谐、下滑或混响。首屏保留08D和原08对照，其他版本折叠。第二声180ms进入，约400ms随智驾线收尾；仅更新独立试听页，未替换工作台音效。

最新试听为08H「轻触确认」：参考现有特斯拉录音的干净起音、后声确认，主动改为440→523.251Hz小三度和145ms起音间隔、前轻后长；削减泛音。H、上一版G及原08首屏对照，A–F折叠。此为原创程序样音，未替换工作台音效，仍配合400ms智驾线。G被用户否定，不能视为选定版本。

最新增加08I「轻弹微光」单次起音430ms，固定523.251Hz主音，以弱泛音短暂透亮和自然衰减探索灵动；不限定双音。首屏I、H及原08，A–G折叠。仍只更新试听页，400ms智驾线与工作台音效不变，尚未选定正式方案。

最新按用户要求增加「T合 · 特斯拉双音合并」参考编辑实验：现有社区录音60–315ms和320–720ms对齐起音后直接叠合，430ms，未变调或重新合成；来源标注保留，不属于原创候选。首屏T合、08I与原08，A–H折叠；T合不进原创下载ZIP。仍仅试听，工作台音效不动。

最新08J「清透落位」600ms，554.365Hz单次起音，去掉持续双主音重叠。参考Apple WWDC17公开方法完成技术/设计初步复核，听感和车内验证未通过验收。J试听内智驾线为600ms，其他旧候选400ms；运行时覆盖不持久化，工作台仍400ms及原音。

车型弹层修正：边框改为不占布局的分隔，标题/trigger文字基线一致；收起结束前保持单层显示并移除收尾阴影，完成后再还原焦点（Tab保留跳转）。深色路面、建筑按origin/main 8ba6118还原：道路#303031、金属度.08，建筑#817d7d及main面部调色，新增environment-finish在深色干燥地面/建筑上退出。此前本轮单纯提亮地面和建筑完全去色已撤销；浅色与草木保留当前处理。

用户已认可08K的音色，要求声音与配套试听动画均缩为450ms；保持440Hz、16ms柔和起音与约-1dB电平，只缩短衰减/尾音，不变调。尚未授权替换工作台正式音效。

## 当前交付（2026-10-19，优先于上面的历史记录）

用户已明确授权把08K接入工作台Path开启反馈。`engine/assets/sounds/path-enable.wav`与获认可的08K样音逐字节相同：48kHz stereo PCM，440Hz主音，450ms；`theme-sound.js`使用带版本的资源URL，取消原先尚未解码时的上扫合成音回退。Path默认flow展开也改为450ms。浏览器实测ready=true、plays=1、failures=0、durationMs=450、cue=08K，路径审计revealMs=450。历史候选仍保留各自时长。

用户提供v0.18截图作为深色地面颜色的明确基准。等通道中性灰被否定，因为相邻建筑偏冷时观感仍偏黄；目前按截图冷灰关系处理路面/地面/人行道/路缘的最终合成色，保留亮度层次、建筑和智驾线颜色。路面旧图近处主要RGB约31/33/36；校色在光照、反射、雨雪及雾之后执行，避免雨天再次偏色。深色建筑地面倒影降到原强度18%，雨天去掉随机积水斑块；保留均匀薄湿膜。天空采用低反差、宽渐变并与远景雾色共用地平线颜色，去掉旧的重复覆盖。

浅色质感试验为50%参数插值，位于`engine/sr-quality.js`：粗糙度、微弱清漆、阴影柔化、局部反射强度与远景衰减。不移植参考图的蓝色调；50%表示参数插值，不代表可测量的主观相似度。去UI参考图及提示词保存在上层outputs目录。

车模性能：在现有128MiB缓存预算内，桌面首屏后空闲顺序预热其余模型、材质与包围盒，悬停/键盘意图也预热；移动端不预热全部四车。选择完成后通过vehicle:change立即更新工作台，消除旧200ms轮询造成的多余等待。同一桌面浏览器三车切换冷样本136/169/201ms，预热后17/16/7ms；不代表所有设备冷加载保证。车型弹层单选框及鼠标焦点边框已合并，键盘焦点保留。

当前UI布局保持原样。用户强调UI优化只能是草稿，独立入口`/studio/ui-draft/`，独立HTML、样式、控制脚本与动效脚本；不在原版添加布局切换器。草稿使用自己的sessionStorage/localStorage键，renderer review=ui-draft不写原版主题。草稿可以试紧凑顶栏、12px属性、同行参数、复选框、画布边界与状态条；未合并到正式UI，不得部署覆盖。

## 最新验收要求与最终状态（finish-84，覆盖前述材质探索记录）

用户反复强调：材质必须有一眼可辨的明显提升，轻微改动不算完成；只改独立材质草稿中的路面和车模倒影，不要改建筑。之前建筑横纹被用户明确否定，已彻底撤掉，建筑材质、倒角、阴影和全局灯光/雾均恢复原样。当前工作台浅色材质回到试验前基准，`SR_QUALITY_MIX=0`；UI草稿也为基准材质。只有`review=material-draft&quality=sr50`启用参考路面。页面标题仍为材质草稿，按钮现为「原版路面 / 柔光柏油 / 前后对照 / 参考图」。此处sr50只是历史内部标识，不再用“参数中点”冒充用户感知上的50%。

参考路面以深色柏油基底、物理粗糙度.32、清漆.42与宽泛天空Fresnel反射构成；使用原色系，不复制参考图的重蓝调。建筑倒影不再进入此页路面反射，去掉硬边矩形残影。车模加入现有反射渲染，反射面回到真实路面高度.015m；倒影模糊、降对比并按反射高度快速衰减，接续接触阴影。换车、位姿、可见性进入反射缓存键，已实测Tesla→BMW X6反射vehicleId随车型更新，低/高机位与雨天可用，无新增反射pass。

同机位完成帧对照中，两块路面抽样平均RGB差异约25–28阶（先前仅1–2阶，被用户否定）；建筑抽样块差异为0。该数值只证明确有可见变化，不代表主观质感验收。对照弹窗提供同机位滑动分界；截图来源为完成的3D帧。原版与草稿的预览缓存按quality及版本分开，URL保留试验身份，避免短暂显示错版本。

用户新增智驾线明暗模式校准：深色mid由#279df5降为#2689d8，边缘/扫光一并压低；浅色mid由#168aef小幅提为#1e91f2。主线均保持原蓝色系，已在工作台验证light/dark梯度与revealMs=450；08K启用音450ms继续保留。

最后验证：41项studio测试、16项车辆专项测试通过；两类草稿保持独立。验收中换车后反射身份更新，最终恢复Tesla Model 3、6车道、低视角、晴天，材质页打开「前后对照」。未推送或部署。


## 材质草稿 finish-89：车模、建筑与车底清理（覆盖前述只改路面限制）
用户在认可路面后明确要求继续做车模、建筑材质，控制参考图的蓝偏；随后强调白色要有结构质感，禁止大面积傻白；顶部玻璃高光和车底碎轮廓反射均被用户指出。全部新改动只启用于 review=material-draft&quality=sr50，正式工作台及 UI 草稿仍为 SR_QUALITY_MIX=0。周边地面偏白已讨论：建议中性浅灰哑光地面、略亮路缘、深灰柏油的三层关系；尚未实施周边地面改色。

车模新增 sr-vehicle-finish.js，在缓存预热前应用到实际模型，保留材质共享、车灯与车牌。车漆采用中性灰白 #d9dbdd、metalness .22、roughness .25、coat roughness .14；收敛侧面环境漫反射，保留清漆高光，以便肩线和轮拱结构可辨。玻璃已撤销车漆灯箱反射图，使用原场景柔和环境，roughness .30、envMapIntensity .38，保持外壳模型的实心玻璃，不暴露缺失内饰。不要再给玻璃叠加强灯箱图。

建筑只做中性半哑光表面与连续体块明暗，roughness .36、clearcoat .24；亮部已按用户反馈压低，没有新增横纹、窗格或几何改动。全局灯光、天空、雾及已认可的道路底色不改。车底软接触阴影随车长适配，主体为连续高斯衰减，轮胎保留较实的贴地暗部。车身地面反射中碎轮廓已大幅收敛：候选路面反射混合由 .36 最终降至 .06，暗反射下限 .75，12px 双向模糊，全量使用柔化纹理，避免干燥柏油上残留车尾/轮胎鬼影。

已实际切换 X6、Model 3、iX、XC90 验证材质与反射对象更新；最新玻璃版本3已在 Model 3 与 XC90查看，深色雨天检查完成，最终恢复浅色 Model 3/6车道/低机位/晴天。43项 studio 测试与21项车辆专项测试通过。最新截图 outputs/material-car-buildings-after.png、material-car-dark-rain.png；同机位 before/after 已同步到材质页前后对照图片。未提交、推送或部署。


## 材质草稿 finish-90：建筑倒影恢复并略加强
用户继续要求优化建筑，建筑倒影恢复之前效果、可再加重。材质草稿地面反射通道现已恢复建筑参与（当前 Road 14栋），继续排除树木；车体保留极弱反射 .06，避免车底碎轮廓回来。新增可测试 groundReflectionProfile：周边 ground/pavement/curb 的浅色反射混合由原版 .38 调至 .48，暗反射下限 .40、亮部上限1.12、反射物高度衰减7.5m、额外柔化 .28；反射颜色额外去色55%，不移植参考图蓝偏。道路维持 .06/.75/1.60/1.8m/全柔化配置。深色通过原有tone回归原版反射混合及衰减参数。建筑基部连续暗化与背光面稍加深，未改建筑几何、未加条纹。最新截图 outputs/building-material-reflection-after.png，已更新对照图。当前页面为浅色晴天 Model 3、6车道、低视角。全部变化仍只在材质草稿候选分支，周边底色方案尚未实施。

## 2026-10-20 · finish-109：流线他车与反馈收尾

用户已明确授权“改完上传版本”，并说睡觉后继续。本轮保留轿车和SUV，MPV退出。弃用旧方盒模型和未达标自建/体素外壳；最终采用KiW的A7和razor24的Tucson外形作去品牌改编，前格栅覆为连续曲面，去掉标识/排气细件，轿车换成完整的轮胎参考。27789 / 21732三角面，5个网格（含不透明闭合核心）。压缩后核心每条边恰有两面、正体积、绕序一致；Trimesh和JS测试均验证。别把闭合核心测试误称为每一片装饰蒙皮都完全流形。近景前侧、侧面已看；来源CC BY4.0经原Sketchfab API核实，署名见engine/assets/traffic-README.md。准备脚本scripts/traffic-tools/prepare-modern.mjs，运行期无新依赖。

扫面改为路面细网格/交点+柔和底面，取消漂浮尘点。只覆盖本向道路，中心线无原先内缩；深色强度为浅色70%。智驾线延迟150ms、单层350ms展开，原描边保持；扫面前沿500ms收束，尾部到850ms渐淡。逐帧用真实activation-sweep着色器查看125/200/350ms，纹理为网格且底层柔面可见，不等于用户的主观验收。临时验证页已移出产品目录至../work/qa-sweep-verification.html。

持续行驶：车道GPU变形代替点击时CPU逐顶点循环；2/4/6车道后台分片准备、着色器编译、离屏上传。实景6→4准备1.5ms、最大帧间隔16.5ms；4→2准备1.4ms、最大15.2ms。宽度切换保留距离和景物纵深，镜头切换后继续行驶。自动播放改为准备完成后幂等启动，并处理pageshow/可见性；重复同场景API请求不重置。实测刷新后playing=true。车流保留随机间隔、视野外驶入、恒定速度差，跟车按速度相关距离缓慢调节；600s无自车穿越、300s高架无同车道重叠。YouTube仍未完成观察，不能说已看过实车视频或做了统计拟合。

倒影：车/建筑独立通道，连续13点高斯模糊、真实车位轮廓范围约束；浅色、深色、深色雨天未见先前离车杂块。贴地阴影保留。左右建筑实际均可见；雪斑采用局部坐标多层噪声、屋顶与树冠向上法线覆盖，已看到不规则雪斑。Roadworks仍禁用。Assist图文实际中心误差<1px，布局间距6px，取消图文下压/缩放；开启才播放底层像素，关闭无粒子；选中淡蓝底无常驻亮边。

声音：/studio/sound-review/final/现有钢琴3音560ms、4音650ms以及Tesla参考。用户还没选，默认08K不被擅自替换。素材署名见SOURCES.md；主场景通过localStorage监听选择，异步解码有请求代际保护。页面可用“使用这个音效”选择。113项全仓测试通过，主场景控制台无error/warn。反馈逐项状态见feedback-progress/status.json；主观动效与音色等待用户回来评估，不能伪称用户已验收。

## 2026-10-20 morning / finish-110 corrective pass

The user rejected finish-109: the A7/Tucson exterior skin visibly broke despite a closed inner core. That acceptance was wrong. The user explicitly chose a single Model Y as traffic, then requested simplification of mergeable details and all 2/4/6 lane permutations.

Runtime now loads traffic-model-y.json.gz only (135054 indexed triangles, five shared material roles). Source is the already archived Nieve5677 Model Y, CC BY 4.0, source digest validated by prepare-model-y.mjs. Visible body/glazing retain original triangles/normals; emblems/interior mechanical assemblies are omitted; lower grille has a closed smooth outline hull, tires have continuous smooth sidewalls, rims reduced independently. Former generic-sedan/suv runtime assets removed. No hidden core. Front, rear, sides and underside inspected in the enlarged review, including dark light. User-facing appearance remains subject to their review. Do not confuse geometric checks with appearance acceptance again. An experimental rear hull and broad normal smoothing produced unwanted shading and were discarded before delivery.

Lane fixes: rigid road surface resize and curb/shoulder translation eliminate intermediate broad white strips; scenery rebind occurs after target state is installed and before its first draw, preserving recycled depth/scale/rotation/growth heights; departing dashes retain longitudinal phase; departing line materials are independent and disposed after transition. Six directed pairs tested in-browser: 2→4, 4→6, 6→2, 2→6, 6→4, 4→2. Rapid 2→6→4→2→6→2 tested. Dark High 2↔6 tested with Assist and Traffic on. Recorded completed cases retain ego [1.85,.02,0], correct widths 7.4/14.8/22.2 and playing=true. Setup measured .9–1.9 ms in these samples; these numbers do not establish every display frame's timing. Evidence outputs/model-y-finish-110.png and outputs/lane-switch-finish-110.json live outside the repo in the sibling outputs directory. 121 tests passed. The user interacted with the main page while checking; do not interpret unrelated scene changes as a continuity test.

Remaining prior subjective choices: sound candidate selection and activation lattice feel. Do not mark these accepted on the user's behalf.
