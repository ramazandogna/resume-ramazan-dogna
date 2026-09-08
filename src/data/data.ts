export default interface ExperienceType {
  company: string;
  companyLink: string;
  date: string;
  title: string;
  responsibilities: string[];
  technologies: Array<{
    name: string;
    variant?: 'dark-green' | 'lite-green' | 'black' | 'blue' | 'yellow' | 'gray';
  }>;
}

type BadgeVariant = 'blue' | 'lite-green' | 'black' | 'dark-green' | 'gray' | 'yellow';
type BadgeSize = 'small' | 'normal';

interface Skill {
  name: string;
  variant: BadgeVariant;
  size: BadgeSize;
}

export const skillsData: Skill[] = [
  { name: 'React.js', variant: 'blue', size: 'normal' },
  { name: 'Vue.js', variant: 'lite-green', size: 'normal' },
  { name: 'Next.js', variant: 'black', size: 'normal' },
  { name: 'Nuxt.js', variant: 'lite-green', size: 'normal' },
  { name: 'TypeScript', variant: 'blue', size: 'normal' },
  { name: 'JavaScript', variant: 'yellow', size: 'normal' },
  { name: 'Node.js', variant: 'dark-green', size: 'normal' },
  { name: 'NestJS', variant: 'gray', size: 'normal' },
  { name: 'Express.js', variant: 'dark-green', size: 'normal' },
  { name: 'Fastify', variant: 'black', size: 'normal' },
  { name: 'Bun', variant: 'gray', size: 'normal' },
  { name: 'PostgreSQL', variant: 'blue', size: 'normal' },
  { name: 'Prisma', variant: 'black', size: 'normal' },
  { name: 'MongoDB', variant: 'dark-green', size: 'normal' },
  { name: 'SQLite', variant: 'blue', size: 'normal' },
  { name: 'Redis', variant: 'gray', size: 'normal' },
  { name: 'BullMQ', variant: 'gray', size: 'normal' },
  { name: 'Socket.IO', variant: 'black', size: 'normal' },
  { name: 'Playwright', variant: 'lite-green', size: 'normal' },
  { name: 'Puppeteer', variant: 'blue', size: 'normal' },
  { name: 'Web Scraping', variant: 'gray', size: 'normal' },
  { name: 'Chrome Extensions', variant: 'gray', size: 'normal' },
  { name: 'AI / LLM Integration', variant: 'blue', size: 'normal' },
  { name: 'TailwindCSS', variant: 'blue', size: 'normal' },
  { name: 'UnoCSS', variant: 'black', size: 'normal' },
  { name: 'SCSS', variant: 'blue', size: 'normal' },
  { name: 'Redux Toolkit', variant: 'black', size: 'normal' },
  { name: 'Context API', variant: 'blue', size: 'normal' },
  { name: 'Vuex', variant: 'lite-green', size: 'normal' },
  { name: 'Jest', variant: 'gray', size: 'normal' },
  { name: 'Vitest', variant: 'gray', size: 'normal' },
  { name: 'SSR/CSR/SSG/ISR', variant: 'black', size: 'normal' },
  { name: 'SEO', variant: 'gray', size: 'normal' },
  { name: 'Docker', variant: 'blue', size: 'normal' },
  { name: 'Electron', variant: 'blue', size: 'normal' },
  { name: 'GitHub Actions', variant: 'gray', size: 'normal' },
  { name: 'Nginx', variant: 'gray', size: 'normal' },
  { name: 'Git', variant: 'gray', size: 'normal' },
  { name: 'Agile', variant: 'gray', size: 'normal' },
  { name: 'Scrum', variant: 'gray', size: 'normal' }
];

