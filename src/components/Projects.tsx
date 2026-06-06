import { useState } from "react";
import { PROJECTS } from "../data";
import { ExternalLink, Code2, Play, GitBranch, Github, X, SquareTerminal } from "lucide-react";
import { Project } from "../types";
import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer } from "../animations/ScrollAnimations";
import { fadeUpVariants, headingVariants, staggerContainerVariants, staggerItemVariants, cardVariants } from "../animations/variants";

export default function Projects() {
  const [selectedDemo, setSelectedDemo] = useState<Project | null>(null);
  const [selectedCode, setSelectedCode] = useState<Project | null>(null);
  const [hoveredPid, setHoveredPid] = useState<string | null>(null);

  // Custom mock demo content representation for playability
  const renderMockPlayground = (project: Project) => {
    if (project.id === "nebula") {
      return <NebulaPlayground />;
    } else if (project.id === "cinema") {
      return <CinemaPlayground />;
    } else {
      return <SynthetixPlayground />;
    }
  };

  // Custom mock code snippet representation
  const getMockCodeSnippet = (project: Project) => {
    if (project.id === "nebula") {
      return `// Nebula Engine Rich-Text Ecosystem
// Optimized for 60fps, zero third-party dependencies

export class NebulaEngine {
  private element: HTMLElement;
  private selection: Selection | null = null;

  constructor(targetId: string) {
    this.element = document.getElementById(targetId)!;
    this.setupListeners();
  }

  private setupListeners() {
    this.element.addEventListener('input', () => {
      this.validateIntegrity();
      this.triggerAutosave();
    });
  }

  public applyStyle(command: string, value: string = '') {
    document.execCommand(command, false, value);
    this.saveState();
  }
}`;
    } else if (project.id === "cinema") {
      return `/* Cinema Flux CSS Layout Orchestrator */
/* Advanced multi-layered fluid container patterns */

.cinema-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--fluid-gap);
  perspective: 1000px;
}

.layered-card {
  position: relative;
  transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
  transform-style: preserve-3d;
}

.layered-card:hover {
  transform: rotateY(15deg) rotateX(5deg) scaleZ(1.1);
}`;
    } else {
      return `// Synthetix Motion Ecosystem (Next.js 14)
import { motion, useScroll, useTransform } from 'motion/react';

export default function SynthetixShowcase() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div style={{ scale, opacity }} className="showcase-box">
      <h2 className="title">Striking Digital Canvas</h2>
    </motion.div>
  );
}`;
    }
  };

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div className="text-left max-w-2xl">
            <ScrollReveal variants={fadeUpVariants}>
              <span className="font-mono text-[#00f5ff] text-xs tracking-widest uppercase mb-4 block font-bold">
                PORTFOLIO
              </span>
            </ScrollReveal>
            
            <ScrollReveal variants={headingVariants} delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4">
                Featured <span className="text-[#00f5ff]">Work</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal variants={fadeUpVariants} delay={0.2}>
              <p className="font-sans text-base sm:text-lg text-[#b9caca]">
                Selected engineering projects showcasing full-stack proficiency and architectural design.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variants={fadeUpVariants} delay={0.3}>
            <a
              href="https://github.com"
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-6 py-3.5 glass-panel rounded-full hover:bg-white/10 transition-all font-semibold flex items-center gap-2.5 text-sm group"
            >
              <Github className="w-4 h-4 text-[#00f5ff]" />
              View GitHub Repository
            </a>
          </ScrollReveal>
        </div>

        {/* 3 Columns Grid of Cards */}
        <StaggerContainer variants={staggerContainerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => {
            const isHovered = hoveredPid === project.id;
            return (
              <motion.div
                key={project.id}
                variants={staggerItemVariants}
                onMouseEnter={() => setHoveredPid(project.id)}
                onMouseLeave={() => setHoveredPid(null)}
                className="glass-panel group rounded-[2.5rem] overflow-hidden flex flex-col tilt-card relative border border-white/5"
              >
                {/* Scaled cover cover wrapper */}
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                    src={project.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18]/80 to-transparent opacity-80" />
                  
                  {/* Category code pill tag */}
                  <div className="absolute top-5 right-5">
                    <span className="bg-white/5 backdrop-blur-md text-[#00f5ff] px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#00f5ff]/20">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Body elements */}
                <div className="p-8 flex flex-col flex-grow relative text-left">
                  <h3 className="font-display text-2xl text-white font-bold mb-3 group-hover:text-[#00f5ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#b9caca] mb-8 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Interactive Button CTA actions */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedDemo(project)}
                      className="flex-1 py-3 bg-white/5 hover:bg-[#00f5ff]/10 hover:text-[#00f5ff] rounded-xl transition-all flex items-center justify-center gap-2 font-bold text-xs border border-white/10 active:scale-95 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" /> Live Demo
                    </button>
                    <button
                      onClick={() => setSelectedCode(project)}
                      className="flex-1 py-3 bg-white/5 hover:bg-[#00f5ff]/10 hover:text-[#00f5ff] rounded-xl transition-all flex items-center justify-center gap-2 font-bold text-xs border border-white/10 active:scale-95 cursor-pointer"
                    >
                      <Code2 className="w-3.5 h-3.5" /> View Code
                    </button>
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

      {/* 1. Modal Dialog: Live Demo Playground */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e18]/80 backdrop-blur-md p-4">
          <div className="w-full max-w-2xl glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-3xl text-left">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#171b26]/50">
              <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
                <Play className="w-4 h-4 text-[#00f5ff] fill-[#00f5ff]" />
                {selectedDemo.title} Playground
              </div>
              <button
                onClick={() => setSelectedDemo(null)}
                className="text-[#b9caca] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 bg-[#0f131d]/90 text-[#dfe2f1]">
              {renderMockPlayground(selectedDemo)}
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal Dialog: View Code Viewer */}
      {selectedCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e18]/80 backdrop-blur-md p-4">
          <div className="w-full max-w-2xl glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-3xl text-left">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#171b26]/50">
              <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
                <Code2 className="w-4 h-4 text-[#e3b5ff]" />
                {selectedCode.title} Core Snippet
              </div>
              <button
                onClick={() => setSelectedCode(null)}
                className="text-[#b9caca] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 bg-[#0a0e18] font-mono text-xs overflow-x-auto select-all max-h-[400px]">
              <pre className="text-left text-[#adc6ff] leading-relaxed">
                <code>{getMockCodeSnippet(selectedCode)}</code>
              </pre>
            </div>

            <div className="px-6 py-3 border-t border-white/5 flex justify-end gap-3 bg-[#171b26]/30">
              <span className="text-[10px] text-[#b9caca] mr-auto self-center select-none font-mono">
                Double click code text to select all
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(getMockCodeSnippet(selectedCode));
                }}
                className="px-4 py-2 text-xs rounded-xl bg-white/5 text-[#00f5ff] hover:bg-[#00f5ff]/10 border border-[#00f5ff]/20 font-bold transition-all cursor-pointer"
              >
                Copy Snippet
              </button>
              <button
                onClick={() => setSelectedCode(null)}
                className="px-4 py-2 text-xs rounded-xl bg-white/5 text-white hover:bg-white/10 font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

