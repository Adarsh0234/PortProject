import { Terminal } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0e18] border-t border-white/5 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top footer row alignment */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-14">
          
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <div
              onClick={handleScrollToTop}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-[#00f5ff] rounded-md flex items-center justify-center">
                <Terminal className="text-[#002021] w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-display text-xl font-bold text-white tracking-widest uppercase">
                ADARSH
              </span>
            </div>
            <p className="text-[#b9caca] max-w-xs text-xs sm:text-sm">
              Building modern, scalable software solutions with Java and web technologies.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="font-mono text-[#00f5ff] text-[10px] uppercase tracking-wider font-bold">
              CONTACT INFO
            </span>
            <p className="text-[#dfe2f1] font-mono text-sm hover:text-[#00f5ff] transition-colors select-text">
              +91 6299028132
            </p>
            <a
              href="mailto:adarshkumartiwary8@gmail.com"
              className="text-[#b9caca] hover:text-[#00f5ff] font-mono text-xs sm:text-sm transition-colors select-text"
            >
              adarshkumartiwary8@gmail.com
            </a>
          </div>

          {/* Social connections links lists */}
          <div className="flex flex-wrap justify-center gap-8 text-xs font-mono font-bold tracking-wider">
            <a
              href="https://github.com/Adarsh0234"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-[#b9caca] hover:text-[#00f5ff] transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-kumar-tiwary-4045253b1/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-[#b9caca] hover:text-[#00f5ff] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-[#b9caca] hover:text-[#00f5ff] transition-colors"
            >
              TWITTER
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-[#b9caca] hover:text-[#00f5ff] transition-colors"
            >
              MEDIUM
            </a>
          </div>

        </div>

        {/* Bottom footer claims section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 text-[10px] sm:text-xs">
          <p className="font-mono">
            © {new Date().getFullYear()} ADARSH KUMAR TIWARY. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-6 font-mono uppercase tracking-widest">
            <a href="#privacy" className="hover:text-[#00f5ff] transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-[#00f5ff] transition-colors">
              Terms
            </a>
            <a href="#cookies" className="hover:text-[#00f5ff] transition-colors">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