export const experienceData: ExperienceType[] = [
  {
    company: 'Efilli — consent management & digital compliance for major corporate clients',
    companyLink: 'https://efilli.com',
    date: 'Feb 2024 - Mar 2026',
    title: 'Frontend Developer',
    responsibilities: [
      'Engineered scalable web solutions across the React, Vue, and Next.js ecosystems in TypeScript, consistently delivering maintainable, production-ready code.',
      'Collaborated closely with cross-functional teams and technical leadership to translate product requirements into robust, deployable features.',
      'Led the "Automated Data Scraping Initiative," architecting an automated pipeline (Node.js, Express, Puppeteer, MongoDB) that processed 1,000+ records efficiently to drive business data acquisition.',
      'Architected and integrated a company-wide A11y (accessibility) compliance platform across digital products, helping meet global accessibility standards and expand user reach.',
      'Worked in an Agile/Scrum environment with feature branches, pull requests, and code reviews to keep the codebase clean and shippable.'
    ],
    technologies: [
      { name: 'React.js', variant: 'blue' },
      { name: 'Vue.js', variant: 'lite-green' },
      { name: 'Next.js', variant: 'black' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'Node.js', variant: 'dark-green' },
      { name: 'Express.js', variant: 'dark-green' },
      { name: 'MongoDB', variant: 'dark-green' },
      { name: 'Puppeteer', variant: 'blue' },
      { name: 'Redux Toolkit', variant: 'black' },
      { name: 'Jest', variant: 'gray' },
      { name: 'Git', variant: 'gray' }
    ]
  },
  {
    company: 'Efilli',
    companyLink: 'https://efilli.com',
    date: 'Aug 2023 - Feb 2024',
    title: 'Frontend Developer (Part-Time & Intern)',
    responsibilities: [
      'Developed a specialized Chrome extension using Vue.js, TypeScript, and the Chrome Extension APIs to automate repetitive browser actions.',
      'Built browser automation scripts for navigation and event tracking, integrating them into functional user dashboards.',
      'Created and deployed cookie consent banners for major corporate clients, ensuring strict compliance and a seamless user experience across multiple platforms.',
      'Authored and maintained comprehensive documentation for frontend projects.'
    ],
    technologies: [
      { name: 'Vue.js', variant: 'lite-green' },
      { name: 'React.js', variant: 'blue' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'UnoCSS', variant: 'black' },
      { name: 'Chrome Extension API', variant: 'gray' }
    ]
  },
  {
    company: 'Umutvadi — digital presence & content strategy for a high-traffic web platform',
    companyLink: 'No Public Link Available',
    date: 'Dec 2019 - Dec 2024',
    title: 'Web Content Manager',
    responsibilities: [
      'Led the overarching design, content strategy, and SEO optimization of the platform from its inception.',
      'Implemented on-page and off-page SEO strategies to grow organic engagement.',
      'Created and published 120+ heavily SEO-optimized articles, attracting more than 2 million unique visitors.'
    ],
    technologies: [
      { name: 'SEO', variant: 'gray' },
      { name: 'Content Strategy', variant: 'gray' },
      { name: 'On-Page SEO', variant: 'gray' },
      { name: 'Off-Page SEO', variant: 'gray' }
    ]
  }
];

interface Project {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  demoText?: string;
  demoUrl?: string;
  technologies: {
    name: string;
    variant: BadgeVariant;
  }[];
}

