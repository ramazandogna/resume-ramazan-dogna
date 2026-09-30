import FreelanceWork from '../../../components/layouts/FreelanceWork';
import SectionTitle from '../../../components/ui/SectionTitle';
import { selectedWork, workAngles } from '../../../data/freelance';

export default function FreelanceSelectedWork() {
  return (
    <section id="selected-work" className="flex flex-col gap-2 scroll-mt-8">
      <SectionTitle title="Selected work" />
      <div className="hover-container flex flex-col gap-4">
        {selectedWork.map((project) => (
          <div key={project.id} className="hover-wrapper text-justify">
            <FreelanceWork project={project} angle={workAngles[project.id]} />
          </div>
        ))}
      </div>
    </section>
  );
}
