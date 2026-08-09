"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Language = "en" | "hi" | "ur";

const content = {
  en: {
    button: "English",
    title: "About Darbare e Ashrafi Betul",
    verse: "And when I am ill, it is He who cures me.",
    paragraphs: [
      "Makhdoom Baba Dargah, Betul, is a special center for providing relief from people's worries, difficulties and troubles. Here, physical and spiritual treatment is carried out through the blessed Noorani Chiragh Sharif of Sarkar Makhdoom Ashraf Jahangir Simnani (Rahmatullahi Alaih).",

      "On 12 February 1997, Hazrat Syed Shah Fakhruddin Ashraf Ashrafi Al-Jilani (Rahmatullahi Alaih), the Sajjadah Nashin of the blessed shrine of Hazrat Makhdoom Ashraf Jahangir Simnani (Rahmatullahi Alaih), laid the foundation of this Khanqah Ashrafia Razakia. Since then, thousands of people have received Makhdoomi Faiz and have been blessed through it.",

      "It is the special grace of Hazrat Makhdoom Sultan Syed Ashraf Jahangir Simnani (Rahmatullahi Alaih) that, through the blessings of his Chiragh Sharif, every troubled person comes to this Khanqah, finds relief from their difficulties, and returns home happily.",

      "Collective marriage conferences are also organized through this Khanqah, including Makhdoom Baba Dargah, and several free marriages have been conducted with the support of the Khanqah.",

      "In addition, on the occasion of the Urs of Sarkar, Fatiha, Ziyarat, blessings and Tabarrukat are offered, and religious, social and cultural programs are also organized from time to time.",
    ],
  },

  hi: {
    button: "हिंदी",
    title: "दरबारे अशरफी बैतूल के बारे में",
    verse: "और जब मैं बीमार होता हूँ, तो वही मुझे शिफ़ा देता है।",
    paragraphs: [
      "मखदूम बाबा दरगाह, बैतूल, लोगों की परेशानियों, कठिनाइयों और समस्याओं से राहत प्रदान करने का एक विशेष केंद्र है। यहाँ सरकार मखदूम अशरफ जहांगीर सिमनानी (रहमतुल्लाहि अलैह) के मुबारक नूरानी चिराग शरीफ की बरकत से शारीरिक और रूहानी उपचार किया जाता है।",

      "12 फरवरी 1997 को हज़रत सैयद शाह फखरुद्दीन अशरफ अशरफी अल-जिलानी (रहमतुल्लाहि अलैह), जो हज़रत मखदूम अशरफ जहांगीर सिमनानी (रहमतुल्लाहि अलैह) की मुबारक दरगाह के सज्जादानशीन थे, ने इस खानकाह अशरफिया रज़ाकिया की बुनियाद रखी। तब से अब तक हजारों लोगों ने यहाँ से मखदूमी फैज़ हासिल किया और बरकतों से नवाज़े गए।",

      "यह हज़रत मखदूम सुल्तान सैयद अशरफ जहांगीर सिमनानी (रहमतुल्लाहि अलैह) का विशेष करम है कि उनके चिराग शरीफ की बरकत से हर परेशान व्यक्ति इस खानकाह में आता है, अपनी परेशानियों से राहत पाता है और खुश होकर अपने घर लौटता है।",

      "इस खानकाह के माध्यम से सामूहिक विवाह सम्मेलन भी आयोजित किए जाते हैं। मखदूम बाबा दरगाह के सहयोग से कई जरूरतमंद लोगों के निःशुल्क विवाह भी संपन्न कराए गए हैं।",

      "इसके अलावा सरकार के उर्स के अवसर पर फातिहा, ज़ियारत, बरकत और तबarrुकात पेश किए जाते हैं। समय-समय पर धार्मिक, सामाजिक और सांस्कृतिक कार्यक्रमों का भी आयोजन किया जाता है।",
    ],
  },

  ur: {
    button: "اردو",
    title: "دربارِ اشرفی بیتول کے بارے میں",
    verse: "اور جب میں بیمار ہوتا ہوں تو وہی مجھے شفا دیتا ہے۔",
    paragraphs: [
      "مخدوم بابا درگاہ، بیتول، لوگوں کی پریشانیوں، مشکلات اور مصیبتوں سے راحت فراہم کرنے کا ایک خصوصی مرکز ہے۔ یہاں سرکار مخدوم اشرف جہاں گیر سمنانی رحمۃ اللہ علیہ کے مبارک نورانی چراغ شریف کی برکت سے جسمانی اور روحانی علاج کیا جاتا ہے۔",

      "12 فروری 1997 کو حضرت سید شاہ فخرالدین اشرف اشرفی الجیلانی رحمۃ اللہ علیہ، جو حضرت مخدوم اشرف جہاں گیر سمنانی رحمۃ اللہ علیہ کی مبارک درگاہ کے سجادہ نشین تھے، نے اس خانقاہ اشرفیہ رضاکیہ کی بنیاد رکھی۔ اس کے بعد سے ہزاروں لوگوں نے یہاں سے مخدومی فیض حاصل کیا اور برکتوں سے نوازے گئے۔",

      "یہ حضرت مخدوم سلطان سید اشرف جہاں گیر سمنانی رحمۃ اللہ علیہ کا خصوصی کرم ہے کہ ان کے چراغ شریف کی برکت سے ہر پریشان حال شخص اس خانقاہ میں آتا ہے، اپنی مشکلات سے راحت پاتا ہے اور خوشی خوشی اپنے گھر واپس جاتا ہے۔",

      "اس خانقاہ کے ذریعے اجتماعی شادی کانفرنسیں بھی منعقد کی جاتی ہیں۔ مخدوم بابا درگاہ کے تعاون سے کئی ضرورت مند افراد کی مفت شادیاں بھی انجام دی گئی ہیں۔",

      "اس کے علاوہ سرکار کے عرس کے موقع پر فاتحہ، زیارت، برکات اور تبرکات پیش کیے جاتے ہیں، جبکہ وقتاً فوقتاً مذہبی، سماجی اور ثقافتی پروگرام بھی منعقد کیے جاتے ہیں۔",
    ],
  },
};

export default function About() {
  const [language, setLanguage] = useState<Language>("en");

  const current = content[language];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black via-green-950 to-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 text-2xl text-yellow-400">
            {current.verse}
          </p>

          <h2 className="text-4xl font-bold text-yellow-300 md:text-5xl">
            {current.title}
          </h2>
        </motion.div>

        {/* Language Selector */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {(["en", "hi", "ur"] as Language[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                language === lang
                  ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20"
                  : "border border-yellow-500/40 bg-black/30 text-yellow-300 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {content[lang].button}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mt-12 rounded-3xl border border-yellow-500/20 bg-black/30 p-6 shadow-2xl backdrop-blur-sm md:p-10 ${
            language === "ur" || language === "hi"
              ? "text-right"
              : "text-left"
          }`}
          dir={language === "ur" ? "rtl" : "ltr"}
        >
          <div className="space-y-7">
            {current.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-gray-200 md:text-lg md:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}