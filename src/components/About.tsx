'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Award, Code2, Briefcase, GraduationCap, Package } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const focusAreas = [
  'C# / .NET 8',
  'ASP.NET Core',
  'Cloud Architecture (Azure & AWS)',
  'Microservices & Kafka',
  'Visual Studio Extensions (VSIX)',
  'Roslyn Compiler Platform',
  'Docker & Kubernetes',
  'Open Source Tooling',
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="about" className="py-28 md:py-40 bg-linen border-t border-nearblack/[0.06]">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-nearblack/20" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-nearblack/40 uppercase">
              About &amp; Experience
            </span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-[11vw] md:text-[7.5vw] lg:text-[6.5vw] font-black tracking-[-0.04em] leading-[0.9] text-nearblack"
            >
              ENGINEERING
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ delay: 0.12, duration: 0.9, ease: EASE }}
              className="text-[11vw] md:text-[7.5vw] lg:text-[6.5vw] font-black tracking-[-0.04em] leading-[0.9] text-nearblack/20 italic"
            >
              BACKGROUND.
            </motion.h2>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24">
          {/* Left: Bio & Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
          >
            <p className="text-nearblack/80 text-lg md:text-xl leading-relaxed mb-6 font-normal">
              Results-driven <strong className="text-nearblack font-semibold">Software Engineer</strong> with over 4 years of experience architecting, developing, and deploying high-performance enterprise web applications, desktop clients, and event-driven microservices.
            </p>
            <p className="text-nearblack/60 text-base leading-relaxed mb-8 font-light">
              Specialized expertise in C#, ASP.NET Core/MVC, RESTful APIs, Entity Framework Core, LINQ, and cloud architectures across Microsoft Azure and AWS. Proven track record of building containerized microservices with Docker, Kubernetes, and Apache Kafka, and publishing developer tooling across NuGet and the Visual Studio Marketplace.
            </p>

            {/* Certifications Card */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-4 p-5 border border-nearblack/[0.08] bg-white/60">
                <Award size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-[9px] tracking-[0.12em] text-nearblack/40 mb-1 uppercase">Official Certification</div>
                  <div className="text-nearblack font-bold text-sm">Microsoft Certified: Azure Developer Associate (AZ-204)</div>
                  <div className="text-nearblack/50 text-xs mt-0.5">Validates deep expertise in developing cloud compute, storage, security, and messaging solutions on Microsoft Azure.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-nearblack/[0.08] bg-white/60">
                <Award size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-[9px] tracking-[0.12em] text-nearblack/40 mb-1 uppercase">Microsoft Applied Skills</div>
                  <div className="text-nearblack font-bold text-sm">Develop an ASP.NET Core web app that consumes an API</div>
                  <div className="text-nearblack/50 text-xs mt-0.5">Demonstrated hands-on architectural capability in API consumption, serialization, and resilient HTTP client management.</div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="p-5 border border-nearblack/[0.08] bg-white/40">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={16} className="text-nearblack/50" />
                <span className="font-mono text-[10px] tracking-[0.15em] text-nearblack/40 uppercase">Education</span>
              </div>
              <div className="text-sm font-semibold text-nearblack">B.Tech in Computer Science &amp; Engineering</div>
              <div className="text-xs text-nearblack/60">AKTU University, Lucknow · 2020 – 2023</div>
              <div className="text-xs text-nearblack/45 mt-2">Diploma in Computer Science &amp; Engineering — Govt. Polytechnic Saharanpur (2017 – 2020)</div>
            </div>
          </motion.div>

          {/* Right: Experience Timeline & Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.8, ease: EASE }}
            className="space-y-10"
          >
            {/* Work History */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase size={16} className="text-nearblack/40" />
                <div className="font-mono text-[10px] tracking-[0.15em] text-nearblack/40 uppercase">Work Experience</div>
              </div>

              <div className="space-y-6 border-l border-nearblack/[0.1] pl-6 ml-2">
                {/* Magnusminds */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-linen" />
                  <div className="font-mono text-[10px] tracking-wider text-accent font-medium uppercase mb-1">
                    August 2025 – Present · Ahmedabad, India
                  </div>
                  <div className="text-base font-bold text-nearblack">Software Engineer @ Magnusminds IT Solutions</div>
                  <p className="text-sm text-nearblack/65 mt-1 leading-relaxed">
                    Engineered high-throughput web services with ServiceStack/.NET backend &amp; Angular (+25% rendering speed). Architected scalable .NET Core microservices on Docker, Kubernetes, and Kafka streaming pipelines (sub-100ms event latency).
                  </p>
                </div>

                {/* Vohra Wound Care */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-nearblack/30 border-2 border-linen" />
                  <div className="font-mono text-[10px] tracking-wider text-nearblack/40 uppercase mb-1">
                    May 2023 – June 2025 · Ahmedabad, India
                  </div>
                  <div className="text-base font-bold text-nearblack">Software Engineer @ Vohra Wound Care</div>
                  <p className="text-sm text-nearblack/65 mt-1 leading-relaxed">
                    Developed and optimized core clinical EMR products across ASP.NET MVC and desktop WPF (MVVM) architectures. Built administrative dashboard in .NET Core MVC &amp; SQL Server, saving 15+ admin hours/week.
                  </p>
                </div>

                {/* SRDT */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-nearblack/30 border-2 border-linen" />
                  <div className="font-mono text-[10px] tracking-wider text-nearblack/40 uppercase mb-1">
                    July 2022 – March 2023 · Lucknow, India
                  </div>
                  <div className="text-base font-bold text-nearblack">Software Developer @ SRDT Pvt Ltd</div>
                  <p className="text-sm text-nearblack/65 mt-1 leading-relaxed">
                    Developed high-availability enterprise ledger modules for Oracle ERP (IIM Bangalore &amp; J&amp;K Bank). Refactored SQL queries, accelerating execution times by 40% with 99.9% availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Skills */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={16} className="text-nearblack/40" />
                <div className="font-mono text-[10px] tracking-[0.15em] text-nearblack/40 uppercase">Technical Competencies</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-white/70 border border-nearblack/[0.08] font-mono text-[10px] tracking-[0.06em] text-nearblack/75 uppercase hover:border-nearblack/25 transition-colors duration-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-between p-4 border border-nearblack/[0.08] bg-white/40">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <div>
                  <div className="text-sm font-semibold text-nearblack">Noida, India</div>
                  <div className="font-mono text-[10px] text-nearblack/50">OPEN TO REMOTE &amp; GLOBAL ROLES</div>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
