"use client";

import { motion, useReducedMotion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/ukzaFfklRk0",
  "https://www.youtube.com/embed/iCzfdcZL37k",
  "https://www.youtube.com/embed/OVbrz6sH1ks",
  "https://www.youtube.com/embed/BZKChc8_Ey8",
  "https://www.youtube.com/embed/fuNNnN1w4vE",
  "https://www.youtube.com/embed/m4YHm7Rnxbo",
  "https://www.youtube.com/embed/Mb_j6KQMleA",
  "https://www.youtube.com/embed/KfHt8AAsJAM",
  "https://www.youtube.com/embed/MbjYOCHUoNQ",
  "https://www.youtube.com/embed/2xxutsdOgow",
  "https://www.youtube.com/embed/6bk-s9G3NcE",
  "https://www.youtube.com/embed/fNQcUGolsSY",
  "https://www.youtube.com/embed/ksza3Dbv7Zg",
  "https://www.youtube.com/embed/CyIjI8x1bmk",
  "https://www.youtube.com/embed/X9vIKh2j1bQ",
];

const ease = [0.22, 1, 0.36, 1] as const;

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
        className={`rotate-45 border border-[#C9A227] bg-[#C9A227]/10 ${
          large ? "h-3.5 w-3.5" : "h-2 w-2"
        }`}
      />

      <span
        className={`h-px bg-gradient-to-l from-transparent to-[#C9A227]/80 ${
          large ? "w-24 sm:w-28" : "w-10 sm:w-12"
        }`}
      />
    </div>
  );
}

/* =========================================================
   FLOATING PARTICLES
========================================================= */

