'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const principles = [
  { num: '01', title: 'Start with the problem.', desc: 'Understand what actually needs to be solved before writing a single line.' },
  { num: '02', title: 'Keep the solution simple.', desc: 'Complexity is a liability. The best code is the code you don\'t have to explain.' },
  { num: '03', title: 'Make it useful.', desc: 'Software that nobody uses is just noise. Make it solve a real thing for a real person.' },
  { num: '04', title: 'Test it properly.', desc: 'Test against reality, not just expectations. Edge cases reveal assumptions.' },
  { num: '05', title: 'Ship it.', desc: 'Done is better than perfect. Shipped software learns. Draft software doesn\'t.' },
  { num: '06', title: 'Improve it.', desc: 'Feedback is the loop. Listen, iterate, and make the thing better.' },
];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section className="py-28 md:py-40 bg-nearblack">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/25 uppercase">Philosophy</span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10vw] md:text-[7vw] lg:text-[6vw] font-black tracking-[-0.04em] leading-[0.9] text-white"
            >
              HOW I THINK.
            </motion.h2>
          </div>
        </div>

        {/* Principles */}
        <div className="space-y-0 divide-y divide-white/[0.05]">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-7 hover:pl-2 md:hover:pl-4 transition-all duration-300"
            >
              <div className="font-mono text-[11px] tracking-[0.1em] text-accent/50 md:w-10 flex-shrink-0">{p.num}</div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white/85 group-hover:text-white transition-colors duration-300 flex-shrink-0 md:w-80">{p.title}</h3>
              <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/45 transition-colors duration-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
