'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, Search } from 'lucide-react';
import type { CommandItem } from '@/types';

const commands: CommandItem[] = [
  { id: 'work', label: 'Work', description: 'Selected projects', action: 'navigate', target: '#work' },
  { id: 'opensource', label: 'Open Source', description: 'Contributions & GitHub', action: 'navigate', target: '#opensource' },
  { id: 'lab', label: 'Sky Lab', description: 'Experiments & demos', action: 'navigate', target: '#lab' },
  { id: 'about', label: 'About', description: 'Who I am', action: 'navigate', target: '#about' },
  { id: 'contact', label: 'Contact', description: 'Get in touch', action: 'navigate', target: '#contact' },
  { id: 'github', label: 'Open GitHub →', description: 'github.com/SkyDevLab', action: 'external', target: 'https://github.com/SkyDevLab' },
  { id: 'linkedin', label: 'Open LinkedIn →', description: 'linkedin.com/in/surya-pratap-singh-1a75b4222', action: 'external', target: 'https://www.linkedin.com/in/surya-pratap-singh-1a75b4222/' },
  { id: 'email', label: 'Send Email →', description: 'pratapsinghsurya19@gmail.com', action: 'external', target: 'mailto:pratapsinghsurya19@gmail.com' },
  { id: 'skyweb-test-gen', label: 'SkyWeb Auto Test Generator', description: 'VS Marketplace · Roslyn NUnit Generator', action: 'external', target: 'https://marketplace.visualstudio.com/items?itemName=SuryaPratapSingh.SkywebAutoTestGenerator' },
  { id: 'skyweb-mascot', label: 'SkyWeb Mascot', description: 'VS Marketplace · Visual Studio 2022 Coding Companion', action: 'external', target: 'https://marketplace.visualstudio.com/items?itemName=SuryaPratapSingh.SkyWebMascot' },
  { id: 'nuget-skyweb', label: 'SkyWebFramework on NuGet', description: 'nuget.org · Logging, Caching, Utilities', action: 'external', target: 'https://www.nuget.org/packages?q=SkyWebFramework' },
  { id: 'pr-doctor', label: 'PR Doctor', description: 'github.com/SkyDevLab/pr-doctor', action: 'external', target: 'https://github.com/SkyDevLab/pr-doctor' },
  { id: 'safepaste', label: 'GravitySafeCodePaste', description: 'github.com/SkyDevLab/GravitySafeCodePaste', action: 'external', target: 'https://github.com/SkyDevLab/GravitySafeCodePaste' },
  { id: 'skywebframework', label: 'SkyWebFramework GitHub', description: 'github.com/SkyDevLab/SkyWebFramework', action: 'external', target: 'https://github.com/SkyDevLab/SkyWebFramework' },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onEasterEgg?: () => void;
}

export default function CommandPalette({ isOpen, onClose, onEasterEgg }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query
    ? commands.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        (c.description && c.description.toLowerCase().includes(query.toLowerCase()))
      )
    : commands;

  const executeCommand = useCallback((cmd: CommandItem) => {
    if (cmd.action === 'navigate') {
      const el = document.querySelector(cmd.target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (cmd.action === 'external') {
      window.open(cmd.target, '_blank', 'noopener,noreferrer');
    }
    onClose();
    setQuery('');
    setSelected(0);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') { onClose(); setQuery(''); }
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
      if (e.key === 'Enter' && filtered[selected]) { executeCommand(filtered[selected]); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, selected, filtered, executeCommand, onClose]);

  // Easter egg detection
  useEffect(() => {
    if (query.toLowerCase() === 'sudo skydevlab' && onEasterEgg) {
      setTimeout(() => {
        onEasterEgg();
        onClose();
        setQuery('');
      }, 300);
    }
  }, [query, onEasterEgg, onClose]);

  useEffect(() => { setSelected(0); }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-nearblack/60 backdrop-blur-sm"
            onClick={() => { onClose(); setQuery(''); }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[90] left-1/2 top-[20vh] -translate-x-1/2 w-full max-w-xl bg-[#0D0E12] border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
              <Search size={14} className="text-white/25 flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search SkyDevLab..."
                className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none placeholder-white/20"
              />
              <kbd className="hidden sm:flex items-center gap-1 font-mono text-[9px] text-white/20 border border-white/10 px-1.5 py-0.5">ESC</kbd>
            </div>

            {/* Results */}
            <div className="py-2 max-h-80 overflow-y-auto">
              {filtered.length === 0 && (
                <div className="px-5 py-8 text-center font-mono text-xs text-white/25">No results</div>
              )}
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onClick={() => executeCommand(cmd)}
                  onMouseEnter={() => setSelected(i)}
                  className={`w-full flex items-center justify-between px-5 py-3 text-left transition-colors duration-100 ${
                    selected === i ? 'bg-white/[0.06]' : ''
                  }`}
                >
                  <div>
                    <div className="font-mono text-sm text-white/80">{cmd.label}</div>
                    {cmd.description && (
                      <div className="font-mono text-[10px] text-white/25 mt-0.5">{cmd.description}</div>
                    )}
                  </div>
                  {cmd.action === 'external' && <ArrowUpRight size={13} className="text-white/20 flex-shrink-0" />}
                  {cmd.action === 'navigate' && (
                    <span className="font-mono text-[9px] text-white/20 flex-shrink-0">↵ ENTER</span>
                  )}
                </button>
              ))}
            </div>

            {/* Footer hint */}
            <div className="border-t border-white/[0.05] px-5 py-2.5 flex items-center gap-4 font-mono text-[9px] text-white/20">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
              <span className="ml-auto opacity-50">ctrl+k</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
