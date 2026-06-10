import { useEffect, useRef } from "react";
import type { SyntheticEvent } from "react";
import { Reveal } from "../../shared/Reveal";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./Vision.css";

const COEXIST = `${import.meta.env.BASE_URL}img/coexist-city.png`;
const FAREWELL = `${import.meta.env.BASE_URL}video/ai-farewell.mp4`;

/** 愿景示意图（fauna 等身陪伴概念参考，可后补自制图） */
const V_ASSET = (n: string) => `${import.meta.env.BASE_URL}assets/${n}`;
const VISION_IMGS = [
  { file: "fauna-work.png", cap: "你工作，它在桌边陪着" },
  { file: "fauna-hand.png", cap: "和孩子等高，手牵手一起走" },
];
function hideVisionImg(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.classList.add("is-missing");
}

/**
 * 02 · vision — 愿景·一件几乎必然发生的事（9 step / 6 幕）
 *   A(step0-1) 共生情感底 + "像宝可梦那样的世界" → 叠 "我们赌这一天会来"
 *   B(step2-3) "难反驳"论断（反方对照）→ 焦点反转 "门槛不是技术，是接受度"
 *   C(step4-5) 自画接受度 S 曲线（一代人慢慢长出来）→ 点亮 互联网/智能手机 节点
 *   D(step6)   tight 词替换锁版 "数字原住民 → 智能生命原住民"
 *   N(step7)   养育特写 —— "制造 → 养育" 大字反转 + openclaw 钩子
 *   E(step8)   视频证据 —— 孩子已和 AI 朋友告别，接受已发生【视频位】
 */
export default function Vision({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 1;
  const sceneB = step >= 2 && step <= 3;
  const sceneC = step >= 4 && step <= 5;
  const sceneD = step === 6;
  const sceneNurture = step === 7;
  const sceneE = step >= 8;

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
            这不是口号，<span className="vi-em">是越想越清楚的事</span>。
          </Reveal>

          {/* 现实例证：机器人进家庭不是空想，已是被认真投入的市场 */}
          <Reveal kind="rise" duration={680} delay={420} className="vi-b-proof">
            <span className="vi-b-proof-tag mono">不是空想</span>
            <span className="vi-b-proof-t">
              比如 <span className="vi-em">蔚蓝 BabyAlpha A3</span> ——「机器人走进家庭」，已经是有人认真在做的市场
            </span>
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
              每一次浪潮，都由一代把它
              <span className="vi-em">视为理所当然</span>的原住民，带进生活。
            </Reveal>
          )}
        </div>
      </SceneFade>

      {/* ═══════════ Scene D · tight 词替换锁版 ═══════════ */}
      <SceneFade active={sceneD}>
        <div className="vi-d">
          <div className="vi-d-glow" aria-hidden />
          <Reveal kind="fade" duration={640} className="vi-d-lead">
            我们要养育的，是第一代——
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
              为智能生命走进社会 · 打第一场
              <span className="vi-d-vanguard">前哨战</span>
            </span>
          </Reveal>

          {/* ㉕ 愿景示意：等身陪伴的画面（fauna 概念参考 · 占位可换自制图） */}
          <Reveal kind="rise" duration={820} delay={1500} className="vi-d-vision">
            <span className="vi-d-vision-eyebrow mono">愿景示意 · 概念参考</span>
            <div className="vi-d-vision-row">
              {VISION_IMGS.map((v) => (
                <figure className="vi-d-vfig" key={v.file}>
                  <span className="vi-d-vframe">
                    <span className="vi-d-vph" aria-hidden>愿景图占位</span>
                    <img
                      className="vi-d-vimg"
                      src={V_ASSET(v.file)}
                      alt={v.cap}
                      onError={hideVisionImg}
                    />
                  </span>
                  <figcaption className="vi-d-vcap">{v.cap}</figcaption>
                </figure>
              ))}
            </div>
            <span className="vi-d-vision-note mono">
              * 画面取自 fauna，仅作"等身陪伴"概念参考，非本品
            </span>
          </Reveal>
        </div>
      </SceneFade>

      {/* ═══════════ Scene N · 养育特写："制造 → 养育" ═══════════ */}
      <SceneFade active={sceneNurture}>
        <div className="vi-n">
          <div className="vi-n-glow" aria-hidden />
          <Reveal kind="fade" duration={620} className="vi-n-lead">
            能与人长期共生的伙伴——
          </Reveal>
          {/* 大字反转：制造 收紧淡出 → 养育 锁版（同 Scene D 的 tight 词汇） */}
          <div className="vi-n-swap serif-cn">
            <span className="vi-n-old">「制造」</span>
            <Reveal kind="tight" duration={1100} delay={3460} className="vi-n-new">
              「<span className="vi-em">养育</span>」
            </Reveal>
          </div>
          <Reveal kind="rise" duration={760} delay={4160} className="vi-n-sub serif-cn">
            不是被制造出来的——是被<span className="vi-em">养育</span>出来的。
            <br />
            放进真实世界，在关系里、在时间里，慢慢长成「它自己」。
          </Reveal>
          <Reveal kind="rise" duration={720} delay={4460} className="vi-n-hook mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;openclaw · 你陪它的每一天，它都记得、都在长大
          </Reveal>
        </div>
      </SceneFade>

      {/* ═══════════ Scene E · 视频证据（接受已发生）【视频位】 ═══════════ */}
      <SceneFade active={sceneE}>
        <div className="vi-e">
          <div className="vi-e-stage">
            <Reveal kind="scale" duration={820} className="vi-e-frame">
              <VideoProof active={sceneE} />
            </Reveal>
            <div className="vi-e-copy">
              <Reveal kind="fall" duration={600} className="vi-eyebrow mono">
                <span className="dot-accent" />
                &nbsp;&nbsp;ALREADY HAPPENING · 已经在发生
              </Reveal>
              <Reveal
                kind="blur"
                duration={860}
                delay={180}
                className="vi-e-cap serif-cn"
              >
                一个孩子，正在和她的
                <br />
                <span className="vi-em">AI 朋友</span>告别。
              </Reveal>
              <Reveal kind="rise" duration={720} delay={540} className="vi-e-sub">
                她已经接受了它的存在。
                <br />
                缺的，只是一个<span className="vi-em">永远不说再见</span>的身体。
              </Reveal>
              <Reveal
                kind="rise"
                duration={680}
                delay={820}
                className="vi-e-foot mono"
              >
                接受度，不在未来 —— 就在此刻。
              </Reveal>
            </div>
          </div>
        </div>
      </SceneFade>
    </div>
  );
}

