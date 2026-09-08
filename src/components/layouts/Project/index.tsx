import Badge from '../../ui/Badge';
import { projectsData } from '../../../data/data';

interface ProjectProps {
  projectIndex: number;
}

export default function Project({ projectIndex }: ProjectProps) {
  const project = projectsData[projectIndex];

  return (
    <div className="flex flex-col gap-2">
      <h3>{project.title}</h3>
      <div className="sub-hover-container flex flex-col gap-1">
        <p className="sub-hover">{project.description}</p>
        <span className="sub-hover text-13px">
          {project.linkUrl ? (
            <a
              className="link-effect text-[var(--ink-soft)]"
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkText}
            </a>
          ) : (
            <span className="text-[var(--muted)]">No Public Link</span>
          )}
        </span>
      </div>
      <div className="badge-container flex flex-wrap gap-1.5">
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
