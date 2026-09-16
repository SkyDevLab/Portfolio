import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'skyweb-auto-test-generator',
    number: '01',
    title: 'SkyWeb Auto Test Generator v2.0',
    category: 'VISUAL STUDIO EXTENSION / ROSLYN',
    shortDescription:
      'Roslyn-based C# static analysis and automated NUnit + Moq unit test generation for Visual Studio 2022. Features constructor dependency mocking, async/void method handling, cursor-based method test generation, side-by-side split view with syntax highlighting, and one-click test project creation.',
    tags: ['Visual Studio 2022', 'Roslyn Compiler API', 'C#', 'NUnit', 'Moq', 'VSIX', 'TDD'],
    links: [
      {
        label: 'VS Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=SuryaPratapSingh.SkywebAutoTestGenerator',
        type: 'marketplace',
      },
      {
        label: 'Case Study',
        url: '#case-study-test-gen',
        type: 'case-study',
      },
    ],
    accentColor: '#2563EB',
    visual: {
      type: 'code',
      content: 'test-gen',
    },
    caseStudy: {
      problem:
        'Writing repetitive unit tests with constructor mocks, async setups, and assertions takes up to 40% of developer time, leading to lower test coverage and missed regression boundaries.',
      idea:
        'Leverage the Microsoft Roslyn Compiler Platform inside Visual Studio 2022 to inspect syntax trees and symbol models directly in the editor, automatically synthesizing production-ready NUnit test fixtures with Mock dependencies.',
      implementation:
        'Developed as a native Visual Studio 2022 VSIX extension. Implemented Roslyn AST analysis to parse class constructors, identify dependency interfaces, generate Moq setup stubs, and construct structured test methods for public synchronous and asynchronous methods with cursor-based generation.',
      result:
        'Published on Visual Studio Marketplace. Accelerates test creation from minutes to a single keystroke, complete with side-by-side preview and automatic test project binding.',
      techStack: ['C#', 'Roslyn Compiler Platform', 'Visual Studio SDK (VSIX)', 'NUnit', 'Moq', 'WPF'],
    },
  },
  {
    id: 'skywebframework-ecosystem',
    number: '02',
    title: 'SkyWebFramework',
    category: '.NET / NUGET ECOSYSTEM',
    shortDescription:
      'A modular, high-performance C#/.NET infrastructure and utilities ecosystem published on NuGet. Includes SkyWebFramework.Logging (asynchronous non-blocking file logging with GZip compression and auto-rotation), SkyWebFramework.Caching (L1 memory cache and distributed cache abstractions), SkyWebFramework.Utilities, Result models, and health check middleware.',
    tags: ['.NET 8', 'C#', 'NuGet', 'Logging', 'Caching', 'Health Checks', 'Dependency Injection'],
    links: [
      {
        label: 'NuGet Packages',
        url: 'https://www.nuget.org/packages?q=SkyWebFramework',
        type: 'nuget',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/SkyDevLab/SkyWebFramework',
        type: 'github',
      },
      {
        label: 'Case Study',
        url: '#case-study-skyweb',
        type: 'case-study',
      },
    ],
    accentColor: '#0EA5E9',
    visual: {
      type: 'diagram',
      content: 'skywebframework',
    },
    caseStudy: {
      problem:
        'Enterprise .NET teams repeatedly reinvent boilerplate infrastructure: structured logging pipelines, memory caching wrappers, error result models, and health monitoring endpoints across microservices.',
      idea:
        'Author a composable suite of lightweight, zero-bloat NuGet packages that provide standardized, high-efficiency building blocks with clean dependency injection extensions.',
      implementation:
        'Architected modular packages on NuGet: SkyWebFramework.Logging (featuring background worker threads for non-blocking file writes, automatic time/size log rotation, and GZip archival), SkyWebFramework.Caching (L1 in-memory caching with thread-safe eviction), SkyWebFramework.Utilities (high-speed string, reflection, and date utilities), and standardized Result<T> pattern models.',
      result:
        'Published on NuGet gallery. Decreased enterprise bootstrap and foundational setup time by 40%, delivering reliable, battle-tested primitives to production applications.',
      techStack: ['C#', '.NET 8', 'ASP.NET Core', 'NuGet', 'xUnit', 'GZip Stream', 'MemoryCache'],
    },
  },
  {
    id: 'skyweb-mascot',
    number: '03',
    title: 'SkyWeb Mascot',
    category: 'VISUAL STUDIO EXTENSION / IDE COMPANION',
    shortDescription:
      'An interactive animated coding companion for Visual Studio 2022. Brings the IDE editor to life with jetpack flying, rock guitar solos, dancing, double-eye blinks, and interactive drag-and-drop physics mechanics.',
    tags: ['Visual Studio 2022', 'VSIX', 'C#', 'WPF', 'Interactive Physics', 'IDE Enhancement'],
    links: [
      {
        label: 'VS Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=SuryaPratapSingh.SkyWebMascot',
        type: 'marketplace',
      },
      {
        label: 'Case Study',
        url: '#case-study-mascot',
        type: 'case-study',
      },
    ],
    accentColor: '#8B5CF6',
    visual: {
      type: 'schema',
      content: 'skyweb-mascot',
    },
    caseStudy: {
      problem:
        'Intense software engineering hours can lead to cognitive fatigue and monotonous coding sessions. Developer tooling is rarely fun or human-centric.',
      idea:
        'Create a lightweight, delightfully animated coding companion directly inside the Visual Studio 2022 text editor window without compromising IDE rendering performance.',
      implementation:
        'Engineered using Visual Studio Adornment APIs and WPF hardware-accelerated rendering. Implemented smooth animation state machines for jetpack flight, guitar solos, dancing gestures, and physics-based drag-and-drop mechanics that dock intelligently along the editor margins.',
      result:
        'Published on Visual Studio Marketplace. Highly praised by .NET developers for bringing personality, joy, and seamless animation to daily coding sessions.',
      techStack: ['C#', 'Visual Studio SDK', 'WPF Animations', 'State Machine', 'VSIX'],
    },
  },
  {
    id: 'pr-doctor',
    number: '04',
    title: 'PR Doctor',
    category: 'DEVELOPER TOOL / GITHUB AUTOMATION',
    shortDescription:
      'An intelligent pull-request assistant designed to help developers review changes, identify architectural anti-patterns, detect complexity hotspots, and automate engineering workflows.',
    tags: ['TypeScript', 'GitHub Actions', 'AST Analysis', 'Developer Tooling', 'CI/CD'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/SkyDevLab/pr-doctor',
        type: 'github',
      },
      {
        label: 'Case Study',
        url: '#case-study-pr-doctor',
        type: 'case-study',
      },
    ],
    accentColor: '#10B981',
    visual: {
      type: 'diagram',
      content: 'pr-doctor',
    },
    caseStudy: {
      problem:
        'Pull request reviews often get delayed or bogged down in syntax and structural discrepancies, slowing down sprint velocity and missing edge-case risks.',
      idea:
        'Build a developer tool that performs immediate automated pre-review analysis on unified diffs before senior engineers spend time on manual reviews.',
      implementation:
        'Built with TypeScript and GitHub Actions webhook integration. Runs unified diff analysis, calculates cyclomatic risk scores, highlights oversized changesets, and flags common security and maintainability risks.',
      result:
        'Automated, consistent early feedback that shortens review cycles and helps engineers maintain high code quality standards.',
      techStack: ['TypeScript', 'Node.js', 'GitHub Actions', 'AST Parsing', 'REST API'],
    },
  },
  {
    id: 'gravity-safe-code-paste',
    number: '05',
    title: 'GravitySafeCodePaste',
    category: 'SECURITY / PRIVACY / WEB CRYPTO',
    shortDescription:
      'A security-focused code snippet sharing platform built on zero-knowledge encryption. Plaintext is encrypted in the browser with AES-GCM; the secret key lives only in the URL fragment and is never transmitted to the host.',
    tags: ['JavaScript', 'Web Crypto API', 'AES-GCM', 'Zero-Knowledge', 'Security'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/SkyDevLab/GravitySafeCodePaste',
        type: 'github',
      },
      {
        label: 'Case Study',
        url: '#case-study-safe-paste',
        type: 'case-study',
      },
    ],
    accentColor: '#F59E0B',
    visual: {
      type: 'schema',
      content: 'safe-code-paste',
    },
    caseStudy: {
      problem:
        'Engineers routinely paste sensitive code snippets, SQL queries, and configuration files into public pastebins, exposing credentials and proprietary business logic.',
      idea:
        'Provide a lightweight code sharing utility where confidentiality is mathematically guaranteed by client-side cryptography.',
      implementation:
        'Implemented using native browser Web Crypto API (AES-GCM with 256-bit keys). Encryption occurs locally; the key is appended to the URL fragment identifier (#), which browsers never send in HTTP request headers.',
      result:
        'Zero-knowledge code snippet sharing where only parties possessing the exact fragment link can decrypt the code.',
      techStack: ['JavaScript', 'Web Crypto API', 'AES-GCM', 'HTML5', 'CSS3'],
    },
  },
];
