import { useEffect, useState } from 'react';

/** True once the page has finished loading, so screenshots never compete with
 *  the fonts, the stylesheet or the CV itself for bandwidth. */
function usePageLoaded() {
  const [loaded, setLoaded] = useState(
    () => typeof document !== 'undefined' && document.readyState === 'complete'
  );

  useEffect(() => {
    if (loaded) return;
    const onLoad = () => setLoaded(true);
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, [loaded]);

  return loaded;
}

interface ScreenshotProps {
  src: string;
  placeholder?: string;
  alt: string;
  onOpen: () => void;
}

export default function Screenshot({ src, placeholder, alt, onOpen }: ScreenshotProps) {
  const pageLoaded = usePageLoaded();
  const [shown, setShown] = useState(false);

  return (
    <button
      type="button"
      className="project-shot"
      onClick={onOpen}
      aria-label={`Enlarge screenshot of ${alt}`}
    >
      {placeholder && <img src={placeholder} alt="" aria-hidden="true" className="shot-blur" />}
      {pageLoaded && (
        <img
          src={src}
          alt={alt}
          decoding="async"
          onLoad={() => setShown(true)}
          className={`shot-full${shown ? ' is-shown' : ''}`}
        />
      )}
    </button>
  );
}
