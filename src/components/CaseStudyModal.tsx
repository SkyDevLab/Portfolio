'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import type { Project, CaseStudy } from '@/types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  const steps: { label: string; key: keyof CaseStudy }[] = [
    { label: 'PROBLEM', key: 'problem' },
    { label: 'IDEA', key: 'idea' },
    { label: 'IMPLEMENTATION', key: 'implementation' },
    { label: 'RESULT', key: 'result' },
  ];

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-nearblack/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-2xl bg-linen overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-linen/95 backdrop-blur-sm border-b border-nearblack/[0.06] px-8 py-6 flex items-start justify-between z-10">
              <div>
                <div className="font-mono text-[10px] tracking-[0.15em] text-nearblack/40 mb-1">
                  {project.number} — {project.category}
                </div>
                <h2 className="text-2xl font-black tracking-tight text-nearblack">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-nearblack/40 hover:text-nearblack transition-colors"
                aria-label="Close case study"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-10">
              {/* Steps */}
              <div className="space-y-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-px bg-nearblack/10 mt-1" />
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.15em] text-nearblack/30 mb-3">{step.label}</div>
                      <p className="text-nearblack/70 leading-relaxed text-sm md:text-base">
                        {project.caseStudy[step.key]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-12 pt-8 border-t border-nearblack/[0.06]">
                <div className="font-mono text-[10px] tracking-[0.15em] text-nearblack/30 mb-4">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-nearblack/5 font-mono text-[10px] tracking-[0.08em] text-nearblack/60 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links
                  .filter((l) => l.type !== 'case-study')
                  .map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-5 py-3 border border-nearblack/15 text-nearblack/70 hover:text-nearblack hover:border-nearblack/30 font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
