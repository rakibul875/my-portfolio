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
            Engineering with a focus on <span className="text-primary">pixel-perfect</span> precision
          </h2>
          <p className="font-body-md text-on-surface-variant mb-8 text-base md:text-lg max-w-2xl">
            Specializing in the intersection of structural integrity and visual storytelling. Every line of code is an architectural decision designed to scale beautifully across the digital ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-4 text-primary font-code-label text-caption">
              <span className="w-8 h-[1px] bg-primary/50 shadow-[0_0_8px_rgba(138,43,226,0.8)]"></span>
              DRIVEN_BY_LOGIC
            </div>
            <div className="flex items-center gap-4 text-secondary-fixed-dim font-code-label text-caption">
              <span className="w-8 h-[1px] bg-secondary-fixed-dim/50 shadow-[0_0_8px_rgba(71,214,255,0.8)]"></span>
              AESTHETIC_EXCELLENCE
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  );
}
