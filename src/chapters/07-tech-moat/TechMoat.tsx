import { Reveal } from "../../shared/Reveal";
import { NumberTicker } from "../../shared/NumberTicker";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./TechMoat.css";

/** 稠密点云粒子坐标（归一化 0..1，收敛成 5×5 语义网格的种子） */
const CLOUD = [
  [0.08, 0.18], [0.15, 0.62], [0.21, 0.35], [0.27, 0.81], [0.33, 0.12],
  [0.36, 0.48], [0.41, 0.7], [0.46, 0.27], [0.5, 0.55], [0.53, 0.88],
  [0.57, 0.15], [0.61, 0.4], [0.64, 0.68], [0.69, 0.22], [0.72, 0.52],
  [0.76, 0.79], [0.79, 0.33], [0.83, 0.6], [0.87, 0.1], [0.9, 0.45],
  [0.12, 0.92], [0.3, 0.6], [0.44, 0.05], [0.66, 0.95], [0.94, 0.74],
  [0.18, 0.45], [0.39, 0.34], [0.58, 0.74], [0.81, 0.18], [0.92, 0.28],
];

const PILLARS = [
  { n: "01", k: "低成本下放", s: "300元 → 稠密点云 → 语义地图" },
  { n: "02", k: "真会动", s: "腿足行走 · 转向 · 做动作" },
  { n: "03", k: "语言即动作", s: "一句话现场生成 · 独门" },
  { n: "04", k: "不会暴毙", s: "数据归孩子 · 断云只降级" },
];

/**
 * 07 · tech-moat — 技术护城河·凭什么能做、且便宜（8 step / 5 幕 / 四条逐幕）
 *   A(0)   标题"四件事" + ①②③④ 编号预览（暗着）
 *   B(1)   ① 低成本下放：稠密点云粒子 → 收敛语义地图网格 + ¥300
 *   C(2)   ② 真会动：静态摆件 / 轮式底盘 / 腿足行走 三态对照
 *   D(3-5) ③ 语言即动作（独门）：标题揭示 → 自然语言→关键帧→安全执行 流程 + 出厂写死 vs 现场设计 → 孩子可教·动作库越陪越丰富
 *   E(6-7) ④ 不会暴毙：标题 → 三层反暴毙堆叠卡逐层点亮
 */
