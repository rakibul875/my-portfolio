"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import summer from "@/Image/summer.png";
import study from "@/Image/study.png";
import connect from "@/Image/Connect.png";
import ProjectDetailsModal from "../ui/ProjectDetailsModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "MediCare Connect",
      description:
        "MediCare Connect is a secure MERN-stack healthcare platform that simplifies doctor appointments, online payments, and prescription management for Patients, Doctors, and Admin",
      image: connect,
      clientLink: "https://github.com/rakibul875/medicare-connect-client",
      serverLink: "https://github.com/rakibul875/medicare-connect-server",
      liveLink: "https://medicare-connect-client-pi.vercel.app/",
      tech: [
        "Next.js",
        "React.js",
        "Node.js",
        "JWT",
        "Stripe",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      challenges: [
        "Implemented secure role-based authentication and protected dashboard flows for Patients, Doctors, and Admin.",
        "Integrated secure payment gateways for online doctor appointments.",
      ],
      futurePlans: [
        "Add real-time chat between doctors and patients.",
        "Implement video consultation features.",
      ],
    },
    {
      id: 2,
      title: "StudyNook",
      description:
        "StudyNook is a premium, modern, and highly responsive MERN stack application designed to simplify booking quiet, private study rooms and spaces in libraries, campuses, or co-working hubs.",
      image: study,
      clientLink: "https://github.com/rakibul875/study-nook",
      serverLink: "https://github.com/rakibul875/study-nook-server",
      liveLink: "https://study-nook-fawn.vercel.app",
      tech: ["Next.js", "React.js", "MongoDB", "Express.js", "Framer Motion"],
      challenges: [
        "Built a complex booking system preventing double-booking of study rooms.",
        "Designed a premium, dark-themed responsive UI with smooth animations.",
      ],
      futurePlans: [
        "Introduce a reward system for frequent bookings.",
        "Add a review and rating system for study rooms.",
      ],
    },
    {
      id: 3,
      title: "Summer Essentials Store",
      description:
        "A modern and fully responsive e-commerce platform dedicated to summer products. This project features a seamless user experience with dynamic product management and secure session-based authentication.",
      image: summer,
      clientLink: "https://github.com/rakibul875/summer-essentials-store",
      serverLink:
        "https://github.com/rakibul875/summer-essentials-store-server",
      liveLink: "https://summer-essentials-store-xi.vercel.app",
      tech: ["Next.js", "React.js", "Better-auth"],
      challenges: [
        "Balanced Stripe checkout with fast content delivery and polished UX on a large content platform.",
        "Implemented dynamic product management with filtering and search capabilities.",
      ],
      futurePlans: [
        "Add real-time inventory tracking and alerts.",
        "Expand admin tools for order management and insights.",
      ],
    },
  ];

  return (
    <>
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

          <Link
            href="/project"
            className="flex items-center gap-2 text-primary font-code-label text-xs md:text-sm tracking-widest group/btn self-start hover:text-white transition-colors"
          >
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
              <div className="h-[200px] md:h-[220px] lg:h-[260px] relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 z-20 opacity-20 font-black text-6xl text-white pointer-events-none">
                  0{index + 1}
                </div>
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
                  {project.tech?.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/[0.03] border border-white/10 rounded-md text-white/80 hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="font-h3 text-xl md:text-2xl text-primary font-bold mb-4 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-8 flex-1 text-sm md:text-base line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between gap-2 mt-auto w-full">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 text-white font-bold text-sm tracking-wide hover:text-primary transition-colors shrink-0"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex gap-2 items-center shrink-0">
                    {project.clientLink && (
                      <Link
                        href={project.clientLink}
                        target="_blank"
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg text-white/90 text-xs sm:text-sm transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span className="hidden sm:inline">Client</span>
                      </Link>
                    )}
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="flex items-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] border border-teal-500/20 px-3 py-1.5 rounded-lg text-teal-400 text-xs sm:text-sm transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="hidden sm:inline">Live Site</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
}
