"use client";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="w-full overflow-hidden"
      initial={{ x: 0 }}
      animate={{ x: [0, 40, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
        <defs>
          <linearGradient id="divider-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"
          fill="url(#divider-gradient)"
          opacity="0.7"
        />
      </svg>
    </motion.div>
  );
} 