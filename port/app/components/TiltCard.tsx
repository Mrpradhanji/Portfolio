"use client";
import { useRef } from "react";

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `0 8px 32px 0 #22d3ee33, 0 0 0 2px var(--accent)`;
  }

  function handleMouseLeave() {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.boxShadow = "0 4px 32px 0 #0002";
  }

  return (
    <div
      ref={ref}
      className="transition-transform duration-300 will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
} 