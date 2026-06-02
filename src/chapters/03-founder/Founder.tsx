import { Reveal } from "../../shared/Reveal";
import { NumberTicker } from "../../shared/NumberTicker";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./Founder.css";

/**
 * 03 · founder — 为什么是我们·创始人（7 step / 5 幕）
 *   A(step0-1) 抛问"为什么是你来做" + 引出轨道
 *   B(step2)   自绘人生轨迹 timeline，四节点错峰点亮(人大附中→清华→MIT→阿贡)
 *   C(step3)   学术数据三卡 + NumberTicker(Science / 2×Nature / 1200+ 引用)
 *   D(step4-5) 放下物理学家轨道(转身/变暗) → 来做陪孩子长大的机器人
 *   E(step6)   金句锁版"这件事本身，就是答案"
 */
export default function Founder({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 1;
  const sceneB = step === 2;
  const sceneC = step === 3;
  const sceneD = step >= 4 && step <= 5;
  const sceneE = step >= 6;

  return (
    <div className="fo-root">
      {/* 持续氛围：细网格 + 暖角光，像一间安静的实验室 */}
      <div className="fo-ambient" aria-hidden>
        <span className="fo-grid" />
        <span className="fo-glow" />
      </div>

      {/* ─────────── Scene A · 抛问 → 引出轨道 ─────────── */}
      <SceneFade active={sceneA}>
        <div className="fo-a">
          <Reveal kind="fall" duration={620} className="fo-eyebrow mono">
            WHY US · 创始人
          </Reveal>

          <Reveal kind="blur" duration={1050} className="fo-a-q serif-cn">
            投资人最常问一句：
            <br />
            <span className="fo-em">为什么是你来做？</span>
          </Reveal>

          <div className="fo-a-hold">
            {at(1) && (
              <>
                <Reveal kind="rise" duration={720} className="fo-a-ans serif-cn">
                  我们的领头人，
                  <br />
                  走的是这样一条<span className="fo-em">路</span>。
                </Reveal>
                <Reveal
                  kind="wipe-r"
                  duration={760}
                  delay={420}
                  className="fo-a-cue"
                >
                  <span className="fo-cue-dot" />
                  <span className="mono">A PATH, NOT A RÉSUMÉ</span>
                </Reveal>
              </>
            )}
          </div>
        </div>
      </SceneFade>

      {/* ─────────── Scene B · 自绘人生轨迹 timeline ─────────── */}
      <SceneFade active={sceneB}>
        <div className="fo-b">
          <Reveal kind="fall" duration={560} className="fo-b-eyebrow mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;TRAJECTORY · 2008 → 2025
          </Reveal>
          <Reveal kind="fade" duration={900} className="fo-b-stage">
            <PathTimeline />
          </Reveal>
        </div>
      </SceneFade>

      {/* ─────────── Scene C · 学术数据三卡 ─────────── */}
      <SceneFade active={sceneC}>
        <div className="fo-c">
          <Reveal kind="fall" duration={560} className="fo-c-eyebrow mono">
            自旋电子学 · SPINTRONICS — 本科常年年级第一
          </Reveal>
          <div className="fo-c-grid">
            <Reveal kind="wipe-r" duration={720} delay={60} className="fo-stat">
              <span className="fo-stat-fig display-en">
                <NumberTicker to={1} from={0} decimals={0} duration={700} />
              </span>
              <span className="fo-stat-name serif-cn">Science</span>
              <span className="fo-stat-sub mono">第一作者团队 · 二作</span>
            </Reveal>

            <Reveal kind="wipe-r" duration={720} delay={200} className="fo-stat">
              <span className="fo-stat-fig display-en">
                <NumberTicker to={2} from={0} decimals={0} duration={800} />
              </span>
              <span className="fo-stat-name serif-cn">Nature 子刊</span>
              <span className="fo-stat-sub mono">共同第一作者 ×2</span>
            </Reveal>

            <Reveal kind="wipe-r" duration={720} delay={340} className="fo-stat fo-stat--hero">
              <span className="fo-stat-fig display-en">
                <NumberTicker
                  to={1200}
                  from={0}
                  decimals={0}
                  duration={1500}
                  suffix="+"
                  delay={200}
                />
              </span>
              <span className="fo-stat-name serif-cn">领域引用</span>
              <span className="fo-stat-sub mono">CITATIONS · 持续增长</span>
            </Reveal>
          </div>
        </div>
      </SceneFade>

      {/* ─────────── Scene D · 转身：放下轨道 → 来做这件事 ─────────── */}
      <SceneFade active={sceneD}>
        <div className="fo-d">
          {/* 旧轨道：一条暗下去、向左滑走的虚线 */}
          <div className="fo-d-orbit" aria-hidden>
            <span className="fo-d-orbit-line" />
            <span className="fo-d-orbit-dot" />
          </div>

          <Reveal kind="fall" duration={560} className="fo-d-when mono">
            六个月前 · A TURN
          </Reveal>
          <Reveal kind="blur" duration={920} className="fo-d-l1 serif-cn">
            他放下了顶尖物理学家的
            <span className="fo-strike">轨道</span>。
          </Reveal>

          <div className="fo-d-hold">
            {at(5) && (
              <Reveal kind="rise" duration={820} className="fo-d-l2 serif-cn">
                来做<span className="fo-em">一件事</span>——
                <br />
                一个<span className="fo-em">陪孩子长大</span>的机器人。
              </Reveal>
            )}
          </div>
        </div>
      </SceneFade>

      {/* ─────────── Scene E · 金句锁版 ─────────── */}
      <SceneFade active={sceneE}>
        <div className="fo-e">
          <div className="fo-e-glow" aria-hidden />
          <Reveal kind="fade" duration={700} className="fo-e-lead serif-cn">
            一个<span className="fo-em">能做这些</span>的人，
            <br />
            偏要来做<span className="fo-em">这个</span>。
          </Reveal>
          <div className="fo-e-quote serif-cn">
            <Reveal kind="blur" duration={1000} delay={260} className="fo-e-ln">
              这件事本身，
            </Reveal>
            <Reveal kind="blur" duration={1000} delay={760} className="fo-e-ln">
              就是<span className="fo-em">答案</span>。
            </Reveal>
          </div>
          <Reveal kind="rise" duration={720} delay={1300} className="fo-e-sig mono">
            人大附中 · 清华 · MIT · ARGONNE　→　mech-claw
          </Reveal>
        </div>
      </SceneFade>
    </div>
  );
}

/* ── 自绘人生轨迹 timeline ──
 *  横向轴线生长 + 四节点错峰点亮（口播一口气连读四个地名，单 step 内 stagger 可接受）。
 *  节点：人大附中 → 清华 → MIT 直博(EECS) → 阿贡国家实验室
 */
const NODES = [
  { x: 150, label: "人大附中", en: "RDFZ", sub: "北京", cls: "n0" },
  { x: 520, label: "清华", en: "TSINGHUA", sub: "放弃保送 · 高考考入", cls: "n1" },
  { x: 890, label: "MIT 直博", en: "MIT · EECS", sub: "直博", cls: "n2" },
  { x: 1290, label: "阿贡国家实验室", en: "ARGONNE", sub: "美国国家实验室", cls: "n3" },
];

function PathTimeline() {
  return (
    <svg
      className="fo-tl"
      viewBox="0 0 1440 300"
      width={1440}
      height={300}
      aria-hidden
    >
      {/* 轴线（生长） */}
      <line className="fo-tl-axis" x1="80" y1="150" x2="1360" y2="150" />
      {/* 已点亮的暖色段，从左推进到末点 */}
      <line className="fo-tl-axis-lit" x1="80" y1="150" x2="1290" y2="150" />

      {NODES.map((n, i) => {
        const up = i % 2 === 0; // 标签上下错落
        const labelY = up ? 96 : 204;
        const enY = up ? 64 : 236;
        const subY = up ? 122 : 178;
        const connY1 = up ? 124 : 150;
        const connY2 = up ? 150 : 176;
        return (
          <g key={n.cls} className={`fo-tl-node fo-tl-${n.cls}`}>
            {/* 引线 */}
            <line
              className="fo-tl-conn"
              x1={n.x}
              y1={connY1}
              x2={n.x}
              y2={connY2}
            />
            {/* 节点：halo + 实心点 */}
            <circle className="fo-tl-halo" cx={n.x} cy={150} r={20} />
            <circle className="fo-tl-dot" cx={n.x} cy={150} r={9} />
            {/* 文字 */}
            <text className="fo-tl-en" x={n.x} y={enY}>
              {n.en}
            </text>
            <text className="fo-tl-label" x={n.x} y={labelY}>
              {n.label}
            </text>
            <text className="fo-tl-sub" x={n.x} y={subY}>
              {n.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
