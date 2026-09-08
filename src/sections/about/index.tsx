import SectionTitle from '../../components/ui/SectionTitle';

export default function About() {
  return (
    <div className="flex flex-col">
      <SectionTitle title="About" />
      <span className="flex flex-col gap-1 hover-container">
        <p className="hover-wrapper text-justify">
          Product-driven Full-Stack Developer with over 2 years of professional experience across
          the TypeScript, React, and Node.js ecosystems. I have a proven track record of
          architecting scalable microservices and offline-first applications, and I am a strong
          advocate for Clean Code and YAGNI principles.
        </p>
        <p className="hover-wrapper text-justify">
          I specialize in the frontend with React, Vue, and Next.js, and I am equally comfortable on
          the backend with NestJS, Node.js, PostgreSQL, and Redis — enabling me to design and ship
          full-stack, production-ready products end to end.
        </p>
        <p className="hover-wrapper text-justify">
          Based in Tokyo on a Student Visa (fully eligible to transition to an
          Engineering/Humanities working visa), I am currently expanding my technical boundaries
          with AI-integrated pipelines while actively mastering Japanese.
        </p>
      </span>
    </div>
  );
}
