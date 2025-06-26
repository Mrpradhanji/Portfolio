"use client";
import { useState, useEffect } from "react";

const colors = [
  { name: "Cyan", value: "#22d3ee" },
  { name: "Violet", value: "#a78bfa" },
  { name: "Emerald", value: "#34d399" },
];

export default function ThemeSwitcher() {
  const [accent, setAccent] = useState(colors[0].value);

  // Only read from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("accent");
    if (stored) setAccent(stored);
    // eslint-disable-next-line
  }, []);

  // Update CSS variables and localStorage when accent changes
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.style.setProperty("--accent-hover", accent + "cc");
    localStorage.setItem("accent", accent);
  }, [accent]);

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-center gap-2">
      <div className="bg-card p-3 rounded-full shadow-lg flex gap-2 border border-white/10">
        {colors.map((c) => (
          <button
            key={c.value}
            aria-label={c.name}
            className={`w-6 h-6 rounded-full border-2 transition ${accent === c.value ? "border-white" : "border-transparent"}`}
            style={{ background: c.value }}
            onClick={() => setAccent(c.value)}
          />
        ))}
      </div>
      <span className="text-xs text-slate-400 mt-1">Accent</span>
    </div>
  );
} 