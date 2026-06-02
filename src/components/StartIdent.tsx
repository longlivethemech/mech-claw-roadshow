import "./StartIdent.css";

/**
 * 片头厂牌闪屏 —— 页面加载时一次性播放：暖暗黑场中 logo 淡入 → 短暂停留 → 淡出，
 * 随后整层揭幕，露出开场"火花"。纯 CSS 一次性动画（无定时器 / 不占 step），
 * 结束后 opacity:0 + visibility:hidden + pointer-events:none，完全不挡交互。
 * logo 缺失（onError）时直接隐藏，仅留黑场快速揭幕。
 */
export function StartIdent() {
  const logo = `${import.meta.env.BASE_URL}img/studio-logo.png`;
  return (
    <div className="start-ident" aria-hidden>
      <img
        className="start-ident-logo"
        src={logo}
        alt=""
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}
