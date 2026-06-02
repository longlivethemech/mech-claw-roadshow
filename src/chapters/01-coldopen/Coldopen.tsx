import { Reveal } from "../../shared/Reveal";
import { NumberTicker } from "../../shared/NumberTicker";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./Coldopen.css";

const HERO = `${import.meta.env.BASE_URL}img/mechclaw-hero.png`;
const EMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * 01 · coldopen — 开场·定位（5 step / 4 幕）
 *   幕 A(step0-1) 生命火花 + 必然性时间轴 → 幕 B(step2) 取景框·决定
 *   → 幕 C(step3) 产品揭示 + 6 岁 → 幕 D(step4) slogan 锁版
 */
export default function Coldopen({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 1;
  const sceneB = step === 2;
  const sceneC = step === 3;
  const sceneD = step >= 4;

  return (
    <div className="co-root">
      {/* 持续氛围：漂浮暖色微粒 */}
      <div className="co-ambient" aria-hidden>
        {EMBERS.map((i) => (
          <span key={i} className={`co-ember co-ember-${i}`} />
        ))}
      </div>

      {/* ─── Scene A · 必然 ─── */}
      <SceneFade active={sceneA}>
        <div className="co-a">
          <div className="co-orb" aria-hidden>
            <span className="co-orb-core" />
            <span className="co-orb-ring" />
          </div>
          <Reveal kind="blur" duration={1100} className="co-a-line serif-cn">
            未来，一定会有一种<span className="co-em">「活的」</span>机器人，
            <br />
            和我们一起生活。
          </Reveal>
          <div className="co-tl-wrap">
            {at(1) && (
              <>
                <Reveal kind="wipe-r" duration={1000}>
                  <Timeline />
                </Reveal>
                <Reveal
                  kind="rise"
                  duration={680}
                  delay={420}
                  className="co-a-tag"
                >
                  不是<span className="co-strike">会不会</span>，是
                  <span className="co-em">早晚</span>的事
                </Reveal>
              </>
            )}
          </div>
        </div>
      </SceneFade>

      {/* ─── Scene B · 决定 ─── */}
      <SceneFade active={sceneB}>
        <div className="co-b">
          <div className="co-vf" aria-hidden>
            <span className="co-corner tl" />
            <span className="co-corner tr" />
            <span className="co-corner bl" />
            <span className="co-corner br" />
          </div>
          <Reveal kind="fall" duration={620} className="co-eyebrow mono">
            DECISION · 2026
          </Reveal>
          <div className="co-b-h serif-cn">
            <Reveal kind="blur" duration={880} className="co-b-l1">
              我们决定，为那一天，
            </Reveal>
            <Reveal
              kind="rise"
              duration={760}
              delay={460}
              className="co-b-strong"
            >
              造<span className="co-em">第一个伙伴</span>。
            </Reveal>
          </div>
        </div>
      </SceneFade>

      {/* ─── Scene C · 产品揭示 ─── */}
      <SceneFade active={sceneC}>
        <div className="co-c">
          <div className="co-prod-wrap">
            <span className="co-corner tl" />
            <span className="co-corner tr" />
            <span className="co-corner bl" />
            <span className="co-corner br" />
            <img className="co-prod" src={HERO} alt="mech-claw 产品概念图" />
          </div>
          <div className="co-c-cap">
            <Reveal kind="fade" duration={600} className="co-kick mono">
              <span className="dot-accent" />
              &nbsp;&nbsp;MECH-CLAW · 物理世界智能伙伴
            </Reveal>
            <Reveal
              kind="rise"
              duration={700}
              delay={140}
              className="co-c-h serif-cn"
            >
              给{" "}
              <NumberTicker
                to={6}
                from={0}
                decimals={0}
                duration={900}
                delay={220}
                className="co-num display-en"
              />{" "}
              岁孩子的<span className="co-em">智能伙伴</span>
            </Reveal>
            <Reveal
              kind="rise"
              duration={640}
              delay={360}
              className="co-c-sub"
            >
              会走　·　会看　·　会陪他长大
            </Reveal>
          </div>
        </div>
      </SceneFade>

      {/* ─── Scene D · slogan 锁版 ─── */}
      <SceneFade active={sceneD}>
        <div className="co-d">
          <div className="co-d-glow" aria-hidden />
          <div className="co-slogan serif-cn">
            <Reveal kind="blur" duration={1000} className="co-sl">
              <span className="co-em">你</span>陪<span className="co-em">它</span>
              长大，
            </Reveal>
            <Reveal kind="blur" duration={1000} delay={460} className="co-sl">
              <span className="co-em">它</span>陪<span className="co-em">你</span>
              长大。
            </Reveal>
          </div>
          <Reveal
            kind="rise"
            duration={760}
            delay={1000}
            className="co-brand-row"
          >
            <span className="co-brand display-en">mech-claw</span>
            <span className="co-brand-div" />
            <span className="co-brand-tag mono">
              让智能生命 · 走进生活的第一步
            </span>
          </Reveal>
        </div>
      </SceneFade>
    </div>
  );
}

/** 自绘"必然性时间轴"：此刻 → 迟早会来（轴线生长 + 终点脉冲） */
function Timeline() {
  return (
    <svg
      className="co-tl"
      viewBox="0 0 920 96"
      width={920}
      height={96}
      aria-hidden
    >
      <line className="co-tl-axis" x1="24" y1="48" x2="896" y2="48" />
      <g className="co-tl-tick">
        <circle cx="24" cy="48" r="5" />
        <text x="24" y="82">
          此刻
        </text>
      </g>
      <g className="co-tl-tick co-tl-tick--mid">
        <circle cx="300" cy="48" r="3.5" />
        <circle cx="540" cy="48" r="3.5" />
      </g>
      <g className="co-tl-mark">
        <circle className="co-tl-halo" cx="828" cy="48" r="17" />
        <circle className="co-tl-dot" cx="828" cy="48" r="7" />
        <text x="892" y="82">
          迟早会来
        </text>
      </g>
    </svg>
  );
}
