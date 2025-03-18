
/**
 * Custom animation utility to add staggered animations to elements
 * @param selector - CSS selector for elements to animate
 * @param animation - Animation class to apply
 * @param staggerDelay - Delay between each element animation in ms
 */
export const animateElements = (
  selector,
  animation,
  staggerDelay = 100
) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add(animation);
    }, index * staggerDelay);
  });
};

/**
 * Observe elements and add animation class when they enter viewport
 * @param selector - CSS selector for elements to observe
 * @param animation - Animation class to apply
 * @param threshold - Intersection threshold (0-1)
 */
export const observeElements = (
  selector,
  animation,
  threshold = 0.1
) => {
  const elements = document.querySelectorAll(selector);
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animation);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    elements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    elements.forEach((el) => el.classList.add(animation));
  }
};
