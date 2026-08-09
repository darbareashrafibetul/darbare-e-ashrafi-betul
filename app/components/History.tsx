"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMosque,
  FaLanguage,
  FaLightbulb,
} from "react-icons/fa";

type Language = "urdu" | "hindi" | "english";

const historyContent = {
  urdu: {
    title: "مختصر تاریخ خانقاہ و چراغ شریف",
    paragraphs: [
      "حضرت محمد شیخ داؤد اشرفی صاحب کو چراغ شریف ایک روحانی سلسلے کے تحت عطا ہوا، جس کے بعد آپ نے بڑی محنت، مشقت اور تکالیف برداشت کرتے ہوئے اس فیضان کو عام کیا۔ ابتدا میں چراغ شریف محدود وقت کے لیے روشن ہوتا تھا، مگر رفتہ رفتہ اس کی برکتوں سے لوگوں کا ہجوم بڑھتا گیا اور یہ سلسلہ مسلسل جاری ہے۔",

      "بیتول میں جب لوگوں کی تعداد بہت زیادہ ہو گئی اور جگہ ناکافی پڑنے لگی تو سن 2005 میں حضرت شیخ صاحب نے ٹیکرا (گواہچی) میں نئی زمین حاصل کر کے خانقاہ کی بنیاد رکھی، جو آج اشرف نگر کے نام سے جانی جاتی ہے۔",

      "یہ خانقاہ آج ایک روحانی مرکز بن چکی ہے جہاں سے فیضانِ مخدومی عام ہو رہا ہے۔ یہاں آنے والے زائرین کو روحانی سکون، برکت اور فیض حاصل ہوتا ہے۔",

      "حضرت سید شاہ فخر الدین اشرف رحمۃ اللہ علیہ اور خاندانِ اشرفیہ کے دیگر بزرگانِ دین بھی یہاں تشریف لا چکے ہیں اور اپنے مبارک ہاتھوں سے چراغ شریف روشن فرمایا ہے، جس سے اس خانقاہ کی روحانی حیثیت مزید مستحکم ہوئی۔",

      "یہاں ہونے والے تمام اعمال شریعت کے مطابق ہیں، اور یہ خانقاہ خالصتاً دینِ اسلام اور فیضانِ مخدومی کی خدمت کے لیے قائم ہے۔",
    ],
  },

  hindi: {
    title: "खानकाह व चिराग शरीफ का संक्षिप्त इतिहास",
    paragraphs: [
      "हज़रत मुहम्मद शेख दाऊद अशरफ़ी साहब को चिराग शरीफ एक रूहानी सिलसिले के तहत अता हुआ, जिसके बाद आपने बड़ी मेहनत, मशक्कत और तकलीफ़ें सहन करते हुए इस फ़ैज़ान को आम किया। शुरुआत में चिराग शरीफ सीमित समय के लिए रोशन होता था, मगर धीरे-धीरे इसकी बरकतों से लोगों की भीड़ बढ़ती गई और यह सिलसिला लगातार जारी है।",

      "बैतूल में जब लोगों की संख्या बहुत अधिक हो गई और जगह कम पड़ने लगी तो सन 2005 में हज़रत शेख साहब ने टेकरा (गवाहची) में नई ज़मीन हासिल करके खानकाह की बुनियाद रखी, जो आज अशरफ़ नगर के नाम से जानी जाती है।",

      "यह खानकाह आज एक रूहानी केंद्र बन चुकी है, जहाँ से फ़ैज़ान-ए-मखदूमी आम हो रहा है। यहाँ आने वाले ज़ायरीन को रूहानी सुकून, बरकत और फ़ैज़ हासिल होता है।",

      "हज़रत सैयद शाह फ़ख़रुद्दीन अशरफ़ रहमतुल्लाहि अलैह और ख़ानदान-ए-अशरफ़िया के अन्य बुज़ुर्गाने दीन भी यहाँ तशरीफ़ ला चुके हैं और अपने मुबारक हाथों से चिराग शरीफ रोशन फ़रमाया है, जिससे इस खानकाह की रूहानी हैसियत और अधिक मज़बूत हुई।",

      "यहाँ होने वाले सभी आमाल शरीअत के अनुसार हैं, और यह खानकाह ख़ालिस तौर पर दीन-ए-इस्लाम और फ़ैज़ान-ए-मखदूमी की ख़िदमत के लिए क़ायम है।",
    ],
  },

  english: {
    title: "A Brief History of the Khanqah and Chiragh Sharif",
    paragraphs: [
      "Hazrat Muhammad Sheikh Dawood Ashrafi Sahib was bestowed with Chiragh Sharif through a spiritual lineage. Thereafter, he worked with great dedication, effort and endured many hardships while spreading this spiritual grace. In the beginning, Chiragh Sharif was illuminated for a limited period of time, but gradually, as people experienced its blessings, the number of visitors continued to increase, and this tradition has continued ever since.",

      "When the number of people in Betul became very large and the available space became insufficient, in the year 2005 Hazrat Sheikh Sahib acquired new land in Tekra (Gawahchi) and established the Khanqah there, which is known today as Ashraf Nagar.",

      "Today, this Khanqah has become a spiritual center from where Faizan-e-Makhdoomi is being spread. Visitors who come here receive spiritual peace, blessings and spiritual grace.",

      "Hazrat Syed Shah Fakhruddin Ashraf Rahmatullahi Alaih and other revered elders of the Ashrafia family have also visited this place and illuminated Chiragh Sharif with their blessed hands, further strengthening the spiritual significance of this Khanqah.",

      "All practices carried out here are according to Shariah, and this Khanqah has been established solely for the service of Islam and the spreading of Faizan-e-Makhdoomi.",
    ],
  },
};

