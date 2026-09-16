'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';

interface EasterEggProps {
  isActive: boolean;
  onClose: () => void;
}

const bootLines = [
  '> SKYDEVLAB DEVELOPER MODE v2.1.0',
  '> Initializing kernel...',
  '> Loading modules: [security] [crypto] [net-runtime]',
  '> Connecting to GitHub API...',
  '> Scanning open source contributions...',
  '> PR #37601, #37600, #37599 → dotnet/AspNetCore.Docs [MERGED ✓]',
  '> Loading Visual Studio Marketplace extensions...',
  '> Extensions: SkyWeb Auto Test Generator & SkyWeb Mascot [ACTIVE]',
  '> Loading SkyWebFramework packages from NuGet...',
  '> NuGet feed: Logging, Caching, Utilities [ONLINE]',
  '> Azure credential: AZ-204 CERTIFIED',
  '',
  '> ACCESS GRANTED. Welcome, Surya.',
  '> sudo mode: ACTIVE',
];

export default function EasterEgg({ isActive, onClose }: EasterEggProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setLines([]);
      setDone(false);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, bootLines[i]]);
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 110);

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isActive) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isActive, onClose]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#020304] flex items-center justify-center p-6"
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'repeating-linear-gradient(0deg, rgba(0,255,0,0.015) 0px, rgba(0,255,0,0.015) 1px, transparent 1px, transparent 4px)',
          }} />

          <div className="w-full max-w-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 text-center font-mono text-[10px] text-white/20 tracking-widest">
                SKYDEVLAB — DEVELOPER MODE
              </div>
              <button onClick={onClose} className="text-white/20 hover:text-white/50 transition-colors">
                <X size={14} />
              </button>
            </div>

            {/* Terminal body */}
            <div className="border border-green-500/20 bg-black/50 p-6 font-mono text-sm min-h-[420px]">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className={`leading-7 ${
                    line.includes('GRANTED') || line.includes('Welcome')
                      ? 'text-green-400 font-bold'
                      : line.includes('MERGED') || line.includes('CERTIFIED') || line.includes('ONLINE') || line.includes('ACTIVE')
                      ? 'text-green-300'
                      : line === ''
                      ? 'block h-4'
                      : 'text-green-500/70'
                  }`}
                >
                  {line}
                </motion.div>
              ))}

              {!done && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-green-400"
                >
                  _
                </motion.span>
              )}

              {done && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 pt-4 border-t border-green-500/15"
                >
                  <div className="text-green-400/50 text-xs mb-3">// You found the developer mode. Nice.</div>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 border border-green-500/30 text-green-400 font-mono text-xs tracking-wider uppercase hover:bg-green-500/5 transition-colors"
                  >
                    EXIT DEVELOPER MODE
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
