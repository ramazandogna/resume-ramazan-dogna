import ServiceCard from '../../../components/layouts/ServiceCard';
import SectionTitle from '../../../components/ui/SectionTitle';
import { services } from '../../../data/freelance';

export default function FreelanceServices() {
  return (
    <section className="flex flex-col gap-2">
      <SectionTitle title="Services" />
      <div className="hover-container grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
