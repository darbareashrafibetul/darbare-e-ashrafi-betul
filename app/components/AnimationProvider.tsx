"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProviderProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimationProvider({
  children,
  delay = 0,
}: AnimationProviderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}