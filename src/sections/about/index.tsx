import SectionTitle from '../../components/ui/SectionTitle';

export default function About() {
  return (
    <div className="flex flex-col">
      <SectionTitle title="About" />
      <span className="flex flex-col gap-12px hover-container">
        <p className="hover-wrapper text-justify">
          I am a Frontend Developer with 2 years of experience in building high-performance,
          scalable web applications using React.js, Vue.js, and Next.js. While specializing
          in frontend, I also have experience with Node.js and MongoDB, enabling me to contribute to
          full-stack projects when needed.
        </p>
        <p className="hover-wrapper text-justify">
          I excel in problem-solving, performance optimization, and UI/UX development, adapting
          quickly to new technologies and best practices. Contributed to architecture and workflows 
          in Agile teams to ship scalable, maintainable solutions.
        </p>
        <p className="hover-wrapper text-justify">
          Driven by continuous learning and innovation, I stay ahead of industry trends to develop
          impactful and modern applications.
        </p>
      </span>
    </div>
  );
}
