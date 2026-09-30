import SectionTitle from '../../../components/ui/SectionTitle';
import { processSteps } from '../../../data/freelance';

export default function FreelanceProcess() {
  return (
    <section className="flex flex-col gap-2">
      <SectionTitle title="How I work" />
      <ol className="hover-container flex flex-col gap-2">
        {processSteps.map((item) => (
          <li key={item.step} className="hover-wrapper flex flex-col gap-1">
            <span className="step-number">{item.step}</span>
            <h3>{item.title}</h3>
            <p className="text-justify text-[var(--ink-soft)]">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
