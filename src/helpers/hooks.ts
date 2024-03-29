/**
 * Scrolls to the top of the page
 */
export const scrollToTop = () => {
  if (window) window.scrollTo({ top: 0, behavior: 'smooth' });
  return null;
};
