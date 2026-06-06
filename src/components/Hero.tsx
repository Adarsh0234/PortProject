import { useState, useEffect } from "react";
import { ArrowUpRight, MapPin, Terminal, Cpu, Database, Server, RefreshCw, Send, Check } from "lucide-react";
import { motion } from "motion/react";
import { FadeUp, ScrollReveal } from "../animations/ScrollAnimations";
import { fadeUpVariants, scaleInVariants, staggerItemVariants } from "../animations/variants";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [requestStatus, setRequestStatus] = useState<"idle" | "sending" | "success">("idle");
  const [activePacket, setActivePacket] = useState<number | null>(null);

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

  const runSimulation = () => {
    if (requestStatus !== "idle") return;
    setRequestStatus("sending");
    setActivePacket(1); // Packet goes to server

    setTimeout(() => {
      setActivePacket(2); // Server pings DB
      
      setTimeout(() => {
        setActivePacket(3); // DB returns to server
        
        setTimeout(() => {
          setActivePacket(4); // Server responses to client
          
          setTimeout(() => {
            setRequestStatus("success");
            setActivePacket(null);
            
            setTimeout(() => {
              setRequestStatus("idle");
            }, 2000);
          }, 600);
        }, 600);
      }, 600);
    }, 600);
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
                Java Spring Boot & React Ecosystem
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
                <Terminal className="w-3 h-3 text-[#00f5ff]" /> architecture_visualizer.py
              </div>
            </div>

            {/* Architecture simulation flow stage */}
            <div className="relative py-10 flex flex-col items-center gap-10 select-none">
              
              {/* Animated Client Node (React.js) */}
              <div className="relative flex flex-col items-center group/node">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover/node:border-[#00f5ff] transition-all duration-300 relative">
                  <Terminal className="w-8 h-8 text-[#00f5ff] animate-pulse" />
                  <div className="absolute -right-2 -top-2 w-5 h-5 bg-[#00f5ff]/10 text-[#00f5ff] text-[9px] rounded-full flex items-center justify-center font-bold border border-[#00f5ff]/30">
                    UI
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#b9caca] mt-2 font-semibold">React Frontend</span>
              </div>

              {/* Server Gateway Connective Paths (Drawn via glowing vectors) */}
              <div className="absolute top-[80px] bottom-[115px] w-0.5 bg-gradient-to-b from-[#00f5ff]/20 via-[#9400e4]/20 to-[#00f5ff]/20 z-0">
                
                {/* Traveling packet simulator bubbles */}
                {activePacket === 1 && (
                  <div className="absolute w-3 h-3 bg-gradient-to-r from-[#00f5ff] to-[#9400e4] rounded-full left-1/2 -translate-x-1/2 animate-bounce shadow-[0_0_10px_#00f5ff]" style={{ top: "10%" }} />
                )}
                {activePacket === 4 && (
                  <div className="absolute w-3 h-3 bg-[#00f5ff] rounded-full left-1/2 -translate-x-1/2 animate-pulse shadow-[0_0_10px_#00f5ff]" style={{ bottom: "10%" }} />
                )}
                {activePacket === 2 && (
                  <div className="absolute w-3 h-3 bg-[#9400e4] rounded-full left-1/2 -translate-x-1/2 animate-bounce shadow-[0_0_10px_#9400e4]" style={{ top: "60%" }} />
                )}
                {activePacket === 3 && (
                  <div className="absolute w-3 h-3 bg-[#00f5ff] rounded-full left-1/2 -translate-x-1/2 animate-ping shadow-[0_0_10px_#00f5ff]" style={{ bottom: "40%" }} />
                )}
              </div>

              {/* Animated Backend Node (Spring Boot API) */}
              <div className="relative flex flex-col items-center group/node">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover/node:border-[#9400e4] transition-all duration-300 relative z-10">
                  <Server className="w-8 h-8 text-[#e3b5ff]" />
                  <div className="absolute -left-2 -top-2 w-5 h-5 bg-[#9400e4]/10 text-[#e3b5ff] text-[9px] rounded-full flex items-center justify-center font-bold border border-[#9400e4]/30">
                    API
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#b9caca] mt-2 font-semibold">DB Gateway</span>
              </div>

              {/* Animated Database Node (MySQL Server) */}
              <div className="relative flex flex-col items-center group/node">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover/node:border-[#00f5ff] transition-all duration-300 relative z-10">
                  <Database className="w-8 h-8 text-[#adc6ff]" />
                  <div className="absolute -right-2 -top-2 w-5 h-5 bg-[#adc6ff]/10 text-[#adc6ff] text-[9px] rounded-full flex items-center justify-center font-bold border border-[#adc6ff]/30">
                    SQL
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#b9caca] mt-2 font-semibold">MySQL Relational Storage</span>
              </div>

            </div>

            {/* Simulated Live Action Controls */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col items-stretch gap-3">
              <button
                onClick={runSimulation}
                disabled={requestStatus !== "idle"}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider flex items-center justify-center gap-2 select-none border cursor-pointer ${
                  requestStatus === "idle"
                    ? "bg-[#00f5ff]/10 border-[#00f5ff]/30 text-[#00f5ff] hover:bg-[#00f5ff]/20"
                    : requestStatus === "sending"
                    ? "bg-amber-400/5 border-amber-400/20 text-amber-300 cursor-not-allowed"
                    : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                }`}
              >
                {requestStatus === "idle" && (
                  <>
                    <RefreshCw className="w-3.5 h-3.5" />
                    Simulate API Pipeline
                  </>
                )}
                {requestStatus === "sending" && (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Traveling Pipeline...
                  </>
                )}
                {requestStatus === "success" && (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Response Success! 200 OK (1.2s)
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[10px] text-[#b9caca]/60 font-mono">
                <span>Latency index: 42ms</span>
                <span className="text-emerald-400 flex items-center gap-1 select-none">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Connection Sandbox: Live
                </span>
              </div>
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff]" /> Java Spring
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#9400e4]" /> React.js
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
