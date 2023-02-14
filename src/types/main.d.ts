export {};

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    scrollToElement: (
      target: Element | HTMLElement,
      options: {
        duration: number;
        easeFunc: "linear" | "easeOutCubic" | "easeOutQuint";
      }
    ) => void;
  }
}