'use client';
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow bg-white/60 backdrop-blur-lg border-b border-slate-200 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        boxShadow: scrolled ? "0 4px 32px 0 #0002" : undefined,
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#hero" className="font-bold text-2xl tracking-tight text-slate-900">YourLogo</a>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-cyan-500 transition font-medium text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 btn bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-5 py-2 rounded-full font-semibold shadow transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
} 