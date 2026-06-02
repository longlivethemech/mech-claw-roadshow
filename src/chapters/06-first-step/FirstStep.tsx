import { Reveal } from "../../shared/Reveal";
import { NumberTicker } from "../../shared/NumberTicker";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./FirstStep.css";

const CHILD = `${import.meta.env.BASE_URL}img/child-companion.png`;

/**
 * 06 · first-step — 我们的第一步·6 岁孩子（7 step / 4 幕）
 *   A(step0-1) child 情感底 + "第一步很具体：六岁左右的孩子"(blur)
 *              → Moxie 验证过的路，用 2026 的能力重做一遍(rise)
 *   B(step2-5) 中心件：自绘"杠杆 + 支点" —— 支点精准卡在杠杆点上
 *              · step2 杠杆梁画出、支点点亮"精准打在杠杆点上"
 *              · step3 成年人端=世界观定型，沉重压不动（重块下沉）
 *              · step4 孩子端=正在形成认知，伙伴被「写进/铭刻」这个阶段
 *              · step5 重定义：不是被练手的市场，是这件事的「承载者」(tight)
 *   C(step6)   家长版金句锁版（blur 错峰，温暖收束）
 */
export default function FirstStep({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 1;
  const sceneB = step >= 2 && step <= 5;
  const sceneC = step >= 6;

  return (
    <div className="fs-root">
      {/* 持续氛围：暖角光 + 极细基线，像窗边的午后 */}
      <div className="fs-ambient" aria-hidden>
        <span className="fs-glow" />
        <span className="fs-baseline" />
      </div>

      {/* ─────────── Scene A · child 情感底 + 第一步很具体 ─────────── */}
      <SceneFade active={sceneA}>
        <div className="fs-a">
          {/* 情感底图：暖色、暗角、克制 Ken-Burns；偏粗糙故压暗当氛围底 */}
          <div className="fs-a-photo" aria-hidden>
            <img className="fs-a-img" src={CHILD} alt="" />
            <span className="fs-a-veil" />
            <span className="fs-corner tl" />
            <span className="fs-corner tr" />
            <span className="fs-corner bl" />
            <span className="fs-corner br" />
          </div>

          <div className="fs-a-copy">
            <Reveal kind="fall" duration={600} className="fs-eyebrow mono">
              <span className="dot-accent" />
              &nbsp;&nbsp;FIRST STEP · 第一批客户
            </Reveal>

            <Reveal kind="blur" duration={1050} className="fs-a-h serif-cn">
              我们的第一步，<span className="fs-em">很具体</span>。
              <br />
              <NumberTicker
                to={6}
                from={0}
                decimals={0}
                duration={900}
                delay={260}
                className="fs-a-num display-en"
              />
              <span className="fs-a-age"> 岁左右的孩子。</span>
            </Reveal>

            <div className="fs-a-hold">
              {at(1) && (
                <>
                  <Reveal kind="rise" duration={760} className="fs-a-l2 serif-cn">
                    就是 <span className="fs-em">Moxie 验证过</span>的那条路——
                    <br />
                    但用 <span className="fs-em">2026 的能力</span>，重做一遍。
                  </Reveal>
                  <Reveal
                    kind="wipe-r"
                    duration={780}
                    delay={420}
                    className="fs-a-track"
                  >
                    <span className="fs-track-node mono">MOXIE · 验证有效</span>
                    <span className="fs-track-arrow display-en">→</span>
                    <span className="fs-track-node is-now mono">2026 · 重做一遍</span>
                  </Reveal>
                </>
              )}
            </div>
          </div>
        </div>
      </SceneFade>

      {/* ─────────── Scene B · 杠杆 + 支点（中心件，step2-5 累积） ─────────── */}
      <SceneFade active={sceneB}>
        <div className="fs-b">
          <Reveal kind="fall" duration={560} className="fs-b-eyebrow mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;THE LEVERAGE POINT · 为什么是六岁
          </Reveal>

          <Reveal kind="fade" duration={760} className="fs-b-stage">
            <Lever at={at} />
          </Reveal>

          {/* 字幕：随 step 切换（同一中心件上叠不同点题） */}
          <div className="fs-b-cap">
            {step === 2 && (
              <Reveal kind="rise" duration={720} className="fs-cap serif-cn">
                不是挑个<span className="fs-strike">软柿子</span>练手。
                <br />
                是<span className="fs-em">精准打在杠杆点上</span>。
              </Reveal>
            )}
            {step === 3 && (
              <Reveal kind="rise" duration={720} className="fs-cap serif-cn">
                成年人的世界观，<span className="fs-em">已经定型</span>——
                <br />
                你<span className="fs-strike">改不动</span>。
              </Reveal>
            )}
            {step === 4 && (
              <Reveal kind="rise" duration={760} className="fs-cap serif-cn">
                孩子正在<span className="fs-em">形成</span>对世界的认知。
                <br />
                「身边有个非人类的伙伴」——在这个阶段，被
                <span className="fs-em">写进去</span>。
              </Reveal>
            )}
            {step === 5 && (
              <Reveal kind="fade" duration={680} className="fs-cap serif-cn">
                所以孩子不是被我们拿来{" "}
                <Reveal
                  as="span"
                  kind="tight"
                  duration={820}
                  delay={260}
                  className="fs-swap-old"
                >
                  练手的市场
                </Reveal>
                。
                <br />
                他们是这件事的{" "}
                <Reveal
                  as="span"
                  kind="tight"
                  duration={880}
                  delay={680}
                  className="fs-swap-new"
                >
                  承载者
                </Reveal>
                。
              </Reveal>
            )}
          </div>
        </div>
      </SceneFade>

      {/* ─────────── Scene C · 家长版金句锁版 ─────────── */}
      <SceneFade active={sceneC}>
        <div className="fs-c">
          <div className="fs-c-glow" aria-hidden />
          <Reveal kind="fall" duration={620} className="fs-c-eyebrow mono">
            对家长，只说一句 · THE 5-SECOND PROMISE
          </Reveal>

          <div className="fs-c-quote serif-cn">
            <span className="fs-c-mark" aria-hidden>
              「
            </span>
            <Reveal kind="blur" duration={980} delay={120} className="fs-c-ln">
              一个会<span className="fs-em">陪你孩子长大</span>、
            </Reveal>
            <Reveal kind="blur" duration={980} delay={620} className="fs-c-ln">
              <span className="fs-em">永远记得他</span>、
            </Reveal>
            <Reveal kind="blur" duration={980} delay={1120} className="fs-c-ln">
              <span className="fs-em">永远不会突然消失</span>的伙伴。
            </Reveal>
            <span className="fs-c-mark fs-c-mark--close" aria-hidden>
              」
            </span>
          </div>

          <Reveal kind="rise" duration={760} delay={1700} className="fs-c-sig mono">
            mech-claw　·　给六岁孩子的智能伙伴
          </Reveal>
        </div>
      </SceneFade>
    </div>
  );
}

/* ── 中心件 · 自绘"杠杆 + 支点" ──
 *  一根杠杆梁，支点精准卡在杠杆点（偏成年人侧）上 —— 用它表达
 *  "选六岁=精准打在认知形成的杠杆点"。
 *  对照两端：
 *    左端 = 成年人（世界观定型、沉重，重块压住、纹丝不动）
 *    右端 = 孩子（正在形成、轻轻一点就被撬起，节点里被「铭刻」一道暖纹）
 *  支点用 stroke 自画三角，随 step2 点亮。
 *
 *  几何（viewBox 1200×420）：
 *    支点尖 = (470, 250)；梁随 step 由两端向支点倾斜：
 *    成年人端(左)下沉 / 孩子端(右)抬起。倾斜用 CSS transform 在 step3/4 触发。
 */
function Lever({ at }: { at: (n: number) => boolean }) {
  const tilted = at(3); // step3 起，杠杆向"成年人沉 / 孩子起"倾斜
  const engraved = at(4); // step4 起，孩子端被「写进/铭刻」

  return (
    <svg
      className={`fs-lever${tilted ? " is-tilted" : ""}${
        engraved ? " is-engraved" : ""
      }`}
      viewBox="0 0 1200 420"
      width={1200}
      height={420}
      aria-hidden
    >
      {/* 地面基线 */}
      <line className="fs-ground" x1="60" y1="356" x2="1140" y2="356" />

      {/* 支点：自画三角（stroke），尖端精准顶住杠杆点 */}
      <g className="fs-fulcrum">
        <path
          className="fs-fulcrum-tri"
          d="M470 250 L412 352 L528 352 Z"
        />
        {/* 顶住点的点亮核 + halo */}
        <circle className="fs-fulcrum-halo" cx="470" cy="250" r="20" />
        <circle className="fs-fulcrum-dot" cx="470" cy="250" r="6" />
        <text className="fs-fulcrum-cap" x="470" y="392">
          精准 · 杠杆点
        </text>
      </g>

      {/* 杠杆梁（绕支点尖端旋转） */}
      <g className="fs-beam">
        <line className="fs-beam-bar" x1="120" y1="250" x2="1080" y2="250" />

        {/* 左端 = 成年人：沉重的世界观（重块 + 标签） */}
        <g className="fs-adult">
          <rect
            className="fs-adult-mass"
            x="120"
            y="196"
            width="150"
            height="54"
            rx="3"
          />
          <text className="fs-end-label" x="195" y="176">
            成年人
          </text>
          <text className="fs-end-sub" x="195" y="288">
            世界观已定型
          </text>
        </g>

        {/* 右端 = 孩子：轻、可塑（节点 + 被铭刻的暖纹） */}
        <g className="fs-child">
          <circle className="fs-child-node" cx="1010" cy="250" r="30" />
          {/* 「写进/铭刻」：节点内一道暖色刻痕，step4 点亮 */}
          <path className="fs-child-mark" d="M996 250 L1024 250 M1010 236 L1010 264" />
          <text className="fs-end-label" x="1010" y="176">
            六岁孩子
          </text>
          <text className="fs-end-sub" x="1010" y="312">
            认知正在形成
          </text>
        </g>
      </g>
    </svg>
  );
}
