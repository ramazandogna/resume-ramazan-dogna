import Badge from '../../ui/Badge';

interface ServiceCardProps {
  title: string;
  problem: string;
  detail: string;
  technologies: string[];
}

export default function ServiceCard({ title, problem, detail, technologies }: ServiceCardProps) {
  return (
    <div className="hover-wrapper flex flex-col gap-2 h-full">
      <h3>{title}</h3>
      <div className="sub-hover-container flex flex-col gap-1">
        <p className="sub-hover text-[var(--ink)]">{problem}</p>
        <p className="sub-hover text-justify text-[var(--ink-soft)]">{detail}</p>
      </div>
      <div className="badge-container flex flex-wrap gap-1.5 mt-auto pt-1">
        {technologies.map((technology) => (
          <span key={technology} className="badge">
            <Badge size="small">{technology}</Badge>
          </span>
        ))}
      </div>
    </div>
  );
}
