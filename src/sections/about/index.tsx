import SectionTitle from '../../components/ui/SectionTitle';

export default function About() {
  return (
    <div className="flex flex-col">
      <SectionTitle title="About" />
      <span className="flex flex-col gap-12px hover-container">
        <p className="hover-wrapper">
          I am a Frontend Engineer with 1.5 years of experience in building high-performance,
          scalable web applications using React.js, Vue.js, Next.js, and Nuxt.js. While specializing
          in frontend, I also have experience with Node.js and MongoDB, enabling me to contribute to
          full-stack projects when needed.
        </p>
        <p className="hover-wrapper">
          I excel in problem-solving, performance optimization, and UI/UX development, adapting
          quickly to new technologies and best practices. Working in Agile teams, I contribute to
          architecture decisions and workflow improvements to deliver efficient and maintainable
          solutions.
        </p>
        <p className="hover-wrapper">
          Driven by continuous learning and innovation, I stay ahead of industry trends to develop
          impactful and modern applications.
        </p>
      </span>
    </div>
  );
}
