"use client";

import * as React from "react";

/** Renders the Centennial College logo and hides itself if the image 404s. */
export default function CentennialLogo({ className }: { className?: string }) {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;

  return (
    <img
      src="/icons/centennial.png"
      width={50}
      height={50}
      alt=""
      className={className}
      onError={() => setVisible(false)}
      draggable={false}
    />
  );
}