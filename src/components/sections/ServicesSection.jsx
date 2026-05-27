"use client";

import { Code2, Server, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import { StaggerContainer, StaggerItem, ScrollReveal } from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      badge: "FRONTEND_CORE",
      title: "Frontend Engineering",
      description: "Building high-performance, responsive, interactive, and pixel-perfect user interfaces with modern frontend technologies.",
      icon: <Code2 className="w-8 h-8 md:w-10 md:h-10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_10px_rgba(220,184,255,0.6)]" />,
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      color: "border-primary/20 hover:border-primary/60",
      glowColor: "rgba(138, 43, 226, 0.3)",
      glowClass: "group-hover:shadow-[0_0_50px_rgba(138,43,226,0.3)]",
      bgGlow: "group-hover:bg-primary/5",
      badgeColor: "border-primary/30 text-primary bg-primary/5",
      techStyles: "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20",
      radialGlow: "from-primary/10 via-transparent to-transparent",
      scanlineColor: "via-primary/50"
    },
    {
      id: "02",
      badge: "FULL_STACK_DEV",
      title: "Full-Stack Solutions",
      description: "Developing scalable backend systems, APIs, authentication, and cloud-ready architectures using the MERN stack.",
      icon: <Server className="w-8 h-8 md:w-10 md:h-10 text-secondary-fixed-dim transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-[0_0_10px_rgba(71,214,255,0.6)]" />,
      tech: ["MongoDB", "Express.js", "Node.js", "REST API"],
      color: "border-secondary-fixed-dim/20 hover:border-secondary-fixed-dim/60",
      glowColor: "rgba(0, 210, 255, 0.3)",
      glowClass: "group-hover:shadow-[0_0_50px_rgba(0,210,255,0.3)]",
      bgGlow: "group-hover:bg-secondary-fixed-dim/5",
      badgeColor: "border-secondary-fixed-dim/30 text-secondary-fixed-dim bg-secondary-fixed-dim/5",
      techStyles: "bg-secondary-fixed-dim/10 border-secondary-fixed-dim/20 text-secondary-fixed-dim hover:bg-secondary-fixed-dim/20",
      radialGlow: "from-secondary-fixed-dim/10 via-transparent to-transparent",
      scanlineColor: "via-secondary-fixed-dim/50"
    },
    {
      id: "03",
      badge: "MOTION_SYSTEMS",
      title: "Motion & UI Design",
      description: "Crafting premium UI experiences with smooth animations, cinematic interactions, and modern motion design.",
      icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-tertiary transition-all duration-500 group-hover:scale-120 group-hover:rotate-12 drop-shadow-[0_0_10px_rgba(255,184,115,0.6)]" />,
      tech: ["Framer Motion", "GSAP", "CSS Animation", "SVG"],
      color: "border-tertiary/20 hover:border-tertiary/60",
      glowColor: "rgba(255, 184, 115, 0.3)",
      glowClass: "group-hover:shadow-[0_0_50px_rgba(255,184,115,0.3)]",
      bgGlow: "group-hover:bg-tertiary/5",
      badgeColor: "border-tertiary/30 text-tertiary bg-tertiary/5",
      techStyles: "bg-tertiary/10 border-tertiary/20 text-tertiary hover:bg-tertiary/20",
      radialGlow: "from-tertiary/10 via-transparent to-transparent",
      scanlineColor: "via-tertiary/50"
    }
  ];

  return (
    <Container id="services" className="relative overflow-hidden">
      {/* Premium Cyberpunk Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 overflow-hidden">
        {/* Soft neon radial gradient behind the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.06),transparent_65%)] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-[pulse_10s_infinite_alternate]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary-fixed-dim/5 rounded-full blur-3xl animate-[pulse_8s_infinite_alternate_reverse]"></div>
        
        {/* Futuristic SVG Grid overlay */}
        <svg className="absolute inset-0 h-full w-full stroke-white/[0.03] [mask-image:radial-gradient(70%_70%_at_center,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="section-grid" width="40" height="40" patternUnits="userSpaceOnUse" x="-1" y="-1">
              <path d="M.5 40V.5H40" fill="none" strokeDasharray="5 5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#section-grid)" />
        </svg>
      </div>

      {/* Styled self-contained scan animation */}
      <style jsx="true">{`
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(300%);
          }
        }
        .scanner-line {
          animation: scanline 4s linear infinite;
        }
      `}</style>

      {/* Section Header */}
      <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 relative z-10">
        <ScrollReveal>
          <span className="font-code-label text-primary tracking-[0.3em] uppercase mb-4 block text-xs md:text-sm">
            [ SPECIALIZED_EXPERTISE ]
          </span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="font-h1 text-3xl md:text-5xl lg:text-6xl text-white tracking-tighter font-extrabold uppercase">
              My Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#b6ebff] to-secondary-fixed-dim drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]">Services</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="w-full max-w-2xl">
          <p className="font-body-lg text-on-surface-variant text-sm md:text-base lg:text-lg">
            Architecting next-generation frontend frameworks, scalable backends, and beautiful, high-fidelity interactive user experiences.
          </p>
        </ScrollReveal>

        {/* Section code-style marker */}
        <div className="absolute top-0 right-0 font-code-label text-primary/30 text-xs hidden md:block">
          [03]
        </div>
      </div>

      {/* Services Grid Layout */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {services.map((service, index) => (
          <StaggerItem key={service.id} className="h-full">
            {/* Main Interactive Card */}
            <motion.div
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className={`glass-card h-full rounded-[24px] md:rounded-[32px] border p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all duration-500 bg-[#121214]/40 backdrop-blur-xl ${service.color} ${service.glowClass} ${service.bgGlow}`}
            >
              {/* Animated Inner Radial Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.radialGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`} />

              {/* Futuristic Cyberpunk Scanning Laser Line */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[24px] md:rounded-[32px]">
                <div className={`scanner-line w-full h-[100px] bg-gradient-to-b from-transparent ${service.scanlineColor} to-transparent absolute top-0 left-0 opacity-20`} />
              </div>

              {/* Sub-Card Grid Effect */}
              <div className="absolute inset-0 stroke-white/[0.015] opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id={`card-grid-${service.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="none" />
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#card-grid-${service.id})`} />
                </svg>
              </div>

              {/* Card Header (Category Badge & Index Number) */}
              <div className="flex items-center justify-between mb-8 md:mb-10">
                <span className={`px-4 py-1.5 border rounded-full font-code-label text-[10px] md:text-xs tracking-widest transition-all duration-300 ${service.badgeColor}`}>
                  {service.badge}
                </span>
                <span className="font-code-label text-white/20 group-hover:text-primary transition-colors duration-500 text-xl font-bold tracking-widest">
                  // {service.id}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="mb-6">
                <div className="relative inline-flex p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-all duration-500 overflow-hidden mb-6">
                  {/* Glowing backdrop circle */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.radialGlow} rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                <h3 className="font-h3 text-xl md:text-2xl text-white group-hover:text-white mb-4 tracking-tight transition-colors">
                  {service.title}
                </h3>

                <p className="font-body-md text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer (Technology Tags) */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {service.tech.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 border text-[10px] md:text-xs rounded-lg font-code-label tracking-widest transition-all duration-300 ${service.techStyles}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Container>
  );
}