export default function History() {
  const [language, setLanguage] = useState<Language>("urdu");

  const content = historyContent[language];

  return (
    <section
      id="history"
      className="relative overflow-hidden bg-gradient-to-b from-black via-green-950 to-black px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 shadow-lg">
              <FaMosque className="text-2xl text-yellow-300" />
            </div>
          </div>

          <h2
            dir={language === "urdu" ? "rtl" : "ltr"}
            className="text-4xl font-bold text-yellow-300 md:text-5xl"
          >
            {content.title}
          </h2>
        </motion.div>

        {/* Language Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-yellow-500/20 bg-white/5 p-2 shadow-xl backdrop-blur-xl"
        >
          <FaLanguage className="mx-2 text-xl text-yellow-300" />

          {[
            ["urdu", "اردو"],
            ["hindi", "हिंदी"],
            ["english", "English"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setLanguage(value as Language)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                language === value
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "text-gray-300 hover:bg-white/10 hover:text-yellow-300"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* History Content */}
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          dir={language === "urdu" ? "rtl" : "ltr"}
          className="mt-12 rounded-3xl border border-yellow-500/20 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:p-10"
        >
          {/* Small Label */}
          <div
            className={`mb-8 flex items-center gap-3 text-yellow-300 ${
              language === "urdu"
                ? "flex-row-reverse justify-end"
                : "justify-start"
            }`}
          >
            <FaLightbulb />
            <span className="text-sm font-semibold tracking-wide">
              {language === "urdu"
                ? "تاریخی معلومات"
                : language === "hindi"
                ? "ऐतिहासिक जानकारी"
                : "Historical Information"}
            </span>
          </div>

          {/* Paragraphs */}
          <div className="space-y-7">
            {content.paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="border-b border-yellow-500/10 pb-7 last:border-b-0 last:pb-0"
              >
                <p
                  className={`text-lg leading-9 text-gray-200 ${
                    language === "urdu"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-center text-sm text-gray-500"
        >
          {language === "urdu"
            ? "خدمتِ دین اور فیضانِ مخدومی"
            : language === "hindi"
            ? "दीन की सेवा और फ़ैज़ान-ए-मखदूमी"
            : "In the service of Islam and Faizan-e-Makhdoomi"}
        </motion.p>
      </div>
    </section>
  );
}