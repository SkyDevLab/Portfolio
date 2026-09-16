'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  { label: 'BUILD', desc: 'Find the problem. Build the smallest useful solution.' },
  { label: 'TEST', desc: 'Test it against reality — not just expectations.' },
  { label: 'SHIP', desc: 'Ship it. A working tool beats a perfect idea.' },
  { label: 'OPEN SOURCE', desc: 'Make it available. Let others improve it.' },
  { label: 'IMPROVE', desc: 'Learn from feedback. Keep making it better.' },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section className="py-28 md:py-40 bg-linen overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-8 bg-nearblack/20" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-nearblack/35 uppercase">Engineering Mindset</span>
        </div>

        {/* Desktop: horizontal timeline */}
        <div ref={ref} className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[2.2rem] left-0 right-0 h-px bg-nearblack/8" />
            <motion.div
              className="absolute top-[2.2rem] left-0 h-px bg-accent origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ right: 0 }}
            />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Node */}
                  <div className="flex items-center mb-8">
                    <div className="relative z-10 w-[18px] h-[18px] rounded-full border-2 border-accent bg-linen flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="font-mono text-[10px] tracking-[0.1em] text-nearblack/30 mb-2">0{i + 1}</div>
                  <h3 className="text-lg font-black tracking-tight text-nearblack mb-3">{step.label}</h3>
                  <p className="text-nearblack/50 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 pb-10 relative"
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[8px] top-[18px] bottom-0 w-px bg-nearblack/8" />
              )}
              {/* Node */}
              <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-accent bg-linen flex items-center justify-center mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.1em] text-nearblack/30 mb-1">0{i + 1}</div>
                <h3 className="text-xl font-black tracking-tight text-nearblack mb-2">{step.label}</h3>
                <p className="text-nearblack/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
