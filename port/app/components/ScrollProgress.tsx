"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScroll(height ? scrolled / height : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 z-[100]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        className="h-full bg-cyan-400"
        style={{ scaleX: scroll, originX: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </motion.div>
  );
} 