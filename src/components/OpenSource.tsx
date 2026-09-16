'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, GitPullRequest, Star, CheckCircle2 } from 'lucide-react';
import { contributions, githubProfile, openSourceCategories } from '@/data/opensource';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function OpenSource() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="opensource" className="py-28 md:py-40 bg-nearblack relative overflow-hidden">
      {/* Background ambient pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        {/* Section Header */}
        <div className="mb-20 md:mb-24">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
              Open Source &amp; Community
            </span>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9, ease: EASE }}
              className="text-[11vw] md:text-[7.5vw] lg:text-[6.5vw] font-black tracking-[-0.04em] leading-[0.9] text-white"
            >
              MICROSOFT
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ delay: 0.22, duration: 0.9, ease: EASE }}
              className="text-[11vw] md:text-[7.5vw] lg:text-[6.5vw] font-black tracking-[-0.04em] leading-[0.9] text-white/20 italic"
            >
              CONTRIBUTIONS.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
            className="mt-8 max-w-2xl text-white/50 text-base md:text-lg leading-relaxed font-light"
          >
            Actively contributing to the official <strong className="text-white font-normal">Microsoft ASP.NET Core</strong> ecosystem. All 3 contributions below have been reviewed, approved (5/5), and merged into <code className="font-mono text-accent text-sm">dotnet/AspNetCore.Docs</code>.
          </motion.p>
        </div>

        {/* Categories row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {openSourceCategories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 border border-white/10 font-mono text-[10px] tracking-[0.12em] text-white/40 uppercase bg-white/[0.01]"
            >
              {cat}
            </span>
          ))}
        </motion.div>

        {/* ─── 3 Merged Microsoft PR Cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contributions.map((pr, index) => (
            <motion.div
              key={pr.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.12, duration: 0.8, ease: EASE }}
              className="group relative border border-white/10 hover:border-accent/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 p-8 flex flex-col justify-between"
            >
              <div>
                {/* Status Badges */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 font-mono text-[9px] tracking-[0.1em] text-green-400 uppercase rounded">
                    <CheckCircle2 size={11} className="text-green-400" />
                    <span>MERGED</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-green-400 font-medium">
                    <span>✓ APPROVED</span>
                    <span className="text-white/30">(5/5)</span>
                  </div>
                </div>

                {/* Repository & PR ID */}
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-accent font-semibold mb-3">
                  <GitPullRequest size={13} />
                  <span>{pr.repo} · {pr.contribution}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {pr.id === 'aspnetcore-docs-37601' && 'Document custom IApiDescriptionProvider in MVC application model'}
                  {pr.id === 'aspnetcore-docs-37600' && 'Document IISServerOptions.MaxRequestBodySize and IHttpMaxRequestBodySizeFeature in file upload guide'}
                  {pr.id === 'aspnetcore-docs-37599' && 'Clarify controller role for invoking model logic'}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-6 font-light">
                  {pr.description}
                </p>
              </div>

              {/* Card Footer with Link */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.08em] text-white/35 uppercase">
                  {pr.technology}
                </span>

                <a
                  href={pr.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-accent hover:text-white uppercase transition-colors duration-200 group/link"
                >
                  <span>VIEW PR</span>
                  <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Developer Program Member Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent/10 border border-accent/20 rounded">
              <Star size={20} className="text-accent" />
            </div>
            <div>
              <div className="text-white font-semibold text-base">GitHub Developer Program Member</div>
              <div className="font-mono text-xs text-white/45 mt-0.5">
                All 3 Microsoft PRs merged into <span className="text-white/80">dotnet/AspNetCore.Docs</span>
              </div>
            </div>
          </div>

          <a
            href={githubProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3.5 bg-white text-nearblack hover:bg-accent hover:text-white font-mono text-xs tracking-[0.12em] uppercase transition-colors duration-300"
          >
            <span>GITHUB PROFILE →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
