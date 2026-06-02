import { createElement, type CSSProperties, type ReactNode } from "react";
import "./Reveal.css";

/** 入场动画类型 —— 按内容选，不要全程单一 */
export type RevealKind =
  | "rise" // 下方 28px 升起（默认）
  | "fall" // 顶部落下
  | "fade" // 纯淡入
  | "blur" // blur 18px→0 + 上移（hero 标题/金句）
  | "wipe-r" // 自左 clip 揭开（表格行/卡片/强调条）
  | "tight" // 字距 0.4em→ 收紧（词语点题）
  | "scale"; // 0.92→1 放大（产品/卡片）

type AsTag = "div" | "span" | "h1" | "h2" | "h3" | "p" | "em" | "strong";

interface Props {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  kind?: RevealKind;
  className?: string;
  style?: CSSProperties;
  as?: AsTag;
}

/**
 * 入场动画包装 —— 条件挂载即重播（配 `at(n) && <Reveal/>`）。
 * 移植自 web-design-website/src/shared/Reveal。
 */
export function Reveal({
  children,
  delay = 0,
  duration = 720,
  kind = "rise",
  className = "",
  style,
  as = "div",
}: Props) {
  return createElement(
    as,
    {
      className: `reveal reveal--${kind} ${className}`.trim(),
      style: {
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        ...style,
      },
    },
    children,
  );
}
