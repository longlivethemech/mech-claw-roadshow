import type { ChapterDef } from "./types";
import Coldopen from "../chapters/01-coldopen/Coldopen";
import { narrations as coldopenNarrations } from "../chapters/01-coldopen/narrations";
import Vision from "../chapters/02-vision/Vision";
import { narrations as visionNarrations } from "../chapters/02-vision/narrations";
import Founder from "../chapters/03-founder/Founder";
import { narrations as founderNarrations } from "../chapters/03-founder/narrations";
import WhyNow from "../chapters/04-why-now/WhyNow";
import { narrations as whyNowNarrations } from "../chapters/04-why-now/narrations";
import Market from "../chapters/05-market/Market";
import { narrations as marketNarrations } from "../chapters/05-market/narrations";
import FirstStep from "../chapters/06-first-step/FirstStep";
import { narrations as firstStepNarrations } from "../chapters/06-first-step/narrations";
import TechMoat from "../chapters/07-tech-moat/TechMoat";
import { narrations as techMoatNarrations } from "../chapters/07-tech-moat/narrations";
import Versus from "../chapters/08-vs/Versus";
import { narrations as versusNarrations } from "../chapters/08-vs/narrations";
import Northstar from "../chapters/09-northstar/Northstar";
import { narrations as northstarNarrations } from "../chapters/09-northstar/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "coldopen",
    title: "开场·定位",
    narrations: coldopenNarrations,
    Component: Coldopen,
  },
  {
    id: "vision",
    title: "愿景·必然",
    narrations: visionNarrations,
    Component: Vision,
  },
  {
    id: "founder",
    title: "为什么是我们",
    narrations: founderNarrations,
    Component: Founder,
  },
  {
    id: "why-now",
    title: "为什么现在",
    narrations: whyNowNarrations,
    Component: WhyNow,
  },
  {
    id: "market",
    title: "市场地图",
    narrations: marketNarrations,
    Component: Market,
  },
  {
    id: "first-step",
    title: "第一步·6岁",
    narrations: firstStepNarrations,
    Component: FirstStep,
  },
  {
    id: "tech-moat",
    title: "技术护城河",
    narrations: techMoatNarrations,
    Component: TechMoat,
  },
  {
    id: "vs",
    title: "和竞品的区别",
    narrations: versusNarrations,
    Component: Versus,
  },
  {
    id: "northstar",
    title: "北极星·收尾",
    narrations: northstarNarrations,
    Component: Northstar,
  },
];
