'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function GithubIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const proofLinks = [
  {
    label: 'SkyWeb Auto Test Generator v2.0',
    desc: 'Visual Studio Marketplace · Roslyn C# NUnit + Moq Generator',
    url: 'https://marketplace.visualstudio.com/items?itemName=SuryaPratapSingh.SkywebAutoTestGenerator',
  },
  {
    label: 'SkyWeb Mascot — Animated Coding Companion',
    desc: 'Visual Studio Marketplace · Interactive IDE Companion for VS 2022',
    url: 'https://marketplace.visualstudio.com/items?itemName=SuryaPratapSingh.SkyWebMascot',
  },
  {
    label: 'SkyWebFramework on NuGet',
    desc: 'NuGet Gallery · SkyWebFramework.Logging, .Caching, .Utilities (.NET 8)',
    url: 'https://www.nuget.org/packages?q=SkyWebFramework',
  },
  {
    label: 'GitHub Profile & Open Source Repositories',
    desc: 'github.com/SkyDevLab · PR Doctor, GravitySafeCodePaste, SkyWebFramework',
    url: 'https://github.com/SkyDevLab',
  },
  {
    label: 'Microsoft ASP.NET Core Contributions',
    desc: 'dotnet/AspNetCore.Docs · PRs #37601, #37600, #37599 (Merged)',
    url: 'https://github.com/dotnet/AspNetCore.Docs/pulls?q=is%3Apr+author%3ASkyDevLab',
  },
];

export default function GitHubProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section className="py-28 md:py-40 bg-linen border-t border-nearblack/[0.06]">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px w-8 bg-nearblack/20" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-nearblack/40 uppercase">
            Shipped Ecosystem &amp; Verification
          </span>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: '110%' }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10vw] md:text-[7vw] lg:text-[6vw] font-black tracking-[-0.04em] leading-[0.9] text-nearblack"
          >
            CODE IS THE PROOF.
          </motion.h2>
        </div>

        {/* Links */}
        <div className="space-y-0 divide-y divide-nearblack/[0.06] mb-14">
          {proofLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
              className="group flex items-center justify-between py-6 hover:pl-3 transition-all duration-300"
            >
              <div>
                <div className="font-mono text-[9px] tracking-[0.12em] text-nearblack/40 mb-1.5 uppercase">
                  {link.desc}
                </div>
                <div className="text-lg md:text-2xl font-bold tracking-tight text-nearblack group-hover:text-accent transition-colors duration-300">
                  {link.label}
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-nearblack/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </motion.a>
          ))}
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="https://github.com/SkyDevLab"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-nearblack text-linen font-mono text-xs tracking-[0.12em] uppercase hover:bg-accent transition-colors duration-300 shadow-sm"
          >
            <GithubIcon size={14} />
            <span>VIEW GITHUB →</span>
          </motion.a>

          <motion.a
            href="https://marketplace.visualstudio.com/items?itemName=SuryaPratapSingh.SkywebAutoTestGenerator"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="group inline-flex items-center gap-2 px-8 py-4 border border-nearblack/20 text-nearblack font-mono text-xs tracking-[0.12em] uppercase hover:border-nearblack transition-colors duration-300"
          >
            <span>VS MARKETPLACE →</span>
          </motion.a>

          <motion.a
            href="https://www.nuget.org/packages?q=SkyWebFramework"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="group inline-flex items-center gap-2 px-8 py-4 border border-nearblack/15 text-nearblack/60 font-mono text-xs tracking-[0.12em] uppercase hover:border-nearblack/30 hover:text-nearblack transition-colors duration-300"
          >
            <span>NUGET GALLERY →</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
