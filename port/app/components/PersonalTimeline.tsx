"use client";
import SectionDivider from "./SectionDivider";

const timeline = [
  {
    year: "2020",
    title: "Started Coding",
    description: "Began my journey with JavaScript and built my first web app."
  },
  {
    year: "2021",
    title: "First Internship",
    description: "Worked as a frontend intern, learned React and contributed to real projects."
  },
  {
    year: "2022",
    title: "Open Source Contributor",
    description: "Contributed to open source, published my own NPM package, and grew my network."
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    description: "Built and launched several full stack apps using Next.js, Node.js, and Tailwind CSS."
  },
  {
    year: "2024",
    title: "Portfolio 2.0",
    description: "Launched this modern portfolio and started freelancing for global clients."
  }
];

export default function PersonalTimeline() {
  return (
    <section id="timeline" className="py-16 px-4 flex justify-center">
      <div className="max-w-2xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">My Journey</h2>
        <div className="relative border-l-4 border-cyan-400/60 pl-8 mx-auto" style={{ minHeight: 300 }}>
          {timeline.map((item, i) => (
            <div key={item.year} className="mb-10 last:mb-0 relative flex flex-col items-center">
              <div className="absolute -left-5 top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-card" />
              <div className="card bg-card p-6 shadow-xl border border-white/10 w-full max-w-md mx-auto">
                <div className="text-cyan-300 font-bold text-lg mb-1 text-center">{item.year}</div>
                <div className="text-white font-semibold mb-1 text-center">{item.title}</div>
                <div className="text-slate-200 text-center">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
} 