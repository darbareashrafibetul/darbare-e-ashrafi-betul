"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/917223021894"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Darbare e Ashrafi Betul on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Pulse Ring */}
      <motion.span
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.45, 0, 0.45],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute inset-0 rounded-full bg-green-400"
        aria-hidden="true"
      />

      {/* Button */}
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] backdrop-blur-md transition duration-300 group-hover:shadow-[0_8px_35px_rgba(37,211,102,0.65)]">
        <FaWhatsapp className="text-4xl" />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-green-400/20 bg-black/90 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl backdrop-blur-md transition duration-300 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </motion.a>
  );
}