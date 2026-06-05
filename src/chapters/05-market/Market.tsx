import { Reveal } from "../../shared/Reveal";
import { NumberTicker } from "../../shared/NumberTicker";
import { SceneFade } from "../../shared/SceneFade";
import { FlickerNumber } from "../../shared/LiveTicker";
import type { ChapterStepProps } from "../../registry/types";
import "./Market.css";

const A = (n: string) => `${import.meta.env.BASE_URL}assets/${n}`;

/** 23 款代表机型缩略墙（逐一确认过扩展名） */
const WALL: string[] = [
  "jibo.jpg",
  "anki_cozmo.png",
  "anki_vector.jpg",
  "kuri.jpg",
  "moxie.webp",
  "eilik.jpg",
  "moflin.jpg",
  "ropet.jpg",
  "fuzozo.jpg",
  "bubblepal.jpg",
  "lovipeer.jpg",
  "miko3.jpg",
  "miko_mini.jpg",
  "luka.png",
  "aibi.jpg",
  "sentigent.png",
  "lepro_ami.jpg",
  "lovot.jpg",
  "loona.webp",
  "emo.jpg",
  "elliq.png",
  "enabot_ebox.jpg",
  "tcl_aime.jpg",
];

/** 墓园四台 + 出身标签 */
const TOMBS = [
  { img: "anki_cozmo.png", name: "Anki", tag: "烧光 $1.8 亿", burn: true },
  { img: "jibo.jpg", name: "Jibo", tag: "MIT 名门" },
  { img: "kuri.jpg", name: "Kuri", tag: "背靠博世" },
  { img: "moxie.webp", name: "Moxie", tag: "验证临床价值" },
];

/** 在售萌宠墙 */
const PLUSH = [
  { img: "eilik.jpg", name: "Eilik", tag: "$139 · 情感桌宠" },
  { img: "moflin.jpg", name: "Moflin", tag: "$429 · 无屏毛绒" },
  { img: "ropet.jpg", name: "Ropet", tag: "$349 · 毛绒陪伴" },
  { img: "fuzozo.jpg", name: "芙崽", tag: "¥399 · 国内首款" },
  { img: "bubblepal.jpg", name: "BubblePal", tag: "¥399 · AI 挂坠" },
  { img: "lovipeer.jpg", name: "loviPeer", tag: "¥699 · 平价陪伴" },
];

/** 儿童线 */
const KIDS = [
  { img: "miko3.jpg", name: "Miko", tag: "会动+触屏 · $199+订阅", sub: "Moxie 的娱乐型后继" },
  { img: "luka.png", name: "Luka", tag: "绘本阅读 · 百万+/台", sub: "绘本阅读切入，窄而稳" },
];

/** Venn 四个维度 */
const AXES = ["会动", "懂孩子", "陪伴长大", "活得久"];

/**
 * 05 · market — 市场地图·我们站在哪里（10 step / 4 幕）
 *   A(0)  23 款缩略墙 + NumberTicker(23)
 *   B(1-4) 墓园：四台卡 → 全倒 → 死因三连 → 断云·变砖（FlickerNumber 活元素）
 *   C(5-6) 在售萌宠墙 → 固定动画批注
 *   C2(7)  儿童线（独立一幕，萌宠墙淡出）· Miko/Luka/空位
 *   D(8-9) 四圆 Venn 自绘 → 中心交集点亮"我们要站的地方"
 */
