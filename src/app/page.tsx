'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Statement from '@/components/Statement';
import Projects from '@/components/Projects';
import OpenSource from '@/components/OpenSource';
import Timeline from '@/components/Timeline';
import SkyLab from '@/components/SkyLab';
import TechMarquee from '@/components/TechMarquee';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import GitHubProof from '@/components/GitHubProof';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import EasterEgg from '@/components/EasterEgg';

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);

  return (
    <>
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <main>
        <Hero />
        <Statement />
        <Projects />
        <TechMarquee />
        <OpenSource />
        <Timeline />
        <SkyLab />
        <About />
        <Philosophy />
        <GitHubProof />
        <Contact />
      </main>
      <Footer />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onEasterEgg={() => setEasterEggActive(true)}
      />
      <EasterEgg
        isActive={easterEggActive}
        onClose={() => setEasterEggActive(false)}
      />
    </>
  );
}
