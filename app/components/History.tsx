"use client";

import { useState } from "react";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { FaLanguage, FaMosque } from "react-icons/fa";

type Language = "english" | "hindi" | "urdu";
type Direction = "left" | "right";

/* =========================================================
   CONTENT
========================================================= */

const historyContent: Record<
  Language,
  {
    button: string;
    label: string;
    title: string;
    intro: string;
    cards: {
      tag: string;
      text: string;
    }[];
    closing: string;
  }
> = {
  english: {
    button: "English",
    label: "Our Heritage",
    title: "A Brief History of the Khanqah & Chiragh Sharif",
    intro:
      "A journey of spiritual tradition, dedication and service — carrying forward the blessings of Chiragh Sharif and Faizan-e-Makhdoomi.",
    cards: [
      {
        tag: "The Beginning",
        text:
          "Hazrat Muhammad Sheikh Dawood Ashrafi Sahib was bestowed with Chiragh Sharif through a spiritual lineage. Thereafter, he worked with great dedication and effort, enduring many hardships while spreading this spiritual grace. In the beginning, Chiragh Sharif was illuminated for a limited period of time, but gradually, as people experienced its blessings, the number of visitors continued to increase, and this tradition has continued ever since.",
      },
      {
        tag: "A New Chapter — 2005",
        text:
          "When the number of people in Betul became very large and the available space became insufficient, in the year 2005 Hazrat Sheikh Sahib acquired new land in Tekra (Gawahchi) and established the Khanqah there, which is known today as Ashraf Nagar.",
      },
      {
        tag: "A Spiritual Centre",
        text:
          "Today, this Khanqah has become a spiritual centre from where Faizan-e-Makhdoomi is being spread. Visitors who come here receive spiritual peace, blessings and spiritual grace.",
      },
      {
        tag: "Blessed Visits",
        text:
          "Hazrat Syed Shah Fakhruddin Ashraf Rahmatullahi Alaih and other revered elders of the Ashrafia family have also visited this place and illuminated Chiragh Sharif with their blessed hands, further strengthening the spiritual significance of this Khanqah.",
      },
      {
        tag: "Service & Tradition",
        text:
          "All practices carried out here are according to Shariah, and this Khanqah has been established solely for the service of Islam and the spreading of Faizan-e-Makhdoomi.",
      },
    ],
    closing:
      "May this sacred tradition continue to remain a source of faith, service, peace and spiritual hope for generations to come.",
  },

  hindi: {
    button: "हिंदी",
    label: "हमारी विरासत",
    title: "खानकाह और चिराग शरीफ का संक्षिप्त इतिहास",
    intro:
      "रूहानी परंपरा, समर्पण और सेवा का एक सफ़र — चिराग शरीफ की बरकत और फ़ैज़ान-ए-मखदूमी को आगे बढ़ाने वाली एक विरासत।",
    cards: [
      {
        tag: "शुरुआत",
        text:
          "हज़रत मुहम्मद शेख दाऊद अशरफ़ी साहब को चिराग शरीफ एक रूहानी सिलसिले के तहत अता हुआ, जिसके बाद आपने बड़ी मेहनत, मशक्कत और तकलीफ़ें सहन करते हुए इस फ़ैज़ान को आम किया। शुरुआत में चिराग शरीफ सीमित समय के लिए रोशन होता था, मगर धीरे-धीरे इसकी बरकतों से लोगों की भीड़ बढ़ती गई और यह सिलसिला लगातार जारी है।",
      },
      {
        tag: "एक नया अध्याय — 2005",
        text:
          "बैतूल में जब लोगों की संख्या बहुत अधिक हो गई और जगह कम पड़ने लगी तो सन 2005 में हज़रत शेख साहब ने टेकरा (गवाहची) में नई ज़मीन हासिल करके खानकाह की बुनियाद रखी, जो आज अशरफ़ नगर के नाम से जानी जाती है।",
      },
      {
        tag: "रूहानी केंद्र",
        text:
          "यह खानकाह आज एक रूहानी केंद्र बन चुकी है, जहाँ से फ़ैज़ान-ए-मखदूमी आम हो रहा है। यहाँ आने वाले ज़ायरीन को रूहानी सुकून, बरकत और फ़ैज़ हासिल होता है।",
      },
      {
        tag: "मुबारक आमद",
        text:
          "हज़रत सैयद शाह फ़ख़रुद्दीन अशरफ़ रहमतुल्लाहि अलैह और ख़ानदान-ए-अशरफ़िया के अन्य बुज़ुर्गाने दीन भी यहाँ तशरीफ़ ला चुके हैं और अपने मुबारक हाथों से चिराग शरीफ रोशन फ़रमाया है, जिससे इस खानकाह की रूहानी हैसियत और अधिक मज़बूत हुई।",
      },
      {
        tag: "सेवा और परंपरा",
        text:
          "यहाँ होने वाले सभी आमाल शरीअत के अनुसार हैं, और यह खानकाह ख़ालिस तौर पर दीन-ए-इस्लाम और फ़ैज़ान-ए-मखदूमी की ख़िदमत के लिए क़ायम है।",
      },
    ],
    closing:
      "अल्लाह इस मुबारक सिलसिले को आने वाली नस्लों के लिए ईमान, सेवा, सुकून और रूहानी उम्मीद का ज़रिया बनाए रखे।",
  },

  urdu: {
    button: "اردو",
    label: "ہماری وراثت",
    title: "خانقاہ اور چراغ شریف کی مختصر تاریخ",
    intro:
      "روحانی روایت، اخلاص اور خدمت کا ایک سفر — چراغ شریف کی برکت اور فیضانِ مخدومی کو آگے بڑھانے والی ایک مقدس وراثت۔",
    cards: [
      {
        tag: "ابتدا",
        text:
          "حضرت محمد شیخ داؤد اشرفی صاحب کو چراغ شریف ایک روحانی سلسلے کے تحت عطا ہوا، جس کے بعد آپ نے بڑی محنت، مشقت اور تکالیف برداشت کرتے ہوئے اس فیضان کو عام کیا۔ ابتدا میں چراغ شریف محدود وقت کے لیے روشن ہوتا تھا، مگر رفتہ رفتہ اس کی برکتوں سے لوگوں کا ہجوم بڑھتا گیا اور یہ سلسلہ مسلسل جاری ہے۔",
      },
      {
        tag: "ایک نیا باب — 2005",
        text:
          "بیتول میں جب لوگوں کی تعداد بہت زیادہ ہو گئی اور جگہ ناکافی پڑنے لگی تو سن 2005 میں حضرت شیخ صاحب نے ٹیکرا (گواہچی) میں نئی زمین حاصل کر کے خانقاہ کی بنیاد رکھی، جو آج اشرف نگر کے نام سے جانی جاتی ہے۔",
      },
      {
        tag: "روحانی مرکز",
        text:
          "یہ خانقاہ آج ایک روحانی مرکز بن چکی ہے جہاں سے فیضانِ مخدومی عام ہو رہا ہے۔ یہاں آنے والے زائرین کو روحانی سکون، برکت اور فیض حاصل ہوتا ہے۔",
      },
      {
        tag: "مبارک آمد",
        text:
          "حضرت سید شاہ فخر الدین اشرف رحمۃ اللہ علیہ اور خاندانِ اشرفیہ کے دیگر بزرگانِ دین بھی یہاں تشریف لا چکے ہیں اور اپنے مبارک ہاتھوں سے چراغ شریف روشن فرمایا ہے، جس سے اس خانقاہ کی روحانی حیثیت مزید مستحکم ہوئی۔",
      },
      {
        tag: "خدمت و روایت",
        text:
          "یہاں ہونے والے تمام اعمال شریعت کے مطابق ہیں، اور یہ خانقاہ خالصتاً دینِ اسلام اور فیضانِ مخدومی کی خدمت کے لیے قائم ہے۔",
      },
    ],
    closing:
      "اللہ اس مقدس سلسلے کو آنے والی نسلوں کے لیے ایمان، خدمت، سکون اور روحانی امید کا ذریعہ بنائے رکھے۔",
  },
};

