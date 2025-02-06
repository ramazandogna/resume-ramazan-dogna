import Badge from '../../components/ui/Badge';
import SectionTitle from '../../components/ui/SectionTitle';
import { skillsData } from '../../data/data';

export default function Skills() {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="Skills" />
      <div className="flex flex-wrap gap-2 badge-container">
        {skillsData.map((skill, index) => (
          <span key={index} className="badge hover-wrapper">
            <Badge variant={skill.variant} size={skill.size}>
              {skill.name}
            </Badge>
          </span>
        ))}
      </div>
    </section>
  );
}
