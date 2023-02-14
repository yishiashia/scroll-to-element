const easingFuncs = {
  "easeOutCubic": t => --t * t * t + 1,
  "easeOutQuint": t => 1 + --t * t * t * t * t,
  "linear": t => t
};

export default easingFuncs;
