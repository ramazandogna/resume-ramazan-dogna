import Project from '../../components/layouts/Project';
import SectionTitle from '../../components/ui/SectionTitle';
import { projectsData } from '../../data/data';

export default function Projects() {
  return (
    <section className="flex flex-col gap-2">
      <SectionTitle title="Projects" />
      <div className="hover-container flex flex-col gap-4">
        {projectsData.map((_, index) => (
          <div key={index} className="hover-wrapper text-justify">
            <Project projectIndex={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
