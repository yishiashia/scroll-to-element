import easingFuncs from "./easingFuncs";

let interrupted = false;
let interruptedTime = Date.now();
let eventListenerAttached = false;
let isScrolling = false;
let lastScrollTime = 0;

const debounce = function(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

const wheelHandler = debounce(
  () => {
    interrupted = true;
    interruptedTime = Date.now();
  },
  100,
  true
);

const getScrollParent = function (element, includeHidden) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;

  if (style.position === "fixed") return document.body;
  for (var parent = element; (parent = parent.parentElement);) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent;
  }

  return document.body;
}

const scrollToElement = (
  target: Element | HTMLElement | null,
  options: {
    duration: number;
    easeFunc: string;
  } = {
    duration: 600,
    easeFunc: "linear"
  }
) => {
  if (target) {
    // Configs
    let duration = parseInt(String(options.duration))
    duration = isNaN(duration) ? 600 : duration
    duration = duration >=0 ? duration : 600

    const easeFunc =
      ["easeOutCubic", "easeOutQuint", "linear"].includes(options.easeFunc) ?
        easingFuncs[options.easeFunc] : easingFuncs["linear"]

    if (isScrolling && Date.now() - lastScrollTime < duration) {
      return;
    } else {

      // Perform scroll
      const startY = window.scrollY;
      const parent = getScrollParent(target, false);
      const yPos =
        target.getBoundingClientRect().top - parent.getBoundingClientRect().top;
      const difference = yPos - startY;
      const startTime = performance.now();

      lastScrollTime = Date.now();

      // Catch user interrupted event
      if (Date.now() - interruptedTime > duration * 2) {
        interrupted = false;
      }

      if (!eventListenerAttached) {
        window.addEventListener("wheel", wheelHandler); // PC
        window.addEventListener("touchmove", wheelHandler); // mobile device
        eventListenerAttached = true;
      }

      const step = () => {
        const progress = (performance.now() - startTime) / duration;
        const amount = easeFunc(progress);
        window.scrollTo({ top: startY + amount * difference });
        if (!interrupted && progress < 0.99) {
          isScrolling = true;
          window.requestAnimationFrame(step);
        } else {
          isScrolling = false;
          interruptedTime = 0;
          window.scrollTo({ top: yPos})
        }
      };

      step();
    }
  }
};

export default scrollToElement;