export default function TechMoat({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 0;
  const sceneB = step === 1;
  const sceneC = step === 2;
  const sceneD = step >= 3 && step <= 5;
  const sceneE = step >= 6;

  return (
    <div className="tm-root">
      {/* 持续氛围：极淡蓝图网格 + 缓慢上浮暖尘 */}
      <div className="tm-ambient" aria-hidden>
        <span className="tm-grid" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <span key={i} className={`tm-dust tm-dust-${i}`} />
        ))}
      </div>

      {/* ─── Scene A · 四件事 · 编号预览 ─── */}
      <SceneFade active={sceneA}>
        <div className="tm-a">
          <Reveal kind="fall" duration={600} className="tm-eyebrow mono">
            TECH MOAT · 技术护城河
          </Reveal>
          <Reveal kind="blur" duration={1050} className="tm-a-head serif-cn">
            凭什么能做、还便宜？
            <br />
            <span className="tm-em">四件事。</span>
          </Reveal>
          <div className="tm-a-grid">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.n}
                kind="rise"
                duration={620}
                delay={520 + i * 130}
                className="tm-a-card"
              >
                <span className="tm-a-idx display-en">{p.n}</span>
                <span className="tm-a-k serif-cn">{p.k}</span>
                <span className="tm-a-s mono">{p.s}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </SceneFade>

      {/* ─── Scene B · ① 低成本下放 · 点云 → 语义地图 ─── */}
      <SceneFade active={sceneB}>
        <div className="tm-b">
          <div className="tm-pill-head">
            <Reveal kind="fall" duration={520} className="tm-pill-no mono">
              <span className="tm-pill-no-num display-en">01</span> 低成本 · 下放
            </Reveal>
            <Reveal kind="blur" duration={900} className="tm-pill-h serif-cn">
              <NumberTicker
                to={300}
                from={0}
                decimals={0}
                duration={1000}
                delay={260}
                prefix="¥"
                className="tm-b-num display-en"
              />{" "}
              的相机，跑出
              <span className="tm-em">稠密点云</span>与<span className="tm-em">语义地图</span>
            </Reveal>
          </div>

          <CloudToMap />

          <Reveal kind="rise" duration={640} delay={1700} className="tm-b-legend">
            <span className="tm-b-leg">
              <span className="tm-b-dot tm-b-dot--cloud" /> DA3 彩色稠密点云
            </span>
            <span className="tm-b-arrow mono">收敛为</span>
            <span className="tm-b-leg">
              <span className="tm-b-dot tm-b-dot--map" /> 语义地图 · 端侧本地 AI
            </span>
          </Reveal>
        </div>
      </SceneFade>

      {/* ─── Scene C · ② 真会动 · 三态对照 ─── */}
      <SceneFade active={sceneC}>
        <div className="tm-c">
          <div className="tm-pill-head">
            <Reveal kind="fall" duration={520} className="tm-pill-no mono">
              <span className="tm-pill-no-num display-en">02</span> 真会动
            </Reveal>
            <Reveal kind="blur" duration={900} className="tm-pill-h serif-cn">
              不是静态摆件，也不是轮子底盘——它<span className="tm-em">用腿走</span>。
            </Reveal>
          </div>

          <div className="tm-tri">
            <Reveal kind="rise" duration={560} delay={360} className="tm-tri-cell tm-tri-cell--off">
              <Locomotion mode="static" />
              <span className="tm-tri-tag mono">静态摆件</span>
              <span className="tm-tri-note">不会动 · 摆件</span>
              <span className="tm-tri-x" aria-hidden>✕</span>
            </Reveal>
            <Reveal kind="rise" duration={560} delay={520} className="tm-tri-cell tm-tri-cell--off">
              <Locomotion mode="wheel" />
              <span className="tm-tri-tag mono">轮式底盘</span>
              <span className="tm-tri-note">只能滚 · 受限</span>
              <span className="tm-tri-x" aria-hidden>✕</span>
            </Reveal>
            <Reveal kind="scale" duration={680} delay={720} className="tm-tri-cell tm-tri-cell--on">
              <Locomotion mode="legged" />
              <span className="tm-tri-tag mono">腿足行走</span>
              <span className="tm-tri-note">走 · 转向 · 做动作</span>
              <span className="tm-tri-check" aria-hidden>✓</span>
            </Reveal>
          </div>

          <Reveal kind="fade" duration={620} delay={1020} className="tm-c-foot">
            起止都回到稳定站姿 · 帧级硬安全（关节限幅 / 时长上限 / 自动归位）
          </Reveal>
        </div>
      </SceneFade>

      {/* ─── Scene D · ③ 语言即动作（独门） ─── */}
      <SceneFade active={sceneD}>
        <div className="tm-d">
          {/* step3 标题揭示 */}
          {!at(4) && (
            <div className="tm-d-reveal">
              <Reveal kind="fall" duration={520} className="tm-d-kick mono">
                <span className="tm-pill-no-num display-en">03</span>
                <span className="tm-badge-only mono">独门一手 · ONLY US</span>
              </Reveal>
              <Reveal kind="tight" duration={1000} className="tm-d-big serif-cn">
                语言<span className="tm-em">即</span>动作
              </Reveal>
              <Reveal kind="rise" duration={640} delay={560} className="tm-d-sub">
                可被自然语言<span className="tm-em">现场编程</span>的行为
              </Reveal>
            </div>
          )}

          {/* step4 流程 + 出厂写死 vs 现场设计 */}
          {at(4) && (
            <div className="tm-d-work">
              <div className="tm-pill-head">
                <Reveal kind="fall" duration={460} className="tm-pill-no mono">
                  <span className="tm-pill-no-num display-en">03</span> 语言即动作
                </Reveal>
                <Reveal kind="blur" duration={820} className="tm-pill-h serif-cn">
                  你说一句话，它就<span className="tm-em">现场设计</span>，安全地做出来
                </Reveal>
              </div>

              <SpeechFlow />

              <div className="tm-d-cmp">
                <Reveal kind="wipe-r" duration={700} delay={1400} className="tm-cmp tm-cmp--them">
                  <span className="tm-cmp-lock" aria-hidden>
                    <LockIcon />
                  </span>
                  <span className="tm-cmp-tag mono">别人</span>
                  <span className="tm-cmp-text">出厂<span className="tm-cmp-em-dead">写死</span>的固定动画</span>
                </Reveal>
                <span className="tm-cmp-vs mono">VS</span>
                <Reveal kind="wipe-r" duration={700} delay={1600} className="tm-cmp tm-cmp--us">
                  <span className="tm-cmp-live" aria-hidden>
                    <span className="tm-cmp-live-core" />
                    <span className="tm-cmp-live-ring" />
                  </span>
                  <span className="tm-cmp-tag mono">我们</span>
                  <span className="tm-cmp-text"><span className="tm-em">现场生成</span>的活动作</span>
                </Reveal>
              </div>
            </div>
          )}

          {/* step5 孩子可教 · 动作库越陪越丰富 */}
          {at(5) && (
            <div className="tm-d-teach">
              <Reveal kind="blur" duration={900} className="tm-teach-line serif-cn">
                孩子可以<span className="tm-em">「教」</span>它新动作——
                <br />
                越陪，它的<span className="tm-em">动作库</span>越丰富。
              </Reveal>
              <Reveal kind="rise" duration={700} delay={420} className="tm-lib">
                <LibraryGrowth />
              </Reveal>
              <Reveal kind="fade" duration={780} delay={860} className="tm-teach-foot">
                <span className="tm-teach-foot-tag mono">自学习的根基 · openclaw</span>
                <span className="tm-teach-foot-t serif-cn">
                  它会<span className="tm-em">记得</span>、会
                  <span className="tm-em">成长</span>，越养越懂你的孩子
                </span>
              </Reveal>
            </div>
          )}
        </div>
      </SceneFade>

      {/* ─── Scene E · ④ 不会暴毙 ─── */}
      <SceneFade active={sceneE}>
        <div className="tm-e">
          {/* step6 标题 */}
          {!at(7) && (
            <div className="tm-e-reveal">
              <Reveal kind="fall" duration={520} className="tm-e-kick mono">
                <span className="tm-pill-no-num display-en">04</span> 不会暴毙的伙伴
              </Reveal>
              <Reveal kind="blur" duration={1050} className="tm-e-big serif-cn">
                第四，它<span className="tm-em">不会暴毙</span>。
              </Reveal>
              <Reveal kind="rise" duration={640} delay={560} className="tm-e-sub mono">
                公司在不在，这份成长档案都不丢
              </Reveal>
            </div>
          )}

          {/* step7 三层反暴毙堆叠卡 */}
          {at(7) && (
            <div className="tm-e-stack-wrap">
              <Reveal kind="fall" duration={480} className="tm-e-stack-kick mono">
                反暴毙三层保险
              </Reveal>
              <AntiDeathStack />
            </div>
          )}
        </div>
      </SceneFade>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化 ① · 稠密点云 → 语义地图
 *   左：散乱稠密粒子（DA3 点云）逐个亮起、微抖；
 *   中：连线收敛；右：粒子收束进 5×5 语义网格、网格描边点亮。
 *   （区别于 ch4 那条"成本可行性"三节点流程：这里偏"技术实现"的稠密粒子收敛。）
 * ───────────────────────────────────────────────────────────────────── */
