import { Briefcase, Eye } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer } from "../animations/ScrollAnimations";
import { fadeUpVariants, headingVariants, staggerContainerVariants, staggerItemVariants, cardVariants } from "../animations/variants";

const certificateUrl = "https://drive.google.com/file/d/15SQ9Mwdak9OzRszore7-yHzMZkckU8gQ/view?usp=drive_link"; // Replace this with your actual Google Drive certificate link

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <ScrollReveal variants={headingVariants}>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-8 text-left">
            Professional <span className="text-[#00f5ff]">Experience</span>
          </h2>
        </ScrollReveal>

        {/* Card */}
        <ScrollReveal variants={cardVariants} delay={0.2}>
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#00f5ff]/20 shadow-xl shadow-[#00f5ff]/5 relative overflow-hidden text-left hover:border-[#00f5ff]/40">

          {/* Top-right blur decor circle */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f5ff]/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />

          {/* Internship date badge */}
          <div className="absolute top-4 right-4 z-10 rounded-full border border-[#00f5ff]/30 bg-[#020617]/95 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#00f5ff] font-semibold shadow-lg shadow-[#00f5ff]/10">
            17/04/2026 - 17/05/2026
          </div>

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
          <StaggerContainer variants={staggerContainerVariants}>
            {[
              "Participated in the complete SDLC — requirements gathering, design, development, testing, and deployment of software modules, applying standard coding practices throughout.",
              "Developed, tested, and debugged software features by writing clean, structured code in Java and JavaScript, reducing regression defects and improving overall application reliability.",
              "Built functional enhancements within an existing software architecture, maintaining backward compatibility, scalability, and adherence to established design patterns and guidelines.",
              "Collaborated using Git workflows — feature branching, commit conventions, pull requests, and peer code reviews — to ensure consistent code quality across the team.",
              "Applied OOP principles to design modular, reusable Java components that integrated seamlessly with the existing codebase and met all project specifications.",
              "Proactively diagnosed and resolved front-end and logic-layer bugs through systematic troubleshooting, accelerating fix turnaround and improving overall application stability."
            ].map((point, idx) => (
              <motion.li
                key={idx}
                variants={staggerItemVariants}
                className="flex gap-2 text-sm sm:text-base text-[#b9caca]"
              >
                <span className="text-[#00f5ff]">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </StaggerContainer>

          {/* Tag labels footer */}
          <StaggerContainer variants={staggerContainerVariants}>
            {["JavaScript", "HTML5", "CSS3", "JAVA"].map((tag) => (
              <motion.span
                key={tag}
                variants={staggerItemVariants}
                className="inline-block px-3 border border-[#00f5ff]/20 py-1 bg-white/5 text-[10px] text-[#00f5ff] rounded-full font-mono uppercase tracking-wider font-bold mr-2.5 mb-2.5"
              >
                {tag}
              </motion.span>
            ))}
          </StaggerContainer>

          <div className="mt-6 flex justify-start">
            <a
              href={certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 px-4 py-2 text-sm font-semibold text-[#00f5ff] transition hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/10"
            >
              <Eye className="w-4 h-4" />
              View Certificate
            </a>
          </div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
