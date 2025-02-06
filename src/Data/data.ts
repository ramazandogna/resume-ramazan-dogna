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
  { name: 'Node.js', variant: 'dark-green', size: 'normal' },
  { name: 'Express.js', variant: 'dark-green', size: 'normal' },
  { name: 'MongoDB', variant: 'dark-green', size: 'normal' },
  { name: 'TailwindCSS', variant: 'blue', size: 'normal' },
  { name: 'UnoCSS', variant: 'black', size: 'normal' },
  { name: 'SCSS', variant: 'blue', size: 'normal' },
  { name: 'Agile', variant: 'gray', size: 'normal' },
  { name: 'Scrum', variant: 'gray', size: 'normal' },
  { name: 'GitHub Actions', variant: 'gray', size: 'normal' },
  { name: 'Docker', variant: 'blue', size: 'normal' }
];

export const experienceData: ExperienceType[] = [
  {
    company: 'Efilli',
    companyLink: 'https://efilli.com',
    date: 'Feb 2024 - Present',
    title: 'Frontend Developer',
    responsibilities: [
      'Developed scalable web applications using React.js, Vue.js, Next.js, and Nuxt.js, integrating Redux Toolkit.',
      'Designed and optimized high-traffic banner UI layouts, improving engagement and WebSDK integration.',
      'Built a data scraping service (Node.js, MongoDB, Express, Puppeteer) handling 1,000+ records.',
      'Contributed to the development of a Vue.js-based product management panel built with Nuxt.js.',
      'Collaborated on the frontend architecture and participated in testing processes using Jest to ensure code quality.',
      'Focused on improving existing features and debugging critical issues to enhance performance and usability.',
      'Improved team workflow by implementing Git branching strategies (feature branches, pull requests, code reviews).',
      'Enhanced development workflows and improved technical problem-solving within the team.',
      'Collaborated in an Agile development environment, working within Scrum-based sprints to deliver iterative improvements.',
      'Utilized Git and GitHub for version control, maintaining a clean Git branching strategy (feature branches, pull requests, and code reviews).',
      'Participated in daily stand-ups, sprint planning, and retrospectives, ensuring alignment with project goals and efficient team collaboration.'
    ],
    technologies: [
      { name: 'React.js', variant: 'blue' },
      { name: 'Vue.js', variant: 'lite-green' },
      { name: 'Next.js', variant: 'black' },
      { name: 'Nuxt.js', variant: 'lite-green' },
      { name: 'Redux Toolkit', variant: 'black' },
      { name: 'Node.js', variant: 'dark-green' },
      { name: 'Express.js', variant: 'dark-green' },
      { name: 'MongoDB', variant: 'dark-green' },
      { name: 'Puppeteer', variant: 'blue' },
      { name: 'Jest', variant: 'gray' },
      { name: 'Git', variant: 'gray' },
      { name: 'GitHub', variant: 'gray' }
    ]
  },
  {
    company: 'Efilli',
    companyLink: 'https://efilli.com',
    date: 'Oct 2023 - Feb 2024',
    title: 'Frontend Developer (Part-Time)',
    responsibilities: [
      'Created cookie consent banners for major corporations, ensuring compliance and user-friendly experiences across multiple platforms.',
      'Developed and documented frontend projects using Vue.js, React.js, TypeScript, and UnoCSS.'
    ],
    technologies: [
      { name: 'Vue.js', variant: 'lite-green' },
      { name: 'React.js', variant: 'blue' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'UnoCSS', variant: 'black' }
    ]
  },
  {
    company: 'Efilli',
    companyLink: 'https://efilli.com',
    date: 'Aug 2023 - Sep 2023',
    title: 'Frontend Developer (Intern)',
    responsibilities: [
      'Developed a Chrome extension using Vue.js, TypeScript, and Chrome APIs to automate browser actions.',
      'Created browser automation scripts for navigation and event tracking, integrating them into user dashboards.'
    ],
    technologies: [
      { name: 'Vue.js', variant: 'lite-green' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'Chrome Extension API', variant: 'gray' },
      { name: 'CRXJs', variant: 'gray' }
    ]
  },
  {
    company: "SmartMole's",
    companyLink: 'No Public Link Available',
    date: 'Jul 2023 - Aug 2023',
    title: 'Frontend Developer (Intern)',
    responsibilities: [
      'Built and optimized web applications using Next.js, React, JavaScript, and TypeScript.',
      'Developed a React-based UI with MaterialUI, successfully implementing form validation with Yup.js.'
    ],
    technologies: [
      { name: 'Next.js', variant: 'black' },
      { name: 'React.js', variant: 'blue' },
      { name: 'JavaScript', variant: 'yellow' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'MaterialUI', variant: 'blue' },
      { name: 'Yup.js', variant: 'gray' }
    ]
  },
  {
    company: 'Umutvadi',
    companyLink: 'No Public Link Available',
    date: 'Dec 2019 - Dec 2024',
    title: 'Web Content Manager',
    responsibilities: [
      'Led the design, content strategy, and SEO optimization of a website from inception.',
      'Implemented on-page and off-page SEO strategies, increasing organic traffic and engagement.',
      'Created over 120 SEO-optimized articles, driving more than 2 million unique visitors.'
    ],
    technologies: [
      { name: 'SEO', variant: 'gray' },
      { name: 'Content Strategy', variant: 'gray' },
      { name: 'On-Page SEO', variant: 'gray' },
      { name: 'Off-Page SEO', variant: 'gray' }
    ]
  }
];

