import Image from "next/image";
import Container from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";
import AshikImage from '@/Image/ashik.jpg'

export default function AboutSection() {
  return (
    <Container id="about">
      <ScrollReveal className="glass-card rounded-[24px] p-8 md:p-12 light-stroke relative overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="absolute top-4 right-6 font-code-label text-primary/30 text-xs">
          [01]
        </div>

        <div className="w-full lg:w-5/12 shrink-0">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-[4/3] lg:aspect-square">
            <Image
              src={AshikImage}
              alt="Developer Portrait"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col justify-center mt-4 lg:mt-0">
          <h2 className="font-h2 text-3xl md:text-4xl text-white mb-6 leading-tight">
            Passionate <span className="text-primary">Full Stack Developer</span>
          </h2>
          <div className="font-body-md text-on-surface-variant mb-6 text-base md:text-lg max-w-2xl space-y-4">
            <p>
              Hello! I am Rakibul Islam Ashik, a dedicated Full Stack Developer with a strong foundation in building modern, responsive, and highly scalable web applications. My journey in tech is driven by an intense passion for programming and a genuine love for problem-solving. I thrive on the challenge of transforming complex ideas into clean, user-focused digital experiences that perform flawlessly.
            </p>
            <p>
              Working primarily within the JavaScript ecosystem—including React, Next.js, Node.js, and MongoDB—I prioritize clean architecture and performance optimization. I embrace a continuous learning mindset, constantly exploring emerging tools to stay at the forefront of web technologies. My ultimate mission is to engineer software that not only meets technical standards but also delivers an intuitive experience for end users.
            </p>
            <div className="mt-8 p-5 border border-white/10 rounded-xl bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_10px_rgba(138,43,226,0.8)]"></div>
              <h3 className="font-code-label tracking-widest text-xs mb-2 text-primary uppercase">
                [ CAREER_OBJECTIVE ]
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant">
                To evolve into a highly skilled Software Engineer by refining my problem-solving capabilities and contributing to clean, scalable, and impactful digital products. I am eager to collaborate with forward-thinking teams to tackle real-world challenges using modern web technologies. Through writing high-quality code and prioritizing user-centric development, I aim to create meaningful software solutions that deliver exceptional value.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <div className="flex items-center gap-4 text-primary font-code-label text-caption">
              <span className="w-8 h-[1px] bg-primary/50 shadow-[0_0_8px_rgba(138,43,226,0.8)]"></span>
              SCALABLE_ARCHITECTURE
            </div>
            <div className="flex items-center gap-4 text-secondary-fixed-dim font-code-label text-caption">
              <span className="w-8 h-[1px] bg-secondary-fixed-dim/50 shadow-[0_0_8px_rgba(71,214,255,0.8)]"></span>
              IMPACTFUL_SOLUTIONS
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  );
}
