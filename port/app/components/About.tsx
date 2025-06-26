'use client';
import Image from "next/image";
import { useCallback } from "react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "UI/UX Design",
];

export default function About() {
  return (
    <section id="about" className="flex justify-center py-16 px-4">
      <div className="card max-w-2xl w-full p-10 flex flex-col items-center text-center shadow-xl backdrop-blur-lg border border-white/10">
        <Image src="/Image/Rohit_Image--.jpeg" alt="Profile" width={100} height={100} className="rounded-full mb-4 border-2 border-cyan-400" />
        <h2 className="text-3xl font-bold mb-2 text-white">About Me</h2>
        <p className="text-slate-200 mb-6">I am a passionate developer with experience in building web applications using modern technologies. I love solving problems and learning new things.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <span key={skill} className="bg-cyan-400/20 text-cyan-200 px-4 py-1 rounded-full text-sm font-medium border border-cyan-400/30">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
} 