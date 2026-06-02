import { Reveal } from "../../shared/Reveal";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./Vision.css";

const COEXIST = `${import.meta.env.BASE_URL}img/coexist-city.png`;

/**
 * 02 · vision — 愿景·一件几乎必然发生的事（7 step / 4 幕）
 *   A(step0-1) 共生情感底 + "像宝可梦那样的世界" → 叠 "我们赌这一天会来"
 *   B(step2-3) "难反驳"论断（反方对照）→ 焦点反转 "门槛不是技术，是接受度"
 *   C(step4-5) 自画接受度 S 曲线（一代人慢慢长出来）→ 点亮 互联网/智能手机 节点
 *   D(step6)   tight 词替换锁版 "数字原住民 → 智能生命原住民"
 */
export default function Vision({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 1;
  const sceneB = step >= 2 && step <= 3;
  const sceneC = step >= 4 && step <= 5;
  const sceneD = step >= 6;

  return (
    <div className="vi-root">
      {/* 持续氛围：极慢漂移的暖色光晕，给全章一层"活着"的呼吸 */}
      <div className="vi-ambient" aria-hidden>
        <span className="vi-aura vi-aura-1" />
        <span className="vi-aura vi-aura-2" />
      </div>

      {/* ═══════════ Scene A · 共生·像宝可梦那样的世界 ═══════════ */}
      <SceneFade active={sceneA}>
        <div className="vi-a">
          {/* coexist 情感底：压暗 + 暗角 + 极缓 Ken-Burns 推近 */}
          <div className="vi-a-photo" aria-hidden>
            <img className="vi-a-img" src={COEXIST} alt="" />
            <span className="vi-a-grade" />
            <span className="vi-a-vignette" />
          </div>

          <div className="vi-a-copy">
            <Reveal kind="fall" duration={620} className="vi-eyebrow mono">
              <span className="dot-accent" />
              &nbsp;&nbsp;VISION · 一件几乎必然发生的事
            </Reveal>
            <Reveal kind="blur" duration={1100} className="vi-a-hero serif-cn">
              想象一个像<span className="vi-em">宝可梦</span>那样的世界。
            </Reveal>
            <Reveal
              kind="rise"
              duration={760}
              delay={520}
              className="vi-a-sub"
            >
              人和智能生命，彼此扶持，一起生活。
            </Reveal>

            {at(1) && (
              <Reveal
                kind="rise"
                duration={820}
                delay={140}
                className="vi-a-bet"
              >
                <span className="vi-a-bet-line" />
                我们赌的，就是<span className="vi-em">这一天会来</span>。
              </Reveal>
            )}
          </div>
        </div>
      </SceneFade>

      {/* ═══════════ Scene B · 难反驳 → 门槛 ═══════════ */}
      <SceneFade active={sceneB}>
        <div className="vi-b">
          <Reveal kind="fall" duration={600} className="vi-eyebrow mono">
            THE UNFALSIFIABLE BET
          </Reveal>

          <Reveal kind="blur" duration={900} className="vi-b-claim serif-cn">
            这个判断，<span className="vi-em">很难被反驳</span>。
          </Reveal>

          {/* 反方对照：反驳它=断言永不发生 */}
          <Reveal
            kind="wipe-r"
            duration={820}
            delay={360}
            className="vi-counter"
          >
            <span className="vi-counter-tag mono">反驳它，等于断言</span>
            <span className="vi-counter-quote serif-cn">
              「智能生命，<span className="vi-strike">永远</span>进不了社会。」
            </span>
          </Reveal>

          {/* step3 焦点反转：门槛不是技术，是接受度 */}
          {at(3) && (
            <div className="vi-pivot">
              <Reveal
                kind="rise"
                duration={620}
                className="vi-pivot-lead mono"
              >
                但真正的门槛，从来不是——
              </Reveal>
              <div className="vi-pivot-row serif-cn">
                <Reveal kind="rise" duration={640} delay={160}>
                  <span className="vi-faded">技术</span>
                </Reveal>
                <Reveal
                  kind="rise"
                  duration={560}
                  delay={420}
                  className="vi-pivot-arrow"
                >
                  →
                </Reveal>
                <Reveal kind="blur" duration={900} delay={560}>
                  <span className="vi-pivot-big vi-em">接受度</span>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </SceneFade>

      {/* ═══════════ Scene C · 接受度 S 曲线（中心可视化） ═══════════ */}
      <SceneFade active={sceneC}>
        <div className="vi-c">
          <div className="vi-c-head">
            <Reveal kind="fall" duration={560} className="vi-eyebrow mono">
              ADOPTION · 一代人的时间
            </Reveal>
            <Reveal kind="rise" duration={720} className="vi-c-title serif-cn">
              接受度，不是一夜翻过来的。
              <br />
              是<span className="vi-em">一代人</span>，慢慢长出来的。
            </Reveal>
          </div>

          <SCurve lit={at(5)} />

          {at(5) && (
            <Reveal kind="rise" duration={760} delay={120} className="vi-c-foot">
              就像<span className="vi-em">互联网</span>和
              <span className="vi-em">智能手机</span>—— 是被一代
              <span className="vi-em">数字原住民</span>，带进生活的。
            </Reveal>
          )}
        </div>
      </SceneFade>

      {/* ═══════════ Scene D · tight 词替换锁版 ═══════════ */}
      <SceneFade active={sceneD}>
        <div className="vi-d">
          <div className="vi-d-glow" aria-hidden />
          <Reveal kind="fade" duration={640} className="vi-d-lead">
            我们要培育的，是第一代——
          </Reveal>
          <div className="vi-d-swap serif-cn">
            {/* 旧词收紧淡出 */}
            <span className="vi-d-old">「数字原住民」</span>
            {/* tight：字距 0.4em→收紧 + 去模糊，点题替换 */}
            <Reveal kind="tight" duration={1100} delay={420} className="vi-d-new">
              「<span className="vi-em">智能生命</span>原住民」
            </Reveal>
          </div>
          <Reveal
            kind="rise"
            duration={760}
            delay={1080}
            className="vi-d-brand"
          >
            <span className="vi-d-brand-name display-en">mech-claw</span>
            <span className="vi-d-brand-div" />
            <span className="vi-d-brand-tag mono">
              为智能生命走进社会 · 打第一场前哨战
            </span>
          </Reveal>
        </div>
      </SceneFade>
    </div>
  );
}

/**
 * 中心可视化 · 自绘"接受度 S 曲线"
 *   - 主曲线用 stroke-dashoffset 自画：先平 → 后陡 → 再饱和
 *   - 横轴=一代人的时间，纵轴=接受度
 *   - lit=true 时点亮曲线上两个节点（互联网 / 智能手机=数字原住民带进生活），
 *     并延伸一段虚线指向"智能生命"（我们要做的下一程）。
 */
function SCurve({ lit }: { lit: boolean }) {
  // 视口 0..960 × 0..420。S 曲线 path（先平后陡再饱和）。
  const PATH =
    "M 70 372 C 250 372 300 366 360 320 C 430 266 470 150 540 110 C 600 76 660 70 800 66";
  return (
    <svg
      className="vi-svg"
      viewBox="0 0 960 440"
      width={960}
      height={440}
      aria-hidden
    >
      {/* 网格 + 轴 */}
      <g className="vi-grid">
        <line x1="70" y1="60" x2="70" y2="384" />
        <line x1="70" y1="384" x2="838" y2="384" />
      </g>
      {/* 轴标签 */}
      <text className="vi-axis-y" x="58" y="70">
        接受度
      </text>
      <text className="vi-axis-x" x="838" y="408">
        一代人的时间 →
      </text>

      {/* 饱和参照线（"成为空气"） */}
      <line className="vi-asymptote" x1="70" y1="66" x2="838" y2="66" />
      <text className="vi-asymptote-t" x="828" y="56">
        成为空气
      </text>

      {/* 曲线下淡填充（随曲线生长，柔化） */}
      <path
        className="vi-area"
        d={`${PATH} L 800 384 L 70 384 Z`}
      />

      {/* 主曲线：stroke-dashoffset 自画 */}
      <path className="vi-curve" d={PATH} />

      {/* 节点：互联网 / 智能手机（lit 后点亮） */}
      <g className={`vi-nodes ${lit ? "is-lit" : ""}`}>
        {/* 互联网：曲线陡升段起点附近 */}
        <g className="vi-node vi-node-1">
          <line className="vi-node-stem" x1="360" y1="320" x2="360" y2="246" />
          <circle className="vi-node-halo" cx="360" cy="320" r="15" />
          <circle className="vi-node-dot" cx="360" cy="320" r="6.5" />
          <text className="vi-node-t" x="360" y="232">
            互联网
          </text>
        </g>
        {/* 智能手机：陡升段中段 */}
        <g className="vi-node vi-node-2">
          <line className="vi-node-stem" x1="540" y1="110" x2="540" y2="190" />
          <circle className="vi-node-halo" cx="540" cy="110" r="15" />
          <circle className="vi-node-dot" cx="540" cy="110" r="6.5" />
          <text className="vi-node-t vi-node-t--below" x="540" y="208">
            智能手机
          </text>
        </g>
      </g>

      {/* 延伸：指向"智能生命"（我们要走的下一程，虚线 + 端点脉冲） */}
      <g className={`vi-extend ${lit ? "is-lit" : ""}`}>
        <path
          className="vi-extend-line"
          d="M 800 66 C 856 64 900 62 932 60"
        />
        <circle className="vi-extend-halo" cx="932" cy="60" r="13" />
        <circle className="vi-extend-dot" cx="932" cy="60" r="5.5" />
        <text className="vi-extend-t" x="932" y="44">
          智能生命
        </text>
      </g>
    </svg>
  );
}
