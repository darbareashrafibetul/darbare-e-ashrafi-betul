"use client";

import { useState } from "react";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";

type Language = "en" | "hi" | "ur";
type Direction = "left" | "right";

/* =========================================================
   CONTENT
========================================================= */

const content: Record<
  Language,
  {
    button: string;
    label: string;
    title: string;
    verse: string;
    verseMeaning: string;
    intro: string;
    cards: { tag: string; text: string }[];
    closing: string;
  }
> = {
  en: {
    button: "English",
    label: "Our Story",
    title: "About Darbare e Ashrafi Betul",
    verse: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
    verseMeaning: "And when I am ill, it is He who cures me.",
    intro:
      "A sacred journey of faith, service, spiritual guidance and hope — built upon tradition, compassion and devotion.",
    cards: [
      {
        tag: "Beginning",
        text:
          "Makhdoom Baba Dargah, Betul, is a special center for providing relief from people's worries, difficulties and troubles. Here, physical and spiritual treatment is carried out through the blessed Noorani Chiragh Sharif of Sarkar Makhdoom Ashraf Jahangir Simnani (Rahmatullahi Alaih).",
      },
      {
        tag: "Foundation",
        text:
          "On 12 February 1997, Hazrat Syed Shah Fakhruddin Ashraf Ashrafi Al-Jilani (Rahmatullahi Alaih), the Sajjadah Nashin of the blessed shrine of Hazrat Makhdoom Ashraf Jahangir Simnani (Rahmatullahi Alaih), laid the foundation of this Khanqah Ashrafia Razakia. Since then, thousands of people have received Makhdoomi Faiz and have been blessed through it.",
      },
      {
        tag: "Faith & Grace",
        text:
          "It is the special grace of Hazrat Makhdoom Sultan Syed Ashraf Jahangir Simnani (Rahmatullahi Alaih) that, through the blessings of his Chiragh Sharif, every troubled person comes to this Khanqah, finds relief from their difficulties, and returns home happily.",
      },
      {
        tag: "Service",
        text:
          "Collective marriage conferences are also organized through this Khanqah, including Makhdoom Baba Dargah, and several free marriages have been conducted with the support of the Khanqah.",
      },
      {
        tag: "Tradition",
        text:
          "In addition, on the occasion of the Urs of Sarkar, Fatiha, Ziyarat, blessings and Tabarrukat are offered, while religious, social and cultural programs are organized from time to time.",
      },
    ],
    closing:
      "May this Khanqah continue to remain a source of peace, service, faith and hope for everyone who visits.",
  },

  hi: {
    button: "हिंदी",
    label: "हमारी कहानी",
    title: "दरबारे अशरफी बैतूल के बारे में",
    verse: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
    verseMeaning: "और जब मैं बीमार होता हूँ, तो वही मुझे शिफ़ा देता है।",
    intro:
      "ईमान, सेवा, आध्यात्मिक मार्गदर्शन और उम्मीद की एक पवित्र यात्रा — परंपरा, मोहब्बत और समर्पण से जुड़ी हुई।",
    cards: [
      {
        tag: "शुरुआत",
        text:
          "मखदूम बाबा दरगाह, बैतूल, लोगों की परेशानियों, कठिनाइयों और समस्याओं से राहत प्रदान करने का एक विशेष केंद्र है। यहाँ सरकार मखदूम अशरफ जहांगीर सिमनानी (रहमतुल्लाहि अलैह) के मुबारक नूरानी चिराग शरीफ की बरकत से शारीरिक और रूहानी उपचार किया जाता है।",
      },
      {
        tag: "बुनियाद",
        text:
          "12 फरवरी 1997 को हज़रत सैयद शाह फखरुद्दीन अशरफ अशरफी अल-जिलानी (रहमतुल्लाहि अलैह) ने इस खानकाह अशरफिया रज़ाकिया की बुनियाद रखी। तब से अब तक हजारों लोगों ने यहाँ से मखदूमी फैज़ हासिल किया और बरकतों से नवाज़े गए।",
      },
      {
        tag: "करम और फैज़",
        text:
          "यह हज़रत मखदूम सुल्तान सैयद अशरफ जहांगीर सिमनानी (रहमतुल्लाहि अलैह) का विशेष करम है कि उनके चिराग शरीफ की बरकत से हर परेशान व्यक्ति इस खानकाह में आता है, अपनी परेशानियों से राहत पाता है और खुश होकर अपने घर लौटता है।",
      },
      {
        tag: "सेवा",
        text:
          "इस खानकाह के माध्यम से सामूहिक विवाह सम्मेलन भी आयोजित किए जाते हैं। मखदूम बाबा दरगाह के सहयोग से कई जरूरतमंद लोगों के निःशुल्क विवाह भी संपन्न कराए गए हैं।",
      },
      {
        tag: "परंपरा",
        text:
          "इसके अलावा सरकार के उर्स के अवसर पर फातिहा, ज़ियारत, बरकत और तबर्रुकात पेश किए जाते हैं। समय-समय पर धार्मिक, सामाजिक और सांस्कृतिक कार्यक्रमों का भी आयोजन किया जाता है।",
      },
    ],
    closing:
      "अल्लाह इस खानकाह को हर आने वाले व्यक्ति के लिए सुकून, सेवा, ईमान और उम्मीद का ज़रिया बनाए रखे।",
  },

  ur: {
    button: "اردو",
    label: "ہماری کہانی",
    title: "دربارِ اشرفی بیتول کے بارے میں",
    verse: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
    verseMeaning: "اور جب میں بیمار ہوتا ہوں تو وہی مجھے شفا دیتا ہے۔",
    intro:
      "ایمان، خدمت، روحانی رہنمائی اور امید کا ایک مقدس سفر — روایت، محبت اور عقیدت سے وابستہ۔",
    cards: [
      {
        tag: "ابتدا",
        text:
          "مخدوم بابا درگاہ، بیتول، لوگوں کی پریشانیوں، مشکلات اور مصیبتوں سے راحت فراہم کرنے کا ایک خصوصی مرکز ہے۔ یہاں سرکار مخدوم اشرف جہاں گیر سمنانی رحمۃ اللہ علیہ کے مبارک نورانی چراغ شریف کی برکت سے جسمانی اور روحانی علاج کیا جاتا ہے۔",
      },
      {
        tag: "بنیاد",
        text:
          "12 فروری 1997 کو حضرت سید شاہ فخرالدین اشرف اشرفی الجیلانی رحمۃ اللہ علیہ نے اس خانقاہ اشرفیہ رضاکیہ کی بنیاد رکھی۔ اس کے بعد سے ہزاروں لوگوں نے یہاں سے مخدومی فیض حاصل کیا اور برکتوں سے نوازے گئے۔",
      },
      {
        tag: "کرم و فیض",
        text:
          "یہ حضرت مخدوم سلطان سید اشرف جہاں گیر سمنانی رحمۃ اللہ علیہ کا خصوصی کرم ہے کہ ان کے چراغ شریف کی برکت سے ہر پریشان حال شخص اس خانقاہ میں آتا ہے، اپنی مشکلات سے راحت پاتا ہے اور خوشی خوشی اپنے گھر واپس جاتا ہے۔",
      },
      {
        tag: "خدمت",
        text:
          "اس خانقاہ کے ذریعے اجتماعی شادی کانفرنسیں بھی منعقد کی جاتی ہیں۔ مخدوم بابا درگاہ کے تعاون سے کئی ضرورت مند افراد کی مفت شادیاں بھی انجام دی گئی ہیں۔",
      },
      {
        tag: "روایت",
        text:
          "اس کے علاوہ سرکار کے عرس کے موقع پر فاتحہ، زیارت، برکات اور تبرکات پیش کیے جاتے ہیں، جبکہ وقتاً فوقتاً مذہبی، سماجی اور ثقافتی پروگرام بھی منعقد کیے جاتے ہیں۔",
      },
    ],
    closing:
      "اللہ اس خانقاہ کو ہر آنے والے شخص کے لیے سکون، خدمت، ایمان اور امید کا ذریعہ بنائے رکھے۔",
  },
};

