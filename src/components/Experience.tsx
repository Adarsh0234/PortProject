import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-8 text-left">
          Professional <span className="text-[#00f5ff]">Experience</span>
        </h2>

        {/* Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#00f5ff]/20 shadow-xl shadow-[#00f5ff]/5 relative overflow-hidden text-left hover:border-[#00f5ff]/40">

          {/* Top-right blur decor circle */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f5ff]/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />

          {/* Header section info */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00f5ff]/10 flex items-center justify-center shrink-0 border border-[#00f5ff]/20">
              <Briefcase className="text-[#00f5ff] w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                Software Developer Intern
              </h3>
              <p className="text-[#00f5ff] font-mono text-sm uppercase tracking-wider font-bold">
                Saiket Systems
              </p>
            </div>
          </div>

          {/* List bullets */}
          <ul className="space-y-3.5 mb-8">
            <li className="flex gap-2 text-sm sm:text-base text-[#b9caca]">
              <span className="text-[#00f5ff]">•</span>
              <span>Participated in the complete SDLC — requirements gathering, design, development, testing, and deployment of software modules, applying
                standard coding practices throughout.</span>
            </li>
            <li className="flex gap-2 text-sm sm:text-base text-[#b9caca]">
              <span className="text-[#00f5ff]">•</span>
              <span>Developed, tested, and debugged software features by writing clean, structured code in Java and JavaScript, reducing regression defects and
                improving overall application reliability.</span>
            </li>
            <li className="flex gap-2 text-sm sm:text-base text-[#b9caca]">
              <span className="text-[#00f5ff]">•</span>
              <span> Built functional enhancements within an existing software architecture, maintaining backward compatibility, scalability, and adherence to
                established design patterns and guidelines.</span>
            </li>
            <li className="flex gap-2 text-sm sm:text-base text-[#b9caca]">
              <span className="text-[#00f5ff]">•</span>
              <span> Collaborated using Git workflows — feature branching, commit conventions, pull requests, and peer code reviews — to ensure consistent code
                quality across the team.</span>
            </li>
            <li className="flex gap-2 text-sm sm:text-base text-[#b9caca]">
              <span className="text-[#00f5ff]">•</span>
              <span> Applied OOP principles to design modular, reusable Java components that integrated seamlessly with the existing codebase and met all project
                specifications.</span>
            </li>
            <li className="flex gap-2 text-sm sm:text-base text-[#b9caca]">
              <span className="text-[#00f5ff]">•</span>
              <span> Proactively diagnosed and resolved front-end and logic-layer bugs through systematic troubleshooting, accelerating fix turnaround and
                improving overall application stability.</span>
            </li>
          </ul>

          {/* Tag labels footer */}
          <div className="flex flex-wrap gap-2.5">
            <span className="px-3 border border-[#00f5ff]/20 py-1 bg-white/5 text-[10px] text-[#00f5ff] rounded-full font-mono uppercase tracking-wider font-bold">
              JavaScript
            </span>
            <span className="px-3 border border-[#00f5ff]/20 py-1 bg-white/5 text-[10px] text-[#00f5ff] rounded-full font-mono uppercase tracking-wider font-bold">
              HTML5
            </span>
            <span className="px-3 border border-[#00f5ff]/20 py-1 bg-white/5 text-[10px] text-[#00f5ff] rounded-full font-mono uppercase tracking-wider font-bold">
              CSS3
            </span>
            <span className="px-3 border border-[#00f5ff]/20 py-1 bg-white/5 text-[10px] text-[#00f5ff] rounded-full font-mono uppercase tracking-wider font-bold">
              JAVA
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
