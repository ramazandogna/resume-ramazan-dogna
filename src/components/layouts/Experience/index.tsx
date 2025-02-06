import Badge from '../../ui/Badge';
import ExperienceType from '../../../data/data';

interface ExperienceProps {
  experience: ExperienceType;
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <h3>{experience.title}</h3>
        <p>{experience.company}</p>
        <p>{experience.date}</p>
      </div>
      <ul className="list-disc pl-4">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <div className="badge-container flex flex-wrap gap-2">
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
