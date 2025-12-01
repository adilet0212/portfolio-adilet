'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CATS = ["All", "AI", "Dev", "Web Apps"] as const;
export type Cat = typeof CATS[number];

export default function ProjectFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const cat = ((sp.get("cat") ?? "All") as Cat);

  const setCat = (next: Cat) => {
    const params = new URLSearchParams(sp.toString());
    if (next === "All") params.delete("cat");
    else params.set("cat", next);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {CATS.map((c) => {
        const active = c === cat;
        return (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={active ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}
            style={active ? { background: "linear-gradient(90deg, var(--accent-1), var(--accent-2))" } : {}}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}