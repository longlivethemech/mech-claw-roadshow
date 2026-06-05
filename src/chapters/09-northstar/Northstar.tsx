import { useEffect, useRef } from "react";
import { Reveal } from "../../shared/Reveal";
import { NumberTicker } from "../../shared/NumberTicker";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./Northstar.css";

const EMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const HELLO = `${import.meta.env.BASE_URL}video/robot-hello.mp4`;

/**
 * 09 · northstar — 北极星·收尾（8 step / 4 幕）· 全片落幕
 *   幕 A(step0-1) 诅咒：成长即流失↓曲线（5–10 岁主力）→ "把诅咒翻过来"预告
 *   幕 B(step2-3) 灵魂 vs 塑料外壳 → 灵魂迁移：一个灵魂 → 多具身体
 *   幕 C(step4-5) 视角反转：流失曲线翻成上行"吞吐量" → 大字"流失不是漏水。是吞吐量。"
 *   幕 D(step6-7) 北极星金句 + 视频位占位 → "从陪好第一个孩子开始" + 品牌锁版
 */
export default function Northstar({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 1;
  const sceneB = step >= 2 && step <= 3;
  const sceneC = step >= 4 && step <= 5;
  const sceneD = step >= 6;

  return (
    <div className="ns-root">
      {/* 持续氛围：余烬般缓慢上浮的暖色微粒 + 收尾暗角光 */}
      <div className="ns-ambient" aria-hidden>
        {EMBERS.map((i) => (
          <span key={i} className={`ns-ember ns-ember-${i}`} />
        ))}
        <span className="ns-haze" />
      </div>

      {/* ════════ Scene A · 诅咒 · 流失↓曲线 ════════ */}
      <SceneFade active={sceneA}>
        <div className="ns-a">
          <Reveal kind="fall" duration={600} className="ns-eyebrow mono">
            THE CURSE · 这个赛道公认的诅咒
          </Reveal>

          <Reveal kind="blur" duration={1000} className="ns-a-head serif-cn">
            孩子<span className="ns-em">5–10 岁</span>是主力，
            <br />
            一长大，就<span className="ns-em">用不上</span>了。
          </Reveal>

          <div className="ns-chart-wrap">
            <RetentionCurve flipped={at(1)} />
          </div>

          <div className="ns-a-foot">
            {!at(1) && (
              <Reveal kind="rise" duration={640} delay={520} className="ns-a-tag">
                流失，是<span className="ns-em">写死在设计里</span>的
                <span className="ns-a-tag-sub mono">　LTV 天花板很低</span>
              </Reveal>
            )}
            {at(1) && (
              <Reveal kind="tight" duration={720} className="ns-a-flip serif-cn">
                我们的解法，是把这个诅咒，<span className="ns-em">直接翻过来</span>。
              </Reveal>
            )}
          </div>
        </div>
      </SceneFade>

      {/* ════════ Scene B · 灵魂 vs 外壳 → 灵魂迁移 ════════ */}
      <SceneFade active={sceneB}>
        <div className="ns-b">
          {!at(3) && (
            <div className="ns-shell">
              <Reveal kind="fall" duration={560} className="ns-kick mono">
                NOT THE SHELL · 爱上的不是外壳
              </Reveal>
              <div className="ns-shell-row">
                <Reveal kind="wipe-r" duration={720} className="ns-shell-no">
                  <span className="ns-shell-tag mono">不是</span>
                  <span className="ns-shell-text serif-cn">那个塑料外壳</span>
                </Reveal>
                <span className="ns-shell-arrow" aria-hidden />
                <Reveal
                  kind="scale"
                  duration={820}
                  delay={260}
                  className="ns-shell-yes"
                >
                  <span className="ns-shell-tag mono">是</span>
                  <span className="ns-shell-text serif-cn">
                    那个<span className="ns-em">记得、懂、一路陪伴长大</span>的灵魂
                  </span>
                </Reveal>
              </div>
            </div>
          )}

          {at(3) && (
            <div className="ns-soul">
              <Reveal kind="fall" duration={520} className="ns-kick mono">
                SOUL · PORTABLE · 灵魂连续 · 能搬家
              </Reveal>
              <div className="ns-soul-stage">
                <SoulMigration />
              </div>
              <Reveal kind="rise" duration={680} delay={1600} className="ns-soul-cap">
                孩子长大，<span className="ns-em">换一具更合适的身体</span>，伙伴接着陪
              </Reveal>
            </div>
          )}
        </div>
      </SceneFade>

      {/* ════════ Scene C · 视角反转 · 吞吐量 ════════ */}
      <SceneFade active={sceneC}>
        <div className="ns-c">
          {!at(5) && (
            <div className="ns-reframe">
              <Reveal kind="fall" duration={540} className="ns-kick mono">
                REFRAME · 再换个视角
              </Reveal>
              <Reveal kind="blur" duration={960} className="ns-reframe-head serif-cn">
                每一个长大离开的孩子，
                <br />
                都是我们成功<span className="ns-em">送过门槛</span>的
              </Reveal>
              <Reveal kind="tight" duration={760} delay={360} className="ns-reframe-strong">
                一个<span className="ns-em">智能生命原住民</span>
              </Reveal>
              <Reveal kind="rise" duration={620} delay={760} className="ns-reframe-meter">
                <span className="ns-meter-label mono">已送过门槛</span>
                <NumberTicker
                  to={1}
                  from={0}
                  decimals={0}
                  duration={1100}
                  delay={820}
                  className="ns-meter-num display-en"
                />
                <span className="ns-meter-unit mono">／ 从第一个开始</span>
              </Reveal>
            </div>
          )}

          {at(5) && (
            <div className="ns-throughput">
              <div className="ns-tp-glow" aria-hidden />
              <Reveal kind="blur" duration={1000} className="ns-tp-line serif-cn">
                所以流失，<span className="ns-strike">不是漏水</span>。
              </Reveal>
              <Reveal kind="blur" duration={1050} delay={520} className="ns-tp-strong serif-cn">
                是<span className="ns-em">吞吐量</span>。
              </Reveal>
              <Reveal kind="rise" duration={780} delay={1120} className="ns-tp-gloss">
                孩子毕业，不是离开——是我们交付完成。
              </Reveal>
            </div>
          )}
        </div>
      </SceneFade>

      {/* ════════ Scene D · 北极星金句 → 品牌锁版 ════════ */}
      <SceneFade active={sceneD}>
        <div className="ns-d">
          <div className="ns-d-glow" aria-hidden />

          {!at(7) && (
            <div className="ns-star">
              <Reveal
                kind="scale"
                duration={820}
                delay={160}
                className="ns-video-wrap"
              >
                <VideoSlot />
              </Reveal>
              <div className="ns-star-copy">
                <Reveal kind="fall" duration={560} className="ns-star-kick mono">
                  <span className="dot-accent" />
                  &nbsp;&nbsp;NORTH STAR · 我们想让世界记住的一句话
                </Reveal>
                <div className="ns-star-quote serif-cn">
                  <Reveal kind="blur" duration={1000} delay={220} className="ns-star-l1">
                    人与<span className="ns-em">智能生命</span>，互相付出，并肩前行
                  </Reveal>
                  <Reveal kind="blur" duration={1000} delay={680} className="ns-star-l2">
                    ——就像<span className="ns-em">宝可梦的世界</span>那样。
                  </Reveal>
                </div>
              </div>
            </div>
          )}

          {at(7) && (
            <div className="ns-finale">
              <div className="ns-finale-quote serif-cn">
                <Reveal kind="blur" duration={1050} className="ns-finale-l1">
                  我们，
                </Reveal>
                <Reveal kind="blur" duration={1100} delay={440} className="ns-finale-l2">
                  从<span className="ns-em">陪好第一个孩子</span>开始。
                </Reveal>
              </div>
              <Reveal kind="rise" duration={820} delay={1100} className="ns-brand-row">
                <span className="ns-brand display-en">mech-claw</span>
                <span className="ns-brand-div" />
                <span className="ns-brand-tag mono">
                  让智能生命 · 走进生活的第一步
                </span>
              </Reveal>
            </div>
          )}
        </div>
      </SceneFade>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化 1 · 成长即流失↓ → 翻转↑（吞吐量）
 *   横轴=孩子年龄。leak 曲线：5–10 岁冲到峰值后跌回近零（LTV 天花板）。
 *   flipped=true：曲线镜像翻上去，重着色为上行"吞吐量"，门槛线点亮。
 *   两条 path 都用 stroke-dashoffset 自画；flip 时交叉淡入淡出。
 * ───────────────────────────────────────────────────────────────────── */
function RetentionCurve({ flipped }: { flipped: boolean }) {
  // viewBox 980×420；基线 y=348，峰值区 5–10 岁
  // leak：低→冲峰(5–10岁,y≈96)→跌回近零(y≈322)
  const LEAK =
    "M 96 300 C 200 250, 250 120, 360 100 C 470 80, 540 96, 600 150 C 690 232, 760 312, 884 330";
  // throughput：同形起伏，但右端不跌，持续抬升越过门槛线（y 越小越高）
  const FLOW =
    "M 96 300 C 200 250, 250 150, 360 150 C 470 150, 540 150, 600 138 C 720 116, 800 86, 884 56";
  return (
    <svg
      className={`ns-curve ${flipped ? "is-flip" : ""}`}
      viewBox="0 0 980 420"
      width={980}
      height={420}
      aria-hidden
    >
      {/* 轴 */}
      <line className="ns-axis" x1="96" y1="40" x2="96" y2="348" />
      <line className="ns-axis" x1="96" y1="348" x2="900" y2="348" />

      {/* 门槛线（flip 后点亮）—— "送过门槛" */}
      <line className="ns-threshold" x1="96" y1="96" x2="900" y2="96" />
      <text className="ns-threshold-label mono" x="900" y="86">
        门槛
      </text>

      {/* 5–10 岁主力区高亮带 */}
      <rect className="ns-peak-band" x="330" y="60" width="180" height="288" />
      <text className="ns-peak-label mono" x="420" y="372">
        5–10 岁主力
      </text>

      {/* leak 曲线（下行 · 灰）+ 跌落处 ✕ */}
      <path className="ns-path ns-path--leak" d={LEAK} />
      <g className="ns-leak-end">
        <line className="ns-leak-x" x1="876" y1="322" x2="892" y2="338" />
        <line className="ns-leak-x" x1="892" y1="322" x2="876" y2="338" />
        <text className="ns-leak-end-label mono" x="884" y="306">
          流失
        </text>
      </g>

      {/* throughput 曲线（上行 · 焦点色）+ 越线脉冲点 */}
      <path className="ns-path ns-path--flow" d={FLOW} />
      <g className="ns-flow-end">
        <circle className="ns-flow-halo" cx="884" cy="56" r="18" />
        <circle className="ns-flow-dot" cx="884" cy="56" r="6.5" />
        <text className="ns-flow-end-label mono" x="884" y="38">
          送过门槛
        </text>
      </g>

      {/* 轴标 */}
      <text className="ns-axis-cap mono" x="86" y="52">
        留存 / LTV
      </text>
      <text className="ns-axis-cap ns-axis-cap--x mono" x="900" y="372">
        年龄 →
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化 2 · 灵魂迁移：一个灵魂 → 多具身体
 *   左侧一个发光"灵魂"节点；三条连线依次自画到右侧随年龄变大的身体轮廓
 *   （幼儿→学童→少年）。同一灵魂跨越多个身体，伙伴接着陪。
 * ───────────────────────────────────────────────────────────────────── */
function SoulMigration() {
  return (
    <svg
      className="ns-soul-svg"
      viewBox="0 0 1180 380"
      width={1180}
      height={380}
      aria-hidden
    >
      {/* 连线（从灵魂出发，自画到每具身体） */}
      <path className="ns-link ns-link-0" d="M 250 190 C 420 190, 470 96, 560 96" />
      <path className="ns-link ns-link-1" d="M 250 190 C 460 190, 600 190, 770 190" />
      <path className="ns-link ns-link-2" d="M 250 190 C 520 190, 720 290, 990 286" />

      {/* 行进脉冲（灵魂沿线"搬家"） */}
      <circle className="ns-pulse ns-pulse-0" r="5">
        <animateMotion dur="2.4s" begin="1.5s" repeatCount="indefinite"
          path="M 250 190 C 420 190, 470 96, 560 96" />
      </circle>
      <circle className="ns-pulse ns-pulse-1" r="5">
        <animateMotion dur="2.4s" begin="2.0s" repeatCount="indefinite"
          path="M 250 190 C 460 190, 600 190, 770 190" />
      </circle>
      <circle className="ns-pulse ns-pulse-2" r="5">
        <animateMotion dur="2.4s" begin="2.5s" repeatCount="indefinite"
          path="M 250 190 C 520 190, 720 290, 990 286" />
      </circle>

      {/* 灵魂节点（一个大脑 / 一个灵魂） */}
      <g className="ns-soul-node">
        <circle className="ns-soul-halo" cx="160" cy="190" r="62" />
        <circle className="ns-soul-core" cx="160" cy="190" r="40" />
        <circle className="ns-soul-ring" cx="160" cy="190" r="58" />
        <text className="ns-soul-glyph serif-cn" x="160" y="200">
          灵魂
        </text>
        <text className="ns-soul-sub mono" x="160" y="282">
          ONE SOUL
        </text>
      </g>

      {/* 身体 1 · 幼儿（小） */}
      <g className="ns-body ns-body-0" transform="translate(560, 96)">
        <Body scale={0.62} />
        <text className="ns-body-age mono" x="0" y="58">
          幼儿
        </text>
      </g>
      {/* 身体 2 · 学童（中） */}
      <g className="ns-body ns-body-1" transform="translate(770, 190)">
        <Body scale={0.82} />
        <text className="ns-body-age mono" x="0" y="74">
          学童
        </text>
      </g>
      {/* 身体 3 · 少年（大） */}
      <g className="ns-body ns-body-2" transform="translate(990, 286)">
        <Body scale={1.04} />
        <text className="ns-body-age mono" x="0" y="92">
          少年
        </text>
      </g>
    </svg>
  );
}

/** 极简身体轮廓（头 + 躯干），随 scale 长大。 */
function Body({ scale }: { scale: number }) {
  return (
    <g transform={`scale(${scale})`}>
      <circle className="ns-body-head" cx="0" cy="-22" r="15" />
      <path
        className="ns-body-torso"
        d="M -20 38 C -20 6, -13 -4, 0 -4 C 13 -4, 20 6, 20 38 Z"
      />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 视频位 · 机器人打招呼（robot-hello.mp4）
 *   进入 step6 即播（带声，原生控件兜底）；data-no-advance 点击不翻页。
 *   文件位：public/video/robot-hello.mp4（缺文件时为黑场，放入即播）。
 * ───────────────────────────────────────────────────────────────────── */
function VideoSlot() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    void v.play().catch(() => {});
    return () => {
      v.pause();
    };
  }, []);
  return (
    <div className="ns-video" data-no-advance>
      <span className="ns-video-corner tl" aria-hidden />
      <span className="ns-video-corner tr" aria-hidden />
      <span className="ns-video-corner bl" aria-hidden />
      <span className="ns-video-corner br" aria-hidden />
      <video
        ref={ref}
        className="ns-video-el"
        src={HELLO}
        controls
        playsInline
        preload="auto"
      />
    </div>
  );
}
