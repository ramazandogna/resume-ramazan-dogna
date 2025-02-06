import Badge from '../../ui/Badge';
import { projectsData } from '../../../data/data';

interface ProjectProps {
  projectIndex: number;
}

export default function Project({ projectIndex }: ProjectProps) {
  const project = projectsData[projectIndex];

  return (
    <div className="flex flex-col gap-10px">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.linkUrl ? (
        <span className="">
          <a
            className="link-effect"
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkText}
          </a>
        </span>
      ) : (
        <span className="text-gray-500">No Public Link</span>
      )}
      <div className="badge-container flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
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
