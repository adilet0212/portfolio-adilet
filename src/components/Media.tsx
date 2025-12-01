"use client";

import Image from "next/image";
import React from "react";

type Ratio = "16/9" | "4/3" | "1/1";
const ratioClass: Record<Ratio, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

type FigureProps = {
  src: string;
  alt?: string;
  caption?: string;
  ratio?: Ratio;
  priority?: boolean;
  /** If true, uses <img> instead of next/image to keep GIF animation */
  gif?: boolean;
};

export function Figure({
  src,
  alt = "",
  caption,
  ratio = "16/9",
  priority = false,
  gif = false,
}: FigureProps) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-800">
      <div className={`relative w-full ${ratioClass[ratio]}`}>
        {gif ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 960px"
            priority={priority}
          />
        )}
      </div>
      {caption && (
        <figcaption className="bg-neutral-50 px-4 py-2 text-center text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

type MediaGridProps = {
  items: Array<{ src: string; alt?: string; gif?: boolean }>;
  cols?: 2 | 3;
  ratio?: Ratio;
};

export function MediaGrid({ items, cols = 2, ratio = "16/9" }: MediaGridProps) {
  return (
    <div
      className={`my-6 grid gap-4 ${
        cols === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {items.map((it, i) => (
        <Figure key={i} src={it.src} alt={it.alt ?? ""} ratio={ratio} gif={it.gif} />
      ))}
    </div>
  );
}

type VideoProps = {
  src: string;
  caption?: string;
  ratio?: Ratio;
  auto?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
};

export function Video({
  src,
  caption,
  ratio = "16/9",
  auto = true,
  loop = true,
  muted = true,
  controls = true,
}: VideoProps) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-800">
      <div className={`relative w-full ${ratioClass[ratio]}`}>
        <video
          className="h-full w-full object-cover"
          src={src}
          autoPlay={auto}
          loop={loop}
          muted={muted}
          controls={controls}
          playsInline
        />
      </div>
      {caption && (
        <figcaption className="bg-neutral-50 px-4 py-2 text-center text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}