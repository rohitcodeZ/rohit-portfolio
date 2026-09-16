import { useEffect, useState } from 'react';

export function useScrollReveal(threshold = 0.1) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > threshold * window.innerHeight) {
        setIsRevealed(true);
      } else {
        setIsRevealed(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isRevealed;
}
