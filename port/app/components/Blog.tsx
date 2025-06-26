"use client";
import TiltCard from "./TiltCard";
const posts = [
  {
    title: "How to Build a Modern Portfolio with Next.js",
    date: "2024-05-01",
    summary: "A step-by-step guide to creating a beautiful, modern developer portfolio using Next.js and Tailwind CSS.",
    link: "#"
  },
  {
    title: "UI/UX Tips for Developers",
    date: "2024-04-15",
    summary: "Essential UI/UX principles every developer should know to make their projects stand out.",
    link: "#"
  },
  {
    title: "Deploying Your Site with Vercel",
    date: "2024-03-28",
    summary: "Learn how to deploy your Next.js site quickly and easily using Vercel's platform.",
    link: "#"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">Blog & Articles</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <TiltCard key={post.title}>
            <div className="card bg-card p-7 flex flex-col text-left shadow-xl border border-white/10">
              <div className="text-xs text-cyan-300 mb-2">{post.date}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
              <p className="text-slate-200 mb-4">{post.summary}</p>
              <a href={post.link} className="text-cyan-300 hover:underline font-medium mt-auto">Read more →</a>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
} 