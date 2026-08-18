"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "History", href: "/history" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Timings", href: "/timings" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@DarbareAshrafiBetul",
    icon: FaYoutube,
    color: "text-[#FF0000]",
    hover: "hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/192E1RyYXP/",
    icon: FaFacebook,
    color: "text-[#1877F2]",
    hover: "hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/darbar_e_ashrafi_betul",
    icon: FaInstagram,
    color: "text-[#E1306C]",
    hover: "hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917223021894",
    icon: FaWhatsapp,
    color: "text-[#25D366]",
    hover: "hover:border-[#25D366]/40 hover:bg-[#25D366]/10",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#C9A227]/25 bg-[#102A21] text-[#F5F1E6]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Main background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#173C2F] via-[#102A21] to-[#091B15]" />

        {/* Golden atmosphere */}
        <motion.div
          animate={{
            opacity: [0.08, 0.16, 0.08],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A227] blur-[130px]"
        />

        {/* Left atmosphere */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            opacity: [0.025, 0.07, 0.025],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-1/3 h-[400px] w-[400px] rounded-full bg-[#C9A227] blur-[130px]"
        />

        {/* Right atmosphere */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C9A227] blur-[140px]"
        />

        {/* Fine pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #E5C45A 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* =====================================================
          TOP GOLDEN ACCENT
      ====================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-px w-full origin-center bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* ===================================================
            TOP MESSAGE
        ==================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C9A227]/75 sm:text-[10px]">
            <span className="h-px w-7 bg-[#C9A227]/50" />
            Darbare e Ashrafi Betul
            <span className="h-px w-7 bg-[#C9A227]/50" />
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#F5F1E6] sm:text-3xl">
            Peace, Faith &amp; Devotion
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#EAE0CC]/55 sm:text-base">
            May this sacred place continue to spread peace, blessings,
            service and spiritual guidance to everyone who visits.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          className="grid gap-12 md:grid-cols-[1.1fr_1fr_1.1fr] md:gap-10 lg:gap-16"
        >

          {/* =================================================
              EXPLORE
          ================================================== */}

          <motion.div variants={fadeLeft}>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Explore
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#F5F1E6]">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 py-1.5 text-sm text-[#EAE0CC]/55 transition-all duration-300 hover:text-[#C9A227]"
                >
                  <span className="h-1 w-1 rotate-45 bg-[#C9A227]/40 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#C9A227]" />

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <motion.div variants={fadeUp}>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Reach Us
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#F5F1E6]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* Location */}
              <Link
                href="/location"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 transition-all duration-300 group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/10">
                  <FaMapMarkerAlt className="text-sm text-[#C9A227]" />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-[#C9A227]/55">
                    Location
                  </span>

                  <span className="mt-1 block text-sm text-[#EAE0CC]/65 transition-colors duration-300 group-hover:text-[#C9A227]">
                    Betul, Madhya Pradesh
                  </span>
                </span>
              </Link>

              {/* Phone */}
              <a
                href="tel:+917223021894"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 transition-all duration-300 group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/10">
                  <FaPhoneAlt className="text-sm text-[#C9A227]" />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-[#C9A227]/55">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm text-[#EAE0CC]/65 transition-colors duration-300 group-hover:text-[#C9A227]">
                    +91 72230 21894
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@darbareashrafibetul.com"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 transition-all duration-300 group-hover:border-[#C9A227]/50 group-hover:bg-[#C9A227]/10">
                  <FaEnvelope className="text-sm text-[#C9A227]" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-[#C9A227]/55">
                    Email
                  </span>

                  <span className="mt-1 block truncate text-sm text-[#EAE0CC]/65 transition-colors duration-300 group-hover:text-[#C9A227]">
                    info@darbareashrafibetul.com
                  </span>
                </span>
              </a>
            </div>
          </motion.div>

          {/* =================================================
              CONNECT
          ================================================== */}

          <motion.div variants={fadeRight}>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Stay Connected
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#F5F1E6]">
              Follow Us
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#EAE0CC]/55">
              Follow our official social media channels for updates,
              videos, events and moments from Darbare e Ashrafi Betul.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className={`group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] backdrop-blur-md transition-all duration-300 ${social.hover}`}
                  >
                    <Icon
                      className={`relative z-10 text-lg ${social.color}`}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/917223021894"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#25D366]/25 bg-[#25D366]/5 px-5 py-2.5 text-xs font-semibold text-[#25D366] transition-all duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
            >
              <FaWhatsapp className="text-sm" />

              <span>Connect on WhatsApp</span>

              <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="my-12 h-px origin-center bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent"
        />

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"
        >
          {/* Copyright */}
          <div>
            <p className="text-xs text-[#EAE0CC]/45 sm:text-sm">
              © 2026 Darbare e Ashrafi Betul. All Rights Reserved.
            </p>

            <p className="mt-1.5 text-[10px] text-[#C9A227]/40 sm:text-xs">
              Built with faith, devotion and love.
            </p>
          </div>

          {/* Back To Top */}
          <motion.button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.94,
            }}
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 px-4 py-2.5 text-xs font-semibold text-[#C9A227] transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/10"
          >
            <span>Back to top</span>

            <FaArrowUp className="text-[9px] transition-transform duration-300 group-hover:-translate-y-1" />
          </motion.button>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM GOLD LINE
      ====================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-[2px] w-full origin-center bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent"
      />
    </footer>
  );
}