/* =========================================================
   MOTION
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const cardReveal: Variants = {
  hidden: (direction: Direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
    y: 35,
    scale: 0.96,
    rotateY: direction === "left" ? -5 : 5,
    filter: "blur(7px)",
  }),

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
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
          large ? "w-28" : "w-12"
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
          large ? "w-28" : "w-12"
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
            x: [0, index % 2 === 0 ? 20 : -20],
          }}
          transition={{
            duration: 6 + (index % 4),
            repeat: Infinity,
            delay: index * 0.35,
            ease: "easeOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-[#C9A227]"
          style={{
            left: `${5 + ((index * 19) % 90)}%`,
            top: `${20 + ((index * 17) % 70)}%`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   MOSQUE SIDE SILHOUETTE
========================================================= */

function MosqueSilhouette({
  side,
  reduceMotion,
}: {
  side: "left" | "right";
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === "left" ? -20 : 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
        ease,
      }}
      className={`pointer-events-none absolute top-1/2 z-10 hidden -translate-y-1/2 lg:block ${
        side === "left" ? "-left-[118px]" : "-right-[118px]"
      }`}
      aria-hidden="true"
    >
      <div className="relative h-[250px] w-[120px]">
        {/* Atmospheric glow */}

        {!reduceMotion && (
          <motion.div
            animate={{
              opacity: [0.08, 0.16, 0.08],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#17372B] blur-[65px]"
          />
        )}

        {/* Main mosque body */}

        <div className="absolute bottom-0 left-1/2 h-[150px] w-[92px] -translate-x-1/2 rounded-t-[48px] border border-[#C9A227]/20 bg-[#17372B]/90 shadow-[0_20px_60px_rgba(23,55,43,0.25)]">
          {/* Central arch */}

          <div className="absolute bottom-0 left-1/2 h-[78px] w-[43px] -translate-x-1/2 overflow-hidden rounded-t-[30px] border border-[#C9A227]/25 bg-[#204D3C]">
            <div className="absolute bottom-0 left-1/2 h-[55px] w-[25px] -translate-x-1/2 rounded-t-[20px] bg-[#F5F0E4]/10" />
          </div>

          {/* Side arches */}

          <div className="absolute bottom-8 left-3 h-12 w-5 rounded-t-full border border-[#C9A227]/15 bg-[#204D3C]" />

          <div className="absolute bottom-8 right-3 h-12 w-5 rounded-t-full border border-[#C9A227]/15 bg-[#204D3C]" />
        </div>

        {/* Dome */}

        <div className="absolute bottom-[125px] left-1/2 h-[75px] w-[95px] -translate-x-1/2 rounded-t-[70px] border border-[#C9A227]/25 bg-[#17372B]" />

        {/* Dome highlight */}

        <div className="absolute bottom-[140px] left-1/2 h-[55px] w-[65px] -translate-x-1/2 rounded-t-[60px] border-t border-[#C9A227]/20" />

        {/* Minaret */}

        <div className="absolute bottom-0 left-0 h-[190px] w-[16px] rounded-t-full border border-[#C9A227]/20 bg-[#17372B]">
          <div className="absolute -top-4 left-1/2 h-5 w-7 -translate-x-1/2 rounded-t-full border border-[#C9A227]/25 bg-[#17372B]" />
          <div className="absolute -top-8 left-1/2 h-5 w-px -translate-x-1/2 bg-[#C9A227]/50" />
        </div>

        {/* Right minaret */}

        <div className="absolute bottom-0 right-0 h-[175px] w-[14px] rounded-t-full border border-[#C9A227]/20 bg-[#17372B]" />

        {/* Crescent / finial */}

        <div className="absolute bottom-[198px] left-1/2 flex -translate-x-1/2 flex-col items-center">
          <div className="h-7 w-7 rounded-full border-2 border-[#C9A227]/70" />
          <div className="absolute left-[7px] top-[-2px] h-7 w-7 rounded-full bg-[#17372B]" />
          <div className="mt-[-1px] h-4 w-px bg-[#C9A227]/60" />
          <div className="h-2 w-2 rotate-45 bg-[#C9A227]/80" />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   TIMELINE NODE
========================================================= */

function TimelineNode({
  index,
  reduceMotion,
}: {
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      aria-hidden="true"
    >
      {!reduceMotion && (
        <motion.span
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute -inset-5 rounded-full bg-[#C9A227] blur-lg"
        />
      )}

      {/* Gold architectural connector */}

      <div className="absolute left-1/2 top-1/2 h-[92px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#C9A227]/40 to-transparent" />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [45, 135, 45],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-9 w-9 items-center justify-center border border-[#C9A227]/80 bg-[#F5F0E4] shadow-[0_0_30px_rgba(201,162,39,0.12)]"
      >
        <span className="h-2.5 w-2.5 bg-[#C9A227]" />
      </motion.div>
    </div>
  );
}

/* =========================================================
   CARD DOME
========================================================= */

function CardDome({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <>
      {/* Dome glow */}

      {!reduceMotion && (
        <motion.div
          animate={{
            opacity: [0.05, 0.13, 0.05],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-[-65px] z-0 h-40 w-48 -translate-x-1/2 rounded-full bg-[#204D3C] blur-[45px]"
        />
      )}

      {/* Main dome */}

      <div
        className="absolute left-1/2 top-[-55px] z-20 h-[90px] w-[180px] -translate-x-1/2 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 h-[125px] w-[180px] -translate-x-1/2 rounded-[100px_100px_0_0] border border-[#C9A227]/30 bg-gradient-to-b from-white/75 via-[#F8F3E7]/75 to-[#E8E0CE]/60 shadow-[0_-15px_60px_rgba(23,55,43,0.08)] backdrop-blur-xl" />

        {/* Dome inner arch */}

        <div className="absolute bottom-0 left-1/2 h-[105px] w-[150px] -translate-x-1/2 rounded-[80px_80px_0_0] border border-[#204D3C]/10 bg-[#204D3C]/[0.035]" />

        {/* Gold dome contour */}

        <div className="absolute bottom-0 left-1/2 h-[115px] w-[164px] -translate-x-1/2 rounded-[90px_90px_0_0] border-t border-[#C9A227]/20" />
      </div>

      {/* Finial */}

      <div
        className="absolute left-1/2 top-[-98px] z-40 -translate-x-1/2"
        aria-hidden="true"
      >
        {/* Crescent */}

        <div className="relative mx-auto h-7 w-7">
          <div className="absolute left-0 top-0 h-6 w-6 rounded-full border-2 border-[#C9A227]/75" />

          <div className="absolute left-[7px] top-[-1px] h-6 w-6 rounded-full bg-[#F5F0E4]" />
        </div>

        {/* Stem */}

        <div className="mx-auto mt-[-1px] h-6 w-px bg-gradient-to-b from-[#C9A227] to-[#C9A227]/20" />

        {/* Diamond */}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [45, 135, 45],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto h-2.5 w-2.5 rotate-45 border border-[#C9A227] bg-[#C9A227]/20"
        />
      </div>
    </>
  );
}

/* =========================================================
   BOTTOM ARCH
========================================================= */

function BottomArch() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-8 w-[72%] -translate-x-1/2 overflow-hidden"
      aria-hidden="true"
    >
      {/* Arch */}

      <div className="absolute bottom-[-30px] left-1/2 h-[70px] w-[180px] -translate-x-1/2 rounded-[100px_100px_0_0] border border-[#C9A227]/25 bg-[#204D3C]/[0.035]" />

      {/* Gold top */}

      <div className="absolute left-1/2 top-0 h-px w-[130px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A227]/65 to-transparent" />

      {/* Small finials */}

      <span className="absolute left-[22%] top-[-2px] h-1.5 w-1.5 rotate-45 bg-[#C9A227]/50" />

      <span className="absolute right-[22%] top-[-2px] h-1.5 w-1.5 rotate-45 bg-[#C9A227]/50" />
    </div>
  );
}

/* =========================================================
   HISTORY CARD
========================================================= */

function HistoryCard({
  card,
  index,
  language,
  reduceMotion,
}: {
  card: {
    tag: string;
    text: string;
  };
  index: number;
  language: Language;
  reduceMotion: boolean | null;
}) {
  const direction: Direction =
    index % 2 === 0 ? "left" : "right";

  const left = direction === "left";
  const isRtl = language === "urdu";

  return (
    <motion.article
      custom={direction}
      variants={cardReveal}
      className={`relative min-h-[440px] lg:flex lg:items-center ${
        left ? "lg:justify-start" : "lg:justify-end"
      }`}
      style={{
        perspective: "1400px",
      }}
    >
      {/* Side atmospheric heritage glow */}

      {!reduceMotion && (
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.07, 0.15, 0.07],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute top-1/2 -z-10 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#17372B] blur-[105px] ${
            left ? "-right-24" : "-left-24"
          }`}
        />
      )}

      {/* Mosque silhouette */}

      <MosqueSilhouette
        side={left ? "right" : "left"}
        reduceMotion={reduceMotion}
      />

      {/* Timeline */}

      <TimelineNode
        index={index}
        reduceMotion={reduceMotion}
      />

      <motion.div
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -8,
                rotateX: 1.5,
                rotateY: left ? -1.2 : 1.2,
              }
        }
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className={`group relative z-30 mt-20 w-full lg:mt-0 lg:w-[47%] ${
          left ? "lg:mr-auto" : "lg:ml-auto"
        }`}
      >
        {/* =================================================
            CARD ARCHITECTURE
        ================================================= */}

        <div className="relative overflow-visible">

          {/* Outer heritage glow */}

          {!reduceMotion && (
            <motion.div
              animate={{
                opacity: [0.04, 0.1, 0.04],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-8 rounded-[4rem] bg-[#204D3C] blur-[55px]"
            />
          )}

          {/* Dome */}

          <CardDome reduceMotion={reduceMotion} />

          {/* Main glass body */}

          <div className="relative overflow-hidden rounded-[2.7rem] border border-[#C9A227]/30 bg-gradient-to-br from-white/80 via-[#F8F3E8]/75 to-[#E8E0CF]/65 shadow-[0_35px_110px_rgba(23,55,43,0.15)] backdrop-blur-2xl">

            {/* Deep green glass glow */}

            {!reduceMotion && (
              <motion.div
                animate={{
                  x: [-80, 80, -80],
                  y: [-40, 40, -40],
                  opacity: [0.035, 0.09, 0.035],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#204D3C] blur-[100px]"
              />
            )}

            {/* Inner architectural frame */}

            <div className="pointer-events-none absolute inset-2 rounded-[2.4rem] border border-[#C9A227]/10" />

            <div className="pointer-events-none absolute inset-4 rounded-[2.2rem] border border-[#17372B]/[0.035]" />

            {/* Top gold architectural line */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease,
              }}
              className="absolute left-[18%] right-[18%] top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#C9A227]/80 to-transparent"
            />

            {/* Green side accent */}

            <div
              className={`absolute top-16 h-[55%] w-px bg-gradient-to-b from-transparent via-[#204D3C]/25 to-transparent ${
                left ? "left-2" : "right-2"
              }`}
            />

            {/* Content */}

            <div className="relative px-6 pb-12 pt-16 sm:px-8 sm:pb-14 sm:pt-18">

              {/* Header */}

              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: 180,
                        }
                  }
                  transition={{
                    duration: 0.6,
                  }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#C9A227]/[0.08] text-xs font-bold tracking-widest text-[#80620F]"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                <span className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/30 to-transparent" />

                <span
                  dir={isRtl ? "rtl" : "ltr"}
                  className={`max-w-[65%] text-[9px] font-bold uppercase tracking-[0.2em] text-[#80620F]/90 sm:text-[10px] ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                >
                  {card.tag}
                </span>
              </div>

              {/* Mini architectural ornament */}

              <div className="mt-7 flex items-center gap-2">
                <span className="h-px w-8 bg-[#C9A227]/45" />

                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: [45, 135, 45],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]"
                />

                <span className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/25 to-transparent" />
              </div>

              {/* Paragraph */}

              <motion.p
                layout
                dir={isRtl ? "rtl" : "ltr"}
                className={`mt-6 text-[14px] leading-8 text-[#355B4D] sm:text-[15px] sm:leading-8 ${
                  isRtl ? "text-right" : "text-left"
                }`}
              >
                {card.text}
              </motion.p>

              {/* Footer */}

              <div className="mt-8 flex items-center justify-between">
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 58,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.25,
                  }}
                  className="h-px bg-[#C9A227]/40"
                />

                <span className="text-[9px] font-medium tracking-[0.2em] text-[#80620F]/55">
                  {String(index + 1).padStart(2, "0")} / 05
                </span>
              </div>
            </div>

            {/* Bottom mosque arch finishing */}

            <BottomArch />

            {/* Bottom green architectural band */}

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#204D3C]/35 to-transparent" />

            {/* Hover gold line */}

            <span
              className={`absolute bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#E1C76A] via-[#C9A227] to-[#80620F] transition-all duration-700 group-hover:w-2/3 ${
                isRtl ? "right-0" : "left-0"
              }`}
            />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* =========================================================
   HISTORY SECTION
========================================================= */

export default function History() {
  const [language, setLanguage] =
    useState<Language>("english");

  const current = historyContent[language];
  const isRtl = language === "urdu";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="history"
      className="relative isolate overflow-hidden bg-[#F5F0E4] px-4 py-24 text-[#17372B] sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {!reduceMotion && (
          <>
            {/* Gold atmosphere */}

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
              className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#C9A227]/30 blur-[170px]"
            />

            {/* Green atmosphere */}

            <motion.div
              animate={{
                x: [-80, 80, -80],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-[260px] top-[35%] h-[520px] w-[520px] rounded-full bg-[#17372B]/[0.055] blur-[150px]"
            />

            {/* Right gold atmosphere */}

            <motion.div
              animate={{
                x: [80, -80, 80],
                y: [0, -60, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-[260px] bottom-[10%] h-[550px] w-[550px] rounded-full bg-[#C9A227]/[0.07] blur-[150px]"
            />
          </>
        )}

        {/* Islamic dot pattern */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #17372B 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* Center atmosphere */}

        <div className="absolute left-1/2 top-[32%] h-[60%] w-[280px] -translate-x-1/2 rounded-full bg-[#17372B]/[0.018] blur-[100px]" />

        {/* Center timeline atmosphere */}

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#C9A227]/10 via-transparent to-[#C9A227]/10" />
      </div>

      {/* Particles */}

      <FloatingParticles
        reduceMotion={reduceMotion}
      />

      {/* =====================================================
          HERITAGE FRAME
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#C9A227]/20 sm:inset-6 sm:rounded-[2.5rem] lg:inset-9 lg:rounded-[3rem]"
        aria-hidden="true"
      >
        <span className="absolute left-0 top-0 h-20 w-20 rounded-tl-[2rem] border-l border-t border-[#C9A227]/65 sm:h-24 sm:w-24" />

        <span className="absolute right-0 top-0 h-20 w-20 rounded-tr-[2rem] border-r border-t border-[#C9A227]/45 sm:h-24 sm:w-24" />

        <span className="absolute bottom-0 left-0 h-20 w-20 rounded-bl-[2rem] border-b border-l border-[#C9A227]/45 sm:h-24 sm:w-24" />

        <span className="absolute bottom-0 right-0 h-20 w-20 rounded-br-[2rem] border-b border-r border-[#C9A227]/65 sm:h-24 sm:w-24" />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.header
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Label */}

          <motion.div
            variants={reveal}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A227]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#80620F] sm:text-xs">
              {current.label}
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A227]" />
          </motion.div>

          {/* Mosque icon */}

          <motion.div
            variants={reveal}
            className="mx-auto mt-9 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A227]/35 bg-[#C9A227]/[0.08] shadow-[0_20px_60px_rgba(201,162,39,0.12)]"
          >
            <FaMosque className="text-2xl text-[#80620F]" />
          </motion.div>

          {/* Ornament */}

          <motion.div
            variants={reveal}
            className="mt-8"
          >
            <Ornament large />
          </motion.div>

          {/* Title */}

          <motion.h2
            variants={reveal}
            dir={isRtl ? "rtl" : "ltr"}
            className="mx-auto mt-10 max-w-5xl bg-gradient-to-b from-[#E1C76A] via-[#C9A227] to-[#745A13] bg-clip-text text-4xl font-black leading-[1.08] tracking-[-0.04em] text-transparent sm:text-5xl md:text-6xl lg:text-[4.4rem]"
          >
            {current.title}
          </motion.h2>

          {/* Intro */}

          <motion.p
            variants={reveal}
            dir={isRtl ? "rtl" : "ltr"}
            className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#355B4D] sm:text-base sm:leading-9"
          >
            {current.intro}
          </motion.p>
        </motion.header>

        {/* ===================================================
            LANGUAGE SWITCHER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="mx-auto mt-12 flex w-fit items-center rounded-full border border-[#C9A227]/25 bg-white/65 p-1.5 shadow-[0_25px_80px_rgba(23,55,43,0.1)] backdrop-blur-2xl"
        >
          <FaLanguage
            className="mx-2 hidden text-lg text-[#80620F] sm:block"
            aria-hidden="true"
          />

          {(
            [
              ["english", "English"],
              ["hindi", "हिंदी"],
              ["urdu", "اردو"],
            ] as const
          ).map(([value, label]) => {
            const active = language === value;

            return (
              <motion.button
                key={value}
                type="button"
                onClick={() => setLanguage(value)}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.96,
                      }
                }
                aria-pressed={active}
                aria-label={`Switch language to ${label}`}
                className="relative min-w-[78px] rounded-full px-4 py-2.5 text-xs font-semibold sm:min-w-[105px] sm:px-5 sm:text-sm"
              >
                {active && (
                  <motion.span
                    layoutId="historyLanguage"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E1C76A] via-[#C9A227] to-[#8B6F1A] shadow-[0_8px_30px_rgba(139,111,26,0.22)]"
                  />
                )}

                <span
                  className={`relative z-10 ${
                    active
                      ? "text-[#17372B]"
                      : "text-[#49675B]"
                  }`}
                >
                  {label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ===================================================
            TIMELINE
        ==================================================== */}

        <motion.div
          key={language}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.04,
          }}
          className="relative mx-auto mt-24 max-w-6xl sm:mt-32"
          dir={isRtl ? "rtl" : "ltr"}
        >
          {/* Central gold timeline */}

          <motion.div
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleY: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            transition={{
              duration: 2,
              ease,
            }}
            style={{
              originY: 0,
            }}
            className="pointer-events-none absolute bottom-12 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A227]/60 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="space-y-20 lg:space-y-0">
            {current.cards.map((card, index) => (
              <HistoryCard
                key={`${language}-${index}`}
                card={card}
                index={index}
                language={language}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            CLOSING
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="mx-auto mt-24 max-w-4xl sm:mt-32"
        >
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#C9A227]/30 bg-[#17372B] px-7 py-12 text-center shadow-[0_40px_110px_rgba(23,55,43,0.2)] sm:px-12 sm:py-16">

            {/* Inner frame */}

            <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#C9A227]/10 sm:inset-5" />

            {/* Green architectural glow */}

            {!reduceMotion && (
              <motion.div
                animate={{
                  x: [-120, 120, -120],
                  y: [-30, 30, -30],
                  opacity: [0.03, 0.1, 0.03],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227] blur-[120px]"
              />
            )}

            <div className="relative z-10">
              <Ornament />

              <motion.p
                key={`closing-${language}`}
                initial={{
                  opacity: 0,
                  y: 15,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.7,
                  ease,
                }}
                dir={isRtl ? "rtl" : "ltr"}
                className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#EAE0CC]/90 sm:text-base sm:leading-9"
              >
                {current.closing}
              </motion.p>

              <div className="mt-8 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#C9A227]/70 sm:text-[10px]">
                Darbare e Ashrafi Betul
              </div>

              <div className="mx-auto mt-7 h-px w-28 bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
            </div>

            {/* Bottom hover line */}

            <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#C9A227] transition-all duration-1000 group-hover:w-2/3" />
          </div>
        </motion.div>

        {/* ===================================================
            FINAL ORNAMENT
        ==================================================== */}

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
          className="mt-16 flex justify-center"
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