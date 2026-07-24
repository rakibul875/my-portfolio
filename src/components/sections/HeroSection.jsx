"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Rakibul_Islam_Ashik_Resume.pdf";
    link.download = "Rakibul_Islam_Ashik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="overview"
      className="px-6 md:px-8 pt-24 md:pt-32 pb-16 md:pb-24 flex items-center relative overflow-hidden max-w-7xl mx-auto min-h-[80vh]"
    >
      {/* Floating Background Glow Animations */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.15),transparent_70%)] pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(71,214,255,0.05),transparent_70%)] pointer-events-none"
      ></motion.div>

      <div className="z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.span
            variants={itemVariants}
            className="font-code-label text-primary tracking-[0.2em] uppercase mb-4 md:mb-6 flex items-center justify-center lg:justify-start gap-3 text-xs md:text-sm"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(138,43,226,0.8)]"></span>
            [ STATUS: AVAILABLE FOR OPPORTUNITIES ]
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="font-h1 text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Engineering The Digital{" "}
            <span className="text-primary relative inline-block">
              Frontier
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_10px_rgba(138,43,226,0.8)] origin-left"
              ></motion.span>
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="font-body-lg text-on-surface-variant max-w-xl mb-8 md:mb-10 text-sm md:text-base lg:text-lg"
          >
            I am a Full Stack Developer driven by a passion for solving real-world problems through clean, scalable code. I build impactful digital products using modern web technologies, aiming to shape the future as a skilled Software Engineer.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <Button
              data-cursor-text="GITHUB"
              variant="primary"
              className="px-8"
            >
              VIEW PROJECTS
            </Button>
            <Button
              data-cursor-text="READ"
              variant="secondary"
              className="px-8"
              onClick={handleDownload}
            >
              DOWNLOAD RESUME
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 hidden lg:flex justify-center relative"
        >
          <div className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border border-white/10 rounded-full flex items-center justify-center relative backdrop-blur-sm">
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite] border-dashed"></div>
            <div className="absolute inset-4 rounded-full border border-secondary-fixed-dim/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 bg-primary/20 rounded-full blur-3xl absolute"
            ></motion.div>
            <div className="font-code-label text-primary/50 text-xs tracking-widest uppercase">
              SYSTEM_READY
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
