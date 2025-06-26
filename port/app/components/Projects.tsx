'use client';
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description: "A modern web app for managing tasks.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "/file.svg",
    github: "#",
    demo: "#"
  },
  {
    title: "Project Two",
    description: "A portfolio website to showcase my work.",
    tech: ["Next.js", "TypeScript"],
    image: "/globe.svg",
    github: "#",
    demo: "#"
  },
  {
    title: "Project Three",
    description: "A real-time chat application.",
    tech: ["React", "Node.js"],
    image: "/window.svg",
    github: "#",
    demo: "#"
  }
];

type ProjectsProps = {
  filter?: string;
  TiltCard?: ({ children }: { children: React.ReactNode }) => React.ReactElement;
};

export default function Projects({ filter = "All", TiltCard = ({ children }) => <>{children}</> }: ProjectsProps) {
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((project, idx) => (
          <TiltCard key={idx}>
            <div
              className="card bg-card p-7 flex flex-col items-center text-center shadow-xl border border-white/10 transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <Image src={project.image} alt={project.title} width={60} height={60} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-slate-200 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((t) => (
                  <span key={t} className="bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-400/30">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-cyan-300 hover:underline font-medium" target="_blank">GitHub</a>
                <a href={project.demo} className="text-cyan-300 hover:underline font-medium" target="_blank">Live Demo</a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

// Add this to your globals.css:
// .animate-fadein {
//   animation: fadeInUp 0.7s both;
// }
// @keyframes fadeInUp {
//   0% { opacity: 0; transform: translateY(30px); }
//   100% { opacity: 1; transform: translateY(0); }
// } 