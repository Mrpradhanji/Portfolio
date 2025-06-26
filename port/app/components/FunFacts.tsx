"use client";
import { useState } from "react";
import SectionDivider from "./SectionDivider";

const facts = [
  "I can code for 8+ hours straight when in the flow!",
  "I love building side projects and open source tools.",
  "My favorite keyboard shortcut is Ctrl+Shift+L (multi-cursor)!",
  "I once debugged a bug for 6 hours, and it was a missing semicolon.",
  "I enjoy learning new frameworks just for fun.",
  "I drink way too much coffee while coding!"
];

export default function FunFacts() {
  const [index, setIndex] = useState(0);
  function nextFact() {
    let next = Math.floor(Math.random() * facts.length);
    while (next === index) next = Math.floor(Math.random() * facts.length);
    setIndex(next);
  }
  return (
    <section id="fun-facts" className="py-16 px-4 flex justify-center">
      <div className="card max-w-xl w-full p-10 flex flex-col items-center text-center shadow-xl backdrop-blur-lg border border-white/10">
        <h2 className="text-3xl font-bold mb-4 text-white">Fun Fact</h2>
        <p className="text-cyan-300 text-lg mb-6">{facts[index]}</p>
        <button className="btn bg-cyan-400 hover:bg-cyan-500 text-slate-900" onClick={nextFact}>Show Another</button>
      </div>
      <SectionDivider />
    </section>
  );
} 