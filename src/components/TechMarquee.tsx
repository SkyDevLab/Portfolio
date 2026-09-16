'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { techStack } from '@/data/experience';

function MarqueeRow({ items, direction = 1, speed = 40 }: { items: typeof techStack; direction?: 1 | -1; speed?: number }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden group">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-nearblack/25 font-mono text-sm tracking-[0.12em] uppercase group-hover:text-nearblack/35 transition-colors duration-500">
            <span className="w-1 h-1 rounded-full bg-nearblack/15" />
            {item.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  const half = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, half);
  const row2 = techStack.slice(half);

  return (
    <section className="py-20 md:py-28 bg-linen border-y border-nearblack/[0.06] overflow-hidden">
      <div className="mb-4">
        <MarqueeRow items={row1} direction={1} speed={55} />
      </div>
      <div>
        <MarqueeRow items={row2} direction={-1} speed={45} />
      </div>
    </section>
  );
}
