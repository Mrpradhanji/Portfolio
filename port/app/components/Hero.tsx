'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { PropsWithChildren, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero({ children }: PropsWithChildren) {
  // Parallax/Particles config
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-30 opacity-40 blur-sm"
        poster="/globe.svg"
      >
        <source src="https://www.coverr.co/s3/mp4/coverr-coding-on-laptop-1570.mp4" type="video/mp4" />
        {/* Fallback gradient if video fails */}
      </video>
      {/* Animated Particle Background */}
      <div className="absolute inset-0 -z-20">
        <Particles
          id="tsparticles-hero"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              color: { value: ["#22d3ee", "#a78bfa"] },
              links: { enable: true, color: "#a78bfa", opacity: 0.2 },
              move: { enable: true, speed: 0.3, direction: "none", outModes: "out" },
              number: { value: 40 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
        />
      </div>
      {/* Animated SVG Blob Background */}
      <motion.svg
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        viewBox="0 0 600 600"
        className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-60"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <motion.path
          d="M421.5,320Q410,390,340,420Q270,450,210,410Q150,370,140,300Q130,230,200,180Q270,130,340,170Q410,210,421.5,280Q433,350,421.5,320Z"
          fill="url(#hero-gradient)"
          initial={{ pathLength: 0.9 }}
          animate={{ pathLength: [0.9, 1, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
      <div className="card px-10 py-12 flex flex-col items-center text-center shadow-xl backdrop-blur-lg border border-white/10">
        <Image src="/Image/Rohit_Image--.jpeg" alt="Profile" width={120} height={120} className="rounded-full mb-6 border-4 border-cyan-400 shadow-lg" />
        <h1 className="text-5xl font-extrabold mb-3 text-white">Rohit Singh</h1>
        {children}
        <span className="inline-block bg-cyan-400/20 text-cyan-300 px-4 py-1 rounded-full text-lg font-semibold mb-4">Frontend Developer</span>
        <p className="max-w-xl text-slate-200 mb-8">I build modern, responsive web applications with a focus on great user experience and performance.</p>
        <div className="flex gap-4 justify-center">
          <a href="#contact" className="btn bg-cyan-400 hover:bg-cyan-500 text-slate-900">Contact Me</a>
          <a href="/cv.pdf" download className="btn bg-white/10 hover:bg-white/20 text-cyan-200 border border-cyan-400">Download CV</a>
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css:
// .animate-gradient {
//   background-size: 200% 200%;
//   animation: gradientMove 6s ease-in-out infinite;
// }
// @keyframes gradientMove {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// } 