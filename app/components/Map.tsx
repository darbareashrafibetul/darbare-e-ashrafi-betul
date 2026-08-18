"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaDirections,
  FaMosque,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Map() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#f7f0df] px-5 py-24 text-[#173f2b] sm:px-6 md:py-28"
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#d9a900]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#173f2b]/[0.05] blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#d9a900]/[0.06] blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            className="mb-6 flex justify-center"
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d4af37]/40 bg-white/70 shadow-[0_8px_30px_rgba(23,63,43,0.08)]">
              <div className="absolute inset-1 rounded-full border border-[#d4af37]/20" />

              <FaMapMarkerAlt className="relative text-2xl text-[#c89f19]" />
            </div>
          </motion.div>

          {/* Small Label */}
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#173f2b]/60 sm:text-sm">
            Visit Us
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl font-extrabold tracking-tight text-[#c49a18] sm:text-5xl md:text-6xl">
            Find Us
          </h2>

          {/* Gold Divider */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d4af37]/40 sm:w-16" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />

            <span className="h-px w-12 bg-[#d4af37]/40 sm:w-16" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#173f2b]/70 sm:text-base md:text-lg">
            Visit Darbare e Ashrafi Betul and experience peace, spirituality,
            and blessings. Find the exact location and plan your visit with
            ease.
          </p>
        </motion.div>

        {/* =========================
            LOCATION INFORMATION
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-[#173f2b]/15 bg-white/65 p-5 shadow-[0_15px_50px_rgba(23,63,43,0.08)] backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_20px_60px_rgba(23,63,43,0.12)] sm:p-6 md:p-7">

            {/* Top Gold Line */}
            <div
              className="absolute left-1/2 top-0 h-0.5 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              aria-hidden="true"
            />

            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">

              {/* Mosque Icon */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.25 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/10 shadow-sm"
              >
                <FaMosque className="text-2xl text-[#c49a18]" />
              </motion.div>

              {/* Address */}
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#173f2b]/55">
                  Location
                </p>

                <h3 className="mt-2 text-base font-extrabold text-[#173f2b] sm:text-lg md:text-xl">
                  BABA MAKHDUM SIMNANI R.A. DARBAR
                </h3>

                <p className="mt-1 text-sm leading-6 text-[#173f2b]/65">
                  GHONCHI, 8th Mile, Betul, Madhya Pradesh
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================
            MAP
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#173f2b]/15 bg-[#173f2b] p-2 shadow-[0_25px_70px_rgba(23,63,43,0.18)] sm:p-3"
        >
          {/* Gold Highlight */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 z-20 h-0.5 w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#d4af37]/20">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.2471997421103!2d77.855993!3d22.0018373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd607e94c64c505%3A0x8a41b270db8c11ba!2sBABA%20MAKHDUM%20SIMNANI%20R.A.DARBAR%2C%20GHONCHI%20%2C%208th%20mile.!5e0!3m2!1sen!2sin!4v1786022358446!5m2!1sen!2sin"
              title="Darbare e Ashrafi Betul Location"
              className="h-[360px] w-full border-0 sm:h-[420px] md:h-[500px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Inner Gold Border */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-[#d4af37]/20"
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* =========================
            DIRECTIONS BUTTON
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex justify-center"
        >
          <motion.a
            href="https://maps.app.goo.gl/2kLjkWa4YLgtDBUu5?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] to-[#c59612] px-7 py-4 font-extrabold text-[#173f2b] shadow-[0_12px_30px_rgba(196,154,24,0.25)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(196,154,24,0.35)] sm:px-9"
          >
            {/* Shine */}
            <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />

            <FaDirections className="relative text-xl transition-transform duration-300 group-hover:translate-x-1" />

            <span className="relative">
              Get Directions
            </span>

            <FaExternalLinkAlt className="relative text-xs opacity-70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>

        {/* =========================
            BOTTOM DECORATION
        ========================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4af37]/40 sm:w-24" />

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/30 bg-white/60">
            <FaMosque className="text-xs text-[#c49a18]" />
          </div>

          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4af37]/40 sm:w-24" />
        </motion.div>
      </div>
    </section>
  );
}