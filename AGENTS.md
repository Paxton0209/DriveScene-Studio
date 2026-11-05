# 设计系统与关键页保护

## 设计系统

本仓库的界面按 Paxton 设计系统实现。设计系统是独立仓库 `Paxton0209/paxton-design-system`（所有产品共用的上游），以 Git 子模块挂在本仓库的 `design-system/`，锁定到 v1.4.2。克隆后先执行 `git submodule update --init`；下文路径都相对本仓库根目录，本地和云端的 AI 读到的是同一份。

改动任何界面前，先过一遍 `design-system/HANDOFF.md`（执行清单），再按顺序读：

1. `design-system/README.md`：入口和优先级
2. `design-system/SPEC.md`：规则正文（颜色、材质、圆角、字体、间距、布局、动效、图标、状态、文案、可访问性）
3. `design-system/COMPONENTS.md`：组件规格；参考实现在 `design-system/components/`，全状态展示在 `design-system/gallery.html`
4. 本仓库的产品 guideline（见下）

优先级：作者在对话中明确确认的规则 ＞ SPEC ＞ 产品 guideline ＞ 参考来源。冲突时停下回报，不自行取舍。

## 硬规则

0. **关键页不改。** 作品集首页和 DriveScene 工作台是作者确认过的关键页。设计系统更新不是改它们的理由；关键页的任何改动必须有作者逐项确认，否则停下。

1. **只用变量。** 颜色、圆角、字号、字重、间距、阴影、时长只写 `var(--ds-…)`。tokens 已复制到本仓库的 `studio/ui-draft/design-system/tokens.css`，不手改；升级设计系统版本时从 `design-system/tokens/tokens.css` 重新复制，CI 会核对两者一致。关键页保留既有数值与实现。确需写数值时加 `/* ds-allow: 原因 */`。
2. **组件先复制。** 需要的组件先从 `design-system/components/` 复制，保持类名和状态写法。设计系统里没有的组件不要自己造，向作者或当前指定的监察者报告缺口，确认后再执行。
3. **不改 `design-system/` 子模块**里的任何文件，也不随手升级子模块版本。规范需要修改时，写进交付报告的「问题」一节，或到 `paxton-design-system` 仓库单独提 PR，由作者批准。
4. **不加**规范和作者都没要求的元素、说明文字、装饰、第二个强调色。
5. **动效**用 SPEC 第 8 节的变量；本产品已确认的动效不改。
6. **文案**：句首大写，不用「·」分隔，不用他人商标做功能名。
7. **间距按模型改，不按单点改。** 面板间距只用 SPEC 6.1 的间距模型（桌面并排、手机叠放各一套）。改间距时说清改的是模型里的哪一层（组标题→首项、标签→控件、项→项、组→组、页脚），一次只改一层；不能为了解决一处挤或空，同时调大几个层级。
8. **不追加覆盖块。** 改已有规则就在原规则上改，不在文件末尾追加「follow-up」覆盖块；覆盖叠多了，没人能说清最终值是哪条规则给的。
9. **取值合法不等于通过。** 数值来自阶梯只是前提；交付前必须跑关键页检查，可见间距与基准表一致才算通过。

## 交付前必须做

```
npm ci --prefix design-system/checks
node design-system/checks/check-changed.mjs --base origin/main
node design-system/checks/audit.mjs --url http://127.0.0.1:8000/studio/ui-draft/ --out work/ui-audit
node design-system/checks/keypage.mjs --spec studio/ui-draft/keypage.json --out work/keypage
```

每个 PR 上 GitHub Actions（`.github/workflows/ui-checks.yml`）会自动跑同样的检查：`check-ui`（只查本次改动新增的问题）、tokens 一致性和 `keypage` 不通过就不能合并；`audit` 目前只出报告。本地先跑是为了少走一轮。作者明确授权前 AI 不合并；授权后可代为执行，并在 PR 中记录授权范围。不直接推 main。

- `check-changed` 零新增报错（或每条都有 ds-allow 原因）。既有关键页的历史数值不算，新写的算。
- `keypage` 零失败：桌面和手机、浅色和深色，每一处可见间距与 `studio/ui-draft/keypage.json` 的基准相差不超过 1px。基准要改，先经作者同意，再在同一次提交里改 `keypage.json`。
- `audit` 的截图：桌面 1440 和手机 390，浅深两套；对比度报告里默认、选中、焦点、错误状态没有低于 4.5:1 的文字。
- 交付报告写清「已实现」「已验证」「未验证」；构建或测试通过不等于视觉验收。
- 改动前后同视口、同状态的对照截图。

## 本产品

- 产品名：DriveScene Studio
- 产品 guideline：studio/ui-draft/design guideline.MD（只写本产品的布局和差异）
- tokens 位置：studio/ui-draft/design-system/tokens.css
- 设计系统版本：v1.4.2（子模块 `design-system/`；升级见 `design-system/GOVERNANCE.md`）
- 本地预览：npm start；工作台 http://127.0.0.1:8000/studio/ui-draft/
- 构建与测试：npm run build --prefix studio/ui-draft；npm test --prefix studio/ui-draft
- 已确认、不得改动的部分：整个工作台界面以关键页 v2（本次发版提交，基准数值见 `studio/ui-draft/keypage.json`）为准；现有动效全部冻结。Junction 修复 c1c05ee 必须保留。3D 场景渲染不在设计系统范围；studio/engine 与运行时边界保持原状。

本入口不追溯迁移既有关键页；检查命令只针对经作者授权的界面改动。仅修改说明文件时，核对文件差异即可，无需重新构建或改写界面。
