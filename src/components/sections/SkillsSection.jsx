import { SiNextdotjs, SiReact, SiMongodb, SiTailwindcss, SiDaisyui, SiHeroui } from "react-icons/si";
import Container from "../ui/Container";

export default function SkillsSection() {
  const iconBaseClass = "w-10 h-10 transition-all duration-500 group-hover:scale-110 group-hover:text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]";
  
  const skills = [
    { 
      name: "NEXT.JS", 
      icon: <SiNextdotjs className={`${iconBaseClass} text-primary`} />, 
      color: "border-primary/20 hover:border-primary/60", 
      glow: "group-hover:shadow-[0_0_35px_rgba(138,43,226,0.25)]",
      bgGlow: "group-hover:bg-primary/5"
    },
    { 
      name: "REACT", 
      icon: <SiReact className={`${iconBaseClass} text-secondary-fixed-dim`} />, 
      color: "border-secondary-fixed-dim/20 hover:border-secondary-fixed-dim/60", 
      glow: "group-hover:shadow-[0_0_35px_rgba(71,214,255,0.25)]",
      bgGlow: "group-hover:bg-secondary-fixed-dim/5"
    },
    { 
      name: "MONGODB", 
      icon: <SiMongodb className={`${iconBaseClass} text-tertiary`} />, 
      color: "border-tertiary/20 hover:border-tertiary/60", 
      glow: "group-hover:shadow-[0_0_35px_rgba(255,184,115,0.25)]",
      bgGlow: "group-hover:bg-tertiary/5"
    },
    { 
      name: "TAILWIND CSS", 
      icon: <SiTailwindcss className={`${iconBaseClass} text-secondary`} />, 
      color: "border-secondary/20 hover:border-secondary/60", 
      glow: "group-hover:shadow-[0_0_35px_rgba(165,231,255,0.25)]",
      bgGlow: "group-hover:bg-secondary/5"
    },
    { 
      name: "DAISY UI", 
      icon: <SiDaisyui className={`${iconBaseClass} text-primary-fixed`} />, 
      color: "border-primary-fixed/20 hover:border-primary-fixed/60", 
      glow: "group-hover:shadow-[0_0_35px_rgba(239,219,255,0.25)]",
      bgGlow: "group-hover:bg-primary-fixed/5"
    },
    { 
      name: "HERO UI", 
      icon: <SiHeroui className={`${iconBaseClass} text-secondary-container`} />, 
      color: "border-secondary-container/20 hover:border-secondary-container/60", 
      glow: "group-hover:shadow-[0_0_35px_rgba(0,210,255,0.25)]",
      bgGlow: "group-hover:bg-secondary-container/5"
    },
  ];

  return (
    <Container id="skills" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="flex items-center justify-between mb-10 md:mb-12 relative z-10">
        <h2 className="font-h3 text-2xl md:text-3xl text-white uppercase tracking-tighter">
          System Architecture
        </h2>
        <span className="font-code-label text-primary/50 text-xs md:text-sm">[02]</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 relative z-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`glass-card p-8 md:p-10 rounded-[24px] border flex flex-col gap-6 items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 group h-full cursor-pointer bg-[#121214]/60 backdrop-blur-xl ${skill.color} ${skill.glow} ${skill.bgGlow}`}
          >
            <div className="relative p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500 rounded-full blur-md"></div>
              <div className="relative z-10">
                {skill.icon}
              </div>
            </div>
            <span className="font-code-label text-on-surface-variant group-hover:text-white text-xs md:text-sm font-bold tracking-widest transition-colors duration-500">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
