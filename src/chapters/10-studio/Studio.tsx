import { useState } from "react";
import { Reveal } from "../../shared/Reveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Studio.css";

const LOGO = `${import.meta.env.BASE_URL}img/studio-logo.png`;
const EMBERS = [0, 1, 2, 3, 4, 5, 6, 7];

/**
 * 10 · studio — 片尾·工作室署名卡（1 step）· 全片落幕
 *   极简：暖暗场 + logo（占位，缺文件时显示占位框）+ slogan（占位草稿，待替换）。
 *   放在 ch9 之后，作为"这就是我们"的品牌签名收束。
 */
export default function Studio(_: ChapterStepProps) {
  return (
    <div className="st-root">
      {/* 余烬氛围（呼应开场 / 北极星，整片首尾相扣） */}
      <div className="st-ambient" aria-hidden>
        {EMBERS.map((i) => (
          <span key={i} className={`st-ember st-ember-${i}`} />
        ))}
      </div>
      <div className="st-glow" aria-hidden />

      <div className="st-card">
        <Reveal kind="scale" duration={900} className="st-logo-wrap">
          <LogoSlot />
        </Reveal>

        <Reveal kind="wipe-r" duration={680} delay={460} className="st-rule" />

        {/* 【SLOGAN 占位草稿】把这句换成你工作室正式的 slogan */}
        <Reveal kind="blur" duration={1000} delay={600} className="st-slogan serif-cn">
          让<span className="st-em">智能生命</span>，走进每一个家庭。
        </Reveal>

        {/* 联系方式行预留：拿到网址/微信/邮箱后，在此加一行 className="st-tag mono" */}
      </div>
    </div>
  );
}

/**
 * logo 槽位 —— 有 public/img/studio-logo.png 则显示图片；
 * 没有则显示克制的占位框（标注期望文件名），方便先看版式后补图。
 */
function LogoSlot() {
  const [ok, setOk] = useState(true);
  if (!ok) {
    return (
      <div className="st-logo-ph" aria-label="logo 占位">
        <span className="st-logo-ph-box" />
        <span className="st-logo-ph-t mono">
          LOGO 占位 · public/img/studio-logo.png
        </span>
      </div>
    );
  }
  return (
    <img
      className="st-logo"
      src={LOGO}
      alt="工作室 logo"
      onError={() => setOk(false)}
    />
  );
}