export const projectData: ExperienceType[] = [
  {
    company: 'Company Project',
    companyLink: 'No Public Link Available',
    date: 'Ongoing',
    title: 'Automated Data Scraping & Processing Service',
    responsibilities: [
      'Developed a scalable web scraping service using Node.js, Express.js, Puppeteer, and MongoDB.',
      'Dynamically determined scraping conditions, filtered, and ranked data based on accuracy.',
      'Processed over 1,000 records efficiently.',
      'Hosted on a self-managed server using SSL, SSH, Nginx, and Docker.'
    ],
    technologies: [
      { name: 'Node.js', variant: 'dark-green' },
      { name: 'Express.js', variant: 'dark-green' },
      { name: 'Puppeteer', variant: 'blue' },
      { name: 'MongoDB', variant: 'dark-green' },
      { name: 'Docker', variant: 'blue' },
      { name: 'Nginx', variant: 'gray' }
    ]
  },
  {
    company: 'Company Project',
    companyLink: 'No Public Link Available',
    date: 'Ongoing',
    title: 'Rei Dashboard',
    responsibilities: [
      'Developed a full-stack web application to manage structured data retrieved from the Automated Data Scraping Service.',
      'Built the frontend with React.js, Redux Toolkit, Framer Motion, and UnoCSS.',
      'Designed an interactive and responsive user experience for dynamically managing datasets.'
    ],
    technologies: [
      { name: 'React.js', variant: 'blue' },
      { name: 'Redux Toolkit', variant: 'black' },
      { name: 'Framer Motion', variant: 'blue' },
      { name: 'UnoCSS', variant: 'black' }
    ]
  },
  {
    company: 'Senior Capstone Project',
    companyLink: 'No Public Link Available',
    date: 'Completed',
    title: 'Element Capturer',
    responsibilities: [
      'Developed a browser extension that allows UI designers to dynamically extract and save HTML & CSS components.',
      'Captured user-selected areas, extracted DOM elements, and stored them in a full-stack application.',
      'Built using Vue.js, TypeScript, UnoCSS, MongoDB, Express.js, and Node.js.',
      'Enabled saving, organizing, and sharing of UI elements for collaborative development.'
    ],
    technologies: [
      { name: 'Vue.js', variant: 'lite-green' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'UnoCSS', variant: 'black' },
      { name: 'MongoDB', variant: 'dark-green' },
      { name: 'Express.js', variant: 'dark-green' },
      { name: 'Node.js', variant: 'dark-green' },
      { name: 'Vite', variant: 'black' },
      { name: 'Chrome Extension API', variant: 'gray' },
      { name: 'CRXJs', variant: 'gray' }
    ]
  },
  {
    company: 'Personal Project',
    companyLink: 'RD Task Manager',
    date: 'Completed',
    title: 'RD Task Manager',
    responsibilities: [
      'Developed a task management app in 2 hours to test Cursor IDE capabilities.',
      'Designed an interactive UI with drag-and-drop and click-based transitions.',
      'Implemented task organization into To-Do, In Progress, and Completed sections.'
    ],
    technologies: [
      { name: 'React.js', variant: 'blue' },
      { name: 'Redux Toolkit', variant: 'black' },
      { name: 'Tailwind CSS', variant: 'blue' },
      { name: 'Framer Motion', variant: 'blue' },
      { name: 'Recharts', variant: 'blue' }
    ]
  }
];

