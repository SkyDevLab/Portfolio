'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import type { Project } from '@/types';

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: '-10% 0px' });
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-28 md:py-40 bg-linen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-nearblack/20" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-nearblack/35 uppercase">
              Selected Work
            </span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-black tracking-[-0.04em] leading-[0.9] text-nearblack"
            >
              SELECTED
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-black tracking-[-0.04em] leading-[0.9] text-nearblack/15 italic"
            >
              WORK.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 text-nearblack/50 text-base md:text-lg max-w-xl"
          >
            A few things I've built.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpenCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
