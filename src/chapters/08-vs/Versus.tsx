import { Reveal } from "../../shared/Reveal";
import { NumberTicker } from "../../shared/NumberTicker";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./Versus.css";

const A = (n: string) => `${import.meta.env.BASE_URL}assets/${n}`;

/** 列＝竞品形态（前四列竞品，末列 mech-claw 高亮） */
type Col = { key: string; name: string; sub: string; img?: string; us?: boolean };
const COLS: Col[] = [
  { key: "plush", name: "萌宠桌宠", sub: "Eilik / Moflin / 芙崽", img: "eilik.jpg" },
  { key: "kids", name: "儿童机器人", sub: "Miko / Luka / BubblePal", img: "miko3.jpg" },
  { key: "speaker", name: "聊天音箱", sub: "已逝标杆 · Moxie", img: "moxie.webp" },
  { key: "lovot", name: "高端陪伴", sub: "LOVOT · $3,300+", img: "lovot.jpg" },
  { key: "us", name: "mech-claw", sub: "给 5–10 岁孩子的伙伴", us: true },
];

/** 单元格状态：y=具备 / n=没有 / p=部分·渐进 */
type Cell = "y" | "n" | "p";
/** 行＝能力维度（顺序＝按列点亮的视觉节奏；source: article §七 对比表） */
type Row = {
  key: string;
  label: string;
  note?: string; // mech-claw 列内的小注
  cells: Cell[]; // 长度 5，按 COLS 顺序
  exclusive?: boolean; // 仅 mech-claw ✓（独有，重点标）
};
const ROWS: Row[] = [
  { key: "touch", label: "表情 / 触感", cells: ["y", "p", "y", "y", "y"] },
  { key: "talk", label: "强对话（大模型）", cells: ["n", "y", "y", "p", "y"] },
  { key: "legs", label: "真腿足运动", note: "腿足行走", cells: ["n", "n", "n", "p", "y"] },
  {
    key: "program",
    label: "自然语言现场编程",
    note: "说一句就学会",
    cells: ["n", "n", "n", "n", "y"],
    exclusive: true,
  },
  { key: "teach", label: "孩子可教 · 共同成长", cells: ["n", "n", "n", "n", "y"] },
  { key: "soul", label: "换身体 · 延续灵魂", cells: ["n", "n", "n", "n", "y"] },
  { key: "local", label: "本地优先 · 不变砖", cells: ["p", "p", "n", "p", "y"] },
  { key: "cost", label: "家庭级成本", note: "目标价", cells: ["y", "y", "n", "n", "y"] },
];

/** 六条「别人 X → 我们 Y」对照（按序＝口播 step1..6；对应一个能力维度行） */
const CONTRASTS = [
  { rowKey: "legs", them: "固定动画", us: "会生长的行为", tail: "你说一句话，它就学会一个新动作" },
  { rowKey: "teach", them: "单向陪伴", us: "相互成就", tail: "孩子教它本领，它陪孩子长大" },
  { rowKey: "talk", them: "只会聊天", us: "用身体陪你", tail: "真正的腿足运动，临场感不可替代" },
  { rowKey: "local", them: "把朋友放在云上", us: "让灵魂活在账号里", tail: "公司在不在，伙伴都在" },
  { rowKey: "soul", them: "孩子长大就结束", us: "陪他一起长大", tail: "灵魂连续，身体可换" },
  { rowKey: "cost", them: "拼绝对性能", us: "做到买得起", tail: "把具身智能下放，是我们的护城河" },
];

/**
 * 08 · vs — 和竞品的区别（7 step / 2 幕）
 *   A(0)   能力对比矩阵铺开：5 形态 × 8 能力，mech-claw 列高亮，✓/✗ 逐列点亮
 *   B(1-6) 矩阵缩到左侧 → 六条「别人 X → 我们 Y」逐条 wipe-r 揭示（联动对应行）
 */
