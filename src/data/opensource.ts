import type { OpenSourceContribution } from '@/types';

export const contributions: OpenSourceContribution[] = [
  {
    id: 'aspnetcore-docs-37601',
    repo: 'dotnet/AspNetCore.Docs',
    repoUrl: 'https://github.com/dotnet/AspNetCore.Docs/pull/37601',
    contribution: 'PR #37601',
    technology: 'ASP.NET Core / MVC',
    description:
      'Documented custom IApiDescriptionProvider in MVC application model — providing official Microsoft documentation for developers customizing API Explorer and OpenAPI specification generation in ASP.NET Core.',
    prNumber: '37601',
    status: 'merged',
  },
  {
    id: 'aspnetcore-docs-37600',
    repo: 'dotnet/AspNetCore.Docs',
    repoUrl: 'https://github.com/dotnet/AspNetCore.Docs/pull/37600',
    contribution: 'PR #37600',
    technology: 'ASP.NET Core / IIS / Server',
    description:
      'Documented IISServerOptions.MaxRequestBodySize and IHttpMaxRequestBodySizeFeature in the official file upload guide — detailing exact request body limits and streaming upload configuration across IIS and Kestrel.',
    prNumber: '37600',
    status: 'merged',
  },
  {
    id: 'aspnetcore-docs-37599',
    repo: 'dotnet/AspNetCore.Docs',
    repoUrl: 'https://github.com/dotnet/AspNetCore.Docs/pull/37599',
    contribution: 'PR #37599',
    technology: 'ASP.NET Core / Architecture',
    description:
      'Clarified controller role for invoking model logic — refining architectural boundaries between MVC controllers, domain model execution, and validation workflows in ASP.NET Core.',
    prNumber: '37599',
    status: 'merged',
  },
];

export const githubProfile = {
  username: 'SkyDevLab',
  profileUrl: 'https://github.com/SkyDevLab',
  programMemberships: ['GitHub Developer Program'],
  focus: ['.NET', 'ASP.NET Core', 'C#', 'Cloud Architecture', 'Developer Tools'],
};

export const openSourceCategories = [
  '.NET',
  'ASP.NET Core',
  'C#',
  'Developer Tools',
  'Cloud Architecture',
] as const;
