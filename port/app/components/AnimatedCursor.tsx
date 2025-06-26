"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999]"
      animate={{
        x: pos.x - 16,
        y: pos.y - 16,
        scale: clicked ? 1.5 : 1,
        boxShadow: clicked
          ? "0 0 0 8px #22d3ee44"
          : "0 2px 8px 0 #22d3ee33",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      style={{ width: 32, height: 32 }}
    >
      <div className="w-8 h-8 rounded-full bg-cyan-400/80 border-2 border-cyan-300" />
    </motion.div>
  );
} 