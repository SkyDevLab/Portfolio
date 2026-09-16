'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'WORK', href: '#work' },
  { label: 'OPEN SOURCE', href: '#opensource' },
  { label: 'ABOUT', href: '#about' },
  { label: 'LAB', href: '#lab' },
  { label: 'CONTACT', href: '#contact' },
];

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onOpenCommandPalette();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenCommandPalette]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-linen/80 backdrop-blur-xl border-b border-nearblack/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-mono text-sm font-medium tracking-[0.15em] text-nearblack hover:text-accent transition-colors duration-200"
            whileHover={{ x: 2 }}
          >
            SKYDEVLAB
          </motion.a>

          {/* Center Nav — Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-[11px] tracking-[0.12em] text-nearblack/50 hover:text-nearblack transition-colors duration-200 uppercase"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">
            {/* Status Badge */}
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-nearblack/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>AVAILABLE</span>
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 border border-nearblack/10 rounded font-mono text-[10px] tracking-wider text-nearblack/50 hover:text-nearblack hover:border-nearblack/20 transition-all duration-200"
            >
              <Terminal size={11} />
              <span>⌘K</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-nearblack p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-linen flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[68px] border-b border-nearblack/[0.06]">
              <span className="font-mono text-sm font-medium tracking-[0.15em] text-nearblack">SKYDEVLAB</span>
              <button onClick={() => setMobileOpen(false)} className="text-nearblack p-2">
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-sans text-4xl font-bold tracking-tight text-nearblack/80 hover:text-nearblack transition-colors py-2 border-b border-nearblack/[0.06]"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="px-8 pb-12 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-[11px] text-nearblack/50">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
