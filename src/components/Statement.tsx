'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });

  const words = ['I', 'ARCHITECT', 'SOFTWARE', 'THAT', 'SOLVES', 'REAL', 'PROBLEMS.'];

  return (
    <section ref={ref} className="py-28 md:py-44 bg-nearblack overflow-hidden relative">
      {/* Subtle horizontal rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Large editorial statement */}
        <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 mb-16">
          {words.map((word, i) => (
            <div key={word + i} className="overflow-hidden">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.8,
                  ease: EASE,
                }}
                className={`block text-[8.5vw] md:text-[6.5vw] lg:text-[5.8vw] font-black tracking-[-0.03em] leading-[0.92] ${
                  i === words.length - 1
                    ? 'text-accent'
                    : i % 2 === 0
                    ? 'text-white'
                    : 'text-white/30 italic'
                }`}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            className="max-w-xl text-white/50 text-base md:text-lg leading-relaxed font-light"
          >
            Turning complex engineering requirements into elegant, high-throughput microservices, developer tools, and modular .NET libraries that scale cleanly in production.
          </motion.p>

          {/* Technical badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
            className="flex items-center gap-3 font-mono text-[10px] tracking-[0.15em] text-white/30"
          >
            <div className="w-8 h-px bg-white/20" />
            <span>SURYA PRATAP SINGH</span>
            <span className="text-white/15">·</span>
            <span>SOFTWARE ENGINEER</span>
            <span className="text-white/15">·</span>
            <span>AZ-204</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
}
