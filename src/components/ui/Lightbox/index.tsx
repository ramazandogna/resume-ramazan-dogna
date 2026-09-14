import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <figure className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="lightbox__img" />
        <figcaption className="lightbox__caption">{alt}</figcaption>
      </figure>
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>,
    document.body
  );
}
