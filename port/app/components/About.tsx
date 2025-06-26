'use client';
import Image from "next/image";
import { useCallback } from "react";

const skills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
  "OpenCV",
  "Python",
  "AWS (EC2, S3)",
  "Vercel",
];


export default function About() {
  return (
    <section id="about" className="flex justify-center py-16 px-4">
      <div className="card max-w-2xl w-full p-10 flex flex-col items-center text-center shadow-xl backdrop-blur-lg border border-white/10">
        <Image src="/Image/Rohit_Image--.jpeg" alt="Profile" width={100} height={100} className="rounded-full mb-4 border-2 border-cyan-400" />
        <h2 className="text-3xl font-bold mb-2 text-white">About Me</h2>
        <p className="text-slate-200 mb-6">I'm Rohit Singh, a frontend-focused full stack developer with a strong command of React.js, Next.js, and Tailwind CSS. I enjoy building responsive, high-performance web applications that offer great user experiences.

I previously worked as an Assistant Web Developer at SwaLay Digital, where I contributed to modernizing their website and improving frontend consistency using modern development practices. My experience also includes building full-stack applications with the MERN stack, and exploring domains like computer vision and blockchain through academic projects.

I’m comfortable working with technologies like JavaScript, TypeScript, Node.js, Express, MongoDB, Python, and OpenCV.

I’m currently open to full-time opportunities and freelance projects, where I can contribute, grow, and collaborate with teams building meaningful products.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <span key={skill} className="bg-cyan-400/20 text-cyan-200 px-4 py-1 rounded-full text-sm font-medium border border-cyan-400/30">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
} 