function FloatingParticles({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {Array.from({ length: 16 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [-10, -120],
            x: [0, index % 2 === 0 ? 22 : -22],
          }}
          transition={{
            duration: 6 + (index % 5),
            repeat: Infinity,
            delay: index * 0.35,
            ease: "easeOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-[#C9A227]"
          style={{
            left: `${5 + ((index * 19) % 90)}%`,
            top: `${25 + ((index * 17) % 65)}%`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   VIDEO CARD
========================================================= */

function VideoCard({
  video,
  index,
  reduceMotion,
}: {
  video: string;
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.article
      initial={
        reduceMotion
          ? {
              opacity: 0,
            }
          : {
              opacity: 0,
              y: 45,
              scale: 0.96,
              filter: "blur(7px)",
            }
      }
      whileInView={
        reduceMotion
          ? {
              opacity: 1,
            }
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.8,
        delay: (index % 6) * 0.08,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
            }
      }
      className="group relative"
    >
      {/* Atmospheric Glow */}

      {!reduceMotion && (
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-[#17372B] blur-[55px]"
        />
      )}

      {/* Card */}

      <div className="relative overflow-hidden rounded-[1.7rem] border border-[#C9A227]/25 bg-white/65 p-2 shadow-[0_30px_80px_rgba(23,55,43,0.12)] backdrop-blur-2xl transition duration-500 group-hover:border-[#C9A227]/55 group-hover:shadow-[0_35px_90px_rgba(23,55,43,0.18)] sm:rounded-[2rem]">
        {/* Inner Border */}

        <div
          className="pointer-events-none absolute inset-3 z-20 rounded-[1.35rem] border border-[#C9A227]/10 sm:rounded-[1.6rem]"
          aria-hidden="true"
        />

        {/* Top Gold Line */}

        <div
          className="pointer-events-none absolute left-[20%] right-[20%] top-2 z-30 h-px bg-gradient-to-r from-transparent via-[#C9A227]/80 to-transparent"
          aria-hidden="true"
        />

        {/* Video */}

        <div className="relative aspect-video overflow-hidden rounded-[1.35rem] bg-[#17372B] sm:rounded-[1.6rem]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={video}
            title={`Darbare e Ashrafi Betul Video ${index + 1}`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          {/* Bottom Gradient */}

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/35 to-transparent"
            aria-hidden="true"
          />

          {/* Video Number */}

          <div className="pointer-events-none absolute bottom-3 left-3 z-20 flex h-9 min-w-9 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#17372B]/80 px-2.5 text-[10px] font-bold tracking-[0.18em] text-[#E1C76A] shadow-lg backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Card Footer */}

        <div className="flex items-center justify-between px-3 pb-2 pt-4 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#80620F]/70">
              Darbare e Ashrafi
            </span>
          </div>

          <span className="text-[9px] font-medium tracking-[0.18em] text-[#80620F]/45">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(videos.length).padStart(2, "0")}
          </span>
        </div>

        {/* Hover Gold Line */}

        <span className="absolute bottom-0 left-1/2 z-30 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent transition-all duration-700 group-hover:w-2/3" />
      </div>
    </motion.article>
  );
}

/* =========================================================
   VIDEOS
========================================================= */

export default function Videos() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="videos"
      className="relative isolate overflow-hidden bg-[#F5F0E4] px-4 py-24 text-[#17372B] sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Gold Atmosphere */}

        {!reduceMotion && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.05, 0.12, 0.05],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#C9A227]/25 blur-[170px]"
            />

            {/* Green Atmosphere */}

            <motion.div
              animate={{
                x: [-70, 70, -70],
                y: [0, 45, 0],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-[260px] top-[35%] h-[520px] w-[520px] rounded-full bg-[#17372B]/[0.055] blur-[150px]"
            />

            <motion.div
              animate={{
                x: [70, -70, 70],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-[260px] bottom-[5%] h-[520px] w-[520px] rounded-full bg-[#C9A227]/[0.06] blur-[150px]"
            />
          </>
        )}

        {/* Subtle Pattern */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #17372B 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* Center Glow */}

        <div className="absolute left-1/2 top-[45%] h-[500px] w-[240px] -translate-x-1/2 rounded-full bg-[#17372B]/[0.018] blur-[110px]" />
      </div>

      <FloatingParticles reduceMotion={reduceMotion} />

      {/* =====================================================
          HERITAGE FRAME
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#C9A227]/20 sm:inset-6 sm:rounded-[2.5rem] lg:inset-9 lg:rounded-[3rem]"
        aria-hidden="true"
      >
        <span className="absolute left-0 top-0 h-20 w-20 rounded-tl-[2rem] border-l border-t border-[#C9A227]/60 sm:h-24 sm:w-24" />

        <span className="absolute right-0 top-0 h-20 w-20 rounded-tr-[2rem] border-r border-t border-[#C9A227]/45 sm:h-24 sm:w-24" />

        <span className="absolute bottom-0 left-0 h-20 w-20 rounded-bl-[2rem] border-b border-l border-[#C9A227]/45 sm:h-24 sm:w-24" />

        <span className="absolute bottom-0 right-0 h-20 w-20 rounded-br-[2rem] border-b border-r border-[#C9A227]/60 sm:h-24 sm:w-24" />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.header
          initial={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 35,
                  filter: "blur(7px)",
                }
          }
          whileInView={
            reduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A227] sm:w-12" />

            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#80620F] sm:text-xs">
              Visual Memories
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A227] sm:w-12" />
          </div>

          {/* Ornament */}

          <div className="mt-8">
            <Ornament large />
          </div>

          {/* Heading */}

          <h2 className="mt-8 bg-gradient-to-b from-[#E1C76A] via-[#C9A227] to-[#745A13] bg-clip-text text-4xl font-black leading-[1.05] tracking-[-0.045em] text-transparent sm:text-5xl md:text-6xl lg:text-[4.6rem]">
            Videos
          </h2>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#355B4D] sm:text-base sm:leading-9">
            Watch spiritual moments, gatherings and beautiful
            memories from Darbare e Ashrafi Betul.
          </p>

          {/* Bottom Ornament */}

          <div className="mt-8">
            <Ornament />
          </div>
        </motion.header>

        {/* ===================================================
            VIDEO GRID
        ==================================================== */}

        <div className="mt-20 grid gap-7 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video}
              video={video}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* ===================================================
            BOTTOM MESSAGE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="mx-auto mt-20 max-w-3xl text-center sm:mt-28"
        >
          <Ornament />

          <p className="mt-7 text-xs leading-7 text-[#526C61] sm:text-sm sm:leading-8">
            Moments of faith, devotion, tradition and service preserved
            through the memories of Darbare e Ashrafi Betul.
          </p>

          <div className="mt-7 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#80620F]/60 sm:text-[10px]">
            Darbare e Ashrafi Betul
          </div>
        </motion.div>

        {/* Final Ornament */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 0.6,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease,
          }}
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