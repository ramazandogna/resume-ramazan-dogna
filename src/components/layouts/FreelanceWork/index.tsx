import { useState } from 'react';
import Badge from '../../ui/Badge';
import Lightbox from '../../ui/Lightbox';
import Screenshot from '../../ui/Screenshot';
import type { Project } from '../../../data/data';

interface FreelanceWorkProps {
  project: Project;
  /** One line on what this project is evidence of, for a client reading quickly. */
  angle?: string;
}

export default function FreelanceWork({ project, angle }: FreelanceWorkProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {project.image && (
        <Screenshot
          src={project.image}
          placeholder={project.imageBlur}
          alt={project.title}
          onOpen={() => setOpen(true)}
        />
      )}
      {open && project.image && (
        <Lightbox src={project.image} alt={project.title} onClose={() => setOpen(false)} />
      )}
      <h3>{project.title}</h3>
      <div className="sub-hover-container flex flex-col gap-1">
        {angle && <p className="sub-hover text-[var(--ink)]">{angle}</p>}
        <p className="sub-hover text-justify text-[var(--ink-soft)]">{project.description}</p>
        <span className="sub-hover text-13px flex flex-wrap items-center gap-x-5 gap-y-1">
          {project.linkUrl && (
            <a
              className="link-effect text-[var(--ink-soft)]"
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkText}
            </a>
          )}
          {project.demoUrl && (
            <a
              className="link-effect text-[var(--ink-soft)]"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.demoText}
            </a>
          )}
        </span>
      </div>
      <div className="badge-container flex flex-wrap gap-1.5">
        {project.technologies.map((technology) => (
          <span key={technology.name} className="badge">
            <Badge variant={technology.variant} size="small">
              {technology.name}
            </Badge>
          </span>
        ))}
      </div>
    </div>
  );
}
