"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, BookOpen, Trophy } from "lucide-react";

export default function EducationSection() {
  const educationData = [
    {
      id: "01",
      type: "COURSE",
      period: "2023 - Present",
      status: "ACTIVE",
      title: "Web Development (MERN Stack)",
      subtitle: "@ Programming Hero · Online",
      description: "Intensive full-stack web development course focusing on professional software engineering. Building production-grade projects including SkillSphere, KeenKeeper, and Wanderlust using MongoDB, Express, React, and Node.js.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "Tailwind"],
      icon: Rocket,
      color: "text-primary",
      borderColor: "border-primary/50",
      glowColor: "shadow-[0_0_20px_rgba(138,43,226,0.3)]",
    },
    {
      id: "02",
      type: "EDUCATION",
      period: "2023 - Present",
      title: "Diploma in Engineering",
      subtitle: "@ Sherpur Polytechnic Institute · Sherpur, Bangladesh",
      extraBadge: {
        icon: Trophy,
        text: "Current Semester: 3rd"
      },
      description: "Currently pursuing a Diploma in Engineering with a focus on Computer Science & Technology. Building a strong foundation in core engineering principles, programming fundamentals, and technical problem-solving.",
      tags: ["Computer Science", "Engineering", "Programming", "CST"],
      icon: GraduationCap,
      color: "text-[#007ACC]",
      borderColor: "border-[#007ACC]/50",
      glowColor: "shadow-[0_0_20px_rgba(0,122,204,0.3)]",
    },
    {
      id: "03",
      type: "EDUCATION",
      period: "2021 - 2023",
      title: "Secondary School Certificate (SSC)",
      subtitle: "@ Sanraj Academy · Jongoldi, Sherpur",
      extraBadge: {
        icon: Trophy,
        text: "GPA: 4.84 / 5.00"
      },
      description: "Completed secondary education with outstanding academic performance, building a strong foundation in science and mathematics.",
      tags: ["Science", "Mathematics", "Physics"],
      icon: BookOpen,
      color: "text-[#47A248]",
      borderColor: "border-[#47A248]/50",
      glowColor: "shadow-[0_0_20px_rgba(71,162,72,0.3)]",
    }
  ];

  return (
    <Container id="education" className="relative pb-24 pt-16">
      {/* Background Ambient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.05),transparent_70%)] pointer-events-none"></div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center justify-center mb-16 relative z-10 text-center"
      >
        <span className="font-code-label text-primary tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-4 text-xs md:text-sm">
          <span className="w-8 h-[1px] bg-primary/50"></span>
          MY_JOURNEY
          <span className="w-8 h-[1px] bg-primary/50"></span>
        </span>
        <h2 className="font-h2 text-3xl md:text-4xl lg:text-5xl text-white tracking-tighter mb-4">
          Education & <span className="text-primary">Experience</span>
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl text-sm md:text-base">
          From SSC to Diploma to full-stack engineering — a timeline of continuous growth.
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mt-12">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-white mb-2">4.84</span>
            <span className="text-[10px] md:text-xs text-on-surface-variant tracking-[0.2em] uppercase font-code-label">SSC GPA</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-[#007ACC] mb-2">3rd</span>
            <span className="text-[10px] md:text-xs text-on-surface-variant tracking-[0.2em] uppercase font-code-label">DIPLOMA SEM</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-white mb-2">10+</span>
            <span className="text-[10px] md:text-xs text-on-surface-variant tracking-[0.2em] uppercase font-code-label">PROJECTS</span>
          </div>
        </div>
      </motion.div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto mt-20">
        {/* Continuous Vertical Line */}
        <div className="absolute left-[31px] md:left-[39px] top-4 bottom-4 w-[2px] bg-white/10 hidden sm:block"></div>

        <div className="flex flex-col gap-12 relative z-10">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col sm:flex-row gap-6 md:gap-12 relative"
            >
              {/* Timeline Node */}
              <div className="hidden sm:flex flex-col items-center relative z-20 shrink-0 w-[64px] md:w-[80px]">
                <div className={`w-16 h-16 rounded-full bg-[#0a0a0a] border-[3px] ${item.borderColor} flex items-center justify-center relative z-20 ${item.glowColor} transition-transform duration-500 hover:scale-110`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
              </div>

              {/* Card */}
              <div className="glass-card rounded-[24px] p-6 md:p-8 flex-1 border border-white/5 bg-[#121214]/60 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(138,43,226,0.05)]">
                {/* Big Background Number */}
                <div className="absolute -top-6 right-2 text-[120px] md:text-[150px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-primary/[0.04] transition-colors duration-500 font-inter leading-none">
                  {item.id}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6 relative z-10">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-code-label tracking-widest uppercase border ${
                    item.id === "01" ? "border-primary/30 text-primary bg-primary/5" : 
                    item.id === "02" ? "border-[#007ACC]/30 text-[#007ACC] bg-[#007ACC]/5" : 
                    "border-[#47A248]/30 text-[#47A248] bg-[#47A248]/5"
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-[10px] md:text-xs font-code-label tracking-widest text-white/50 uppercase">
                    {item.period}
                  </span>
                  {item.status && (
                    <span className="px-4 py-1.5 rounded-full text-[10px] md:text-xs font-code-label tracking-widest uppercase border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {item.status}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 mb-8">
                  <h3 className="font-h3 text-xl md:text-2xl text-white mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-primary/80 font-code-label tracking-wide mb-5">
                    {item.subtitle}
                  </p>
                  
                  {item.extraBadge && (
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border bg-white/5 text-xs md:text-sm font-bold mb-6 ${
                      item.id === "02" ? "border-[#007ACC]/20 text-[#007ACC]" : "border-[#47A248]/20 text-[#47A248]"
                    }`}>
                      <item.extraBadge.icon className="w-4 h-4" />
                      {item.extraBadge.text}
                    </div>
                  )}

                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-code-label tracking-widest uppercase hover:text-white hover:bg-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
