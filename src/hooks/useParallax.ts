"use client";

import { useEffect } from "react";

type Opts = {
  maxTranslate?: number; // px
  maxRotate?: number;    // deg
};

export default function useParallax<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  { maxTranslate = 12, maxRotate = 4 }: Opts = {}
) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;          // early out on first mount if no element yet

    const el = node;            // el is now non-null (type T)
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);

        const clamp = (v: number, min: number, max: number) =>
          Math.max(min, Math.min(max, v));

        const tx = clamp(dx * maxTranslate, -maxTranslate, maxTranslate);
        const ty = clamp(dy * maxTranslate, -maxTranslate, maxTranslate);
        const rx = clamp(-dy * maxRotate, -maxRotate, maxRotate);
        const ry = clamp(dx * maxRotate, -maxRotate, maxRotate);

        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    };

    const reset = () => {
      el.style.transform = "";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", reset);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, [ref, maxRotate, maxTranslate]);
}