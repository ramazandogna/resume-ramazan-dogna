import { projectsData } from './data';
import type { Project } from './data';

/* ==========================================================================
   Content for /freelance.
   Everything here is drawn from the CV data in ./data.ts — no new claims.
   ========================================================================== */

export const contactEmail = 'doganrmzn40@gmail.com';

export const hero = {
  eyebrow: 'Freelance & contract engineering — Tokyo, Japan',
  headline: 'Production web engineer',
  stack: 'TypeScript · React · Vue · Next.js · Node.js · Web Automation · Accessibility',
  lede: 'I get hired to fix, finish and ship web products that are already running. Two and a half years building client-facing frontends and automation pipelines in production — now taking on contract work.',
  primaryCta: 'Start a project',
  secondaryCta: 'View work'
};

interface Service {
  title: string;
  /** The client's problem, in their words — not a technology list. */
  problem: string;
  detail: string;
  technologies: string[];
}

export const services: Service[] = [
  {
    title: 'React / Vue / Next.js development',
    problem: 'Your app works, but the bug list keeps growing and features take too long to land.',
    detail:
      'I work inside existing codebases rather than around them: reproduce the bug, find the actual cause, fix it without widening the blast radius. I have shipped in all three frameworks in production, in TypeScript.',
    technologies: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'TypeScript']
  },
  {
    title: 'Browser automation & web scraping',
    problem:
      'The data you need lives on somebody else’s website and copying it by hand does not scale.',
    detail:
      'I led an automated data-scraping initiative in production — a Node.js and Puppeteer pipeline processing 1,000+ records — and have since built scrapers with adaptive backoff and dynamic pagination that survive bot detection.',
    technologies: ['Playwright', 'Puppeteer', 'Node.js', 'BullMQ', 'Redis']
  },
  {
    title: 'Accessibility & WCAG improvements',
    problem:
      'An audit came back failing, or a contract now requires an accessibility standard you do not meet.',
    detail:
      'I architected and integrated a company-wide accessibility compliance platform across a product suite, so I have done this as ongoing engineering rather than a one-off cleanup pass.',
    technologies: ['WCAG', 'ARIA', 'Semantic HTML', 'Keyboard navigation']
  },
  {
    title: 'Consent, cookies & third-party integrations',
    problem:
      'A consent banner, tag or third-party script has to work correctly across every property you own.',
    detail:
      'I spent two and a half years at a consent-management and digital-compliance company, building and deploying cookie consent banners for major corporate clients across multiple platforms.',
    technologies: ['Consent management', 'Chrome Extension API', 'Vue.js', 'TypeScript']
  },
  {
    title: 'Small full-stack features & product rescue',
    problem:
      'A feature needs both a frontend and an API, and you do not want to coordinate two contractors.',
    detail:
      'I design and ship end to end — interface, API, schema, deployment. Recent work includes queue-backed microservices, real-time sync over WebSockets and offline-first architectures.',
    technologies: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker']
  },
  {
    title: 'Agency overflow & contract support',
    problem: 'You have more committed work than engineers for the next few weeks.',
    detail:
      'I plug into an existing team and process — feature branches, pull requests, code review, Agile/Scrum — which is how I have worked for my entire professional career. English-speaking, and used to written, asynchronous collaboration.',
    technologies: ['Git', 'GitHub Actions', 'Agile', 'Scrum', 'Code review']
  }
];

interface Reason {
  title: string;
  detail: string;
}

export const reasons: Reason[] = [
  {
    title: '2.5+ years of production experience',
    detail:
      'Aug 2023 to Mar 2026 as a frontend developer at Efilli, a consent-management and digital-compliance company — all of it on software that real customers were using.'
  },
  {
    title: 'Enterprise, client-facing work',
    detail:
      'Built and deployed consent systems for major corporate clients, where the requirement was strict compliance across platforms I did not control.'
  },
  {
    title: 'Frontend and backend, not just one',
    detail:
      'React, Vue and Next.js on the frontend; NestJS, Node.js, PostgreSQL and Redis on the backend. I can take a feature the whole way rather than handing it off halfway.'
  },
  {
    title: 'Automation and scraping as a specialty',
    detail:
      'A Chrome extension for repetitive browser actions, a Puppeteer pipeline for data acquisition, and queue-orchestrated scraping with Playwright and BullMQ.'
  },
  {
    title: 'Accessibility taken seriously',
    detail:
      'I integrated an accessibility compliance platform company-wide. It is a normal part of how I build, not a line item I add at the end.'
  },
  {
    title: 'Published, open-source work',
    detail:
      'rei-kit is on npm with build provenance and a release job that runs a real consumer application’s checks before anything ships. The code is public — you can read how I work before hiring me.'
  },
  {
    title: 'Tokyo-based, English-speaking',
    detail:
      'Based in Tokyo, Japan. Professional working proficiency in English, native Turkish, N4-level Japanese. Comfortable working across time zones in writing.'
  }
];

interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell me the problem',
    detail:
      'Not the solution you have in mind — the thing that is actually going wrong. A paragraph and a link to the app is usually enough to start.'
  },
  {
    step: '02',
    title: 'I inspect the existing system',
    detail:
      'I read the code, reproduce the behaviour, and find where it really breaks. Often the reported bug and the actual cause are in different places.'
  },
  {
    step: '03',
    title: 'I propose the smallest practical solution',
    detail:
      'Scope, approach and what I would deliberately leave alone. I favour YAGNI: a rewrite is rarely the cheapest fix, and I will say so if it is.'
  },
  {
    step: '04',
    title: 'I implement and deliver',
    detail:
      'Feature branches, pull requests, readable commits and documentation for anything non-obvious — so the work stays maintainable after I hand it back.'
  }
];

/**
 * Selected work for freelance visitors: the projects that read as evidence
 * for the services above, most commercially legible first.
 * Ordered by id — the project content itself stays in ./data.ts.
 */
const selectedWorkIds = [
  'scrape-and-compare',
  'local-sales-system',
  'marketplace',
  'rei-kit',
  'hibi',
  'kakei'
] as const;

/** What this project proves to a client, in one line. */
export const workAngles: Record<string, string> = {
  'scrape-and-compare':
    'Evidence for: scraping at scale, queue-backed background processing, and LLM integration in a real pipeline.',
  'local-sales-system':
    'Evidence for: commercial full-stack delivery — offline-first architecture, real-time sync and desktop packaging for a paying business context.',
  marketplace:
    'Evidence for: performance and technical SEO work on a large Next.js application, including an image pipeline and multi-language routing.',
  'rei-kit':
    'Evidence for: maintainable shared code — a published, versioned design system with a release pipeline that gates on a real consumer app.',
  hibi: 'Evidence for: shipping a complete product — installable PWA, push notifications and database-level access control.',
  kakei:
    'Evidence for: product thinking as much as code — an interface designed around the one screen the user actually needs.'
};

export const selectedWork: Project[] = selectedWorkIds
  .map((id) => projectsData.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));