// Sub-Interactive-playground: Nebula rich-text editor simulators
function NebulaPlayground() {
  const [editorText, setEditorText] = useState("Type something here to see Nebula Engine's live document integrity indexer in active status. Built with pure state tracking!");
  const [textOption, setTextOption] = useState<"standard" | "bold" | "italic font-serif">("standard");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-white/5 pb-2">
        <button
          onClick={() => setTextOption("standard")}
          className={`px-3 py-1 text-xs rounded font-mono ${textOption === "standard" ? "bg-[#00f5ff]/10 text-[#00f5ff]" : "bg-white/5 text-white"}`}
        >
          Normal
        </button>
        <button
          onClick={() => setTextOption("bold")}
          className={`px-3 py-1 text-xs rounded font-bold ${textOption === "bold" ? "bg-[#00f5ff]/10 text-[#00f5ff]" : "bg-white/5 text-white"}`}
        >
          Bold
        </button>
        <button
          onClick={() => setTextOption("italic font-serif")}
          className={`px-3 py-1 text-xs rounded italic ${textOption === "italic font-serif" ? "bg-[#00f5ff]/10 text-[#00f5ff]" : "bg-white/5 text-white"}`}
        >
          Serif Italic
        </button>
      </div>

      <textarea
        value={editorText}
        onChange={(e) => setEditorText(e.target.value)}
        rows={4}
        className={`w-full p-4 bg-[#171b26]/50 rounded-xl border border-white/5 text-[#dfe2f1] outline-none focus:border-[#00f5ff]/40 leading-relaxed font-sans ${textOption === "bold" ? "font-bold" : ""}`}
      />

      <div className="flex items-center justify-between text-xs text-[#b9caca] font-mono">
        <span>Characters Count: {editorText.length}</span>
        <span className="text-emerald-400">● Live autosave OK (60 FPS cached)</span>
      </div>
    </div>
  );
}