function CloudToMap() {
  const W = 1180;
  const H = 360;
  const padX = 40;
  const usable = W - padX * 2;
  // 点云区在左 0..0.46，语义网格区在右 0.54..1
  const cloudW = usable * 0.42;
  const mapX0 = padX + usable * 0.58;
  const mapW = usable * 0.42;
  const cell = mapW / 5;

  return (
    <div className="tm-cm-wrap">
      <svg
        className="tm-cm"
        viewBox={`0 0 ${W} ${H}`}
        width={W}
        height={H}
        aria-hidden
      >
        {/* 语义地图网格（5×5），描边自画后点亮 */}
        <g className="tm-cm-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`v${i}`}
              className="tm-cm-gridline"
              x1={mapX0 + i * cell}
              y1={40}
              x2={mapX0 + i * cell}
              y2={40 + cell * 5}
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`h${i}`}
              className="tm-cm-gridline"
              x1={mapX0}
              y1={40 + i * cell}
              x2={mapX0 + mapW}
              y2={40 + i * cell}
            />
          ))}
          {/* 被点亮的语义单元（几个"识别出来的区域"） */}
          {[
            [0, 1], [1, 3], [2, 0], [3, 2], [3, 4], [4, 1],
          ].map(([cx, cy], i) => (
            <rect
              key={`c${i}`}
              className={`tm-cm-cell tm-cm-cell-${i}`}
              x={mapX0 + cx * cell + 3}
              y={40 + cy * cell + 3}
              width={cell - 6}
              height={cell - 6}
              rx={3}
            />
          ))}
        </g>

        {/* 稠密点云粒子 → 收束进网格 */}
        {CLOUD.map(([nx, ny], i) => {
          const sx = padX + nx * cloudW;
          const sy = 40 + ny * (cell * 5);
          // 目标：落进某个网格交点附近
          const gc = i % 5;
          const gr = Math.floor(i / 6) % 5;
          const tx = mapX0 + gc * cell + cell / 2;
          const ty = 40 + gr * cell + cell / 2;
          return (
            <g key={i} className={`tm-cm-pt tm-cm-pt-${i % 10}`}>
              <line
                className="tm-cm-trail"
                x1={sx}
                y1={sy}
                x2={tx}
                y2={ty}
                style={{ ["--tx" as string]: `${tx - sx}px`, ["--ty" as string]: `${ty - sy}px` }}
              />
              <circle
                className="tm-cm-dot"
                cx={sx}
                cy={sy}
                r={2.6}
                style={{ ["--tx" as string]: `${tx - sx}px`, ["--ty" as string]: `${ty - sy}px` }}
              />
            </g>
          );
        })}
      </svg>

      <div className="tm-cm-labels">
        <span className="tm-cm-label mono">稠密点云</span>
        <span className="tm-cm-flow mono">→</span>
        <span className="tm-cm-label tm-cm-label--map mono">语义地图</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化 ② · 三态运动对照（静态 / 轮式 / 腿足）—— 各一个自绘小示意
 * ───────────────────────────────────────────────────────────────────── */
