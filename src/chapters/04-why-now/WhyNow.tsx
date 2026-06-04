import type { SyntheticEvent } from "react";
import { Reveal } from "../../shared/Reveal";
import { NumberTicker } from "../../shared/NumberTicker";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./WhyNow.css";

const SPARKS = [0, 1, 2, 3, 4, 5, 6, 7];
const ASSET = (n: string) => `${import.meta.env.BASE_URL}assets/${n}`;

/** 头像加载失败时隐藏图、露出首字占位 */
function hideImg(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.classList.add("is-missing");
}

/**
 * 04 · why-now — 为什么是现在·2026（7 step / 4 幕）
 *   幕 A(step0-1) 拐点：双曲线自绘(成本↓/能力↑)，2026 交叉点点亮
 *   幕 B(step2-3) 可行 → 大字"下放到家庭级"(核心下注)
 *   幕 C(step4)   反其道：别人拼全能家务 vs ¥300 相机三节点流程
 *   幕 D(step5-6) 第二条底线 → 王弢金句卡(吴恩达学生背书)
 */
export default function WhyNow({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 1;
  const sceneB = step >= 2 && step <= 3;
  const sceneC = step === 4;
  const sceneD = step >= 5;

  return (
    <div className="wn-root">
      {/* 持续氛围：缓慢上浮的暖色尘 + 暗角 */}
      <div className="wn-ambient" aria-hidden>
        {SPARKS.map((i) => (
          <span key={i} className={`wn-spark wn-spark-${i}`} />
        ))}
        <span className="wn-grid" />
      </div>

      {/* ─── Scene A · 拐点 ─── */}
      <SceneFade active={sceneA}>
        <div className="wn-a">
          <Reveal kind="fall" duration={620} className="wn-eyebrow mono">
            WHY NOW ·{" "}
            <NumberTicker
              to={2026}
              from={2019}
              decimals={0}
              duration={1100}
              delay={160}
              className="wn-eyebrow-num"
            />
          </Reveal>

          <Reveal kind="blur" duration={1050} className="wn-a-head serif-cn">
            为什么是 2026？
            <br />
            因为<span className="wn-em">技术拐点</span>，到了。
          </Reveal>

          <div className="wn-chart-wrap">
            <CrossCurves lit={at(1)} />
            {at(1) && (
              <Reveal
                kind="rise"
                duration={700}
                delay={520}
                className="wn-a-legend"
              >
                <span className="wn-leg wn-leg--down">
                  <span className="wn-leg-dash" /> 大模型 · 成本一路向下
                </span>
                <span className="wn-leg wn-leg--up">
                  <span className="wn-leg-line" /> 世界模型 · VLA · GPT-3.5 时刻将至
                </span>
              </Reveal>
            )}
          </div>
        </div>
      </SceneFade>

      {/* ─── Scene B · 可行 → 核心下注 ─── */}
      <SceneFade active={sceneB}>
        <div className="wn-b">
          {!at(3) && (
            <div className="wn-b-feasible">
              <Reveal kind="fade" duration={600} className="wn-kick mono">
                <span className="dot-accent" />
                &nbsp;&nbsp;FIRST TIME · 第一次变得可行
              </Reveal>
              <Reveal kind="blur" duration={920} className="wn-b-line serif-cn">
                第一次，一个<span className="wn-em">会动、有性格</span>的物理伙伴，
                <br />
                在家庭<span className="wn-em">买得起</span>的成本上，变得可行。
              </Reveal>
            </div>
          )}

          {at(3) && (
            <div className="wn-bet">
              <Reveal kind="fall" duration={560} className="wn-bet-kick mono">
                OUR CORE BET · 核心下注
              </Reveal>
              <div className="wn-bet-h serif-cn">
                <Reveal kind="rise" duration={680} className="wn-bet-l1">
                  把具身智能
                </Reveal>
                <Reveal
                  kind="blur"
                  duration={980}
                  delay={300}
                  className="wn-bet-strong"
                >
                  下放到<span className="wn-em">家庭级</span>
                </Reveal>
              </div>
              <Reveal
                kind="rise"
                duration={620}
                delay={780}
                className="wn-bet-sub"
              >
                不等技术成熟到极致　·　现在就坐上牌桌，随成本曲线一起长大
              </Reveal>
            </div>
          )}
        </div>
      </SceneFade>

      {/* ─── Scene C · 反其道 · ¥300 相机流程 ─── */}
      <SceneFade active={sceneC}>
        <div className="wn-c">
          <Reveal kind="fall" duration={560} className="wn-c-kick mono">
            CONTRARIAN · 反其道而行
          </Reveal>

          <div className="wn-c-split">
            <Reveal kind="wipe-r" duration={760} className="wn-c-them">
              <span className="wn-c-them-tag mono">他们</span>
              <span className="wn-c-them-text serif-cn">拼全能家务机器人</span>
            </Reveal>
            <span className="wn-c-vs mono">VS</span>
            <Reveal
              kind="wipe-r"
              duration={760}
              delay={220}
              className="wn-c-us"
            >
              <span className="wn-c-us-tag mono">我们</span>
              <span className="wn-c-us-text serif-cn">
                用<span className="wn-em">低千元级</span>的硬件，先把
                <span className="wn-em">「会看 · 会动 · 会懂 · 能陪」</span>跑通
              </span>
            </Reveal>
          </div>

          <Reveal kind="fade" duration={700} delay={420} className="wn-flow-wrap">
            <span className="wn-flow-cap mono">
              举其中一个组件为例 · 让它「会看」：一颗 ¥300 相机就够
            </span>
            <CameraFlow />
          </Reveal>
        </div>
      </SceneFade>

      {/* ─── Scene D · 底线 → 王弢金句 ─── */}
      <SceneFade active={sceneD}>
        <div className="wn-d">
          <div className="wn-d-line-wrap">
            <Reveal kind="fall" duration={560} className="wn-d-kick mono">
              THE OTHER LINE · 第二条底线
            </Reveal>
            <Reveal kind="blur" duration={900} className="wn-d-line serif-cn">
              先做<span className="wn-em">不容易出错</span>的事，
              <br />
              先赢<span className="wn-em">信任</span>。
            </Reveal>
          </div>

          {at(6) && (
            <Reveal kind="scale" duration={820} delay={120} className="wn-quote">
              <span className="wn-quote-bar" aria-hidden />
              <div className="wn-quote-body">
                <span className="wn-quote-mark" aria-hidden>
                  “
                </span>
                <p className="wn-quote-text pull-quote">
                  机器人十次里摔碎一次杯子，
                  <br />
                  <span className="wn-em">信任就永远没了。</span>
                </p>
                <div className="wn-quote-by">
                  <span className="wn-endorser">
                    <span className="wn-endorser-avatar">
                      <span className="wn-endorser-ph" aria-hidden>王</span>
                      <img
                        className="wn-endorser-img"
                        src={ASSET("wang-tao.jpg")}
                        alt="王弢"
                        onError={hideImg}
                      />
                    </span>
                    <span className="wn-endorser-id">
                      <span className="wn-quote-name serif-cn">王弢</span>
                      <span className="wn-quote-meta mono">
                        ROVAR X3 创始人 · 前·小鹏旗下机器人公司创新战略总监
                      </span>
                    </span>
                  </span>
                  <span className="wn-endorser-link mono" aria-hidden>师从</span>
                  <span className="wn-endorser">
                    <span className="wn-endorser-avatar">
                      <span className="wn-endorser-ph" aria-hidden>吴</span>
                      <img
                        className="wn-endorser-img"
                        src={ASSET("andrew-ng.jpg")}
                        alt="吴恩达"
                        onError={hideImg}
                      />
                    </span>
                    <span className="wn-endorser-id">
                      <span className="wn-quote-name serif-cn">吴恩达</span>
                      <span className="wn-quote-meta mono">
                        AI 先驱 · Google Brain / Coursera 创始人
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </SceneFade>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化 1 · 双曲线：成本↓ / 能力↑，在 2026 交叉（拐点）
 *   两条 path 用 stroke-dashoffset 自画；交叉点 lit 时点亮脉冲。
 * ───────────────────────────────────────────────────────────────────── */
function CrossCurves({ lit }: { lit: boolean }) {
  // viewBox 960×360；交叉点固定在 (560, 196)。
  // 端点对齐坐标轴：左端贴 y 轴(x=70)，右端贴 x 轴右沿(x=906，与 2028 刻度同列)，
  // 成本线降到接近基线(y≈300)收束，避免虚线悬空、与轴对不上。
  const COST = "M 70 80 C 250 104, 440 168, 560 196 S 820 270, 906 300";
  const CAP = "M 70 300 C 250 286, 440 230, 560 196 S 820 104, 906 72";
  return (
    <svg
      className={`wn-chart ${lit ? "is-lit" : ""}`}
      viewBox="0 0 960 360"
      width={960}
      height={360}
      aria-hidden
    >
      {/* 轴 */}
      <line className="wn-axis" x1="70" y1="40" x2="70" y2="320" />
      <line className="wn-axis" x1="70" y1="320" x2="906" y2="320" />
      {/* 交叉处竖参考线 */}
      <line className="wn-cross-guide" x1="560" y1="60" x2="560" y2="320" />

      {/* 成本↓ 曲线（虚线渐隐） */}
      <path className="wn-curve wn-curve--cost" d={COST} />
      {/* 能力↑ 曲线（实线，焦点色） */}
      <path className="wn-curve wn-curve--cap" d={CAP} />

      {/* 轴端标签 */}
      <text className="wn-c-label wn-c-label--cost" x="86" y="76">
        成本
      </text>
      <text className="wn-c-label wn-c-label--cap" x="886" y="60">
        能力
      </text>
      <text className="wn-axis-num mono" x="70" y="344">
        2019
      </text>
      <text className="wn-axis-num mono" x="906" y="344">
        2028
      </text>

      {/* 交叉点 · 拐点 */}
      <g className="wn-cross">
        <circle className="wn-cross-halo" cx="560" cy="196" r="22" />
        <circle className="wn-cross-dot" cx="560" cy="196" r="7" />
        <text className="wn-cross-label mono" x="560" y="158">
          拐点 · 2026
        </text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化 2 · 三节点流程：¥300 相机 → 稠密点云(DA3) → 语义地图
 *   节点逐个点亮、连线自画（CSS 编排，节点 delay 错峰）。
 * ───────────────────────────────────────────────────────────────────── */
function CameraFlow() {
  return (
    <div className="wn-flow">
      <div className="wn-node wn-node-0">
        <span className="wn-node-idx mono">01</span>
        <span className="wn-node-title serif-cn">¥300 相机</span>
        <span className="wn-node-sub mono">低成本传感</span>
      </div>
      <span className="wn-flow-link wn-flow-link-0" aria-hidden>
        <span className="wn-flow-pulse" />
      </span>
      <div className="wn-node wn-node-1">
        <span className="wn-node-idx mono">02</span>
        <span className="wn-node-title serif-cn">稠密点云</span>
        <span className="wn-node-sub mono">DA3 彩色稠密</span>
      </div>
      <span className="wn-flow-link wn-flow-link-1" aria-hidden>
        <span className="wn-flow-pulse" />
      </span>
      <div className="wn-node wn-node-2">
        <span className="wn-node-idx mono">03</span>
        <span className="wn-node-title serif-cn">语义地图</span>
        <span className="wn-node-sub mono">会看 · 懂空间</span>
      </div>
    </div>
  );
}
