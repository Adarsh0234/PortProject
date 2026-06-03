import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Track cursor position for the glowing back-light cursor element
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById("mouse-glow");
      if (glow) {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Set up active section intersection observers for Navbar links highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ["home", "about", "experience", "skills", "projects", "education", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e18] text-[#dfe2f1] overflow-x-hidden selection:bg-[#00f5ff]/25 selection:text-white relative">
      
      {/* 1. Mouse Follow Glow Element */}
      <div
        id="mouse-glow"
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#00f5ff]/4 to-[#9400e4]/4 rounded-full pointer-events-none z-10 transition-transform duration-100 ease-out md:block hidden blur-[80px]"
      />

      {/* 2. Abstract Moving Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Particle Canvas Starfield */}
        <Particles />

        {/* Ambient colored moving vector light highlights */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00f5ff]/4 animate-float opacity-70" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#9400e4]/3 animate-float opacity-65" style={{ animationDelay: "-6s" }} />
        
        {/* Subtle matrix-grid overlay tile texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* 3. Core Structural components stack */}
      <div className="relative z-20">
        
        {/* Navigation Bar Header */}
        <Header activeSection={activeSection} />

        {/* Sections layout wrapper */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Footer Credits */}
        <Footer />
        
      </div>

    </div>
  );
}
