"use client";

import React from 'react';
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Terminal } from "lucide-react";
import summer from '@/Image/summer.png';
import study from '@/Image/study.png';
import connect from '@/Image/Connect.png';

export default function ProjectPage() {
  const allProjects = [
    {
      id: 1,
      title: "Project: MediCare Connect",
      description:
        "MediCare Connect is a secure MERN-stack healthcare platform that simplifies doctor appointments, online payments, and prescription management for Patients, Doctors, and Admin.",
      image: connect,
      link: "https://github.com/rakibul875/medicare-connect-client",
      liveLink: "https://medicare-connect-client-pi.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Project: StudyNook",
      description:
        "StudyNook is a premium, modern, and highly responsive MERN stack application designed to simplify booking quiet, private study rooms and spaces in libraries, campuses, or co-working hubs.",
      image: study,
      link: "https://github.com/rakibul875/study-nook",
      liveLink: "https://study-nook-fawn.vercel.app",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 3,
      title: "Project: Summer Essentials Store",
      description:
        "A modern and fully responsive e-commerce platform dedicated to summer products. This project features a seamless user experience with dynamic product management and secure session-based authentication.",
      image: summer,
      link: "https://github.com/rakibul875/summer-essentials-store",
      liveLink: "https://summer-essentials-store-xi.vercel.app",
      tech: ["React", "Express", "MongoDB", "Stripe"],
    }
  ];

  return (
    <>
      <CustomCursor />

      {/* 
        Using a simplified header for the projects page to avoid hash-link issues from the main Navbar.
        This provides a clear way back to the main system.
      */}
      <header className="fixed top-0 w-full z-50 border-b border-primary/20 bg-[#121214]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(138,43,226,0.15)] py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 group">
            <Terminal className="text-primary w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]" />
            <span className="text-lg lg:text-xl font-black tracking-widest text-white border-l-2 border-primary pl-3 font-inter tracking-tighter uppercase transition-shadow duration-300 group-hover:shadow-primary">
              [DEV_ARCHITECT]
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-primary font-code-label text-xs md:text-sm tracking-widest group/btn hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-2" />
            RETURN_TO_BASE
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.08),transparent_70%)] pointer-events-none"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center text-center mb-16 md:mb-24"
          >
            <span className="font-code-label text-primary tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3 text-xs md:text-sm">
              <Terminal className="w-4 h-4 text-primary" />
              [ PROJECT_DATABASE_ACCESS_GRANTED ]
            </span>
            <h1 className="font-h1 text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              System <span className="text-primary">Archives</span>
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-2xl text-base md:text-lg">
              A comprehensive archive of engineered systems, digital interfaces, and architectural solutions developed to scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                key={project.id}
                className="glass-card rounded-[24px] overflow-hidden light-stroke group flex flex-col hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(138,43,226,0.15)] bg-[#121214]/60 backdrop-blur-xl"
              >
                <div className="aspect-video w-full relative overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {project.tech?.map((tech) => (
                      <span key={tech} className="bg-black/80 backdrop-blur-md border border-white/10 text-white/90 text-[10px] px-3 py-1 rounded-full font-code-label tracking-widest uppercase shadow-[0_0_10px_rgba(138,43,226,0.3)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col relative">
                  <h3 className="font-h3 text-xl md:text-2xl text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant mb-8 text-sm md:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col justify-between xl:flex-row gap-4 mt-auto">
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
      </main>

      <Footer />
    </>
  );
}