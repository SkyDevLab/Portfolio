import type { Experience, TechItem } from '@/types';

export const experiences: Experience[] = [
  {
    company: 'Magnusminds IT Solutions',
    role: 'Software Engineer',
    period: 'August 2025 – Present',
    location: 'Ahmedabad, India',
    projects: [
      {
        name: 'ESO EMR',
        highlights: [
          'Engineered high-throughput web services using ServiceStack with .NET backend and Angular frontend, resulting in 25% improvement in page rendering speeds.',
          'Designed secure RESTful APIs for electronic medical record retrieval, reducing latency by 15% with full HIPAA compliance.',
        ],
      },
      {
        name: 'ASTM',
        highlights: [
          'Architected containerized .NET Core microservices on Docker and Kubernetes with React frontend, supporting 40% growth in concurrent user transactions.',
          'Constructed event-driven pipelines using Apache Kafka and AWS Lambda, achieving sub-100ms event propagation latency.',
        ],
      },
    ],
  },
  {
    company: 'Vohra Wound Care',
    role: 'Software Engineer',
    period: 'May 2023 – June 2025',
    location: 'Ahmedabad, India',
    projects: [
      {
        name: 'Vohra Physicians EMR',
        highlights: [
          'Developed and maintained critical features across both web (ASP.NET MVC) and desktop (WPF MVVM) architectures, streamlining clinical workflows and reducing overhead by 30%.',
          'Spearheaded full-stack feature implementations, optimizing data access via LINQ and Entity Framework Core.',
        ],
      },
      {
        name: 'Admin Portal for EMR',
        highlights: [
          'Engineered a secure administrative dashboard using .NET Core MVC and SQL Server, automating clinician scheduling and saving 15+ administrative hours per week.',
        ],
      },
    ],
  },
  {
    company: 'SRDT Pvt Ltd',
    role: 'Software Developer',
    period: 'July 2022 – March 2023',
    location: 'Lucknow, India',
    projects: [
      {
        name: 'IIM Bangalore & J&K Bank (Oracle ERP)',
        highlights: [
          'Custom-developed enterprise ledger modules for Oracle ERP systems using PeopleCode, handling critical financial transactions.',
          'Refactored Oracle SQL queries, database views, and stored procedures, accelerating execution times by 40%.',
          'Maintained 99.9% system availability rate through collaborative SDLC planning and deployment strategies.',
        ],
      },
    ],
  },
];

export const certifications = [
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    code: 'AZ-204',
    issuer: 'Microsoft',
    type: 'cloud',
  },
  {
    name: 'Microsoft Applied Skills: Develop an ASP.NET Core web app that consumes an API',
    issuer: 'Microsoft',
    type: 'development',
  },
  {
    name: 'Complete Generative AI: Build Pro Web, Mobile & SaaS Apps',
    issuer: 'Udemy',
    type: 'ai',
  },
  {
    name: 'SQL Certification',
    issuer: 'HackerRank',
    type: 'database',
  },
  {
    name: 'C# Certification',
    issuer: 'HackerRank',
    type: 'language',
  },
];

export const techStack: TechItem[] = [
  { name: '.NET', category: 'backend' },
  { name: 'C#', category: 'language' },
  { name: 'ASP.NET CORE', category: 'backend' },
  { name: 'TYPESCRIPT', category: 'language' },
  { name: 'REACT', category: 'frontend' },
  { name: 'ANGULAR', category: 'frontend' },
  { name: 'NODE.JS', category: 'backend' },
  { name: 'DOCKER', category: 'devops' },
  { name: 'KUBERNETES', category: 'devops' },
  { name: 'APACHE KAFKA', category: 'messaging' },
  { name: 'AZURE', category: 'cloud' },
  { name: 'AWS', category: 'cloud' },
  { name: 'REDIS', category: 'database' },
  { name: 'SQL SERVER', category: 'database' },
  { name: 'MONGODB', category: 'database' },
  { name: 'ENTITY FRAMEWORK', category: 'orm' },
  { name: 'NUGET', category: 'package-manager' },
  { name: 'NPM', category: 'package-manager' },
  { name: 'GITHUB ACTIONS', category: 'ci-cd' },
  { name: 'AZURE DEVOPS', category: 'ci-cd' },
  { name: 'WPF MVVM', category: 'desktop' },
  { name: 'SERVICESTACK', category: 'backend' },
];
