"use client";

import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section id="overview" className="px-6 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24 flex items-center relative overflow-hidden max-w-7xl mx-auto min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(138,43,226,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(71,214,255,0.05),transparent_50%)]"></div>
      
      <div className="z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-code-label text-primary tracking-[0.3em] uppercase mb-4 md:mb-6 block text-xs md:text-sm">
            [ INITIALIZING_SESSION ]
          </span>
          <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Building The Digital <span className="text-primary relative inline-block">
              Future
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_10px_rgba(138,43,226,0.8)]"></span>
            </span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mb-8 md:mb-10 text-sm md:text-base lg:text-lg">
            Architecting high-performance web ecosystems with mathematical precision and aesthetic excellence. Specializing in next-generation user interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button variant="primary" className="px-8">VIEW_REPOSITORIES</Button>
            <Button variant="secondary" className="px-8">READ_MANIFESTO</Button>
          </div>
        </div>
        
        <div className="lg:col-span-5 hidden lg:flex justify-center relative">
          <div className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border border-white/10 rounded-full flex items-center justify-center relative backdrop-blur-sm">
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite] border-dashed"></div>
            <div className="absolute inset-4 rounded-full border border-secondary-fixed-dim/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl absolute"></div>
            <div className="font-code-label text-primary/50 text-xs tracking-widest uppercase">
              SYSTEM_READY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
