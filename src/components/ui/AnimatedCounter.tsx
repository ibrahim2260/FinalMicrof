"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  /* accept both "end" (legacy) and "value" (new) */
  end?: number;
  value?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedCounter({
  end,
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
  className = "",
  style,
}: AnimatedCounterProps) {
  const target = value ?? end ?? 0;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (elapsed < durationMs) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, duration, decimals]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  );
}
