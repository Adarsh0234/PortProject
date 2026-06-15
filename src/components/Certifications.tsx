import { useState } from "react";
import { CERTIFICATIONS } from "../data";
import { ExternalLink } from "lucide-react";
import { Certification } from "../types";
import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer } from "../animations/ScrollAnimations";
import { fadeUpVariants, headingVariants, staggerContainerVariants, staggerItemVariants } from "../animations/variants";

export default function Certifications() {
  const [hoveredCertId, setHoveredCertId] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div className="text-left max-w-2xl">
            <ScrollReveal variants={fadeUpVariants}>
              <span className="font-mono text-[#00f5ff] text-xs tracking-widest uppercase mb-4 block font-bold">
                CREDENTIALS
              </span>
            </ScrollReveal>
            
            <ScrollReveal variants={headingVariants} delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4">
                My <span className="text-[#00f5ff]">Certifications</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal variants={fadeUpVariants} delay={0.2}>
              <p className="font-sans text-base sm:text-lg text-[#b9caca]">
                Professional certifications validating expertise and commitment to continuous learning.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 3 Columns Grid of Certification Cards */}
        <StaggerContainer variants={staggerContainerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CERTIFICATIONS.map((cert) => {
            const isHovered = hoveredCertId === cert.id;
            return (
              <motion.div
                key={cert.id}
                variants={staggerItemVariants}
                onMouseEnter={() => setHoveredCertId(cert.id)}
                onMouseLeave={() => setHoveredCertId(null)}
                className="glass-panel group rounded-[2.5rem] overflow-hidden flex flex-col tilt-card relative border border-white/5"
              >
                {/* Certificate Image */}
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                    src={cert.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18]/80 to-transparent opacity-80" />
                  
                  {/* Date pill tag */}
                  <div className="absolute top-5 right-5">
                    <span className="bg-white/5 backdrop-blur-md text-[#000000] px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#00f5ff]/20">
                      {cert.startDate} — {cert.endDate}
                    </span>
                  </div>
                </div>

                {/* Body elements */}
                <div className="p-8 flex flex-col flex-grow relative text-left">
                  <h3 className="font-display text-2xl text-white font-bold mb-2 group-hover:text-[#00f5ff] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-sm text-[#e3b5ff] mb-6 font-semibold">
                    {cert.issuer}
                  </p>

                  {/* Interactive Button CTA actions */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-full py-3 bg-white/5 hover:bg-[#00f5ff]/10 hover:text-[#00f5ff] rounded-xl transition-all flex items-center justify-center gap-2 font-bold text-xs border border-white/10 active:scale-95 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> View Certificate
                    </a>
                  </div>
                </div>

                {/* Ambient glow stroke around whole wrapper */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-[2.5rem] border-2 border-[#00f5ff]/20 shadow-[0_0_30px_rgba(0,245,255,0.1)] ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </motion.div>
            );
          })}
        </StaggerContainer>

      </div>

    </section>
  );
}
