"use client";

import Image from "next/image";
import * as React from "react";

export default function IconPill({
  label,
  icon,
}: {
  label: string;
  icon?: string;
}) {
  const [failed, setFailed] = React.useState(false);

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90 shadow-[0_1px_0_0_rgba(255,255,255,.06)_inset] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
      title={label}
    >
      {icon && !failed ? (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="select-none"
          onError={() => setFailed(true)}
        />
      ) : null}
      <span className="whitespace-nowrap">{label}</span>
    </span>
  );
}