function Locomotion({ mode }: { mode: "static" | "wheel" | "legged" }) {
  return (
    <svg className={`tm-loco tm-loco--${mode}`} viewBox="0 0 160 120" aria-hidden>
      {/* 地面线 */}
      <line className="tm-loco-ground" x1="20" y1="100" x2="140" y2="100" />
      {/* 机身 */}
      <rect className="tm-loco-body" x="52" y="40" width="56" height="34" rx="8" />
      <circle className="tm-loco-eye" cx="96" cy="52" r="4.5" />

      {mode === "static" && (
        <g className="tm-loco-base">
          {/* 实心底座（不会动） */}
          <path d="M 56 74 L 104 74 L 116 100 L 44 100 Z" />
        </g>
      )}

      {mode === "wheel" && (
        <g className="tm-loco-wheels">
          <circle cx="66" cy="92" r="11" />
          <circle cx="94" cy="92" r="11" />
          <circle className="tm-loco-hub" cx="66" cy="92" r="3" />
          <circle className="tm-loco-hub" cx="94" cy="92" r="3" />
        </g>
      )}

      {mode === "legged" && (
        <g className="tm-loco-legs">
          {/* 两条会迈步的腿（前后摆） */}
          <g className="tm-leg tm-leg--front">
            <line x1="68" y1="74" x2="68" y2="90" />
            <line x1="68" y1="90" x2="62" y2="100" />
          </g>
          <g className="tm-leg tm-leg--back">
            <line x1="92" y1="74" x2="92" y2="90" />
            <line x1="92" y1="90" x2="98" y2="100" />
          </g>
        </g>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化 ③ · 自然语言 → 模型生成关键帧 → 安全护栏执行（独门）
 *   三节点流程，中段画一排"关键帧"小方块逐个落位，末段套安全护栏。
 * ───────────────────────────────────────────────────────────────────── */
function SpeechFlow() {
  return (
    <div className="tm-sf">
      <div className="tm-sf-node tm-sf-node-0">
        <span className="tm-sf-idx mono">说一句话</span>
        <span className="tm-sf-title serif-cn">自然语言</span>
        <span className="tm-sf-quote mono">「转个圈，挥挥手」</span>
      </div>

      <span className="tm-sf-link tm-sf-link-0" aria-hidden>
        <span className="tm-sf-pulse" />
      </span>

      <div className="tm-sf-node tm-sf-node-1">
        <span className="tm-sf-idx mono">模型生成</span>
        <span className="tm-sf-title serif-cn">关键帧</span>
        <span className="tm-sf-frames" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`tm-sf-frame tm-sf-frame-${i}`} />
          ))}
        </span>
      </div>

      <span className="tm-sf-link tm-sf-link-1" aria-hidden>
        <span className="tm-sf-pulse" />
      </span>

      <div className="tm-sf-node tm-sf-node-2 tm-sf-node--on">
        <span className="tm-sf-idx mono">安全护栏</span>
        <span className="tm-sf-title serif-cn">安全执行</span>
        <span className="tm-sf-guard mono">限幅 · 归位</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化（辅）· 动作库越陪越丰富——一排动作格逐个填满
 * ───────────────────────────────────────────────────────────────────── */
function LibraryGrowth() {
  return (
    <div className="tm-libg">
      <span className="tm-libg-label mono">动作库</span>
      <div className="tm-libg-track">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`tm-libg-cell tm-libg-cell-${i}`} />
        ))}
      </div>
      <span className="tm-libg-grow mono">越陪 · 越丰富 →</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * 中心可视化 ④ · 三层反暴毙堆叠卡（逐层堆叠点亮）
 *   ① 灵魂=数据归孩子所有 / ② 断云只降级不变砖 / ③ 大脑可被本地·社区服务器接管
 * ───────────────────────────────────────────────────────────────────── */
