"use client";

import Image from "next/image";
import * as React from "react";

type SkillBadgeProps = {
  label: string;
  icon: string;
};

export default function SkillBadge({ label, icon }: SkillBadgeProps) {
  const [failed, setFailed] = React.useState(false);

  return (
    <div
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 shadow-[0_1px_0_0_rgba(255,255,255,.06)_inset] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
      title={label}
    >
      {/* fallback to initial if icon fails */}
      {!failed ? (
        <Image
          src={icon}
          alt=""
          width={18}
          height={18}
          onError={() => setFailed(true)}
          className="select-none"
        />
      ) : (
        <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-white/10 text-[10px] text-white/80">
          {label[0].toUpperCase()}
        </span>
      )}
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}