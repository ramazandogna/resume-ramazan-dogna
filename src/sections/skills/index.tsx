import Badge from '../../components/ui/Badge';
import SectionTitle from '../../components/ui/SectionTitle';
import { skillsData } from '../../Data/data';

export default function Skills() {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <Badge key={index} variant={skill.variant} size={skill.size}>
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
}
