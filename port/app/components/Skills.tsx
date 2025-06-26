'use client';
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "JavaScript",
  "HTML",
  "CSS",
  "UI/UX Design",
];

export default function Skills() {
  return (
    <section id="skills" className="flex justify-center py-16 px-4">
      <div className="card max-w-3xl w-full p-10 flex flex-col items-center text-center shadow-xl backdrop-blur-lg border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <span key={skill} className="bg-cyan-400/20 text-cyan-200 px-4 py-1 rounded-full text-sm font-medium border border-cyan-400/30">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
} 