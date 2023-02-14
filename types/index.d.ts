declare module '@yishiashia/scroll-to-element' {
  export default function scrollToElement(
    target: Element | HTMLElement | null,
    options?: {
      duration: number;
      easeFunc: "linear" | "easeOutCubic" | "easeOutQuint";
    }
  ): void;
}
