import Experience from '../../components/layouts/Experience';
import { experienceData } from '../../Data/data';

export default function WorkExperiences() {
  return (
    <div className="flex flex-col gap-8">
      {experienceData.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
    </div>
  );
}
