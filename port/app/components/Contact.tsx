'use client';
export default function Contact() {
  return (
    <section id="contact" className="flex justify-center py-16 px-4">
      <div className="card max-w-2xl w-full p-10 flex flex-col items-center text-center shadow-xl backdrop-blur-lg border border-white/10">
        <h2 className="text-3xl font-bold mb-4 text-white">Contact</h2>
        <form className="flex flex-col gap-4 w-full max-w-md mx-auto mb-4">
          <input type="text" placeholder="Your Name" className="" />
          <input type="email" placeholder="Your Email" className="" />
          <textarea placeholder="Your Message" className="" rows={4}></textarea>
          <button type="submit" className="btn bg-cyan-400 hover:bg-cyan-500 text-slate-900">Send</button>
        </form>
        <div className="flex gap-4 justify-center">
          <a href="mailto:your@email.com" className="text-cyan-300 hover:underline">Email</a>
          <a href="#" className="text-cyan-300 hover:underline">LinkedIn</a>
          <a href="#" className="text-cyan-300 hover:underline">GitHub</a>
        </div>
      </div>
    </section>
  );
} 