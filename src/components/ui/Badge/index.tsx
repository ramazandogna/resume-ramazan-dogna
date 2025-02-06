interface BadgeProps {
  children: React.ReactNode;
  size?: 'small' | 'normal';
  variant?: 'dark-green' | 'lite-green' | 'black' | 'blue' | 'yellow' | 'gray';
}

export default function Badge({ children, size = 'small', variant = 'gray' }: BadgeProps) {
  const sizeClasses = {
    small: 'text-xs px-2 py-1',
    normal: 'text-sm px-3 py-1.5'
  };

  const variantClasses = {
    'dark-green': 'bg-[#68A063]/80 text-white', // Node.js yeşili
    'lite-green': 'bg-[#00DC82]/80 text-black', // Nuxt.js yeşili
    black: 'bg-[#000000]/80 text-white', // Next.js siyahı
    blue: 'bg-[#61DAFB]/80 text-black', // React mavisi
    yellow: 'bg-[#FFD700]/80 text-black', // Yıldırım sarısı
    gray: 'bg-[#708090]/80 text-white' // Duman grisi
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center 
        rounded-full font-medium
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
    >
      {children}
    </span>
  );
}
