# 交接：Driving assist 尺寸收尾 + 性能与代码梳理

交接人：Claude　接手：Codex　日期：2026-11-04
分支：`driving-assist-size`（基于 `main` 6f4f617）

开工前先读仓库根目录的 `AGENTS.md`。下文「红线」一节是其中与本次任务相关的摘要，冲突时以 `AGENTS.md` 和作者在对话中的确认为准。

---

## 1. 已完成：Driving assist 按钮尺寸（作者已逐项确认）

| 项 | 改前 | 改后 |
|---|---|---|
| 桌面高度 | 32px | 40px |
| 水平内边距 | `--ds-space-5`（12） | `--ds-space-6`（16） |
| 方向盘图标 | 18px | 20px |
| 图标与文字间距 | 8 | 8（不变） |
| 圆角 | `--r-panel` 10 | 10（不变） |
| 手机 | 高 44、与画布同宽 | 不变（图标随全局规则变为 20） |

改动文件：

- `studio/ui-draft/shell-v5.css`：在原规则上改（没有追加覆盖块），共 3 处；图标规则的 `ds-allow` 注释已同步。
- `studio/ui-draft/index.html`、`studio/ui-draft/skill.html`：内联的 `shell-v5.css` 只改了这 3 个值。
- `studio/ui-draft/design guideline.MD`：组件表改为「高 40」，第 23.6 节补了尺寸记录。

作者明确的设计结论，不要改动：

- 按钮里不放 switch。
- 开启状态不加底色，状态只靠图标颜色表示，因为场景里的蓝色引导路径已经说明了开启状态。
- 按钮留在画布下方，不移进画布。
- 本次只改按钮的比例和内部间距，其他圆角和布局都不动。
- 作者希望圆角在视觉上一致。加高到 40 以后，按钮的圆角/高度比从 0.31 降到 0.25，更接近面板内控件（Export 是 6/32 ≈ 0.19）。

### 1.1 Claude 环境里没能验证的部分（请 Codex 在本机补上）

Claude 的环境连不上 npm 源，缺少 `three`，所以 `npm run build` 没跑成。内联 CSS 是只重跑了 `build.mjs` 里 CSS 内联那一步得到的，并且和 esbuild 重新压缩的结果比对过，忽略空白后完全一致。`npm test` 改动前后结果相同（都因缺依赖失败 50 个），覆盖这个按钮的 3 个测试都通过了。

请按顺序做：

1. `npm run build --prefix studio/ui-draft`。如果构建产物和分支里的内联 CSS 只有空白差异（esbuild 版本不同会改变 `@media(` 前后的空格），用构建产物覆盖即可。
2. `npm test --prefix studio/ui-draft` 全部通过。
3. 跑 `AGENTS.md`「交付前必须做」的三个检查：`check-ui`、`audit`、`keypage`。`keypage.json` 里没有涉及这个按钮的间距条目，预期零失败。如果失败，**停下来报告，不要改基准**。
4. 截改动前后的对照图：桌面 1440、手机 390，浅色和深色，assist 关和开，共 16 张，同一视口、同一状态。放在 `work/driving-assist/`，不要提交。
5. 额外看一眼 1366×768：按钮加高 8px 后，底部不能被裁切，也不能和其他元素重叠。

结果全部通过后，告诉作者，由作者决定是否合并。

---

## 2. 性能：先测量、定位，再提方案（未授权直接改）

目标：缩短冷启动时间（打开页面到场景可交互），并找出运行时的明显浪费。

流程：**先拿基线数据 → 列出候选优化项和预期收益 → 交给作者逐项确认 → 再实施**。工作台是关键页，任何会影响画面、动效或启动表现的改动都要先确认。

### 2.1 怎么测

- 用 `main` 当基线，冷缓存、关闭 Service Worker 和缓存，每种条件测 5 次取中位数。
- 测试条件：本机不限速；Chrome DevTools 的 Fast 4G 或 10 Mbps / 40 ms；有条件再测一台低端设备。
- 测量点：
  - 首次绘制 / FCP。
  - 启动海报出现的时间（`#startup-poster`）。
  - `performance.mark('draft-resources-ready')` 和 `'draft-startup-motion-ready'`，这两个已经在 `draft.js` 里。
  - `body[data-ready=true]` 出现的时间，作为「可交互」的标准。
  - 主线程长任务（PerformanceObserver `longtask`），以及每个资源的传输大小和瀑布图。
- 场景至少测 Road（默认）和 Indoor parking。traffic 开和关各测一次，因为 traffic 开启时会多预载 2.4 MB 的资源。
- 换车型和切场景的耗时也记一下。

Claude 写过一个基于 Playwright 的测量脚本思路（CDP 限速 + longtask observer + resource timing）。在 Claude 的环境里，软件渲染一次冷启动要两三分钟，没有参考价值，所以**数字一律以 Codex 在本机测的为准**。