export const projectsData: Project[] = [
  {
    title: 'rei-kit — Vue 3 Design System & Shared Runtime',
    description:
      "零 — the shared layer extracted out of Hibi once it proved portable: thirteen components, six composables, eight utilities, design tokens and a generic i18n runtime, with Supabase behind its own entry point so apps that skip it never download it. Published to npm with provenance and guarded by a release job that runs a real consumer app's checks before anything ships.",
    linkText: 'View on GitHub',
    linkUrl: 'https://github.com/ramazandogna/rei-kit',
    demoText: 'View on npm',
    demoUrl: 'https://www.npmjs.com/package/rei-kit',
    technologies: [
      { name: 'Vue 3', variant: 'lite-green' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'TailwindCSS', variant: 'blue' },
      { name: 'Vite', variant: 'yellow' },
      { name: 'npm', variant: 'gray' },
      { name: 'GitHub Actions', variant: 'gray' },
      { name: 'Design Systems', variant: 'gray' }
    ]
  },
  {
    title: 'Kakehashi — Japanese Course for Turkish Speakers',
    description:
      '架け橋 ("the bridge") — a Japanese course that follows the order a language school in Japan actually teaches: the day\'s kanji first, then the words written with those kanji, then the grammar built from those words, then an exam over all of it. 86 days across Kana, N5 and N4, with 414 characters, 1,362 words, 103 grammar points and 2,205 exam questions. Vocabulary is not dealt out evenly — a word lands on the day by which every character in it has been taught, so day two of the alphabet course can already be read rather than recognised. Access is enforced in the database, not the client: a day you have not reached returns no rows at all, exam answers have row-level security on with no read policy, and the grants are cut back to least privilege (55 RLS assertions run in CI).',
    linkText: 'Open the app',
    linkUrl: 'https://kakehashi-nihongo.vercel.app',
    technologies: [
      { name: 'Vue 3', variant: 'lite-green' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'Supabase', variant: 'dark-green' },
      { name: 'Postgres RLS', variant: 'gray' },
      { name: 'rei-kit', variant: 'lite-green' },
      { name: 'TailwindCSS', variant: 'blue' },
      { name: 'vite-ssg', variant: 'yellow' },
      { name: 'Vite', variant: 'yellow' }
    ]
  },
  {
    title: 'Hibi — Habit & Mood Tracker (PWA)',
    description:
      'ひび ("days") — a habit and mood tracker built around three kinds of habit (build, quit, and a 1–5 scale), where every mark can carry a note and the year reads back as a 365-square heatmap. An installable, offline-capable PWA on Vue 3 and Supabase (Postgres + RLS), in four languages, with morning and evening Web Push reminders delivered by a scheduled Postgres job calling an Edge Function — so they arrive with every tab closed.',
    linkText: 'View on GitHub',
    linkUrl: 'https://github.com/ramazandogna/hibi',
    demoText: 'Live app',
    demoUrl: 'https://hibi-habit.vercel.app',
    technologies: [
      { name: 'Vue 3', variant: 'lite-green' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'Supabase', variant: 'dark-green' },
      { name: 'PostgreSQL', variant: 'blue' },
      { name: 'TailwindCSS', variant: 'blue' },
      { name: 'PWA', variant: 'gray' },
      { name: 'Web Push', variant: 'gray' },
      { name: 'i18n', variant: 'gray' },
      { name: 'Vite', variant: 'yellow' }
    ]
  },
  {
    title: 'Kakei — Personal Finance Tracker (PWA)',
    description:
      '家計 ("household accounts") — a money tracker built so the month\'s reckoning is the product: an entry takes under five seconds at the till, and the Month screen prints the sentence that matters ("Konbini · ¥10,000 → ¥8,000 · 20% less"). Month, Ledger, Insights and Profile screens over Vue 3 and Supabase with row-level security, plus fixed monthly entries, five currencies and a configurable month start day for anyone budgeting from payday.',
    linkText: 'View on GitHub',
    linkUrl: 'https://github.com/ramazandogna/kakei',
    demoText: 'Live app',
    demoUrl: 'https://kakei-money.vercel.app',
    technologies: [
      { name: 'Vue 3', variant: 'lite-green' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'Supabase', variant: 'dark-green' },
      { name: 'PostgreSQL', variant: 'blue' },
      { name: 'TailwindCSS', variant: 'blue' },
      { name: 'PWA', variant: 'gray' },
      { name: 'i18n', variant: 'gray' },
      { name: 'Vite', variant: 'yellow' }
    ]
  },
  {
    title: 'Scrape & Compare — AI-Powered Job Matching Engine',
    description:
      'An automated, AI-driven platform that scrapes job boards and scores each listing 0–100 against a candidate profile using Google Gemini. I built an asynchronous background-processing microservice with BullMQ and Redis to orchestrate scraping and AI-scoring batches, plus adaptive backoff and dynamic pagination to bypass bot detection (50+ listings per run).',
    linkText: 'View on GitHub',
    linkUrl: 'https://github.com/ramazandogna/scrape-and-compare',
    technologies: [
      { name: 'TypeScript', variant: 'blue' },
      { name: 'NestJS', variant: 'gray' },
      { name: 'Next.js', variant: 'black' },
      { name: 'PostgreSQL', variant: 'blue' },
      { name: 'Prisma', variant: 'black' },
      { name: 'BullMQ', variant: 'gray' },
      { name: 'Redis', variant: 'gray' },
      { name: 'Playwright', variant: 'lite-green' },
      { name: 'Google Gemini', variant: 'blue' }
    ]
  },
  {
    title: 'Local Sales System — Offline-First POS & Digital Ordering',
    description:
      'An offline-first Point-of-Sale and digital ordering system for local Japanese restaurants — guests order from a table QR while staff run the floor from a live dashboard, all over the restaurant LAN with no cloud required. I designed a monorepo deployable as an Electron desktop app or a single Docker image, with real-time bidirectional sync over Socket.IO and an Ed25519-signed, machine-bound offline licensing system.',
    linkText: 'View on GitHub',
    linkUrl: 'https://github.com/ramazandogna/local-sales-system',
    technologies: [
      { name: 'React.js', variant: 'blue' },
      { name: 'Fastify', variant: 'black' },
      { name: 'SQLite', variant: 'blue' },
      { name: 'Drizzle ORM', variant: 'lite-green' },
      { name: 'Electron', variant: 'blue' },
      { name: 'Socket.IO', variant: 'black' },
      { name: 'Docker', variant: 'blue' }
    ]
  },
  {
    title: 'Japanese C2C Second-Hand Marketplace',
    description:
      'A Japanese-first customer-to-customer marketplace (inspired by Mercari) where every listing is a fast, server-rendered, structured-data-rich page in four languages. Focused on technical SEO, i18n routing, and page speed, with a media pipeline on Cloudflare R2 + ThumbHash and PostgreSQL full-text search. The full stack runs on a single VPS via Docker Compose.',
    linkText: 'View on GitHub',
    linkUrl: 'https://github.com/ramazandogna/online-2nd-hand',
    technologies: [
      { name: 'Next.js', variant: 'black' },
      { name: 'React.js', variant: 'blue' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'Prisma', variant: 'black' },
      { name: 'PostgreSQL', variant: 'blue' },
      { name: 'Cloudflare R2', variant: 'yellow' },
      { name: 'Docker', variant: 'blue' }
    ]
  },
  {
    title: 'Full-Stack Interview Prep Playground',
    description:
      'A hands-on, read-every-line playground of seven small but real projects — HTML/a11y, JavaScript core, Vue, React 19, Next.js 15, Node/Express, and NestJS — where every non-obvious line is commented with the trade-off and the interview question behind it. Built as a senior-level full-stack interview preparation resource.',
    linkText: 'View on GitHub',
    linkUrl: 'https://github.com/ramazandogna/computer-science/tree/main/fullstack-interview-prep',
    technologies: [
      { name: 'React.js', variant: 'blue' },
      { name: 'Vue.js', variant: 'lite-green' },
      { name: 'Next.js', variant: 'black' },
      { name: 'Node.js', variant: 'dark-green' },
      { name: 'Express.js', variant: 'dark-green' },
      { name: 'NestJS', variant: 'gray' },
      { name: 'TypeScript', variant: 'blue' }
    ]
  },
  {
    title: 'Nihongo Grammar — JLPT N5 & N4 Study Guide',
    description:
      'A single-file, offline-friendly Japanese study guide for JLPT N5 & N4, bringing grammar, kanji, vocabulary, and interactive quizzes together in one place with furigana readings and example sentences. Built with vanilla HTML, CSS, and JavaScript — no framework, no build step — including a custom quiz engine with a timer, progress bar, and scored results.',
    linkText: 'View on GitHub',
    linkUrl: 'https://github.com/ramazandogna/nihongo-grammar-n5',
    technologies: [
      { name: 'HTML5', variant: 'yellow' },
      { name: 'CSS3', variant: 'blue' },
      { name: 'JavaScript', variant: 'yellow' }
    ]
  }
];

interface EducationSection {
  title: string;
  items: string[];
}

export const educationData: EducationSection = {
  title: 'Education & Languages',
  items: [
    'ISI Japanese Language School – Language Certification, Japanese Language & Culture (Apr 2026 - Apr 2028): intensive program focused on daily conversational and professional business Japanese.',
    'Bilecik Şeyh Edebali Üniversitesi – BSc in Computer Science (2019 - 2024) - GPA: 3.22/4.00',
    'Languages: Turkish (Native), English (Professional Working Proficiency), Japanese (N4-level proficiency, no JLPT certificate yet — sitting the JLPT N3 exam in December 2026)',
    'Available for full-time on-site, hybrid, or remote engineering roles — based in Tokyo, Japan.'
  ]
};
