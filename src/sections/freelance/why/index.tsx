import SectionTitle from '../../../components/ui/SectionTitle';
import { reasons } from '../../../data/freelance';

export default function FreelanceWhy() {
  return (
    <section className="flex flex-col gap-2">
      <SectionTitle title="Why work with me" />
      <ul className="hover-container flex flex-col gap-2">
        {reasons.map((reason) => (
          <li key={reason.title} className="hover-wrapper flex flex-col gap-1">
            <h3>{reason.title}</h3>
            <p className="text-justify text-[var(--ink-soft)]">{reason.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
