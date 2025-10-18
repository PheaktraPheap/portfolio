// composables/useScrollToTop.ts

interface UseScrollToTopReturn {
    scrollToTop: (behavior?: ScrollBehavior) => void;
    scrollToElement: (id: string, offset?: number) => void;
  }
  
  export const useScrollToTop = (): UseScrollToTopReturn => {
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
  
    return {
      scrollToTop,
      scrollToElement
    };
  };