// Sub-Interactive-playground: Cinema CSS layout resizing simulator
function CinemaPlayground() {
  const [cols, setCols] = useState<number>(3);
  const mockupData = ["Hero", "Carousel", "About Grid", "Interactive Footer", "Sub-header", "Feature Bento"];

  return (
    <div className="space-y-4 text-center">
      <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
        <span className="text-xs font-mono text-[#b9caca]">Grid Box Count Controller:</span>
        <div className="flex gap-2">
          {[2, 3, 4, 6].map((n) => (
            <button
              key={n}
              onClick={() => setCols(n)}
              className={`px-3 py-1 text-xs rounded font-mono ${cols === n ? "bg-[#e3b5ff]/25 text-[#e3b5ff] border border-[#e3b5ff]/50" : "bg-white/5 text-[#b9caca]"}`}
            >
              {n} Cols
            </button>
          ))}
        </div>
      </div>

      <div
        className="grid gap-3 transition-all duration-500 min-h-[140px] p-2 rounded-xl bg-black/30"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {mockupData.slice(0, cols * 2).map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-gradient-to-tr from-[#9400e4]/10 to-[#00f5ff]/10 border border-white/10 rounded-xl flex items-center justify-center text-xs font-mono font-bold text-white shadow-inner animate-pulse-slow"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// Sub-Interactive-playground: NextJS animation trigger canvas playground
function SynthetixPlayground() {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="space-y-4 text-center">
      <div className="p-10 bg-black/40 rounded-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[200px]">
        
        {/* Animated custom dashboard widget */}
        <div
          className="w-24 h-24 bg-gradient-to-r from-[#00f5ff] to-[#9400e4] rounded-2xl flex items-center justify-center text-black font-semibold text-xs shadow-2xl transition-all duration-300"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            boxShadow: `0 0 ${scale * 20}px rgba(0, 245, 255, 0.4)`
          }}
        >
          <SquareTerminal className="w-8 h-8 text-black" />
        </div>

        <p className="mt-4 text-[10px] font-mono text-[#b9caca]">
          Transforms: CSS scale({scale.toFixed(1)}), rotate({rotation}deg)
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1 text-left">
          <label className="text-xs font-mono text-[#b9caca]">Dimension Scale Meter:</label>
          <input
            type="range"
            min="0.5"
            max="1.5"
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="w-full accent-[#00f5ff]"
          />
        </div>
        <div className="space-y-1 text-left">
          <label className="text-xs font-mono text-[#b9caca]">Radial Layout Index:</label>
          <input
            type="range"
            min="0"
            max="360"
            step="10"
            value={rotation}
            onChange={(e) => setRotation(parseInt(e.target.value))}
            className="w-full accent-[#9400e4]"
          />
        </div>
      </div>
    </div>
  );
}
