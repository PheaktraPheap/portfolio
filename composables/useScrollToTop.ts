// composables/useScrollToTop.ts

interface UseScrollToTopReturn {
  scrollToTop: (behavior?: ScrollBehavior) => void;
  scrollToElement: (id: string, offset?: number) => void;
  currentScrollPosition: Ref<number>;
  scrollProgress: Ref<number>;
}

export const useScrollToTop = (): UseScrollToTopReturn => {
  const currentScrollPosition = ref(0);
  const scrollProgress = ref(0);

  const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
    if (process.client) {
      window.scrollTo({
        top: 0,
        behavior
      });
    }
  };

  const scrollToElement = (id: string, offset: number = 80): void => {
    if (process.client) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Track scroll position and progress
  const updateScrollPosition = (): void => {
    if (process.client) {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      currentScrollPosition.value = window.scrollY;
      scrollProgress.value = scrollableHeight > 0 ? Math.min((window.scrollY / scrollableHeight) * 100, 100) : 0;
    }
  };

  onMounted(() => {
    if (process.client) {
      window.addEventListener('scroll', updateScrollPosition, { passive: true });
      updateScrollPosition(); // Initial update
    }
  });

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', updateScrollPosition);
    }
  });

  return {
    scrollToTop,
    scrollToElement,
    currentScrollPosition,
    scrollProgress
  };
};