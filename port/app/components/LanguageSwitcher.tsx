"use client";
import { useState, useEffect, createContext, useContext } from "react";

const LanguageContext = createContext({ lang: "en", setLang: (l: string) => {} });

export function useLanguage() {
  return useContext(LanguageContext);
}

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored) setLang(stored);
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="fixed top-8 right-8 z-[100] flex gap-2 bg-card p-2 rounded-full shadow-lg border border-white/10">
        {languages.map((l) => (
          <button
            key={l.code}
            className={`px-3 py-1 rounded-full font-medium transition text-sm ${lang === l.code ? "bg-cyan-400 text-slate-900" : "bg-card text-cyan-200 hover:bg-cyan-400/10"}`}
            onClick={() => setLang(l.code)}
          >
            {l.label}
          </button>
        ))}
      </div>
      {children}
    </LanguageContext.Provider>
  );
} 