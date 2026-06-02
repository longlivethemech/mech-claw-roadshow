import { useEffect, useState } from "react";

/** 实时时钟 HH:MM:SS —— 给画面注入"此刻正在发生"的真实感。 */
export function LiveClock({ className }: { className?: string }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return (
    <span className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {hh}:{mm}:{ss}
    </span>
  );
}

interface FlickerProps {
  base: number;
  amplitude?: number;
  decimals?: number;
  intervalMs?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * 轻微抖动的数字 —— 给"实时统计/监测"类数据加微噪声，像活的仪表盘。
 * 移植自 web-design-website/src/shared/LiveTicker。
 */
export function FlickerNumber({
  base,
  amplitude = 0.05,
  decimals = 2,
  intervalMs = 1100,
  prefix = "",
  suffix = "",
  className,
}: FlickerProps) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      const noise = (Math.random() - 0.5) * 2 * amplitude * base;
      setVal(base + noise);
    }, intervalMs);
    return () => clearInterval(id);
  }, [base, amplitude, intervalMs]);
  return (
    <span className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
