import { useEffect, useState, type ReactNode } from "react";

interface Props {
  active: boolean;
  /** 退场淡出时长 */
  exitMs?: number;
  /** 进场前等待（让上一幕先退场，避免叠画） */
  enterDelayMs?: number;
  /** 进场淡入时长 */
  enterMs?: number;
  children: ReactNode;
  className?: string;
}

/**
 * 场景交叉淡入淡出容器 —— active 时挂载并延迟淡入，!active 时淡出后卸载。
 * 多个 SceneFade 叠在同一舞台上即实现"幕切换"。
 * 移植自 web-design-website/src/shared/SceneFade。
 */
export function SceneFade({
  active,
  exitMs = 360,
  enterDelayMs = 200,
  enterMs = 520,
  children,
  className = "",
}: Props) {
  const [mounted, setMounted] = useState(active);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let t1 = 0;
    let t2 = 0;
    if (active) {
      setMounted(true);
      t1 = window.setTimeout(() => setVisible(true), enterDelayMs);
    } else {
      setVisible(false);
      t2 = window.setTimeout(() => setMounted(false), exitMs);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active, enterDelayMs, exitMs]);

  if (!mounted) return null;

  return (
    <div
      className={`scene-fade ${className}`.trim()}
      style={{
        position: "absolute",
        inset: 0,
        opacity: visible ? 1 : 0,
        transition: `opacity ${visible ? enterMs : exitMs}ms ease`,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
}
