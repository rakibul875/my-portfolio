import { ScrollReveal } from "../ui/ScrollReveal";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-12 md:py-16 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(138,43,226,0.05),transparent_50%)]"></div>
      <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="text-white font-black tracking-widest text-lg md:text-xl uppercase font-inter flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          [DEV_ARCHITECT]
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {["GITHUB", "LINKEDIN", "STACK_OVERFLOW"].map((link) => (
            <span 
              key={link}
              className="font-code-label text-[10px] md:text-xs tracking-widest text-on-surface-variant uppercase hover:text-primary cursor-pointer transition-colors"
            >
              {link}
            </span>
          ))}
        </div>
        
        <p className="font-code-label text-[10px] tracking-widest text-on-surface-variant/50 uppercase text-center md:text-right">
          © {new Date().getFullYear()}  SYSTEM_ROOT<br className="hidden" /> ALL RIGHTS RESERVED
        </p>
      </ScrollReveal>
    </footer>
  );
}