/* =========================================================
   ANIMATION
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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
    x: direction === "left" ? -130 : 130,
    y: 35,
    scale: 0.95,
    rotateY: direction === "left" ? -7 : 7,
    filter: "blur(8px)",
  }),

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
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
   PARTICLES
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
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: [0, 0.35, 0],
            y: [-10, -120],
            x: [0, i % 2 === 0 ? 25 : -25],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-[#C9A227]"
          style={{
            left: `${5 + ((i * 17) % 90)}%`,
            top: `${30 + ((i * 13) % 60)}%`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   MOSQUE ATMOSPHERE
========================================================= */

function MosqueAtmosphere({
  side,
  reduceMotion,
}: {
  side: Direction;
  reduceMotion: boolean | null;
}) {
  const left = side === "left";

  return (
    <div
      className={`pointer-events-none absolute top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 lg:block ${
        left ? "-left-[250px]" : "-right-[250px]"
      }`}
      aria-hidden="true"
    >
      {/* Deep green atmospheric field */}

      {!reduceMotion && (
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.52, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-10 rounded-full bg-[#17372B]/25 blur-[75px]"
        />
      )}

      <div className="absolute inset-[55px] rounded-full bg-gradient-to-br from-[#17372B]/20 via-[#204D3C]/10 to-transparent blur-2xl" />

      {/* Mosque silhouette */}

      <div className="absolute bottom-5 left-1/2 h-[205px] w-[280px] -translate-x-1/2">
        {/* Main structure */}

        <div className="absolute bottom-0 left-1/2 h-[120px] w-[190px] -translate-x-1/2 rounded-t-[18px] bg-[#17372B]/90 shadow-[0_25px_80px_rgba(23,55,43,0.22)]">
          {/* Dome */}

          <div className="absolute -top-[82px] left-1/2 h-[105px] w-[140px] -translate-x-1/2 overflow-hidden rounded-t-[80px] bg-[#17372B]/95">
            <div className="absolute bottom-0 left-1/2 h-[72px] w-[112px] -translate-x-1/2 rounded-t-[65px] bg-[#204D3C]/95" />
          </div>

          {/* Dome gold finial */}

          <div className="absolute -top-[104px] left-1/2 h-6 w-px -translate-x-1/2 bg-[#C9A227]/80" />

          <motion.span
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
            className="absolute -top-[109px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-[#C9A227]"
          />

          {/* Main arch */}

          <div className="absolute bottom-0 left-1/2 h-[78px] w-[62px] -translate-x-1/2 overflow-hidden rounded-t-[36px] bg-[#F5F0E4]/10">
            <div className="absolute bottom-0 left-1/2 h-[66px] w-[42px] -translate-x-1/2 rounded-t-[26px] bg-[#F5F0E4]/10" />
          </div>

          {/* Small arches */}

          <div className="absolute bottom-0 left-4 h-[52px] w-[30px] rounded-t-[20px] bg-[#F5F0E4]/10" />

          <div className="absolute bottom-0 right-4 h-[52px] w-[30px] rounded-t-[20px] bg-[#F5F0E4]/10" />
        </div>

        {/* Minaret left */}

        <div className="absolute bottom-0 left-0 h-[175px] w-[30px] bg-[#17372B]/90">
          <div className="absolute -top-7 left-1/2 h-7 w-[48px] -translate-x-1/2 rounded-t-full bg-[#17372B]" />

          <div className="absolute -top-[42px] left-1/2 h-5 w-px -translate-x-1/2 bg-[#C9A227]/70" />

          <div className="absolute -top-[14px] left-1/2 h-2 w-11 -translate-x-1/2 bg-[#C9A227]/50" />
        </div>

        {/* Minaret right */}

        <div className="absolute bottom-0 right-0 h-[175px] w-[30px] bg-[#17372B]/90">
          <div className="absolute -top-7 left-1/2 h-7 w-[48px] -translate-x-1/2 rounded-t-full bg-[#17372B]" />

          <div className="absolute -top-[42px] left-1/2 h-5 w-px -translate-x-1/2 bg-[#C9A227]/70" />

          <div className="absolute -top-[14px] left-1/2 h-2 w-11 -translate-x-1/2 bg-[#C9A227]/50" />
        </div>
      </div>

      {/* Gold connection into timeline */}

      <div
        className={`absolute top-1/2 h-px w-[115px] ${
          left ? "right-0" : "left-0"
        } bg-gradient-to-r ${
          left
            ? "from-[#C9A227]/0 via-[#C9A227]/30 to-[#C9A227]/70"
            : "from-[#C9A227]/70 via-[#C9A227]/30 to-[#C9A227]/0"
        }`}
      />
    </div>
  );
}

/* =========================================================
   MOSQUE INSPIRED CARD TOP
========================================================= */

function CardArch() {
  return (
    <>
      {/* Outer dome */}

      <div
        className="pointer-events-none absolute -top-[74px] left-1/2 h-[92px] w-[150px] -translate-x-1/2 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 h-[130px] w-[150px] -translate-x-1/2 rounded-[80px_80px_0_0] border border-[#C9A227]/20 bg-white/45 backdrop-blur-xl" />

        <div className="absolute bottom-0 left-1/2 h-[105px] w-[120px] -translate-x-1/2 rounded-[65px_65px_0_0] border border-[#C9A227]/10 bg-[#17372B]/[0.025]" />
      </div>

      {/* Gold dome finial */}

      <div
        className="pointer-events-none absolute -top-[92px] left-1/2 z-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="mx-auto h-5 w-px bg-[#C9A227]/60" />

        <div className="h-2 w-2 rotate-45 bg-[#C9A227]/80" />
      </div>
    </>
  );
}

/* =========================================================
   STORY CARD
========================================================= */

function StoryCard({
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
  const isRtl = language === "ur";

  return (
    <motion.article
      custom={direction}
      variants={cardReveal}
      className={`relative min-h-[420px] lg:flex lg:items-center ${
        left ? "lg:justify-start" : "lg:justify-end"
      }`}
      style={{
        perspective: "1400px",
      }}
    >
      {/* ===================================================
          MOSQUE ATMOSPHERE
      ==================================================== */}

      <MosqueAtmosphere
        side={direction}
        reduceMotion={reduceMotion}
      />

      {/* ===================================================
          TIMELINE NODE
      ==================================================== */}

      <div
        className="absolute left-1/2 top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        {!reduceMotion && (
          <motion.span
            animate={{
              scale: [1, 1.45, 1],
              opacity: [0.12, 0.35, 0.12],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.35,
            }}
            className="absolute -inset-5 rounded-full bg-[#C9A227] blur-lg"
          />
        )}

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
          className="relative flex h-9 w-9 rotate-0 items-center justify-center border border-[#C9A227]/80 bg-[#F5F0E4]"
        >
          <span className="h-2.5 w-2.5 bg-[#C9A227]" />
        </motion.div>
      </div>

      {/* ===================================================
          CARD WRAPPER
      ==================================================== */}

      <motion.div
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -9,
                rotateX: 1.5,
                rotateY: left ? -1.2 : 1.2,
              }
        }
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className={`group relative z-30 mt-20 w-full lg:mt-0 lg:w-[45%] ${
          left ? "lg:mr-auto" : "lg:ml-auto"
        }`}
      >
        {/* =================================================
            CARD ATMOSPHERIC GREEN GLOW
        ================================================== */}

        {!reduceMotion && (
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`pointer-events-none absolute -z-10 h-[320px] w-[320px] rounded-full bg-[#17372B] blur-[100px] ${
              left ? "-right-28" : "-left-28"
            } top-1/2 -translate-y-1/2`}
          />
        )}

        {/* =================================================
            CARD
        ================================================== */}

        <div
          className={`relative overflow-visible border border-[#C9A227]/25 bg-white/60 shadow-[0_35px_100px_rgba(23,55,43,0.11)] backdrop-blur-2xl ${
            left
              ? "rounded-[2.5rem_2.5rem_2rem_2rem]"
              : "rounded-[2.5rem_2.5rem_2rem_2rem]"
          }`}
        >
          {/* Dome / arch top */}

          <CardArch />

          {/* Inner gold border */}

          <div className="pointer-events-none absolute inset-2 rounded-[2.2rem] border border-[#C9A227]/10" />

          {/* Top gold line */}

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

          {/* Soft green internal light */}

          <div
            className={`pointer-events-none absolute top-20 h-52 w-52 rounded-full bg-[#204D3C]/[0.055] blur-[70px] ${
              left ? "-right-20" : "-left-20"
            }`}
          />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative px-6 pb-7 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
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
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/35 bg-[#C9A227]/[0.08] text-xs font-bold tracking-widest text-[#80620F]"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              <span className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/30 to-transparent" />

              <span
                className={`text-[9px] font-bold uppercase tracking-[0.28em] text-[#80620F]/75 ${
                  isRtl ? "text-right" : ""
                }`}
              >
                {card.tag}
              </span>
            </div>

            {/* Decorative mini arch */}

            <div className="mt-7 flex items-center gap-2">
              <span className="h-px w-8 bg-[#C9A227]/40" />

              <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />

              <span className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/20 to-transparent" />
            </div>

            {/* Text */}

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
                className="h-px bg-[#C9A227]/35"
              />

              <span className="text-[9px] font-medium tracking-[0.2em] text-[#80620F]/50">
                {String(index + 1).padStart(2, "0")} / 05
              </span>
            </div>
          </div>

          {/* =================================================
              BOTTOM ARCH DETAILS
          ================================================== */}

          <div className="pointer-events-none absolute bottom-0 left-1/2 h-2 w-1/3 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

          {/* Hover gold line */}

          <span
            className={`absolute bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#E1C76A] via-[#C9A227] to-[#80620F] transition-all duration-700 group-hover:w-2/3 ${
              isRtl ? "right-0" : "left-0"
            }`}
          />
        </div>
      </motion.div>
    </motion.article>
  );
}

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const [language, setLanguage] =
    useState<Language>("en");

  const current = content[language];
  const isRtl = language === "ur";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
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
                opacity: [0.05, 0.13, 0.05],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[-350px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C9A227]/30 blur-[170px]"
            />

            {/* Left green atmosphere */}

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
              className="absolute -left-[250px] top-[35%] h-[520px] w-[520px] rounded-full bg-[#17372B]/[0.055] blur-[150px]"
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
              className="absolute -right-[250px] bottom-[10%] h-[550px] w-[550px] rounded-full bg-[#C9A227]/[0.07] blur-[150px]"
            />
          </>
        )}

        {/* Subtle Islamic dot pattern */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #17372B 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* Timeline atmosphere */}

        <div className="absolute left-1/2 top-[35%] h-[55%] w-[280px] -translate-x-1/2 rounded-full bg-[#17372B]/[0.018] blur-[100px]" />

        {/* Center line */}

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#C9A227]/10 via-transparent to-[#C9A227]/10" />
      </div>

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

          {/* AYAT */}

          <motion.div
            variants={reveal}
            className="relative mx-auto mt-10 max-w-5xl"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.04] blur-[100px]" />

            <div className="relative">
              <Ornament large />

              <p
                dir="rtl"
                className="mt-8 px-2 font-serif text-[2rem] font-medium leading-[2.1] text-[#80620F] sm:text-[2.8rem] md:text-[3.7rem] lg:text-[4.4rem]"
              >
                {current.verse}
              </p>

              <div className="mx-auto mt-5 h-px w-16 bg-[#C9A227]/40" />

              <p className="mx-auto mt-5 max-w-xl text-xs italic leading-7 text-[#526C61] sm:text-sm">
                {current.verseMeaning}
              </p>

              <div className="mt-8">
                <Ornament />
              </div>
            </div>
          </motion.div>

          {/* TITLE */}

          <motion.h2
            variants={reveal}
            className="relative mx-auto mt-12 max-w-5xl bg-gradient-to-b from-[#E1C76A] via-[#C9A227] to-[#745A13] bg-clip-text text-4xl font-black leading-[1.05] tracking-[-0.045em] text-transparent sm:text-5xl md:text-6xl lg:text-[4.6rem]"
          >
            {current.title}
          </motion.h2>

          <motion.p
            variants={reveal}
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
          className="mx-auto mt-12 flex w-fit rounded-full border border-[#C9A227]/25 bg-white/60 p-1.5 shadow-[0_25px_80px_rgba(23,55,43,0.1)] backdrop-blur-2xl"
        >
          {(["en", "hi", "ur"] as Language[]).map(
            (lang) => {
              const active =
                language === lang;

              return (
                <motion.button
                  key={lang}
                  type="button"
                  onClick={() =>
                    setLanguage(lang)
                  }
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
                  className="relative min-w-[78px] rounded-full px-4 py-2.5 text-xs font-semibold sm:min-w-[105px] sm:px-5 sm:text-sm"
                >
                  {active && (
                    <motion.span
                      layoutId="aboutLanguage"
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
                    {content[lang].button}
                  </span>
                </motion.button>
              );
            }
          )}
        </motion.div>

        {/* ===================================================
            STORY TIMELINE
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
            className="pointer-events-none absolute bottom-12 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A227]/55 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="space-y-14 lg:space-y-0">
            {current.cards.map(
              (card, index) => (
                <StoryCard
                  key={`${language}-${index}`}
                  card={card}
                  index={index}
                  language={language}
                  reduceMotion={reduceMotion}
                />
              )
            )}
          </div>
        </motion.div>

        {/* ===================================================
            CLOSING
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
            <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#C9A227]/10 sm:inset-5" />

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