"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaTimes,
} from "react-icons/fa";

/* =========================================================
   GALLERY DATA
========================================================= */

const images = Array.from(
  { length: 14 },
  (_, index) => `/images/gallery${index + 1}.jpg`
);

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   ORNAMENT
   One shared infinite loop only when "large" (used once per
   page load), the small one is now static.
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
          large ? "w-24 sm:w-32" : "w-10 sm:w-14"
        }`}
      />

      {large ? (
        <motion.span
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 1.15, 1],
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
          large ? "w-24 sm:w-32" : "w-10 sm:w-14"
        }`}
      />
    </div>
  );
}

/* =========================================================
   FLOATING PARTICLES
   Fewer, and lg-only (was running on mobile before).
========================================================= */

function FloatingParticles({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      aria-hidden="true"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: [0, 0.28, 0],
            y: [-10, -110],
          }}
          transition={{
            duration: 7 + (index % 5),
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-[#C9A227]"
          style={{
            left: `${4 + ((index * 17) % 92)}%`,
            top: `${25 + ((index * 13) % 70)}%`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   GALLERY CARD
   - No per-card infinite glow loop (was 14 running at once)
   - No backdrop-blur (replaced with solid translucent bg)
   - Shine sweep only runs on hover (already was), kept cheap
========================================================= */

function GalleryCard({
  image,
  index,
  onOpen,
  reduceMotion,
}: {
  image: string;
  index: number;
  onOpen: () => void;
  reduceMotion: boolean | null;
}) {
  const featured = index === 0 || index === 5 || index === 9;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.6,
        delay: (index % 5) * 0.06,
        ease,
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      aria-label={`Open gallery image ${index + 1}`}
      className={`group relative w-full overflow-hidden rounded-[2rem] border border-[#C9A227]/20 bg-[#FBF8F0]/90 p-1 text-left shadow-[0_18px_50px_rgba(23,55,43,0.09)] ${
        featured ? "md:row-span-2" : ""
      }`}
    >
      {/* static outer glow — no animation, no per-card JS loop */}
      <span
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[#C9A227]/[0.08] blur-[35px]"
        aria-hidden="true"
      />

      <div
        className={`relative overflow-hidden rounded-[1.7rem] ${
          featured
            ? "h-[430px] sm:h-[520px] md:h-full"
            : "h-[270px] sm:h-[310px]"
        }`}
      >
        <Image
          src={image}
          alt={`Darbare e Ashrafi Betul Gallery ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          priority={index < 2}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17372B]/70 via-transparent to-[#17372B]/5 opacity-80" />

        {/* shine sweep — pure CSS transition, only active on hover */}
        <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -translate-x-full rotate-[18deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />

        <span className="pointer-events-none absolute inset-2 rounded-[1.4rem] border border-white/10 transition-colors duration-500 group-hover:border-[#E1C76A]/60" />

        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#E1C76A]/50 bg-[#17372B]/75 text-[10px] font-bold tracking-widest text-[#E1C76A]">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#17372B]/60 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <FaExpand className="text-xs" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#E1C76A]/80" />
            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#F1D77A]">
              Darbare e Ashrafi
            </span>
          </div>

          <p className="mt-2 text-xs font-medium tracking-wide text-white/80">
            Betul • Gallery {String(index + 1).padStart(2, "0")}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

/* =========================================================
   LIGHTBOX
   backdrop-blur-xl removed (only shows 1 at a time, but on
   mobile this alone caused visible frame drops) — replaced
   with a darker solid overlay for the same cinematic feel.
========================================================= */

function Lightbox({
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
  reduceMotion,
}: {
  selectedIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  reduceMotion: boolean | null;
}) {
  const image = images[selectedIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07150F]/97 p-4 sm:p-6 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.06] blur-[100px]"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery viewer"
        className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A227]/30 bg-white/10 text-white transition-all duration-300 hover:border-[#C9A227]/70 hover:bg-[#C9A227] hover:text-[#17372B] sm:right-6 sm:top-6"
      >
        <FaTimes />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#17372B]/80 text-white transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#17372B] sm:left-6 sm:h-14 sm:w-14"
      >
        <FaChevronLeft />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A227]/30 bg-[#17372B]/80 text-white transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-[#17372B] sm:right-6 sm:h-14 sm:w-14"
      >
        <FaChevronRight />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.96, y: 10 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.97 }
          }
          transition={{ duration: 0.3, ease }}
          onClick={(event) => event.stopPropagation()}
          className="relative max-h-[82vh] max-w-[88vw]"
        >
          <div className="absolute -inset-2 rounded-[1.7rem] border border-[#C9A227]/30 sm:-inset-3" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#17372B] shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
            <Image
              src={image}
              alt={`Darbare e Ashrafi Betul Gallery ${selectedIndex + 1}`}
              width={1600}
              height={1100}
              className="max-h-[78vh] w-auto max-w-[86vw] object-contain"
              priority
            />
          </div>

          <div className="absolute -bottom-14 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap">
            <span className="h-px w-8 bg-[#C9A227]/50" />
            <span className="text-[10px] font-bold tracking-[0.35em] text-[#E1C76A]">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-[#C9A227]/50" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-white/35 sm:block">
        Click outside to close
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN GALLERY
========================================================= */

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => {
          if (current === null) return null;
          return (current - 1 + images.length) % images.length;
        });
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => {
          if (current === null) return null;
          return (current + 1) % images.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex]);

  const previousImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current - 1 + images.length) % images.length;
    });
  };

  const nextImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + 1) % images.length;
    });
  };

  return (
    <>
      <section
        id="gallery"
        className="relative isolate overflow-hidden bg-[#F5F0E4] px-4 py-24 text-[#17372B] sm:px-6 sm:py-28 lg:px-8 lg:py-36"
      >
        {/* background atmosphere — static on mobile, one loop kept on lg */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          {!reduceMotion && (
            <motion.div
              animate={{ opacity: [0.05, 0.11, 0.05] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-[-320px] hidden h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#C9A227]/25 blur-[120px] lg:block"
            />
          )}

          <div className="absolute -left-[260px] top-[30%] hidden h-[500px] w-[500px] rounded-full bg-[#17372B]/[0.05] blur-[110px] lg:block" />
          <div className="absolute -right-[260px] bottom-[10%] hidden h-[520px] w-[520px] rounded-full bg-[#C9A227]/[0.06] blur-[110px] lg:block" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #17372B 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          <div className="absolute left-1/2 top-[35%] h-[55%] w-[260px] -translate-x-1/2 rounded-full bg-[#17372B]/[0.018] blur-[70px]" />
        </div>

        <FloatingParticles reduceMotion={reduceMotion} />

        <div
          className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#C9A227]/20 sm:inset-6 sm:rounded-[2.5rem] lg:inset-9 lg:rounded-[3rem]"
          aria-hidden="true"
        >
          <span className="absolute left-0 top-0 h-20 w-20 rounded-tl-[2rem] border-l border-t border-[#C9A227]/60 sm:h-24 sm:w-24" />
          <span className="absolute right-0 top-0 h-20 w-20 rounded-tr-[2rem] border-r border-t border-[#C9A227]/45 sm:h-24 sm:w-24" />
          <span className="absolute bottom-0 left-0 h-20 w-20 rounded-bl-[2rem] border-b border-l border-[#C9A227]/45 sm:h-24 sm:w-24" />
          <span className="absolute bottom-0 right-0 h-20 w-20 rounded-br-[2rem] border-b border-r border-[#C9A227]/60 sm:h-24 sm:w-24" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A227]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#80620F] sm:text-xs">
                Our Memories
              </span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A227]" />
            </div>

            <div className="mt-8">
              <Ornament large />
            </div>

            <h2 className="mt-8 bg-gradient-to-b from-[#E1C76A] via-[#C9A227] to-[#745A13] bg-clip-text text-5xl font-black leading-[1.05] tracking-[-0.04em] text-transparent sm:text-6xl lg:text-[5rem]">
              Gallery
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#49675B] sm:text-base sm:leading-9">
              Beautiful moments, sacred memories and glimpses from the
              spiritual journey of Darbare e Ashrafi Betul.
            </p>

            <div className="mt-7">
              <Ornament />
            </div>
          </motion.header>

          <div
            className="pointer-events-none absolute left-1/2 top-[520px] hidden h-[calc(100%-700px)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A227]/25 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="relative mt-16 grid auto-rows-[270px] grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:auto-rows-[300px] lg:grid-cols-3 lg:gap-7">
            {images.map((image, index) => (
              <GalleryCard
                key={image}
                image={image}
                index={index}
                onOpen={() => setSelectedIndex(index)}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="mt-20 flex justify-center"
          >
            <Ornament large />
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            selectedIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onPrevious={previousImage}
            onNext={nextImage}
            reduceMotion={reduceMotion}
          />
        )}
      </AnimatePresence>
    </>
  );
}