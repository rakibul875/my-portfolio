import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-[#050505] py-12 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(138,43,226,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-8">   
        <div className="flex items-center gap-3 font-inter text-lg font-black uppercase tracking-widest text-white md:text-xl">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
          [DEV_ARCHITECT]
        </div>      
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/rakibul875"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-code-label text-xs uppercase tracking-widest text-on-surface-variant transition-all duration-300 hover:text-primary"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rakibul-islam-ashik-b116033b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-code-label text-xs uppercase tracking-widest text-on-surface-variant transition-all duration-300 hover:text-primary"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>      
        <p className="text-center font-code-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 md:text-right">
          © {new Date().getFullYear()}  SYSTEM_ROOT
          <br className="hidden md:block" />
          ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
