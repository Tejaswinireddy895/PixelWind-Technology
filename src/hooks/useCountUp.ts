"use client";
import { useState, useEffect } from "react";
export function useCountUp(target: number, duration: number, started: boolean): number {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const t = setInterval(() => { cur = Math.min(cur + step, target); setCount(cur); if (cur >= target) clearInterval(t); }, 16);
    return () => clearInterval(t);
  }, [started, target, duration]);
  return count;
}
