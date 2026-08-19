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
   Performance notes:
   - No backdrop-blur anywhere (biggest mobile GPU cost)
   - Infinite loops cut from 20+ to 2 total on the page
   - Large blur() radii reduced
   - willChange only on the few things that actually loop
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

const cardReveal: Variants = {
  hidden: (direction: Direction) => ({
    opacity: 0,
    x: direction === "left" ? -35 : 35,
    y: 14,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
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
   ORNAMENT
   Static diamond — no JS animation loop.
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
      <span
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
   Desktop only, fewer, cheap opacity-only animation.
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
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: [0, 0.25, 0],
            y: [-5, -70],
          }}
          transition={{
            duration: 9 + (i % 3),
            repeat: Infinity,
            repeatDelay: 3,
            delay: i * 0.8,
            ease: "easeOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-[#C9A227]"
          style={{
            left: `${8 + ((i * 19) % 84)}%`,
            top: `${35 + ((i * 17) % 50)}%`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   MOSQUE ATMOSPHERE
   Fully static now — no motion, no blur animation.
   (Still desktop-only via lg:block; renders once, costs nothing after paint.)
========================================================= */

function MosqueAtmosphere({ side }: { side: Direction }) {
  const left = side === "left";

  return (
    <div
      className={`pointer-events-none absolute top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 lg:block ${
        left ? "-left-[205px]" : "-right-[205px]"
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-12 rounded-full bg-[#17372B]/[0.14]" />

      <div className="absolute inset-[50px] rounded-full bg-gradient-to-br from-[#17372B]/15 via-[#204D3C]/8 to-transparent" />

      <div className="absolute bottom-5 left-1/2 h-[175px] w-[235px] -translate-x-1/2">
        <div className="absolute bottom-0 left-1/2 h-[105px] w-[160px] -translate-x-1/2 rounded-t-[18px] bg-[#17372B]/85">
          <div className="absolute -top-[68px] left-1/2 h-[88px] w-[120px] -translate-x-1/2 overflow-hidden rounded-t-[70px] bg-[#17372B]/90">
            <div className="absolute bottom-0 left-1/2 h-[60px] w-[95px] -translate-x-1/2 rounded-t-[55px] bg-[#204D3C]/90" />
          </div>

          <div className="absolute -top-[88px] left-1/2 h-5 w-px -translate-x-1/2 bg-[#C9A227]/70" />

          <span className="absolute -top-[93px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#C9A227]" />

          <div className="absolute bottom-0 left-1/2 h-[68px] w-[55px] -translate-x-1/2 overflow-hidden rounded-t-[32px] bg-[#F5F0E4]/10" />

          <div className="absolute bottom-0 left-4 h-[45px] w-[25px] rounded-t-[18px] bg-[#F5F0E4]/10" />
          <div className="absolute bottom-0 right-4 h-[45px] w-[25px] rounded-t-[18px] bg-[#F5F0E4]/10" />
        </div>

        <div className="absolute bottom-0 left-0 h-[145px] w-[25px] bg-[#17372B]/85">
          <div className="absolute -top-6 left-1/2 h-6 w-[40px] -translate-x-1/2 rounded-t-full bg-[#17372B]" />
          <div className="absolute -top-[37px] left-1/2 h-4 w-px -translate-x-1/2 bg-[#C9A227]/60" />
          <div className="absolute -top-[12px] left-1/2 h-1.5 w-9 -translate-x-1/2 bg-[#C9A227]/45" />
        </div>

        <div className="absolute bottom-0 right-0 h-[145px] w-[25px] bg-[#17372B]/85">
          <div className="absolute -top-6 left-1/2 h-6 w-[40px] -translate-x-1/2 rounded-t-full bg-[#17372B]" />
          <div className="absolute -top-[37px] left-1/2 h-4 w-px -translate-x-1/2 bg-[#C9A227]/60" />
          <div className="absolute -top-[12px] left-1/2 h-1.5 w-9 -translate-x-1/2 bg-[#C9A227]/45" />
        </div>
      </div>

      <div
        className={`absolute top-1/2 h-px w-[100px] ${
          left ? "right-0" : "left-0"
        } bg-gradient-to-r ${
          left
            ? "from-[#C9A227]/0 via-[#C9A227]/25 to-[#C9A227]/60"
            : "from-[#C9A227]/60 via-[#C9A227]/25 to-[#C9A227]/0"
        }`}
      />
    </div>
  );
}

/* =========================================================
   CARD ARCH
   backdrop-blur removed → solid translucent bg instead.
========================================================= */

function CardArch() {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-[70px] left-1/2 h-[88px] w-[145px] -translate-x-1/2 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-1/2 h-[125px] w-[145px] -translate-x-1/2 rounded-[78px_78px_0_0] border border-[#C9A227]/20 bg-[#FBF8F0]/90" />
        <div className="absolute bottom-0 left-1/2 h-[100px] w-[116px] -translate-x-1/2 rounded-[62px_62px_0_0] border border-[#C9A227]/10 bg-[#17372B]/[0.025]" />
      </div>

      <div
        className="pointer-events-none absolute -top-[88px] left-1/2 z-20 -translate-x-1/2"
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
  const direction: Direction = index % 2 === 0 ? "left" : "right";
  const left = direction === "left";
  const isRtl = language === "ur";

  return (
    <motion.article
      custom={direction}
      variants={cardReveal}
      className={`relative min-h-[400px] lg:flex lg:items-center ${
        left ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <MosqueAtmosphere side={direction} />

      {/* center diamond marker — static, no infinite loop */}
      <div
        className="absolute left-1/2 top-1/2 z-40 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="relative flex h-8 w-8 items-center justify-center border border-[#C9A227]/80 bg-[#F5F0E4]">
          <span className="h-2.5 w-2.5 bg-[#C9A227]" />
        </div>
      </div>

      <motion.div
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`group relative z-30 mt-16 w-full lg:mt-0 lg:w-[45%] ${
          left ? "lg:mr-auto" : "lg:ml-auto"
        }`}
      >
        {/* soft glow behind card — static, no filter animation */}
        <div
          className={`pointer-events-none absolute -z-10 h-[220px] w-[220px] rounded-full bg-[#17372B]/[0.06] blur-[40px] ${
            left ? "-right-16" : "-left-16"
          } top-1/2 -translate-y-1/2`}
        />

        <div className="relative overflow-visible rounded-[2.5rem_2.5rem_2rem_2rem] border border-[#C9A227]/25 bg-[#FBF8F0]/95 shadow-[0_20px_55px_rgba(23,55,43,0.09)]">
          <CardArch />

          <div className="pointer-events-none absolute inset-2 rounded-[2.2rem] border border-[#C9A227]/10" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="absolute left-[18%] right-[18%] top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#C9A227]/70 to-transparent"
          />

          <div
            className={`pointer-events-none absolute top-20 h-44 w-44 rounded-full bg-[#204D3C]/[0.04] blur-[30px] ${
              left ? "-right-16" : "-left-16"
            }`}
          />

          <div className="relative px-6 pb-7 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/35 bg-[#C9A227]/[0.08] text-xs font-bold tracking-widest text-[#80620F] transition-transform duration-300 group-hover:rotate-90">
                {String(index + 1).padStart(2, "0")}
              </div>

              <span className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/30 to-transparent" />

              <span
                className={`text-[9px] font-bold uppercase tracking-[0.28em] text-[#80620F]/75 ${
                  isRtl ? "text-right" : ""
                }`}
              >
                {card.tag}
              </span>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <span className="h-px w-8 bg-[#C9A227]/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />
              <span className="h-px flex-1 bg-gradient-to-r from-[#C9A227]/20 to-transparent" />
            </div>

            <p
              dir={isRtl ? "rtl" : "ltr"}
              className={`mt-6 text-[14px] leading-8 text-[#355B4D] sm:text-[15px] sm:leading-8 ${
                isRtl ? "text-right" : "text-left"
              }`}
            >
              {card.text}
            </p>

            <div className="mt-8 flex items-center justify-between">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 58 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-px bg-[#C9A227]/35"
              />

              <span className="text-[9px] font-medium tracking-[0.2em] text-[#80620F]/50">
                {String(index + 1).padStart(2, "0")} / 05
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-1/2 h-2 w-1/3 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-transparent via-[#C9A227]/35 to-transparent" />

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
  const [language, setLanguage] = useState<Language>("en");
  const current = content[language];
  const isRtl = language === "ur";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#F5F0E4] px-4 py-24 text-[#17372B] sm:px-6 sm:py-28 lg:px-8 lg:py-36"
    >
      {/* background layer — static blobs, only ONE subtle infinite loop kept */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {!reduceMotion && (
          <motion.div
            animate={{ opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-[-300px] hidden h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#C9A227]/20 blur-[70px] lg:block"
            style={{ willChange: "opacity" }}
          />
        )}

        <div className="absolute -left-[220px] top-[35%] hidden h-[430px] w-[430px] rounded-full bg-[#17372B]/[0.04] blur-[70px] lg:block" />
        <div className="absolute -right-[220px] bottom-[10%] hidden h-[450px] w-[450px] rounded-full bg-[#C9A227]/[0.05] blur-[70px] lg:block" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #17372B 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute left-1/2 top-[35%] h-[55%] w-[240px] -translate-x-1/2 rounded-full bg-[#17372B]/[0.015] blur-[50px]" />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#C9A227]/10 via-transparent to-[#C9A227]/10" />
      </div>

      <FloatingParticles reduceMotion={reduceMotion} />

      <div
        className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#C9A227]/20 sm:inset-6 sm:rounded-[2.5rem] lg:inset-9 lg:rounded-[3rem]"
        aria-hidden="true"
      >
        <span className="absolute left-0 top-0 h-20 w-20 rounded-tl-[2rem] border-l border-t border-[#C9A227]/65 sm:h-24 sm:w-24" />
        <span className="absolute right-0 top-0 h-20 w-20 rounded-tr-[2rem] border-r border-t border-[#C9A227]/45 sm:h-24 sm:w-24" />
        <span className="absolute bottom-0 left-0 h-20 w-20 rounded-bl-[2rem] border-b border-l border-[#C9A227]/45 sm:h-24 sm:w-24" />
        <span className="absolute bottom-0 right-0 h-20 w-20 rounded-br-[2rem] border-b border-r border-[#C9A227]/65 sm:h-24 sm:w-24" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.header
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div variants={reveal} className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A227]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#80620F] sm:text-xs">
              {current.label}
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A227]" />
          </motion.div>

          <motion.div variants={reveal} className="relative mx-auto mt-10 max-w-5xl">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.035] blur-[45px]" />

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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease }}
          className="mx-auto mt-12 flex w-fit rounded-full border border-[#C9A227]/25 bg-[#FBF8F0]/95 p-1.5 shadow-[0_14px_40px_rgba(23,55,43,0.08)]"
        >
          {(["en", "hi", "ur"] as Language[]).map((lang) => {
            const active = language === lang;

            return (
              <motion.button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                aria-pressed={active}
                className="relative min-w-[78px] rounded-full px-4 py-2.5 text-xs font-semibold transition-transform sm:min-w-[105px] sm:px-5 sm:text-sm"
              >
                {active && (
                  <motion.span
                    layoutId="aboutLanguage"
                    transition={{ duration: 0.25, ease }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E1C76A] via-[#C9A227] to-[#8B6F1A] shadow-[0_6px_20px_rgba(139,111,26,0.16)]"
                  />
                )}

                <span
                  className={`relative z-10 ${
                    active ? "text-[#17372B]" : "text-[#49675B]"
                  }`}
                >
                  {content[lang].button}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          key={language}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative mx-auto mt-24 max-w-6xl sm:mt-32"
          dir={isRtl ? "rtl" : "ltr"}
        >
          <div
            className="pointer-events-none absolute bottom-12 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A227]/45 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="space-y-14 lg:space-y-0">
            {current.cards.map((card, index) => (
              <StoryCard
                key={`${language}-${index}`}
                card={card}
                index={index}
                language={language}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto mt-24 max-w-4xl sm:mt-32"
        >
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#C9A227]/30 bg-[#17372B] px-7 py-12 text-center shadow-[0_25px_60px_rgba(23,55,43,0.16)] sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-[#C9A227]/10 sm:inset-5" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.05] blur-[55px]" />

            <div className="relative z-10">
              <Ornament />

              <p
                dir={isRtl ? "rtl" : "ltr"}
                className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#EAE0CC]/90 sm:text-base sm:leading-9"
              >
                {current.closing}
              </p>

              <div className="mt-8 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#C9A227]/70 sm:text-[10px]">
                Darbare e Ashrafi Betul
              </div>

              <div className="mx-auto mt-7 h-px w-28 bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
            </div>

            <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#C9A227] transition-all duration-1000 group-hover:w-2/3" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.6, scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease }}
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