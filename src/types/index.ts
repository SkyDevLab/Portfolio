// Types for the SkyDevLab portfolio

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  tags: string[];
  links: ProjectLink[];
  caseStudy: CaseStudy;
  accentColor: string;
  visual: ProjectVisual;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'npm' | 'nuget' | 'demo' | 'docs' | 'case-study' | 'marketplace';
}

export interface CaseStudy {
  problem: string;
  idea: string;
  implementation: string;
  result: string;
  techStack: string[];
}

export interface ProjectVisual {
  type: 'diagram' | 'code' | 'schema';
  content: string;
}

export interface OpenSourceContribution {
  id: string;
  repo: string;
  repoUrl: string;
  contribution: string;
  technology: string;
  description: string;
  prNumber?: string;
  status: 'merged' | 'open' | 'closed';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: ExperienceProject[];
}

export interface ExperienceProject {
  name: string;
  highlights: string[];
}

export interface TechItem {
  name: string;
  category: string;
}

export interface LabDemo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'scanner' | 'crypto' | 'formatter' | 'hud';
  badge: string;
}

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  shortcut?: string;
  action: 'navigate' | 'external' | 'command';
  target: string;
}
