"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Project: MediCare Connect",
      description:
        "MediCare Connect is a modern, secure, and feature-rich healthcare management platform built with the MERN stack. It streamlines the entire appointment process by connecting Patients, Doctors, and Administrators through a powerful role-based authentication system. The platform enables secure appointment booking, online payments, prescription management, doctor verification, and comprehensive healthcare administration—all within an intuitive and responsive interface.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCoKvG7_Tp76Q1kOV2MnrEy6L1g1_v8wl5j1jB3SGJuAkpNJ5C_ZfgEFlgKe4BWGXyIW7kzl3FixCJaEjYt0MXflL0w0n_gP2n1jXZGJmXbNwyL6Gx10ujGWSIUhGvDwpNv4CW4g35SNPrM7kqWPe_flAE2xYDcOQwcE3M0rrnJjimrZbS8rqqVVWFxZIlkWI44wt5mdeTRaYwW3MXorZffMFyVrOnB4GgoOQYrwLlc0PUMiVMdzgNkFxgY6EYylIZqq8z6rtl1tRry",
      link: "https://github.com/rakibul875/medicare-connect-client",
      liveLink: "https://medicare-connect-client-pi.vercel.app/",
    },
    {
      id: 2,
      title: "Project: StudyNook",
      description:
        " StudyNook is a premium, modern, and highly responsive MERN stack application designed to simplify booking quiet, private study rooms and spaces in libraries, campuses, or co-working hubs. Built with a focus on seamless user experience, performance, and dark-themed premium design aesthetics.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFMVp_fps3j3LXrbCwQGIkvi4xWf2G4JSB8QvFrCXs6hrZ7PF5ZIuIQOWJT4AW-Ku1rZg_Ms4PBN7HST85LvwemSDEiCrRdvobxQh3bGL5Wq8xHCGGK6__L5vZGxPKZ0uARxPSuXllp86NLDHdr5wh2qjOvMgEro029wMXaezeBZqLRJFFtGzPgiYkXkmqXy6ClweRe8kTugyORcKSIHS8tkvQh-JS5uO5xRi4cI1bxzeSn-h-tIMmf-smar11HDEOjFugbP_iiJsk",
      link: "https://github.com/rakibul875/study-nook",
      liveLink: "https://study-nook-fawn.vercel.app/",
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

        <Link href="/projects" className="flex items-center gap-2 text-primary font-code-label text-xs md:text-sm tracking-widest group/btn self-start hover:text-white transition-colors">
          VIEW_ALL_PROJECTS
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
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
              <h3 className="font-h3 text-xl md:text-2xl text-white mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-body-md text-on-surface-variant mb-8 flex-1 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-col justify-between sm:flex-row gap-4">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 text-primary font-code-label text-xs md:text-sm tracking-widest group/btn self-start hover:text-white transition-colors">
                    VIEW_SOURCE
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </Link>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 text-primary font-code-label text-xs md:text-sm tracking-widest group/btn self-start hover:text-white transition-colors">
                    VIEW_LIVE
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
