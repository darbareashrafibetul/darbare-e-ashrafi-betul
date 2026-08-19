"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import {
  FaClock,
  FaSun,
  FaMoon,
  FaMosque,
  FaStarAndCrescent,
} from "react-icons/fa";

type TimingItem = {
  label: string;
  time: string;
};

type TimingCard = {
  icon: typeof FaSun;
  title: string;
  subtitle: string;
  items: TimingItem[];
  note?: string;
};

const timingCards: TimingCard[] = [
  {
    icon: FaSun,
    title: "Morning",
    subtitle: "Subah ka waqt",
    items: [
      {
        label: "Darbar Open",
        time: "Fajr ke baad se 11:00 AM",
      },
      {
        label: "Mulakat",
        time: "10:00 AM – 11:00 AM",
      },
    ],
    note: "Friday Morning Closed",
  },
  {
    icon: FaMoon,
    title: "Evening",
    subtitle: "Shaam ka waqt",
    items: [
      {
        label: "Darbar Open",
        time: "5:00 PM – 8:00 PM",
      },
      {
        label: "Dua & Chirag Sharif",
        time: "6:00 PM – 8:00 PM",
      },
    ],
  },
];

/* =========================================================
   ANIMATION
   No `filter: blur()` anywhere — replaced with plain
   opacity/transform, which is far cheaper to animate.
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

const cardReveal: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 40,
    x: index === 0 ? -25 : 25,
    scale: 0.98,
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: index * 0.1,
      ease,
    },
  }),
};

/* =========================================================
   ORNAMENT
========================================================= */

