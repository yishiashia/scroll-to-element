// Easing functions
const easingFuncs = {
  "easeOutCubic": t => --t * t * t + 1,
  "easeOutQuint": t => 1 + --t * t * t * t * t,
  "linear": t => t
}

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

const scrollToElement = (target, options={ duration: 600, easeFunc: "linear" }) => {

  // Configs
  let duration = parseInt(options.duration)
  duration = isNaN(duration) ? 600 : duration
  duration = duration >=0 ? duration : 600

  let easeFunc =
    ["easeOutCubic", "easeOutQuint", "linear"].includes(options.easeFunc) ? 
      easingFuncs[options.easeFunc] : easingFuncs["linear"]

  const startY = window.scrollY;
  const parent = getScrollParent(target);
  const yPos =
    target.getBoundingClientRect().top - parent.getBoundingClientRect().top;
  const difference = yPos - startY;
  const startTime = performance.now();

  const step = () => {
    const progress = (performance.now() - startTime) / duration;
    const amount = easeFunc(progress);
    window.scrollTo({ top: startY + amount * difference });
    if (progress < 0.99) {
      window.requestAnimationFrame(step);
    }
  };

  step();
};

module.exports = scrollToElement