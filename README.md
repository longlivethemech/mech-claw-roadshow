# mech-claw · 路演 Roadshow

mech-claw 的产品路演网页 —— 一个点击推进的 16:9「伪视频」演示 deck，面向投资人 / 合作方 / 媒体，一眼看懂「我们要做什么」。

> **mech-claw**：给 6 岁左右孩子的物理世界智能伙伴 —— 会走、会看、会陪他长大。
> 主线：你陪它长大，它陪你长大。

## 在线观看

部署在 GitHub Pages：**https://longlivethemech.github.io/mech-claw-roadshow/**

操作：`→` / 空格 前进，`←` 后退，数字键 `1–9` 跳章，`Home` / `End` 跳首尾。建议全屏 16:9 横屏观看。

## 章节

9 章 / 66 步，约 6 分钟：

1. **开场·定位** —— 未来会有一种「活的」机器人
2. **愿景·必然** —— 接受度 S 曲线，一代「智能生命原住民」
3. **为什么是我们** —— 创始人轨迹与学术背景
4. **为什么现在·2026** —— 成本↓/能力↑技术拐点
5. **市场地图** —— 23 款机型扫描 + 四圆交集空白
6. **第一步·6 岁** —— 精准打在认知形成的杠杆点
7. **技术护城河** —— 低成本下放 / 真会动 / 语言即动作 / 不会暴毙
8. **和竞品的区别** —— 能力对比矩阵
9. **北极星·收尾** —— 把流失诅咒翻成吞吐量

## 技术栈

Vite + React + TypeScript。16:9 固定舞台（1920×1080 + transform scale），全局 step 计数器驱动，点击推进。动效引擎在 `src/shared/`（`Reveal` / `NumberTicker` / `SceneFade` / `LiveTicker`），每章自绘 SVG 数据可视化。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # 产出 dist/（构建时 base 自动切到 /mech-claw-roadshow/）
```

## 部署

推送到 `main` 即触发 `.github/workflows/deploy.yml`：`npm ci && npm run build` 后由 GitHub Actions 部署到 Pages。

## 待补

- 视频位：第 9 章「机器人打招呼」、第 2/6 章情感片段（当前为占位卡）。
- 概念图为早期生成版，可后续替换 `public/img/`。
