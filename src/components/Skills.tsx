import { useState } from "react";
import { SKILL_CATEGORIES } from "../data";
import { Terminal, Code2, Cloud, Cpu, Database } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer } from "../animations/ScrollAnimations";
import { fadeUpVariants, headingVariants, staggerContainerVariants, staggerItemVariants, cardVariants } from "../animations/variants";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Helper matching local Lucide icons to category icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "terminal":
        return <Terminal className="w-6 h-6 text-[#00f5ff]" />;
      case "code":
        return <Code2 className="w-6 h-6 text-[#e3b5ff]" />;
      case "cloud":
        return <Cloud className="w-6 h-6 text-[#adc6ff]" />;
      case "database":
        return <Database className="w-6 h-6 text-[#00b0ff]" />;
      case "cpu":
        return <Cpu className="w-6 h-6 text-[#00f5ff]" />;
      default:
        return <Terminal className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-28 px-6 bg-[#171b26]/30 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Category Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal variants={fadeUpVariants}>
            <span className="font-mono text-[#00f5ff] text-xs tracking-widest uppercase mb-4 block font-bold">
              COMPETENCIES
            </span>
          </ScrollReveal>
          
          <ScrollReveal variants={headingVariants} delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-6">
              Technical <span className="text-[#00f5ff]">Skills</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal variants={fadeUpVariants} delay={0.2}>
            <p className="font-sans text-base sm:text-lg text-[#b9caca]">
              A custom compilation of platforms, languages, and core methodologies driving my engineering cycles.
            </p>
          </ScrollReveal>
        </div>

        {/* 5 Cards Responsive Grid */}
        <StaggerContainer variants={staggerContainerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const isHighlighted = activeCategory === category.id;
            return (
              <motion.div
                key={category.id}
                variants={staggerItemVariants}
                className={`glass-panel p-6 sm:p-7 rounded-3xl transition-all duration-300 transform flex flex-col justify-start ${
                  isHighlighted ? "scale-[1.03] border-[#00f5ff]/40 shadow-xl shadow-[#00f5ff]/5" : ""
                }`}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Icon Box */}
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-inner shrink-0">
                  {getCategoryIcon(category.icon)}
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-5 shrink-0 text-left">
                  {category.name}
                </h3>

                {/* Sub-Contents customization per category layout */}
                <div className="flex-grow">
                  {category.id === "languages" && (
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2 text-left">
                          <div className="flex justify-between font-mono text-xs text-[#b9caca]">
                            <span>{skill.name}</span>
                            <span className="text-[#00f5ff]">{skill.percentage}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#00f5ff] to-[#9400e4] rounded-full shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-1000"
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {category.id === "web-tech" && (
                    <div className="flex flex-wrap gap-2 text-left">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2.5 py-1.5 bg-white/5 text-[#dfe2f1] rounded-xl font-mono text-xs border border-white/10 hover:border-[#00f5ff]/40 transition-colors cursor-default"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {category.id === "database" && (
                    <div className="text-left space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="p-3.5 bg-white/5 border border-white/5 rounded-2xl">
                          <p className="font-mono text-xs text-[#00f5ff] leading-relaxed font-bold">
                            {skill.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {category.id === "infrastructure" && (
                    <div className="flex flex-wrap gap-2 text-left">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-2.5 py-1.5 bg-white/5 text-[#e3b5ff] rounded-xl font-mono text-xs border border-[#e3b5ff]/20 hover:border-[#9400e4]/50 transition-colors cursor-default"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {category.id === "cs-core" && (
                    <ul className="space-y-3 text-left">
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-start gap-2.5 font-sans text-xs text-[#b9caca] group/item"
                        >
                          <span className="w-1.5 h-1.5 mt-1.5 bg-[#00f5ff] rounded-full group-hover/item:scale-125 transition-transform shrink-0" />
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </motion.div>
            );
          })}
        </StaggerContainer>
        
      </div>
    </section>
  );
}
