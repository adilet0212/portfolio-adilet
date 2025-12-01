'use client';

export function track(event: string, props?: Record<string, any>) {
  // @ts-ignore - Plausible adds a global function at runtime
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    // @ts-ignore
    window.plausible(event, { props });
  }
}