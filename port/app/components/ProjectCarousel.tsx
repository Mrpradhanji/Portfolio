"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featured = [
  {
    title: "TaskFlow Pro",
    image: "/file.svg",
    description: "A productivity app for teams to manage tasks, deadlines, and collaboration.",
    github: "#",
    demo: "#"
  },
  {
    title: "DevPortfolio",
    image: "/globe.svg",
    description: "A customizable portfolio template for developers to showcase their work.",
    github: "#",
    demo: "#"
  },
  {
    title: "Chatly",
    image: "/window.svg",
    description: "A real-time chat platform for remote teams with file sharing and video calls.",
    github: "#",
    demo: "#"
  }
];

export default function ProjectCarousel() {
  return (
    <section id="project-carousel" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Featured Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {featured.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="card bg-card p-8 flex flex-col items-center text-center shadow-xl border border-white/10 h-full">
              <Image src={project.image} alt={project.title} width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-slate-200 mb-4">{project.description}</p>
              <div className="flex gap-4 mt-auto">
                <a href={project.github} className="text-cyan-300 hover:underline font-medium" target="_blank">GitHub</a>
                <a href={project.demo} className="text-cyan-300 hover:underline font-medium" target="_blank">Live Demo</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 