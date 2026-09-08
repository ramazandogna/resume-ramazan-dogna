import Badge from '../../ui/Badge';
import ExperienceType from '../../../data/data';

interface ExperienceProps {
  experience: ExperienceType;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <h3>{experience.title}</h3>
        <p className="text-[var(--ink-soft)]">{experience.company}</p>
        <p className="text-13px text-[var(--muted)]">{experience.date}</p>
      </div>
      <ul className="bullet-list sub-hover-container flex flex-col gap-1">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="sub-hover">
            {responsibility}
          </li>
        ))}
      </ul>
      <div className="badge-container flex flex-wrap gap-1.5">
        {experience.technologies.map((tech, index) => (
          <span key={index} className="badge">
            <Badge variant={tech.variant} size="small">
              {tech.name}
            </Badge>
          </span>
        ))}
      </div>
    </div>
  );
}
