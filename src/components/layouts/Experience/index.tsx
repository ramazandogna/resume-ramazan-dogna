import Badge from '../../ui/Badge';
import ExperienceType from '../../../Data/data';

interface ExperienceProps {
  experience: ExperienceType;
}

export default function Experience({ experience }: ExperienceProps) {
  const { company, companyLink, date, title, responsibilities, technologies } = experience;

  return (
    <div className="w-full flex flex-col gap-10px">
      <div className="flex justify-between items-center">
        <a
          className="transition-all hover:opacity-40 active:opacity-100"
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{company}</h3>
        </a>
        <div>{date}</div>
      </div>
      <div>{title}</div>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant={tech.variant}>
            {tech.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
