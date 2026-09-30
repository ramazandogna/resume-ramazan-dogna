import CtaButton from '../../../components/ui/CtaButton';
import SectionTitle from '../../../components/ui/SectionTitle';
import { contactEmail } from '../../../data/freelance';

export default function FreelanceCta() {
  return (
    <section className="flex flex-col gap-2">
      <SectionTitle title="Get in touch" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-400">Have a problem to solve?</h3>
          <p className="max-w-[62ch] text-justify text-[var(--ink-soft)]">
            Send me the problem and a link to the system it lives in. I will tell you what I think
            is actually going on, what I would do about it, and whether I am the right person for it
            — before either of us commits to anything.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <CtaButton href={`mailto:${contactEmail}?subject=Project%20enquiry`}>Email me</CtaButton>
          <CtaButton href="https://www.linkedin.com/in/ramazandogna/" variant="ghost" external>
            LinkedIn
          </CtaButton>
        </div>
        <p className="text-13px text-[var(--muted)]">
          Tokyo, Japan · {contactEmail} · English, Turkish, Japanese (N4)
        </p>
      </div>
    </section>
  );
}
