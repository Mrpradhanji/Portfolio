"use client";
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-[1000] bg-cyan-400 text-slate-900 px-4 py-2 rounded shadow focus:block focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200 -translate-y-16 focus:translate-y-0"
      tabIndex={0}
    >
      Skip to Content
    </a>
  );
} 