function AntiDeathStack() {
  const layers = [
    {
      n: "01",
      t: "灵魂 = 数据，归孩子所有",
      d: "记忆 · 性格 · 学会的动作，标准格式可导出、可迁移",
    },
    {
      n: "02",
      t: "断云只降级，不变砖",
      d: "运动 · 表情 · 动作 · 本地感知都在端侧；丢的只是最聪明那层对话",
    },
    {
      n: "03",
      t: "大脑可被接管",
      d: "本地 / 社区服务器接管对话（OpenMoxie 已验证可行）",
    },
  ];
  return (
    <div className="tm-stack">
      {layers.map((l, i) => (
        <Reveal
          key={l.n}
          kind="wipe-r"
          duration={720}
          delay={i * 340}
          className={`tm-stack-card tm-stack-card-${i}`}
        >
          <span className="tm-stack-idx display-en">{l.n}</span>
          <span className="tm-stack-bar" aria-hidden />
          <span className="tm-stack-body">
            <span className="tm-stack-t serif-cn">{l.t}</span>
            <span className="tm-stack-d mono">{l.d}</span>
          </span>
        </Reveal>
      ))}
      <div className="tm-stack-base" aria-hidden>
        <span className="tm-stack-base-text mono">不变成一块砖</span>
      </div>
    </div>
  );
}

/* 出厂写死 = 锁死图标 */
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden>
      <rect className="tm-lock-body" x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path className="tm-lock-shackle" d="M 8 10.5 V 7.5 a 4 4 0 0 1 8 0 V 10.5" />
      <circle className="tm-lock-hole" cx="12" cy="15" r="1.6" />
    </svg>
  );
}
