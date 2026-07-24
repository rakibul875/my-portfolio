"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import summer from '@/Image/summer.png'
import study from '@/Image/study.png'
import connect from '@/Image/Connect.png'


export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Project: MediCare Connect",
      description:
        "MediCare Connect is a secure MERN-stack healthcare platform that simplifies doctor appointments, online payments, and prescription management for Patients, Doctors, and Admin",
      image: connect,
      link: "https://github.com/rakibul875/medicare-connect-client",
      liveLink: "https://medicare-connect-client-pi.vercel.app/",
    },
    {
      id: 2,
      title: "Project: StudyNook",
      description:
        " StudyNook is a premium, modern, and highly responsive MERN stack application designed to simplify booking quiet, private study rooms and spaces in libraries, campuses, or co-working hubs. Built with a focus on seamless user experience, performance, and dark-themed premium design aesthetics.",
      image: study,
      link: "https://github.com/rakibul875/study-nook",
      liveLink: "https://study-nook-fawn.vercel.app",
    },
    {
      id: 3,
      title: "Project: Summer Essentials Store",
      description:
        "A modern and fully responsive e-commerce platform dedicated to summer products. This project features a seamless user experience with dynamic product management and secure session-based authentication.",
      image: summer,
      link: "https://github.com/rakibul875/summer-essentials-store",
      liveLink: "https://summer-essentials-store-xi.vercel.app",
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

        <Link href="/project" className="flex items-center gap-2 text-primary font-code-label text-xs md:text-sm tracking-widest group/btn self-start hover:text-white transition-colors">
          VIEW_ALL_PROJECTS
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-2">
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