### 2.2 已知线索（是待验证的假设，不是结论）

| 线索 | 现状 | 要验证的问题 |
|---|---|---|
| `index.html` 体积 | 392K 原始 / 约 155K gzip。其中内联 `#startup-draft` 模块 190K、`#startup-poster` 78K，6 张 data URI 图片共约 120K | 首屏 HTML 是否过大？哪些可以延后加载或拆出去缓存？（注意：内联是刻意的，见 `build.mjs` 里「The approved shell must arrive with the document」的注释，改动前要测净收益） |
| `runtime.bundle.js` | 1171K / 约 333K gzip，modulepreload + high priority | 有没有启动用不到、可以拆出来按需加载的部分？ |
| `parking-normals.bundle.js` | 780K / 约 590K gzip，压缩率很低，出现在 `#startup-assets` 的预载列表里 | 默认 Road 场景冷启动时会不会加载它？如果会，能不能等进入泊车场景时再加载？ |
| 车型模型 `vehicles/*/model.glb.gz` | Model 3 1.5 MB，X6 4.5 MB，iX 3.0 MB，XC90 2.5 MB；启动时只预载当前选中的车型 | X6 明显偏大，能不能用 meshopt 或降低贴图尺寸来压？`.gz` 文件在 GitHub Pages 上是怎么传输、怎么解压的，有没有重复压缩？ |
| `traffic-model-y.prepared.bin.gz` | 2.4 MB，traffic 开启时启动就预载 | 能不能延后到首帧之后再加载？ |
| `studio-environment.bin.gz` | 253K | 应该没问题，确认一下即可 |
| 运行时 | 驾驶场景默认自动播放 | 页面不可见或画布不在视口时，会不会继续渲染？（检查 `visibilitychange` 和 rAF 有没有暂停） |

### 2.3 交付物

一份测量报告（基线数字表 + 瀑布图截图 + 长任务列表），加一份候选优化清单。清单每一项写清楚：改什么、预期收益（毫秒或 KB）、风险、会不会影响画面或动效。作者确认以后再动手，每一项单独提交，并附改动前后的对比数字。

---

## 3. 代码逻辑梳理：先列清单，不做行为改动

目标：降低维护成本，修掉确定的问题。和第 2 节一样，**先列清单，作者确认后再改**。

已知线索：

- **构建依赖没有声明**：`studio/ui-draft/build.mjs` 导入了 `esbuild` 和 `three`，但 `studio/ui-draft/package.json` 里没有这两个包，换一台机器就构建不了。建议声明进 devDependencies，并锁定版本（不同 esbuild 版本的压缩输出不一样，会让内联 CSS 产生无意义的 diff）。
- **CSS 层叠过多**：`#scene-transport` 的样式分散在 `inspector.css`、`guizang-trial.css`、`shell-v5.css` 三个文件里，加起来有 20 多条规则，最终的值要靠选择器优先级层层覆盖才能确定。`AGENTS.md` 第 8 条要求不追加覆盖块。建议先列出「已经被覆盖、实际不生效的规则」，确认后再清理。清理必须保证 `keypage` 零差异。
- `draft.js` 和 `draft.bundle.js` 里有大量 `if(M||I||w||E||C)return` 这样的忙碌状态守卫（压缩后的变量名），状态分散在多个布尔量里。可以评估是否收拢成一个状态机。**这只是评估**，因为 Junction 修复 c1c05ee 和现有动效时序都依赖它，风险高。
- 仓库根目录有不少旧版截图和预览文件（`preview-r32.jpg`、`cockpit-*-r3x.png` 等）。列出来交给作者决定是否清理，不要自己删。

---

## 4. 红线（摘自 `AGENTS.md` 和本轮作者的确认）

- 工作台是关键页，任何界面改动都要作者逐项确认。
- **现有动效全部冻结**：不改 transition、animation 的时长和曲线。
- **Junction 修复 c1c05ee 必须保留**。
- `studio/engine` 和运行时的边界保持原状。3D 场景渲染不在设计系统的管辖范围内，但性能优化如果涉及渲染，同样要先确认。
- 颜色、圆角、字号、间距只用 `var(--ds-…)`；确实要写数值时加 `/* ds-allow: 原因 */`。
- 不在 CSS 文件末尾追加覆盖块，改哪条规则就在原规则上改。
- 不改设计源目录 `/Users/peixin/.../design-system/product/` 里的任何文件。
- 要修改 `keypage.json` 的基准，先取得作者同意，并且和对应改动放在同一次提交里。
- 交付报告写清「已实现」「已验证」「未验证」三部分。构建或测试通过不等于视觉验收。
- 不推送到 `main`，不部署。合并由作者决定。
