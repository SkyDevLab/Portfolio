'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [2, -2]);
  const rotateY = useTransform(springX, [-300, 300], [-2, 2]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set(e.clientX - cx);
    mouseY.set(e.clientY - cy);
    setCoords({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-linen pt-[90px] pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(17,18,21,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17,18,21,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full relative z-10">
        {/* Top Metadata & Certification Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-nearblack/[0.06]"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.18em] text-nearblack uppercase">
              SURYA PRATAP SINGH
            </span>
            <span className="text-nearblack/20">/</span>
            <span className="font-mono text-[11px] tracking-[0.12em] text-nearblack/50 uppercase">
              SKYDEVLAB
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-nearblack/[0.04] border border-nearblack/[0.08] font-mono text-[10px] tracking-[0.1em] text-nearblack/70 uppercase">
              <Award size={12} className="text-accent" />
              <span>AZ-204 CERTIFIED</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 font-mono text-[10px] tracking-[0.1em] text-green-700 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>
        </motion.div>

        {/* Main Hero Grid: Typography & Portrait Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headings & Details */}
          <div>
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
              className="mb-8"
            >
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
                  className="text-[14vw] sm:text-[12vw] lg:text-[8.5vw] font-black leading-[0.88] tracking-[-0.04em] text-nearblack"
                >
                  SOFTWARE
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.32, duration: 0.9, ease: EASE }}
                  className="text-[14vw] sm:text-[12vw] lg:text-[8.5vw] font-black leading-[0.88] tracking-[-0.04em] text-nearblack/20 italic"
                >
                  ENGINEER.
                </motion.h1>
              </div>
            </motion.div>

            {/* Specialty tag row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
              className="font-mono text-xs md:text-sm tracking-[0.12em] text-accent font-medium mb-6 uppercase flex flex-wrap items-center gap-2"
            >
              <span>C# / .NET</span>
              <span className="text-nearblack/20">·</span>
              <span>CLOUD ARCHITECTURE</span>
              <span className="text-nearblack/20">·</span>
              <span>OPEN SOURCE</span>
            </motion.div>

            {/* Narrative description directly from resume */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8, ease: EASE }}
              className="text-base sm:text-lg text-nearblack/70 leading-relaxed font-normal max-w-xl mb-8"
            >
              Results-driven Software Engineer with 4+ years of experience architecting and deploying high-performance enterprise applications, event-driven microservices, and developer tools across <strong className="text-nearblack font-semibold">.NET, C#, Azure DevOps, AWS, Kafka, and Docker</strong>.
            </motion.p>

            {/* Tech tags preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {['C#', '.NET 8', 'ASP.NET Core', 'Azure', 'AWS Lambda', 'Kafka', 'Docker', 'Kubernetes', 'Roslyn'].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-nearblack/[0.04] border border-nearblack/[0.06] font-mono text-[10px] tracking-[0.06em] text-nearblack/60 uppercase"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8, ease: EASE }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToWork}
                className="group flex items-center gap-3 px-8 py-4 bg-nearblack text-linen font-mono text-xs tracking-[0.14em] uppercase hover:bg-accent transition-colors duration-300 shadow-md"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
              <a
                href="https://github.com/SkyDevLab"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-7 py-4 border border-nearblack/20 text-nearblack font-mono text-xs tracking-[0.14em] uppercase hover:border-nearblack hover:bg-nearblack/5 transition-all duration-300"
              >
                <GithubIcon size={14} />
                <span>GITHUB</span>
                <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
              <a
                href="https://www.nuget.org/packages?q=SkyWebFramework"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-4 border border-nearblack/15 text-nearblack/60 hover:text-nearblack font-mono text-xs tracking-[0.12em] uppercase hover:border-nearblack/30 transition-all duration-300"
              >
                <span>NUGET</span>
                <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait of Surya */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: EASE }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Background architectural shadow & frame */}
            <div className="relative rounded-2xl overflow-hidden border border-nearblack/10 bg-gradient-to-b from-white to-[#F5F1EB] p-2 shadow-2xl">
              {/* Inner card with image */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gradient-to-b from-transparent to-nearblack/10">
                <Image
                  src="/surya.png"
                  alt="Surya Pratap Singh — Software Engineer"
                  fill
                  priority
                  className="object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                />

                {/* Top Badge: Microsoft Azure Certified */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-nearblack/80 backdrop-blur-md rounded-full text-white font-mono text-[9px] tracking-widest uppercase border border-white/10 shadow-lg">
                    <ShieldCheck size={11} className="text-accent" />
                    <span>AZ-204 CERTIFIED</span>
                  </div>
                  <div className="px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-nearblack font-mono text-[9px] tracking-wider uppercase border border-nearblack/5 shadow-sm">
                    MICROSOFT AZURE
                  </div>
                </div>

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-nearblack/85 backdrop-blur-md rounded-xl text-white border border-white/10 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold tracking-tight text-white">Surya Pratap Singh</div>
                      <div className="font-mono text-[9px] text-white/60 tracking-wider">C# · .NET Core · Cloud Architectures</div>
                    </div>
                    <div className="text-right font-mono text-[9px] text-accent font-medium">
                      NOIDA, INDIA
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Telemetry Strip below image */}
              <div className="flex items-center justify-between px-3 pt-2 text-[9px] font-mono tracking-wider text-nearblack/40">
                <span>IDENTITY: SURYA PRATAP SINGH</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>

            {/* Subtle decorative stamp */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-accent/30 rounded-full flex items-center justify-center pointer-events-none -z-10 animate-spin-slow">
              <span className="font-mono text-[7px] text-accent/50 tracking-widest uppercase">SKYDEVLAB · 2026 ·</span>
            </div>
          </motion.div>
        </div>

        {/* Live coordinate tracking */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden lg:flex items-center justify-between mt-16 pt-4 border-t border-nearblack/[0.05] font-mono text-[10px] tracking-[0.1em] text-nearblack/30"
          >
            <div className="flex items-center gap-6">
              <span>CURSOR_POS: [{String(coords.x).padStart(4, '0')}, {String(coords.y).padStart(4, '0')}]</span>
              <span>ENGINE: .NET 8 / NEXT.JS</span>
              <span>REGION: AP-SOUTH-1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span>SYS_OK</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
