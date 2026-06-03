import { useState, useEffect } from "react";
import { Terminal, Code, Mail, Download, Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadMockResume = () => {
    // Generate a beautiful mock TXT/PDF file programmatically if needed or trigger a mock download success callback
    const content = `ADARSH_KUMAR_TIWARY RESUME\n\nName: Adarsh Kumar Tiwary\nSpecialty: Full Stack Developer & Java Enthusiast\nLocation: Kolkata, India\nEducation: B.Tech in CS (CGPA 7.25)\nFeatured Work:\n - Nebula Engine (JS Core)\n - Cinema Flux (CSS Layout Engine)\n - Synthetix Portfolio (Vite/React)`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Adarsh_Kumar_Tiwary_CS_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e18]/90 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Trigger Logo */}
        <div
          onClick={() => handleScrollTo("#home")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#00dce5] rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <Terminal className="text-[#002021] stroke-[2.5] w-5 h-5" />
          </div>
          <span className="font-display text-2xl font-bold text-white tracking-tighter">
            ADARSH
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.href)}
                className={`transition-all duration-300 font-medium relative py-2 text-sm cursor-pointer ${
                  isActive
                    ? "text-[#00f5ff]"
                    : "text-[#b9caca] hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#00dce5] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4 border-r border-white/10 pr-6">
            <a
              href="https://github.com/Adarsh0234"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-[#b9caca] hover:text-[#00f5ff] transition-colors p-1"
              title="GitHub Profile"
            >
              <Code className="w-5 h-5" />
            </a>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="text-[#b9caca] hover:text-[#00f5ff] transition-colors p-1"
              title="Compose Message"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={downloadMockResume}
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#dfe2f1] hover:bg-white/10 hover:border-[#00dce5]/50 transition-all font-semibold shadow-lg text-sm cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#00f5ff]" />
            Resume
          </button>

          {/* Toggle Mobile Menu */}
          <button
            className="lg:hidden text-[#dfe2f1] hover:text-[#00f5ff] transition-colors p-1 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0e18]/95 border-b border-white/10 backdrop-blur-2xl p-6 transition-all">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.href)}
                className={`py-2 text-left font-medium capitalize border-b border-white/5 last:border-b-0 cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? "text-[#00f5ff]"
                    : "text-[#b9caca] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between pt-4 mt-2">
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-[#b9caca] hover:text-[#00f5ff] p-2 bg-white/5 rounded-full"
                >
                  <Code className="w-5 h-5" />
                </a>
                <button
                  onClick={() => handleScrollTo("#contact")}
                  className="text-[#b9caca] hover:text-[#00f5ff] p-2 bg-white/5 rounded-full"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={downloadMockResume}
                className="flex items-center gap-2 px-5 py-2 rounded-full gradient-button text-black font-semibold text-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
