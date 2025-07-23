import { useCallback } from 'react';

interface AutoScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
  delay?: number;
}

export const useAutoScroll = (options: AutoScrollOptions = {}) => {
  const {
    offset = 80, // Décalage pour éviter que l'élément soit collé au header
    behavior = 'smooth',
    delay = 100 // Délai pour laisser l'animation d'ouverture se terminer
  } = options;

  const scrollToElement = useCallback((elementId: string) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        const offsetPosition = elementTop - offset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior
        });
      }
    }, delay);
  }, [offset, behavior, delay]);

  const scrollToElementRef = useCallback((element: HTMLElement | null) => {
    if (!element) return;
    
    setTimeout(() => {
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.pageYOffset;
      const offsetPosition = elementTop - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior
      });
    }, delay);
  }, [offset, behavior, delay]);

  const scrollToTop = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior
      });
    }, delay);
  }, [behavior, delay]);

  return {
    scrollToElement,
    scrollToElementRef,
    scrollToTop
  };
};