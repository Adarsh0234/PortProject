import { useState } from "react";
import { EDUCATION } from "../data";
import { Award, BookOpen, GraduationCap, Flame, Calendar } from "lucide-react";
import { EducationItem } from "../types";
import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer } from "../animations/ScrollAnimations";
import { fadeUpVariants, headingVariants, staggerContainerVariants, staggerItemVariants, timelineVariants } from "../animations/variants";

export default function Education() {
  const [activeItem, setActiveItem] = useState<string | null>("btech");

  const getAccomplishments = (id: string) => {
    switch (id) {
      case "btech":
        return [
          "Curriculum: Deep Learning models, DBMS implementation, cryptography, distributed engines.",
          "Lead organizer of TechnoHack '23 with over 40+ national teams competing.",
          "Core contributor to open source compiler syntax optimization files."
        ];
      case "class12":
        return [
          "Physics and Mathematics specialized focus with 95%+ scores.",
          "Secured Silver Medal in State High School Physics Olympiad competitors.",
          "Won City Inter-School debating tournament in argumentative prose category."
        ];
      case "class10":
        return [
          "Perfect GPA in Computer Application (Java core basics).",
          "Distinction scores in mathematics and physical geography modules."
        ];
      default:
        return [];
    }
  };

  return (
    <section id="education" className="py-28 px-6 bg-[#171b26]/20 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section title header */}
        <div className="text-center mb-20">
          <ScrollReveal variants={fadeUpVariants}>
            <span className="font-mono text-[#00f5ff] text-xs tracking-widest uppercase mb-4 block font-bold">
              ACADEMIC PATH
            </span>
          </ScrollReveal>
          
          <ScrollReveal variants={headingVariants} delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-6">
              Educational <span className="text-[#00f5ff]">Journey</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal variants={fadeUpVariants} delay={0.2}>
            <p className="font-sans text-base sm:text-lg text-[#b9caca]">
              The theoretical foundation and analytical experiences shaping my engineering methodologies.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline wrapper */}
        <div className="relative pl-8 sm:pl-10 border-l border-white/10 space-y-12 text-left pb-4">
          
          {/* Active timeline absolute highlight strip */}
          <div className="absolute left-[-1px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#00f5ff] via-[#9400e4] to-[#0a0e18]" />

          <StaggerContainer variants={staggerContainerVariants}>
            {EDUCATION.map((item, index) => {
              const isActive = activeItem === item.id;
              const accomplishments = getAccomplishments(item.id);

              return (
                <motion.div
                  key={item.id}
                  variants={timelineVariants}
                  onClick={() => setActiveItem(item.id)}
                  className="relative group cursor-pointer select-none"
                >
                
                {/* Node Dot icon on left bar */}
                <div
                  className={`absolute -left-[45px] top-6 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                    isActive
                      ? "bg-[#0a0e18] border-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                      : "bg-[#171b26] border-white/20 group-hover:border-[#00f5ff]"
                  }`}
                >
                  {index === 0 ? (
                    <GraduationCap className={`w-4 h-4 ${isActive ? "text-[#00f5ff]" : "text-[#b9caca]"}`} />
                  ) : (
                    <BookOpen className={`w-3.5 h-3.5 ${isActive ? "text-[#e3b5ff]" : "text-[#b9caca]"}`} />
                  )}
                </div>

                {/* Main chronological card box */}
                <div
                  className={`glass-panel p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 ${
                    isActive
                      ? "border-[#00f5ff]/35 bg-white/[0.04] shadow-xl"
                      : "border-white/5 hover:border-white/15"
                  }`}
                >
                  
                  {/* Card top headers */}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#00f5ff] bg-[#00f5ff]/10 px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" /> {item.timeline}
                        </span>
                        {index === 0 && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00dce5]/10 text-[#00f5ff] uppercase tracking-wider animate-pulse">
                            Completed
                          </span>
                        )}
                      </div>
                      <h3
                        className={`font-display text-2xl font-bold transition-colors ${
                          isActive ? "text-[#00f5ff]" : "text-white group-hover:text-[#00f5ff]"
                        }`}
                      >
                        {item.degree}
                      </h3>
                      <p className="text-[#b9caca] font-medium text-sm sm:text-base">
                        {item.institution}
                      </p>
                    </div>

                    {/* Numeric Score Tag */}
                    <div
                      className={`glass-panel px-6 py-4 rounded-2xl flex flex-col items-center justify-center min-w-[140px] text-center shrink-0 transition-transform duration-300 ${
                        isActive ? "border-[#00f5ff]/30 bg-white/[0.03]" : "opacity-75"
                      }`}
                    >
                      <span className="font-mono text-[10px] uppercase text-[#b9caca]/70 font-bold mb-1">
                        {item.gradeType}
                      </span>
                      <span className="font-display text-3xl font-extrabold text-white">
                        {item.gradeValue}
                      </span>
                    </div>
                  </div>

                  {/* Summary paragraph */}
                  <p className="font-sans text-sm sm:text-base text-[#b9caca]/80 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Progressive revealed accordion details */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isActive ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="border-t border-white/5 pt-4 mt-2 space-y-3">
                      <p className="text-xs font-mono text-[#00f5ff] uppercase tracking-wider font-bold mb-1">
                        Highlighted Accomplishments:
                      </p>
                      {accomplishments.map((sentence, sIdx) => (
                        <div key={sIdx} className="flex gap-2.5 items-start text-xs text-[#b9caca] leading-relaxed">
                          <Flame className="w-4 h-4 text-[#9400e4] shrink-0 mt-0.5" />
                          <span>{sentence}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
          </StaggerContainer>
        </div>
        
      </div>
    </section>
  );
}
