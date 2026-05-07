"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Project: Neural_Grid",
      description: "Next-gen monitoring dashboard for large-scale decentralized compute nodes.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoKvG7_Tp76Q1kOV2MnrEy6L1g1_v8wl5j1jB3SGJuAkpNJ5C_ZfgEFlgKe4BWGXyIW7kzl3FixCJaEjYt0MXflL0w0n_gP2n1jXZGJmXbNwyL6Gx10ujGWSIUhGvDwpNv4CW4g35SNPrM7kqWPe_flAE2xYDcOQwcE3M0rrnJjimrZbS8rqqVVWFxZIlkWI44wt5mdeTRaYwW3MXorZffMFyVrOnB4GgoOQYrwLlc0PUMiVMdzgNkFxgY6EYylIZqq8z6rtl1tRry",
      tags: [
        { name: "STABLE_V1.0", color: "bg-primary/10 border-primary/20 text-primary" },
        { name: "REACT_SYSTEM", color: "bg-secondary-fixed-dim/10 border-secondary-fixed-dim/20 text-secondary-fixed-dim" },
      ],
    },
    {
      id: 2,
      title: "Project: Ether_Sync",
      description: "High-throughput synchronization engine for edge-computing clusters.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFMVp_fps3j3LXrbCwQGIkvi4xWf2G4JSB8QvFrCXs6hrZ7PF5ZIuIQOWJT4AW-Ku1rZg_Ms4PBN7HST85LvwemSDEiCrRdvobxQh3bGL5Wq8xHCGGK6__L5vZGxPKZ0uARxPSuXllp86NLDHdr5wh2qjOvMgEro029wMXaezeBZqLRJFFtGzPgiYkXkmqXy6ClweRe8kTugyORcKSIHS8tkvQh-JS5uO5xRi4cI1bxzeSn-h-tIMmf-smar11HDEOjFugbP_iiJsk",
      tags: [
        { name: "DEVOPS", color: "bg-tertiary/10 border-tertiary/20 text-tertiary" },
        { name: "RUST_CORE", color: "bg-primary/10 border-primary/20 text-primary" },
      ],
    },
  ];

  return (
    <Container id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between mb-10 md:mb-12"
      >
        <h2 className="font-h3 text-2xl md:text-3xl text-white uppercase tracking-tighter">
          Selected Works
        </h2>
        <span className="font-code-label text-primary/50 text-xs md:text-sm">[03]</span>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            key={project.id} 
            className="glass-card rounded-[24px] overflow-hidden light-stroke group flex flex-col hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(138,43,226,0.15)] bg-white/[0.02] hover:bg-white/[0.04]"
          >
            <div className="h-[250px] md:h-[300px] lg:h-[350px] relative overflow-hidden border-b border-white/5">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-10 flex-1 flex flex-col relative">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`px-3 py-1 border text-[10px] md:text-xs rounded-full font-code-label tracking-widest ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <h3 className="font-h3 text-xl md:text-2xl text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="font-body-md text-on-surface-variant mb-8 flex-1 text-sm md:text-base">
                {project.description}
              </p>
              <button className="flex items-center gap-2 text-primary font-code-label text-xs md:text-sm tracking-widest group/btn self-start hover:text-white transition-colors">
                VIEW_CASE_STUDY 
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
