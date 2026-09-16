'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Hash, Code2, Activity } from 'lucide-react';

// --- Demo 1: Security Scanner ---
const SECURITY_PATTERNS = [
  { pattern: /(password|passwd|pwd)\s*=\s*["'][^"']+["']/gi, label: 'Hardcoded Credential', severity: 'HIGH', rule: 'SEC-001' },
  { pattern: /(api_?key|apikey|secret)\s*=\s*["'][^"']+["']/gi, label: 'Hardcoded API Key', severity: 'HIGH', rule: 'SEC-002' },
  { pattern: /eval\s*\(/gi, label: 'Unsafe eval() usage', severity: 'MEDIUM', rule: 'SEC-003' },
  { pattern: /innerHTML\s*=/gi, label: 'Potential XSS via innerHTML', severity: 'MEDIUM', rule: 'SEC-004' },
  { pattern: /console\.(log|warn|error)/gi, label: 'Debug statement in code', severity: 'LOW', rule: 'SEC-005' },
  { pattern: /http:\/\//gi, label: 'Non-HTTPS URL', severity: 'MEDIUM', rule: 'SEC-006' },
];

function SecurityScanner() {
  const defaultCode = `const password = "admin123";
const apiKey = "sk-abc12345xyz";

function loadUser(id) {
  element.innerHTML = userInput;
  eval(codeString);
}`;

  const [code, setCode] = useState(defaultCode);

  const findings = SECURITY_PATTERNS.flatMap((p) => {
    const matches = code.match(p.pattern);
    if (!matches) return [];
    return matches.map(() => ({ label: p.label, severity: p.severity, rule: p.rule }));
  });

  const severityColor: Record<string, string> = {
    HIGH: 'text-red-400 border-red-400/30 bg-red-400/5',
    MEDIUM: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
    LOW: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  };

  return (
    <div className="space-y-3">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-40 bg-nearblack text-green-400 font-mono text-xs p-4 border border-white/10 resize-none focus:outline-none focus:border-white/20 leading-relaxed"
        spellCheck={false}
      />
      <div className="space-y-2">
        {findings.length === 0 ? (
          <div className="flex items-center gap-2 font-mono text-[10px] text-green-400/60 p-3 border border-green-400/20 bg-green-400/5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span>NO ISSUES DETECTED</span>
          </div>
        ) : (
          findings.slice(0, 4).map((f, i) => (
            <div key={i} className={`flex items-center justify-between p-2.5 border font-mono text-[9px] tracking-wider ${severityColor[f.severity]}`}>
              <span>⚠ {f.label.toUpperCase()}</span>
              <span className="opacity-60">{f.rule} · {f.severity}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// --- Demo 2: Crypto Inspector ---
async function sha256(text: string): Promise<string> {
  const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function CryptoInspector() {
  const [input, setInput] = useState('SkyDevLab');
  const [hash, setHash] = useState('');
  const [b64, setB64] = useState('');
  const [loading, setLoading] = useState(false);

  const compute = async () => {
    setLoading(true);
    const h = await sha256(input);
    const b = btoa(input);
    setHash(h);
    setB64(b);
    setLoading(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && compute()}
          placeholder="Enter text to hash..."
          className="flex-1 bg-nearblack border border-white/10 text-white font-mono text-xs px-3 py-2.5 focus:outline-none focus:border-white/25 placeholder-white/20"
        />
        <button
          onClick={compute}
          disabled={loading || !input}
          className="px-4 py-2.5 bg-accent text-white font-mono text-[10px] tracking-[0.1em] uppercase hover:bg-accent/80 transition-colors disabled:opacity-40"
        >
          HASH
        </button>
      </div>
      {hash && (
        <div className="space-y-2">
          <div>
            <div className="font-mono text-[9px] text-white/25 tracking-[0.1em] mb-1">SHA-256</div>
            <div className="font-mono text-[9px] text-green-400 break-all bg-nearblack border border-white/8 p-2.5">{hash}</div>
          </div>
          <div>
            <div className="font-mono text-[9px] text-white/25 tracking-[0.1em] mb-1">BASE64</div>
            <div className="font-mono text-[9px] text-blue-400 break-all bg-nearblack border border-white/8 p-2.5">{b64}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Demo 3: .NET CompositeFormat Playground ---
function CompositeFormatPlayground() {
  const [format, setFormat] = useState('{0,10} {1,-15} {2:N2}');
  const [arg0, setArg0] = useState('42');
  const [arg1, setArg1] = useState('SkyDevLab');
  const [arg2, setArg2] = useState('12345.678');

  const renderPreview = () => {
    try {
      const num = parseFloat(arg2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const p0 = arg0.padStart(10);
      const p1 = arg1.padEnd(15);
      return `${p0} ${p1} ${num}`;
    } catch {
      return '—';
    }
  };

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <div>
          <label className="font-mono text-[9px] text-white/30 tracking-[0.1em] block mb-1">FORMAT STRING</label>
          <input value={format} onChange={(e) => setFormat(e.target.value)} className="w-full bg-nearblack border border-white/10 text-green-400 font-mono text-xs px-3 py-2 focus:outline-none focus:border-white/25" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[['ARG 0', arg0, setArg0], ['ARG 1', arg1, setArg1], ['ARG 2', arg2, setArg2]].map(([label, val, setter]) => (
            <div key={label as string}>
              <label className="font-mono text-[9px] text-white/30 tracking-[0.1em] block mb-1">{label as string}</label>
              <input value={val as string} onChange={(e) => (setter as (v: string) => void)(e.target.value)} className="w-full bg-nearblack border border-white/10 text-white/70 font-mono text-xs px-2 py-2 focus:outline-none focus:border-white/25" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="font-mono text-[9px] text-white/25 tracking-[0.1em] mb-1">PREVIEW OUTPUT</div>
        <div className="bg-nearblack border border-white/8 p-3 font-mono text-xs text-white/80 whitespace-pre overflow-x-auto">{renderPreview()}</div>
      </div>
      <div className="font-mono text-[9px] text-white/20">Based on .NET string.Format / CompositeFormat alignment rules</div>
    </div>
  );
}

// --- Demo 4: System Telemetry ---
function SystemTelemetry() {
  const [data] = useState({
    build: 'v2.1.4',
    env: 'PROD',
    uptime: '18d 7h 42m',
    region: 'AP-SOUTH-1',
    services: [
      { name: 'API Gateway', status: 'operational' },
      { name: 'Auth Service', status: 'operational' },
      { name: 'NuGet Feed', status: 'operational' },
      { name: 'GitHub Sync', status: 'operational' },
    ],
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {[['BUILD', data.build], ['ENV', data.env], ['UPTIME', data.uptime], ['REGION', data.region]].map(([k, v]) => (
          <div key={k} className="bg-nearblack border border-white/8 p-3">
            <div className="font-mono text-[8px] text-white/25 tracking-[0.1em] mb-1">{k}</div>
            <div className="font-mono text-xs text-green-400">{v}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {data.services.map((s) => (
          <div key={s.name} className="flex items-center justify-between border border-white/5 px-3 py-2">
            <span className="font-mono text-[10px] text-white/50">{s.name}</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[9px] text-green-400 uppercase">{s.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Lab Card ---
const demos = [
  {
    id: 'scanner',
    icon: ShieldAlert,
    title: 'Security Scanner',
    subtitle: 'Vulnerability Heuristic',
    badge: 'PROTOTYPE',
    Component: SecurityScanner,
  },
  {
    id: 'crypto',
    icon: Hash,
    title: 'Crypto Inspector',
    subtitle: 'SHA-256 + Base64',
    badge: 'LIVE',
    Component: CryptoInspector,
  },
  {
    id: 'formatter',
    icon: Code2,
    title: '.NET Formatter',
    subtitle: 'CompositeFormat Playground',
    badge: 'LIVE',
    Component: CompositeFormatPlayground,
  },
  {
    id: 'telemetry',
    icon: Activity,
    title: 'System Telemetry',
    subtitle: 'Runtime Diagnostics',
    badge: 'LIVE',
    Component: SystemTelemetry,
  },
];

export default function SkyLab() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="lab" className="py-28 md:py-40 bg-nearblack relative">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/25 uppercase">Experiments</span>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: '110%' }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10vw] md:text-[7.5vw] lg:text-[6.5vw] font-black tracking-[-0.04em] leading-[0.9] text-white"
            >
              SKY LAB.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-white/35 text-base max-w-xl"
          >
            Experiments, prototypes and things I'm currently building.
          </motion.p>
        </div>

        {/* Lab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            const isOpen = active === demo.id;

            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="border border-white/8 hover:border-white/15 transition-all duration-300 bg-white/[0.01]"
              >
                {/* Card header */}
                <button
                  onClick={() => setActive(isOpen ? null : demo.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 border border-white/8 text-accent">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base tracking-tight">{demo.title}</h3>
                      <div className="font-mono text-[9px] text-white/30 tracking-[0.1em] mt-0.5">{demo.subtitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:block px-2 py-1 border border-accent/25 font-mono text-[8px] tracking-[0.12em] text-accent/70 uppercase">
                      {demo.badge}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/30 text-xl font-light leading-none"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                {/* Expandable demo area */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/[0.05] pt-5">
                        <demo.Component />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