export default function Market({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step <= 0;
  const sceneB = step >= 1 && step <= 4;
  const sceneC = step >= 5 && step <= 6;
  const sceneC2 = step === 7;
  const sceneD = step >= 8;

  return (
    <div className="mk-root">
      {/* 持续氛围：极淡网格 + 暖角晕 */}
      <div className="mk-ambient" aria-hidden>
        <span className="mk-amb-grid" />
        <span className="mk-amb-glow" />
      </div>

      {/* ════════ Scene A · 23 款缩略墙 ════════ */}
      <SceneFade active={sceneA}>
        <div className="mk-a">
          <Reveal kind="fall" duration={600} className="mk-a-eye mono">
            MARKET MAP · 23 UNITS SCANNED
          </Reveal>
          <div className="mk-wall" aria-hidden>
            {WALL.map((src, i) => (
              <span
                className="mk-wall-cell"
                key={src}
                style={{ animationDelay: `${120 + i * 64}ms` }}
              >
                <img src={A(src)} alt="" loading="eager" />
              </span>
            ))}
          </div>
          <Reveal kind="rise" duration={760} delay={760} className="mk-a-cap">
            <span className="serif-cn mk-a-h">
              这个赛道，我们认真扫过
            </span>
            <span className="mk-a-sub">
              <NumberTicker
                to={23}
                from={0}
                decimals={0}
                duration={1100}
                delay={900}
                className="mk-a-num display-en"
              />
              <span className="mk-a-sub-t">款代表机型 · 一张清晰的地图</span>
            </span>
          </Reveal>
        </div>
      </SceneFade>

      {/* ════════ Scene B · 墓园 ════════ */}
      <SceneFade active={sceneB}>
        <div className="mk-b">
          <Reveal kind="fall" duration={560} className="mk-sec-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;01 · THE GRAVEYARD　墓园
          </Reveal>

          {/* 四台墓碑卡 */}
          <div className="mk-tombs">
            {TOMBS.map((t, i) => (
              <Reveal
                key={t.name}
                kind="scale"
                duration={640}
                delay={120 + i * 130}
                className={`mk-tomb${at(4) ? " is-brick" : ""}`}
              >
                <div className="mk-tomb-frame">
                  <img className="mk-tomb-img" src={A(t.img)} alt={t.name} />
                  <span className="mk-tomb-x" aria-hidden>
                    <svg viewBox="0 0 40 40">
                      <line x1="8" y1="8" x2="32" y2="32" />
                      <line x1="32" y1="8" x2="8" y2="32" />
                    </svg>
                  </span>
                </div>
                <span className="mk-tomb-name display-en">{t.name}</span>
                <span className={`mk-tomb-tag${t.burn ? " is-burn" : ""}`}>
                  {t.tag}
                </span>
              </Reveal>
            ))}
          </div>

          {/* step2 · 全倒了 */}
          <div className="mk-b-verdict">
            {at(2) && (
              <Reveal kind="blur" duration={840} className="mk-b-line serif-cn">
                四个，<span className="mk-em">全倒了</span>。
                <span className="mk-b-sub">
                  钱 · 名校 · 技术天才，都没能救它们
                </span>
              </Reveal>
            )}
          </div>

          {/* step3 · 死因三连 */}
          {at(3) && (
            <div className="mk-causes">
              {["现金流断了", "缺一个长期用下去的理由", "太依赖云"].map(
                (c, i) => (
                  <Reveal
                    key={c}
                    kind="wipe-r"
                    duration={620}
                    delay={i * 200}
                    className="mk-cause"
                  >
                    <span className="mk-cause-no mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mk-cause-t">{c}</span>
                  </Reveal>
                ),
              )}
            </div>
          )}

          {/* step4 · 断云 · 变砖（活元素） */}
          {at(4) && (
            <Reveal kind="rise" duration={720} className="mk-brick-bar">
              <CloudLink />
              <span className="mk-brick-arrow" aria-hidden>→</span>
              <span className="mk-brick-state">
                <span className="mk-brick-dot" />
                OFFLINE · 已变砖
              </span>
              <span className="mk-brick-cap serif-cn">
                服务器一关，机器人就变成一块<span className="mk-em">砖</span>
              </span>
            </Reveal>
          )}
        </div>
      </SceneFade>

      {/* ════════ Scene C · 在售 ════════ */}
      <SceneFade active={sceneC}>
        <div className="mk-c">
          <Reveal kind="fall" duration={560} className="mk-sec-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;02 · ON SALE　在售格局
          </Reveal>

          {/* step5 · 萌宠墙 */}
          <div className="mk-plush-head">
            <Reveal kind="rise" duration={680} className="mk-c-h serif-cn">
              一大片<span className="mk-em">萌宠桌宠</span>
            </Reveal>
            <Reveal kind="rise" duration={620} delay={180} className="mk-c-sub">
              可爱 · 便宜 · 走量
            </Reveal>
          </div>
          <div className="mk-plush">
            {PLUSH.map((p, i) => (
              <Reveal
                key={p.name}
                kind="scale"
                duration={560}
                delay={120 + i * 90}
                className="mk-pl-card"
              >
                <img className="mk-pl-img" src={A(p.img)} alt={p.name} />
                <span className="mk-pl-name">{p.name}</span>
                <span className="mk-pl-tag mono">{p.tag}</span>
              </Reveal>
            ))}
          </div>

          {/* step6 · 固定动画批注 */}
          <div className="mk-anno-wrap">
            {at(6) && (
              <Reveal kind="wipe-r" duration={760} className="mk-anno">
                <span className="mk-anno-rule" aria-hidden />
                <span className="mk-anno-t">
                  大多是<span className="mk-strike">固定动画</span>
                  ，靠表情和触感
                  <span className="mk-em">　谈不上真正会动</span>
                </span>
              </Reveal>
            )}
          </div>

          {/* 儿童线已拆为独立一幕 Scene C2（见下），不再压在萌宠墙下 */}
        </div>
      </SceneFade>

      {/* ════════ Scene C2 · 儿童线（独立一幕，萌宠墙淡出） ════════ */}
      <SceneFade active={sceneC2}>
        <div className="mk-c2">
          <Reveal kind="fall" duration={560} className="mk-sec-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;03 · KIDS　儿童线
          </Reveal>
          <Reveal kind="rise" duration={720} className="mk-c2-h serif-cn">
            <span className="mk-em">Moxie</span> 验证了需求，
            却留下一个<span className="mk-em">空位</span>
          </Reveal>
          <div className="mk-kids-row">
            {KIDS.map((k, i) => (
              <Reveal
                key={k.name}
                kind="scale"
                duration={560}
                delay={200 + i * 150}
                className="mk-kid-card"
              >
                <img className="mk-kid-img" src={A(k.img)} alt={k.name} />
                <div className="mk-kid-meta">
                  <span className="mk-kid-name">
                    {k.name}
                    <span className="mk-kid-survive mono">幸存</span>
                  </span>
                  <span className="mk-kid-tag">{k.tag}</span>
                  <span className="mk-kid-sub">{k.sub}</span>
                </div>
              </Reveal>
            ))}
            <Reveal
              kind="scale"
              duration={560}
              delay={520}
              className="mk-kid-card mk-kid-gap"
            >
              <span className="mk-gap-mark" aria-hidden>
                ?
              </span>
              <div className="mk-kid-meta">
                <span className="mk-kid-name mk-em">空位</span>
                <span className="mk-kid-tag">
                  既会动 · 又懂孩子 · 能陪伴长大 · 还活得久
                </span>
                <span className="mk-kid-sub">没有一个答案</span>
              </div>
            </Reveal>
          </div>
        </div>
      </SceneFade>

      {/* ════════ Scene D · 四圆 Venn ════════ */}
      <SceneFade active={sceneD}>
        <div className="mk-d">
          <Reveal kind="fall" duration={560} className="mk-sec-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;04 · THE INTERSECTION　四件事的交集
          </Reveal>

          <div className="mk-venn-stage">
            <Venn lit={at(9)} />
            <div className="mk-venn-side">
              <Reveal kind="blur" duration={900} className="mk-d-h serif-cn">
                没有人做到：
                <br />
                既<span className="mk-em">会动</span>，又
                <span className="mk-em">懂孩子</span>，能
                <span className="mk-em">陪伴长大</span>，还
                <span className="mk-em">活得久</span>。
              </Reveal>
              {at(9) && (
                <Reveal kind="rise" duration={820} delay={120} className="mk-d-claim">
                  <span className="mk-claim-t serif-cn">
                    这四件事的交集，今天几乎是<span className="mk-em">空</span>的。
                  </span>
                  <span className="mk-claim-strong serif-cn">
                    那，就是我们要站的<span className="mk-em">地方</span>。
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

/** 断云连接指示 —— FlickerNumber 跳动几下后归零（语义：信号丢失） */
function CloudLink() {
  return (
    <span className="mk-cloud">
      <span className="mk-cloud-label mono">CLOUD LINK</span>
      <span className="mk-cloud-bars" aria-hidden>
        <i className="b0" />
        <i className="b1" />
        <i className="b2" />
        <i className="b3" />
      </span>
      <span className="mk-cloud-num mono">
        <FlickerNumber
          base={2}
          amplitude={1}
          decimals={0}
          intervalMs={360}
          suffix=" kb/s"
          className="mk-cloud-flick"
        />
      </span>
    </span>
  );
}

/**
 * 自绘四圆 Venn —— 会动 / 懂孩子 / 陪伴长大 / 活得久
 * 四个交叠圆，圆周描边生长；中心四交集先空，lit=true 时点亮"我们在这"。
 */
function Venn({ lit }: { lit: boolean }) {
  // 四圆中心绕 (cx,cy) 方形排布，半径偏大以制造四交集
  const cx = 220;
  const cy = 220;
  const o = 78; // 圆心偏移
  const r = 132; // 圆半径
  const circles = [
    { x: cx - o, y: cy - o, cls: "c0", label: AXES[0], lx: cx - o - 96, ly: cy - o - 96 },
    { x: cx + o, y: cy - o, cls: "c1", label: AXES[1], lx: cx + o + 96, ly: cy - o - 96 },
    { x: cx - o, y: cy + o, cls: "c2", label: AXES[2], lx: cx - o - 96, ly: cy + o + 110 },
    { x: cx + o, y: cy + o, cls: "c3", label: AXES[3], lx: cx + o + 96, ly: cy + o + 110 },
  ];
  return (
    <svg
      className={`mk-venn${lit ? " is-lit" : ""}`}
      viewBox="0 0 440 440"
      width={440}
      height={440}
      aria-hidden
    >
      {circles.map((c, i) => (
        <circle
          key={c.cls}
          className={`mk-venn-c ${c.cls}`}
          cx={c.x}
          cy={c.y}
          r={r}
          style={{ animationDelay: `${i * 180}ms` }}
        />
      ))}

      {/* 中心交集高光 */}
      <circle className="mk-venn-core" cx={cx} cy={cy} r={34} />
      {lit && (
        <>
          <circle className="mk-venn-halo" cx={cx} cy={cy} r={46} />
          <text className="mk-venn-here" x={cx} y={cy + 5}>
            我们在这
          </text>
        </>
      )}

      {/* 四象限标签 */}
      {circles.map((c) => (
        <text
          key={`l-${c.cls}`}
          className={`mk-venn-label ${c.cls}`}
          x={c.lx}
          y={c.ly}
          style={{ animationDelay: `700ms` }}
        >
          {c.label}
        </text>
      ))}
    </svg>
  );
}
