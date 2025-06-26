"use client";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const testimonials = [
  {
    name: "Jane Doe",
    avatar: "/window.svg",
    quote: "Working with you was a fantastic experience. The project was delivered on time and exceeded expectations!"
  },
  {
    name: "John Smith",
    avatar: "/globe.svg",
    quote: "Your attention to detail and design sense is top-notch. Highly recommended!"
  },
  {
    name: "Emily Lee",
    avatar: "/file.svg",
    quote: "Professional, creative, and reliable. I would love to collaborate again!"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <TiltCard key={t.name}>
            <motion.div
              className="card bg-card p-7 flex flex-col items-center text-center shadow-xl border border-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4 border-2 border-cyan-400" />
              <blockquote className="text-slate-200 italic mb-3">“{t.quote}”</blockquote>
              <div className="text-cyan-300 font-semibold">{t.name}</div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
} 