/**
 * 视频证据播放器 —— 进入该步自动播放（带声，原生控件兜底）。
 * 整块标记 data-no-advance：点击视频 / 控件不会推进舞台。
 * 文件位：public/video/ai-farewell.mp4（缺文件时为黑场，放入即播）。
 */
function VideoProof({ active }: { active: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (active) {
      v.currentTime = 0;
      // 进入即播；带声自动播放被浏览器拦截时，退回原生控件手动播放
      void v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [active]);
  return (
    <div className="vi-e-screen" data-no-advance>
      <span className="vi-corner tl" />
      <span className="vi-corner tr" />
      <span className="vi-corner bl" />
      <span className="vi-corner br" />
      <video
        ref={ref}
        className="vi-e-video"
        src={FAREWELL}
        controls
        playsInline
        preload="auto"
      />
    </div>
  );
}

/**
 * 中心可视化 · 自绘"5 条接受度 Sigmoid 曲线"
 *   横轴 = 时间 / 年代，纵轴 = 接受度（0 → 1）。
 *   计算机 → 互联网 → 智能手机 → LLM → 数字生命，同一斜率，沿时间依次右移；
 *   每条都从 0 长到 1。数字生命 = 我们要赌的下一程（accent 高亮）。
 *   lit=true 时由左到右依次自画点亮。
 */
function SCurve({ lit }: { lit: boolean }) {
  const X0 = 92;
  const X1 = 904;
  const Y_TOP = 70; // 接受度 = 1
  const Y_BOT = 360; // 接受度 = 0
  const W = X1 - X0;
  const H = Y_BOT - Y_TOP;
  const K = 26; // 同一斜率
  const waves = [
    { name: "计算机", era: "1970s", c: 0.12, hot: false },
    { name: "互联网", era: "1990s", c: 0.3, hot: false },
    { name: "智能手机", era: "2007", c: 0.48, hot: false },
    { name: "LLM", era: "2020s", c: 0.66, hot: false },
    { name: "数字生命", era: "未来", c: 0.84, hot: true },
  ];
  const sig = (f: number, c: number) => 1 / (1 + Math.exp(-K * (f - c)));
  const xAt = (f: number) => X0 + f * W;
  const yAt = (f: number, c: number) => Y_BOT - sig(f, c) * H;
  const pathFor = (c: number) => {
    const fa = Math.max(0, c - 0.17);
    const fb = Math.min(1, c + 0.17);
    const n = 32;
    let d = "";
    for (let i = 0; i <= n; i++) {
      const f = fa + ((fb - fa) * i) / n;
      d += (i === 0 ? "M " : " L ") + xAt(f).toFixed(1) + " " + yAt(f, c).toFixed(1);
    }
    return d;
  };

  return (
    <svg
      className="vi-svg"
      viewBox="0 0 960 440"
      width={960}
      height={440}
      aria-hidden
    >
      {/* 轴 */}
      <g className="vi-grid">
        <line x1={X0} y1="46" x2={X0} y2={Y_BOT} />
        <line x1={X0} y1={Y_BOT} x2={X1} y2={Y_BOT} />
      </g>
      <text className="vi-axis-y" x={X0 - 12} y={Y_TOP + 6}>
        接受度 1
      </text>
      <text className="vi-axis-y" x={X0 - 12} y={Y_BOT}>
        0
      </text>
      <text className="vi-axis-x" x={X1} y={Y_BOT + 46}>
        时间 / 年代 →
      </text>

      {/* 接受度饱和参照线（=1：成为空气） */}
      <line className="vi-asymptote" x1={X0} y1={Y_TOP} x2={X1} y2={Y_TOP} />

      {/* 5 条 Sigmoid 接受度曲线 */}
      <g className={`vi-waves ${lit ? "is-lit" : ""}`}>
        {waves.map((w, i) => {
          const satF = Math.min(1, w.c + 0.12);
          const isLast = i === waves.length - 1;
          return (
            <g
              key={w.name}
              className={`vi-wave ${w.hot ? "is-hot" : ""}`}
              style={{ ["--wd" as string]: `${i * 260}ms` }}
            >
              <path className="vi-wave-line" d={pathFor(w.c)} />
              <circle
                className="vi-wave-dot"
                cx={xAt(satF)}
                cy={yAt(satF, w.c)}
                r={w.hot ? 6 : 4.5}
              />
              <text
                className="vi-wave-label"
                x={xAt(satF)}
                y={Y_TOP - 12}
                textAnchor={isLast ? "end" : "middle"}
              >
                {w.name}
              </text>
              <text className="vi-wave-era" x={xAt(w.c)} y={Y_BOT + 24}>
                {w.era}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
