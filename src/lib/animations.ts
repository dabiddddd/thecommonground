export const transitions = {
  fast: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
  base: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  slow: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  spring: { type: 'spring' as const, stiffness: 300, damping: 24 },
  springGentle: { type: 'spring' as const, stiffness: 200, damping: 28 },
  springBouncy: { type: 'spring' as const, stiffness: 400, damping: 18 },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.slow },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: transitions.base },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: transitions.base },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const viewportOptions = { once: true, margin: '-100px' as const };

export function reducedMotionProps(shouldReduce: boolean) {
  if (shouldReduce) {
    return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } };
  }
  return {};
}
