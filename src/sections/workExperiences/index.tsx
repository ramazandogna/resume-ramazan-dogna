import Experience from '../../components/layouts/Experience';
import { experienceData } from '../../data/data';
import SectionTitle from '../../components/ui/SectionTitle';

export default function WorkExperiences() {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="Work Experience" />
      <div className="hover-container flex flex-col gap-8 text-justify">
        {experienceData.map((experience, index) => (
          <div key={index} className="hover-wrapper">
            <Experience experience={experience} />
          </div>
        ))}
      </div>
    </section>
  );
}
