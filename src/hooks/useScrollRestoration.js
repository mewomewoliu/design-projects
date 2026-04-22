import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Keyed by location.key (stable per history entry in React Router v6).
// navigate(-1) returns the same key → same saved position.
const scrollMap = new Map();

/** Save current scroll immediately for a given location key. */
export function saveScroll(key) {
  scrollMap.set(key, window.scrollY);
}

/**
 * Restore saved scroll for a given location key.
 * Uses scrollTop assignment to bypass css scroll-behavior:smooth.
 */
export function restoreScroll(key) {
  const y = scrollMap.get(key);
  if (!y) return;
  requestAnimationFrame(() => {
    document.documentElement.scrollTop = y;
    document.body.scrollTop = y; // Safari
  });
}

/**
 * Hook: attach to the top-level app component.
 * Continuously saves scroll position (debounced) for the current history entry.
 */
export default function useScrollSaver() {
  const { key } = useLocation();

  useEffect(() => {
    let timeout;
    const save = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => scrollMap.set(key, window.scrollY), 100);
    };
    window.addEventListener('scroll', save, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', save);
    };
  }, [key]);
}
