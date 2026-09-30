interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  external?: boolean;
}

export default function CtaButton({
  href,
  children,
  variant = 'primary',
  external
}: CtaButtonProps) {
  return (
    <a
      className={`cta${variant === 'ghost' ? ' cta--ghost' : ''}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
