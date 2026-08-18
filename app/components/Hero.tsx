"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

/* =========================================================
   ANIMATION CONFIG
========================================================= */

const easeOut = [0.22, 1, 0.36, 1] as const;
const luxuryEase = [0.16, 1, 0.3, 1] as const;

/* =========================================================
   HERO LOAD CONTAINER
========================================================= */

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/* =========================================================
   GENERAL TEXT REVEAL
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

/* =========================================================
   LOGO ENTRANCE
========================================================= */

const logoReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.72,
    y: 28,
    rotate: -8,
    filter: "blur(12px)",
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: luxuryEase,
    },
  },
};

/* =========================================================
   BUTTON REVEAL
========================================================= */

const buttonReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.94,
    filter: "blur(5px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/* =========================================================
   CARD REVEAL
========================================================= */

const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.94,
    filter: "blur(7px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  {
    label: "Timings",
    href: "/timings",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Location",
    href: "/location",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   FLOATING PARTICLES
========================================================= */

const particles = [
  { left: "8%", top: "20%", delay: 0, duration: 5 },
  { left: "18%", top: "70%", delay: 1.2, duration: 6 },
  { left: "30%", top: "15%", delay: 2, duration: 5.5 },
  { left: "72%", top: "18%", delay: 0.8, duration: 6 },
  { left: "84%", top: "65%", delay: 1.8, duration: 5 },
  { left: "92%", top: "30%", delay: 2.5, duration: 6.5 },
  { left: "12%", top: "42%", delay: 3, duration: 5.5 },
  { left: "65%", top: "75%", delay: 1, duration: 6 },
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#EAE0CC] px-4 pb-20 pt-28 text-center sm:px-6 md:pt-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main cream gradient */}
      <div
        className="absolute inset-0 -z-30 bg-gradient-to-b from-[#F3EBD8] via-[#E2D3B3] to-[#F1E7CF]"
        aria-hidden="true"
      />

      {/* Golden atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[-15%] -z-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C9A227]/20 blur-[100px] sm:h-[700px] sm:w-[700px]"
        aria-hidden="true"
      />

      {/* Green atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-20%] left-1/2 -z-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#1F4436]/15 blur-[110px] sm:h-[650px] sm:w-[650px]"
        aria-hidden="true"
      />

      {/* Moving light */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-[55%] bg-gradient-to-r from-transparent via-[#F8E9A8]/30 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Dotted luxury texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1F4436 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
              y: [0, -35, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rotate-45 bg-[#C9A227] shadow-[0_0_12px_rgba(201,162,39,0.8)]"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          ROYAL FRAME
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-[#C9A227]/30 sm:inset-6 sm:rounded-[2rem] md:inset-10"
        aria-hidden="true"
      >
        {[
          "top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl",
          "top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl",
          "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl",
          "bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl",
        ].map((position, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3.5,
              delay: index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute h-8 w-8 border-[#C9A227] sm:h-12 sm:w-12 ${position}`}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN HERO CONTENT
      ====================================================== */}

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-4xl flex-col items-center"
      >
        {/* ===================================================
            LOGO
        ==================================================== */}

        <motion.div
          variants={logoReveal}
          className="relative mb-7 sm:mb-9"
        >
          {/* Outer glow */}
          <motion.div
            animate={{
              opacity: [0.25, 0.7, 0.25],
              scale: [0.85, 1.18, 0.85],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/50 blur-[55px] sm:h-52 sm:w-52"
            aria-hidden="true"
          />

          {/* Inner glow */}
          <motion.div
            animate={{
              opacity: [0.35, 0.8, 0.35],
              scale: [0.9, 1.08, 0.9],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5EBD0]/80 blur-[25px] sm:h-36 sm:w-36"
            aria-hidden="true"
          />

          {/* Royal rotating ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-3 rounded-full border border-dashed border-[#C9A227]/45"
            aria-hidden="true"
          />

          {/* Logo */}
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-full border-2 border-[#C9A227]/70 bg-[#EFE6D0] p-2 shadow-2xl shadow-[#8B6F1A]/25"
          >
            <div className="rounded-full bg-gradient-to-br from-[#C9A227] via-[#F7EBC4] to-[#8B6F1A] p-1">
              <Image
                src="/images/logo.png"
                alt="Darbare e Ashrafi Betul Logo"
                width={150}
                height={150}
                priority
                className="h-24 w-24 rounded-full border-2 border-[#EFE6D0] object-cover sm:h-28 sm:w-28 md:h-32 md:w-32"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ===================================================
            ARABIC VERSE
        ==================================================== */}

        <motion.p
          variants={fadeUp}
          className="text-xl leading-relaxed text-[#8B6F1A] sm:text-2xl md:text-3xl"
        >
          وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="my-5 flex items-center gap-3 sm:my-7"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#8B6F1A] sm:w-20" />

          <motion.span
            animate={{
              rotate: [45, 135, 45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-2 bg-[#C9A227] shadow-[0_0_10px_rgba(201,162,39,0.6)]"
          />

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#8B6F1A] sm:w-20" />
        </motion.div>

        {/* ===================================================
            MAIN TITLE
        ==================================================== */}

        <motion.h1
          variants={fadeUp}
          className="bg-gradient-to-b from-[#D7B449] via-[#C9A227] to-[#805F0E] bg-clip-text text-4xl font-extrabold leading-[1.08] tracking-tight text-transparent drop-shadow-[0_3px_15px_rgba(139,111,26,0.15)] sm:text-5xl md:text-7xl lg:text-[5.4rem]"
        >
          Darbare e Ashrafi
          <br className="sm:hidden" /> Betul
        </motion.h1>

        {/* ===================================================
            SUBTITLE
        ==================================================== */}

        <motion.p
          variants={fadeUp}
          className="mt-4 text-base font-semibold tracking-[0.22em] text-[#1F4436] sm:mt-5 sm:text-xl md:text-2xl"
        >
          MAKHDOOM BABA DARBAR
        </motion.p>

        {/* Small line */}
        <motion.div
          variants={fadeUp}
          className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent sm:mt-5 sm:w-32"
        />

        {/* ===================================================
            DESCRIPTION
        ==================================================== */}

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl px-3 text-[15px] leading-7 text-[#2F5D50]/90 sm:mt-8 sm:text-lg sm:leading-8"
        >
          A Spiritual Center of Peace, Faith, Service and Healing. Thousands
          of devotees visit every year seeking blessings, spiritual guidance
          and inner peace.
        </motion.p>

        {/* ===================================================
            CTA BUTTONS
        ==================================================== */}

        <motion.div
          variants={heroContainer}
          className="relative z-30 mt-8 flex w-full flex-col justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
        >
          {/* Primary button */}
          <motion.a
            variants={buttonReveal}
            href="/location"
            whileHover={{
              scale: 1.045,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#D8AE3E] via-[#C9A227] to-[#8B6F1A] px-9 py-3.5 font-bold text-[#17372C] shadow-lg shadow-[#8B6F1A]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B6F1A]/45"
          >
            {/* Shine */}
            <span className="absolute inset-y-0 -left-20 w-16 skew-x-[-20deg] bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Visit Khanqah

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.a>

          {/* Secondary button */}
          <motion.a
            variants={buttonReveal}
            href="/about"
            whileHover={{
              scale: 1.045,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group rounded-full border-2 border-[#1F4436]/80 bg-[#EFE6D0]/30 px-9 py-3.5 font-bold text-[#1F4436] backdrop-blur-sm transition-all duration-300 hover:border-[#1F4436] hover:bg-[#1F4436] hover:text-[#EFE6D0] hover:shadow-lg hover:shadow-[#1F4436]/20"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Darbar

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </motion.a>
        </motion.div>

        {/* ===================================================
            QUICK LINKS
        ==================================================== */}

        <motion.div
          variants={heroContainer}
          className="mt-10 grid w-full grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4"
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.label}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.35,
                margin: "0px 0px -60px 0px",
              }}
              whileHover={{
                y: -7,
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                delay: index * 0.07,
              }}
              href={link.href}
              className="group relative overflow-hidden rounded-2xl border border-[#8B6F1A]/20 bg-white/40 px-4 py-5 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-[#C9A227]/60 hover:bg-white/65 hover:shadow-xl hover:shadow-[#8B6F1A]/10"
            >
              {/* Hover glow */}
              <span className="pointer-events-none absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Diamond */}
              <motion.span
                animate={{
                  rotate: [45, 135, 45],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mb-3 block h-2 w-2 bg-[#C9A227] shadow-[0_0_8px_rgba(201,162,39,0.5)]"
              />

              {/* Label */}
              <span className="relative text-sm font-semibold tracking-wide text-[#1F4436] sm:text-base">
                {link.label}
              </span>

              {/* Bottom accent */}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#C9A227] transition-all duration-500 group-hover:w-1/2" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 0.8,
        }}
        className="absolute bottom-5 z-10 sm:bottom-7"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-[#1F4436]/40 p-1.5 backdrop-blur-sm sm:h-11 sm:w-7"
        >
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, 9, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#1F4436]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}