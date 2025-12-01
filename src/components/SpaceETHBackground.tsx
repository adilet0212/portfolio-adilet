"use client";

import * as React from "react";

/**
 * ETH-style animated sky (no three.js):
 * • Two twinkling star canvas layers
 * • Cyan “atmosphere glow” built from soft radial glows (no sharp banding)
 * • Earth image fixed on the right, scaled to cover tall pages
 */
export default function SpaceETHBackground() {
  const c1 = React.useRef<HTMLCanvasElement | null>(null);
  const c2 = React.useRef<HTMLCanvasElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const stars1 = React.useRef<Star[]>([]);
  const stars2 = React.useRef<Star[]>([]);

  React.useEffect(() => {
    const cvs1 = c1.current!;
    const cvs2 = c2.current!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      for (const cvs of [cvs1, cvs2]) {
        cvs.width = Math.floor(w * dpr);
        cvs.height = Math.floor(h * dpr);
        cvs.style.width = w + "px";
        cvs.style.height = h + "px";
      }
      stars1.current = makeStars(Math.floor((w * h) / 14000), cvs1.width, cvs1.height);
      stars2.current = makeStars(Math.floor((w * h) / 9000), cvs2.width, cvs2.height, true);
    };

    resize();
    window.addEventListener("resize", resize);

    const ctx1 = cvs1.getContext("2d")!;
    const ctx2 = cvs2.getContext("2d")!;

    const loop = () => {
      drawLayer(ctx1, stars1.current, 0.12);
      drawLayer(ctx2, stars2.current, 0.18);
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    // z-0 so it sits behind everything
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden eth-sky">
      {/* star canvases */}
      <canvas ref={c1} className="absolute inset-0" />
      <canvas ref={c2} className="absolute inset-0" />

      {/* atmosphere glow — ONLY soft radial glows (no diagonal band) */}
      <div
        className="absolute inset-0 opacity-70 mix-blend-screen"
        style={{
          background: `
            radial-gradient(60% 120% at 85% 45%, rgba(68,194,255,.22), transparent 70%),
            radial-gradient(45% 90% at 95% 65%, rgba(68,194,255,.16), transparent 78%)
          `,
          filter: "blur(28px)",
        }}
      />

      {/* Earth: keep it huge so it always covers the right side on tall pages */}
      <img
        src="/images/space/image.png"
        alt=""
        className="
          absolute select-none mix-blend-screen opacity-95
          right-[-18vw] top-[4vh]
          w-[120vw] max-w-none
          md:right-[-14vw] md:w-[110vw]
          lg:right-[-10vw] lg:w-[100vw]
        "
        draggable={false}
      />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_10%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}

/* ---------- helpers ---------- */
type Star = { x: number; y: number; r: number; a: number; da: number; vx: number };
const rnd = (min: number, max: number) => Math.random() * (max - min) + min;

function makeStars(n: number, w: number, h: number, bright = false): Star[] {
  const arr: Star[] = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: bright ? rnd(0.6, 1.8) : rnd(0.5, 1.2),
      a: Math.random(),
      da: rnd(0.003, 0.01),
      vx: rnd(-0.02, 0.02),
    });
  }
  return arr;
}

function drawLayer(ctx: CanvasRenderingContext2D, stars: Star[], twinkleAmt: number) {
  const { width: w, height: h } = ctx.canvas;
  ctx.clearRect(0, 0, w, h);

  for (const s of stars) {
    s.x += s.vx;
    if (s.x < 0) s.x = w;
    if (s.x > w) s.x = 0;

    s.a += (Math.random() - 0.5) * twinkleAmt;
    if (s.a < 0.08) s.a = 0.08;
    if (s.a > 1) s.a = 1;

    ctx.globalAlpha = s.a;
    const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
    g.addColorStop(0, "rgba(255,255,255,0.95)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}