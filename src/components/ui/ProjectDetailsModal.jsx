import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Server } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailsModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0f0f13] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 md:p-10">
            {/* Header */}
            <div className="mb-10">
              <span className="text-primary/80 font-code-label text-xs tracking-[0.2em] uppercase mb-3 block">
                Project Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tech Stack */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-primary/20 transition-colors">
                <h3 className="text-primary/80 font-code-label text-xs tracking-[0.2em] uppercase mb-5">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-white/90 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-primary/20 transition-colors">
                <h3 className="text-primary/80 font-code-label text-xs tracking-[0.2em] uppercase mb-5">
                  Quick Links
                </h3>
                <div className="flex flex-col gap-4">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors w-fit"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                  {project.clientLink && (
                    <Link
                      href={project.clientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors w-fit"
                    >
                      {/* <Github className="w-4 h-4" /> */}
                      <span>GitHub Repository</span>
                    </Link>
                  )}
                  {project.serverLink && (
                    <Link
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors w-fit"
                    >
                      <Server className="w-4 h-4" />
                      <span>Server Repository</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Challenges Faced */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-primary/20 transition-colors">
                <h3 className="text-primary/80 font-code-label text-xs tracking-[0.2em] uppercase mb-5">
                  Challenges Faced
                </h3>
                <ul className="space-y-4">
                  {project.challenges?.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-on-surface-variant text-sm md:text-base"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Improvements */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-primary/20 transition-colors">
                <h3 className="text-primary/80 font-code-label text-xs tracking-[0.2em] uppercase mb-5">
                  Future Improvements / Plans
                </h3>
                <ul className="space-y-4">
                  {project.futurePlans?.map((plan, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-on-surface-variant text-sm md:text-base"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
