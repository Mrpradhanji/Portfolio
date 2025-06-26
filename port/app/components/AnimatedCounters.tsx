"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const counters = [
  { label: "Years Experience", value: 3 },
  { label: "Projects", value: 18 },
  { label: "Clients", value: 7 },
];

export default function AnimatedCounters() {
  return (
    <section className="py-16 px-4">
      <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
        {counters.map((c, i) => (
          <Counter key={c.label} label={c.label} value={c.value} delay={i * 0.3} />
        ))}
      </div>
    </section>
  );
}

function Counter({ label, value, delay }: { label: string; value: number; delay: number }) {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      count: value,
      transition: { duration: 1.5, delay, ease: "easeOut" },
    });
  }, [controls, value, delay]);
  return (
    <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <motion.span
        className="text-5xl font-extrabold text-cyan-400 mb-2"
        animate={controls}
        initial={{ count: 0 }}
      >
        {Math.round(value)}
      </motion.span>
      <span className="text-slate-200 text-lg font-medium">{label}</span>
    </motion.div>
  );
} 