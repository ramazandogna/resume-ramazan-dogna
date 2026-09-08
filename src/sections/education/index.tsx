import SectionTitle from '../../components/ui/SectionTitle';
import { educationData } from '../../data/data';

export default function Education() {
  return (
    <section className="flex flex-col gap-2">
      <SectionTitle title={educationData.title} />
      <ul className="bullet-list hover-container flex flex-col gap-2">
        {educationData.items.map((item, index) => (
          <li key={index} className="hover-wrapper text-justify">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
