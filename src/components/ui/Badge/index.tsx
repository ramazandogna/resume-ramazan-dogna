interface BadgeProps {
  children: React.ReactNode;
  size?: 'small' | 'normal';
  variant?: 'dark-green' | 'lite-green' | 'black' | 'blue' | 'yellow' | 'gray';
}

export default function Badge({ children, size = 'small', variant = 'gray' }: BadgeProps) {
  const sizeClasses = {
    small: 'text-11px px-2 py-1',
    normal: 'text-12px px-2.5 py-1'
  };

  const variantClasses = {
    'dark-green': 'bg-[#68A063] text-white', // Node.js green
    'lite-green': 'bg-[#00DC82] text-black', // Nuxt.js green
    black: 'bg-[#1F2328] text-white', // Next.js black
    blue: 'bg-[#61DAFB] text-black', // React blue
    yellow: 'bg-[#FFD700] text-black', // Lightning yellow
    gray: 'bg-[#708090] text-white' // Slate gray
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-[var(--radius-badge)] cursor-default leading-none
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
    >
      {children}
    </span>
  );
}
