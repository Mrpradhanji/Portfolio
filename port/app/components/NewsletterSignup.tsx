"use client";
import { useState } from "react";
import SectionDivider from "./SectionDivider";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section id="newsletter" className="py-16 px-4 flex justify-center">
      <div className="card max-w-xl w-full p-10 flex flex-col items-center text-center shadow-xl backdrop-blur-lg border border-white/10">
        <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to My Newsletter</h2>
        <p className="text-slate-200 mb-6">Get the latest articles, project updates, and tips straight to your inbox. No spam, ever.</p>
        {submitted ? (
          <div className="text-cyan-300 font-semibold">Thank you for subscribing!</div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" className="btn bg-cyan-400 hover:bg-cyan-500 text-slate-900">Subscribe</button>
          </form>
        )}
      </div>
      <SectionDivider />
    </section>
  );
} 