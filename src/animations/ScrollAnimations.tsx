import { ReactNode } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variants: any;
  className?: string;
  delay?: number;
}

/**
 * ScrollReveal: Universal scroll-triggered animation wrapper
 * Triggers animation when element enters viewport
 * Replays animation when re-entering viewport (cinematic feel)
 */
export function ScrollReveal({
  children,
  variants,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Allow animation to replay when re-entering
    amount: 0.2, // Trigger at 20% visibility
    margin: "0px 0px -100px 0px", // Additional bottom margin for earlier trigger
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  variants: any;
  className?: string;
}

/**
 * StaggerContainer: Parent wrapper for staggered child animations
 * Automatically staggers children with consistent timing
 */
export function StaggerContainer({
  children,
  variants,
  className = "",
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * FadeUp: Quick wrapper for fade + upward motion
 * Common pattern: heading, paragraph, CTA
 */
export function FadeUp({ children, className = "", delay = 0 }: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
      }
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * SectionReveal: Wrapper for entire sections
 * Manages viewport entry/exit for smooth section transitions
 */
export function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.15,
    margin: "0px 0px -150px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