export default function Versus({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 0;
  const sceneB = step >= 1;

  // Scene A：第 i 列在 step0 内依次点亮（列点亮节奏，含末列高亮列）
  // Scene B：矩阵全亮；当前激活的对照行 = CONTRASTS[step-1].rowKey
  const activeRowKey = sceneB ? CONTRASTS[step - 1]?.rowKey : undefined;

  return (
    <div className="vs-root">
      {/* 持续氛围：极淡网格 + 暖角晕 */}
      <div className="vs-ambient" aria-hidden>
        <span className="vs-amb-grid" />
        <span className="vs-amb-glow" />
      </div>

      {/* ════════ Scene A · 能力对比矩阵铺开 ════════ */}
      <SceneFade active={sceneA}>
        <div className="vs-a">
          <Reveal kind="fall" duration={560} className="vs-a-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;HEAD-TO-HEAD · 能力对比矩阵
          </Reveal>
          <Reveal kind="rise" duration={720} delay={120} className="vs-a-h serif-cn">
            把我们和市面上的代表放一起，
            <span className="vs-em">差别一眼看出来</span>。
          </Reveal>

          <Reveal kind="wipe-r" duration={1000} delay={360} className="vs-matrix-wrap">
            <Matrix columnsLit={Infinity} />
          </Reveal>
        </div>
      </SceneFade>

      {/* ════════ Scene B · 六条对照 ════════ */}
      <SceneFade active={sceneB}>
        <div className="vs-b">
          <Reveal kind="fall" duration={520} className="vs-b-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;别人 X　/　我们 Y　·　六个差别
          </Reveal>

          <div className="vs-split">
            {/* 左：缩小版矩阵，当前对照行高亮 */}
            <div className="vs-mini">
              <Matrix columnsLit={Infinity} compact activeRowKey={activeRowKey} />
            </div>

            {/* 右：六条对照逐条揭示 */}
            <div className="vs-rows">
              {CONTRASTS.map((c, i) => {
                const n = i + 1;
                if (!at(n)) return null;
                const isLive = step === n;
                return (
                  <Reveal
                    key={c.rowKey}
                    kind="wipe-r"
                    duration={720}
                    className={`vs-cr${isLive ? " is-live" : ""}`}
                  >
                    <span className="vs-cr-no mono">
                      {String(n).padStart(2, "0")}
                    </span>
                    <span className="vs-cr-them">
                      <span className="vs-cr-tag mono">别人</span>
                      <span className="vs-cr-them-t">{c.them}</span>
                    </span>
                    <span className="vs-cr-arrow" aria-hidden>→</span>
                    <span className="vs-cr-us">
                      <span className="vs-cr-tag is-accent mono">我们</span>
                      <span className="vs-cr-us-t serif-cn">{c.us}</span>
                      <span className="vs-cr-tail">{c.tail}</span>
                    </span>
                  </Reveal>
                );
              })}

              {/* 收束：护城河（最后一条出齐后补一行落点） */}
              {at(6) && (
                <Reveal kind="rise" duration={760} delay={260} className="vs-moat">
                  <span className="vs-moat-rule" aria-hidden />
                  <span className="vs-moat-t serif-cn">
                    把具身智能，做到
                    <NumberTicker
                      to={3300}
                      from={0}
                      decimals={0}
                      duration={1000}
                      delay={420}
                      prefix="别人 $"
                      className="vs-moat-num display-en"
                    />
                    <span className="vs-moat-vs"> 的事，我们做成</span>
                    <span className="vs-em"> 买得起</span>
                  </span>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </SceneFade>
    </div>
  );
}

/**
 * 自绘能力对比矩阵 —— 列＝形态（末列 mech-claw 高亮），行＝能力。
 * 单元格用 CSS/SVG 画 ✓ / ✗（不用 emoji）；逐列点亮（CSS 列错峰）。
 *   - exclusive 行：仅 mech-claw ✓，整行加"独有"重点标。
 *   - compact：Scene B 左侧缩小版；activeRowKey 高亮当前对照维度。
 */
function Matrix({
  columnsLit,
  compact = false,
  activeRowKey,
}: {
  columnsLit: number;
  compact?: boolean;
  activeRowKey?: string;
}) {
  return (
    <div className={`vs-matrix${compact ? " is-compact" : ""}`}>
      {/* 列头 */}
      <div className="vs-mx-head" role="row">
        <span className="vs-mx-corner" aria-hidden />
        {COLS.map((c, ci) => (
          <span
            key={c.key}
            className={`vs-mx-col${c.us ? " is-us" : ""}`}
            style={{ animationDelay: `${ci * 130}ms` }}
            data-lit={ci < columnsLit}
          >
            {c.us ? (
              <span className="vs-mx-usglyph" aria-hidden>
                <UsGlyph />
              </span>
            ) : (
              c.img && (
                <span className="vs-mx-thumb" aria-hidden>
                  <img src={A(c.img)} alt="" loading="eager" />
                </span>
              )
            )}
            <span className="vs-mx-col-name">{c.name}</span>
            {!compact && <span className="vs-mx-col-sub mono">{c.sub}</span>}
          </span>
        ))}
      </div>

      {/* 数据行 */}
      <div className="vs-mx-body">
        {ROWS.map((r) => {
          const active = activeRowKey === r.key;
          return (
            <div
              key={r.key}
              className={`vs-mx-row${r.exclusive ? " is-exclusive" : ""}${
                active ? " is-active" : ""
              }`}
              role="row"
            >
              <span className="vs-mx-label">
                {r.label}
                {r.exclusive && !compact && (
                  <span className="vs-mx-only mono">独有</span>
                )}
              </span>
              {r.cells.map((cell, ci) => {
                const col = COLS[ci];
                const lit = ci < columnsLit;
                return (
                  <span
                    key={col.key}
                    className={`vs-mx-cell c-${cell}${col.us ? " is-us" : ""}`}
                    style={{ transitionDelay: `${ci * 90}ms` }}
                    data-lit={lit}
                  >
                    <Mark cell={cell} />
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** ✓ / ✗ / 部分点 —— 纯 SVG 描边，不用 emoji */
function Mark({ cell }: { cell: Cell }) {
  if (cell === "y") {
    return (
      <svg className="vs-mk vs-mk-y" viewBox="0 0 24 24" aria-hidden>
        <path d="M5 12.5 L10 17.5 L19 6.5" />
      </svg>
    );
  }
  if (cell === "n") {
    return (
      <svg className="vs-mk vs-mk-n" viewBox="0 0 24 24" aria-hidden>
        <line x1="7" y1="7" x2="17" y2="17" />
        <line x1="17" y1="7" x2="7" y2="17" />
      </svg>
    );
  }
  // partial · 半实心点（渐进/部分）
  return (
    <svg className="vs-mk vs-mk-p" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="6" className="vs-mk-p-ring" />
      <path d="M12 6 A6 6 0 0 1 12 18 Z" className="vs-mk-p-half" />
    </svg>
  );
}

/** mech-claw 列头自绘符号 —— 暖琥珀腿足小生物剪影（非 emoji、非假 logo） */
function UsGlyph() {
  return (
    <svg viewBox="0 0 48 48" width={48} height={48} aria-hidden>
      {/* 机体 */}
      <rect x="13" y="15" width="22" height="15" rx="5" className="vs-ug-body" />
      {/* 眼 */}
      <circle cx="20" cy="22" r="2.1" className="vs-ug-eye" />
      <circle cx="28" cy="22" r="2.1" className="vs-ug-eye" />
      {/* 腿足 */}
      <path
        d="M16 30 L13 40 M22 31 L20 41 M26 31 L28 41 M32 30 L35 40"
        className="vs-ug-leg"
      />
      {/* 天线脉冲 */}
      <line x1="24" y1="15" x2="24" y2="9" className="vs-ug-ant" />
      <circle cx="24" cy="7.5" r="2" className="vs-ug-spark" />
    </svg>
  );
}
