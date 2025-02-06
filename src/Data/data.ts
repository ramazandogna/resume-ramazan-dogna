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

export const experienceData: ExperienceType[] = [
  {
    company: 'Efilli',
    companyLink: 'efilli.com',
    date: '0000 - Present',
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
      { name: 'React', variant: 'blue' },
      { name: 'Next.js', variant: 'black' },
      { name: 'Node.js', variant: 'dark-green' },
      { name: 'Nuxt.js', variant: 'lite-green' },
      { name: 'TypeScript', variant: 'blue' },
      { name: 'MongoDB', variant: 'dark-green' }
    ]
  }
];
