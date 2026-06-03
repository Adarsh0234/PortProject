import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Avatar Display */}
        <div className="relative group flex justify-center">
          <div className="absolute -inset-6 bg-[#00f5ff]/10 blur-[80px] rounded-full group-hover:bg-[#00f5ff]/20 transition-all duration-700" />
          
          <div className="glass-panel overflow-hidden rounded-[2.5rem] relative aspect-[4/5] w-full max-w-sm group-hover:scale-[1.02] duration-500 shadow-2xl border border-white/10 group-hover:border-[#00f5ff]/25">
            <img
              alt="Adarsh Kumar Tiwary Portfolio Portrait"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-[1.03]"
              // src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBFAvb1wVWwIT3vGRGUS3qjZihvrzzAp3uME4ei9lWj5iUo59riHb_PMrQcPNGr5FJDzjK4Nq5FRFOJ4TP7xW21JuNFq5zNvq4tKTUmb6-lhsoU_1GtUbgvgojJJGcFjJppeyoiTqj7Ocnl_Fk6jGXLpkuPjaTiaB1u3jcs1Pq4oL2CA-nvDtt5hWqF76FFTrdBoS5v9swazqo9fheKWxePX6rcT4XupM_TO1Aw0fM2b954FyiOBJwCgzI70CzBAocFLyYwHQQSQ"
              src="img.png"
              referrerPolicy="no-referrer"
            />
            {/* Ambient vignette shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-70" />
          </div>
        </div>

        {/* Right Side: Philosophy Content */}
        <div className="flex flex-col text-left">
          <span className="font-mono text-[#00f5ff] text-xs tracking-widest uppercase mb-4 font-bold block">
            PERSONAL NARRATIVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-8 leading-tight font-bold">
            Building Modern <br />
            <span className="text-[#00f5ff]">Software Solutions</span> with Java & Web Technologies
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#b9caca] leading-relaxed font-normal mb-8">
            Results-driven B.Tech graduate in Electronics and Communication Engineering with hands-on internship experience in software development at Saiket Systems. Proficient in Java, SQL, and modern web technologies with a strong understanding of the full SDLC — from requirements gathering and design through coding, debugging, testing, and deployment. Demonstrated ability to build and enhance features within existing software architectures while following clean coding standards, OOP principles, and version-controlled collaborative workflows. A disciplined, detail-oriented, team player passionate about writing high-quality, maintainable code and eager to grow as an individual contributor in a fast-paced engineering team.
          </p>

          <div className="flex items-center gap-3 font-mono text-xs text-[#00f5ff] font-bold">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span>ECE Graduate • Software Developer Intern @ Saiket Systems</span>
          </div>
        </div>

      </div>
    </section>
  );
}
