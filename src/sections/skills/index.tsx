import Badge from '../../components/ui/Badge';
import SectionTitle from '../../components/ui/SectionTitle';
import { skillsData } from '../../data/data';

export default function Skills() {
  return (
    <section className="flex flex-col gap-2">
      <SectionTitle title="Skills" />
      <div className="badge-container flex flex-wrap gap-1.5">
        {skillsData.map((skill, index) => (
          <span key={index} className="badge">
            <Badge variant={skill.variant} size={skill.size}>
              {skill.name}
            </Badge>
          </span>
        ))}
      </div>
    </section>
  );
}
