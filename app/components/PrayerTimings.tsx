"use client";

import { motion } from "framer-motion";
import {
  FaClock,
  FaSun,
  FaMoon,
  FaMosque,
  FaStarAndCrescent,
} from "react-icons/fa";

const timingCards = [
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

export default function PrayerTimings() {
  return (
    <section
      id="timings"
      className="relative overflow-hidden bg-gradient-to-b from-green-950 via-green-900 to-black px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10">
              <FaClock className="text-2xl text-yellow-300" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-yellow-300 md:text-5xl">
            Darbar Timings
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Visiting and Dua timings at Darbare e Ashrafi Betul.
          </p>
        </motion.div>

        {/* Timing Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {timingCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-yellow-500/20 bg-black/30 p-7 shadow-2xl backdrop-blur-sm transition duration-300 hover:border-yellow-400/40"
              >
                {/* Card Header */}
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10">
                    <Icon className="text-2xl text-yellow-300" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-yellow-300">
                      {card.title}
                    </h3>

                    <p className="text-sm text-green-200">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Timing Items */}
                <div className="space-y-4">
                  {card.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <FaMosque className="mt-1 shrink-0 text-yellow-300" />

                        <div>
                          <p className="font-semibold text-white">
                            {item.label}
                          </p>

                          <p className="mt-1 text-gray-300">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Friday Notice */}
                {card.note && (
                  <div className="mt-5 flex items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
                    <FaStarAndCrescent className="shrink-0 text-red-300" />

                    <p className="text-sm font-medium text-red-300">
                      {card.note}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-400">
            Please plan your visit according to the timings mentioned above.
          </p>
        </motion.div>
      </div>
    </section>
  );
}