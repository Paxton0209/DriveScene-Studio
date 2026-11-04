# 设计系统与关键页保护

## 设计系统

本仓库的界面按 Paxton 设计系统实现。设计源文件在：

`/Users/peixin/Documents/Codex/2026-11-01/bang/outputs/design-system/product/`

改动任何界面前，按顺序读：

1. `README.md`：入口和优先级
2. `SPEC.md`：规则正文（颜色、材质、圆角、字体、间距、布局、动效、图标、状态、文案、可访问性）
3. `COMPONENTS.md`：组件规格；参考实现在 `components/`，全状态展示在 `gallery.html`
4. 本仓库的产品 guideline（见下）

优先级：作者在对话中明确确认的规则 ＞ SPEC ＞ 产品 guideline ＞ 参考来源。冲突时停下回报，不自行取舍。

## 硬规则

0. **关键页不改。** 作品集首页和 DriveScene 工作台是作者确认过的关键页。设计系统更新不是改它们的理由；关键页的任何改动必须有作者逐项确认，否则停下。

1. **只用变量。** 颜色、圆角、字号、字重、间距、阴影、时长只写 `var(--ds-…)`。新页面需要接入时再将 tokens 复制到本仓库的 `studio/ui-draft/design-system/tokens.css`；当前未复制，不手改变量。关键页保留既有数值与实现。确需写数值时加 `/* ds-allow: 原因 */`。
2. **组件先复制。** 需要的组件先从 `components/` 复制，保持类名和状态写法。设计系统里没有的组件不要自己造，停下来提给 Claude。
3. **不改设计源目录**里的任何文件。规范需要修改时，写进交付报告的「问题」一节。
4. **不加**规范和作者都没要求的元素、说明文字、装饰、第二个强调色。
5. **动效**用 SPEC 第 8 节的变量；本产品已确认的动效不改。
6. **文案**：句首大写，不用「·」分隔，不用他人商标做功能名。

## 交付前必须做

```
node /Users/peixin/Documents/Codex/2026-11-01/bang/outputs/design-system/product/checks/check-ui.mjs 本次修改的界面源码路径
node /Users/peixin/Documents/Codex/2026-11-01/bang/outputs/design-system/product/checks/audit.mjs --url http://127.0.0.1:8000/ --out work/ui-audit
```

- `check-ui` 零报错（或每条都有 ds-allow 原因）。
- `audit` 的截图：桌面 1440 和手机 390，浅深两套；对比度报告里默认、选中、焦点、错误状态没有低于 4.5:1 的文字。
- 交付报告写清「已实现」「已验证」「未验证」；构建或测试通过不等于视觉验收。
- 改动前后同视口、同状态的对照截图。

## 本产品

- 产品名：DriveScene Studio
- 产品 guideline：studio/ui-draft/design guideline.MD（只写本产品的布局和差异）
- tokens 位置：studio/ui-draft/design-system/tokens.css
- 本地预览：npm start；工作台 http://127.0.0.1:8000/studio/ui-draft/
- 构建与测试：npm run build --prefix studio/ui-draft；npm test --prefix studio/ui-draft
- 已确认、不得改动的部分：整个工作台界面以线上 be0f56d08b875493e2bca9f8365294eba13c166a 为基准；现有动效全部冻结。Junction 修复 c1c05ee 必须保留。3D 场景渲染不在设计系统范围；studio/engine 与运行时边界保持原状。

本入口不追溯迁移既有关键页；检查命令只针对经作者授权的界面改动。仅修改说明文件时，核对文件差异即可，无需重新构建或改写界面。
