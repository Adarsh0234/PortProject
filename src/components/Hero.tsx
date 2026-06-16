import { useState, useEffect } from "react";
import { ArrowUpRight, MapPin, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { FadeUp, ScrollReveal } from "../animations/ScrollAnimations";
import { fadeUpVariants, scaleInVariants, staggerItemVariants } from "../animations/variants";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Software Developer",
    "Java Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];
    
    const tick = () => {
      if (isDeleting) {
        setTypedText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setTypedText((prev) => currentWord.substring(0, prev.length + 1));
      }

      let speed = isDeleting ? 30 : 80;

      if (!isDeleting && typedText === currentWord) {
        speed = 2000; // Pause at full word
        setIsDeleting(true);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        speed = 500;
      }

      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, isDeleting ? 40 : 100);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-28 pb-16 relative overflow-hidden bg-gradient-to-b from-[#0a0e18] via-[#0f131d] to-[#0a0e18]">
      
      {/* Dynamic Grid Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,245,255,0.015)_1.5px,transparent_1.5px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center relative z-10 mt-6 sm:mt-12">
        
        {/* Left Side: Copy and details */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Tagline */}
          <ScrollReveal
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f5ff] animate-ping" />
            <p className="font-mono text-[#00f5ff] tracking-[0.2em] uppercase font-bold text-xs select-none">
              AVAILABLE FOR ROLES & INTERNSHIPS
            </p>
          </ScrollReveal>

          {/* Main Title Heading */}
          <ScrollReveal
            variants={fadeUpVariants}
            delay={0.1}
            className="mb-6"
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-white font-extrabold">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#3bf5ff] to-[#9400e4] text-glow select-text">
                Adarsh Kumar Tiwary
              </span>
            </h1>
          </ScrollReveal>

          {/* Secondary Subtitle */}
          <ScrollReveal
            variants={fadeUpVariants}
            delay={0.2}
            className="mb-4"
          >
            <h2 className="font-display text-xl sm:text-3xl text-[#dfe2f1]/90 font-semibold">
              Java Enthusiast
            </h2>
          </ScrollReveal>

          {/* Typewriter text line block */}
          <ScrollReveal
            variants={fadeUpVariants}
            delay={0.3}
            className="mb-8"
          >
            <div className="font-mono text-lg sm:text-2xl text-[#00f5ff] inline-flex items-center gap-2 select-none">
              <span className="text-white/40">&gt;_</span>
              <span className="text-glow typing-cursor">{typedText}</span>
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal
            variants={fadeUpVariants}
            delay={0.4}
            className="mb-10"
          >
            <p className="font-sans text-base sm:text-lg text-[#b9caca] max-w-xl leading-relaxed">
              Passionate about creating responsive web applications, debugging complex problems, and building scalable software solutions. I specialize in Java, Spring Boot, React, and cloud architectures.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal
            variants={fadeUpVariants}
            delay={0.5}
            className="flex flex-col sm:flex-row gap-5 mb-14"
          >
            <button
              onClick={() => handleScrollTo("#projects")}
              className="gradient-button px-8 py-4 rounded-full font-bold text-black flex items-center justify-center gap-2.5 text-base shadow-lg shadow-[#00f5ff]/25 lg:hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
            >
              Explore My Projects
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="glass-panel px-8 py-4 rounded-full font-bold text-white hover:bg-white/10 hover:border-[#00f5ff]/50 transition-all text-base cursor-pointer select-none"
            >
              Get In Touch
            </button>
          </ScrollReveal>

          {/* Meta Labels info */}
          <ScrollReveal
            variants={fadeUpVariants}
            delay={0.6}
            className="flex flex-wrap items-center gap-8 opacity-80"
          >
            <div className="flex flex-col">
              <span className="font-mono text-[#00f5ff] text-[10px] uppercase tracking-wider font-bold mb-1">
                CURRENTLY BASED
              </span>
              <span className="font-medium text-[#dfe2f1] text-sm flex items-center gap-1.5 select-text">
                <MapPin className="w-3.5 h-3.5 text-[#9400e4] animate-bounce" /> Jamshedpur, Jharkhand, India
              </span>
            </div>
            <div className="w-px h-8 bg-white/15 hidden sm:block" />
            <div className="flex flex-col">
              <span className="font-mono text-[#00f5ff] text-[10px] uppercase tracking-wider font-bold mb-1">
                TECH SPECIALTY
              </span>
              <span className="font-medium text-[#dfe2f1] text-sm select-text">
                Java JavaScript & MySQL Database
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Virtual Interactive Developer Illustration & Visual Storytelling */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Subtle surrounding blur glow blobs */}
          <div className="absolute -inset-10 bg-[#00f5ff]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -inset-14 bg-[#9400e4]/5 blur-[140px] rounded-full pointer-events-none" />

          {/* Visual Interactive Tech Stack Map Container */}
          <ScrollReveal
            variants={scaleInVariants}
            delay={0.3}
            className="w-full max-w-md"
          >
            <div className="glass-panel rounded-3xl p-6 relative overflow-hidden shadow-2xl border border-white/10 hover:border-[#00f5ff]/30 transition-all duration-500">
            
            {/* Top-bar window indicator decor */}
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/5">
              <div className="flex items-center gap-1.5 opacity-60">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#b9caca] font-semibold opacity-60 flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[#00f5ff]" /> architecture_visualizer.java
              </div>
            </div>

            {/* Java Code Display */}
            <div className="relative py-6 px-4 font-mono text-xs max-h-96">
              <pre className="text-left leading-loose">
                <code>
                  <span className="text-[#e3b5ff]">int</span>
                  <span className="text-white"> </span>
                  <span className="text-[#00f5ff]">fibonacci</span>
                  <span className="text-white">(</span>
                  <span className="text-[#e3b5ff]">int</span>
                  <span className="text-white"> n) {'{'}</span>
                  <br />
                  <br />
                  <span className="text-[#b9caca]">  </span>
                  <span className="text-[#e3b5ff]">if</span>
                  <span className="text-white">(n {'<='} 1)</span>
                  <br />
                  <span className="text-[#b9caca]">    </span>
                  <span className="text-[#e3b5ff]">return</span>
                  <span className="text-white"> n;</span>
                  <br />
                  <br />
                  <span className="text-[#b9caca]">  </span>
                  <span className="text-[#e3b5ff]">return</span>
                  <span className="text-white"> </span>
                  <span className="text-[#00f5ff]">fibonacci</span>
                  <span className="text-white">(n-</span>
                  <span className="text-[#ff9d76]">1</span>
                  <span className="text-white">) +</span>
                  <br />
                  <span className="text-[#b9caca]">         </span>
                  <span className="text-[#00f5ff]">fibonacci</span>
                  <span className="text-white">(n-</span>
                  <span className="text-[#ff9d76]">2</span>
                  <span className="text-white">);</span>
                  <br />
                  <br />
                  <span className="text-white">{'}'}</span>
                  <br />
                </code>
              </pre>
            </div>

          </div>

          </ScrollReveal>

          {/* Floating tech stack badges with custom delay classes */}
          <motion.div
            className="absolute top-2 -left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-[#00f5ff]/20 text-[#00f5ff] font-mono text-[10px] rounded-full font-bold shadow-lg flex items-center gap-1.5 animate-bounce select-none"
            variants={staggerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.4 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff]" /> Java
          </motion.div>
          <motion.div
            className="absolute bottom-20 -right-6 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-[#9400e4]/20 text-[#e3b5ff] font-mono text-[10px] rounded-full font-bold shadow-lg flex items-center gap-1.5 animate-bounce select-none"
            variants={staggerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.5 }}
            style={{ animationDelay: "1s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9400e4]" /> JavaScript
          </motion.div>
          <motion.div
            className="absolute top-48 -left-8 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] rounded-full font-bold shadow-lg flex items-center gap-1.5 animate-bounce select-none"
            variants={staggerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.45 }}
            style={{ animationDelay: "0.5s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> MySQL Database
          </motion.div>

        </div>

      </div>
    </section>
  );
}