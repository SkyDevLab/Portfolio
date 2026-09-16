'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

// Unique abstract SVG visuals per project
function ProjectVisualDiagram({ projectId, accentColor }: { projectId: string; accentColor: string }) {
  if (projectId === 'skyweb-auto-test-generator') {
    return (
      <svg viewBox="0 0 400 220" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="25" width="160" height="170" rx="4" fill={accentColor} fillOpacity="0.04" stroke={accentColor} strokeOpacity="0.25" strokeWidth="1" />
        <text x="35" y="48" fill={accentColor} fontSize="10" fontFamily="monospace" fontWeight="bold">C# SOURCE (ROSLYN)</text>
        <line x1="35" y1="58" x2="165" y2="58" stroke={accentColor} strokeOpacity="0.2" />
        <text x="35" y="78" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.8">public class OrderService</text>
        <text x="35" y="94" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.8">{'{'}</text>
        <text x="45" y="110" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.6">readonly IRepo _repo;</text>
        <text x="45" y="126" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.6">readonly ILogger _log;</text>
        <text x="45" y="142" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.8">public Task Process()</text>
        <text x="35" y="158" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.8">{'}'}</text>
        
        {/* Center Roslyn Engine */}
        <circle cx="200" cy="110" r="22" fill={accentColor} fillOpacity="0.1" stroke={accentColor} strokeWidth="1.5" />
        <path d="M190 110 L210 110 M205 105 L210 110 L205 115" stroke={accentColor} strokeWidth="1.5" />
        <text x="200" y="140" textAnchor="middle" fill={accentColor} fontSize="7" fontFamily="monospace" fontWeight="bold">ROSLYN</text>

        {/* Right Test Output */}
        <rect x="220" y="25" width="160" height="170" rx="4" fill={accentColor} fillOpacity="0.08" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1" />
        <text x="235" y="48" fill={accentColor} fontSize="10" fontFamily="monospace" fontWeight="bold">NUNIT + MOQ OUTPUT</text>
        <line x1="235" y1="58" x2="365" y2="58" stroke={accentColor} strokeOpacity="0.2" />
        <text x="235" y="78" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.9">[TestFixture]</text>
        <text x="235" y="94" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.7">Mock&lt;IRepo&gt; _mockRepo;</text>
        <text x="235" y="110" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.7">[SetUp] InitMocks()</text>
        <text x="235" y="126" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.9">[Test] Process_Valid_Ok()</text>
        <text x="235" y="142" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.6">_mockRepo.Verify();</text>
        <text x="235" y="158" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.9">Assert.That(result, Is.True);</text>
      </svg>
    );
  }

  if (projectId === 'skywebframework-ecosystem') {
    return (
      <svg viewBox="0 0 400 220" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Top 3 Core NuGet packages */}
        <g>
          <rect x="15" y="20" width="115" height="50" rx="3" fill={accentColor} fillOpacity="0.08" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" />
          <text x="72" y="40" textAnchor="middle" fill={accentColor} fontSize="9" fontFamily="monospace" fontWeight="bold">.Logging</text>
          <text x="72" y="55" textAnchor="middle" fill={accentColor} fontSize="7" fontFamily="monospace" opacity="0.6">GZip · AutoRotate</text>
        </g>
        <g>
          <rect x="142" y="20" width="115" height="50" rx="3" fill={accentColor} fillOpacity="0.08" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" />
          <text x="199" y="40" textAnchor="middle" fill={accentColor} fontSize="9" fontFamily="monospace" fontWeight="bold">.Caching</text>
          <text x="199" y="55" textAnchor="middle" fill={accentColor} fontSize="7" fontFamily="monospace" opacity="0.6">L1 Memory · Distributed</text>
        </g>
        <g>
          <rect x="270" y="20" width="115" height="50" rx="3" fill={accentColor} fillOpacity="0.08" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" />
          <text x="327" y="40" textAnchor="middle" fill={accentColor} fontSize="9" fontFamily="monospace" fontWeight="bold">.Utilities</text>
          <text x="327" y="55" textAnchor="middle" fill={accentColor} fontSize="7" fontFamily="monospace" opacity="0.6">Helpers · Reflection</text>
        </g>

        {/* Central NuGet Pipeline */}
        <path d="M72 70 L72 100 L199 100" stroke={accentColor} strokeOpacity="0.25" strokeDasharray="3,2" />
        <path d="M199 70 L199 100" stroke={accentColor} strokeOpacity="0.25" strokeDasharray="3,2" />
        <path d="M327 70 L327 100 L199 100" stroke={accentColor} strokeOpacity="0.25" strokeDasharray="3,2" />

        <rect x="15" y="100" width="370" height="52" rx="4" fill={accentColor} fillOpacity="0.06" stroke={accentColor} strokeOpacity="0.45" strokeWidth="1.5" />
        <text x="200" y="122" textAnchor="middle" fill={accentColor} fontSize="12" fontFamily="monospace" fontWeight="bold">SkyWebFramework on NuGet</text>
        <text x="200" y="140" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.65">Result&lt;T&gt; Models · HealthCheck Middleware · Dependency Injection</text>

        {/* Enterprise Consumption Target */}
        <path d="M200 152 L200 175" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1.5" markerEnd="url(#arrow-nuget)" />
        <rect x="110" y="175" width="180" height="30" rx="3" fill={accentColor} fillOpacity="0.1" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" />
        <text x="200" y="194" textAnchor="middle" fill={accentColor} fontSize="9" fontFamily="monospace">40% FASTER APP BOOTSTRAP</text>
        <defs>
          <marker id="arrow-nuget" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill={accentColor} fillOpacity="0.6" />
          </marker>
        </defs>
      </svg>
    );
  }

  if (projectId === 'skyweb-mascot') {
    return (
      <svg viewBox="0 0 400 220" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Editor Window Outline */}
        <rect x="25" y="20" width="350" height="175" rx="5" fill={accentColor} fillOpacity="0.04" stroke={accentColor} strokeOpacity="0.25" strokeWidth="1" />
        <rect x="25" y="20" width="350" height="24" rx="5" fill={accentColor} fillOpacity="0.08" stroke={accentColor} strokeOpacity="0.2" />
        <circle cx="42" cy="32" r="3.5" fill={accentColor} fillOpacity="0.5" />
        <circle cx="54" cy="32" r="3.5" fill={accentColor} fillOpacity="0.3" />
        <circle cx="66" cy="32" r="3.5" fill={accentColor} fillOpacity="0.3" />
        <text x="200" y="36" textAnchor="middle" fill={accentColor} fontSize="9" fontFamily="monospace">Visual Studio 2022 — SkyWebMascot.cs</text>

        {/* Mascot Character Representation */}
        <g transform="translate(160, 55)">
          {/* Jetpack flame */}
          <path d="M25 78 L20 95 L30 95 Z" fill="#F59E0B" fillOpacity="0.6" />
          <path d="M55 78 L50 95 L60 95 Z" fill="#F59E0B" fillOpacity="0.6" />
          {/* Jetpack tanks */}
          <rect x="16" y="45" width="14" height="35" rx="3" fill={accentColor} fillOpacity="0.3" stroke={accentColor} strokeWidth="1" />
          <rect x="50" y="45" width="14" height="35" rx="3" fill={accentColor} fillOpacity="0.3" stroke={accentColor} strokeWidth="1" />
          {/* Character Body */}
          <circle cx="40" cy="50" r="24" fill={accentColor} fillOpacity="0.12" stroke={accentColor} strokeWidth="1.5" />
          {/* Eyes with double-eye blink */}
          <circle cx="32" cy="48" r="3.5" fill={accentColor} />
          <circle cx="48" cy="48" r="3.5" fill={accentColor} />
          {/* Smile */}
          <path d="M34 56 Q40 62 46 56" stroke={accentColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Electric guitar */}
          <line x1="20" y1="65" x2="68" y2="40" stroke={accentColor} strokeWidth="2" />
          <polygon points="15,62 25,60 20,72" fill={accentColor} fillOpacity="0.8" />
        </g>

        {/* Interactive Features Pills */}
        <text x="50" y="80" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.7">JETPACK FLIGHT</text>
        <text x="50" y="105" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.7">ROCK GUITAR SOLOS</text>
        <text x="50" y="130" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.7">PHYSICS DRAG &amp; DROP</text>

        <text x="270" y="80" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.7">VS 2022 ADORNMENT</text>
        <text x="270" y="105" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.7">WPF RENDER ENGINE</text>
        <text x="270" y="130" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.7">DOCKABLE TO MARGINS</text>
      </svg>
    );
  }

  if (projectId === 'pr-doctor') {
    return (
      <svg viewBox="0 0 400 220" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="110" height="40" rx="3" fill={accentColor} fillOpacity="0.1" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" />
        <text x="75" y="45" textAnchor="middle" fill={accentColor} fontSize="10" fontFamily="monospace">GIT COMMIT</text>
        <path d="M130 40 L180 40" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,3" />
        <rect x="180" y="20" width="110" height="40" rx="3" fill={accentColor} fillOpacity="0.08" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" />
        <text x="235" y="45" textAnchor="middle" fill={accentColor} fontSize="10" fontFamily="monospace">PULL REQUEST</text>
        <path d="M235 60 L235 90" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4,3" />
        <rect x="130" y="90" width="210" height="50" rx="3" fill={accentColor} fillOpacity="0.05" stroke={accentColor} strokeOpacity="0.5" strokeWidth="1.5" />
        <text x="235" y="110" textAnchor="middle" fill={accentColor} fontSize="11" fontFamily="monospace" fontWeight="bold">PR DOCTOR</text>
        <text x="235" y="128" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.6">AST &amp; DIFF ANALYSIS</text>
        <path d="M175 140 L80 170" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3,3" />
        <path d="M235 140 L235 170" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3,3" />
        <path d="M295 140 L360 170" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3,3" />
        <rect x="20" y="170" width="110" height="32" rx="2" fill={accentColor} fillOpacity="0.06" stroke={accentColor} strokeOpacity="0.2" strokeWidth="1" />
        <text x="75" y="190" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.8">COMPLEXITY</text>
        <rect x="175" y="170" width="110" height="32" rx="2" fill={accentColor} fillOpacity="0.06" stroke={accentColor} strokeOpacity="0.2" strokeWidth="1" />
        <text x="230" y="190" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.8">ANTI-PATTERNS</text>
        <rect x="310" y="170" width="80" height="32" rx="2" fill={accentColor} fillOpacity="0.06" stroke={accentColor} strokeOpacity="0.2" strokeWidth="1" />
        <text x="350" y="190" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.8">COVERAGE</text>
      </svg>
    );
  }

  // GravitySafeCodePaste
  return (
    <svg viewBox="0 0 400 220" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="70" width="100" height="80" rx="3" fill={accentColor} fillOpacity="0.06" stroke={accentColor} strokeOpacity="0.25" strokeWidth="1" />
      <text x="70" y="105" textAnchor="middle" fill={accentColor} fontSize="9" fontFamily="monospace">PLAINTEXT</text>
      <text x="70" y="120" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.5">SNIPPET</text>
      <path d="M120 110 L170 110" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="170" y="60" width="80" height="100" rx="4" fill={accentColor} fillOpacity="0.1" stroke={accentColor} strokeOpacity="0.6" strokeWidth="1.5" />
      <text x="210" y="105" textAnchor="middle" fill={accentColor} fontSize="9" fontFamily="monospace">AES-GCM</text>
      <text x="210" y="120" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.5">ENCRYPT</text>
      <path d="M250 110 L310 110" stroke={accentColor} strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3,2" />
      <rect x="310" y="70" width="80" height="80" rx="3" fill={accentColor} fillOpacity="0.06" stroke={accentColor} strokeOpacity="0.25" strokeWidth="1" />
      <text x="350" y="105" textAnchor="middle" fill={accentColor} fontSize="9" fontFamily="monospace">URL</text>
      <text x="350" y="120" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.5">FRAGMENT #KEY</text>
      <path d="M210 60 L210 30 L280 30" stroke={accentColor} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2,3" />
      <text x="310" y="26" fill={accentColor} fontSize="7" fontFamily="monospace" opacity="0.5">KEY (ZERO KNOWLEDGE)</text>
      <path d="M350 150 L350 185" stroke={accentColor} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3,2" />
      <text x="350" y="200" textAnchor="middle" fill={accentColor} fontSize="8" fontFamily="monospace" opacity="0.5">SERVER SEES ∅</text>
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenCaseStudy }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border border-nearblack/[0.08] hover:border-nearblack/20 transition-all duration-500 bg-linen hover:shadow-xl hover:shadow-nearblack/[0.04] flex flex-col justify-between"
    >
      {/* Visual area */}
      <div>
        <div className="relative h-56 md:h-64 overflow-hidden bg-white/60 border-b border-nearblack/[0.06] flex items-center justify-center p-6">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <ProjectVisualDiagram projectId={project.id} accentColor={project.accentColor} />
          </motion.div>

          {/* Number badge */}
          <div className="absolute top-5 left-5 font-mono text-[11px] tracking-[0.1em] text-nearblack/30 font-semibold">
            {project.number}
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="font-mono text-[9px] tracking-[0.15em] text-nearblack/45 mb-3 uppercase">
            {project.category}
          </div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-nearblack mb-4 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-nearblack/65 text-sm leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-nearblack/[0.04] border border-nearblack/[0.05] font-mono text-[9px] tracking-[0.06em] text-nearblack/60 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Links Footer */}
      <div className="px-7 pb-7 pt-2 flex items-center gap-4 flex-wrap border-t border-nearblack/[0.05]">
        {project.links
          .filter((l) => l.type !== 'case-study')
          .map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-nearblack/60 hover:text-nearblack uppercase transition-colors duration-200"
            >
              <span>{link.label}</span>
              <ExternalLink size={10} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
            </a>
          ))}

        <button
          onClick={() => onOpenCaseStudy(project)}
          className="ml-auto flex items-center gap-2 text-nearblack/60 hover:text-nearblack font-mono text-[10px] tracking-[0.1em] uppercase transition-colors duration-200 group/cs font-medium"
        >
          <span>CASE STUDY</span>
          <ArrowUpRight size={12} className="group-hover/cs:translate-x-0.5 group-hover/cs:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ backgroundColor: project.accentColor }}
      />
    </motion.div>
  );
}
