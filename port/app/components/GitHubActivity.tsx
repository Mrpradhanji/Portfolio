"use client";
import SectionDivider from "./SectionDivider";

export default function GitHubActivity() {
  return (
    <section id="github-activity" className="py-16 px-4 flex justify-center">
      <div className="card max-w-2xl w-full p-10 flex flex-col items-center text-center shadow-xl backdrop-blur-lg border border-white/10">
        <h2 className="text-3xl font-bold mb-4 text-white">GitHub Activity</h2>
        <a
          href="https://github.com/Mrpradhanji"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:underline font-semibold text-lg mb-6"
        >
          Visit my GitHub Profile
        </a>
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=Mrpradhanji&bg_color=181e26&color=22d3ee&line=a78bfa&point=22d3ee&area=true&hide_border=true"
          alt="GitHub Activity Graph"
          className="rounded-lg w-full h-auto mb-4"
          loading="lazy"
        />
      </div>
      <SectionDivider />
    </section>
  );
} 