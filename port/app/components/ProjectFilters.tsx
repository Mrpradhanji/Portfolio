"use client";
import { useState } from "react";

const filters = ["All", "React", "Next.js", "Node.js", "TypeScript"];

export default function ProjectFilters({ onFilter }: { onFilter: (filter: string) => void }) {
  const [active, setActive] = useState("All");
  return (
    <div className="flex gap-3 justify-center mb-8">
      {filters.map((f) => (
        <button
          key={f}
          className={`px-4 py-1 rounded-full font-medium border transition ${active === f ? "bg-cyan-400 text-slate-900 border-cyan-400" : "bg-card text-cyan-200 border-cyan-400/30 hover:bg-cyan-400/10"}`}
          onClick={() => {
            setActive(f);
            onFilter(f);
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
} 