function Ornament({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center ${
        large ? "gap-5" : "gap-3"
      }`}
      aria-hidden="true"
    >
      <span
        className={`h-px bg-gradient-to-r from-transparent to-[#C9A227]/80 ${
          large ? "w-24 sm:w-28" : "w-10 sm:w-12"
        }`}
      />

      {large ? (
        <motion.span
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-3.5 w-3.5 rotate-45 border border-[#C9A227] bg-[#C9A227]/10"
        />
      ) : (
        <span className="h-2 w-2 rotate-45 border border-[#C9A227] bg-[#C9A227]/10" />
      )}

      <span
        className={`h-px bg-gradient-to-l from-transparent to-[#C9A227]/80 ${
          large ? "w-24 sm:w-28" : "w-10 sm:w-12"
        }`}
      />
    </div>
  );
}

/* =========================================================
   TIMING CARD
   - No infinite glow loop behind the card (was one per card)
   - No rotating finial diamond loop (was one per card)
   - No backdrop-blur (dome + card body use solid bg instead)
   - No 3D rotateX hover (kept a simple lift instead)
========================================================= */

function TimingCard({
  card,
  index,
  reduceMotion,
}: {
  card: TimingCard;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = card.icon;

  return (
    <motion.article
      custom={index}
      variants={cardReveal}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative"
    >
      {/* static glow — no animation */}
      <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17372B]/[0.06] blur-[65px]" />

      <div className="relative overflow-visible rounded-[2.5rem] border border-[#C9A227]/25 bg-[#FBF8F0]/95 shadow-[0_25px_75px_rgba(23,55,43,0.11)]">
        <div
          className="pointer-events-none absolute inset-2 rounded-[2.2rem] border border-[#C9A227]/10"
          aria-hidden="true"
        />

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.08, ease }}
          className="absolute left-[16%] right-[16%] top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#C9A227]/80 to-transparent"
        />

        {/* Dome decoration — no backdrop-blur */}
        <div
          className="pointer-events-none absolute -top-[46px] left-1/2 h-[62px] w-[110px] -translate-x-1/2 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute bottom-0 left-1/2 h-[92px] w-[110px] -translate-x-1/2 rounded-[60px_60px_0_0] border border-[#C9A227]/20 bg-[#FBF8F0]/90" />
          <div className="absolute bottom-0 left-1/2 h-[72px] w-[88px] -translate-x-1/2 rounded-[50px_50px_0_0] border border-[#C9A227]/10 bg-[#17372B]/[0.025]" />
        </div>

        {/* Finial — static diamond, no rotation loop */}
        <div
          className="pointer-events-none absolute -top-[63px] left-1/2 z-20 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="mx-auto h-4 w-px bg-[#C9A227]/60" />
          <div className="h-2 w-2 rotate-45 bg-[#C9A227]/80" />
        </div>

        <div className="relative px-6 pb-7 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C9A227]/30 bg-[#C9A227]/[0.08] shadow-sm transition-transform duration-500 group-hover:rotate-[20deg]">
              <Icon className="text-xl text-[#80620F]" />
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl font-black tracking-tight text-[#17372B]">
                {card.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#526C61]">
                {card.subtitle}
              </p>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-2">
            <span className="h-px w-8 bg-[#C9A227]/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />
            <span className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/20 to-transparent" />
          </div>

          <div className="mt-7 space-y-4">
            {card.items.map((item, itemIndex) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.15 + itemIndex * 0.08,
                  ease,
                }}
                className="group/item relative overflow-hidden rounded-2xl border border-[#C9A227]/15 bg-[#F5F0E4]/55 p-5 transition-colors duration-300 hover:border-[#C9A227]/35 hover:bg-[#F5F0E4]/80"
              >
                {/* static hover accent — pure CSS opacity, no blur scaling */}
                <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#C9A227]/[0.1] opacity-0 blur-xl transition-opacity duration-500 group-hover/item:opacity-100" />

                <div className="relative flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/25 bg-white/60">
                    <FaMosque className="text-sm text-[#80620F]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#17372B]">
                      {item.label}
                    </p>

                    <p className="mt-1.5 text-sm leading-6 text-[#526C61] sm:text-[15px]">
                      {item.time}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {card.note && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-5 flex items-center gap-3 rounded-2xl border border-[#C9A227]/20 bg-[#C9A227]/[0.07] p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[#C9A227]/10">
                <FaStarAndCrescent className="text-sm text-[#80620F]" />
              </div>

              <p className="text-sm font-semibold text-[#80620F]">
                {card.note}
              </p>
            </motion.div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <span className="h-px w-14 bg-[#C9A227]/35" />
            <span className="text-[9px] font-bold tracking-[0.25em] text-[#80620F]/50">
              {String(index + 1).padStart(2, "0")} / 02
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-transparent via-[#C9A227]/45 to-transparent" />

        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#E1C76A] via-[#C9A227] to-[#80620F] transition-all duration-700 group-hover:w-2/3" />
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function PrayerTimings() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="timings"
      className="relative isolate overflow-hidden bg-[#F5F0E4] px-4 py-24 text-[#17372B] sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {!reduceMotion && (
          <motion.div
            animate={{ opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-[-300px] hidden h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#C9A227]/25 blur-[130px] lg:block"
          />
        )}

        <div className="absolute -left-[260px] top-[35%] hidden h-[500px] w-[500px] rounded-full bg-[#17372B]/[0.045] blur-[120px] lg:block" />
        <div className="absolute -right-[260px] bottom-[10%] hidden h-[520px] w-[520px] rounded-full bg-[#C9A227]/[0.05] blur-[120px] lg:block" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #17372B 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute left-1/2 top-[35%] h-[50%] w-[300px] -translate-x-1/2 rounded-full bg-[#17372B]/[0.018] blur-[80px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#C9A227]/20 sm:inset-6 sm:rounded-[2.5rem] lg:inset-9 lg:rounded-[3rem]"
        aria-hidden="true"
      >
        <span className="absolute left-0 top-0 h-20 w-20 rounded-tl-[2rem] border-l border-t border-[#C9A227]/65 sm:h-24 sm:w-24" />
        <span className="absolute right-0 top-0 h-20 w-20 rounded-tr-[2rem] border-r border-t border-[#C9A227]/45 sm:h-24 sm:w-24" />
        <span className="absolute bottom-0 left-0 h-20 w-20 rounded-bl-[2rem] border-b border-l border-[#C9A227]/45 sm:h-24 sm:w-24" />
        <span className="absolute bottom-0 right-0 h-20 w-20 rounded-br-[2rem] border-b border-r border-[#C9A227]/65 sm:h-24 sm:w-24" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={reveal} className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A227]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#80620F] sm:text-xs">
              Visiting Information
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A227]" />
          </motion.div>

          <motion.div
            variants={reveal}
            className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#C9A227]/[0.08] shadow-[0_12px_36px_rgba(23,55,43,0.08)]"
          >
            <FaClock className="text-2xl text-[#80620F]" />
          </motion.div>

          <motion.h2
            variants={reveal}
            className="mt-8 bg-gradient-to-b from-[#E1C76A] via-[#C9A227] to-[#745A13] bg-clip-text text-4xl font-black leading-[1.05] tracking-[-0.045em] text-transparent sm:text-5xl md:text-6xl"
          >
            Darbar Timings
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#355B4D] sm:text-base sm:leading-9"
          >
            Visiting and Dua timings at Darbare e Ashrafi Betul.
          </motion.p>

          <motion.div variants={reveal} className="mt-8">
            <Ornament />
          </motion.div>
        </motion.header>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-20 grid gap-16 md:grid-cols-2 md:gap-8 lg:mt-24"
        >
          {timingCards.map((card, index) => (
            <TimingCard
              key={card.title}
              card={card}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto mt-16 max-w-3xl text-center lg:mt-20"
        >
          <Ornament />

          <p className="mt-7 text-sm leading-7 text-[#526C61] sm:text-base">
            Please plan your visit according to the timings mentioned above.
          </p>

          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#80620F]/60">
            Darbare e Ashrafi Betul
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.6, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-14 flex justify-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />
            <span className="h-2.5 w-2.5 rotate-45 border border-[#C9A227]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />
            <span className="h-px w-12 bg-[#C9A227]/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}