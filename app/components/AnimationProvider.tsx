"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProviderProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimationProvider({
  children,
  delay = 0,
}: AnimationProviderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 28,
              filter: "blur(4px)",
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration: shouldReduceMotion ? 0.35 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}