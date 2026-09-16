import { useEffect, useState } from 'react';

/** True once the page has finished loading. Used to hold deferred images back
 *  so they never compete with the fonts, the stylesheet or the CV itself. */
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

interface BlurImageProps {
  src: string;
  placeholder?: string;
  alt: string;
  /** Hold the real file back until the page has loaded. Off for anything
   *  above the fold, where the wait would be the regression. */
  defer?: boolean;
  className?: string;
}

export default function BlurImage({ src, placeholder, alt, defer, className }: BlurImageProps) {
  const pageLoaded = usePageLoaded();
  const [shown, setShown] = useState(false);
  const ready = defer ? pageLoaded : true;

  return (
    <>
      {placeholder && (
        <img src={placeholder} alt="" aria-hidden="true" className={`blur-up__lqip ${className}`} />
      )}
      {ready && (
        <img
          src={src}
          alt={alt}
          decoding="async"
          onLoad={() => setShown(true)}
          className={`blur-up__full${shown ? ' is-shown' : ''} ${className}`}
        />
      )}
    </>
  );
}
