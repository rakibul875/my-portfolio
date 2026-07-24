"use client";

import { 
  SiNextdotjs, SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiCss, SiHtml5,
  SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiDaisyui, SiHeroui,
  SiFramer, SiGreensock, SiThreedotjs, SiGit, SiGithub,
  SiPostman, SiNpm
} from "react-icons/si";
import { TbApi, TbCube3dSphere, TbBrandVscode } from "react-icons/tb";
import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", icon: SiNextdotjs, percent: 90, color: "text-white" },
        { name: "React.js", icon: SiReact, percent: 92, color: "text-[#61DAFB]" },
        { name: "JavaScript", icon: SiJavascript, percent: 95, color: "text-[#F7DF1E]" },
        { name: "TypeScript", icon: SiTypescript, percent: 70, color: "text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, percent: 95, color: "text-[#06B6D4]" },
        { name: "CSS3", icon: SiCss, percent: 95, color: "text-[#1572B6]" },
        { name: "HTML5", icon: SiHtml5, percent: 98, color: "text-[#E34F26]" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, percent: 88, color: "text-[#339933]" },
        { name: "Express.js", icon: SiExpress, percent: 90, color: "text-white" },
        { name: "REST API", icon: TbApi, percent: 92, color: "text-[#FF4A57]" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, percent: 90, color: "text-[#47A248]" },
        { name: "Mongoose", icon: SiMongoose, percent: 88, color: "text-[#880000]" },
      ]
    },
    {
      title: "UI Libraries",
      skills: [
        { name: "DaisyUI", icon: SiDaisyui, percent: 95, color: "text-[#5A0EF8]" },
        { name: "HeroUI", icon: SiHeroui, percent: 90, color: "text-[#00D2FF]" },
      ]
    },
    {
      title: "Animation & 3D",
      skills: [
        { name: "Framer Motion", icon: SiFramer, percent: 85, color: "text-[#0055FF]" },
        { name: "GSAP", icon: SiGreensock, percent: 65, color: "text-[#88CE02]" },
        { name: "Three.js", icon: SiThreedotjs, percent: 60, color: "text-white" },
        { name: "React Three Fiber", icon: SiReact, percent: 55, color: "text-[#61DAFB]" },
        { name: "Drei", icon: TbCube3dSphere, percent: 55, color: "text-[#FF8A65]" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit, percent: 90, color: "text-[#F05032]" },
        { name: "GitHub", icon: SiGithub, percent: 95, color: "text-white" },
        { name: "VS Code", icon: TbBrandVscode, percent: 98, color: "text-[#007ACC]" },
        { name: "Postman", icon: SiPostman, percent: 85, color: "text-[#FF6C37]" },
        { name: "npm", icon: SiNpm, percent: 90, color: "text-[#CB3837]" },
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <Container id="skills" className="relative pb-24 pt-16">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.05),transparent_70%)] pointer-events-none"></div>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center mb-16 relative z-10 text-center"
      >
        <span className="font-code-label text-primary tracking-[0.2em] uppercase mb-4 block text-xs md:text-sm">
          [ SYSTEM_CAPABILITIES ]
        </span>
        <h2 className="font-h2 text-3xl md:text-4xl lg:text-5xl text-white tracking-tighter mb-4">
          Technical Arsenal
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl text-sm md:text-base">
          A comprehensive overview of the technologies, frameworks, and tools I leverage to architect scalable and high-performance digital solutions.
        </p>
      </motion.div>
      
      <div className="flex flex-col gap-16 relative z-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl md:text-2xl font-h3 text-white tracking-wide">
                {category.title}
              </h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
              {category.skills.map((skill) => (
                <motion.div
                  variants={itemVariants}
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-[20px] border border-white/5 bg-[#121214]/60 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                        <skill.icon className={`text-2xl ${skill.color} group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-500 opacity-80 group-hover:opacity-100`} />
                      </div>
                      <h4 className="text-white font-medium text-base md:text-lg tracking-wide group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-white/60 font-code-label text-sm md:text-base font-bold group-hover:text-white transition-colors duration-300">
                      {skill.percent}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/40 blur-[5px]"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
