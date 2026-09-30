import { Link } from 'react-router-dom';
import CtaButton from '../../../components/ui/CtaButton';
import { contactEmail, hero } from '../../../data/freelance';

export default function FreelanceHero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="text-11px uppercase tracking-[0.22em] text-[var(--muted)]">{hero.eyebrow}</p>
        <h1 className="text-32px md:text-46px font-300 uppercase tracking-[0.02em] leading-tight">
          Ramazan <span className="font-600">Doğan</span>
        </h1>
        <h2 className="text-lg md:text-xl font-400 text-[var(--ink)]">{hero.headline}</h2>
        <p className="text-13px text-[var(--ink-soft)]">{hero.stack}</p>
      </div>

      <p className="max-w-[62ch] text-justify text-[var(--ink-soft)]">{hero.lede}</p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <CtaButton href={`mailto:${contactEmail}?subject=Project%20enquiry`}>
          {hero.primaryCta}
        </CtaButton>
        <CtaButton href="#selected-work" variant="ghost">
          {hero.secondaryCta}
        </CtaButton>
      </div>

      <p className="text-13px text-[var(--muted)]">
        Looking for the full CV instead?{' '}
        <Link className="link-effect text-[var(--ink-soft)]" to="/">
          Read the portfolio
        </Link>
      </p>
    </section>
  );
}
