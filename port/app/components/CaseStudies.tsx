"use client";
import Image from "next/image";
import SectionDivider from "./SectionDivider";

const caseStudies = [
  {
    title: "TaskFlow Pro",
    image: "/file.svg",
    description: "A productivity app for teams to manage tasks, deadlines, and collaboration.",
    process: "Designed wireframes, built with Next.js and Tailwind, integrated real-time updates with Firebase.",
    results: "Increased team productivity by 30% and reduced missed deadlines by 50%."
  },
  {
    title: "DevPortfolio",
    image: "/globe.svg",
    description: "A customizable portfolio template for developers to showcase their work.",
    process: "Researched developer needs, created a modular design system, and open-sourced the code.",
    results: "Used by 500+ developers worldwide and featured on Product Hunt."
  },
  {
    title: "Chatly",
    image: "/window.svg",
    description: "A real-time chat platform for remote teams with file sharing and video calls.",
    process: "Built scalable backend with Node.js, implemented WebSocket for real-time messaging, and designed a clean UI.",
    results: "Adopted by 10+ startups for remote collaboration."
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Case Studies</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {caseStudies.map((c) => (
          <div key={c.title} className="card bg-card p-8 flex flex-col shadow-xl border border-white/10">
            <Image src={c.image} alt={c.title} width={80} height={80} className="mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-white">{c.title}</h3>
            <p className="text-slate-200 mb-2">{c.description}</p>
            <div className="mb-2">
              <span className="font-semibold text-cyan-300">Process:</span>
              <span className="text-slate-200"> {c.process}</span>
            </div>
            <div>
              <span className="font-semibold text-cyan-300">Results:</span>
              <span className="text-slate-200"> {c.results}</span>
            </div>
          </div>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
} 