interface Project {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  technologies: {
    name: string;
    variant: BadgeVariant;
  }[];
}

export const projectsData: Project[] = [
  {
    title: 'Automated Data Scraping & Processing Service',
    description:
      'A scalable web scraping service built with Node.js, Express.js, Puppeteer, and MongoDB. Dynamically determines scraping conditions, filters and ranks data based on accuracy, and processes 1,000+ records. Hosted on a self-managed server using SSL, SSH, Nginx, and Docker.',
    linkText: 'View Project',
    linkUrl: '',
    technologies: [
      { name: 'Node.js', variant: 'dark-green' },
      { name: 'Express.js', variant: 'dark-green' },
      { name: 'Puppeteer', variant: 'blue' },
      { name: 'MongoDB', variant: 'dark-green' },
      { name: 'Docker', variant: 'blue' },
      { name: 'Nginx', variant: 'gray' }
    ]
  },
  {
    title: 'Rei Dashboard',
    description:
      'A full-stack web application built using the Automated Data Scraping Service. Users can request datasets and retrieve structured information. The frontend is developed with React.js, Redux Toolkit, Framer Motion, and UnoCSS, ensuring a responsive and interactive experience.',
    linkText: 'View Project',
    linkUrl: '',
    technologies: [
      { name: 'React.js', variant: 'blue' },
      { name: 'Redux Toolkit', variant: 'black' },
      { name: 'Framer Motion', variant: 'blue' },
      { name: 'UnoCSS', variant: 'black' }
    ]
  },
  {
    title: 'Element Capturer',
    description:
      'A browser extension & full-stack system that allows UI designers to dynamically extract and save HTML & CSS components. Captured elements are stored in a full-stack app built with Vue.js, TypeScript, UnoCSS, MongoDB, Express.js, and Node.js.',
    linkText: 'Academic Paper',
    linkUrl: 'https://drive.google.com/file/d/1JOHsRPW40tNMj3wU_8u6WtUYB2sTJ8ed/view?usp=sharing',
    technologies: [
      { name: 'Vue.js', variant: 'lite-green' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'UnoCSS', variant: 'black' },
      { name: 'MongoDB', variant: 'dark-green' },
      { name: 'Express.js', variant: 'dark-green' },
      { name: 'Node.js', variant: 'dark-green' },
      { name: 'Vite', variant: 'black' },
      { name: 'Chrome Extension API', variant: 'gray' },
      { name: 'CRXJs', variant: 'gray' }
    ]
  },
  {
    title: 'RD Task Manager',
    description:
      'A task management app built in 2 hours to test Cursor IDE. Tasks are organized into To-Do, In Progress, and Completed sections with drag-and-drop and click-based transitions. Developed with React.js, Redux Toolkit, Tailwind CSS, Framer Motion, and Recharts.',
    linkText: 'View Project',
    linkUrl: 'https://rd-task-manager.vercel.app/',
    technologies: [
      { name: 'React.js', variant: 'blue' },
      { name: 'Redux Toolkit', variant: 'black' },
      { name: 'Tailwind CSS', variant: 'blue' },
      { name: 'Framer Motion', variant: 'blue' },
      { name: 'Recharts', variant: 'blue' }
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
    'Bilecik Şeyh Edebali Üniversitesi – BSc in Computer Science (2019 - 2024) - 3.22',
    'Turkish (Native), English (Professional Working Proficiency)'
  ]
};
