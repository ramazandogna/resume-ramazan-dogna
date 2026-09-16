import BlurImage from '../BlurImage';

interface ScreenshotProps {
  src: string;
  placeholder?: string;
  alt: string;
  onOpen: () => void;
}

export default function Screenshot({ src, placeholder, alt, onOpen }: ScreenshotProps) {
  return (
    <button
      type="button"
      className="project-shot"
      onClick={onOpen}
      aria-label={`Enlarge screenshot of ${alt}`}
    >
      <BlurImage src={src} placeholder={placeholder} alt={alt} defer />
    </button>
  );
}
