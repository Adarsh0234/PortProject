import { Variants } from "motion/react";

/**
 * Reusable animation variants for scroll-based animations
 * Optimized for cinematic, premium portfolio feel
 */

// Easing function: cubic-bezier(0.22, 1, 0.36, 1) - smooth, elegant
export const easing = [0.22, 1, 0.36, 1];

/**
 * FadeUp: Fade in with upward motion
 * Entry: opacity 0 → 1, y: 80-120px → 0
 * Exit: opacity 1 → 0, y: 0 → 80px down
 */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: 80,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

/**
 * ScaleIn: Combine scale + fade for depth effect
 * Creates premium parallax-like feel
 */
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 80,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

/**
 * StaggerContainer: Parent container for staggered children
 * Staggers child animations for smooth cascading effect
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

/**
 * StaggerItem: Child items in stagger container
 * Simpler animation - parent handles stagger timing
 */
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: 60,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

/**
 * Heading: Larger, heavier animation for section titles
 * Slower, more dramatic reveal
 */
export const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

/**
 * Paragraph: Text reveal animation
 * Smooth, flowing reveal
 */
export const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

/**
 * Card: Premium card reveal with scale
 * Combines fade, scale, and upward motion for depth
 */
export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 80,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

/**
 * ImageReveal: Image with initial scale + fade
 * Creates elegant image entrance
 */
export const imageRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
};

/**
 * Button: Small, quick animation for CTAs
 * Fast, snappy feel
 */
export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

/**
 * Icon: Quick, snappy icon animation
 * For small visual elements
 */
export const iconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 10,
    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

/**
 * Timeline: Sequential reveal for timeline/list items
 * Used in Education and Experience sections
 */
export const timelineVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    y: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    y: 30,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
